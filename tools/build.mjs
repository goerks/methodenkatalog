// Liest methoden/<kategorie>/<id>.md, prüft die Einträge und schreibt data/catalog.js.
// Aufruf: node tools/build.mjs
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const KAT = { ermitteln: 'erm', dokumentieren: 'dok', modellieren: 'mod', priorisieren: 'prio', planen: 'plan', absichern: 'qs' };
const KAT_ORDER = Object.keys(KAT);
const VORGEHEN = ['klassisch', 'agil', 'beide'];
const PHASEN = ['verstehen', 'ermitteln', 'spezifizieren', 'bewerten', 'planen', 'absichern'];
const ARTEN = { vorher: 'vorher', danach: 'danach', ergaenzt: 'ergaenzt', 'ergänzt': 'ergaenzt', alternative: 'alternative' };
const STATUS = ['entwurf', 'geprueft', 'veroeffentlicht'];
const LINKS_MIN = 3, LINKS_MAX = 7;

const errors = [], warnings = [];
const err = (id, msg) => errors.push(`${id}: ${msg}`);

function parseFile(file, folder) {
  const id = basename(file, '.md');
  const raw = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!fm) { err(id, 'Front Matter fehlt (--- ... ---)'); return null; }
  const meta = {};
  for (const line of fm[1].split('\n')) {
    const i = line.indexOf(':');
    if (i < 0) continue;
    meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  const parts = fm[2].split(/^## /m);
  const intro = parts.shift().trim();
  const sec = {};
  for (const p of parts) {
    const nl = p.indexOf('\n');
    sec[(nl < 0 ? p : p.slice(0, nl)).trim()] = nl < 0 ? '' : p.slice(nl + 1).trim();
  }
  const beispielKey = Object.keys(sec).find(k => k.startsWith('Beispiel'));
  const lines = key => (sec[key] || '').split('\n');

  const m = {
    id, n: meta.name, c: KAT[meta.kategorie], m: meta.vorgehen, ph: meta.phase, t: meta.typ,
    k: intro, aufwand: meta.aufwand,
    ab: lines('Ablauf').map(l => l.match(/^\d+\.\s+(.*)/)).filter(Boolean).map(x => x[1]),
    re: lines('Regeln').map(l => l.match(/^-\s+(.*)/)).filter(Boolean).map(x => x[1]),
    bsp: beispielKey ? { t: beispielKey.replace(/^Beispiel:?\s*/, '') || 'Beispiel', x: sec[beispielKey] } : null,
    li: [],
    tools: (meta.werkzeuge || '').replace(/^\[|\]$/g, '').split(',').map(s => s.trim()).filter(Boolean),
    s: meta.status || 'entwurf',
    o: Number(meta.reihenfolge) || 999
  };
  if (meta.grafik) m.vis = meta.grafik;

  for (const l of lines('Verknüpfungen')) {
    const x = l.match(/^-\s+([\wäöü]+):\s+\[\[([^\]]+)\]\]\s*(.*)/);
    if (!x) { if (l.trim()) err(id, `Verknüpfung nicht lesbar: «${l}»`); continue; }
    const art = ARTEN[x[1]];
    if (!art) err(id, `Unbekannte Art «${x[1]}»`); else m.li.push([x[2], art, x[3].trim()]);
  }

  if (!meta.name) err(id, 'name fehlt');
  if (!KAT[meta.kategorie]) err(id, `kategorie «${meta.kategorie}» unbekannt`);
  else if (meta.kategorie !== folder) err(id, `liegt im Ordner «${folder}», kategorie ist «${meta.kategorie}»`);
  if (!VORGEHEN.includes(m.m)) err(id, `vorgehen «${m.m}» unbekannt`);
  if (!PHASEN.includes(m.ph)) err(id, `phase «${m.ph}» unbekannt`);
  if (!STATUS.includes(m.s)) err(id, `status «${m.s}» unbekannt`);
  for (const f of ['typ', 'aufwand']) if (!meta[f]) err(id, `${f} fehlt`);
  if (!intro) err(id, 'Einleitungstext fehlt');
  if (!m.ab.length) err(id, 'Abschnitt «Ablauf» fehlt oder leer');
  if (!m.re.length) err(id, 'Abschnitt «Regeln» fehlt oder leer');
  if (!m.bsp || !m.bsp.x) err(id, 'Abschnitt «Beispiel» fehlt oder leer');
  return m;
}

const all = [];
for (const folder of readdirSync(join(ROOT, 'methoden'))) {
  const dir = join(ROOT, 'methoden', folder);
  if (!statSync(dir).isDirectory()) continue;
  if (!KAT[folder]) { err(folder, 'Ordner ist keine bekannte Kategorie'); continue; }
  for (const f of readdirSync(dir).filter(f => f.endsWith('.md'))) {
    const m = parseFile(join(dir, f), folder);
    if (m) all.push(m);
  }
}

const ids = new Map();
for (const m of all) { if (ids.has(m.id)) err(m.id, 'ID kommt doppelt vor'); ids.set(m.id, m); }
const incoming = new Map();
for (const m of all) {
  if (m.li.length < LINKS_MIN || m.li.length > LINKS_MAX) err(m.id, `${m.li.length} Verknüpfungen, erlaubt sind ${LINKS_MIN} bis ${LINKS_MAX}`);
  for (const [to] of m.li) {
    if (!ids.has(to)) err(m.id, `Verknüpfung zu unbekannter Methode «${to}»`);
    else if (to === m.id) err(m.id, 'Verknüpfung auf sich selbst');
    else incoming.set(to, (incoming.get(to) || 0) + 1);
  }
}
for (const m of all) if (!incoming.has(m.id)) err(m.id, 'Keine andere Methode verweist auf diese');

if (errors.length) {
  console.error(`\n${errors.length} Fehler:\n- ` + errors.join('\n- '));
  process.exit(1);
}

all.sort((a, b) => KAT_ORDER.indexOf(Object.keys(KAT).find(k => KAT[k] === a.c)) - KAT_ORDER.indexOf(Object.keys(KAT).find(k => KAT[k] === b.c)) || a.o - b.o || a.n.localeCompare(b.n, 'de'));
for (const m of all) delete m.o;
writeFileSync(join(ROOT, 'data', 'catalog.js'),
  '// Erzeugt von tools/build.mjs aus methoden/*/*.md. Nicht von Hand bearbeiten.\nconst M = ' + JSON.stringify(all, null, 1) + ';\n');
console.log(`${all.length} Methoden geschrieben (${all.filter(m => m.s === 'entwurf').length} Entwurf).`);

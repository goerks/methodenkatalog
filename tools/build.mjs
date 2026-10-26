// Liest methoden/<kategorie>/<id>.md, prüft die Einträge und schreibt data/catalog.js.
// Aufruf: node tools/build.mjs
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const KAT = { ermitteln: 'erm', dokumentieren: 'dok', modellieren: 'mod', priorisieren: 'prio', planen: 'plan', absichern: 'qs', werkzeuge: 'tool' };
const KAT_ORDER = Object.keys(KAT);
const VORGEHEN = ['klassisch', 'agil', 'beide'];
const PHASEN = ['verstehen', 'ermitteln', 'spezifizieren', 'bewerten', 'planen', 'absichern'];
const FORMEN = ['methode', 'artefakt', 'modell', 'meeting', 'werkzeug'];
const ARTEN = { vorher: 'vorher', danach: 'danach', ergaenzt: 'ergaenzt', 'ergänzt': 'ergaenzt', alternative: 'alternative' };
const STATUS = ['entwurf', 'geprueft', 'veroeffentlicht'];
const LINKS_MIN = 3, LINKS_MAX = 7, TOOL_MIN = 2, KT_MAX = 105, KS_MAX = 38, GW_MAX = 60, VK_MAX = 44, BN_MAX = 78;

const errors = [];
const err = (id, msg) => errors.push(`${id}: ${msg}`);

function parseFile(file, folder) {
  const id = basename(file, '.md');
  const isTool = folder === 'werkzeuge';
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
  const numbered = key => lines(key).map(l => l.match(/^\d+\.\s+(.*)/)).filter(Boolean).map(x => x[1]);
  const bullets = key => lines(key).map(l => l.match(/^-\s+(.*)/)).filter(Boolean).map(x => x[1]);

  const prose = key => (sec[key] || '').trim();
  const kline = key => { const r = ((sec['Karte'] || '').match(new RegExp('^' + key + ':\\s*(.*)$', 'm')) || [])[1]; return r ? r.split('|').map(x => x.trim()).filter(Boolean) : []; };
  const ioItems = key => bullets(key).map(s => { const x = s.match(/^(.*?)\s*>>\s*\[\[([^\]]+)\]\]\s*(.*)$/); return x ? { t: x[1].trim(), to: x[2], v: x[3].trim() } : { t: s }; });
  const m = {
    id, n: meta.name, c: KAT[meta.kategorie], f: meta.form, m: meta.vorgehen, ph: isTool ? 'alle' : meta.phase, t: meta.typ,
    kz: meta.kurz || '', k: intro, aufwand: meta.aufwand || '',
    ab: isTool ? bullets('Einsatz') : numbered('Ablauf'),
    re: isTool ? bullets('Grenzen') : bullets('Regeln'),
    bsp: beispielKey ? { t: beispielKey.replace(/^Beispiel:?\s*/, '') || 'Beispiel', x: sec[beispielKey] } : null,
    zw: prose('Wofür'), wa: bullets('Wann sinnvoll'), wn: bullets('Wann besser nicht'), vb: bullets('Vorbereitung'),
    nr: meta.karte || '', kt: ((sec['Karte'] || '').match(/^Teaser:\s*(.*)$/m) || [])[1] || '', ks: bullets('Karte'),
    gw: kline('Gut wenn'), vk: kline('Vorher'), bn: (kline('Besser nicht')[0] || ''),
    pr: prose('In der Praxis'), em: prose('Empfehlung'), qu: bullets('Quellen'),
    io: isTool ? null : { lf: bullets('Lieferanten'), in: ioItems('Eingaben'), out: ioItems('Ergebnisse'), ko: bullets('Konsumenten') },
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
  if (!FORMEN.includes(m.f)) err(id, `form «${m.f}» unbekannt (${FORMEN.join(', ')})`);
  else if (isTool !== (m.f === 'werkzeug')) err(id, isTool ? 'Werkzeuge haben form: werkzeug' : 'form: werkzeug ist nur im Ordner werkzeuge erlaubt');
  if (!VORGEHEN.includes(m.m)) err(id, `vorgehen «${m.m}» unbekannt`);
  if (!isTool && !PHASEN.includes(m.ph)) err(id, `phase «${m.ph}» unbekannt`);
  if (!STATUS.includes(m.s)) err(id, `status «${m.s}» unbekannt`);
  if (!meta.typ) err(id, 'typ fehlt');
  if (!intro) err(id, 'Einleitungstext fehlt');
  const PL = { verstehen: 'V', ermitteln: 'E', spezifizieren: 'S', bewerten: 'B', planen: 'P', absichern: 'A' };
  const want = isTool ? 'W' : PL[m.ph];
  if (!new RegExp(`^${want || 'X'}-\\d{2}$`).test(m.nr)) err(id, `karte (Kartennummer) fehlt oder passt nicht, erwartet ${want}-NN`);
  if (!m.kt) err(id, 'Abschnitt «Karte» braucht eine Zeile «Teaser: …»');
  else if (m.kt.length > KT_MAX) err(id, `Kartenteaser hat ${m.kt.length} Zeichen, erlaubt sind ${KT_MAX}`);
  if (m.ks.length < 3 || m.ks.length > 5) err(id, `Abschnitt «Karte» braucht 3 bis 5 Kurzschritte, hat ${m.ks.length}`);
  for (const x of m.ks) if (x.length > KS_MAX) err(id, `Kurzschritt «${x}» hat ${x.length} Zeichen, erlaubt sind ${KS_MAX}`);
  if (m.gw.length !== 2) err(id, 'Abschnitt «Karte» braucht «Gut wenn: A | B» mit 2 Punkten');
  if (!isTool && m.vk.length !== 2) err(id, 'Abschnitt «Karte» braucht «Vorher: A | B» mit 2 Punkten');
  if (!m.bn) err(id, 'Abschnitt «Karte» braucht «Besser nicht: …»');
  for (const x of m.gw) if (x.length > GW_MAX) err(id, `«Gut wenn» hat ${x.length} Zeichen, erlaubt sind ${GW_MAX}: ${x}`);
  for (const x of m.vk) if (x.length > VK_MAX) err(id, `«Vorher» hat ${x.length} Zeichen, erlaubt sind ${VK_MAX}: ${x}`);
  if (m.bn.length > BN_MAX) err(id, `«Besser nicht» hat ${m.bn.length} Zeichen, erlaubt sind ${BN_MAX}`);
  if (!m.zw) err(id, 'Abschnitt «Wofür» fehlt');
  if (m.wa.length < 2) err(id, 'Abschnitt «Wann sinnvoll» braucht mindestens 2 Punkte');
  if (!m.wn.length) err(id, 'Abschnitt «Wann besser nicht» fehlt');
  if (!m.qu.length) err(id, 'Abschnitt «Quellen» fehlt');
  if (isTool) {
    if (!m.ab.length) err(id, 'Abschnitt «Einsatz» fehlt oder leer');
    if (!m.re.length) err(id, 'Abschnitt «Grenzen» fehlt oder leer');
    if (m.li.length) err(id, 'Werkzeuge haben keine eigenen Verknüpfungen, sie ergeben sich aus dem Feld werkzeuge der Methoden');
  } else {
    if (!meta.aufwand) err(id, 'aufwand fehlt');
    if (!m.ab.length) err(id, 'Abschnitt «Ablauf» fehlt oder leer');
    if (!m.re.length) err(id, 'Abschnitt «Regeln» fehlt oder leer');
    if (!m.bsp || !m.bsp.x) err(id, 'Abschnitt «Beispiel» fehlt oder leer');
    if (!m.vb.length) err(id, 'Abschnitt «Vorbereitung» fehlt');
    if (!m.pr) err(id, 'Abschnitt «In der Praxis» fehlt');
    if (!m.em) err(id, 'Abschnitt «Empfehlung» fehlt');
    if (!m.io.in.length || !m.io.out.length || !m.io.lf.length || !m.io.ko.length) err(id, 'Lieferanten, Eingaben, Ergebnisse und Konsumenten brauchen je mindestens einen Punkt');
  }
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
const methods = all.filter(m => m.f !== 'werkzeug'), tools = all.filter(m => m.f === 'werkzeug');
for (const m of methods) {
  if (m.li.length < LINKS_MIN || m.li.length > LINKS_MAX) err(m.id, `${m.li.length} Verknüpfungen, erlaubt sind ${LINKS_MIN} bis ${LINKS_MAX}`);
  for (const x of [...m.io.in, ...m.io.out]) if (x.to) { if (!ids.has(x.to)) err(m.id, `Eingabe/Ergebnis verweist auf unbekannte Methode «${x.to}»`); else if (x.to === m.id || ids.get(x.to).f === 'werkzeug') err(m.id, `Eingabe/Ergebnis «${x.t}» verweist auf sich selbst oder ein Werkzeug`); }
  for (const [to] of m.li) {
    if (!ids.has(to)) err(m.id, `Verknüpfung zu unbekannter Methode «${to}»`);
    else if (to === m.id) err(m.id, 'Verknüpfung auf sich selbst');
    else if (ids.get(to).f === 'werkzeug') err(m.id, `«${to}» ist ein Werkzeug, Werkzeuge werden über das Feld werkzeuge verbunden`);
  }
}
// Werkzeuge: Zuordnung über den Namen im Feld werkzeuge der Methoden
const norm = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');
for (const t of tools) {
  t.sp = methods.filter(m => m.tools.some(x => norm(x) === norm(t.n))).map(m => m.id);
  if (t.sp.length < TOOL_MIN) err(t.id, `unterstützt nur ${t.sp.length} Methoden, mindestens ${TOOL_MIN} nötig (Name im Feld werkzeuge der Methoden eintragen)`);
}

if (errors.length) {
  console.error(`\n${errors.length} Fehler:\n- ` + errors.join('\n- '));
  process.exit(1);
}

const nrs = new Map();
for (const m of all) { if (nrs.has(m.nr)) err(m.id, `Kartennummer ${m.nr} ist schon vergeben an ${nrs.get(m.nr)}`); nrs.set(m.nr, m.id); }
const sets = JSON.parse(readFileSync(join(ROOT, 'methoden', 'sets.json'), 'utf8'));
for (const s of sets) for (const id of s.s) if (!ids.has(id)) err('sets.json', `Set «${s.n}» enthält unbekannte ID «${id}»`);
if (errors.length) { console.error(`\n${errors.length} Fehler:\n- ` + errors.join('\n- ')); process.exit(1); }
const ki = m => KAT_ORDER.indexOf(Object.keys(KAT).find(k => KAT[k] === m.c));
all.sort((a, b) => ki(a) - ki(b) || a.o - b.o || a.n.localeCompare(b.n, 'de'));
for (const m of all) delete m.o;
writeFileSync(join(ROOT, 'data', 'catalog.js'),
  '// Erzeugt von tools/build.mjs aus methoden/*/*.md und methoden/sets.json. Nicht von Hand bearbeiten.\nconst M = ' + JSON.stringify(all, null, 1) + ';\nconst SETS = ' + JSON.stringify(sets) + ';\n');
console.log(`${methods.length} Methoden und ${tools.length} Werkzeuge geschrieben (${all.filter(m => m.s === 'entwurf').length} Entwurf).`);

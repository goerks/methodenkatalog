// Modell: Begriffe, Beziehungen, Filter und Hilfsfunktionen. Kein Zugriff auf die Seite, nur Daten.
const PH = [
  {k:'verstehen', n:'Verstehen', d:'Kontext und Beteiligte'},
  {k:'ermitteln', n:'Ermitteln', d:'Bedarf erheben'},
  {k:'spezifizieren', n:'Spezifizieren', d:'Festhalten und modellieren'},
  {k:'bewerten', n:'Bewerten', d:'Priorisieren und schätzen'},
  {k:'planen', n:'Planen', d:'Backlog und Releases'},
  {k:'absichern', n:'Absichern', d:'Prüfen und steuern'}
];
const PHN = Object.fromEntries(PH.map(p => [p.k, p.n]));
const CATS = [
  {k:'erm', n:'Ermitteln und Verstehen', d:'Bedarf, Beteiligte und Kontext herausfinden'},
  {k:'dok', n:'Dokumentieren', d:'Anforderungen festhalten und testbar machen'},
  {k:'mod', n:'Modellieren', d:'Abläufe, Struktur und Verhalten grafisch darstellen'},
  {k:'prio', n:'Priorisieren und Schätzen', d:'Wichtiges zuerst, Aufwand realistisch einschätzen'},
  {k:'plan', n:'Planen und Steuern', d:'Backlog, Verfeinerung und Releases'},
  {k:'qs', n:'Absichern und Verwalten', d:'Prüfen, rückverfolgen, Änderungen steuern'},
  {k:'tool', n:'Werkzeuge', d:'Software, die Methoden unterstützt'}
];
const CAT = Object.fromEntries(CATS.map(c => [c.k, c]));
const FORMS = {methode:'Methode oder Technik', artefakt:'Artefakt oder Dokument', modell:'Modell oder Notation', meeting:'Meeting oder Workshop', werkzeug:'Werkzeug'};
const MODE = {klassisch:'Klassisch', agil:'Agil', beide:'Klassisch und agil'};
const REL = {vorher:'Davor', danach:'Danach', ergaenzt:'Ergänzt', alternative:'Alternative', werkzeuge:'Werkzeuge', unterstuetzt:'Unterstützt'};

const BY = Object.fromEntries(M.map(m => [m.id, m]));
const isTool = m => m.f === 'werkzeug';
const phk = m => isTool(m) ? 'werkzeug' : m.ph;
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const plain = s => s.replace(/-\n/g, '').replace(/\n/g, ' ');
const norm = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const TOOLBYNAME = Object.fromEntries(M.filter(isTool).map(t => [norm(t.n), t]));

// Beziehungen. Art: f führt zu (a vor b), e ergänzt, a Alternative, t Werkzeug unterstützt (a Werkzeug, b Methode)
const EDGES = [], PAIR = new Map(), PRIO = {f: 3, e: 2, a: 1, t: 0};
M.filter(m => !isTool(m)).forEach(m => m.li.forEach(([to, art, why]) => {
  let a = m.id, b = to, t = art === 'ergaenzt' ? 'e' : 'a';
  if (art === 'vorher') { a = to; b = m.id; t = 'f'; } else if (art === 'danach') t = 'f';
  const k = [a, b].sort().join('~');
  let e = PAIR.get(k);
  if (!e) { e = {a, b, t, why: {}}; PAIR.set(k, e); EDGES.push(e); }
  else if (PRIO[t] > PRIO[e.t]) { e.a = a; e.b = b; e.t = t; }
  e.why[m.id] = why;
}));
M.filter(isTool).forEach(t => t.sp.forEach(id => EDGES.push({a: t.id, b: id, t: 't', why: {}})));

// Nachbarn je Eintrag, gruppiert nach Art der Beziehung
const NB = Object.fromEntries(M.map(m => [m.id, {vorher: [], danach: [], ergaenzt: [], alternative: [], werkzeuge: [], unterstuetzt: []}]));
const reason = (e, who) => e.why[who] || Object.values(e.why)[0] || '';
EDGES.forEach(e => {
  const A = NB[e.a], B = NB[e.b];
  if (e.t === 'f') { A.danach.push([e.b, reason(e, e.a)]); B.vorher.push([e.a, reason(e, e.b)]); }
  else if (e.t === 'e') { A.ergaenzt.push([e.b, reason(e, e.a)]); B.ergaenzt.push([e.a, reason(e, e.b)]); }
  else if (e.t === 'a') { A.alternative.push([e.b, reason(e, e.a)]); B.alternative.push([e.a, reason(e, e.b)]); }
  else { A.unterstuetzt.push([e.b, '']); B.werkzeuge.push([e.a, '']); }
});
const DEG = Object.fromEntries(M.map(m => {
  const n = NB[m.id]; return [m.id, n.vorher.length + n.danach.length + n.ergaenzt.length + n.alternative.length + (n.werkzeuge.length + n.unterstuetzt.length) * .5];
}));

// Darstellung
const cc = m => `style="--cc:var(--p-${phk(m)});--cf:var(--pf-${phk(m)});--ct:var(--pt-${phk(m)})"`;
function formPath(form, cx, cy, r) {
  if (form === 'artefakt') { const s = r * .86; return `<rect x="${cx - s}" y="${cy - s}" width="${s * 2}" height="${s * 2}" rx="${s * .28}"`; }
  if (form === 'modell') { const s = r * 1.3; return `<path d="M${cx} ${cy - s}L${cx + s} ${cy}L${cx} ${cy + s}L${cx - s} ${cy}Z" stroke-linejoin="round"`; }
  if (form === 'meeting') { const s = r * 1.25; return `<path d="M${cx} ${cy - s}L${cx + s * .95} ${cy + s * .72}L${cx - s * .95} ${cy + s * .72}Z" stroke-linejoin="round"`; }
  if (form === 'werkzeug') { const s = r * 1.15; return `<path d="M${cx - s} ${cy}L${cx - s / 2} ${cy - s * .87}L${cx + s / 2} ${cy - s * .87}L${cx + s} ${cy}L${cx + s / 2} ${cy + s * .87}L${cx - s / 2} ${cy + s * .87}Z" stroke-linejoin="round"`; }
  return `<circle cx="${cx}" cy="${cy}" r="${r}"`;
}
const icon = (form, ph, size) => { const s = size || 16, c = s / 2; return `<svg class="ico" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" aria-hidden="true">${formPath(form, c, c, s * .34)} fill="var(--pf-${ph})" stroke="var(--p-${ph})" stroke-width="1.6"/></svg>`; };
const chip = (id, big) => { const m = BY[id]; return `<button class="chip${big ? ' big' : ''}" ${cc(m)} data-m="${id}">${icon(m.f, phk(m))}${esc(plain(m.n))}</button>`; };

// Filter, gemeinsam für Karte und Liste
const F = {q: '', cat: new Set(), ph: new Set(), form: new Set(), mode: 'alle'};
function pass(m) {
  if (F.q) { const t = (m.n + ' ' + m.k + ' ' + m.tools.join(' ') + ' ' + m.t).toLowerCase(); if (!t.includes(F.q.toLowerCase())) return false; }
  if (F.cat.size && !F.cat.has(m.c)) return false;
  if (F.ph.size && !F.ph.has(phk(m))) return false;
  if (F.form.size && !F.form.has(m.f)) return false;
  if (F.mode !== 'alle' && m.m !== F.mode && m.m !== 'beide') return false;
  return true;
}
const filtered = () => F.q || F.cat.size || F.ph.size || F.form.size || F.mode !== 'alle';

// Lernpfade
const PFADE = [
  {n:'Vom Interview zum Sprint', d:'Agiler Weg von den Menschen zum Sprintziel.', s:['stakeholder','interview','persona','user-stories','akzeptanzkriterien','planning-poker','product-backlog','sprint-planning']},
  {n:'Von der Idee zur Vision', d:'Lage verstehen, Ziel schärfen, Etappen planen.', s:['swot','business-model-canvas','produktvision','impact-mapping','user-stories','roadmap']},
  {n:'Klassisch spezifizieren', d:'Vom Kontext zum abgenommenen Pflichtenheft.', s:['kontextdiagramm','use-cases','aktivitaetsdiagramm','nfr','pflichtenheft','review','change-management']},
  {n:'Prozesse verstehen', d:'Von der Beobachtung zu Regeln und Tests.', s:['beobachtung','event-storming','aktivitaetsdiagramm','bpmn','geschaeftsregeln','akzeptanzkriterien']}
];
const START = [['Anforderungen sammeln','workshop'],['Anforderungen aufschreiben','user-stories'],['Ablauf zeichnen','aktivitaetsdiagramm'],['Prioritäten setzen','moscow'],['Aufwand schätzen','planning-poker'],['Backlog aufbauen','story-mapping']];

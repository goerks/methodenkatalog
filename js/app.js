const CATS = [
  {k:'erm', n:'Ermitteln und Verstehen', d:'Bedarf, Beteiligte und Kontext herausfinden'},
  {k:'dok', n:'Dokumentieren', d:'Anforderungen festhalten und testbar machen'},
  {k:'mod', n:'Modellieren', d:'Abläufe, Struktur und Verhalten grafisch darstellen'},
  {k:'prio', n:'Priorisieren und Schätzen', d:'Wichtiges zuerst, Aufwand realistisch einschätzen'},
  {k:'plan', n:'Planen und Steuern', d:'Backlog, Verfeinerung und Releases'},
  {k:'qs', n:'Absichern und Verwalten', d:'Prüfen, rückverfolgen, Änderungen steuern'}
];
const PHASES = [
  {k:'verstehen', n:'Verstehen', d:'Kontext und Beteiligte'},
  {k:'ermitteln', n:'Ermitteln', d:'Bedarf erheben'},
  {k:'spezifizieren', n:'Spezifizieren', d:'Festhalten und modellieren'},
  {k:'bewerten', n:'Bewerten', d:'Priorisieren und schätzen'},
  {k:'planen', n:'Planen', d:'Backlog und Releases'},
  {k:'absichern', n:'Absichern', d:'Prüfen und steuern'}
];
const REL = {vorher:'Davor', danach:'Danach', ergaenzt:'Ergänzt', alternative:'Alternative'};
const MODE = {klassisch:'Klassisch', agil:'Agil', beide:'Klassisch und agil'};
const BY = Object.fromEntries(M.map(m => [m.id, m]));
const CAT = Object.fromEntries(CATS.map(c => [c.k, c]));
const VIEWS = {kategorien:'Kategorien', landkarte:'Phasen-Landkarte', suche:'Alle Methoden'};
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const cc = m => `style="--cc:var(--c-${m.c})"`;

let view = 'kategorien', q = '', fCat = new Set(), fMode = 'alle', lastView = 'kategorien';
const main = document.getElementById('main'), tabs = document.getElementById('tabs'), qi = document.getElementById('q');

function readHash() {
  let h = ''; try { h = location.hash.slice(1); } catch (e) {}
  if (BY[h]) return {m: h};
  if (VIEWS[h]) return {v: h};
  return {};
}
function go(h) { try { location.hash = h; } catch (e) {} render(); }

function renderTabs() {
  tabs.innerHTML = Object.entries(VIEWS).map(([k, n]) =>
    `<button class="tab" role="tab" aria-selected="${view === k}" data-v="${k}">${n}</button>`).join('');
}
function legend() {
  return `<div class="legend">${CATS.map(c => `<span class="leg" style="--cc:var(--c-${c.k})"><i class="dot"></i>${c.n}</span>`).join('')}</div>`;
}
function matches(m) {
  const t = (m.n + ' ' + m.k + ' ' + m.tools.join(' ') + ' ' + m.t).toLowerCase();
  if (q && !t.includes(q.toLowerCase())) return false;
  if (fCat.size && !fCat.has(m.c)) return false;
  if (fMode !== 'alle' && m.m !== fMode && m.m !== 'beide') return false;
  return true;
}
const chipHtml = m => `<button class="chip" ${cc(m)} data-m="${m.id}">${esc(m.n)}<small>${esc(m.t)} · ${MODE[m.m]}</small></button>`;
const cardHtml = m => `<button class="card" ${cc(m)} data-m="${m.id}"><span class="tag">${esc(CAT[m.c].n)}</span><h3>${esc(m.n)}</h3><p>${esc(m.k)}</p><span class="tag">${MODE[m.m]} · ${esc(m.aufwand)}</span></button>`;

const START = [['Anforderungen sammeln','workshop'],['Anforderungen aufschreiben','user-stories'],['Ablauf zeichnen','aktivitaetsdiagramm'],['Prioritäten setzen','moscow'],['Aufwand schätzen','planning-poker'],['Backlog aufbauen','story-mapping']];
function vKategorien() {
  return `<div class="filters" style="padding-bottom:0"><div class="fg"><span class="lbl">Einstieg: Ich will</span>${START.map(s => `<button class="pill" data-m="${s[1]}">${s[0]}</button>`).join('')}</div></div>` + legend() + `<div class="cats">${CATS.map(c => {
    const ms = M.filter(m => m.c === c.k);
    return `<section class="cat" style="--cc:var(--c-${c.k})"><h2>${c.n}</h2><p class="sub">${c.d}</p><ul>${ms.map(m =>
      `<li><button class="row" data-m="${m.id}"><b>${esc(m.n)}</b><span class="tag">${m.m}</span></button></li>`).join('')}</ul></section>`;
  }).join('')}</div>`;
}
function vLandkarte() {
  return legend() + `<p class="lbl" style="margin:10px 0 0">Von links nach rechts durch ein Vorhaben</p><div class="mapwrap"><div class="map">${PHASES.map(p =>
    `<div class="col"><h3>${p.n}</h3><div class="d">${p.d}</div>${M.filter(m => m.ph === p.k).map(chipHtml).join('')}</div>`).join('')}</div></div>`;
}
function vSuche() {
  const res = M.filter(matches);
  return `<div class="filters">
    <div class="fg"><span class="lbl">Kategorie</span>${CATS.map(c => `<button class="pill" aria-pressed="${fCat.has(c.k)}" data-fc="${c.k}">${c.n}</button>`).join('')}</div>
    <div class="fg"><span class="lbl">Vorgehen</span>${['alle','klassisch','agil'].map(x => `<button class="pill" aria-pressed="${fMode === x}" data-fm="${x}">${x[0].toUpperCase() + x.slice(1)}</button>`).join('')}</div></div>
    <p class="lbl">${res.length} von ${M.length} Methoden</p>
    ${res.length ? `<div class="list">${res.map(cardHtml).join('')}</div>` : `<p class="empty">Keine Methode passt zu dieser Auswahl. Filter lockern oder Suchbegriff ändern.</p>`}`;
}
function vDetail(id) {
  const m = BY[id], c = CAT[m.c], ph = PHASES.find(p => p.k === m.ph);
  const groups = Object.keys(REL).map(r => ({r, items: m.li.filter(l => l[1] === r)})).filter(g => g.items.length);
  const vis = m.vis ? `<div class="vis" ${cc(m)}>${VIS[m.vis]()}</div>` : '';
  return `<div ${cc(m)}><button class="back" data-back>← ${VIEWS[lastView]}</button>
  <header class="dh"><span class="lbl" style="color:var(--cc)">${c.n}</span><h1>${esc(m.n)}</h1>
    <div class="meta"><span>Vorgehen: <b>${MODE[m.m]}</b></span><span>Phase: <b>${ph.n}</b></span><span>Aufwand: <b>${esc(m.aufwand)}</b></span><span>Typ: <b>${esc(m.t)}</b></span>${m.s === 'entwurf' ? '<span>Status: <b>Entwurf, fachlich noch nicht geprüft</b></span>' : ''}</div>
    <p class="lead">${esc(m.k)}</p></header>
  <div class="dg"><div>
    <section class="sec"><h2>Ablauf</h2><ol class="steps">${m.ab.map(s => `<li><span>${esc(s)}</span></li>`).join('')}</ol></section>
    <section class="sec"><h2>Regeln</h2><ul class="rules">${m.re.map(s => `<li>${esc(s)}</li>`).join('')}</ul></section>
    <section class="sec"><h2>Beispiel</h2>${vis}<div class="ex"><h3>${esc(m.bsp.t)}</h3><p>${esc(m.bsp.x)}</p></div></section>
  </div><aside>
    <section class="sec"><h2>Verknüpfte Methoden</h2><div class="rel">${groups.map(g =>
      `<div class="rg"><h3>${REL[g.r]}</h3>${g.items.map(l => { const t = BY[l[0]]; return `<button class="rl" ${cc(t)} data-m="${t.id}"><b>${esc(t.n)}</b><span>${esc(l[2])}</span></button>`; }).join('')}</div>`).join('')}</div></section>
    <section class="sec"><h2>Werkzeuge</h2><div class="tools">${m.tools.map(t => `<span>${esc(t)}</span>`).join('')}</div></section>
  </aside></div></div>`;
}

function render() {
  const h = readHash();
  if (h.v) view = h.v;
  const isD = !!h.m;
  document.getElementById('bar').hidden = isD;
  document.getElementById('intro').hidden = isD;
  renderTabs();
  if (isD) { main.innerHTML = vDetail(h.m); window.scrollTo(0, 0); return; }
  lastView = view;
  main.innerHTML = view === 'kategorien' ? vKategorien() : view === 'landkarte' ? vLandkarte() : vSuche();
}

document.addEventListener('click', e => {
  const t = e.target.closest('[data-m],[data-v],[data-fc],[data-fm],[data-back]');
  if (!t) return;
  if (t.dataset.m) go(t.dataset.m);
  else if (t.dataset.v) { view = t.dataset.v; go(view); }
  else if (t.dataset.fc) { fCat.has(t.dataset.fc) ? fCat.delete(t.dataset.fc) : fCat.add(t.dataset.fc); render(); }
  else if (t.dataset.fm) { fMode = t.dataset.fm; render(); }
  else if (t.hasAttribute('data-back')) go(lastView);
});
qi.addEventListener('input', () => { q = qi.value.trim(); if (view !== 'suche') { view = 'suche'; go('suche'); } else render(); });
window.addEventListener('hashchange', render);
render();

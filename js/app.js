// Ansichten und Navigation. Daten und Beziehungen kommen aus core.js, die Karte aus graph.js.
const VIEWS = {karte: 'Wissenslandkarte', kategorien: 'Kategorien', landkarte: 'Phasen', suche: 'Alle Methoden'};
let view = 'karte', lastView = 'karte', toolsOn = false, pathIdx = -1, panelId = null;
const main = document.getElementById('main'), tabs = document.getElementById('tabs'), qi = document.getElementById('q');
const NM = M.filter(m => !isTool(m)), TL = M.filter(isTool);

function readHash() {
  let h = ''; try { h = location.hash.slice(1); } catch (e) {}
  if (BY[h]) return {m: h};
  if (VIEWS[h]) return {v: h};
  return {};
}
function go(h) { try { location.hash = h; } catch (e) {} render(); }
const renderTabs = () => { tabs.innerHTML = Object.entries(VIEWS).map(([k, n]) => `<button class="tab" role="tab" aria-selected="${view === k}" data-v="${k}">${n}</button>`).join(''); };

function legend() {
  return `<div class="legend"><div class="lg"><span class="lbl">Farbe = Phase</span>${PH.map(p => `<span class="leg" style="--cc:var(--p-${p.k})"><i class="dot"></i>${p.n}</span>`).join('')}<span class="leg" style="--cc:var(--p-werkzeug)"><i class="dot"></i>Werkzeug</span></div>
  <div class="lg"><span class="lbl">Form = Typ</span>${['methode', 'artefakt', 'modell', 'meeting', 'werkzeug'].map(f => `<span class="leg">${icon(f, 'werkzeug', 18)}${FORMS[f]}</span>`).join('')}</div></div>`;
}
function filters(withCat) {
  const pill = (attr, val, on, txt) => `<button class="pill" aria-pressed="${on}" ${attr}="${val}">${txt}</button>`;
  return `<div class="filters">
    <div class="fg"><span class="lbl">Phase</span>${PH.map(p => pill('data-fp', p.k, F.ph.has(p.k), p.n)).join('')}</div>
    <div class="fg"><span class="lbl">Typ</span>${['methode', 'artefakt', 'modell', 'meeting'].map(f => pill('data-ff', f, F.form.has(f), FORMS[f].split(' ')[0])).join('')}</div>
    <div class="fg"><span class="lbl">Vorgehen</span>${['alle', 'klassisch', 'agil'].map(x => pill('data-fm', x, F.mode === x, x[0].toUpperCase() + x.slice(1))).join('')}</div>
    ${withCat ? `<div class="fg"><span class="lbl">Kategorie</span>${CATS.map(c => pill('data-fc', c.k, F.cat.has(c.k), c.n)).join('')}</div>` : ''}
    ${filtered() ? `<div class="fg"><button class="pill" data-reset>Filter zurücksetzen</button></div>` : ''}</div>`;
}
const cardHtml = m => `<button class="card" ${cc(m)} data-m="${m.id}"><span class="tag">${icon(m.f, phk(m), 16)}${esc(CAT[m.c].n)}</span><h3>${esc(plain(m.n))}</h3><p>${esc(m.k)}</p><span class="tag">${isTool(m) ? esc(m.t) : MODE[m.m] + ' · ' + esc(m.aufwand)}</span></button>`;

function vKarte() {
  const n = NM.filter(pass).length;
  return `<div class="filters" style="padding-bottom:0"><div class="fg"><span class="lbl">Ich will</span>${START.map(s => `<button class="pill" data-m="${s[1]}">${s[0]}</button>`).join('')}</div></div>
  ${filters(false)}
  <div class="mapbox"><div class="maptools"><button class="pill" aria-pressed="${toolsOn}" data-tools>Werkzeuge ${toolsOn ? 'ausblenden' : 'einblenden'}</button><span class="sp"></span>
    <button class="pill" data-z="in" aria-label="Vergrössern">+</button><button class="pill" data-z="out" aria-label="Verkleinern">−</button><button class="pill" data-z="fit">Einpassen</button><button class="pill" data-z="reset">Neu anordnen</button></div>
    <div class="mapgrid"><div id="graph" class="graph"></div><aside id="panel" class="panel"></aside></div>
    <p class="hint">${filtered() ? `${n} von ${NM.length} Methoden passen, die übrigen sind abgeblendet. ` : ''}Klick wählt eine Methode, Doppelklick öffnet sie, Ziehen verschiebt. Zoom mit Strg und Mausrad oder den Knöpfen.</p></div>
  ${legend()}
  <h2 class="h2">Lernpfade</h2><div class="paths">${PFADE.map((p, i) => `<div class="pcard"><h3>${esc(p.n)}</h3><p>${esc(p.d)}</p><ol>${p.s.map(id => `<li><button class="lk" data-m="${id}">${esc(plain(BY[id].n))}</button></li>`).join('')}</ol><button class="pill" data-path="${i}">Auf der Karte zeigen</button></div>`).join('')}</div>`;
}
function panelHtml(id) {
  if (!id) return `<p class="lbl">Auswahl</p><p class="empty">Eine Methode auf der Karte anklicken. Dann erscheinen hier Vorgänger, Nachfolger und Werkzeuge.</p>`;
  const m = BY[id], nb = NB[id];
  const groups = Object.keys(REL).filter(r => nb[r].length);
  return `<div ${cc(m)}><span class="tag">${icon(m.f, phk(m), 16)}${isTool(m) ? 'Werkzeug' : PHN[m.ph]} · ${FORMS[m.f].split(' ')[0]}</span><h3>${esc(plain(m.n))}</h3><p class="pk">${esc(m.k)}</p>
  <button class="pill act" data-m="${m.id}">Methode öffnen</button>
  ${groups.map(r => `<div class="rg"><h4>${REL[r]}</h4>${nb[r].map(x => chip(x[0])).join('')}</div>`).join('')}</div>`;
}
function mountKarte() {
  const g = document.getElementById('graph'); if (!g) return;
  const show = id => { panelId = id; document.getElementById('panel').innerHTML = panelHtml(id); };
  Graph.mount(g, {onSelect: show, onOpen: id => go(id)});
  Graph.setTools(toolsOn);
  if (panelId && BY[panelId] && (toolsOn || !isTool(BY[panelId]))) Graph.select(panelId); else panelId = null;
  show(panelId);
}
function vKategorien() {
  return filters(false) + legend() + `<div class="cats">${CATS.map(c => {
    const ms = M.filter(m => m.c === c.k && pass(m));
    if (!ms.length) return '';
    return `<section class="cat" style="--cc:var(--c-${c.k === 'tool' ? 'dok' : c.k})"><h2>${c.n}</h2><p class="sub">${c.d}</p><ul>${ms.map(m =>
      `<li><button class="row" ${cc(m)} data-m="${m.id}"><b>${icon(m.f, phk(m), 16)}${esc(plain(m.n))}</b><span class="tag">${isTool(m) ? 'Werkzeug' : m.m}</span></button></li>`).join('')}</ul></section>`;
  }).join('') || '<p class="empty">Keine Methode passt zu dieser Auswahl.</p>'}</div>`;
}
function vLandkarte() {
  return filters(false) + legend() + `<div class="mapwrap"><div class="map">${PH.map(p =>
    `<div class="col"><h3>${p.n}</h3><div class="d">${p.d}</div>${NM.filter(m => m.ph === p.k && pass(m)).map(m => chip(m.id)).join('')}</div>`).join('')}</div></div>`;
}
function vSuche() {
  const res = M.filter(pass);
  return filters(true) + `<p class="lbl">${res.length} von ${M.length} Einträgen</p>` +
    (res.length ? `<div class="list">${res.map(cardHtml).join('')}</div>` : `<p class="empty">Nichts passt zu dieser Auswahl. Filter lockern oder Suchbegriff ändern.</p>`);
}
function toolLink(name) { const t = TOOLBYNAME[norm(name)]; return t ? `<button class="tl" data-m="${t.id}">${esc(name)}</button>` : `<span>${esc(name)}</span>`; }
function pathStrip(m) {
  const nb = NB[m.id], side = (arr, lbl) => arr.length ? `<div class="ps">${arr.slice(0, 3).map(x => chip(x[0])).join('')}${arr.length > 3 ? `<small>+${arr.length - 3}</small>` : ''}</div>` : `<div class="ps none"><small>${lbl}</small></div>`;
  return `<div class="pstrip"><div><span class="lbl">Davor</span>${side(nb.vorher, 'Anfang')}</div><span class="arr">→</span><div class="now" ${cc(m)}><span class="lbl">Diese</span><b>${esc(plain(m.n))}</b></div><span class="arr">→</span><div><span class="lbl">Danach</span>${side(nb.danach, 'Ende')}</div></div>`;
}
function vDetail(id) {
  const m = BY[id], t = isTool(m), nb = NB[id];
  const vis = !t && m.vis && VIS[m.vis] ? `<div class="vis" ${cc(m)}>${VIS[m.vis]()}</div>` : '';
  const groups = Object.keys(REL).filter(r => nb[r].length);
  const meta = t ? `<span>Art: <b>${esc(m.t)}</b></span><span>Unterstützt: <b>${m.sp.length} Methoden</b></span>`
    : `<span>Vorgehen: <b>${MODE[m.m]}</b></span><span>Phase: <b>${PHN[m.ph]}</b></span><span>Typ: <b>${esc(m.t)}</b></span><span>Aufwand: <b>${esc(m.aufwand)}</b></span>`;
  return `<div ${cc(m)}><button class="back" data-back>← ${VIEWS[lastView]}</button>
  <header class="dh"><span class="lbl" style="color:var(--cc)">${icon(m.f, phk(m), 18)} ${t ? 'Werkzeug' : CAT[m.c].n + ' · ' + FORMS[m.f]}</span><h1>${esc(plain(m.n))}</h1>
    <div class="meta">${meta}${m.s === 'entwurf' ? '<span>Status: <b>Entwurf, fachlich noch nicht geprüft</b></span>' : ''}</div>
    <p class="lead">${esc(m.k)}</p>${t ? '' : pathStrip(m)}<button class="pill" data-show="${m.id}">Auf der Karte zeigen</button></header>
  <div class="dg"><div>
    <section class="sec"><h2>${t ? 'Einsatz' : 'Ablauf'}</h2>${t ? `<ul class="rules">${m.ab.map(s => `<li>${esc(s)}</li>`).join('')}</ul>` : `<ol class="steps">${m.ab.map(s => `<li><span>${esc(s)}</span></li>`).join('')}</ol>`}</section>
    <section class="sec"><h2>${t ? 'Grenzen' : 'Regeln'}</h2><ul class="rules">${m.re.map(s => `<li>${esc(s)}</li>`).join('')}</ul></section>
    ${m.bsp ? `<section class="sec"><h2>Beispiel</h2>${vis}<div class="ex"><h3>${esc(m.bsp.t)}</h3><p>${esc(m.bsp.x)}</p></div></section>` : ''}
  </div><aside>
    <section class="sec"><h2>${t ? 'Unterstützte Methoden' : 'Verknüpft'}</h2><div class="rel">${groups.map(r =>
      `<div class="rg"><h3>${REL[r]}</h3>${nb[r].map(([to, why]) => { const x = BY[to]; return `<button class="rl" ${cc(x)} data-m="${x.id}"><b>${icon(x.f, phk(x), 14)}${esc(plain(x.n))}</b>${why ? `<span>${esc(why)}</span>` : ''}</button>`; }).join('')}</div>`).join('') || '<p class="empty">Keine Verknüpfungen.</p>'}</div></section>
    ${t ? '' : `<section class="sec"><h2>Werkzeuge</h2><div class="tools">${m.tools.map(toolLink).join('') || '<span>keine genannt</span>'}</div></section>`}
  </aside></div></div>`;
}

function render() {
  const h = readHash();
  if (h.v) view = h.v;
  const isD = !!h.m;
  document.getElementById('bar').hidden = isD;
  document.getElementById('intro').hidden = isD;
  renderTabs();
  Graph.unmount();
  if (isD) { main.innerHTML = vDetail(h.m); window.scrollTo(0, 0); return; }
  lastView = view;
  main.innerHTML = view === 'karte' ? vKarte() : view === 'kategorien' ? vKategorien() : view === 'landkarte' ? vLandkarte() : vSuche();
  if (view === 'karte') mountKarte();
}
// Filter ändern: auf der Karte nur abblenden, sonst Ansicht neu zeichnen
function refilter() {
  if (view === 'karte' && !readHash().m) {
    const keep = panelId; main.innerHTML = vKarte(); mountKarte(); if (keep) Graph.select(keep);
  } else render();
}
const flip = (set, v) => set.has(v) ? set.delete(v) : set.add(v);
document.addEventListener('click', e => {
  const t = e.target.closest('[data-m],[data-v],[data-fc],[data-fp],[data-ff],[data-fm],[data-back],[data-reset],[data-tools],[data-z],[data-path],[data-show]');
  if (!t) return;
  const d = t.dataset;
  if (d.m) { if (e.target.closest('#panel') && !t.classList.contains('act')) { Graph.select(d.m); panelId = d.m; document.getElementById('panel').innerHTML = panelHtml(d.m); } else go(d.m); }
  else if (d.v) { view = d.v; go(view); }
  else if (d.fc) { flip(F.cat, d.fc); refilter(); }
  else if (d.fp) { flip(F.ph, d.fp); refilter(); }
  else if (d.ff) { flip(F.form, d.ff); refilter(); }
  else if (d.fm) { F.mode = d.fm; refilter(); }
  else if (t.hasAttribute('data-reset')) { F.q = ''; qi.value = ''; F.cat.clear(); F.ph.clear(); F.form.clear(); F.mode = 'alle'; refilter(); }
  else if (t.hasAttribute('data-tools')) { toolsOn = !toolsOn; const keep = panelId; main.innerHTML = vKarte(); mountKarte(); }
  else if (d.z) { ({in: Graph.zoomIn, out: Graph.zoomOut, fit: Graph.fit, reset: Graph.reset})[d.z](); }
  else if (d.path !== undefined) { Graph.setPath(PFADE[+d.path].s); const g = document.getElementById('graph'); if (g && g.scrollIntoView) g.scrollIntoView({block: 'center'}); }
  else if (d.show) { view = 'karte'; panelId = d.show; if (isTool(BY[panelId])) toolsOn = true; go('karte'); }
  else if (t.hasAttribute('data-back')) go(lastView);
});
qi.addEventListener('input', () => { F.q = qi.value.trim(); if (view === 'karte' && !readHash().m) refilter(); else { view = 'suche'; go('suche'); } });
window.addEventListener('hashchange', render);
render();

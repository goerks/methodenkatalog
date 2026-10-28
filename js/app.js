// Ansichten und Navigation. Daten und Beziehungen kommen aus core.js, die Karte aus graph.js.
const VIEWS = {karte: 'Wissenslandkarte', kategorien: 'Kategorien', landkarte: 'Phasen', suche: 'Alle Methoden', karten: 'Karten'};
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
const cardHtml = m => { const sn = F.q ? snippet(SR.get(m.id)) : null; return `<button class="card" ${cc(m)} data-m="${m.id}"><span class="tag">${icon(m.f, phk(m), 16)}${esc(CAT[m.c].n)}</span><h3>${F.q ? hl(plain(m.n)) : esc(plain(m.n))}</h3><p>${sn ? `<span class="found">${sn.n}:</span> ${sn.h}` : esc(m.k)}</p><span class="tag">${isTool(m) ? esc(m.t) : MODE[m.m] + ' · ' + esc(m.aufwand)}</span></button>`; };

function vKarte() {
  const n = NM.filter(pass).length;
  const nf = F.ph.size + F.form.size + (F.mode !== 'alle') + (F.q ? 1 : 0);
  return `<div class="mapbox"><div class="maptools"><button class="pill" aria-pressed="${toolsOn}" data-tools>Werkzeuge ${toolsOn ? 'ausblenden' : 'einblenden'}</button><span class="sp"></span>
    <button class="pill" data-z="in" aria-label="Vergrössern">+</button><button class="pill" data-z="out" aria-label="Verkleinern">−</button><button class="pill" data-z="fit">Einpassen</button><button class="pill" data-z="reset">Neu anordnen</button></div>
    <div class="mapgrid"><div id="graph" class="graph"></div><aside id="panel" class="panel"></aside></div>
    <p class="hint">${filtered() ? `${n} von ${NM.length} Methoden passen, die übrigen sind abgeblendet. ` : ''}Antippen wählt eine Methode, «Methode öffnen» im Feld daneben öffnet sie (Doppelklick geht auch), Ziehen verschiebt. Zoom mit Strg und Mausrad, den Knöpfen oder zwei Fingern.</p></div>
  <div class="fg start"><span class="lbl">Ich will</span>${START.map(s => `<button class="pill" data-m="${s[1]}">${s[0]}</button>`).join('')}</div>
  <details class="fdet"${filtered() ? ' open' : ''}><summary>Filter${nf ? ` (${nf} aktiv)` : ''} und Legende</summary>${filters(false)}${legend()}</details>
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
  if (F.q) res.sort((x, y) => SR.get(y.id).score - SR.get(x.id).score);
  return filters(true) + `<p class="lbl">${F.q ? `${res.length} Treffer für «${esc(F.q)}», beste zuerst` : `${res.length} von ${M.length} Einträgen`}</p>` +
    (res.length ? `<div class="list">${res.map(cardHtml).join('')}</div>` : `<p class="empty">Nichts passt zu dieser Auswahl. Filter lockern oder Suchbegriff ändern.</p>`);
}
function toolLink(name) { const t = TOOLBYNAME[norm(name)]; return t ? `<button class="tl" data-m="${t.id}">${esc(name)}</button>` : `<span>${esc(name)}</span>`; }
function pathStrip(m) {
  const nb = NB[m.id], side = (arr, lbl) => arr.length ? `<div class="ps">${arr.slice(0, 3).map(x => chip(x[0])).join('')}${arr.length > 3 ? `<small>+${arr.length - 3}</small>` : ''}</div>` : `<div class="ps none"><small>${lbl}</small></div>`;
  return `<div class="pstrip"><div><span class="lbl">Davor</span>${side(nb.vorher, 'Anfang')}</div><span class="arr">→</span><div class="now" ${cc(m)}><span class="lbl">Diese</span><b>${esc(plain(m.n))}</b></div><span class="arr">→</span><div><span class="lbl">Danach</span>${side(nb.danach, 'Ende')}</div></div>`;
}
let refVar = 'w';
const REFV = {w: 'Weg', a: 'Tabelle (SIPOC)', b: 'Artefaktfluss', c: 'Sätze'};
const ioChip = x => x.to ? chip(x.to) : '';
function refs(m) {
  const io = m.io, ul = a => `<ul>${a.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
  if (refVar === 'w') return pathStrip(m);
  if (refVar === 'a') {
    const col = (t, body, cls) => `<div class="sc ${cls || ''}"><h4>${t}</h4>${body}</div>`;
    const items = a => `<ul>${a.map(x => `<li>${esc(x.t)}${x.to ? `<div>${chip(x.to)}</div>` : ''}</li>`).join('')}</ul>`;
    return `<div class="sipoc">${col('Lieferanten', ul(io.lf))}${col('Eingaben', items(io.in))}${col('Methode', `<b>${esc(plain(m.n))}</b><small>${m.ab.length} Schritte</small>`, 'mid')}${col('Ergebnisse', items(io.out))}${col('Konsumenten', ul(io.ko))}</div>`;
  }
  if (refVar === 'b') {
    const row = (x, dir) => `<div class="fr ${dir}">${dir === 'in' ? (x.to ? chip(x.to) : '<span class="ext">extern</span>') : ''}<span class="fl"><i>${esc(x.t)}</i></span>${dir === 'out' ? (x.to ? chip(x.to) : '<span class="ext">extern</span>') : ''}</div>`;
    return `<div class="flow"><div class="fcol">${io.in.map(x => row(x, 'in')).join('')}</div><div class="fmid" ${cc(m)}><b>${esc(plain(m.n))}</b></div><div class="fcol">${io.out.map(x => row(x, 'out')).join('')}</div></div><p class="hint">Beschriftung = was weitergegeben wird. Ohne Methode daneben liefert oder nutzt es eine Rolle ausserhalb des Katalogs.</p>`;
  }
  const v = x => x.v || 'in Verbindung mit';
  return `<div class="sent"><h4>Diese Methode braucht</h4><ul>${io.in.map(x => `<li>${esc(x.t)}${x.to ? ` <span class="vb">${esc(v(x))}</span> ${chip(x.to)}` : ''}</li>`).join('')}</ul>
   <h4>Sie liefert</h4><ul>${io.out.map(x => `<li>${esc(x.t)}${x.to ? ` <span class="vb">${esc(v(x))}</span> ${chip(x.to)}` : ''}</li>`).join('')}</ul>
   <p class="who"><b>Geliefert von:</b> ${io.lf.map(esc).join(', ')}. <b>Genutzt von:</b> ${io.ko.map(esc).join(', ')}.</p></div>`;
}
function vDetail(id) {
  const m = BY[id], t = isTool(m), nb = NB[id];
  const vis = !t && m.vis && VIS[m.vis] ? `<div class="vis" ${cc(m)}>${VIS[m.vis]()}</div>` : (typeof KV !== 'undefined' && KV[m.id] ? `<div class="vis" ${cc(m)}>${KV[m.id]()}</div>` : '');
  const groups = Object.keys(REL).filter(r => nb[r].length);
  const li = a => `<ul class="rules">${a.map(s => `<li>${esc(s)}</li>`).join('')}</ul>`;
  const meta = t ? `<span>Art: <b>${esc(m.t)}</b></span><span>Unterstützt: <b>${m.sp.length} Methoden</b></span>`
    : `<span>Vorgehen: <b>${MODE[m.m]}</b></span><span>Phase: <b>${PHN[m.ph]}</b></span><span>Typ: <b>${esc(m.t)}</b></span><span>Aufwand: <b>${esc(m.aufwand)}</b></span>`;
  const sec = (h, b, cls) => `<section class="sec ${cls || ''}"><h2>${h}</h2>${b}</section>`;
  return `<div ${cc(m)}><button class="back" data-back>← ${VIEWS[lastView]}</button>
  <header class="dh"><span class="lbl" style="color:var(--cc)">${icon(m.f, phk(m), 18)} ${t ? 'Werkzeug' : CAT[m.c].n + ' · ' + FORMS[m.f]}</span><h1>${esc(plain(m.n))}</h1>
    <div class="meta">${meta}${m.s === 'entwurf' ? '<span>Status: <b>Entwurf, fachlich noch nicht geprüft</b></span>' : ''}</div>
    <p class="lead">${esc(m.k)}</p><button class="pill" data-show="${m.id}">Auf der Karte zeigen</button> <button class="pill" data-fs="${m.id}">Factsheet drucken (A4)</button>${m.nr ? ` <button class="pill" aria-pressed="${KS.sel.has(m.id)}" data-kadd="${m.id}">${KS.sel.has(m.id) ? '✓ In der Druckauswahl' : 'Karte zur Druckauswahl'}</button>` : ''}</header>
  <div class="dg"><div>
    ${sec('Wofür', `<p class="prose">${esc(m.zw)}</p>`)}
    <div class="two">${sec('Wann sinnvoll', li(m.wa), 'yes')}${sec('Wann besser nicht', li(m.wn), 'no')}</div>
    ${t ? '' : sec('Vorbereitung und Material', li(m.vb))}
    ${sec(t ? 'Einsatz' : 'Ablauf', t ? li(m.ab) : `<ol class="steps">${m.ab.map(s => `<li><span>${esc(s)}</span></li>`).join('')}</ol>`)}
    ${t ? '' : sec('In der Praxis', `<p class="prose">${esc(m.pr)}</p>`)}
    ${sec(t ? 'Grenzen' : 'Regeln', li(m.re))}
    ${m.bsp ? sec('Beispiel', `${vis}<div class="ex"><h3>${esc(m.bsp.t)}</h3><p>${esc(m.bsp.x)}</p></div>`) : ''}
    ${t ? '' : sec('Empfehlung', `<p class="prose">${esc(m.em)}</p>`)}
    ${t ? '' : `<section class="sec"><h2>Zusammenhänge</h2><div class="rv" role="group" aria-label="Darstellung der Referenzen"><span class="lbl">Darstellung</span>${Object.entries(REFV).map(([k, n]) => `<button class="pill" aria-pressed="${refVar === k}" data-rv="${k}">${n}</button>`).join('')}</div><div id="refs" class="refbox">${refs(m)}</div></section>`}
    ${sec('Quellen', `<ul class="src">${m.qu.map(q => `<li>${esc(q)}</li>`).join('')}</ul><p class="hint">Quellen sind anerkannte Fachliteratur und Standards. Titel und Jahr wurden stichprobenartig geprüft, Kapitel und Inhalte noch nicht. Vor einer Veröffentlichung bitte gegenlesen.</p>`)}
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
  document.getElementById('intro').classList.toggle('compact', view === 'karte');
  renderTabs();
  Graph.unmount();
  if (isD) { main.innerHTML = vDetail(h.m); window.scrollTo(0, 0); return; }
  lastView = view;
  main.innerHTML = view === 'karte' ? vKarte() : view === 'kategorien' ? vKategorien() : view === 'landkarte' ? vLandkarte() : view === 'karten' ? vKarten() : vSuche();
  if (view === 'karte') mountKarte();
  if (view === 'karten') ksScale();
}
// Filter ändern: auf der Karte nur abblenden, sonst Ansicht neu zeichnen
function refilter() {
  if (view === 'karte' && !readHash().m) {
    const keep = panelId; main.innerHTML = vKarte(); mountKarte(); if (keep) Graph.select(keep);
  } else render();
}
const flip = (set, v) => set.has(v) ? set.delete(v) : set.add(v);
document.addEventListener('click', e => {
  const t = e.target.closest('[data-m],[data-v],[data-fc],[data-fp],[data-ff],[data-fm],[data-back],[data-reset],[data-tools],[data-z],[data-path],[data-show],[data-rv],[data-fs]');
  if (!t) return;
  const d = t.dataset;
  if (d.m) { if (e.target.closest('#panel') && !t.classList.contains('act')) { Graph.select(d.m); panelId = d.m; document.getElementById('panel').innerHTML = panelHtml(d.m); } else go(d.m); }
  else if (d.v) { view = d.v; go(view); }
  else if (d.fc) { flip(F.cat, d.fc); refilter(); }
  else if (d.fp) { flip(F.ph, d.fp); refilter(); }
  else if (d.ff) { flip(F.form, d.ff); refilter(); }
  else if (d.fm) { F.mode = d.fm; refilter(); }
  else if (t.hasAttribute('data-reset')) { setQuery(''); qi.value = ''; F.cat.clear(); F.ph.clear(); F.form.clear(); F.mode = 'alle'; refilter(); }
  else if (t.hasAttribute('data-tools')) { toolsOn = !toolsOn; const keep = panelId; main.innerHTML = vKarte(); mountKarte(); }
  else if (d.z) { ({in: Graph.zoomIn, out: Graph.zoomOut, fit: Graph.fit, reset: Graph.reset})[d.z](); }
  else if (d.path !== undefined) { Graph.setPath(PFADE[+d.path].s); const g = document.getElementById('graph'); if (g && g.scrollIntoView) g.scrollIntoView({block: 'center'}); }
  else if (d.rv) { refVar = d.rv; const m = BY[readHash().m]; document.getElementById('refs').innerHTML = refs(m); document.querySelectorAll('[data-rv]').forEach(b => b.setAttribute('aria-pressed', b.dataset.rv === refVar)); }
  else if (d.fs) { ksPrint([{f: Factsheet.fit(BY[d.fs]), b: ''}]); }
  else if (d.show) { view = 'karte'; panelId = d.show; if (isTool(BY[panelId])) toolsOn = true; go('karte'); }
  else if (t.hasAttribute('data-back')) go(lastView);
});
const sug = document.getElementById('sug');
let sugI = -1, sugIds = [];
function closeSug() { sug.hidden = true; sugI = -1; qi.setAttribute('aria-expanded', 'false'); }
function openSug(res) {
  sugIds = res.slice(0, 8).map(x => x.id);
  if (!F.q) return closeSug();
  sug.innerHTML = sugIds.length ? sugIds.map((id, i) => { const m = BY[id], sn = snippet(SR.get(id)); return `<button class="sg" role="option" data-sg="${id}" aria-selected="${i === sugI}" ${cc(m)}>${icon(m.f, phk(m), 16)}<span><b>${hl(plain(m.n))}</b>${sn ? `<small>${esc(sn.n)}: ${sn.h}</small>` : `<small>${esc(CAT[m.c].n)}</small>`}</span></button>`; }).join('') + `<button class="sg all" data-sall>Alle ${res.length} Treffer anzeigen</button>` : `<p class="sg none">Nichts gefunden. Anderes Wort oder weniger Wörter versuchen.</p>`;
  sug.hidden = false; qi.setAttribute('aria-expanded', 'true');
}
function runSearch(open) {
  const res = setQuery(qi.value.trim()).map(x => x.m);
  const onMap = view === 'karte' && !readHash().m;
  if (onMap) refilter(); else if (view === 'suche' && !readHash().m) render();
  if (open) openSug(res);
}
qi.addEventListener('input', () => { sugI = -1; runSearch(true); });
qi.addEventListener('focus', () => { if (F.q) runSearch(true); });
qi.addEventListener('keydown', e => {
  const n = sugIds.length;
  if (e.key === 'ArrowDown' && n) { e.preventDefault(); sugI = (sugI + 1) % n; }
  else if (e.key === 'ArrowUp' && n) { e.preventDefault(); sugI = (sugI - 1 + n) % n; }
  else if (e.key === 'Enter') { e.preventDefault(); if (sugI >= 0 && sugIds[sugI]) { const id = sugIds[sugI]; closeSug(); go(id); } else if (F.q) { closeSug(); view = 'suche'; go('suche'); } return; }
  else if (e.key === 'Escape') { if (!sug.hidden) closeSug(); else { qi.value = ''; qi.blur(); runSearch(false); } return; }
  else return;
  sug.querySelectorAll('.sg[data-sg]').forEach((b, i) => b.setAttribute('aria-selected', i === sugI));
});
sug.addEventListener('mousedown', e => e.preventDefault());
document.addEventListener('click', e => {
  const t = e.target.closest('[data-sg],[data-sall]');
  if (t) { closeSug(); if (t.dataset.sg) go(t.dataset.sg); else { view = 'suche'; go('suche'); } }
  else if (!e.target.closest('.search')) closeSug();
});
document.addEventListener('keydown', e => {
  if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test((e.target.tagName || '')) && !e.ctrlKey && !e.metaKey) { e.preventDefault(); qi.focus(); qi.select(); }
});
window.addEventListener('hashchange', render);
render();

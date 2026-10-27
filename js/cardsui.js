// Ansicht «Karten»: Auswahl wie ein Warenkorb, Sets nach Situation, Bogenvorschau, Druck. Rendering der Karten selbst: cards.js.
const KS = {sel: new Set(), leg: true};
try { const o = JSON.parse(localStorage.getItem('mk-druck') || 'null'); if (o) { KS.sel = new Set((o.sel || []).filter(id => BY[id] && BY[id].nr)); KS.leg = o.leg !== false; } } catch (e) {}
const ksSave = () => { try { localStorage.setItem('mk-druck', JSON.stringify({sel: [...KS.sel], leg: KS.leg})); } catch (e) {} };
const ksSheets = () => Cards.pages([...KS.sel], KS.leg && KS.sel.size > 0);
const kcell = m => `<div class="ksel ${KS.sel.has(m.id) ? 'on' : ''}" ${cc(m)}><button class="kpick" data-kt="${m.id}" aria-pressed="${KS.sel.has(m.id)}" aria-label="${esc(plain(m.n))}: ${KS.sel.has(m.id) ? 'aus Auswahl entfernen' : 'zur Auswahl hinzufügen'}">${Cards.front(m)}<span class="kchk" aria-hidden="true">${KS.sel.has(m.id) ? '✓' : '+'}</span></button><a class="klink" href="#${m.id}" data-m="${m.id}">Details</a></div>`;
function ksSummary() {
  const n = KS.sel.size, sh = n ? ksSheets().length : 0;
  return `<div class="ksum" role="status"><b>${n} ${n === 1 ? 'Karte' : 'Karten'}</b><span>${n ? `${KS.leg ? '+ Legendenkarte · ' : ''}${sh} ${sh === 1 ? 'Bogen' : 'Bögen'} A4 quer = ${sh * 2} Seiten` : 'Tippe Karten an oder wähle ein Set.'}</span><span class="sp"></span>
    <button class="pill" data-kprint ${n ? '' : 'disabled'}>Drucken / PDF</button><button class="pill" data-kclear ${n ? '' : 'disabled'}>Leeren</button></div>`;
}
function ksPreview() {
  if (!KS.sel.size) return '';
  const pg = ksSheets(), mk = (h, t) => `<figure class="pvf"><div class="pv"><div class="pvin">${h}</div></div><figcaption>${t}</figcaption></figure>`;
  return `<h2 class="h2">Vorschau Bogen 1 von ${pg.length}</h2><div class="pvs">${mk(pg[0].f, 'Vorderseite')}${mk(pg[0].b, 'Rückseite (gespiegelt, für Wenden an der kurzen Kante)')}</div>`;
}
function vKarten() {
  const sets = SETS.map(s => { const all = s.s.every(id => KS.sel.has(id)); return `<button class="pill kset" aria-pressed="${all}" data-kset="${s.id}"><i class="sm">${s.m}</i>${esc(s.n)} <small>${s.s.length}</small></button>`; }).join('');
  const groups = PH.map(p => ({n: p.n, c: p.k, a: NM.filter(m => m.ph === p.k && m.nr)})).concat([{n: 'Werkzeuge', c: 'werkzeug', a: TL.filter(m => m.nr)}]);
  return `<div class="kview"><p class="hint kintro">Methodenkarten zum Ausdrucken und Laminieren: 8 Karten pro A4-Blatt (quer), Vorder- und Rückseite, ca. 66 × 94 mm. Karten antippen wählt sie aus, ein Set wählt alle passenden auf einmal.</p>
    <div class="fg"><span class="lbl">Set nach Situation</span>${sets}</div>
    <div class="fg"><button class="pill" aria-pressed="${KS.leg}" data-kleg>Legendenkarte beilegen</button><button class="pill" data-kall>Alle ${NM.filter(m => m.nr).length + TL.filter(m => m.nr).length} Karten</button><button class="pill" data-ktest>Testblatt drucken</button></div>
    <div class="kshift"><span class="lbl">Rückseite verschieben (mm)</span><label>seitwärts <input type="number" step="0.1" min="-5" max="5" id="kx" value="${Cards.shift().x}"></label><label>hoch/runter <input type="number" step="0.1" min="-5" max="5" id="ky" value="${Cards.shift().y}"></label><button class="pill" data-kshr>Zurücksetzen</button></div>
    <div class="kbar" id="ksum">${ksSummary()}</div>
    <p class="hint" id="kmsg" hidden></p>
    ${groups.map(g => `<h2 class="h2 kh" style="--cc:var(--p-${g.c})"><i class="dot"></i>${g.n} <small>${g.a.length}</small></h2><div class="kgrid">${g.a.map(kcell).join('')}</div>`).join('')}
    <div id="kpv">${ksPreview()}</div>
    <details class="fdet"><summary>Druckhinweise</summary><div class="prose khelp"><ol><li>Im Druckdialog: Papier A4, Ausrichtung quer, Skalierung 100 % (nicht «An Seite anpassen»), Ränder «Keine» oder «Standard», Hintergrundgrafiken einschalten.</li><li>Doppelseitig drucken, Wenden an der <b>kurzen</b> Kante. Die Rückseiten sind bereits gespiegelt angeordnet.</li><li>Zuerst das <b>Testblatt</b> drucken: Die Zahl hinten muss genau hinter derselben Zahl vorne liegen. Stimmt es nicht, im Druckdialog «kurze» und «lange Kante» tauschen. Bleibt eine Abweichung im Millimeterbereich: Blatt gegen das Licht halten, Versatz des Fadenkreuzes messen und oben unter «Rückseite verschieben» ausgleichen (positiv = nach rechts bzw. nach unten). Der Wert wird im Browser gespeichert.</li><li>Zwischen den Karten sind 6 mm Abstand für den Siegelrand der Laminiertasche. Gestrichelte Linien zeigen den Schnitt, 3 mm vom Kartenrand.</li><li>Laminierfolie 80 oder 100 µm genügt. Ecken danach abrunden.</li></ol></div></details></div>`;
}
function ksRefresh() {
  ksSave();
  const s = document.getElementById('ksum'); if (!s) return;
  s.innerHTML = ksSummary();
  document.getElementById('kpv').innerHTML = ksPreview();
  document.querySelectorAll('.ksel').forEach(el => { const id = el.querySelector('[data-kt]').dataset.kt, on = KS.sel.has(id); el.classList.toggle('on', on); const b = el.querySelector('.kpick'); b.setAttribute('aria-pressed', on); el.querySelector('.kchk').textContent = on ? '✓' : '+'; });
  document.querySelectorAll('[data-kset]').forEach(b => { const st = SETS.find(x => x.id === b.dataset.kset); b.setAttribute('aria-pressed', st.s.every(id => KS.sel.has(id))); });
  const l = document.querySelector('[data-kleg]'); if (l) l.setAttribute('aria-pressed', KS.leg);
  ksScale();
}
function ksScale() { document.querySelectorAll('.pv').forEach(p => { const k = p.clientWidth / (297 * 96 / 25.4); const i = p.firstElementChild; i.style.transform = `scale(${k})`; p.style.height = (210 * 96 / 25.4 * k) + 'px'; }); }
window.addEventListener('resize', ksScale);
function ksPrint(sheets) {
  let root = document.getElementById('printroot');
  if (!root) { root = document.createElement('div'); root.id = 'printroot'; document.body.appendChild(root); }
  root.innerHTML = sheets.map(p => p.f + p.b).join('');
  const msg = document.getElementById('kmsg');
  try { window.print(); if (msg) msg.hidden = true; } catch (e) { if (msg) { msg.hidden = false; msg.textContent = 'Drucken ist in dieser Umgebung gesperrt. Auf der veröffentlichten Seite funktioniert es.'; } }
}
const ksShift = (x, y) => { try { localStorage.setItem('mk-versatz', JSON.stringify({x, y})); } catch (e) {} ksRefresh(); };
document.addEventListener('change', e => { if (e.target.id === 'kx' || e.target.id === 'ky') ksShift(Number(document.getElementById('kx').value) || 0, Number(document.getElementById('ky').value) || 0); });
document.addEventListener('click', e => {
  if (e.target.closest('[data-kshr]')) { document.getElementById('kx').value = 0; document.getElementById('ky').value = 0; ksShift(0, 0); return; }
  const t = e.target.closest('[data-kt],[data-kset],[data-kleg],[data-kall],[data-kclear],[data-kprint],[data-ktest],[data-kadd]');
  if (!t) return;
  const d = t.dataset;
  if (d.kt) { flip(KS.sel, d.kt); }
  else if (d.kset) { const s = SETS.find(x => x.id === d.kset), all = s.s.every(id => KS.sel.has(id)); s.s.forEach(id => all ? KS.sel.delete(id) : KS.sel.add(id)); }
  else if (t.hasAttribute('data-kleg')) KS.leg = !KS.leg;
  else if (t.hasAttribute('data-kall')) M.forEach(m => m.nr && KS.sel.add(m.id));
  else if (t.hasAttribute('data-kclear')) KS.sel.clear();
  else if (t.hasAttribute('data-kprint')) { if (KS.sel.size) ksPrint(ksSheets()); return; }
  else if (t.hasAttribute('data-ktest')) { ksPrint(Cards.test()); return; }
  else if (d.kadd) { flip(KS.sel, d.kadd); ksSave(); t.setAttribute('aria-pressed', KS.sel.has(d.kadd)); t.textContent = KS.sel.has(d.kadd) ? '✓ In der Druckauswahl' : 'Karte zur Druckauswahl'; return; }
  ksRefresh();
});

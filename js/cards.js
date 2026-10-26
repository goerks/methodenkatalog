// Methodenkarten: Karten-HTML, Druckbögen (A4 quer, 4 x 2 Karten), Testblatt. Keine Abhängigkeit von der Seite ausser core.js.
const Cards = (() => {
  const SITE = 'https://goerks.github.io/methodenkatalog/';           // Ziel der QR-Codes
  const CW = 65.75, CH = 94, GAP = 6, PAD = 8, COLS = 4, ROWS = 2;      // Zelle in mm (Siegelrand 3 mm je Seite liegt in der Lücke)
  const ORDER = ['verstehen', 'ermitteln', 'spezifizieren', 'bewerten', 'planen', 'absichern', 'werkzeug'];
  const titleOf = m => m.kz || plain(m.n).replace(/\s*\(.*?\)\s*$/, '');
  const first = s => String(s).split(/(?<=[.!?])\s/)[0];
  const clip = (s, n) => { s = String(s).trim(); return s.length <= n ? s : s.slice(0, n - 1).replace(/[\s,;:.]+\S*$/, '') + '…'; };
  const qrCache = {};
  function qr(url, mm) {
    if (!qrCache[url]) {
      const q = qrcode(0, 'M'); q.addData(url); q.make();
      const n = q.getModuleCount(); let d = '';
      for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (q.isDark(y, x)) { let x1 = x; while (x1 < n && q.isDark(y, x1)) x1++; d += `M${x} ${y}h${x1 - x}v1h-${x1 - x}z`; x = x1; }
      qrCache[url] = {n, d};
    }
    const c = qrCache[url];
    return `<svg class="qr" viewBox="-2 -2 ${c.n + 4} ${c.n + 4}" style="width:calc(var(--mm)*${mm});height:calc(var(--mm)*${mm})" role="img" aria-label="QR-Code"><rect x="-2" y="-2" width="${c.n + 4}" height="${c.n + 4}" fill="#fff"/><path d="${c.d}" fill="#000"/></svg>`;
  }
  const vp = v => `<i class="vp ${v}"></i>`;
  const ico = (f, mm) => `<svg class="ico" viewBox="0 0 24 24" style="width:calc(var(--mm)*${mm});height:calc(var(--mm)*${mm})">${formPath(f, 12, 12, 8.2)} fill="var(--f)" stroke="var(--c)" stroke-width="2.1"/></svg>`;
  const marks = id => SETS.filter(s => s.s.includes(id)).map(s => `<i class="sm" title="${esc(s.n)}">${s.m}</i>`).join('');
  const wrap = (cls, ph, inner, extra) => `<div class="kcard ${cls}"><div class="cin ph-${ph}" ${extra || ''}>${inner}</div></div>`;

  const checks = a => `<ul class="ck">${a.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
  const eff = m => m.aufwand.split(/ (?:pro|je) |, /)[0];
  const two = m => { const a = String(m.zw).split(/(?<=[.!?])\s/), t = a.slice(0, 2).join(' '); return t.length <= 165 ? t : a[0].length <= 165 ? a[0] : m.kt; };
  const pic = m => { const v = m.vis && typeof VIS !== 'undefined' && VIS[m.vis] ? VIS[m.vis]() : ''; return v.startsWith('<svg') ? `<div class="pic">${v}</div>` : `<div class="pic ghostpic">${ico(m.f, 20)}</div>`; };
  function front(m) {
    const t = isTool(m), ph = phk(m);
    return wrap(t ? 'tool' : '', ph, `<div class="band">${ico(m.f, 5.2)}<b>${PHN[ph] || 'Werkzeug'}</b><span class="sp"></span><span class="nr">${m.nr}</span></div>
      <h3>${esc(titleOf(m))}</h3>${pic(m)}<p class="sum">${esc(m.kt)}</p><span class="sub">Gut, wenn</span>${checks(m.gw.slice(0, 2))}
      <div class="foot"><span class="tag">${FORMS[m.f].split(' ')[0]}</span>${t ? '' : `<span class="tag">${vp(m.m)}${MODE[m.m].replace('Klassisch und agil', 'beide').toLowerCase()}</span><span class="tag">${esc(eff(m))}</span>`}</div>`);
  }
  function back(m) {
    const t = isTool(m), ph = phk(m);
    return wrap(t ? 'tool' : '', ph, `<div class="top">${ico(m.f, 4.4)}<b>${esc(titleOf(m))}</b><span class="k">${PHN[ph] || 'Werkzeug'}</span></div>
      <span class="sub">${t ? 'Einsatz' : 'Ablauf'}</span><ol class="cl tight">${m.ks.map(x => `<li>${esc(x)}</li>`).join('')}</ol>
      <div class="box"><span class="sub">${t ? 'Grenzen' : 'Regeln'}</span>${checks(m.rg)}</div>
      <div class="fz"><div class="fn"><span class="nr">Karte ${m.nr}</span><span class="sms">${marks(m.id)}</span></div><span class="sp"></span><span class="mini">Details<br>scannen</span>${qr(SITE + '#' + m.id, 15)}</div>`);
  }
  function legendFront() {
    return wrap('', 'werkzeug', `<h3>So liest du die Karten</h3>
      <span class="sub">Farbe = Phase</span><div class="lg">${ORDER.slice(0, 6).map(k => `<span class="tag ph-${k}">${PHN[k]}</span>`).join('')}<span class="tag ph-werkzeug">Werkzeug</span></div>
      <span class="sub">Form = Typ</span><div class="lg">${['methode', 'artefakt', 'modell', 'meeting', 'werkzeug'].map(f => `<span class="tag ph-werkzeug">${ico(f, 3.6)}${FORMS[f].split(' ')[0]}</span>`).join('')}</div>
      <span class="sub">Muster = Vorgehen</span><div class="lg ph-werkzeug"><span class="tag">${vp('klassisch')}klassisch</span><span class="tag">${vp('agil')}agil</span><span class="tag">${vp('beide')}beide</span></div>
      <div class="foot"><span class="nr">Karte L-00</span></div>`);
  }
  function legendBack() {
    return wrap('', 'werkzeug', `<div class="top"><b>Kartensets</b></div>
      <ul class="cl sets">${SETS.map(s => `<li><i class="sm">${s.m}</i><b>${esc(s.n)}</b> <span class="mini">${s.s.length} Karten</span></li>`).join('')}</ul>
      <p class="goal">Der Buchstabe unten auf der Karte zeigt, zu welchen Sets sie gehört.</p>
      <div class="fz"><div class="fn"><span class="nr">Karte L-00</span></div><span class="sp"></span><span class="mini">Alle Methoden<br>online</span>${qr(SITE, 15)}</div>`);
  }
  const sortIds = ids => ids.slice().sort((a, b) => ORDER.indexOf(phk(BY[a])) - ORDER.indexOf(phk(BY[b])) || BY[a].nr.localeCompare(BY[b].nr));
  const cell = (h, i, extra) => `<div class="cell" ${extra || ''}>${h}</div>`;
  // Rückseiten stehen spiegelverkehrt (Spalten getauscht), damit sie bei Duplexdruck mit Wenden an der kurzen Kante hinter ihrer Vorderseite liegen.
  function pages(ids, legend) {
    const list = (legend ? ['legende'] : []).concat(sortIds(ids)), per = COLS * ROWS, out = [];
    for (let i = 0; i < list.length; i += per) {
      const g = list.slice(i, i + per), fr = [], bk = [];
      g.forEach((id, k) => { fr[k] = id === 'legende' ? legendFront() : front(BY[id]); const r = Math.floor(k / COLS), c = k % COLS; bk[r * COLS + (COLS - 1 - c)] = id === 'legende' ? legendBack() : back(BY[id]); });
      const fill = a => Array.from({length: per}, (_, k) => cell(a[k] || '')).join('');
      out.push({f: `<section class="pg">${fill(fr)}</section>`, b: `<section class="pg">${fill(bk)}</section>`, n: g.length});
    }
    return out;
  }
  function test() {
    const per = COLS * ROWS, tc = (n, side) => `<div class="tcell ${side}"><b>${n}</b><span>${side === 'v' ? 'VORNE' : 'HINTEN'}</span><i>↑ oben</i></div>`;
    const fr = [], bk = [];
    for (let k = 0; k < per; k++) { fr[k] = tc(k + 1, 'v'); const r = Math.floor(k / COLS), c = k % COLS; bk[r * COLS + (COLS - 1 - c)] = tc(k + 1, 'h'); }
    const fill = a => Array.from({length: per}, (_, k) => cell(a[k])).join('');
    return [{f: `<section class="pg">${fill(fr)}</section>`, b: `<section class="pg">${fill(bk)}</section>`, n: per}];
  }
  const sheetCount = (n, legend) => Math.ceil((n + (legend ? 1 : 0)) / (COLS * ROWS));
  return {ico, vp, qr, marks, titleOf, clip, first, wrap, SITE, pages, test, sheetCount, sortIds, front, back, legendFront, legendBack, PER: COLS * ROWS, CW, CH};
})();

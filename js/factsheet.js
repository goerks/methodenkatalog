// Factsheet: eine Methode oder ein Werkzeug als A4-Hochformat (1 bis 2 Seiten). Nutzt #printroot wie die Karten.
const Factsheet = (() => {
  const ul = a => `<ul>${a.map(s => `<li>${esc(s)}</li>`).join('')}</ul>`;
  const sec = (h, b) => `<section class="sec"><h2>${h}</h2>${b}</section>`;
  function html(m) {
    const t = isTool(m), nb = NB[m.id];
    const vis = !t && m.vis && VIS[m.vis] ? VIS[m.vis]() : (typeof KV !== 'undefined' && KV[m.id] ? KV[m.id]() : '');
    const meta = t ? `<span>Art: <b>${esc(m.t)}</b></span><span>Unterstützt: <b>${m.sp.length} Methoden</b></span>`
      : `<span>Vorgehen: <b>${MODE[m.m]}</b></span><span>Phase: <b>${PHN[m.ph]}</b></span><span>Typ: <b>${esc(m.t)}</b></span><span>Aufwand: <b>${esc(m.aufwand)}</b></span>`;
    const rel = Object.keys(REL).filter(r => nb[r].length && r !== 'werkzeuge').map(r => `<li><b>${REL[r]}:</b> ${nb[r].map(x => esc(plain(BY[x[0]].n))).join(', ')}</li>`).join('');
    const body = [
      sec('Wofür', `<p>${esc(m.zw)}</p>`),
      t ? '' : sec('Vorbereitung', ul(m.vb)),
      sec(t ? 'Einsatz' : 'Ablauf', t ? ul(m.ab) : `<ol>${m.ab.map(s => `<li>${esc(s)}</li>`).join('')}</ol>`),
      sec(t ? 'Grenzen' : 'Regeln', ul(m.re)),
      t ? '' : sec('In der Praxis', `<p>${esc(m.pr)}</p>`),
      m.bsp ? sec('Beispiel', `<div class="ex"><b>${esc(m.bsp.t)}</b>${esc(m.bsp.x)}</div>`) : '',
      t ? '' : sec('Empfehlung', `<p>${esc(m.em)}</p>`),
      rel ? sec('Zusammenhänge', `<ul class="rel">${rel}</ul>`) : '',
      !t && m.tools.length ? sec('Werkzeuge', `<p>${m.tools.map(esc).join(', ')}</p>`) : ''
    ].join('');
    return `<div class="fsheet" ${cc(m)}><table><thead><tr><td><div class="sp12"></div></td></tr></thead><tbody><tr><td><div class="fin">
      <header class="fh"><span class="lbl">${t ? 'Werkzeug' : esc(CAT[m.c].n) + ' · ' + esc(FORMS[m.f])}${m.nr ? ' · Karte ' + m.nr : ''}</span><h1>${esc(plain(m.n))}</h1>
      <div class="qrb">${Cards.qr(Cards.SITE + '#' + m.id, 17)}<span>Online mit<br>Verknüpfungen</span></div>
      <div class="meta">${meta}${m.s === 'entwurf' ? '<span>Status: <b>Entwurf</b></span>' : ''}</div><p class="lead">${esc(m.k)}</p></header>
      ${vis ? `<div class="top2"><div class="yn">${sec('Wann sinnvoll', ul(m.wa))}${sec('Wann besser nicht', ul(m.wn))}</div><div class="vis">${vis}</div></div>` : `<div class="yn">${sec('Wann sinnvoll', ul(m.wa))}${sec('Wann besser nicht', ul(m.wn))}</div>`}
      <div class="cols">${body}</div>
      <div class="src"><h2>Quellen</h2><ul>${m.qu.map(q => `<li>${esc(q)}</li>`).join('')}</ul></div>
      <div class="ft"><span>Methodenkatalog RE und BA · ${esc(Cards.SITE.replace('https://', ''))}</span><span>${m.s === 'entwurf' ? 'Entwurf, fachlich noch nicht geprüft' : ''}</span></div>
    </div></td></tr></tbody><tfoot><tr><td><div class="sp12"></div></td></tr></tfoot></table></div>`;
  }
  return {html};
})();

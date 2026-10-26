// Grafikbaukasten im Stil «Weiche Flächen». Farben kommen aus CSS-Tokens (--v-*), Hell und Dunkel gelten automatisch.
// Rollen: n neutral, a Hauptfarbe, b zweite Farbe, c Warnung/Betonung, k dunkel.
let VU = 0;
function vb() {
  const id = 'v' + (++VU), B = [], L = [], T = [], H = [];
  const geo = (kind, x, y, w, h, cls) => {
    if (kind === 'ellipse') return `<ellipse class="${cls}" cx="${x + w / 2}" cy="${y + h / 2}" rx="${w / 2}" ry="${h / 2}"/>`;
    if (kind === 'diamond') return `<path class="${cls}" d="M${x + w / 2} ${y}L${x + w} ${y + h / 2}L${x + w / 2} ${y + h}L${x} ${y + h / 2}Z" stroke-linejoin="round"/>`;
    return `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="${kind === 'pill' ? h / 2 : 12}"/>`;
  };
  const b = {
    shape(kind, x, y, w, h, role) { H.push(geo(kind, x + 4, y + 4, w, h, 'vsh')); B.push(geo(kind, x, y, w, h, 'f' + role)); },
    ring(cx, cy, r, thick) { B.push(`<circle class="fn vr${thick ? ' vr2' : ''}" cx="${cx}" cy="${cy}" r="${r}"/>`); },
    ln(d, dash) { L.push(`<path class="vl${dash ? ' vd' : ''}" d="${d}"${dash ? '' : ` marker-end="url(#m${id})"`}/>`); },
    plain(d) { L.push(`<path class="vl" d="${d}"/>`); },
    curve(d, role) { L.push(`<path class="c${role}" d="${d}"/>`); },
    box(x, y, w, h) { L.push(`<rect class="vbx" x="${x}" y="${y}" width="${w}" height="${h}" rx="10"/>`); },
    txt(x, y, s, role, o) {
      o = o || {}; const size = 13 * (o.k || 1), lines = String(s).split('\n'), y0 = y - ((lines.length - 1) * size * 1.15) / 2;
      T.push(`<text class="${role ? 't' + role : 'ti'}" x="${x}" y="${y0}" text-anchor="${o.a || 'middle'}" dominant-baseline="central" font-size="${size}"${o.w ? ` style="font-weight:${o.w}"` : ''}${o.rot ? ` transform="rotate(${o.rot} ${x} ${y})"` : ''}>${lines.map((l, i) => `<tspan x="${x}" dy="${i ? size * 1.15 : 0}">${l}</tspan>`).join('')}</text>`);
    },
    actor(cx, top, label) {
      b.plain(`M${cx + 9} ${top + 11}A9 9 0 1 1 ${cx - 9} ${top + 11}A9 9 0 1 1 ${cx + 9} ${top + 11}`);
      b.plain(`M${cx} ${top + 20}V${top + 52}M${cx - 18} ${top + 31}H${cx + 18}M${cx} ${top + 52}L${cx - 14} ${top + 76}M${cx} ${top + 52}L${cx + 14} ${top + 76}`);
      b.txt(cx, top + 92, label);
    },
    out(label) {
      return `<svg viewBox="0 0 420 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}"><defs><marker id="m${id}" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" orient="auto"><path class="vm" d="M0 0L10 5L0 10z"/></marker><filter id="s${id}" x="-12%" y="-12%" width="124%" height="150%"><feDropShadow dx="0" dy="3" stdDeviation="3.5" style="flood-color:var(--v-shadow);flood-opacity:var(--v-shadow-o)"/></filter></defs><rect class="vbg" width="420" height="230" rx="14"/><g>${H.join('')}</g><g>${L.join('')}</g><g>${B.join('')}</g>${T.join('')}</svg>`;
    }
  };
  return b;
}
const draw = (label, fn) => () => { const b = vb(); fn(b); return b.out(label); };
const small = {k: .8, w: 500};

const VIS = {
activity: draw('Aktivitätsdiagramm: Tour freigeben', b => {
  b.ln('M42 62H70'); b.ln('M170 62H190'); b.ln('M270 62H300'); b.ln('M350 82V150'); b.ln('M230 92V150'); b.ln('M180 170H120V84');
  b.shape('ellipse', 18, 50, 24, 24, 'k'); b.shape('pill', 70, 42, 100, 40, 'n'); b.shape('diamond', 190, 30, 80, 64, 'a');
  b.shape('pill', 300, 42, 100, 40, 'b'); b.shape('pill', 180, 150, 100, 40, 'c'); b.shape('ellipse', 338, 150, 24, 24, 'k');
  b.txt(120, 62, 'Tour prüfen', 'n'); b.txt(230, 62, 'Konflikt?', 'a', {k: .9}); b.txt(350, 62, 'Tour sperren', 'b');
  b.txt(230, 170, 'Warnung\nzeigen', 'c'); b.txt(285, 50, 'nein', null, small); b.txt(244, 122, 'ja', null, {k: .8, w: 500, a: 'start'});
}),
usecase: draw('Use-Case-Diagramm: Tourenplanung', b => {
  b.box(120, 14, 180, 202); b.txt(210, 30, 'Tourenplanung', null, {k: .85, w: 500});
  b.ln('M68 78L140 66', true); b.ln('M68 88L146 104', true); b.ln('M352 150L296 160', true);
  b.shape('ellipse', 136, 46, 148, 40, 'a'); b.shape('ellipse', 136, 100, 148, 40, 'a'); b.shape('ellipse', 136, 154, 148, 40, 'b');
  b.txt(210, 66, 'Tour planen', 'a'); b.txt(210, 120, 'Tour freigeben', 'a'); b.txt(210, 174, 'Tour einsehen', 'b');
  b.actor(54, 56, 'Disponentin'); b.actor(366, 108, 'Fahrer');
}),
context: draw('Kontextdiagramm: Tourenplanung', b => {
  b.ln('M124 54L156 92'); b.ln('M264 92L296 54'); b.ln('M124 178L156 140'); b.ln('M296 178L264 140');
  b.shape('rect', 150, 84, 120, 62, 'a'); b.txt(210, 115, 'Tourenplanung', 'a');
  b.shape('rect', 14, 16, 110, 42, 'n'); b.txt(69, 37, 'Disponentin', 'n');
  b.shape('rect', 296, 16, 110, 42, 'n'); b.txt(351, 37, 'Fahrer-App', 'n');
  b.shape('rect', 14, 172, 110, 42, 'n'); b.txt(69, 193, 'ERP\n(Aufträge)', 'n', {k: .9});
  b.shape('rect', 296, 172, 110, 42, 'n'); b.txt(351, 193, 'Fahrzeug-\nverwaltung', 'n', {k: .9});
  b.txt(116, 84, 'Touren', null, {...small, a: 'end'}); b.txt(304, 84, 'Fahrplan', null, {...small, a: 'start'});
  b.txt(116, 152, 'Aufträge', null, {...small, a: 'end'}); b.txt(304, 152, 'Verfügbarkeit', null, {...small, a: 'start'});
}),
story: draw('User-Story-Karte', b => {
  b.shape('rect', 50, 12, 320, 206, 'n'); b.shape('rect', 50, 12, 320, 32, 'a');
  b.txt(64, 28, 'TOUR-12', 'a', {a: 'start'}); b.txt(356, 28, '5 SP', 'a', {a: 'end'});
  b.txt(64, 62, 'Als Disponentin', 'n', {a: 'start'});
  ['möchte ich bei doppelter Fahrzeugbelegung', 'gewarnt werden,', 'damit keine unmöglichen Touren rausgehen.'].forEach((s, i) => b.txt(64, 82 + i * 19, s, 'n', {a: 'start', w: 500, k: .92}));
  b.plain('M64 140H356');
  b.shape('rect', 64, 152, 14, 14, 'b'); b.txt(88, 160, 'Warnung vor dem Speichern', 'n', {a: 'start', w: 500, k: .92});
  b.shape('rect', 64, 178, 14, 14, 'b'); b.txt(88, 186, 'Betroffenes Fahrzeug wird genannt', 'n', {a: 'start', w: 500, k: .92});
}),
moscow: draw('MoSCoW-Raster', b => {
  [[16, 14, 'Must', 'c', 'Tour anlegen\nKonflikt prüfen'], [216, 14, 'Should', 'a', 'Ersatzfahrer-\nVorschlag'], [16, 122, 'Could', 'b', 'Kartenansicht'], [216, 122, "Won't", 'n', 'Offline-Modus']]
   .forEach(x => { b.shape('rect', x[0], x[1], 188, 94, x[3]); b.txt(x[0] + 14, x[1] + 18, x[2], x[3], {a: 'start', k: 1.15}); b.txt(x[0] + 14, x[1] + 56, x[4], x[3], {a: 'start', w: 500, k: .92}); });
}),
poker: draw('Planning-Poker-Karten', b => {
  [[34, 3, 'n'], [118, 5, 'a'], [202, 5, 'a'], [286, 13, 'c']].forEach(c => { b.shape('rect', c[0], 30, 78, 106, c[2]); b.txt(c[0] + 39, 83, String(c[1]), c[2], {k: 2.6}); });
  b.plain('M34 168H364'); [34, 100, 166, 232, 298, 364].forEach(x => b.plain(`M${x} 164V172`));
  b.txt(210, 198, 'Skala 1 · 2 · 3 · 5 · 8 · 13 · 21', null, {k: .9, w: 500}); b.txt(325, 14, 'Ausreisser', 'c', small);
}),
stakeholder: draw('Einfluss-Interesse-Matrix', b => {
  const q = [[52, 12, 'Zufriedenstellen', 'a'], [232, 12, 'Eng einbinden', 'c'], [52, 112, 'Beobachten', 'n'], [232, 112, 'Informieren', 'b']];
  q.forEach(x => { b.shape('rect', x[0], x[1], 172, 92, x[3]); b.txt(x[0] + 12, x[1] + 16, x[2], x[3], {a: 'start', k: .95}); });
  b.shape('pill', 76, 40, 124, 28, 'n'); b.txt(138, 54, 'Geschäftsleitung', 'n', {k: .85});
  b.shape('pill', 260, 44, 116, 28, 'n'); b.txt(318, 58, 'Fachbereich', 'n', {k: .85});
  b.shape('pill', 76, 146, 96, 28, 'n'); b.txt(124, 160, 'Revision', 'n', {k: .85});
  b.shape('pill', 266, 146, 112, 28, 'n'); b.txt(322, 160, 'Support-Team', 'n', {k: .85});
  b.txt(14, 108, 'Einfluss', null, {k: .85, rot: -90}); b.txt(314, 218, 'Interesse', null, {k: .85}); b.txt(138, 218, 'gering', null, {k: .75, w: 500}); b.txt(390, 218, 'hoch', null, {k: .75, w: 500, a: 'end'});
}),
zustand: draw('Zustandsdiagramm: Tour', b => {
  b.ln('M20 60H26'); b.ln('M106 60H156'); b.ln('M256 60H306'); b.ln('M351 82V150'); b.ln('M206 82V150'); b.ln('M66 82V116H176V150');
  b.shape('ellipse', 6, 54, 12, 12, 'k'); b.shape('pill', 26, 38, 80, 44, 'a'); b.shape('pill', 156, 38, 100, 44, 'a'); b.shape('pill', 306, 38, 90, 44, 'b');
  b.shape('pill', 296, 150, 110, 40, 'k'); b.shape('pill', 156, 150, 100, 40, 'c');
  b.txt(66, 60, 'Entwurf', 'a'); b.txt(206, 60, 'Freigegeben', 'a', {k: .95}); b.txt(351, 60, 'Unterwegs', 'b', {k: .95});
  b.txt(206, 170, 'Storniert', 'c'); b.txt(351, 170, 'Abgeschlossen', 'k', {k: .9});
  b.txt(131, 48, 'freigeben', null, {k: .72, w: 500}); b.txt(281, 48, 'starten', null, {k: .72, w: 500});
  b.txt(358, 116, 'abschliessen', null, {k: .72, w: 500, a: 'start'}); b.txt(214, 116, 'stornieren', null, {k: .72, w: 500, a: 'start'});
}),
bpmn: draw('BPMN: Bestellung bearbeiten', b => {
  b.box(6, 12, 408, 206); b.txt(18, 28, 'Auftragsabwicklung', null, {k: .8, w: 500, a: 'start'});
  b.ln('M42 108H60'); b.ln('M136 108H156'); b.ln('M216 108H246'); b.ln('M336 108H358'); b.ln('M186 138V168'); b.ln('M236 188H370V122');
  b.ring(30, 108, 12, false); b.shape('rect', 60, 88, 76, 40, 'n'); b.shape('diamond', 156, 78, 60, 60, 'a');
  b.shape('rect', 246, 88, 90, 40, 'b'); b.ring(370, 108, 12, true); b.shape('rect', 136, 168, 100, 40, 'c');
  b.txt(98, 108, 'Bestellung\nprüfen', 'n', {k: .85}); b.txt(186, 108, '×', 'a', {k: 1.3}); b.txt(291, 108, 'Rechnung\nund Versand', 'b', {k: .85});
  b.txt(186, 188, 'Kunde\ninformieren', 'c', {k: .85}); b.txt(186, 66, 'lieferbar?', null, small); b.txt(231, 98, 'ja', null, small); b.txt(194, 152, 'nein', null, {...small, a: 'start'});
}),
kano: draw('Kano-Modell', b => {
  b.ln('M60 204V22'); b.ln('M60 108H340');
  b.curve('M70 100C170 98 250 68 328 26', 'a'); b.curve('M70 176L328 66', 'b'); b.curve('M70 190C170 186 250 160 328 126', 'c');
  b.txt(68, 12, 'Zufriedenheit', null, {k: .8, w: 500, a: 'start'}); b.txt(200, 222, 'Erfüllungsgrad des Merkmals', null, {k: .8, w: 500});
  b.txt(336, 26, 'Begeisterung', 'a', {k: .9, a: 'start'}); b.txt(336, 66, 'Leistung', 'b', {k: .9, a: 'start'}); b.txt(336, 126, 'Basis', 'c', {k: .9, a: 'start'});
}),
trace: draw('Traceability-Matrix', b => {
  b.shape('rect', 10, 8, 400, 214, 'n');
  const cols = ['UC-03', 'UC-04', 'TC-30', 'TC-31', 'TC-32'], rows = ['REQ-10', 'REQ-11', 'REQ-12', 'REQ-13'], X = i => 138 + i * 56, Y = j => 76 + j * 38;
  cols.forEach((c, i) => b.txt(X(i), 36, c, null, {k: .8}));
  rows.forEach((r, j) => b.txt(26, Y(j), r, null, {k: .85, a: 'start'}));
  b.plain('M20 52H398');
  [[0, 0], [0, 2], [1, 0], [1, 2], [2, 1], [2, 3], [2, 4], [3, 1]].forEach(p => b.shape('ellipse', X(p[1]) - 9, Y(p[0]) - 9, 18, 18, p[1] < 2 ? 'a' : 'b'));
  b.shape('pill', X(2) - 24, Y(3) - 13, 136, 26, 'c'); b.txt(X(2) + 44, Y(3), 'Test fehlt', 'c', {k: .85});
})
};

// Grafiken aus Text und Raster (HTML)
VIS['usecase-text'] = () => `<div class="vbox"><div class="vrow"><span class="vk">Name</span>UC-04 Tour freigeben</div>
  <div class="vrow"><span class="vk">Akteur</span>Disponentin</div><div class="vrow"><span class="vk">Vorbedingung</span>Tour ist vollständig</div>
  <div class="vrow"><span class="vk">Hauptablauf</span></div><ol><li>Disponentin wählt «Freigeben»</li><li>System prüft Fahrzeug und Fahrer</li><li>System sperrt die Tour für Änderungen</li></ol>
  <div class="vrow"><span class="vk">Alternative 2a</span>Konflikt: System zeigt Details, zurück zu Schritt 1</div><div class="vrow"><span class="vk">Nachbedingung</span>Tour hat Status «Freigegeben»</div></div>`;
VIS.gherkin = () => `<div class="vbox"><pre class="vcode"><b>Szenario:</b> Warnung bei Doppelbelegung
  <b>Gegeben</b> Fahrzeug 12 ist am Montag für Tour A eingeplant
  <b>Wenn</b>    die Disponentin Fahrzeug 12 für Tour B wählt
  <b>Dann</b>    zeigt das System eine Warnung mit «Tour A»</pre></div>`;
VIS.storymap = () => `<div class="vbox" style="overflow-x:auto"><div class="vsm">
  ${['Planen', 'Freigeben', 'Ausliefern'].map(a => `<div class="vh">${a}</div>`).join('')}
  ${['Tour anlegen', 'Konflikt prüfen', 'Fahrer benachrichtigen'].map(a => `<div class="vc">${a}</div>`).join('')}
  <div class="vrel vrel1">Release 1</div>${['Fahrzeug zuweisen', 'Warnung anzeigen', 'Push-Meldung'].map(a => `<div class="vc">${a}</div>`).join('')}
  <div class="vrel">Release 2</div>${['Karte', 'Ersatzfahrer', 'Statusverlauf'].map(a => `<div class="vc vlater">${a}</div>`).join('')}</div></div>`;

// Weitere Grafiken
VIS.swot = draw('SWOT-Analyse', b => {
  [[34, 10, 'Stärken', 'b', 'Eigene Kundendaten'], [220, 10, 'Schwächen', 'c', 'Veraltete\nSchnittstellen'], [34, 118, 'Chancen', 'a', 'Selbstbedienung\nsenkt Supportkosten'], [220, 118, 'Risiken', 'n', 'Wettbewerber\nstartet früher']]
   .forEach(x => { b.shape('rect', x[0], x[1], 180, 100, x[3]); b.txt(x[0] + 14, x[1] + 18, x[2], x[3], {a: 'start', k: 1.15}); b.txt(x[0] + 14, x[1] + 62, x[4], x[3], {a: 'start', w: 500, k: .9}); });
  b.txt(14, 60, 'intern', null, {k: .75, w: 500, rot: -90}); b.txt(14, 168, 'extern', null, {k: .75, w: 500, rot: -90});
});
VIS.bmc = draw('Business Model Canvas', b => {
  const blk = (x, y, w, h, t, r) => { b.shape('rect', x, y, w, h, r || 'n'); b.txt(x + w / 2, y + 14, t, r || 'n', {k: .7}); };
  blk(8, 8, 76, 150, 'Schlüssel-\npartner'); blk(88, 8, 76, 73, 'Aktivitäten'); blk(88, 85, 76, 73, 'Ressourcen');
  blk(168, 8, 84, 150, 'Nutzen-\nversprechen', 'c'); blk(256, 8, 76, 73, 'Kunden-\nbeziehung'); blk(256, 85, 76, 73, 'Kanäle'); blk(336, 8, 76, 150, 'Kunden-\nsegmente', 'a');
  blk(8, 162, 200, 60, 'Kostenstruktur', 'b'); blk(212, 162, 200, 60, 'Einnahmequellen', 'b');
});
VIS.impact = draw('Impact Map', b => {
  const cx = [10, 116, 222, 328], nm = ['Warum', 'Wer', 'Wie', 'Was'];
  b.ln('M202 82H222'); b.ln('M202 168H222'); b.ln('M308 82H328'); b.ln('M308 168H328');
  b.ln('M96 124L116 82'); b.ln('M96 124L116 168');
  b.shape('pill', 10, 100, 86, 48, 'c'); b.txt(53, 124, 'Leerfahrten\nhalbieren', 'c', {k: .8});
  [[82, 'Disponentin', 'plant mit\nRückfracht', 'Rückfracht-\nvorschlag'], [168, 'Fahrer', 'meldet\nStatus', 'Fahrer-App']].forEach(r => {
    b.shape('pill', 116, r[0] - 22, 86, 44, 'a'); b.txt(159, r[0], r[1], 'a', {k: .85});
    b.shape('pill', 222, r[0] - 22, 86, 44, 'n'); b.txt(265, r[0], r[2], 'n', {k: .8});
    b.shape('pill', 328, r[0] - 22, 82, 44, 'b'); b.txt(369, r[0], r[3], 'b', {k: .8});
  });
  cx.forEach((x, i) => b.txt(x + 43, 14, nm[i], null, {k: .72, w: 500}));
});
VIS.fivewhys = draw('5 Whys', b => {
  b.shape('pill', 10, 10, 400, 34, 'c'); b.txt(210, 27, 'Problem: Fahrzeug doppelt vergeben', 'c', {k: .95});
  const a = ['Excel-Liste war nicht aktuell', 'Änderungen kamen per Telefon', 'Es gibt keinen gemeinsamen Stand', 'Kein System für Tourenänderungen', 'Ursache: fehlendes zentrales System'];
  a.forEach((t, i) => { const y = 56 + i * 34, last = i === 4; b.shape('pill', 10, y, 66, 28, 'a'); b.txt(43, y + 14, 'Warum ' + (i + 1), 'a', {k: .8}); b.shape('pill', 80, y, 330, 28, last ? 'b' : 'n'); b.txt(94, y + 14, t, last ? 'b' : 'n', {a: 'start', k: .9, w: last ? 700 : 500}); });
});
VIS.risiko = draw('Risikomatrix', b => {
  const col = (p, i) => { const s = p * i; return s >= 6 ? 'c' : s >= 3 ? 'n' : 'b'; };
  for (let p = 3; p >= 1; p--) for (let i = 1; i <= 3; i++) b.shape('rect', 70 + (i - 1) * 88, 10 + (3 - p) * 58, 84, 54, col(p, i));
  [[3, 3, 'R1'], [2, 3, 'R2'], [1, 2, 'R3']].forEach(r => { const cx = 70 + (r[1] - 1) * 88 + 42, cy = 10 + (3 - r[0]) * 58 + 27; b.shape('ellipse', cx - 14, cy - 14, 28, 28, 'k'); b.txt(cx, cy, r[2], 'k', {k: .8}); });
  b.txt(34, 92, 'Wahrscheinlichkeit', null, {k: .78, w: 500, rot: -90}); b.txt(196, 200, 'Auswirkung', null, {k: .78, w: 500});
  b.txt(112, 188, 'gering', null, {k: .7, w: 500}); b.txt(288, 188, 'hoch', null, {k: .7, w: 500});
});
VIS.roadmap = draw('Roadmap', b => {
  const cols = [[10, 'Jetzt', 'a', ['Touren anlegen', 'Konflikte prüfen']], [148, 'Als Nächstes', 'b', ['Fahrer-App', 'Benachrichtigung']], [286, 'Später', 'n', ['Auswertungen', 'Rückfracht-\nvorschlag']]];
  cols.forEach(c => { b.shape('pill', c[0], 12, 124, 34, c[2]); b.txt(c[0] + 62, 29, c[1], c[2]); c[3].forEach((t, j) => { b.shape('rect', c[0], 62 + j * 76, 124, 64, 'n'); b.txt(c[0] + 62, 94 + j * 76, t, 'n', {k: .9}); }); });
  b.ln('M138 29H146'); b.ln('M276 29H284');
});
VIS.event = draw('Event Storming', b => {
  b.ln('M10 22H410'); b.txt(404, 12, 'Zeit', null, {k: .72, w: 500, a: 'end'});
  ['Tour\nangelegt', 'Fahrzeug\nzugewiesen', 'Konflikt\nerkannt', 'Tour\nfreigegeben', 'Fahrer\nbenachrichtigt'].forEach((t, i) => { b.shape('rect', 10 + i * 82, 38, 74, 50, 'c'); b.txt(47 + i * 82, 63, t, 'c', {k: .72}); });
  [[0, 'Tour\nanlegen'], [1, 'Fahrzeug\nwählen'], [3, 'Tour\nfreigeben']].forEach(c => { b.shape('rect', 10 + c[0] * 82, 108, 74, 46, 'a'); b.txt(47 + c[0] * 82, 131, c[1], 'a', {k: .72}); b.shape('pill', 10 + c[0] * 82 + 2, 170, 70, 26, 'n'); b.txt(47 + c[0] * 82, 183, 'Disponentin', 'n', {k: .62}); });
  b.shape('rect', 174, 108, 74, 60, 'b'); b.txt(211, 138, 'Regel:\nein Fahrzeug\npro Tag', 'b', {k: .66});
});
VIS.domaene = draw('Domänenmodell', b => {
  const cls = (x, y, w, h, t, a, r) => { b.shape('rect', x, y, w, h, r || 'n'); b.txt(x + w / 2, y + 16, t, r || 'n', {k: .95}); b.plain(`M${x + 8} ${y + 28}H${x + w - 8}`); b.txt(x + 12, y + 44, a, r || 'n', {a: 'start', k: .74, w: 500}); };
  b.plain('M124 52L160 98'); b.plain('M124 170L160 130'); b.plain('M260 98L300 52'); b.plain('M353 76V150');
  cls(14, 14, 110, 60, 'Fahrzeug', 'Kennzeichen'); cls(14, 150, 110, 60, 'Fahrer', 'Name'); cls(160, 80, 100, 64, 'Tour', 'Datum', 'a');
  cls(300, 14, 106, 60, 'Stopp', 'Reihenfolge'); cls(300, 150, 106, 60, 'Auftrag', 'Nummer');
  [[132, 62, '1'], [150, 96, 'n'], [132, 158, '1'], [152, 138, 'n'], [264, 90, '1'], [292, 66, 'n'], [361, 92, '1'], [361, 138, 'n']].forEach(l => b.txt(l[0], l[1], l[2], null, {k: .8, w: 700}));
});

// Kartengrafiken: grosse Schrift und wenige Elemente, damit sie auf 58 mm Kartenbreite lesbar bleiben.
// Gleicher Baukasten wie visuals.js (draw, vb). Schlüssel = Methoden-ID.
const KV = {};
(() => {
  const K = 1.7;
  const nd = (b, x, y, w, h, s, r, k, kind) => { b.shape(kind || 'rect', x, y, w, h, r); b.txt(x + w / 2, y + h / 2, s, r, {k: k || K}); };
  const pl = (b, x, y, w, h, s, r, k) => nd(b, x, y, w, h, s, r, k, 'pill');
  const tx = (b, x, y, s, r, o) => b.txt(x, y, s, r || null, Object.assign({k: K}, o || {}));
  const ck = (b, x, y, r) => b.txt(x, y, '✓', r || 'b', {k: 1.8, w: 700});
  const head = (b, cx, cy, r, role) => b.ring(cx, cy, r || 14);
  const person = (b, cx, top) => { b.plain(`M${cx + 14} ${top + 14}A14 14 0 1 1 ${cx - 14} ${top + 14}A14 14 0 1 1 ${cx + 14} ${top + 14}`); b.plain(`M${cx} ${top + 28}V${top + 72}M${cx - 26} ${top + 44}H${cx + 26}M${cx} ${top + 72}L${cx - 20} ${top + 104}M${cx} ${top + 72}L${cx + 20} ${top + 104}`); };
  const D = (id, label, fn) => { KV[id] = draw(label, fn); };

  D('interview', 'Interview: Frage und Antwort', b => {
    person(b, 60, 70); person(b, 360, 70);
    nd(b, 110, 22, 130, 56, 'Was stört\ndich?', 'a', 1.5, 'pill'); nd(b, 180, 130, 140, 56, 'Der Export\ndauert', 'b', 1.5, 'pill');
  });
  D('workshop', 'Workshop: Ideen werden zur Einigung', b => {
    [[22, 24, 'c', 'Idee'], [112, 54, 'a', 'Idee'], [22, 112, 'b', 'Idee'], [112, 142, 'n', 'Idee']].forEach(s => nd(b, s[0], s[1], 78, 62, s[3], s[2], 1.6));
    b.ln('M205 110H255'); nd(b, 262, 70, 140, 80, 'Einigung', 'k', 1.9);
  });
  D('beobachtung', 'Beobachtung: Schauen und notieren', b => {
    b.shape('ellipse', 18, 52, 170, 100, 'n'); b.ring(103, 102, 30, true); tx(b, 103, 190, 'Zuschauen', 'n');
    [['Zeit', 'a'], ['Handlung', 'b'], ['Auffällig', 'c']].forEach((r, i) => pl(b, 226, 34 + i * 62, 176, 50, r[0], r[1]));
  });
  D('persona', 'Persona: Steckbrief', b => {
    nd(b, 30, 14, 360, 202, '', 'n'); b.ring(92, 68, 30, true); tx(b, 250, 52, 'Anna, 34', 'n', {a: 'middle', k: 2, w: 700}); tx(b, 250, 86, 'Disponentin', 'n', {k: 1.4, w: 500});
    pl(b, 54, 124, 312, 36, 'Ziel: Touren schnell planen', 'b', 1.25); pl(b, 54, 168, 312, 36, 'Frust: doppelte Belegung', 'c', 1.25);
  });
  D('fragebogen', 'Fragebogen: Skala von 1 bis 5', b => {
    [0, 1, 2].forEach(r => { b.shape('rect', 30, 24 + r * 66, 360, 52, 'n'); b.plain(`M50 ${50 + r * 66}H50`); [0, 1, 2, 3, 4].forEach(i => b.ring(230 + i * 36, 50 + r * 66, 11, i === [3, 1, 4][r])); b.shape('pill', 48, 40 + r * 66, 100, 20, 'a'); });
    tx(b, 90, 216, '1 = nie', null, {k: 1.4}); tx(b, 340, 216, '5 = immer', null, {k: 1.4});
  });
  D('dokumentenanalyse', 'Dokumentenanalyse: Stapel zu Befunden', b => {
    [0, 1, 2].forEach(i => nd(b, 22 + i * 14, 40 + i * 14, 110, 140, i === 2 ? 'Doku' : '', 'n'));
    b.ln('M158 110H208'); [['Regeln', 'a'], ['Begriffe', 'b'], ['Zahlen', 'c']].forEach((r, i) => pl(b, 216, 30 + i * 62, 188, 50, r[0], r[1]));
  });
  D('use-cases', 'Use Case: Beschreibung in Zeilen', b => {
    [['Akteur', 'a'], ['Ziel', 'b'], ['Ablauf', 'c'], ['Ausnahme', 'n']].forEach((r, i) => { nd(b, 18, 14 + i * 54, 130, 44, r[0], r[1], 1.55); b.plain(`M166 ${36 + i * 54}H400`); b.plain(`M166 ${46 + i * 54}H340`); });
  });
  D('akzeptanzkriterien', 'Akzeptanzkriterien: Gegeben, Wenn, Dann', b => {
    nd(b, 12, 72, 118, 86, 'Gegeben', 'n', 1.55); nd(b, 151, 72, 118, 86, 'Wenn', 'a', 1.7); nd(b, 290, 72, 118, 86, 'Dann', 'b', 1.7);
    b.ln('M130 115H149'); b.ln('M269 115H288'); ck(b, 349, 52);
  });
  D('dor-dod', 'Bereit und Fertig', b => {
    nd(b, 10, 62, 110, 106, 'Bereit', 'a', 1.7); nd(b, 150, 62, 120, 106, 'Sprint', 'k', 1.7, 'ellipse'); nd(b, 300, 62, 110, 106, 'Fertig', 'b', 1.7);
    b.ln('M120 115H148'); b.ln('M270 115H298'); tx(b, 65, 190, 'DoR', 'a', {k: 1.5}); tx(b, 355, 190, 'DoD', 'b', {k: 1.5});
  });
  D('nfr', 'Nichtfunktionale Anforderungen: Zielwerte', b => {
    [['Tempo', 150, 'a'], ['Sicher', 220, 'b'], ['Bedienbar', 120, 'c'], ['Stabil', 190, 'a']].forEach((r, i) => { tx(b, 20, 34 + i * 52, r[0], null, {a: 'start', k: 1.55}); b.shape('pill', 160, 20 + i * 52, 240, 28, 'n'); b.shape('pill', 160, 20 + i * 52, r[1], 28, r[2]); });
  });
  D('pflichtenheft', 'Pflichtenheft: Gliederung', b => {
    nd(b, 90, 10, 240, 210, '', 'n'); [['1  Ziele', 'a'], ['2  Umfang', 'b'], ['3  Anforderungen', 'c'], ['4  Abnahme', 'n']].forEach((r, i) => { pl(b, 112, 28 + i * 47, 196, 36, r[0], r[1], 1.3); });
  });
  D('produktvision', 'Produktvision: vier Fragen', b => {
    [['Für wen?', 'a'], ['Welcher Bedarf?', 'b'], ['Welches Produkt?', 'c'], ['Welcher Nutzen?', 'k']].forEach((r, i) => pl(b, 40 + (i % 2) * 20, 14 + i * 54, 320, 44, r[0], r[1], 1.6));
  });
  D('glossar', 'Glossar: Begriff und Bedeutung', b => {
    nd(b, 18, 16, 170, 46, 'Begriff', 'a', 1.6); nd(b, 198, 16, 204, 46, 'Bedeutung', 'b', 1.6);
    [['Tour', 'Fahrt mit Stopps'], ['Slot', 'Zeitfenster'], ['Depot', 'Startort']].forEach((r, i) => { nd(b, 18, 74 + i * 48, 170, 40, r[0], 'n', 1.45); nd(b, 198, 74 + i * 48, 204, 40, r[1], 'n', 1.3); });
  });
  D('geschaeftsregeln', 'Geschäftsregel: Wenn dann sonst', b => {
    b.ln('M138 115H188'); b.ln('M264 70L300 40'); b.ln('M264 160L300 190'); nd(b, 18, 85, 120, 60, 'Antrag', 'n'); nd(b, 190, 60, 74, 110, '', 'a', 1.4, 'diamond'); tx(b, 227, 115, 'Alter\n< 18?', 'a', {k: 1.3});
    nd(b, 300, 14, 108, 54, 'Ablehnen', 'c', 1.45); nd(b, 300, 162, 108, 54, 'Annehmen', 'b', 1.45); tx(b, 292, 50, 'ja', null, {k: 1.4, a: 'end'}); tx(b, 292, 180, 'nein', null, {k: 1.4, a: 'end'});
  });
  D('story-splitting', 'Story-Splitting: gross wird klein', b => {
    nd(b, 12, 70, 120, 90, 'Grosse\nStory', 'c', 1.6); [0, 1, 2].forEach(i => { b.ln(`M132 115L196 ${46 + i * 66}`); nd(b, 200, 20 + i * 66, 200, 52, 'Teil ' + (i + 1), 'a', 1.6); });
  });
  D('wsjf', 'WSJF: Nutzen durch Aufwand', b => {
    pl(b, 14, 20, 250, 70, 'Nutzen + Dringlich-\nkeit + Risiko', 'a', 1.35); b.plain('M14 115H264'); pl(b, 70, 140, 138, 60, 'Aufwand', 'c', 1.6); tx(b, 290, 115, '=', null, {k: 2.4}); nd(b, 316, 76, 92, 78, 'WSJF', 'k', 1.5, 'ellipse');
  });
  D('story-points', 'Story Points: relative Grösse', b => {
    [[1, 26, 'n'], [2, 34, 'a'], [3, 44, 'a'], [5, 56, 'b'], [8, 70, 'c']].reduce((x, c) => { b.shape('ellipse', x, 190 - c[1] * 1.7, c[1] * 1.5, c[1] * 1.5, c[2]); b.txt(x + c[1] * .75, 190 - c[1] * 1.7 + c[1] * .75, String(c[0]), c[2], {k: 1.8, w: 700}); return x + c[1] * 1.5 + 14; }, 18);
    tx(b, 210, 214, 'Aufwand im Vergleich', null, {k: 1.4});
  });
  D('product-backlog', 'Product Backlog: geordnete Liste', b => {
    [['1  Tour planen', 'c', 330], ['2  Konflikt prüfen', 'c', 300], ['3  Karte', 'a', 270], ['4  Export', 'n', 240], ['5  Offline', 'n', 210]].forEach((r, i) => pl(b, 20, 14 + i * 42, r[2], 34, r[0], r[1], 1.4));
    b.plain('M14 226H406'); tx(b, 405, 214, 'wichtig oben', null, {a: 'end', k: 1.3});
  });
  D('refinement', 'Refinement: von der Idee zur bereiten Story', b => {
    pl(b, 10, 80, 108, 70, 'Idee', 'n'); pl(b, 156, 80, 110, 70, 'Klar', 'a'); pl(b, 304, 80, 106, 70, 'Bereit', 'b'); b.ln('M118 115H154'); b.ln('M266 115H302'); ck(b, 357, 60);
  });
  D('story-mapping', 'Story Map: Aktivitäten und Stories', b => {
    ['Planen', 'Liefern', 'Prüfen'].forEach((s, i) => { nd(b, 14 + i * 134, 14, 126, 46, s, 'a', 1.5); [0, 1, 2].forEach(j => { if (j <= 2 - i || j === 0) nd(b, 24 + i * 134, 72 + j * 50, 106, 40, '', j === 0 ? 'c' : 'n'); }); });
    b.plain('M10 168H410'); tx(b, 14, 190, 'Release 1', null, {a: 'start', k: 1.4});
  });
  D('sprint-planning', 'Sprint Planning: vom Backlog zum Sprintziel', b => {
    nd(b, 10, 40, 100, 150, 'Backlog', 'n', 1.5); b.ln('M110 115H148'); nd(b, 150, 50, 130, 130, 'Sprint', 'a', 1.7, 'ellipse'); b.ln('M280 115H312'); nd(b, 314, 70, 96, 90, 'Ziel', 'k', 1.7);
  });
  D('review', 'Review: Dokument prüfen', b => {
    nd(b, 30, 14, 200, 202, '', 'n'); [0, 1, 2, 3].forEach(i => pl(b, 52, 38 + i * 40, i % 2 ? 120 : 156, 16, '', 'a')); pl(b, 256, 30, 148, 46, 'Fehler', 'c', 1.5); pl(b, 256, 92, 148, 46, 'Frage', 'a', 1.5); pl(b, 256, 154, 148, 46, 'in Ordnung', 'b', 1.35);
  });
  D('prototyping', 'Prototyp: Bildschirmskizze', b => {
    nd(b, 120, 8, 180, 214, '', 'n'); nd(b, 134, 20, 152, 34, 'Tour', 'a', 1.3); nd(b, 134, 66, 152, 50, '', 'b'); nd(b, 134, 126, 70, 40, '', 'n'); nd(b, 216, 126, 70, 40, '', 'n'); pl(b, 150, 180, 120, 32, 'Senden', 'c', 1.25);
  });
  D('change-management', 'Änderungsmanagement: Antrag und Entscheid', b => {
    pl(b, 10, 85, 108, 60, 'Antrag', 'n'); b.ln('M118 115H160'); nd(b, 160, 70, 100, 90, 'Prüfen', 'a', 1.5, 'diamond'); b.ln('M260 115H300'); pl(b, 300, 85, 110, 60, 'Freigabe', 'b', 1.5);
    b.ln('M210 160V196H64V148'); tx(b, 210, 214, 'abgelehnt', null, {k: 1.4});
  });
  D('abnahmetest', 'Abnahmetest: Kriterien abhaken', b => {
    [['Tour anlegen', 'b'], ['Konflikt gemeldet', 'b'], ['Export möglich', 'c']].forEach((r, i) => { nd(b, 14, 20 + i * 66, 40, 40, i < 2 ? '✓' : '', r[1], 1.6); nd(b, 66, 20 + i * 66, 220, 40, r[0], 'n', 1.35); });
    nd(b, 312, 62, 96, 96, 'OK', 'k', 1.9, 'ellipse');
  });
  D('jira', 'Jira: Board mit drei Spalten', b => {
    [['Offen', 'n', 2], ['Läuft', 'a', 1], ['Fertig', 'b', 2]].forEach((c, i) => { nd(b, 12 + i * 138, 12, 130, 206, '', 'n'); tx(b, 77 + i * 138, 34, c[0], c[1], {k: 1.4}); for (let j = 0; j < c[2]; j++) nd(b, 22 + i * 138, 56 + j * 62, 110, 50, '', c[1]); });
  });
  D('miro', 'Miro: Haftnotizen auf dem Board', b => {
    nd(b, 14, 20, 100, 70, 'Idee', 'c', 1.5); nd(b, 160, 56, 100, 70, 'Idee', 'a', 1.5); nd(b, 300, 20, 100, 70, 'Idee', 'b', 1.5); nd(b, 70, 140, 110, 70, 'Frage', 'n', 1.5); nd(b, 250, 148, 150, 60, 'Plan', 'k', 1.5, 'pill');
    b.ln('M114 70L158 84'); b.ln('M260 84L298 60'); b.ln('M210 126L250 168');
  });
  D('drawio', 'draw.io: Diagramm zeichnen', b => {
    nd(b, 10, 14, 70, 202, '', 'n'); [0, 1, 2].forEach(i => nd(b, 22, 30 + i * 62, 46, 42, '', ['a', 'b', 'c'][i]));
    nd(b, 120, 30, 120, 60, 'Start', 'a'); nd(b, 290, 30, 120, 60, 'Prüfen', 'b'); nd(b, 205, 140, 120, 60, 'Ende', 'c'); b.ln('M240 60H288'); b.ln('M350 90V116L265 116V138');
  });
  D('plantuml', 'PlantUML: Text wird Diagramm', b => {
    nd(b, 10, 20, 190, 190, '', 'k'); ['A -> B', 'B -> C', 'C --> A'].forEach((s, i) => b.txt(30, 60 + i * 50, s, 'k', {a: 'start', k: 1.6, w: 500}));
    b.ln('M204 115H236'); nd(b, 240, 24, 80, 52, 'A', 'a'); nd(b, 330, 88, 80, 52, 'B', 'b'); nd(b, 240, 160, 80, 52, 'C', 'c'); b.ln('M320 56L360 86'); b.ln('M360 140L320 176'); b.ln('M280 160V78');
  });
  D('confluence', 'Confluence: Wikiseite mit Struktur', b => {
    nd(b, 10, 14, 112, 202, '', 'n'); [0, 1, 2, 3].forEach(i => pl(b, 20, 28 + i * 44, 92 - (i % 2) * 14, 28, '', i === 1 ? 'a' : 'n')); nd(b, 134, 14, 276, 48, 'Anforderungen', 'a', 1.55); [0, 1, 2, 3].forEach(i => b.plain(`M148 ${90 + i * 32}H${i === 3 ? 300 : 396}`));
  });
  D('figma', 'Figma: Entwürfe als Rahmen', b => {
    [['Login', 'a', 14], ['Liste', 'n', 148], ['Detail', 'b', 282]].forEach(f => { nd(b, f[2], 20, 124, 190, '', f[1]); tx(b, f[2] + 62, 42, f[0], f[1], {k: 1.45}); nd(b, f[2] + 14, 66, 96, 38, '', 'n'); nd(b, f[2] + 14, 116, 96, 38, '', 'n'); });
    b.ln('M138 120H146'); b.ln('M272 120H280');
  });
  D('cucumber', 'Cucumber: Szenario mit Prüfergebnis', b => {
    nd(b, 10, 14, 400, 202, '', 'k'); [['Gegeben ein Fahrzeug', 'k'], ['Wenn es doppelt belegt', 'k'], ['Dann Warnung', 'k']].forEach((r, i) => { b.txt(30, 58 + i * 56, r[0], 'k', {a: 'start', k: 1.45, w: 500}); b.txt(380, 58 + i * 56, '✓', 'b', {k: 1.8, w: 700}); });
  });
  D('enterprise-architect', 'Enterprise Architect: Modell mit Rückverfolgung', b => {
    nd(b, 8, 8, 404, 214, '', 'n'); nd(b, 26, 80, 100, 70, 'Anfor-\nderung', 'a', 1.35); nd(b, 160, 80, 100, 70, 'Use\nCase', 'b', 1.35); nd(b, 294, 80, 100, 70, 'Test', 'c', 1.35); b.ln('M126 115H158'); b.ln('M260 115H292'); tx(b, 210, 30, 'Modell', null, {k: 1.5, w: 700});
  });

  D('customer-journey-map', 'Journey Map: Phasen und Stimmung', b => {
    ['Planen', 'Prüfen', 'Freigeben', 'Folgen'].forEach((t, i) => nd(b, 12 + i * 102, 14, 96, 46, t, 'a', 1.35));
    b.plain('M30 150C80 70 120 190 170 140S250 70 300 130S370 170 396 110'); [[30, 150], [170, 140], [300, 130], [396, 110]].forEach(c => b.ring(c[0], c[1], 7)); nd(b, 128, 176, 84, 40, 'Frust', 'c', 1.35, 'pill'); tx(b, 20, 215, 'Stimmung', null, {a: 'start', k: 1.3});
  });
  D('jobs-to-be-done', 'Jobs to be Done: Situation, Ziel, Nutzen', b => {
    pl(b, 24, 16, 372, 56, 'Wenn ich abends plane …', 'n', 1.55); pl(b, 24, 87, 372, 56, '… will ich Sicherheit …', 'a', 1.55); pl(b, 24, 158, 372, 56, '… damit der Morgen ruhig ist.', 'b', 1.55);
  });
  D('value-proposition-canvas', 'Value Proposition Canvas: Angebot und Kunde', b => {
    nd(b, 12, 36, 170, 160, 'Angebot', 'a', 1.7); nd(b, 238, 36, 170, 160, 'Kunde', 'b', 1.7, 'ellipse'); b.ln('M184 116H236'); tx(b, 210, 90, 'passt?', null, {k: 1.4});
  });
  D('rich-picture', 'Rich Picture: Beteiligte und Konflikte', b => {
    person(b, 40, 70); person(b, 380, 70); nd(b, 130, 90, 160, 70, 'System', 'a', 1.6); nd(b, 130, 14, 120, 50, '?', 'n', 1.9, 'ellipse'); nd(b, 270, 176, 130, 44, 'Konflikt', 'c', 1.5, 'pill'); b.ln('M90 125H128'); b.ln('M292 125H330');
  });
  D('empathy-map', 'Empathy Map: sehen, hören, sagen, denken', b => {
    [['Sieht', 'a', 12, 14], ['Hört', 'b', 214, 14], ['Sagt', 'c', 12, 120], ['Denkt', 'n', 214, 120]].forEach(c => nd(b, c[2], c[3], 194, 96, c[0], c[1], 1.7)); b.ring(210, 115, 22, true);
  });
  D('fokusgruppe', 'Fokusgruppe: Runde um ein Thema', b => {
    nd(b, 140, 70, 140, 90, 'Thema', 'a', 1.7, 'ellipse'); [[60, 20], [190, 4], [320, 20], [60, 160], [190, 176], [320, 160]].forEach((c, i) => b.shape('ellipse', c[0], c[1], 48, 48, ['b', 'c', 'b', 'c', 'b', 'c'][i]));
  });
  D('brainstorming', 'Brainstorming: viele Ideen', b => {
    [[14, 20, 'c'], [112, 60, 'a'], [214, 16, 'b'], [316, 56, 'c'], [30, 130, 'b'], [140, 150, 'n'], [244, 120, 'a'], [330, 150, 'b']].forEach(c => nd(b, c[0], c[1], 78, 62, 'Idee', c[2], 1.35));
  });
  D('contextual-inquiry', 'Contextual Inquiry: vor Ort zuschauen', b => {
    person(b, 50, 70); person(b, 370, 70); nd(b, 130, 60, 160, 100, 'Arbeit', 'n', 1.7); b.ring(210, 190, 14); tx(b, 258, 196, 'fragen', null, {a: 'start', k: 1.4});
  });
  D('spike', 'Spike: Zeitbox und Antwort', b => {
    b.ring(90, 115, 70, true); b.shape('rect', 87, 66, 6, 52, 'k'); b.shape('rect', 87, 112, 40, 6, 'k'); tx(b, 90, 205, '1 Tag', null, {k: 1.5}); b.ln('M170 115H224'); nd(b, 230, 70, 170, 90, 'Antwort', 'b', 1.7, 'pill');
  });
  D('example-mapping', 'Example Mapping: Story, Regeln, Beispiele, Fragen', b => {
    nd(b, 120, 12, 180, 46, 'Story', 'n', 1.6); nd(b, 20, 78, 100, 44, 'Regel', 'a', 1.5); nd(b, 160, 78, 100, 44, 'Regel', 'a', 1.5); nd(b, 20, 140, 100, 44, 'Beispiel', 'b', 1.4); nd(b, 160, 140, 100, 44, 'Beispiel', 'b', 1.4); nd(b, 296, 100, 110, 60, 'Frage?', 'c', 1.5);
    b.ln('M180 58L70 76'); b.ln('M240 58L210 76');
  });
  D('entscheidungstabelle', 'Entscheidungstabelle: Regeln als Spalten', b => {
    nd(b, 12, 14, 130, 44, 'Bedingung', 'a', 1.35); ['R1', 'R2', 'R3'].forEach((t, i) => nd(b, 150 + i * 88, 14, 80, 44, t, 'a', 1.4));
    [['Frei?', ['Ja', 'Ja', 'Nein']], ['Fahrer?', ['Ja', 'Nein', '–']], ['Aktion', ['OK', 'Warnen', 'Nein']]].forEach((r, j) => { nd(b, 12, 70 + j * 52, 130, 44, r[0], 'n', 1.4); r[1].forEach((c, i) => nd(b, 150 + i * 88, 70 + j * 52, 80, 44, c, j === 2 ? (i === 0 ? 'b' : i === 1 ? 'c' : 'n') : 'n', 1.4)); });
  });
  D('datenmodell', 'Datenmodell: Entitäten und Beziehungen', b => {
    nd(b, 150, 14, 120, 56, 'Tour', 'a', 1.6); nd(b, 12, 150, 120, 56, 'Fahrzeug', 'b', 1.4); nd(b, 288, 150, 120, 56, 'Auftrag', 'c', 1.4);
    b.plain('M180 70L100 148'); b.plain('M240 70L320 148'); tx(b, 168, 96, '1', null, {k: 1.4}); tx(b, 112, 124, 'n', null, {k: 1.4}); tx(b, 252, 96, '1', null, {k: 1.4}); tx(b, 308, 124, 'n', null, {k: 1.4});
  });
  D('sequenzdiagramm', 'Sequenzdiagramm: Nachrichten in Reihenfolge', b => {
    [['Nutzer', 40], ['App', 210], ['ERP', 380]].forEach(c => { nd(b, c[1] - 55, 10, 110, 40, c[0], 'a', 1.4); b.ln(`M${c[1]} 52V220`, true); });
    b.ln('M44 90H206'); b.ln('M214 130H376'); b.ln('M376 168H214'); b.ln('M206 202H44'); tx(b, 125, 76, 'speichern', null, {k: 1.2}); tx(b, 295, 116, 'prüfen', null, {k: 1.2}); tx(b, 295, 154, 'frei?', null, {k: 1.2});
  });
  D('dot-voting', 'Dot Voting: Punkte auf Favoriten', b => {
    [['Idee A', 5, 'a'], ['Idee B', 3, 'b'], ['Idee C', 1, 'n']].forEach((r, i) => { nd(b, 12, 18 + i * 68, 150, 54, r[0], r[2], 1.5); for (let j = 0; j < r[1]; j++) b.shape('ellipse', 186 + j * 40, 28 + i * 68, 32, 32, 'c'); });
  });
  D('rice', 'RICE: vier Faktoren zu einem Wert', b => {
    nd(b, 12, 20, 76, 50, 'R', 'a', 1.9); tx(b, 100, 45, '×', null, {k: 1.9}); nd(b, 116, 20, 76, 50, 'I', 'a', 1.9); tx(b, 204, 45, '×', null, {k: 1.9}); nd(b, 220, 20, 76, 50, 'C', 'a', 1.9);
    b.plain('M12 96H296'); nd(b, 112, 120, 76, 50, 'E', 'c', 1.9); tx(b, 330, 95, '=', null, {k: 2}); nd(b, 346, 66, 60, 60, 'Wert', 'k', 1.3, 'ellipse');
  });
  D('kosten-nutzen', 'Kosten-Nutzen: zwei Säulen im Vergleich', b => {
    nd(b, 70, 90, 110, 120, 'Kosten', 'c', 1.5); nd(b, 240, 30, 110, 180, 'Nutzen', 'b', 1.5); tx(b, 210, 120, '<', null, {k: 2.4});
  });
  D('affinity-estimation', 'Affinity Estimation: Karten nach Grösse', b => {
    [['1', 4], ['2', 3], ['3', 3], ['5', 2], ['8', 1]].forEach((c, i) => { tx(b, 44 + i * 82, 20, c[0], null, {k: 1.8, w: 700}); for (let j = 0; j < c[1]; j++) nd(b, 12 + i * 82, 44 + j * 44, 68, 36, '', ['n', 'a', 'a', 'b', 'c'][i], 1); });
  });
  D('release-planning', 'Release-Planung: Releases auf einer Zeitachse', b => {
    b.ln('M12 190H408'); [['Release 1', 12, 150, 'a'], ['Release 2', 166, 120, 'b'], ['Release 3', 292, 116, 'n']].forEach(r => { nd(b, r[1], 70, r[2], 70, r[0], r[3], 1.4); b.shape('diamond', r[1] + r[2] - 34, 164, 28, 28, 'c'); }); tx(b, 12, 36, 'Spanne statt Stichtag', null, {a: 'start', k: 1.5});
  });
  D('usability-test', 'Usability-Test: Nutzer löst Aufgaben, Team schaut zu', b => {
    person(b, 50, 70); nd(b, 110, 60, 140, 100, '', 'n'); nd(b, 124, 72, 112, 60, 'Aufgabe', 'a', 1.3); b.ring(310, 100, 16); b.ring(360, 100, 16); b.ring(335, 150, 16); tx(b, 335, 200, 'Team', null, {k: 1.5});
  });
  D('retrospektive', 'Retrospektive: Rückblick in drei Spalten', b => {
    [['Gut', 'b'], ['Besser', 'c'], ['Ideen', 'a']].forEach((c, i) => { nd(b, 12 + i * 138, 14, 130, 48, c[0], c[1], 1.5); nd(b, 22 + i * 138, 76, 110, 48, '', c[1], 1); nd(b, 22 + i * 138, 134, 110, 48, '', 'n', 1); });
  });
})();

// Ausschnitt je Grafik (x0, y0, x1, y1 des Inhalts), automatisch erzeugt mit tools/crop-kartengrafik.mjs
const KVB = {"interview":[34,22,386,186],"workshop":[22,24,402,204],"beobachtung":[18,34,402,208],"persona":[30,14,390,216],"fragebogen":[30,24,390,227],"dokumentenanalyse":[22,30,404,208],"use-cases":[18,14,400,220],"akzeptanzkriterien":[12,38,408,158],"dor-dod":[10,62,410,202],"nfr":[20,20,400,204],"pflichtenheft":[90,10,330,220],"produktvision":[40,14,380,220],"glossar":[18,16,402,210],"geschaeftsregeln":[18,14,408,216],"story-splitting":[12,20,400,204],"wsjf":[14,20,408,200],"story-points":[18,71,419,225],"product-backlog":[14,14,406,226],"refinement":[10,46,410,150],"story-mapping":[10,14,410,212],"sprint-planning":[10,40,410,190],"review":[30,14,404,216],"prototyping":[120,8,300,222],"change-management":[10,70,410,225],"abnahmetest":[14,20,408,192],"jira":[12,12,418,218],"miro":[14,20,400,210],"drawio":[10,14,410,216],"plantuml":[10,20,410,212],"confluence":[10,14,410,216],"figma":[14,20,406,210],"cucumber":[10,14,410,216],"enterprise-architect":[8,8,412,222],"customer-journey-map":[12,14,414,225],"jobs-to-be-done":[24,16,396,214],"value-proposition-canvas":[12,36,408,196],"rich-picture":[14,14,406,220],"empathy-map":[12,14,408,216],"fokusgruppe":[60,4,368,224],"brainstorming":[14,16,408,212],"contextual-inquiry":[24,60,396,207],"spike":[20,45,400,217],"example-mapping":[20,12,406,184],"entscheidungstabelle":[12,14,406,218],"datenmodell":[12,14,408,206],"sequenzdiagramm":[-15,10,435,220],"dot-voting":[12,18,378,208],"rice":[12,20,406,170],"kosten-nutzen":[70,30,350,210],"affinity-estimation":[12,6,408,212],"release-planning":[12,24,408,192],"usability-test":[24,60,376,212],"retrospektive":[12,14,418,182]};
Object.keys(KV).forEach(id => { const f = KV[id]; KV[id] = () => { const c = KVB[id]; const svg = f(); if (!c) return svg; const p = 10, w = c[2] - c[0] + 2 * p, h = c[3] - c[1] + 2 * p; return svg.replace('viewBox="0 0 420 230"', `viewBox="${c[0] - p} ${c[1] - p} ${w} ${h}"`); }; });

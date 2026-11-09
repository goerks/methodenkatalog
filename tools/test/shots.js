// Screenshots in drei Breiten (Mobile 390, Tablet 820, Desktop 1440) für Start, Detailseite, Kategorien, Karten.
// Aufruf: ... node tools/test/shots.js <Präfix> [Methoden-ID]  → <Präfix>-m|t|d-<Ansicht>.png
const {chromium} = require('playwright'); const path = require('path');
const URL = 'file://' + path.resolve(__dirname, '../../index.html'); const tag = process.argv[2] || 'shot', id = process.argv[3] || 'user-stories';
(async () => {
  const b = await chromium.launch();
  for (const [k, [w, h]] of Object.entries({m: [390, 844], t: [820, 1100], d: [1440, 900]})) {
    const p = await b.newPage({viewport: {width: w, height: h}});
    for (const [n, hash] of [['start', ''], ['methode', '#' + id], ['kategorien', '#kategorien'], ['karten', '#karten']]) { await p.goto(URL + hash); await p.waitForTimeout(500); await p.screenshot({path: `${tag}-${k}-${n}.png`, fullPage: true}); }
  } await b.close();
})();

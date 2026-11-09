// Erzeugt alle Factsheets als PDF und prüft, dass jedes auf eine Seite passt (Regel: höchstens zwei, Ziel eine).
// Aufruf: NODE_PATH=$(npm root -g) node tools/test/factsheets.js [Ausgabeordner]   (Seitenzahl: pdfinfo aus poppler)
const {chromium} = require('playwright'); const path = require('path'), fs = require('fs'), cp = require('child_process');
const URL = 'file://' + path.resolve(__dirname, '../../index.html'); const out = path.resolve(process.argv[2] || 'factsheets-out'); fs.mkdirSync(out, {recursive: true});
(async () => {
  const b = await chromium.launch(), p = await b.newPage({viewport: {width: 1100, height: 900}}); const err = [];
  p.on('pageerror', x => err.push(String(x))); await p.goto(URL); await p.waitForTimeout(600);
  const ids = await p.evaluate(() => [...new Set(M.concat(typeof TL !== 'undefined' ? TL : []).map(m => m.id))]); const multi = [];
  for (const id of ids) {
    await p.evaluate(id => { let r = document.getElementById('printroot'); if (!r) { r = document.createElement('div'); r.id = 'printroot'; document.body.appendChild(r); } r.innerHTML = Factsheet.fit(BY[id]); }, id);
    const f = path.join(out, id + '.pdf'); await p.pdf({path: f, preferCSSPageSize: true, printBackground: true});
    const n = +(cp.execSync(`pdfinfo "${f}"`).toString().match(/Pages:\s+(\d+)/) || [])[1]; if (n > 1) multi.push(`${id}:${n}`);
  }
  console.log(ids.length, 'Factsheets | mehrseitig:', multi.length ? multi : 'keine', '| JS-Fehler:', err.length ? err : 'keine'); await b.close();
})();

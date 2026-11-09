// Alle Karten + Testblatt als Duplex-PDF (zum Prüfen des Drucklayouts). Aufruf: ... node tools/test/cards-pdf.js out.pdf
const {chromium} = require('playwright'); const path = require('path');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage(); await p.goto('file://' + path.resolve(__dirname, '../../index.html') + '#karten'); await p.waitForTimeout(600);
  await p.evaluate(() => { M.forEach(m => m.nr && KS.sel.add(m.id)); const r = document.createElement('div'); r.id = 'printroot'; document.body.appendChild(r); r.innerHTML = Cards.pages([...KS.sel], true).map(x => x.f + x.b).join('') + Cards.test().map(x => x.f + x.b).join(''); });
  await p.pdf({path: process.argv[2] || 'methodenkarten.pdf', preferCSSPageSize: true, printBackground: true}); await b.close();
})();

// Rendert die Kartengrafiken (KV) einzelner Methoden gross nebeneinander. Aufruf: ... node tools/test/grafiken.js out.png id1 id2 ...
const {chromium} = require('playwright'); const path = require('path');
(async () => {
  const b = await chromium.launch(), p = await b.newPage({viewport: {width: 1300, height: 900}, deviceScaleFactor: 1.3}); const err = []; p.on('pageerror', x => err.push(String(x)));
  await p.goto('file://' + path.resolve(__dirname, '../../index.html')); await p.waitForTimeout(800);
  await p.evaluate(ids => { document.body.innerHTML = '<div style="display:grid;grid-template-columns:repeat(3,400px);gap:14px;padding:14px;background:#fff">' + ids.map(id => `<div style="background:#F2F4F9;padding:4px"><div style="width:390px">${KV[id]()}</div><small>${id}</small></div>`).join('') + '</div>'; }, process.argv.slice(3));
  await p.waitForTimeout(400); await p.screenshot({path: process.argv[2], fullPage: true}); console.log('JS-Fehler:', err.length ? err : 'keine'); await b.close();
})();

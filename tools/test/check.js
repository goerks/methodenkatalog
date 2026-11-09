// Prüft alle Karten (Vorder- und Rückseite) auf Textüberlauf und die Seite auf JS-Fehler.
// Aufruf: NODE_PATH=$(npm root -g) node tools/test/check.js
const {chromium} = require('playwright'); const path = require('path');
const URL = 'file://' + path.resolve(__dirname, '../../index.html');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({viewport: {width: 1280, height: 900}}); const err = [];
  p.on('pageerror', x => err.push(String(x)));
  await p.goto(URL + '#karten'); await p.waitForTimeout(800);
  const over = await p.evaluate(() => {
    const o = []; const host = document.createElement('div'); host.style.cssText = 'position:absolute;left:0;top:0;width:260px'; document.body.appendChild(host);
    for (const m of M.filter(x => x.nr)) for (const [k, fn] of [['vorne', Cards.front], ['hinten', Cards.back]]) {
      host.innerHTML = fn(m); const c = host.querySelector('.cin'); if (c.scrollHeight - c.clientHeight > 1) o.push(`${m.id}:${k}:${c.scrollHeight - c.clientHeight}px`);
    } return o;
  });
  console.log('Karten mit Überlauf:', over.length ? over : 'keine', '| JS-Fehler:', err.length ? err : 'keine');
  await b.close(); process.exit(over.length || err.length ? 1 : 0);
})();

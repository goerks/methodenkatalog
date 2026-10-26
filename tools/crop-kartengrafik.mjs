// Berechnet den Ausschnitt jeder Kartengrafik im Browser und schreibt ihn in js/kartengrafik.js (Zeile «const KVB = …»).
// Aufruf: NODE_PATH=$(npm root -g) node tools/crop-kartengrafik.mjs   (Playwright nötig)
import {createRequire} from 'module'; import fs from 'fs'; import path from 'path'; import {fileURLToPath} from 'url';
const require = createRequire(import.meta.url), {chromium} = require('playwright');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const b = await chromium.launch(), p = await b.newPage();
await p.goto('file://' + root + '/index.html'); await p.waitForTimeout(500);
const r = await p.evaluate(() => { const out = {}, h = document.createElement('div'); h.style.cssText = 'position:absolute;left:0;top:0;width:420px'; document.body.appendChild(h);
  for (const k of Object.keys(KV)) { KVB[k] = null; h.innerHTML = KV[k](); const svg = h.querySelector('svg'); let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    [...svg.children].forEach(c => { if (c.tagName === 'defs' || c.classList.contains('vbg')) return; const q = c.getBBox(); if (!q.width && !q.height) return; x0 = Math.min(x0, q.x); y0 = Math.min(y0, q.y); x1 = Math.max(x1, q.x + q.width); y1 = Math.max(y1, q.y + q.height); });
    out[k] = [x0, y0, x1, y1].map(Math.round); } return out; });
await b.close();
const f = root + '/js/kartengrafik.js'; let s = fs.readFileSync(f, 'utf8');
s = s.replace(/const KVB = .*;\n/, 'const KVB = ' + JSON.stringify(r) + ';\n'); fs.writeFileSync(f, s); console.log(Object.keys(r).length + ' Ausschnitte geschrieben');

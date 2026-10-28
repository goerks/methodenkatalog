// Wissenslandkarte: Knoten ordnen sich über Kräfte selbst an. Viel verbundene Methoden rücken in die Mitte.
const Graph = (() => {
  const POS = new Map();           // gemerkte Positionen, damit die Karte beim Wiederöffnen gleich aussieht
  let svg, root, wrap, ro, cb = {}, W = 900, H = 560, nodes = [], links = [], byId = {}, el = {}, tr = {x: 0, y: 0, k: 1};
  let sel = null, hover = null, path = null, tools = false, erg = false, alpha = 0, raf = 0, drag = null, pan = null, moved = false, touched = false, uid = 0;
  const reduce = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rng = (s => () => (s = (s * 16807) % 2147483647) / 2147483647)(7);
  const label = m => m.kz || plain(m.n).replace(/\s*\(.*?\)/g, '');
  const radius = m => Math.min(22, 7 + 2.6 * Math.sqrt(DEG[m.id]));
  const SC = Math.sqrt(Math.max(1, M.filter(m => m.f !== "werkzeug").length) / 44), REP = 30000 * SC * SC, LEN = 105 * SC, GR = .0015 / SC, GD = .00045 / SC;
  const lw = m => Math.max(24, label(m).length * 6.3 + 8);
  let GX = 1;
  const CATS_ORDER = ['erm', 'dok', 'mod', 'prio', 'plan', 'qs', 'tool'];

  function setup() {
    const old = byId;
    nodes = M.filter(m => tools || !isTool(m)).map(m => {
      const p = POS.get(m.id), a = (CATS_ORDER.indexOf(m.c) / 7) * 2 * Math.PI + (rng() - .5) * .9, r0 = 120 + rng() * 140;
      return {id: m.id, m, r: radius(m), lw: lw(m), x: p ? p.x : Math.cos(a) * r0, y: p ? p.y : Math.sin(a) * r0, vx: 0, vy: 0, fixed: false, fresh: !p};
    });
    byId = Object.fromEntries(nodes.map(n => [n.id, n]));
    // Neue Werkzeuge starten in der Nähe der Methoden, die sie unterstützen
    nodes.filter(n => n.fresh && isTool(n.m)).forEach(n => {
      const sp = n.m.sp.map(id => byId[id]).filter(Boolean);
      if (sp.length) { n.x = sp.reduce((s, q) => s + q.x, 0) / sp.length + (rng() - .5) * 40; n.y = sp.reduce((s, q) => s + q.y, 0) / sp.length + (rng() - .5) * 40; }
    });
    links = EDGES.filter(e => byId[e.a] && byId[e.b] && (erg || e.t !== 'e')).map(e => ({
      e, s: byId[e.a], t: byId[e.b], len: {f: LEN, e: LEN * 1.3, a: LEN * 1.6, t: LEN * 1.8}[e.t], k: {f: .1, e: .06, a: .035, t: .02}[e.t]
    }));
  }

  // Ein Rechenschritt. a = Wärme (1 voll bewegt, 0 ruhig)
  function tick(a) {
    const n = nodes.length;
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
      const p = nodes[i], q = nodes[j];
      let dx = q.x - p.x, dy = q.y - p.y, d2 = dx * dx + dy * dy;
      if (d2 < .01) { dx = rng() - .5; dy = rng() - .5; d2 = dx * dx + dy * dy + .01; }
      const d = Math.sqrt(d2), f = Math.min(30, REP * a / d2), min = p.r + q.r + 14;
      let fx = dx / d * f, fy = dy / d * f;
      if (d < min) { const push = (min - d) * .22; fx += dx / d * push; fy += dy / d * push; }
      p.vx -= fx; p.vy -= fy; q.vx += fx; q.vy += fy;
      // Beschriftungen als Rechtecke: überlappende Kästen werden entlang der kleineren Überlappung getrennt
      const hx = Math.max(p.r, p.lw / 2) + Math.max(q.r, q.lw / 2) + 4, hy = p.r + q.r + 18;
      const ox = hx - Math.abs(dx), oy = hy - Math.abs(dy);
      if (ox > 0 && oy > 0) {
        if (ox * .6 < oy) { const s = Math.sign(dx) || 1, m = ox * .12; p.vx -= s * m; q.vx += s * m; }
        else { const s = Math.sign(dy) || 1, m = oy * .12; p.vy -= s * m; q.vy += s * m; }
      }
    }
    for (const l of links) {
      const dx = l.t.x - l.s.x, dy = l.t.y - l.s.y, d = Math.sqrt(dx * dx + dy * dy) || .01, f = (d - l.len - l.s.r - l.t.r) * l.k * (.3 + a * .7);
      const fx = dx / d * f, fy = dy / d * f;
      l.s.vx += fx; l.s.vy += fy; l.t.vx -= fx; l.t.vy -= fy;
    }
    // Gruppenanziehung nach Kategorie und Zug zur Mitte (stärker für viel verbundene Methoden)
    const cen = {};
    nodes.forEach(p => { const c = cen[p.m.c] || (cen[p.m.c] = {x: 0, y: 0, n: 0}); c.x += p.x; c.y += p.y; c.n++; });
    for (const p of nodes) {
      const c = cen[p.m.c];
      p.vx += (c.x / c.n - p.x) * .006 * (a + .2); p.vy += (c.y / c.n - p.y) * .006 * (a + .2);
      const g = GR + Math.min(DEG[p.id], 16) * GD;
      p.vx -= p.x * g * GX; p.vy -= p.y * g;
    }
    for (const p of nodes) {
      if (p.fixed) { p.vx = p.vy = 0; continue; }
      p.vx *= .8; p.vy *= .8; p.x += p.vx; p.y += p.vy;
    }
  }
  const settle = (iters, from) => { for (let i = 0; i < iters; i++) tick(Math.max(.02, from * (1 - i / iters))); };

  function build() {
    const mk = `m${++uid}`;
    el = {};
    const E = links.map((l, i) => `<line data-i="${i}" stroke="var(--ink)" stroke-width="1.3" stroke-linecap="round"${l.e.t === 'e' ? ' stroke-dasharray="5 4"' : l.e.t === 'a' ? ' stroke-dasharray="1 4"' : l.e.t === 't' ? ' stroke-dasharray="2 5"' : ''} data-mk="${mk}"/>`).join('');
    const N = nodes.map(n => `<g class="gn" data-id="${n.id}" tabindex="0" role="button" aria-label="${esc(plain(n.m.n))}"><circle class="hit" r="${n.r + 8}" fill="transparent"/>${formPath(n.m.f, 0, 0, n.r)} fill="var(--pf-${phk(n.m)})" stroke="var(--p-${phk(n.m)})" stroke-width="2"/><text y="${n.r + 13}" text-anchor="middle" font-size="11.5" fill="var(--ink)" stroke="var(--map)" stroke-width="3.5" paint-order="stroke" stroke-linejoin="round" pointer-events="none">${esc(label(n.m))}</text></g>`).join('');
    root.innerHTML = `<defs><marker id="${mk}" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker></defs><g class="gz"><g class="ge">${E}</g><polyline class="gp" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0"/><g class="gnn">${N}</g></g>`;
    el.z = root.querySelector('.gz'); el.p = root.querySelector('.gp');
    el.lines = [...root.querySelectorAll('line')]; el.nodes = {};
    root.querySelectorAll('.gn').forEach(g => el.nodes[g.dataset.id] = g);
    place(); styles(); transform();
  }
  function place() {
    links.forEach((l, i) => {
      const dx = l.t.x - l.s.x, dy = l.t.y - l.s.y, d = Math.sqrt(dx * dx + dy * dy) || 1, ux = dx / d, uy = dy / d, ln = el.lines[i];
      ln.setAttribute('x1', l.s.x + ux * (l.s.r + 2)); ln.setAttribute('y1', l.s.y + uy * (l.s.r + 2));
      ln.setAttribute('x2', l.t.x - ux * (l.t.r + (l.e.t === 'f' ? 5 : 2))); ln.setAttribute('y2', l.t.y - uy * (l.t.r + (l.e.t === 'f' ? 5 : 2)));
    });
    nodes.forEach(n => el.nodes[n.id].setAttribute('transform', `translate(${n.x.toFixed(1)} ${n.y.toFixed(1)})`));
    if (path) el.p.setAttribute('points', path.map(id => byId[id]).filter(Boolean).map(n => `${n.x.toFixed(1)},${n.y.toFixed(1)}`).join(' '));
  }
  function styles() {
    const f = sel || hover, near = new Set();
    if (f && byId[f]) { near.add(f); links.forEach(l => { if (l.e.a === f || l.e.b === f) { near.add(l.e.a); near.add(l.e.b); } }); }
    const P = path ? new Set(path) : null;
    nodes.forEach(n => {
      const g = el.nodes[n.id], ok = pass(n.m);
      let o = 1;
      if (!ok) o = .14; else if (f && !near.has(n.id)) o = .14; else if (P && !P.has(n.id)) o = .22;
      g.style.opacity = o;
      const sh = g.children[1];
      sh.setAttribute('stroke-width', n.id === sel ? 4 : (P && P.has(n.id)) ? 3 : 2);
      sh.setAttribute('stroke', n.id === sel ? 'var(--ink)' : `var(--p-${phk(n.m)})`);
      const lab = g.querySelector('text');
      lab.style.opacity = (!ok || (f && !near.has(n.id))) ? 0 : (DEG[n.id] < (W < 600 ? 5 : 3) && tr.k < (W < 600 ? 1.1 : .8) && !near.has(n.id) && !(P && P.has(n.id))) ? 0 : 1;
    });
    links.forEach((l, i) => {
      const ln = el.lines[i], ok = pass(l.s.m) && pass(l.t.m), hot = f && (l.e.a === f || l.e.b === f);
      const base = {f: .3, e: .22, a: .22, t: .18}[l.e.t];
      ln.setAttribute('stroke-opacity', !ok ? .04 : hot ? .95 : f ? .05 : P ? .1 : base);
      ln.setAttribute('stroke-width', hot ? 2.4 : 1.3);
      if (l.e.t === 'f') { if (hot) ln.setAttribute('marker-end', `url(#${ln.dataset.mk})`); else ln.removeAttribute('marker-end'); }
    });
    el.p.setAttribute('stroke-opacity', path ? .85 : 0);
  }
  const transform = () => el.z && el.z.setAttribute('transform', `translate(${tr.x.toFixed(1)} ${tr.y.toFixed(1)}) scale(${tr.k.toFixed(3)})`);
  function fit() {
    if (!nodes.length) return;
    let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
    nodes.forEach(n => { const hw = Math.max(n.r, n.lw / 2) + 8; x0 = Math.min(x0, n.x - hw); x1 = Math.max(x1, n.x + hw); y0 = Math.min(y0, n.y - n.r - 12); y1 = Math.max(y1, n.y + n.r + 26); });
    tr.k = Math.max(.35, Math.min(1.5, W / (x1 - x0), H / (y1 - y0)));
    tr.x = W / 2 - (x0 + x1) / 2 * tr.k; tr.y = H / 2 - (y0 + y1) / 2 * tr.k; transform(); styles();
  }
  const remember = () => nodes.forEach(n => POS.set(n.id, {x: n.x, y: n.y}));
  function loop() {
    raf = 0;
    if (alpha < .004) { remember(); return; }
    for (let i = 0; i < 2; i++) { tick(alpha); alpha *= .985; }
    place(); raf = requestAnimationFrame(loop);
  }
  function heat(a) {
    alpha = Math.max(alpha, a);
    if (reduce()) { settle(60, alpha); alpha = 0; place(); remember(); return; }
    if (!raf) raf = requestAnimationFrame(loop);
  }
  function world(e) { const r = svg.getBoundingClientRect(); return {x: (e.clientX - r.left - tr.x) / tr.k, y: (e.clientY - r.top - tr.y) / tr.k, sx: e.clientX - r.left, sy: e.clientY - r.top}; }
  function bind() {
    const ptr = new Map(); let pinch = 0;
    const dist = () => { const [a, b] = [...ptr.values()]; return Math.hypot(a.x - b.x, a.y - b.y) || 1; };
    svg.addEventListener('pointerdown', e => {
      ptr.set(e.pointerId, {x: e.clientX, y: e.clientY});
      if (ptr.size === 2) { if (drag) drag.n.fixed = false; drag = pan = null; moved = true; pinch = dist(); return; }
      const g = e.target.closest('.gn'); moved = false; touched = true; svg.setPointerCapture(e.pointerId);
      if (g) { const n = byId[g.dataset.id], w = world(e); drag = {n, dx: n.x - w.x, dy: n.y - w.y, sx: e.clientX, sy: e.clientY}; n.fixed = true; }
      else pan = {x: e.clientX, y: e.clientY};
    });
    svg.addEventListener('pointermove', e => {
      if (ptr.has(e.pointerId)) ptr.set(e.pointerId, {x: e.clientX, y: e.clientY});
      if (ptr.size === 2 && pinch) {
        const d = dist(), [a, b] = [...ptr.values()], r = svg.getBoundingClientRect();
        zoom(d / pinch, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top); pinch = d; return;
      }
      if (drag) {
        if (Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) > 4) moved = true;
        if (moved) { const w = world(e); drag.n.x = w.x + drag.dx; drag.n.y = w.y + drag.dy; heat(.3); place(); }
      } else if (pan) {
        const dx = e.clientX - pan.x, dy = e.clientY - pan.y; if (Math.abs(dx) + Math.abs(dy) > 3) moved = true;
        tr.x += dx; tr.y += dy; pan.x = e.clientX; pan.y = e.clientY; transform();
      } else if (e.pointerType === 'mouse') {
        const g = e.target.closest('.gn'), id = g ? g.dataset.id : null;
        if (id !== hover) { hover = id; styles(); }
      }
    });
    const up = e => {
      ptr.delete(e.pointerId); if (!ptr.size) pinch = 0;
      if (drag) { drag.n.fixed = false; if (!moved) choose(drag.n.id === sel ? null : drag.n.id); }
      else if (pan && !moved) choose(null);
      drag = pan = null;
    };
    svg.addEventListener('pointerup', up); svg.addEventListener('pointercancel', e => { ptr.delete(e.pointerId); pinch = 0; if (drag) drag.n.fixed = false; drag = pan = null; });
    svg.addEventListener('pointerleave', () => { if (hover) { hover = null; styles(); } });
    svg.addEventListener('wheel', e => { if (!e.ctrlKey && !e.metaKey) return; e.preventDefault(); const w = world(e); zoom(e.deltaY < 0 ? 1.12 : .89, w.sx, w.sy); }, {passive: false});
    svg.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { const g = e.target.closest('.gn'); if (g) { e.preventDefault(); choose(g.dataset.id === sel ? null : g.dataset.id); } } });
    svg.addEventListener('dblclick', e => { const g = e.target.closest('.gn'); if (g && cb.onOpen) cb.onOpen(g.dataset.id); });
  }
  function choose(id) { sel = id; styles(); if (cb.onSelect) cb.onSelect(id); }
  function zoom(f, sx, sy) {
    sx = sx == null ? W / 2 : sx; sy = sy == null ? H / 2 : sy; touched = true;
    const k = Math.max(.3, Math.min(3, tr.k * f)), r = k / tr.k;
    tr.x = sx - (sx - tr.x) * r; tr.y = sy - (sy - tr.y) * r; tr.k = k; transform(); styles();
  }
  function size() {
    const w = Math.max(300, wrap.clientWidth || 900), h = w < 600 ? Math.round(Math.max(460, Math.min(640, w * 1.5))) : Math.max(420, Math.min(660, Math.round(w * .68)));
    GX = Math.max(.35, Math.min(1.6, h / w)) ** 1.3;
    W = w; H = h; svg.setAttribute('viewBox', `0 0 ${W} ${H}`); svg.style.height = H + 'px';
  }
  return {
    mount(container, o) {
      this.unmount(); wrap = container; cb = o || {}; touched = false;
      svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('role', 'group'); svg.setAttribute('aria-label', 'Wissenslandkarte der Methoden'); svg.style.cssText = 'display:block;width:100%;touch-action:none;user-select:none';
      root = svg; wrap.appendChild(svg); size();
      setup(); const fresh = nodes.some(n => n.fresh);
      settle(fresh ? 320 : 30, fresh ? 1 : .08);
      build(); bind(); remember();
      if (!touched) fit();
      if (window.ResizeObserver) { ro = new ResizeObserver(() => { const w = wrap.clientWidth; if (Math.abs(w - W) > 8) { size(); if (!touched) fit(); } }); ro.observe(wrap); }
    },
    unmount() { if (raf) cancelAnimationFrame(raf); raf = 0; if (ro) ro.disconnect(); ro = null; if (nodes.length) remember(); if (svg && svg.parentNode) svg.parentNode.removeChild(svg); svg = null; el = {}; },
    refresh() { if (svg) styles(); },
    select(id) { sel = id; if (svg) styles(); },
    selected: () => sel,
    setErg(on) { erg = !!on; if (!svg) return; setup(); settle(80, .5); build(); fit(); },
    setTools(on) { tools = !!on; if (!svg) return; setup(); settle(80, .5); build(); fit(); if (sel && !byId[sel]) { sel = null; if (cb.onSelect) cb.onSelect(null); } },
    setPath(ids) { path = ids && ids.length ? ids : null; if (svg) { place(); styles(); } },
    fit() { touched = false; fit(); }, zoomIn() { zoom(1.25); }, zoomOut() { zoom(.8); },
    reset() { POS.clear(); if (svg) { setup(); settle(320, 1); build(); touched = false; fit(); remember(); } },
    _nodes: () => nodes
  };
})();

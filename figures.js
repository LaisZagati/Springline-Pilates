/* Springline — schematic movement studies.
   A pose is 13 numbers: [hipX, hipY, lumbar, thoracic, head, thighNear, shinNear, thighFar, shinFar, upperArmNear, forearmNear, upperArmFar, forearmFar]
   Angles are absolute degrees: 0 = right, 90 = up, 180 = left, 270 = down. Poses are drawn in a 320x200 frame where the floor is y = 176.
   fig = { st: stage, a: start pose, b: finish pose, f: 1 to mirror, pr: props } */
window.SLFig = (function () {
  const LEN = { t1: 28, t2: 28, hd: 17, th: 42, sh: 40, ua: 30, fa: 28 };
  const STAGE_DY = { mat: 0, table: -36, cadFloor: 6, wall: 0 };
  const ANCHORS = {
    table: { topL:[40,14], topR:[280,14], topC:[110,14], upL:[40,44], upR:[280,44], midL:[40,92], midR:[280,92], ptPivot:[280,100], botR:[280,140] },
    cadFloor: { topL:[40,14], topR:[280,14], topC:[110,14], upL:[40,44], upR:[280,44], midL:[40,92], midR:[280,92], ptPivot:[280,100], botR:[280,140] },
    wall: { w1:[288,24], w2:[288,56], w3:[288,88], w4:[288,120], w5:[288,152], wPivot:[288,108] },
    mat: {}
  };
  const rad = a => a * Math.PI / 180;
  const step = (p, a, l) => [p[0] + l * Math.cos(rad(a)), p[1] - l * Math.sin(rad(a))];

  function solve(q, flip, dy) {
    const [hx, hy, t1, t2, hd, thL, shL, thR, shR, aL, fL, aR, fR] = q;
    const H = [hx, hy], W = step(H, t1, LEN.t1), S = step(W, t2, LEN.t2), Hd = step(S, hd, LEN.hd);
    const kL = step(H, thL, LEN.th), ftL = step(kL, shL, LEN.sh), kR = step(H, thR, LEN.th), ftR = step(kR, shR, LEN.sh);
    const eL = step(S, aL, LEN.ua), hL = step(eL, fL, LEN.fa), eR = step(S, aR, LEN.ua), hR = step(eR, fR, LEN.fa);
    const pts = { H, W, S, Hd, kL, fL: ftL, kR, fR: ftR, eL, hL, eR, hR };
    for (const k in pts) { const p = pts[k]; pts[k] = [flip ? 320 - p[0] : p[0], p[1] + dy]; }
    return pts;
  }
  function lerpAngle(a, b, t) { let d = ((b - a + 540) % 360) - 180; return a + d * t; }
  function poseAt(fig, t) {
    if (t <= 0) return fig.a; if (t >= 1) return fig.b;
    return fig.a.map((v, i) => i < 2 ? v + (fig.b[i] - v) * t : lerpAngle(v, fig.b[i], t));
  }
  const f1 = n => Math.round(n * 10) / 10;
  const pl = (...ps) => 'M' + ps.map(p => f1(p[0]) + ' ' + f1(p[1])).join(' L');

  function spring(a, b) {
    const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1;
    const ux = dx / len, uy = dy / len, nx = -uy, ny = ux, lead = Math.min(10, len * 0.15), coils = Math.max(6, Math.round(len / 9));
    let d = `M${f1(a[0])} ${f1(a[1])} L${f1(a[0] + ux * lead)} ${f1(a[1] + uy * lead)}`;
    const span = len - lead * 2;
    for (let i = 1; i <= coils; i++) {
      const s = lead + span * (i - 0.5) / coils, side = i % 2 ? 3.6 : -3.6;
      d += ` L${f1(a[0] + ux * s + nx * side)} ${f1(a[1] + uy * s + ny * side)}`;
    }
    d += ` L${f1(b[0] - ux * lead)} ${f1(b[1] - uy * lead)} L${f1(b[0])} ${f1(b[1])}`;
    return `<path class="sl-spring" d="${d}"/>`;
  }

  function stage(st) {
    if (st === 'table' || st === 'cadFloor') {
      return `<g class="sl-app">
        <line class="sl-floor" x1="8" y1="186" x2="312" y2="186"/>
        <rect class="sl-leg" x="50" y="146" width="7" height="40" rx="2"/><rect class="sl-leg" x="263" y="146" width="7" height="40" rx="2"/>
        <rect class="sl-frame" x="38" y="12" width="4" height="138"/><rect class="sl-frame" x="278" y="12" width="4" height="138"/>
        <rect class="sl-frame" x="38" y="12" width="244" height="4" rx="2"/>
        <rect class="sl-table" x="40" y="136" width="240" height="11" rx="4"/>
        <circle class="sl-eye" cx="40" cy="44" r="3"/><circle class="sl-eye" cx="280" cy="44" r="3"/><circle class="sl-eye" cx="40" cy="92" r="3"/><circle class="sl-eye" cx="280" cy="92" r="3"/>
      </g>`;
    }
    if (st === 'wall') {
      return `<g class="sl-app">
        <line class="sl-floor" x1="8" y1="182" x2="312" y2="182"/>
        <rect class="sl-wall" x="288" y="4" width="16" height="178" rx="3"/>
        ${[24,56,88,120,152].map(y => `<circle class="sl-eye" cx="288" cy="${y}" r="3.2"/>`).join('')}
        <rect class="sl-mat" x="34" y="176" width="236" height="6" rx="3"/>
      </g>`;
    }
    return `<g class="sl-app"><line class="sl-floor" x1="8" y1="182" x2="312" y2="182"/><rect class="sl-mat" x="44" y="176" width="248" height="6" rx="3"/></g>`;
  }

  function resolve(ref, pts, st) {
    if (Array.isArray(ref)) return ref;
    if (pts[ref]) return pts[ref];
    return (ANCHORS[st] || {})[ref] || [160, 20];
  }

  function body(fig, t) {
    const st = fig.st || 'mat';
    const p = solve(poseAt(fig, t), !!fig.f, STAGE_DY[st] || 0);
    let props = '';
    (fig.pr || []).forEach(pr => {
      const [type, a, b] = pr;
      if (type === 'spring') props += spring(resolve(b, p, st), resolve(a, p, st));
      else if (type === 'rod') { const A = resolve(a, p, st), B = resolve(b, p, st); props += `<path class="sl-rod" d="${pl(A, B)}"/>`; }
      else if (type === 'bar') { const A = resolve(a, p, st); props += `<circle class="sl-bar" cx="${f1(A[0])}" cy="${f1(A[1])}" r="5"/>`; }
      else if (type === 'loop') { const A = resolve(a, p, st); props += `<ellipse class="sl-loop" cx="${f1(A[0])}" cy="${f1(A[1])}" rx="6" ry="4"/>`; }
      else if (type === 'ring') { const A = resolve(a, p, st); props += `<circle class="sl-ring" cx="${f1(A[0] + 2)}" cy="${f1(A[1] + 4)}" r="9"/>`; }
      else if (type === 'band') { const A = resolve(a, p, st), B = resolve(b, p, st); props += `<path class="sl-band" d="${pl(A, B)}"/>`; }
      else if (type === 'roller') { const A = resolve(a, p, st); props += `<circle class="sl-roller" cx="${A[0]}" cy="${A[1]}" r="8"/>`; }
      else if (type === 'ball') { const A = resolve(a, p, st); props += `<circle class="sl-ball" cx="${A[0]}" cy="${A[1]}" r="12"/>`; }
    });
    return `<g class="sl-figure">
      <path class="sl-limb far" d="${pl(p.H, p.kR, p.fR)}"/>
      <path class="sl-limb far" d="${pl(p.S, p.eR, p.hR)}"/>
      ${props}
      <path class="sl-torso" d="${pl(p.H, p.W, p.S)}"/>
      <path class="sl-neck" d="${pl(p.S, p.Hd)}"/>
      <circle class="sl-head" cx="${f1(p.Hd[0])}" cy="${f1(p.Hd[1])}" r="10.5"/>
      <path class="sl-limb near" d="${pl(p.H, p.kL, p.fL)}"/>
      <path class="sl-limb near" d="${pl(p.S, p.eL, p.hL)}"/>
    </g>`;
  }

  function svg(fig, t = 1, label = '') {
    return `<svg class="sl-svg" viewBox="0 0 320 200" role="img" aria-label="${label}" focusable="false">${stage(fig.st)}<g class="sl-dyn">${body(fig, t)}</g></svg>`;
  }

  const ease = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  const reduced = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Animated player bound to a container element */
  function Player(el, fig, label) {
    el.innerHTML = svg(fig, 0, label);
    const dyn = el.querySelector('.sl-dyn');
    let t = 0, raf = 0, running = false, start = 0;
    const MOVE = 2300, HOLD = 700, CYCLE = (MOVE + HOLD) * 2;
    function draw(v) { t = v; dyn.innerHTML = body(fig, v); }
    function frame(now) {
      if (!el.isConnected) { running = false; return; }
      const c = (now - start) % CYCLE;
      let v;
      if (c < MOVE) v = ease(c / MOVE); else if (c < MOVE + HOLD) v = 1;
      else if (c < MOVE * 2 + HOLD) v = 1 - ease((c - MOVE - HOLD) / MOVE); else v = 0;
      draw(v);
      raf = requestAnimationFrame(frame);
    }
    const api = {
      play() { if (running) return; running = true; start = performance.now() - (t * MOVE); raf = requestAnimationFrame(frame); api.onchange && api.onchange(); },
      pause() { running = false; cancelAnimationFrame(raf); api.onchange && api.onchange(); },
      set(v) { api.pause(); draw(v); },
      get running() { return running; },
      onchange: null
    };
    if (!reduced()) api.play(); else draw(1);
    return api;
  }

  return { svg, Player };
})();

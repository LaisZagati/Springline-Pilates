/* Springline — app logic (no build step, no backend). */
(function () {
  'use strict';
  const I = window.SL_I18N, EX = window.SPRINGLINE || [], Fig = window.SLFig;
  const byId = Object.fromEntries(EX.map(e => [e.id, e]));
  const LEVELS = ['beginner', 'intermediate', 'advanced'];
  const APPS = ['cadillac', 'mat', 'wall'];
  const SECTIONS = ['warmup', 'mobility', 'main', 'strength', 'stretch', 'cooldown'];
  const FACETS = [['body', 'fBody'], ['obj', 'fObj'], ['eq', 'fEq'], ['pos', 'fPos'], ['mus', 'fMus']];
  const FIELD = { body: 'body', obj: 'obj', eq: 'eq', pos: 'pos', mus: 'mus' };

  /* ——— Storage ——— */
  const store = {
    get(k, d) { try { const v = localStorage.getItem('springline.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('springline.' + k, JSON.stringify(v)); } catch (e) { /* storage full or blocked */ } }
  };
  const uid = () => Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-3);

  const S = {
    lang: store.get('lang', 'en'),
    favs: new Set(store.get('favs', [])),
    plans: store.get('plans', null),
    active: store.get('active', null),
    q: '', lvl: 'all', f: { body: [], obj: [], eq: [], pos: [], mus: [] },
    lastList: [], filterApp: null
  };
  if (!Array.isArray(S.plans) || !S.plans.length) { S.plans = [{ id: uid(), name: '', items: [] }]; }
  if (!S.plans.find(p => p.id === S.active)) S.active = S.plans[0].id;
  const savePlans = () => { store.set('plans', S.plans); store.set('active', S.active); };
  const plan = () => S.plans.find(p => p.id === S.active);

  /* ——— Language helpers ——— */
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const idx = () => S.lang === 'es' ? 1 : 0;
  const tx = p => p ? p[idx()] : '';
  const bi = p => !p ? '' : (S.lang === 'both' && p[0] !== p[1]) ? `<span class="t-en">${p[0]}</span><span class="t-es" lang="es">${p[1]}</span>` : p[idx()];
  const ui = k => tx(I.ui[k]);
  const uiB = k => bi(I.ui[k]);
  const lab = (g, k) => (I[g] && I[g][k]) ? tx(I[g][k]) : k;
  const labB = (g, k) => (I[g] && I[g][k]) ? bi(I[g][k]) : k;
  function list(pair, ordered) {
    if (!pair) return '';
    const tag = ordered ? 'ol' : 'ul';
    if (S.lang === 'both' && pair[0].join() !== pair[1].join()) return `<${tag}>${pair[0].map((en, i) => `<li><span class="t-en">${en}</span><span class="t-es" lang="es">${pair[1][i] || ''}</span></li>`).join('')}</${tag}>`;
    return `<${tag}>${pair[idx()].map(x => `<li>${x}</li>`).join('')}</${tag}>`;
  }
  const planName = p => p.name || ui('untitled');

  /* ——— Icons ——— */
  const ico = {
    home: '<path d="M4 11.5 12 5l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/>',
    cadillac: '<path d="M4 4h16M5 4v16M19 4v16M5 14h14M8 14v6M16 14v6M19 9l-5 3"/>',
    mat: '<rect x="3" y="14" width="18" height="4" rx="2"/><circle cx="18" cy="9" r="2.2"/><path d="M6 14c2-3 6-5 10-4.5"/>',
    wall: '<path d="M19 3v18M5 21h14"/><circle cx="19" cy="7" r="1"/><circle cx="19" cy="12" r="1"/><path d="M18 7.5 9 11M9 11l-1.5 1"/><circle cx="7" cy="6.5" r="1.8"/><path d="M7 8.5V16l-2 5M7 16l2 5"/>',
    class: '<path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
    filter: '<path d="M4 7h16M7 12h10M10 17h4"/>',
    back: '<path d="M15 5 8 12l7 7"/>', fwd: '<path d="m9 5 7 7-7 7"/>',
    play: '<path d="M8 5.5v13l10.5-6.5z"/>', pause: '<path d="M8 5v14M16 5v14"/>',
    repeat: '<path d="M4 12a8 8 0 0 1 13.7-5.6L20 9M20 4v5h-5M20 12a8 8 0 0 1-13.7 5.6L4 15M4 20v-5h5"/>',
    stop: '<rect x="6" y="6" width="12" height="12" rx="2"/>',
    plus: '<path d="M12 5v14M5 12h14"/>', x: '<path d="M6 6l12 12M18 6 6 18"/>',
    grip: '<circle cx="9" cy="6" r="1.2"/><circle cx="15" cy="6" r="1.2"/><circle cx="9" cy="12" r="1.2"/><circle cx="15" cy="12" r="1.2"/><circle cx="9" cy="18" r="1.2"/><circle cx="15" cy="18" r="1.2"/>',
    up: '<path d="m6 15 6-6 6 6"/>', down: '<path d="m6 9 6 6 6-6"/>', trash: '<path d="M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13"/>',
    eye: '<path d="M12 3 2.5 20h19z"/><path d="M12 10v4.5M12 17.5v.5"/>',
    speaker: '<path d="M4 10v4h4l5 4V6L8 10z"/><path d="M16.5 9a4.5 4.5 0 0 1 0 6"/>',
    present: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4M8 20h8"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    wind: '<path d="M3 9h11a3 3 0 1 0-3-3M3 15h15a3 3 0 1 1-3 3M3 12h8"/>'
  };
  const svgI = (n, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${ico[n]}</svg>`;

  /* ——— Search & filter ——— */
  const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const INDEX = {};
  EX.forEach(e => {
    const parts = [...e.name, I.app[e.app].join(' '), I.ui[e.lvl].join(' '), e.style || ''];
    ['body', 'obj', 'eq', 'pos', 'mus'].forEach(g => (e[g] || []).forEach(k => I[g][k] && parts.push(I[g][k].join(' '))));
    parts.push(e.goal.join(' '));
    INDEX[e.id] = norm(parts.join(' | '));
  });
  function matches(e, app) {
    if (app && e.app !== app) return false;
    if (S.lvl !== 'all' && e.lvl !== S.lvl) return false;
    for (const [g] of FACETS) { const sel = S.f[g]; if (sel.length && !sel.some(k => (e[FIELD[g]] || []).includes(k))) return false; }
    const q = norm(S.q.trim());
    if (q) { const words = q.split(/\s+/); if (!words.every(w => INDEX[e.id].includes(w))) return false; }
    return true;
  }
  const facetCount = () => FACETS.reduce((n, [g]) => n + S.f[g].length, 0);

  /* ——— DOM helpers ——— */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const main = $('#main');
  let toastT;
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 1900); }

  /* ——— Voice guidance (Web Speech API) ——— */
  const Voice = {
    q: [], i: 0, playing: false, tok: 0, lang: 'en', listeners: new Set(), timer: 0,
    ok: 'speechSynthesis' in window,
    pick(lng) {
      if (!this.ok) return null;
      const vs = speechSynthesis.getVoices(); if (!vs.length) return null;
      const want = lng === 'es' ? ['es-ES', 'es-MX', 'es-US', 'es'] : ['en-GB', 'en-US', 'en-AU', 'en'];
      const nice = lng === 'es' ? /(Mónica|Monica|Paulina|Marisol|Helena|Elvira|Google español|Lucia|Lucía)/i : /(Serena|Samantha|Karen|Moira|Martha|Kate|Libby|Sonia|Google UK English Female|Google US English|Aria|Jenny)/i;
      for (const tag of want) {
        const pool = vs.filter(v => v.lang && v.lang.replace('_', '-').toLowerCase().startsWith(tag.toLowerCase()));
        if (pool.length) return pool.find(v => nice.test(v.name)) || pool.find(v => v.localService) || pool[0];
      }
      return null;
    },
    load(sentences, lng) { this.stop(); this.q = sentences.filter(Boolean); this.i = 0; this.lang = lng; this.emit(); },
    play() { if (!this.ok || !this.q.length) return; if (this.i >= this.q.length) this.i = 0; this.playing = true; this.tok++; speechSynthesis.cancel(); this.speak(this.tok); this.emit(); },
    speak(tok) {
      if (tok !== this.tok || !this.playing) return;
      if (this.i >= this.q.length) { this.playing = false; this.i = 0; this.emit(); return; }
      const u = new SpeechSynthesisUtterance(this.q[this.i]);
      const v = this.pick(this.lang); if (v) u.voice = v;
      u.lang = v ? v.lang : (this.lang === 'es' ? 'es-ES' : 'en-GB');
      u.rate = this.lang === 'es' ? 0.9 : 0.88; u.pitch = 1;
      u.onend = () => { if (tok !== this.tok) return; this.i++; this.emit(); this.timer = setTimeout(() => this.speak(tok), 420); };
      u.onerror = () => { if (tok !== this.tok) return; this.playing = false; this.emit(); };
      speechSynthesis.speak(u); this.emit();
    },
    pause() { this.playing = false; this.tok++; clearTimeout(this.timer); if (this.ok) speechSynthesis.cancel(); this.emit(); },
    stop() { this.pause(); this.i = 0; this.emit(); },
    repeat() { this.stop(); this.play(); },
    say(text, lng) { if (!this.ok) return; const u = new SpeechSynthesisUtterance(text); const v = this.pick(lng); if (v) u.voice = v; u.lang = v ? v.lang : (lng === 'es' ? 'es-ES' : 'en-GB'); u.rate = .85; speechSynthesis.speak(u); },
    current() { return this.q[Math.min(this.i, this.q.length - 1)] || ''; },
    emit() { this.listeners.forEach(f => f()); }
  };
  if (Voice.ok) speechSynthesis.onvoiceschanged = () => Voice.emit();

  function script(e, lng) {
    const k = lng === 'es' ? 1 : 0, U = n => I.ui[n][k];
    const out = [e.name[k] + '.', U('start') + '. ' + e.start[k]];
    e.steps[k].forEach(s => out.push(s));
    out.push(U('breath') + '. ' + e.breath[k]);
    e.cues[k].forEach(c => out.push(c));
    out.push(e.reps[k] + '.');
    return out;
  }
  const voiceLang = () => S.lang === 'es' ? 'es' : 'en';

  /* ——— Sheets ——— */
  let sheetClose = null;
  function openSheet(title, body, foot, onMount) {
    closeSheet(true);
    const scrim = document.createElement('div'); scrim.className = 'scrim';
    const sh = document.createElement('div'); sh.className = 'sheet'; sh.setAttribute('role', 'dialog'); sh.setAttribute('aria-modal', 'true'); sh.setAttribute('aria-label', title.replace(/<[^>]+>/g, ' '));
    sh.innerHTML = `<div class="sheet-grip" aria-hidden="true"></div><div class="sheet-head"><h2>${title}</h2><button class="icon-btn" data-close aria-label="${ui('close')}">${svgI('x')}</button></div><div class="sheet-body">${body}</div>${foot ? `<div class="sheet-foot">${foot}</div>` : ''}`;
    document.body.append(scrim, sh);
    requestAnimationFrame(() => { scrim.classList.add('show'); sh.classList.add('show'); });
    const prevFocus = document.activeElement;
    const onKey = ev => { if (ev.key === 'Escape') closeSheet(); };
    document.addEventListener('keydown', onKey);
    scrim.onclick = () => closeSheet();
    sh.querySelector('[data-close]').onclick = () => closeSheet();
    sheetClose = (instant) => {
      document.removeEventListener('keydown', onKey);
      scrim.classList.remove('show'); sh.classList.remove('show');
      const rm = () => { scrim.remove(); sh.remove(); };
      instant ? rm() : setTimeout(rm, 280);
      sheetClose = null; prevFocus && prevFocus.focus && prevFocus.focus({ preventScroll: true });
    };
    onMount && onMount(sh);
    setTimeout(() => { const f = sh.querySelector('input, button:not([data-close])'); f && f.focus({ preventScroll: true }); }, 60);
    return sh;
  }
  function closeSheet(instant) { sheetClose && sheetClose(instant); }

  /* ——— Shared fragments ——— */
  const lvlPill = l => `<span class="pill lvl-${l}">${ui(l)}</span>`;
  const supPill = e => e.sup ? `<span class="pill sup">${svgI('eye')}${ui('supShort')}</span>` : '';
  const thumb = e => e.image ? `<img src="${esc(e.image)}" alt="" loading="lazy">` : Fig.svg(e.fig, 1, '');
  const favBtn = e => `<button class="fav" data-fav="${e.id}" aria-pressed="${S.favs.has(e.id)}" aria-label="${ui('favs')}">${svgI('heart')}</button>`;
  function card(e, showApp) {
    return `<article class="ex-card">
      <div class="thumb">${thumb(e)}</div>
      <div><h3>${bi(e.name)}</h3><div class="meta">${lvlPill(e.lvl)}${showApp ? `<span class="pill">${lab('app', e.app)}</span>` : ''}${e.style ? `<span class="pill">${ui(e.style)}</span>` : ''}${supPill(e)}</div></div>
      <a class="cover" href="#/ex/${e.id}" aria-label="${esc(tx(e.name))}"></a>
      ${favBtn(e)}
    </article>`;
  }
  function toggleFav(id, btn) {
    if (S.favs.has(id)) { S.favs.delete(id); toast(ui('favRemoved')); } else { S.favs.add(id); toast(ui('favAdded')); }
    store.set('favs', [...S.favs]);
    $$(`[data-fav="${id}"]`).forEach(b => b.setAttribute('aria-pressed', S.favs.has(id)));
    if (route().name === 'favs') render();
  }
  document.addEventListener('click', ev => {
    const b = ev.target.closest('[data-fav]'); if (b) { ev.preventDefault(); toggleFav(b.dataset.fav, b); }
  });

  /* ——— Views ——— */
  function viewHome() {
    const p = plan(), n = p.items.length;
    const sig = { cadillac: 'cad-sitting-forward', mat: 'mat-teaser', wall: 'wall-chest-expansion' };
    const desc = { cadillac: 'cadDesc', mat: 'matDesc', wall: 'wallDesc' };
    const plates = APPS.map(a => {
      const exs = EX.filter(e => e.app === a);
      const counts = LEVELS.map(l => `<span class="count"><b>${exs.filter(e => e.lvl === l).length}</b> ${ui(l)}</span>`).join('');
      return `<a class="app-plate" href="#/${a}">
        <div class="plate-art">${Fig.svg(byId[sig[a]].fig, a === 'mat' ? 1 : 0.6, '')}</div>
        <div class="plate-body"><h2>${a === 'mat' ? uiB('matLong') : labB('app', a)}</h2><p>${uiB(desc[a])}</p><div class="counts">${counts}</div></div>
      </a>`;
    }).join('');
    return `<section class="hero">
        <h1>${S.lang === 'es' ? 'Muelles, mat<br><em>y método.</em>' : 'Springs, mat<br><em>and method.</em>'}</h1>
        <p>${uiB('homeLead')}</p>
        <form class="search" id="homeSearch" role="search">${svgI('search')}<input type="search" name="q" placeholder="${ui('searchPh')}" aria-label="${ui('searchPh')}" enterkeyhint="search"></form>
      </section>
      <h2 class="sec-title">${uiB('homeTitle')}</h2>
      <div class="apps">${plates}</div>
      <a class="row-link" href="#/library"><span><strong>${uiB('browseAll')}</strong><span class="muted"> ${EX.length} ${ui('exercises')}</span></span>${svgI('fwd')}</a>
      <a class="row-link plan-cta" href="#/build"><span><strong>${n ? esc(planName(p)) : uiB('planCta')}</strong><span class="muted">${n ? `${n} ${ui('items')}, ${fmtMin(total(p))}` : uiB('planCtaText')}</span></span>${svgI('fwd')}</a>
      <p class="fine">${uiB('safety')}</p>
      <p class="fine install-hint">${uiB('install')}</p>`;
  }
  function mountHome() {
    $('#homeSearch').onsubmit = ev => { ev.preventDefault(); S.q = ev.target.q.value; location.hash = '#/library'; };
  }

  function viewLibrary(app) {
    S.filterApp = app;
    const title = app ? (app === 'mat' ? uiB('matLong') : labB('app', app)) : uiB('library');
    const desc = app ? uiB({ cadillac: 'cadDesc', mat: 'matDesc', wall: 'wallDesc' }[app]) : uiB('homeLead');
    const appChips = [['library', null], ...APPS.map(a => [a, a])].map(([k, a]) =>
      `<a class="chip" href="#/${k}" ${app === a ? 'aria-current="page"' : ''}>${a ? lab('app', a) : ui('all')}</a>`).join('');
    const seg = ['all', ...LEVELS].map(l => `<button data-lvl="${l}" aria-pressed="${S.lvl === l}">${ui(l)}</button>`).join('');
    return `<header class="page-head"><h1>${title}</h1><p>${desc}</p></header>
      <div class="toolbar">
        <div class="search" role="search">${svgI('search')}<input id="libSearch" type="search" value="${esc(S.q)}" placeholder="${ui('searchPh')}" aria-label="${ui('searchPh')}" enterkeyhint="search"></div>
        <nav class="chips" aria-label="${ui('library')}">${appChips}</nav>
        <div class="toolbar-row"><div class="seg" role="group" aria-label="${ui('level')}">${seg}</div>
          <button class="filter-btn" id="openFilters">${svgI('filter')}${ui('filters')}${facetCount() ? `<span class="badge-n">${facetCount()}</span>` : ''}</button></div>
        <div class="chips" id="activeFilters"></div>
      </div>
      <div id="results"></div>`;
  }
  function renderResults() {
    const app = S.filterApp;
    const res = EX.filter(e => matches(e, app));
    S.lastList = res.map(e => e.id);
    const af = $('#activeFilters');
    if (af) af.innerHTML = FACETS.flatMap(([g]) => S.f[g].map(k => `<button class="chip" data-unf="${g}:${k}" aria-label="${ui('remove')} ${esc(lab(g, k))}">${lab(g, k)} <span class="x" aria-hidden="true">×</span></button>`)).join('');
    const box = $('#results'); if (!box) return;
    if (!res.length) { box.innerHTML = `<div class="empty"><p>${uiB('noResults')}</p><button class="btn soft" id="clearAll">${ui('clear')}</button></div>`; $('#clearAll').onclick = clearFilters; return; }
    const groups = (S.lvl === 'all' ? LEVELS : [S.lvl]).map(l => {
      const g = res.filter(e => e.lvl === l); if (!g.length) return '';
      return `<section class="lvl-group"><h2>${ui(l)} <small>${g.length} ${ui('exercises')}</small></h2><div class="grid">${g.map(e => card(e, !app)).join('')}</div></section>`;
    }).join('');
    box.innerHTML = `<p class="result-count" aria-live="polite">${res.length} ${ui('results')}</p>${groups}`;
  }
  function clearFilters() { S.q = ''; S.lvl = 'all'; FACETS.forEach(([g]) => S.f[g] = []); render(); }
  function mountLibrary() {
    let t;
    $('#libSearch').addEventListener('input', ev => { clearTimeout(t); t = setTimeout(() => { S.q = ev.target.value; renderResults(); }, 140); });
    $$('[data-lvl]').forEach(b => b.onclick = () => { S.lvl = b.dataset.lvl; $$('[data-lvl]').forEach(x => x.setAttribute('aria-pressed', x === b)); renderResults(); });
    $('#openFilters').onclick = openFilters;
    $('#activeFilters').addEventListener('click', ev => {
      const b = ev.target.closest('[data-unf]'); if (!b) return; const [g, k] = b.dataset.unf.split(':');
      S.f[g] = S.f[g].filter(x => x !== k); updateFilterBadge(); renderResults();
    });
    renderResults();
  }
  function updateFilterBadge() { const b = $('#openFilters'); if (b) b.innerHTML = `${svgI('filter')}${ui('filters')}${facetCount() ? `<span class="badge-n">${facetCount()}</span>` : ''}`; }
  function openFilters() {
    const app = S.filterApp, pool = EX.filter(e => !app || e.app === app);
    const draft = JSON.parse(JSON.stringify(S.f));
    const count = () => { const keep = S.f; S.f = draft; const n = pool.filter(e => matches(e, app)).length; S.f = keep; return n; };
    const body = FACETS.map(([g, key]) => {
      const keys = Object.keys(I[g]).filter(k => pool.some(e => (e[FIELD[g]] || []).includes(k)));
      return `<div class="facet"><h3>${ui(key)}</h3><div class="wrap">${keys.map(k => `<button class="chip" data-f="${g}:${k}" aria-pressed="${draft[g].includes(k)}">${lab(g, k)}</button>`).join('')}</div></div>`;
    }).join('');
    const foot = `<button class="btn ghost" id="fClear">${ui('clear')}</button><button class="btn primary" id="fApply"></button>`;
    openSheet(ui('filters'), body, foot, sh => {
      const upd = () => { sh.querySelector('#fApply').textContent = `${ui('apply')} (${count()})`; };
      upd();
      sh.addEventListener('click', ev => {
        const b = ev.target.closest('[data-f]'); if (!b) return; const [g, k] = b.dataset.f.split(':');
        draft[g] = draft[g].includes(k) ? draft[g].filter(x => x !== k) : [...draft[g], k];
        b.setAttribute('aria-pressed', draft[g].includes(k)); upd();
      });
      sh.querySelector('#fClear').onclick = () => { FACETS.forEach(([g]) => draft[g] = []); $$('[data-f]', sh).forEach(b => b.setAttribute('aria-pressed', 'false')); upd(); };
      sh.querySelector('#fApply').onclick = () => { S.f = draft; closeSheet(); updateFilterBadge(); renderResults(); };
    });
  }

  let player = null, voiceUnsub = null;
  function viewDetail(id) {
    const e = byId[id];
    if (!e) return `<div class="empty"><p>Exercise not found.</p><a class="btn soft" href="#/library">${ui('library')}</a></div>`;
    const list0 = S.lastList.length && S.lastList.includes(id) ? S.lastList : EX.filter(x => x.app === e.app).map(x => x.id);
    const i = list0.indexOf(id), prev = byId[list0[i - 1]], next = byId[list0[i + 1]];
    const tagRow = (g, arr) => `<div class="tag-list">${arr.map(k => `<span class="tag">${labB(g, k)}</span>`).join('')}</div>`;
    const sec = (key, inner) => `<section><h2>${uiB(key)}</h2>${inner}</section>`;
    const p = t => `<p>${bi(t)}</p>`;
    const vl = voiceLang();
    return `<button class="back" id="backBtn">${svgI('back')}${ui('back')}</button>
    <div class="detail">
      <div class="detail-left">
        <div class="stage-plate">
          ${e.image ? `<img class="photo" src="${esc(e.image)}" alt="${esc(tx(e.name))}">` : ''}
          <div id="stage"></div>
          <div class="stage-ctl">
            <div class="seg" role="group" aria-label="${ui('animate')}">
              <button data-pose="0">${ui('startPos')}</button><button data-pose="1">${ui('endPos')}</button><button data-pose="anim" aria-pressed="true">${ui('animate')}</button>
            </div>
          </div>
          ${e.image ? '' : `<p class="stage-note">${ui('illusNote')}</p>`}
        </div>
      </div>
      <div>
        <div class="title-block">
          <h1>${bi(e.name)}</h1>
          <div class="meta"><span class="pill">${lab('app', e.app)}</span>${lvlPill(e.lvl)}${e.style ? `<span class="pill">${ui(e.style)}</span>` : ''}${e.pos.map(k => `<span class="pill">${lab('pos', k)}</span>`).join('')}</div>
          ${e.sup ? `<div class="sup-banner" role="note">${svgI('eye')}<span>${uiB('supervision')}</span></div>` : ''}
          <div class="actions">
            ${favBtn(e)}
            <button class="btn primary" id="addBtn">${svgI('plus')}${ui('addClass')}</button>
            <button class="btn soft" id="listenBtn">${svgI('speaker')}${ui('listen')}</button>
          </div>
          <div class="audio" id="audio" hidden>
            <div class="audio-top"><strong>${ui('audioLang')}</strong>
              <div class="seg" role="group" aria-label="${ui('audioLang')}"><button data-vl="en" aria-pressed="${vl === 'en'}">EN</button><button data-vl="es" aria-pressed="${vl === 'es'}">ES</button></div></div>
            <div class="audio-ctl">
              <button class="btn primary" id="vPlay">${svgI('play')}${ui('play')}</button>
              <button class="btn soft" id="vRepeat" aria-label="${ui('repeat')}">${svgI('repeat')}${ui('repeat')}</button>
              <button class="btn soft" id="vStop" aria-label="${ui('stop')}">${svgI('stop')}</button>
            </div>
            <p class="audio-now" id="vNow" aria-live="polite"></p>
          </div>
        </div>
        <div class="info" style="margin-top:16px">
          ${sec('equipment', tagRow('eq', e.eq) + (e.spr ? `<h2 style="margin-top:14px">${uiB('springs')}</h2>${p(e.spr)}<p class="spring-note">${bi(I.ui.springNote)}</p>` : ''))}
          ${sec('start', p(e.start))}
          ${sec('steps', list(e.steps, true))}
          ${sec('breath', p(e.breath))}
          ${sec('goal', p(e.goal) + `<div style="margin-top:10px">${tagRow('obj', e.obj)}</div>`)}
          ${sec('muscles', tagRow('mus', e.mus))}
          ${sec('cues', list(e.cues))}
          ${sec('mist', list(e.mist))}
          ${sec('mods', list(e.mods))}
          ${sec('prog', list(e.prog))}
          ${sec('safe', list(e.safe))}
          ${sec('reps', p(e.reps))}
        </div>
        <nav class="pager">
          ${prev ? `<a href="#/ex/${prev.id}"><span>${ui('prev')}</span>${tx(prev.name)}</a>` : '<span></span>'}
          ${next ? `<a class="next" href="#/ex/${next.id}"><span>${ui('next')}</span>${tx(next.name)}</a>` : '<span></span>'}
        </nav>
      </div>
    </div>`;
  }
  function mountDetail(id) {
    const e = byId[id]; if (!e) return;
    $('#backBtn').onclick = () => { if (navCount > 1) history.back(); else location.hash = '#/' + e.app; };
    player = Fig.Player($('#stage'), e.fig, tx(e.name));
    const segBtns = $$('[data-pose]');
    const sync = () => segBtns.forEach(b => b.setAttribute('aria-pressed', b.dataset.pose === 'anim' ? player.running : (!player.running && b.dataset.pose === String(lastPose))));
    let lastPose = 1;
    segBtns.forEach(b => b.onclick = () => {
      if (b.dataset.pose === 'anim') { player.running ? player.pause() : player.play(); }
      else { lastPose = +b.dataset.pose; player.set(lastPose); }
      sync();
    });
    sync();
    $('#addBtn').onclick = () => addToClassSheet(e);
    let vl = voiceLang();
    const audio = $('#audio');
    const refresh = () => {
      const play = $('#vPlay'); if (!play) return;
      play.innerHTML = Voice.playing ? `${svgI('pause')}${ui('pause')}` : `${svgI('play')}${ui('play')}`;
      $('#vNow').textContent = !Voice.ok ? ui('noVoice') : (Voice.playing || Voice.i ? Voice.current() : '');
    };
    voiceUnsub && voiceUnsub(); Voice.listeners.add(refresh); voiceUnsub = () => Voice.listeners.delete(refresh);
    Voice.load(script(e, vl), vl);
    $('#listenBtn').onclick = () => { audio.hidden = false; if (!Voice.ok) { refresh(); return; } Voice.play(); audio.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); };
    $('#vPlay').onclick = () => Voice.playing ? Voice.pause() : Voice.play();
    $('#vRepeat').onclick = () => Voice.repeat();
    $('#vStop').onclick = () => Voice.stop();
    $$('[data-vl]').forEach(b => b.onclick = () => { vl = b.dataset.vl; $$('[data-vl]').forEach(x => x.setAttribute('aria-pressed', x === b)); const was = Voice.playing; Voice.load(script(e, vl), vl); if (was) Voice.play(); });
    refresh();
  }

  function addToClassSheet(e) {
    const p = plan();
    const body = `<p class="muted" style="margin:0 0 12px">${esc(planName(p))}</p><div class="sec-choice">${SECTIONS.map(s =>
      `<button data-sec="${s}" class="${s === e.sec ? 'suggested' : ''}"><span>${bi(I.sections[s])}</span><small>${p.items.filter(it => it.sec === s).length}</small></button>`).join('')}</div>`;
    openSheet(ui('chooseSection'), body, '', sh => {
      sh.addEventListener('click', ev => { const b = ev.target.closest('[data-sec]'); if (!b) return; addItem(e.id, b.dataset.sec); closeSheet(); toast(ui('added')); });
    });
  }
  function addItem(exId, sec) {
    const e = byId[exId], p = plan();
    p.items.push({ uid: uid(), ex: exId, sec, reps: e.reps[S.lang === 'es' ? 1 : 0], dur: e.dur, notes: '' });
    savePlans();
  }

  /* ——— Builder ——— */
  const total = p => p.items.reduce((n, it) => n + (parseFloat(it.dur) || 0), 0);
  const fmtMin = m => `${Math.round(m * 10) / 10} ${ui('min')}`;
  function itemHTML(it) {
    const e = byId[it.ex]; if (!e) return '';
    return `<div class="plan-item" data-uid="${it.uid}">
      <button class="drag-handle" aria-label="${ui('drag')}">${svgI('grip')}</button>
      <div class="thumb">${thumb(e)}</div>
      <div class="pi-main">
        <h3><a href="#/ex/${e.id}">${bi(e.name)}</a></h3>
        <div class="meta"><span class="pill">${lab('app', e.app)}</span>${lvlPill(e.lvl)}${supPill(e)}</div>
        <div class="pi-fields">
          <label>${ui('repsLbl')}<input class="field" data-k="reps" value="${esc(it.reps)}"></label>
          <label>${ui('durLbl')}<input class="field" data-k="dur" type="number" inputmode="decimal" min="0" max="60" step="0.5" value="${esc(it.dur)}"></label>
          <label class="pi-notes">${ui('notesLbl')}<textarea class="field" data-k="notes" rows="2" placeholder="${ui('notesPh')}">${esc(it.notes)}</textarea></label>
        </div>
        <div class="pi-tools">
          <button class="mini" data-act="up" aria-label="${ui('moveUp')}">${svgI('up')}</button>
          <button class="mini" data-act="down" aria-label="${ui('moveDown')}">${svgI('down')}</button>
          <button class="mini danger" data-act="del" aria-label="${ui('remove')}">${svgI('trash')}</button>
        </div>
      </div>
    </div>`;
  }
  function viewBuild() {
    const p = plan();
    const opts = S.plans.map(x => `<option value="${x.id}" ${x.id === p.id ? 'selected' : ''}>${esc(planName(x))}</option>`).join('');
    const secs = SECTIONS.map((s, n) => {
      const items = p.items.filter(it => it.sec === s);
      const sub = items.reduce((a, it) => a + (parseFloat(it.dur) || 0), 0);
      return `<section class="class-sec">
        <div class="class-sec-head"><h2><span class="sec-num">${n + 1}</span>${bi(I.sections[s])}</h2><small data-sub="${s}">${items.length} ${ui('items')}, ${fmtMin(sub)}</small></div>
        <div class="sec-list" data-sec="${s}">${items.length ? items.map(itemHTML).join('') : `<div class="sec-empty">${ui('emptySection')}</div>`}</div>
        <div class="add-row"><button class="btn" data-add="${s}">${svgI('plus')}${ui('addHere')}</button></div>
      </section>`;
    }).join('');
    return `<header class="page-head"><h1>${uiB('build')}</h1></header>
    <div class="class-wrap">
      <div class="plan-bar">
        <div class="plan-select-row"><select class="field" id="planSel" aria-label="${ui('build')}">${opts}</select>
          <button class="icon-btn" id="newPlan" aria-label="${ui('newPlan')}" title="${ui('newPlan')}">${svgI('plus')}</button></div>
        <label for="planName">${ui('planName')}</label>
        <input class="field" id="planName" value="${esc(p.name)}" placeholder="${ui('untitled')}">
        <div class="summary"><div class="total" id="planTotal">${fmtMin(total(p))}<small>${ui('totalTime')}, ${p.items.length} ${ui('items')}</small></div>
          <button class="btn primary" id="presentBtn" ${p.items.length ? '' : 'disabled'}>${svgI('present')}${ui('present')}</button></div>
        <div class="btn-row"><button class="btn soft" id="dupPlan">${svgI('copy')}${ui('duplicate')}</button><button class="btn ghost danger" id="delPlan">${svgI('trash')}${ui('deletePlan')}</button></div>
      </div>
      <div id="secs">${secs}</div>
    </div>`;
  }
  function updateTotals() {
    const p = plan();
    SECTIONS.forEach(s => { const items = p.items.filter(it => it.sec === s); const el = $(`[data-sub="${s}"]`); if (el) el.textContent = `${items.length} ${ui('items')}, ${fmtMin(items.reduce((a, it) => a + (parseFloat(it.dur) || 0), 0))}`; });
    const t = $('#planTotal'); if (t) t.innerHTML = `${fmtMin(total(p))}<small>${ui('totalTime')}, ${p.items.length} ${ui('items')}</small>`;
    const pb = $('#presentBtn'); if (pb) pb.disabled = !p.items.length;
  }
  function mountBuild() {
    const p = plan();
    $('#planSel').onchange = ev => { S.active = ev.target.value; savePlans(); render(); };
    $('#newPlan').onclick = () => { const np = { id: uid(), name: '', items: [] }; S.plans.push(np); S.active = np.id; savePlans(); render(); setTimeout(() => $('#planName') && $('#planName').focus(), 50); };
    $('#planName').oninput = ev => { p.name = ev.target.value; savePlans(); const o = $(`#planSel option[value="${p.id}"]`); if (o) o.textContent = planName(p); };
    $('#dupPlan').onclick = () => { const np = { id: uid(), name: planName(p) + ' (2)', items: p.items.map(it => ({ ...it, uid: uid() })) }; S.plans.push(np); S.active = np.id; savePlans(); render(); };
    $('#delPlan').onclick = () => {
      if (!confirm(ui('confirmDelete'))) return;
      S.plans = S.plans.filter(x => x.id !== p.id); if (!S.plans.length) S.plans.push({ id: uid(), name: '', items: [] });
      S.active = S.plans[0].id; savePlans(); render(); toast(ui('removed'));
    };
    $('#presentBtn').onclick = () => startPresentation();
    const secs = $('#secs');
    secs.addEventListener('input', ev => {
      const f = ev.target.closest('[data-k]'); if (!f) return;
      const it = p.items.find(x => x.uid === f.closest('.plan-item').dataset.uid); if (!it) return;
      it[f.dataset.k] = f.dataset.k === 'dur' ? Math.max(0, parseFloat(f.value) || 0) : f.value;
      savePlans(); if (f.dataset.k === 'dur') updateTotals();
    });
    secs.addEventListener('click', ev => {
      const add = ev.target.closest('[data-add]'); if (add) { pickerSheet(add.dataset.add); return; }
      const b = ev.target.closest('[data-act]'); if (!b) return;
      const el = b.closest('.plan-item'), it = p.items.find(x => x.uid === el.dataset.uid);
      if (b.dataset.act === 'del') { p.items = p.items.filter(x => x !== it); savePlans(); rerenderSecs(); toast(ui('removed')); return; }
      const order = SECTIONS.flatMap(s => p.items.filter(x => x.sec === s));
      const i = order.indexOf(it), j = b.dataset.act === 'up' ? i - 1 : i + 1;
      if (j < 0 || j >= order.length) return;
      const other = order[j];
      if (other.sec !== it.sec) { it.sec = other.sec; }
      order.splice(i, 1); order.splice(j, 0, it);
      p.items = order; savePlans(); rerenderSecs();
      const moved = $(`.plan-item[data-uid="${it.uid}"] [data-act="${b.dataset.act}"]`); moved && moved.focus();
    });
    enableDrag(secs);
  }
  function rerenderSecs() {
    const scroll = window.scrollY; const tmp = document.createElement('div'); tmp.innerHTML = viewBuild();
    $('#secs').innerHTML = tmp.querySelector('#secs').innerHTML; updateTotals(); window.scrollTo(0, scroll);
  }
  function enableDrag(root) {
    root.addEventListener('pointerdown', ev => {
      const h = ev.target.closest('.drag-handle'); if (!h || (ev.button !== undefined && ev.button !== 0)) return;
      ev.preventDefault();
      const item = h.closest('.plan-item'), r = item.getBoundingClientRect();
      const ph = document.createElement('div'); ph.className = 'plan-ph'; ph.style.height = r.height + 'px';
      item.parentNode.insertBefore(ph, item);
      Object.assign(item.style, { width: r.width + 'px', left: r.left + 'px', top: r.top + 'px' });
      item.classList.add('dragging'); document.body.appendChild(item);
      const off = ev.clientY - r.top; let lastY = ev.clientY, raf = 0;
      try { h.setPointerCapture(ev.pointerId); } catch (e) {}
      $$('.sec-empty', root).forEach(x => x.style.display = 'none');
      const scrollTick = () => {
        const edge = 80, vh = window.innerHeight;
        if (lastY < edge) window.scrollBy(0, -10); else if (lastY > vh - edge - 60) window.scrollBy(0, 10);
        raf = requestAnimationFrame(scrollTick);
      };
      raf = requestAnimationFrame(scrollTick);
      const move = e => {
        lastY = e.clientY; item.style.top = (e.clientY - off) + 'px';
        const under = document.elementFromPoint(e.clientX, e.clientY); if (!under) return;
        const target = under.closest('.plan-item'), zone = under.closest('.sec-list');
        if (target && target !== item && root.contains(target)) {
          const tr = target.getBoundingClientRect();
          if (e.clientY < tr.top + tr.height / 2) target.before(ph); else target.after(ph);
        } else if (zone && root.contains(zone) && !zone.contains(ph)) {
          zone.appendChild(ph);
        }
      };
      const up = () => {
        cancelAnimationFrame(raf);
        h.removeEventListener('pointermove', move); h.removeEventListener('pointerup', up); h.removeEventListener('pointercancel', up);
        ph.replaceWith(item); item.classList.remove('dragging'); item.removeAttribute('style');
        const p = plan(), map = Object.fromEntries(p.items.map(it => [it.uid, it])), next = [];
        $$('.sec-list', root).forEach(z => $$('.plan-item', z).forEach(el => { const it = map[el.dataset.uid]; if (it) { it.sec = z.dataset.sec; next.push(it); } }));
        p.items = next; savePlans(); rerenderSecs();
      };
      h.addEventListener('pointermove', move); h.addEventListener('pointerup', up); h.addEventListener('pointercancel', up);
    });
  }
  function pickerSheet(sec) {
    let app = null, q = '';
    const body = `<div class="search">${svgI('search')}<input id="pkQ" type="search" placeholder="${ui('searchPh')}" aria-label="${ui('searchPh')}"></div>
      <div class="chips" style="margin:10px 0 0;padding:0" id="pkApps">${[null, ...APPS].map(a => `<button class="chip" data-pa="${a || ''}" aria-pressed="${a === null}">${a ? lab('app', a) : ui('all')}</button>`).join('')}</div>
      <div class="pick-list" id="pkList"></div>`;
    openSheet(`${ui('addHere')}: ${tx(I.sections[sec])}`, body, '', sh => {
      const draw = () => {
        const nq = norm(q.trim()), words = nq ? nq.split(/\s+/) : [];
        const res = EX.filter(e => (!app || e.app === app) && words.every(w => INDEX[e.id].includes(w)));
        sh.querySelector('#pkList').innerHTML = res.map(e => `<div class="pick-row"><div class="thumb">${thumb(e)}</div><div><b>${tx(e.name)}</b><div class="meta"><span class="pill">${lab('app', e.app)}</span>${lvlPill(e.lvl)}</div></div><button class="btn soft" data-pick="${e.id}">${svgI('plus')}${ui('pick')}</button></div>`).join('') || `<p class="muted">${ui('noResults')}</p>`;
      };
      draw();
      sh.querySelector('#pkQ').oninput = ev => { q = ev.target.value; draw(); };
      sh.addEventListener('click', ev => {
        const a = ev.target.closest('[data-pa]'); if (a) { app = a.dataset.pa || null; $$('[data-pa]', sh).forEach(x => x.setAttribute('aria-pressed', x === a)); draw(); return; }
        const b = ev.target.closest('[data-pick]'); if (b) { addItem(b.dataset.pick, sec); toast(ui('added')); rerenderSecs(); }
      });
    });
  }

  /* ——— Presentation mode ——— */
  let P = null;
  function startPresentation() {
    const p = plan();
    const items = SECTIONS.flatMap(s => p.items.filter(it => it.sec === s)).filter(it => byId[it.ex]);
    if (!items.length) { toast(ui('presentEmpty')); return; }
    Voice.stop();
    const el = document.createElement('div'); el.className = 'present'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-label', ui('present'));
    document.body.appendChild(el); document.body.style.overflow = 'hidden';
    P = { el, items, i: 0, timer: null, left: 0, running: false, breath: false, breathT: null, speakBreath: false, lock: null, player: null };
    if ('wakeLock' in navigator) navigator.wakeLock.request('screen').then(l => P && (P.lock = l)).catch(() => {});
    const onKey = ev => { if (!P) return; if (ev.key === 'ArrowRight') go(1); else if (ev.key === 'ArrowLeft') go(-1); else if (ev.key === 'Escape') exit(); };
    document.addEventListener('keydown', onKey);
    let sx = null;
    el.addEventListener('touchstart', ev => { if (ev.target.closest('.p-stage, .p-body')) sx = ev.touches[0].clientX; }, { passive: true });
    el.addEventListener('touchend', ev => { if (sx == null) return; const dx = ev.changedTouches[0].clientX - sx; if (Math.abs(dx) > 70) go(dx < 0 ? 1 : -1); sx = null; }, { passive: true });
    P.onKey = onKey;
    drawSlide();
  }
  function exit() {
    if (!P) return; clearInterval(P.timer); clearInterval(P.breathT); Voice.stop();
    document.removeEventListener('keydown', P.onKey); P.lock && P.lock.release && P.lock.release();
    P.el.remove(); document.body.style.overflow = ''; P = null; Voice.listeners.clear();
  }
  function go(d) {
    if (!P) return; const n = P.i + d; if (n < 0 || n > P.items.length) return;
    clearInterval(P.timer); P.running = false; Voice.stop(); P.i = n; drawSlide();
  }
  const fmtClock = s => { const neg = s < 0, a = Math.abs(Math.round(s)); return (neg ? '+' : '') + Math.floor(a / 60) + ':' + String(a % 60).padStart(2, '0'); };
  function chime() {
    try { const C = new (window.AudioContext || window.webkitAudioContext)(); const o = C.createOscillator(), g = C.createGain(); o.type = 'sine'; o.frequency.value = 660; g.gain.setValueAtTime(.0001, C.currentTime); g.gain.exponentialRampToValueAtTime(.25, C.currentTime + .05); g.gain.exponentialRampToValueAtTime(.0001, C.currentTime + 1.2); o.connect(g); g.connect(C.destination); o.start(); o.stop(C.currentTime + 1.3); } catch (e) {}
    navigator.vibrate && navigator.vibrate([120, 80, 120]);
  }
  function drawSlide() {
    const { el, items, i } = P, n = items.length;
    if (i >= n) {
      el.innerHTML = `<div class="p-top"><div class="grow"></div><button class="btn soft" id="pExit">${svgI('x')}${ui('exit')}</button></div>
        <div class="p-done"><h2>${uiB('done')}</h2><p class="muted">${n} ${ui('items')}, ${fmtMin(total(plan()))}</p><div class="btn-row"><button class="btn soft" id="pBack">${svgI('back')}${ui('prev')}</button><button class="btn primary" id="pExit2">${ui('exit')}</button></div></div>`;
      $('#pExit', el).onclick = exit; $('#pExit2', el).onclick = exit; $('#pBack', el).onclick = () => go(-1);
      return;
    }
    const it = items[i], e = byId[it.ex];
    P.left = (parseFloat(it.dur) || 0) * 60;
    const vl = voiceLang();
    el.innerHTML = `<div class="p-top">
        <div class="grow"><div class="p-count">${i + 1} ${ui('of')} ${n}</div><div class="p-sec">${tx(I.sections[it.sec])}</div></div>
        <button class="btn soft" id="pBreath" aria-pressed="${P.breath}">${svgI('wind')}<span class="sr-only">${ui('breathGuide')}</span></button>
        <button class="btn soft" id="pExit">${svgI('x')}${ui('exit')}</button>
      </div>
      <div class="p-bar"><i style="width:${(i / n) * 100}%"></i></div>
      <div class="p-body">
        <div class="p-stage"><div id="pFig"></div>${P.breath ? `<div class="breath-orb" id="orb" aria-live="polite"><i></i><span>${ui('inhale')}</span></div>` : ''}</div>
        <div class="p-name"><h2>${bi(e.name)}</h2><div class="meta"><span class="pill">${lab('app', e.app)}</span>${lvlPill(e.lvl)}<span class="pill">${esc(it.reps)}</span>${supPill(e)}</div></div>
        <div class="p-card timer"><div class="clock" id="pClock">${fmtClock(P.left)}</div>
          <div class="btn-row"><button class="btn primary" id="pTimer">${svgI('play')}${ui('timerStart')}</button><button class="btn soft" id="pReset" aria-label="${ui('timerReset')}">${svgI('repeat')}</button><button class="btn soft" id="pVoice" aria-label="${ui('listen')}">${svgI('speaker')}${ui('listen')}</button></div></div>
        ${P.breath ? `<label class="switch"><input type="checkbox" id="pSpeakBreath" ${P.speakBreath ? 'checked' : ''}>${ui('speakBreath')}</label>` : ''}
        <div class="p-cols">
          ${it.notes ? `<div class="p-card"><h3>${ui('notes')}</h3><p style="margin:0;white-space:pre-wrap">${esc(it.notes)}</p></div>` : ''}
          <div class="p-card"><h3>${uiB('breath')}</h3><p style="margin:0">${bi(e.breath)}</p></div>
          <div class="p-card"><h3>${uiB('cues')}</h3>${list(e.cues)}</div>
          <div class="p-card"><h3>${uiB('steps')}</h3>${list(e.steps, true)}</div>
          ${e.spr ? `<div class="p-card"><h3>${uiB('springs')}</h3><p style="margin:0">${bi(e.spr)}</p></div>` : ''}
        </div>
      </div>
      <div class="p-foot"><button class="btn soft" id="pPrev" ${i === 0 ? 'disabled' : ''}>${svgI('back')}${ui('prev')}</button><button class="btn primary" id="pNext">${ui('next')}${svgI('fwd')}</button></div>`;
    P.player = Fig.Player($('#pFig', el), e.fig, tx(e.name));
    $('#pExit', el).onclick = exit; $('#pPrev', el).onclick = () => go(-1); $('#pNext', el).onclick = () => go(1);
    const clock = $('#pClock', el), tb = $('#pTimer', el);
    const paint = () => { clock.textContent = fmtClock(P.left); clock.classList.toggle('over', P.left < 0); tb.innerHTML = P.running ? `${svgI('pause')}${ui('timerPause')}` : `${svgI('play')}${ui('timerStart')}`; };
    tb.onclick = () => {
      if (P.running) { clearInterval(P.timer); P.running = false; paint(); return; }
      P.running = true; paint();
      P.timer = setInterval(() => { P.left -= 1; if (Math.round(P.left) === 0) chime(); paint(); }, 1000);
    };
    $('#pReset', el).onclick = () => { clearInterval(P.timer); P.running = false; P.left = (parseFloat(it.dur) || 0) * 60; paint(); };
    Voice.listeners.clear();
    const vb = $('#pVoice', el);
    Voice.listeners.add(() => { if (vb.isConnected) vb.innerHTML = Voice.playing ? `${svgI('pause')}${ui('pause')}` : `${svgI('speaker')}${ui('listen')}`; });
    Voice.load(script(e, vl), vl);
    vb.onclick = () => Voice.playing ? Voice.pause() : Voice.play();
    $('#pBreath', el).onclick = () => { P.breath = !P.breath; clearInterval(P.breathT); drawSlide(); };
    const sb = $('#pSpeakBreath', el); if (sb) sb.onchange = () => { P.speakBreath = sb.checked; };
    clearInterval(P.breathT);
    if (P.breath) {
      const orb = $('#orb', el); let inh = true;
      const tick = () => {
        if (!orb.isConnected) return;
        orb.classList.toggle('in', inh); orb.querySelector('span').textContent = inh ? ui('inhale') : ui('exhale');
        if (P.speakBreath && !Voice.playing) Voice.say(inh ? I.ui.inhale[vl === 'es' ? 1 : 0] : I.ui.exhale[vl === 'es' ? 1 : 0], vl);
        inh = !inh;
      };
      setTimeout(tick, 60); P.breathT = setInterval(tick, 4000);
    }
  }

  function viewFavs() {
    const list0 = EX.filter(e => S.favs.has(e.id)); S.lastList = list0.map(e => e.id);
    return `<header class="page-head"><h1>${uiB('favs')}</h1></header>` +
      (list0.length ? `<div class="grid">${list0.map(e => card(e, true)).join('')}</div>` : `<div class="empty"><p>${uiB('favEmpty')}</p><a class="btn primary" href="#/library">${ui('browseAll')}</a></div>`);
  }

  /* ——— Router ——— */
  function route() {
    const h = location.hash.replace(/^#\/?/, '');
    const [a, b] = h.split('/');
    if (!a) return { name: 'home' };
    if (a === 'ex' && b) return { name: 'ex', id: b };
    if (APPS.includes(a)) return { name: 'app', app: a };
    if (['library', 'build', 'favs'].includes(a)) return { name: a };
    return { name: 'home' };
  }
  function navHTML() {
    const r = route();
    const cur = r.name === 'app' ? r.app : r.name === 'ex' ? (byId[r.id] || {}).app : r.name;
    const tabs = [['home', 'home', 'home'], ['cadillac', 'cadillac', 'cadillac'], ['mat', 'mat', 'mat'], ['wall', 'wall', 'wall'], ['build', 'class', 'buildShort'], ['favs', 'heart', 'favsShort']];
    $('#tabbar').innerHTML = tabs.map(([k, ic, l]) => `<a href="#/${k === 'home' ? '' : k}" ${cur === k ? 'aria-current="page"' : ''}><span class="tab-ico">${svgI(ic)}</span>${ui(l)}</a>`).join('');
    const desk = [['home', 'home'], ['cadillac', 'cadillac'], ['mat', 'matLong'], ['wall', 'wall'], ['library', 'library'], ['build', 'build'], ['favs', 'favs']];
    $('#deskNav').innerHTML = desk.map(([k, l]) => `<a href="#/${k === 'home' ? '' : k}" ${cur === k ? 'aria-current="page"' : ''}>${ui(l)}</a>`).join('');
    $$('#langSwitch button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === S.lang));
    $('#searchBtn').setAttribute('aria-label', ui('searchPh'));
  }
  function render() {
    closeSheet(true);
    voiceUnsub && voiceUnsub(); voiceUnsub = null; Voice.stop();
    const r = route();
    document.documentElement.lang = S.lang === 'es' ? 'es' : 'en';
    let html = '';
    if (r.name === 'home') html = viewHome();
    else if (r.name === 'library') html = viewLibrary(null);
    else if (r.name === 'app') html = viewLibrary(r.app);
    else if (r.name === 'ex') html = viewDetail(r.id);
    else if (r.name === 'build') html = viewBuild();
    else if (r.name === 'favs') html = viewFavs();
    main.innerHTML = html;
    navHTML();
    if (r.name === 'home') mountHome();
    else if (r.name === 'library' || r.name === 'app') mountLibrary();
    else if (r.name === 'ex') mountDetail(r.id);
    else if (r.name === 'build') mountBuild();
    const t = { home: ui('appName'), library: ui('library'), app: r.app && lab('app', r.app), ex: r.id && byId[r.id] && tx(byId[r.id].name), build: ui('build'), favs: ui('favs') }[r.name];
    document.title = t && r.name !== 'home' ? `${t} | Springline` : 'Springline Pilates';
  }
  let navCount = 1;
  window.addEventListener('hashchange', () => { navCount++; render(); window.scrollTo(0, 0); });

  /* ——— Chrome ——— */
  $('#langSwitch').addEventListener('click', ev => {
    const b = ev.target.closest('[data-lang]'); if (!b) return;
    S.lang = b.dataset.lang; store.set('lang', S.lang);
    const y = window.scrollY; render(); window.scrollTo(0, y);
  });
  $('#searchBtn').onclick = () => { if (!/^#\/(library|cadillac|mat|wall)/.test(location.hash)) location.hash = '#/library'; setTimeout(() => { const s = $('#libSearch'); s && s.focus(); }, 60); };

  render();

  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();

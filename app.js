/* Springline — app code: labels, illustrations and app logic. */

/* ===== i18n.js ===== */
/* Springline — interface text and tag labels. Each entry is [English, Spanish]. */
window.SL_I18N = {
  ui: {
    appName:['Springline — Cadillac, Mat & Wall Unit Pilates','Springline — Cadillac, Mat y Wall Unit Pilates'],
    tagline:['Cadillac, Mat and Wall Unit repertoire for teaching and practice','Repertorio de Cadillac, Mat y Wall Unit para enseñar y practicar'],
    home:['Home','Inicio'], library:['Library','Biblioteca'], cadillac:['Cadillac','Cadillac'], mat:['Mat','Mat'], wall:['Wall Unit','Wall Unit'],
    build:['Build Your Class','Crea tu clase'], buildShort:['Class','Clase'], favs:['Favourites','Favoritos'], favsShort:['Saved','Guardados'],
    matLong:['Mat Pilates','Mat Pilates'],
    searchPh:['Search exercises, muscles, equipment…','Busca ejercicios, músculos, equipamiento…'],
    homeTitle:['Choose your apparatus','Elige tu aparato'],
    homeLead:['A teaching library of recognised repertoire, with springs, cues and safety notes for every exercise.','Una biblioteca docente de repertorio reconocido, con muelles, indicaciones y seguridad para cada ejercicio.'],
    exercises:['exercises','ejercicios'], browseAll:['Browse the full library','Ver toda la biblioteca'],
    cadDesc:['Push-through, roll-down and trapeze work, leg and arm springs.','Push-through, barra roll-down, trapecio y muelles de piernas y brazos.'],
    matDesc:['Classical and contemporary mat, with ring, ball, band and roller options.','Mat clásico y contemporáneo, con opciones de aro, pelota, banda y rulo.'],
    wallDesc:['Spring wall work standing, seated, kneeling and lying.','Trabajo en pared de muelles de pie, sentada, de rodillas y tumbada.'],
    planCta:['Plan a class','Planifica una clase'], planCtaText:['Pick exercises, set reps and timing, then teach from presentation mode.','Elige ejercicios, ajusta repeticiones y tiempos y enseña desde el modo presentación.'],
    continuePlan:['Open your class','Abre tu clase'],
    all:['All','Todos'], beginner:['Beginner','Principiante'], intermediate:['Intermediate','Intermedio'], advanced:['Advanced','Avanzado'],
    filters:['Filters','Filtros'], clear:['Clear all','Borrar todo'], apply:['Show results','Ver resultados'],
    results:['results','resultados'], noResults:['No exercises match these filters. Clear a filter or try another word.','Ningún ejercicio coincide con estos filtros. Quita un filtro o prueba otra palabra.'],
    fBody:['Body area','Zona del cuerpo'], fObj:['Movement objective','Objetivo del movimiento'], fEq:['Equipment','Equipamiento'], fPos:['Position','Posición'], fMus:['Muscle group','Grupo muscular'],
    supervision:['Instructor supervision required','Requiere supervisión de instructor'],
    supShort:['Supervised','Supervisado'],
    equipment:['Apparatus and equipment','Aparato y equipamiento'], springs:['Springs and attachment','Muelles y enganches'],
    springNote:['Spring colours, tensions and attachment heights differ between manufacturers and models. Treat these as relative guidance and follow your equipment manual and training.','Los colores, tensiones y alturas de enganche de los muelles varían entre fabricantes y modelos. Tómalo como orientación relativa y sigue el manual de tu equipo y tu formación.'],
    start:['Starting position','Posición inicial'], steps:['Execution','Ejecución'], breath:['Breathing','Respiración'], goal:['Movement objective','Objetivo del movimiento'],
    muscles:['Main muscles','Músculos principales'], cues:['Instructor cues','Indicaciones del instructor'], mist:['Common mistakes','Errores comunes'],
    mods:['Modifications','Modificaciones'], prog:['Progressions','Progresiones'], safe:['Contraindications and safety','Contraindicaciones y seguridad'], reps:['Repetitions and sets','Repeticiones y series'],
    level:['Level','Nivel'],
    addClass:['Add to class','Añadir a la clase'], saved:['Saved','Guardado'], save:['Save','Guardar'],
    listen:['Listen','Escuchar'], play:['Play','Reproducir'], pause:['Pause','Pausa'], repeat:['Repeat','Repetir'], stop:['Stop','Detener'],
    audioLang:['Voice','Voz'], noVoice:['This browser has no speech voices. Try Safari or Chrome.','Este navegador no tiene voces. Prueba con Safari o Chrome.'],
    startPos:['Start','Inicio'], endPos:['Finish','Final'], animate:['Animate','Animar'], still:['Pause animation','Pausar animación'],
    illusNote:['Schematic movement study. Add your own photo for this exercise in the data file.','Estudio esquemático del movimiento. Añade tu propia foto de este ejercicio en el archivo de datos.'],
    prev:['Previous','Anterior'], next:['Next','Siguiente'], back:['Back','Volver'],
    chooseSection:['Add to which part of the class?','¿En qué parte de la clase lo añades?'],
    added:['Added to your class','Añadido a tu clase'], removed:['Removed','Eliminado'],
    favAdded:['Saved to favourites','Guardado en favoritos'], favRemoved:['Removed from favourites','Eliminado de favoritos'],
    favEmpty:['Tap the heart on any exercise to keep it here.','Toca el corazón de cualquier ejercicio para guardarlo aquí.'],
    planName:['Class name','Nombre de la clase'], newPlan:['New class','Nueva clase'], duplicate:['Duplicate','Duplicar'], deletePlan:['Delete class','Eliminar clase'],
    confirmDelete:['Delete this class plan? This cannot be undone.','¿Eliminar este plan de clase? No se puede deshacer.'],
    totalTime:['Estimated duration','Duración estimada'], min:['min','min'], items:['exercises','ejercicios'],
    addHere:['Add exercise','Añadir ejercicio'], emptySection:['Nothing here yet. Add an exercise or drag one in.','Aún no hay nada. Añade un ejercicio o arrastra uno aquí.'],
    repsLbl:['Reps','Reps'], durLbl:['Minutes','Minutos'], notesLbl:['Instructor notes','Notas del instructor'], notesPh:['Spring change, focus, client notes…','Cambio de muelle, foco, notas de la clienta…'],
    moveUp:['Move up','Subir'], moveDown:['Move down','Bajar'], remove:['Remove','Quitar'], drag:['Drag to reorder','Arrastra para reordenar'],
    present:['Start presentation','Iniciar presentación'], presentEmpty:['Add at least one exercise to present the class.','Añade al menos un ejercicio para presentar la clase.'],
    exit:['Exit','Salir'], timerStart:['Start timer','Iniciar tiempo'], timerPause:['Pause timer','Pausar tiempo'], timerReset:['Reset','Reiniciar'],
    breathGuide:['Breath guide','Guía de respiración'], inhale:['Inhale','Inhala'], exhale:['Exhale','Exhala'], speakBreath:['Speak breath cues','Decir la respiración en voz alta'],
    done:['Class complete','Clase completada'], notes:['Notes','Notas'],
    untitled:['My class','Mi clase'], close:['Close','Cerrar'], pick:['Add','Añadir'],
    install:['Add Springline to your home screen from the browser menu for a full-screen app.','Añade Springline a tu pantalla de inicio desde el menú del navegador para usarla como app.'],
    safety:['This library supports trained instructors and supervised students. It does not replace qualified instruction or medical advice.','Esta biblioteca apoya a instructores formados y alumnos supervisados. No sustituye la enseñanza cualificada ni el consejo médico.'],
    classical:['Classical','Clásico'], contemporary:['Contemporary','Contemporáneo'],
    language:['Language','Idioma'], of:['of','de'],
    propsTitle:['Train with props','Entrena con material'], propsLead:['Exercises that use or adapt with each prop.','Ejercicios que usan cada material o se adaptan con él.'],
    propOptions:['Prop options','Opciones con material'], props:['Props','Material'],
    classes:['Classes','Clases'], classesShort:['Classes','Clases'], classesWord:['ready-made classes','clases listas'],
    classesLead:['Ready-made classes with sections, reps and timings already set. Open one and teach it in presentation mode.','Clases listas con secciones, repeticiones y tiempos ya definidos. Abre una y enséñala en modo presentación.'],
    readyCta:['Teach a ready-made class','Enseña una clase lista'], readyCtaText:['Open one and follow it exercise by exercise.','Ábrela y síguela ejercicio a ejercicio.'],
    fSec:['Part of the class','Parte de la clase'], partOfClass:['Part of the class','Parte de la clase'], mainUse:['main use','uso principal'],
    stepByStep:['Step by step','Paso a paso'], getReady:['Get into position','Colócate en posición'], doMove:['Do the movement','Haz el movimiento'], finishSafe:['Finish safely','Termina con seguridad'],
    quickSummary:['Quick summary for instructors','Resumen rápido para instructores'],
    glossary:['Pilates words explained','Palabras de Pilates explicadas'], glossaryShort:['Plain meanings of the terms used in the steps.','El significado sencillo de los términos usados en los pasos.'],
    glossaryLead:['Simple explanations of the words you will see in the exercise steps.','Explicaciones sencillas de las palabras que verás en los pasos de los ejercicios.'],
    startClass:['Start class','Empezar clase'], youNeed:['You will need','Necesitarás'], inClasses:['Used in these classes','Incluido en estas clases'],
    ringDesc:['Also called the magic circle. Adds resistance, connection to the inner thighs and arm work.','También llamado círculo mágico. Añade resistencia, conexión de aductores y trabajo de brazos.'],
    ballDesc:['A soft mini ball, 20–25 cm, slightly deflated. Supports, squeezes and adds gentle instability.','Una mini pelota blanda de 20–25 cm, algo desinflada. Apoya, se aprieta y añade una inestabilidad suave.'],
    bigballDesc:['A stability ball, 55–75 cm. Choose a size where the hips sit level with or above the knees.','Una fitball de 55–75 cm. Elige un tamaño con la cadera a la altura de las rodillas o algo por encima.'],
    smallballDesc:['A palm-size ball, 8–12 cm, for release work, foot mobility and guided ranges.','Una pelota del tamaño de la palma, de 8–12 cm, para liberación, movilidad del pie y rangos guiados.']
  },
  sections: {
    warmup:['Warm-up','Calentamiento'], mobility:['Mobility','Movilidad'], main:['Main workout','Bloque principal'],
    strength:['Strength and control','Fuerza y control'], stretch:['Stretching','Estiramientos'], cooldown:['Cool-down','Vuelta a la calma']
  },
  app: { cadillac:['Cadillac','Cadillac'], mat:['Mat','Mat'], wall:['Wall Unit','Wall Unit'] },
  body: { core:['Core','Core'], spine:['Spine','Columna'], hips:['Hips','Cadera'], glutes:['Glutes','Glúteos'], legs:['Legs','Piernas'], shoulders:['Shoulders','Hombros'], arms:['Arms','Brazos'], full:['Full body','Cuerpo completo'] },
  obj: { strength:['Strength','Fuerza'], mobility:['Mobility','Movilidad'], stability:['Stability','Estabilidad'], flex:['Flexibility','Flexibilidad'], balance:['Balance','Equilibrio'], coord:['Coordination','Coordinación'], control:['Control','Control'], breath:['Breathing','Respiración'] },
  pos: { supine:['Supine','Supino'], prone:['Prone','Prono'], seated:['Seated','Sentada'], kneeling:['Kneeling','De rodillas'], standing:['Standing','De pie'], side:['Side-lying','Decúbito lateral'], quadruped:['All fours','Cuadrupedia'], inverted:['Inverted','Invertida'] },
  eq: {
    pushbar:['Push-through bar','Barra push-through'], ptspring:['Push-through spring','Muelle push-through'], rollbar:['Roll-down / roll-back bar','Barra roll-down / roll-back'],
    trapeze:['Trapeze bar','Trapecio'], legsprings:['Leg springs','Muelles de piernas'], armsprings:['Arm springs','Muelles de brazos'], fuzzies:['Fuzzy loops','Cinchas acolchadas'],
    strap:['Safety strap','Correa de seguridad'], mat:['Mat','Colchoneta'], ring:['Pilates ring','Aro de Pilates'], ball:['Pilates ball (soft, 20–25 cm)','Pelota de Pilates (blanda, 20–25 cm)'],
    bigball:['Big ball (stability ball)','Pelota grande (fitball)'], smallball:['Small ball (palm-size)','Pelota pequeña (tamaño palma)'], band:['Resistance band','Banda elástica'], roller:['Foam roller','Rulo de espuma'], noequip:['No equipment','Sin material']
  },
  mus: {
    abs:['Rectus abdominis','Recto abdominal'], tva:['Transversus abdominis','Transverso abdominal'], obl:['Obliques','Oblicuos'], ers:['Spinal extensors','Extensores de la columna'],
    glu:['Gluteus maximus','Glúteo mayor'], abd:['Gluteus medius / hip abductors','Glúteo medio / abductores'], ham:['Hamstrings','Isquiotibiales'], quad:['Quadriceps','Cuádriceps'],
    add:['Adductors','Aductores'], hipf:['Hip flexors','Flexores de cadera'], lat:['Latissimus dorsi','Dorsal ancho'], pec:['Pectorals','Pectorales'],
    delt:['Deltoids','Deltoides'], tri:['Triceps','Tríceps'], bic:['Biceps','Bíceps'], ser:['Serratus anterior','Serrato anterior'], rhom:['Rhomboids and mid trapezius','Romboides y trapecio medio'], calf:['Calves','Gemelos']
  }
};

/* ===== figures.js ===== */
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
    if (typeof ref === 'string' && ref.includes('+')) { const [a, b] = ref.split('+').map(r => resolve(r, pts, st)); return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; }
    if (pts[ref]) return pts[ref];
    return (ANCHORS[st] || {})[ref] || [160, 20];
  }

  function body(fig, t) {
    const st = fig.st || 'mat';
    const p = solve(poseAt(fig, t), !!fig.f, STAGE_DY[st] || 0);
    let props = '', under = '';
    (fig.pr || []).forEach(pr => {
      const [type, a, b] = pr;
      if (type === 'spring') props += spring(resolve(b, p, st), resolve(a, p, st));
      else if (type === 'rod') { const A = resolve(a, p, st), B = resolve(b, p, st); props += `<path class="sl-rod" d="${pl(A, B)}"/>`; }
      else if (type === 'bar') { const A = resolve(a, p, st); props += `<circle class="sl-bar" cx="${f1(A[0])}" cy="${f1(A[1])}" r="5"/>`; }
      else if (type === 'loop') { const A = resolve(a, p, st); props += `<ellipse class="sl-loop" cx="${f1(A[0])}" cy="${f1(A[1])}" rx="6" ry="4"/>`; }
      else if (type === 'ring' || type === 'ball' || type === 'bigball' || type === 'sball') {
        const A = resolve(a, p, st), o = Array.isArray(b) ? b : [0, 0], r = { ring: 13, ball: 11, bigball: 30, sball: 5.5 }[type];
        const c = `<circle class="sl-${type}" cx="${f1(A[0] + o[0])}" cy="${f1(A[1] + o[1])}" r="${r}"/>`;
        if (type === 'bigball') under += c; else props += c;
      }
      else if (type === 'band') { const A = resolve(a, p, st), B = resolve(b, p, st); props += `<path class="sl-band" d="${pl(A, B)}"/>`; }
      else if (type === 'roller') { const A = resolve(a, p, st); props += `<circle class="sl-roller" cx="${A[0]}" cy="${A[1]}" r="8"/>`; }
    });
    return `${under}<g class="sl-figure">
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

/* ===== app.js ===== */
/* Springline — app logic (no build step, no backend). */
(function () {
  'use strict';
  const I = window.SL_I18N, EX = window.SPRINGLINE || [], Fig = window.SLFig;
  const byId = Object.fromEntries(EX.map(e => [e.id, e]));
  const GUIDES = window.SPRINGLINE_GUIDES || {}, GLOSSARY = window.SPRINGLINE_GLOSSARY || [];
  I.sec = I.sections;
  const LEVELS = ['beginner', 'intermediate', 'advanced'];
  const APPS = ['cadillac', 'mat', 'wall'];
  const PROPS = ['ring', 'ball', 'bigball', 'smallball'];
  const SECTIONS = ['warmup', 'mobility', 'main', 'strength', 'stretch', 'cooldown'];
  const FACETS = [['sec', 'fSec'], ['body', 'fBody'], ['obj', 'fObj'], ['eq', 'fEq'], ['pos', 'fPos'], ['mus', 'fMus']];
  const FIELD = { sec: 'secs', body: 'body', obj: 'obj', eq: 'eq', pos: 'pos', mus: 'mus' };

  /* ——— Storage ——— */
  const store = {
    get(k, d) { try { const v = localStorage.getItem('springline.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('springline.' + k, JSON.stringify(v)); } catch (e) { /* storage full or blocked */ } }
  };
  const uid = () => Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-3);

  const S = {
    lang: store.get('lang', 'en'),
    favs: new Set(store.get('favs', [])),
    clsCat: 'all', clsLvl: 'all',
    q: '', lvl: 'all', f: { sec: [], body: [], obj: [], eq: [], pos: [], mus: [] },
    lastList: [], filterApp: null, filterProp: null
  };
  const CLASSES = window.SPRINGLINE_CLASSES || [];
  const clsById = Object.fromEntries(CLASSES.map(c => [c.id, c]));
  const CLASS_CATS = ['cadillac', 'mat', 'wall', 'props'];

  /* ——— Language helpers ——— */
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const idx = () => S.lang === 'es' ? 1 : 0;
  const tx = p => p ? p[idx()] : '';
  const bi = p => !p ? '' : (S.lang === 'both' && p[0] !== p[1]) ? `<span class="t-en">${p[0]}</span><span class="t-es" lang="es">${p[1]}</span>` : p[idx()];
  const ui = k => tx(I.ui[k]);
  const uiB = k => bi(I.ui[k]);
  const lab = (g, k) => (I[g] && I[g][k]) ? tx(I[g][k]) : k;
  const labB = (g, k) => (I[g] && I[g][k]) ? bi(I[g][k]) : k;
  function list(pair, ordered, start) {
    if (!pair) return '';
    const tag = ordered ? (start > 1 ? `ol start="${start}"` : 'ol') : 'ul';
    if (S.lang === 'both' && pair[0].join() !== pair[1].join()) return `<${tag}>${pair[0].map((en, i) => `<li><span class="t-en">${en}</span><span class="t-es" lang="es">${pair[1][i] || ''}</span></li>`).join('')}</${ordered ? 'ol' : 'ul'}>`;
    return `<${tag}>${pair[idx()].map(x => `<li>${x}</li>`).join('')}</${ordered ? 'ol' : 'ul'}>`;
  }

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
    (e.props || []).forEach(([k, how]) => parts.push(how.join(' ')));
    /* class parts: the main use first, then every part it is used for in the ready-made classes */
    e.secs = [...new Set([e.sec, ...CLASSES.flatMap(c => c.items.filter(it => it[0] === e.id).map(it => it[1]))])].sort((x, y) => x === e.sec ? -1 : y === e.sec ? 1 : SECTIONS.indexOf(x) - SECTIONS.indexOf(y));
    e.secs.forEach(s => parts.push(I.sections[s].join(' ')));
    INDEX[e.id] = norm(parts.join(' | '));
  });
  function matches(e, app, prop) {
    if (app && e.app !== app) return false;
    if (prop && !(e.eq || []).includes(prop)) return false;
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
    const out = [e.name[k] + '.'];
    const g = GUIDES[e.id];
    if (g) { [['ready', 'getReady'], ['move', 'doMove'], ['finish', 'finishSafe']].forEach(([p, l]) => { out.push(U(l) + '.'); g[p][k].forEach(s => out.push(s)); }); }
    else { out.push(U('start') + '. ' + e.start[k]); e.steps[k].forEach(s => out.push(s)); }
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

  function guideHTML(e) {
    const g = GUIDES[e.id]; if (!g) return '';
    let n = 1;
    return [['ready', 'getReady'], ['move', 'doMove'], ['finish', 'finishSafe']].map(([k, label]) => {
      if (!g[k]) return '';
      const html = `<h3 class="g-part">${uiB(label)}</h3>${list(g[k], true, n)}`;
      n += g[k][0].length; return html;
    }).join('') + `<p class="g-help"><a href="#/glossary">${ui('glossary')}</a></p>`;
  }
  const partPill = s => `<span class="pill part part-${s}">${lab('sec', s)}</span>`;
  function partsHTML(e) {
    return `<div class="parts"><strong>${uiB('partOfClass')}</strong><div class="tag-list">${e.secs.map((s, i) => `<span class="tag part-tag part-${s}">${labB('sec', s)}${i === 0 ? ` <em>${ui('mainUse')}</em>` : ''}</span>`).join('')}</div></div>`;
  }
  function card(e, showApp) {
    return `<article class="ex-card">
      <div class="thumb">${thumb(e)}</div>
      <div><h3>${bi(e.name)}</h3><div class="meta">${partPill(e.sec)}${lvlPill(e.lvl)}${showApp ? `<span class="pill">${lab('app', e.app)}</span>` : ''}${e.style ? `<span class="pill">${ui(e.style)}</span>` : ''}${supPill(e)}</div></div>
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
      <h2 class="sec-title">${uiB('propsTitle')}</h2>
      <div class="props-grid">${PROPS.map(k => `<a class="prop-tile" href="#/props/${k}"><i class="prop-dot dot-${k}" aria-hidden="true"></i><strong>${labB('eq', k)}</strong><span class="n">${EX.filter(e => e.eq.includes(k)).length} ${ui('exercises')}</span></a>`).join('')}</div>
      <a class="row-link" href="#/library"><span><strong>${uiB('browseAll')}</strong><span class="muted"> ${EX.length} ${ui('exercises')}</span></span>${svgI('fwd')}</a>
      <a class="row-link plan-cta" href="#/classes"><span><strong>${uiB('readyCta')}</strong><span class="muted">${CLASSES.length} ${ui('classesWord')}. ${uiB('readyCtaText')}</span></span>${svgI('fwd')}</a>
      <a class="row-link" href="#/glossary"><span><strong>${uiB('glossary')}</strong><span class="muted"> ${uiB('glossaryShort')}</span></span>${svgI('fwd')}</a>
      <p class="fine">${uiB('safety')}</p>
      <p class="fine install-hint">${uiB('install')}</p>`;
  }
  function mountHome() {
    $('#homeSearch').onsubmit = ev => { ev.preventDefault(); S.q = ev.target.q.value; location.hash = '#/library'; };
  }

  function viewLibrary(app, prop) {
    S.filterApp = app; S.filterProp = prop || null;
    const title = prop ? labB('eq', prop) : app ? (app === 'mat' ? uiB('matLong') : labB('app', app)) : uiB('library');
    const desc = prop ? uiB(prop + 'Desc') : app ? uiB({ cadillac: 'cadDesc', mat: 'matDesc', wall: 'wallDesc' }[app]) : uiB('homeLead');
    const appChips = [['library', null], ...APPS.map(a => [a, a])].map(([k, a]) =>
      `<a class="chip" href="#/${k}" ${app === a && !prop ? 'aria-current="page"' : ''}>${a ? lab('app', a) : ui('all')}</a>`).join('');
    const propChips = PROPS.map(k => `<a class="chip" href="#/props/${k}" ${prop === k ? 'aria-current="page"' : ''}>${lab('eq', k)}</a>`).join('');
    const seg = ['all', ...LEVELS].map(l => `<button data-lvl="${l}" aria-pressed="${S.lvl === l}">${ui(l)}</button>`).join('');
    return `<header class="page-head"><h1>${title}</h1><p>${desc}</p></header>
      <div class="toolbar">
        <div class="search" role="search">${svgI('search')}<input id="libSearch" type="search" value="${esc(S.q)}" placeholder="${ui('searchPh')}" aria-label="${ui('searchPh')}" enterkeyhint="search"></div>
        <nav class="chips" aria-label="${ui('library')}">${appChips}</nav>
        <nav class="chips" aria-label="${ui('props')}">${propChips}</nav>
        <div class="toolbar-row"><div class="seg" role="group" aria-label="${ui('level')}">${seg}</div>
          <button class="filter-btn" id="openFilters">${svgI('filter')}${ui('filters')}${facetCount() ? `<span class="badge-n">${facetCount()}</span>` : ''}</button></div>
        <div class="chips" id="activeFilters"></div>
      </div>
      <div id="results"></div>`;
  }
  function renderResults() {
    const app = S.filterApp, prop = S.filterProp;
    const res = EX.filter(e => matches(e, app, prop));
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
    const app = S.filterApp, prop = S.filterProp, pool = EX.filter(e => (!app || e.app === app) && (!prop || e.eq.includes(prop)));
    const draft = JSON.parse(JSON.stringify(S.f));
    const count = () => { const keep = S.f; S.f = draft; const n = pool.filter(e => matches(e, app, prop)).length; S.f = keep; return n; };
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
          ${partsHTML(e)}
          ${e.sup ? `<div class="sup-banner" role="note">${svgI('eye')}<span>${uiB('supervision')}</span></div>` : ''}
          <div class="actions">
            ${favBtn(e)}
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
          ${GUIDES[e.id] ? sec('stepByStep', guideHTML(e)) : ''}
          ${sec('breath', p(e.breath))}
          ${sec('equipment', tagRow('eq', e.eq) + (e.spr ? `<h2 style="margin-top:14px">${uiB('springs')}</h2>${p(e.spr)}<p class="spring-note">${bi(I.ui.springNote)}</p>` : ''))}
          ${e.props && e.props.length ? sec('propOptions', `<div class="prop-list">${e.props.map(([k, how]) => `<div class="prop-row"><div><a class="tag" href="#/props/${k}" style="text-decoration:none">${labB('eq', k)}</a></div>${p(how)}</div>`).join('')}</div>`) : ''}
          ${GUIDES[e.id] ? '' : sec('start', p(e.start))}
          ${sec(GUIDES[e.id] ? 'quickSummary' : 'steps', list(e.steps, true))}
          ${sec('goal', p(e.goal) + `<div style="margin-top:10px">${tagRow('obj', e.obj)}</div>`)}
          ${sec('muscles', tagRow('mus', e.mus))}
          ${sec('cues', list(e.cues))}
          ${sec('mist', list(e.mist))}
          ${sec('mods', list(e.mods))}
          ${sec('prog', list(e.prog))}
          ${sec('safe', list(e.safe))}
          ${sec('reps', p(e.reps))}
          ${(() => { const cs = CLASSES.filter(c => c.items.some(it => it[0] === e.id)); return cs.length ? sec('inClasses', `<div class="tag-list">${cs.map(c => `<a class="tag" style="text-decoration:none" href="#/class/${c.id}">${tx(c.title)}</a>`).join('')}</div>`) : ''; })()}
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

  /* ——— Ready-made classes ——— */
  const fmtMin = m => `${Math.round(m * 10) / 10} ${ui('min')}`;
  const clsItems = c => SECTIONS.flatMap(s => c.items.filter(it => it[1] === s)).filter(it => byId[it[0]])
    .map(([ex, sec, dur]) => ({ ex, sec, dur, reps: tx(byId[ex].reps), notes: '' }));
  const clsMin = c => c.items.reduce((n, it) => n + (it[2] || 0), 0);
  const clsEq = c => {
    const set = new Set();
    c.items.forEach(([id]) => {
      const e = byId[id]; if (!e) return;
      /* exercises tagged 'noequip' can be done with just a mat; their other equipment is optional */
      e.eq.forEach(k => { if (k !== 'noequip' && (!e.eq.includes('noequip') || k === 'mat')) set.add(k); });
    });
    return [...set];
  };
  const clsSup = c => c.items.some(([id]) => byId[id] && byId[id].sup);
  const catLab = k => k === 'props' ? ui('props') : lab('app', k);
  function clsCard(c) {
    const ids = [...new Set(c.items.map(it => it[0]))].slice(0, 4);
    return `<article class="cls-card">
      <div class="cls-strip">${ids.map(id => `<div class="thumb">${thumb(byId[id])}</div>`).join('')}</div>
      <div class="cls-body">
        <h3>${bi(c.title)}</h3>
        <div class="meta"><span class="pill">${catLab(c.cat)}</span>${lvlPill(c.lvl)}<span class="pill">${fmtMin(clsMin(c))}</span><span class="pill">${c.items.length} ${ui('items')}</span>${clsSup(c) ? `<span class="pill sup">${svgI('eye')}${ui('supShort')}</span>` : ''}</div>
        <p>${bi(c.focus)}</p>
      </div>
      <a class="cover" href="#/class/${c.id}" aria-label="${esc(tx(c.title))}"></a>
    </article>`;
  }
  function viewClasses() {
    const cats = ['all', ...CLASS_CATS].map(k => `<button class="chip" data-ccat="${k}" aria-pressed="${S.clsCat === k}">${k === 'all' ? ui('all') : catLab(k)}</button>`).join('');
    const seg = ['all', ...LEVELS].map(l => `<button data-clvl="${l}" aria-pressed="${S.clsLvl === l}">${ui(l)}</button>`).join('');
    return `<header class="page-head"><h1>${uiB('classes')}</h1><p>${uiB('classesLead')}</p></header>
      <div class="toolbar"><div class="chips">${cats}</div><div class="seg" role="group" aria-label="${ui('level')}">${seg}</div></div>
      <div id="clsResults"></div>`;
  }
  function renderClasses() {
    const res = CLASSES.filter(c => (S.clsCat === 'all' || c.cat === S.clsCat) && (S.clsLvl === 'all' || c.lvl === S.clsLvl));
    $('#clsResults').innerHTML = res.length ? `<div class="cls-grid">${res.map(clsCard).join('')}</div>` : `<div class="empty"><p>${uiB('noResults')}</p></div>`;
  }
  function mountClasses() {
    $$('[data-ccat]').forEach(b => b.onclick = () => { S.clsCat = b.dataset.ccat; $$('[data-ccat]').forEach(x => x.setAttribute('aria-pressed', x === b)); renderClasses(); });
    $$('[data-clvl]').forEach(b => b.onclick = () => { S.clsLvl = b.dataset.clvl; $$('[data-clvl]').forEach(x => x.setAttribute('aria-pressed', x === b)); renderClasses(); });
    renderClasses();
  }
  function viewClass(id) {
    const c = clsById[id];
    if (!c) return `<div class="empty"><p>${uiB('noResults')}</p><a class="btn soft" href="#/classes">${ui('classes')}</a></div>`;
    S.lastList = [...new Set(clsItems(c).map(it => it.ex))];
    const secs = SECTIONS.map((s, n) => {
      const its = c.items.filter(it => it[1] === s && byId[it[0]]); if (!its.length) return '';
      const sub = its.reduce((m, it) => m + it[2], 0);
      return `<section class="class-sec"><div class="class-sec-head"><h2><span class="sec-num">${n + 1}</span>${bi(I.sections[s])}</h2><small>${fmtMin(sub)}</small></div>
        <div class="sec-list">${its.map(([ex, , dur]) => { const e = byId[ex]; return `<a class="cls-item" href="#/ex/${ex}"><div class="thumb">${thumb(e)}</div><div><h3>${bi(e.name)}</h3><div class="meta">${e.app !== c.cat && c.cat !== 'props' ? `<span class="pill">${lab('app', e.app)}</span>` : ''}${lvlPill(e.lvl)}<span class="pill">${tx(e.reps)}</span><span class="pill">${fmtMin(dur)}</span>${supPill(e)}</div></div></a>`; }).join('')}</div></section>`;
    }).join('');
    return `<button class="back" id="backBtn">${svgI('back')}${ui('back')}</button>
      <div class="class-wrap">
        <div class="plan-bar">
          <h1 class="cls-title">${bi(c.title)}</h1>
          <div class="meta"><span class="pill">${catLab(c.cat)}</span>${lvlPill(c.lvl)}</div>
          <p class="muted" style="margin:0">${bi(c.focus)}</p>
          ${clsSup(c) ? `<div class="sup-banner" role="note">${svgI('eye')}<span>${uiB('supervision')}</span></div>` : ''}
          <div class="summary"><div class="total">${fmtMin(clsMin(c))}<small>${ui('totalTime')}, ${c.items.length} ${ui('items')}</small></div></div>
          <div><strong style="font-size:.85rem">${uiB('youNeed')}</strong><div class="tag-list" style="margin-top:6px">${clsEq(c).map(k => `<span class="tag">${labB('eq', k)}</span>`).join('')}</div></div>
          <button class="btn primary" id="startCls">${svgI('present')}${ui('startClass')}</button>
        </div>
        <div>${secs}</div>
      </div>`;
  }
  function mountClass(id) {
    const c = clsById[id]; if (!c) return;
    $('#backBtn').onclick = () => { if (navCount > 1) history.back(); else location.hash = '#/classes'; };
    $('#startCls').onclick = () => startPresentation(c);
  }

  /* ——— Presentation mode ——— */
  let P = null;
  function startPresentation(c) {
    const items = clsItems(c);
    if (!items.length) { toast(ui('presentEmpty')); return; }
    Voice.stop();
    const el = document.createElement('div'); el.className = 'present'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-label', ui('present'));
    document.body.appendChild(el); document.body.style.overflow = 'hidden';
    P = { el, items, cls: c, i: 0, timer: null, left: 0, running: false, breath: false, breathT: null, speakBreath: false, lock: null, player: null };
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
        <div class="p-done"><h2>${uiB('done')}</h2><p class="muted">${bi(P.cls.title)}<br>${n} ${ui('items')}, ${fmtMin(clsMin(P.cls))}</p><div class="btn-row"><button class="btn soft" id="pBack">${svgI('back')}${ui('prev')}</button><button class="btn primary" id="pExit2">${ui('exit')}</button></div></div>`;
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
        <div class="p-name"><h2>${bi(e.name)}</h2><div class="meta">${partPill(it.sec)}<span class="pill">${lab('app', e.app)}</span>${lvlPill(e.lvl)}<span class="pill">${esc(it.reps)}</span>${supPill(e)}</div></div>
        <div class="p-card timer"><div class="clock" id="pClock">${fmtClock(P.left)}</div>
          <div class="btn-row"><button class="btn primary" id="pTimer">${svgI('play')}${ui('timerStart')}</button><button class="btn soft" id="pReset" aria-label="${ui('timerReset')}">${svgI('repeat')}</button><button class="btn soft" id="pVoice" aria-label="${ui('listen')}">${svgI('speaker')}${ui('listen')}</button></div></div>
        ${P.breath ? `<label class="switch"><input type="checkbox" id="pSpeakBreath" ${P.speakBreath ? 'checked' : ''}>${ui('speakBreath')}</label>` : ''}
        <div class="p-cols">
          ${it.notes ? `<div class="p-card"><h3>${ui('notes')}</h3><p style="margin:0;white-space:pre-wrap">${esc(it.notes)}</p></div>` : ''}
          <div class="p-card"><h3>${uiB('breath')}</h3><p style="margin:0">${bi(e.breath)}</p></div>
          <div class="p-card"><h3>${uiB('cues')}</h3>${list(e.cues)}</div>
          <div class="p-card"><h3>${uiB(GUIDES[e.id] ? 'doMove' : 'steps')}</h3>${GUIDES[e.id] ? list(GUIDES[e.id].move, true) : list(e.steps, true)}</div>
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

  function viewGlossary() {
    return `<header class="page-head"><h1>${uiB('glossary')}</h1><p>${uiB('glossaryLead')}</p></header>
      <div class="info">${GLOSSARY.map(([te, ts, me, ms]) => `<section><h2>${bi([te, ts])}</h2><p>${bi([me, ms])}</p></section>`).join('')}</div>`;
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
    if (a === 'props' && PROPS.includes(b)) return { name: 'prop', prop: b };
    if (APPS.includes(a)) return { name: 'app', app: a };
    if (a === 'class' && b) return { name: 'class', id: b };
    if (['library', 'classes', 'favs', 'glossary'].includes(a)) return { name: a };
    return { name: 'home' };
  }
  function navHTML() {
    const r = route();
    const cur = r.name === 'class' ? 'classes' : r.name === 'prop' ? 'library' : r.name === 'app' ? r.app : r.name === 'ex' ? (byId[r.id] || {}).app : r.name;
    const tabs = [['home', 'home', 'home'], ['cadillac', 'cadillac', 'cadillac'], ['mat', 'mat', 'mat'], ['wall', 'wall', 'wall'], ['classes', 'class', 'classesShort'], ['favs', 'heart', 'favsShort']];
    $('#tabbar').innerHTML = tabs.map(([k, ic, l]) => `<a href="#/${k === 'home' ? '' : k}" ${cur === k ? 'aria-current="page"' : ''}><span class="tab-ico">${svgI(ic)}</span>${ui(l)}</a>`).join('');
    const desk = [['home', 'home'], ['cadillac', 'cadillac'], ['mat', 'matLong'], ['wall', 'wall'], ['library', 'library'], ['classes', 'classes'], ['favs', 'favs']];
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
    else if (r.name === 'prop') html = viewLibrary(null, r.prop);
    else if (r.name === 'ex') html = viewDetail(r.id);
    else if (r.name === 'classes') html = viewClasses();
    else if (r.name === 'class') html = viewClass(r.id);
    else if (r.name === 'favs') html = viewFavs();
    else if (r.name === 'glossary') html = viewGlossary();
    main.innerHTML = html;
    navHTML();
    if (r.name === 'home') mountHome();
    else if (r.name === 'library' || r.name === 'app' || r.name === 'prop') mountLibrary();
    else if (r.name === 'ex') mountDetail(r.id);
    else if (r.name === 'classes') mountClasses();
    else if (r.name === 'class') mountClass(r.id);
    const t = { home: ui('appName'), library: ui('library'), app: r.app && lab('app', r.app), prop: r.prop && lab('eq', r.prop), ex: r.id && byId[r.id] && tx(byId[r.id].name), classes: ui('classes'), glossary: ui('glossary'), class: r.id && clsById[r.id] && tx(clsById[r.id].title), favs: ui('favs') }[r.name];
    document.title = t && r.name !== 'home' ? `${t} | Springline` : 'Springline — Cadillac, Mat & Wall Unit Pilates';
  }
  let navCount = 1;
  window.addEventListener('hashchange', () => { navCount++; render(); window.scrollTo(0, 0); });

  /* ——— Chrome ——— */
  $('#langSwitch').addEventListener('click', ev => {
    const b = ev.target.closest('[data-lang]'); if (!b) return;
    S.lang = b.dataset.lang; store.set('lang', S.lang);
    const y = window.scrollY; render(); window.scrollTo(0, y);
  });
  $('#searchBtn').onclick = () => { if (!/^#\/(library|cadillac|mat|wall|props)/.test(location.hash)) location.hash = '#/library'; setTimeout(() => { const s = $('#libSearch'); s && s.focus(); }, 60); };

  render();
  main.setAttribute('data-ok', '1');

  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();

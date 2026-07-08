/* =========================================================
 *  مصري — App de árabe egipcio (A2–B1)
 *  Vanilla JS · PWA · sin dependencias
 * ========================================================= */

const App = (() => {
  "use strict";

  const root = document.getElementById("app");
  const titleEl = document.getElementById("title");
  const backBtn = document.getElementById("backBtn");
  const tabbar = document.getElementById("tabbar");

  /* ---------- Estado / persistencia ---------- */
  const STORE_KEY = "masri.progress.v1";
  const PREF_KEY = "masri.prefs.v1";

  const prefs = Object.assign(
    { sound: true },
    safeParse(localStorage.getItem(PREF_KEY))
  );
  const progress = Object.assign(
    { items: {}, grammar: {}, sessions: 0, correct: 0, answered: 0, streakDays: 0, lastDay: null },
    safeParse(localStorage.getItem(STORE_KEY))
  );

  function safeParse(s) { try { return s ? JSON.parse(s) : {}; } catch { return {}; } }
  function savePrefs() { localStorage.setItem(PREF_KEY, JSON.stringify(prefs)); }
  function saveProgress() { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); }

  function itemKey(it) { return it.id || (it.ar + "|" + it.fr); }
  function itemStat(it) {
    const k = itemKey(it);
    return progress.items[k] || (progress.items[k] = { seen: 0, correct: 0, level: 0 });
  }

  /* ---------- Util ---------- */
  const ALL_ITEMS = LESSONS.flatMap(l =>
    l.items.map((it, i) => ({ ...it, id: l.id + ":" + i, lesson: l.id, lessonTitle: l.title }))
  );
  function lessonItems(lessonId) { return ALL_ITEMS.filter(it => it.lesson === lessonId); }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function sample(arr, n) { return shuffle(arr).slice(0, n); }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Audio eliminado ---------- */
  const speak = () => {}; // no-op: la app ya no usa audio

  /* ---------- Comparación franco ---------- */
  function normFranco(s) {
    return String(s).toLowerCase().trim()
      .replace(/[\s'`´\-_.]/g, "")
      .replace(/aa+/g, "a").replace(/ee+/g, "e").replace(/ii+/g, "i")
      .replace(/oo+/g, "o").replace(/uu+/g, "u")
      .replace(/2/g, "").replace(/q/g, "")    // hamza/qaf opcional
      .replace(/3/g, "a").replace(/7/g, "h").replace(/gh/g, "g").replace(/kh/g, "k")
      .replace(/(.)\1+/g, "$1");
  }
  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    const d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++)
      for (let j = 1; j <= n; j++)
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  }
  function francoMatch(input, target) {
    const a = normFranco(input), b = normFranco(target);
    if (!a) return false;
    if (a === b) return true;
    return levenshtein(a, b) <= 1 && Math.abs(a.length - b.length) <= 1;
  }

  /* ---------- Comparación de árabe (normaliza alef/hamza, ة/ه, ى/ي, tashkeel) ---------- */
  function normArabic(s) {
    return String(s)
      .replace(/[ً-ْٰـ]/g, "") // tashkeel, alef superior, tatweel
      .replace(/[أإآٱ]/g, "ا")   // variantes de alef → alef
      .replace(/ى/g, "ي")        // alef maksura → yaa
      .replace(/ؤ/g, "و").replace(/ئ/g, "ي") // hamza sobre waw/yaa
      .replace(/ة/g, "ه")        // taa marbuta → haa
      .replace(/[^ء-ي\s]/g, "") // deja solo letras árabes y espacios (quita ؟ ، ← …)
      .replace(/\s+/g, " ").trim();
  }
  function arabicMatch(input, target) {
    const a = normArabic(input), b = normArabic(target);
    if (!a) return false;
    if (a === b) return true;
    if (b.length <= 4) return false; // palabras cortas: exigimos exacto (evita كتب≈كتاب)
    return levenshtein(a, b) <= 1 && Math.abs(a.length - b.length) <= 1;
  }
  const canWriteArabic = it => !!it && /[ء-ي]/.test(it.ar) && !/[←→]/.test(it.ar);

  /* ---------- Puntuación orientativa de traducción (solapamiento de palabras clave) ---------- */
  const STOP_ES = new Set("de la el los las un una unos unas y o u a en que se lo le les su sus mi mis tu con por para es son al del me te nos no es mas más muy ya le".split(" "));
  const STOP_AR = new Set(["في", "من", "على", "الى", "إلى", "و", "يا", "ان", "إن", "أن", "ده", "دي", "اللي", "ما", "هو", "هي", "مع", "عن", "ال"]);
  function transScore(userRaw, refRaw, isArabic) {
    const stripAccents = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    const toks = isArabic
      ? s => normArabic(s).split(" ").filter(Boolean)
      : s => stripAccents(s).replace(/[^a-z0-9ñ\s]/g, " ").split(/\s+/).filter(Boolean);
    const stop = isArabic ? STOP_AR : STOP_ES;
    const u = new Set(toks(userRaw).filter(w => !stop.has(w)));
    const refSet = new Set(toks(refRaw).filter(w => !stop.has(w)));
    if (!refSet.size) return 0;
    let hit = 0;
    refSet.forEach(w => { if (u.has(w)) hit++; });
    return Math.round(100 * hit / refSet.size);
  }

  /* ---------- Render de un item (chip de árabe + franco) ---------- */
  function wordCard(it, big) {
    const c = el("div", "wordcard" + (big ? " big" : ""));
    c.innerHTML = `
      <div class="ar" dir="rtl" lang="ar">${esc(it.ar)}</div>
      <div class="fr">${esc(it.fr)}</div>`;
    return c;
  }

  /* =========================================================
   *  ROUTER
   * ========================================================= */
  let stack = ["home"];
  const routes = {};

  function go(route, params) {
    stack.push(JSON.stringify({ route, params }));
    render(route, params);
  }
  function back() {
    if (stack.length > 1) {
      stack.pop();
      const prev = stack[stack.length - 1];
      const p = prev.startsWith("{") ? JSON.parse(prev) : { route: prev, params: null };
      render(p.route, p.params, true);
    }
  }
  function reset(route) { stack = [route]; render(route, null, true); }

  function render(route, params, isBack) {
    root.innerHTML = "";
    root.scrollTop = 0;
    const fn = routes[route] || routes.home;
    backBtn.hidden = stack.length <= 1;
    fn(params || {});
    // marca de tab activa
    [...tabbar.children].forEach(t => t.classList.toggle("active", t.dataset.route === route));
    root.classList.remove("fade"); void root.offsetWidth; root.classList.add("fade");
  }

  /* =========================================================
   *  PANTALLA: INICIO
   * ========================================================= */
  routes.home = () => {
    titleEl.querySelector("span").textContent = "Egipcio A2–B1";
    const acc = progress.answered ? Math.round((progress.correct / progress.answered) * 100) : 0;

    const hero = el("section", "hero");
    hero.innerHTML = `
      <h2>أهلاً وسهلاً 👋</h2>
      <p>Aprende <b>árabe egipcio</b> con árabe franco. Elige cómo practicar hoy.</p>`;
    root.appendChild(hero);

    const stats = el("div", "stat-row");
    stats.innerHTML = `
      <div class="stat"><b>${progress.sessions}</b><span>sesiones</span></div>
      <div class="stat"><b>${progress.answered}</b><span>respuestas</span></div>
      <div class="stat"><b>${acc}%</b><span>aciertos</span></div>`;
    root.appendChild(stats);

    const quick = el("div", "grid2");
    quick.appendChild(bigBtn("🎲", "Práctica rápida", "10 preguntas (producción)", () =>
      go("session", { pool: "all", modes: ["choiceEsAr", "typing", "write"], count: 10 })));
    quick.appendChild(bigBtn("🗂️", "Tarjetas", "Repasa vocabulario", () =>
      go("session", { pool: "all", modes: ["flash"], count: 12 })));
    root.appendChild(quick);

    const gram = bigBtn("📖", "Gramática", "Artículo الـ, adverbios, preposiciones…", () => reset("grammar"));
    gram.classList.add("solo");
    root.appendChild(gram);

    const gtr = el("div", "grid2");
    gtr.appendChild(bigBtn("🟢", "Traducir A2–B1", "Frases sencillas", () => openTranslate("a2b1")));
    gtr.appendChild(bigBtn("🔵", "Traducir B2–C1", "Frases avanzadas", () => openTranslate("b2c1")));
    root.appendChild(gtr);

    const rgame = bigBtn("🏭", "Fábrica de palabras", "Forma palabras de una raíz", () => reset("roots"));
    rgame.classList.add("solo");
    root.appendChild(rgame);

    root.appendChild(sectionTitle("Tipos de ejercicio"));
    root.appendChild(go2("practice"));
  };

  function go2(route) {
    const wrap = el("div", "list");
    const modes = [
      ["🗂️", "Tarjetas", "Mira, voltea y memoriza", ["flash"]],
      ["✍️", "Escribe en árabe", "Teclea en árabe (móvil) — difícil", ["write"]],
      ["🇪🇸→🇪🇬", "Español → Árabe", "Elige la palabra correcta", ["choiceEsAr"]],
      ["⌨️", "Escribe en franco", "Teclea la transcripción", ["typing"]],
      ["🇪🇬→🇪🇸", "Árabe → Español", "Reconoce el significado (fácil)", ["choiceArEs"]],
      ["🔗", "Parejas", "Une árabe y español", ["match"]]
    ];
    modes.forEach(([ic, t, d, m]) => {
      const row = el("button", "row");
      row.innerHTML = `<span class="row-ic">${ic}</span><span class="row-tx"><b>${t}</b><i>${d}</i></span><span class="row-go">›</span>`;
      row.onclick = () => go("picklesson", { modes: m });
      wrap.appendChild(row);
    });
    return wrap;
  }

  /* =========================================================
   *  PANTALLA: LECCIONES
   * ========================================================= */
  routes.learn = () => {
    titleEl.querySelector("span").textContent = "Lecciones";
    root.appendChild(sectionTitle("Lecciones temáticas"));
    const list = el("div", "list");
    LESSONS.forEach(l => {
      const items = lessonItems(l.id);
      const mastered = items.filter(it => (progress.items[itemKey(it)] || {}).level >= 2).length;
      const pct = Math.round((mastered / items.length) * 100);
      const row = el("button", "row");
      row.innerHTML = `
        <span class="row-ic">${l.icon}</span>
        <span class="row-tx"><b>${esc(l.title)} <em class="lvl">${l.level}</em></b>
          <i>${items.length} palabras · ${pct}% dominado</i>
          <span class="bar"><span style="width:${pct}%"></span></span>
        </span><span class="row-go">›</span>`;
      row.onclick = () => go("lesson", { id: l.id });
      list.appendChild(row);
    });
    root.appendChild(list);
  };

  routes.lesson = ({ id }) => {
    const l = LESSONS.find(x => x.id === id);
    titleEl.querySelector("span").textContent = l.title;
    const items = lessonItems(id);

    const head = el("div", "lesson-head");
    head.innerHTML = `<div class="lh-ic">${l.icon}</div><div><h2>${esc(l.title)}</h2><p>${items.length} palabras · nivel ${l.level}</p></div>`;
    root.appendChild(head);

    const acts = el("div", "grid2");
    acts.appendChild(bigBtn("🗂️", "Tarjetas", "Estudiar", () => go("session", { pool: id, modes: ["flash"], count: items.length })));
    acts.appendChild(bigBtn("🎯", "Ejercicios", "Producción (elige/escribe)", () => go("session", { pool: id, modes: ["choiceEsAr", "typing", "write"], count: Math.min(12, items.length * 2) })));
    root.appendChild(acts);

    root.appendChild(sectionTitle("Vocabulario"));
    const grid = el("div", "vocab");
    items.forEach(it => {
      const card = wordCard(it);
      const es = el("div", "es", esc(it.es));
      card.appendChild(es);
      card.onclick = () => speak(it.ar);
      grid.appendChild(card);
    });
    root.appendChild(grid);
  };

  /* =========================================================
   *  PANTALLA: PRÁCTICA (elegir tipo)
   * ========================================================= */
  routes.practice = () => {
    titleEl.querySelector("span").textContent = "Práctica";
    const g2 = el("div", "grid2");
    g2.appendChild(bigBtn("🟢", "Traducir A2–B1", "Frases sencillas", () => openTranslate("a2b1")));
    g2.appendChild(bigBtn("🔵", "Traducir B2–C1", "Frases avanzadas", () => openTranslate("b2c1")));
    root.appendChild(g2);
    const g3 = el("div", "grid2");
    g3.appendChild(bigBtn("🧩", "Rellenar huecos", "La palabra que falta", () => reset("cloze")));
    g3.appendChild(bigBtn("🔤", "Conjugación", "Escribe la forma", () => reset("conjug")));
    root.appendChild(g3);
    const g4 = el("div", "grid2");
    g4.appendChild(bigBtn("🧱", "Ordenar frases", "Coloca las palabras", () => reset("builder")));
    g4.appendChild(bigBtn("🔁", "Repaso", "Lo más flojo", () => runReview()));
    root.appendChild(g4);
    const rb = bigBtn("🏭", "Fábrica de palabras", "Forma palabras de una raíz", () => reset("roots"));
    rb.classList.add("solo");
    root.appendChild(rb);
    root.appendChild(sectionTitle("Elige un ejercicio"));
    root.appendChild(go2("practice"));
  };

  routes.picklesson = ({ modes }) => {
    titleEl.querySelector("span").textContent = "Elegir contenido";
    root.appendChild(sectionTitle("¿Sobre qué quieres practicar?"));
    const list = el("div", "list");

    const allRow = el("button", "row");
    allRow.innerHTML = `<span class="row-ic">🎲</span><span class="row-tx"><b>Todas las lecciones</b><i>${ALL_ITEMS.length} palabras</i></span><span class="row-go">›</span>`;
    allRow.onclick = () => go("session", { pool: "all", modes, count: 10 });
    list.appendChild(allRow);

    LESSONS.forEach(l => {
      const items = lessonItems(l.id);
      const row = el("button", "row");
      row.innerHTML = `<span class="row-ic">${l.icon}</span><span class="row-tx"><b>${esc(l.title)}</b><i>${items.length} palabras</i></span><span class="row-go">›</span>`;
      row.onclick = () => go("session", { pool: l.id, modes, count: Math.min(10, items.length * 2) });
      list.appendChild(row);
    });
    root.appendChild(list);
  };

  /* =========================================================
   *  MOTOR DE SESIÓN
   * ========================================================= */
  routes.session = ({ pool, modes, count }) => {
    const base = pool === "all" ? ALL_ITEMS : lessonItems(pool);
    const isMatch = modes.length === 1 && modes[0] === "match";
    const isFlash = modes.length === 1 && modes[0] === "flash";

    if (isMatch) return runMatch(base);
    if (isFlash) return runFlashcards(base);

    // pondera por menos dominados
    const weighted = shuffle(base).sort((a, b) => (itemStat(a).level) - (itemStat(b).level));
    const queue = weighted.slice(0, Math.min(count, base.length)).map(it => ({
      it, mode: pick(modes)
    }));
    runQuiz(queue, base);
  };

  /* ---------- QUIZ (opción múltiple / escucha / escritura) ---------- */
  function runQuiz(queue, pool) {
    let idx = 0, correct = 0;
    titleEl.querySelector("span").textContent = "Ejercicio";

    function finish() {
      progress.sessions++;
      saveProgress();
      showResults(correct, queue.length, () => reset("practice"));
    }

    function next() {
      if (idx >= queue.length) return finish();
      const { it, mode } = queue[idx];
      const prog = el("div", "progress");
      prog.innerHTML = `<span style="width:${(idx / queue.length) * 100}%"></span>`;
      root.innerHTML = "";
      root.appendChild(prog);
      root.appendChild(el("div", "qcount", `${idx + 1} / ${queue.length}`));

      const onAnswer = ok => {
        const st = itemStat(it); st.seen++;
        if (ok) { st.correct++; st.level = Math.min(3, st.level + 1); correct++; progress.correct++; }
        else { st.level = Math.max(0, st.level - 1); }
        progress.answered++;
        saveProgress();
        idx++;
        const nx = el("button", "btn primary wide next-btn", idx >= queue.length ? "Ver resultado" : "Siguiente ›");
        nx.onclick = next;
        root.appendChild(nx);
        nx.scrollIntoView({ behavior: "smooth", block: "nearest" });
      };

      let m = mode;
      if (m === "write" && !canWriteArabic(it)) m = "choiceEsAr";
      if (m === "choiceArEs") renderChoiceArEs(it, pool, onAnswer);
      else if (m === "choiceEsAr") renderChoiceEsAr(it, pool, onAnswer);
      else if (m === "typing") renderTyping(it, onAnswer);
      else if (m === "write") renderWrite(it, onAnswer);
      else renderChoiceArEs(it, pool, onAnswer);
    }
    next();
  }

  function choiceGrid(options, correctVal, getLabel, onAnswer, opt) {
    const grid = el("div", "options");
    options.forEach(o => {
      const b = el("button", "opt");
      b.innerHTML = getLabel(o);
      b.onclick = () => {
        if (grid.classList.contains("locked")) return;
        grid.classList.add("locked");
        const ok = o === correctVal;
        b.classList.add(ok ? "good" : "bad");
        if (!ok) [...grid.children].find(x => x.dataset.v === String(correctVal))?.classList.add("good");
        onAnswer(ok);
      };
      b.dataset.v = String(o);
      grid.appendChild(b);
    });
    return grid;
  }

  function renderChoiceArEs(it, pool, onAnswer) {
    const q = el("div", "qhead");
    q.innerHTML = `<p class="qlabel">¿Qué significa?</p>`;
    const card = wordCard(it, true);
    card.onclick = () => speak(it.ar);
    q.appendChild(card);
    root.appendChild(q);
    speak(it.ar);

    const distract = sample(pool.filter(x => x.es !== it.es), 3).map(x => x.es);
    const opts = shuffle([it.es, ...distract]);
    root.appendChild(choiceGrid(opts, it.es, o => esc(o), onAnswer));
  }

  function renderChoiceEsAr(it, pool, onAnswer) {
    const q = el("div", "qhead");
    q.innerHTML = `<p class="qlabel">Elige la palabra en árabe</p><div class="big-es">${esc(it.es)}</div>`;
    root.appendChild(q);

    const distract = sample(pool.filter(x => x.ar !== it.ar), 3);
    const opts = shuffle([it, ...distract]);
    const grid = el("div", "options");
    opts.forEach(o => {
      const b = el("button", "opt opt-ar");
      b.innerHTML = `<span class="ar" dir="rtl" lang="ar">${esc(o.ar)}</span><span class="fr">${esc(o.fr)}</span>`;
      b.dataset.v = o.ar;
      b.onclick = () => {
        if (grid.classList.contains("locked")) return;
        grid.classList.add("locked");
        const ok = o.ar === it.ar;
        b.classList.add(ok ? "good" : "bad");
        if (!ok) [...grid.children].find(x => x.dataset.v === it.ar)?.classList.add("good");
        speak(it.ar);
        onAnswer(ok);
      };
      grid.appendChild(b);
    });
    root.appendChild(grid);
  }


  function renderTyping(it, onAnswer) {
    const q = el("div", "qhead");
    q.innerHTML = `<p class="qlabel">Escribe en árabe franco</p>`;
    const card = wordCard(it, true);
    card.querySelector(".fr").textContent = "·····";   // oculta la respuesta
    card.appendChild(el("div", "es", esc(it.es)));
    card.onclick = () => speak(it.ar);
    q.appendChild(card);
    root.appendChild(q);
    speak(it.ar);

    const form = el("form", "type-form");
    const input = el("input", "type-input");
    input.type = "text"; input.autocomplete = "off"; input.autocapitalize = "off";
    input.spellcheck = false; input.placeholder = "p. ej. ezzayyak";
    const submit = el("button", "btn primary", "Comprobar");
    submit.type = "submit";
    form.appendChild(input); form.appendChild(submit);
    const fb = el("div", "type-fb");
    root.appendChild(form); root.appendChild(fb);
    setTimeout(() => input.focus(), 50);

    form.onsubmit = e => {
      e.preventDefault();
      if (form.classList.contains("locked")) return;
      form.classList.add("locked");
      input.disabled = true;
      const ok = francoMatch(input.value, it.fr);
      fb.className = "type-fb " + (ok ? "good" : "bad");
      fb.innerHTML = ok
        ? `✓ ¡Correcto! <b>${esc(it.fr)}</b>`
        : `✗ La respuesta es <b>${esc(it.fr)}</b>`;
      card.querySelector(".fr").textContent = it.fr;
      onAnswer(ok);
    };
  }

  /* ---------- ESCRIBIR EN ÁRABE (producción, teclado árabe) ---------- */
  function renderWrite(it, onAnswer) {
    const q = el("div", "qhead");
    q.innerHTML = `
      <p class="qlabel">Escríbelo en árabe ✍️</p>
      <div class="big-es">${esc(it.es)}</div>`;
    root.appendChild(q);

    const form = el("form", "type-form");
    const input = el("input", "type-input arabic");
    input.type = "text"; input.dir = "rtl"; input.lang = "ar";
    input.autocomplete = "off"; input.autocapitalize = "off"; input.spellcheck = false;
    input.setAttribute("inputmode", "text");
    input.placeholder = "اكتب هنا…";
    const submit = el("button", "btn primary", "Comprobar");
    submit.type = "submit";
    form.appendChild(input); form.appendChild(submit);
    const fb = el("div", "type-fb");
    const skip = el("button", "btn ghost wide reveal-btn", "No lo sé / ver respuesta");
    skip.type = "button";
    root.appendChild(form); root.appendChild(fb); root.appendChild(skip);
    root.appendChild(el("p", "hint center", "Usa el teclado árabe del móvil. Se ignoran vocales cortas y variantes de alef."));
    setTimeout(() => input.focus(), 50);

    function finish(ok) {
      if (form.classList.contains("locked")) return;
      form.classList.add("locked");
      input.disabled = true; skip.disabled = true;
      fb.className = "type-fb " + (ok ? "good" : "bad");
      fb.innerHTML = (ok ? "✓ ¡Correcto! " : "✗ Respuesta: ") +
        `<b class="ar" dir="rtl" lang="ar">${esc(it.ar)}</b> <span class="fr">${esc(it.fr)}</span>`;
      onAnswer(ok);
    }
    form.onsubmit = e => { e.preventDefault(); finish(arabicMatch(input.value, it.ar)); };
    skip.onclick = () => finish(false);
  }

  /* ---------- TARJETAS ---------- */
  function runFlashcards(pool) {
    titleEl.querySelector("span").textContent = "Tarjetas";
    const cards = shuffle(pool);
    let i = 0, known = 0;

    function show() {
      if (i >= cards.length) {
        progress.sessions++; saveProgress();
        return showResults(known, cards.length, () => reset("learn"), "dominadas");
      }
      const it = cards[i];
      root.innerHTML = "";
      const prog = el("div", "progress");
      prog.innerHTML = `<span style="width:${(i / cards.length) * 100}%"></span>`;
      root.appendChild(prog);
      root.appendChild(el("div", "qcount", `${i + 1} / ${cards.length}`));

      const flip = el("div", "flashcard");
      flip.innerHTML = `
        <div class="flip-inner">
          <div class="flip-face front">
            <div class="es-big">${esc(it.es)}</div>
            <p class="tap">recuérdalo · toca para ver el árabe</p>
          </div>
          <div class="flip-face back">
            <div class="ar" dir="rtl" lang="ar">${esc(it.ar)}</div>
            <div class="fr">${esc(it.fr)}</div>
          </div>
        </div>`;
      flip.onclick = () => { flip.classList.toggle("flipped"); };
      root.appendChild(flip);
      speak(it.ar);

      const ctr = el("div", "flash-controls");
      const no = el("button", "btn ghost wide", "↻ Repasar");
      const yes = el("button", "btn primary wide", "✓ La sé");
      no.onclick = () => { const st = itemStat(it); st.seen++; st.level = Math.max(0, st.level - 1); saveProgress(); i++; show(); };
      yes.onclick = () => { const st = itemStat(it); st.seen++; st.correct++; st.level = Math.min(3, st.level + 2); known++; saveProgress(); i++; show(); };
      ctr.appendChild(no); ctr.appendChild(yes);
      root.appendChild(ctr);
    }
    show();
  }

  /* ---------- PAREJAS ---------- */
  function runMatch(pool) {
    titleEl.querySelector("span").textContent = "Parejas";
    const set = sample(pool, Math.min(5, pool.length));
    let matched = 0, sel = null, tries = 0;

    root.innerHTML = "";
    root.appendChild(el("p", "qlabel center", "Une cada palabra con su significado"));
    const board = el("div", "match-board");
    const left = el("div", "match-col");
    const right = el("div", "match-col");

    set.forEach(it => {
      const a = el("button", "match-cell ar-cell");
      a.innerHTML = `<span class="ar" dir="rtl" lang="ar">${esc(it.ar)}</span>`;
      a.dataset.k = it.id; a.dataset.side = "ar";
      a.onclick = () => choose(a, it.id);
      left.appendChild(a);
    });
    shuffle(set).forEach(it => {
      const b = el("button", "match-cell es-cell", esc(it.es));
      b.dataset.k = it.id; b.dataset.side = "es";
      b.onclick = () => choose(b, it.id);
      right.appendChild(b);
    });
    board.appendChild(left); board.appendChild(right);
    root.appendChild(board);
    const info = el("p", "hint center", "");
    root.appendChild(info);

    function choose(cell, key) {
      if (cell.classList.contains("done")) return;
      if (!sel) {
        sel = { cell, key };
        cell.classList.add("sel");
        return;
      }
      if (sel.cell === cell) { cell.classList.remove("sel"); sel = null; return; }
      if (sel.cell.dataset.side === cell.dataset.side) {
        sel.cell.classList.remove("sel"); sel = { cell, key }; cell.classList.add("sel"); return;
      }
      tries++;
      if (sel.key === key) {
        sel.cell.classList.remove("sel");
        sel.cell.classList.add("done"); cell.classList.add("done");
        sel = null; matched++;
        if (matched === set.length) {
          progress.sessions++; saveProgress();
          setTimeout(() => showResults(set.length, tries, () => reset("practice"), "intentos", true), 400);
        }
      } else {
        const a = sel.cell, b = cell;
        a.classList.add("wrong"); b.classList.add("wrong");
        sel.cell.classList.remove("sel"); sel = null;
        setTimeout(() => { a.classList.remove("wrong"); b.classList.remove("wrong"); }, 600);
      }
    }
  }

  /* ---------- RESULTADOS ---------- */
  function showResults(score, total, onAgain, unit, isMatch) {
    root.innerHTML = "";
    const pct = isMatch ? 100 : Math.round((score / total) * 100);
    const emoji = pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "💪";
    const box = el("div", "results");
    box.innerHTML = `
      <div class="res-emoji">${emoji}</div>
      <h2>${isMatch ? "¡Completado!" : "¡Sesión terminada!"}</h2>
      <div class="res-score">${isMatch ? score + " parejas" : score + " / " + total}</div>
      <p>${isMatch ? "en " + total + " " + (unit || "intentos") : pct + "% de aciertos"}</p>`;
    root.appendChild(box);
    const ctr = el("div", "flash-controls");
    const again = el("button", "btn primary wide", "↻ Otra vez");
    const home = el("button", "btn ghost wide", "Inicio");
    again.onclick = onAgain;
    home.onclick = () => reset("home");
    ctr.appendChild(again); ctr.appendChild(home);
    root.appendChild(ctr);
  }

  /* =========================================================
   *  PANTALLA: GRAMÁTICA
   * ========================================================= */
  const GRAM_BY_ID = {};
  GRAMMAR.forEach(g => { GRAM_BY_ID[g.id] = g; });
  const PLURS = (typeof PLURALS !== "undefined") ? PLURALS : [];

  routes.plurals = () => {
    titleEl.querySelector("span").textContent = "Plurales";
    const hero = el("div", "guide-hero");
    hero.innerHTML = `<h2>👥 Tabla de plurales</h2>
      <p>${PLURS.length} plurales del árabe egipcio para leer y consultar. La mayoría son <b>irregulares</b> (se memorizan); también hay regulares, colectivos y duales.</p>`;
    root.appendChild(hero);
    const wrap = el("div", "g-table-wrap plur-wrap");
    const rows = PLURS.map(p => `<tr>
        <td><span class="pl-ar" dir="rtl" lang="ar">${esc(p.sg)}</span><span class="pl-fr">${esc(p.sgf)}</span></td>
        <td><span class="pl-ar plr" dir="rtl" lang="ar">${esc(p.pl)}</span><span class="pl-fr">${esc(p.plf)}</span></td>
        <td class="pl-es">${esc(p.es)}</td>
        <td><span class="pat pat-${esc(p.pat)}">${esc(p.pat)}</span></td>
      </tr>`).join("");
    const t = el("table", "g-table plur-table");
    t.innerHTML = `<thead><tr><th>Singular</th><th>Plural</th><th>Significado</th><th>Tipo</th></tr></thead><tbody>${rows}</tbody>`;
    wrap.appendChild(t);
    root.appendChild(wrap);
  };

  /* =========================================================
   *  JUEGO DE RAÍCES (toca letra → toca hueco)
   * ========================================================= */
  const ROOTS = (typeof ROOTS_GAME !== "undefined") ? ROOTS_GAME : [];

  routes.roots = () => {
    titleEl.querySelector("span").textContent = "Fábrica de palabras";
    const hero = el("div", "guide-hero");
    hero.innerHTML = `<h2>🏭 Fábrica de palabras</h2>
      <p>Toca una letra y colócala <b>delante</b>, <b>en medio</b> o <b>detrás</b> de la raíz. Si forma palabra, descubres su significado y su patrón. ¡Encuentra toda la familia!</p>`;
    root.appendChild(hero);
    if (!ROOTS.length) { root.appendChild(el("p", "hint center", "No hay raíces cargadas.")); return; }
    const list = el("div", "list");
    ROOTS.forEach(R => {
      const row = el("button", "row");
      row.innerHTML = `
        <span class="row-ic">${R.icon || "🌱"}</span>
        <span class="row-tx"><b><span class="rt-ar" dir="rtl" lang="ar">${esc(R.root.join(" "))}</span><span class="rt-fr">${esc(R.rootf)}</span></b>
          <i>«${esc(R.meaning)}» · ${R.forms.length} palabras</i></span>
        <span class="row-go">›</span>`;
      row.onclick = () => runRoots(R);
      list.appendChild(row);
    });
    root.appendChild(list);
  };

  const ROOT_SLOTS = ["front", "mid1", "mid2", "back"];
  function runRoots(R) {
    titleEl.querySelector("span").textContent = "Raíz " + R.rootf;
    root.innerHTML = "";
    const total = R.forms.length;
    const found = {};                 // ar -> true
    const placed = { front: null, mid1: null, mid2: null, back: null };
    let sel = null;                   // letra seleccionada

    const head = el("div", "roots-head");
    head.innerHTML = `<div class="roots-title">🌱 <b dir="rtl" lang="ar">${esc(R.root.join(" "))}</b></div>
      <div class="roots-mean">raíz «${esc(R.meaning)}» · ${esc(R.rootf)}</div>`;
    root.appendChild(head);

    const counter = el("div", "roots-counter");
    root.appendChild(counter);
    const bubble = el("div", "roots-bubble"); bubble.dir = "rtl"; bubble.lang = "ar";
    root.appendChild(bubble);
    root.appendChild(el("p", "hint center", "👈 El árabe se lee de derecha a izquierda. Coloca letras y pulsa Comprobar."));
    const msg = el("div", "roots-msg center", "Toca una letra y luego un hueco.");
    root.appendChild(msg);

    const acts = el("div", "roots-actions");
    const btnCheck = el("button", "btn primary", "Comprobar");
    const btnClear = el("button", "btn ghost", "Limpiar");
    acts.appendChild(btnClear); acts.appendChild(btnCheck);
    root.appendChild(acts);

    const tray = el("div", "roots-tray");
    root.appendChild(tray);
    root.appendChild(sectionTitle("Familia descubierta"));
    const list = el("div", "roots-found");
    root.appendChild(list);

    const TRAY = (typeof ROOTS_TRAY !== "undefined") ? ROOTS_TRAY : ["ا", "م", "و", "ي", "ة"];

    function updateCounter() {
      counter.innerHTML = `Descubiertas <b>${Object.keys(found).length}</b> / ${total}`;
    }
    function clearSel() { if (sel) { sel.elem.classList.remove("sel"); sel = null; } }
    function renderBubble() {
      bubble.innerHTML = "";
      // orden lógico: [front] c1 [mid1] c2 [mid2] c3 [back]; el contenedor es RTL, así se lee bien
      [
        { slot: "front" }, { ch: R.root[0] }, { slot: "mid1" },
        { ch: R.root[1] }, { slot: "mid2" }, { ch: R.root[2] }, { slot: "back" }
      ].forEach(s => {
        if (s.ch) { bubble.appendChild(el("span", "root-cons", esc(s.ch))); return; }
        const filled = placed[s.slot];
        const sl = el("button", "root-slot" + (filled ? " filled" : ""), filled ? esc(filled) : "+");
        sl.onclick = () => onSlot(s.slot);
        bubble.appendChild(sl);
      });
    }
    function onSlot(slot) {
      if (sel) { placed[slot] = sel.letter; clearSel(); }
      else if (placed[slot]) { placed[slot] = null; }        // toca hueco lleno sin letra → lo vacía
      else { msg.className = "roots-msg center"; msg.textContent = "Primero toca una letra de abajo."; return; }
      msg.className = "roots-msg center"; msg.textContent = "Coloca más letras o pulsa Comprobar.";
      renderBubble();
    }
    function renderTray() {
      tray.innerHTML = "";
      TRAY.forEach(L => {
        const b = el("button", "tray-letter", esc(L));
        b.onclick = () => {
          if (sel && sel.elem === b) { clearSel(); return; }
          tray.querySelectorAll(".tray-letter").forEach(x => x.classList.remove("sel"));
          sel = { letter: L, elem: b }; b.classList.add("sel");
          msg.className = "roots-msg center"; msg.textContent = `Toca un hueco para colocar «${L}».`;
        };
        tray.appendChild(b);
      });
    }
    function addFound(f) {
      const c = el("div", "rf-card");
      c.innerHTML = `<div class="ar" dir="rtl" lang="ar">${esc(f.ar)}</div>
        <div class="mid"><span class="fr">${esc(f.fr)}</span><span class="es">${esc(f.es)}</span></div>
        <div class="pat-lbl">${esc(f.pat)}</div>`;
      list.appendChild(c);
    }
    function slotsMatch(fs) { return ROOT_SLOTS.every(s => (fs[s] || null) === placed[s]); }
    function clearBoard() { ROOT_SLOTS.forEach(s => placed[s] = null); clearSel(); renderBubble(); }

    btnClear.onclick = () => { clearBoard(); msg.className = "roots-msg center"; msg.textContent = "Toca una letra y luego un hueco."; };
    btnCheck.onclick = () => {
      if (ROOT_SLOTS.every(s => !placed[s])) { msg.className = "roots-msg center"; msg.textContent = "Coloca alguna letra primero."; return; }
      const f = R.forms.find(f => slotsMatch(f.slots));
      if (f && !found[f.ar]) {
        found[f.ar] = true;
        bubble.classList.add("win");
        msg.className = "roots-msg good center";
        msg.innerHTML = `✓ <b dir="rtl" lang="ar">${esc(f.ar)}</b> · <span class="fr">${esc(f.fr)}</span> — ${esc(f.es)}`;
        addFound(f); updateCounter();
        setTimeout(() => {
          bubble.classList.remove("win"); clearBoard();
          if (Object.keys(found).length < total) { msg.className = "roots-msg center"; msg.textContent = "¡Sigue! Busca otra palabra."; }
        }, 900);
        if (Object.keys(found).length >= total) finishRoot();
      } else if (f && found[f.ar]) {
        msg.className = "roots-msg center"; msg.textContent = "Esa ya la tienes 👍";
        bubble.classList.add("bad-flash"); setTimeout(() => bubble.classList.remove("bad-flash"), 400);
      } else {
        msg.className = "roots-msg bad center"; msg.textContent = "Eso no forma palabra. Prueba otra combinación.";
        bubble.classList.add("bad-flash"); setTimeout(() => bubble.classList.remove("bad-flash"), 400);
      }
    };

    function finishRoot() {
      setTimeout(() => {
        root.innerHTML = "";
        const box = el("div", "results");
        box.innerHTML = `<div class="res-emoji">🌱</div><h2>¡Familia completa!</h2>
          <div class="res-score">${total} palabras</div><p>de la raíz ${esc(R.rootf)} «${esc(R.meaning)}»</p>`;
        root.appendChild(box);
        const l2 = el("div", "roots-found");
        R.forms.forEach(f => {
          const c = el("div", "rf-card");
          c.innerHTML = `<div class="ar" dir="rtl" lang="ar">${esc(f.ar)}</div>
            <div class="mid"><span class="fr">${esc(f.fr)}</span><span class="es">${esc(f.es)}</span></div>
            <div class="pat-lbl">${esc(f.pat)}</div>`;
          l2.appendChild(c);
        });
        root.appendChild(l2);
        const ctr = el("div", "flash-controls");
        const again = el("button", "btn ghost wide", "← Otra raíz");
        again.onclick = () => reset("roots");
        const nextR = ROOTS[ROOTS.indexOf(R) + 1];
        if (nextR) {
          const nb = el("button", "btn primary wide", "Siguiente raíz →");
          nb.onclick = () => runRoots(nextR);
          ctr.appendChild(again); ctr.appendChild(nb);
        } else ctr.appendChild(again);
        root.appendChild(ctr);
      }, 1100);
    }

    updateCounter(); renderBubble(); renderTray();
  }

  const GUIDE = (typeof GRAMMAR_GUIDE !== "undefined")
    ? GRAMMAR_GUIDE
    : [{ group: "Clases", desc: "", ids: GRAMMAR.map(g => g.id) }];
  const GRAM_ORDER = GUIDE.flatMap(s => s.ids).filter(id => GRAM_BY_ID[id]);
  const grammarTitle = id => (GRAM_BY_ID[id] ? GRAM_BY_ID[id].title : id);
  const grammarDone = id => !!(progress.grammar && progress.grammar[id]);

  function grammarChip(id, label) {
    const g = GRAM_BY_ID[id];
    const b = el("button", "g-chip", (g ? g.icon + " " : "") + esc(label || grammarTitle(id)));
    b.onclick = () => go("grammarLesson", { id });
    return b;
  }

  routes.grammar = () => {
    titleEl.querySelector("span").textContent = "Gramática";
    const hero = el("div", "guide-hero");
    hero.innerHTML = `<h2>📖 Guía de gramática</h2>
      <p>Una ruta ordenada del árabe egipcio, de lo básico a lo avanzado. Cada ficha explica la regla,
      la contrasta con el español, avisa de los errores típicos y la fija con ejercicios. Sigue el orden o salta a lo que necesites.</p>`;
    root.appendChild(hero);

    const total = GRAMMAR.length;
    const done = GRAMMAR.filter(g => grammarDone(g.id)).length;
    const bar = el("div", "guide-progress");
    bar.innerHTML = `<span>Progreso de la guía</span><b>${done}/${total} fichas</b>
      <div class="bar"><span style="width:${Math.round((done / total) * 100)}%"></span></div>`;
    root.appendChild(bar);

    GUIDE.forEach(sec => {
      const gh = el("div", "guide-group");
      gh.innerHTML = `<h3>${esc(sec.group)}</h3>${sec.desc ? `<p>${esc(sec.desc)}</p>` : ""}`;
      root.appendChild(gh);
      const list = el("div", "list");
      sec.ids.forEach(id => {
        const g = GRAM_BY_ID[id];
        if (!g) return;
        const row = el("button", "row");
        row.innerHTML = `
          <span class="row-ic">${g.icon}</span>
          <span class="row-tx"><b>${esc(g.title)} <em class="lvl">${g.level}</em>${grammarDone(id) ? ' <em class="tick">✓</em>' : ""}</b>
            <i>${g.sections.length} apartados · ${g.quiz.length} ejercicios</i></span>
          <span class="row-go">›</span>`;
        row.onclick = () => go("grammarLesson", { id });
        list.appendChild(row);
      });
      root.appendChild(list);
    });
  };

  routes.grammarLesson = ({ id }) => {
    const g = GRAM_BY_ID[id] || GRAMMAR.find(x => x.id === id);
    titleEl.querySelector("span").textContent = g.title;

    const head = el("div", "lesson-head");
    head.innerHTML = `<div class="lh-ic">${g.icon}</div><div><h2>${esc(g.title)}</h2><p>Nivel ${g.level}</p></div>`;
    root.appendChild(head);

    if (g.goal) root.appendChild(el("div", "g-goal", `🎯 <b>Qué vas a dominar:</b> ${g.goal}`));
    if (g.prereq && g.prereq.length) {
      const pr = el("div", "g-prereq");
      pr.appendChild(el("span", "g-prereq-lb", "Antes conviene:"));
      g.prereq.forEach(pid => pr.appendChild(grammarChip(pid)));
      root.appendChild(pr);
    }
    if (g.intro) root.appendChild(el("p", "g-intro", g.intro));

    g.sections.forEach(s => root.appendChild(renderGrammarSection(s)));

    root.appendChild(el("div", "spacer"));
    const start = el("button", "btn primary wide", `🎯 Practicar test (${g.quiz.length})`);
    start.onclick = () => runGrammarQuiz(g);
    root.appendChild(start);

    if (DRILLS[id] && DRILLS[id].length) {
      const d = el("button", "btn ghost wide g-drill", `📝 Practicar en frases (${DRILLS[id].length})`);
      d.onclick = () => runGrammarDrill(g);
      root.appendChild(d);
    }

    if (id === "plural" && PLURS.length) {
      const pv = el("button", "btn ghost wide g-table-btn", `📋 Ver tabla de plurales (${PLURS.length})`);
      pv.onclick = () => go("plurals");
      root.appendChild(pv);
    }

    if (id === "raiz" && ROOTS.length) {
      const rj = el("button", "btn ghost wide g-table-btn", "🌱 Jugar con la raíz");
      rj.onclick = () => go("roots");
      root.appendChild(rj);
    }

    const i = GRAM_ORDER.indexOf(id);
    if (i >= 0 && i < GRAM_ORDER.length - 1) {
      const nextId = GRAM_ORDER[i + 1];
      const nb = el("button", "btn ghost wide g-next", `Siguiente ficha: ${grammarTitle(nextId)} ›`);
      nb.onclick = () => go("grammarLesson", { id: nextId });
      root.appendChild(nb);
    }
  };

  function renderGrammarSection(s) {
    const sec = el("div", "g-section");
    if (s.h) sec.appendChild(el("h3", "g-h", esc(s.h)));
    if (s.p) sec.appendChild(el("p", "g-p", s.p)); // admite HTML intencionalmente

    if (s.conj) {
      const c = s.conj;
      const ch = el("div", "conj-title");
      ch.innerHTML = `<span class="ar" dir="rtl" lang="ar">${esc(c.verb)}</span>
        <span class="ct-tx"><b>${esc(c.vfr)}</b><i>${esc(c.meaning)}</i></span>`;
      sec.appendChild(ch);
      const table = el("div", "conj");
      c.rows.forEach(r => {
        const row = el("div", "conj-row");
        row.innerHTML = `
          <span class="cr-pron">${esc(r.pf)}</span>
          <span class="cr-ar" dir="rtl" lang="ar">${esc(r.ar)}</span>
          <span class="cr-mid"><span class="fr">${esc(r.fr)}</span><span class="es">${esc(r.es)}</span></span>`;
        table.appendChild(row);
      });
      sec.appendChild(table);
    }

    if (s.table) {
      const wrap = el("div", "g-table-wrap");
      const t = el("table", "g-table");
      t.innerHTML =
        "<thead><tr>" + s.table.cols.map(c => `<th>${c}</th>`).join("") + "</tr></thead>" +
        "<tbody>" + s.table.rows.map(r => "<tr>" + r.map(c => `<td>${c}</td>`).join("") + "</tr>").join("") + "</tbody>";
      wrap.appendChild(t);
      sec.appendChild(wrap);
    }

    if (s.ex) {
      const tbl = el("div", "g-examples");
      s.ex.forEach(e => {
        const row = el("div", "g-ex");
        row.innerHTML = `
          <div class="ar" dir="rtl" lang="ar">${esc(e.ar)}</div>
          <div class="mid"><span class="fr">${esc(e.fr)}</span><span class="es">${esc(e.es)}</span></div>`;
        tbl.appendChild(row);
      });
      sec.appendChild(tbl);
    }

    if (s.dialog) {
      const d = el("div", "g-dialog");
      s.dialog.forEach(line => {
        const row = el("div", "dlg-line " + (line.who === "B" ? "b" : "a"));
        const bubble = el("div", "dlg-bubble");
        bubble.innerHTML = `
          <div class="ar" dir="rtl" lang="ar">${esc(line.ar)}</div>
          <div class="fr">${esc(line.fr)}</div>
          <div class="es">${esc(line.es)}</div>`;
        row.appendChild(bubble);
        d.appendChild(row);
      });
      sec.appendChild(d);
    }

    if (s.note) sec.appendChild(el("div", "g-callout tip", "💡 " + s.note));
    if (s.warn) sec.appendChild(el("div", "g-callout warn", "⚠️ " + s.warn));

    if (s.refs && s.refs.length) {
      const r = el("div", "g-refs");
      r.appendChild(el("span", "g-refs-lb", "Ver también:"));
      s.refs.forEach(rf => r.appendChild(grammarChip(rf.id || rf, rf.label)));
      sec.appendChild(r);
    }
    return sec;
  }

  function runGrammarQuiz(g) {
    const quiz = shuffle(g.quiz);
    let idx = 0, correct = 0;
    titleEl.querySelector("span").textContent = "Gramática · práctica";

    function finish() {
      progress.sessions++;
      progress.grammar = progress.grammar || {};
      const prev = progress.grammar[g.id] || { best: 0 };
      progress.grammar[g.id] = { best: Math.max(prev.best || 0, correct), total: quiz.length };
      saveProgress();
      showResults(correct, quiz.length, () => runGrammarQuiz(g));
    }
    function next() {
      if (idx >= quiz.length) return finish();
      const item = quiz[idx];
      root.innerHTML = "";
      const prog = el("div", "progress");
      prog.innerHTML = `<span style="width:${(idx / quiz.length) * 100}%"></span>`;
      root.appendChild(prog);
      root.appendChild(el("div", "qcount", `${idx + 1} / ${quiz.length}`));

      const q = el("div", "qhead");
      q.innerHTML = `<p class="qlabel">Elige la opción correcta</p><div class="g-q">${item.q}</div>`;
      root.appendChild(q);

      const opts = shuffle(item.options.map((o, i) => ({ o, ok: i === item.answer })));
      const grid = el("div", "options one-col");
      opts.forEach(op => {
        const b = el("button", "opt", esc(op.o));
        b.dataset.ok = op.ok ? "1" : "0";
        b.onclick = () => {
          if (grid.classList.contains("locked")) return;
          grid.classList.add("locked");
          b.classList.add(op.ok ? "good" : "bad");
          if (!op.ok) [...grid.children].find(x => x.dataset.ok === "1")?.classList.add("good");
          const note = el("div", "g-note " + (op.ok ? "good" : "bad"), (op.ok ? "✓ " : "✗ ") + esc(item.note));
          root.appendChild(note);
          progress.answered++;
          if (op.ok) { correct++; progress.correct++; }
          saveProgress();
          const nx = el("button", "btn primary wide", idx + 1 >= quiz.length ? "Ver resultado" : "Siguiente ›");
          nx.onclick = () => { idx++; next(); };
          root.appendChild(nx);
          nx.scrollIntoView({ behavior: "smooth", block: "nearest" });
        };
        grid.appendChild(b);
      });
      root.appendChild(grid);
    }
    next();
  }

  /* =========================================================
   *  PANTALLA: TRADUCCIÓN (frases B2–C1, ambos sentidos)
   * ========================================================= */
  let transDir = "es2ar";
  let transTier = "a2b1";
  const SENTS = (typeof SENTENCES !== "undefined") ? SENTENCES : [];
  const SENTS_EASY = (typeof SENTENCES_A2B1 !== "undefined") ? SENTENCES_A2B1 : [];
  function openTranslate(tier) { transTier = tier; reset("translate"); }

  routes.translate = () => {
    const easy = transTier === "a2b1";
    const corpus = easy ? SENTS_EASY : SENTS;
    titleEl.querySelector("span").textContent = "Traducción";
    const hero = el("div", "guide-hero");
    hero.innerHTML = `<h2>🔁 Traducir frases</h2>
      <p>Escribe tu traducción en <b>árabe</b> (no en franco), compárala con la respuesta modelo y autoevalúate.</p>`;
    root.appendChild(hero);

    const segL = el("div", "seg");
    const mkTier = (val, label) => {
      const b = el("button", "seg-btn" + (transTier === val ? " active" : ""), label);
      b.onclick = () => openTranslate(val);
      return b;
    };
    segL.appendChild(mkTier("a2b1", "A2–B1 · sencillas"));
    segL.appendChild(mkTier("b2c1", "B2–C1 · avanzadas"));
    root.appendChild(segL);

    const seg = el("div", "seg");
    const mk = (val, label) => {
      const b = el("button", "seg-btn" + (transDir === val ? " active" : ""), label);
      b.onclick = () => { transDir = val; reset("translate"); };
      return b;
    };
    seg.appendChild(mk("es2ar", "Español → Árabe ✍️"));
    seg.appendChild(mk("ar2es", "Árabe → Español"));
    root.appendChild(seg);

    root.appendChild(sectionTitle(easy ? "Colecciones · A2–B1" : "Colecciones · B2–C1"));
    if (!corpus.length) {
      root.appendChild(el("p", "hint center", "No se cargaron las frases. Recarga la página (Ctrl+Shift+R) para actualizar."));
      return;
    }
    const list = el("div", "list");
    corpus.forEach(c => {
      const row = el("button", "row");
      row.innerHTML = `
        <span class="row-ic">${c.icon}</span>
        <span class="row-tx"><b>${esc(c.title)} <em class="lvl">${c.level}</em></b>
          <i>${c.items.length} frases</i></span>
        <span class="row-go">›</span>`;
      row.onclick = () => runTranslate(c, transDir);
      list.appendChild(row);
    });
    root.appendChild(list);
  };

  function runTranslate(coll, direction) {
    const items = shuffle(coll.items);
    let idx = 0, correct = 0;
    titleEl.querySelector("span").textContent = "Traducción";

    function finish() {
      progress.sessions++; saveProgress();
      showResults(correct, items.length, () => runTranslate(coll, direction));
    }
    function next() {
      if (idx >= items.length) return finish();
      root.innerHTML = "";
      const prog = el("div", "progress");
      prog.innerHTML = `<span style="width:${(idx / items.length) * 100}%"></span>`;
      root.appendChild(prog);
      root.appendChild(el("div", "qcount", `${idx + 1} / ${items.length}`));
      renderTranslate(items[idx], direction, ok => {
        progress.answered++;
        if (ok) { correct++; progress.correct++; }
        saveProgress();
        idx++;
        setTimeout(next, 150);
      });
    }
    next();
  }

  function renderTranslate(item, direction, onDone) {
    const es2ar = direction === "es2ar";
    const source = es2ar ? item.es : item.ar;
    const targetArabic = es2ar;

    const q = el("div", "qhead");
    q.innerHTML = `<p class="qlabel">${es2ar ? "Traduce al árabe ✍️" : "Traduce al español"}</p>`;
    const src = el("div", "trans-src" + (es2ar ? "" : " ar"));
    if (!es2ar) { src.dir = "rtl"; src.lang = "ar"; }
    src.textContent = source;
    q.appendChild(src);
    root.appendChild(q);

    const form = el("form", "type-form col");
    const ta = document.createElement("textarea");
    ta.className = "type-input trans-input" + (targetArabic ? " arabic" : "");
    ta.rows = 2; ta.autocomplete = "off"; ta.autocapitalize = "off"; ta.spellcheck = false;
    if (targetArabic) { ta.dir = "rtl"; ta.lang = "ar"; ta.placeholder = "اكتب الترجمة هنا…"; }
    else ta.placeholder = "Escribe la traducción…";
    const submit = el("button", "btn primary wide", "Comprobar");
    submit.type = "submit";
    form.appendChild(ta); form.appendChild(submit);
    root.appendChild(form);
    const out = el("div", "trans-out");
    root.appendChild(out);
    setTimeout(() => ta.focus(), 50);

    form.onsubmit = e => {
      e.preventDefault();
      if (form.classList.contains("locked")) return;
      form.classList.add("locked"); ta.disabled = true; submit.disabled = true;
      const ref = es2ar ? item.ar : item.es;
      const score = transScore(ta.value, ref, targetArabic);
      const lvl = score >= 75 ? "good" : score >= 40 ? "mid" : "bad";
      const msg = score >= 75 ? "¡Muy parecido!" : score >= 40 ? "Vas bien, revisa los detalles." : "Compara con el modelo.";
      out.innerHTML = `
        <div class="score ${lvl}">Coincidencia de palabras clave: <b>${score}%</b> · ${msg}</div>
        <div class="model">
          <div class="ml-lb">Respuesta modelo</div>
          <div class="ar" dir="rtl" lang="ar">${esc(item.ar)}</div>
          <div class="fr">${esc(item.fr)}</div>
          <div class="es">${esc(item.es)}</div>
        </div>
        <p class="hint center">La puntuación es orientativa (una frase puede traducirse de varias formas). ¿Tu traducción es correcta?</p>`;
      const ctr = el("div", "flash-controls");
      const no = el("button", "btn ghost wide", "✗ No del todo");
      const ok = el("button", "btn primary wide", "✓ La tenía bien");
      no.onclick = () => onDone(false);
      ok.onclick = () => onDone(true);
      ctr.appendChild(no); ctr.appendChild(ok);
      out.appendChild(ctr);
      ctr.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };
  }

  /* =========================================================
   *  PANTALLA: RELLENAR HUECOS
   * ========================================================= */
  const CLOZES = (typeof CLOZE !== "undefined") ? CLOZE : [];
  const DRILLS = (typeof GRAMMAR_DRILLS !== "undefined") ? GRAMMAR_DRILLS : {};
  function runGrammarDrill(g) {
    runCloze({ title: g.title + " · frases", items: DRILLS[g.id] });
  }

  routes.cloze = () => {
    titleEl.querySelector("span").textContent = "Rellenar huecos";
    const hero = el("div", "guide-hero");
    hero.innerHTML = `<h2>🧩 Rellenar huecos</h2>
      <p>Completa la palabra que falta en frases reales en árabe. Un paso intermedio, ideal antes de la traducción libre.</p>`;
    root.appendChild(hero);
    if (!CLOZES.length) {
      root.appendChild(el("p", "hint center", "No se cargaron los ejercicios. Recarga la página (Ctrl+Shift+R)."));
      return;
    }
    root.appendChild(sectionTitle("Colecciones"));
    const list = el("div", "list");
    CLOZES.forEach(c => {
      const row = el("button", "row");
      row.innerHTML = `
        <span class="row-ic">${c.icon}</span>
        <span class="row-tx"><b>${esc(c.title)} <em class="lvl">${c.level}</em></b>
          <i>${c.items.length} huecos</i></span>
        <span class="row-go">›</span>`;
      row.onclick = () => runCloze(c);
      list.appendChild(row);
    });
    root.appendChild(list);
  };

  function runCloze(coll) {
    const quiz = shuffle(coll.items);
    let idx = 0, correct = 0;
    titleEl.querySelector("span").textContent = coll.title;

    function finish() {
      progress.sessions++; saveProgress();
      showResults(correct, quiz.length, () => runCloze(coll));
    }
    function next() {
      if (idx >= quiz.length) return finish();
      const item = quiz[idx];
      root.innerHTML = "";
      const prog = el("div", "progress");
      prog.innerHTML = `<span style="width:${(idx / quiz.length) * 100}%"></span>`;
      root.appendChild(prog);
      root.appendChild(el("div", "qcount", `${idx + 1} / ${quiz.length}`));

      const q = el("div", "qhead");
      q.innerHTML = `<p class="qlabel">Elige la palabra que falta</p>
        <div class="cloze-q" dir="rtl" lang="ar">${esc(item.q).replace(/___/g, '<span class="gap">؟</span>')}</div>`;
      root.appendChild(q);

      const opts = shuffle(item.options.map(o => ({ o, ok: o === item.answer })));
      const grid = el("div", "options one-col");
      opts.forEach(op => {
        const b = el("button", "opt opt-cloze", `<span class="ar" dir="rtl" lang="ar">${esc(op.o)}</span>`);
        b.dataset.ok = op.ok ? "1" : "0";
        b.onclick = () => {
          if (grid.classList.contains("locked")) return;
          grid.classList.add("locked");
          b.classList.add(op.ok ? "good" : "bad");
          if (!op.ok) [...grid.children].find(x => x.dataset.ok === "1")?.classList.add("good");
          const full = el("div", "cloze-full");
          full.innerHTML = `<b class="ar" dir="rtl" lang="ar">${esc(item.q).replace(/___/g, esc(item.answer))}</b>`;
          if (item.fr) full.appendChild(el("div", "cloze-fr", esc(item.fr)));
          full.appendChild(el("div", "cloze-es-rev", esc(item.es)));
          root.appendChild(full);
          if (item.note) root.appendChild(el("div", "g-note " + (op.ok ? "good" : "bad"), (op.ok ? "✓ " : "✗ ") + esc(item.note)));
          progress.answered++;
          if (op.ok) { correct++; progress.correct++; }
          saveProgress();
          const nx = el("button", "btn primary wide", idx + 1 >= quiz.length ? "Ver resultado" : "Siguiente ›");
          nx.onclick = () => { idx++; next(); };
          root.appendChild(nx);
          nx.scrollIntoView({ behavior: "smooth", block: "nearest" });
        };
        grid.appendChild(b);
      });
      root.appendChild(grid);
    }
    next();
  }

  /* =========================================================
   *  ENTRENADOR DE CONJUGACIÓN (reutiliza las tablas de la guía)
   * ========================================================= */
  const PRON = {
    ana: { ar: "أنا", es: "yo" }, enta: { ar: "إنت", es: "tú (m)" }, enti: { ar: "إنتي", es: "tú (f)" },
    howwa: { ar: "هو", es: "él" }, heyya: { ar: "هي", es: "ella" }, e7na: { ar: "إحنا", es: "nosotros" },
    entu: { ar: "إنتوا", es: "vosotros" }, homma: { ar: "هما", es: "ellos" }
  };
  const CONJ_TENSE = { presente: "presente", pasado: "pasado", futuro: "futuro", tener: "presente" };
  const CONJ_POOL = [];
  (typeof GRAMMAR !== "undefined" ? GRAMMAR : []).forEach(g =>
    (g.sections || []).forEach(s => {
      if (s.conj && s.conj.rows) CONJ_POOL.push({ meaning: s.conj.meaning, tense: CONJ_TENSE[g.id] || "", rows: s.conj.rows });
    }));

  routes.conjug = () => {
    titleEl.querySelector("span").textContent = "Conjugación";
    const hero = el("div", "guide-hero");
    hero.innerHTML = `<h2>🔤 Entrenador de conjugación</h2>
      <p>Te doy un verbo, un tiempo y una persona; tú escribes la forma <b>en árabe</b>. El franco se revela al comprobar.</p>`;
    root.appendChild(hero);
    if (!CONJ_POOL.length) { root.appendChild(el("p", "hint center", "No hay tablas de conjugación cargadas.")); return; }
    const byT = t => CONJ_POOL.filter(c => c.tense === t);
    const g2 = el("div", "grid2");
    g2.appendChild(bigBtn("🎲", "Mezcla", "Todos los tiempos", () => runConjug(CONJ_POOL, 10)));
    g2.appendChild(bigBtn("▶️", "Presente", `${byT("presente").length} verbos`, () => runConjug(byT("presente"), 10)));
    root.appendChild(g2);
    const g3 = el("div", "grid2");
    g3.appendChild(bigBtn("⏮️", "Pasado", `${byT("pasado").length} verbos`, () => runConjug(byT("pasado"), 10)));
    g3.appendChild(bigBtn("⏩", "Futuro", `${byT("futuro").length} verbos`, () => runConjug(byT("futuro"), 10)));
    root.appendChild(g3);
  };

  function runConjug(pool, count) {
    if (!pool.length) return;
    const items = [];
    for (let k = 0; k < count; k++) { const t = pick(pool); items.push({ meaning: t.meaning, tense: t.tense, row: pick(t.rows) }); }
    let idx = 0, correct = 0;
    titleEl.querySelector("span").textContent = "Conjugación";
    function finish() { progress.sessions++; saveProgress(); showResults(correct, items.length, () => runConjug(pool, count)); }
    function next() {
      if (idx >= items.length) return finish();
      root.innerHTML = "";
      const prog = el("div", "progress"); prog.innerHTML = `<span style="width:${(idx / items.length) * 100}%"></span>`;
      root.appendChild(prog);
      root.appendChild(el("div", "qcount", `${idx + 1} / ${items.length}`));
      renderConjug(items[idx], ok => {
        progress.answered++; if (ok) { correct++; progress.correct++; } saveProgress(); idx++;
        const nx = el("button", "btn primary wide next-btn", idx >= items.length ? "Ver resultado" : "Siguiente ›");
        nx.onclick = next;
        root.appendChild(nx);
        nx.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    }
    next();
  }

  function renderConjug(it, onAnswer) {
    const p = PRON[it.row.pf] || { ar: it.row.pf, es: it.row.pf };
    const q = el("div", "qhead");
    q.innerHTML = `<p class="qlabel">Escribe la forma en árabe ✍️</p>
      <div class="conj-prompt">
        <div class="cp-verb">${esc(it.meaning)}</div>
        ${it.tense ? `<div class="cp-tense">${esc(it.tense)}</div>` : ""}
        <div class="cp-person"><span class="ar" dir="rtl" lang="ar">${esc(p.ar)}</span> · ${esc(p.es)}</div>
      </div>`;
    root.appendChild(q);
    const form = el("form", "type-form");
    const input = el("input", "type-input arabic");
    input.type = "text"; input.dir = "rtl"; input.lang = "ar";
    input.autocomplete = "off"; input.autocapitalize = "off"; input.spellcheck = false;
    input.placeholder = "اكتب الفعل…";
    const submit = el("button", "btn primary", "Comprobar"); submit.type = "submit";
    form.appendChild(input); form.appendChild(submit);
    const fb = el("div", "type-fb");
    const skip = el("button", "btn ghost wide reveal-btn", "No lo sé / ver respuesta"); skip.type = "button";
    root.appendChild(form); root.appendChild(fb); root.appendChild(skip);
    setTimeout(() => input.focus(), 50);
    function done(ok) {
      if (form.classList.contains("locked")) return;
      form.classList.add("locked"); input.disabled = true; skip.disabled = true;
      fb.className = "type-fb " + (ok ? "good" : "bad");
      fb.innerHTML = (ok ? "✓ ¡Correcto! " : "✗ Respuesta: ") +
        `<b class="ar" dir="rtl" lang="ar">${esc(it.row.ar)}</b> <span class="fr">${esc(it.row.fr)}</span>`;
      onAnswer(ok);
    }
    form.onsubmit = e => { e.preventDefault(); done(arabicMatch(input.value, it.row.ar)); };
    skip.onclick = () => done(false);
  }

  /* =========================================================
   *  ORDENAR LA FRASE (reutiliza el corpus de frases)
   * ========================================================= */
  routes.builder = () => {
    titleEl.querySelector("span").textContent = "Ordenar la frase";
    const hero = el("div", "guide-hero");
    hero.innerHTML = `<h2>🧱 Ordena la frase</h2>
      <p>Te doy la frase en español y las palabras árabes desordenadas. Colócalas en orden. El franco se revela al final.</p>`;
    root.appendChild(hero);
    const g2 = el("div", "grid2");
    g2.appendChild(bigBtn("🟢", "A2–B1", "Frases sencillas", () => runBuilder("a2b1")));
    g2.appendChild(bigBtn("🔵", "B2–C1", "Frases avanzadas", () => runBuilder("b2c1")));
    root.appendChild(g2);
  };

  function runBuilder(tier) {
    const src = tier === "a2b1" ? SENTS_EASY : SENTS;
    const pool = src.flatMap(c => c.items).filter(it => { const n = it.ar.trim().split(/\s+/).length; return n >= 4 && n <= 9; });
    const items = sample(pool, Math.min(8, pool.length));
    let idx = 0, correct = 0;
    titleEl.querySelector("span").textContent = "Ordenar la frase";
    function finish() { progress.sessions++; saveProgress(); showResults(correct, items.length, () => runBuilder(tier)); }
    function next() {
      if (idx >= items.length) return finish();
      root.innerHTML = "";
      const prog = el("div", "progress"); prog.innerHTML = `<span style="width:${(idx / items.length) * 100}%"></span>`;
      root.appendChild(prog);
      root.appendChild(el("div", "qcount", `${idx + 1} / ${items.length}`));
      renderBuilder(items[idx], ok => { progress.answered++; if (ok) { correct++; progress.correct++; } saveProgress(); idx++; setTimeout(next, 150); });
    }
    next();
  }

  function renderBuilder(item, onDone) {
    const words = item.ar.trim().split(/\s+/);
    const q = el("div", "qhead");
    q.innerHTML = `<p class="qlabel">Ordena las palabras en árabe</p><div class="build-es">${esc(item.es)}</div>`;
    root.appendChild(q);
    const answer = el("div", "build-answer"); answer.dir = "rtl";
    root.appendChild(answer);
    const bank = el("div", "build-bank"); bank.dir = "rtl";
    root.appendChild(bank);
    shuffle(words.map((w, i) => ({ w, i }))).forEach(({ w, i }) => {
      const chip = el("button", "build-chip");
      chip.textContent = w; chip.dataset.i = i; chip.type = "button";
      chip.onclick = () => { if (chip.parentNode === bank) answer.appendChild(chip); else bank.appendChild(chip); };
      bank.appendChild(chip);
    });
    const submit = el("button", "btn primary wide", "Comprobar");
    const out = el("div", "trans-out");
    root.appendChild(submit); root.appendChild(out);
    submit.onclick = () => {
      if (submit.disabled) return;
      const got = [...answer.children].map(c => c.textContent).join(" ").replace(/\s+/g, " ").trim();
      const want = words.join(" ").replace(/\s+/g, " ").trim();
      const ok = got === want;
      submit.disabled = true;
      [...bank.children, ...answer.children].forEach(c => c.disabled = true);
      answer.classList.add(ok ? "good" : "bad");
      out.innerHTML = `
        <div class="score ${ok ? "good" : "bad"}">${ok ? "✓ ¡Correcto!" : "✗ Este es el orden correcto:"}</div>
        <div class="model">
          <div class="ar" dir="rtl" lang="ar">${esc(item.ar)}</div>
          <div class="fr">${esc(item.fr)}</div>
          <div class="es">${esc(item.es)}</div>
        </div>`;
      const nx = el("button", "btn primary wide", "Siguiente ›");
      nx.onclick = () => onDone(ok);
      out.appendChild(nx);
      nx.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };
  }

  /* =========================================================
   *  REPASO — lo más flojo (nivel bajo)
   * ========================================================= */
  function weakItems() {
    return ALL_ITEMS.filter(it => {
      const st = progress.items[itemKey(it)];
      return st && st.seen > 0 && st.level < 2;
    }).sort((a, b) => progress.items[itemKey(a)].level - progress.items[itemKey(b)].level);
  }
  function runReview() {
    const weak = weakItems();
    const chosen = (weak.length ? weak : shuffle(ALL_ITEMS)).slice(0, 12);
    const modes = ["choiceEsAr", "typing", "write"];
    runQuiz(chosen.map(it => ({ it, mode: pick(modes) })), ALL_ITEMS);
  }

  /* =========================================================
   *  PANTALLA: PROGRESO
   * ========================================================= */
  routes.stats = () => {
    titleEl.querySelector("span").textContent = "Progreso";
    const acc = progress.answered ? Math.round((progress.correct / progress.answered) * 100) : 0;
    const totalMastered = ALL_ITEMS.filter(it => (progress.items[itemKey(it)] || {}).level >= 2).length;
    const pctAll = Math.round((totalMastered / ALL_ITEMS.length) * 100);

    const ring = el("div", "ring-wrap");
    ring.innerHTML = `
      <div class="ring" style="--p:${pctAll}">
        <div class="ring-inner"><b>${pctAll}%</b><span>dominado</span></div>
      </div>`;
    root.appendChild(ring);

    const stats = el("div", "stat-row");
    stats.innerHTML = `
      <div class="stat"><b>${totalMastered}</b><span>palabras<br>dominadas</span></div>
      <div class="stat"><b>${progress.sessions}</b><span>sesiones</span></div>
      <div class="stat"><b>${acc}%</b><span>aciertos</span></div>`;
    root.appendChild(stats);

    const weak = weakItems();
    const rev = el("div", "review-card");
    rev.innerHTML = `<div class="rev-tx"><b>${weak.length}</b> palabras por repasar<br><span>lo que llevas más flojo</span></div>`;
    const revBtn = el("button", "btn primary", "🔁 Repasar");
    revBtn.onclick = () => runReview();
    rev.appendChild(revBtn);
    root.appendChild(rev);

    root.appendChild(sectionTitle("Por lección"));
    const list = el("div", "list");
    LESSONS.forEach(l => {
      const items = lessonItems(l.id);
      const m = items.filter(it => (progress.items[itemKey(it)] || {}).level >= 2).length;
      const pct = Math.round((m / items.length) * 100);
      const row = el("div", "row static");
      row.innerHTML = `<span class="row-ic">${l.icon}</span><span class="row-tx"><b>${esc(l.title)}</b><span class="bar"><span style="width:${pct}%"></span></span></span><span class="row-pct">${pct}%</span>`;
      list.appendChild(row);
    });
    root.appendChild(list);

    const reset = el("button", "btn ghost wide danger", "Borrar progreso");
    reset.onclick = () => {
      if (confirm("¿Seguro que quieres borrar todo tu progreso?")) {
        localStorage.removeItem(STORE_KEY);
        location.reload();
      }
    };
    root.appendChild(el("div", "spacer"));
    root.appendChild(reset);
  };

  /* ---------- Helpers UI ---------- */
  function sectionTitle(t) { return el("h3", "section-title", esc(t)); }
  function bigBtn(icon, title, sub, onClick) {
    const b = el("button", "bigbtn");
    b.innerHTML = `<span class="bb-ic">${icon}</span><b>${esc(title)}</b><i>${esc(sub)}</i>`;
    b.onclick = onClick;
    return b;
  }

  /* ---------- Eventos globales ---------- */
  backBtn.onclick = back;
  tabbar.addEventListener("click", e => {
    const t = e.target.closest(".tab");
    if (t) reset(t.dataset.route);
  });

  /* ---------- Init ---------- */
  function init() {
    render("home");
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
  }
  init();

  return { go, reset };
})();

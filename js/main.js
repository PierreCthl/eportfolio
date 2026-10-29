/* Rendering, language switch and interactions. You should not need to edit this file:
   all content lives in data/content.js */
(function () {
  "use strict";
  var S = window.SITE, sh = S.shared;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lang = "en", mobIndex = 0;
  var SECTIONS = ["welcome", "projects", "civic", "mobility", "careers", "sports"];

  /* French typography: non-breaking space before : ; ! ? » % and after « */
  function T(s) {
    if (lang !== "fr") return s;
    return String(s).replace(/ ([:;!?»%])/g, " $1").replace(/« /g, "« ");
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function L() { return S[lang]; }

  function head(id, num, d) {
    $("#" + id + "Head").innerHTML =
      '<span class="shead__num" aria-hidden="true">' + pad(num) + '</span>' +
      '<h2 id="' + id + 'Title">' + T(d.title) + '</h2><p>' + T(d.intro) + '</p>';
  }

  /* ---------------- static + shell ---------------- */
  function renderShell() {
    var l = L(), u = l.ui;
    document.documentElement.lang = lang;
    document.title = l.meta.title;
    function meta(sel, v) { var m = $(sel); if (m) m.setAttribute("content", v); }
    meta('meta[name="description"]', l.meta.description);
    meta('meta[property="og:title"]', l.meta.title);
    meta('meta[property="og:description"]', l.meta.description);
    $$("[data-i18n]").forEach(function (el) { var v = u[el.getAttribute("data-i18n")]; if (v) el.textContent = v; });
    $("#brand").textContent = sh.name;
    var links = SECTIONS.map(function (id) { return '<a href="#' + id + '">' + T(u.nav[id]) + "</a>"; }).join("");
    $("#navLinks").innerHTML = links;
    $("#overlayLinks").innerHTML = links;
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.lang === lang); });
    $$("#overlayLinks a").forEach(function (a) { a.addEventListener("click", closeMenu); });
    $("#burger").setAttribute("aria-label", u.menu);
  }

  function renderHero() {
    var h = L().hero;
    $("#heroBg").style.backgroundImage = "url(" + sh.heroImage + ")";
    $("#heroKicker").textContent = T(h.kicker);
    $("#heroName").textContent = sh.name;
    $("#heroTitle").textContent = T(h.title);
    $("#heroIntro").textContent = T(h.intro);
    $("#portraitCap").textContent = T(h.portraitCaption);
    var img = $("#profileImg"); img.src = sh.profileImage; img.alt = sh.name;
  }

  /* ---------------- projects ---------------- */
  function renderProjects() {
    var d = L().projects, u = L().ui;
    head("projects", 1, d);
    var skills = '<h3 class="sub">' + T(d.skillsTitle) + '</h3><div class="skillgrid reveal">' + d.skills.map(function (b) {
      return '<section class="skillblock"><h4>' + T(b.title) + "</h4><ul>" + b.items.map(function (it) { return "<li>" + T(it) + "</li>"; }).join("") + "</ul></section>";
    }).join("") + "</div>";
    var projects = '<h3 class="sub sub--gap">' + T(d.projectsTitle) + '</h3><div class="projects">' + d.items.map(function (p, i) {
      var s = sh.projects[i];
      return '<article class="proj">' +
        '<div class="proj__media reveal"><button class="proj__img" data-open="' + i + '" aria-label="' + esc(u.openProject + " — " + p.title) + '"><img src="' + s.image + '" alt="' + esc(p.caption) + '" loading="lazy" width="1600" height="1000"></button>' +
        '<p class="fig proj__fig">' + u.fig + " " + pad(i + 1) + " — " + T(p.caption) + "</p></div>" +
        '<div class="proj__body reveal"><p class="proj__year">' + s.year + "</p><h3>" + T(p.title) + '</h3><p class="proj__ctx">' + T(p.context) + "</p>" +
        '<p class="proj__desc">' + T(p.desc) + '</p><div class="tags" style="margin-bottom:22px">' + s.tags.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" +
        '<div class="proj__acts"><button class="link" data-open="' + i + '">' + u.openProject + '</button><a class="link" href="' + s.link + '" target="_blank" rel="noopener">' + T(p.linkLabel) + "</a></div></div></article>";
    }).join("") + "</div>";
    $("#projectsList").innerHTML = skills + projects;
    $$("[data-open]").forEach(function (b) { b.addEventListener("click", function () { openProject(+b.dataset.open, b); }); });
  }

  var modal = $("#modal"), lastFocus = null;
  function openProject(i, trigger) {
    var p = L().projects.items[i], s = sh.projects[i], u = L().ui;
    var res = (p.results || []).filter(function (r) { return r && String(r).trim(); });
    lastFocus = trigger;
    modal.innerHTML = '<button class="modal__x" aria-label="' + u.close + '" id="mx">×</button>' +
      '<img class="hero-img" src="' + s.image + '" alt="' + esc(p.caption) + '">' +
      '<div class="modal__body"><h2 id="modalTitle">' + T(p.title) + "</h2><p>" + T(p.long) + "</p>" +
      "<dl><div><dt>" + u.year + "</dt><dd>" + s.year + "</dd></div><div><dt>" + u.context + "</dt><dd>" + T(p.context) + "</dd></div><div><dt>" + u.role + "</dt><dd>" + T(p.role) + "</dd></div></dl>" +
      '<div class="tags">' + s.tags.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" +
      (res.length ? '<div><p class="sub" style="color:var(--acc)">' + u.results + '</p><ul class="res">' + res.map(function (r) { return "<li>" + T(r) + "</li>"; }).join("") + "</ul></div>" : "") +
      '<a class="link" href="' + s.link + '" target="_blank" rel="noopener">' + T(p.linkLabel) + "</a></div>";
    modal.showModal();
    $("#mx").addEventListener("click", function () { modal.close(); });
  }
  modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });
  modal.addEventListener("close", function () { if (lastFocus) lastFocus.focus(); });

  /* ---------------- civic ---------------- */
  function renderCivic() {
    var d = L().civic;
    head("civic", 2, d);
    $("#civicList").innerHTML = d.items.map(function (c, i) {
      var s = sh.civic[i];
      return '<article class="civic__row reveal"><figure class="civic__photo"><img src="' + s.image + '" alt="' + esc(c.title) + '" loading="lazy" width="1200" height="800"></figure>' +
        '<div class="civic__body"><p class="civic__org">' + T(c.org) + " · " + s.period + "</p><h3>" + T(c.title) + "</h3><p class=\"t\">" + T(c.text) + "</p></div></article>";
    }).join("");
  }

  /* ---------------- mobility map ---------------- */
  /* Europe, simplified coastlines [longitude, latitude] — stylised, not for navigation */
  var LAND = [
    /* mainland: Spain/Portugal, France, Italy, Balkans, Germany, Poland, Denmark… */
    [[-5.35,36.1],[-5.1,36.4],[-4.4,36.7],[-3.5,36.7],[-2.45,36.8],[-2.2,36.7],[-1.9,37.0],[-1.0,37.55],[-0.7,37.6],[-0.5,38.35],[0.2,38.7],[-0.3,39.45],[0.0,39.95],[0.9,40.7],[1.25,41.1],[2.2,41.4],[3.15,41.85],[3.3,42.3],[3.1,42.5],[3.05,42.9],[3.7,43.4],[4.5,43.4],[4.9,43.4],[5.35,43.25],[5.55,43.2],[5.95,43.1],[6.75,43.4],[7.0,43.55],[7.25,43.7],[7.5,43.78],[8.0,43.85],[8.5,44.3],[8.9,44.4],[9.85,44.05],[10.25,43.85],[10.3,43.55],[10.5,42.95],[11.2,42.4],[11.8,42.1],[12.3,41.7],[12.6,41.45],[13.6,41.2],[14.25,40.85],[14.35,40.6],[14.75,40.65],[15.3,40.0],[15.55,40.0],[16.0,39.35],[15.9,38.7],[15.65,38.2],[15.65,38.1],[16.05,37.92],[16.55,38.7],[17.15,39.0],[16.7,39.7],[17.25,40.45],[17.95,40.05],[18.35,39.8],[18.5,40.15],[17.95,40.65],[16.85,41.15],[15.95,41.6],[16.2,41.9],[15.0,42.0],[14.2,42.45],[13.9,42.95],[13.5,43.6],[12.6,44.05],[12.3,44.4],[12.5,44.95],[12.3,45.2],[12.4,45.45],[13.75,45.65],[13.85,44.85],[14.4,45.3],[15.2,44.1],[15.9,43.7],[16.4,43.5],[17.4,43.0],[18.1,42.65],[18.75,42.4],[19.1,42.1],[19.45,41.3],[19.45,40.45],[20.0,39.65],[20.4,39.3],[20.75,38.95],[20.7,38.6],[21.4,38.3],[22.5,38.2],[40,38.2],[40,57.5],[21.0,57.5],
     [21.0,56.5],[21.1,55.7],[20.6,55.2],[19.95,54.95],[19.9,54.4],[18.7,54.4],[18.4,54.8],[17.55,54.75],[16.85,54.6],[16.4,54.45],[15.55,54.2],[14.3,53.95],[14.0,54.5],[13.4,54.65],[13.4,54.1],[12.1,54.15],[11.5,54.0],[10.9,53.95],[11.1,54.4],[10.15,54.35],[9.5,54.85],[9.5,55.5],[9.55,55.7],[10.25,56.15],[10.95,56.3],[10.3,56.7],[10.0,57.05],[10.55,57.4],[10.6,57.75],[9.95,57.6],[8.6,57.1],[8.2,56.7],[8.1,56.0],[8.4,55.5],[8.5,55.1],[8.9,54.5],[8.85,54.1],[8.7,53.9],[8.55,53.55],[8.1,53.55],[7.2,53.35],[6.6,53.45],[5.4,53.2],[4.75,52.95],[4.55,52.45],[4.4,52.2],[4.0,51.98],[3.45,51.55],[3.55,51.4],[3.2,51.35],[2.9,51.23],[2.4,51.05],[1.85,50.95],[1.55,50.7],[1.55,50.2],[1.1,49.95],[0.35,49.75],[0.1,49.5],[-0.25,49.3],[-0.6,49.35],[-1.2,49.4],[-1.6,49.65],[-1.95,49.72],[-1.6,48.85],[-1.5,48.65],[-2.0,48.65],[-2.3,48.7],[-2.7,48.55],[-3.05,48.8],[-3.45,48.83],[-3.97,48.73],[-4.5,48.4],[-4.78,48.33],[-4.7,48.04],[-4.35,47.8],[-3.4,47.7],[-3.1,47.5],[-2.2,47.28],[-2.15,46.95],[-1.15,46.15],[-1.1,45.6],[-1.2,44.65],[-1.25,44.2],[-1.5,43.5],[-1.98,43.32],[-2.9,43.4],[-3.8,43.45],[-5.65,43.55],[-7.0,43.55],[-7.7,43.8],[-8.4,43.4],[-9.3,42.9],[-8.8,42.2],[-8.85,41.7],[-8.7,41.15],[-8.9,40.15],[-9.4,39.35],[-9.5,38.8],[-8.9,38.5],[-8.85,37.95],[-8.95,37.0],[-7.9,37.0],[-6.9,37.2],[-6.3,36.5],[-5.6,36.0]],
    /* Great Britain */
    [[-5.7,50.05],[-4.2,50.35],[-3.4,50.65],[-2.45,50.6],[-1.2,50.75],[-0.1,50.8],[0.95,50.9],[1.35,51.1],[1.4,51.4],[0.7,51.5],[1.0,51.8],[1.7,52.7],[0.35,52.95],[-0.1,53.6],[-0.1,54.1],[-0.6,54.5],[-1.4,55.0],[-1.9,55.8],[-2.1,57.5],[-3.0,58.6],[-5.0,58.5],[-6.0,56.5],[-5.6,55.3],[-4.9,55.0],[-3.6,54.85],[-3.0,54.1],[-3.1,53.4],[-4.5,53.3],[-4.7,52.8],[-4.1,52.3],[-5.2,51.75],[-4.0,51.6],[-3.0,51.5],[-3.0,51.2],[-4.5,51.0]],
    /* Ireland */
    [[-6.0,52.2],[-6.2,53.35],[-6.0,54.0],[-5.9,54.6],[-6.2,55.2],[-7.3,55.35],[-8.5,54.5],[-10.0,54.2],[-9.9,53.4],[-9.4,53.0],[-9.9,52.2],[-10.3,51.9],[-9.5,51.5],[-8.4,51.8],[-7.0,52.1],[-6.4,52.2]],
    /* North Africa */
    [[-14,33],[-6.0,35.0],[-5.9,35.75],[-5.3,35.9],[-3.9,35.25],[-2.9,35.3],[-1.85,35.1],[-0.65,35.75],[0.1,35.95],[1.3,36.5],[2.2,36.6],[3.05,36.8],[3.9,36.9],[5.1,36.75],[5.8,36.8],[6.9,36.9],[7.8,36.9],[8.4,36.9],[8.75,36.95],[9.85,37.3],[10.3,36.85],[11.05,37.05],[11.1,36.85],[10.6,36.4],[10.6,35.8],[11.0,35.5],[10.75,34.75],[11,30],[-14,30]],
    /* islands */
    [[8.55,42.35],[9.3,43.0],[9.55,42.6],[9.55,41.9],[9.25,41.4],[8.8,41.6],[8.6,42.0]],
    [[8.2,41.0],[9.15,41.2],[9.7,40.55],[9.65,39.2],[9.0,39.0],[8.4,39.0],[8.4,39.9],[8.15,40.7]],
    [[12.45,37.8],[13.4,38.2],[15.6,38.3],[15.1,37.4],[15.1,36.7],[14.4,36.8],[12.7,37.6]],
    [[2.4,39.55],[3.1,39.95],[3.45,39.7],[3.1,39.3],[2.65,39.35]],
    [[11.2,55.75],[11.9,56.0],[12.6,56.1],[12.6,55.6],[12.4,55.1],[11.9,55.0],[11.2,55.2]],
    [[9.7,55.35],[10.0,55.65],[10.8,55.6],[10.7,55.1],[10.0,55.1]],
    [[12.7,56.0],[13.0,55.6],[13.35,55.33],[14.3,55.5],[14.4,56.1],[14.5,59],[12.0,59]]
  ];
  /* Map frame: longitude -12…22, latitude 36…56. x is scaled by cos(46°) so shapes look right. */
  var LON0 = -12, LON1 = 22, LAT0 = 36, LAT1 = 56, SC = 40, KX = Math.cos(46 * Math.PI / 180);
  var W = Math.round((LON1 - LON0) * SC * KX), H = (LAT1 - LAT0) * SC;
  function px(lon) { return (lon - LON0) * SC * KX; }
  function py(lat) { return (LAT1 - lat) * SC; }

  function renderMobility() {
    var d = L().mobility, u = L().ui;
    head("mobility", 3, d);
    var grat = "", lo, la;
    for (lo = -10; lo <= 20; lo += 5) {
      grat += '<line class="grat" x1="' + px(lo).toFixed(1) + '" y1="0" x2="' + px(lo).toFixed(1) + '" y2="' + H + '"/>' +
        '<text class="tick" x="' + (px(lo) + 5).toFixed(1) + '" y="16">' + Math.abs(lo) + "°" + (lo < 0 ? "W" : lo > 0 ? "E" : "") + "</text>";
    }
    for (la = 40; la <= 55; la += 5) {
      grat += '<line class="grat" x1="0" y1="' + py(la) + '" x2="' + W + '" y2="' + py(la) + '"/>' +
        '<text class="tick" x="6" y="' + (py(la) - 6) + '">' + la + "°N</text>";
    }
    var land = LAND.map(function (poly) {
      var pts = poly.map(function (c) { return px(c[0]).toFixed(1) + "," + py(c[1]).toFixed(1); }).join(" ");
      return '<polygon class="land" points="' + pts + '"/><polygon class="land-edge" points="' + pts + '"/>';
    }).join("");
    var pins = d.items.map(function (m, i) {
      var s = sh.mobility[i], c = s.coords, n = s.nudge || [0, 0];
      return '<button class="pin pin--' + s.status + (s.side === "l" ? " pin--l" : "") + '" data-pin="' + i + '" style="left:' + (px(c[0]) / W * 100) + "%;top:" + (py(c[1]) / H * 100) + "%;transform:translate(" + n[0] + "px," + n[1] + 'px)" aria-pressed="false" aria-label="' + esc(m.place + ", " + m.country) + '"><i></i><span>' + m.place + "</span></button>";
    }).join("");
    $("#map").innerHTML = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(u.mapLabel) + '"><defs><pattern id="dots" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="3.5" cy="3.5" r="1.25" fill="#5B8DB8" fill-opacity=".55"/></pattern></defs>' + grat + land + "</svg>" + pins +
      '<p class="map__legend"><span><i class="lg lg--now"></i>' + T(u.legendNow) + '</span><span><i class="lg lg--wish"></i>' + T(u.legendWish) + "</span></p>";
    $$(".pin").forEach(function (b) { b.addEventListener("click", function () { mobIndex = +b.dataset.pin; renderPanel(); }); });
    renderPanel();
  }
  function renderPanel() {
    var d = L().mobility, u = L().ui, m = d.items[mobIndex], s = sh.mobility[mobIndex];
    var tag = s.status === "now" ? u.now : u.wish, per = m.period || s.period || "";
    $$(".pin").forEach(function (b) { b.setAttribute("aria-pressed", +b.dataset.pin === mobIndex); });
    $("#mobPanel").innerHTML =
      '<img id="mobMain" src="' + s.images[0] + '" alt="' + esc(m.place + " — " + m.title) + '">' +
      (s.images.length > 1 ? '<div class="mob__thumbs">' + s.images.map(function (im, k) { return '<img src="' + im + '" alt="" loading="lazy" data-th="' + k + '" style="' + (k === 0 ? "opacity:1" : "") + '">'; }).join("") + "</div>" : "") +
      '<p class="mono mob__meta">' + m.place + ", " + T(m.country) + " · " + T(tag) + (per ? " · " + T(per) : "") + "</p><h3>" + T(m.title) + "</h3><p>" + T(m.text) + "</p>" +
      '<div class="mob__list">' + d.items.map(function (it, i) { return '<button data-sel="' + i + '" aria-pressed="' + (i === mobIndex) + '">' + it.place + "</button>"; }).join("") + "</div>";
    $$("[data-sel]").forEach(function (b) { b.addEventListener("click", function () { mobIndex = +b.dataset.sel; renderPanel(); }); });
    $$("[data-th]").forEach(function (t) { t.addEventListener("click", function () { $("#mobMain").src = t.src; $$("[data-th]").forEach(function (x) { x.style.opacity = x === t ? 1 : ""; }); }); });
  }

  /* ---------------- careers ---------------- */
  function renderCareers() {
    var d = L().careers, u = L().ui;
    head("careers", 4, d);
    $("#careersBody").innerHTML =
      '<p class="goal reveal">' + T(d.goal) + "</p>" +
      '<h3 class="sub">' + T(d.timelineTitle) + '</h3><ol class="tl reveal">' + d.items.map(function (c, i) {
        return "<li><time>" + sh.careers[i].period + "</time><h4>" + T(c.title) + '</h4><p class="org">' + T(c.org) + '</p><p class="t">' + T(c.text) + "</p></li>";
      }).join("") + "</ol>" +
      '<div class="skills reveal">' + d.skills.map(function (k, i) {
        var v = sh.skills[i].level;
        return '<div class="skill"><div class="skill__top"><span>' + T(k.name) + '</span><span class="mono">' + v + ' %</span></div><div class="skill__bar" role="presentation"><i style="--v:' + (v / 100) + '"></i></div></div>';
      }).join("") + "</div>" +
      '<div class="cta reveal"><p>' + T(d.cta) + '</p><div class="cta__btns"><a class="btn btn--solid" href="' + sh.cv[lang] + '" download>' + T(u.downloadCv) + '</a><a class="btn" href="' + sh.linkedin + '" target="_blank" rel="noopener">' + T(u.linkedin) + "</a></div></div>";
  }

  /* ---------------- sports ---------------- */
  function renderSports() {
    var d = L().sports;
    head("sports", 5, d);
    $("#sportsList").innerHTML = d.items.map(function (t, i) {
      var s = sh.sports[i];
      return '<figure class="tile tile--' + s.size + ' reveal" tabindex="0"><img src="' + s.image + '" alt="' + esc(t.title) + '" loading="lazy"><figcaption><h3>' + T(t.title) + "</h3><p>" + T(t.caption) + "</p></figcaption></figure>";
    }).join("");
  }

  /* ---------------- footer ---------------- */
  function renderFooter() {
    var u = L().ui;
    $("#footer").innerHTML = '<div class="foot__in"><p class="foot__name">' + sh.name + "</p>" +
      '<div class="foot__links"><a href="mailto:' + sh.email + '">' + sh.email + '</a><a href="' + sh.linkedin + '" target="_blank" rel="noopener">LinkedIn</a><a href="' + sh.github + '" target="_blank" rel="noopener">GitHub</a></div>' +
      '<div class="foot__bot"><span>© ' + new Date().getFullYear() + " " + sh.name + ". " + u.rights + '</span>' +
      '<div class="lang" role="group" aria-label="Language"><button type="button" data-lang="fr" aria-pressed="' + (lang === "fr") + '">FR</button><span aria-hidden="true">|</span><button type="button" data-lang="en" aria-pressed="' + (lang === "en") + '">EN</button></div></div></div>';
    bindLang();
  }

  /* ---------------- interactions ---------------- */
  var io;
  function observe() {
    if (io) io.disconnect();
    io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    $$(".reveal").forEach(function (el) { io.observe(el); });
  }
  function bindLang() {
    $$("[data-lang]").forEach(function (b) { b.onclick = function () { setLang(b.dataset.lang); }; });
  }
  function setLang(l) {
    if (l !== "en" && l !== "fr") return;
    lang = l;
    try { localStorage.setItem("lang", l); } catch (e) {}
    renderAll();
  }
  function renderAll() {
    renderShell(); renderHero(); renderProjects(); renderCivic(); renderMobility(); renderCareers(); renderSports(); renderFooter();
    bindLang(); observe(); setActive();
  }

  var burger = $("#burger"), overlay = $("#overlay");
  function closeMenu() { overlay.hidden = true; burger.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; }
  burger.addEventListener("click", function () {
    var open = overlay.hidden;
    overlay.hidden = !open; burger.setAttribute("aria-expanded", String(open)); document.body.style.overflow = open ? "hidden" : "";
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !overlay.hidden) { closeMenu(); burger.focus(); } });

  var nav = $("#nav"), prog = $("#progress"), bg = $("#heroBg"), ticking = false;
  function onScroll() {
    var y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
    nav.classList.toggle("solid", y > 40);
    prog.style.transform = "scaleX(" + (max > 0 ? y / max : 0) + ")";
    if (!reduce && y < window.innerHeight * 1.2) bg.style.transform = "translate3d(0," + (y * 0.18) + "px,0)";
    ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  function setActive() {
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) $$("#navLinks a").forEach(function (a) { a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    SECTIONS.forEach(function (id) { var el = document.getElementById(id); if (el) so.observe(el); });
  }

  /* init: saved choice → browser language → English */
  try { var saved = localStorage.getItem("lang"); if (saved === "fr" || saved === "en") lang = saved; else if ((navigator.language || "").toLowerCase().indexOf("fr") === 0) lang = "fr"; } catch (e) {
    if ((navigator.language || "").toLowerCase().indexOf("fr") === 0) lang = "fr";
  }
  renderAll(); onScroll();
})();

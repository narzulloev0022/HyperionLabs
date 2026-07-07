/* Hyperion Labs — motion layer (GSAP).
 * Layers on top of script.js: preloader, ScrollSmoother, hero SplitText,
 * marquee velocity, dotted-surface canvas. Degrades to the existing CSS
 * entrance when GSAP is absent or the visitor prefers reduced motion. */
(function () {
  "use strict";

  /* Safari bfcache restores a frozen page (stuck preloader) — reload clean */
  window.addEventListener("pageshow", function (e) { if (e.persisted) location.reload(); });

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var pre = document.getElementById("preloader");
  var trail = document.getElementById("preTrail");

  /* ── Dotted surface: perspective dot-wave floor (efferd port, canvas 2D) ── */
  function dotSurface(staticOnly) {
    var cv = document.getElementById("dotSurface");
    if (!cv) return;
    var ctx = cv.getContext("2d");
    var W = 0, H = 0, t = 0, raf = null, visible = true;
    var COLS = 88, ROWS = 24;

    function size() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      var r = cv.getBoundingClientRect();
      W = r.width; H = r.height;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#95AEF8";
      var horizon = H * 0.06, span = H * 0.9;
      for (var iz = 0; iz < ROWS; iz++) {
        var zn = iz / (ROWS - 1);                       /* 0 = far, 1 = near */
        var rowY = horizon + Math.pow(zn, 1.4) * span;
        var spread = 0.4 + 0.6 * zn;
        for (var ix = 0; ix < COLS; ix++) {
          var x = (ix / (COLS - 1)) * 2 - 1;
          var wave = Math.sin(x * 2.6 + t) * Math.cos(zn * 3.4 - t * 0.75);
          var y = rowY + wave * (8 + 26 * zn);
          var px = W / 2 + x * (W * 0.55) * spread;
          var s = 0.7 + 2.1 * zn;
          ctx.globalAlpha = 0.08 + zn * (0.34 + 0.22 * (wave * 0.5 + 0.5));
          ctx.fillRect(px, y, s, s);
        }
      }
      ctx.globalAlpha = 1;
    }

    function frame() {
      t += 0.014;
      draw();
      raf = visible ? requestAnimationFrame(frame) : null;
    }

    size();
    window.addEventListener("resize", function () { size(); if (staticOnly) draw(); });
    if (staticOnly) { draw(); return; }

    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting && !document.hidden;
      if (visible && !raf) raf = requestAnimationFrame(frame);
    }, { threshold: 0.02 }).observe(cv);
    document.addEventListener("visibilitychange", function () {
      visible = !document.hidden;
      if (visible && !raf) raf = requestAnimationFrame(frame);
    });
    raf = requestAnimationFrame(frame);
  }

  /* ── No GSAP / reduced motion: static fallbacks, CSS entrance stays ── */
  if (typeof gsap === "undefined" || reduce) {
    if (pre) pre.style.display = "none";
    if (trail) trail.style.display = "none";
    dotSurface(reduce); /* animated without GSAP, static when reduced */
    return;
  }

  document.documentElement.classList.add("js-motion");
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, DrawSVGPlugin, ScrambleTextPlugin);
  var EASE = "power4.out";

  /* ── ScrollSmoother: premium inertia (desktop, fine pointers) ── */
  var smoother = null;
  gsap.matchMedia().add("(min-width: 1024px) and (pointer: fine)", function () {
    smoother = ScrollSmoother.create({ smooth: 1.1, effects: true });
    return function () { if (smoother) { smoother.kill(); smoother = null; } };
  });

  /* ── Hero title split (revert on language switch — script.js rewrites text) ── */
  var heroSplit = null;
  function splitHero() {
    heroSplit = new SplitText(".hero-title", { type: "lines,words,chars", mask: "lines" });
    /* .accent uses background-clip:text — split chars don't inherit the
       background, so each char must carry the gradient itself */
    document.querySelectorAll(".hero-title .accent div").forEach(function (ch) {
      ch.style.background = "linear-gradient(115deg, #6E86E0, #A9BEFF)";
      ch.style.webkitBackgroundClip = "text";
      ch.style.backgroundClip = "text";
      ch.style.webkitTextFillColor = "transparent";
    });
    return heroSplit;
  }
  if (typeof window.setLanguage === "function") {
    var _origSetLanguage = window.setLanguage;
    window.setLanguage = function (lang) {
      if (heroSplit) { try { heroSplit.revert(); } catch (e) {} heroSplit = null; }
      _origSetLanguage(lang);
      ScrollTrigger.refresh();
    };
  }

  /* ── Hero entrance (fires as the preloader curtain lifts) ── */
  var introDone = false;
  function heroIntro() {
    if (introDone) return;
    introDone = true;
    splitHero();
    gsap.from(heroSplit.chars, { yPercent: 112, duration: 1.0, ease: EASE, stagger: 0.014 });
    gsap.from(".hero-badge", { y: 14, opacity: 0, duration: 0.7, ease: "power3.out", delay: 0.15 });
    gsap.from([".hero-copy .lead", ".hero-actions"], {
      y: 26, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.3
    });
    gsap.from(".preview-card", { y: 34, opacity: 0, duration: 1.0, ease: "power3.out", delay: 0.4 });
  }
  /* hold hero copy hidden under the preloader so nothing flashes */
  gsap.set([".hero-badge", ".hero-copy .lead", ".hero-actions", ".preview-card"], { opacity: 1 });

  /* ── Preloader: monogram draws itself, counter runs, curtains lift ── */
  var pct = document.getElementById("prePct");
  var preState = { n: 0 };
  gsap.set(".plp", { drawSVG: "0%", fillOpacity: 0 });
  gsap.timeline()
    .to(preState, { n: 100, duration: 2.0, ease: "power2.inOut",
      onUpdate: function () { pct.textContent = Math.round(preState.n) + "%"; } }, 0)
    .to("#preBar", { scaleX: 1, duration: 2.0, ease: "power2.inOut" }, 0)
    .fromTo(".ph-rect", { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.9, ease: "power2.inOut" }, 0.1)
    .to(".ph-rect", { fillOpacity: 1, duration: 0.5 }, 0.7)
    .fromTo(".ph-h", { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.9, ease: "power2.inOut" }, 0.5)
    .to(".ph-h", { fillOpacity: 1, duration: 0.5, ease: "power2.out" }, 1.15)
    .to(".ph-h", { strokeOpacity: 0, duration: 0.4 }, 1.3)
    .fromTo(".ph-smile", { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.5, ease: "power2.out" }, 1.35)
    .to("#preWord", { opacity: 1, letterSpacing: "0.18em", duration: 0.9, ease: "power2.out" }, 1.2)
    .to([".pre-center", ".pre-pct", ".pre-bar"], { opacity: 0, y: -20, duration: 0.3, ease: "power2.in" }, 2.25)
    .to("#preloader", { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, 2.4)
    .to("#preTrail", { yPercent: -100, duration: 0.8, ease: "power4.inOut" }, 2.52)
    .set(["#preloader", "#preTrail"], { display: "none" })
    .add(heroIntro, "-=0.55");
  setTimeout(function () {
    if (!introDone) { gsap.set(["#preloader", "#preTrail"], { display: "none" }); heroIntro(); }
  }, 4800);

  /* ── Marquee: GSAP loop that reacts to scroll velocity, slows on hover ── */
  var mq = document.querySelector(".marquee");
  if (mq) {
    var mqTween = gsap.to(mq, { xPercent: -50, ease: "none", duration: 36, repeat: -1 });
    var hovering = false;
    ScrollTrigger.create({
      start: 0, end: "max",
      onUpdate: function (self) {
        if (hovering) return;
        var boost = 1 + Math.min(Math.abs(self.getVelocity()) / 1100, 3);
        gsap.to(mqTween, { timeScale: boost, duration: 0.4, overwrite: true });
      }
    });
    var section = mq.closest(".marquee-section");
    if (section) {
      section.addEventListener("pointerenter", function () { hovering = true; gsap.to(mqTween, { timeScale: 0.12, duration: 0.35, overwrite: true }); });
      section.addEventListener("pointerleave", function () { hovering = false; gsap.to(mqTween, { timeScale: 1, duration: 0.5, overwrite: true }); });
    }
  }

  dotSurface(false);
})();

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

  /* ── No GSAP / reduced motion: keep the CSS entrance, drop the preloader ── */
  if (typeof gsap === "undefined" || reduce) {
    if (pre) pre.style.display = "none";
    if (trail) trail.style.display = "none";
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
  }
  /* hold hero copy hidden under the preloader so nothing flashes */
  gsap.set([".hero-badge", ".hero-copy .lead", ".hero-actions", ".preview-card"], { opacity: 1 });

  /* ── Preloader: the pillars + hourglass silhouette draw as one line,
     then the dark waist settles in and the light blooms through the pinch ── */
  var pct = document.getElementById("prePct");
  var preState = { n: 0 };
  gsap.set(".plp", { drawSVG: "0%", fillOpacity: 0 });
  gsap.timeline()
    .to(preState, { n: 100, duration: 2.0, ease: "power2.inOut",
      onUpdate: function () { pct.textContent = Math.round(preState.n) + "%"; } }, 0)
    .to("#preBar", { scaleX: 1, duration: 2.0, ease: "power2.inOut" }, 0)
    .fromTo(".ph-mark", { drawSVG: "0%" }, { drawSVG: "100%", duration: 1.35, ease: "power2.inOut" }, 0.1)
    .to(".ph-sil", { opacity: 1, duration: 0.45 }, 1.15)
    .to(".ph-mark", { fillOpacity: 1, duration: 0.55, ease: "power2.out" }, 1.2)
    .to(".ph-glow", { opacity: 1, duration: 0.7, ease: "sine.out" }, 1.3)
    .to(".ph-mark", { strokeOpacity: 0, duration: 0.4 }, 1.45)
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

  /* ── container-scroll (Aceternity port): the flow panel tilts in, straightens on scroll ── */
  gsap.fromTo(".flow-panel",
    { rotateX: 15, scale: 0.95, transformOrigin: "center top" },
    { rotateX: 0, scale: 1, ease: "none",
      scrollTrigger: { trigger: ".flow-panel", start: "top 95%", end: "top 38%", scrub: 0.6 } });

  /* ── step pictograms act out their meaning ── */
  var stepSvgs = document.querySelectorAll(".step-card .step-icon svg");
  if (stepSvgs[0]) {
    /* Listen: the mic breathes */
    gsap.to(stepSvgs[0], { scale: 1.12, y: -1, duration: 1.1, ease: "sine.inOut", yoyo: true, repeat: -1 });
  }
  if (stepSvgs[1]) {
    /* Structure: the field lines write themselves */
    var lines = stepSvgs[1].querySelectorAll("path")[0];
    gsap.timeline({ repeat: -1, repeatDelay: 0.8 })
      .fromTo(lines, { drawSVG: "0%" }, { drawSVG: "100%", duration: 1.2, ease: "power1.inOut" })
      .to(lines, { opacity: 0.25, duration: 0.4, delay: 0.6 })
      .to(lines, { opacity: 1, duration: 0.3 });
  }
  if (stepSvgs[2]) {
    /* Note ready: the check re-draws */
    var check = stepSvgs[2].querySelectorAll("path")[1];
    gsap.timeline({ repeat: -1, repeatDelay: 1.6 })
      .fromTo(check, { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.7, ease: "power2.out" });
  }
  /* connector arrows: a running stroke, staggered */
  document.querySelectorAll(".step-link svg path").forEach(function (p, i) {
    gsap.fromTo(p, { drawSVG: "0% 30%" }, { drawSVG: "70% 100%", duration: 1.4, ease: "none",
      repeat: -1, repeatDelay: 0.5, delay: i * 0.7 });
  });

  /* ── products: the Avris mark floats ── */
  gsap.to(".product--avris .product-mark img", { y: -8, duration: 2.8, ease: "sine.inOut", yoyo: true, repeat: -1 });
})();

/* ═══════════════════════════════════════════
   HYPERION LABS — Interactive Layer (v2)
   ═══════════════════════════════════════════ */

// ── i18n Translations ──
const translations = {
  en: {
    skip: "Skip to content",
    navProducts: "Products",
    navAbout: "About",
    navTeam: "Team",
    navContact: "Contact",
    navCta: "Get Early Access",

    heroBadge: "AI Lab · Central Asia",
    heroTitle1: "World-class AI",
    heroTitle2: "for the future of healthcare.",
    heroSub:
      "Hyperion Labs builds AI for healthcare in Central Asia, starting with AvrisAI — a voice assistant for doctors.",
    heroPrimary: "Explore AvrisAI",
    heroSecondary: "Get Early Access",

    productsEyebrow: "Products",
    productsTitle: "Two products. One mission.",
    productsLead:
      "A focused portfolio for the realities of healthcare in the region.",

    avrisEyebrow: "Flagship · Voice AI",
    avrisTagline: "Voice AI assistant for doctors",
    avrisDesc:
      "A voice AI assistant for doctors — already deployed and running. It listens to the doctor–patient conversation and produces structured clinical documentation in seconds. Pilot completed across three cities in Tajikistan.",
    avrisCta: "Open AvrisAI",

    teaserBadge: "Coming Soon",
    teaserDesc: "A new product in development. Coming soon.",
    teaserCta: "Private pipeline",

    val1: "Voice AI for doctors",
    val2: "Clinical notes in seconds",
    val3: "Russian & English",
    val4: "Built for Central Asia",
    val5: "Less paperwork, more care",
    marqueeSr:
      "AvrisAI: voice AI for doctors — clinical notes in seconds, in Russian and English, built for Central Asia.",

    aboutEyebrow: "Who we are",
    aboutTitle: "More than a startup.",
    aboutP1:
      "Hyperion Labs was founded in Dushanbe, Tajikistan — one of the world's most underserved tech markets. We started with one question: why do doctors lose hours to paperwork when AI can do it in seconds?",
    aboutP2:
      "We're not building for Silicon Valley. We build for the doctor in Dushanbe, the hospital in Tashkent, the clinic in Almaty. If we can solve it here, we can solve it anywhere.",
    missionText1: "We build AI that solves ",
    missionText2: "real problems",
    missionText3: " for ",
    missionText4: "real people",
    missionText5: ".",

    statsEyebrow: "By the numbers",
    statsTitle: "Small lab. Real momentum.",
    stat1: "Pilot cities",
    stat2: "Products",
    stat3: "Public launch",
    stat4: "Founded · Dushanbe",

    focusEyebrow: "What we work on",
    focusTitle: "Research grounded in real deployment.",
    focus1Title: "Medical voice AI",
    focus1Text:
      "Clinical workflows, speech understanding, and trust-critical systems for everyday care.",
    focus2Title: "Regional-language NLP",
    focus2Text:
      "Models tuned for Tajik, Russian, and the linguistic reality of Central Asia.",
    focus3Title: "Healthcare infrastructure",
    focus3Text:
      "Tooling that makes AI usable inside real clinics and institutions.",

    teamEyebrow: "Team",
    teamTitle: "A small, elite team.",
    teamFounderRole: "Founder & CEO",
    teamFounderBio:
      "Building world-class AI for emerging markets. Medical student turned entrepreneur.",
    cofounderLabel: "Co-Founder",
    cofounderRole: "Co-Founder & CFO",
    cofounderText:
      "Leading finance, strategy, and operational discipline behind Hyperion Labs.",
    cofounderRole2: "Founding Team",
    cofounderTitle2: "Open Co-Founder Seat",
    cofounderText2:
      "We are looking for a strong co-founder to help build a world-class AI company.",
    joinUs: "Join us",

    ctaEyebrow: "Early Access",
    ctaTitle: "Work with us.",
    ctaLead:
      "Join the early access list for AvrisAI. We'll only write when there's something real to share.",
    emailLabel: "Email address",
    submitLabel: "Get Access",

    footerDesc:
      "Hyperion Labs is building world-class AI for healthcare in Central Asia.",

    formSuccess: "Thanks — we'll be in touch soon.",
    formError: "Please enter a valid email address.",
    formRateLimit: "Please wait a moment before trying again.",
  },
  ru: {
    skip: "Перейти к содержимому",
    navProducts: "Продукты",
    navAbout: "О нас",
    navTeam: "Команда",
    navContact: "Контакты",
    navCta: "Ранний доступ",

    heroBadge: "AI-лаборатория · Центральная Азия",
    heroTitle1: "AI мирового уровня",
    heroTitle2: "для будущего здравоохранения.",
    heroSub:
      "Hyperion Labs создаёт AI для здравоохранения Центральной Азии. Начали с AvrisAI — голосового ассистента для врачей.",
    heroPrimary: "Изучить AvrisAI",
    heroSecondary: "Ранний доступ",

    productsEyebrow: "Продукты",
    productsTitle: "Два продукта. Одна миссия.",
    productsLead:
      "Сфокусированный портфель под реальные задачи здравоохранения региона.",

    avrisEyebrow: "Флагман · Voice AI",
    avrisTagline: "Голосовой AI-ассистент для врачей",
    avrisDesc:
      "Голосовой AI-ассистент для врачей — уже развёрнут и работает. Слушает разговор врача с пациентом и за секунды формирует структурированную клиническую документацию. Пилот пройден в трёх городах Таджикистана.",
    avrisCta: "Открыть AvrisAI",

    teaserBadge: "Скоро",
    teaserDesc: "Новый продукт в разработке. Скоро.",
    teaserCta: "Закрытый pipeline",

    val1: "Голосовой AI для врачей",
    val2: "Клинические заметки за секунды",
    val3: "Русский и английский",
    val4: "Создано для Центральной Азии",
    val5: "Меньше бумаг — больше времени пациенту",
    marqueeSr:
      "AvrisAI: голосовой AI для врачей — клинические заметки за секунды, на русском и английском, создано для Центральной Азии.",

    aboutEyebrow: "О нас",
    aboutTitle: "Больше, чем стартап.",
    aboutP1:
      "Hyperion Labs основана в Душанбе, Таджикистан — одном из самых недообслуженных технологических рынков мира. Мы начали с простого вопроса: почему врачи теряют часы на бумажную работу, когда AI может справиться за секунды?",
    aboutP2:
      "Мы строим не для Кремниевой долины. Мы строим для врача в Душанбе, больницы в Ташкенте, клиники в Алматы. Если мы можем решить это здесь — мы можем решить это где угодно.",
    missionText1: "Мы создаём AI, который решает ",
    missionText2: "реальные проблемы",
    missionText3: " для ",
    missionText4: "реальных людей",
    missionText5: ".",

    statsEyebrow: "Коротко",
    statsTitle: "Небольшая лаборатория. Реальная динамика.",
    stat1: "Города пилота",
    stat2: "Продукта",
    stat3: "Запуск",
    stat4: "Основана · Душанбе",

    focusEyebrow: "Над чем работаем",
    focusTitle: "Исследования с опорой на реальное внедрение.",
    focus1Title: "Медицинский voice AI",
    focus1Text:
      "Клинические процессы, распознавание речи и системы, критичные к доверию, для повседневной помощи.",
    focus2Title: "NLP для языков региона",
    focus2Text:
      "Модели под таджикский, русский и лингвистическую реальность Центральной Азии.",
    focus3Title: "Инфраструктура здравоохранения",
    focus3Text:
      "Инструменты, которые делают AI применимым в реальных клиниках и учреждениях.",

    teamEyebrow: "Команда",
    teamTitle: "Небольшая, сильная команда.",
    teamFounderRole: "Founder & CEO",
    teamFounderBio:
      "Создаём AI мирового уровня для развивающихся рынков. Студент-медик, ставший предпринимателем.",
    cofounderLabel: "Co-Founder",
    cofounderRole: "Co-Founder & CFO",
    cofounderText:
      "Отвечает за финансы, стратегию и операционную дисциплину Hyperion Labs.",
    cofounderRole2: "Founding Team",
    cofounderTitle2: "Открытая позиция кофаундера",
    cofounderText2:
      "Ищем сильного кофаундера, чтобы вместе строить AI-компанию мирового уровня.",
    joinUs: "Присоединиться",

    ctaEyebrow: "Ранний доступ",
    ctaTitle: "Готовы работать с нами?",
    ctaLead:
      "Оставьте email для раннего доступа к AvrisAI. Напишем, только когда будет что показать.",
    emailLabel: "Электронная почта",
    submitLabel: "Получить доступ",

    footerDesc:
      "Hyperion Labs создаёт AI мирового уровня для здравоохранения Центральной Азии.",

    formSuccess: "Спасибо — мы скоро свяжемся с вами.",
    formError: "Введите корректный email.",
    formRateLimit: "Подождите немного перед повторной попыткой.",
  },
};

// ── DOM refs ──
const i18nNodes = document.querySelectorAll("[data-i18n]");
const langButtons = document.querySelectorAll(".lang-toggle button");
const header = document.getElementById("site-header");
const form = document.getElementById("early-access-form");
const emailInput = document.getElementById("email");
const formMsg = document.getElementById("form-msg");

// ── Language switching ──
function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key] !== undefined) node.textContent = dict[key];
  });
  langButtons.forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  localStorage.setItem("hyperion-lang", lang);
}

const prefersReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;
const isCoarse = window.matchMedia("(pointer: coarse)").matches;
const hasGSAP =
  typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined";
const useGSAP = hasGSAP && !prefersReduced;
if (useGSAP) {
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add("gsap-on");
}

// Soft crossfade on language switch + keep ScrollTrigger in sync
// (text length changes page height → triggers would otherwise drift)
let langSwitching = false;
function syncScroll() {
  if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
  if (typeof lenis !== "undefined" && lenis) lenis.resize();
}
function switchLanguage(lang) {
  if (lang === document.documentElement.lang || langSwitching) return;
  if (prefersReduced) {
    setLanguage(lang);
    syncScroll();
    return;
  }
  langSwitching = true;
  const root = document.documentElement;
  root.classList.add("lang-fade");
  window.setTimeout(() => {
    setLanguage(lang);
    syncScroll();
    requestAnimationFrame(() => {
      root.classList.remove("lang-fade");
      langSwitching = false;
    });
  }, 220);
}

langButtons.forEach((btn) =>
  btn.addEventListener("click", () => switchLanguage(btn.dataset.lang))
);
setLanguage(localStorage.getItem("hyperion-lang") || "en");

// ── Scroll header (glass appears on scroll) ──
window.addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", window.scrollY > 50),
  { passive: true }
);

// ── Scroll reveals — IntersectionObserver fallback (used when GSAP is off) ──
if (!useGSAP) {
  document.querySelectorAll("section, footer").forEach((sec) => {
    sec.querySelectorAll(".reveal").forEach((el, i) => {
      el.style.setProperty("--rd", i * 80 + "ms");
    });
  });
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document
    .querySelectorAll(".reveal")
    .forEach((el) => revealObserver.observe(el));
}

// ── Active nav link (scroll-spy) ──
const navLinkMap = {};
document.querySelectorAll(".nav-links a[href^='#']").forEach((a) => {
  navLinkMap[a.getAttribute("href").slice(1)] = a;
});
const spySections = ["products", "about", "team", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);
const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      Object.values(navLinkMap).forEach((a) => a.classList.remove("active"));
      const link = navLinkMap[entry.target.id];
      if (link) link.classList.add("active");
    });
  },
  { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
);
spySections.forEach((s) => spyObserver.observe(s));

// ── Form handling (validation + rate limit, Formspree submits) ──
let lastSubmit = 0;

form.addEventListener("submit", (e) => {
  const lang = document.documentElement.lang === "ru" ? "ru" : "en";

  const now = Date.now();
  if (now - lastSubmit < 5000) {
    e.preventDefault();
    formMsg.textContent = translations[lang].formRateLimit;
    return;
  }

  const value = emailInput.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  if (!valid) {
    e.preventDefault();
    formMsg.textContent = translations[lang].formError;
    emailInput.focus();
    return;
  }

  lastSubmit = now;
  formMsg.textContent = translations[lang].formSuccess;
});

// ── Mobile menu ──
const hamburger = document.getElementById("nav-hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const mobileClose = document.getElementById("mobile-menu-close");

function openMobileMenu() {
  mobileMenu.classList.add("open");
  mobileMenu.setAttribute("aria-hidden", "false");
  hamburger.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden", "true");
  hamburger.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

hamburger.addEventListener("click", openMobileMenu);
mobileClose.addEventListener("click", closeMobileMenu);
mobileMenu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", closeMobileMenu)
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
    closeMobileMenu();
  }
});

/* ═══════════════════════════════════════════
   SIGNATURE LAYER
   ═══════════════════════════════════════════ */

// ── Lenis inertia scroll — snappy, not floaty (desktop, non-touch, non-reduced) ──
let lenis = null;
if (!prefersReduced && !isCoarse && typeof Lenis !== "undefined") {
  lenis = new Lenis({
    duration: 0.9, // responsive settle, not a long glide
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out, snappy
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.6,
  });
  if (useGSAP) {
    // single clock: GSAP ticker drives Lenis; Lenis scroll updates ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  } else {
    const lenisRaf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(lenisRaf);
    };
    requestAnimationFrame(lenisRaf);
  }
}

// ── Anchor smooth-scroll (Lenis when active, native otherwise) ──
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (!id || id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    if (mobileMenu.classList.contains("open")) closeMobileMenu();
    if (lenis) {
      lenis.scrollTo(target, { offset: -80 });
    } else {
      target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
    }
  });
});

// ── Voice waveform stagger (traveling pulse) ──
if (!prefersReduced) {
  document.querySelectorAll(".wave span").forEach((bar, i) => {
    bar.style.animationDelay = (i * 0.06).toFixed(2) + "s";
  });
}

/* ═══════════════════════════════════════════
   GSAP SCROLL REVEALS — clean, smooth (no parallax / no tilt)
   ═══════════════════════════════════════════ */
if (useGSAP) {
  if (lenis) lenis.on("scroll", ScrollTrigger.update);

  // Gentle staggered fade-up per section. Transform/opacity only → no jank.
  document.querySelectorAll("section, footer").forEach((sec) => {
    const items = sec.querySelectorAll(".reveal");
    if (!items.length) return;
    gsap.set(items, { opacity: 0, y: 24 });
    ScrollTrigger.create({
      trigger: sec,
      start: "top 84%",
      once: true,
      onEnter: () =>
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.07,
          clearProps: "transform", // hand transform back to CSS once shown
        }),
    });
  });

  ScrollTrigger.refresh();
}

// ── Stat counters — count-up on scroll-in ──
(function initCounters() {
  const els = document.querySelectorAll("[data-count]");
  if (!els.length) return;

  const run = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const isYear = String(target).length === 4;
    const start = isYear ? target - 6 : 0;
    const dur = 1.4;
    if (useGSAP) {
      const o = { v: start };
      gsap.to(o, {
        v: target,
        duration: dur,
        ease: "power2.out",
        onUpdate: () => (el.textContent = String(Math.round(o.v))),
      });
    } else {
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / (dur * 1000), 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(start + (target - start) * e));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  };

  if (prefersReduced) {
    els.forEach((el) => (el.textContent = el.dataset.count));
  } else if (useGSAP) {
    els.forEach((el) =>
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () => run(el),
      })
    );
  } else {
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) {
            run(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    els.forEach((el) => io.observe(el));
  }
})();

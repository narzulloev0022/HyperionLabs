/* ═══════════════════════════════════════════
   HYPERION LABS — Interactive Layer
   ═══════════════════════════════════════════ */

// ── i18n Translations ──
const translations = {
  en: {
    skip: "Skip to content",
    navAbout: "About",
    navProducts: "Products",
    navResearch: "Research",
    navCareers: "Careers",
    navContact: "Contact",
    navCta: "Get Early Access",
    heroBadge: "Now building",
    heroTitle1: "Building the Future",
    heroTitle2: "of ",
    heroTitle3: "AI",
    heroSub: "World-class AI products engineered for emerging markets.",
    heroPrimary: "Explore AvrisAI",
    heroSecondary: "Our Research",
    partnersEyebrow: "Trusted by leading institutions",
    productsEyebrow: "Products",
    productsTitle: "Our Products",
    productsLead: "A focused portfolio of AI products designed for high-stakes, underserved markets.",
    avrisStatus: "Launching 2026",
    avrisDesc: "Voice-powered clinical documentation that understands context, language, and the realities of modern care delivery.",
    learnMore: "Learn more",
    comingSoon: "Coming Soon",
    futureDesc: "A future Hyperion Labs product being developed for the next layer of AI infrastructure.",
    privatePipeline: "Private pipeline",
    statsEyebrow: "Momentum",
    statsTitle: "A focused lab with meaningful ambition.",
    stat1: "Products in development",
    stat2: "Expected users in first round",
    stat3: "Countries in target market",
    stat4: "Launch year",
    missionEyebrow: "Our Mission",
    missionText1: "We build AI products that solve ",
    missionText2: "real problems",
    missionText3: " for ",
    missionText4: "real people",
    missionText5: ".",
    researchEyebrow: "Hyperion Research",
    researchTitle: "Research grounded in practical deployment.",
    research1Title: "Medical AI",
    research1Text: "Clinical workflows, voice intelligence, and trust-critical AI systems for care delivery.",
    research2Title: "NLP for CIS & Regional Languages",
    research2Text: "Language models tuned for CIS countries and regions with unique linguistic realities.",
    research3Title: "Healthcare Infrastructure",
    research3Text: "Systems, tooling, and infrastructure that make AI usable in real institutional settings.",
    teamEyebrow: "The Team",
    teamTitle: "Builders with product taste and regional conviction.",
    teamFounderRole: "Founder & CEO",
    teamFounderBio: "Building world-class AI for emerging markets. Medical student turned entrepreneur.",
    linkedin: "LinkedIn",
    cofounderLabel: "Co-Founder",
    cofounderRole: "Co-Founder & CFO",
    cofounderText: "Leading finance, strategy, and operational discipline behind Hyperion Labs.",
    joinUs: "Join us",
    cofounderTitle2: "Open Co-Founder Seat",
    cofounderRole2: "Founding Team",
    cofounderText2: "We are looking for a strong co-founder to help build a world-class AI company.",
    connect: "Connect",
    achievementsEyebrow: "Achievements",
    achievementsTitle: "Built for credibility from day one.",
    achievement1Title: "Accelerator Ready",
    achievement1Text: "Positioned for top-tier accelerator and venture conversations with a sharp frontier-market narrative.",
    achievement2Title: "Institutional Pathways",
    achievement2Text: "Designed for collaboration with hospitals, research bodies, and public-sector innovation partners.",
    achievement3Title: "Media & Awards",
    achievement3Text: "Space reserved for future recognition, media coverage, and ecosystem milestones.",
    ctaEyebrow: "Early Access",
    ctaTitle: "Ready to work with us?",
    ctaLead: "Join the early access list for AvrisAI and stay close to the next generation of AI products.",
    emailLabel: "Email address",
    submitLabel: "Get Access",
    footerDesc: "Hyperion Labs is building world-class AI products for emerging markets, starting with voice infrastructure for healthcare.",
    footerProducts: "Products",
    footerCompany: "Team",
    footerResearch: "Research",
    footerCareers: "Careers",
    footerLegal: "Legal",
    formSuccess: "Thanks — we'll be in touch soon.",
    formError: "Please enter a valid email address.",
  },
  ru: {
    skip: "Перейти к содержимому",
    navAbout: "О нас",
    navProducts: "Продукты",
    navResearch: "Исследования",
    navCareers: "Карьера",
    navContact: "Контакты",
    navCta: "Ранний доступ",
    heroBadge: "Сейчас создаём",
    heroTitle1: "Создаём будущее",
    heroTitle2: "",
    heroTitle3: "AI",
    heroSub: "AI-продукты мирового уровня для развивающихся рынков.",
    heroPrimary: "Изучить AvrisAI",
    heroSecondary: "Наши исследования",
    partnersEyebrow: "Нам доверяют ведущие институты",
    productsEyebrow: "Продукты",
    productsTitle: "Наши продукты",
    productsLead: "Сфокусированный портфель AI-продуктов для сложных и недообслуженных рынков.",
    avrisStatus: "Запуск в 2026",
    avrisDesc: "Голосовая клиническая документация, которая понимает контекст, язык и реалии современной медицины.",
    learnMore: "Узнать больше",
    comingSoon: "Скоро",
    futureDesc: "Будущий продукт Hyperion Labs для следующего уровня AI-инфраструктуры.",
    privatePipeline: "Закрытый pipeline",
    statsEyebrow: "Динамика",
    statsTitle: "Сфокусированная лаборатория с серьёзными амбициями.",
    stat1: "Продукта в разработке",
    stat2: "Ожидаемых пользователей",
    stat3: "Стран целевого рынка",
    stat4: "Год запуска",
    missionEyebrow: "Наша миссия",
    missionText1: "Мы создаём AI-продукты, которые решают ",
    missionText2: "реальные проблемы",
    missionText3: " для ",
    missionText4: "реальных людей",
    missionText5: ".",
    researchEyebrow: "Hyperion Research",
    researchTitle: "Исследования, ориентированные на практическое внедрение.",
    research1Title: "Medical AI",
    research1Text: "Клинические процессы, голосовой интеллект и AI-системы для критически важных сценариев.",
    research2Title: "NLP для стран СНГ и региона",
    research2Text: "Языковые модели для стран СНГ и регионов с уникальной лингвистической спецификой.",
    research3Title: "Инфраструктура здравоохранения",
    research3Text: "Системы и инструменты, которые делают AI применимым в реальных условиях.",
    teamEyebrow: "Команда",
    teamTitle: "Люди с продуктовым вкусом и верой в регион.",
    teamFounderRole: "Founder & CEO",
    teamFounderBio: "Создаём AI мирового уровня для развивающихся рынков. Студент-медик, ставший предпринимателем.",
    linkedin: "LinkedIn",
    cofounderLabel: "Co-Founder",
    cofounderRole: "Co-Founder & CFO",
    cofounderText: "Отвечает за финансы, стратегию и операционную дисциплину Hyperion Labs.",
    joinUs: "Присоединиться",
    cofounderTitle2: "Открытая позиция кофаундера",
    cofounderRole2: "Founding Team",
    cofounderText2: "Ищем сильного кофаундера, чтобы вместе строить AI-компанию мирового уровня.",
    connect: "Связаться",
    achievementsEyebrow: "Достижения",
    achievementsTitle: "С самого начала строимся на доверии.",
    achievement1Title: "Готовность к акселераторам",
    achievement1Text: "Позиционирование для разговоров с топовыми акселераторами и венчурными фондами.",
    achievement2Title: "Институциональные партнёрства",
    achievement2Text: "Архитектура для работы с больницами, исследовательскими организациями и госсектором.",
    achievement3Title: "Медиа и награды",
    achievement3Text: "Место для будущих наград, публикаций и экосистемных достижений.",
    ctaEyebrow: "Ранний доступ",
    ctaTitle: "Готовы работать с нами?",
    ctaLead: "Оставьте email для раннего доступа к AvrisAI — следите за новым поколением AI-продуктов.",
    emailLabel: "Электронная почта",
    submitLabel: "Получить доступ",
    footerDesc: "Hyperion Labs создаёт AI-продукты мирового уровня для развивающихся рынков.",
    footerProducts: "Продукты",
    footerCompany: "Команда",
    footerResearch: "Исследования",
    footerCareers: "Карьера",
    footerLegal: "Правовая информация",
    formSuccess: "Спасибо — мы скоро свяжемся с вами.",
    formError: "Введите корректный email.",
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

langButtons.forEach((btn) =>
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang))
);
setLanguage(localStorage.getItem("hyperion-lang") || "en");

// ── Scroll header ──
window.addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", window.scrollY > 50),
  { passive: true }
);

// ── Scroll reveals ──
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ── Animated counters ──
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = el.dataset.count;
      const suffix = el.dataset.suffix || "";
      const isYear = target.length === 4 && !suffix;
      const num = parseInt(target, 10);
      const duration = 1600;
      const start = performance.now();
      const startVal = isYear ? num - 8 : 0;

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        const current = Math.round(startVal + (num - startVal) * ease);
        const val = suffix === "+" && current >= num ? num : current;
        el.textContent =
          (isYear ? String(val) : val.toLocaleString()) +
          (current >= num ? suffix : "");
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
document
  .querySelectorAll("[data-count]")
  .forEach((el) => counterObserver.observe(el));

// ── Form handling ──
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const lang = document.documentElement.lang === "ru" ? "ru" : "en";
  const value = emailInput.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  formMsg.textContent = valid
    ? translations[lang].formSuccess
    : translations[lang].formError;
  if (valid) form.reset();
  else emailInput.focus();
});

// ── Canvas Particle System ──
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
const prefersReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;
let particles = [];
let w = 0,
  h = 0,
  raf = 0;

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = w + "px";
  canvas.style.height = h + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const count = Math.min(80, Math.max(30, Math.floor(w / 20)));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.6 + 0.3,
    vx: (Math.random() - 0.5) * 0.08,
    vy: (Math.random() - 0.5) * 0.08,
    alpha: Math.random() * 0.6 + 0.15,
  }));
}

function drawConnections() {
  const maxDist = 140;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        const opacity = (1 - dist / maxDist) * 0.06;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(74, 163, 145, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, w, h);

  const grd = ctx.createRadialGradient(
    w * 0.65, h * 0.2, 0,
    w * 0.65, h * 0.2, w * 0.55
  );
  grd.addColorStop(0, "rgba(74, 163, 145, 0.1)");
  grd.addColorStop(0.4, "rgba(30, 70, 130, 0.06)");
  grd.addColorStop(1, "rgba(6, 8, 13, 0)");
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, w, h);

  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < -10) p.x = w + 10;
    if (p.x > w + 10) p.x = -10;
    if (p.y < -10) p.y = h + 10;
    if (p.y > h + 10) p.y = -10;
    ctx.beginPath();
    ctx.fillStyle = `rgba(160, 225, 210, ${p.alpha})`;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });

  drawConnections();
}

function animate() {
  draw();
  raf = requestAnimationFrame(animate);
}

resize();
if (!prefersReduced) animate();
else draw();

window.addEventListener("resize", () => {
  cancelAnimationFrame(raf);
  resize();
  if (!prefersReduced) animate();
  else draw();
});

// ── Grain texture (generated canvas) ──
(function initGrain() {
  const grainEl = document.getElementById("grain");
  const gc = document.createElement("canvas");
  gc.width = 256;
  gc.height = 256;
  const gctx = gc.getContext("2d");
  const imageData = gctx.createImageData(256, 256);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const v = Math.random() * 255;
    data[i] = v;
    data[i + 1] = v;
    data[i + 2] = v;
    data[i + 3] = 255;
  }
  gctx.putImageData(imageData, 0, 0);
  grainEl.style.backgroundImage = `url(${gc.toDataURL()})`;
  grainEl.style.backgroundRepeat = "repeat";
})();

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

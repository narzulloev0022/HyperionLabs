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

    howEyebrow: "How AvrisAI works",
    howTitle: "From conversation to clinical note.",
    step1Title: "Listen",
    step1Text: "AvrisAI listens to the doctor–patient conversation.",
    step2Title: "Structure",
    step2Text: "Speech is turned into structured medical fields.",
    step3Title: "Note ready",
    step3Text: "A clean clinical note — ready in seconds.",

    flowEyebrow: "See it work",
    flowTitle: "Conversation in. Clinical note out.",
    flowLead: "An illustrative example — not real patient data.",
    flowChatLabel: "Conversation",
    flowSoapLabel: "SOAP note",
    chatWhoP: "Patient",
    chatWhoD: "Doctor",
    chat1: "I've had a sore throat and mild fever for two days.",
    chat2: "Any cough or trouble swallowing?",
    chat3: "Some pain when swallowing, no cough.",
    chat4: "Temperature 37.8, throat looks a little red.",
    soapSk: "Subjective",
    soapS: "Sore throat and mild fever, 2 days. Pain on swallowing, no cough.",
    soapOk: "Objective",
    soapO: "Temp 37.8 °C. Pharynx mildly red.",
    soapAk: "Assessment",
    soapA: "Likely viral pharyngitis.",
    soapPk: "Plan",
    soapP: "Supportive care, fluids, review if it worsens.",

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

    howEyebrow: "Как работает AvrisAI",
    howTitle: "От разговора — к клинической заметке.",
    step1Title: "Слушает",
    step1Text: "AvrisAI слушает разговор врача и пациента.",
    step2Title: "Структурирует",
    step2Text: "Речь превращается в структурированные медицинские поля.",
    step3Title: "Заметка готова",
    step3Text: "Готовая клиническая заметка — за секунды.",

    flowEyebrow: "Как это выглядит",
    flowTitle: "На входе — разговор. На выходе — заметка.",
    flowLead: "Иллюстративный пример — не реальные данные пациента.",
    flowChatLabel: "Разговор",
    flowSoapLabel: "SOAP-заметка",
    chatWhoP: "Пациент",
    chatWhoD: "Врач",
    chat1: "Болит горло и небольшая температура уже два дня.",
    chat2: "Есть кашель или больно глотать?",
    chat3: "Глотать немного больно, кашля нет.",
    chat4: "Температура 37,8, горло слегка красное.",
    soapSk: "Субъективно",
    soapS: "Боль в горле и небольшая температура, 2 дня. Больно глотать, кашля нет.",
    soapOk: "Объективно",
    soapO: "Темп. 37,8 °C. Зев слегка гиперемирован.",
    soapAk: "Оценка",
    soapA: "Вероятно, вирусный фарингит.",
    soapPk: "План",
    soapP: "Симптоматическое лечение, питьё, контроль при ухудшении.",

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
// progressive-enhancement gate: reveal/animation hidden-states apply only with JS
document.documentElement.classList.add("js");

// Soft crossfade on language switch
let langSwitching = false;
function switchLanguage(lang) {
  if (lang === document.documentElement.lang || langSwitching) return;
  if (prefersReduced) {
    setLanguage(lang);
    return;
  }
  langSwitching = true;
  const root = document.documentElement;
  root.classList.add("lang-fade");
  window.setTimeout(() => {
    setLanguage(lang);
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

// ── Scroll reveals — lightweight IntersectionObserver → CSS transition.
//    Fires EARLY (as soon as the element enters from the bottom), once. ──
const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      // #flow plays its SOAP demo, #how draws its connector lines, rest just reveal
      const id = entry.target.id;
      entry.target.classList.add(
        id === "flow" ? "play" : id === "how" ? "lines" : "in"
      );
      obs.unobserve(entry.target);
    });
  },
  { rootMargin: "-5% 0px -5% 0px", threshold: 0 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
["flow", "how"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) revealObserver.observe(el);
});

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

// ── Anchor navigation — NATIVE scroll (most responsive on Mac/iOS).
//    CSS `scroll-behavior: smooth` + `scroll-margin-top` handle the rest. ──
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", () => {
    if (mobileMenu.classList.contains("open")) closeMobileMenu();
  });
});

// ── Voice waveform stagger (traveling pulse) ──
if (!prefersReduced) {
  document.querySelectorAll(".wave span").forEach((bar, i) => {
    bar.style.animationDelay = (i * 0.06).toFixed(2) + "s";
  });
}

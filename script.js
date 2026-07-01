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
    heroTitle1: "World-class AI for the ",
    heroTitle2: "future of healthcare.",
    heroSub:
      "AvrisAI listens to every visit and writes the clinical note — so doctors in Central Asia spend time on patients, not paperwork.",
    heroPrimary: "Explore AvrisAI",
    heroSecondary: "Get early access",

    pvConvTitle: "Conversation",
    pvSoapTitle: "SOAP note",
    pvDoctor: "Doctor",
    pvPatient: "Patient",
    pvDoctorLine: "Where is the pain strongest today?",
    pvPatient1: "Mostly in the chest when I climb stairs.",
    pvPatient2: "It started two nights ago",
    pvSoapS: "Chest discomfort with exertion, onset two days ago.",
    pvSoapO: "Vitals and exam fields prepared for clinician review.",
    pvSoapA: "Structured assessment draft awaits doctor approval.",

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

    faqEyebrow: "FAQ",
    faqTitle: "Questions, answered.",
    faq1Q: "What is AvrisAI?",
    faq1A:
      "A voice AI assistant for doctors. It listens to the doctor–patient conversation and turns it into a structured clinical note in seconds. The doctor reviews and approves every note.",
    faq2Q: "Which languages does it support?",
    faq2A:
      "Russian and English today. Tajik speech recognition is in active development — it's one of our core research directions.",
    faq3Q: "Is patient data safe?",
    faq3A:
      "The doctor stays in control: every note is a draft until the clinician approves it, and recordings are used only to produce documentation. For deployment specifics and data-handling agreements, contact us.",
    faq4Q: "How can my clinic get access?",
    faq4A:
      "Join the early access list below or write to info@theavris.ai. After a pilot across three cities in Tajikistan, we are onboarding new clinics step by step.",
    faq5Q: "Where does Hyperion Labs operate?",
    faq5A:
      "We were founded in Dushanbe, Tajikistan, and build for all of Central Asia — from Dushanbe to Tashkent and Almaty.",

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
    formSending: "Sending…",
    formSubmitError: "Something went wrong — please try again.",
  },
  ru: {
    skip: "Перейти к содержимому",
    navProducts: "Продукты",
    navAbout: "О нас",
    navTeam: "Команда",
    navContact: "Контакты",
    navCta: "Ранний доступ",

    heroBadge: "AI-лаборатория · Центральная Азия",
    heroTitle1: "AI мирового уровня для ",
    heroTitle2: "будущего здравоохранения.",
    heroSub:
      "AvrisAI слушает каждый приём и пишет клиническую заметку — чтобы врачи Центральной Азии тратили время на пациентов, а не на бумаги.",
    heroPrimary: "Изучить AvrisAI",
    heroSecondary: "Ранний доступ",

    pvConvTitle: "Разговор",
    pvSoapTitle: "SOAP-заметка",
    pvDoctor: "Врач",
    pvPatient: "Пациент",
    pvDoctorLine: "Где сегодня болит сильнее всего?",
    pvPatient1: "В основном в груди, когда поднимаюсь по лестнице.",
    pvPatient2: "Началось две ночи назад",
    pvSoapS: "Дискомфорт в груди при нагрузке, начало два дня назад.",
    pvSoapO: "Поля витальных показателей и осмотра подготовлены для врача.",
    pvSoapA: "Черновик структурированной оценки ждёт подтверждения врача.",

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

    faqEyebrow: "FAQ",
    faqTitle: "Вопросы и ответы.",
    faq1Q: "Что такое AvrisAI?",
    faq1A:
      "Голосовой AI-ассистент для врачей. Он слушает разговор врача с пациентом и за секунды превращает его в структурированную клиническую заметку. Врач проверяет и подтверждает каждую заметку.",
    faq2Q: "Какие языки поддерживаются?",
    faq2A:
      "Сегодня — русский и английский. Распознавание таджикской речи в активной разработке — это одно из ключевых направлений наших исследований.",
    faq3Q: "Безопасны ли данные пациентов?",
    faq3A:
      "Контроль остаётся у врача: каждая заметка — черновик, пока её не подтвердит клиницист, а записи используются только для формирования документации. Детали внедрения и соглашения о данных — по запросу.",
    faq4Q: "Как подключить клинику?",
    faq4A:
      "Оставьте email в списке раннего доступа ниже или напишите на info@theavris.ai. После пилота в трёх городах Таджикистана мы поэтапно подключаем новые клиники.",
    faq5Q: "Где работает Hyperion Labs?",
    faq5A:
      "Мы основаны в Душанбе, Таджикистан, и строим для всей Центральной Азии — от Душанбе до Ташкента и Алматы.",

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
    formSending: "Отправляем…",
    formSubmitError: "Что-то пошло не так — попробуйте ещё раз.",
  },
  tg: {
    skip: "Гузаштан ба муҳтаво",
    navProducts: "Маҳсулот",
    navAbout: "Дар бораи мо",
    navTeam: "Даста",
    navContact: "Тамос",
    navCta: "Дастрасии барвақт",

    heroBadge: "Лабораторияи AI · Осиёи Марказӣ",
    heroTitle1: "AI-и сатҳи ҷаҳонӣ барои ",
    heroTitle2: "ояндаи тандурустӣ.",
    heroSub:
      "AvrisAI ҳар як қабулро гӯш мекунад ва ёддошти клиникиро менависад — то духтурони Осиёи Марказӣ вақтро ба беморон сарф кунанд, на ба коғазбозӣ.",
    heroPrimary: "Шиносоӣ бо AvrisAI",
    heroSecondary: "Дастрасии барвақт",

    pvConvTitle: "Гуфтугӯ",
    pvSoapTitle: "Ёддошти SOAP",
    pvDoctor: "Духтур",
    pvPatient: "Бемор",
    pvDoctorLine: "Имрӯз дард дар куҷо сахттар аст?",
    pvPatient1: "Бештар дар қафаси сина, вақте бо зина мебароям.",
    pvPatient2: "Ду шаб пеш сар шуд",
    pvSoapS: "Нороҳатӣ дар сина ҳангоми фишори ҷисмонӣ, оғоз ду рӯз пеш.",
    pvSoapO: "Майдонҳои нишондиҳандаҳо ва муоина барои духтур омода шуданд.",
    pvSoapA: "Лоиҳаи арзёбии сохторёфта тасдиқи духтурро интизор аст.",

    productsEyebrow: "Маҳсулот",
    productsTitle: "Ду маҳсул. Як рисолат.",
    productsLead:
      "Портфели мутамарказ барои вазифаҳои воқеии тандурустии минтақа.",

    avrisEyebrow: "Флагман · Voice AI",
    avrisTagline: "Ёрдамчии овозии AI барои духтурон",
    avrisDesc:
      "Ёрдамчии овозии AI барои духтурон — аллакай ҷорӣ шудааст ва кор мекунад. Гуфтугӯи духтур бо беморро гӯш карда, дар чанд сония ҳуҷҷатҳои клиникии сохторёфта месозад. Лоиҳаи озмоишӣ дар се шаҳри Тоҷикистон гузашт.",
    avrisCta: "Кушодани AvrisAI",

    teaserBadge: "Ба қарибӣ",
    teaserDesc: "Маҳсули нав дар марҳилаи таҳия. Ба қарибӣ.",
    teaserCta: "Лоиҳаи пӯшида",

    val1: "AI-и овозӣ барои духтурон",
    val2: "Ёддоштҳои клиникӣ дар чанд сония",
    val3: "Русӣ ва англисӣ",
    val4: "Барои Осиёи Марказӣ сохта шудааст",
    val5: "Камтар коғаз — бештар ғамхорӣ",
    marqueeSr:
      "AvrisAI: AI-и овозӣ барои духтурон — ёддоштҳои клиникӣ дар чанд сония, бо русӣ ва англисӣ, барои Осиёи Марказӣ.",

    howEyebrow: "AvrisAI чӣ тавр кор мекунад",
    howTitle: "Аз гуфтугӯ — ба ёддошти клиникӣ.",
    step1Title: "Гӯш мекунад",
    step1Text: "AvrisAI гуфтугӯи духтур ва беморро гӯш мекунад.",
    step2Title: "Сохтор медиҳад",
    step2Text: "Нутқ ба майдонҳои сохторёфтаи тиббӣ табдил меёбад.",
    step3Title: "Ёддошт омода",
    step3Text: "Ёддошти тозаи клиникӣ — дар чанд сония.",

    flowEyebrow: "Бубинед, чӣ тавр кор мекунад",
    flowTitle: "Даромад — гуфтугӯ. Баромад — ёддошт.",
    flowLead: "Мисоли намунавӣ — маълумоти воқеии бемор нест.",
    flowChatLabel: "Гуфтугӯ",
    flowSoapLabel: "Ёддошти SOAP",
    chatWhoP: "Бемор",
    chatWhoD: "Духтур",
    chat1: "Ду рӯз аст, ки гулӯям дард мекунад ва таби сабук дорам.",
    chat2: "Сулфа ҳаст ё фурӯ бурдан дард мекунад?",
    chat3: "Фурӯ бурдан каме дард мекунад, сулфа нест.",
    chat4: "Ҳарорат 37,8, гулӯ каме сурх аст.",
    soapSk: "Субъективӣ",
    soapS: "Дарди гулӯ ва таби сабук, 2 рӯз. Ҳангоми фурӯ бурдан дард, сулфа нест.",
    soapOk: "Объективӣ",
    soapO: "Ҳарорат 37,8 °C. Гулӯ каме сурх.",
    soapAk: "Арзёбӣ",
    soapA: "Эҳтимол, фарингити вирусӣ.",
    soapPk: "Нақша",
    soapP: "Табобати дастгирикунанда, нӯшокии фаровон, назорат ҳангоми бадшавӣ.",

    aboutEyebrow: "Дар бораи мо",
    aboutTitle: "Бештар аз як стартап.",
    aboutP1:
      "Hyperion Labs дар Душанбе, Тоҷикистон таъсис ёфтааст — яке аз бозорҳои технологии камхизматрасонии ҷаҳон. Мо аз як савол сар кардем: чаро духтурон соатҳоро ба коғазбозӣ сарф мекунанд, вақте AI инро дар чанд сония карда метавонад?",
    aboutP2:
      "Мо на барои Водии Силикон месозем. Мо барои духтури Душанбе, беморхонаи Тошканд ва клиникаи Алмато месозем. Агар инҷо ҳал карда тавонем — дар ҳама ҷо ҳал карда метавонем.",
    missionText1: "Мо AI месозем, ки ",
    missionText2: "мушкилоти воқеиро",
    missionText3: " барои ",
    missionText4: "одамони воқеӣ",
    missionText5: " ҳал мекунад.",

    focusEyebrow: "Мо болои чӣ кор мекунем",
    focusTitle: "Таҳқиқот дар асоси ҷоришавии воқеӣ.",
    focus1Title: "Voice AI-и тиббӣ",
    focus1Text:
      "Равандҳои клиникӣ, фаҳмиши нутқ ва системаҳои боэътимод барои ёрии ҳаррӯза.",
    focus2Title: "NLP барои забонҳои минтақа",
    focus2Text:
      "Моделҳо барои тоҷикӣ, русӣ ва воқеияти забонии Осиёи Марказӣ.",
    focus3Title: "Инфрасохтори тандурустӣ",
    focus3Text:
      "Абзорҳое, ки AI-ро дар клиникаҳо ва муассисаҳои воқеӣ корбурдпазир мекунанд.",

    teamEyebrow: "Даста",
    teamTitle: "Дастаи хурд, вале пурқувват.",
    teamFounderRole: "Founder & CEO",
    teamFounderBio:
      "AI-и сатҳи ҷаҳониро барои бозорҳои рушдкунанда месозем. Донишҷӯи тиб, ки соҳибкор шуд.",
    cofounderLabel: "Co-Founder",
    cofounderRole: "Co-Founder & CFO",
    cofounderText:
      "Барои молия, стратегия ва интизоми амалиётии Hyperion Labs масъул аст.",
    cofounderRole2: "Founding Team",
    cofounderTitle2: "Ҷойи холии ҳаммуассис",
    cofounderText2:
      "Мо ҳаммуассиси қавӣ меҷӯем, то якҷоя ширкати AI-и сатҳи ҷаҳонӣ бисозем.",
    joinUs: "Ҳамроҳ шавед",

    faqEyebrow: "Саволу ҷавоб",
    faqTitle: "Саволҳо ва ҷавобҳо.",
    faq1Q: "AvrisAI чист?",
    faq1A:
      "Ёрдамчии овозии AI барои духтурон. Он гуфтугӯи духтур бо беморро гӯш карда, дар чанд сония ба ёддошти клиникии сохторёфта табдил медиҳад. Ҳар як ёддоштро духтур месанҷад ва тасдиқ мекунад.",
    faq2Q: "Кадом забонҳо дастгирӣ мешаванд?",
    faq2A:
      "Имрӯз — русӣ ва англисӣ. Шинохти нутқи тоҷикӣ дар марҳилаи таҳияи фаъол аст — ин яке аз самтҳои асосии таҳқиқоти мост.",
    faq3Q: "Маълумоти беморон бехатар аст?",
    faq3A:
      "Назорат дар дасти духтур мемонад: ҳар ёддошт то тасдиқи духтур лоиҳа аст ва сабтҳо танҳо барои таҳияи ҳуҷҷатҳо истифода мешаванд. Тафсилоти ҷоришавӣ ва созишномаҳо оид ба маълумот — тавассути тамос.",
    faq4Q: "Чӣ тавр клиникаро пайваст кардан мумкин аст?",
    faq4A:
      "Email-и худро дар рӯйхати дастрасии барвақт гузоред ё ба info@theavris.ai нависед. Пас аз лоиҳаи озмоишӣ дар се шаҳри Тоҷикистон мо клиникаҳои навро зина ба зина пайваст мекунем.",
    faq5Q: "Hyperion Labs дар куҷо кор мекунад?",
    faq5A:
      "Мо дар Душанбе, Тоҷикистон таъсис ёфтаем ва барои тамоми Осиёи Марказӣ месозем — аз Душанбе то Тошканд ва Алмато.",

    ctaEyebrow: "Дастрасии барвақт",
    ctaTitle: "Омодаед бо мо кор кунед?",
    ctaLead:
      "Барои дастрасии барвақт ба AvrisAI email-и худро гузоред. Танҳо вақте менависем, ки чизи нишондоданӣ дошта бошем.",
    emailLabel: "Почтаи электронӣ",
    submitLabel: "Гирифтани дастрасӣ",

    footerDesc:
      "Hyperion Labs AI-и сатҳи ҷаҳониро барои тандурустии Осиёи Марказӣ месозад.",

    formSuccess: "Ташаккур — ба қарибӣ бо шумо тамос мегирем.",
    formError: "Email-и дурустро ворид кунед.",
    formRateLimit: "Пеш аз кӯшиши навбатӣ каме сабр кунед.",
    formSending: "Фиристода мешавад…",
    formSubmitError: "Хатогӣ рӯй дод — боз кӯшиш кунед.",
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
// stored preference wins; otherwise auto-detect browser language (ru / tg), fallback en
const storedLang = localStorage.getItem("hyperion-lang");
const browserLang = (navigator.language || "").slice(0, 2).toLowerCase();
setLanguage(
  storedLang && translations[storedLang]
    ? storedLang
    : translations[browserLang]
      ? browserLang
      : "en"
);

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
["how", "flow"].forEach((id) => {
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

// ── Form handling (validation + rate limit, AJAX submit to Formspree;
//    the hidden _next field keeps the native-POST fallback working without JS) ──
let lastSubmit = 0;
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const lang = translations[document.documentElement.lang]
    ? document.documentElement.lang
    : "en";
  const dict = translations[lang];

  const now = Date.now();
  if (now - lastSubmit < 5000) {
    formMsg.textContent = dict.formRateLimit;
    return;
  }

  const value = emailInput.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  if (!valid) {
    formMsg.textContent = dict.formError;
    emailInput.focus();
    return;
  }

  lastSubmit = now;
  submitBtn.disabled = true;
  formMsg.textContent = dict.formSending;

  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      formMsg.textContent = dict.formSuccess;
      form.reset();
    } else {
      formMsg.textContent = dict.formSubmitError;
    }
  } catch (err) {
    formMsg.textContent = dict.formSubmitError;
  } finally {
    submitBtn.disabled = false;
  }
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

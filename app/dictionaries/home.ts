// app/dictionaries/home.ts
import type { Lang } from "@/app/dictionaries/header";

export type VerifyCode = "PL" | "LV" | "LT";

export interface HomeDictionary {
  hero: {
    kicker: string;
    title: string;
    lead: string;
    meta: [string, string, string];
    ctaCalc: string;
    ctaBuy: string;
  };

  calc: {
    title: string;
    badge: string;
    desc: string;
    termLabel: string;
    vehicleLabel: string;
    termOptions: Array<{ value: "30" | "90" | "365"; label: string }>;
    vehicleOptions: Array<{ value: "car" | "van" | "truck" | "trailer" | "special"; label: string }>;
    button: string;
    note: string;
  };

  process: {
    title: string;
    desc: string;
    steps: Array<{ title: string; text: string }>; // 4 шага
  };

  why: {
    title: string;
    desc: string;
    items: Array<{ title: string; text: string }>;
  };

  form: {
    title: string;
    desc: string;
  };

  faq: {
    title: string;
    desc: string;
    items: Array<{ q: string; a: string }>;
  };

  verify: {
    title: string;
    lead: string;
    items: Array<{
      code: VerifyCode;
      country: string;
      org: string;
      desc: string;
      cta: string;
      href: string;
    }>;
  };
}

export const homeDictionary: Record<Lang, HomeDictionary> = {
  ru: {
    hero: {
      kicker: "Онлайн-оформление",
      title: "Договор трансграничного страхования (EUROpolis) — быстро и без лишних шагов",
      lead:
        "Рассчитайте стоимость, заполните заявку и получите PDF. Для авто из стран зарегистрированных за пределами ЕС — полис легко проверить по базе страхования Латвийской Республики.",
      meta: ["PDF после оформления", "Поддержка в мессенджерах", "Понятные условия"],
      ctaCalc: "Рассчитать стоимость",
      ctaBuy: "Оформить полис",
    },

    calc: {
      title: "Калькулятор стоимости",
      badge: "~ 1 минута",
      desc: "Заготовка блока. Реальную тарифную логику подключим позже.",
      termLabel: "Срок",
      vehicleLabel: "Тип ТС",
      termOptions: [
        { value: "30", label: "30 дней" },
        { value: "90", label: "90 дней" },
        { value: "365", label: "12 месяцев" },
      ],
      vehicleOptions: [
        { value: "car", label: "Легковые" },
        { value: "van", label: "Автобусы" },
        { value: "truck", label: "Грузовые" },
        { value: "trailer", label: "Прицепы" },
        { value: "special", label: "Спецтехника" },
      ],
      button: "Рассчитать",
      note: "Демо-форма без расчёта. Добавим тарифы и валидацию отдельным шагом.",
    },

    process: {
      title: "Как это работает",
      desc: "Пошагово: расчёт → данные → оплата → полис.",
      steps: [
        { title: "Рассчитайте", text: "Выберите тип транспортного средства и срок страхования." },
        { title: "Заполните данные", text: "Адрес регистрации, госномер, VIN и контакты." },
        { title: "Оплатите", text: "После подготовки полиса мы отправим Вам реквизиты на оплату." },
        { title: "Получите PDF", text: "Сразу после получения нами подтверждения оплаты." },
      ],
    },

    
    why: {
      title: "Почему выбирают нас",
      desc: "Фокус на скорости, понятности и корректности оформления.",
      items: [
        { title: "Быстро", text: "Минимум шагов и ясная структура." },
        { title: "Понятно", text: "Объясняем различия продуктов простым языком." },
        { title: "Практично", text: "Ориентируемся на официальные проверки и требования." },
        { title: "Поддержка", text: "Помогаем с вопросами по оформлению и проверке." },
      ],
    },

    form: {
      title: "Форма заявки",
      desc: "Заполните данные — мы подготовим полис и пришлем данные для оплаты.",
    },

    faq: {
      title: "FAQ",
      desc: "Короткие ответы на частые вопросы.",
      items: [
        { q: "Сколько времени занимает оформление?", a: "Обычно 10–20 минут при наличии всех данных." },
        { q: "Можно ли оплатить картой?", a: "Да, после подготовки полиса вы оплачиваете и получаете PDF." },
        { q: "Это то же самое, что «зелёная карта»?", a: "Нет. Это разные продукты и разные правила." },
        { q: "Что это за страховка??", a: "Это обязательное страхование ответственности владельцев или пользователей механических транспортных средств, действующее на территории Латвии и ЕС." },
        {
          q: "Что покрывает страховка?",
          a: `Покрытие включает:
            • Вред жизни или здоровью пострадавших;
            • Имущественный вред третьим лицам.
            
            Минимальные гарантированные суммы:
            •  5 210 000 EUR — телесные повреждения;
            •  1 050 000 EUR — имущественный вред.`
        },
        {
          q: "Что не покрывает страховка?",
          a: `•  велосипеды и немеханические ТС;
              •  ущерб владельцу автомобиля;
              •  ущерб окружающей среде.`
        },
        {
          q: "В каких случаях возможен регресс?",
          a: `Страховая вправе взыскать выплаченную сумму, если водитель:
            • действовал умышленно;
            • был пьян или под наркотиками;
            • не имел прав;
            • скрылся с места ДТП;
            • использовал угнанный автомобиль.`
        },
        {
          q: "Когда начинается и заканчивается полис?",
          a: `Начало: дата выдачи полиса.

              Срок действия: 1–12 месяцев.

              Прекращение:
              • окончание срока;
              • угон или списание автомобиля;
              • снятие с учёта.`
        },
      ],
    },

    verify: {
      title: "Проверка действительности полиса",
      lead:
        "Если вы хотите убедиться, что ваш полис действительно активен, воспользуйтесь официальными базами страховых бюро. Ниже — ссылки на сервисы для Польши, Латвии и Литвы.",
      items: [
        {
          code: "LV",
          country: "Латвия",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Проверка обязательной страховки OCTA для транспортных средств, зарегистрированных в Латвии.",
          cta: "Проверить через LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Литва",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Сервис проверки действительности полиса обязательного страхования гражданской ответственности в Литве.",
          cta: "Проверить через CAB",
          href: "https://www.cab.lt/",
        },
        {
          code: "PL",
          country: "Польша",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "Проверка действительности полиса OC по номеру регистрации или VIN в официальной базе UFG.",
          cta: "Перейти на сайт UFG",
          href: "https://www.ufg.pl/",
        },
        
      ],
    },
  },

  lv: {
    hero: {
      kicker: "Tiešsaistes noformēšana",
      title: "Pārrobežu apdrošināšanas līgums (EUROpolis) — ātri un bez liekām darbībām",
      lead:
        "Aprēķiniet izmaksas, aizpildiet pieteikumu un saņemiet PDF. Transportlīdzekļiem, kas reģistrēti ārpus ES, polisi var viegli pārbaudīt Latvijas Republikas apdrošināšanas datubāzē.",
      meta: ["PDF pēc noformēšanas", "Atbalsts ziņapmaiņas lietotnēs", "Saprotami nosacījumi"],
      ctaCalc: "Aprēķināt izmaksas",
      ctaBuy: "Noformēt polisi",
    },

    calc: {
      title: "Izmaksu kalkulators",
      badge: "~ 1 minūte",
      desc: "Demonstrācijas bloks. Faktisko tarifu loģiku pievienosim vēlāk.",
      termLabel: "Termiņš",
      vehicleLabel: "Transportlīdzekļa veids",
      termOptions: [
        { value: "30", label: "30 dienas" },
        { value: "90", label: "90 dienas" },
        { value: "365", label: "12 mēneši" },
      ],
      vehicleOptions: [
        { value: "car", label: "Vieglie automobiļi" },
        { value: "van", label: "Autobusi" },
        { value: "truck", label: "Kravas automobiļi" },
        { value: "trailer", label: "Piekabes" },
        { value: "special", label: "Speciālā tehnika" },
      ],
      button: "Aprēķināt",
      note: "Demonstrācijas forma bez aprēķina. Tarifus un validāciju pievienosim atsevišķā posmā.",
    },

    process: {
      title: "Kā tas darbojas",
      desc: "Soli pa solim: aprēķins → dati → apmaksa → polise.",
      steps: [
        { title: "Aprēķiniet", text: "Izvēlieties transportlīdzekļa veidu un apdrošināšanas termiņu." },
        { title: "Aizpildiet datus", text: "Reģistrācijas adrese, valsts numurs, VIN un kontaktinformācija." },
        { title: "Apmaksājiet", text: "Pēc polises sagatavošanas nosūtīsim maksājuma rekvizītus." },
        { title: "Saņemiet PDF", text: "Uzreiz pēc maksājuma apstiprinājuma saņemšanas." },
      ],
    },

    why: {
      title: "Kāpēc izvēlas mūs",
      desc: "Fokuss uz ātrumu, skaidrību un korektu noformēšanu.",
      items: [
        { title: "Ātri", text: "Minimāls soļu skaits un skaidra struktūra." },
        { title: "Saprotami", text: "Izskaidrojam produktu atšķirības vienkāršā valodā." },
        { title: "Praktiski", text: "Orientējamies uz oficiālajām pārbaudēm un prasībām." },
        { title: "Atbalsts", text: "Palīdzam ar noformēšanu un pārbaudi." },
      ],
    },

    form: {
      title: "Pieteikuma forma",
      desc: "Aizpildiet datus — sagatavosim polisi un nosūtīsim maksājuma informāciju.",
    },

    faq: {
      title: "Biežāk uzdotie jautājumi",
      desc: "Īsas atbildes uz biežākajiem jautājumiem.",
      items: [
        { q: "Cik ilgi aizņem noformēšana?", a: "Parasti 10–20 minūtes, ja ir pieejami visi dati." },
        { q: "Vai var norēķināties ar karti?", a: "Jā, pēc polises sagatavošanas veicat apmaksu un saņemat PDF." },
        { q: "Vai tas ir tas pats, kas “Zaļā karte”?", a: "Nē. Tie ir atšķirīgi produkti ar dažādiem noteikumiem." },
        { q: "Kas tā ir par apdrošināšanu?", a: "Tā ir obligātā transportlīdzekļu īpašnieku civiltiesiskās atbildības apdrošināšana, kas ir spēkā Latvijā un ES." },
        {
          q: "Ko sedz apdrošināšana?",
          a: `Segums ietver:
              • kaitējumu cietušo dzīvībai vai veselībai;
              • mantisko kaitējumu trešajām personām.
              
              Minimālās garantētās summas:
              • 5 210 000 EUR — miesas bojājumi;
              • 1 050 000 EUR — mantiskais kaitējums.`
        },
        {
          q: "Ko apdrošināšana nesedz?",
          a: `• velosipēdus un nemehāniskos transportlīdzekļus;
                • zaudējumus transportlīdzekļa īpašniekam;
                • kaitējumu videi.`
        },
        {
          q: "Kādos gadījumos iespējama regresa prasība?",
          a: `Apdrošinātājs var piedzīt izmaksāto summu, ja vadītājs:
              • rīkojies ar nodomu;
              • bijis alkohola vai narkotisko vielu ietekmē;
              • nav bijis tiesību vadīt transportlīdzekli;
              • pametis negadījuma vietu;
              • izmantojis nozagtu transportlīdzekli.`
        },
        {
          q: "Kad sākas un beidzas polises darbība?",
          a: `Sākums: polises izsniegšanas datums.

                Darbības termiņš: 1–12 mēneši.

                Izbeigšana:
                • termiņa beigas;
                • transportlīdzekļa zādzība vai norakstīšana;
                • noņemšana no uzskaites.`
        },
      ],
    },

    verify: {
      title: "Polises derīguma pārbaude",
      lead:
        "Ja vēlaties pārliecināties, ka jūsu polise ir aktīva, izmantojiet oficiālās apdrošināšanas biroju datubāzes. Zemāk — saites uz pārbaudes servisiem Latvijā, Lietuvā un Polijā.",
      items: [
        {
          code: "LV",
          country: "Latvija",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Obligātās OCTA apdrošināšanas pārbaude Latvijā reģistrētiem transportlīdzekļiem.",
          cta: "Pārbaudīt LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Lietuva",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Obligātās civiltiesiskās atbildības apdrošināšanas polises pārbaude Lietuvā.",
          cta: "Pārbaudīt CAB",
          href: "https://www.cab.lt/",
        },
        {
          code: "PL",
          country: "Polija",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "OC polises pārbaude pēc reģistrācijas numura vai VIN UFG datubāzē.",
          cta: "Atvērt UFG vietni",
          href: "https://www.ufg.pl/",
        },
      ],
    },
  },
  en: {
    hero: {
      kicker: "Online issuance",
      title: "Cross-border insurance policy (EUROpolis) — fast and straightforward",
      lead:
        "Calculate the price, submit your details, and receive your PDF policy. For vehicles registered outside the EU, the policy can be easily verified in the Latvian insurance database.",
      meta: ["PDF after issuance", "Messenger support", "Clear terms"],
      ctaCalc: "Calculate price",
      ctaBuy: "Buy policy",
    },

    calc: {
      title: "Price calculator",
      badge: "~ 1 minute",
      desc: "Placeholder block. Full pricing logic will be added later.",
      termLabel: "Period",
      vehicleLabel: "Vehicle type",
      termOptions: [
        { value: "30", label: "30 days" },
        { value: "90", label: "90 days" },
        { value: "365", label: "12 months" },
      ],
      vehicleOptions: [
        { value: "car", label: "Passenger cars" },
        { value: "van", label: "Buses" },
        { value: "truck", label: "Trucks" },
        { value: "trailer", label: "Trailers" },
        { value: "special", label: "Special vehicles" },
      ],
      button: "Calculate",
      note: "Demo form without calculation. Pricing and validation will be added in a later step.",
    },

    process: {
      title: "How it works",
      desc: "Step by step: calculation → details → payment → policy.",
      steps: [
        {
          title: "Calculate",
          text: "Select the vehicle type and insurance period.",
        },
        {
          title: "Enter details",
          text: "Registration address, license plate number, VIN, and contact information.",
        },
        {
          title: "Pay",
          text: "Once the policy is prepared, we will send you the payment details.",
        },
        {
          title: "Receive your PDF",
          text: "Immediately after we receive payment confirmation.",
        },
      ],
    },

    why: {
      title: "Why choose us",
      desc: "Focused on speed, clarity, and accuracy.",
      items: [
        { title: "Fast", text: "Minimal steps and a clear process." },
        { title: "Clear", text: "We explain product differences in simple terms." },
        { title: "Practical", text: "Aligned with official checks and requirements." },
        { title: "Support", text: "We assist with issuance and verification questions." },
      ],
    },

    form: {
      title: "Application form",
      desc: "Submit your details — we will prepare the policy and send payment instructions.",
    },

    faq: {
      title: "FAQ",
      desc: "Short answers to common questions.",
      items: [
        {
          q: "How long does it take to issue a policy?",
          a: "Usually 10–20 minutes if all required details are provided.",
        },
        {
          q: "Can I pay by card?",
          a: "Yes. Once the policy is prepared, you can pay and receive the PDF.",
        },
        {
          q: "Is this the same as a Green Card?",
          a: "No. These are different products with different rules.",
        },
        {
          q: "What type of insurance is this?",
          a: "This is compulsory motor third-party liability insurance valid in Latvia and across the EU.",
        },
        {
          q: "What does the insurance cover?",
          a: `Coverage includes:
  • Bodily injury to third parties;
  • Property damage to third parties.

  Minimum guaranteed limits:
  • EUR 5,210,000 — bodily injury;
  • EUR 1,050,000 — property damage.`,
        },
        {
          q: "What is not covered?",
          a: `• Bicycles and non-mechanical vehicles;
  • Damage to the insured vehicle owner;
  • Environmental damage.`,
        },
        {
          q: "When can the insurer seek recovery (recourse)?",
          a: `The insurer may recover paid claims if the driver:
  • Acted intentionally;
  • Was under the influence of alcohol or drugs;
  • Had no valid driving licence;
  • Left the scene of an accident;
  • Used a stolen vehicle.`,
        },
        {
          q: "When does the policy start and end?",
          a: `Start: policy issue date.

  Period: 1–12 months.

  Termination:
  • Expiry of the policy period;
  • Theft or write-off of the vehicle;
  • Deregistration.`,
        },
      ],
    },

    verify: {
      title: "Policy verification",
      lead:
        "To check whether your policy is valid, use official insurance bureau databases. Below are links for Latvia, Lithuania, and Poland.",
      items: [
        {
          code: "LV",
          country: "Latvia",
          org: "LTAB — Latvian Motor Insurers’ Bureau",
          desc: "Check compulsory motor insurance (OCTA) for vehicles registered in Latvia.",
          cta: "Check via LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Lithuania",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Service to verify the validity of compulsory motor third-party liability insurance in Lithuania.",
          cta: "Check via CAB",
          href: "https://www.cab.lt/",
        },
        {
          code: "PL",
          country: "Poland",
          org: "UFG — Insurance Guarantee Fund",
          desc: "Check the validity of motor liability insurance by registration number or VIN in the official UFG database.",
          cta: "Go to UFG",
          href: "https://www.ufg.pl/",
        },
      ],
    },
  },
  uz: {
    hero: {
      kicker: "Onlayn rasmiylashtirish",
      title: "Transchegaraviy sug‘urta shartnomasi (EUROpolis) — tez va ortiqcha bosqichlarsiz",
      lead:
        "Narxni hisoblang, arizani to‘ldiring va PDF oling. Yevropa Ittifoqidan tashqarida ro‘yxatdan o‘tgan avtomobillar uchun polisni Latviya Respublikasi sug‘urta bazasi orqali oson tekshirish mumkin.",
      meta: ["Rasmiylashtirgandan keyin PDF", "Messendjerlarda qo‘llab-quvvatlash", "Tushunarli shartlar"],
      ctaCalc: "Narxni hisoblash",
      ctaBuy: "Polis rasmiylashtirish",
    },

    calc: {
      title: "Narx kalkulyatori",
      badge: "~ 1 daqiqa",
      desc: "Bu demo blok. Haqiqiy tarif hisoblash keyingi bosqichda qo‘shiladi.",
      termLabel: "Muddat",
      vehicleLabel: "Transport turi",
      termOptions: [
        { value: "30", label: "30 kun" },
        { value: "90", label: "90 kun" },
        { value: "365", label: "12 oy" },
      ],
      vehicleOptions: [
        { value: "car", label: "Yengil avtomobillar" },
        { value: "van", label: "Avtobuslar" },
        { value: "truck", label: "Yuk avtomobillari" },
        { value: "trailer", label: "Tirkamalar" },
        { value: "special", label: "Maxsus texnika" },
      ],
      button: "Hisoblash",
      note: "Demo shakl, hisob-kitob yo‘q. Tariflar va tekshiruv keyingi bosqichda qo‘shiladi.",
    },

    process: {
      title: "Qanday ishlaydi",
      desc: "Bosqichma-bosqich: hisoblash → ma’lumotlar → to‘lov → polis.",
      steps: [
        { title: "Hisoblang", text: "Transport vositasi turini va sug‘urta muddatini tanlang." },
        { title: "Ma’lumotlarni kiriting", text: "Ro‘yxatdan o‘tgan manzil, davlat raqami, VIN va aloqa ma’lumotlari." },
        { title: "To‘lang", text: "Polis tayyor bo‘lgach, sizga to‘lov rekvizitlarini yuboramiz." },
        { title: "PDF oling", text: "To‘lov tasdiqlangandan so‘ng darhol." },
      ],
    },

    why: {
      title: "Nega bizni tanlashadi",
      desc: "Tezlik, tushunarlilik va to‘g‘ri rasmiylashtirishga e’tibor qaratamiz.",
      items: [
        { title: "Tez", text: "Minimal bosqichlar va aniq tuzilma." },
        { title: "Tushunarli", text: "Mahsulotlar farqini oddiy tilda tushuntiramiz." },
        { title: "Amaliy", text: "Rasmiy tekshiruvlar va talablarni hisobga olamiz." },
        { title: "Qo‘llab-quvvatlash", text: "Rasmiylashtirish va tekshirish bo‘yicha yordam beramiz." },
      ],
    },

    form: {
      title: "Ariza shakli",
      desc: "Ma’lumotlarni kiriting — biz polisni tayyorlaymiz va to‘lov uchun rekvizitlarni yuboramiz.",
    },

    faq: {
      title: "FAQ",
      desc: "Eng ko‘p beriladigan savollarga qisqa javoblar.",
      items: [
        { q: "Rasmiylashtirish qancha vaqt oladi?", a: "Odatda barcha ma’lumotlar mavjud bo‘lsa, 10–20 daqiqa." },
        { q: "Kartadan to‘lash mumkinmi?", a: "Ha, polis tayyor bo‘lgach to‘laysiz va PDF olasiz." },
        { q: "Bu “yashil karta” bilan bir xilmi?", a: "Yo‘q. Bu turli mahsulotlar va turli qoidalarga ega." },
        { q: "Bu qanday sug‘urta?", a: "Bu transport vositalari egalari yoki foydalanuvchilarining fuqarolik javobgarligini majburiy sug‘urtalash bo‘lib, Latviya va YI hududida amal qiladi." },
        {
          q: "Sug‘urta nimani qoplaydi?",
          a: `Qoplama quyidagilarni o‘z ichiga oladi:
              • jabrlanganlarning hayoti yoki sog‘lig‘iga yetkazilgan zarar;
              • uchinchi shaxslarga yetkazilgan mulkiy zarar.
              
              Minimal kafolatlangan summalar:
              • 5 210 000 EUR — tan jarohati;
              • 1 050 000 EUR — mulkiy zarar.`
        },
        {
          q: "Sug‘urta nimani qoplamaydi?",
          a: `• velosipedlar va mexanik bo‘lmagan transport vositalari;
                • avtomobil egasiga yetkazilgan zarar;
                • atrof-muhitga zarar.`
        },
        {
          q: "Qachon regress qo‘llaniladi?",
          a: `Sug‘urta kompaniyasi to‘langan summani qaytarib undirish huquqiga ega, agar haydovchi:
              • qasddan harakat qilgan bo‘lsa;
              • mast yoki giyohvand modda ta’sirida bo‘lsa;
              • haydovchilik guvohnomasiga ega bo‘lmasa;
              • YTH joyidan qochib ketgan bo‘lsa;
              • o‘g‘irlangan avtomobilni boshqargan bo‘lsa.`
        },
        {
          q: "Polis qachon boshlanadi va tugaydi?",
          a: `Boshlanishi: polis berilgan sana.

                Amal qilish muddati: 1–12 oy.

                Tugashi:
                • muddat tugaganda;
                • avtomobil o‘g‘irlanganda yoki hisobdan chiqarilganda;
                • ro‘yxatdan chiqarilganda.`
        },
      ],
    },

    verify: {
      title: "Polis haqiqiyligini tekshirish",
      lead:
        "Agar polisingiz haqiqatan ham amal qilayotganiga ishonch hosil qilmoqchi bo‘lsangiz, rasmiy sug‘urta byurolari bazalaridan foydalaning. Quyida Polsha, Latviya va Litva uchun xizmatlar havolalari keltirilgan.",
      items: [
        {
          code: "LV",
          country: "Latviya",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Latviyada ro‘yxatdan o‘tgan transport vositalari uchun majburiy OCTA sug‘urtasini tekshirish xizmati.",
          cta: "LTAB orqali tekshirish",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Litva",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Litvada fuqarolik javobgarligi sug‘urtasi polisining amal qilishini tekshirish xizmati.",
          cta: "CAB orqali tekshirish",
          href: "https://www.cab.lt/",
        },
        {
          code: "PL",
          country: "Polsha",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "Ro‘yxat raqami yoki VIN bo‘yicha OC polisining amal qilishini rasmiy UFG bazasida tekshirish.",
          cta: "UFG saytiga o‘tish",
          href: "https://www.ufg.pl/",
        },
      ],
    },
  },
  kg: {
    hero: {
      kicker: "Онлайн тариздөө",
      title: "Трансчек аралык камсыздандыруу келишими (EUROpolis) — тез жана ашыкча кадамдарсыз",
      lead:
        "Баасын эсептеп, өтүнмөнү толтуруп, PDF алыңыз. ЕБ аймагынан тышкары катталган автоунаалар үчүн полисти Латвия Республикасынын камсыздандыруу базасы аркылуу оңой текшерсе болот.",
      meta: ["Тариздөөдөн кийин PDF", "Мессенджерлер аркылуу колдоо", "Түшүнүктүү шарттар"],
      ctaCalc: "Бааны эсептөө",
      ctaBuy: "Полис тариздөө",
    },

    calc: {
      title: "Бааны эсептөө калькулятору",
      badge: "~ 1 мүнөт",
      desc: "Бул демо-блок. Реалдуу тарифтик логика кийин кошулат.",
      termLabel: "Мөөнөт",
      vehicleLabel: "ТК түрү",
      termOptions: [
        { value: "30", label: "30 күн" },
        { value: "90", label: "90 күн" },
        { value: "365", label: "12 ай" },
      ],
      vehicleOptions: [
        { value: "car", label: "Жеңил автоунаалар" },
        { value: "van", label: "Автобустар" },
        { value: "truck", label: "Жүк ташуучу унаалар" },
        { value: "trailer", label: "Прицептер" },
        { value: "special", label: "Атайын техника" },
      ],
      button: "Эсептөө",
      note: "Демо-форма, эсептөө жок. Тарифтер жана текшерүү кийинки этапта кошулат.",
    },

    process: {
      title: "Кандай иштейт",
      desc: "Кадамдар: эсептөө → маалымат → төлөм → полис.",
      steps: [
        { title: "Эсептеңиз", text: "Транспорт каражатынын түрүн жана камсыздандыруу мөөнөтүн тандаңыз." },
        { title: "Маалыматтарды толтуруңуз", text: "Катталган дарек, мамлекеттик номер, VIN жана байланыш маалыматы." },
        { title: "Төлөңүз", text: "Полис даяр болгондон кийин төлөм реквизиттерин жиберебиз." },
        { title: "PDF алыңыз", text: "Төлөм ырасталгандан кийин дароо." },
      ],
    },

    why: {
      title: "Эмне үчүн бизди тандашат",
      desc: "Ылдамдыкка, түшүнүктүүлүккө жана туура тариздөөгө басым жасайбыз.",
      items: [
        { title: "Тез", text: "Минималдуу кадамдар жана түшүнүктүү процесс." },
        { title: "Түшүнүктүү", text: "Продукттардын айырмасын жөнөкөй тилде түшүндүрөбүз." },
        { title: "Практикалык", text: "Расмий талаптарды жана текшерүүлөрдү эске алабыз." },
        { title: "Колдоо", text: "Тариздөө жана текшерүү боюнча жардам беребиз." },
      ],
    },

    form: {
      title: "Өтүнмө формасы",
      desc: "Маалыматтарды толтуруңуз — биз полисти даярдап, төлөм үчүн реквизиттерди жөнөтөбүз.",
    },

    faq: {
      title: "Көп берилген суроолор",
      desc: "Кыска жана так жооптор.",
      items: [
        { q: "Тариздөө канча убакыт алат?", a: "Бардык маалыматтар болсо, адатта 10–20 мүнөт." },
        { q: "Карта менен төлөөгө болобу?", a: "Ооба, полис даяр болгондон кийин төлөп, PDF аласыз." },
        { q: "Бул «жашыл карта» менен бирдейби?", a: "Жок. Бул башка продукт жана башка эрежелер." },
        { q: "Бул кандай камсыздандыруу?", a: "Бул транспорт каражаттарынын ээлеринин же пайдалануучуларынын жарандык жоопкерчилигин милдеттүү камсыздандыруу, Латвияда жана ЕБ аймагында жарактуу." },
        {
          q: "Камсыздандыруу эмнени камтыйт?",
          a: `Камтуу төмөнкүлөрдү камтыйт:
  • жабыркагандардын өмүрүнө же ден соолугуна келтирилген зыян;
  • үчүнчү жактардын мүлкүнө келтирилген зыян.

  Минималдуу кепилденген суммалар:
  • 5 210 000 EUR — ден соолукка зыян;
  • 1 050 000 EUR — мүлктүк зыян.`,
        },
        {
          q: "Эмнелер камтылбайт?",
          a: `• велосипеддер жана механикалык эмес ТК;
  • автоунаа ээсине келтирилген зыян;
  • айлана-чөйрөгө келтирилген зыян.`,
        },
        {
          q: "Кайсы учурларда регресс болушу мүмкүн?",
          a: `Камсыздандыруучу төлөнгөн сумманы өндүрүп алууга укуктуу, эгер айдоочу:
  • атайылап аракет кылган болсо;
  • мас абалда же баңги заттын таасиринде болсо;
  • айдоочулук күбөлүгү жок болсо;
  • ЖКО болгон жерден качып кетсе;
  • уурдалган автоунааны колдонсо.`,
        },
        {
          q: "Полис качан башталат жана качан аяктайт?",
          a: `Башталышы: полис берилген күн.

  Мөөнөтү: 1–12 ай.

  Токтотуу:
  • мөөнөтү бүткөндө;
  • автоунаа уурдалганда же эсептен чыгарылганда;
  • каттоодон чыгарылганда.`,
        },
      ],
    },

    verify: {
      title: "Полистин жарактуулугун текшерүү",
      lead:
        "Эгер полисиңиз чын эле активдүү экенин текшергиңиз келсе, камсыздандыруу бюролорунун расмий базаларын колдонуңуз. Төмөндө Польша, Латвия жана Литва үчүн шилтемелер берилген.",
      items: [
        {
          code: "LV",
          country: "Латвия",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Латвияда катталган транспорт каражаттары үчүн милдеттүү OCTA камсыздандыруусун текшерүү.",
          cta: "LTAB аркылуу текшерүү",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Литва",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Литвадагы милдеттүү жарандык жоопкерчилик камсыздандыруусунун полисин текшерүү кызматы.",
          cta: "CAB аркылуу текшерүү",
          href: "https://www.cab.lt/",
        },
        {
          code: "PL",
          country: "Польша",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "UFG базасында мамлекеттик номер же VIN аркылуу OC полисин текшерүү.",
          cta: "UFG сайтына өтүү",
          href: "https://www.ufg.pl/",
        },
      ],
    },
  },
  ka: {
    hero: {
      kicker: "ონლაინ გაფორმება",
      title: "ტრანსსასაზღვრო დაზღვევის ხელშეკრულება (EUROpolis) — სწრაფად და ზედმეტი ნაბიჯების გარეშე",
      lead:
        "დაანგარიშეთ ღირებულება, შეავსეთ განაცხადი და მიიღეთ PDF. ევროკავშირის გარეთ რეგისტრირებული ავტომობილებისთვის — პოლისი მარტივად მოწმდება ლატვიის სადაზღვევო ბაზაში.",
      meta: ["PDF გაფორმების შემდეგ", "მხარდაჭერა მესენჯერებში", "გასაგები პირობები"],
      ctaCalc: "ღირებულების გამოთვლა",
      ctaBuy: "პოლისის გაფორმება",
    },

    calc: {
      title: "ღირებულების კალკულატორი",
      badge: "~ 1 წუთი",
      desc: "დემო ბლოკი. რეალური ტარიფების ლოგიკას მოგვიანებით დავამატებთ.",
      termLabel: "ვადა",
      vehicleLabel: "სატრანსპორტო საშუალების ტიპი",
      termOptions: [
        { value: "30", label: "30 დღე" },
        { value: "90", label: "90 დღე" },
        { value: "365", label: "12 თვე" },
      ],
      vehicleOptions: [
        { value: "car", label: "მსუბუქი ავტომობილები" },
        { value: "van", label: "ავტობუსები" },
        { value: "truck", label: "სატვირთოები" },
        { value: "trailer", label: "მისაბმელები" },
        { value: "special", label: "სპეცტექნიკა" },
      ],
      button: "გამოთვლა",
      note: "დემო-ფორმა გამოთვლის გარეშე. ტარიფებსა და ვალიდაციას ცალკე ეტაპზე დავამატებთ.",
    },

    process: {
      title: "როგორ მუშაობს",
      desc: "ეტაპობრივად: გამოთვლა → მონაცემები → გადახდა → პოლისი.",
      steps: [
        { title: "გამოთვალეთ", text: "აირჩიეთ სატრანსპორტო საშუალების ტიპი და დაზღვევის ვადა." },
        { title: "შეავსეთ მონაცემები", text: "რეგისტრაციის მისამართი, ნომერი, VIN და საკონტაქტო ინფორმაცია." },
        { title: "გადაიხადეთ", text: "პოლისის მომზადების შემდეგ გამოგიგზავნით გადახდის დეტალებს." },
        { title: "მიიღეთ PDF", text: "გადახდის დადასტურების მიღებისთანავე." },
      ],
    },

    why: {
      title: "რატომ გვირჩევენ",
      desc: "ფოკუსი სისწრაფეზე, გასაგებობაზე და სწორ გაფორმებაზე.",
      items: [
        { title: "სწრაფად", text: "მინიმალური ნაბიჯები და მკაფიო სტრუქტურა." },
        { title: "გასაგებად", text: "პროდუქტებს შორის განსხვავებებს მარტივი ენით ვხსნით." },
        { title: "პრაქტიკულად", text: "ვორიენტირდებით ოფიციალურ მოთხოვნებსა და შემოწმებებზე." },
        { title: "მხარდაჭერა", text: "გეხმარებით როგორც გაფორმებაში, ისე შემოწმებაში." },
      ],
    },

    form: {
      title: "განაცხადის ფორმა",
      desc: "შეავსეთ მონაცემები — მოვამზადებთ პოლისს და გამოგიგზავნით გადახდის დეტალებს.",
    },

    faq: {
      title: "FAQ",
      desc: "მოკლე პასუხები ხშირად დასმულ კითხვებზე.",
      items: [
        { q: "რამდენი დრო სჭირდება გაფორმებას?", a: "ჩვეულებრივ 10–20 წუთი, თუ ყველა მონაცემი მზად არის." },
        { q: "შეიძლება ბარათით გადახდა?", a: "დიახ, პოლისის მომზადების შემდეგ იხდით და იღებთ PDF-ს." },
        { q: "ეს იგივეა, რაც „მწვანე ბარათი“?", a: "არა. ეს სხვადასხვა პროდუქტებია და განსხვავებული წესებით." },
        { q: "რა ტიპის დაზღვევაა?", a: "ეს არის სავალდებულო პასუხისმგებლობის დაზღვევა სატრანსპორტო საშუალების მფლობელებისთვის ან მომხმარებლებისთვის, რომელიც მოქმედებს ლატვიასა და ევროკავშირის ქვეყნებში." },
        {
          q: "რას ფარავს დაზღვევა?",
          a: `დაფარვა მოიცავს:
  • ზიანს სიცოცხლესა ან ჯანმრთელობაზე;
  • მესამე პირის ქონებრივ ზიანს.

  მინიმალური სადაზღვევო ლიმიტები:
  • 5 210 000 EUR — სხეულის დაზიანება;
  • 1 050 000 EUR — ქონებრივი ზიანი.`,
        },
        {
          q: "რას არ ფარავს დაზღვევა?",
          a: `• ველოსიპედები და არამექანიკური ტრანსპორტი;
  • ზიანი ავტომობილის მფლობელისთვის;
  • გარემოზე მიყენებული ზიანი.`,
        },
        {
          q: "რა შემთხვევაში შესაძლებელია რეგრესი?",
          a: `სადაზღვევო კომპანიას შეუძლია მოთხოვოს გადახდილი თანხის დაბრუნება, თუ მძღოლი:
  • მოქმედებდა განზრახ;
  • იყო ალკოჰოლის ან ნარკოტიკის ზემოქმედების ქვეშ;
  • არ ჰქონდა მართვის უფლება;
  • მიიმალა შემთხვევის ადგილიდან;
  • იყენებდა მოპარულ ავტომობილს.`,
        },
        {
          q: "როდის იწყება და მთავრდება პოლისი?",
          a: `დაწყება: პოლისის გაცემის თარიღიდან.

  ვადა: 1–12 თვე.

  შეწყვეტა:
  • ვადის ამოწურვა;
  • ავტომობილის ქურდობა ან ჩამოწერა;
  • რეგისტრაციიდან მოხსნა.`,
        },
      ],
    },

    verify: {
      title: "პოლისის მოქმედების შემოწმება",
      lead:
        "თუ გსურთ დარწმუნდეთ, რომ თქვენი პოლისი აქტიურია, გამოიყენეთ სადაზღვევო ბიუროების ოფიციალური ბაზები. ქვემოთ მოცემულია ლინკები პოლონეთის, ლატვიის და ლიტვის სერვისებზე.",
      items: [
        {
          code: "LV",
          country: "ლატვია",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "ლატვიაში რეგისტრირებული ტრანსპორტისთვის სავალდებულო OCTA დაზღვევის შემოწმება.",
          cta: "შემოწმება LTAB-ზე",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "ლიტვა",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "ლიტვაში სავალდებულო პასუხისმგებლობის დაზღვევის მოქმედების შემოწმების სერვისი.",
          cta: "შემოწმება CAB-ზე",
          href: "https://www.cab.lt/",
        },
        {
          code: "PL",
          country: "პოლონეთი",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "OC პოლისის შემოწმება რეგისტრაციის ნომრით ან VIN-ით UFG-ის ოფიციალურ ბაზაში.",
          cta: "გადასვლა UFG-ზე",
          href: "https://www.ufg.pl/",
        },
      ],
    },
  },
  kz: {
    hero: {
      kicker: "Онлайн рәсімдеу",
      title: "Трансшекаралық сақтандыру шарты (EUROpolis) — жылдам әрі артық қадамсыз",
      lead:
        "Құнын есептеп, өтінімді толтырыңыз және PDF алыңыз. ЕО-дан тыс елдерде тіркелген көліктер үшін полисті Латвия Республикасының сақтандыру базасы арқылы оңай тексеруге болады.",
      meta: ["Рәсімдегеннен кейін PDF", "Мессенджерлер арқылы қолдау", "Түсінікті шарттар"],
      ctaCalc: "Құнын есептеу",
      ctaBuy: "Полисті рәсімдеу",
    },

    calc: {
      title: "Құн калькуляторы",
      badge: "~ 1 минут",
      desc: "Бұл демонстрациялық блок. Нақты тарифтік логика кейін қосылады.",
      termLabel: "Мерзім",
      vehicleLabel: "Көлік түрі",
      termOptions: [
        { value: "30", label: "30 күн" },
        { value: "90", label: "90 күн" },
        { value: "365", label: "12 ай" },
      ],
      vehicleOptions: [
        { value: "car", label: "Жеңіл автокөліктер" },
        { value: "van", label: "Автобустар" },
        { value: "truck", label: "Жүк көліктері" },
        { value: "trailer", label: "Тіркемелер" },
        { value: "special", label: "Арнайы техника" },
      ],
      button: "Есептеу",
      note: "Есептеу жасалмайтын демо-форма. Тарифтер мен тексерулер бөлек кезеңде қосылады.",
    },

    process: {
      title: "Қалай жұмыс істейді",
      desc: "Кезең-кезеңімен: есептеу → деректер → төлем → полис.",
      steps: [
        { title: "Есептеңіз", text: "Көлік түрін және сақтандыру мерзімін таңдаңыз." },
        { title: "Деректерді толтырыңыз", text: "Тіркеу мекенжайы, мемлекеттік нөмір, VIN және байланыс деректері." },
        { title: "Төлеңіз", text: "Полис дайын болғаннан кейін төлем деректерін жібереміз." },
        { title: "PDF алыңыз", text: "Төлем расталғаннан кейін бірден жіберіледі." },
      ],
    },

    why: {
      title: "Неліктен бізді таңдайды",
      desc: "Жылдамдыққа, түсініктілікке және рәсімдеудің дұрыстығына назар аударамыз.",
      items: [
        { title: "Жылдам", text: "Артық қадамдар жоқ, түсінікті құрылым." },
        { title: "Түсінікті", text: "Өнімдер арасындағы айырмашылықты қарапайым тілмен түсіндіреміз." },
        { title: "Практикалық", text: "Ресми талаптар мен тексерулерге сүйенеміз." },
        { title: "Қолдау", text: "Рәсімдеу және тексеру бойынша көмектесеміз." },
      ],
    },

    form: {
      title: "Өтінім формасы",
      desc: "Деректерді толтырыңыз — біз полисті дайындап, төлем мәліметтерін жібереміз.",
    },

    faq: {
      title: "Жиі қойылатын сұрақтар",
      desc: "Ең жиі қойылатын сұрақтарға қысқа жауаптар.",
      items: [
        { q: "Рәсімдеу қанша уақыт алады?", a: "Барлық деректер дайын болса, әдетте 10–20 минут." },
        { q: "Картамен төлеуге бола ма?", a: "Иә, полис дайын болғаннан кейін төлем жасап, PDF аласыз." },
        { q: "Бұл «жасыл карта» ма?", a: "Жоқ. Бұл әртүрлі өнімдер және ережелері де бөлек." },
        { q: "Бұл қандай сақтандыру?", a: "Бұл Латвия мен ЕО аумағында әрекет ететін көлік иелерінің немесе пайдаланушыларының азаматтық-құқықтық жауапкершілігін міндетті сақтандыру." },
        {
          q: "Сақтандыру нені қамтиды?",
          a: `Қамту мыналарды қамтиды:
  • Зардап шеккендердің өмірі мен денсаулығына келтірілген зиян;
  • Үшінші тұлғалардың мүлкіне келтірілген зиян.

  Минималды кепілдендірілген сомалар:
  • 5 210 000 EUR — денсаулыққа зиян;
  • 1 050 000 EUR — мүліктік зиян.`,
        },
        {
          q: "Сақтандыру нені қамтымайды?",
          a: `• велосипедтер және механикалық емес көліктер;
  • көлік иесінің өзіне келтірілген зиян;
  • қоршаған ортаға келтірілген зиян.`,
        },
        {
          q: "Қандай жағдайда регресс мүмкін?",
          a: `Сақтандырушы төленген соманы кері талап етуі мүмкін, егер жүргізуші:
  • қасақана әрекет етсе;
  • мас күйде немесе есірткі әсерінде болса;
  • жүргізуші куәлігі болмаса;
  • жол-көлік оқиғасы орнынан кетіп қалса;
  • ұрланған көлікті пайдаланса.`,
        },
        {
          q: "Полис қашан басталып, қашан аяқталады?",
          a: `Басталуы: полис берілген күн.

  Қолданылу мерзімі: 1–12 ай.

  Тоқтатылуы:
  • мерзімнің аяқталуы;
  • көліктің ұрлануы немесе есептен шығарылуы;
  • тіркеуден алынуы.`,
        },
      ],
    },

    verify: {
      title: "Полистің жарамдылығын тексеру",
      lead:
        "Полистің шынымен белсенді екеніне көз жеткізу үшін сақтандыру бюроларының ресми базаларын пайдаланыңыз. Төменде Польша, Латвия және Литва үшін сервистерге сілтемелер берілген.",
      items: [
        {
          code: "LV",
          country: "Латвия",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Латвияда тіркелген көліктер үшін міндетті OCTA сақтандыруын тексеру.",
          cta: "LTAB арқылы тексеру",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Литва",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Литвадағы міндетті жауапкершілік сақтандыру полисінің жарамдылығын тексеру сервисі.",
          cta: "CAB арқылы тексеру",
          href: "https://www.cab.lt/",
        },
        {
          code: "PL",
          country: "Польша",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "UFG ресми базасында тіркеу нөмірі немесе VIN арқылы OC полисін тексеру.",
          cta: "UFG сайтына өту",
          href: "https://www.ufg.pl/",
        },
      ],
    },
  },
  tr: {
    hero: {
      kicker: "Online başvuru",
      title: "Sınır ötesi sigorta sözleşmesi (EUROpolis) — hızlı ve gereksiz adımlar olmadan",
      lead:
        "Fiyatı hesaplayın, başvuruyu doldurun ve PDF alın. AB dışındaki ülkelerde kayıtlı araçlar için poliçe, Letonya Cumhuriyeti sigorta veritabanından kolayca doğrulanabilir.",
      meta: ["Başvuru sonrası PDF", "Mesajlaşma uygulamalarında destek", "Açık ve anlaşılır koşullar"],
      ctaCalc: "Fiyatı hesapla",
      ctaBuy: "Poliçe düzenle",
    },

    calc: {
      title: "Fiyat hesaplayıcı",
      badge: "~ 1 dakika",
      desc: "Bu bir demo bloktur. Gerçek tarife mantığı daha sonra eklenecektir.",
      termLabel: "Süre",
      vehicleLabel: "Araç türü",
      termOptions: [
        { value: "30", label: "30 gün" },
        { value: "90", label: "90 gün" },
        { value: "365", label: "12 ay" },
      ],
      vehicleOptions: [
        { value: "car", label: "Binek araçlar" },
        { value: "van", label: "Otobüsler" },
        { value: "truck", label: "Yük araçları" },
        { value: "trailer", label: "Römorklar" },
        { value: "special", label: "Özel ekipman" },
      ],
      button: "Hesapla",
      note: "Bu bir demo formdur. Tarifeler ve doğrulama ayrı bir aşamada eklenecektir.",
    },

    process: {
      title: "Nasıl çalışır",
      desc: "Adım adım: hesaplama → veri → ödeme → poliçe.",
      steps: [
        { title: "Hesaplayın", text: "Araç türünü ve sigorta süresini seçin." },
        { title: "Bilgileri girin", text: "Kayıt adresi, plaka, VIN ve iletişim bilgileri." },
        { title: "Ödeyin", text: "Poliçe hazırlandıktan sonra ödeme bilgilerini size iletiriz." },
        { title: "PDF alın", text: "Ödeme onayı alındıktan hemen sonra." },
      ],
    },

    why: {
      title: "Neden bizi tercih ediyorlar",
      desc: "Hız, anlaşılabilirlik ve doğru düzenleme üzerine odaklanıyoruz.",
      items: [
        { title: "Hızlı", text: "Minimum adım ve net bir süreç." },
        { title: "Anlaşılır", text: "Ürün farklarını sade bir dille açıklarız." },
        { title: "Pratik", text: "Resmi kontroller ve gerekliliklere göre hareket ederiz." },
        { title: "Destek", text: "Başvuru ve doğrulama sürecinde yardımcı oluruz." },
      ],
    },

    form: {
      title: "Başvuru formu",
      desc: "Bilgileri girin — poliçeyi hazırlayıp ödeme detaylarını gönderelim.",
    },

    faq: {
      title: "SSS",
      desc: "Sık sorulan sorulara kısa yanıtlar.",
      items: [
        { q: "Başvuru ne kadar sürer?", a: "Tüm bilgiler hazırsa genellikle 10–20 dakika sürer." },
        { q: "Kartla ödeme mümkün mü?", a: "Evet. Poliçe hazırlandıktan sonra ödeme yapıp PDF alırsınız." },
        { q: "Bu ‘Yeşil Kart’ ile aynı mı?", a: "Hayır. Bunlar farklı ürünlerdir ve kuralları farklıdır." },
        { q: "Bu sigorta nedir?", a: "Letonya ve AB’de geçerli olan, araç sahiplerinin veya kullanıcılarının zorunlu mali sorumluluk sigortasıdır." },
        {
          q: "Sigorta neyi kapsar?",
          a: `Kapsam şunları içerir:
              • Üçüncü kişilerin hayatına veya sağlığına verilen zararlar;
              • Üçüncü kişilerin mal varlığına verilen zararlar.
              
              Asgari teminat tutarları:
              •  5 210 000 EUR — bedensel zararlar;
              •  1 050 000 EUR — maddi zararlar.`,
        },
        {
          q: "Sigorta neleri kapsamaz?",
          a: `•  bisikletler ve mekanik olmayan araçlar;
                •  araç sahibinin kendi zararı;
                •  çevresel zararlar.`,
        },
        {
          q: "Hangi durumlarda rücu edilir?",
          a: `Sigorta şirketi, aşağıdaki durumlarda ödediği tazminatı geri talep edebilir:
              • sürücü kasıtlı hareket ettiyse;
              • alkollü veya uyuşturucu etkisi altındaysa;
              • ehliyeti yoksa;
              • kazadan sonra olay yerinden kaçtıysa;
              • çalıntı araç kullanıyorsa.`,
        },
        {
          q: "Poliçe ne zaman başlar ve biter?",
          a: `Başlangıç: poliçenin düzenlendiği tarih.

                Süre: 1–12 ay.

                Sona erme:
                • sürenin dolması;
                • aracın çalınması veya hurdaya ayrılması;
                • araç kaydının silinmesi.`,
        },
      ],
    },

    verify: {
      title: "Poliçe geçerliliğini kontrol etme",
      lead:
        "Poliçenizin gerçekten aktif olup olmadığını kontrol etmek istiyorsanız, resmi sigorta bürolarının veritabanlarını kullanabilirsiniz. Aşağıda Polonya, Letonya ve Litvanya için bağlantılar yer almaktadır.",
      items: [
        {
          code: "LV",
          country: "Letonya",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Letonya’da kayıtlı araçlar için zorunlu OCTA sigortasının doğrulanması.",
          cta: "LTAB üzerinden kontrol et",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Litvanya",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Litvanya’da zorunlu mali sorumluluk sigortası poliçesinin geçerliliğini kontrol etme hizmeti.",
          cta: "CAB üzerinden kontrol et",
          href: "https://www.cab.lt/",
        },
        {
          code: "PL",
          country: "Polonya",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "Resmi UFG veritabanında plaka veya VIN ile OC poliçesinin geçerliliğini kontrol etme.",
          cta: "UFG sitesine git",
          href: "https://www.ufg.pl/",
        },
      ],
    },
  },
  fa: {
    hero: {
      kicker: "صدور آنلاین",
      title: "قرارداد بیمه فرامرزی (EUROpolis) — سریع و بدون مراحل اضافی",
      lead:
        "هزینه را محاسبه کنید، فرم را تکمیل کنید و فایل PDF را دریافت کنید. برای خودروهایی که خارج از اتحادیه اروپا ثبت شده‌اند، اعتبار بیمه‌نامه به‌راحتی از طریق پایگاه بیمه جمهوری لتونی قابل بررسی است.",
      meta: ["دریافت PDF پس از صدور", "پشتیبانی در پیام‌رسان‌ها", "شرایط شفاف"],
      ctaCalc: "محاسبه هزینه",
      ctaBuy: "صدور بیمه‌نامه",
    },

    calc: {
      title: "محاسبه هزینه",
      badge: "حدود ۱ دقیقه",
      desc: "این یک نسخه آزمایشی است. منطق واقعی محاسبه تعرفه‌ها در مرحله بعدی اضافه می‌شود.",
      termLabel: "مدت",
      vehicleLabel: "نوع وسیله نقلیه",
      termOptions: [
        { value: "30", label: "۳۰ روز" },
        { value: "90", label: "۹۰ روز" },
        { value: "365", label: "۱۲ ماه" },
      ],
      vehicleOptions: [
        { value: "car", label: "سواری" },
        { value: "van", label: "اتوبوس" },
        { value: "truck", label: "کامیون" },
        { value: "trailer", label: "تریلر / یدک" },
        { value: "special", label: "ماشین‌آلات ویژه" },
      ],
      button: "محاسبه",
      note: "فرم نمایشی بدون محاسبه واقعی. تعرفه‌ها و اعتبارسنجی در مرحله جداگانه اضافه می‌شوند.",
    },

    process: {
      title: "نحوه کار",
      desc: "گام‌به‌گام: محاسبه → اطلاعات → پرداخت → دریافت بیمه‌نامه.",
      steps: [
        { title: "محاسبه کنید", text: "نوع وسیله نقلیه و مدت بیمه را انتخاب کنید." },
        { title: "اطلاعات را وارد کنید", text: "آدرس ثبت، شماره پلاک، VIN و اطلاعات تماس." },
        { title: "پرداخت کنید", text: "پس از آماده‌سازی بیمه‌نامه، اطلاعات پرداخت برای شما ارسال می‌شود." },
        { title: "PDF را دریافت کنید", text: "بلافاصله پس از تأیید دریافت پرداخت توسط ما." },
      ],
    },

    why: {
      title: "چرا ما را انتخاب می‌کنند",
      desc: "تمرکز بر سرعت، شفافیت و صحت در صدور بیمه.",
      items: [
        { title: "سریع", text: "حداقل مراحل با ساختار واضح." },
        { title: "شفاف", text: "تفاوت محصولات را به زبان ساده توضیح می‌دهیم." },
        { title: "کاربردی", text: "مطابق با الزامات و بررسی‌های رسمی عمل می‌کنیم." },
        { title: "پشتیبانی", text: "در مراحل صدور و بررسی در کنار شما هستیم." },
      ],
    },

    form: {
      title: "فرم درخواست",
      desc: "اطلاعات را وارد کنید — ما بیمه‌نامه را آماده کرده و جزئیات پرداخت را برای شما ارسال می‌کنیم.",
    },

    faq: {
      title: "سؤالات متداول",
      desc: "پاسخ‌های کوتاه به پرسش‌های رایج.",
      items: [
        { q: "صدور بیمه چقدر زمان می‌برد؟", a: "معمولاً در صورت تکمیل بودن اطلاعات، ۱۰ تا ۲۰ دقیقه." },
        { q: "آیا امکان پرداخت با کارت وجود دارد؟", a: "بله، پس از آماده‌سازی بیمه‌نامه پرداخت انجام می‌شود و فایل PDF دریافت می‌کنید." },
        { q: "آیا این همان «گرین کارت» است؟", a: "خیر. این دو محصول متفاوت با مقررات متفاوت هستند." },
        { q: "این بیمه چیست؟", a: "بیمه اجباری مسئولیت مدنی دارندگان یا استفاده‌کنندگان از وسایل نقلیه موتوری است که در قلمرو لتونی و اتحادیه اروپا معتبر است." },
        {
          q: "بیمه چه مواردی را پوشش می‌دهد؟",
          a: `پوشش شامل:
  • خسارت جانی یا بدنی اشخاص ثالث؛
  • خسارت مالی به اشخاص ثالث.

  حداقل تعهدات:
  • ۵٬۲۱۰٬۰۰۰ یورو — خسارات بدنی؛
  • ۱٬۰۵۰٬۰۰۰ یورو — خسارات مالی.`
        },
        {
          q: "چه مواردی تحت پوشش نیست؟",
          a: `• دوچرخه‌ها و وسایل نقلیه غیرموتوری؛
  • خسارت به مالک وسیله نقلیه؛
  • خسارات زیست‌محیطی.`
        },
        {
          q: "در چه مواردی امکان رجوع (Regress) وجود دارد؟",
          a: `شرکت بیمه می‌تواند مبلغ پرداختی را مطالبه کند اگر راننده:
  • عمداً عمل کرده باشد؛
  • تحت تأثیر الکل یا مواد مخدر بوده باشد؛
  • فاقد گواهینامه باشد؛
  • محل حادثه را ترک کرده باشد؛
  • از وسیله نقلیه سرقتی استفاده کرده باشد.`
        },
        {
          q: "شروع و پایان اعتبار بیمه‌نامه چه زمانی است؟",
          a: `شروع: تاریخ صدور بیمه‌نامه.

  مدت اعتبار: از ۱ تا ۱۲ ماه.

  پایان:
  • اتمام مدت؛
  • سرقت یا اسقاط وسیله نقلیه؛
  • خروج از ثبت.`
        },
      ],
    },

    verify: {
      title: "بررسی اعتبار بیمه‌نامه",
      lead:
        "برای اطمینان از فعال بودن بیمه‌نامه، می‌توانید از پایگاه‌های رسمی استفاده کنید. در ادامه لینک‌های مربوط به لهستان، لتونی و لیتوانی ارائه شده است.",
      items: [
        {
          code: "LV",
          country: "لتونی",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "بررسی بیمه اجباری OCTA برای وسایل نقلیه ثبت‌شده در لتونی.",
          cta: "بررسی در LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "لیتوانی",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "سرویس بررسی اعتبار بیمه مسئولیت مدنی اجباری در لیتوانی.",
          cta: "بررسی در CAB",
          href: "https://www.cab.lt/",
        },
        {
          code: "PL",
          country: "لهستان",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "بررسی اعتبار بیمه OC بر اساس شماره ثبت یا VIN در پایگاه رسمی UFG.",
          cta: "ورود به سایت UFG",
          href: "https://www.ufg.pl/",
        },
      ],
    },
  },
  mn: {
    hero: {
      kicker: "Онлайнаар бүрдүүлэх",
      title: "Хил дамнасан даатгалын гэрээ (EUROpolis) — хурдан, илүү алхамгүй",
      lead:
        "Үнийг тооцоолж, хүсэлт бөглөөд PDF авна уу. ЕХ-ноос гадна бүртгэлтэй автомашины хувьд полисыг Латвийн Бүгд Найрамдах Улсын даатгалын сангаар хялбар шалгах боломжтой.",
      meta: ["Бүрдүүлсний дараа PDF", "Мессенжерээр дэмжлэг", "Ойлгомжтой нөхцөл"],
      ctaCalc: "Үнийг тооцоолох",
      ctaBuy: "Полис авах",
    },

    calc: {
      title: "Үнийн тооцоолуур",
      badge: "~ 1 минут",
      desc: "Түр загвар блок. Бодит тарифын логикийг дараагийн шатанд нэмнэ.",
      termLabel: "Хугацаа",
      vehicleLabel: "Тээврийн хэрэгслийн төрөл",
      termOptions: [
        { value: "30", label: "30 хоног" },
        { value: "90", label: "90 хоног" },
        { value: "365", label: "12 сар" },
      ],
      vehicleOptions: [
        { value: "car", label: "Суудлын автомашин" },
        { value: "van", label: "Автобус" },
        { value: "truck", label: "Ачааны автомашин" },
        { value: "trailer", label: "Чиргүүл" },
        { value: "special", label: "Тусгай зориулалтын техник" },
      ],
      button: "Тооцоолох",
      note: "Тооцоололгүй демо хэлбэр. Тариф болон шалгалтыг дараагийн шатанд нэмнэ.",
    },

    process: {
      title: "Хэрхэн ажилладаг вэ",
      desc: "Алхам бүрээр: тооцоо → мэдээлэл → төлбөр → полис.",
      steps: [
        { title: "Тооцоолох", text: "Тээврийн хэрэгслийн төрөл болон даатгалын хугацааг сонгоно." },
        { title: "Мэдээлэл бөглөх", text: "Бүртгэлийн хаяг, улсын дугаар, VIN болон холбоо барих мэдээлэл." },
        { title: "Төлбөр хийх", text: "Полис бэлэн болмогц төлбөрийн мэдээллийг танд илгээнэ." },
        { title: "PDF авах", text: "Төлбөр баталгаажсаны дараа шууд илгээнэ." },
      ],
    },

    why: {
      title: "Яагаад биднийг сонгодог вэ",
      desc: "Хурд, ойлгомжтой байдал болон зөв бүрдүүлэлтэд төвлөрдөг.",
      items: [
        { title: "Хурдан", text: "Алхам цөөн, бүтэц ойлгомжтой." },
        { title: "Ойлгомжтой", text: "Бүтээгдэхүүний ялгааг энгийнээр тайлбарладаг." },
        { title: "Практик", text: "Албан шалгалт болон шаардлагад нийцүүлдэг." },
        { title: "Дэмжлэг", text: "Бүрдүүлэлт болон шалгалтын талаар тусалдаг." },
      ],
    },

    form: {
      title: "Хүсэлтийн маягт",
      desc: "Мэдээллээ бөглөнө үү — бид полис бэлдэж, төлбөрийн мэдээллийг илгээнэ.",
    },

    faq: {
      title: "FAQ",
      desc: "Түгээмэл асуултын товч хариулт.",
      items: [
        { q: "Бүрдүүлэлт хэр удаан үргэлжилдэг вэ?", a: "Бүх мэдээлэл байгаа тохиолдолд ихэвчлэн 10–20 минут." },
        { q: "Картаар төлбөр хийх боломжтой юу?", a: "Тийм. Полис бэлэн болсны дараа төлбөр хийж PDF авна." },
        { q: "Энэ нь “ногоон карт”-тай адил уу?", a: "Үгүй. Эдгээр нь өөр бүтээгдэхүүн, өөр дүрэмтэй." },
        { q: "Энэ ямар даатгал вэ?", a: "Энэ нь механик тээврийн хэрэгслийн эзэмшигч эсвэл ашиглагчийн иргэний хариуцлагын заавал даатгал бөгөөд Латви болон ЕХ-д хүчинтэй." },
        {
          q: "Даатгал юуг хамардаг вэ?",
          a: `Хамрах хүрээ:
              • Хохирогчийн амь нас, эрүүл мэндэд учирсан хохирол;
              • Гуравдагч этгээдийн эд хөрөнгийн хохирол.
              
              Доод баталгаат дүн:
              •  5 210 000 EUR — бие махбодын хохирол;
              •  1 050 000 EUR — эд хөрөнгийн хохирол.`,
        },
        {
          q: "Даатгал юуг хамрахгүй вэ?",
          a: `• Дугуй болон механик бус тээврийн хэрэгсэл;
                • Тээврийн хэрэгслийн эзэмшигчид учирсан хохирол;
                • Байгаль орчны хохирол.`,
        },
        {
          q: "Ямар тохиолдолд регресс үүсэх вэ?",
          a: `Даатгагч дараах нөхцөлд нөхөн төлбөрийг буцаан шаардах эрхтэй:
              • Санаатай үйлдэл;
              • Согтуугаар эсвэл мансууруулах бодисын нөлөөнд байсан;
              • Жолоодох эрхгүй;
              • Осол гарсан газраас зугтсан;
              • Хулгайлагдсан автомашин ашигласан.`,
        },
        {
          q: "Полис хэзээ эхэлж, дуусах вэ?",
          a: `Эхлэх: полис олгосон огноо.

                Хугацаа: 1–12 сар.

                Дуусах:
                • хугацаа дуусах;
                • автомашин хулгайд алдагдах эсвэл ашиглалтаас хасагдах;
                • бүртгэлээс хасагдах.`,
        },
      ],
    },

    verify: {
      title: "Полисын хүчинтэй эсэхийг шалгах",
      lead:
        "Таны полис идэвхтэй эсэхийг шалгахын тулд даатгалын товчоодын албан ёсны мэдээллийн санг ашиглана уу. Доорх нь Польш, Латви, Литвийн шалгах холбоосууд юм.",
      items: [
        {
          code: "LV",
          country: "Латви",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Латвид бүртгэлтэй тээврийн хэрэгслийн OCTA заавал даатгалыг шалгах үйлчилгээ.",
          cta: "LTAB-ээр шалгах",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Литва",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Литвад иргэний хариуцлагын даатгал хүчинтэй эсэхийг шалгах үйлчилгээ.",
          cta: "CAB-ээр шалгах",
          href: "https://www.cab.lt/",
        },
        {
          code: "PL",
          country: "Польш",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "UFG албан ёсны сангаар улсын дугаар эсвэл VIN-аар OC даатгалыг шалгах.",
          cta: "UFG сайт руу орох",
          href: "https://www.ufg.pl/",
        },
      ],
    },
  },
  hy: {
    hero: {
      kicker: "Առցանց ձևակերպում",
      title: "Տրանսսահմանային ապահովագրության պայմանագիր (EUROpolis) — արագ և առանց ավելորդ քայլերի",
      lead:
        "Հաշվեք արժեքը, լրացրեք հայտը և ստացեք PDF։ ԵՄ-ից դուրս գրանցված ավտոմեքենաների համար պոլիսը հեշտությամբ կարելի է ստուգել Լատվիայի Հանրապետության ապահովագրական բազայում։",
      meta: ["PDF ձևակերպումից հետո", "Աջակցություն մեսենջերներով", "Հասկանալի պայմաններ"],
      ctaCalc: "Հաշվել արժեքը",
      ctaBuy: "Ձևակերպել պոլիս",
    },

    calc: {
      title: "Արժեքի հաշվիչ",
      badge: "~ 1 րոպե",
      desc: "Բլոկի նախնական տարբերակ։ Իրական սակագնային հաշվարկը կավելացվի հաջորդ փուլում։",
      termLabel: "Ժամկետ",
      vehicleLabel: "Տրանսպորտային միջոցի տեսակ",
      termOptions: [
        { value: "30", label: "30 օր" },
        { value: "90", label: "90 օր" },
        { value: "365", label: "12 ամիս" },
      ],
      vehicleOptions: [
        { value: "car", label: "Թեթև մարդատար" },
        { value: "van", label: "Ավտոբուսներ" },
        { value: "truck", label: "Բեռնատարներ" },
        { value: "trailer", label: "Կցորդներ" },
        { value: "special", label: "Հատուկ տեխնիկա" },
      ],
      button: "Հաշվել",
      note: "Դեմո ձև՝ առանց հաշվարկի։ Սակագներն ու վավերացումը կավելացվեն առանձին փուլով։",
    },

    process: {
      title: "Ինչպես է աշխատում",
      desc: "Քայլ առ քայլ՝ հաշվարկ → տվյալներ → վճարում → պոլիս։",
      steps: [
        { title: "Հաշվեք", text: "Ընտրեք տրանսպորտային միջոցի տեսակը և ապահովագրության ժամկետը։" },
        { title: "Լրացրեք տվյալները", text: "Գրանցման հասցե, համարանիշ, VIN և կոնտակտներ։" },
        { title: "Վճարեք", text: "Պոլիսի պատրաստ լինելուց հետո մենք կուղարկենք վճարման տվյալները։" },
        { title: "Ստացեք PDF", text: "Վճարման հաստատումից անմիջապես հետո։" },
      ],
    },

    why: {
      title: "Ինչու են ընտրում մեզ",
      desc: "Կենտրոնանում ենք արագության, պարզության և ճիշտ ձևակերպման վրա։",
      items: [
        { title: "Արագ", text: "Քայլերի նվազագույն քանակ և հստակ կառուցվածք։" },
        { title: "Հասկանալի", text: "Պարզ լեզվով բացատրում ենք տարբեր ապահովագրական լուծումները։" },
        { title: "Գործնական", text: "Հիմնվում ենք պաշտոնական ստուգումների և պահանջների վրա։" },
        { title: "Աջակցություն", text: "Օգնում ենք ձևակերպման և ստուգման հարցերում։" },
      ],
    },

    form: {
      title: "Հայտի ձև",
      desc: "Լրացրեք տվյալները — մենք կպատրաստենք պոլիսը և կուղարկենք վճարման տվյալները։",
    },

    faq: {
      title: "Հաճախ տրվող հարցեր",
      desc: "Կարճ պատասխաններ հիմնական հարցերին։",
      items: [
        { q: "Որքա՞ն ժամանակ է պահանջվում ձևակերպման համար։", a: "Սովորաբար 10–20 րոպե՝ եթե բոլոր տվյալները առկա են։" },
        { q: "Կարելի՞ է վճարել քարտով։", a: "Այո, պոլիսի պատրաստ լինելուց հետո վճարում եք և ստանում PDF։" },
        { q: "Սա նույնն է, ինչ «կանաչ քարտ»-ը՞", a: "Ոչ։ Սրանք տարբեր ապահովագրական ապրանքներ են՝ տարբեր կանոններով։" },
        { q: "Ի՞նչ ապահովագրություն է սա։", a: "Սա մեխանիկական տրանսպորտային միջոցների սեփականատերերի կամ օգտագործողների պարտադիր քաղաքացիական պատասխանատվության ապահովագրություն է, որը գործում է Լատվիայում և ԵՄ-ում։" },
        {
          q: "Ի՞նչ է ծածկում ապահովագրությունը։",
          a: `Ծածկույթը ներառում է՝
              • Տուժածների կյանքի կամ առողջության վնաս;
              • Երրորդ անձանց գույքային վնաս։

              Նվազագույն ապահովագրված գումարներ՝
              •  5 210 000 EUR — մարմնական վնասվածքներ;
              •  1 050 000 EUR — գույքային վնաս։`
        },
        {
          q: "Ի՞նչը չի ծածկվում ապահովագրությամբ։",
          a: `• հեծանիվներ և ոչ մեխանիկական ՏՄ-ներ;
              • վնաս ավտոմեքենայի սեփականատիրոջը;
              • շրջակա միջավայրին հասցված վնաս։`
        },
        {
          q: "Ո՞ր դեպքերում հնարավոր է հետպահանջ (ռեգրես)։",
          a: `Ապահովագրողը կարող է պահանջել վճարված գումարը, եթե վարորդը՝
              • գործել է դիտավորությամբ;
              • եղել է ալկոհոլի կամ թմրամիջոցների ազդեցության տակ;
              • չի ունեցել վարորդական իրավունք;
              • լքել է ՃՏՊ-ի վայրը;
              • օգտագործել է գողացված ավտոմեքենա։`
        },
        {
          q: "Ե՞րբ է սկսվում և ավարտվում պոլիսը։",
          a: `Սկիզբ՝ պոլիսի տրամադրման օրը։

              Գործողության ժամկետ՝ 1–12 ամիս։

              Դադարեցում՝
              • ժամկետի ավարտ;
              • ավտոմեքենայի գողություն կամ դուրսգրում;
              • հաշվառումից հանվել։`
        },
      ],
    },

    verify: {
      title: "Պոլիսի վավերականության ստուգում",
      lead:
        "Եթե ցանկանում եք համոզվել, որ ձեր պոլիսը ակտիվ է, օգտվեք ապահովագրական բյուրոների պաշտոնական բազաներից։ Ստորև ներկայացված են Լեհաստանի, Լատվիայի և Լիտվայի ծառայությունների հղումները։",
      items: [
        {
          code: "LV",
          country: "Լատվիա",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Լատվիայում գրանցված տրանսպորտային միջոցների պարտադիր OCTA ապահովագրության ստուգում։",
          cta: "Ստուգել LTAB-ում",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Լիտվա",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Լիտվայում պարտադիր քաղաքացիական պատասխանատվության ապահովագրության պոլիսի վավերականության ստուգում։",
          cta: "Ստուգել CAB-ում",
          href: "https://www.cab.lt/",
        },
        {
          code: "PL",
          country: "Լեհաստան",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "OC պոլիսի վավերականության ստուգում գրանցման համարով կամ VIN-ով UFG պաշտոնական բազայում։",
          cta: "Անցնել UFG կայք",
          href: "https://www.ufg.pl/",
        },
      ],
    },
  },

};

// Утилита: если переводы ещё не готовы, берём RU.
export function getHomeDictionary(lang: Lang): HomeDictionary {
  const d = homeDictionary[lang];
  return d ? d : homeDictionary.ru;
}
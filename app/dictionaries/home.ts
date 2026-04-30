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
      title: "Pārrobežu apdrošināšanas līgums (EUROpolis) — ātri un bez liekiem soļiem",
      lead:
        "Aprēķiniet cenu, aizpildiet pieteikumu un saņemiet PDF. Transportlīdzekļiem, kas reģistrēti ārpus ES — polisi var viegli pārbaudīt Latvijas Republikas apdrošināšanas datubāzē.",
      meta: ["PDF pēc noformēšanas", "Atbalsts saziņas lietotnēs", "Skaidri nosacījumi"],
      ctaCalc: "Aprēķināt cenu",
      ctaBuy: "Noformēt polisi",
    },

    calc: {
      title: "Cenas kalkulators",
      badge: "~ 1 minūte",
      desc: "Bloka sagatave. Reālo tarifu loģiku pievienosim vēlāk.",
      termLabel: "Termiņš",
      vehicleLabel: "Transportlīdzekļa tips",
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
        { title: "Aprēķiniet", text: "Izvēlieties transportlīdzekļa tipu un apdrošināšanas termiņu." },
        { title: "Aizpildiet datus", text: "Reģistrācijas adrese, valsts numurs, VIN un kontakti." },
        { title: "Apmaksājiet", text: "Pēc polises sagatavošanas nosūtīsim jums maksājuma rekvizītus." },
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
        { title: "Atbalsts", text: "Palīdzam ar jautājumiem par noformēšanu un pārbaudi." },
      ],
    },

    form: {
      title: "Pieteikuma forma",
      desc: "Aizpildiet datus — sagatavosim polisi un nosūtīsim maksājuma informāciju.",
    },

    faq: {
      title: "BUJ",
      desc: "Īsas atbildes uz biežāk uzdotajiem jautājumiem.",
      items: [
        { q: "Cik ilgs laiks nepieciešams noformēšanai?", a: "Parasti 10–20 minūtes, ja ir visi dati." },
        { q: "Vai var apmaksāt ar karti?", a: "Jā, pēc polises sagatavošanas jūs veicat apmaksu un saņemat PDF." },
        { q: "Vai tas ir tas pats, kas “Zaļā karte”?", a: "Nē. Tie ir dažādi produkti ar atšķirīgiem noteikumiem." },
        { q: "Kas tas ir par apdrošināšanu?", a: "Tā ir obligātā transportlīdzekļu īpašnieku vai lietotāju civiltiesiskās atbildības apdrošināšana, kas ir spēkā Latvijā un ES." },
        {
          q: "Ko sedz apdrošināšana?",
          a: `Segums ietver:
              • kaitējumu cietušo dzīvībai vai veselībai;
              • mantisko kaitējumu trešajām personām.
              
              Minimālās garantētās summas:
              • 5 210 000 EUR — miesas bojājumi;
              • 1 050 000 EUR — mantiskais kaitējums.`,
        },
        {
          q: "Ko apdrošināšana nesedz?",
          a: `• velosipēdus un nemehāniskus transportlīdzekļus;
              • kaitējumu transportlīdzekļa īpašniekam;
              • kaitējumu videi.`,
        },
        {
          q: "Kādos gadījumos iespējams regresa prasījums?",
          a: `Apdrošinātājs var piedzīt izmaksāto summu, ja vadītājs:
              • rīkojās tīši;
              • bija alkohola vai narkotiku reibumā;
              • nebija tiesību vadīt transportlīdzekli;
              • pameta negadījuma vietu;
              • izmantoja nozagtu transportlīdzekli.`,
        },
        {
          q: "Kad sākas un beidzas polise?",
          a: `Sākums: polises izsniegšanas datums.

                Termiņš: 1–12 mēneši.

                Izbeigšana:
                • termiņa beigas;
                • transportlīdzekļa zādzība vai norakstīšana;
                • noņemšana no uzskaites.`,
        },
      ],
    },

    verify: {
      title: "Polises derīguma pārbaude",
      lead:
        "Ja vēlaties pārliecināties, ka jūsu polise ir aktīva, izmantojiet oficiālās apdrošināšanas biroju datubāzes. Zemāk — saites uz pārbaudes servisiem Polijā, Latvijā un Lietuvā.",
      items: [
        {
          code: "LV",
          country: "Latvija",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Obligātās OCTA apdrošināšanas pārbaude transportlīdzekļiem, kas reģistrēti Latvijā.",
          cta: "Pārbaudīt LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Lietuva",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Obligātās civiltiesiskās atbildības apdrošināšanas polises derīguma pārbaude Lietuvā.",
          cta: "Pārbaudīt CAB",
          href: "https://www.cab.lt/",
        },
        {
          code: "PL",
          country: "Polija",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "OC polises derīguma pārbaude pēc reģistrācijas numura vai VIN UFG datubāzē.",
          cta: "Atvērt UFG",
          href: "https://www.ufg.pl/",
        },
      ],
    },
  },
  en: undefined as unknown as HomeDictionary,
  uz: undefined as unknown as HomeDictionary,
  kg: undefined as unknown as HomeDictionary,
};

// Утилита: если переводы ещё не готовы, берём RU.
export function getHomeDictionary(lang: Lang): HomeDictionary {
  const d = homeDictionary[lang];
  return d ? d : homeDictionary.ru;
}
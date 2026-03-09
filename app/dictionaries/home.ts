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
        "Рассчитайте стоимость, заполните заявку и получите PDF. Для авто из стран вне ЕС — с проверяемыми источниками и понятными шагами.",
      meta: ["PDF после оформления", "Поддержка по WhatsApp", "Понятные условия"],
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
      desc: "Заполните данные — мы подготовим полис и дадим ссылку на оплату.",
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

  // Временно: чтобы UI не ломался — копия RU.
  // Потом переведёте и замените.
  lt: undefined as unknown as HomeDictionary,
  en: undefined as unknown as HomeDictionary,
  uz: undefined as unknown as HomeDictionary,
  kg: undefined as unknown as HomeDictionary,
};

// Утилита: если переводы ещё не готовы, берём RU.
export function getHomeDictionary(lang: Lang): HomeDictionary {
  const d = homeDictionary[lang];
  return d ? d : homeDictionary.ru;
}
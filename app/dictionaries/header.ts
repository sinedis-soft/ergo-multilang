// app/dictionaries/header.ts

export const LOCALES = ["ru", "lv", "en", "uz", "kg", "ka", "kz", "tr", "fa", "mn", "hy"] as const;
export type Lang = (typeof LOCALES)[number];

export interface HeaderDictionary {
  brandTitle: string;
  brandSub: string;

  topContacts: string;
  topLangLabel: string;

  nav: {
    main: string;
    about: string;
    contacts: string;
  };

  ctaCalc: string;
  ctaBuy: string;
  menu: string;
}

export const headerDictionary: Record<Lang, HeaderDictionary> = {
  ru: {
    brandTitle: "EURO polis",
    brandSub: "Страхование для частных лиц и бизнеса",
    topContacts: "Контакты",
    topLangLabel: "Язык",
    nav: {
      main: "Главная",
      about: "О нас",
      contacts: "Контакты",
    },
    ctaCalc: "Калькулятор",
    ctaBuy: "Купить полис",
    menu: "Меню",
  },

  lv: {
    brandTitle: "EURO polis",
    brandSub: "Apdrošināšana privātpersonām un uzņēmumiem",
    topContacts: "Kontakti",
    topLangLabel: "Valoda",
    nav: {
      main: "Sākumlapa",
      about: "Par mums",
      contacts: "Kontakti",
    },
    ctaCalc: "Kalkulators",
    ctaBuy: "Iegādāties polisi",
    menu: "Izvēlne",
  },

  en: {
    brandTitle: "EURO polis",
    brandSub: "Insurance for individuals and business",
    topContacts: "Contacts",
    topLangLabel: "Language",
    nav: {
      main: "Home",
      about: "About",
      contacts: "Contacts",
    },
    ctaCalc: "Calculator",
    ctaBuy: "Buy policy",
    menu: "Menu",
  },

  uz: {
    brandTitle: "EURO polis",
    brandSub: "Jismoniy shaxslar va biznes uchun sug'urta",
    topContacts: "Kontaktlar",
    topLangLabel: "Til",
    nav: {
      main: "Bosh sahifa",
      about: "Biz haqimizda",
      contacts: "Kontaktlar",
    },
    ctaCalc: "Kalkulyator",
    ctaBuy: "Polis sotib olish",
    menu: "Menyu",
  },

  kg: {
    brandTitle: "EURO polis",
    brandSub: "Жеке адамдар жана бизнес үчүн камсыздандыруу",
    topContacts: "Байланыш",
    topLangLabel: "Тил",
    nav: {
      main: "Башкы бет",
      about: "Биз жөнүндө",
      contacts: "Байланыш",
    },
    ctaCalc: "Калькулятор",
    ctaBuy: "Полис сатып алуу",
    menu: "Меню",
  },
  ka: {
    brandTitle: "EURO polis",
    brandSub: "დაზღვევა კერძო პირებისთვის და ბიზნესისთვის",
    topContacts: "კონტაქტები",
    topLangLabel: "ენა",
    nav: {
      main: "მთავარი",
      about: "ჩვენ შესახებ",
      contacts: "კონტაქტები",
    },
    ctaCalc: "კალკულატორი",
    ctaBuy: "პოლისის შეძენა",
    menu: "მენიუ",
  },
  kz: {
    brandTitle: "EURO polis",
    brandSub: "Жеке тұлғалар мен бизнеске арналған сақтандыру",
    topContacts: "Байланыс",
    topLangLabel: "Тіл",
    nav: {
      main: "Басты бет",
      about: "Біз туралы",
      contacts: "Байланыс",
    },
    ctaCalc: "Калькулятор",
    ctaBuy: "Полис сатып алу",
    menu: "Мәзір",
  },
  tr: {
    brandTitle: "EURO polis",
    brandSub: "Bireyler ve işletmeler için sigorta",
    topContacts: "İletişim",
    topLangLabel: "Dil",
    nav: {
      main: "Ana sayfa",
      about: "Hakkımızda",
      contacts: "İletişim",
    },
    ctaCalc: "Hesaplayıcı",
    ctaBuy: "Poliçe satın al",
    menu: "Menü",
  },
  fa: {
    brandTitle: "EURO polis",
    brandSub: "بیمه برای افراد و کسب‌وکارها",
    topContacts: "تماس‌ها",
    topLangLabel: "زبان",
    nav: {
      main: "صفحه اصلی",
      about: "درباره ما",
      contacts: "تماس با ما",
    },
    ctaCalc: "محاسبه‌گر",
    ctaBuy: "خرید بیمه‌نامه",
    menu: "منو",
  },
  mn: {
    brandTitle: "EURO polis",
    brandSub: "Хувь хүн болон бизнесийн даатгал",
    topContacts: "Холбоо барих",
    topLangLabel: "Хэл",
    nav: {
      main: "Нүүр",
      about: "Бидний тухай",
      contacts: "Холбоо барих",
    },
    ctaCalc: "Тооцоолуур",
    ctaBuy: "Даатгалын полис авах",
    menu: "Цэс",
  },

  hy: {
    brandTitle: "EURO polis",
    brandSub: "Ապահովագրություն անհատների և բիզնեսի համար",
    topContacts: "Կոնտակտներ",
    topLangLabel: "Լեզու",
    nav: {
      main: "Գլխավոր",
      about: "Մեր մասին",
      contacts: "Կոնտակտներ",
    },
    ctaCalc: "Հաշվիչ",
    ctaBuy: "Գնել պոլիս",
    menu: "Մենյու",
  },
};
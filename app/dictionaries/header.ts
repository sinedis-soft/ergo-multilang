// app/dictionaries/header.ts

export const LOCALES = ["ru", "lv", "en", "uz", "kg"] as const;
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
};
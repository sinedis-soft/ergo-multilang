// app/dictionaries/header.ts

export const LOCALES = ["ru", "lv", "en", "uz", "kg", "ka", "kz", "tr", "fa", "mn", "hy"] as const;
export type Lang = (typeof LOCALES)[number];

export const LOCALE_META: Record<Lang, { nativeName: string; region: "Europe" | "Asia" }> = {
  ru: { nativeName: "Русский", region: "Europe" },
  lv: { nativeName: "Latviešu", region: "Europe" },
  en: { nativeName: "English", region: "Europe" },
  uz: { nativeName: "O‘zbek", region: "Asia" },
  kg: { nativeName: "Кыргызча", region: "Asia" },
  ka: { nativeName: "ქართული", region: "Asia" },
  kz: { nativeName: "Қазақша", region: "Asia" },
  tr: { nativeName: "Türkçe", region: "Asia" },
  fa: { nativeName: "فارسی", region: "Asia" },
  mn: { nativeName: "Монгол", region: "Asia" },
  hy: { nativeName: "Հայերեն", region: "Asia" },
};

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
  languageDialogTitle: string;
  languageDialogClose: string;
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
    languageDialogTitle: "Выберите язык",
    languageDialogClose: "Закрыть",

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
    languageDialogTitle: "Izvēlieties valodu",
    languageDialogClose: "Aizvērt",
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
    languageDialogTitle: "Choose language",
    languageDialogClose: "Close",
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
    languageDialogTitle: "Tilni tanlang",
    languageDialogClose: "Yopish",
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
    languageDialogTitle: "Тилди тандаңыз",
    languageDialogClose: "Жабуу",
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
    languageDialogTitle: "აირჩიეთ ენა",
    languageDialogClose: "დახურვა",
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
    languageDialogTitle: "Тілді таңдаңыз",
    languageDialogClose: "Жабу",
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
    languageDialogTitle: "Dil seçin",
    languageDialogClose: "Kapat",
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
    languageDialogTitle: "زبان را انتخاب کنید",
    languageDialogClose: "بستن",
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
    languageDialogTitle: "Хэл сонгох",
    languageDialogClose: "Хаах",
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
    languageDialogTitle: "Ընտրեք լեզուն",
    languageDialogClose: "Փակել",
  },
};
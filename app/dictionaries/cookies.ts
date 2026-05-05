import type { Lang } from "@/app/dictionaries/header";

export type CookieCategoryKey = "necessary" | "functional" | "marketing";

export type CookieCategory = {
  key: CookieCategoryKey;
  title: string;
  description: string;
  locked?: boolean;
};

export type CookieDictionary = {
  manageBtn: string;
  modalTitle: string;
  modalText: string;
  categoriesTitle: string;
  categories: CookieCategory[];
  policyText: string;
  policyLabel: string;
  policyHref: string;
  saveBtn: string;
  acceptAllBtn: string;
  rejectAllBtn: string;
  closeAria: string;
};

const RU: CookieDictionary = {
  manageBtn: "Cookie",
  modalTitle: "Настройки cookie",
  modalText: "Выберите, какие cookie можно использовать. Необходимые — всегда включены.",
  categoriesTitle: "Категории",
  categories: [
    { key: "necessary", title: "Необходимые", description: "Нужны для работы сайта и безопасности. Отключить нельзя.", locked: true },
    { key: "functional", title: "Функциональные", description: "Запоминают настройки интерфейса и помогают корректной работе отдельных функций." },
    { key: "marketing", title: "Аналитические", description: "Помогают через анонимную статистику улучшать удобство использования сайта, совершенствовать продукты и услуги." },
  ],
  policyText: "Подробнее — в",
  policyLabel: "политике cookie",
  policyHref: "/cookiepolicy",
  saveBtn: "Сохранить",
  acceptAllBtn: "Принять все",
  rejectAllBtn: "Отклонить необязательные",
  closeAria: "Закрыть",
};

const EN: CookieDictionary = {
  ...RU,
  modalTitle: "Cookie settings",
  modalText: "Choose which cookies can be used. Necessary cookies are always enabled.",
  categoriesTitle: "Categories",
  categories: [
    { key: "necessary", title: "Necessary", description: "Required for site operation and security. Cannot be disabled.", locked: true },
    { key: "functional", title: "Functional", description: "Remember interface preferences and improve feature reliability." },
    { key: "marketing", title: "Analytics", description: "Help improve usability and services using aggregated anonymous statistics." },
  ],
  policyText: "Read more in the",
  policyLabel: "cookie policy",
  saveBtn: "Save",
  acceptAllBtn: "Accept all",
  rejectAllBtn: "Reject optional",
  closeAria: "Close",
};

const LV: CookieDictionary = {
  ...RU,
  modalTitle: "Sīkdatņu iestatījumi",
  modalText: "Izvēlieties, kuras sīkdatnes var izmantot. Nepieciešamās sīkdatnes vienmēr ir ieslēgtas.",
  categoriesTitle: "Kategorijas",
  categories: [
    { key: "necessary", title: "Nepieciešamās", description: "Nepieciešamas vietnes darbībai un drošībai. Nevar atspējot.", locked: true },
    { key: "functional", title: "Funkcionālās", description: "Saglabā interfeisa iestatījumus un uzlabo funkciju darbību." },
    { key: "marketing", title: "Analītiskās", description: "Palīdz uzlabot lietojamību un pakalpojumus, izmantojot anonimizētu statistiku." },
  ],
  policyText: "Vairāk informācijas",
  policyLabel: "sīkdatņu politikā",
  saveBtn: "Saglabāt",
  acceptAllBtn: "Pieņemt visu",
  rejectAllBtn: "Noraidīt izvēles",
  closeAria: "Aizvērt",
};

const COOKIE_DICTIONARY: Record<Lang, CookieDictionary> = { ru: RU, en: EN, lv: LV };

export function getCookieDictionary(lang: Lang): CookieDictionary {
  return COOKIE_DICTIONARY[lang] ?? COOKIE_DICTIONARY.ru;
}

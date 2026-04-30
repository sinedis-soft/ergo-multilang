// app/dictionaries/footer.ts

import type { Lang } from "@/app/dictionaries/header";

export type FooterDictionary = {
  company: string;
  about: string;
  contacts: string;
  contactsLink: string;
  more: string;
  rules: string;
  documents: string;
  copyright: string;
  cookiePolicy: string;
  privacyPolicy: string;
};

const ru: FooterDictionary = {
  company: "О компании ERGO",
  about: "О нас",
  contacts: "Контакты",
  contactsLink: "Контакты и офисы",
  more: "Дополнительно",
  rules: "Правила",
  documents: "Документы с информацией о продукте",
  copyright: "© 2025 EURO polis",
  cookiePolicy: "Политика использования файлов cookie",
  privacyPolicy: "Политика конфиденциальности",
};

const en: FooterDictionary = {
  company: "About ERGO",
  about: "About us",
  contacts: "Contacts",
  contactsLink: "Contacts and offices",
  more: "More",
  rules: "Terms and conditions",
  documents: "Product information documents",
  copyright: "© 2025 EURO polis",
  cookiePolicy: "Cookie Policy",
  privacyPolicy: "Privacy Policy",
};

const lv: FooterDictionary = {
  company: "Par ERGO",
  about: "Par mums",
  contacts: "Kontakti",
  contactsLink: "Kontakti un biroji",
  more: "Papildus",
  rules: "Noteikumi",
  documents: "Produkta informācijas dokumenti",
  copyright: "© 2025 EURO polis",
  cookiePolicy: "Sīkdatņu politika",
  privacyPolicy: "Privātuma politika",
};

export function getFooterDictionary(lang: Lang): FooterDictionary {
  if (lang === "ru") return ru;
  if (lang === "lv") return lv;
  return en;
}
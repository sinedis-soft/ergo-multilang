export const LOCALES = ["ru", "lv", "en", "uz"] as const;

export type Lang = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Lang = "ru";

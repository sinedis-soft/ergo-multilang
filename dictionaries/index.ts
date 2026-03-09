import { DEFAULT_LOCALE, type Lang, LOCALES } from "@/dictionaries/config";
import { commonRu } from "@/dictionaries/common/ru";
import { commonLv } from "@/dictionaries/common/lv";
import { commonEn } from "@/dictionaries/common/en";
import { commonUz } from "@/dictionaries/common/uz";
import { headerRu } from "@/dictionaries/header/ru";
import { headerLv } from "@/dictionaries/header/lv";
import { headerEn } from "@/dictionaries/header/en";
import { headerUz } from "@/dictionaries/header/uz";
import { footerRu } from "@/dictionaries/footer/ru";
import { footerLv } from "@/dictionaries/footer/lv";
import { footerEn } from "@/dictionaries/footer/en";
import { footerUz } from "@/dictionaries/footer/uz";
import { navigationRu } from "@/dictionaries/navigation/ru";
import { navigationLv } from "@/dictionaries/navigation/lv";
import { navigationEn } from "@/dictionaries/navigation/en";
import { navigationUz } from "@/dictionaries/navigation/uz";
import { errorsRu } from "@/dictionaries/errors/ru";
import { errorsLv } from "@/dictionaries/errors/lv";
import { errorsEn } from "@/dictionaries/errors/en";
import { errorsUz } from "@/dictionaries/errors/uz";
import { metaRu } from "@/dictionaries/meta/ru";
import { metaLv } from "@/dictionaries/meta/lv";
import { metaEn } from "@/dictionaries/meta/en";
import { metaUz } from "@/dictionaries/meta/uz";
import { homeRu } from "@/dictionaries/pages/home/ru";
import { homeLv } from "@/dictionaries/pages/home/lv";
import { homeEn } from "@/dictionaries/pages/home/en";
import { homeUz } from "@/dictionaries/pages/home/uz";
import { leadRu } from "@/dictionaries/forms/lead/ru";
import { leadLv } from "@/dictionaries/forms/lead/lv";
import { leadEn } from "@/dictionaries/forms/lead/en";
import { leadUz } from "@/dictionaries/forms/lead/uz";

const common = { ru: commonRu, lv: commonLv, en: commonEn, uz: commonUz };
const header = { ru: headerRu, lv: headerLv, en: headerEn, uz: headerUz };
const footer = { ru: footerRu, lv: footerLv, en: footerEn, uz: footerUz };
const navigation = { ru: navigationRu, lv: navigationLv, en: navigationEn, uz: navigationUz };
const errors = { ru: errorsRu, lv: errorsLv, en: errorsEn, uz: errorsUz };
const meta = { ru: metaRu, lv: metaLv, en: metaEn, uz: metaUz };
const home = { ru: homeRu, lv: homeLv, en: homeEn, uz: homeUz };
const leadForm = { ru: leadRu, lv: leadLv, en: leadEn, uz: leadUz };

export function resolveLang(raw: string): Lang {
  return (LOCALES as readonly string[]).includes(raw) ? (raw as Lang) : DEFAULT_LOCALE;
}

export function getDictionaries(lang: Lang) {
  return {
    common: common[lang],
    header: header[lang],
    footer: footer[lang],
    navigation: navigation[lang],
    errors: errors[lang],
    meta: meta[lang],
    pages: { home: home[lang] },
    forms: { lead: leadForm[lang] },
  };
}

export { LOCALES, DEFAULT_LOCALE, type Lang };

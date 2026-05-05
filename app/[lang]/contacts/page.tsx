export const dynamic = "force-static";
export const dynamicParams = false;

import type { Metadata } from "next";
import type { Lang } from "@/app/dictionaries/header";
import { LOCALES } from "@/app/dictionaries/header";
import { pageAlternates } from "@/app/seo";

import ContactsPage from "@/app/components/ContactsPage";

const titles: Record<Lang, string> = {
  ru: "Контакты",
  lv: "Kontakti",
  en: "Contacts",
  uz: "Kontaktlar",
  kg: "Байланыш",
  ka: "კონტაქტები",
  kz: "Байланыс",
  tr: "İletişim",
  fa: "تماس با ما",
  mn: "Холбоо барих",
  hy: "Կոնտակտներ",
};

const descriptions: Record<Lang, string> = {
  ru: "Контактная информация и форма обратной связи.",
  lv: "Kontaktinformācija un atsauksmju forma.",
  en: "Contact information and feedback form.",
  uz: "Kontakt ma'lumotlari va qayta aloqa formasi.",
  kg: "Байланыш маалыматы жана кайтарым байланыш формасы.",
  ka: "საკონტაქტო ინფორმაცია და უკუკავშირის ფორმა.",
  kz: "Байланыс ақпараты және кері байланыс формасы.",
  tr: "İletişim bilgileri ve geri bildirim formu.",
  fa: "اطلاعات تماس و فرم ارسال پیام.",
  mn: "Холбоо барих мэдээлэл болон буцах холбооны маягт.",
  hy: "Կոնտակտային տեղեկատվություն և հետադարձ կապի ձև։",
};


function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value) ? (value as Lang) : "ru";
}

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  return {
    alternates: pageAlternates(lang, "/contacts"),
    title: `${titles[lang]} — EURO polis`,
    description: descriptions[lang],
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  return <ContactsPage lang={lang} />;

}

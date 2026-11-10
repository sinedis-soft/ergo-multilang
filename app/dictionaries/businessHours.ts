import type { Lang } from "./header";

type HoursDictionary = { title: string; local: string };
export const businessHoursDictionary: Record<Lang, HoursDictionary> = {
  ru: { title: "Часы работы", local: "Время в вашем часовом поясе" },
  lv: { title: "Darba laiks", local: "Laiks jūsu laika joslā" },
  en: { title: "Opening hours", local: "Times in your time zone" },
  uz: { title: "Ish vaqti", local: "Sizning vaqt mintaqangizdagi vaqt" },
  ky: { title: "Иш убактысы", local: "Сиздин убакыт алкагыңыз боюнча" },
  ka: { title: "სამუშაო საათები", local: "დრო თქვენს დროის სარტყელში" },
  kk: { title: "Жұмыс уақыты", local: "Сіздің уақыт белдеуіңіз бойынша" },
  tr: { title: "Çalışma saatleri", local: "Saat diliminize göre saatler" },
  fa: { title: "ساعات کاری", local: "ساعت‌ها در منطقه زمانی شما" },
  mn: { title: "Ажлын цаг", local: "Таны цагийн бүсээр" },
  hy: { title: "Աշխատանքային ժամեր", local: "Ժամերը՝ ձեր ժամային գոտով" },
};

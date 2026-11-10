import type { Lang } from "./header";

type HoursDictionary = { title: string; local: string; source: string; closed: string };
export const businessHoursDictionary: Record<Lang, HoursDictionary> = {
  ru: { title: "Часы работы", local: "Время в вашем часовом поясе", source: "Постоянный график по Минску", closed: "Выходной" },
  lv: { title: "Darba laiks", local: "Laiks jūsu laika joslā", source: "Pastāvīgais darba laiks pēc Minskas laika", closed: "Brīvdiena" },
  en: { title: "Opening hours", local: "Times in your time zone", source: "Fixed schedule in Minsk time", closed: "Closed" },
  uz: { title: "Ish vaqti", local: "Sizning vaqt mintaqangizdagi vaqt", source: "Minsk vaqti bo‘yicha doimiy jadval", closed: "Dam olish kuni" },
  ky: { title: "Иш убактысы", local: "Сиздин убакыт алкагыңыз боюнча", source: "Минск убактысы боюнча туруктуу график", closed: "Эс алуу күнү" },
  ka: { title: "სამუშაო საათები", local: "დრო თქვენს დროის სარტყელში", source: "მუდმივი განრიგი მინსკის დროით", closed: "დასვენების დღე" },
  kk: { title: "Жұмыс уақыты", local: "Сіздің уақыт белдеуіңіз бойынша", source: "Минск уақыты бойынша тұрақты кесте", closed: "Демалыс күні" },
  tr: { title: "Çalışma saatleri", local: "Saat diliminize göre saatler", source: "Minsk saatine göre sabit çalışma saatleri", closed: "Kapalı" },
  fa: { title: "ساعات کاری", local: "ساعت‌ها در منطقه زمانی شما", source: "برنامه ثابت به وقت مینسک", closed: "تعطیل" },
  mn: { title: "Ажлын цаг", local: "Таны цагийн бүсээр", source: "Минскийн цагаар тогтмол хуваарь", closed: "Амарна" },
  hy: { title: "Աշխատանքային ժամեր", local: "Ժամերը՝ ձեր ժամային գոտով", source: "Մշտական գրաֆիկ՝ Մինսկի ժամանակով", closed: "Հանգստյան օր" },
};

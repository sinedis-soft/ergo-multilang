// app/dictionaries/coverage.ts
import type { Lang } from "@/app/dictionaries/header";

type CoverageItem = {
  title: string;
  text: string;
  note?: string;
};

type CoverageDict = {
  title: string;
  mapAlt: string;
  mapCaption?: string;
  items: CoverageItem[];
};

const DICT: Record<Lang, CoverageDict> = {
  ru: {
    title: "Зона покрытия и условия",
    mapAlt: "Страны действия договора трансграничного страхования",
    mapCaption: " ",
    items: [
      {
        title: "Территория действия",
        text:
          "Полис действует в странах, отмеченных на карте. A - Австрия, B - Бельгия, BG - Болгария, CY - Кипр, CZ - Чехия, D - Германия, DK - Дания, E - Испания, EST - Эстония, F - Франция, FIN - Финляндия, GR - Греция, H - Венгрия, HR - Хорватия, I - Италия, IRL - Ирландия, IS - Исландия, L - Люксембург, LT - Литва, LV - Латвия, M - Мальта, N - Норвегия, NL - Нидерланды, P - Португалия, PL - Польша, RO - Румыния, S - Швеция, SK - Словакия, SLO - Словения, CH - Швейцария.",
      },
      {
        title: "Типы транспортных средств",
        text: "Легковые автомобили, мотоциклы, грузовой транспорт, прицепы, автобусы.",
      },
      {
        title: "Срок действия",
        text: "Минимальный срок - 1 месяц. Максимальный - 1 год.",
      },
    ],
  },

  en: {
    title: "Coverage area and terms",
    mapAlt: "Countries covered by the cross-border insurance agreement",
    mapCaption: "Covered countries are highlighted in the brand color",
    items: [
      {
        title: "Territory",
        text:
          "The policy is valid in the countries highlighted on the map. A full list is available upon request.",
        note:
          "Important: terms may vary depending on the vehicle’s country of registration.",
      },
      {
        title: "Vehicle types",
        text: "Passenger cars, motorcycles, trucks, trailers, buses.",
      },
      {
        title: "Validity period",
        text: "Minimum — 1 month. Maximum — 1 year.",
      },
    ],
  },

  lt: {
    title: "Galiojimo teritorija ir sąlygos",
    mapAlt: "Šalys, kuriose galioja tarpvalstybinio draudimo sutartis",
    mapCaption: "Galiojančios šalys pažymėtos firminės spalvos akcentu",
    items: [
      {
        title: "Galiojimo teritorija",
        text:
          "Polisas galioja žemėlapyje pažymėtose šalyse. Visas sąrašas pateikiamas pagal užklausą.",
        note:
          "Svarbu: sąlygos gali skirtis priklausomai nuo transporto priemonės registracijos šalies.",
      },
      {
        title: "Transporto priemonių tipai",
        text: "Lengvieji automobiliai, motociklai, krovininis transportas, priekabos, autobusai.",
      },
      {
        title: "Galiojimo trukmė",
        text: "Minimali trukmė — 1 mėnuo. Maksimali — 1 metai.",
      },
    ],
  },

  uz: {
    title: "Qamrov hududi va shartlar",
    mapAlt: "Transchegaraviy sug‘urta shartnomasi amal qiladigan mamlakatlar",
    mapCaption: "Amal qiladigan mamlakatlar brend rangida ajratib ko‘rsatilgan",
    items: [
      {
        title: "Amal qilish hududi",
        text:
          "Polis xaritada belgilangan mamlakatlarda amal qiladi. To‘liq ro‘yxat so‘rov bo‘yicha taqdim etiladi.",
        note:
          "Muhim: shartlar transport vositasi ro‘yxatdan o‘tgan mamlakatga qarab farq qilishi mumkin.",
      },
      {
        title: "Transport vositalari turlari",
        text: "Yengil avtomobillar, motosikllar, yuk transporti, tirkamalar, avtobuslar.",
      },
      {
        title: "Amal qilish muddati",
        text: "Minimal — 1 oy. Maksimal — 1 yil.",
      },
    ],
  },

  kg: {
    title: "Камтуу аймагы жана шарттар",
    mapAlt: "Трансчек аралык камсыздандыруу келишими жарактуу өлкөлөр",
    mapCaption: "Жарактуу өлкөлөр фирмалык түс менен белгиленген",
    items: [
      {
        title: "Жарактуулук аймагы",
        text:
          "Полис картада белгиленген өлкөлөрдө жарактуу. Толук тизме суроо-талап боюнча берилет.",
        note:
          "Маанилүү: шарттар унаанын катталган өлкөсүнө жараша айырмаланышы мүмкүн.",
      },
      {
        title: "Транспорт каражаттарынын түрлөрү",
        text: "Жеңил автоунаалар, мотоциклдер, жүк транспорту, чиркегичтер, автобустар.",
      },
      {
        title: "Жарактуулук мөөнөтү",
        text: "Минималдуу — 1 ай. Максималдуу — 1 жыл.",
      },
    ],
  },
};

export function getCoverageDictionary(lang: Lang): CoverageDict {
  return DICT[lang] ?? DICT.ru;
}
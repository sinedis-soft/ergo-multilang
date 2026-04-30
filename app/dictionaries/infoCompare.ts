// app/dictionaries/infoCompare.ts
import type { Lang } from "@/app/dictionaries/header";

export interface InfoCompareDictionary {
  kicker: string;
  title: string;

  leftBlocks: Array<{
    strong: string;
    text: string;
  }>;

  rightTitle: string;

  rows: Array<{
    title: string;
    text: string;
  }>;

  note: string;
}

export const infoCompareDictionary: Record<Lang, InfoCompareDictionary> = {
  ru: {
    kicker: "ТЕРМИНЫ",
    title: "Договор трансграничного страхования ≠ Зелёная карта",

    leftBlocks: [
      {
        strong: "Договор трансграничного страхования",
        text:
          "— это полис гражданской ответственности, который оформляется при въезде в ЕС в отношении транспортных средств, зарегистрированных  в странах не входящих в Европейское экономическое пространство, если у вас нет действующей «Зелёной карты». Полис действует ограниченный срок и только в указанных странах.",
      },
      {
        strong: "Зелёная карта",
        text:
          "— международный полис ОС, который вы оформляете в стране регистрации автомобиля до выезда и используете в странах — участниках системы «Зелёная карта».",
      },
    ],

    rightTitle: "Что нужно именно вам?",

    rows: [
      {
        title: "Зелёная карта",
        text:
          "У вас есть возможность оформить полис Зеленой карты дома, и страна въезда принимает «Зелёную карту».",
      },
      {
        title: "Договор трансграничного страхования",
        text:
          "Вы въезжаете в ЕС без действующей «Зелёной карты», а автомобиль зарегистрирован вне Европейского экономического пространства.",
      },
      {
        title: "Наш сервис",
        text:
          "Мы помогаем дистанционно оформить Договор трансграничного страхования для въезда, например, в Латвию и другие страны ЕС.",
      },
    ],

    note:
      "Если сомневаетесь, что вам нужно — укажите маршрут и страну регистрации в заявке. Мы подскажем, подойдёт ли «Зелёная карта» или потребуется пограничное страхование.",
  },

  // Временно fallback на RU
  lv: undefined as unknown as InfoCompareDictionary,
  en: undefined as unknown as InfoCompareDictionary,
  uz: undefined as unknown as InfoCompareDictionary,
  kg: undefined as unknown as InfoCompareDictionary,
};

export function getInfoCompareDictionary(lang: Lang) {
  const dict = infoCompareDictionary[lang];
  return dict ? dict : infoCompareDictionary.ru;
}
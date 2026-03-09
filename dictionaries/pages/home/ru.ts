import type { HomePageDictionary } from "@/dictionaries/types";

export const homeRu: HomePageDictionary = {
  hero: {
    badge: "Онлайн-оформление",
    title: "Трансграничное страхование для поездок в ЕС",
    description: "Рассчитайте стоимость и отправьте заявку в несколько шагов.",
    primaryCta: "Оставить заявку",
    secondaryCta: "Узнать условия",
  },
  sections: {
    processTitle: "Как это работает",
    processDescription: "Прозрачный процесс без лишней бюрократии.",
    processItems: [
      { title: "Заявка", description: "Заполняете форму на сайте." },
      { title: "Проверка", description: "Мы проверяем данные и покрытие." },
      { title: "Полис", description: "Получаете подтверждение и полис." },
    ],
  },
};

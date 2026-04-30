import type { Lang } from "@/app/dictionaries/header";

export interface AboutDictionary {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  cards: Array<{ title: string; text: string }>;
  company: {
    title: string;
    lines: string[];
    note: string;
  };
  contact: {
    title: string;
    desc: string;
  };
}

const RU: AboutDictionary = {
  seo: {
    title: "О нас — EURO polis",
    description: "Информация о компании, юридические данные и форма обратной связи.",
  },
  hero: {
    title: "Лицензированный страховой брокер",
    subtitle: "Работаем прозрачно, по правилам и с понятными условиями для клиента.",
  },
  cards: [
    {
      title: "Кто мы и чем полезны",
      text: "Помогаем оформить страхование для международных поездок и перевозок с учетом маршрута, сроков и требований страны въезда.",
    },
    {
      title: "Статус и правовая основа",
      text: "Работаем как страховой брокер в рамках действующего законодательства и раскрываем обязательную информацию о компании.",
    },
    {
      title: "Прозрачные условия",
      text: "До оформления обсуждаем ключевые параметры: объект страхования, период действия, территорию, лимиты и исключения.",
    },
    {
      title: "Процесс от заявки до полиса",
      text: "Получение данных → уточнение деталей → согласование условий → оплата → выдача полиса и инструкции.",
    },
  ],
  company: {
    title: "Общество с ограниченной ответственностью «EURO polis»",
    lines: [
      "Идентификационный номер: 426258390",
      "Дата регистрации: 08.06.2023",
      "Регистрационный орган: Служба государственного страхового надзора Грузии",
      "Юридический адрес: Грузия, г. Мцхета, ул. Мухрани, д. 26, кв. 5",
      "Телефон: +995 596 97 03 03",
      "E-mail: info@euro-polis.ge",
    ],
    note: "Если вам нужно оформить страхование для международной поездки или перевозки, отправьте запрос — мы уточним условия и перечень документов.",
  },
  contact: {
    title: "Напишите нам сообщение",
    desc: "Ответим по заявке и подскажем оптимальный вариант оформления.",
  },
};

export const aboutDictionary: Record<Lang, AboutDictionary> = {
  ru: RU,
  lt: RU,
  en: RU,
  uz: RU,
  kg: RU,
};

export function getAboutDictionary(lang: Lang): AboutDictionary {
  return aboutDictionary[lang] ?? RU;
}

// app/dictionaries/calculator.ts
import type { Lang } from "@/app/dictionaries/header";

export type Vehicle = "car" | "van" | "truck" | "trailer" | "special";
export type Term = "30" | "60" | "90" | "180" | "365";

export interface CalculatorDictionary {
  title: string;
  badge: string;

  intro: string;

  fields: {
    vehicle: { label: string; options: Array<{ value: Vehicle; label: string }> };
    term: { label: string; options: Array<{ value: Term; label: string }> };
  };

  button: string;
  resultTitle: string;
  resultHint: string;
  note: string;
}

export const calculatorDictionary: Record<Lang, CalculatorDictionary> = {
  ru: {
    title: "Калькулятор стоимости",
    badge: "~ 1 минута",
    intro: "Выберите срок страхования и тип ТС.",

    fields: {
      vehicle: {
        label: "Тип ТС",
        options: [
          { value: "car", label: "Легковые" },
          { value: "van", label: "Автобусы" },
          { value: "truck", label: "Грузовые" },
          { value: "trailer", label: "Прицепы" },
          { value: "special", label: "Спецтехника" },
        ],
      },
      term: {
        label: "Срок страхования",
        options: [
          { value: "30", label: "1 месяц" },
          { value: "60", label: "2 месяца" },
          { value: "90", label: "3 месяца" },
          { value: "180", label: "6 месяцев" },
          { value: "365", label: "12 месяцев" },
        ],
      },
    },

    button: "Рассчитать",
    resultTitle: "Ориентировочная стоимость",
    resultHint: " ",
    note: " ",
  },

  lt: undefined as unknown as CalculatorDictionary,
  en: undefined as unknown as CalculatorDictionary,
  uz: undefined as unknown as CalculatorDictionary,
  kg: undefined as unknown as CalculatorDictionary,
};

export function getCalculatorDictionary(lang: Lang): CalculatorDictionary {
  return calculatorDictionary[lang] ? calculatorDictionary[lang] : calculatorDictionary.ru;
}
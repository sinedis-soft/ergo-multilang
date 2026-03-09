import type { LeadFormDictionary } from "@/dictionaries/types";

export const leadRu: LeadFormDictionary = {
  title: "Заявка на страхование",
  description: "Укажите контактные данные и параметры полиса.",
  fields: {
    fullName: { label: "Имя и фамилия", placeholder: "Введите имя и фамилию" },
    phone: { label: "Телефон", placeholder: "+371..." },
    email: { label: "Email", placeholder: "name@example.com" },
    vehicleType: { label: "Тип ТС", placeholder: "Выберите тип" },
    period: { label: "Срок", placeholder: "Выберите период" },
    message: { label: "Комментарий", placeholder: "Дополнительная информация" },
  },
  consent: {
    terms: "Я принимаю условия использования",
    privacy: "Я согласен(а) с политикой конфиденциальности",
  },
  submit: "Отправить заявку",
};

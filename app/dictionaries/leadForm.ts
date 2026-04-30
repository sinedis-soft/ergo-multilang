// app/dictionaries/leadForm.ts
import type { Lang } from "@/app/dictionaries/header";

export type LeadFormDictionary = {
  title: string;
  intro: string;

  notSelected: string;
  submit: string;

  fileForbidden: string;

  statusSending: string;
  statusError: string;
  statusSuccess: string;

  contact: {
    legend: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  };

  policyholder: {
    companyCheckbox: string;

    individualTitle: string;
    birthDate: string;

    addressTitle: string;
    addressPlaceholder: string;
    addressHelp: string;

    companyTitle: string;
    companyInn: string;
    ceoFullName: string;
    ceoTitle: string;
  };

  policy: {
    legend: string;
    countryFrom: string;
    vehicleType: string;
    startDate: string;
    period: string;

    vehiclePlate: string;
    docsLabel: string;
    docsHint: string;

    addVehicle: string;
    removeVehicle: string;
    vehicleBlockTitle: string;

    options: {
      countriesFrom: Array<{ value: string; label: string }>;
      vehicleTypes: Array<{ value: string; label: string }>;
      periods: Array<{ value: string; label: string }>;
    };
  };
};

const ru: LeadFormDictionary = {
  title: "Заявка на покупку полиса",
  intro: "Заполните данные. Мы подготовим полис и пришлём реквизиты на оплату.",

  notSelected: "Не выбрано",
  submit: "Отправить заявку",

  fileForbidden: "недопустим (архив, аудио или видео).",

  statusSending: "Отправка…",
  statusError: "Ошибка при отправке заявки. Попробуйте позже.",
  statusSuccess: "Заявка отправлена. Мы свяжемся с вами.",

  contact: {
    legend: "Контактные данные",
    firstName: "Имя",
    lastName: "Фамилия",
    phone: "Телефон (с кодом страны)",
    email: "E-mail",
  },

  policyholder: {
    companyCheckbox: "Оформить на юридическое лицо",

    individualTitle: "Данные страхователя (физическое лицо)",
    birthDate: "Дата рождения",

    addressTitle: "Адрес регистрации",
    addressPlaceholder: "Страна, город, улица, дом, квартира (если есть)",
    addressHelp: "Укажите адрес одной строкой.",

    companyTitle: "Данные страхователя (юридическое лицо)",
    companyInn: "ИНН компании",
    ceoFullName: "ФИО руководителя",
    ceoTitle: "Должность руководителя",
  },

  policy: {
    legend: "Данные для расчёта и оформления",
    countryFrom: "Страна регистрации авто",
    vehicleType: "Тип ТС",
    startDate: "Дата начала",
    period: "Срок",

    vehiclePlate: "Госномер",
    docsLabel: "Техпаспорт (фото или PDF)",
    docsHint: "Можно прикрепить несколько файлов.",

    addVehicle: "Добавить ТС",
    removeVehicle: "Удалить",
    vehicleBlockTitle: "Транспортное средство",

    options: {
      countriesFrom: [
        { value: "KZ", label: "Казахстан" },
        { value: "UA", label: "Украина" },
        { value: "GE", label: "Грузия" },
        { value: "UZ", label: "Узбекистан" },
        { value: "KG", label: "Кыргызстан" },
        { value: "MD", label: "Молдова" },
        { value: "OTHER", label: "Другая" },
      ],
      vehicleTypes: [
        { value: "car", label: "Легковое" },
        { value: "truck", label: "Грузовое" },
        { value: "bus", label: "Автобус" },
        { value: "moto", label: "Мотоцикл" },
        { value: "trailer", label: "Прицеп" },
        { value: "special", label: "Спецтехника" },
      ],
      periods: [
        { value: "30", label: "30 дней" },
        { value: "90", label: "90 дней" },
        { value: "180", label: "6 месяцев" },
        { value: "365", label: "12 месяцев" },
      ],
    },
  },
};

const en: LeadFormDictionary = {
  title: "Policy purchase request",
  intro: "Fill in the details. We will prepare the policy and send payment details.",

  notSelected: "Not selected",
  submit: "Send request",

  fileForbidden: "is not allowed (archive, audio or video).",

  statusSending: "Sending…",
  statusError: "Failed to send. Please try again later.",
  statusSuccess: "Request sent. We will contact you.",

  contact: {
    legend: "Contact details",
    firstName: "First name",
    lastName: "Last name",
    phone: "Phone (with country code)",
    email: "E-mail",
  },

  policyholder: {
    companyCheckbox: "Issue for a legal entity",

    individualTitle: "Policyholder details (individual)",
    birthDate: "Date of birth",

    addressTitle: "Registered address",
    addressPlaceholder: "Country, city, street, house, apartment (if any)",
    addressHelp: "Enter the full address in one line.",

    companyTitle: "Policyholder details (company)",
    companyInn: "Company tax ID",
    ceoFullName: "CEO full name",
    ceoTitle: "CEO position",
  },

  policy: {
    legend: "Details for quote and issuance",
    countryFrom: "Vehicle registration country",
    vehicleType: "Vehicle type",
    startDate: "Start date",
    period: "Period",

    vehiclePlate: "Plate number",
    docsLabel: "Registration certificate (photo or PDF)",
    docsHint: "You can attach multiple files.",

    addVehicle: "Add vehicle",
    removeVehicle: "Remove",
    vehicleBlockTitle: "Vehicle",

    options: {
      countriesFrom: [
        { value: "KZ", label: "Kazakhstan" },
        { value: "UA", label: "Ukraine" },
        { value: "GE", label: "Georgia" },
        { value: "UZ", label: "Uzbekistan" },
        { value: "KG", label: "Kyrgyzstan" },
        { value: "MD", label: "Moldova" },
        { value: "OTHER", label: "Other" },
      ],
      vehicleTypes: [
        { value: "car", label: "Passenger car" },
        { value: "truck", label: "Truck" },
        { value: "bus", label: "Bus" },
        { value: "moto", label: "Motorcycle" },
        { value: "trailer", label: "Trailer" },
        { value: "special", label: "Special vehicle" },
      ],
      periods: [
        { value: "30", label: "30 days" },
        { value: "90", label: "90 days" },
        { value: "180", label: "6 months" },
        { value: "365", label: "12 months" },
      ],
    },
  },
};

// temporary
const lv: LeadFormDictionary = { ...en, title: "Draudimo paraiška" };
const uz: LeadFormDictionary = { ...en, title: "Polis uchun ariza" };
const kg: LeadFormDictionary = { ...en, title: "Полиске арыз" };

export function getLeadFormDictionary(lang: Lang): LeadFormDictionary {
  if (lang === "ru") return ru;
  if (lang === "lv") return lv;
  if (lang === "uz") return uz;
  if (lang === "kg") return kg;
  return en;
}
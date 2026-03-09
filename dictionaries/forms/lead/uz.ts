import type { LeadFormDictionary } from "@/dictionaries/types";

export const leadUz: LeadFormDictionary = {
  title: "Sug'urta arizasi",
  description: "Aloqa ma'lumotlari va polis parametrlarini kiriting.",
  fields: {
    fullName: { label: "Ism va familiya", placeholder: "Ism va familiyani kiriting" },
    phone: { label: "Telefon", placeholder: "+371..." },
    email: { label: "Email", placeholder: "name@example.com" },
    vehicleType: { label: "Transport turi", placeholder: "Turni tanlang" },
    period: { label: "Muddat", placeholder: "Muddatni tanlang" },
    message: { label: "Izoh", placeholder: "Qo'shimcha ma'lumot" },
  },
  consent: {
    terms: "Foydalanish shartlarini qabul qilaman",
    privacy: "Maxfiylik siyosatiga roziman",
  },
  submit: "Ariza yuborish",
};

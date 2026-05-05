import type { Lang } from "@/app/dictionaries/header";

export type ContactFeedbackFormDictionary = {
  title: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  comment: string;
  submit: string;
  sending: string;
  ok: string;
  error: string;
};

const ru: ContactFeedbackFormDictionary = {
  title: "Форма обратной связи",
  firstName: "Имя",
  lastName: "Фамилия",
  phone: "Телефон",
  email: "E-mail",
  comment: "Комментарий",
  submit: "Отправить",
  sending: "Отправка...",
  ok: "Сообщение отправлено. Мы скоро свяжемся с вами.",
  error: "Не удалось отправить форму. Попробуйте позже.",
};

const lv: ContactFeedbackFormDictionary = {
  title: "Atgriezeniskās saites forma",
  firstName: "Vārds",
  lastName: "Uzvārds",
  phone: "Tālrunis",
  email: "E-pasts",
  comment: "Komentārs",
  submit: "Nosūtīt",
  sending: "Nosūtīšana...",
  ok: "Ziņojums nosūtīts. Drīzumā ar jums sazināsimies.",
  error: "Neizdevās nosūtīt formu. Mēģiniet vēlāk.",
};

const en: ContactFeedbackFormDictionary = {
  title: "Feedback form",
  firstName: "First name",
  lastName: "Last name",
  phone: "Phone",
  email: "E-mail",
  comment: "Comment",
  submit: "Send",
  sending: "Sending...",
  ok: "Message sent. We will contact you soon.",
  error: "Failed to send the form. Try again later.",
};

const uz: ContactFeedbackFormDictionary = {
  title: "Qayta aloqa formasi",
  firstName: "Ism",
  lastName: "Familiya",
  phone: "Telefon",
  email: "E-mail",
  comment: "Izoh",
  submit: "Yuborish",
  sending: "Yuborilmoqda...",
  ok: "Xabar yuborildi. Tez orada siz bilan bog‘lanamiz.",
  error: "Formani yuborib bo‘lmadi. Keyinroq urinib ko‘ring.",
};

const kg: ContactFeedbackFormDictionary = {
  title: "Кайтарым байланыш формасы",
  firstName: "Аты",
  lastName: "Фамилиясы",
  phone: "Телефон",
  email: "E-mail",
  comment: "Комментарий",
  submit: "Жөнөтүү",
  sending: "Жөнөтүлүүдө...",
  ok: "Билдирүү жөнөтүлдү. Жакында сиз менен байланышабыз.",
  error: "Форманы жөнөтүү мүмкүн болгон жок. Кийинчерээк кайра аракет кылыңыз.",
};

const ka: ContactFeedbackFormDictionary = {
  title: "უკუკავშირის ფორმა",
  firstName: "სახელი",
  lastName: "გვარი",
  phone: "ტელეფონი",
  email: "ელ-ფოსტა",
  comment: "კომენტარი",
  submit: "გაგზავნა",
  sending: "იგზავნება...",
  ok: "შეტყობინება გაგზავნილია. მალე დაგიკავშირდებით.",
  error: "ფორმის გაგზავნა ვერ მოხერხდა. სცადეთ მოგვიანებით.",
};

const kz: ContactFeedbackFormDictionary = {
  title: "Кері байланыс формасы",
  firstName: "Аты",
  lastName: "Тегі",
  phone: "Телефон",
  email: "E-mail",
  comment: "Пікір",
  submit: "Жіберу",
  sending: "Жіберілуде...",
  ok: "Хабарлама жіберілді. Жақын уақытта сізбен байланысамыз.",
  error: "Форманы жіберу мүмкін болмады. Кейінірек қайталап көріңіз.",
};

const tr: ContactFeedbackFormDictionary = {
  title: "İletişim formu",
  firstName: "Ad",
  lastName: "Soyad",
  phone: "Telefon",
  email: "E-posta",
  comment: "Mesaj",
  submit: "Gönder",
  sending: "Gönderiliyor...",
  ok: "Mesaj gönderildi. Kısa süre içinde sizinle iletişime geçeceğiz.",
  error: "Form gönderilemedi. Lütfen daha sonra tekrar deneyin.",
};

const fa: ContactFeedbackFormDictionary = {
  title: "فرم تماس",
  firstName: "نام",
  lastName: "نام خانوادگی",
  phone: "تلفن",
  email: "ایمیل",
  comment: "پیام",
  submit: "ارسال",
  sending: "در حال ارسال...",
  ok: "پیام ارسال شد. به‌زودی با شما تماس می‌گیریم.",
  error: "ارسال فرم انجام نشد. لطفاً بعداً دوباره تلاش کنید.",
};

const mn: ContactFeedbackFormDictionary = {
  title: "Буцах холбооны маягт",
  firstName: "Нэр",
  lastName: "Овог",
  phone: "Утас",
  email: "И-мэйл",
  comment: "Сэтгэгдэл",
  submit: "Илгээх",
  sending: "Илгээж байна...",
  ok: "Мессеж илгээгдлээ. Бид удахгүй тантай холбогдоно.",
  error: "Маягтыг илгээж чадсангүй. Дараа дахин оролдоно уу.",
};

const hy: ContactFeedbackFormDictionary = {
  title: "Հետադարձ կապի ձև",
  firstName: "Անուն",
  lastName: "Ազգանուն",
  phone: "Հեռախոս",
  email: "Էլ. փոստ",
  comment: "Մեկնաբանություն",
  submit: "Ուղարկել",
  sending: "Ուղարկվում է...",
  ok: "Հաղորդագրությունը ուղարկվել է։ Մենք շուտով կկապվենք ձեզ հետ։",
  error: "Չհաջողվեց ուղարկել ձևը։ Փորձեք ավելի ուշ։",
};

const dictionaries: Partial<Record<Lang, ContactFeedbackFormDictionary>> = {
  ru,
  lv,
  en,
  uz,
  kg,
  ka,
  kz,
  tr,
  fa,
  mn,
  hy,
};

export function getContactFeedbackFormDictionary(
  lang: Lang
): ContactFeedbackFormDictionary {
  return dictionaries[lang] ?? ru;
}
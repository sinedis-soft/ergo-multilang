// app/dictionaries/footer.ts

import type { Lang } from "@/app/dictionaries/header";

export type FooterDictionary = {
  company: string;
  about: string;
  contacts: string;
  contactsLink: string;
  more: string;
  rules: string;
  documents: string;
  copyright: string;
  cookiePolicy: string;
  privacyPolicy: string;
};

const ru: FooterDictionary = {
  company: "О компании ERGO",
  about: "О нас",
  contacts: "Контакты",
  contactsLink: "Контакты и офисы",
  more: "Дополнительно",
  rules: "Правила",
  documents: "Документы с информацией о продукте",
  copyright: "© 2026 EURO polis",
  cookiePolicy: "Политика использования файлов cookie",
  privacyPolicy: "Политика конфиденциальности",
};

const lv: FooterDictionary = {
  company: "Par ERGO",
  about: "Par mums",
  contacts: "Kontakti",
  contactsLink: "Kontakti un biroji",
  more: "Papildus",
  rules: "Noteikumi",
  documents: "Dokumenti ar informāciju par produktu",
  copyright: "© 2026 EURO polis",
  cookiePolicy: "Sīkdatņu politika",
  privacyPolicy: "Privātuma politika",
};

const en: FooterDictionary = {
  company: "About ERGO",
  about: "About us",
  contacts: "Contacts",
  contactsLink: "Contacts and offices",
  more: "More",
  rules: "Terms and conditions",
  documents: "Product information documents",
  copyright: "© 2026 EURO polis",
  cookiePolicy: "Cookie Policy",
  privacyPolicy: "Privacy Policy",
};

const uz: FooterDictionary = {
  company: "ERGO kompaniyasi haqida",
  about: "Biz haqimizda",
  contacts: "Aloqa",
  contactsLink: "Aloqa ma’lumotlari va ofislar",
  more: "Qo‘shimcha",
  rules: "Qoidalar",
  documents: "Mahsulot bo‘yicha ma’lumot hujjatlari",
  copyright: "© 2026 EURO polis",
  cookiePolicy: "Cookie fayllardan foydalanish siyosati",
  privacyPolicy: "Maxfiylik siyosati",
};

const kg: FooterDictionary = {
  company: "ERGO компаниясы жөнүндө",
  about: "Биз жөнүндө",
  contacts: "Байланыштар",
  contactsLink: "Байланыштар жана кеңселер",
  more: "Кошумча",
  rules: "Эрежелер",
  documents: "Продукт тууралуу маалымат камтылган документтер",
  copyright: "© 2026 EURO polis",
  cookiePolicy: "Cookie файлдарын колдонуу саясаты",
  privacyPolicy: "Купуялуулук саясаты",
};

const ka: FooterDictionary = {
  company: "ERGO-ს შესახებ",
  about: "ჩვენ შესახებ",
  contacts: "კონტაქტები",
  contactsLink: "კონტაქტები და ოფისები",
  more: "დამატებითი ინფორმაცია",
  rules: "წესები",
  documents: "დოკუმენტები პროდუქტის შესახებ ინფორმაციით",
  copyright: "© 2026 EURO polis",
  cookiePolicy: "cookie-ის გამოყენების პოლიტიკა",
  privacyPolicy: "კონფიდენციალურობის პოლიტიკა",
};

const kz: FooterDictionary = {
  company: "ERGO компаниясы туралы",
  about: "Біз туралы",
  contacts: "Байланыс",
  contactsLink: "Байланыс және кеңселер",
  more: "Қосымша",
  rules: "Ережелер",
  documents: "Өнім туралы ақпараттық құжаттар",
  copyright: "© 2026 EURO polis",
  cookiePolicy: "Cookie пайдалану саясаты",
  privacyPolicy: "Құпиялылық саясаты",
};

const tr: FooterDictionary = {
  company: "ERGO hakkında",
  about: "Hakkımızda",
  contacts: "İletişim",
  contactsLink: "İletişim ve ofisler",
  more: "Diğer",
  rules: "Kurallar",
  documents: "Ürünle ilgili bilgilendirme belgeleri",
  copyright: "© 2026 EURO polis",
  cookiePolicy: "Çerez politikası",
  privacyPolicy: "Gizlilik politikası",
};

const fa: FooterDictionary = {
  company: "درباره شرکت ERGO",
  about: "درباره ما",
  contacts: "تماس با ما",
  contactsLink: "اطلاعات تماس و دفاتر",
  more: "اطلاعات بیشتر",
  rules: "قوانین",
  documents: "اسناد مربوط به اطلاعات محصول",
  copyright: "© 2026 EURO polis",
  cookiePolicy: "سیاست استفاده از کوکی‌ها",
  privacyPolicy: "سیاست حفظ حریم خصوصی",
};

const mn: FooterDictionary = {
  company: "ERGO компанийн тухай",
  about: "Бидний тухай",
  contacts: "Холбоо барих",
  contactsLink: "Холбоо барих ба оффисууд",
  more: "Нэмэлт",
  rules: "Дүрэм",
  documents: "Бүтээгдэхүүний талаарх мэдээллийн баримт бичгүүд",
  copyright: "© 2026 EURO polis",
  cookiePolicy: "Cookie ашиглах бодлого",
  privacyPolicy: "Нууцлалын бодлого",
};

const hy: FooterDictionary = {
  company: "ERGO ընկերության մասին",
  about: "Մեր մասին",
  contacts: "Կոնտակտներ",
  contactsLink: "Կոնտակտներ և գրասենյակներ",
  more: "Լրացուցիչ",
  rules: "Կանոններ",
  documents: "Ապրանքի վերաբերյալ տեղեկատվական փաստաթղթեր",
  copyright: "© 2026 EURO polis",
  cookiePolicy: "Cookie-ների օգտագործման քաղաքականություն",
  privacyPolicy: "Գաղտնիության քաղաքականություն",
};

const dictionaries: Record<Lang, FooterDictionary> = {
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

export function getFooterDictionary(lang: Lang): FooterDictionary {
  return dictionaries[lang] ?? en;
}
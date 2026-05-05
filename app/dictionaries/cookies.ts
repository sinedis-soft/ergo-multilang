import type { Lang } from "@/app/dictionaries/header";

export type CookieCategoryKey = "necessary" | "functional" | "marketing";

export type CookieCategory = {
  key: CookieCategoryKey;
  title: string;
  description: string;
  locked?: boolean;
};

export type CookieDictionary = {
  manageBtn: string;
  modalTitle: string;
  modalText: string;
  categoriesTitle: string;
  categories: CookieCategory[];
  policyText: string;
  policyLabel: string;
  policyHref: string;
  saveBtn: string;
  acceptAllBtn: string;
  rejectAllBtn: string;
  closeAria: string;
};

const RU: CookieDictionary = {
  manageBtn: "Cookie",
  modalTitle: "Настройки cookie",
  modalText: "Выберите, какие cookie можно использовать. Необходимые — всегда включены.",
  categoriesTitle: "Категории",
  categories: [
    { key: "necessary", title: "Необходимые", description: "Нужны для работы сайта и безопасности. Отключить нельзя.", locked: true },
    { key: "functional", title: "Функциональные", description: "Запоминают настройки интерфейса и помогают корректной работе отдельных функций." },
    { key: "marketing", title: "Аналитические", description: "Помогают через анонимную статистику улучшать удобство использования сайта, совершенствовать продукты и услуги." },
  ],
  policyText: "Подробнее — в",
  policyLabel: "политике cookie",
  policyHref: "/cookiepolicy",
  saveBtn: "Сохранить",
  acceptAllBtn: "Принять все",
  rejectAllBtn: "Отклонить необязательные",
  closeAria: "Закрыть",
};

const LV: CookieDictionary = {
  manageBtn: "Sīkdatnes",
  modalTitle: "Sīkdatņu iestatījumi",
  modalText: "Izvēlieties, kuras sīkdatnes drīkst izmantot. Nepieciešamās sīkdatnes vienmēr ir aktīvas.",
  categoriesTitle: "Kategorijas",
  categories: [
    { key: "necessary", title: "Nepieciešamās", description: "Nepieciešamas vietnes darbībai un drošībai. Tās nevar atslēgt.", locked: true },
    { key: "functional", title: "Funkcionālās", description: "Saglabā lietotāja iestatījumus un nodrošina atsevišķu funkciju korektu darbību." },
    { key: "marketing", title: "Analītiskās", description: "Palīdz, izmantojot anonīmu statistiku, uzlabot vietnes lietošanas ērtumu, kā arī pilnveidot produktus un pakalpojumus." },
  ],
  policyText: "Plašāk —",
  policyLabel: "sīkdatņu politikā",
  policyHref: "/cookiepolicy",
  saveBtn: "Saglabāt",
  acceptAllBtn: "Pieņemt visas",
  rejectAllBtn: "Noraidīt nebūtiskās",
  closeAria: "Aizvērt",
};

const EN: CookieDictionary = {
  manageBtn: "Cookies",
  modalTitle: "Cookie settings",
  modalText: "Choose which cookies you allow us to use. Necessary cookies are always enabled.",
  categoriesTitle: "Categories",
  categories: [
    {
      key: "necessary",
      title: "Necessary",
      description: "Required for the website to function properly and for security purposes. Cannot be disabled.",
      locked: true,
    },
    {
      key: "functional",
      title: "Functional",
      description: "Remember your preferences and support certain website features.",
    },
    {
      key: "marketing",
      title: "Analytics",
      description: "Help us improve the website, products, and services through anonymous usage statistics.",
    },
  ],
  policyText: "Learn more in the",
  policyLabel: "Cookie Policy",
  policyHref: "/cookiepolicy",
  saveBtn: "Save",
  acceptAllBtn: "Accept all",
  rejectAllBtn: "Reject non-essential",
  closeAria: "Close",
};

const UZ: CookieDictionary = {
  manageBtn: "Cookie",
  modalTitle: "Cookie sozlamalari",
  modalText: "Qaysi cookie fayllardan foydalanishga ruxsat berishni tanlang. Zarur cookie fayllar har doim yoqilgan bo‘ladi.",
  categoriesTitle: "Toifalar",
  categories: [
    {
      key: "necessary",
      title: "Zarur",
      description: "Saytning ishlashi va xavfsizligi uchun kerak. O‘chirib bo‘lmaydi.",
      locked: true
    },
    {
      key: "functional",
      title: "Funktsional",
      description: "Interfeys sozlamalarini eslab qoladi va ayrim funksiyalarning to‘g‘ri ishlashiga yordam beradi."
    },
    {
      key: "marketing",
      title: "Analitik",
      description: "Anonim statistika orqali sayt qulayligini oshirishga, mahsulot va xizmatlarni takomillashtirishga yordam beradi."
    },
  ],
  policyText: "Batafsil —",
  policyLabel: "cookie siyosatida",
  policyHref: "/cookiepolicy",
  saveBtn: "Saqlash",
  acceptAllBtn: "Barchasini qabul qilish",
  rejectAllBtn: "Ixtiyoriylarini rad etish",
  closeAria: "Yopish",
};

const KY: CookieDictionary = {
  manageBtn: "Cookie",
  modalTitle: "Cookie жөндөөлөрү",
  modalText: "Кайсы cookie колдонууга уруксат берериңизди тандаңыз. Зарыл болгон cookie — дайыма иштетилген.",
  categoriesTitle: "Категориялар",
  categories: [
    {
      key: "necessary",
      title: "Зарыл",
      description: "Сайттын иштеши жана коопсуздугу үчүн керек. Өчүрүүгө болбойт.",
      locked: true,
    },
    {
      key: "functional",
      title: "Функционалдык",
      description: "Интерфейс жөндөөлөрүн сактайт жана айрым функциялардын туура иштешине жардам берет.",
    },
    {
      key: "marketing",
      title: "Аналитикалык",
      description: "Анонимдүү статистика аркылуу сайтты колдонуу ыңгайлуулугун жакшыртууга, ошондой эле продукттарды жана кызматтарды өнүктүрүүгө жардам берет.",
    },
  ],
  policyText: "Толугураак маалымат —",
  policyLabel: "cookie саясаты",
  policyHref: "/cookiepolicy",
  saveBtn: "Сактоо",
  acceptAllBtn: "Баарын кабыл алуу",
  rejectAllBtn: "Милдеттүү эмес cookie’лерди четке кагуу",
  closeAria: "Жабуу",
};

const KA: CookieDictionary = {
  manageBtn: "Cookie",
  modalTitle: "Cookie პარამეტრები",
  modalText: "აირჩიეთ, რომელი cookie-ების გამოყენებას ეთანხმებით. აუცილებელი cookie-ები ყოველთვის ჩართულია.",
  categoriesTitle: "კატეგორიები",
  categories: [
    {
      key: "necessary",
      title: "აუცილებელი",
      description: "საჭიროა საიტის მუშაობისა და უსაფრთხოებისთვის. მათი გამორთვა შეუძლებელია.",
      locked: true,
    },
    {
      key: "functional",
      title: "ფუნქციური",
      description: "იმახსოვრებს ინტერფეისის პარამეტრებს და უზრუნველყოფს ცალკეული ფუნქციების სწორ მუშაობას.",
    },
    {
      key: "marketing",
      title: "ანალიტიკური",
      description: "ანონიმური სტატისტიკის საფუძველზე გვეხმარება საიტის მოხმარების გაუმჯობესებაში და პროდუქტებისა და სერვისების განვითარებაში.",
    },
  ],
  policyText: "დეტალურად —",
  policyLabel: "cookie პოლიტიკაში",
  policyHref: "/cookiepolicy",
  saveBtn: "შენახვა",
  acceptAllBtn: "ყველას მიღება",
  rejectAllBtn: "არასავალდებულოების უარყოფა",
  closeAria: "დახურვა",
};

const KZ: CookieDictionary = {
  manageBtn: "Cookie",
  modalTitle: "Cookie баптаулары",
  modalText: "Қай cookie түрлерін қолдануға болатынын таңдаңыз. Қажеттілері әрқашан қосулы болады.",
  categoriesTitle: "Санаттар",
  categories: [
    {
      key: "necessary",
      title: "Қажетті",
      description: "Сайттың дұрыс жұмыс істеуі мен қауіпсіздігі үшін қажет. Өшіруге болмайды.",
      locked: true,
    },
    {
      key: "functional",
      title: "Функционалдық",
      description: "Интерфейс баптауларын сақтайды және кейбір функциялардың дұрыс жұмыс істеуіне көмектеседі.",
    },
    {
      key: "marketing",
      title: "Аналитикалық",
      description: "Анонимді статистика арқылы сайттың ыңғайлылығын арттыруға, өнімдер мен қызметтерді жетілдіруге көмектеседі.",
    },
  ],
  policyText: "Толығырақ —",
  policyLabel: "cookie саясаты",
  policyHref: "/cookiepolicy",
  saveBtn: "Сақтау",
  acceptAllBtn: "Барлығын қабылдау",
  rejectAllBtn: "Міндетті емес cookie-лерден бас тарту",
  closeAria: "Жабу",
};

const TR: CookieDictionary = {
  manageBtn: "Çerezler",
  modalTitle: "Çerez ayarları",
  modalText: "Hangi çerezlerin kullanılacağını seçin. Zorunlu olanlar her zaman aktiftir.",
  categoriesTitle: "Kategoriler",
  categories: [
    { key: "necessary", title: "Zorunlu", description: "Sitenin çalışması ve güvenliği için gereklidir. Devre dışı bırakılamaz.", locked: true },
    { key: "functional", title: "Fonksiyonel", description: "Arayüz tercihlerini hatırlar ve bazı özelliklerin düzgün çalışmasını sağlar." },
    { key: "marketing", title: "Analitik", description: "Anonim istatistikler aracılığıyla kullanıcı deneyimini iyileştirmeye, ürün ve hizmetleri geliştirmeye yardımcı olur." },
  ],
  policyText: "Daha fazla bilgi için",
  policyLabel: "çerez politikası",
  policyHref: "/cookiepolicy",
  saveBtn: "Kaydet",
  acceptAllBtn: "Tümünü kabul et",
  rejectAllBtn: "Zorunlu olmayanları reddet",
  closeAria: "Kapat",
};

const FA: CookieDictionary = {
  manageBtn: "کوکی‌ها",
  modalTitle: "تنظیمات کوکی",
  modalText: "انتخاب کنید کدام کوکی‌ها استفاده شوند. کوکی‌های ضروری همیشه فعال هستند.",
  categoriesTitle: "دسته‌بندی‌ها",
  categories: [
    {
      key: "necessary",
      title: "ضروری",
      description: "برای عملکرد صحیح سایت و امنیت لازم هستند و امکان غیرفعال‌سازی ندارند.",
      locked: true
    },
    {
      key: "functional",
      title: "عملکردی",
      description: "تنظیمات شما را ذخیره می‌کنند و به اجرای صحیح برخی قابلیت‌ها کمک می‌کنند."
    },
    {
      key: "marketing",
      title: "تحلیلی",
      description: "با استفاده از آمار ناشناس به بهبود تجربه کاربری و توسعه خدمات کمک می‌کنند."
    },
  ],
  policyText: "اطلاعات بیشتر در",
  policyLabel: "سیاست کوکی",
  policyHref: "/cookiepolicy",
  saveBtn: "ذخیره",
  acceptAllBtn: "پذیرفتن همه",
  rejectAllBtn: "رد کوکی‌های غیرضروری",
  closeAria: "بستن",
};

const MN: CookieDictionary = {
  manageBtn: "Cookie",
  modalTitle: "Cookie тохиргоо",
  modalText: "Ямар cookie ашиглахыг сонгоно уу. Заавал шаардлагатай cookie нь үргэлж идэвхтэй байна.",
  categoriesTitle: "Ангиллууд",
  categories: [
    { key: "necessary", title: "Шаардлагатай", description: "Сайтын хэвийн ажиллагаа болон аюулгүй байдалд шаардлагатай. Унтраах боломжгүй.", locked: true },
    { key: "functional", title: "Функциональ", description: "Интерфэйсийн тохиргоог санаж, зарим функцүүдийг зөв ажиллуулахад тусалдаг." },
    { key: "marketing", title: "Аналитик", description: "Аноним статистикийн тусламжтайгаар сайтын ашиглахад хялбар байдлыг сайжруулах, бүтээгдэхүүн үйлчилгээний чанарыг дээшлүүлэхэд ашиглагддаг." },
  ],
  policyText: "Дэлгэрэнгүйг",
  policyLabel: "cookie бодлогоос",
  policyHref: "/cookiepolicy",
  saveBtn: "Хадгалах",
  acceptAllBtn: "Бүгдийг зөвшөөрөх",
  rejectAllBtn: "Шаардлагагүйг татгалзах",
  closeAria: "Хаах",
};

const HY: CookieDictionary = {
  manageBtn: "Cookie-ներ",
  modalTitle: "Cookie-ների կարգավորումներ",
  modalText: "Ընտրեք, թե որ cookie-ներն եք թույլատրում օգտագործել։ Անհրաժեշտները միշտ միացված են։",
  categoriesTitle: "Կատեգորիաներ",
  categories: [
    {
      key: "necessary",
      title: "Անհրաժեշտ",
      description: "Պահանջվում են կայքի աշխատանքի և անվտանգության համար։ Անջատել հնարավոր չէ։",
      locked: true
    },
    {
      key: "functional",
      title: "Ֆունկցիոնալ",
      description: "Հիշում են ինտերֆեյսի կարգավորումները և ապահովում են առանձին ֆունկցիաների ճիշտ աշխատանքը։"
    },
    {
      key: "marketing",
      title: "Վերլուծական",
      description: "Օգնում են անանուն վիճակագրության միջոցով բարելավել կայքի օգտագործման հարմարավետությունը, ինչպես նաև զարգացնել ծառայություններն ու առաջարկները։"
    },
  ],
  policyText: "Ավելին՝",
  policyLabel: "cookie-ների քաղաքականությունում",
  policyHref: "/cookiepolicy",
  saveBtn: "Պահպանել",
  acceptAllBtn: "Ընդունել բոլորը",
  rejectAllBtn: "Մերժել ոչ պարտադիրները",
  closeAria: "Փակել",
};

const COOKIE_DICTIONARY: Record<Lang, CookieDictionary> = { ru: RU, en: EN, lv: LV, uz: UZ, kg: KY, ka: KA, kz:KZ, tr:TR, fa: FA, mn: MN, hy: HY };

export function getCookieDictionary(lang: Lang): CookieDictionary {
  return COOKIE_DICTIONARY[lang] ?? COOKIE_DICTIONARY.ru;
}

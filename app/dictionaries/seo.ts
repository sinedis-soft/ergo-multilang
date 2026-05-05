import type { Lang } from "@/app/dictionaries/header";

export type SeoRouteKey = "home" | "about" | "contacts" | "productInfo" | "rules" | "privacy" | "cookiePolicy";

type RouteSeo = { title: string; description: string };
type SeoDictionary = Record<SeoRouteKey, RouteSeo>;

export const seoDictionary: Record<Lang, SeoDictionary> = {
  ru: {
    home: {
      title: "Green Card и border insurance для грузоперевозчиков",
      description: "Трансграничная MTPL-страховка для международных перевозок: Green Card, border insurance, EU transit для перевозчиков.",
    },
    about: {
      title: "О нас — международное страхование перевозок",
      description: "Латвийское страховое агентство для международных грузоперевозчиков: оформление Green Card и border insurance по странам маршрута.",
    },
    contacts: {
      title: "Контакты — оформить border insurance",
      description: "Свяжитесь с агентом по Green Card и MTPL cross-border для грузоперевозчиков по маршрутам EU и non-EU.",
    },
    productInfo: {
      title: "Продукт и покрытие — Green Card / MTPL cross-border",
      description: "Условия и покрытие трансграничной страховки: Green Card, border insurance, маршруты EU transit и соседние страны.",
    },
    rules: {
      title: "Правила страхования для международных перевозчиков",
      description: "Правила оформления и использования border insurance и Green Card для коммерческих перевозок через границы.",
    },
    privacy: {
      title: "Политика конфиденциальности",
      description: "Как обрабатываются персональные данные клиентов при оформлении международной MTPL-страховки.",
    },
    cookiePolicy: {
      title: "Политика cookies",
      description: "Информация о cookie-файлах и аналитике на сайте оформления трансграничной страховки.",
    },
  },
  lv: {
    home: { title: "Green Card un border insurance kravu pārvadātājiem", description: "Pārrobežu MTPL apdrošināšana starptautiskajiem pārvadājumiem: Green Card, border insurance un EU transit risinājumi." },
    about: { title: "Par mums — starptautisko pārvadājumu apdrošināšana", description: "Latvijas apdrošināšanas aģentūra starptautiskajiem pārvadātājiem: Green Card un border insurance maršrutiem." },
    contacts: { title: "Kontakti — noformēt border insurance", description: "Sazinieties par Green Card un MTPL cross-border noformēšanu kravu pārvadātājiem EU un ārpus EU maršrutos." },
    productInfo: { title: "Produkts un segums — Green Card / MTPL cross-border", description: "Pārrobežu apdrošināšanas nosacījumi un segums: Green Card, border insurance, EU transit un citi maršruti." },
    rules: { title: "Apdrošināšanas noteikumi starptautiskajiem pārvadātājiem", description: "Noteikumi border insurance un Green Card izmantošanai komerciālajos pārvadājumos." },
    privacy: { title: "Privātuma politika", description: "Kā tiek apstrādāti personas dati, noformējot starptautisko MTPL apdrošināšanu." },
    cookiePolicy: { title: "Sīkdatņu politika", description: "Informācija par sīkdatņu izmantošanu un analītiku pārrobežu apdrošināšanas vietnē." },
  },
  en: {
    home: { title: "Green Card & border insurance for freight carriers", description: "Cross-border MTPL insurance for international trucking: Green Card, border insurance, and EU transit coverage." },
    about: { title: "About us — cross-border insurance agency", description: "Latvian insurance agency helping freight carriers with Green Card and border insurance across multiple countries." },
    contacts: { title: "Contact — get border insurance", description: "Request Green Card and MTPL cross-border insurance support for EU and non-EU freight routes." },
    productInfo: { title: "Coverage details — Green Card / MTPL cross-border", description: "Policy scope and terms for cross-border motor liability insurance, including EU transit routes." },
    rules: { title: "Insurance rules for international carriers", description: "Rules and compliance requirements for Green Card and border insurance in commercial transport." },
    privacy: { title: "Privacy policy", description: "How we process personal data for cross-border MTPL insurance applications." },
    cookiePolicy: { title: "Cookie policy", description: "Cookie and analytics information for our cross-border insurance website." },
  },
  uz: { home: { title: "Yuk tashuvchilar uchun Green Card va border insurance", description: "Xalqaro yuk tashuvlari uchun cross-border MTPL: Green Card, border insurance va EU transit qamrovi." }, about: { title: "Biz haqimizda — xalqaro sug'urta agentligi", description: "Latviya sug'urta agentligi xalqaro tashuvchilar uchun Green Card va border insurance xizmatlarini taklif qiladi." }, contacts: { title: "Kontaktlar — border insurance rasmiylashtirish", description: "EU va non-EU yo'nalishlari uchun Green Card va MTPL cross-border bo'yicha bog'laning." }, productInfo: { title: "Qoplama shartlari — Green Card / MTPL cross-border", description: "Transchegaraviy sug'urta qamrovi va shartlari: Green Card, border insurance, EU transit." }, rules: { title: "Xalqaro tashuvchilar uchun sug'urta qoidalari", description: "Tijorat tashuvlarida Green Card va border insurance qo'llash qoidalari." }, privacy: { title: "Maxfiylik siyosati", description: "Cross-border MTPL uchun murojaatlarda shaxsiy ma'lumotlar qanday qayta ishlanadi." }, cookiePolicy: { title: "Cookie siyosati", description: "Saytdagi cookie va analitika foydalanishi haqida ma'lumot." } },
  kg: { home: { title: "Жүк ташуучулар үчүн Green Card жана border insurance", description: "Эл аралык ташуулар үчүн cross-border MTPL камсыздандыруу: Green Card, border insurance жана EU transit." }, about: { title: "Биз жөнүндө — эл аралык камсыздандыруу агенттиги", description: "Латвиялык агенттик эл аралык жүк ташуучуларга Green Card жана border insurance сунуштайт." }, contacts: { title: "Байланыш — border insurance алуу", description: "EU жана non-EU каттамдары үчүн Green Card жана MTPL cross-border боюнча байланышыңыз." }, productInfo: { title: "Камтуу шарттары — Green Card / MTPL cross-border", description: "Трансчек аралык камсыздандыруунун шарттары: Green Card, border insurance, EU transit." }, rules: { title: "Эл аралык ташуучулар үчүн камсыздандыруу эрежелери", description: "Коммерциялык ташууларда Green Card жана border insurance колдонуу эрежелери." }, privacy: { title: "Купуялык саясаты", description: "Cross-border MTPL арыздарында жеке маалыматтарды иштетүү тартиби." }, cookiePolicy: { title: "Cookie саясаты", description: "Сайттагы cookie жана аналитика тууралуу маалымат." } },
  ka: { home: { title: "Green Card და border insurance გადამზიდავებისთვის", description: "საერთაშორისო გადაზიდვებისთვის cross-border MTPL დაზღვევა: Green Card, border insurance და EU transit დაფარვა." }, about: { title: "ჩვენ შესახებ — საერთაშორისო სადაზღვევო სააგენტო", description: "ლატვიური სააგენტო ტვირთგადამზიდავებისთვის: Green Card და border insurance მრავალ ქვეყანაში." }, contacts: { title: "კონტაქტები — border insurance გაფორმება", description: "დაგვიკავშირდით Green Card და MTPL cross-border დაზღვევისათვის EU/non-EU მარშრუტებზე." }, productInfo: { title: "დაფარვა და პირობები — Green Card / MTPL cross-border", description: "ტრანსსასაზღვრო დაზღვევის პირობები: Green Card, border insurance, EU transit." }, rules: { title: "სადაზღვევო წესები საერთაშორისო გადამზიდავებისთვის", description: "Green Card და border insurance გამოყენების წესები კომერციულ გადაზიდვებში." }, privacy: { title: "კონფიდენციალურობის პოლიტიკა", description: "როგორ მუშავდება პერსონალური მონაცემები cross-border MTPL განაცხადებში." }, cookiePolicy: { title: "Cookie პოლიტიკა", description: "ინფორმაცია cookie-ებისა და ანალიტიკის გამოყენებაზე." } },
  kz: { home: { title: "Жүк тасымалдаушыларға Green Card және border insurance", description: "Халықаралық тасымалға арналған cross-border MTPL: Green Card, border insurance және EU transit қамтуы." }, about: { title: "Біз туралы — халықаралық сақтандыру агенттігі", description: "Латвиялық агенттік халықаралық тасымалдаушыларға Green Card және border insurance ұсынады." }, contacts: { title: "Байланыс — border insurance рәсімдеу", description: "EU/non-EU бағыттары бойынша Green Card және MTPL cross-border үшін хабарласыңыз." }, productInfo: { title: "Қамту шарттары — Green Card / MTPL cross-border", description: "Трансшекаралық сақтандыру шарттары: Green Card, border insurance, EU transit." }, rules: { title: "Халықаралық тасымалдаушыларға сақтандыру ережелері", description: "Коммерциялық тасымалда Green Card және border insurance қолдану талаптары." }, privacy: { title: "Құпиялық саясаты", description: "Cross-border MTPL өтінімдері үшін дербес деректер қалай өңделеді." }, cookiePolicy: { title: "Cookie саясаты", description: "Сайттағы cookie және аналитика туралы ақпарат." } },
  tr: { home: { title: "Taşıyıcılar için Green Card ve border insurance", description: "Uluslararası taşımacılık için cross-border MTPL sigortası: Green Card, border insurance ve EU transit kapsamı." }, about: { title: "Hakkımızda — sınır ötesi sigorta acentesi", description: "Letonya merkezli acente, yük taşıyıcıları için Green Card ve border insurance çözümleri sunar." }, contacts: { title: "İletişim — border insurance teklifi alın", description: "EU ve non-EU rotaları için Green Card ve MTPL cross-border desteği için bize ulaşın." }, productInfo: { title: "Teminat ve şartlar — Green Card / MTPL cross-border", description: "Sınır ötesi sigorta kapsamı: Green Card, border insurance, EU transit ve ilgili şartlar." }, rules: { title: "Uluslararası taşıyıcılar için sigorta kuralları", description: "Ticari taşımacılıkta Green Card ve border insurance kullanım kuralları." }, privacy: { title: "Gizlilik politikası", description: "Cross-border MTPL başvurularında kişisel verilerin işlenmesi." }, cookiePolicy: { title: "Çerez politikası", description: "Sitede çerez ve analiz kullanımına ilişkin bilgiler." } },
  fa: { home: { title: "Green Card و border insurance برای حمل‌ونقل بار", description: "بیمه MTPL فرامرزی برای حمل‌ونقل بین‌المللی: Green Card، border insurance و پوشش EU transit." }, about: { title: "درباره ما — آژانس بیمه فرامرزی", description: "آژانس بیمه لتونی برای شرکت‌های حمل‌ونقل: Green Card و border insurance در چند کشور." }, contacts: { title: "تماس — دریافت border insurance", description: "برای Green Card و MTPL cross-border در مسیرهای EU و غیر EU با ما تماس بگیرید." }, productInfo: { title: "جزئیات پوشش — Green Card / MTPL cross-border", description: "شرایط و پوشش بیمه فرامرزی شامل Green Card، border insurance و EU transit." }, rules: { title: "قوانین بیمه برای شرکت‌های حمل‌ونقل بین‌المللی", description: "الزامات استفاده از Green Card و border insurance در حمل‌ونقل تجاری." }, privacy: { title: "حریم خصوصی", description: "نحوه پردازش داده‌های شخصی در درخواست‌های بیمه MTPL فرامرزی." }, cookiePolicy: { title: "سیاست کوکی", description: "اطلاعات مربوط به استفاده از کوکی و تحلیل در سایت." } },
  mn: { home: { title: "Тээвэрлэгчдэд зориулсан Green Card ба border insurance", description: "Олон улсын тээвэрт зориулсан cross-border MTPL даатгал: Green Card, border insurance, EU transit хамгаалалт." }, about: { title: "Бидний тухай — хил дамнасан даатгалын агент", description: "Латвийн агентлаг нь тээвэрлэгчдэд Green Card болон border insurance үйлчилгээ үзүүлдэг." }, contacts: { title: "Холбоо барих — border insurance авах", description: "EU болон non-EU чиглэлд Green Card, MTPL cross-border үйлчилгээ авах бол холбогдоно уу." }, productInfo: { title: "Хамрах хүрээ — Green Card / MTPL cross-border", description: "Хил дамнасан даатгалын нөхцөл: Green Card, border insurance, EU transit." }, rules: { title: "Олон улсын тээвэрлэгчдийн даатгалын журам", description: "Арилжааны тээвэрт Green Card болон border insurance ашиглах журам." }, privacy: { title: "Нууцлалын бодлого", description: "Cross-border MTPL өргөдөлд хувийн мэдээллийг хэрхэн боловсруулах тухай." }, cookiePolicy: { title: "Cookie бодлого", description: "Сайт дахь cookie болон аналитикийн ашиглалтын мэдээлэл." } },
  hy: { home: { title: "Green Card և border insurance բեռնափոխադրողների համար", description: "Միջազգային փոխադրումների համար cross-border MTPL ապահովագրություն՝ Green Card, border insurance և EU transit ծածկույթով։" }, about: { title: "Մեր մասին — սահմանանց ապահովագրական գործակալություն", description: "Լատվիական գործակալություն, որը սպասարկում է բեռնափոխադրողներին Green Card և border insurance ուղղություններով։" }, contacts: { title: "Կոնտակտներ — ձևակերպել border insurance", description: "Կապ հաստատեք Green Card և MTPL cross-border ապահովագրության համար EU/non-EU երթուղիներով։" }, productInfo: { title: "Ծածկույթ և պայմաններ — Green Card / MTPL cross-border", description: "Տրանսսահմանային ապահովագրության ծածկույթն ու պայմանները՝ Green Card, border insurance, EU transit։" }, rules: { title: "Ապահովագրության կանոններ միջազգային փոխադրողների համար", description: "Green Card և border insurance օգտագործման կանոններ կոմերցիոն փոխադրումների համար։" }, privacy: { title: "Գաղտնիության քաղաքականություն", description: "Ինչպես են մշակվում անձնական տվյալները cross-border MTPL հայտերի համար։" }, cookiePolicy: { title: "Cookie քաղաքականություն", description: "Տեղեկություն cookie-ների և վերլուծության օգտագործման մասին կայքում։" } },
};

export function getSeoDictionary(lang: Lang) {
  return seoDictionary[lang];
}
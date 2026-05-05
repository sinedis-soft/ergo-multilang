import type { Lang } from "@/app/dictionaries/header";

export type SeoRouteKey = "home" | "about" | "contacts" | "productInfo" | "rules" | "privacy" | "cookiePolicy";

type RouteSeo = { title: string; description: string };
type SeoDictionary = Record<SeoRouteKey, RouteSeo>;

export const seoDictionary: Record<Lang, SeoDictionary> = {
  ru: {
    home: {
      title: "Border insurance для грузоперевозчиков и физических лиц",
      description: "Трансграничная MTPL-страховка для международных перевозок: Green Card, border insurance, Зеленая карта в Евросоюз.",
    },
    about: {
      title: "О нас — международное страхование перевозок",
      description: "Латвийское страховое агентство для международных грузоперевозчиков: оформление пограничного страхования в страны Европейской экономической зоны.",
    },
    contacts: {
      title: "Контакты — оформить border insurance",
      description: "Свяжитесь с агентом по пограничному страхованиию для грузоперевозчиков по маршрутам EU и non-EU.",
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
    home: {
        title: "Robežapdrošināšana kravu pārvadātājiem un fiziskām personām",
        description: "Pārrobežu civiltiesiskās atbildības apdrošināšana (MTPL) starptautiskajiem pārvadājumiem: Zaļā karte, robežapdrošināšana, apdrošināšana iebraukšanai Eiropas Savienībā.",
    },
    about: {
        title: "Par mums — starptautiskā pārvadājumu apdrošināšana",
        description: "Latvijas apdrošināšanas aģentūra starptautiskajiem kravu pārvadātājiem: robežapdrošināšanas noformēšana Eiropas Ekonomikas zonas valstīm.",
    },
    contacts: {
        title: "Kontakti — noformēt robežapdrošināšanu",
        description: "Sazinieties ar apdrošināšanas aģentu par robežapdrošināšanu kravu pārvadātājiem maršrutos ES un ārpus ES.",
    },
    productInfo: {
        title: "Produkts un segums — Zaļā karte / pārrobežu MTPL",
        description: "Pārrobežu apdrošināšanas nosacījumi un segums: Zaļā karte, robežapdrošināšana, tranzīta maršruti ES un kaimiņvalstis.",
    },
    rules: {
        title: "Apdrošināšanas noteikumi starptautiskajiem pārvadātājiem",
        description: "Robežapdrošināšanas un Zaļās kartes noformēšanas un izmantošanas noteikumi komerciālajiem pārvadājumiem pāri robežām.",
    },
    privacy: {
        title: "Privātuma politika",
        description: "Kā tiek apstrādāti klientu personas dati, noformējot starptautisko MTPL apdrošināšanu.",
    },
    cookiePolicy: {
        title: "Sīkdatņu politika",
        description: "Informācija par sīkdatnēm un analītiku pārrobežu apdrošināšanas vietnē.",
    },
    },
  en: {
    home: {
        title: "Border insurance for carriers and individuals",
        description: "Cross-border MTPL insurance for international transport: Green Card, border insurance, coverage for travel to the EU.",
    },
    about: {
        title: "About us — international transport insurance",
        description: "Latvian insurance agency for international carriers: arranging border insurance for travel within the European Economic Area.",
    },
    contacts: {
        title: "Contacts — arrange border insurance",
        description: "Contact an agent for border insurance for carriers operating on EU and non-EU routes.",
    },
    productInfo: {
        title: "Product and coverage — Green Card / cross-border MTPL",
        description: "Terms and coverage of cross-border insurance: Green Card, border insurance, EU transit routes and neighbouring countries.",
    },
    rules: {
        title: "Insurance terms for international carriers",
        description: "Rules for arranging and using border insurance and Green Card for cross-border commercial transport.",
    },
    privacy: {
        title: "Privacy Policy",
        description: "How personal data is processed when arranging cross-border MTPL insurance.",
    },
    cookiePolicy: {
        title: "Cookie Policy",
        description: "Information about cookies and analytics on the cross-border insurance website.",
    },
    },
  uz: {
    home: {
        title: "Yuk tashuvchilar va jismoniy shaxslar uchun border insurance",
        description: "Xalqaro tashuvlar uchun transchegaraviy MTPL sug‘urtasi: Green Card, border insurance, Yevropa Ittifoqiga “Yashil karta”.",
    },
    about: {
        title: "Biz haqimizda — xalqaro yuk tashuvchilar sug‘urtasi",
        description: "Xalqaro yuk tashuvchilar uchun Latviyada joylashgan sug‘urta agentligi: Yevropa iqtisodiy hududi davlatlariga chegaraviy sug‘urtani rasmiylashtirish.",
    },
    contacts: {
        title: "Kontaktlar — border insurance rasmiylashtirish",
        description: "YI va non-YI yo‘nalishlari bo‘yicha yuk tashuvchilar uchun chegaraviy sug‘urta masalalari bo‘yicha agent bilan bog‘laning.",
    },
    productInfo: {
        title: "Mahsulot va qoplama — Green Card / MTPL transchegaraviy",
        description: "Transchegaraviy sug‘urta shartlari va qamrovi: Green Card, border insurance, YI tranzit yo‘nalishlari va qo‘shni davlatlar.",
    },
    rules: {
        title: "Xalqaro tashuvchilar uchun sug‘urta qoidalari",
        description: "Chegaraviy sug‘urta va Green Cardni rasmiylashtirish va undan foydalanish tartibi (xalqaro tijorat tashuvlari uchun).",
    },
    privacy: {
        title: "Maxfiylik siyosati",
        description: "Xalqaro MTPL sug‘urtasini rasmiylashtirishda mijozlarning shaxsiy ma’lumotlari qanday qayta ishlanadi.",
    },
    cookiePolicy: {
        title: "Cookie siyosati",
        description: "Saytda foydalaniladigan cookie fayllar va analitika haqida ma’lumot.",
    },
    },
  kg: { home: {
        title: "Жүк ташуучулар жана жеке адамдар үчүн чек аралык камсыздандыруу",
        description: "Эл аралык ташуулар үчүн трансчек аралык MTPL камсыздандыруусу: Green Card, чек аралык камсыздандыруу, Европа Биримдигине «Жашыл карта».",
    },
    about: {
        title: "Биз жөнүндө — эл аралык жүк ташууларды камсыздандыруу",
        description: "Эл аралык жүк ташуучулар үчүн Латвиядагы камсыздандыруу агенттиги: Европа экономикалык аймагына чек аралык камсыздандырууну тариздөө.",
    },
    contacts: {
        title: "Байланыштар — чек аралык камсыздандырууну тариздөө",
        description: "EU жана non-EU маршруттары боюнча жүк ташуучулар үчүн чек аралык камсыздандыруу боюнча агент менен байланышыңыз.",
    },
    productInfo: {
        title: "Продукт жана камтуу — Green Card / трансчек аралык MTPL",
        description: "Трансчек аралык камсыздандыруунун шарттары жана камтуусу: Green Card, чек аралык камсыздандыруу, EU транзит маршруттары жана коңшу өлкөлөр.",
    },
    rules: {
        title: "Эл аралык жүк ташуучулар үчүн камсыздандыруу эрежелери",
        description: "Чек ара аркылуу коммерциялык ташуулар үчүн border insurance жана Green Card тариздөө жана колдонуу эрежелери.",
    },
    privacy: {
        title: "Купуялуулук саясаты",
        description: "Эл аралык MTPL камсыздандырууну тариздөөдө кардарлардын жеке маалыматтары кантип иштетилет.",
    },
    cookiePolicy: {
        title: "Cookie саясаты",
        description: "Сайттагы cookie-файлдар жана аналитика тууралуу маалымат.",
    },
    },
  ka: {
    home: {
        title: "სასაზღვრო დაზღვევა გადამზიდავებისთვის და ფიზიკური პირებისთვის",
        description: "ტრანსსასაზღვრო MTPL დაზღვევა საერთაშორისო გადაზიდვებისთვის: Green Card, საზღვრის დაზღვევა, „მწვანე ბარათი“ ევროკავშირში.",
    },
    about: {
        title: "ჩვენ შესახებ — საერთაშორისო გადაზიდვების დაზღვევა",
        description: "ლატვიური სადაზღვევო სააგენტო საერთაშორისო გადამზიდავებისთვის: საზღვრის დაზღვევის გაფორმება ევროპის ეკონომიკური ზონის ქვეყნებში.",
    },
    contacts: {
        title: "კონტაქტები — საზღვრის დაზღვევის გაფორმება",
        description: "დაუკავშირდით აგენტს საზღვრის დაზღვევის შესახებ გადამზიდავებისთვის EU და non-EU მარშრუტებზე.",
    },
    productInfo: {
        title: "პროდუქტი და დაფარვა — Green Card / ტრანსსასაზღვრო MTPL",
        description: "ტრანსსასაზღვრო დაზღვევის პირობები და დაფარვა: Green Card, საზღვრის დაზღვევა, EU ტრანზიტის მარშრუტები და მეზობელი ქვეყნები.",
    },
    rules: {
        title: "დაზღვევის წესები საერთაშორისო გადამზიდავებისთვის",
        description: "საზღვრის დაზღვევისა და Green Card-ის გამოყენებისა და გაფორმების წესები კომერციული გადაზიდვებისთვის.",
    },
    privacy: {
        title: "კონფიდენციალურობის პოლიტიკა",
        description: "როგორ მუშავდება მომხმარებელთა პერსონალური მონაცემები საერთაშორისო MTPL დაზღვევის გაფორმებისას.",
    },
    cookiePolicy: {
        title: "cookie პოლიტიკა",
        description: "ინფორმაცია cookie ფაილებისა და ანალიტიკის შესახებ ტრანსსასაზღვრო დაზღვევის ვებგვერდზე.",
    },
    },
  kz: {
    home: {
        title: "Жүк тасымалдаушылар мен жеке тұлғаларға арналған шекаралық сақтандыру",
        description: "Халықаралық тасымалдарға арналған трансшекаралық MTPL сақтандыру: Green Card, шекаралық сақтандыру, Еуропалық Одаққа «Жасыл карта».",
    },
    about: {
        title: "Біз туралы — халықаралық тасымалдарды сақтандыру",
        description: "Халықаралық жүк тасымалдаушыларға арналған латвиялық сақтандыру агенттігі: Еуропалық экономикалық аймақ елдеріне шекаралық сақтандыруды рәсімдеу.",
    },
    contacts: {
        title: "Байланыс — шекаралық сақтандыруды рәсімдеу",
        description: "EU және ЕО-дан тыс маршруттар бойынша жүк тасымалдаушыларға арналған шекаралық сақтандыру агентімен байланысыңыз.",
    },
    productInfo: {
        title: "Өнім және қамту — Green Card / трансшекаралық MTPL",
        description: "Трансшекаралық сақтандыру шарттары мен қамтуы: Green Card, шекаралық сақтандыру, ЕО транзиті және көршілес елдер.",
    },
    rules: {
        title: "Халықаралық тасымалдаушыларға арналған сақтандыру ережелері",
        description: "Шекара арқылы коммерциялық тасымалдар үшін border insurance және Green Card рәсімдеу және пайдалану тәртібі.",
    },
    privacy: {
        title: "Құпиялылық саясаты",
        description: "Халықаралық MTPL сақтандыруды рәсімдеу кезінде клиенттердің дербес деректері қалай өңделеді.",
    },
    cookiePolicy: {
        title: "Cookie саясаты",
        description: "Трансшекаралық сақтандыру сайтын пайдалану кезінде cookie файлдары мен аналитика туралы ақпарат.",
    },
    },
  tr: {
    home: {
        title: "Taşıyıcılar ve bireyler için sınır sigortası",
        description: "Uluslararası taşımalar için sınır ötesi MTPL sigortası: Yeşil Kart, border insurance, AB’ye giriş için sigorta çözümleri.",
    },
    about: {
        title: "Hakkımızda — uluslararası taşımacılık sigortası",
        description: "Uluslararası taşımacılar için Letonya merkezli sigorta acentesi: Avrupa Ekonomik Alanı ülkelerine giriş için sınır sigortası düzenlenmesi.",
    },
    contacts: {
        title: "İletişim — border insurance başvurusu",
        description: "AB ve AB dışı güzergâhlarda taşımacılar için sınır sigortası konusunda bir sigorta danışmanıyla iletişime geçin.",
    },
    productInfo: {
        title: "Ürün ve teminat — Yeşil Kart / sınır ötesi MTPL",
        description: "Sınır ötesi sigortanın şartları ve kapsamı: Yeşil Kart, border insurance, AB transit rotaları ve komşu ülkeler.",
    },
    rules: {
        title: "Uluslararası taşımacılar için sigorta kuralları",
        description: "Sınır ötesi taşımalar için border insurance ve Yeşil Kart kullanım ve düzenleme kuralları.",
    },
    privacy: {
        title: "Gizlilik politikası",
        description: "Uluslararası MTPL sigortası düzenlenirken müşteri verilerinin nasıl işlendiği.",
    },
    cookiePolicy: {
        title: "Çerez politikası",
        description: "Sınır ötesi sigorta sitesi üzerinde kullanılan çerezler ve analiz araçları hakkında bilgiler.",
    },
    },
  fa: {
    home: {
        title: "بیمه مرزی برای شرکت‌های حمل‌ونقل و اشخاص",
        description: "بیمه مسئولیت مدنی فرامرزی (MTPL) برای حمل‌ونقل بین‌المللی: گرین کارت، بیمه مرزی، پوشش برای ورود به اتحادیه اروپا.",
    },
    about: {
        title: "درباره ما — بیمه بین‌المللی حمل‌ونقل",
        description: "نمایندگی بیمه در لتونی برای شرکت‌های حمل‌ونقل بین‌المللی: صدور بیمه مرزی برای کشورهای منطقه اقتصادی اروپا.",
    },
    contacts: {
        title: "تماس با ما — صدور بیمه مرزی",
        description: "برای بیمه مرزی حمل‌ونقل در مسیرهای اتحادیه اروپا و خارج از آن با ما تماس بگیرید.",
    },
    productInfo: {
        title: "محصول و پوشش — گرین کارت / بیمه فرامرزی MTPL",
        description: "شرایط و پوشش بیمه فرامرزی: گرین کارت، بیمه مرزی، مسیرهای ترانزیت اتحادیه اروپا و کشورهای همسایه.",
    },
    rules: {
        title: "قوانین بیمه برای حمل‌ونقل بین‌المللی",
        description: "قوانین صدور و استفاده از بیمه مرزی و گرین کارت برای حمل‌ونقل تجاری بین‌المللی.",
    },
    privacy: {
        title: "سیاست حفظ حریم خصوصی",
        description: "نحوه پردازش داده‌های شخصی مشتریان هنگام صدور بیمه MTPL بین‌المللی.",
    },
    cookiePolicy: {
        title: "سیاست کوکی‌ها",
        description: "اطلاعات مربوط به کوکی‌ها و تحلیل داده‌ها در وب‌سایت صدور بیمه فرامرزی.",
    },
    },
  mn: {
    home: {
        title: "Олон улсын тээвэрлэгч болон хувь хүмүүст зориулсан хил дамнасан даатгал",
        description: "Олон улсын тээвэрт зориулсан хил дамнасан MTPL даатгал: Ногоон карт, border insurance, Европын Холбоо руу нэвтрэх даатгал.",
    },
    about: {
        title: "Бидний тухай — олон улсын тээврийн даатгал",
        description: "Олон улсын ачаа тээвэрлэгчдэд зориулсан Латвийн даатгалын агентлаг: Европын эдийн засгийн бүсийн улс орнуудад нэвтрэх хил дамнасан даатгалын бүрдүүлэлт.",
    },
    contacts: {
        title: "Холбоо барих — хил дамнасан даатгал бүрдүүлэх",
        description: "ЕХ болон ЕХ-оос гадуурх чиглэлээр тээвэрлэгчдэд зориулсан хил дамнасан даатгалын агенттай холбогдоно уу.",
    },
    productInfo: {
        title: "Бүтээгдэхүүн ба хамрах хүрээ — Ногоон карт / хил дамнасан MTPL",
        description: "Хил дамнасан даатгалын нөхцөл ба хамрах хүрээ: Ногоон карт, border insurance, ЕХ транзит болон хөрш улс орнуудын чиглэл.",
    },
    rules: {
        title: "Олон улсын тээвэрлэгчдэд зориулсан даатгалын журам",
        description: "Хил дамнасан даатгал болон Ногоон картыг хил дамнасан арилжааны тээвэрт ашиглах журам.",
    },
    privacy: {
        title: "Нууцлалын бодлого",
        description: "Олон улсын MTPL даатгал бүрдүүлэх үед хэрэглэгчийн хувийн мэдээллийг хэрхэн боловсруулдаг талаар.",
    },
    cookiePolicy: {
        title: "Cookie бодлого",
        description: "Хил дамнасан даатгалын сайт дээр ашиглагддаг cookie болон аналитикийн тухай мэдээлэл.",
    },
    },
  hy: {
    home: {
        title: "Սահմանային ապահովագրություն բեռնափոխադրողների և ֆիզիկական անձանց համար",
        description: "Տրանսսահմանային MTPL ապահովագրություն միջազգային փոխադրումների համար՝ Green Card, սահմանային ապահովագրություն, «Կանաչ քարտ» դեպի Եվրոպական միություն։",
    },
    about: {
        title: "Մեր մասին — միջազգային ապահովագրություն բեռնափոխադրումների համար",
        description: "Լատվիական ապահովագրական գործակալություն միջազգային բեռնափոխադրողների համար՝ սահմանային ապահովագրության ձևակերպում Եվրոպական տնտեսական տարածքի երկրներ։",
    },
    contacts: {
        title: "Կոնտակտներ — ձևակերպել սահմանային ապահովագրություն",
        description: "Կապվեք ապահովագրական գործակալի հետ բեռնափոխադրողների սահմանային ապահովագրության համար՝ EU և non-EU երթուղիներով։",
    },
    productInfo: {
        title: "Ապրանք և ծածկույթ — Green Card / տրանսսահմանային MTPL",
        description: "Տրանսսահմանային ապահովագրության պայմաններ և ծածկույթ՝ Green Card, սահմանային ապահովագրություն, EU տրանզիտ և հարակից երկրներ։",
    },
    rules: {
        title: "Ապահովագրության կանոններ միջազգային բեռնափոխադրողների համար",
        description: "Սահմանային ապահովագրության և Green Card-ի ձևակերպման և օգտագործման կանոններ միջազգային փոխադրումների համար։",
    },
    privacy: {
        title: "Գաղտնիության քաղաքականություն",
        description: "Ինչպես են մշակվում հաճախորդների անձնական տվյալները միջազգային MTPL ապահովագրության ձևակերպման ընթացքում։",
    },
    cookiePolicy: {
        title: "Cookie-ների քաղաքականություն",
        description: "Տեղեկություն cookie-ների և վերլուծական գործիքների մասին տրանսսահմանային ապահովագրության կայքում։",
    },
    },
};

export function getSeoDictionary(lang: Lang) {
  return seoDictionary[lang];
}
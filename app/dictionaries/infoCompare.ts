// app/dictionaries/infoCompare.ts
import type { Lang } from "@/app/dictionaries/header";

export interface InfoCompareDictionary {
  kicker: string;
  title: string;

  leftBlocks: Array<{
    strong: string;
    text: string;
  }>;

  rightTitle: string;

  rows: Array<{
    title: string;
    text: string;
  }>;

  note: string;
}

export const infoCompareDictionary: Record<Lang, InfoCompareDictionary> = {
  ru: {
    kicker: "ТЕРМИНЫ",
    title: "Договор трансграничного страхования ≠ Зелёная карта",

    leftBlocks: [
      {
        strong: "Договор трансграничного страхования",
        text:
          "— это полис гражданской ответственности, который оформляется при въезде в ЕС в отношении транспортных средств, зарегистрированных  в странах не входящих в Европейское экономическое пространство, если у вас нет действующей «Зелёной карты». Полис действует ограниченный срок и только в указанных странах.",
      },
      {
        strong: "Зелёная карта",
        text:
          "— международный полис ОС, который вы оформляете в стране регистрации автомобиля до выезда и используете в странах — участниках системы «Зелёная карта».",
      },
    ],

    rightTitle: "Что нужно именно вам?",

    rows: [
      {
        title: "Зелёная карта",
        text:
          "У вас есть возможность оформить полис Зеленой карты дома, и страна въезда принимает «Зелёную карту».",
      },
      {
        title: "Договор трансграничного страхования",
        text:
          "Вы въезжаете в ЕС без действующей «Зелёной карты», а автомобиль зарегистрирован вне Европейского экономического пространства.",
      },
      {
        title: "Наш сервис",
        text:
          "Мы помогаем дистанционно оформить Договор трансграничного страхования для въезда, например, в Латвию и другие страны ЕС.",
      },
    ],

    note:
      "Если сомневаетесь, что вам нужно — укажите маршрут и страну регистрации в заявке. Мы подскажем, подойдёт ли «Зелёная карта» или потребуется пограничное страхование.",
  },

  lv: {
    kicker: "TERMINI",
    title: "Pārrobežu apdrošināšanas līgums ≠ Zaļā karte",

    leftBlocks: [
      {
        strong: "Pārrobežu apdrošināšanas līgums",
        text:
          "— ir civiltiesiskās atbildības apdrošināšanas polise, kas tiek noformēta, iebraucot ES ar transportlīdzekli, kas reģistrēts valstī ārpus Eiropas Ekonomikas zonas, ja jums nav derīgas “Zaļās kartes”. Polise ir spēkā ierobežotu laiku un tikai norādītajās valstīs.",
      },
      {
        strong: "Zaļā karte",
        text:
          "— ir starptautiska civiltiesiskās atbildības apdrošināšanas polise, ko noformē transportlīdzekļa reģistrācijas valstī pirms izbraukšanas un izmanto valstīs, kas ir “Zaļās kartes” sistēmas dalībnieces.",
      },
    ],

    rightTitle: "Kas nepieciešams tieši jums?",

    rows: [
      {
        title: "Zaļā karte",
        text:
          "Jums ir iespēja noformēt Zaļo karti savā valstī, un iebraukšanas valsts pieņem šo apdrošināšanu.",
      },
      {
        title: "Pārrobežu apdrošināšanas līgums",
        text:
          "Jūs iebraucat ES bez derīgas “Zaļās kartes”, un transportlīdzeklis ir reģistrēts ārpus Eiropas Ekonomikas zonas.",
      },
      {
        title: "Mūsu pakalpojums",
        text:
          "Mēs palīdzam attālināti noformēt pārrobežu apdrošināšanas līgumu iebraukšanai, piemēram, Latvijā un citās ES valstīs.",
      },
    ],

    note:
      "Ja neesat pārliecināts, kas jums nepieciešams — norādiet maršrutu un transportlīdzekļa reģistrācijas valsti pieteikumā. Mēs ieteiksim, vai pietiek ar “Zaļo karti” vai nepieciešama robežapdrošināšana.",
  },

  en: {
    kicker: "TERMS",
    title: "Cross-border insurance policy ≠ Green Card",

    leftBlocks: [
      {
        strong: "Cross-border insurance policy",
        text:
          "is a motor third-party liability policy issued at the border when entering the EU for vehicles registered in countries outside the European Economic Area, if you do not have a valid Green Card. The policy is issued for a limited period and is valid only in the specified countries.",
      },
      {
        strong: "Green Card",
        text:
          "is an international motor third-party liability insurance policy issued in the country where the vehicle is registered before departure and used in countries participating in the Green Card system.",
      },
    ],

    rightTitle: "Which option do you need?",

    rows: [
      {
        title: "Green Card",
        text:
          "You can obtain a Green Card in your home country, and the destination country accepts it.",
      },
      {
        title: "Cross-border insurance policy",
        text:
          "You are entering the EU without a valid Green Card, and your vehicle is registered outside the European Economic Area.",
      },
      {
        title: "Our service",
        text:
          "We help you arrange a cross-border insurance policy remotely for entry into Latvia and other EU countries.",
      },
    ],

    note:
      "If you are unsure which option you need, provide your route and the country of vehicle registration in your request. We will advise whether a Green Card is sufficient or if border insurance is required.",
  },  

  uz: {
    kicker: "ATAMALAR",
    title: "Transchegaraviy sug‘urta shartnomasi ≠ “Yashil karta”",

    leftBlocks: [
      {
        strong: "Transchegaraviy sug‘urta shartnomasi",
        text:
          "— bu fuqarolik javobgarligi sug‘urtasi polisi bo‘lib, Yevropa Ittifoqiga kirishda, agar sizda amal qiluvchi “Yashil karta” bo‘lmasa, Yevropa iqtisodiy hududiga kirmaydigan mamlakatlarda ro‘yxatdan o‘tgan transport vositalari uchun rasmiylashtiriladi. Polis cheklangan muddatga va faqat ko‘rsatilgan davlatlarda amal qiladi.",
      },
      {
        strong: "Yashil karta",
        text:
          "— bu xalqaro fuqarolik javobgarligi sug‘urtasi polisi bo‘lib, siz uni avtomobil ro‘yxatdan o‘tgan mamlakatda safardan oldin rasmiylashtirasiz va “Yashil karta” tizimiga a’zo davlatlarda foydalanasiz.",
      },
    ],

    rightTitle: "Sizga qaysi biri kerak?",

    rows: [
      {
        title: "Yashil karta",
        text:
          "Agar siz polisni o‘z mamlakatingizda rasmiylashtira olsangiz va kirish davlati “Yashil karta”ni qabul qilsa.",
      },
      {
        title: "Transchegaraviy sug‘urta shartnomasi",
        text:
          "Agar siz YI hududiga amal qiluvchi “Yashil karta”siz kirsangiz va avtomobil Yevropa iqtisodiy hududidan tashqarida ro‘yxatdan o‘tgan bo‘lsa.",
      },
      {
        title: "Bizning xizmat",
        text:
          "Biz, masofadan turib, masalan Latviya va boshqa YI davlatlariga kirish uchun transchegaraviy sug‘urta shartnomasini rasmiylashtirishda yordam beramiz.",
      },
    ],

    note:
      "Agar qaysi sug‘urta kerakligiga ishonchingiz komil bo‘lmasa — arizada marshrut va avtomobil ro‘yxatdan o‘tgan davlatni ko‘rsating. Biz sizga “Yashil karta” mos keladimi yoki chegaraviy sug‘urta kerakmi, aytib beramiz.",
  },

  kg: {
    kicker: "ТЕРМИНДЕР",
    title: "Трансчек аралык камсыздандыруу келишими ≠ «Жашыл карта»",

    leftBlocks: [
      {
        strong: "Трансчек аралык камсыздандыруу келишими",
        text:
          "— бул жарандык жоопкерчиликти камсыздандыруу полиси. Ал ЕБге киргенде, Европалык экономикалык аймакка кирбеген өлкөлөрдө катталган транспорт каражаттары үчүн, эгер сизде жарактуу «Жашыл карта» жок болсо, таризделет. Полис чектелген мөөнөткө жана көрсөтүлгөн өлкөлөрдө гана жарактуу.",
      },
      {
        strong: "Жашыл карта",
        text:
          "— бул эл аралык жарандык жоопкерчилик камсыздандыруу полиси. Аны сиз автоунаа катталган өлкөдө, чет өлкөгө чыгардын алдында тариздеп, «Жашыл карта» системасына кирген өлкөлөрдө колдоносуз.",
      },
    ],

    rightTitle: "Сизге кайсысы керек?",

    rows: [
      {
        title: "Жашыл карта",
        text:
          "Сиз полисти өз өлкөңүздө тариздей аласыз жана кире турган өлкө «Жашыл картаны» кабыл алат.",
      },
      {
        title: "Трансчек аралык камсыздандыруу келишими",
        text:
          "Сиз ЕБге жарактуу «Жашыл карта»сыз кирип жатасыз жана автоунаа Европалык экономикалык аймактан тышкары катталган.",
      },
      {
        title: "Биздин сервис",
        text:
          "Биз Латвияга жана башка ЕБ өлкөлөрүнө кирүү үчүн трансчек аралык камсыздандыруу келишимин алыстан тариздөөгө жардам беребиз.",
      },
    ],

    note:
      "Эгер кайсысы керек экенине күмөн болсоңуз — өтүнмөдө маршрутуңузду жана автоунаа катталган өлкөнү көрсөтүңүз. Биз «Жашыл карта» жетиштүүбү же чек аралык камсыздандыруу керекпи — так айтып беребиз.",
  },

  ka: {
    kicker: "ტერმინები",
    title: "ტრანსსასაზღვრო დაზღვევის ხელშეკრულება ≠ „მწვანე ბარათი“",

    leftBlocks: [
      {
        strong: "ტრანსსასაზღვრო დაზღვევის ხელშეკრულება",
        text:
          "— არის პასუხისმგებლობის დაზღვევის პოლისი, რომელიც საჭიროა ევროკავშირში შესვლისას იმ სატრანსპორტო საშუალებებისთვის, რომლებიც რეგისტრირებულია ევროპის ეკონომიკურ სივრცეში არ შემავალ ქვეყნებში, თუ თქვენ არ გაქვთ მოქმედი „მწვანე ბარათი“. პოლისი მოქმედებს შეზღუდული ვადით და მხოლოდ მითითებულ ქვეყნებში.",
      },
      {
        strong: "მწვანე ბარათი",
        text:
          "— არის საერთაშორისო პასუხისმგებლობის დაზღვევის პოლისი, რომელსაც აფორმებთ ავტომობილის რეგისტრაციის ქვეყანაში გამგზავრებამდე და იყენებთ „მწვანე ბარათის“ სისტემაში მონაწილე ქვეყნებში.",
      },
    ],

    rightTitle: "რომელი გჭირდებათ თქვენ?",

    rows: [
      {
        title: "მწვანე ბარათი",
        text:
          "შეგიძლიათ პოლისის გაფორმება თქვენს ქვეყანაში და დანიშნულების ქვეყანა იღებს „მწვანე ბარათს“.",
      },
      {
        title: "ტრანსსასაზღვრო დაზღვევის ხელშეკრულება",
        text:
          "შედიხართ ევროკავშირში მოქმედი „მწვანე ბარათის“ გარეშე და ავტომობილი რეგისტრირებულია ევროპის ეკონომიკურ სივრცეს გარეთ.",
      },
      {
        title: "ჩვენი სერვისი",
        text:
          "დისტანციურად გეხმარებით ტრანსსასაზღვრო დაზღვევის ხელშეკრულების გაფორმებაში, მაგალითად, ლატვიაში და ევროკავშირის სხვა ქვეყნებში შესასვლელად.",
      },
    ],

    note:
      "თუ არ ხართ დარწმუნებული, რა გჭირდებათ — განაცხადში მიუთითეთ მარშრუტი და ავტომობილის რეგისტრაციის ქვეყანა. ჩვენ გეტყვით, საკმარისია თუ არა „მწვანე ბარათი“ ან საჭიროა საზღვრის დაზღვევა.",
  },

  kz: {
    kicker: "ТЕРМИНДЕР",
    title: "Трансшекаралық сақтандыру шарты ≠ «Жасыл карта»",

    leftBlocks: [
      {
        strong: "Трансшекаралық сақтандыру шарты",
        text:
          "— бұл ЕО аумағына кірген кезде рәсімделетін азаматтық-құқықтық жауапкершілік полисі. Ол Еуропалық экономикалық аймаққа кірмейтін елдерде тіркелген көлік құралдарына арналған және егер сізде жарамды «Жасыл карта» болмаса қолданылады. Полис шектеулі мерзімге беріледі және тек көрсетілген елдерде жарамды.",
      },
      {
        strong: "Жасыл карта",
        text:
          "— бұл халықаралық жауапкершілік сақтандыру полисі, оны сіз көлік тіркелген елде шетелге шықпас бұрын рәсімдейсіз және «Жасыл карта» жүйесіне қатысушы елдерде пайдаланасыз.",
      },
    ],

    rightTitle: "Сізге қайсысы қажет?",

    rows: [
      {
        title: "Жасыл карта",
        text:
          "Сізде полисті өз еліңізде рәсімдеу мүмкіндігі бар және кіру елі «Жасыл картаны» қабылдайды.",
      },
      {
        title: "Трансшекаралық сақтандыру шарты",
        text:
          "Сіз ЕО аумағына жарамды «Жасыл картасыз» кіріп жатырсыз және көлік Еуропалық экономикалық аймақтан тыс елде тіркелген.",
      },
      {
        title: "Біздің сервис",
        text:
          "Біз Латвияға және ЕО-ның басқа елдеріне кіру үшін трансшекаралық сақтандыру шартын қашықтан рәсімдеуге көмектесеміз.",
      },
    ],

    note:
      "Егер қайсысы қажет екеніне сенімді болмасаңыз — өтінімде маршрутыңызды және көлік тіркелген елді көрсетіңіз. Біз «Жасыл карта» жеткілікті ме, әлде шекаралық сақтандыру қажет пе — түсіндіріп береміз.",
  },

  tr: {
    kicker: "TERİMLER",
    title: "Sınır ötesi sigorta sözleşmesi ≠ Yeşil Kart",

    leftBlocks: [
      {
        strong: "Sınır ötesi sigorta sözleşmesi",
        text:
          "— Avrupa Ekonomik Alanı dışındaki ülkelerde kayıtlı araçlar için, geçerli bir “Yeşil Kart” bulunmadığında AB’ye girişte düzenlenen zorunlu mali sorumluluk sigortasıdır. Poliçe sınırlı süreyle ve yalnızca belirtilen ülkelerde geçerlidir.",
      },
      {
        strong: "Yeşil Kart",
        text:
          "— aracın kayıtlı olduğu ülkede, yurt dışına çıkmadan önce düzenlenen ve “Yeşil Kart” sistemine dahil ülkelerde geçerli olan uluslararası zorunlu mali sorumluluk sigortasıdır.",
      },
    ],

    rightTitle: "Sizin için hangisi gerekli?",

    rows: [
      {
        title: "Yeşil Kart",
        text:
          "Poliçeyi kendi ülkenizde düzenleyebiliyorsunuz ve giriş yaptığınız ülke “Yeşil Kart”ı kabul ediyor.",
      },
      {
        title: "Sınır ötesi sigorta sözleşmesi",
        text:
          "AB’ye geçerli bir “Yeşil Kart” olmadan giriyorsunuz ve aracınız Avrupa Ekonomik Alanı dışında kayıtlı.",
      },
      {
        title: "Hizmetimiz",
        text:
          "Örneğin Letonya ve diğer AB ülkelerine giriş için sınır ötesi sigorta sözleşmesini uzaktan düzenlemenize yardımcı oluyoruz.",
      },
    ],

    note:
      "Hangi ürüne ihtiyacınız olduğundan emin değilseniz, başvuruda güzergâhı ve aracın kayıtlı olduğu ülkeyi belirtin. “Yeşil Kart”ın yeterli olup olmadığını veya sınır sigortası gerekip gerekmediğini size bildiririz.",
  },

  fa: {
    kicker: "اصطلاحات",
    title: "بیمه فرامرزی ≠ گرین کارت",

    leftBlocks: [
      {
        strong: "بیمه فرامرزی",
        text:
          "نوعی بیمه مسئولیت مدنی است که هنگام ورود به اتحادیه اروپا برای وسایل نقلیه‌ای صادر می‌شود که در کشورهای خارج از منطقه اقتصادی اروپا ثبت شده‌اند، در صورتی که «گرین کارت» معتبر نداشته باشید. این بیمه‌نامه مدت‌زمان محدود دارد و فقط در کشورهای مشخص‌شده معتبر است.",
      },
      {
        strong: "گرین کارت",
        text:
          "بیمه‌نامه بین‌المللی مسئولیت مدنی است که قبل از خروج، در کشور محل ثبت خودرو صادر می‌شود و در کشورهای عضو سیستم «گرین کارت» قابل استفاده است.",
      },
    ],

    rightTitle: "کدام گزینه برای شما مناسب است؟",

    rows: [
      {
        title: "گرین کارت",
        text:
          "امکان صدور گرین کارت در کشور خود را دارید و کشور مقصد این نوع بیمه را می‌پذیرد.",
      },
      {
        title: "بیمه فرامرزی",
        text:
          "بدون داشتن گرین کارت معتبر وارد اتحادیه اروپا می‌شوید و وسیله نقلیه در خارج از منطقه اقتصادی اروپا ثبت شده است.",
      },
      {
        title: "خدمات ما",
        text:
          "ما به‌صورت آنلاین در صدور بیمه فرامرزی برای ورود به کشورهایی مانند لتونی و سایر کشورهای اتحادیه اروپا کمک می‌کنیم.",
      },
    ],

    note:
      "اگر مطمئن نیستید کدام گزینه مناسب است، مسیر سفر و کشور ثبت خودرو را در درخواست خود مشخص کنید. ما بررسی می‌کنیم که آیا گرین کارت کافی است یا به بیمه مرزی نیاز دارید.",
  },

  mn: {
    kicker: "НЭР ТОМЬЁО",
    title: "Хил дамнасан даатгалын гэрээ ≠ Ногоон карт",

    leftBlocks: [
      {
        strong: "Хил дамнасан даатгалын гэрээ",
        text:
          "— энэ нь Европын эдийн засгийн бүсэд хамаарахгүй улсад бүртгэлтэй тээврийн хэрэгсэлтэйгээр ЕХ-д нэвтрэх үед, хүчинтэй «Ногоон карт» байхгүй тохиолдолд бүрдүүлдэг иргэний хариуцлагын даатгал юм. Полис нь хязгаарлагдмал хугацаанд, зөвхөн заасан улс орнуудад хүчинтэй.",
      },
      {
        strong: "Ногоон карт",
        text:
          "— автомашины бүртгэлтэй улсад урьдчилан авдаг, «Ногоон карт» системд оролцогч улс орнуудад хүчинтэй олон улсын иргэний хариуцлагын даатгалын полис юм.",
      },
    ],

    rightTitle: "Танд аль нь хэрэгтэй вэ?",

    rows: [
      {
        title: "Ногоон карт",
        text:
          "Та өөрийн улсад «Ногоон карт» даатгалыг бүрдүүлэх боломжтой бөгөөд нэвтрэх улс уг полисыг хүлээн зөвшөөрдөг.",
      },
      {
        title: "Хил дамнасан даатгалын гэрээ",
        text:
          "Та хүчинтэй «Ногоон карт»гүйгээр ЕХ-д нэвтрэх гэж байгаа бөгөөд автомашин Европын эдийн засгийн бүсээс гадна бүртгэлтэй.",
      },
      {
        title: "Манай үйлчилгээ",
        text:
          "Бид, жишээлбэл, Латви болон ЕХ-ны бусад улс руу нэвтрэхэд шаардлагатай хил дамнасан даатгалыг зайнаас бүрдүүлэхэд тусалдаг.",
      },
    ],

    note:
      "Хэрэв аль даатгал хэрэгтэйгээ эргэлзэж байвал маршрутаа болон автомашины бүртгэлийн улсаа хүсэлтэд заана уу. Бид «Ногоон карт» тохирох эсэх, эсвэл хил дээр даатгал хэрэгтэй эсэхийг зөвлөж өгнө.",
  },

  hy: {
    kicker: "ՏԵՐՄԻՆՆԵՐ",
    title: "Տրանսսահմանային ապահովագրության պայմանագիր ≠ «Կանաչ քարտ»",

    leftBlocks: [
      {
        strong: "Տրանսսահմանային ապահովագրության պայմանագիր",
        text:
          "— քաղաքացիական պատասխանատվության ապահովագրության պոլիս է, որը ձևակերպվում է ԵՄ մուտք գործելիս այն տրանսպորտային միջոցների համար, որոնք գրանցված են Եվրոպական տնտեսական տարածքից դուրս գտնվող երկրներում, եթե չունեք գործող «Կանաչ քարտ»։ Պոլիսը գործում է սահմանափակ ժամկետով և միայն նշված երկրներում։",
      },
      {
        strong: "«Կանաչ քարտ»",
        text:
          "— միջազգային քաղաքացիական պատասխանատվության ապահովագրության պոլիս է, որը ձևակերպվում է ավտոմեքենայի գրանցման երկրում մինչև մեկնումը և օգտագործվում է «Կանաչ քարտ» համակարգի մասնակից երկրներում։",
      },
    ],

    rightTitle: "Ի՞նչ է անհրաժեշտ հենց ձեզ։",

    rows: [
      {
        title: "«Կանաչ քարտ»",
        text:
          "Դուք կարող եք ձևակերպել «Կանաչ քարտ» ձեր երկրում, և մուտքի երկիրը ընդունում է այն։",
      },
      {
        title: "Տրանսսահմանային ապահովագրության պայմանագիր",
        text:
          "Դուք մուտք եք գործում ԵՄ առանց գործող «Կանաչ քարտի», իսկ ավտոմեքենան գրանցված է Եվրոպական տնտեսական տարածքից դուրս։",
      },
      {
        title: "Մեր ծառայությունը",
        text:
          "Մենք օգնում ենք հեռավար ձևակերպել տրանսսահմանային ապահովագրության պայմանագիր՝ օրինակ Լատվիա և ԵՄ այլ երկրներ մուտք գործելու համար։",
      },
    ],

    note:
      "Եթե վստահ չեք՝ ինչ է ձեզ անհրաժեշտ, նշեք երթուղին և գրանցման երկիրը հայտում։ Մենք կհուշենք՝ բավարար է «Կանաչ քարտը», թե անհրաժեշտ է սահմանային ապահովագրություն։",
  },
};

export function getInfoCompareDictionary(lang: Lang) {
  const dict = infoCompareDictionary[lang];
  return dict ? dict : infoCompareDictionary.ru;
}
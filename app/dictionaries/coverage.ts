// app/dictionaries/coverage.ts
import type { Lang } from "@/app/dictionaries/header";

type CoverageItem = {
  title: string;
  text: string;
  note?: string;
};

type CoverageDict = {
  title: string;
  mapAlt: string;
  mapCaption?: string;
  items: CoverageItem[];
};

const DICT: Record<Lang, CoverageDict> = {
  ru: {
    title: "Зона покрытия и условия",
    mapAlt: "Страны действия договора трансграничного страхования",
    mapCaption: " ",
    items: [
      {
        title: "Территория действия",
        text:
          "Полис действует в странах, отмеченных на карте. A - Австрия, B - Бельгия, BG - Болгария, CY - Кипр, CZ - Чехия, D - Германия, DK - Дания, E - Испания, EST - Эстония, F - Франция, FIN - Финляндия, GR - Греция, H - Венгрия, HR - Хорватия, I - Италия, IRL - Ирландия, IS - Исландия, L - Люксембург, LT - Литва, LV - Латвия, M - Мальта, N - Норвегия, NL - Нидерланды, P - Португалия, PL - Польша, RO - Румыния, S - Швеция, SK - Словакия, SLO - Словения, CH - Швейцария.",
      },
      {
        title: "Типы транспортных средств",
        text: "Легковые автомобили, мотоциклы, грузовой транспорт, прицепы, автобусы.",
      },
      {
        title: "Срок действия",
        text: "Минимальный срок - 1 месяц. Максимальный - 1 год.",
      },
    ],
  },

  lv: {
    title: "Darbības teritorija un nosacījumi",
    mapAlt: "Pārrobežu apdrošināšanas līguma darbības valstis",
    mapCaption: " ",
    items: [
      {
        title: "Darbības teritorija",
        text:
          "Polise ir spēkā valstīs, kas norādītas kartē. A - Austrija, B - Beļģija, BG - Bulgārija, CY - Kipra, CZ - Čehija, D - Vācija, DK - Dānija, E - Spānija, EST - Igaunija, F - Francija, FIN - Somija, GR - Grieķija, H - Ungārija, HR - Horvātija, I - Itālija, IRL - Īrija, IS - Islande, L - Luksemburga, LT - Lietuva, LV - Latvija, M - Malta, N - Norvēģija, NL - Nīderlande, P - Portugāle, PL - Polija, RO - Rumānija, S - Zviedrija, SK - Slovākija, SLO - Slovēnija, CH - Šveice.",
      },
      {
        title: "Transportlīdzekļu veidi",
        text: "Vieglie automobiļi, motocikli, kravas transportlīdzekļi, piekabes, autobusi.",
      },
      {
        title: "Darbības termiņš",
        text: "Minimālais termiņš — 1 mēnesis. Maksimālais — 1 gads.",
      },
    ],
  },

  en: {
    title: "Coverage Area and Terms",
    mapAlt: "Countries covered under the cross-border insurance policy",
    mapCaption: " ",
    items: [
      {
        title: "Territorial scope",
        text:
          "The policy is valid in the countries marked on the map: A – Austria, B – Belgium, BG – Bulgaria, CY – Cyprus, CZ – Czech Republic, D – Germany, DK – Denmark, E – Spain, EST – Estonia, F – France, FIN – Finland, GR – Greece, H – Hungary, HR – Croatia, I – Italy, IRL – Ireland, IS – Iceland, L – Luxembourg, LT – Lithuania, LV – Latvia, M – Malta, N – Norway, NL – Netherlands, P – Portugal, PL – Poland, RO – Romania, S – Sweden, SK – Slovakia, SLO – Slovenia, CH – Switzerland.",
      },
      {
        title: "Vehicle types",
        text: "Passenger cars, motorcycles, trucks, trailers, and buses.",
      },
      {
        title: "Policy period",
        text: "Minimum period: 1 month. Maximum period: 1 year.",
      },
    ],
  },

  uz: {
    title: "Qamrov hududi va shartlar",
    mapAlt: "Transchegaraviy sug‘urta shartnomasining amal qilish hududlari",
    mapCaption: " ",
    items: [
      {
        title: "Amal qilish hududi",
        text:
          "Polis xaritada ko‘rsatilgan mamlakatlarda amal qiladi. A - Avstriya, B - Belgiya, BG - Bolgariya, CY - Kipr, CZ - Chexiya, D - Germaniya, DK - Daniya, E - Ispaniya, EST - Estoniya, F - Fransiya, FIN - Finlyandiya, GR - Gretsiya, H - Vengriya, HR - Xorvatiya, I - Italiya, IRL - Irlandiya, IS - Islandiya, L - Lyuksemburg, LT - Litva, LV - Latviya, M - Malta, N - Norvegiya, NL - Niderlandiya, P - Portugaliya, PL - Polsha, RO - Ruminiya, S - Shvetsiya, SK - Slovakiya, SLO - Sloveniya, CH - Shveytsariya.",
      },
      {
        title: "Transport vositalari turlari",
        text: "Yengil avtomobillar, mototsikllar, yuk avtomobillari, tirkamalar, avtobuslar.",
      },
      {
        title: "Amal qilish muddati",
        text: "Minimal muddat — 1 oy. Maksimal muddat — 1 yil.",
      },
    ],
  },

  kg: {
    title: "Камтуу аймагы жана шарттары",
    mapAlt: "Трансчек аралык камсыздандыруу келишиминин колдонуу аймагы",
    mapCaption: " ",
    items: [
      {
        title: "Камтуу аймагы",
        text:
          "Полис картада белгиленген өлкөлөрдө жарактуу. A - Австрия, B - Бельгия, BG - Болгария, CY - Кипр, CZ - Чехия, D - Германия, DK - Дания, E - Испания, EST - Эстония, F - Франция, FIN - Финляндия, GR - Греция, H - Венгрия, HR - Хорватия, I - Италия, IRL - Ирландия, IS - Исландия, L - Люксембург, LT - Литва, LV - Латвия, M - Мальта, N - Норвегия, NL - Нидерланды, P - Португалия, PL - Польша, RO - Румыния, S - Швеция, SK - Словакия, SLO - Словения, CH - Швейцария.",
      },
      {
        title: "Транспорт каражаттарынын түрлөрү",
        text: "Жеңил автоунаалар, мотоциклдер, жүк ташуучу унаалар, прицептер, автобустар.",
      },
      {
        title: "Колдонуу мөөнөтү",
        text: "Минималдуу мөөнөт — 1 ай. Максималдуу — 1 жыл.",
      },
    ],
  },
  ka: {
    title: "დაფარვის არეალი და პირობები",
    mapAlt: "ტრანსსასაზღვრო დაზღვევის ხელშეკრულების მოქმედების ქვეყნები",
    mapCaption: " ",
    items: [
      {
        title: "მოქმედების ტერიტორია",
        text:
          "პოლისი მოქმედებს რუკაზე აღნიშნულ ქვეყნებში: A - ავსტრია, B - ბელგია, BG - ბულგარეთი, CY - კვიპროსი, CZ - ჩეხეთი, D - გერმანია, DK - დანია, E - ესპანეთი, EST - ესტონეთი, F - საფრანგეთი, FIN - ფინეთი, GR - საბერძნეთი, H - უნგრეთი, HR - ხორვატია, I - იტალია, IRL - ირლანდია, IS - ისლანდია, L - ლუქსემბურგი, LT - ლიტვა, LV - ლატვია, M - მალტა, N - ნორვეგია, NL - ნიდერლანდები, P - პორტუგალია, PL - პოლონეთი, RO - რუმინეთი, S - შვედეთი, SK - სლოვაკეთი, SLO - სლოვენია, CH - შვეიცარია.",
      },
      {
        title: "სატრანსპორტო საშუალებების ტიპები",
        text: "მსუბუქი ავტომობილები, მოტოციკლები, სატვირთო ტრანსპორტი, მისაბმელები, ავტობუსები.",
      },
      {
        title: "მოქმედების ვადა",
        text: "მინიმალური ვადა — 1 თვე. მაქსიმალური — 1 წელი.",
      },
    ],
  },
  kz: {
    title: "Қамту аймағы және шарттар",
    mapAlt: "Трансшекаралық сақтандыру шартының қолданылу елдері",
    mapCaption: " ",
    items: [
      {
        title: "Қолданылу аумағы",
        text:
          "Полис картада көрсетілген елдерде жарамды. A - Австрия, B - Бельгия, BG - Болгария, CY - Кипр, CZ - Чехия, D - Германия, DK - Дания, E - Испания, EST - Эстония, F - Франция, FIN - Финляндия, GR - Греция, H - Венгрия, HR - Хорватия, I - Италия, IRL - Ирландия, IS - Исландия, L - Люксембург, LT - Литва, LV - Латвия, M - Мальта, N - Норвегия, NL - Нидерланды, P - Португалия, PL - Польша, RO - Румыния, S - Швеция, SK - Словакия, SLO - Словения, CH - Швейцария.",
      },
      {
        title: "Көлік құралдарының түрлері",
        text: "Жеңіл автокөліктер, мотоциклдер, жүк көліктері, тіркемелер, автобустар.",
      },
      {
        title: "Қолданылу мерзімі",
        text: "Ең төменгі мерзім — 1 ай. Ең жоғары — 1 жыл.",
      },
    ],
  },
  tr: {
    title: "Kapsam alanı ve koşullar",
    mapAlt: "Sınır ötesi sigorta sözleşmesinin geçerli olduğu ülkeler",
    mapCaption: " ",
    items: [
      {
        title: "Geçerlilik bölgesi",
        text:
          "Poliçe, haritada işaretli ülkelerde geçerlidir. A - Avusturya, B - Belçika, BG - Bulgaristan, CY - Kıbrıs, CZ - Çekya, D - Almanya, DK - Danimarka, E - İspanya, EST - Estonya, F - Fransa, FIN - Finlandiya, GR - Yunanistan, H - Macaristan, HR - Hırvatistan, I - İtalya, IRL - İrlanda, IS - İzlanda, L - Lüksemburg, LT - Litvanya, LV - Letonya, M - Malta, N - Norveç, NL - Hollanda, P - Portekiz, PL - Polonya, RO - Romanya, S - İsveç, SK - Slovakya, SLO - Slovenya, CH - İsviçre.",
      },
      {
        title: "Araç türleri",
        text: "Binek araçlar, motosikletler, yük araçları, römorklar ve otobüsler.",
      },
      {
        title: "Geçerlilik süresi",
        text: "Asgari süre 1 ay, azami süre 1 yıldır.",
      },
    ],
  },
  fa: {
    title: "قلمرو پوشش و شرایط",
    mapAlt: "کشورهای تحت پوشش بیمه فرامرزی",
    mapCaption: " ",
    items: [
      {
        title: "قلمرو جغرافیایی",
        text:
          "بیمه‌نامه در کشورهایی که روی نقشه مشخص شده‌اند معتبر است: A - اتریش، B - بلژیک، BG - بلغارستان، CY - قبرس، CZ - جمهوری چک، D - آلمان، DK - دانمارک، E - اسپانیا، EST - استونی، F - فرانسه، FIN - فنلاند، GR - یونان، H - مجارستان، HR - کرواسی، I - ایتالیا، IRL - ایرلند، IS - ایسلند، L - لوکزامبورگ، LT - لیتوانی، LV - لتونی، M - مالت، N - نروژ، NL - هلند، P - پرتغال، PL - لهستان، RO - رومانی، S - سوئد، SK - اسلواکی، SLO - اسلوونی، CH - سوئیس.",
      },
      {
        title: "انواع وسایل نقلیه",
        text: "خودروهای سواری، موتورسیکلت‌ها، وسایل نقلیه باری، تریلرها و اتوبوس‌ها.",
      },
      {
        title: "مدت اعتبار",
        text: "حداقل مدت ۱ ماه و حداکثر ۱ سال است.",
      },
    ],
  },
  mn: {
    title: "Хамрах хүрээ ба нөхцөл",
    mapAlt: "Хил дамнасан даатгалын гэрээ хүчинтэй улс орнууд",
    mapCaption: " ",
    items: [
      {
        title: "Хамрах нутаг дэвсгэр",
        text:
          "Полис нь газрын зураг дээр тэмдэглэгдсэн улс орнуудад хүчинтэй. A - Австри, B - Бельги, BG - Болгар, CY - Кипр, CZ - Чех, D - Герман, DK - Дани, E - Испани, EST - Эстони, F - Франц, FIN - Финланд, GR - Грек, H - Унгар, HR - Хорват, I - Итали, IRL - Ирланд, IS - Исланд, L - Люксембург, LT - Литва, LV - Латви, M - Мальта, N - Норвеги, NL - Нидерланд, P - Португал, PL - Польш, RO - Румын, S - Швед, SK - Словак, SLO - Словени, CH - Швейцар.",
      },
      {
        title: "Тээврийн хэрэгслийн төрөл",
        text: "Суудлын автомашин, мотоцикл, ачааны автомашин, чиргүүл, автобус.",
      },
      {
        title: "Хүчинтэй хугацаа",
        text: "Хамгийн бага хугацаа — 1 сар. Хамгийн их — 1 жил.",
      },
    ],
  },
  hy: {
    title: "Ծածկույթի տարածք և պայմաններ",
    mapAlt: "Տրանսսահմանային ապահովագրության պայմանագրի գործողության երկրներ",
    mapCaption: " ",
    items: [
      {
        title: "Գործողության տարածք",
        text:
          "Պոլիսը գործում է քարտեզում նշված երկրներում. A - Ավստրիա, B - Բելգիա, BG - Բուլղարիա, CY - Կիպրոս, CZ - Չեխիա, D - Գերմանիա, DK - Դանիա, E - Իսպանիա, EST - Էստոնիա, F - Ֆրանսիա, FIN - Ֆինլանդիա, GR - Հունաստան, H - Հունգարիա, HR - Խորվաթիա, I - Իտալիա, IRL - Իռլանդիա, IS - Իսլանդիա, L - Լյուքսեմբուրգ, LT - Լիտվա, LV - Լատվիա, M - Մալթա, N - Նորվեգիա, NL - Նիդերլանդներ, P - Պորտուգալիա, PL - Լեհաստան, RO - Ռումինիա, S - Շվեդիա, SK - Սլովակիա, SLO - Սլովենիա, CH - Շվեյցարիա։",
      },
      {
        title: "Տրանսպորտային միջոցների տեսակներ",
        text: "Թեթև մարդատար ավտոմեքենաներ, մոտոցիկլներ, բեռնատար տրանսպորտ, կցորդներ, ավտոբուսներ։",
      },
      {
        title: "Գործողության ժամկետ",
        text: "Նվազագույն ժամկետը՝ 1 ամիս։ Առավելագույնը՝ 1 տարի։",
      },
    ],
  },
};

export function getCoverageDictionary(lang: Lang): CoverageDict {
  return DICT[lang] ?? DICT.ru;
}
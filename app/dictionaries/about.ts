import type { Lang } from "@/app/dictionaries/header";

export interface AboutDictionary {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  cards: Array<{ title: string; text: string }>;
  company: {
    title: string;
    lines: string[];
    note: string;
  };
  contact: {
    title: string;
    desc: string;
  };
}

const RU: AboutDictionary = {
  seo: {
    title: "О нас — EURO polis",
    description: "Информация о компании, юридические данные и форма обратной связи.",
  },
  hero: {
    title: "Акредетованый страховой агент страховой компании Ergo Insurance SE",
    subtitle: "Работаем прозрачно, по правилам и с понятными условиями для клиента.",
  },
  cards: [
    {
      title: "Кто мы и чем полезны",
      text: "Помогаем оформить страхование для международных поездок и перевозок в страны Евросоюза, с учетом сроков и требований Латвийской Республики.",
    },
    {
      title: "Статус и правовая основа",
      text: "Работаем как страховой агент в рамках действующего законодательства и раскрываем обязательную информацию о компании.",
    },
    {
      title: "Прозрачные условия",
      text: "До оформления обсуждаем ключевые параметры: объект страхования, период действия, территорию, лимиты и исключения.",
    },
    {
      title: "Процесс от заявки до полиса",
      text: "Получение данных → уточнение деталей → согласование условий → оплата → выдача полиса и инструкции.",
    },
  ],
  company: {
    title: "Сведения о страховом посреднике и страховой компании",
    lines: [
      "Страховые услуги предоставляются при участии страховой компании",
      "ERGO Insurance SE (Латвийский филиал):",
      "",
      "ERGO Insurance SE Latvijas filiāle",
      "Регистрационный номер: 40103599913",
      "Юридический адрес: Skanstes iela 50, Rīga, LV-1013, Латвия",
      "",
      "Данные страхового посредника",
      "Rižova Ludmila",
      "",
      "Телефон: +371 22355307",
      "E-mail: ludmila.rizova@ergo.lv",
      "Страна осуществления деятельности: Латвия",
      "Вид страховой деятельности:",
      "пограничные страховые договоры (страхование гражданской ответственности владельцев транспортных средств для въезда на территорию других государств)",
      "",
      "Правовой статус",
      "Посредник имеет право на получение страховой премии от клиента, что означает возможность принимать оплату по страховым договорам непосредственно от страхователя с последующей передачей страховой компании.",


    ],
    
    note: "Если вам нужно оформить страхование для международной поездки или перевозки, отправьте запрос — мы уточним условия и перечень документов.",
  },
  contact: {
    title: "Напишите нам сообщение",
    desc: "Ответим по заявке и подскажем оптимальный вариант оформления.",
  },
};

const LV: AboutDictionary = {
  seo: {
    title: "Par mums — EURO polis",
    description: "Informācija par uzņēmumu, juridiskie dati un saziņas forma.",
  },
  hero: {
    title: "Akreditēts apdrošināšanas aģents apdrošināšanas sabiedrībā Ergo Insurance SE",
    subtitle: "Strādājam caurspīdīgi, ievērojot noteikumus un ar klientam saprotamiem nosacījumiem.",
  },
  cards: [
    {
      title: "Kas mēs esam un kā varam palīdzēt",
      text: "Palīdzam noformēt apdrošināšanu starptautiskiem braucieniem un pārvadājumiem uz Eiropas Savienības valstīm, ņemot vērā termiņus un Latvijas Republikas prasības.",
    },
    {
      title: "Statuss un juridiskais pamats",
      text: "Darbojamies kā apdrošināšanas aģents saskaņā ar spēkā esošajiem normatīvajiem aktiem un sniedzam obligāto informāciju par uzņēmumu.",
    },
    {
      title: "Caurspīdīgi nosacījumi",
      text: "Pirms noformēšanas apspriežam galvenos parametrus: apdrošināšanas objektu, darbības periodu, teritoriju, limitus un izņēmumus.",
    },
    {
      title: "Process no pieteikuma līdz polisei",
      text: "Datu saņemšana → detaļu precizēšana → nosacījumu saskaņošana → apmaksa → polises izsniegšana un instrukcijas.",
    },
  ],
  company: {
    title: "Informācija par apdrošināšanas starpnieku un apdrošināšanas sabiedrību",
    lines: [
      "Apdrošināšanas pakalpojumi tiek sniegti sadarbībā ar apdrošināšanas sabiedrību",
      "ERGO Insurance SE (Latvijas filiāle):",
      "",
      "ERGO Insurance SE Latvijas filiāle",
      "Reģistrācijas numurs: 40103599913",
      "Juridiskā adrese: Skanstes iela 50, Rīga, LV-1013, Latvija",
      "",
      "Apdrošināšanas starpnieka dati",
      "Rižova Ludmila",
      "",
      "Tālrunis: +371 22355307",
      "E-pasts: ludmila.rizova@ergo.lv",
      "Darbības valsts: Latvija",
      "Apdrošināšanas darbības veids:",
      "robežpolise (transportlīdzekļu īpašnieku civiltiesiskās atbildības apdrošināšana iebraukšanai citu valstu teritorijā)",
      "",
      "Tiesiskais statuss",
      "Starpniekam ir tiesības saņemt apdrošināšanas prēmiju no klienta, kas nozīmē iespēju pieņemt maksājumu par apdrošināšanas līgumiem tieši no apdrošinājuma ņēmēja ar turpmāku pārskaitījumu apdrošināšanas sabiedrībai.",
    ],
    note: "Ja jums nepieciešams noformēt apdrošināšanu starptautiskam braucienam vai pārvadājumam, nosūtiet pieprasījumu — mēs precizēsim nosacījumus un nepieciešamo dokumentu sarakstu.",
  },
  contact: {
    title: "Nosūtiet mums ziņojumu",
    desc: "Atbildēsim uz jūsu pieprasījumu un ieteiksim optimālo noformēšanas variantu.",
  },
};

export const aboutDictionary: Record<Lang, AboutDictionary> = {
  ru: RU,
  lv: LV,
  en: RU,
  uz: RU,
  kg: RU,
};

export function getAboutDictionary(lang: Lang): AboutDictionary {
  return aboutDictionary[lang] ?? RU;
}

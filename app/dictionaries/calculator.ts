// app/dictionaries/calculator.ts
import type { Lang } from "@/app/dictionaries/header";

export type Vehicle = "car" | "van" | "truck" | "trailer" | "special";
export type Term = "30" | "60" | "90" | "180" | "365";

export interface CalculatorDictionary {
  title: string;
  badge: string;

  intro: string;

  fields: {
    vehicle: { label: string; options: Array<{ value: Vehicle; label: string }> };
    term: { label: string; options: Array<{ value: Term; label: string }> };
  };

  button: string;
  resultTitle: string;
  resultHint: string;
  note: string;
}

export const calculatorDictionary: Record<Lang, CalculatorDictionary> = {
  ru: {
    title: "Калькулятор стоимости",
    badge: "~ 1 минута",
    intro: "Выберите срок страхования и тип ТС.",

    fields: {
      vehicle: {
        label: "Тип ТС",
        options: [
          { value: "car", label: "Легковые" },
          { value: "van", label: "Автобусы" },
          { value: "truck", label: "Грузовые" },
          { value: "trailer", label: "Прицепы" },
          { value: "special", label: "Спецтехника" },
        ],
      },
      term: {
        label: "Срок страхования",
        options: [
          { value: "30", label: "1 месяц" },
          { value: "60", label: "2 месяца" },
          { value: "90", label: "3 месяца" },
          { value: "180", label: "6 месяцев" },
          { value: "365", label: "12 месяцев" },
        ],
      },
    },

    button: "Рассчитать",
    resultTitle: "Ориентировочная стоимость",
    resultHint: " ",
    note: " ",
  },

  lv: {
    title: "Izmaksu kalkulators",
    badge: "~ 1 minūte",
    intro: "Izvēlieties apdrošināšanas periodu un transportlīdzekļa veidu.",

    fields: {
      vehicle: {
        label: "Transportlīdzekļa veids",
        options: [
          { value: "car", label: "Vieglie automobiļi" },
          { value: "van", label: "Autobusi" },
          { value: "truck", label: "Kravas automobiļi" },
          { value: "trailer", label: "Piekabes" },
          { value: "special", label: "Speciālā tehnika" },
        ],
      },
      term: {
        label: "Apdrošināšanas periods",
        options: [
          { value: "30", label: "1 mēnesis" },
          { value: "60", label: "2 mēneši" },
          { value: "90", label: "3 mēneši" },
          { value: "180", label: "6 mēneši" },
          { value: "365", label: "12 mēneši" },
        ],
      },
    },

    button: "Aprēķināt",
    resultTitle: "Aptuvenās izmaksas",
    resultHint: " ",
    note: " ",
  },


  en: {
    title: "Price Calculator",
    badge: "~ 1 minute",
    intro: "Select the insurance period and vehicle type.",

    fields: {
      vehicle: {
        label: "Vehicle type",
        options: [
          { value: "car", label: "Passenger cars" },
          { value: "van", label: "Buses" },
          { value: "truck", label: "Trucks" },
          { value: "trailer", label: "Trailers" },
          { value: "special", label: "Special vehicles" },
        ],
      },
      term: {
        label: "Insurance period",
        options: [
          { value: "30", label: "1 month" },
          { value: "60", label: "2 months" },
          { value: "90", label: "3 months" },
          { value: "180", label: "6 months" },
          { value: "365", label: "12 months" },
        ],
      },
    },

    button: "Calculate",
    resultTitle: "Estimated cost",
    resultHint: " ",
    note: " ",
  },
  uz: {
    title: "Narx kalkulyatori",
    badge: "~ 1 daqiqa",
    intro: "Sug‘urta muddati va transport vositasi turini tanlang.",

    fields: {
      vehicle: {
        label: "Transport vositasi turi",
        options: [
          { value: "car", label: "Yengil avtomobillar" },
          { value: "van", label: "Avtobuslar" },
          { value: "truck", label: "Yuk avtomobillari" },
          { value: "trailer", label: "Tirkamalar" },
          { value: "special", label: "Maxsus texnika" },
        ],
      },
      term: {
        label: "Sug‘urta muddati",
        options: [
          { value: "30", label: "1 oy" },
          { value: "60", label: "2 oy" },
          { value: "90", label: "3 oy" },
          { value: "180", label: "6 oy" },
          { value: "365", label: "12 oy" },
        ],
      },
    },

    button: "Hisoblash",
    resultTitle: "Taxminiy narx",
    resultHint: " ",
    note: " ",
  },
  kg: {
    title: "Бааны эсептөө калькулятору",
    badge: "~ 1 мүнөт",
    intro: "Камсыздандыруу мөөнөтүн жана транспорт каражатынын түрүн тандаңыз.",

    fields: {
      vehicle: {
        label: "Транспорт каражатынын түрү",
        options: [
          { value: "car", label: "Жеңил автоунаалар" },
          { value: "van", label: "Автобустар" },
          { value: "truck", label: "Жүк ташуучу унаалар" },
          { value: "trailer", label: "Прицептер" },
          { value: "special", label: "Атайын техника" },
        ],
      },
      term: {
        label: "Камсыздандыруу мөөнөтү",
        options: [
          { value: "30", label: "1 ай" },
          { value: "60", label: "2 ай" },
          { value: "90", label: "3 ай" },
          { value: "180", label: "6 ай" },
          { value: "365", label: "12 ай" },
        ],
      },
    },

    button: "Эсептөө",
    resultTitle: "Болжолдуу баа",
    resultHint: " ",
    note: " ",
  },

  ka: {
    title: "ღირებულების კალკულატორი",
    badge: "~ 1 წუთი",
    intro: "აირჩიეთ დაზღვევის ვადა და სატრანსპორტო საშუალების ტიპი.",

    fields: {
      vehicle: {
        label: "სატრანსპორტო საშუალების ტიპი",
        options: [
          { value: "car", label: "მსუბუქი ავტომობილები" },
          { value: "van", label: "ავტობუსები" },
          { value: "truck", label: "სატვირთოები" },
          { value: "trailer", label: "მისაბმელები" },
          { value: "special", label: "სპეცტექნიკა" },
        ],
      },
      term: {
        label: "დაზღვევის ვადა",
        options: [
          { value: "30", label: "1 თვე" },
          { value: "60", label: "2 თვე" },
          { value: "90", label: "3 თვე" },
          { value: "180", label: "6 თვე" },
          { value: "365", label: "12 თვე" },
        ],
      },
    },

    button: "გამოთვლა",
    resultTitle: "საორიენტაციო ღირებულება",
    resultHint: " ",
    note: " ",
  },

  kz: {
    title: "Құн калькуляторы",
    badge: "~ 1 минут",
    intro: "Сақтандыру мерзімін және көлік құралын таңдаңыз.",

    fields: {
      vehicle: {
        label: "Көлік құралының түрі",
        options: [
          { value: "car", label: "Жеңіл автокөліктер" },
          { value: "van", label: "Автобустар" },
          { value: "truck", label: "Жүк көліктері" },
          { value: "trailer", label: "Тіркемелер" },
          { value: "special", label: "Арнайы техника" },
        ],
      },
      term: {
        label: "Сақтандыру мерзімі",
        options: [
          { value: "30", label: "1 ай" },
          { value: "60", label: "2 ай" },
          { value: "90", label: "3 ай" },
          { value: "180", label: "6 ай" },
          { value: "365", label: "12 ай" },
        ],
      },
    },

    button: "Есептеу",
    resultTitle: "Болжамды құны",
    resultHint: " ",
    note: " ",
  },

  tr: {
    title: "Fiyat hesaplayıcı",
    badge: "~ 1 dakika",
    intro: "Sigorta süresini ve araç türünü seçin.",

    fields: {
      vehicle: {
        label: "Araç türü",
        options: [
          { value: "car", label: "Binek araçlar" },
          { value: "van", label: "Otobüsler" },
          { value: "truck", label: "Yük araçları" },
          { value: "trailer", label: "Römorklar" },
          { value: "special", label: "Özel ekipman" },
        ],
      },
      term: {
        label: "Sigorta süresi",
        options: [
          { value: "30", label: "1 ay" },
          { value: "60", label: "2 ay" },
          { value: "90", label: "3 ay" },
          { value: "180", label: "6 ay" },
          { value: "365", label: "12 ay" },
        ],
      },
    },

    button: "Hesapla",
    resultTitle: "Tahmini maliyet",
    resultHint: " ",
    note: " ",
  },

  fa: {
    title: "محاسبه هزینه",
    badge: "حدود ۱ دقیقه",
    intro: "مدت بیمه و نوع وسیله نقلیه را انتخاب کنید.",

    fields: {
      vehicle: {
        label: "نوع وسیله نقلیه",
        options: [
          { value: "car", label: "سواری" },
          { value: "van", label: "اتوبوس" },
          { value: "truck", label: "کامیون" },
          { value: "trailer", label: "تریلر / یدک" },
          { value: "special", label: "ماشین‌آلات ویژه" },
        ],
      },
      term: {
        label: "مدت بیمه",
        options: [
          { value: "30", label: "۱ ماه" },
          { value: "60", label: "۲ ماه" },
          { value: "90", label: "۳ ماه" },
          { value: "180", label: "۶ ماه" },
          { value: "365", label: "۱۲ ماه" },
        ],
      },
    },

    button: "محاسبه",
    resultTitle: "هزینه تقریبی",
    resultHint: " ",
    note: " ",
  },

  mn: {
    title: "Үнийн тооцоолуур",
    badge: "~ 1 минут",
    intro: "Даатгалын хугацаа болон тээврийн хэрэгслийн төрлийг сонгоно уу.",

    fields: {
      vehicle: {
        label: "Тээврийн хэрэгслийн төрөл",
        options: [
          { value: "car", label: "Суудлын автомашин" },
          { value: "van", label: "Автобус" },
          { value: "truck", label: "Ачааны автомашин" },
          { value: "trailer", label: "Чиргүүл" },
          { value: "special", label: "Тусгай зориулалтын техник" },
        ],
      },
      term: {
        label: "Даатгалын хугацаа",
        options: [
          { value: "30", label: "1 сар" },
          { value: "60", label: "2 сар" },
          { value: "90", label: "3 сар" },
          { value: "180", label: "6 сар" },
          { value: "365", label: "12 сар" },
        ],
      },
    },

    button: "Тооцоолох",
    resultTitle: "Ойролцоо үнэ",
    resultHint: " ",
    note: " ",
  },

  hy: {
    title: "Արժեքի հաշվիչ",
    badge: "~ 1 րոպե",
    intro: "Ընտրեք ապահովագրության ժամկետը և տրանսպորտային միջոցի տեսակը։",

    fields: {
      vehicle: {
        label: "Տրանսպորտային միջոցի տեսակ",
        options: [
          { value: "car", label: "Թեթև մարդատար" },
          { value: "van", label: "Ավտոբուսներ" },
          { value: "truck", label: "Բեռնատարներ" },
          { value: "trailer", label: "Կցորդներ" },
          { value: "special", label: "Հատուկ տեխնիկա" },
        ],
      },
      term: {
        label: "Ապահովագրության ժամկետ",
        options: [
          { value: "30", label: "1 ամիս" },
          { value: "60", label: "2 ամիս" },
          { value: "90", label: "3 ամիս" },
          { value: "180", label: "6 ամիս" },
          { value: "365", label: "12 ամիս" },
        ],
      },
    },

    button: "Հաշվել",
    resultTitle: "Մոտավոր արժեք",
    resultHint: " ",
    note: " ",
  },
};

export function getCalculatorDictionary(lang: Lang): CalculatorDictionary {
  return calculatorDictionary[lang] ? calculatorDictionary[lang] : calculatorDictionary.ru;
}
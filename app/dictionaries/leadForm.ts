// app/dictionaries/leadForm.ts
import type { Lang } from "@/app/dictionaries/header";

export type LeadFormDictionary = {
  title: string;
  intro: string;

  notSelected: string;
  submit: string;

  fileForbidden: string;

  statusSending: string;
  statusError: string;
  statusSuccess: string;

  contact: {
    legend: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  };

  policyholder: {
    companyCheckbox: string;

    individualTitle: string;
    birthDate: string;

    addressTitle: string;
    addressPlaceholder: string;
    addressHelp: string;

    companyTitle: string;
    companyInn: string;
    ceoFullName: string;
    ceoTitle: string;
  };

  policy: {
    legend: string;
    countryFrom: string;
    vehicleType: string;
    startDate: string;
    period: string;

    vehiclePlate: string;
    docsLabel: string;
    docsHint: string;

    addVehicle: string;
    removeVehicle: string;
    vehicleBlockTitle: string;

    options: {
      countriesFrom: Array<{ value: string; label: string }>;
      vehicleTypes: Array<{ value: string; label: string }>;
      periods: Array<{ value: string; label: string }>;
    };
  };
};

const ru: LeadFormDictionary = {
  title: "Заявка на покупку полиса",
  intro: "Заполните данные. Мы подготовим полис и пришлём реквизиты на оплату.",

  notSelected: "Не выбрано",
  submit: "Отправить заявку",

  fileForbidden: "недопустим (архив, аудио или видео).",

  statusSending: "Отправка…",
  statusError: "Ошибка при отправке заявки. Попробуйте позже.",
  statusSuccess: "Заявка отправлена. Мы свяжемся с вами.",

  contact: {
    legend: "Контактные данные",
    firstName: "Имя",
    lastName: "Фамилия",
    phone: "Телефон (с кодом страны)",
    email: "E-mail",
  },

  policyholder: {
    companyCheckbox: "Оформить на юридическое лицо",

    individualTitle: "Данные страхователя (физическое лицо)",
    birthDate: "Дата рождения",

    addressTitle: "Адрес регистрации",
    addressPlaceholder: "Страна, город, улица, дом, квартира (если есть)",
    addressHelp: "Укажите адрес одной строкой.",

    companyTitle: "Данные страхователя (юридическое лицо)",
    companyInn: "ИНН компании",
    ceoFullName: "ФИО руководителя",
    ceoTitle: "Должность руководителя",
  },

  policy: {
    legend: "Данные для расчёта и оформления",
    countryFrom: "Страна регистрации авто",
    vehicleType: "Тип ТС",
    startDate: "Дата начала",
    period: "Срок",

    vehiclePlate: "Госномер",
    docsLabel: "Техпаспорт (фото или PDF)",
    docsHint: "Можно прикрепить несколько файлов.",

    addVehicle: "Добавить ТС",
    removeVehicle: "Удалить",
    vehicleBlockTitle: "Транспортное средство",

    options: {
      countriesFrom: [
        { value: "KZ", label: "Казахстан" },
        { value: "UA", label: "Украина" },
        { value: "GE", label: "Грузия" },
        { value: "UZ", label: "Узбекистан" },
        { value: "KG", label: "Кыргызстан" },
        { value: "MD", label: "Молдова" },
        { value: "OTHER", label: "Другая" },
      ],
      vehicleTypes: [
        { value: "car", label: "Легковое" },
        { value: "truck", label: "Грузовое" },
        { value: "bus", label: "Автобус" },
        { value: "moto", label: "Мотоцикл" },
        { value: "trailer", label: "Прицеп" },
        { value: "special", label: "Спецтехника" },
      ],
      periods: [
        { value: "30", label: "30 дней" },
        { value: "90", label: "90 дней" },
        { value: "180", label: "6 месяцев" },
        { value: "365", label: "12 месяцев" },
      ],
    },
  },
};

const lv: LeadFormDictionary = {
  title: "Pieteikums polises iegādei",
  intro: "Aizpildiet datus. Sagatavosim polisi un nosūtīsim maksājuma rekvizītus.",

  notSelected: "Nav izvēlēts",
  submit: "Nosūtīt pieteikumu",

  fileForbidden: "nav atļauts (arhīvs, audio vai video).",

  statusSending: "Nosūtīšana…",
  statusError: "Kļūda, nosūtot pieteikumu. Lūdzu, mēģiniet vēlāk.",
  statusSuccess: "Pieteikums nosūtīts. Mēs ar jums sazināsimies.",

  contact: {
    legend: "Kontaktinformācija",
    firstName: "Vārds",
    lastName: "Uzvārds",
    phone: "Tālrunis (ar valsts kodu)",
    email: "E-pasts",
  },

  policyholder: {
    companyCheckbox: "Noformēt uz juridisko personu",

    individualTitle: "Apdrošinājuma ņēmēja dati (fiziska persona)",
    birthDate: "Dzimšanas datums",

    addressTitle: "Deklarētā adrese",
    addressPlaceholder: "Valsts, pilsēta, iela, māja, dzīvoklis (ja ir)",
    addressHelp: "Norādiet adresi vienā rindā.",

    companyTitle: "Apdrošinājuma ņēmēja dati (juridiska persona)",
    companyInn: "Uzņēmuma reģistrācijas numurs",
    ceoFullName: "Vadītāja vārds, uzvārds",
    ceoTitle: "Vadītāja amats",
  },

  policy: {
    legend: "Dati aprēķinam un noformēšanai",
    countryFrom: "Transportlīdzekļa reģistrācijas valsts",
    vehicleType: "Transportlīdzekļa veids",
    startDate: "Sākuma datums",
    period: "Termiņš",

    vehiclePlate: "Reģistrācijas numurs",
    docsLabel: "Reģistrācijas apliecība (foto vai PDF)",
    docsHint: "Var pievienot vairākus failus.",

    addVehicle: "Pievienot transportlīdzekli",
    removeVehicle: "Dzēst",
    vehicleBlockTitle: "Transportlīdzeklis",

    options: {
      countriesFrom: [
        { value: "KZ", label: "Kazahstāna" },
        { value: "UA", label: "Ukraina" },
        { value: "GE", label: "Gruzija" },
        { value: "UZ", label: "Uzbekistāna" },
        { value: "KG", label: "Kirgizstāna" },
        { value: "MD", label: "Moldova" },
        { value: "OTHER", label: "Cita" },
      ],
      vehicleTypes: [
        { value: "car", label: "Vieglā automašīna" },
        { value: "truck", label: "Kravas automašīna" },
        { value: "bus", label: "Autobuss" },
        { value: "moto", label: "Motocikls" },
        { value: "trailer", label: "Piekabe" },
        { value: "special", label: "Speciālā tehnika" },
      ],
      periods: [
        { value: "30", label: "30 dienas" },
        { value: "90", label: "90 dienas" },
        { value: "180", label: "6 mēneši" },
        { value: "365", label: "12 mēneši" },
      ],
    },
  },
};

const en: LeadFormDictionary = {
  title: "Policy purchase request",
  intro: "Fill in your details. We will prepare the policy and send you payment instructions.",

  notSelected: "Not selected",
  submit: "Submit request",

  fileForbidden: "is not allowed (archive, audio, or video).",

  statusSending: "Sending…",
  statusError: "Error submitting the request. Please try again later.",
  statusSuccess: "Request submitted. We will contact you.",

  contact: {
    legend: "Contact details",
    firstName: "First name",
    lastName: "Last name",
    phone: "Phone number (with country code)",
    email: "Email",
  },

  policyholder: {
    companyCheckbox: "Apply as a legal entity",

    individualTitle: "Policyholder details (individual)",
    birthDate: "Date of birth",

    addressTitle: "Registered address",
    addressPlaceholder: "Country, city, street, building, apartment (if applicable)",
    addressHelp: "Enter the address in a single line.",

    companyTitle: "Policyholder details (legal entity)",
    companyInn: "Company tax ID",
    ceoFullName: "Full name of the director",
    ceoTitle: "Position of the director",
  },

  policy: {
    legend: "Details for calculation and issuance",
    countryFrom: "Country of vehicle registration",
    vehicleType: "Vehicle type",
    startDate: "Start date",
    period: "Period",

    vehiclePlate: "License plate number",
    docsLabel: "Vehicle registration document (photo or PDF)",
    docsHint: "You can upload multiple files.",

    addVehicle: "Add vehicle",
    removeVehicle: "Remove",
    vehicleBlockTitle: "Vehicle",

    options: {
      countriesFrom: [
        { value: "KZ", label: "Kazakhstan" },
        { value: "UA", label: "Ukraine" },
        { value: "GE", label: "Georgia" },
        { value: "UZ", label: "Uzbekistan" },
        { value: "KG", label: "Kyrgyzstan" },
        { value: "MD", label: "Moldova" },
        { value: "OTHER", label: "Other" },
      ],
      vehicleTypes: [
        { value: "car", label: "Passenger car" },
        { value: "truck", label: "Truck" },
        { value: "bus", label: "Bus" },
        { value: "moto", label: "Motorcycle" },
        { value: "trailer", label: "Trailer" },
        { value: "special", label: "Special vehicle" },
      ],
      periods: [
        { value: "30", label: "30 days" },
        { value: "90", label: "90 days" },
        { value: "180", label: "6 months" },
        { value: "365", label: "12 months" },
      ],
    },
  },
};

const uz: LeadFormDictionary = {
  title: "Polis sotib olish uchun ariza",
  intro: "Ma’lumotlarni kiriting. Biz polisni tayyorlaymiz va to‘lov rekvizitlarini yuboramiz.",

  notSelected: "Tanlanmagan",
  submit: "Arizani yuborish",

  fileForbidden: "ruxsat etilmaydi (arxiv, audio yoki video).",

  statusSending: "Yuborilmoqda…",
  statusError: "Arizani yuborishda xatolik yuz berdi. Keyinroq urinib ko‘ring.",
  statusSuccess: "Ariza yuborildi. Siz bilan bog‘lanamiz.",

  contact: {
    legend: "Aloqa ma’lumotlari",
    firstName: "Ism",
    lastName: "Familiya",
    phone: "Telefon (mamlakat kodi bilan)",
    email: "E-mail",
  },

  policyholder: {
    companyCheckbox: "Yuridik shaxs nomiga rasmiylashtirish",

    individualTitle: "Sug‘urtalanuvchi ma’lumotlari (jismoniy shaxs)",
    birthDate: "Tug‘ilgan sana",

    addressTitle: "Ro‘yxatdan o‘tgan manzil",
    addressPlaceholder: "Mamlakat, shahar, ko‘cha, uy, kvartira (agar bo‘lsa)",
    addressHelp: "Manzilni bitta qatorda kiriting.",

    companyTitle: "Sug‘urtalanuvchi ma’lumotlari (yuridik shaxs)",
    companyInn: "Kompaniya INN",
    ceoFullName: "Rahbar F.I.Sh.",
    ceoTitle: "Rahbar lavozimi",
  },

  policy: {
    legend: "Hisoblash va rasmiylashtirish uchun ma’lumotlar",
    countryFrom: "Avtomobil ro‘yxatdan o‘tgan davlat",
    vehicleType: "Transport turi",
    startDate: "Boshlanish sanasi",
    period: "Muddat",

    vehiclePlate: "Davlat raqami",
    docsLabel: "Texnik pasport (foto yoki PDF)",
    docsHint: "Bir nechta fayl biriktirish mumkin.",

    addVehicle: "Transport vositasi qo‘shish",
    removeVehicle: "O‘chirish",
    vehicleBlockTitle: "Transport vositasi",

    options: {
      countriesFrom: [
        { value: "KZ", label: "Qozog‘iston" },
        { value: "UA", label: "Ukraina" },
        { value: "GE", label: "Gruziya" },
        { value: "UZ", label: "O‘zbekiston" },
        { value: "KG", label: "Qirg‘iziston" },
        { value: "MD", label: "Moldova" },
        { value: "OTHER", label: "Boshqa" },
      ],
      vehicleTypes: [
        { value: "car", label: "Yengil avtomobil" },
        { value: "truck", label: "Yuk avtomobili" },
        { value: "bus", label: "Avtobus" },
        { value: "moto", label: "Mototsikl" },
        { value: "trailer", label: "Tirkama" },
        { value: "special", label: "Maxsus texnika" },
      ],
      periods: [
        { value: "30", label: "30 kun" },
        { value: "90", label: "90 kun" },
        { value: "180", label: "6 oy" },
        { value: "365", label: "12 oy" },
      ],
    },
  },
};

const kg: LeadFormDictionary = {
  title: "Полис сатып алуу үчүн өтүнмө",
  intro: "Маалыматтарды толтуруңуз. Биз полисти даярдап, төлөм реквизиттерин жөнөтөбүз.",

  notSelected: "Тандалган эмес",
  submit: "Өтүнмө жөнөтүү",

  fileForbidden: "уруксат берилбейт (архив, аудио же видео).",

  statusSending: "Жөнөтүлүүдө…",
  statusError: "Өтүнмөнү жөнөтүүдө ката кетти. Кийинчерээк кайра аракет кылыңыз.",
  statusSuccess: "Өтүнмө жөнөтүлдү. Биз сиз менен байланышабыз.",

  contact: {
    legend: "Байланыш маалыматтары",
    firstName: "Аты",
    lastName: "Фамилиясы",
    phone: "Телефон (өлкө коду менен)",
    email: "E-mail",
  },

  policyholder: {
    companyCheckbox: "Юридикалык жакка тариздөө",

    individualTitle: "Камсыздандыруучунун маалыматтары (жеке жак)",
    birthDate: "Туулган күнү",

    addressTitle: "Катталган дарек",
    addressPlaceholder: "Өлкө, шаар, көчө, үй, батир (эгер болсо)",
    addressHelp: "Даректи бир сап менен жазыңыз.",

    companyTitle: "Камсыздандыруучунун маалыматтары (юридикалык жак)",
    companyInn: "Компаниянын ИНН",
    ceoFullName: "Жетекчинин толук аты-жөнү",
    ceoTitle: "Жетекчинин кызмат орду",
  },

  policy: {
    legend: "Эсептөө жана тариздөө үчүн маалыматтар",
    countryFrom: "Авто катталган өлкө",
    vehicleType: "Транспорт каражатынын түрү",
    startDate: "Башталыш күнү",
    period: "Мөөнөт",

    vehiclePlate: "Мамлекеттик номер",
    docsLabel: "Техпаспорт (сүрөт же PDF)",
    docsHint: "Бир нече файл тиркөөгө болот.",

    addVehicle: "ТК кошуу",
    removeVehicle: "Өчүрүү",
    vehicleBlockTitle: "Транспорт каражаты",

    options: {
      countriesFrom: [
        { value: "KZ", label: "Казакстан" },
        { value: "UA", label: "Украина" },
        { value: "GE", label: "Грузия" },
        { value: "UZ", label: "Өзбекстан" },
        { value: "KG", label: "Кыргызстан" },
        { value: "MD", label: "Молдова" },
        { value: "OTHER", label: "Башка" },
      ],
      vehicleTypes: [
        { value: "car", label: "Жеңил автоунаа" },
        { value: "truck", label: "Жүк ташуучу унаа" },
        { value: "bus", label: "Автобус" },
        { value: "moto", label: "Мотоцикл" },
        { value: "trailer", label: "Прицеп" },
        { value: "special", label: "Атайын техника" },
      ],
      periods: [
        { value: "30", label: "30 күн" },
        { value: "90", label: "90 күн" },
        { value: "180", label: "6 ай" },
        { value: "365", label: "12 ай" },
      ],
    },
  },
};

const ka: LeadFormDictionary = {
  title: "პოლისის შეძენის განაცხადი",
  intro: "შეავსეთ მონაცემები. ჩვენ მოვამზადებთ პოლისს და გამოგიგზავნით გადახდის დეტალებს.",

  notSelected: "არ არის არჩეული",
  submit: "განაცხადის გაგზავნა",

  fileForbidden: "დაუშვებელია (არქივი, აუდიო ან ვიდეო).",

  statusSending: "იგზავნება…",
  statusError: "შეცდომა განაცხადის გაგზავნისას. სცადეთ მოგვიანებით.",
  statusSuccess: "განაცხადი გაგზავნილია. ჩვენ დაგიკავშირდებით.",

  contact: {
    legend: "საკონტაქტო მონაცემები",
    firstName: "სახელი",
    lastName: "გვარი",
    phone: "ტელეფონი (ქვეყნის კოდით)",
    email: "ელ-ფოსტა",
  },

  policyholder: {
    companyCheckbox: "იურიდიულ პირზე გაფორმება",

    individualTitle: "დამზღვევის მონაცემები (ფიზიკური პირი)",
    birthDate: "დაბადების თარიღი",

    addressTitle: "რეგისტრაციის მისამართი",
    addressPlaceholder: "ქვეყანა, ქალაქი, ქუჩა, სახლი, ბინა (თუ არის)",
    addressHelp: "მიუთითეთ მისამართი ერთ სტრიქონში.",

    companyTitle: "დამზღვევის მონაცემები (იურიდიული პირი)",
    companyInn: "კომპანიის საიდენტიფიკაციო კოდი",
    ceoFullName: "ხელმძღვანელის სახელი და გვარი",
    ceoTitle: "ხელმძღვანელის თანამდებობა",
  },

  policy: {
    legend: "მონაცემები გაანგარიშებისა და გაფორმებისთვის",
    countryFrom: "ავტომობილის რეგისტრაციის ქვეყანა",
    vehicleType: "სატრანსპორტო საშუალების ტიპი",
    startDate: "დაწყების თარიღი",
    period: "ვადა",

    vehiclePlate: "სახელმწიფო ნომერი",
    docsLabel: "ტექპასპორტი (ფოტო ან PDF)",
    docsHint: "შეგიძლიათ რამდენიმე ფაილის დამატება.",

    addVehicle: "ТС-ის დამატება",
    removeVehicle: "წაშლა",
    vehicleBlockTitle: "სატრანსპორტო საშუალება",

    options: {
      countriesFrom: [
        { value: "KZ", label: "ყაზახეთი" },
        { value: "UA", label: "უკრაინა" },
        { value: "GE", label: "საქართველო" },
        { value: "UZ", label: "უზბეკეთი" },
        { value: "KG", label: "ყირგიზეთი" },
        { value: "MD", label: "მოლდოვა" },
        { value: "OTHER", label: "სხვა" },
      ],
      vehicleTypes: [
        { value: "car", label: "მსუბუქი ავტომობილი" },
        { value: "truck", label: "სატვირთო" },
        { value: "bus", label: "ავტობუსი" },
        { value: "moto", label: "მოტოციკლი" },
        { value: "trailer", label: "მისაბმელი" },
        { value: "special", label: "სპეცტექნიკა" },
      ],
      periods: [
        { value: "30", label: "30 დღე" },
        { value: "90", label: "90 დღე" },
        { value: "180", label: "6 თვე" },
        { value: "365", label: "12 თვე" },
      ],
    },
  },
};

const kz: LeadFormDictionary = {
  title: "Полис сатып алуға өтінім",
  intro: "Деректерді толтырыңыз. Біз полисті дайындап, төлем реквизиттерін жібереміз.",

  notSelected: "Таңдалмаған",
  submit: "Өтінімді жіберу",

  fileForbidden: "рұқсат етілмейді (архив, аудио немесе видео).",

  statusSending: "Жіберілуде…",
  statusError: "Өтінімді жіберу кезінде қате орын алды. Кейінірек қайталап көріңіз.",
  statusSuccess: "Өтінім жіберілді. Біз сізбен байланысамыз.",

  contact: {
    legend: "Байланыс деректері",
    firstName: "Аты",
    lastName: "Тегі",
    phone: "Телефон (ел коды көрсетілген)",
    email: "E-mail",
  },

  policyholder: {
    companyCheckbox: "Заңды тұлғаға рәсімдеу",

    individualTitle: "Сақтанушы деректері (жеке тұлға)",
    birthDate: "Туған күні",

    addressTitle: "Тіркеу мекенжайы",
    addressPlaceholder: "Ел, қала, көше, үй, пәтер (бар болса)",
    addressHelp: "Мекенжайды бір жолмен көрсетіңіз.",

    companyTitle: "Сақтанушы деректері (заңды тұлға)",
    companyInn: "Компанияның БСН/ЖСН",
    ceoFullName: "Басшының толық аты-жөні",
    ceoTitle: "Басшының лауазымы",
  },

  policy: {
    legend: "Есептеу және рәсімдеу үшін деректер",
    countryFrom: "Көлік тіркелген ел",
    vehicleType: "Көлік түрі",
    startDate: "Басталу күні",
    period: "Мерзім",

    vehiclePlate: "Мемлекеттік нөмірі",
    docsLabel: "Техпаспорт (фото немесе PDF)",
    docsHint: "Бірнеше файл жүктеуге болады.",

    addVehicle: "Көлік қосу",
    removeVehicle: "Өшіру",
    vehicleBlockTitle: "Көлік құралы",

    options: {
      countriesFrom: [
        { value: "KZ", label: "Қазақстан" },
        { value: "UA", label: "Украина" },
        { value: "GE", label: "Грузия" },
        { value: "UZ", label: "Өзбекстан" },
        { value: "KG", label: "Қырғызстан" },
        { value: "MD", label: "Молдова" },
        { value: "OTHER", label: "Басқа" },
      ],
      vehicleTypes: [
        { value: "car", label: "Жеңіл автокөлік" },
        { value: "truck", label: "Жүк көлігі" },
        { value: "bus", label: "Автобус" },
        { value: "moto", label: "Мотоцикл" },
        { value: "trailer", label: "Тіркеме" },
        { value: "special", label: "Арнайы техника" },
      ],
      periods: [
        { value: "30", label: "30 күн" },
        { value: "90", label: "90 күн" },
        { value: "180", label: "6 ай" },
        { value: "365", label: "12 ай" },
      ],
    },
  },
};

const tr: LeadFormDictionary = {
  title: "Poliçe satın alma başvurusu",
  intro: "Bilgileri doldurun. Poliçeyi hazırlayıp ödeme bilgilerini size göndereceğiz.",

  notSelected: "Seçilmedi",
  submit: "Başvuruyu gönder",

  fileForbidden: "izin verilmiyor (arşiv, ses veya video).",

  statusSending: "Gönderiliyor…",
  statusError: "Başvuru gönderilirken hata oluştu. Lütfen daha sonra tekrar deneyin.",
  statusSuccess: "Başvuru gönderildi. Sizinle iletişime geçeceğiz.",

  contact: {
    legend: "İletişim bilgileri",
    firstName: "Ad",
    lastName: "Soyad",
    phone: "Telefon (ülke kodu ile)",
    email: "E-posta",
  },

  policyholder: {
    companyCheckbox: "Tüzel kişi adına düzenle",

    individualTitle: "Sigorta ettiren bilgileri (gerçek kişi)",
    birthDate: "Doğum tarihi",

    addressTitle: "Kayıt adresi",
    addressPlaceholder: "Ülke, şehir, sokak, bina, daire (varsa)",
    addressHelp: "Adresi tek satır halinde girin.",

    companyTitle: "Sigorta ettiren bilgileri (tüzel kişi)",
    companyInn: "Vergi numarası",
    ceoFullName: "Yetkili kişinin adı soyadı",
    ceoTitle: "Yetkilinin görevi",
  },

  policy: {
    legend: "Hesaplama ve düzenleme bilgileri",
    countryFrom: "Aracın kayıtlı olduğu ülke",
    vehicleType: "Araç türü",
    startDate: "Başlangıç tarihi",
    period: "Süre",

    vehiclePlate: "Plaka",
    docsLabel: "Ruhsat (fotoğraf veya PDF)",
    docsHint: "Birden fazla dosya ekleyebilirsiniz.",

    addVehicle: "Araç ekle",
    removeVehicle: "Sil",
    vehicleBlockTitle: "Araç",

    options: {
      countriesFrom: [
        { value: "KZ", label: "Kazakistan" },
        { value: "UA", label: "Ukrayna" },
        { value: "GE", label: "Gürcistan" },
        { value: "UZ", label: "Özbekistan" },
        { value: "KG", label: "Kırgızistan" },
        { value: "MD", label: "Moldova" },
        { value: "OTHER", label: "Diğer" },
      ],
      vehicleTypes: [
        { value: "car", label: "Binek araç" },
        { value: "truck", label: "Yük aracı" },
        { value: "bus", label: "Otobüs" },
        { value: "moto", label: "Motosiklet" },
        { value: "trailer", label: "Römork" },
        { value: "special", label: "Özel ekipman" },
      ],
      periods: [
        { value: "30", label: "30 gün" },
        { value: "90", label: "90 gün" },
        { value: "180", label: "6 ay" },
        { value: "365", label: "12 ay" },
      ],
    },
  },
};

const fa: LeadFormDictionary = {
  title: "درخواست خرید بیمه‌نامه",
  intro: "اطلاعات را وارد کنید. ما بیمه‌نامه را آماده کرده و جزئیات پرداخت را برای شما ارسال می‌کنیم.",

  notSelected: "انتخاب نشده",
  submit: "ارسال درخواست",

  fileForbidden: "مجاز نیست (فایل فشرده، صوتی یا ویدیویی).",

  statusSending: "در حال ارسال…",
  statusError: "خطا در ارسال درخواست. لطفاً بعداً دوباره تلاش کنید.",
  statusSuccess: "درخواست ارسال شد. با شما تماس خواهیم گرفت.",

  contact: {
    legend: "اطلاعات تماس",
    firstName: "نام",
    lastName: "نام خانوادگی",
    phone: "شماره تلفن (با کد کشور)",
    email: "ایمیل",
  },

  policyholder: {
    companyCheckbox: "صدور برای شخص حقوقی",

    individualTitle: "اطلاعات بیمه‌گذار (شخص حقیقی)",
    birthDate: "تاریخ تولد",

    addressTitle: "نشانی ثبت",
    addressPlaceholder: "کشور، شهر، خیابان، پلاک، واحد (در صورت وجود)",
    addressHelp: "نشانی را در یک خط وارد کنید.",

    companyTitle: "اطلاعات بیمه‌گذار (شخص حقوقی)",
    companyInn: "شناسه مالیاتی شرکت",
    ceoFullName: "نام و نام خانوادگی مدیر",
    ceoTitle: "سمت مدیر",
  },

  policy: {
    legend: "اطلاعات برای محاسبه و صدور",
    countryFrom: "کشور ثبت خودرو",
    vehicleType: "نوع وسیله نقلیه",
    startDate: "تاریخ شروع",
    period: "مدت",

    vehiclePlate: "شماره پلاک",
    docsLabel: "کارت وسیله نقلیه (عکس یا PDF)",
    docsHint: "می‌توانید چند فایل ضمیمه کنید.",

    addVehicle: "افزودن وسیله نقلیه",
    removeVehicle: "حذف",
    vehicleBlockTitle: "وسیله نقلیه",

    options: {
      countriesFrom: [
        { value: "KZ", label: "قزاقستان" },
        { value: "UA", label: "اوکراین" },
        { value: "GE", label: "گرجستان" },
        { value: "UZ", label: "ازبکستان" },
        { value: "KG", label: "قرقیزستان" },
        { value: "MD", label: "مولداوی" },
        { value: "OTHER", label: "سایر" },
      ],
      vehicleTypes: [
        { value: "car", label: "سواری" },
        { value: "truck", label: "باری" },
        { value: "bus", label: "اتوبوس" },
        { value: "moto", label: "موتورسیکلت" },
        { value: "trailer", label: "تریلر / یدک" },
        { value: "special", label: "ماشین‌آلات ویژه" },
      ],
      periods: [
        { value: "30", label: "۳۰ روز" },
        { value: "90", label: "۹۰ روز" },
        { value: "180", label: "۶ ماه" },
        { value: "365", label: "۱۲ ماه" },
      ],
    },
  },
};

const mn: LeadFormDictionary = {
  title: "Полис худалдан авах хүсэлт",
  intro: "Мэдээллээ бөглөнө үү. Бид полис бэлдэж, төлбөрийн мэдээллийг илгээнэ.",

  notSelected: "Сонгогдоогүй",
  submit: "Хүсэлт илгээх",

  fileForbidden: "зөвшөөрөгдөхгүй (архив, аудио эсвэл видео файл).",

  statusSending: "Илгээж байна…",
  statusError: "Хүсэлт илгээхэд алдаа гарлаа. Дараа дахин оролдоно уу.",
  statusSuccess: "Хүсэлт илгээгдлээ. Бид тантай холбогдоно.",

  contact: {
    legend: "Холбоо барих мэдээлэл",
    firstName: "Нэр",
    lastName: "Овог",
    phone: "Утас (улсын кодтой)",
    email: "И-мэйл",
  },

  policyholder: {
    companyCheckbox: "Хуулийн этгээдэд бүрдүүлэх",

    individualTitle: "Даатгуулагчийн мэдээлэл (хувь хүн)",
    birthDate: "Төрсөн огноо",

    addressTitle: "Бүртгэлийн хаяг",
    addressPlaceholder: "Улс, хот, гудамж, байр, орон сууц (байгаа бол)",
    addressHelp: "Хаягийг нэг мөрөөр бичнэ үү.",

    companyTitle: "Даатгуулагчийн мэдээлэл (хуулийн этгээд)",
    companyInn: "Компанийн ИНН",
    ceoFullName: "Удирдлагын овог нэр",
    ceoTitle: "Удирдлагын албан тушаал",
  },

  policy: {
    legend: "Тооцоолол болон бүрдүүлэлтийн мэдээлэл",
    countryFrom: "Автомашины бүртгэлийн улс",
    vehicleType: "Тээврийн хэрэгслийн төрөл",
    startDate: "Эхлэх огноо",
    period: "Хугацаа",

    vehiclePlate: "Улсын дугаар",
    docsLabel: "Техникийн паспорт (зураг эсвэл PDF)",
    docsHint: "Олон файл хавсаргах боломжтой.",

    addVehicle: "Тээврийн хэрэгсэл нэмэх",
    removeVehicle: "Устгах",
    vehicleBlockTitle: "Тээврийн хэрэгсэл",

    options: {
      countriesFrom: [
        { value: "KZ", label: "Казахстан" },
        { value: "UA", label: "Украин" },
        { value: "GE", label: "Гүрж" },
        { value: "UZ", label: "Узбекистан" },
        { value: "KG", label: "Кыргызстан" },
        { value: "MD", label: "Молдав" },
        { value: "OTHER", label: "Бусад" },
      ],
      vehicleTypes: [
        { value: "car", label: "Суудлын автомашин" },
        { value: "truck", label: "Ачааны автомашин" },
        { value: "bus", label: "Автобус" },
        { value: "moto", label: "Мотоцикл" },
        { value: "trailer", label: "Чиргүүл" },
        { value: "special", label: "Тусгай зориулалтын техник" },
      ],
      periods: [
        { value: "30", label: "30 хоног" },
        { value: "90", label: "90 хоног" },
        { value: "180", label: "6 сар" },
        { value: "365", label: "12 сар" },
      ],
    },
  },
};

const hy: LeadFormDictionary = {
  title: "Պոլիսի գնման հայտ",
  intro: "Լրացրեք տվյալները։ Մենք կպատրաստենք պոլիսը և կուղարկենք վճարման տվյալները։",

  notSelected: "Ընտրված չէ",
  submit: "Ուղարկել հայտը",

  fileForbidden: "անթույլատրելի է (արխիվ, աուդիո կամ վիդեո)։",

  statusSending: "Ուղարկվում է…",
  statusError: "Հայտի ուղարկման ժամանակ առաջացավ սխալ։ Փորձեք ավելի ուշ։",
  statusSuccess: "Հայտը ուղարկված է։ Մենք կկապվենք ձեզ հետ։",

  contact: {
    legend: "Կոնտակտային տվյալներ",
    firstName: "Անուն",
    lastName: "Ազգանուն",
    phone: "Հեռախոս (երկրի կոդով)",
    email: "Էլ. փոստ",
  },

  policyholder: {
    companyCheckbox: "Ձևակերպել իրավաբանական անձի վրա",

    individualTitle: "Ապահովագրվողի տվյալներ (ֆիզիկական անձ)",
    birthDate: "Ծննդյան ամսաթիվ",

    addressTitle: "Գրանցման հասցե",
    addressPlaceholder: "Երկիր, քաղաք, փողոց, տուն, բնակարան (եթե կա)",
    addressHelp: "Նշեք հասցեն մեկ տողով։",

    companyTitle: "Ապահովագրվողի տվյալներ (իրավաբանական անձ)",
    companyInn: "Ընկերության ՀՎՀՀ",
    ceoFullName: "Տնօրենի անուն, ազգանուն",
    ceoTitle: "Տնօրենի պաշտոն",
  },

  policy: {
    legend: "Տվյալներ հաշվարկի և ձևակերպման համար",
    countryFrom: "Տրանսպորտային միջոցի գրանցման երկիր",
    vehicleType: "Տրանսպորտային միջոցի տեսակ",
    startDate: "Սկսման ամսաթիվ",
    period: "Ժամկետ",

    vehiclePlate: "Պետհամարանիշ",
    docsLabel: "Տեխ. անձնագիր (լուսանկար կամ PDF)",
    docsHint: "Կարելի է կցել մի քանի ֆայլ։",

    addVehicle: "Ավելացնել ՏՄ",
    removeVehicle: "Ջնջել",
    vehicleBlockTitle: "Տրանսպորտային միջոց",

    options: {
      countriesFrom: [
        { value: "KZ", label: "Ղազախստան" },
        { value: "UA", label: "Ուկրաինա" },
        { value: "GE", label: "Վրաստան" },
        { value: "UZ", label: "Ուզբեկստան" },
        { value: "KG", label: "Ղրղզստան" },
        { value: "MD", label: "Մոլդովա" },
        { value: "OTHER", label: "Այլ" },
      ],
      vehicleTypes: [
        { value: "car", label: "Թեթև մարդատար" },
        { value: "truck", label: "Բեռնատար" },
        { value: "bus", label: "Ավտոբուս" },
        { value: "moto", label: "Մոտոցիկլ" },
        { value: "trailer", label: "Կցորդ" },
        { value: "special", label: "Հատուկ տեխնիկա" },
      ],
      periods: [
        { value: "30", label: "30 օր" },
        { value: "90", label: "90 օր" },
        { value: "180", label: "6 ամիս" },
        { value: "365", label: "12 ամիս" },
      ],
    },
  },
};

const dictionaries: Partial<Record<Lang, LeadFormDictionary>> = {
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

export function getLeadFormDictionary(lang: Lang): LeadFormDictionary {
  return dictionaries[lang] ?? en;
}
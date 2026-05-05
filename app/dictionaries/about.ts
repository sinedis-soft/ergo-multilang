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
    title: "Akreditēts apdrošināšanas aģents apdrošināšanas sabiedrībai ERGO Insurance SE",
    subtitle: "Strādājam caurskatāmi, ievērojot normatīvos aktus un nodrošinot klientam saprotamus nosacījumus.",
  },
  cards: [
    {
      title: "Kas mēs esam un kā varam palīdzēt",
      text: "Palīdzam noformēt apdrošināšanu starptautiskiem braucieniem un pārvadājumiem uz Eiropas Savienības valstīm, ņemot vērā termiņus un Latvijas Republikas prasības.",
    },
    {
      title: "Statuss un tiesiskais pamats",
      text: "Darbojamies kā apdrošināšanas aģents atbilstoši spēkā esošajiem normatīvajiem aktiem un nodrošinām obligātās informācijas atklāšanu par uzņēmumu.",
    },
    {
      title: "Caurspīdīgi nosacījumi",
      text: "Pirms noformēšanas vienojamies par būtiskākajiem parametriem: apdrošināšanas objektu, darbības periodu, teritoriju, limitiem un izņēmumiem.",
    },
    {
      title: "Process no pieteikuma līdz polisei",
      text: "Datu saņemšana → detaļu precizēšana → nosacījumu saskaņošana → apmaksa → polises izsniegšana un instrukcijas.",
    },
  ],
  company: {
    title: "Informācija par apdrošināšanas starpnieku un apdrošinātāju",
    lines: [
      "Apdrošināšanas pakalpojumi tiek sniegti, sadarbojoties ar apdrošināšanas sabiedrību",
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
      "robežapdrošināšanas līgumi (transportlīdzekļu īpašnieku civiltiesiskās atbildības apdrošināšana iebraukšanai citu valstu teritorijā)",
      "",
      "Tiesiskais statuss",
      "Starpniekam ir tiesības saņemt apdrošināšanas prēmiju no klienta, kas nozīmē, ka tas var pieņemt maksājumu par apdrošināšanas līgumu tieši no apdrošinājuma ņēmēja un pēc tam to nodot apdrošinātājam.",
    ],
    note: "Ja jums nepieciešams noformēt apdrošināšanu starptautiskam braucienam vai pārvadājumam, nosūtiet pieprasījumu — precizēsim nosacījumus un nepieciešamo dokumentu sarakstu.",
  },
  contact: {
    title: "Sazinieties ar mums",
    desc: "Atbildēsim uz jūsu pieprasījumu un ieteiksim optimālo noformēšanas risinājumu.",
  },
};

const EN: AboutDictionary = {
  seo: {
    title: "About Us — EURO polis",
    description: "Company information, legal details, and a contact form.",
  },
  hero: {
    title: "Authorized Insurance Agent of ERGO Insurance SE",
    subtitle: "We operate transparently, in full compliance with regulations, and offer clear terms for our clients.",
  },
  cards: [
    {
      title: "Who We Are and How We Help",
      text: "We assist with arranging insurance for international travel and transport operations within the European Union, taking into account deadlines and the requirements of the Republic of Latvia.",
    },
    {
      title: "Status and Legal Framework",
      text: "We operate as an insurance agent under applicable law and disclose all mandatory company information.",
    },
    {
      title: "Transparent Terms",
      text: "Before issuing a policy, we review key parameters: the insured object, coverage period, territory, limits, and exclusions.",
    },
    {
      title: "From Application to Policy",
      text: "Data submission → clarification of details → agreement on terms → payment → policy issuance and instructions.",
    },
  ],
  company: {
    title: "Information about the Insurance Intermediary and the Insurer",
    lines: [
      "Insurance services are provided with the involvement of the insurer",
      "ERGO Insurance SE (Latvian branch):",
      "",
      "ERGO Insurance SE Latvijas filiāle",
      "Registration number: 40103599913",
      "Legal address: Skanstes iela 50, Riga, LV-1013, Latvia",
      "",
      "Insurance intermediary details",
      "Rižova Ludmila",
      "",
      "Phone: +371 22355307",
      "Email: ludmila.rizova@ergo.lv",
      "Country of operation: Latvia",
      "Type of insurance activity:",
      "border insurance contracts (motor third-party liability insurance for entry into other countries)",
      "",
      "Legal status",
      "The intermediary is authorized to collect insurance premiums from clients, meaning they may accept payments under insurance contracts directly from the policyholder and transfer them to the insurer.",
    ],
    note: "If you need insurance for international travel or transport, submit a request — we will уточнить условия and required documents.",
  },
  contact: {
    title: "Send Us a Message",
    desc: "We will review your request and suggest the most suitable option.",
  },
};

const UZ: AboutDictionary = {
  seo: {
    title: "Biz haqimizda — EURO polis",
    description: "Kompaniya haqida ma’lumot, yuridik rekvizitlar va aloqa shakli.",
  },
  hero: {
    title: "ERGO Insurance SE sug‘urta kompaniyasining akkreditatsiyadan o‘tgan sug‘urta agenti",
    subtitle: "Biz shaffof ishlaymiz, qoidalarga amal qilamiz va mijoz uchun tushunarli shartlarni taklif qilamiz.",
  },
  cards: [
    {
      title: "Biz kimmiz va qanday foyda beramiz",
      text: "Yevropa Ittifoqi mamlakatlariga xalqaro safar va tashuvlar uchun sug‘urtani Latviya Respublikasi talablari va muddatlarini inobatga olgan holda rasmiylashtirishga yordam beramiz.",
    },
    {
      title: "Status va huquqiy asos",
      text: "Amaldagi qonunchilik doirasida sug‘urta agenti sifatida ishlaymiz va kompaniya haqidagi majburiy ma’lumotlarni oshkor qilamiz.",
    },
    {
      title: "Shaffof shartlar",
      text: "Rasmiylashtirishdan oldin asosiy parametrlarni muhokama qilamiz: sug‘urta obyekti, amal qilish muddati, hududi, limitlar va istisnolar.",
    },
    {
      title: "Arizadan polisgacha jarayon",
      text: "Ma’lumotlarni olish → tafsilotlarni aniqlashtirish → shartlarni kelishish → to‘lov → polis va yo‘riqnoma berish.",
    },
  ],
  company: {
    title: "Sug‘urta vositachisi va sug‘urta kompaniyasi haqida ma’lumot",
    lines: [
      "Sug‘urta xizmatlari quyidagi sug‘urta kompaniyasi ishtirokida taqdim etiladi",
      "ERGO Insurance SE (Latviya filiali):",
      "",
      "ERGO Insurance SE Latvijas filiāle",
      "Ro‘yxatga olish raqami: 40103599913",
      "Yuridik manzil: Skanstes iela 50, Rīga, LV-1013, Latviya",
      "",
      "Sug‘urta vositachisi ma’lumotlari",
      "Rižova Ludmila",
      "",
      "Telefon: +371 22355307",
      "E-mail: ludmila.rizova@ergo.lv",
      "Faoliyat yuritiladigan mamlakat: Latviya",
      "Sug‘urta faoliyati turi:",
      "chegaraviy sug‘urta shartnomalari (boshqa davlatlar hududiga kirish uchun transport vositalari egalarining fuqarolik javobgarligini sug‘urtalash)",
      "",
      "Huquqiy maqom",
      "Vositachi mijozdan sug‘urta mukofotini qabul qilish huquqiga ega, ya’ni sug‘urta shartnomalari bo‘yicha to‘lovni to‘g‘ridan-to‘g‘ri sug‘urtalanuvchidan qabul qilib, keyinchalik sug‘urta kompaniyasiga o‘tkazishi mumkin.",
    ],
    note: "Agar sizga xalqaro safar yoki tashuv uchun sug‘urta rasmiylashtirish kerak bo‘lsa, so‘rov yuboring — biz shartlar va hujjatlar ro‘yxatini aniqlashtiramiz.",
  },
  contact: {
    title: "Bizga xabar yozing",
    desc: "Arizangiz bo‘yicha javob beramiz va eng maqbul rasmiylashtirish variantini taklif qilamiz.",
  },
};

const KY: AboutDictionary = {
  seo: {
    title: "Биз жөнүндө — EURO polis",
    description: "Компания тууралуу маалымат, юридикалык маалыматтар жана байланыш формасы.",
  },
  hero: {
    title: "ERGO Insurance SE камсыздандыруу компаниясынын аккредитацияланган камсыздандыруу агенти",
    subtitle: "Биз ачык-айкын иштейбиз, эрежелерди сактайбыз жана кардар үчүн түшүнүктүү шарттарды сунуштайбыз.",
  },
  cards: [
    {
      title: "Биз кимбиз жана кандай жардам беребиз",
      text: "Европа Биримдигине эл аралык сапарлар жана жүк ташуулар үчүн камсыздандырууну, Латвия Республикасынын талаптарын жана мөөнөттөрүн эске алуу менен, туура жол-жобо менен тариздөөгө жардам беребиз.",
    },
    {
      title: "Статус жана укуктук негиз",
      text: "Колдонуудагы мыйзамдарга ылайык камсыздандыруу агенти катары иш алып барабыз жана компания тууралуу милдеттүү маалыматтарды ачык көрсөтөбүз.",
    },
    {
      title: "Ачык шарттар",
      text: "Полисти тариздөөдөн мурун негизги параметрлерди тактайбыз: камсыздандыруу объектиси, мөөнөтү, камтуу аймагы, лимиттер жана өзгөчөлүктөр (чыгаруулар).",
    },
    {
      title: "Өтүнмөдөн полиске чейин процесс",
      text: "Маалыматтарды алуу → деталдарды тактоо → шарттарды макулдашуу → төлөм → полисти жана нускамаларды берүү.",
    },
  ],
  company: {
    title: "Камсыздандыруу ортомчусу жана камсыздандыруу компаниясы жөнүндө маалымат",
    lines: [
      "Камсыздандыруу кызматтары төмөнкү камсыздандыруу компаниясынын катышуусу менен көрсөтүлөт:",
      "ERGO Insurance SE (Латвиядагы филиалы):",
      "",
      "ERGO Insurance SE Latvijas filiāle",
      "Каттоо номери: 40103599913",
      "Юридикалык дареги: Skanstes iela 50, Rīga, LV-1013, Латвия",
      "",
      "Камсыздандыруу ортомчусу тууралуу маалымат",
      "Rižova Ludmila",
      "",
      "Телефон: +371 22355307",
      "E-mail: ludmila.rizova@ergo.lv",
      "Иш жүргүзүлгөн өлкө: Латвия",
      "Камсыздандыруу ишмердүүлүгүнүн түрү:",
      "чек аралык камсыздандыруу келишимдери (башка мамлекеттерге кирүү үчүн транспорт каражаттарынын ээлеринин жарандык жоопкерчилигин камсыздандыруу)",
      "",
      "Укуктук статус",
      "Ортомчу кардардан камсыздандыруу төлөмүн (премияны) алууга укуктуу, бул камсыздандыруу келишими боюнча төлөмдү түздөн-түз кардардан кабыл алып, андан ары камсыздандыруу компаниясына өткөрүп берүү мүмкүнчүлүгүн билдирет.",
    ],
    note: "Эгер сизге эл аралык сапар же жүк ташуу үчүн камсыздандыруу керек болсо, өтүнмө жөнөтүңүз — биз шарттарды жана керектүү документтердин тизмесин тактап беребиз.",
  },
  contact: {
    title: "Бизге жазыңыз",
    desc: "Өтүнмөңүз боюнча жооп беребиз жана эң ылайыктуу тариздөө вариантын сунуштайбыз.",
  },
};

const KA: AboutDictionary = {
  seo: {
    title: "ჩვენ შესახებ — EURO polis",
    description: "ინფორმაცია კომპანიის შესახებ, იურიდიული მონაცემები და უკუკავშირის ფორმა.",
  },
  hero: {
    title: "ERGO Insurance SE-ის აკრედიტებული სადაზღვევო აგენტი",
    subtitle: "ვმუშაობთ გამჭვირვალედ, წესების დაცვით და კლიენტისთვის გასაგები პირობებით.",
  },
  cards: [
    {
      title: "ვინ ვართ და როგორ შეგვიძლია დახმარება",
      text: "გეხმარებით საერთაშორისო მოგზაურობისა და გადაზიდვების დაზღვევის გაფორმებაში ევროკავშირის ქვეყნებში, ლატვიის რესპუბლიკის მოთხოვნებისა და ვადების გათვალისწინებით.",
    },
    {
      title: "სტატუსი და სამართლებრივი საფუძველი",
      text: "ვმუშაობთ როგორც სადაზღვევო აგენტი მოქმედი კანონმდებლობის ფარგლებში და ვაქვეყნებთ კომპანიის შესახებ სავალდებულო ინფორმაციას.",
    },
    {
      title: "გამჭვირვალე პირობები",
      text: "გაფორმებამდე განვიხილავთ ძირითად პარამეტრებს: დაზღვევის ობიექტს, მოქმედების პერიოდს, ტერიტორიას, ლიმიტებს და გამონაკლისებს.",
    },
    {
      title: "პროცესი განაცხადიდან პოლისამდე",
      text: "მონაცემების მიღება → დეტალების დაზუსტება → პირობების შეთანხმება → გადახდა → პოლისის და ინსტრუქციის გაცემა.",
    },
  ],
  company: {
    title: "ინფორმაცია სადაზღვევო შუამავალსა და სადაზღვევო კომპანიაზე",
    lines: [
      "სადაზღვევო მომსახურება ხორციელდება სადაზღვევო კომპანიის მონაწილეობით",
      "ERGO Insurance SE (ლატვიის ფილიალი):",
      "",
      "ERGO Insurance SE Latvijas filiāle",
      "სარეგისტრაციო ნომერი: 40103599913",
      "იურიდიული მისამართი: Skanstes iela 50, Rīga, LV-1013, ლატვია",
      "",
      "სადაზღვევო შუამავლის მონაცემები",
      "Rižova Ludmila",
      "",
      "ტელეფონი: +371 22355307",
      "ელ-ფოსტა: ludmila.rizova@ergo.lv",
      "საქმიანობის ქვეყანა: ლატვია",
      "სადაზღვევო საქმიანობის სახე:",
      "საზღვრის გადაკვეთის სადაზღვევო ხელშეკრულებები (სატრანსპორტო საშუალებების მფლობელთა სამოქალაქო პასუხისმგებლობის დაზღვევა სხვა ქვეყნების ტერიტორიაზე შესვლისთვის)",
      "",
      "სამართლებრივი სტატუსი",
      "შუამავალს აქვს უფლება მიიღოს სადაზღვევო პრემია კლიენტისგან, რაც ნიშნავს, რომ მას შეუძლია მიიღოს გადახდა დაზღვევის ხელშეკრულებების ფარგლებში უშუალოდ დამზღვევისგან და შემდეგ გადაუხადოს სადაზღვევო კომპანიას.",
    ],
    note: "თუ გჭირდებათ დაზღვევის გაფორმება საერთაშორისო მოგზაურობისთვის ან გადაზიდვისთვის, გამოგვიგზავნეთ განაცხადი — დავაზუსტებთ პირობებს და საჭირო დოკუმენტების ჩამონათვალს.",
  },
  contact: {
    title: "მოგვწერეთ შეტყობინება",
    desc: "გიპასუხებთ თქვენს მოთხოვნაზე და შემოგთავაზებთ ოპტიმალურ გადაწყვეტას.",
  },
};

const KZ: AboutDictionary = {
  seo: {
    title: "Біз туралы — EURO polis",
    description: "Компания туралы ақпарат, заңды деректер және кері байланыс нысаны.",
  },
  hero: {
    title: "ERGO Insurance SE сақтандыру компаниясының аккредиттелген сақтандыру агенті",
    subtitle: "Біз ашық, заң талаптарына сай және клиентке түсінікті шарттармен жұмыс істейміз.",
  },
  cards: [
    {
      title: "Біз кімбіз және немен пайдалы бола аламыз",
      text: "Еуропалық Одақ елдеріне халықаралық сапарлар мен тасымалдар үшін сақтандыруды рәсімдеуге көмектесеміз, Латвия Республикасының талаптары мен мерзімдерін ескере отырып.",
    },
    {
      title: "Мәртебе және құқықтық негіз",
      text: "Қолданыстағы заңнама аясында сақтандыру агенті ретінде жұмыс істейміз және компания туралы міндетті ақпаратты ашық түрде ұсынамыз.",
    },
    {
      title: "Ашық шарттар",
      text: "Рәсімдеуге дейін негізгі параметрлерді келісеміз: сақтандыру нысаны, қолданылу мерзімі, аумағы, лимиттер және ерекшеліктер.",
    },
    {
      title: "Өтінімнен полиске дейінгі процесс",
      text: "Деректерді алу → мәліметтерді нақтылау → шарттарды келісу → төлем → полис пен нұсқаулықтарды беру.",
    },
  ],
  company: {
    title: "Сақтандыру делдалы және сақтандыру компаниясы туралы мәліметтер",
    lines: [
      "Сақтандыру қызметтері келесі сақтандыру компаниясының қатысуымен ұсынылады",
      "ERGO Insurance SE (Латвия филиалы):",
      "",
      "ERGO Insurance SE Latvijas filiāle",
      "Тіркеу нөмірі: 40103599913",
      "Заңды мекенжайы: Skanstes iela 50, Rīga, LV-1013, Латвия",
      "",
      "Сақтандыру делдалы туралы деректер",
      "Rižova Ludmila",
      "",
      "Телефон: +371 22355307",
      "E-mail: ludmila.rizova@ergo.lv",
      "Қызмет жүзеге асырылатын ел: Латвия",
      "Сақтандыру қызметінің түрі:",
      "шекаралық сақтандыру шарттары (басқа мемлекеттердің аумағына кіру үшін көлік құралдары иелерінің азаматтық-құқықтық жауапкершілігін сақтандыру)",
      "",
      "Құқықтық мәртебе",
      "Делдал клиенттен сақтандыру сыйлықақысын алуға құқылы, бұл сақтанушыдан төлемді тікелей қабылдап, оны кейін сақтандыру компаниясына аудару мүмкіндігін білдіреді.",
    ],
    note: "Егер сізге халықаралық сапар немесе тасымал үшін сақтандыру қажет болса, өтінім жіберіңіз — біз шарттар мен қажетті құжаттар тізімін нақтылап береміз.",
  },
  contact: {
    title: "Бізге хабарлама жазыңыз",
    desc: "Өтініміңізге жауап беріп, рәсімдеудің оңтайлы нұсқасын ұсынамыз.",
  },
};

const TR: AboutDictionary = {
  seo: {
    title: "Hakkımızda — EURO polis",
    description: "Şirket hakkında bilgiler, hukuki veriler ve iletişim formu.",
  },
  hero: {
    title: ":contentReference[oaicite:0]{index=0} sigorta şirketinin akredite sigorta acentesi",
    subtitle: "Şeffaf şekilde, mevzuata uygun ve müşteri için açık koşullarla çalışıyoruz.",
  },
  cards: [
    {
      title: "Biz kimiz ve nasıl yardımcı oluruz",
      text: "Avrupa Birliği ülkelerine uluslararası seyahat ve taşımalar için sigorta düzenlenmesinde, süreler ve Letonya Cumhuriyeti gereklilikleri dikkate alınarak destek sağlıyoruz.",
    },
    {
      title: "Statü ve hukuki dayanak",
      text: "Geçerli mevzuat çerçevesinde sigorta acentesi olarak faaliyet gösteriyor ve şirket hakkında zorunlu bilgileri şeffaf şekilde sunuyoruz.",
    },
    {
      title: "Şeffaf koşullar",
      text: "Poliçe düzenlenmeden önce temel parametreleri birlikte netleştiriyoruz: sigorta konusu, süre, coğrafi kapsam, teminat limitleri ve istisnalar.",
    },
    {
      title: "Başvurudan poliçeye süreç",
      text: "Bilgilerin alınması → detayların netleştirilmesi → şartların onaylanması → ödeme → poliçenin ve gerekli talimatların teslimi.",
    },
  ],
  company: {
    title: "Sigorta aracısı ve sigorta şirketine ilişkin bilgiler",
    lines: [
      "Sigorta hizmetleri aşağıdaki sigorta şirketinin katılımıyla sunulmaktadır:",
      ":contentReference[oaicite:1]{index=1} (Letonya şubesi):",
      "",
      "ERGO Insurance SE Latvijas filiāle",
      "Tescil numarası: 40103599913",
      "Yasal adres: Skanstes iela 50, Rīga, LV-1013, Letonya",
      "",
      "Sigorta aracısına ait bilgiler",
      ":contentReference[oaicite:2]{index=2}",
      "",
      "Telefon: +371 22355307",
      "E-posta: ludmila.rizova@ergo.lv",
      "Faaliyet gösterilen ülke: Letonya",
      "Sigorta faaliyet türü:",
      "sınır sigortası sözleşmeleri (başka ülkelere giriş için motorlu araç sahiplerinin zorunlu mali sorumluluk sigortası)",
      "",
      "Hukuki statü",
      "Aracı, sigorta primini müşteriden tahsil etme yetkisine sahiptir. Bu, sigorta sözleşmeleri kapsamında ödemeyi doğrudan sigortalıdan alıp daha sonra sigorta şirketine aktarma imkânı anlamına gelir.",
    ],
    note: "Uluslararası seyahat veya taşımalar için sigorta yaptırmak istiyorsanız, talep gönderin — koşulları ve gerekli belgeleri netleştirelim.",
  },
  contact: {
    title: "Bize mesaj gönderin",
    desc: "Başvurunuza yanıt verir ve en uygun düzenleme seçeneğini öneririz.",
  },
};

const FA: AboutDictionary = {
  seo: {
    title: "درباره ما — EURO polis",
    description: "اطلاعات شرکت، داده‌های حقوقی و فرم تماس.",
  },
  hero: {
    title: "نماینده بیمه دارای مجوز از شرکت بیمه Ergo Insurance SE",
    subtitle: "ما به‌صورت شفاف، مطابق مقررات و با شرایط قابل‌درک برای مشتری فعالیت می‌کنیم.",
  },
  cards: [
    {
      title: "ما که هستیم و چه کمکی می‌کنیم",
      text: "در تنظیم و صدور بیمه برای سفرها و حمل‌ونقل بین‌المللی به کشورهای اتحادیه اروپا کمک می‌کنیم، با در نظر گرفتن مهلت‌ها و الزامات جمهوری لتونی.",
    },
    {
      title: "وضعیت و مبنای حقوقی",
      text: "به‌عنوان نماینده بیمه در چارچوب قوانین جاری فعالیت می‌کنیم و اطلاعات الزامی مربوط به شرکت را به‌صورت شفاف ارائه می‌دهیم.",
    },
    {
      title: "شرایط شفاف",
      text: "پیش از صدور بیمه‌نامه، پارامترهای کلیدی را بررسی می‌کنیم: موضوع بیمه، مدت اعتبار، قلمرو جغرافیایی، سقف تعهدات و استثنائات.",
    },
    {
      title: "فرآیند از درخواست تا صدور بیمه‌نامه",
      text: "دریافت اطلاعات → بررسی جزئیات → توافق بر شرایط → پرداخت → صدور بیمه‌نامه و ارائه دستورالعمل‌ها.",
    },
  ],
  company: {
    title: "اطلاعات مربوط به واسطه بیمه و شرکت بیمه",
    lines: [
      "خدمات بیمه‌ای با مشارکت شرکت بیمه ارائه می‌شود:",
      "ERGO Insurance SE (شعبه لتونی):",
      "",
      "ERGO Insurance SE Latvijas filiāle",
      "شماره ثبت: 40103599913",
      "نشانی حقوقی: Skanstes iela 50, Rīga, LV-1013, Latvia",
      "",
      "اطلاعات واسطه بیمه",
      "Rižova Ludmila",
      "",
      "تلفن: +371 22355307",
      "ایمیل: ludmila.rizova@ergo.lv",
      "کشور فعالیت: لتونی",
      "نوع فعالیت بیمه‌ای:",
      "قراردادهای بیمه مرزی (بیمه مسئولیت مدنی دارندگان وسایل نقلیه برای ورود به قلمرو سایر کشورها)",
      "",
      "وضعیت حقوقی",
      "واسطه بیمه مجاز به دریافت حق‌بیمه از مشتری است، به این معنا که می‌تواند پرداخت مربوط به قرارداد بیمه را مستقیماً از بیمه‌گذار دریافت کرده و سپس به شرکت بیمه منتقل کند.",
    ],
    note: "در صورت نیاز به بیمه برای سفر یا حمل‌ونقل بین‌المللی، درخواست خود را ارسال کنید — شرایط و مدارک موردنیاز را برای شما مشخص می‌کنیم.",
  },
  contact: {
    title: "برای ما پیام بفرستید",
    desc: "در مورد درخواست شما پاسخ می‌دهیم و مناسب‌ترین گزینه صدور بیمه را پیشنهاد می‌کنیم.",
  },
};

const MN: AboutDictionary = {
  seo: {
    title: "Бидний тухай — EURO polis",
    description: "Компанийн мэдээлэл, хууль эрх зүйн өгөгдөл болон буцах холбооны маягт.",
  },
  hero: {
    title: "ERGO Insurance SE даатгалын компанийн итгэмжлэгдсэн даатгалын агент",
    subtitle: "Бид ил тод, дүрмийн дагуу, харилцагчид ойлгомжтой нөхцөлөөр ажилладаг.",
  },
  cards: [
    {
      title: "Бид хэн бэ, юугаараа хэрэгтэй вэ",
      text: "Европын Холбооны улс руу олон улсын аялал болон тээвэрлэлтийн даатгалыг хугацаа болон Латвийн Бүгд Найрамдах Улсын шаардлагад нийцүүлэн бүрдүүлэхэд тусалдаг.",
    },
    {
      title: "Статус ба хууль эрх зүйн үндэс",
      text: "Бид хүчин төгөлдөр хууль тогтоомжийн хүрээнд даатгалын агентын хувиар ажиллаж, компанийн талаарх заавал ил тод байх мэдээллийг бүрэн танилцуулдаг.",
    },
    {
      title: "Ил тод нөхцөл",
      text: "Даатгалын гэрээ байгуулахаас өмнө бид үндсэн нөхцлүүдийг тохиролцдог: даатгалын объект, хугацаа, хамрах нутаг дэвсгэр, хариуцлагын лимит болон хасалт (үл хамаарах нөхцөл).",
    },
    {
      title: "Захиалгаас полис хүртэлх үйл явц",
      text: "Мэдээлэл хүлээн авах → дэлгэрэнгүйг тодруулах → нөхцөлийг тохиролцох → төлбөр хийх → полис болон заавар олгох.",
    },
  ],
  company: {
    title: "Даатгалын зуучлагч болон даатгалын компанийн мэдээлэл",
    lines: [
      "Даатгалын үйлчилгээг дараах даатгалын компанийн оролцоотойгоор үзүүлдэг:",
      "ERGO Insurance SE (Латвийн салбар):",
      "",
      "ERGO Insurance SE Latvijas filiāle",
      "Бүртгэлийн дугаар: 40103599913",
      "Хууль ёсны хаяг: Skanstes iela 50, Rīga, LV-1013, Латви",
      "",
      "Даатгалын зуучлагчийн мэдээлэл",
      "Rižova Ludmila",
      "",
      "Утас: +371 22355307",
      "И-мэйл: ludmila.rizova@ergo.lv",
      "Үйл ажиллагаа явуулж буй улс: Латви",
      "Даатгалын үйл ажиллагааны төрөл:",
      "хилийн даатгалын гэрээ (өөр улсын нутаг дэвсгэрт нэвтрэхэд зориулсан тээврийн хэрэгслийн эзэмшигчийн иргэний хариуцлагын даатгал)",
      "",
      "Хууль эрх зүйн статус",
      "Зуучлагч нь даатгалын хураамжийг харилцагчаас хүлээн авах эрхтэй бөгөөд энэ нь даатгуулагчаас төлбөрийг шууд авч, дараа нь даатгалын компанид шилжүүлэх боломжтой гэсэн үг.",
    ],
    note: "Хэрэв та олон улсын аялал эсвэл тээвэрлэлтийн даатгал хийлгэхийг хүсвэл хүсэлт илгээнэ үү — бид нөхцөл болон шаардлагатай баримт бичгийн жагсаалтыг тодруулж өгнө.",
  },
  contact: {
    title: "Бидэнд мессеж илгээнэ үү",
    desc: "Бид таны хүсэлтэд хариу өгч, хамгийн тохиромжтой шийдлийг санал болгоно.",
  },
};

const HY: AboutDictionary = {
  seo: {
    title: "Մեր մասին — EURO polis",
    description: "Տեղեկություն ընկերության մասին, իրավական տվյալներ և հետադարձ կապի ձև։",
  },
  hero: {
    title: "ERGO Insurance SE ապահովագրական ընկերության հավատարմագրված ապահովագրական գործակալ",
    subtitle: "Աշխատում ենք թափանցիկ, օրենքի շրջանակներում և հաճախորդի համար հասկանալի պայմաններով։",
  },
  cards: [
    {
      title: "Ով ենք մենք և ինչով ենք օգտակար",
      text: "Օգնում ենք ձևակերպել ապահովագրություն միջազգային ուղևորությունների և բեռնափոխադրումների համար դեպի Եվրոպական միության երկրներ՝ հաշվի առնելով ժամկետներն ու Լատվիայի Հանրապետության պահանջները։",
    },
    {
      title: "Կարգավիճակ և իրավական հիմք",
      text: "Աշխատում ենք որպես ապահովագրական գործակալ՝ գործող օրենսդրության շրջանակում և տրամադրում ենք ընկերության վերաբերյալ պարտադիր տեղեկատվություն։",
    },
    {
      title: "Թափանցիկ պայմաններ",
      text: "Մինչ ձևակերպումը քննարկում ենք հիմնական պարամետրերը՝ ապահովագրվող օբյեկտը, գործողության ժամկետը, տարածքը, սահմանաչափերը և բացառությունները։",
    },
    {
      title: "Գործընթացը՝ դիմումից մինչև պոլիս",
      text: "Տվյալների ստացում → մանրամասների ճշտում → պայմանների համաձայնեցում → վճարում → պոլիսի և հրահանգների տրամադրում։",
    },
  ],
  company: {
    title: "Տեղեկություններ ապահովագրական միջնորդի և ապահովագրական ընկերության մասին",
    lines: [
      "Ապահովագրական ծառայությունները մատուցվում են հետևյալ ապահովագրական ընկերության մասնակցությամբ՝",
      "ERGO Insurance SE (Լատվիայի մասնաճյուղ)։",
      "",
      "ERGO Insurance SE Latvijas filiāle",
      "Գրանցման համար՝ 40103599913",
      "Իրավաբանական հասցե՝ Skanstes iela 50, Rīga, LV-1013, Լատվիա",
      "",
      "Ապահովագրական միջնորդի տվյալներ",
      "Rižova Ludmila",
      "",
      "Հեռախոս՝ +371 22355307",
      "Էլ. փոստ՝ ludmila.rizova@ergo.lv",
      "Գործունեության երկիր՝ Լատվիա",
      "Ապահովագրական գործունեության տեսակ՝",
      "սահմանային ապահովագրական պայմանագրեր (տրանսպորտային միջոցների սեփականատերերի քաղաքացիական պատասխանատվության ապահովագրություն՝ այլ պետությունների տարածք մուտք գործելու համար)",
      "",
      "Իրավական կարգավիճակ",
      "Միջնորդն իրավունք ունի ստանալ ապահովագրական պրեմիան հաճախորդից, ինչը նշանակում է, որ կարող է ընդունել վճարումը ապահովագրական պայմանագրերի համար անմիջապես ապահովագրողից՝ այն հետագայում փոխանցելով ապահովագրական ընկերությանը։",
    ],
    note: "Եթե ցանկանում եք ձևակերպել ապահովագրություն միջազգային ուղևորության կամ բեռնափոխադրման համար, ուղարկեք հարցում — մենք կհստակեցնենք պայմաններն ու անհրաժեշտ փաստաթղթերի ցանկը։",
  },
  contact: {
    title: "Գրեք մեզ հաղորդագրություն",
    desc: "Կպատասխանենք ձեր դիմումին և կառաջարկենք ձևակերպման լավագույն տարբերակը։",
  },
};

export const aboutDictionary: Record<Lang, AboutDictionary> = {
  ru: RU,
  lv: LV,
  en: EN,
  uz: UZ,
  kg: KY,
  ka: KA,
  kz: KZ,
  tr: TR,
  fa: FA,
  mn: MN,
  hy: HY,
};

export function getAboutDictionary(lang: Lang): AboutDictionary {
  return aboutDictionary[lang] ?? RU;
}

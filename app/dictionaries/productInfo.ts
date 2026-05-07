import type { Lang } from "@/app/dictionaries/header";
import type { CookiesPolicyDictionary } from "@/app/dictionaries/privacyCookies";

const ru: CookiesPolicyDictionary = {
  pageTitle: "Информация о продукте",
  sections: [
    { title: "Robežpolise (пограничная OCTA)" },
    { title: "1. Общая информация", paragraphs: ["Robežpolise — это обязательное страхование гражданской ответственности владельцев транспортных средств (OCTA), предназначенное для транспортных средств, зарегистрированных за пределами Европейского союза и въезжающих на территорию Латвийской Республики.","Данный вид страхования применяется в случаях, когда у транспортного средства отсутствует действующий международный страховой полис (Green Card), признаваемый в странах Европейской экономической зоны.","Robežpolise оформляется в соответствии с требованиями Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums и является частью системы обязательного страхования гражданской ответственности."] },
    { title: "2. Назначение страхования", paragraphs: ["Цель robežpolise — обеспечить наличие обязательного страхового покрытия гражданской ответственности:","","• при въезде транспортного средства на территорию Латвии;","• при участии в дорожном движении на территории стран, признающих систему взаимного страхования.","","Без действующего договора OCTA участие транспортного средства в дорожном движении запрещено."] },
    { title: "3. Что покрывает страхование", paragraphs: ["Robežpolise покрывает гражданскую ответственность владельца или водителя транспортного средства за вред, причинённый третьим лицам в результате дорожно-транспортного происшествия.","","Покрываются:","","• вред жизни и здоровью третьих лиц;","• ущерб имуществу третьих лиц;","• ущерб транспортным средствам третьих лиц.","","Не покрываются:","","• повреждения собственного транспортного средства;","• личные убытки страхователя;","• иные случаи, не предусмотренные правилами страхования."] },
    { title: "4. Территория действия", paragraphs: ["Robežpolise действует на территории:","","• Латвийской Республики;","• а также других государств, входящих в систему взаимного признания страхования гражданской ответственности владельцев транспортных средств.","","Территория покрытия определяется:","","• условиями конкретного страхового полиса;","• перечнем стран, указанных в страховом документе.","","Полис действует в странах, которые не исключены (не зачёркнуты) в страховом документе.","К таким странам могут относиться государства Европейского союза, Европейской экономической зоны.","","В каждой стране страховое покрытие действует:","","• в соответствии с законодательством этой страны;","• с лимитами ответственности, установленными национальным правом;","• через национальное бюро системы страхования гражданской ответственности."] },
    { title: "5. Срок действия", paragraphs: ["Договор страхования заключается на срок:","","• от 1 месяца;","• до 12 месяцев.","","Конкретный срок определяется при оформлении полиса."] },
    { title: "6. Кому предназначен продукт", paragraphs: ["Robežpolise предназначена для:","","• транспортных средств, зарегистрированных за пределами ЕС и ЕЭЗ;","• транспортных средств, не имеющих действующего международного страхования;","• водителей, въезжающих на территорию Латвии и других стран системы взаимного признания страхования."] },
    { title: "7. Ограничения", paragraphs: ["Robežpolise не оформляется для:","","• транспортных средств, зарегистрированных в странах Европейского союза;","• транспортных средств, зарегистрированных в Великобритании;","• транспортных средств, имеющих действующий международный страховой полис, признаваемый в ЕС."] },
    { title: "8. Заключение договора", paragraphs: ["Договор страхования:","","• заключается между страхователем и страховой компанией;","• может быть оформлен дистанционно;","• вступает в силу в соответствии с условиями страховщика (как правило — после оплаты).","","Полис предоставляется в электронной форме и имеет юридическую силу."] },
    { title: "9. Правовое регулирование", paragraphs: ["Продукт регулируется:","","Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums","","а также нормами:","","• законодательства Европейского союза о страховании гражданской ответственности."] },
    { title: "10. Важная информация для пользователя", paragraphs: ["• Robežpolise является обязательным условием участия в дорожном движении при отсутствии Green Card.","• Полис обеспечивает страховое покрытие только гражданской ответственности.","• Перед поездкой необходимо проверить территорию действия, указанную в полисе.","• Условия страхования и порядок урегулирования убытков определяются страховщиком."] },
  ],
};

const lv: CookiesPolicyDictionary = {
  pageTitle: "Informācija par produktu",
  sections: [
    { title: "Robežpolise (robežapdrošināšana OCTA)" },

    {
      title: "1. Vispārīga informācija",
      paragraphs: [
        "Robežpolise ir obligātā transportlīdzekļu īpašnieku civiltiesiskās atbildības apdrošināšana (OCTA), kas paredzēta transportlīdzekļiem, kuri reģistrēti ārpus Eiropas Savienības un iebrauc Latvijas Republikas teritorijā.",
        "Šis apdrošināšanas veids tiek piemērots gadījumos, kad transportlīdzeklim nav derīgas starptautiskās apdrošināšanas polises (Zaļā karte), kas tiek atzīta Eiropas Ekonomikas zonas valstīs.",
        "Robežpolise tiek noformēta saskaņā ar Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likumu un ir daļa no obligātās civiltiesiskās atbildības apdrošināšanas sistēmas."
      ]
    },

    {
      title: "2. Apdrošināšanas mērķis",
      paragraphs: [
        "Robežpolises mērķis ir nodrošināt obligāto civiltiesiskās atbildības apdrošināšanas segumu:",
        "",
        "• transportlīdzeklim iebraucot Latvijas teritorijā;",
        "• piedaloties ceļu satiksmē valstīs, kurās tiek atzīta savstarpējās apdrošināšanas sistēma.",
        "",
        "Bez derīga OCTA līguma transportlīdzekļa dalība ceļu satiksmē ir aizliegta."
      ]
    },

    {
      title: "3. Ko sedz apdrošināšana",
      paragraphs: [
        "Robežpolise sedz transportlīdzekļa īpašnieka vai vadītāja civiltiesisko atbildību par zaudējumiem, kas nodarīti trešajām personām ceļu satiksmes negadījuma rezultātā.",
        "",
        "Tiek segts:",
        "",
        "• kaitējums trešo personu dzīvībai vai veselībai;",
        "• mantiskais kaitējums trešo personu īpašumam;",
        "• zaudējumi trešo personu transportlīdzekļiem.",
        "",
        "Netiek segts:",
        "",
        "• paša transportlīdzekļa bojājumi;",
        "• apdrošinājuma ņēmēja personīgie zaudējumi;",
        "• citi gadījumi, kas nav paredzēti apdrošināšanas noteikumos."
      ]
    },

    {
      title: "4. Darbības teritorija",
      paragraphs: [
        "Robežpolise ir spēkā:",
        "",
        "• Latvijas Republikā;",
        "• kā arī citās valstīs, kas ietilpst savstarpējās civiltiesiskās atbildības apdrošināšanas atzīšanas sistēmā.",
        "",
        "Darbības teritoriju nosaka:",
        "",
        "• konkrētās polises nosacījumi;",
        "• valstis, kas norādītas apdrošināšanas dokumentā.",
        "",
        "Polise ir spēkā valstīs, kuras nav izslēgtas (nav pārsvītrotas) apdrošināšanas dokumentā.",
        "Šajās valstīs var ietilpt Eiropas Savienības un Eiropas Ekonomikas zonas valstis.",
        "",
        "Katrā valstī apdrošināšanas segums tiek piemērots:",
        "",
        "• saskaņā ar attiecīgās valsts normatīvajiem aktiem;",
        "• ievērojot nacionāli noteiktos atbildības limitus;",
        "• ar attiecīgās valsts nacionālā biroja starpniecību."
      ]
    },

    {
      title: "5. Darbības termiņš",
      paragraphs: [
        "Apdrošināšanas līgums tiek noslēgts uz termiņu:",
        "",
        "• no 1 mēnešiem;",
        "• līdz 12 mēnešiem.",
        "",
        "Konkrētais termiņš tiek noteikts polises noformēšanas brīdī."
      ]
    },

    {
      title: "6. Kam paredzēts produkts",
      paragraphs: [
        "Robežpolise ir paredzēta:",
        "",
        "• transportlīdzekļiem, kas reģistrēti ārpus ES un EEZ;",
        "• transportlīdzekļiem bez derīgas starptautiskās apdrošināšanas;",
        "• vadītājiem, kas iebrauc Latvijā un citās savstarpējās atzīšanas sistēmas valstīs."
      ]
    },

    {
      title: "7. Ierobežojumi",
      paragraphs: [
        "Robežpolise netiek noformēta:",
        "",
        "• transportlīdzekļiem, kas reģistrēti ES valstīs;",
        "• transportlīdzekļiem, kas reģistrēti Apvienotajā Karalistē;",
        "• transportlīdzekļiem ar derīgu starptautisko apdrošināšanas polisi, kas tiek atzīta ES."
      ]
    },

    {
      title: "8. Līguma noslēgšana",
      paragraphs: [
        "Apdrošināšanas līgums:",
        "",
        "• tiek noslēgts starp apdrošinājuma ņēmēju un apdrošinātāju;",
        "• var tikt noformēts attālināti;",
        "• stājas spēkā saskaņā ar apdrošinātāja noteikumiem (parasti — pēc apmaksas).",
        "",
        "Polise tiek izsniegta elektroniskā formā un tai ir juridisks spēks."
      ]
    },

    {
      title: "9. Tiesiskais regulējums",
      paragraphs: [
        "Produktu regulē:",
        "",
        "Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums",
        "",
        "kā arī:",
        "",
        "• Eiropas Savienības normatīvie akti civiltiesiskās atbildības apdrošināšanas jomā."
      ]
    },

    {
      title: "10. Svarīga informācija lietotājam",
      paragraphs: [
        "• Robežpolise ir obligāta dalībai ceļu satiksmē, ja nav derīgas Zaļās kartes.",
        "• Polise sedz tikai civiltiesisko atbildību.",
        "• Pirms brauciena jāpārbauda polises darbības teritorija.",
        "• Apdrošināšanas noteikumus un zaudējumu atlīdzības kārtību nosaka apdrošinātājs."
      ]
    },
  ],
};

const en: CookiesPolicyDictionary = {
  pageTitle: "Product Information",
  sections: [
    { title: "Robežpolise (Border OCTA)" },
    {
      title: "1. General information",
      paragraphs: [
        "Robežpolise is compulsory motor third-party liability insurance (OCTA) for vehicles registered outside the European Union and entering the territory of the Republic of Latvia.",
        "This type of insurance applies when the vehicle does not have a valid international insurance policy (Green Card) recognized in the countries of the European Economic Area.",
        "Robežpolise is issued in accordance with the requirements of the Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums and forms part of the compulsory motor third-party liability insurance system.",
      ],
    },
    {
      title: "2. Purpose of the insurance",
      paragraphs: [
        "The purpose of robežpolise is to ensure compulsory third-party liability insurance coverage:",
        "",
        "• when a vehicle enters the territory of Latvia;",
        "• when a vehicle participates in road traffic in countries that recognize the mutual insurance system.",
        "",
        "A vehicle may not participate in road traffic without a valid OCTA insurance contract.",
      ],
    },
    {
      title: "3. What the insurance covers",
      paragraphs: [
        "Robežpolise covers the civil liability of the vehicle owner or driver for damage caused to third parties as a result of a road traffic accident.",
        "",
        "Covered:",
        "",
        "• bodily injury or death of third parties;",
        "• damage to third-party property;",
        "• damage to third-party vehicles.",
        "",
        "Not covered:",
        "",
        "• damage to the insured vehicle;",
        "• personal losses of the policyholder;",
        "• other cases not provided for by the insurance terms.",
      ],
    },
    {
      title: "4. Territorial scope",
      paragraphs: [
        "Robežpolise is valid in:",
        "",
        "• the Republic of Latvia;",
        "• other countries participating in the mutual recognition system for motor third-party liability insurance.",
        "",
        "The coverage territory is determined by:",
        "",
        "• the terms of the specific insurance policy;",
        "• the list of countries stated in the insurance document.",
        "",
        "The policy is valid in countries that are not excluded or crossed out in the insurance document.",
        "Such countries may include Member States of the European Union and the European Economic Area.",
        "",
        "In each country, insurance coverage applies:",
        "",
        "• in accordance with the laws of that country;",
        "• within the liability limits established by national law;",
        "• through the national bureau of the motor third-party liability insurance system.",
      ],
    },
    {
      title: "5. Policy period",
      paragraphs: [
        "The insurance contract is concluded for a period of:",
        "",
        "• from 1 month;",
        "• up to 12 months.",
        "",
        "The specific period is determined when the policy is issued.",
      ],
    },
    {
      title: "6. Who the product is intended for",
      paragraphs: [
        "Robežpolise is intended for:",
        "",
        "• vehicles registered outside the EU and EEA;",
        "• vehicles without valid international insurance;",
        "• drivers entering Latvia and other countries participating in the mutual insurance recognition system.",
      ],
    },
    {
      title: "7. Restrictions",
      paragraphs: [
        "Robežpolise is not issued for:",
        "",
        "• vehicles registered in European Union countries;",
        "• vehicles registered in the United Kingdom;",
        "• vehicles with a valid international insurance policy recognized in the EU.",
      ],
    },
    {
      title: "8. Conclusion of the contract",
      paragraphs: [
        "The insurance contract:",
        "",
        "• is concluded between the policyholder and the insurance company;",
        "• may be issued remotely;",
        "• enters into force in accordance with the insurer’s terms, usually after payment.",
        "",
        "The policy is provided electronically and has legal effect.",
      ],
    },
    {
      title: "9. Legal regulation",
      paragraphs: [
        "The product is regulated by:",
        "",
        "Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums",
        "",
        "as well as:",
        "",
        "• European Union legislation on motor third-party liability insurance.",
      ],
    },
    {
      title: "10. Important information for users",
      paragraphs: [
        "• Robežpolise is mandatory for participation in road traffic where there is no valid Green Card.",
        "• The policy provides coverage only for third-party liability.",
        "• Before travelling, check the territorial scope stated in the policy.",
        "• The insurance terms and claims handling procedure are determined by the insurer.",
      ],
    },
  ],
};

const uz: CookiesPolicyDictionary = {
  pageTitle: "Mahsulot haqida ma’lumot",
  sections: [
    { title: "Robežpolise (chegaraviy OCTA)" },
    {
      title: "1. Umumiy ma’lumot",
      paragraphs: [
        "Robežpolise — bu Yevropa Ittifoqidan tashqarida ro‘yxatdan o‘tgan va Latviya Respublikasi hududiga kirayotgan transport vositalari uchun mo‘ljallangan majburiy fuqarolik javobgarligi sug‘urtasi (OCTA).",
        "Ushbu sug‘urta turi transport vositasida Yevropa iqtisodiy hududida tan olinadigan amal qiluvchi xalqaro sug‘urta polisi (Green Card) mavjud bo‘lmaganda qo‘llaniladi.",
        "Robežpolise Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums talablariga muvofiq rasmiylashtiriladi va majburiy sug‘urta tizimining bir qismidir."
      ]
    },
    {
      title: "2. Sug‘urtaning maqsadi",
      paragraphs: [
        "Robežpolise quyidagi holatlarda fuqarolik javobgarligi sug‘urtasi mavjud bo‘lishini ta’minlaydi:",
        "",
        "• transport vositasi Latviya hududiga kirganda;",
        "• o‘zaro tan olinadigan sug‘urta tizimiga kiruvchi davlatlarda yo‘l harakatida ishtirok etganda.",
        "",
        "Amal qiluvchi OCTA shartnomasi bo‘lmasa, transport vositasining yo‘l harakatida ishtirok etishi taqiqlanadi."
      ]
    },
    {
      title: "3. Sug‘urta nimani qoplaydi",
      paragraphs: [
        "Robežpolise yo‘l-transport hodisasi natijasida uchinchi shaxslarga yetkazilgan zarar uchun transport vositasi egasi yoki haydovchisining fuqarolik javobgarligini qoplaydi.",
        "",
        "Qoplanadi:",
        "",
        "• uchinchi shaxslarning hayoti va sog‘lig‘iga yetkazilgan zarar;",
        "• uchinchi shaxslarning mol-mulkiga yetkazilgan zarar;",
        "• uchinchi shaxslarning transport vositalariga yetkazilgan zarar.",
        "",
        "Qoplanmaydi:",
        "",
        "• o‘z transport vositasiga yetkazilgan zarar;",
        "• sug‘urtalanuvchining shaxsiy zarar va yo‘qotishlari;",
        "• sug‘urta qoidalarida nazarda tutilmagan boshqa holatlar."
      ]
    },
    {
      title: "4. Amal qilish hududi",
      paragraphs: [
        "Robežpolise quyidagi hududlarda amal qiladi:",
        "",
        "• Latviya Respublikasi;",
        "• shuningdek, transport vositalari egalari fuqarolik javobgarligi sug‘urtasining o‘zaro tan olinishi tizimiga kiruvchi boshqa davlatlar.",
        "",
        "Qamrov hududi quyidagilar bilan belgilanadi:",
        "",
        "• aniq sug‘urta polisi shartlari;",
        "• sug‘urta hujjatida ko‘rsatilgan davlatlar ro‘yxati.",
        "",
        "Polis sug‘urta hujjatida chiqarib tashlanmagan (chizib qo‘yilmagan) davlatlarda amal qiladi.",
        "Bunday davlatlarga Yevropa Ittifoqi va Yevropa iqtisodiy hududi mamlakatlari kirishi mumkin.",
        "",
        "Har bir davlatda sug‘urta qoplamasi:",
        "",
        "• ushbu davlat qonunchiligiga muvofiq;",
        "• milliy qonunchilikda belgilangan javobgarlik limitlari doirasida;",
        "• milliy sug‘urta byurosi orqali amal qiladi."
      ]
    },
    {
      title: "5. Amal qilish muddati",
      paragraphs: [
        "Sug‘urta shartnomasi quyidagi muddatga tuziladi:",
        "",
        "• kamida 1 oy;",
        "• ko‘pi bilan 12 oy.",
        "",
        "Aniq muddat polis rasmiylashtirilayotganda belgilanadi."
      ]
    },
    {
      title: "6. Kimlar uchun mo‘ljallangan",
      paragraphs: [
        "Robežpolise quyidagilar uchun mo‘ljallangan:",
        "",
        "• YI va Yevropa iqtisodiy hududidan tashqarida ro‘yxatdan o‘tgan transport vositalari;",
        "• amal qiluvchi xalqaro sug‘urtasi mavjud bo‘lmagan transport vositalari;",
        "• Latviya va boshqa tegishli davlatlarga kirayotgan haydovchilar."
      ]
    },
    {
      title: "7. Cheklovlar",
      paragraphs: [
        "Robežpolise quyidagilar uchun rasmiylashtirilmaydi:",
        "",
        "• Yevropa Ittifoqi mamlakatlarida ro‘yxatdan o‘tgan transport vositalari;",
        "• Buyuk Britaniyada ro‘yxatdan o‘tgan transport vositalari;",
        "• YIda tan olinadigan amal qiluvchi xalqaro sug‘urtaga ega transport vositalari."
      ]
    },
    {
      title: "8. Shartnoma tuzish",
      paragraphs: [
        "Sug‘urta shartnomasi:",
        "",
        "• sug‘urtalanuvchi va sug‘urta kompaniyasi o‘rtasida tuziladi;",
        "• masofadan turib rasmiylashtirilishi mumkin;",
        "• sug‘urtalovchi shartlariga muvofiq kuchga kiradi (odatda — to‘lovdan so‘ng).",
        "",
        "Polis elektron shaklda taqdim etiladi va yuridik kuchga ega."
      ]
    },
    {
      title: "9. Huquqiy tartibga solish",
      paragraphs: [
        "Mahsulot quyidagi hujjatlar bilan tartibga solinadi:",
        "",
        "Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums",
        "",
        "shuningdek:",
        "",
        "• Yevropa Ittifoqining fuqarolik javobgarligi sug‘urtasi bo‘yicha qonunchiligi."
      ]
    },
    {
      title: "10. Muhim ma’lumot",
      paragraphs: [
        "• Robežpolise Green Card bo‘lmaganda majburiy hisoblanadi.",
        "• Polis faqat fuqarolik javobgarligini qoplaydi.",
        "• Safardan oldin polisda ko‘rsatilgan hududni tekshirish zarur.",
        "• Sug‘urta shartlari va zararlarni qoplash tartibi sug‘urtalovchi tomonidan belgilanadi."
      ]
    },
  ],
};

const kg: CookiesPolicyDictionary = {
  pageTitle: "Продукт тууралуу маалымат",
  sections: [
    { title: "Robežpolise (чек аралык OCTA)" },
    {
      title: "1. Жалпы маалымат",
      paragraphs: [
        "Robežpolise — бул транспорт каражаттарынын ээлеринин жарандык жоопкерчилигин милдеттүү камсыздандыруу (OCTA). Ал Европа Биримдигинен тышкары катталган жана Латвия Республикасынын аймагына кирген транспорт каражаттары үчүн арналган.",
        "Бул камсыздандыруу түрү транспорт каражатында Европа экономикалык аймагында таанылган жарактуу эл аралык камсыздандыруу полиси (Green Card) жок болгон учурда колдонулат.",
        "Robežpolise Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums талаптарына ылайык таризделет жана милдеттүү жарандык жоопкерчилик камсыздандыруу системасына кирет."
      ]
    },
    {
      title: "2. Камсыздандыруунун максаты",
      paragraphs: [
        "Robežpolise төмөнкү учурларда жарандык жоопкерчиликти милдеттүү камсыздандыруу менен камсыз кылат:",
        "",
        "• транспорт каражаты Латвия аймагына киргенде;",
        "• өз ара таануу системасына кирген өлкөлөрдө жол кыймылына катышканда.",
        "",
        "Жарактуу OCTA келишими жок болсо, транспорт каражатынын жол кыймылына катышуусуна тыюу салынат."
      ]
    },
    {
      title: "3. Камсыздандыруу эмнени камтыйт",
      paragraphs: [
        "Robežpolise жол кырсыгынын натыйжасында үчүнчү жактарга келтирилген зыян үчүн транспорт каражатынын ээси же айдоочунун жарандык жоопкерчилигин жабат.",
        "",
        "Камтылат:",
        "",
        "• үчүнчү жактардын өмүрүнө жана ден соолугуна келтирилген зыян;",
        "• үчүнчү жактардын мүлкүнө келтирилген зыян;",
        "• үчүнчү жактардын транспорт каражаттарына келтирилген зыян.",
        "",
        "Камтылбайт:",
        "",
        "• өзүнүн транспорт каражатына келтирилген зыян;",
        "• камсыздандырылуучунун жеке чыгымдары;",
        "• камсыздандыруу эрежелеринде каралбаган башка учурлар."
      ]
    },
    {
      title: "4. Камтуу аймагы",
      paragraphs: [
        "Robežpolise төмөнкү аймактарда жарактуу:",
        "",
        "• Латвия Республикасынын аймагында;",
        "• ошондой эле транспорт каражаттарынын жарандык жоопкерчилигин өз ара таануу системасына кирген башка мамлекеттерде.",
        "",
        "Камтуу аймагы төмөнкүлөр менен аныкталат:",
        "",
        "• конкреттүү полистин шарттары;",
        "• камсыздандыруу документинде көрсөтүлгөн өлкөлөрдүн тизмеси.",
        "",
        "Полис камсыздандыруу документинде чийилип салынбаган өлкөлөрдө жарактуу.",
        "Мындай өлкөлөргө Европа Биримдигине жана Европа экономикалык аймагына кирген мамлекеттер кириши мүмкүн.",
        "",
        "Ар бир өлкөдө камсыздандыруу төмөнкүдөй шарттарда колдонулат:",
        "",
        "• ошол өлкөнүн мыйзамдарына ылайык;",
        "• улуттук мыйзамдар менен белгиленген жоопкерчилик лимиттери менен;",
        "• улуттук камсыздандыруу бюросу аркылуу."
      ]
    },
    {
      title: "5. Мөөнөтү",
      paragraphs: [
        "Камсыздандыруу келишими төмөнкү мөөнөткө түзүлөт:",
        "",
        "• 1 айдөн;",
        "• 12 айга чейин.",
        "",
        "Так мөөнөт полисти тариздөөдө аныкталат."
      ]
    },
    {
      title: "6. Кимдер үчүн арналган",
      paragraphs: [
        "Robežpolise төмөнкүлөр үчүн арналган:",
        "",
        "• ЕС жана ЕЭАдан тышкары катталган транспорт каражаттары;",
        "• жарактуу эл аралык камсыздандыруусу жок транспорт каражаттары;",
        "• Латвияга жана башка тиешелүү өлкөлөргө кирген айдоочулар."
      ]
    },
    {
      title: "7. Чектөөлөр",
      paragraphs: [
        "Robežpolise төмөнкүлөр үчүн берилбейт:",
        "",
        "• Европа Биримдигинде катталган транспорт каражаттары;",
        "• Улуу Британияда катталган транспорт каражаттары;",
        "• ЕСте таанылган жарактуу эл аралык полиси бар транспорт каражаттары."
      ]
    },
    {
      title: "8. Келишим түзүү",
      paragraphs: [
        "Камсыздандыруу келишими:",
        "",
        "• камсыздандырылуучу менен камсыздандыруу компаниясынын ортосунда түзүлөт;",
        "• алыстан таризделиши мүмкүн;",
        "• камсыздандыруучунун шарттарына ылайык күчүнө кирет (адатта — төлөмдөн кийин).",
        "",
        "Полис электрондук түрдө берилет жана юридикалык күчкө ээ."
      ]
    },
    {
      title: "9. Укуктук жөнгө салуу",
      paragraphs: [
        "Бул продукт төмөнкүлөр менен жөнгө салынат:",
        "",
        "Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums",
        "",
        "ошондой эле:",
        "",
        "• жарандык жоопкерчилик камсыздандыруу боюнча Европа Биримдигинин мыйзамдары."
      ]
    },
    {
      title: "10. Маанилүү маалымат",
      paragraphs: [
        "• Robežpolise Green Card жок учурда милдеттүү талап болуп саналат.",
        "• Полис жарандык жоопкерчиликти гана камтыйт.",
        "• Сапар алдында камтуу аймагын текшерүү зарыл.",
        "• Камсыздандыруу шарттары жана зыянды жөнгө салуу тартиби камсыздандыруучу тарабынан аныкталат."
      ]
    }
  ],
};

const ka: CookiesPolicyDictionary = {
  pageTitle: "პროდუქტის შესახებ ინფორმაცია",
  sections: [
    { title: "Robežpolise (საზღვრის OCTA)" },
    {
      title: "1. ზოგადი ინფორმაცია",
      paragraphs: [
        "Robežpolise წარმოადგენს სატრანსპორტო საშუალებების მფლობელთა სავალდებულო სამოქალაქო პასუხისმგებლობის დაზღვევას (OCTA), რომელიც განკუთვნილია ევროკავშირის ფარგლებს გარეთ რეგისტრირებული სატრანსპორტო საშუალებებისთვის, რომლებიც შედიან ლატვიის რესპუბლიკის ტერიტორიაზე.",
        "ეს დაზღვევა გამოიყენება იმ შემთხვევაში, თუ სატრანსპორტო საშუალებას არ აქვს მოქმედი საერთაშორისო სადაზღვევო პოლისი (Green Card), რომელიც აღიარებულია ევროპის ეკონომიკური სივრცის ქვეყნებში.",
        "Robežpolise გაიცემა Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums-ის მოთხოვნების შესაბამისად და წარმოადგენს სავალდებულო პასუხისმგებლობის დაზღვევის სისტემის ნაწილს."
      ]
    },
    {
      title: "2. დაზღვევის მიზანი",
      paragraphs: [
        "Robežpolise-ის მიზანია უზრუნველყოს სავალდებულო პასუხისმგებლობის დაზღვევა:",
        "",
        "• სატრანსპორტო საშუალების ლატვიაში შემოსვლისას;",
        "• იმ ქვეყნებში მოძრაობისას, რომლებიც აღიარებენ ურთიერთდაზღვევის სისტემას.",
        "",
        "მოქმედი OCTA ხელშეკრულების გარეშე სატრანსპორტო საშუალების მონაწილეობა საგზაო მოძრაობაში აკრძალულია."
      ]
    },
    {
      title: "3. რას ფარავს დაზღვევა",
      paragraphs: [
        "Robežpolise ფარავს სატრანსპორტო საშუალების მფლობელის ან მძღოლის სამოქალაქო პასუხისმგებლობას მესამე პირებისთვის მიყენებული ზიანის შემთხვევაში.",
        "",
        "ფარავს:",
        "",
        "• მესამე პირის სიცოცხლესა და ჯანმრთელობაზე მიყენებულ ზიანს;",
        "• მესამე პირის ქონებრივ ზიანს;",
        "• მესამე პირის სატრანსპორტო საშუალებების დაზიანებას.",
        "",
        "არ ფარავს:",
        "",
        "• საკუთარი სატრანსპორტო საშუალების დაზიანებას;",
        "• დამზღვევის პირად ზარალს;",
        "• სხვა შემთხვევებს, რომლებიც არ არის განსაზღვრული დაზღვევის წესებში."
      ]
    },
    {
      title: "4. მოქმედების ტერიტორია",
      paragraphs: [
        "Robežpolise მოქმედებს:",
        "",
        "• ლატვიის რესპუბლიკის ტერიტორიაზე;",
        "• ასევე სხვა ქვეყნებში, რომლებიც შედიან სატრანსპორტო საშუალებების პასუხისმგებლობის ურთიერთდაზღვევის სისტემაში.",
        "",
        "დაფარვის ტერიტორია განისაზღვრება:",
        "",
        "• კონკრეტული პოლისის პირობებით;",
        "• პოლისში მითითებული ქვეყნების ჩამონათვალით.",
        "",
        "პოლისი მოქმედებს იმ ქვეყნებში, რომლებიც არ არის გამორიცხული (არ არის გადახაზული) სადაზღვევო დოკუმენტში.",
        "ეს შეიძლება იყოს ევროკავშირის და ევროპის ეკონომიკური სივრცის ქვეყნები.",
        "",
        "ყოველ ქვეყანაში დაფარვა მოქმედებს:",
        "",
        "• შესაბამისი ქვეყნის კანონმდებლობის მიხედვით;",
        "• ეროვნული ლიმიტების ფარგლებში;",
        "• შესაბამისი ეროვნული სადაზღვევო ბიუროს მეშვეობით."
      ]
    },
    {
      title: "5. მოქმედების ვადა",
      paragraphs: [
        "დაზღვევის ხელშეკრულება იდება:",
        "",
        "• მინიმუმ 15 დღით;",
        "• მაქსიმუმ 12 თვემდე.",
        "",
        "კონკრეტული ვადა განისაზღვრება პოლისის გაფორმებისას."
      ]
    },
    {
      title: "6. ვისთვის არის განკუთვნილი",
      paragraphs: [
        "Robežpolise განკუთვნილია:",
        "",
        "• ევროკავშირისა და ევროეკონომიკური ზონის ფარგლებს გარეთ რეგისტრირებული სატრანსპორტო საშუალებებისთვის;",
        "• სატრანსპორტო საშუალებებისთვის, რომლებსაც არ აქვთ მოქმედი საერთაშორისო დაზღვევა;",
        "• მძღოლებისთვის, რომლებიც შედიან ლატვიაში და სხვა შესაბამის ქვეყნებში."
      ]
    },
    {
      title: "7. შეზღუდვები",
      paragraphs: [
        "Robežpolise არ გაიცემა:",
        "",
        "• ევროკავშირის ქვეყნებში რეგისტრირებული სატრანსპორტო საშუალებებისთვის;",
        "• გაერთიანებულ სამეფოში რეგისტრირებული სატრანსპორტო საშუალებებისთვის;",
        "• სატრანსპორტო საშუალებებისთვის, რომლებსაც აქვთ მოქმედი საერთაშორისო დაზღვევა, რომელიც აღიარებულია ევროკავშირში."
      ]
    },
    {
      title: "8. ხელშეკრულების გაფორმება",
      paragraphs: [
        "დაზღვევის ხელშეკრულება:",
        "",
        "• იდება დამზღვევსა და სადაზღვევო კომპანიას შორის;",
        "• შეიძლება გაფორმდეს დისტანციურად;",
        "• ძალაში შედის დამზღვევის პირობების შესაბამისად (როგორც წესი — გადახდის შემდეგ).",
        "",
        "პოლისი გაიცემა ელექტრონულად და აქვს იურიდიული ძალა."
      ]
    },
    {
      title: "9. სამართლებრივი რეგულირება",
      paragraphs: [
        "პროდუქტი რეგულირდება:",
        "",
        "Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums",
        "",
        "ასევე:",
        "",
        "• ევროკავშირის სამართლებრივი ნორმებით პასუხისმგებლობის დაზღვევის სფეროში."
      ]
    },
    {
      title: "10. მნიშვნელოვანი ინფორმაცია",
      paragraphs: [
        "• Robežpolise სავალდებულოა, თუ არ გაქვთ Green Card;",
        "• პოლისი ფარავს მხოლოდ სამოქალაქო პასუხისმგებლობას;",
        "• გამგზავრებამდე აუცილებლად გადაამოწმეთ დაფარვის ტერიტორია;",
        "• დაზღვევის პირობები და ზარალის ანაზღაურების პროცედურა განისაზღვრება სადაზღვევო კომპანიის მიერ."
      ]
    }
  ]
};

const kz: CookiesPolicyDictionary = {
  pageTitle: "Өнім туралы ақпарат",
  sections: [
    { title: "Robežpolise (шекаралық OCTA)" },
    {
      title: "1. Жалпы ақпарат",
      paragraphs: [
        "Robežpolise — бұл Еуропалық Одақтан тыс тіркелген және Латвия Республикасының аумағына кіретін көлік құралдары үшін арналған көлік иелерінің азаматтық-құқықтық жауапкершілігін міндетті сақтандыру (OCTA).",
        "Бұл сақтандыру түрі көлік құралында Еуропалық экономикалық аймақ елдерінде танылатын жарамды халықаралық сақтандыру полисі (Green Card) болмаған жағдайда қолданылады.",
        "Robežpolise Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums талаптарына сәйкес рәсімделеді және міндетті жауапкершілік сақтандыру жүйесінің бөлігі болып табылады.",
      ],
    },
    {
      title: "2. Сақтандырудың мақсаты",
      paragraphs: [
        "Robežpolise мақсаты — азаматтық-құқықтық жауапкершілік бойынша міндетті сақтандыру қорғанысын қамтамасыз ету:",
        "",
        "• көлік құралы Латвия аумағына кірген кезде;",
        "• өзара сақтандыру жүйесін мойындайтын елдерде жол қозғалысына қатысқан кезде.",
        "",
        "Жарамды OCTA шарты болмаса, көлік құралының жол қозғалысына қатысуына тыйым салынады.",
      ],
    },
    {
      title: "3. Сақтандыру нені қамтиды",
      paragraphs: [
        "Robežpolise жол-көлік оқиғасы нәтижесінде үшінші тұлғаларға келтірілген зиян үшін көлік иесінің немесе жүргізушінің азаматтық-құқықтық жауапкершілігін жабады.",
        "",
        "Қамтылады:",
        "",
        "• үшінші тұлғалардың өмірі мен денсаулығына келтірілген зиян;",
        "• үшінші тұлғалардың мүлкіне келтірілген зиян;",
        "• үшінші тұлғалардың көлік құралдарына келтірілген зиян.",
        "",
        "Қамтылмайды:",
        "",
        "• өз көлік құралына келтірілген зиян;",
        "• сақтанушының жеке шығындары;",
        "• сақтандыру ережелерінде қарастырылмаған басқа жағдайлар.",
      ],
    },
    {
      title: "4. Қолданылу аумағы",
      paragraphs: [
        "Robežpolise келесі аумақта жарамды:",
        "",
        "• Латвия Республикасының аумағында;",
        "• сондай-ақ көлік құралдары иелерінің жауапкершілігін өзара тану жүйесіне кіретін басқа мемлекеттерде.",
        "",
        "Қамту аумағы келесіге байланысты анықталады:",
        "",
        "• нақты полис шарттарына;",
        "• сақтандыру құжатында көрсетілген елдер тізіміне.",
        "",
        "Полис сақтандыру құжатында сызып тасталмаған елдерде жарамды.",
        "Бұл елдерге Еуропалық Одақ және Еуропалық экономикалық аймақ мемлекеттері кіруі мүмкін.",
        "",
        "Әр елде сақтандыру келесі шарттармен әрекет етеді:",
        "",
        "• сол елдің заңнамасына сәйкес;",
        "• ұлттық құқықта белгіленген жауапкершілік лимиттерімен;",
        "• ұлттық сақтандыру бюросы арқылы.",
      ],
    },
    {
      title: "5. Қолданылу мерзімі",
      paragraphs: [
        "Сақтандыру шарты келесі мерзімге жасалады:",
        "",
        "• 15 күннен бастап;",
        "• 12 айға дейін.",
        "",
        "Нақты мерзім полис рәсімдеу кезінде анықталады.",
      ],
    },
    {
      title: "6. Кімге арналған",
      paragraphs: [
        "Robežpolise келесі жағдайларға арналған:",
        "",
        "• ЕО және ЕЭА-дан тыс тіркелген көлік құралдары;",
        "• жарамды халықаралық сақтандыруы жоқ көлік құралдары;",
        "• Латвияға және өзара сақтандыру жүйесіне кіретін елдерге кіретін жүргізушілер.",
      ],
    },
    {
      title: "7. Шектеулер",
      paragraphs: [
        "Robežpolise келесі жағдайларда рәсімделмейді:",
        "",
        "• Еуропалық Одақ елдерінде тіркелген көлік құралдары үшін;",
        "• Ұлыбританияда тіркелген көлік құралдары үшін;",
        "• ЕО аумағында танылатын жарамды халықаралық сақтандыру полисі бар көлік құралдары үшін.",
      ],
    },
    {
      title: "8. Шарт жасасу",
      paragraphs: [
        "Сақтандыру шарты:",
        "",
        "• сақтанушы мен сақтандыру компаниясы арасында жасалады;",
        "• қашықтан рәсімделуі мүмкін;",
        "• сақтандырушы шарттарына сәйкес күшіне енеді (әдетте — төлемнен кейін).",
        "",
        "Полис электрондық түрде беріледі және заңды күші бар.",
      ],
    },
    {
      title: "9. Құқықтық реттеу",
      paragraphs: [
        "Өнім келесімен реттеледі:",
        "",
        "Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums",
        "",
        "сондай-ақ:",
        "",
        "• азаматтық-құқықтық жауапкершілікті сақтандыру бойынша ЕО заңнамасымен.",
      ],
    },
    {
      title: "10. Пайдаланушыға маңызды ақпарат",
      paragraphs: [
        "• Robežpolise — Green Card болмаған жағдайда жол қозғалысына қатысу үшін міндетті шарт.",
        "• Полис тек азаматтық-құқықтық жауапкершілікті қамтиды.",
        "• Сапар алдында полисте көрсетілген қамту аумағын тексеру қажет.",
        "• Сақтандыру шарттары мен шығындарды реттеу тәртібін сақтандырушы белгілейді.",
      ],
    },
  ],
};

const tr: CookiesPolicyDictionary = {
  pageTitle: "Ürün bilgisi",
  sections: [
    { title: "Robežpolise (sınır OCTA poliçesi)" },
    { title: "1. Genel bilgiler", paragraphs: [
      "Robežpolise, Avrupa Birliği dışında kayıtlı araçların Letonya Cumhuriyeti topraklarına girişinde kullanılan zorunlu motorlu araç sorumluluk sigortasıdır (OCTA).",
      "Bu sigorta türü, aracın Avrupa Ekonomik Alanı ülkelerinde geçerli olan uluslararası bir sigorta poliçesine (Yeşil Kart) sahip olmadığı durumlarda uygulanır.",
      "Robežpolise, Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums hükümlerine uygun olarak düzenlenir ve zorunlu mali sorumluluk sigortası sisteminin bir parçasıdır."
    ] },
    { title: "2. Sigortanın amacı", paragraphs: [
      "Robežpolise’nin amacı, zorunlu mali sorumluluk sigortası kapsamının sağlanmasıdır:",
      "",
      "• aracın Letonya’ya girişinde;",
      "• karşılıklı sigorta tanıma sistemine dahil ülkelerde trafiğe katılım sırasında.",
      "",
      "Geçerli bir OCTA sözleşmesi olmadan aracın trafiğe çıkması yasaktır."
    ] },
    { title: "3. Sigortanın kapsamı", paragraphs: [
      "Robežpolise, bir trafik kazası sonucunda üçüncü kişilere verilen zararlardan dolayı araç sahibi veya sürücünün hukuki sorumluluğunu kapsar.",
      "",
      "Kapsam dahilinde:",
      "",
      "• üçüncü kişilerin hayatına ve sağlığına verilen zararlar;",
      "• üçüncü kişilerin mal varlığına verilen zararlar;",
      "• üçüncü kişilere ait araçlara verilen zararlar.",
      "",
      "Kapsam dışı:",
      "",
      "• sigortalıya ait aracın hasarı;",
      "• sigorta ettirenin kişisel zararları;",
      "• sigorta şartlarında belirtilmeyen diğer durumlar."
    ] },
    { title: "4. Geçerlilik bölgesi", paragraphs: [
      "Robežpolise şu bölgelerde geçerlidir:",
      "",
      "• Letonya Cumhuriyeti;",
      "• motorlu araç sorumluluk sigortasının karşılıklı tanındığı diğer ülkeler.",
      "",
      "Coğrafi kapsam şu unsurlara bağlıdır:",
      "",
      "• poliçe koşulları;",
      "• poliçede belirtilen ülke listesi.",
      "",
      "Poliçe, sigorta belgesinde hariç tutulmamış (üzeri çizilmemiş) ülkelerde geçerlidir.",
      "Bu ülkeler Avrupa Birliği ve Avrupa Ekonomik Alanı ülkelerini kapsayabilir.",
      "",
      "Her ülkede sigorta:",
      "",
      "• o ülkenin mevzuatına göre;",
      "• ulusal sorumluluk limitleri çerçevesinde;",
      "• ilgili ülkenin sigorta bürosu aracılığıyla uygulanır."
    ] },
    { title: "5. Süre", paragraphs: [
      "Sigorta sözleşmesi şu süreler için yapılır:",
      "",
      "• en az 15 gün;",
      "• en fazla 12 ay.",
      "",
      "Kesin süre poliçe düzenlenirken belirlenir."
    ] },
    { title: "6. Ürün kimler içindir", paragraphs: [
      "Robežpolise aşağıdakiler için tasarlanmıştır:",
      "",
      "• AB ve AEA dışındaki ülkelerde kayıtlı araçlar;",
      "• geçerli uluslararası sigortası olmayan araçlar;",
      "• Letonya ve karşılıklı sigorta sistemine dahil ülkelere giriş yapan sürücüler."
    ] },
    { title: "7. Kısıtlamalar", paragraphs: [
      "Robežpolise şu durumlarda düzenlenmez:",
      "",
      "• Avrupa Birliği ülkelerinde kayıtlı araçlar için;",
      "• Birleşik Krallık’ta kayıtlı araçlar için;",
      "• AB’de geçerli uluslararası sigorta poliçesine sahip araçlar için."
    ] },
    { title: "8. Sözleşmenin kurulması", paragraphs: [
      "Sigorta sözleşmesi:",
      "",
      "• sigorta ettiren ile sigorta şirketi arasında yapılır;",
      "• uzaktan düzenlenebilir;",
      "• sigortacının şartlarına göre yürürlüğe girer (genellikle ödeme sonrası).",
      "",
      "Poliçe elektronik olarak düzenlenir ve hukuki geçerliliğe sahiptir."
    ] },
    { title: "9. Hukuki düzenleme", paragraphs: [
      "Ürün aşağıdaki mevzuata tabidir:",
      "",
      "Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums",
      "",
      "ayrıca:",
      "",
      "• Avrupa Birliği motorlu araç sorumluluk sigortası mevzuatı."
    ] },
    { title: "10. Kullanıcı için önemli bilgiler", paragraphs: [
      "• Robežpolise, Yeşil Kart bulunmadığında trafiğe katılım için zorunludur.",
      "• Poliçe yalnızca üçüncü kişilere karşı sorumluluğu kapsar.",
      "• Seyahatten önce poliçede belirtilen coğrafi kapsam kontrol edilmelidir.",
      "• Sigorta koşulları ve hasar süreci sigorta şirketi tarafından belirlenir."
    ] },
  ],
};

const fa: CookiesPolicyDictionary = {
  pageTitle: "اطلاعات محصول",
  sections: [
    { title: "Robežpolise (بیمه مرزی OCTA)" },

    {
      title: "1. اطلاعات کلی",
      paragraphs: [
        "Robežpolise نوعی بیمه اجباری مسئولیت مدنی دارندگان وسایل نقلیه (OCTA) است که برای وسایل نقلیه ثبت‌شده خارج از اتحادیه اروپا و واردشونده به قلمرو جمهوری لتونی در نظر گرفته شده است.",
        "این نوع بیمه در مواردی استفاده می‌شود که وسیله نقلیه فاقد بیمه بین‌المللی معتبر (Green Card) باشد که در کشورهای منطقه اقتصادی اروپا پذیرفته می‌شود.",
        "Robežpolise مطابق با الزامات Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums صادر می‌شود و بخشی از سیستم بیمه اجباری مسئولیت مدنی است."
      ]
    },

    {
      title: "2. هدف بیمه",
      paragraphs: [
        "هدف Robežpolise فراهم کردن پوشش اجباری مسئولیت مدنی است:",
        "",
        "• هنگام ورود وسیله نقلیه به قلمرو لتونی؛",
        "• هنگام مشارکت در ترافیک جاده‌ای در کشورهایی که سیستم بیمه متقابل را به رسمیت می‌شناسند.",
        "",
        "بدون بیمه معتبر OCTA، استفاده از وسیله نقلیه در جاده‌ها ممنوع است."
      ]
    },

    {
      title: "3. پوشش بیمه",
      paragraphs: [
        "Robežpolise مسئولیت مدنی مالک یا راننده وسیله نقلیه را در قبال خسارات واردشده به اشخاص ثالث در نتیجه تصادف پوشش می‌دهد.",
        "",
        "موارد تحت پوشش:",
        "",
        "• خسارت جانی یا بدنی به اشخاص ثالث؛",
        "• خسارت مالی به اموال اشخاص ثالث؛",
        "• خسارت به وسایل نقلیه اشخاص ثالث.",
        "",
        "موارد خارج از پوشش:",
        "",
        "• خسارت به وسیله نقلیه خود بیمه‌گذار؛",
        "• خسارات شخصی بیمه‌گذار؛",
        "• سایر مواردی که در شرایط بیمه ذکر نشده‌اند."
      ]
    },

    {
      title: "4. قلمرو جغرافیایی",
      paragraphs: [
        "Robežpolise در قلمرو زیر معتبر است:",
        "",
        "• جمهوری لتونی؛",
        "• سایر کشورهایی که سیستم شناسایی متقابل بیمه مسئولیت مدنی را می‌پذیرند.",
        "",
        "قلمرو پوشش بر اساس موارد زیر تعیین می‌شود:",
        "",
        "• شرایط بیمه‌نامه؛",
        "• فهرست کشورها در سند بیمه.",
        "",
        "بیمه در کشورهایی معتبر است که در سند بیمه خط نخورده‌اند.",
        "این کشورها می‌توانند شامل کشورهای اتحادیه اروپا و منطقه اقتصادی اروپا باشند.",
        "",
        "در هر کشور، پوشش بیمه بر اساس موارد زیر اعمال می‌شود:",
        "",
        "• قوانین همان کشور؛",
        "• سقف تعهدات تعیین‌شده در قانون ملی؛",
        "• از طریق دفتر ملی بیمه مربوطه."
      ]
    },

    {
      title: "5. مدت اعتبار",
      paragraphs: [
        "مدت قرارداد بیمه:",
        "",
        "• حداقل ۱۵ روز؛",
        "• حداکثر ۱۲ ماه.",
        "",
        "مدت دقیق هنگام صدور بیمه‌نامه تعیین می‌شود."
      ]
    },

    {
      title: "6. مخاطبان محصول",
      paragraphs: [
        "Robežpolise برای موارد زیر طراحی شده است:",
        "",
        "• وسایل نقلیه ثبت‌شده خارج از اتحادیه اروپا و منطقه اقتصادی اروپا؛",
        "• وسایل نقلیه بدون بیمه بین‌المللی معتبر؛",
        "• رانندگانی که وارد لتونی یا سایر کشورهای این سیستم می‌شوند."
      ]
    },

    {
      title: "7. محدودیت‌ها",
      paragraphs: [
        "Robežpolise برای موارد زیر صادر نمی‌شود:",
        "",
        "• وسایل نقلیه ثبت‌شده در کشورهای اتحادیه اروپا؛",
        "• وسایل نقلیه ثبت‌شده در بریتانیا؛",
        "• وسایل نقلیه دارای بیمه بین‌المللی معتبر قابل‌قبول در اتحادیه اروپا."
      ]
    },

    {
      title: "8. انعقاد قرارداد",
      paragraphs: [
        "قرارداد بیمه:",
        "",
        "• بین بیمه‌گذار و شرکت بیمه منعقد می‌شود؛",
        "• می‌تواند به‌صورت آنلاین صادر شود؛",
        "• طبق شرایط بیمه‌گر (معمولاً پس از پرداخت) فعال می‌شود.",
        "",
        "بیمه‌نامه به‌صورت الکترونیکی ارائه شده و دارای اعتبار قانونی است."
      ]
    },

    {
      title: "9. مقررات قانونی",
      paragraphs: [
        "این محصول بر اساس موارد زیر تنظیم می‌شود:",
        "",
        "Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums",
        "",
        "و همچنین:",
        "",
        "• مقررات اتحادیه اروپا در زمینه بیمه مسئولیت مدنی."
      ]
    },

    {
      title: "10. نکات مهم برای کاربر",
      paragraphs: [
        "• Robežpolise در صورت نداشتن Green Card برای تردد الزامی است.",
        "• این بیمه فقط مسئولیت مدنی را پوشش می‌دهد.",
        "• قبل از سفر، قلمرو پوشش را بررسی کنید.",
        "• شرایط بیمه و نحوه رسیدگی به خسارت توسط شرکت بیمه تعیین می‌شود."
      ]
    },
  ],
};

const mn: CookiesPolicyDictionary = {
  pageTitle: "Бүтээгдэхүүний мэдээлэл",
  sections: [
    { title: "Robežpolise (хил дамнасан OCTA даатгал)" },

    { title: "1. Ерөнхий мэдээлэл", paragraphs: [
      "Robežpolise нь Европын Холбооноос гадна бүртгэлтэй тээврийн хэрэгсэл Латвийн Бүгд Найрамдах Улсад нэвтрэх үед шаардлагатай тээврийн хэрэгслийн эзэмшигчийн иргэний хариуцлагын заавал даатгал (OCTA) юм.",
      "Энэ даатгал нь тухайн тээврийн хэрэгсэлд Европын эдийн засгийн бүсийн улс орнуудад хүлээн зөвшөөрөгдсөн хүчинтэй олон улсын даатгалын полис (Ногоон карт) байхгүй тохиолдолд хэрэглэгдэнэ.",
      "Robežpolise нь Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums хуулийн шаардлагын дагуу олгогдож, заавал даатгалын системийн нэг хэсэг болно."
    ]},

    { title: "2. Даатгалын зорилго", paragraphs: [
      "Robežpolise-ийн зорилго нь иргэний хариуцлагын заавал даатгалын хамгаалалтыг хангах явдал юм:",
      "",
      "• тээврийн хэрэгсэл Латвийн нутаг дэвсгэрт нэвтрэх үед;",
      "• харилцан хүлээн зөвшөөрөх даатгалын системд хамаарах улс орнуудад замын хөдөлгөөнд оролцох үед.",
      "",
      "Хүчинтэй OCTA гэрээгүй тохиолдолд тээврийн хэрэгсэл замын хөдөлгөөнд оролцохыг хориглоно."
    ]},

    { title: "3. Даатгал юуг хамардаг вэ", paragraphs: [
      "Robežpolise нь зам тээврийн ослын улмаас гуравдагч этгээдэд учирсан хохиролд тээврийн хэрэгслийн эзэмшигч эсвэл жолоочийн иргэний хариуцлагыг даатгана.",
      "",
      "Дараах хохирлыг нөхөн төлнө:",
      "",
      "• гуравдагч этгээдийн амь нас, эрүүл мэндэд учирсан хохирол;",
      "• гуравдагч этгээдийн эд хөрөнгийн хохирол;",
      "• гуравдагч этгээдийн тээврийн хэрэгслийн хохирол.",
      "",
      "Дараахыг нөхөн төлөхгүй:",
      "",
      "• өөрийн тээврийн хэрэгслийн гэмтэл;",
      "• даатгуулагчийн хувийн хохирол;",
      "• даатгалын нөхцөлд заагаагүй бусад тохиолдол."
    ]},

    { title: "4. Хамрах нутаг дэвсгэр", paragraphs: [
      "Robežpolise дараах нутаг дэвсгэрт хүчинтэй:",
      "",
      "• Латвийн Бүгд Найрамдах Улс;",
      "• мөн тээврийн хэрэгслийн иргэний хариуцлагын даатгалыг харилцан хүлээн зөвшөөрөх системд багтсан бусад улс орнууд.",
      "",
      "Хамрах хүрээг дараах зүйлс тодорхойлно:",
      "",
      "• тухайн полисын нөхцөл;",
      "• даатгалын баримт бичигт заасан улс орнуудын жагсаалт.",
      "",
      "Даатгалын баримтад хасагдаагүй (таслаагүй) улс орнуудад полис хүчинтэй байна.",
      "Үүнд Европын Холбоо болон Европын эдийн засгийн бүсийн улс орнууд багтаж болно.",
      "",
      "Тухайн улс бүрт даатгал:",
      "",
      "• тухайн улсын хууль тогтоомжийн дагуу;",
      "• үндэсний хуульд заасан хариуцлагын лимитээр;",
      "• тухайн улсын даатгалын товчоогоор дамжин хэрэгжинэ."
    ]},

    { title: "5. Хугацаа", paragraphs: [
      "Даатгалын гэрээг дараах хугацаагаар байгуулна:",
      "",
      "• 15 хоногоос эхлэн;",
      "• 12 сар хүртэл.",
      "",
      "Тодорхой хугацааг полис бүрдүүлэх үед тогтооно."
    ]},

    { title: "6. Хэнд зориулагдсан", paragraphs: [
      "Robežpolise нь дараахад зориулагдсан:",
      "",
      "• ЕХ болон ЕЭЗ-оос гадна бүртгэлтэй тээврийн хэрэгсэл;",
      "• хүчинтэй олон улсын даатгалгүй тээврийн хэрэгсэл;",
      "• Латви болон харилцан хүлээн зөвшөөрөх системийн улс орнуудад нэвтрэх жолооч."
    ]},

    { title: "7. Хязгаарлалт", paragraphs: [
      "Robežpolise дараах тохиолдолд олгогдохгүй:",
      "",
      "• Европын Холбоонд бүртгэлтэй тээврийн хэрэгсэл;",
      "• Их Британид бүртгэлтэй тээврийн хэрэгсэл;",
      "• ЕХ-д хүлээн зөвшөөрөгдсөн хүчинтэй олон улсын даатгалтай тээврийн хэрэгсэл."
    ]},

    { title: "8. Гэрээ байгуулах", paragraphs: [
      "Даатгалын гэрээ:",
      "",
      "• даатгуулагч болон даатгалын компанийн хооронд байгуулагдана;",
      "• зайнаас бүрдүүлэх боломжтой;",
      "• даатгагчийн нөхцлийн дагуу хүчин төгөлдөр болно (ихэвчлэн төлбөр хийсний дараа).",
      "",
      "Полис нь цахим хэлбэрээр олгогдож, хууль ёсны хүчинтэй байна."
    ]},

    { title: "9. Эрх зүйн зохицуулалт", paragraphs: [
      "Энэхүү бүтээгдэхүүнийг дараах хууль зохицуулна:",
      "",
      "Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums",
      "",
      "мөн:",
      "",
      "• Европын Холбооны иргэний хариуцлагын даатгалын тухай хууль тогтоомж."
    ]},

    { title: "10. Хэрэглэгчид зориулсан чухал мэдээлэл", paragraphs: [
      "• Robežpolise нь Ногоон карт байхгүй үед замын хөдөлгөөнд оролцоход зайлшгүй шаардлагатай.",
      "• Даатгал нь зөвхөн иргэний хариуцлагыг хамарна.",
      "• Аяллын өмнө полист заасан хамрах нутаг дэвсгэрийг шалгана.",
      "• Даатгалын нөхцөл болон нөхөн төлбөрийн журам нь даатгагчаар тодорхойлогдоно."
    ]},
  ],
};

const hy: CookiesPolicyDictionary = {
  pageTitle: "Ապրանքի մասին տեղեկատվություն",
  sections: [
    { title: "Robežpolise (սահմանային OCTA)" },
    {
      title: "1. Ընդհանուր տեղեկատվություն",
      paragraphs: [
        "Robežpolise-ն տրանսպորտային միջոցների սեփականատերերի քաղաքացիական պատասխանատվության պարտադիր ապահովագրություն (OCTA) է, որը նախատեսված է Եվրոպական միությունից դուրս գրանցված և Լատվիայի Հանրապետության տարածք մուտք գործող տրանսպորտային միջոցների համար։",
        "Ապահովագրության այս տեսակը կիրառվում է այն դեպքերում, երբ տրանսպորտային միջոցը չունի գործող միջազգային ապահովագրական պոլիս (Green Card), որը ճանաչվում է Եվրոպական տնտեսական տարածքի երկրներում։",
        "Robežpolise-ն ձևակերպվում է Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums-ի պահանջներին համապատասխան և հանդիսանում է պարտադիր քաղաքացիական պատասխանատվության ապահովագրության համակարգի մաս։",
      ],
    },
    {
      title: "2. Ապահովագրության նպատակը",
      paragraphs: [
        "Robežpolise-ի նպատակն է ապահովել քաղաքացիական պատասխանատվության պարտադիր ապահովագրական ծածկույթ՝",
        "",
        "• տրանսպորտային միջոցի մուտքի դեպքում Լատվիայի տարածք;",
        "• երթևեկությանը մասնակցելիս այն երկրներում, որոնք ճանաչում են փոխադարձ ապահովագրության համակարգը։",
        "",
        "Առանց գործող OCTA պայմանագրի՝ տրանսպորտային միջոցի մասնակցությունը ճանապարհային երթևեկությանը արգելված է։",
      ],
    },
    {
      title: "3. Ինչ է ծածկում ապահովագրությունը",
      paragraphs: [
        "Robežpolise-ն ծածկում է տրանսպորտային միջոցի սեփականատիրոջ կամ վարորդի քաղաքացիական պատասխանատվությունը՝ ճանապարհատրանսպորտային պատահարի հետևանքով երրորդ անձանց պատճառված վնասի համար։",
        "",
        "Ծածկվում են՝",
        "",
        "• երրորդ անձանց կյանքի և առողջության վնասը;",
        "• երրորդ անձանց գույքային վնասը;",
        "• երրորդ անձանց տրանսպորտային միջոցներին հասցված վնասը։",
        "",
        "Չեն ծածկվում՝",
        "",
        "• սեփական տրանսպորտային միջոցի վնասները;",
        "• ապահովագրվողի անձնական կորուստները;",
        "• այլ դեպքեր, որոնք նախատեսված չեն ապահովագրության կանոններով։",
      ],
    },
    {
      title: "4. Գործողության տարածք",
      paragraphs: [
        "Robežpolise-ն գործում է՝",
        "",
        "• Լատվիայի Հանրապետության տարածքում;",
        "• ինչպես նաև այլ պետություններում, որոնք ընդգրկված են քաղաքացիական պատասխանատվության ապահովագրության փոխադարձ ճանաչման համակարգում։",
        "",
        "Ծածկույթի տարածքը որոշվում է՝",
        "",
        "• կոնկրետ ապահովագրական պոլիսի պայմաններով;",
        "• պոլիսում նշված երկրների ցանկով։",
        "",
        "Պոլիսը գործում է այն երկրներում, որոնք չեն բացառվել (չեն գծանցվել) ապահովագրական փաստաթղթում։",
        "Այդ երկրների մեջ կարող են ներառվել Եվրոպական միության և Եվրոպական տնտեսական տարածքի պետությունները։",
        "",
        "Յուրաքանչյուր երկրում ապահովագրական ծածկույթը գործում է՝",
        "",
        "• տվյալ երկրի օրենսդրությանը համապատասխան;",
        "• ազգային օրենքով սահմանված պատասխանատվության սահմանաչափերով;",
        "• համապատասխան ազգային ապահովագրական բյուրոյի միջոցով։",
      ],
    },
    {
      title: "5. Գործողության ժամկետ",
      paragraphs: [
        "Ապահովագրության պայմանագիրը կնքվում է հետևյալ ժամկետով՝",
        "",
        "• նվազագույնը՝ 15 օր;",
        "• առավելագույնը՝ 12 ամիս։",
        "",
        "Կոնկրետ ժամկետը որոշվում է պոլիսի ձևակերպման ժամանակ։",
      ],
    },
    {
      title: "6. Ո՞ւմ համար է նախատեսված",
      paragraphs: [
        "Robežpolise-ն նախատեսված է՝",
        "",
        "• ԵՄ և ԵՏՏ-ից դուրս գրանցված տրանսպորտային միջոցների համար;",
        "• այն տրանսպորտային միջոցների համար, որոնք չունեն գործող միջազգային ապահովագրություն;",
        "• վարորդների համար, որոնք մուտք են գործում Լատվիայի և այլ համապատասխան երկրների տարածք։",
      ],
    },
    {
      title: "7. Սահմանափակումներ",
      paragraphs: [
        "Robežpolise-ն չի ձևակերպվում՝",
        "",
        "• Եվրոպական միության երկրներում գրանցված տրանսպորտային միջոցների համար;",
        "• Միացյալ Թագավորությունում գրանցված տրանսպորտային միջոցների համար;",
        "• այն տրանսպորտային միջոցների համար, որոնք ունեն ԵՄ-ում ճանաչվող գործող միջազգային ապահովագրական պոլիս։",
      ],
    },
    {
      title: "8. Պայմանագրի կնքում",
      paragraphs: [
        "Ապահովագրության պայմանագիրը՝",
        "",
        "• կնքվում է ապահովագրվողի և ապահովագրական ընկերության միջև;",
        "• կարող է ձևակերպվել հեռավար;",
        "• ուժի մեջ է մտնում ապահովագրողի պայմանների համաձայն (սովորաբար՝ վճարումից հետո)։",
        "",
        "Պոլիսը տրամադրվում է էլեկտրոնային ձևով և ունի իրավական ուժ։",
      ],
    },
    {
      title: "9. Իրավական կարգավորում",
      paragraphs: [
        "Ապրանքը կարգավորվում է՝",
        "",
        "Sauszemes transportlīdzekļu īpašnieku civiltiesiskās atbildības obligātās apdrošināšanas likums-ով,",
        "",
        "ինչպես նաև՝",
        "",
        "• Եվրոպական միության քաղաքացիական պատասխանատվության ապահովագրության օրենսդրությամբ։",
      ],
    },
    {
      title: "10. Կարևոր տեղեկատվություն օգտատիրոջ համար",
      paragraphs: [
        "• Robežpolise-ն պարտադիր է ճանապարհային երթևեկությանը մասնակցելու համար, եթե չկա Green Card։",
        "• Պոլիսը ծածկում է միայն քաղաքացիական պատասխանատվությունը։",
        "• Մինչ ուղևորությունը անհրաժեշտ է ստուգել պոլիսում նշված գործողության տարածքը։",
        "• Ապահովագրության պայմաններն ու վնասների կարգավորումը սահմանվում են ապահովագրողի կողմից։",
      ],
    },
  ],
};

const dictionaries: Partial<Record<Lang, CookiesPolicyDictionary>> = {
  ru,
  en,
  lv,
  uz,
  kg,
  ka,
  kz,
  tr,
  fa,
  mn,
  hy,
};

export function getProductInfoDictionary(lang: Lang): CookiesPolicyDictionary {
  return dictionaries[lang] ?? ru;
}
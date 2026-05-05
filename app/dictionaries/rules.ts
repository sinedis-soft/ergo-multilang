import type { Lang } from "@/app/dictionaries/header";

export type RulesDictionary = {
  pageTitle: string;
  subtitle: string;
  updatedAt: string;
  sections: Array<{ title: string; paragraphs: string[] }>;
};

const ru: RulesDictionary = {
  pageTitle: "РЕГЛАМЕНТ",
  subtitle: "оказания электронных услуг и содействия заключению договоров страхования на расстоянии через сайт EURO Polis",
  updatedAt: "05.05.2026",
  sections: [
    { title: "Сведения о страховой компании и страховом посреднике", paragraphs: [
      "Страховые услуги предоставляются при участии страховой компании:","",
      "ERGO Insurance SE Latvijas filiāle","Регистрационный номер: 40103599913","Юридический адрес: Skanstes iela 50, Rīga, LV-1013, Латвия","",
      "Данные страхового посредника:","",
      "Rižova Ludmila","Телефон: +371 22355307","E-mail: ludmila.rizova@ergo.lv","",
      "Страна осуществления деятельности: Латвия","Вид страховой деятельности: пограничные страховые договоры, включая страхование гражданской ответственности владельцев транспортных средств для въезда на территорию других государств.","",
      "Посредник имеет право принимать страховую премию от клиента, если такое право предоставлено страховщиком и соответствует применимому законодательству и условиям договора со страховщиком."]},
    { title: "§ 1. Определения", paragraphs: [
      "Сайт — интернет-сайт EURO Polis, через который пользователь может получить информацию о страховых продуктах, направить заявку, передать сведения и документы, получить консультацию и содействие в заключении договора страхования на расстоянии.",
      "Страховщик — ERGO Insurance SE Latvijas filiāle либо иной страховщик, прямо указанный пользователю до заключения договора страхования.",
      "Страховой посредник — Rižova Ludmila, осуществляющая деятельность по распространению страховых продуктов в Латвии в рамках правового статуса и полномочий, предоставленных страховщиком.",
      "Пользователь — физическое лицо, юридическое лицо или представитель юридического лица, использующий сайт или дистанционные каналы связи EURO Polis.",
      "Страхователь — лицо, заключающее договор страхования со страховщиком.",
      "Договор страхования — договор между страхователем и страховщиком, заключаемый в том числе дистанционно, если это допускается законодательством и условиями соответствующего страхового продукта.",
      "Полис — документ в бумажной или электронной форме, подтверждающий заключение договора страхования.",
      "Страховая премия — сумма, подлежащая оплате страхователем за страховую защиту.",
      "Персональные данные — любая информация, относящаяся к идентифицированному или идентифицируемому физическому лицу, обрабатываемая в соответствии с GDPR и законодательством Латвии."]},
    { title: "§ 2. Общие положения", paragraphs: ["2.1. Настоящий Регламент применяется к использованию сайта EURO Polis и дистанционных каналов связи для получения информации, консультаций и содействия в заключении договоров страхования.","2.2. Регламент разработан с учётом:","","• Регламента ЕС 2016/679 (GDPR);","• Директивы ЕС 2016/97 о распространении страхования (IDD);","• Закона Латвии о распространении страхования и перестрахования;","• Закона Латвии о страховании и перестраховании;","• Закона Латвии о правах потребителей;","• законодательства ЕС о дистанционном предоставлении финансовых услуг;","• Регламента eIDAS об электронной идентификации и доверительных услугах. eIDAS создаёт правовую основу для безопасных электронных транзакций и доверительных услуг в ЕС.","","2.3. Использование сайта означает согласие пользователя с настоящим Регламентом, если пользователь направляет заявку, заполняет форму, передаёт документы или обращается за консультацией.","2.4. Договор страхования заключается не с сайтом EURO Polis и не с посредником, а непосредственно между страхователем и страховщиком.","2.5. Посредник не является страховщиком, не принимает на себя обязательство по страховой выплате и не принимает решений о признании события страховым случаем.","2.6. Информация на сайте носит справочный характер и не является публичной офертой, если иное прямо не указано."]},
    { title: "§ 3. Статус посредника и раскрытие информации", paragraphs: ["3.1. До заключения договора страхования пользователю предоставляется информация о страховщике, страховом посреднике, виде страхового продукта, размере страховой премии, существенных условиях страхования, исключениях и порядке подачи жалоб.","3.2. Посредник действует в рамках полномочий, предоставленных страховщиком, и может содействовать:","","• приёму заявок;","• консультированию пользователя;","• передаче данных страховщику;","• оформлению страхового полиса;","• приёму страховой премии, если это разрешено страховщиком и применимым законодательством.","","3.3. Если посредник получает комиссионное вознаграждение от страховщика, это не означает автоматического увеличения страховой премии для пользователя, если иное прямо не указано до заключения договора.","3.4. Пользователь вправе запросить дополнительную информацию о статусе посредника, характере его полномочий и порядке получения вознаграждения."]},
    { title: "§ 4. Порядок использования сайта", paragraphs: ["4.1. Сайт EURO Polis предназначен для:","","• получения информации о страховых продуктах;","• направления заявок;","• передачи документов и сведений;","• расчёта или предварительной оценки стоимости страхования;","• получения страховых документов в электронной форме.","","4.2. Сайт может быть доступен круглосуточно, за исключением технических работ, сбоев связи, обновлений или иных обстоятельств, не зависящих от EURO Polis.","4.3. Пользователь обязан предоставлять достоверные, полные и актуальные сведения.","4.4. Пользователь несёт ответственность за последствия передачи ошибочных, неполных или недостоверных данных, включая риск отказа страховщика в заключении договора, изменении условий или страховой выплате.","4.5. Пользователю запрещается использовать сайт для передачи поддельных документов, ложных сведений, вредоносного кода или действий, нарушающих права третьих лиц."]},
    { title: "§ 5. Заключение договора страхования на расстоянии", paragraphs: ["5.1. Для оформления страхования пользователь предоставляет сведения, необходимые для конкретного продукта: данные страхователя, транспортного средства, периода страхования, территории действия, маршрута, регистрационных документов и иных сведений.","5.2. До заключения договора пользователь получает информацию о:","","• страховщике;","• посреднике;","• страховом продукте;","• территории действия;","• сроке страхования;","• страховой премии;","• исключениях и ограничениях;","• порядке оплаты;","• порядке получения полиса;","• порядке изменения или прекращения договора;","• порядке подачи жалоб.","","5.3. Договор страхования считается заключённым с момента, определённого условиями страховщика: подтверждения согласия пользователя, принятия условий страхования, оплаты премии и выпуска полиса, если такие действия требуются.","5.4. Электронный полис или иной документ, подтверждающий заключение договора страхования, может быть направлен пользователю по e-mail, через мессенджер, личный кабинет или иной согласованный канал.","5.5. Пользователь обязан проверить данные в полисе сразу после получения. При обнаружении ошибки пользователь должен немедленно сообщить об этом посреднику или страховщику."]},
    { title: "§ 6. Оплата", paragraphs: ["6.1. Оплата страховой премии может осуществляться:","","• банковским переводом;","• банковской картой через платёжного провайдера;","• иным способом, указанным на сайте или согласованным с пользователем.","","6.2. Если посредник принимает страховую премию, он действует в рамках полномочий, предоставленных страховщиком.","6.3. При оплате банковской картой данные карты вводятся на защищённой странице банка или платёжного провайдера. EURO Polis и посредник не хранят полные данные банковских карт.","6.4. При оплате банковским переводом пользователь обязан использовать предоставленные реквизиты и корректно указывать назначение платежа.","6.5. Моментом оплаты считается зачисление денежных средств получателю, если иное не предусмотрено условиями страховщика.","6.6. Возврат страховой премии или её части осуществляется в случаях и порядке, предусмотренных договором страхования, правилами страховщика и применимым законодательством."]},
    { title: "§ 7. Право на отказ и особенности дистанционного страхования", paragraphs: ["7.1. Поскольку страхование является финансовой услугой, право пользователя на отказ от договора зависит от вида страхового продукта, срока действия договора, момента начала страховой защиты и применимого законодательства.","7.2. Если право на отказ предусмотрено законом или условиями страховщика, пользователь информируется о порядке, сроках и последствиях отказа до заключения договора.","7.3. Для краткосрочных договоров страхования и договоров, исполнение которых началось с согласия пользователя, право на отказ может быть ограничено.","7.4. Посредник не принимает самостоятельных решений о возврате страховой премии, если такое решение относится к компетенции страховщика."]},
    { title: "§ 8. Персональные данные", paragraphs: ["8.1. Обработка персональных данных осуществляется в соответствии с GDPR и законодательством Латвии о защите персональных данных.","8.2. В рамках сайта EURO Polis данные могут обрабатываться для следующих целей:","","• рассмотрение заявки;","• подбор страхового продукта;","• оформление договора страхования;","• передача данных страховщику;","• обработка платежей;","• коммуникация с пользователем;","• исполнение юридических обязанностей;","• защита прав и законных интересов;","• обеспечение безопасности сайта.","","8.3. Правовыми основаниями обработки могут быть:","","• исполнение договора или действия до заключения договора;","• исполнение юридической обязанности;","• законный интерес;","• согласие пользователя — например, для маркетинговых рассылок или необязательных cookie.","","8.4. Данные могут передаваться:","","• страховщику;","• платёжным провайдерам;","• IT-подрядчикам;","• поставщикам хостинга;","• государственным органам, если это требуется законом.","","8.5. Пользователь имеет права, предусмотренные GDPR: доступ к данным, исправление, удаление, ограничение обработки, возражение против обработки, переносимость данных и отзыв согласия.","8.6. Жалоба по вопросам обработки персональных данных может быть подана в Datu valsts inspekcija. Контакты инспекции опубликованы на её официальном сайте."]},
    { title: "§ 9. Cookie и технические данные", paragraphs: ["9.1. Сайт может использовать cookie и аналогичные технологии для работы сайта, сохранения языка, безопасности, аналитики и маркетинга.","9.2. Строго необходимые cookie используются без согласия, поскольку они требуются для работы сайта.","9.3. Аналитические и маркетинговые cookie используются только после согласия пользователя.","9.4. Подробный порядок использования cookie указывается в отдельной Политике cookie EURO Polis."]},
    { title: "§ 10. Обращения и жалобы", paragraphs: ["10.1. Пользователь вправе направить обращение или жалобу:","","• по e-mail: ludmila.rizova@ergo.lv",";","• по телефону: +371 22355307;","• через форму обратной связи на сайте;","• непосредственно страховщику ERGO Insurance SE Latvijas filiāle.","","10.2. Обращение желательно должно содержать:","","• имя или наименование пользователя;","• контактные данные;","• номер полиса или заявки, если имеется;","• описание ситуации;","• требование пользователя;","• приложенные документы, если они есть.","","10.3. Если обращение касается страховой выплаты, признания страхового случая, отказа в выплате или изменения договора страхования, оно может быть передано страховщику либо пользователь будет проинформирован о порядке обращения к страховщику.","10.4. Если пользователь не согласен с ответом, он вправе обратиться к страховщику, в Latvijas Banka как компетентный орган финансового надзора, в Datu valsts inspekcija по вопросам персональных данных либо в суд."]},
    { title: "§ 11. Ответственность", paragraphs: ["11.1. Посредник несёт ответственность за надлежащее выполнение действий в пределах своих полномочий.","11.2. Посредник не несёт ответственности за:","","• недостоверные сведения, переданные пользователем;","• ошибки в документах, возникшие из-за данных пользователя;","• решения страховщика по заключению договора, изменению условий или выплате;","• сбои банков, платёжных провайдеров, операторов связи и иных третьих лиц;","• несанкционированный доступ к e-mail, мессенджерам или устройствам пользователя.","","11.3. Страховщик несёт ответственность по договору страхования в пределах условий договора и применимого законодательства."]},
    { title: "§ 12. Интеллектуальная собственность", paragraphs: ["12.1. Материалы сайта EURO Polis, включая тексты, дизайн, изображения, структуру сайта, элементы интерфейса и программный код, охраняются законодательством об интеллектуальной собственности.","12.2. Использование материалов сайта допускается только для личного ознакомления и получения страховых услуг.","12.3. Копирование, распространение или коммерческое использование материалов сайта допускается только с предварительного согласия правообладателя, если иное не разрешено законом."]},
    { title: "§ 13. Изменение Регламента", paragraphs: ["13.1. EURO Polis вправе обновлять настоящий Регламент в связи с изменением законодательства, страховых продуктов, технического функционала сайта, способов оплаты или порядка взаимодействия с пользователями.","13.2. Новая редакция публикуется на сайте и применяется с даты публикации, если иной срок не указан.","13.3. Изменения не имеют обратной силы и не влияют на уже заключённые договоры страхования, если иное не предусмотрено законом или условиями договора."]},
    { title: "§ 14. Применимое право и разрешение споров", paragraphs: ["14.1. К настоящему Регламенту применяется право Латвийской Республики и применимое право Европейского союза.","14.2. Споры решаются путём переговоров и рассмотрения обращения пользователя.","14.3. При невозможности урегулирования спора пользователь вправе обратиться в компетентные органы Латвии или в суд Латвийской Республики."]},
    { title: "§ 15. Заключительные положения", paragraphs: ["15.1. Настоящий Регламент размещается на сайте EURO Polis в свободном доступе.","15.2. Пользователь имеет возможность сохранить, распечатать или воспроизвести текст Регламента.","15.3. Если отдельное положение Регламента будет признано недействительным, это не влияет на действительность остальных положений.","15.4. Официальные сведения:","","Страховщик: ERGO Insurance SE Latvijas filiāle","Регистрационный номер: 40103599913","Адрес: Skanstes iela 50, Rīga, LV-1013, Латвия","","Страховой посредник: Rižova Ludmila","Телефон: +371 22355307","E-mail: ludmila.rizova@ergo.lv","","Страна деятельности: Латвия","Сайт: EURO Polis"]},
  ],
};

const lv: RulesDictionary = {
  pageTitle: "REGLAMENTS",
  subtitle: "par elektronisko pakalpojumu sniegšanu un apdrošināšanas līgumu noslēgšanas veicināšanu attālināti, izmantojot EURO Polis tīmekļa vietni",
  updatedAt: "05.05.2026",
  sections: [
    {
      title: "Informācija par apdrošinātāju un apdrošināšanas starpnieku",
      paragraphs: [
        "Apdrošināšanas pakalpojumi tiek sniegti, sadarbojoties ar apdrošinātāju:",
        "",
        "ERGO Insurance SE Latvijas filiāle",
        "Reģistrācijas numurs: 40103599913",
        "Juridiskā adrese: Skanstes iela 50, Rīga, LV-1013, Latvija",
        "",
        "Apdrošināšanas starpnieka dati:",
        "",
        "Rižova Ludmila",
        "Tālrunis: +371 22355307",
        "E-pasts: ludmila.rizova@ergo.lv",
        "",
        "Darbības valsts: Latvija",
        "Apdrošināšanas darbības veids: robežapdrošināšanas līgumi, tostarp transportlīdzekļu īpašnieku civiltiesiskās atbildības apdrošināšana iebraukšanai citu valstu teritorijā.",
        "",
        "Starpniekam ir tiesības pieņemt apdrošināšanas prēmiju no klienta, ja šādas tiesības ir piešķīris apdrošinātājs un tas atbilst piemērojamajiem normatīvajiem aktiem un līguma nosacījumiem ar apdrošinātāju."
      ]
    },
    {
      title: "§ 1. Definīcijas",
      paragraphs: [
        "Vietne — EURO Polis tīmekļa vietne, kurā lietotājs var saņemt informāciju par apdrošināšanas produktiem, iesniegt pieteikumu, nodot informāciju un dokumentus, saņemt konsultāciju un atbalstu apdrošināšanas līguma noslēgšanai attālināti.",
        "Apdrošinātājs — ERGO Insurance SE Latvijas filiāle vai cits apdrošinātājs, kas lietotājam tieši norādīts pirms apdrošināšanas līguma noslēgšanas.",
        "Apdrošināšanas starpnieks — Rižova Ludmila, kas veic apdrošināšanas produktu izplatīšanu Latvijā atbilstoši savam tiesiskajam statusam un apdrošinātāja piešķirtajām pilnvarām.",
        "Lietotājs — fiziska persona, juridiska persona vai juridiskas personas pārstāvis, kas izmanto EURO Polis vietni vai attālinātos saziņas kanālus.",
        "Apdrošinājuma ņēmējs — persona, kas noslēdz apdrošināšanas līgumu ar apdrošinātāju.",
        "Apdrošināšanas līgums — līgums starp apdrošinājuma ņēmēju un apdrošinātāju, kas var tikt noslēgts arī attālināti, ja to pieļauj normatīvie akti un attiecīgā apdrošināšanas produkta nosacījumi.",
        "Polise — papīra vai elektroniskas formas dokuments, kas apliecina apdrošināšanas līguma noslēgšanu.",
        "Apdrošināšanas prēmija — summa, kas apdrošinājuma ņēmējam jāmaksā par apdrošināšanas aizsardzību.",
        "Personas dati — jebkura informācija par identificētu vai identificējamu fizisku personu, kas tiek apstrādāta saskaņā ar GDPR un Latvijas normatīvajiem aktiem."
      ]
    },
    {
      title: "§ 2. Vispārīgie noteikumi",
      paragraphs: [
        "2.1. Šis Reglaments attiecas uz EURO Polis vietnes un attālināto saziņas kanālu izmantošanu informācijas, konsultāciju un atbalsta saņemšanai apdrošināšanas līgumu noslēgšanā.",
        "2.2. Reglaments izstrādāts, ņemot vērā:",
        "",
        "• Regulu (ES) 2016/679 (GDPR);",
        "• Direktīvu (ES) 2016/97 par apdrošināšanas izplatīšanu (IDD);",
        "• Latvijas Apdrošināšanas un pārapdrošināšanas izplatīšanas likumu;",
        "• Latvijas Apdrošināšanas un pārapdrošināšanas likumu;",
        "• Latvijas Patērētāju tiesību aizsardzības likumu;",
        "• ES tiesību aktus par finanšu pakalpojumu sniegšanu attālināti;",
        "• eIDAS regulu par elektronisko identifikāciju un uzticamības pakalpojumiem. eIDAS nodrošina tiesisko pamatu drošiem elektroniskajiem darījumiem un uzticamības pakalpojumiem ES.",
        "",
        "2.3. Vietnes izmantošana nozīmē lietotāja piekrišanu šim Reglamentam, ja lietotājs iesniedz pieteikumu, aizpilda formu, nodod dokumentus vai vēršas pēc konsultācijas.",
        "2.4. Apdrošināšanas līgums tiek noslēgts nevis ar EURO Polis vietni vai starpnieku, bet tieši starp apdrošinājuma ņēmēju un apdrošinātāju.",
        "2.5. Starpnieks nav apdrošinātājs, neuzņemas apdrošināšanas atlīdzības izmaksas pienākumu un nepieņem lēmumus par notikuma atzīšanu par apdrošināšanas gadījumu.",
        "2.6. Vietnē sniegtajai informācijai ir informatīvs raksturs, un tā nav publiska oferte, ja vien nav tieši norādīts citādi."
      ]
    },
    {
      title: "§ 3. Starpnieka statuss un informācijas atklāšana",
      paragraphs: [
        "3.1. Pirms apdrošināšanas līguma noslēgšanas lietotājam tiek sniegta informācija par apdrošinātāju, apdrošināšanas starpnieku, apdrošināšanas produkta veidu, apdrošināšanas prēmijas apmēru, būtiskajiem apdrošināšanas nosacījumiem, izņēmumiem un sūdzību iesniegšanas kārtību.",
        "3.2. Starpnieks darbojas apdrošinātāja piešķirto pilnvaru ietvaros un var palīdzēt:",
        "",
        "• pieņemt pieteikumus;",
        "• konsultēt lietotāju;",
        "• nodot datus apdrošinātājam;",
        "• noformēt apdrošināšanas polisi;",
        "• pieņemt apdrošināšanas prēmiju, ja to atļauj apdrošinātājs un piemērojamie normatīvie akti.",
        "",
        "3.3. Ja starpnieks saņem komisijas atlīdzību no apdrošinātāja, tas automātiski nenozīmē apdrošināšanas prēmijas palielinājumu lietotājam, ja vien pirms līguma noslēgšanas nav tieši norādīts citādi.",
        "3.4. Lietotājam ir tiesības pieprasīt papildu informāciju par starpnieka statusu, pilnvaru raksturu un atlīdzības saņemšanas kārtību."
      ]
    },
    {
      title: "§ 4. Vietnes izmantošanas kārtība",
      paragraphs: [
        "4.1. EURO Polis vietne ir paredzēta:",
        "",
        "• informācijas saņemšanai par apdrošināšanas produktiem;",
        "• pieteikumu iesniegšanai;",
        "• dokumentu un informācijas nodošanai;",
        "• apdrošināšanas izmaksu aprēķinam vai sākotnējai novērtēšanai;",
        "• apdrošināšanas dokumentu saņemšanai elektroniskā formā.",
        "",
        "4.2. Vietne var būt pieejama visu diennakti, izņemot tehniskās apkopes, sakaru traucējumu, atjauninājumu vai citu no EURO Polis neatkarīgu apstākļu gadījumus.",
        "4.3. Lietotājam ir pienākums sniegt patiesu, pilnīgu un aktuālu informāciju.",
        "4.4. Lietotājs atbild par kļūdainu, nepilnīgu vai nepatiesu datu nodošanas sekām, tostarp risku, ka apdrošinātājs var atteikt līguma noslēgšanu, mainīt nosacījumus vai atteikt apdrošināšanas atlīdzību.",
        "4.5. Lietotājam aizliegts izmantot vietni viltotu dokumentu, nepatiesas informācijas, ļaunprātīga koda nodošanai vai darbībām, kas pārkāpj trešo personu tiesības."
      ]
    },
    {
      title: "§ 5. Apdrošināšanas līguma noslēgšana attālināti",
      paragraphs: [
        "5.1. Apdrošināšanas noformēšanai lietotājs sniedz konkrētajam produktam nepieciešamo informāciju: apdrošinājuma ņēmēja, transportlīdzekļa, apdrošināšanas perioda, darbības teritorijas, maršruta, reģistrācijas dokumentu un citu nepieciešamo informāciju.",
        "5.2. Pirms līguma noslēgšanas lietotājs saņem informāciju par:",
        "",
        "• apdrošinātāju;",
        "• starpnieku;",
        "• apdrošināšanas produktu;",
        "• darbības teritoriju;",
        "• apdrošināšanas termiņu;",
        "• apdrošināšanas prēmiju;",
        "• izņēmumiem un ierobežojumiem;",
        "• apmaksas kārtību;",
        "• polises saņemšanas kārtību;",
        "• līguma grozīšanas vai izbeigšanas kārtību;",
        "• sūdzību iesniegšanas kārtību.",
        "",
        "5.3. Apdrošināšanas līgums uzskatāms par noslēgtu brīdī, ko nosaka apdrošinātāja noteikumi: lietotāja piekrišanas apstiprinājums, apdrošināšanas noteikumu pieņemšana, prēmijas apmaksa un polises izsniegšana, ja šādas darbības ir nepieciešamas.",
        "5.4. Elektroniskā polise vai cits dokuments, kas apliecina apdrošināšanas līguma noslēgšanu, var tikt nosūtīts lietotājam pa e-pastu, ziņapmaiņas lietotnē, klienta kabinetā vai citā saskaņotā kanālā.",
        "5.5. Lietotājam ir pienākums pārbaudīt polisē norādītos datus uzreiz pēc tās saņemšanas. Kļūdas gadījumā lietotājam nekavējoties jāinformē starpnieks vai apdrošinātājs."
      ]
    },
    {
      title: "§ 6. Apmaksa",
      paragraphs: [
        "6.1. Apdrošināšanas prēmijas apmaksa var tikt veikta:",
        "",
        "• ar bankas pārskaitījumu;",
        "• ar bankas karti, izmantojot maksājumu pakalpojumu sniedzēju;",
        "• citā vietnē norādītā vai ar lietotāju saskaņotā veidā.",
        "",
        "6.2. Ja starpnieks pieņem apdrošināšanas prēmiju, viņš darbojas apdrošinātāja piešķirto pilnvaru ietvaros.",
        "6.3. Maksājot ar bankas karti, kartes dati tiek ievadīti bankas vai maksājumu pakalpojumu sniedzēja aizsargātā lapā. EURO Polis un starpnieks neuzglabā pilnus bankas karšu datus.",
        "6.4. Maksājot ar bankas pārskaitījumu, lietotājam jāizmanto sniegtie rekvizīti un korekti jānorāda maksājuma mērķis.",
        "6.5. Par apmaksas brīdi uzskatāma naudas līdzekļu ieskaitīšana saņēmēja kontā, ja apdrošinātāja noteikumos nav paredzēts citādi.",
        "6.6. Apdrošināšanas prēmijas vai tās daļas atmaksa tiek veikta gadījumos un kārtībā, kas paredzēta apdrošināšanas līgumā, apdrošinātāja noteikumos un piemērojamajos normatīvajos aktos."
      ]
    },
    {
      title: "§ 7. Atteikuma tiesības un attālinātās apdrošināšanas īpatnības",
      paragraphs: [
        "7.1. Tā kā apdrošināšana ir finanšu pakalpojums, lietotāja atteikuma tiesības no līguma ir atkarīgas no apdrošināšanas produkta veida, līguma termiņa, apdrošināšanas aizsardzības sākuma brīža un piemērojamajiem normatīvajiem aktiem.",
        "7.2. Ja atteikuma tiesības paredz likums vai apdrošinātāja noteikumi, lietotājs pirms līguma noslēgšanas tiek informēts par atteikuma kārtību, termiņiem un sekām.",
        "7.3. Īstermiņa apdrošināšanas līgumiem un līgumiem, kuru izpilde sākusies ar lietotāja piekrišanu, atteikuma tiesības var būt ierobežotas.",
        "7.4. Starpnieks nepieņem patstāvīgus lēmumus par apdrošināšanas prēmijas atmaksu, ja šāds lēmums ir apdrošinātāja kompetencē."
      ]
    },
    {
      title: "§ 8. Personas dati",
      paragraphs: [
        "8.1. Personas datu apstrāde tiek veikta saskaņā ar GDPR un Latvijas normatīvajiem aktiem par personas datu aizsardzību.",
        "8.2. EURO Polis vietnē dati var tikt apstrādāti šādiem mērķiem:",
        "",
        "• pieteikuma izskatīšana;",
        "• apdrošināšanas produkta izvēle;",
        "• apdrošināšanas līguma noformēšana;",
        "• datu nodošana apdrošinātājam;",
        "• maksājumu apstrāde;",
        "• saziņa ar lietotāju;",
        "• juridisko pienākumu izpilde;",
        "• tiesību un leģitīmo interešu aizsardzība;",
        "• vietnes drošības nodrošināšana.",
        "",
        "8.3. Apstrādes tiesiskie pamati var būt:",
        "",
        "• līguma izpilde vai darbības pirms līguma noslēgšanas;",
        "• juridiska pienākuma izpilde;",
        "• leģitīmās intereses;",
        "• lietotāja piekrišana — piemēram, mārketinga paziņojumiem vai neobligātajām sīkdatnēm.",
        "",
        "8.4. Dati var tikt nodoti:",
        "",
        "• apdrošinātājam;",
        "• maksājumu pakalpojumu sniedzējiem;",
        "• IT pakalpojumu sniedzējiem;",
        "• hostinga pakalpojumu sniedzējiem;",
        "• valsts iestādēm, ja to prasa likums.",
        "",
        "8.5. Lietotājam ir GDPR paredzētās tiesības: piekļuve datiem, datu labošana, dzēšana, apstrādes ierobežošana, iebildumi pret apstrādi, datu pārnesamība un piekrišanas atsaukšana.",
        "8.6. Sūdzību par personas datu apstrādi var iesniegt Datu valsts inspekcijā. Inspekcijas kontaktinformācija ir publicēta tās oficiālajā tīmekļa vietnē."
      ]
    },
    {
      title: "§ 9. Sīkdatnes un tehniskie dati",
      paragraphs: [
        "9.1. Vietne var izmantot sīkdatnes un līdzīgas tehnoloģijas vietnes darbībai, valodas saglabāšanai, drošībai, analītikai un mārketingam.",
        "9.2. Nepieciešamās sīkdatnes tiek izmantotas bez piekrišanas, jo tās ir vajadzīgas vietnes darbībai.",
        "9.3. Analītiskās un mārketinga sīkdatnes tiek izmantotas tikai pēc lietotāja piekrišanas.",
        "9.4. Detalizēta sīkdatņu izmantošanas kārtība ir norādīta atsevišķā EURO Polis sīkdatņu politikā."
      ]
    },
    {
      title: "§ 10. Iesniegumi un sūdzības",
      paragraphs: [
        "10.1. Lietotājam ir tiesības iesniegt iesniegumu vai sūdzību:",
        "",
        "• pa e-pastu: ludmila.rizova@ergo.lv;",
        "• pa tālruni: +371 22355307;",
        "• izmantojot saziņas formu vietnē;",
        "• tieši apdrošinātājam ERGO Insurance SE Latvijas filiāle.",
        "",
        "10.2. Iesniegumā vēlams norādīt:",
        "",
        "• lietotāja vārdu, uzvārdu vai nosaukumu;",
        "• kontaktinformāciju;",
        "• polises vai pieteikuma numuru, ja tāds ir;",
        "• situācijas aprakstu;",
        "• lietotāja prasījumu;",
        "• pievienotos dokumentus, ja tādi ir.",
        "",
        "10.3. Ja iesniegums attiecas uz apdrošināšanas atlīdzību, apdrošināšanas gadījuma atzīšanu, atteikumu izmaksāt atlīdzību vai apdrošināšanas līguma grozīšanu, tas var tikt nodots apdrošinātājam vai lietotājs tiks informēts par vēršanās kārtību pie apdrošinātāja.",
        "10.4. Ja lietotājs nepiekrīt saņemtajai atbildei, viņam ir tiesības vērsties pie apdrošinātāja, Latvijas Bankā kā kompetentajā finanšu uzraudzības iestādē, Datu valsts inspekcijā personas datu jautājumos vai tiesā."
      ]
    },
    {
      title: "§ 11. Atbildība",
      paragraphs: [
        "11.1. Starpnieks atbild par pienācīgu darbību veikšanu savu pilnvaru ietvaros.",
        "11.2. Starpnieks neatbild par:",
        "",
        "• lietotāja sniegto nepatieso informāciju;",
        "• kļūdām dokumentos, kas radušās lietotāja sniegto datu dēļ;",
        "• apdrošinātāja lēmumiem par līguma noslēgšanu, nosacījumu grozīšanu vai atlīdzības izmaksu;",
        "• banku, maksājumu pakalpojumu sniedzēju, sakaru operatoru un citu trešo personu darbības traucējumiem;",
        "• nesankcionētu piekļuvi lietotāja e-pastam, ziņapmaiņas lietotnēm vai ierīcēm.",
        "",
        "11.3. Apdrošinātājs atbild saskaņā ar apdrošināšanas līgumu, tā nosacījumiem un piemērojamajiem normatīvajiem aktiem."
      ]
    },
    {
      title: "§ 12. Intelektuālais īpašums",
      paragraphs: [
        "12.1. EURO Polis vietnes materiāli, tostarp teksti, dizains, attēli, vietnes struktūra, interfeisa elementi un programmkods, ir aizsargāti ar intelektuālā īpašuma tiesību normām.",
        "12.2. Vietnes materiālu izmantošana ir atļauta tikai personīgai iepazīšanai un apdrošināšanas pakalpojumu saņemšanai.",
        "12.3. Vietnes materiālu kopēšana, izplatīšana vai komerciāla izmantošana ir pieļaujama tikai ar iepriekšēju tiesību īpašnieka piekrišanu, ja likums neparedz citādi."
      ]
    },
    {
      title: "§ 13. Reglamenta grozīšana",
      paragraphs: [
        "13.1. EURO Polis ir tiesības atjaunināt šo Reglamentu saistībā ar normatīvo aktu, apdrošināšanas produktu, vietnes tehniskā funkcionalitātes, maksājumu veidu vai mijiedarbības kārtības ar lietotājiem izmaiņām.",
        "13.2. Jaunā redakcija tiek publicēta vietnē un piemērojama no publicēšanas datuma, ja nav norādīts cits termiņš.",
        "13.3. Grozījumiem nav atpakaļejoša spēka, un tie neietekmē jau noslēgtos apdrošināšanas līgumus, ja likumā vai līguma nosacījumos nav paredzēts citādi."
      ]
    },
    {
      title: "§ 14. Piemērojamās tiesības un strīdu izšķiršana",
      paragraphs: [
        "14.1. Šim Reglamentam piemērojamas Latvijas Republikas tiesības un piemērojamās Eiropas Savienības tiesības.",
        "14.2. Strīdi tiek risināti pārrunu ceļā un izskatot lietotāja iesniegumu.",
        "14.3. Ja strīdu nav iespējams atrisināt, lietotājam ir tiesības vērsties Latvijas kompetentajās iestādēs vai Latvijas Republikas tiesā."
      ]
    },
    {
      title: "§ 15. Noslēguma noteikumi",
      paragraphs: [
        "15.1. Šis Reglaments ir brīvi pieejams EURO Polis vietnē.",
        "15.2. Lietotājam ir iespēja saglabāt, izdrukāt vai reproducēt Reglamenta tekstu.",
        "15.3. Ja atsevišķs Reglamenta noteikums tiek atzīts par spēkā neesošu, tas neietekmē pārējo noteikumu spēkā esamību.",
        "15.4. Oficiālā informācija:",
        "",
        "Apdrošinātājs: ERGO Insurance SE Latvijas filiāle",
        "Reģistrācijas numurs: 40103599913",
        "Adrese: Skanstes iela 50, Rīga, LV-1013, Latvija",
        "",
        "Apdrošināšanas starpnieks: Rižova Ludmila",
        "Tālrunis: +371 22355307",
        "E-pasts: ludmila.rizova@ergo.lv",
        "",
        "Darbības valsts: Latvija",
        "Vietne: EURO Polis"
      ]
    }
  ]
};

const en: RulesDictionary = {
  pageTitle: "RULES",
  subtitle:
    "for the provision of electronic services and assistance in concluding insurance contracts remotely via the EURO Polis website",
  updatedAt: "05 May 2026",
  sections: [
    {
      title: "Information about the insurer and insurance intermediary",
      paragraphs: [
        "Insurance services are provided with the involvement of the insurer:",
        "",
        "ERGO Insurance SE Latvijas filiāle",
        "Registration number: 40103599913",
        "Legal address: Skanstes iela 50, Riga, LV-1013, Latvia",
        "",
        "Insurance intermediary details:",
        "",
        "Rižova Ludmila",
        "Phone: +371 22355307",
        "Email: ludmila.rizova@ergo.lv",
        "",
        "Country of operation: Latvia",
        "Type of insurance activity: border insurance contracts, including motor third-party liability insurance for entry into other countries.",
        "",
        "The intermediary may accept insurance premiums from clients if such authority is granted by the insurer and complies with applicable law and the terms of the agreement with the insurer.",
      ],
    },
    {
      title: "§ 1. Definitions",
      paragraphs: [
        "Website — the EURO Polis website through which users may obtain information about insurance products, submit applications, provide data and documents, receive advice, and obtain assistance in concluding insurance contracts remotely.",
        "Insurer — ERGO Insurance SE Latvijas filiāle or another insurer clearly indicated to the user before the insurance contract is concluded.",
        "Insurance intermediary — Rižova Ludmila, carrying out insurance distribution activities in Latvia within her legal status and the authority granted by the insurer.",
        "User — an individual, legal entity, or representative of a legal entity using the EURO Polis website or remote communication channels.",
        "Policyholder — the person concluding an insurance contract with the insurer.",
        "Insurance contract — a contract between the policyholder and the insurer, including one concluded remotely where permitted by law and the terms of the relevant insurance product.",
        "Policy — a paper or electronic document confirming the conclusion of an insurance contract.",
        "Insurance premium — the amount payable by the policyholder for insurance coverage.",
        "Personal data — any information relating to an identified or identifiable natural person, processed in accordance with the GDPR and Latvian law.",
      ],
    },
    {
      title: "§ 2. General provisions",
      paragraphs: [
        "2.1. These Rules apply to the use of the EURO Polis website and remote communication channels for obtaining information, advice, and assistance in concluding insurance contracts.",
        "2.2. These Rules have been prepared with regard to:",
        "",
        "• Regulation (EU) 2016/679 (GDPR);",
        "• Directive (EU) 2016/97 on insurance distribution (IDD);",
        "• Latvian law on insurance and reinsurance distribution;",
        "• Latvian law on insurance and reinsurance;",
        "• Latvian consumer rights legislation;",
        "• EU legislation on the distance provision of financial services;",
        "• the eIDAS Regulation on electronic identification and trust services. eIDAS provides the legal framework for secure electronic transactions and trust services in the EU.",
        "",
        "2.3. Use of the website means acceptance of these Rules if the user submits an application, completes a form, provides documents, or requests advice.",
        "2.4. The insurance contract is concluded not with the EURO Polis website or the intermediary, but directly between the policyholder and the insurer.",
        "2.5. The intermediary is not an insurer, does not assume any obligation to pay insurance claims, and does not decide whether an event qualifies as an insured event.",
        "2.6. Information on the website is for reference only and does not constitute a public offer unless expressly stated otherwise.",
      ],
    },
    {
      title: "§ 3. Intermediary status and disclosure",
      paragraphs: [
        "3.1. Before concluding an insurance contract, the user is provided with information about the insurer, the insurance intermediary, the type of insurance product, the insurance premium, the material insurance terms, exclusions, and the complaints procedure.",
        "3.2. The intermediary acts within the authority granted by the insurer and may assist with:",
        "",
        "• receiving applications;",
        "• advising the user;",
        "• transferring data to the insurer;",
        "• issuing the insurance policy;",
        "• accepting the insurance premium, where permitted by the insurer and applicable law.",
        "",
        "3.3. If the intermediary receives commission from the insurer, this does not automatically increase the insurance premium payable by the user unless expressly stated before the contract is concluded.",
        "3.4. The user may request additional information about the intermediary’s status, the scope of authority, and the remuneration procedure.",
      ],
    },
    {
      title: "§ 4. Website use procedure",
      paragraphs: [
        "4.1. The EURO Polis website is intended for:",
        "",
        "• obtaining information about insurance products;",
        "• submitting applications;",
        "• providing documents and information;",
        "• calculating or preliminarily estimating the insurance cost;",
        "• receiving insurance documents electronically.",
        "",
        "4.2. The website may be available 24/7, except during maintenance, communication failures, updates, or other circumstances beyond EURO Polis control.",
        "4.3. The user must provide accurate, complete, and up-to-date information.",
        "4.4. The user is responsible for the consequences of providing incorrect, incomplete, or false information, including the risk that the insurer may refuse to conclude the contract, amend the terms, or pay a claim.",
        "4.5. The user is prohibited from using the website to submit forged documents, false information, malicious code, or to take actions that infringe the rights of third parties.",
      ],
    },
    {
      title: "§ 5. Concluding an insurance contract remotely",
      paragraphs: [
        "5.1. To arrange insurance, the user provides the information required for the specific product: policyholder details, vehicle details, insurance period, territorial scope, route, registration documents, and other relevant information.",
        "5.2. Before the contract is concluded, the user receives information about:",
        "",
        "• the insurer;",
        "• the intermediary;",
        "• the insurance product;",
        "• territorial scope;",
        "• insurance period;",
        "• insurance premium;",
        "• exclusions and limitations;",
        "• payment procedure;",
        "• policy delivery procedure;",
        "• amendment or termination procedure;",
        "• complaints procedure.",
        "",
        "5.3. The insurance contract is considered concluded from the moment defined by the insurer’s terms: confirmation of the user’s consent, acceptance of the insurance terms, payment of the premium, and issuance of the policy, where such actions are required.",
        "5.4. The electronic policy or other document confirming the conclusion of the insurance contract may be sent to the user by email, messenger, personal account, or another agreed channel.",
        "5.5. The user must check the policy details immediately after receipt. If an error is found, the user must promptly notify the intermediary or the insurer.",
      ],
    },
    {
      title: "§ 6. Payment",
      paragraphs: [
        "6.1. The insurance premium may be paid:",
        "",
        "• by bank transfer;",
        "• by bank card through a payment provider;",
        "• by another method indicated on the website or agreed with the user.",
        "",
        "6.2. If the intermediary accepts the insurance premium, they act within the authority granted by the insurer.",
        "6.3. When paying by bank card, card details are entered on the secure page of the bank or payment provider. EURO Polis and the intermediary do not store full bank card details.",
        "6.4. When paying by bank transfer, the user must use the provided bank details and correctly indicate the payment purpose.",
        "6.5. Payment is deemed made when the funds are credited to the recipient, unless otherwise provided by the insurer’s terms.",
        "6.6. Refunds of the insurance premium or part of it are made in the cases and according to the procedure provided by the insurance contract, the insurer’s rules, and applicable law.",
      ],
    },
    {
      title: "§ 7. Right of withdrawal and specific features of distance insurance",
      paragraphs: [
        "7.1. Since insurance is a financial service, the user’s right to withdraw from the contract depends on the type of insurance product, the contract period, the start of insurance coverage, and applicable law.",
        "7.2. Where a right of withdrawal is provided by law or the insurer’s terms, the user is informed about the procedure, time limits, and consequences of withdrawal before the contract is concluded.",
        "7.3. For short-term insurance contracts and contracts whose performance has begun with the user’s consent, the right of withdrawal may be limited.",
        "7.4. The intermediary does not independently decide on premium refunds where such decision falls within the insurer’s competence.",
      ],
    },
    {
      title: "§ 8. Personal data",
      paragraphs: [
        "8.1. Personal data is processed in accordance with the GDPR and Latvian personal data protection law.",
        "8.2. Within the EURO Polis website, data may be processed for the following purposes:",
        "",
        "• reviewing applications;",
        "• selecting an insurance product;",
        "• issuing an insurance contract;",
        "• transferring data to the insurer;",
        "• processing payments;",
        "• communicating with the user;",
        "• complying with legal obligations;",
        "• protecting rights and legitimate interests;",
        "• ensuring website security.",
        "",
        "8.3. The legal bases for processing may include:",
        "",
        "• performance of a contract or steps prior to entering into a contract;",
        "• compliance with a legal obligation;",
        "• legitimate interest;",
        "• user consent, for example for marketing communications or non-essential cookies.",
        "",
        "8.4. Data may be transferred to:",
        "",
        "• the insurer;",
        "• payment providers;",
        "• IT contractors;",
        "• hosting providers;",
        "• public authorities where required by law.",
        "",
        "8.5. The user has the rights provided under the GDPR: access, rectification, erasure, restriction of processing, objection to processing, data portability, and withdrawal of consent.",
        "8.6. A complaint regarding personal data processing may be submitted to Datu valsts inspekcija. The Inspectorate’s contact details are published on its official website.",
      ],
    },
    {
      title: "§ 9. Cookies and technical data",
      paragraphs: [
        "9.1. The website may use cookies and similar technologies for website operation, language preferences, security, analytics, and marketing.",
        "9.2. Strictly necessary cookies are used without consent because they are required for the website to function.",
        "9.3. Analytics and marketing cookies are used only after the user’s consent.",
        "9.4. Detailed rules for the use of cookies are set out in the separate EURO Polis Cookie Policy.",
      ],
    },
    {
      title: "§ 10. Requests and complaints",
      paragraphs: [
        "10.1. The user may submit a request or complaint:",
        "",
        "• by email: ludmila.rizova@ergo.lv;",
        "• by phone: +371 22355307;",
        "• through the contact form on the website;",
        "• directly to the insurer, ERGO Insurance SE Latvijas filiāle.",
        "",
        "10.2. A request should preferably include:",
        "",
        "• the user’s name or company name;",
        "• contact details;",
        "• policy or application number, if available;",
        "• description of the situation;",
        "• the user’s request;",
        "• supporting documents, if any.",
        "",
        "10.3. If the request concerns an insurance claim, recognition of an insured event, refusal of payment, or amendment of the insurance contract, it may be forwarded to the insurer, or the user will be informed how to contact the insurer.",
        "10.4. If the user disagrees with the response, they may contact the insurer, Latvijas Banka as the competent financial supervisory authority, Datu valsts inspekcija for personal data matters, or a court.",
      ],
    },
    {
      title: "§ 11. Liability",
      paragraphs: [
        "11.1. The intermediary is liable for the proper performance of actions within their authority.",
        "11.2. The intermediary is not liable for:",
        "",
        "• false information provided by the user;",
        "• errors in documents caused by user-provided data;",
        "• insurer decisions on contract conclusion, amendment of terms, or claim payment;",
        "• failures of banks, payment providers, telecom operators, or other third parties;",
        "• unauthorized access to the user’s email, messaging apps, or devices.",
        "",
        "11.3. The insurer is liable under the insurance contract within the terms of the contract and applicable law.",
      ],
    },
    {
      title: "§ 12. Intellectual property",
      paragraphs: [
        "12.1. EURO Polis website materials, including texts, design, images, website structure, interface elements, and software code, are protected by intellectual property law.",
        "12.2. Website materials may be used only for personal review and obtaining insurance services.",
        "12.3. Copying, distribution, or commercial use of website materials is allowed only with the prior consent of the rights holder, unless otherwise permitted by law.",
      ],
    },
    {
      title: "§ 13. Amendments to the Rules",
      paragraphs: [
        "13.1. EURO Polis may update these Rules due to changes in legislation, insurance products, website functionality, payment methods, or user interaction procedures.",
        "13.2. The new version is published on the website and applies from the date of publication unless another effective date is specified.",
        "13.3. Amendments have no retroactive effect and do not affect already concluded insurance contracts unless otherwise provided by law or the contract terms.",
      ],
    },
    {
      title: "§ 14. Applicable law and dispute resolution",
      paragraphs: [
        "14.1. These Rules are governed by the laws of the Republic of Latvia and applicable European Union law.",
        "14.2. Disputes are resolved through negotiations and review of the user’s request.",
        "14.3. If the dispute cannot be resolved, the user may apply to the competent authorities of Latvia or to a court of the Republic of Latvia.",
      ],
    },
    {
      title: "§ 15. Final provisions",
      paragraphs: [
        "15.1. These Rules are published on the EURO Polis website and are freely accessible.",
        "15.2. The user may save, print, or reproduce the text of these Rules.",
        "15.3. If any provision of these Rules is found invalid, this does not affect the validity of the remaining provisions.",
        "15.4. Official details:",
        "",
        "Insurer: ERGO Insurance SE Latvijas filiāle",
        "Registration number: 40103599913",
        "Address: Skanstes iela 50, Riga, LV-1013, Latvia",
        "",
        "Insurance intermediary: Rižova Ludmila",
        "Phone: +371 22355307",
        "Email: ludmila.rizova@ergo.lv",
        "",
        "Country of operation: Latvia",
        "Website: EURO Polis",
      ],
    },
  ],
};

const uz: RulesDictionary = {
  pageTitle: "REGLAMENT",
  subtitle: "EURO Polis sayti orqali elektron xizmatlar ko‘rsatish va masofadan sug‘urta shartnomalarini tuzishga ko‘maklashish tartibi",
  updatedAt: "05.05.2026",
  sections: [
    {
      title: "Sug‘urta kompaniyasi va sug‘urta vositachisi haqida ma’lumot",
      paragraphs: [
        "Sug‘urta xizmatlari quyidagi sug‘urta kompaniyasi ishtirokida taqdim etiladi:",
        "",
        "ERGO Insurance SE Latvijas filiāle",
        "Ro‘yxatga olish raqami: 40103599913",
        "Yuridik manzil: Skanstes iela 50, Rīga, LV-1013, Latviya",
        "",
        "Sug‘urta vositachisi ma’lumotlari:",
        "",
        "Rižova Ludmila",
        "Telefon: +371 22355307",
        "E-mail: ludmila.rizova@ergo.lv",
        "",
        "Faoliyat yuritiladigan mamlakat: Latviya",
        "Sug‘urta faoliyati turi: chegaraviy sug‘urta shartnomalari, shu jumladan boshqa davlatlar hududiga kirish uchun transport vositalari egalarining fuqarolik javobgarligini sug‘urtalash.",
        "",
        "Vositachi sug‘urtalovchi tomonidan bunday huquq berilgan va bu amaldagi qonunchilik hamda sug‘urtalovchi bilan tuzilgan shartnoma shartlariga mos bo‘lgan hollarda mijozdan sug‘urta mukofotini qabul qilish huquqiga ega."
      ]
    },
    {
      title: "§ 1. Ta’riflar",
      paragraphs: [
        "Sayt — EURO Polis internet-sayti bo‘lib, u orqali foydalanuvchi sug‘urta mahsulotlari haqida ma’lumot olishi, ariza yuborishi, ma’lumot va hujjatlarni taqdim etishi, maslahat olishi hamda masofadan sug‘urta shartnomasini tuzishda ko‘mak olishi mumkin.",
        "Sug‘urtalovchi — ERGO Insurance SE Latvijas filiāle yoki sug‘urta shartnomasi tuzilishidan oldin foydalanuvchiga aniq ko‘rsatilgan boshqa sug‘urtalovchi.",
        "Sug‘urta vositachisi — Rižova Ludmila, Latviyada sug‘urta mahsulotlarini tarqatish faoliyatini sug‘urtalovchi tomonidan berilgan huquqiy maqom va vakolatlar doirasida amalga oshiradi.",
        "Foydalanuvchi — EURO Polis sayti yoki masofaviy aloqa kanallaridan foydalanadigan jismoniy shaxs, yuridik shaxs yoki yuridik shaxs vakili.",
        "Sug‘urtalanuvchi — sug‘urtalovchi bilan sug‘urta shartnomasini tuzadigan shaxs.",
        "Sug‘urta shartnomasi — sug‘urtalanuvchi va sug‘urtalovchi o‘rtasidagi shartnoma bo‘lib, tegishli qonunchilik va sug‘urta mahsuloti shartlari ruxsat bergan hollarda masofadan ham tuzilishi mumkin.",
        "Polis — sug‘urta shartnomasi tuzilganini tasdiqlovchi qog‘oz yoki elektron shakldagi hujjat.",
        "Sug‘urta mukofoti — sug‘urtalanuvchi sug‘urta himoyasi uchun to‘lashi kerak bo‘lgan summa.",
        "Shaxsiy ma’lumotlar — GDPR va Latviya qonunchiligiga muvofiq qayta ishlanadigan, aniqlangan yoki aniqlanishi mumkin bo‘lgan jismoniy shaxsga oid har qanday ma’lumot."
      ]
    },
    {
      title: "§ 2. Umumiy qoidalar",
      paragraphs: [
        "2.1. Ushbu Reglament EURO Polis sayti va masofaviy aloqa kanallaridan ma’lumot olish, maslahat olish hamda sug‘urta shartnomalarini tuzishda ko‘mak olish uchun foydalanishga nisbatan qo‘llaniladi.",
        "2.2. Reglament quyidagilarni inobatga olgan holda ishlab chiqilgan:",
        "",
        "• YI 2016/679 reglamenti (GDPR);",
        "• sug‘urtani tarqatish bo‘yicha YI 2016/97 direktivasi (IDD);",
        "• Latviyaning sug‘urta va qayta sug‘urtani tarqatish to‘g‘risidagi qonuni;",
        "• Latviyaning sug‘urta va qayta sug‘urta to‘g‘risidagi qonuni;",
        "• Latviyaning iste’molchilar huquqlari to‘g‘risidagi qonuni;",
        "• YI masofadan moliyaviy xizmatlar ko‘rsatish bo‘yicha qonunchiligi;",
        "• elektron identifikatsiya va ishonchli xizmatlar bo‘yicha eIDAS reglamenti. eIDAS YI hududida xavfsiz elektron tranzaksiyalar va ishonchli xizmatlar uchun huquqiy asos yaratadi.",
        "",
        "2.3. Foydalanuvchi ariza yuborsa, shaklni to‘ldirsa, hujjatlarni taqdim etsa yoki maslahat so‘rasa, saytdan foydalanish ushbu Reglamentga rozilik bildirganini anglatadi.",
        "2.4. Sug‘urta shartnomasi EURO Polis sayti yoki vositachi bilan emas, bevosita sug‘urtalanuvchi va sug‘urtalovchi o‘rtasida tuziladi.",
        "2.5. Vositachi sug‘urtalovchi emas, sug‘urta to‘lovi bo‘yicha majburiyat olmaydi va hodisani sug‘urta hodisasi deb tan olish bo‘yicha qaror qabul qilmaydi.",
        "2.6. Saytdagi ma’lumotlar axborot xarakteriga ega va, agar boshqacha aniq ko‘rsatilmagan bo‘lsa, ommaviy oferta hisoblanmaydi."
      ]
    },
    {
      title: "§ 3. Vositachi maqomi va ma’lumotlarni oshkor qilish",
      paragraphs: [
        "3.1. Sug‘urta shartnomasi tuzilishidan oldin foydalanuvchiga sug‘urtalovchi, sug‘urta vositachisi, sug‘urta mahsuloti turi, sug‘urta mukofoti miqdori, muhim sug‘urta shartlari, istisnolar va shikoyat berish tartibi haqida ma’lumot taqdim etiladi.",
        "3.2. Vositachi sug‘urtalovchi tomonidan berilgan vakolatlar doirasida harakat qiladi va quyidagilarda ko‘maklashishi mumkin:",
        "",
        "• arizalarni qabul qilish;",
        "• foydalanuvchiga maslahat berish;",
        "• ma’lumotlarni sug‘urtalovchiga uzatish;",
        "• sug‘urta polisini rasmiylashtirish;",
        "• sug‘urtalovchi va amaldagi qonunchilik ruxsat bergan hollarda sug‘urta mukofotini qabul qilish.",
        "",
        "3.3. Agar vositachi sug‘urtalovchidan komissiya mukofoti olsa, bu foydalanuvchi uchun sug‘urta mukofoti avtomatik ravishda oshishini anglatmaydi, agar shartnoma tuzilishidan oldin boshqacha aniq ko‘rsatilmagan bo‘lsa.",
        "3.4. Foydalanuvchi vositachining maqomi, vakolatlari xususiyati va mukofot olish tartibi haqida qo‘shimcha ma’lumot so‘rash huquqiga ega."
      ]
    },
    {
      title: "§ 4. Saytdan foydalanish tartibi",
      paragraphs: [
        "4.1. EURO Polis sayti quyidagilar uchun mo‘ljallangan:",
        "",
        "• sug‘urta mahsulotlari haqida ma’lumot olish;",
        "• arizalar yuborish;",
        "• hujjat va ma’lumotlarni taqdim etish;",
        "• sug‘urta narxini hisoblash yoki dastlabki baholash;",
        "• sug‘urta hujjatlarini elektron shaklda olish.",
        "",
        "4.2. Sayt texnik ishlar, aloqa uzilishlari, yangilanishlar yoki EURO Polis nazoratidan tashqaridagi boshqa holatlar bundan mustasno, sutka davomida ishlashi mumkin.",
        "4.3. Foydalanuvchi ishonchli, to‘liq va dolzarb ma’lumotlarni taqdim etishi shart.",
        "4.4. Foydalanuvchi noto‘g‘ri, to‘liq bo‘lmagan yoki ishonchsiz ma’lumotlarni taqdim etish oqibatlari uchun javobgar bo‘ladi, shu jumladan sug‘urtalovchi shartnoma tuzishni, shartlarni o‘zgartirishni yoki sug‘urta to‘lovini rad etishi xavfi uchun.",
        "4.5. Foydalanuvchiga sayt orqali soxta hujjatlar, yolg‘on ma’lumotlar, zararli kod yuborish yoki uchinchi shaxslar huquqlarini buzuvchi harakatlarni amalga oshirish taqiqlanadi."
      ]
    },
    {
      title: "§ 5. Masofadan sug‘urta shartnomasini tuzish",
      paragraphs: [
        "5.1. Sug‘urtani rasmiylashtirish uchun foydalanuvchi tegishli mahsulot uchun zarur ma’lumotlarni taqdim etadi: sug‘urtalanuvchi, transport vositasi, sug‘urta muddati, amal qilish hududi, marshrut, ro‘yxatga olish hujjatlari va boshqa ma’lumotlar.",
        "5.2. Shartnoma tuzilishidan oldin foydalanuvchi quyidagilar haqida ma’lumot oladi:",
        "",
        "• sug‘urtalovchi;",
        "• vositachi;",
        "• sug‘urta mahsuloti;",
        "• amal qilish hududi;",
        "• sug‘urta muddati;",
        "• sug‘urta mukofoti;",
        "• istisnolar va cheklovlar;",
        "• to‘lov tartibi;",
        "• polisni olish tartibi;",
        "• shartnomani o‘zgartirish yoki bekor qilish tartibi;",
        "• shikoyat berish tartibi.",
        "",
        "5.3. Sug‘urta shartnomasi sug‘urtalovchi shartlarida belgilangan paytdan boshlab tuzilgan hisoblanadi: foydalanuvchi roziligini tasdiqlashi, sug‘urta shartlarini qabul qilishi, sug‘urta mukofotini to‘lashi va polis chiqarilishi, agar bunday harakatlar talab qilinsa.",
        "5.4. Elektron polis yoki sug‘urta shartnomasi tuzilganini tasdiqlovchi boshqa hujjat foydalanuvchiga e-mail, messendjer, shaxsiy kabinet yoki boshqa kelishilgan kanal orqali yuborilishi mumkin.",
        "5.5. Foydalanuvchi polisni olgandan so‘ng undagi ma’lumotlarni darhol tekshirishi shart. Xato aniqlansa, foydalanuvchi bu haqda zudlik bilan vositachi yoki sug‘urtalovchiga xabar berishi kerak."
      ]
    },
    {
      title: "§ 6. To‘lov",
      paragraphs: [
        "6.1. Sug‘urta mukofoti quyidagi usullar bilan to‘lanishi mumkin:",
        "",
        "• bank o‘tkazmasi;",
        "• to‘lov provayderi orqali bank kartasi;",
        "• saytda ko‘rsatilgan yoki foydalanuvchi bilan kelishilgan boshqa usul.",
        "",
        "6.2. Agar vositachi sug‘urta mukofotini qabul qilsa, u sug‘urtalovchi tomonidan berilgan vakolatlar doirasida harakat qiladi.",
        "6.3. Bank kartasi orqali to‘lovda karta ma’lumotlari bank yoki to‘lov provayderining himoyalangan sahifasida kiritiladi. EURO Polis va vositachi bank kartalarining to‘liq ma’lumotlarini saqlamaydi.",
        "6.4. Bank o‘tkazmasi orqali to‘lovda foydalanuvchi berilgan rekvizitlardan foydalanishi va to‘lov maqsadini to‘g‘ri ko‘rsatishi shart.",
        "6.5. Agar sug‘urtalovchi shartlarida boshqacha nazarda tutilmagan bo‘lsa, to‘lov sanasi mablag‘lar oluvchining hisobiga kelib tushgan payt hisoblanadi.",
        "6.6. Sug‘urta mukofoti yoki uning bir qismini qaytarish sug‘urta shartnomasi, sug‘urtalovchi qoidalari va amaldagi qonunchilikda belgilangan hollarda va tartibda amalga oshiriladi."
      ]
    },
    {
      title: "§ 7. Rad etish huquqi va masofaviy sug‘urtaning xususiyatlari",
      paragraphs: [
        "7.1. Sug‘urta moliyaviy xizmat bo‘lgani sababli foydalanuvchining shartnomadan voz kechish huquqi sug‘urta mahsuloti turi, shartnoma muddati, sug‘urta himoyasi boshlangan vaqt va qo‘llaniladigan qonunchilikka bog‘liq.",
        "7.2. Agar rad etish huquqi qonun yoki sug‘urtalovchi shartlarida nazarda tutilgan bo‘lsa, foydalanuvchiga shartnoma tuzilishidan oldin rad etish tartibi, muddati va oqibatlari haqida ma’lumot beriladi.",
        "7.3. Qisqa muddatli sug‘urta shartnomalari va foydalanuvchi roziligi bilan bajarilishi boshlangan shartnomalar bo‘yicha rad etish huquqi cheklangan bo‘lishi mumkin.",
        "7.4. Agar sug‘urta mukofotini qaytarish bo‘yicha qaror sug‘urtalovchi vakolatiga kirsa, vositachi bunday qarorni mustaqil qabul qilmaydi."
      ]
    },
    {
      title: "§ 8. Shaxsiy ma’lumotlar",
      paragraphs: [
        "8.1. Shaxsiy ma’lumotlarni qayta ishlash GDPR va Latviyaning shaxsiy ma’lumotlarni himoya qilish to‘g‘risidagi qonunchiligiga muvofiq amalga oshiriladi.",
        "8.2. EURO Polis sayti doirasida ma’lumotlar quyidagi maqsadlarda qayta ishlanishi mumkin:",
        "",
        "• arizani ko‘rib chiqish;",
        "• sug‘urta mahsulotini tanlash;",
        "• sug‘urta shartnomasini rasmiylashtirish;",
        "• ma’lumotlarni sug‘urtalovchiga uzatish;",
        "• to‘lovlarni qayta ishlash;",
        "• foydalanuvchi bilan aloqa qilish;",
        "• yuridik majburiyatlarni bajarish;",
        "• huquqlar va qonuniy manfaatlarni himoya qilish;",
        "• sayt xavfsizligini ta’minlash.",
        "",
        "8.3. Qayta ishlashning huquqiy asoslari quyidagilar bo‘lishi mumkin:",
        "",
        "• shartnomani bajarish yoki shartnoma tuzilishidan oldingi harakatlar;",
        "• yuridik majburiyatni bajarish;",
        "• qonuniy manfaat;",
        "• foydalanuvchi roziligi — masalan, marketing xabarlari yoki ixtiyoriy cookie uchun.",
        "",
        "8.4. Ma’lumotlar quyidagilarga uzatilishi mumkin:",
        "",
        "• sug‘urtalovchiga;",
        "• to‘lov provayderlariga;",
        "• IT pudratchilarga;",
        "• hosting provayderlariga;",
        "• davlat organlariga, agar qonun talab qilsa.",
        "",
        "8.5. Foydalanuvchi GDPRda nazarda tutilgan huquqlarga ega: ma’lumotlarga kirish, tuzatish, o‘chirish, qayta ishlashni cheklash, qayta ishlashga e’tiroz bildirish, ma’lumotlarni ko‘chirish va rozilikni bekor qilish.",
        "8.6. Shaxsiy ma’lumotlarni qayta ishlash bo‘yicha shikoyat Datu valsts inspekcija organiga berilishi mumkin. Inspeksiya kontaktlari uning rasmiy saytida e’lon qilingan."
      ]
    },
    {
      title: "§ 9. Cookie va texnik ma’lumotlar",
      paragraphs: [
        "9.1. Sayt ishlashi, tilni saqlash, xavfsizlik, analitika va marketing uchun cookie hamda shunga o‘xshash texnologiyalardan foydalanishi mumkin.",
        "9.2. Zarur cookie’lar foydalanuvchi roziligisiz ishlatiladi, chunki ular sayt ishlashi uchun kerak.",
        "9.3. Analitik va marketing cookie’lar faqat foydalanuvchi roziligidan keyin ishlatiladi.",
        "9.4. Cookie’dan foydalanishning batafsil tartibi EURO Polisning alohida Cookie siyosatida ko‘rsatiladi."
      ]
    },
    {
      title: "§ 10. Murojaatlar va shikoyatlar",
      paragraphs: [
        "10.1. Foydalanuvchi murojaat yoki shikoyatni quyidagi usullar bilan yuborishi mumkin:",
        "",
        "• e-mail orqali: ludmila.rizova@ergo.lv",
        ";",
        "• telefon orqali: +371 22355307;",
        "• saytdagi aloqa shakli orqali;",
        "• bevosita ERGO Insurance SE Latvijas filiāle sug‘urtalovchisiga.",
        "",
        "10.2. Murojaatda quyidagilar bo‘lishi maqsadga muvofiq:",
        "",
        "• foydalanuvchining ismi yoki nomi;",
        "• aloqa ma’lumotlari;",
        "• polis yoki ariza raqami, agar mavjud bo‘lsa;",
        "• vaziyat tavsifi;",
        "• foydalanuvchi talabi;",
        "• mavjud bo‘lsa, ilova qilingan hujjatlar.",
        "",
        "10.3. Agar murojaat sug‘urta to‘lovi, hodisani sug‘urta hodisasi deb tan olish, to‘lovni rad etish yoki sug‘urta shartnomasini o‘zgartirish bilan bog‘liq bo‘lsa, u sug‘urtalovchiga yuborilishi mumkin yoki foydalanuvchiga sug‘urtalovchiga murojaat qilish tartibi haqida ma’lumot beriladi.",
        "10.4. Agar foydalanuvchi javobdan norozi bo‘lsa, u sug‘urtalovchiga, moliyaviy nazorat bo‘yicha vakolatli organ sifatida Latvijas Banka’ga, shaxsiy ma’lumotlar masalalari bo‘yicha Datu valsts inspekcija’ga yoki sudga murojaat qilish huquqiga ega."
      ]
    },
    {
      title: "§ 11. Javobgarlik",
      paragraphs: [
        "11.1. Vositachi o‘z vakolatlari doirasida harakatlarni lozim darajada bajarish uchun javobgar bo‘ladi.",
        "11.2. Vositachi quyidagilar uchun javobgar emas:",
        "",
        "• foydalanuvchi tomonidan berilgan ishonchsiz ma’lumotlar;",
        "• foydalanuvchi ma’lumotlari sababli hujjatlarda yuzaga kelgan xatolar;",
        "• sug‘urtalovchining shartnoma tuzish, shartlarni o‘zgartirish yoki to‘lov bo‘yicha qarorlari;",
        "• banklar, to‘lov provayderlari, aloqa operatorlari va boshqa uchinchi shaxslar ishidagi uzilishlar;",
        "• foydalanuvchining e-maili, messendjerlari yoki qurilmalariga ruxsatsiz kirish.",
        "",
        "11.3. Sug‘urtalovchi sug‘urta shartnomasi bo‘yicha shartnoma shartlari va amaldagi qonunchilik doirasida javobgar bo‘ladi."
      ]
    },
    {
      title: "§ 12. Intellektual mulk",
      paragraphs: [
        "12.1. EURO Polis sayti materiallari, shu jumladan matnlar, dizayn, rasmlar, sayt tuzilmasi, interfeys elementlari va dasturiy kod intellektual mulk to‘g‘risidagi qonunchilik bilan himoyalanadi.",
        "12.2. Sayt materiallaridan faqat shaxsiy tanishish va sug‘urta xizmatlarini olish maqsadida foydalanish mumkin.",
        "12.3. Sayt materiallarini ko‘chirish, tarqatish yoki tijorat maqsadida ishlatish, agar qonun bilan boshqacha ruxsat etilmagan bo‘lsa, faqat huquq egasining oldindan roziligi bilan amalga oshiriladi."
      ]
    },
    {
      title: "§ 13. Reglamentni o‘zgartirish",
      paragraphs: [
        "13.1. EURO Polis qonunchilik, sug‘urta mahsulotlari, saytning texnik funksiyalari, to‘lov usullari yoki foydalanuvchilar bilan ishlash tartibi o‘zgarganda ushbu Reglamentni yangilash huquqiga ega.",
        "13.2. Yangi tahrir saytda e’lon qilinadi va, agar boshqa muddat ko‘rsatilmagan bo‘lsa, e’lon qilingan kundan boshlab qo‘llaniladi.",
        "13.3. O‘zgarishlar orqaga qaytish kuchiga ega emas va, agar qonun yoki shartnoma shartlarida boshqacha nazarda tutilmagan bo‘lsa, avval tuzilgan sug‘urta shartnomalariga ta’sir qilmaydi."
      ]
    },
    {
      title: "§ 14. Qo‘llaniladigan huquq va nizolarni hal qilish",
      paragraphs: [
        "14.1. Ushbu Reglamentga Latviya Respublikasi huquqi va Yevropa Ittifoqining qo‘llaniladigan huquqi tatbiq etiladi.",
        "14.2. Nizolar muzokaralar va foydalanuvchi murojaatini ko‘rib chiqish orqali hal qilinadi.",
        "14.3. Nizoni hal qilish imkoni bo‘lmasa, foydalanuvchi Latviyaning vakolatli organlariga yoki Latviya Respublikasi sudiga murojaat qilish huquqiga ega."
      ]
    },
    {
      title: "§ 15. Yakuniy qoidalar",
      paragraphs: [
        "15.1. Ushbu Reglament EURO Polis saytida erkin foydalanish uchun joylashtiriladi.",
        "15.2. Foydalanuvchi Reglament matnini saqlash, chop etish yoki qayta ko‘rish imkoniyatiga ega.",
        "15.3. Agar Reglamentning ayrim qoidasi haqiqiy emas deb topilsa, bu qolgan qoidalarning haqiqiyligiga ta’sir qilmaydi.",
        "15.4. Rasmiy ma’lumotlar:",
        "",
        "Sug‘urtalovchi: ERGO Insurance SE Latvijas filiāle",
        "Ro‘yxatga olish raqami: 40103599913",
        "Manzil: Skanstes iela 50, Rīga, LV-1013, Latviya",
        "",
        "Sug‘urta vositachisi: Rižova Ludmila",
        "Telefon: +371 22355307",
        "E-mail: ludmila.rizova@ergo.lv",
        "",
        "Faoliyat yuritiladigan mamlakat: Latviya",
        "Sayt: EURO Polis"
      ]
    },
  ],
};

const kg: RulesDictionary = {
  pageTitle: "РЕГЛАМЕНТ",
  subtitle: "EURO Polis сайты аркылуу электрондук кызматтарды көрсөтүү жана камсыздандыруу келишимдерин аралыктан түзүүгө көмөк көрсөтүү тартиби",
  updatedAt: "05.05.2026",
  sections: [
    {
      title: "Камсыздандыруу компаниясы жана камсыздандыруу ортомчусу жөнүндө маалымат",
      paragraphs: [
        "Камсыздандыруу кызматтары төмөнкү камсыздандыруу компаниясынын катышуусу менен көрсөтүлөт:",
        "",
        "ERGO Insurance SE Latvijas filiāle",
        "Каттоо номери: 40103599913",
        "Юридикалык дареги: Skanstes iela 50, Rīga, LV-1013, Латвия",
        "",
        "Камсыздандыруу ортомчусунун маалыматтары:",
        "",
        "Rižova Ludmila",
        "Телефон: +371 22355307",
        "E-mail: ludmila.rizova@ergo.lv",
        "",
        "Иш жүргүзүлгөн өлкө: Латвия",
        "Камсыздандыруу ишмердүүлүгүнүн түрү: чек аралык камсыздандыруу келишимдери, анын ичинде башка мамлекеттердин аймагына кирүү үчүн транспорт каражаттарынын ээлеринин жарандык жоопкерчилигин камсыздандыруу.",
        "",
        "Ортомчу, эгер мындай укук камсыздандыруучу тарабынан берилсе жана колдонулуучу мыйзамдарга, ошондой эле камсыздандыруучу менен түзүлгөн келишимдин шарттарына ылайык келсе, кардардан камсыздандыруу сый акысын кабыл алууга укуктуу."
      ]
    },
    {
      title: "§ 1. Аныктамалар",
      paragraphs: [
        "Сайт — EURO Polis интернет-сайты. Ал аркылуу колдонуучу камсыздандыруу продукттары тууралуу маалымат ала алат, өтүнмө жөнөтөт, маалыматтарды жана документтерди берет, консультация алат жана камсыздандыруу келишимин аралыктан түзүүгө көмөк ала алат.",
        "Камсыздандыруучу — ERGO Insurance SE Latvijas filiāle же камсыздандыруу келишими түзүлгөнгө чейин колдонуучуга түз көрсөтүлгөн башка камсыздандыруучу.",
        "Камсыздандыруу ортомчусу — Rižova Ludmila, Латвияда камсыздандыруучу берген укуктук статус жана ыйгарым укуктардын чегинде камсыздандыруу продукттарын жайылтуу боюнча иш жүргүзөт.",
        "Колдонуучу — сайтты же EURO Polisтин аралыктан байланыш каналдарын колдонгон жеке жак, юридикалык жак же юридикалык жактын өкүлү.",
        "Камсыздандырылуучу — камсыздандыруучу менен камсыздандыруу келишимин түзгөн жак.",
        "Камсыздандыруу келишими — камсыздандырылуучу менен камсыздандыруучунун ортосунда түзүлгөн келишим, эгер мыйзам жана тиешелүү камсыздандыруу продуктунун шарттары жол берсе, аралыктан да түзүлүшү мүмкүн.",
        "Полис — камсыздандыруу келишими түзүлгөнүн тастыктаган кагаз же электрондук түрдөгү документ.",
        "Камсыздандыруу сый акысы — камсыздандырылуучу камсыздандыруу коргоосу үчүн төлөөгө тийиш болгон сумма.",
        "Жеке маалыматтар — GDPR жана Латвия мыйзамдарына ылайык иштетилген, идентификацияланган же идентификацияланышы мүмкүн болгон жеке жакка тиешелүү ар кандай маалымат."
      ]
    },
    {
      title: "§ 2. Жалпы жоболор",
      paragraphs: [
        "2.1. Бул Регламент EURO Polis сайтын жана аралыктан байланыш каналдарын колдонууга, маалымат алууга, консультация алууга жана камсыздандыруу келишимдерин түзүүгө көмөк көрсөтүүгө колдонулат.",
        "2.2. Регламент төмөнкүлөрдү эске алуу менен иштелип чыккан:",
        "",
        "• ЕС Регламенти 2016/679 (GDPR);",
        "• камсыздандырууну жайылтуу жөнүндө ЕС Директивасы 2016/97 (IDD);",
        "• Латвиянын камсыздандыруу жана кайра камсыздандырууну жайылтуу жөнүндө мыйзамы;",
        "• Латвиянын камсыздандыруу жана кайра камсыздандыруу жөнүндө мыйзамы;",
        "• Латвиянын керектөөчүлөрдүн укуктары жөнүндө мыйзамы;",
        "• финансылык кызматтарды аралыктан көрсөтүү боюнча ЕС мыйзамдары;",
        "• электрондук идентификация жана ишенимдүү кызматтар жөнүндө eIDAS Регламенти. eIDAS ЕС аймагында коопсуз электрондук бүтүмдөр жана ишенимдүү кызматтар үчүн укуктук негиз түзөт.",
        "",
        "2.3. Эгер колдонуучу өтүнмө жөнөтсө, форма толтурса, документтерди берсе же консультация сураса, сайтты колдонуу ушул Регламентке макулдук катары эсептелет.",
        "2.4. Камсыздандыруу келишими EURO Polis сайты же ортомчу менен эмес, түздөн-түз камсыздандырылуучу менен камсыздандыруучунун ортосунда түзүлөт.",
        "2.5. Ортомчу камсыздандыруучу болуп саналбайт, камсыздандыруу төлөмү боюнча милдеттенме албайт жана окуяны камсыздандыруу окуясы деп таануу жөнүндө чечим кабыл албайт.",
        "2.6. Сайттагы маалымат маалымдама мүнөзүндө жана, эгер башкача түз көрсөтүлбөсө, коомдук оферта болуп саналбайт."
      ]
    },
    {
      title: "§ 3. Ортомчунун статусу жана маалыматты ачуу",
      paragraphs: [
        "3.1. Камсыздандыруу келишими түзүлгөнгө чейин колдонуучуга камсыздандыруучу, камсыздандыруу ортомчусу, камсыздандыруу продуктунун түрү, камсыздандыруу сый акысынын өлчөмү, камсыздандыруунун маанилүү шарттары, өзгөчөлүктөр жана даттануу берүү тартиби жөнүндө маалымат берилет.",
        "3.2. Ортомчу камсыздандыруучу берген ыйгарым укуктардын чегинде иш алып барат жана төмөнкүлөргө көмөк көрсөтө алат:",
        "",
        "• өтүнмөлөрдү кабыл алууга;",
        "• колдонуучуга консультация берүүгө;",
        "• маалыматтарды камсыздандыруучуга өткөрүүгө;",
        "• камсыздандыруу полисин тариздөөгө;",
        "• эгер камсыздандыруучу жана колдонулуучу мыйзамдар уруксат берсе, камсыздандыруу сый акысын кабыл алууга.",
        "",
        "3.3. Эгер ортомчу камсыздандыруучудан комиссиялык сый акы алса, бул колдонуучу үчүн камсыздандыруу сый акысы автоматтык түрдө көбөйөт дегенди билдирбейт, эгер келишим түзүлгөнгө чейин башкача түз көрсөтүлбөсө.",
        "3.4. Колдонуучу ортомчунун статусу, анын ыйгарым укуктарынын мүнөзү жана сый акы алуу тартиби жөнүндө кошумча маалымат сурай алат."
      ]
    },
    {
      title: "§ 4. Сайтты колдонуу тартиби",
      paragraphs: [
        "4.1. EURO Polis сайты төмөнкүлөр үчүн арналган:",
        "",
        "• камсыздандыруу продукттары жөнүндө маалымат алуу;",
        "• өтүнмө жөнөтүү;",
        "• документтерди жана маалыматтарды берүү;",
        "• камсыздандыруу наркын эсептөө же алдын ала баалоо;",
        "• камсыздандыруу документтерин электрондук түрдө алуу.",
        "",
        "4.2. Сайт техникалык иштерден, байланыш үзгүлтүктөрүнөн, жаңыртуулардан же EURO Polisке көз каранды болбогон башка жагдайлардан тышкары, сутка бою жеткиликтүү болушу мүмкүн.",
        "4.3. Колдонуучу туура, толук жана актуалдуу маалыматтарды берүүгө милдеттүү.",
        "4.4. Колдонуучу туура эмес, толук эмес же ишенимсиз маалыматтарды берүүнүн кесепеттери үчүн жооп берет, анын ичинде камсыздандыруучунун келишим түзүүдөн, шарттарды өзгөртүүдөн же камсыздандыруу төлөмүнөн баш тартуу тобокелдиги.",
        "4.5. Колдонуучуга сайт аркылуу жасалма документтерди, жалган маалыматтарды, зыяндуу кодду жөнөтүүгө же үчүнчү жактардын укуктарын бузган аракеттерди жасоого тыюу салынат."
      ]
    },
    {
      title: "§ 5. Камсыздандыруу келишимин аралыктан түзүү",
      paragraphs: [
        "5.1. Камсыздандырууну тариздөө үчүн колдонуучу конкреттүү продукт үчүн зарыл болгон маалыматтарды берет: камсыздандырылуучунун маалыматтары, транспорт каражаты, камсыздандыруу мөөнөтү, камтуу аймагы, маршрут, каттоо документтери жана башка маалыматтар.",
        "5.2. Келишим түзүлгөнгө чейин колдонуучу төмөнкүлөр жөнүндө маалымат алат:",
        "",
        "• камсыздандыруучу;",
        "• ортомчу;",
        "• камсыздандыруу продукту;",
        "• камтуу аймагы;",
        "• камсыздандыруу мөөнөтү;",
        "• камсыздандыруу сый акысы;",
        "• өзгөчөлүктөр жана чектөөлөр;",
        "• төлөө тартиби;",
        "• полисти алуу тартиби;",
        "• келишимди өзгөртүү же токтотуу тартиби;",
        "• даттануу берүү тартиби.",
        "",
        "5.3. Камсыздандыруу келишими камсыздандыруучунун шарттарында белгиленген учурдан тартып түзүлгөн деп эсептелет: колдонуучунун макулдугу ырасталганда, камсыздандыруу шарттары кабыл алынганда, сый акы төлөнгөндө жана полис чыгарылганда, эгер мындай аракеттер талап кылынса.",
        "5.4. Электрондук полис же камсыздандыруу келишими түзүлгөнүн тастыктаган башка документ колдонуучуга e-mail, мессенджер, жеке кабинет же башка макулдашылган канал аркылуу жөнөтүлүшү мүмкүн.",
        "5.5. Колдонуучу полисти алгандан кийин андагы маалыматтарды дароо текшерүүгө милдеттүү. Ката табылса, колдонуучу бул тууралуу ортомчуга же камсыздандыруучуга дароо билдириши керек."
      ]
    },
    {
      title: "§ 6. Төлөм",
      paragraphs: [
        "6.1. Камсыздандыруу сый акысы төмөнкү жолдор менен төлөнүшү мүмкүн:",
        "",
        "• банктык которуу;",
        "• төлөм провайдери аркылуу банк картасы;",
        "• сайтта көрсөтүлгөн же колдонуучу менен макулдашылган башка ыкма.",
        "",
        "6.2. Эгер ортомчу камсыздандыруу сый акысын кабыл алса, ал камсыздандыруучу берген ыйгарым укуктардын чегинде иш алып барат.",
        "6.3. Банк картасы менен төлөгөндө картанын маалыматтары банктын же төлөм провайдеринин корголгон барагында киргизилет. EURO Polis жана ортомчу банк карталарынын толук маалыматтарын сактабайт.",
        "6.4. Банктык которуу менен төлөгөндө колдонуучу берилген реквизиттерди колдонууга жана төлөмдүн дайындалышын туура көрсөтүүгө милдеттүү.",
        "6.5. Эгер камсыздандыруучунун шарттарында башкача каралбаса, төлөм учуру катары акча каражаттары алуучунун эсебине түшкөн учур эсептелет.",
        "6.6. Камсыздандыруу сый акысын же анын бир бөлүгүн кайтаруу камсыздандыруу келишиминде, камсыздандыруучунун эрежелеринде жана колдонулуучу мыйзамдарда каралган учурларда жана тартипте жүргүзүлөт."
      ]
    },
    {
      title: "§ 7. Баш тартуу укугу жана аралыктан камсыздандыруунун өзгөчөлүктөрү",
      paragraphs: [
        "7.1. Камсыздандыруу финансылык кызмат болгондуктан, колдонуучунун келишимден баш тартуу укугу камсыздандыруу продуктунун түрүнө, келишимдин мөөнөтүнө, камсыздандыруу коргоосу башталган учурга жана колдонулуучу мыйзамдарга жараша болот.",
        "7.2. Эгер баш тартуу укугу мыйзамда же камсыздандыруучунун шарттарында каралса, колдонуучуга келишим түзүлгөнгө чейин баш тартуунун тартиби, мөөнөтү жана кесепеттери жөнүндө маалымат берилет.",
        "7.3. Кыска мөөнөттүү камсыздандыруу келишимдери жана колдонуучунун макулдугу менен аткарылышы башталган келишимдер боюнча баш тартуу укугу чектелиши мүмкүн.",
        "7.4. Эгер камсыздандыруу сый акысын кайтаруу боюнча чечим камсыздандыруучунун компетенциясына кирсе, ортомчу мындай чечимди өз алдынча кабыл албайт."
      ]
    },
    {
      title: "§ 8. Жеке маалыматтар",
      paragraphs: [
        "8.1. Жеке маалыматтарды иштетүү GDPR жана Латвиянын жеке маалыматтарды коргоо мыйзамдарына ылайык жүргүзүлөт.",
        "8.2. EURO Polis сайтынын алкагында маалыматтар төмөнкү максаттарда иштетилиши мүмкүн:",
        "",
        "• өтүнмөнү кароо;",
        "• камсыздандыруу продуктун тандоо;",
        "• камсыздандыруу келишимин тариздөө;",
        "• маалыматтарды камсыздандыруучуга өткөрүү;",
        "• төлөмдөрдү иштетүү;",
        "• колдонуучу менен байланышуу;",
        "• юридикалык милдеттерди аткаруу;",
        "• укуктарды жана мыйзамдуу кызыкчылыктарды коргоо;",
        "• сайттын коопсуздугун камсыз кылуу.",
        "",
        "8.3. Иштетүүнүн укуктук негиздери төмөнкүлөр болушу мүмкүн:",
        "",
        "• келишимди аткаруу же келишим түзүлгөнгө чейинки аракеттер;",
        "• юридикалык милдетти аткаруу;",
        "• мыйзамдуу кызыкчылык;",
        "• колдонуучунун макулдугу — мисалы, маркетингдик жөнөтүүлөр же милдеттүү эмес cookie үчүн.",
        "",
        "8.4. Маалыматтар төмөнкүлөргө берилиши мүмкүн:",
        "",
        "• камсыздандыруучуга;",
        "• төлөм провайдерлерине;",
        "• IT-подрядчыларга;",
        "• хостинг кызматтарын көрсөтүүчүлөргө;",
        "• мыйзам талап кылса, мамлекеттик органдарга.",
        "",
        "8.5. Колдонуучу GDPRда каралган укуктарга ээ: маалыматка жетүү, оңдоо, өчүрүү, иштетүүнү чектөө, иштетүүгө каршы болуу, маалыматтарды көчүрүп алуу жана макулдукту кайтарып алуу.",
        "8.6. Жеке маалыматтарды иштетүү боюнча даттануу Datu valsts inspekcija органына берилиши мүмкүн. Инспекциянын байланыштары анын расмий сайтында жарыяланган."
      ]
    },
    {
      title: "§ 9. Cookie жана техникалык маалыматтар",
      paragraphs: [
        "9.1. Сайт cookie жана окшош технологияларды сайттын иштеши, тилди сактоо, коопсуздук, аналитика жана маркетинг үчүн колдоно алат.",
        "9.2. Катуу зарыл cookie’лер макулдуксуз колдонулат, анткени алар сайттын иштеши үчүн керек.",
        "9.3. Аналитикалык жана маркетингдик cookie’лер колдонуучунун макулдугунан кийин гана колдонулат.",
        "9.4. Cookie колдонуу тартиби EURO Polisтин өзүнчө Cookie саясатында көрсөтүлөт."
      ]
    },
    {
      title: "§ 10. Кайрылуулар жана даттануулар",
      paragraphs: [
        "10.1. Колдонуучу кайрылуу же даттанууну төмөнкү жолдор менен жөнөтө алат:",
        "",
        "• e-mail аркылуу: ludmila.rizova@ergo.lv",
        ";",
        "• телефон аркылуу: +371 22355307;",
        "• сайттагы байланыш формасы аркылуу;",
        "• түздөн-түз ERGO Insurance SE Latvijas filiāle камсыздандыруучусуна.",
        "",
        "10.2. Кайрылууда мүмкүн болушунча төмөнкүлөр көрсөтүлүшү керек:",
        "",
        "• колдонуучунун аты же аталышы;",
        "• байланыш маалыматтары;",
        "• полис же өтүнмө номери, эгер бар болсо;",
        "• кырдаалдын сүрөттөлүшү;",
        "• колдонуучунун талабы;",
        "• тиркелген документтер, эгер бар болсо.",
        "",
        "10.3. Эгер кайрылуу камсыздандыруу төлөмүнө, окуяны камсыздандыруу окуясы деп таанууга, төлөмдөн баш тартууга же камсыздандыруу келишимин өзгөртүүгө тиешелүү болсо, ал камсыздандыруучуга өткөрүлүшү мүмкүн же колдонуучуга камсыздандыруучуга кайрылуу тартиби түшүндүрүлөт.",
        "10.4. Эгер колдонуучу жооп менен макул болбосо, ал камсыздандыруучуга, финансылык көзөмөл боюнча компетенттүү орган катары Latvijas Bankaга, жеке маалыматтар боюнча Datu valsts inspekcijaга же сотко кайрылууга укуктуу."
      ]
    },
    {
      title: "§ 11. Жоопкерчилик",
      paragraphs: [
        "11.1. Ортомчу өз ыйгарым укуктарынын чегинде аракеттерди талаптагыдай аткаруу үчүн жооп берет.",
        "11.2. Ортомчу төмөнкүлөр үчүн жооп бербейт:",
        "",
        "• колдонуучу берген ишенимсиз маалыматтар;",
        "• колдонуучунун маалыматтарынан улам документтерде пайда болгон каталар;",
        "• камсыздандыруучунун келишим түзүү, шарттарды өзгөртүү же төлөм боюнча чечимдери;",
        "• банктардын, төлөм провайдерлеринин, байланыш операторлорунун жана башка үчүнчү жактардын үзгүлтүктөрү;",
        "• колдонуучунун e-mail, мессенджер же түзмөктөрүнө уруксатсыз кирүү.",
        "",
        "11.3. Камсыздандыруучу камсыздандыруу келишими боюнча келишим шарттарынын жана колдонулуучу мыйзамдардын чегинде жооп берет."
      ]
    },
    {
      title: "§ 12. Интеллектуалдык менчик",
      paragraphs: [
        "12.1. EURO Polis сайтынын материалдары, анын ичинде тексттер, дизайн, сүрөттөр, сайттын түзүлүшү, интерфейс элементтери жана программалык код интеллектуалдык менчик мыйзамдары менен корголот.",
        "12.2. Сайттын материалдарын жеке таанышуу жана камсыздандыруу кызматтарын алуу максатында гана колдонууга болот.",
        "12.3. Сайттын материалдарын көчүрүү, жайылтуу же коммерциялык колдонуу укук ээсинин алдын ала макулдугу менен гана мүмкүн, эгер мыйзамда башкача уруксат берилбесе."
      ]
    },
    {
      title: "§ 13. Регламентти өзгөртүү",
      paragraphs: [
        "13.1. EURO Polis мыйзамдардын, камсыздандыруу продукттарынын, сайттын техникалык функцияларынын, төлөм ыкмаларынын же колдонуучулар менен иштөө тартибинин өзгөрүшүнө байланыштуу ушул Регламентти жаңыртууга укуктуу.",
        "13.2. Жаңы редакция сайтта жарыяланат жана, эгер башка мөөнөт көрсөтүлбөсө, жарыяланган күндөн тартып колдонулат.",
        "13.3. Өзгөртүүлөр артка карата күчкө ээ эмес жана, эгер мыйзамда же келишим шарттарында башкача каралбаса, мурда түзүлгөн камсыздандыруу келишимдерине таасир этпейт."
      ]
    },
    {
      title: "§ 14. Колдонулуучу укук жана талаштарды чечүү",
      paragraphs: [
        "14.1. Бул Регламентке Латвия Республикасынын укугу жана колдонулуучу Европа Биримдигинин укугу колдонулат.",
        "14.2. Талаштар сүйлөшүүлөр жана колдонуучунун кайрылуусун кароо жолу менен чечилет.",
        "14.3. Талашты жөнгө салуу мүмкүн болбосо, колдонуучу Латвиянын компетенттүү органдарына же Латвия Республикасынын сотуна кайрылууга укуктуу."
      ]
    },
    {
      title: "§ 15. Жыйынтыктоочу жоболор",
      paragraphs: [
        "15.1. Бул Регламент EURO Polis сайтында эркин жеткиликтүү жайгаштырылат.",
        "15.2. Колдонуучу Регламенттин текстин сактап, басып чыгарып же кайра чыгара алат.",
        "15.3. Эгер Регламенттин айрым жобосу жараксыз деп табылса, бул калган жоболордун жарактуулугуна таасир этпейт.",
        "15.4. Расмий маалыматтар:",
        "",
        "Камсыздандыруучу: ERGO Insurance SE Latvijas filiāle",
        "Каттоо номери: 40103599913",
        "Дареги: Skanstes iela 50, Rīga, LV-1013, Латвия",
        "",
        "Камсыздандыруу ортомчусу: Rižova Ludmila",
        "Телефон: +371 22355307",
        "E-mail: ludmila.rizova@ergo.lv",
        "",
        "Иш жүргүзүлгөн өлкө: Латвия",
        "Сайт: EURO Polis"
      ]
    }
  ],
};

const ka: RulesDictionary = {
  pageTitle: "რეგლამენტი",
  subtitle: "ელექტრონული მომსახურების გაწევისა და EURO Polis-ის ვებგვერდის მეშვეობით დისტანციურად დაზღვევის ხელშეკრულებების გაფორმებაში დახმარების შესახებ",
  updatedAt: "05.05.2026",
  sections: [
    {
      title: "ინფორმაცია სადაზღვევო კომპანიასა და სადაზღვევო შუამავალზე",
      paragraphs: [
        "სადაზღვევო მომსახურება ხორციელდება სადაზღვევო კომპანიის მონაწილეობით:",
        "",
        "ERGO Insurance SE Latvijas filiāle",
        "სარეგისტრაციო ნომერი: 40103599913",
        "იურიდიული მისამართი: Skanstes iela 50, Rīga, LV-1013, ლატვია",
        "",
        "სადაზღვევო შუამავლის მონაცემები:",
        "",
        "Rižova Ludmila",
        "ტელეფონი: +371 22355307",
        "ელ-ფოსტა: ludmila.rizova@ergo.lv",
        "",
        "საქმიანობის ქვეყანა: ლატვია",
        "სადაზღვევო საქმიანობის სახე: სასაზღვრო სადაზღვევო ხელშეკრულებები, მათ შორის სატრანსპორტო საშუალებების მფლობელთა სამოქალაქო პასუხისმგებლობის დაზღვევა სხვა ქვეყნების ტერიტორიაზე შესასვლელად.",
        "",
        "შუამავალს აქვს უფლება მიიღოს სადაზღვევო პრემია კლიენტისგან, თუ ასეთი უფლება მინიჭებულია დამზღვევის მიერ და შეესაბამება მოქმედ კანონმდებლობასა და დამზღვევთან გაფორმებული ხელშეკრულების პირობებს.",
      ],
    },
    {
      title: "§ 1. განმარტებები",
      paragraphs: [
        "საიტი — EURO Polis-ის ვებგვერდი, რომლის მეშვეობით მომხმარებელს შეუძლია მიიღოს ინფორმაცია სადაზღვევო პროდუქტების შესახებ, გაგზავნოს განაცხადი, გადასცეს მონაცემები და დოკუმენტები, მიიღოს კონსულტაცია და დახმარება დისტანციურად დაზღვევის ხელშეკრულების გაფორმებაში.",
        "დამზღვევი კომპანია — ERGO Insurance SE Latvijas filiāle ან სხვა სადაზღვევო კომპანია, რომელიც მომხმარებელს პირდაპირ ეცნობება დაზღვევის ხელშეკრულების გაფორმებამდე.",
        "სადაზღვევო შუამავალი — Rižova Ludmila, რომელიც ლატვიაში ახორციელებს სადაზღვევო პროდუქტების გავრცელებას თავისი სამართლებრივი სტატუსისა და დამზღვევის მიერ მინიჭებული უფლებამოსილების ფარგლებში.",
        "მომხმარებელი — ფიზიკური პირი, იურიდიული პირი ან იურიდიული პირის წარმომადგენელი, რომელიც იყენებს საიტს ან EURO Polis-ის დისტანციურ საკომუნიკაციო არხებს.",
        "დამზღვევი — პირი, რომელიც დებს დაზღვევის ხელშეკრულებას სადაზღვევო კომპანიასთან.",
        "დაზღვევის ხელშეკრულება — დამზღვევსა და სადაზღვევო კომპანიას შორის დადებული ხელშეკრულება, მათ შორის დისტანციურად, თუ ეს დაშვებულია კანონმდებლობით და შესაბამისი სადაზღვევო პროდუქტის პირობებით.",
        "პოლისი — ქაღალდის ან ელექტრონული ფორმის დოკუმენტი, რომელიც ადასტურებს დაზღვევის ხელშეკრულების გაფორმებას.",
        "სადაზღვევო პრემია — თანხა, რომელიც დამზღვევმა უნდა გადაიხადოს სადაზღვევო დაცვისთვის.",
        "პერსონალური მონაცემები — ნებისმიერი ინფორმაცია იდენტიფიცირებულ ან იდენტიფიცირებად ფიზიკურ პირზე, რომელიც მუშავდება GDPR-ისა და ლატვიის კანონმდებლობის შესაბამისად.",
      ],
    },
    {
      title: "§ 2. ზოგადი დებულებები",
      paragraphs: [
        "2.1. წინამდებარე რეგლამენტი ვრცელდება EURO Polis-ის საიტისა და დისტანციური საკომუნიკაციო არხების გამოყენებაზე ინფორმაციის, კონსულტაციისა და დაზღვევის ხელშეკრულებების გაფორმებაში დახმარების მისაღებად.",
        "2.2. რეგლამენტი შემუშავებულია შემდეგი აქტების გათვალისწინებით:",
        "",
        "• ევროკავშირის რეგლამენტი 2016/679 (GDPR);",
        "• ევროკავშირის დირექტივა 2016/97 დაზღვევის გავრცელების შესახებ (IDD);",
        "• ლატვიის კანონი დაზღვევისა და გადაზღვევის გავრცელების შესახებ;",
        "• ლატვიის კანონი დაზღვევისა და გადაზღვევის შესახებ;",
        "• ლატვიის კანონი მომხმარებელთა უფლებების შესახებ;",
        "• ევროკავშირის კანონმდებლობა ფინანსური მომსახურების დისტანციურად მიწოდების შესახებ;",
        "• eIDAS რეგლამენტი ელექტრონული იდენტიფიკაციისა და ნდობის სერვისების შესახებ. eIDAS ქმნის სამართლებრივ საფუძველს ევროკავშირში უსაფრთხო ელექტრონული ტრანზაქციებისა და ნდობის სერვისებისთვის.",
        "",
        "2.3. საიტის გამოყენება ნიშნავს მომხმარებლის თანხმობას წინამდებარე რეგლამენტზე, თუ მომხმარებელი აგზავნის განაცხადს, ავსებს ფორმას, გადასცემს დოკუმენტებს ან მიმართავს კონსულტაციისთვის.",
        "2.4. დაზღვევის ხელშეკრულება იდება არა EURO Polis-ის საიტთან და არა შუამავალთან, არამედ უშუალოდ დამზღვევსა და სადაზღვევო კომპანიას შორის.",
        "2.5. შუამავალი არ არის სადაზღვევო კომპანია, არ იღებს ვალდებულებას სადაზღვევო ანაზღაურებაზე და არ იღებს გადაწყვეტილებას მოვლენის სადაზღვევო შემთხვევად აღიარებაზე.",
        "2.6. საიტზე განთავსებული ინფორმაცია საინფორმაციო ხასიათისაა და არ წარმოადგენს საჯარო ოფერტას, თუ სხვა რამ პირდაპირ არ არის მითითებული.",
      ],
    },
    {
      title: "§ 3. შუამავლის სტატუსი და ინფორმაციის გამჟღავნება",
      paragraphs: [
        "3.1. დაზღვევის ხელშეკრულების გაფორმებამდე მომხმარებელს მიეწოდება ინფორმაცია სადაზღვევო კომპანიის, სადაზღვევო შუამავლის, სადაზღვევო პროდუქტის ტიპის, სადაზღვევო პრემიის ოდენობის, არსებითი პირობების, გამონაკლისებისა და საჩივრების წარდგენის წესის შესახებ.",
        "3.2. შუამავალი მოქმედებს სადაზღვევო კომპანიის მიერ მინიჭებული უფლებამოსილების ფარგლებში და შეუძლია დახმარება:",
        "",
        "• განაცხადების მიღებაში;",
        "• მომხმარებლის კონსულტირებაში;",
        "• მონაცემების სადაზღვევო კომპანიაზე გადაცემაში;",
        "• სადაზღვევო პოლისის გაფორმებაში;",
        "• სადაზღვევო პრემიის მიღებაში, თუ ეს დაშვებულია სადაზღვევო კომპანიისა და მოქმედი კანონმდებლობის მიერ.",
        "",
        "3.3. თუ შუამავალი იღებს საკომისიო ანაზღაურებას სადაზღვევო კომპანიისგან, ეს არ ნიშნავს მომხმარებლისთვის სადაზღვევო პრემიის ავტომატურ გაზრდას, თუ სხვა რამ პირდაპირ არ არის მითითებული ხელშეკრულების გაფორმებამდე.",
        "3.4. მომხმარებელს აქვს უფლება მოითხოვოს დამატებითი ინფორმაცია შუამავლის სტატუსის, მისი უფლებამოსილების ხასიათისა და ანაზღაურების მიღების წესის შესახებ.",
      ],
    },
    {
      title: "§ 4. საიტის გამოყენების წესი",
      paragraphs: [
        "4.1. EURO Polis-ის საიტი განკუთვნილია:",
        "",
        "• სადაზღვევო პროდუქტების შესახებ ინფორმაციის მისაღებად;",
        "• განაცხადების გასაგზავნად;",
        "• დოკუმენტებისა და მონაცემების გადასაცემად;",
        "• დაზღვევის ღირებულების გამოთვლისთვის ან წინასწარი შეფასებისთვის;",
        "• სადაზღვევო დოკუმენტების ელექტრონული ფორმით მისაღებად.",
        "",
        "4.2. საიტი შეიძლება ხელმისაწვდომი იყოს 24 საათის განმავლობაში, გარდა ტექნიკური სამუშაოების, კავშირის შეფერხების, განახლებების ან EURO Polis-ზე დამოუკიდებელი სხვა გარემოებებისა.",
        "4.3. მომხმარებელი ვალდებულია მიაწოდოს სანდო, სრული და აქტუალური მონაცემები.",
        "4.4. მომხმარებელი პასუხისმგებელია არასწორი, არასრული ან არასანდო მონაცემების გადაცემის შედეგებზე, მათ შორის სადაზღვევო კომპანიის მიერ ხელშეკრულების გაფორმებაზე, პირობების შეცვლაზე ან სადაზღვევო ანაზღაურებაზე უარის თქმის რისკზე.",
        "4.5. მომხმარებელს ეკრძალება საიტის გამოყენება ყალბი დოკუმენტების, ცრუ ინფორმაციის, მავნე კოდის გადასაცემად ან მესამე პირების უფლებების დამრღვევი ქმედებებისთვის.",
      ],
    },
    {
      title: "§ 5. დაზღვევის ხელშეკრულების დისტანციურად გაფორმება",
      paragraphs: [
        "5.1. დაზღვევის გასაფორმებლად მომხმარებელი აწვდის კონკრეტული პროდუქტისთვის საჭირო მონაცემებს: დამზღვევის, სატრანსპორტო საშუალების, დაზღვევის პერიოდის, მოქმედების ტერიტორიის, მარშრუტის, სარეგისტრაციო დოკუმენტებისა და სხვა მონაცემების შესახებ.",
        "5.2. ხელშეკრულების გაფორმებამდე მომხმარებელი იღებს ინფორმაციას:",
        "",
        "• სადაზღვევო კომპანიის შესახებ;",
        "• შუამავლის შესახებ;",
        "• სადაზღვევო პროდუქტის შესახებ;",
        "• მოქმედების ტერიტორიის შესახებ;",
        "• დაზღვევის ვადის შესახებ;",
        "• სადაზღვევო პრემიის შესახებ;",
        "• გამონაკლისებისა და შეზღუდვების შესახებ;",
        "• გადახდის წესის შესახებ;",
        "• პოლისის მიღების წესის შესახებ;",
        "• ხელშეკრულების შეცვლის ან შეწყვეტის წესის შესახებ;",
        "• საჩივრების წარდგენის წესის შესახებ.",
        "",
        "5.3. დაზღვევის ხელშეკრულება დადებულად ითვლება სადაზღვევო კომპანიის პირობებით განსაზღვრული მომენტიდან: მომხმარებლის თანხმობის დადასტურების, დაზღვევის პირობების მიღების, პრემიის გადახდისა და პოლისის გაცემის შემდეგ, თუ ასეთი მოქმედებები საჭიროა.",
        "5.4. ელექტრონული პოლისი ან სხვა დოკუმენტი, რომელიც ადასტურებს დაზღვევის ხელშეკრულების გაფორმებას, შეიძლება მომხმარებელს გაეგზავნოს ელ-ფოსტით, მესენჯერით, პირადი კაბინეტით ან სხვა შეთანხმებული არხით.",
        "5.5. მომხმარებელი ვალდებულია პოლისის მიღებისთანავე გადაამოწმოს მასში მითითებული მონაცემები. შეცდომის აღმოჩენის შემთხვევაში მომხმარებელმა დაუყოვნებლივ უნდა აცნობოს ამის შესახებ შუამავალს ან სადაზღვევო კომპანიას.",
      ],
    },
    {
      title: "§ 6. გადახდა",
      paragraphs: [
        "6.1. სადაზღვევო პრემიის გადახდა შეიძლება განხორციელდეს:",
        "",
        "• საბანკო გადარიცხვით;",
        "• საბანკო ბარათით გადახდის პროვაიდერის მეშვეობით;",
        "• სხვა მეთოდით, რომელიც მითითებულია საიტზე ან შეთანხმებულია მომხმარებელთან.",
        "",
        "6.2. თუ შუამავალი იღებს სადაზღვევო პრემიას, ის მოქმედებს სადაზღვევო კომპანიის მიერ მინიჭებული უფლებამოსილების ფარგლებში.",
        "6.3. საბანკო ბარათით გადახდისას ბარათის მონაცემები შეჰყავთ ბანკის ან გადახდის პროვაიდერის დაცულ გვერდზე. EURO Polis და შუამავალი არ ინახავენ საბანკო ბარათების სრულ მონაცემებს.",
        "6.4. საბანკო გადარიცხვით გადახდისას მომხმარებელი ვალდებულია გამოიყენოს მიწოდებული რეკვიზიტები და სწორად მიუთითოს გადახდის დანიშნულება.",
        "6.5. გადახდის მომენტად ითვლება თანხის ჩარიცხვა მიმღების ანგარიშზე, თუ სადაზღვევო კომპანიის პირობებით სხვა რამ არ არის გათვალისწინებული.",
        "6.6. სადაზღვევო პრემიის ან მისი ნაწილის დაბრუნება ხორციელდება დაზღვევის ხელშეკრულებით, სადაზღვევო კომპანიის წესებითა და მოქმედი კანონმდებლობით გათვალისწინებულ შემთხვევებში და წესით.",
      ],
    },
    {
      title: "§ 7. უარის უფლება და დისტანციური დაზღვევის თავისებურებები",
      paragraphs: [
        "7.1. ვინაიდან დაზღვევა ფინანსური მომსახურებაა, მომხმარებლის ხელშეკრულებაზე უარის თქმის უფლება დამოკიდებულია სადაზღვევო პროდუქტის ტიპზე, ხელშეკრულების ვადაზე, სადაზღვევო დაცვის დაწყების მომენტსა და მოქმედ კანონმდებლობაზე.",
        "7.2. თუ უარის უფლება გათვალისწინებულია კანონით ან სადაზღვევო კომპანიის პირობებით, მომხმარებელი ხელშეკრულების გაფორმებამდე იღებს ინფორმაციას უარის წესის, ვადებისა და შედეგების შესახებ.",
        "7.3. მოკლევადიანი დაზღვევის ხელშეკრულებებისა და იმ ხელშეკრულებებისთვის, რომელთა შესრულებაც მომხმარებლის თანხმობით უკვე დაიწყო, უარის უფლება შეიძლება შეზღუდული იყოს.",
        "7.4. შუამავალი დამოუკიდებლად არ იღებს გადაწყვეტილებას სადაზღვევო პრემიის დაბრუნებაზე, თუ ასეთი გადაწყვეტილება სადაზღვევო კომპანიის კომპეტენციას განეკუთვნება.",
      ],
    },
    {
      title: "§ 8. პერსონალური მონაცემები",
      paragraphs: [
        "8.1. პერსონალური მონაცემების დამუშავება ხორციელდება GDPR-ისა და ლატვიის პერსონალური მონაცემების დაცვის კანონმდებლობის შესაბამისად.",
        "8.2. EURO Polis-ის საიტის ფარგლებში მონაცემები შეიძლება დამუშავდეს შემდეგი მიზნებისთვის:",
        "",
        "• განაცხადის განხილვა;",
        "• სადაზღვევო პროდუქტის შერჩევა;",
        "• დაზღვევის ხელშეკრულების გაფორმება;",
        "• მონაცემების სადაზღვევო კომპანიაზე გადაცემა;",
        "• გადახდების დამუშავება;",
        "• მომხმარებელთან კომუნიკაცია;",
        "• სამართლებრივი ვალდებულებების შესრულება;",
        "• უფლებებისა და კანონიერი ინტერესების დაცვა;",
        "• საიტის უსაფრთხოების უზრუნველყოფა.",
        "",
        "8.3. დამუშავების სამართლებრივი საფუძვლები შეიძლება იყოს:",
        "",
        "• ხელშეკრულების შესრულება ან მოქმედებები ხელშეკრულების გაფორმებამდე;",
        "• სამართლებრივი ვალდებულების შესრულება;",
        "• კანონიერი ინტერესი;",
        "• მომხმარებლის თანხმობა — მაგალითად, მარკეტინგული შეტყობინებებისთვის ან არასავალდებულო cookie-ებისთვის.",
        "",
        "8.4. მონაცემები შეიძლება გადაეცეს:",
        "",
        "• სადაზღვევო კომპანიას;",
        "• გადახდის პროვაიდერებს;",
        "• IT კონტრაქტორებს;",
        "• ჰოსტინგის პროვაიდერებს;",
        "• სახელმწიფო ორგანოებს, თუ ეს კანონით არის მოთხოვნილი.",
        "",
        "8.5. მომხმარებელს აქვს GDPR-ით გათვალისწინებული უფლებები: მონაცემებზე წვდომა, გასწორება, წაშლა, დამუშავების შეზღუდვა, დამუშავებაზე اعتراضი, მონაცემთა გადატანადობა და თანხმობის გაუქმება.",
        "8.6. პერსონალური მონაცემების დამუშავებასთან დაკავშირებული საჩივარი შეიძლება წარედგინოს Datu valsts inspekcija-ს. ინსპექციის საკონტაქტო ინფორმაცია გამოქვეყნებულია მის ოფიციალურ ვებგვერდზე.",
      ],
    },
    {
      title: "§ 9. Cookie და ტექნიკური მონაცემები",
      paragraphs: [
        "9.1. საიტმა შეიძლება გამოიყენოს cookie და მსგავსი ტექნოლოგიები საიტის მუშაობისთვის, ენის შესანახად, უსაფრთხოებისთვის, ანალიტიკისა და მარკეტინგისთვის.",
        "9.2. მკაცრად აუცილებელი cookie გამოიყენება თანხმობის გარეშე, რადგან ისინი საჭიროა საიტის მუშაობისთვის.",
        "9.3. ანალიტიკური და მარკეტინგული cookie გამოიყენება მხოლოდ მომხმარებლის თანხმობის შემდეგ.",
        "9.4. cookie-ების გამოყენების დეტალური წესი მითითებულია EURO Polis-ის ცალკე Cookie პოლიტიკაში.",
      ],
    },
    {
      title: "§ 10. მიმართვები და საჩივრები",
      paragraphs: [
        "10.1. მომხმარებელს შეუძლია გაგზავნოს მიმართვა ან საჩივარი:",
        "",
        "• ელ-ფოსტით: ludmila.rizova@ergo.lv;",
        "• ტელეფონით: +371 22355307;",
        "• საიტზე არსებული უკუკავშირის ფორმით;",
        "• უშუალოდ ERGO Insurance SE Latvijas filiāle-სთან.",
        "",
        "10.2. მიმართვაში სასურველია მითითებული იყოს:",
        "",
        "• მომხმარებლის სახელი ან დასახელება;",
        "• საკონტაქტო მონაცემები;",
        "• პოლისის ან განაცხადის ნომერი, თუ არსებობს;",
        "• სიტუაციის აღწერა;",
        "• მომხმარებლის მოთხოვნა;",
        "• თანდართული დოკუმენტები, თუ არსებობს.",
        "",
        "10.3. თუ მიმართვა ეხება სადაზღვევო ანაზღაურებას, სადაზღვევო შემთხვევის აღიარებას, ანაზღაურებაზე უარს ან დაზღვევის ხელშეკრულების შეცვლას, ის შეიძლება გადაეცეს სადაზღვევო კომპანიას ან მომხმარებელი ინფორმირებული იქნება სადაზღვევო კომპანიასთან მიმართვის წესის შესახებ.",
        "10.4. თუ მომხმარებელი არ ეთანხმება პასუხს, მას შეუძლია მიმართოს სადაზღვევო კომპანიას, Latvijas Banka-ს, როგორც ფინანსური ზედამხედველობის კომპეტენტურ ორგანოს, Datu valsts inspekcija-ს პერსონალური მონაცემების საკითხებზე ან სასამართლოს.",
      ],
    },
    {
      title: "§ 11. პასუხისმგებლობა",
      paragraphs: [
        "11.1. შუამავალი პასუხისმგებელია თავისი უფლებამოსილების ფარგლებში მოქმედებების სათანადოდ შესრულებაზე.",
        "11.2. შუამავალი არ არის პასუხისმგებელი:",
        "",
        "• მომხმარებლის მიერ გადაცემულ არასანდო მონაცემებზე;",
        "• დოკუმენტებში არსებულ შეცდომებზე, რომლებიც მომხმარებლის მონაცემებით არის გამოწვეული;",
        "• სადაზღვევო კომპანიის გადაწყვეტილებებზე ხელშეკრულების გაფორმების, პირობების შეცვლის ან ანაზღაურების შესახებ;",
        "• ბანკების, გადახდის პროვაიდერების, კავშირგაბმულობის ოპერატორებისა და სხვა მესამე პირების შეფერხებებზე;",
        "• მომხმარებლის ელ-ფოსტაზე, მესენჯერებზე ან მოწყობილობებზე არასანქცირებულ წვდომაზე.",
        "",
        "11.3. სადაზღვევო კომპანია პასუხისმგებელია დაზღვევის ხელშეკრულებით, ხელშეკრულების პირობებისა და მოქმედი კანონმდებლობის ფარგლებში.",
      ],
    },
    {
      title: "§ 12. ინტელექტუალური საკუთრება",
      paragraphs: [
        "12.1. EURO Polis-ის საიტის მასალები, მათ შორის ტექსტები, დიზაინი, გამოსახულებები, საიტის სტრუქტურა, ინტერფეისის ელემენტები და პროგრამული კოდი, დაცულია ინტელექტუალური საკუთრების კანონმდებლობით.",
        "12.2. საიტის მასალების გამოყენება დაშვებულია მხოლოდ პირადი გაცნობისა და სადაზღვევო მომსახურების მისაღებად.",
        "12.3. საიტის მასალების კოპირება, გავრცელება ან კომერციული გამოყენება დაშვებულია მხოლოდ უფლებამფლობელის წინასწარი თანხმობით, თუ კანონით სხვა რამ არ არის ნებადართული.",
      ],
    },
    {
      title: "§ 13. რეგლამენტის შეცვლა",
      paragraphs: [
        "13.1. EURO Polis-ს უფლება აქვს განაახლოს წინამდებარე რეგლამენტი კანონმდებლობის, სადაზღვევო პროდუქტების, საიტის ტექნიკური ფუნქციონალის, გადახდის მეთოდების ან მომხმარებლებთან ურთიერთობის წესის ცვლილების გამო.",
        "13.2. ახალი რედაქცია ქვეყნდება საიტზე და მოქმედებს გამოქვეყნების დღიდან, თუ სხვა ვადა არ არის მითითებული.",
        "13.3. ცვლილებებს უკუძალა არ აქვს და არ მოქმედებს უკვე დადებულ დაზღვევის ხელშეკრულებებზე, თუ კანონით ან ხელშეკრულების პირობებით სხვა რამ არ არის გათვალისწინებული.",
      ],
    },
    {
      title: "§ 14. მოქმედი სამართალი და დავების გადაწყვეტა",
      paragraphs: [
        "14.1. წინამდებარე რეგლამენტზე ვრცელდება ლატვიის რესპუბლიკის სამართალი და ევროკავშირის მოქმედი სამართალი.",
        "14.2. დავები წყდება მოლაპარაკებებისა და მომხმარებლის მიმართვის განხილვის გზით.",
        "14.3. დავის მოუგვარებლობის შემთხვევაში მომხმარებელს აქვს უფლება მიმართოს ლატვიის კომპეტენტურ ორგანოებს ან ლატვიის რესპუბლიკის სასამართლოს.",
      ],
    },
    {
      title: "§ 15. დასკვნითი დებულებები",
      paragraphs: [
        "15.1. წინამდებარე რეგლამენტი განთავსებულია EURO Polis-ის საიტზე თავისუფალ წვდომაში.",
        "15.2. მომხმარებელს შეუძლია შეინახოს, დაბეჭდოს ან აღადგინოს რეგლამენტის ტექსტი.",
        "15.3. თუ რეგლამენტის რომელიმე დებულება ბათილად იქნება ცნობილი, ეს არ იმოქმედებს დანარჩენი დებულებების ნამდვილობაზე.",
        "15.4. ოფიციალური მონაცემები:",
        "",
        "სადაზღვევო კომპანია: ERGO Insurance SE Latvijas filiāle",
        "სარეგისტრაციო ნომერი: 40103599913",
        "მისამართი: Skanstes iela 50, Rīga, LV-1013, ლატვია",
        "",
        "სადაზღვევო შუამავალი: Rižova Ludmila",
        "ტელეფონი: +371 22355307",
        "ელ-ფოსტა: ludmila.rizova@ergo.lv",
        "",
        "საქმიანობის ქვეყანა: ლატვია",
        "საიტი: EURO Polis",
      ],
    },
  ],
};

const kz: RulesDictionary = {
  pageTitle: "РЕГЛАМЕНТ",
  subtitle: "EURO Polis сайты арқылы электрондық қызметтер көрсету және сақтандыру шарттарын қашықтан жасасуға жәрдемдесу тәртібі",
  updatedAt: "05.05.2026",
  sections: [
    {
      title: "Сақтандыру компаниясы және сақтандыру делдалы туралы мәліметтер",
      paragraphs: [
        "Сақтандыру қызметтері келесі сақтандыру компаниясының қатысуымен көрсетіледі:",
        "",
        "ERGO Insurance SE Latvijas filiāle",
        "Тіркеу нөмірі: 40103599913",
        "Заңды мекенжайы: Skanstes iela 50, Rīga, LV-1013, Латвия",
        "",
        "Сақтандыру делдалы туралы деректер:",
        "",
        "Rižova Ludmila",
        "Телефон: +371 22355307",
        "E-mail: ludmila.rizova@ergo.lv",
        "",
        "Қызмет жүзеге асырылатын ел: Латвия",
        "Сақтандыру қызметінің түрі: шекаралық сақтандыру шарттары, соның ішінде басқа мемлекеттердің аумағына кіру үшін көлік құралдары иелерінің азаматтық-құқықтық жауапкершілігін сақтандыру.",
        "",
        "Егер мұндай құқықты сақтандырушы берген болса және ол қолданылатын заңнамаға әрі сақтандырушымен жасалған шарт талаптарына сәйкес келсе, делдал клиенттен сақтандыру сыйлықақысын қабылдауға құқылы.",
      ],
    },
    {
      title: "§ 1. Анықтамалар",
      paragraphs: [
        "Сайт — EURO Polis интернет-сайты, ол арқылы пайдаланушы сақтандыру өнімдері туралы ақпарат ала алады, өтінім жібере алады, мәліметтер мен құжаттарды бере алады, кеңес алып, сақтандыру шартын қашықтан жасасуға жәрдем ала алады.",
        "Сақтандырушы — ERGO Insurance SE Latvijas filiāle немесе сақтандыру шартын жасасқанға дейін пайдаланушыға нақты көрсетілген өзге сақтандырушы.",
        "Сақтандыру делдалы — Rižova Ludmila, Латвияда сақтандырушы берген құқықтық мәртебе мен өкілеттіктер шегінде сақтандыру өнімдерін тарату қызметін жүзеге асыратын тұлға.",
        "Пайдаланушы — сайтты немесе EURO Polis қашықтан байланыс арналары пайдаланатын жеке тұлға, заңды тұлға немесе заңды тұлғаның өкілі.",
        "Сақтанушы — сақтандырушымен сақтандыру шартын жасасатын тұлға.",
        "Сақтандыру шарты — сақтанушы мен сақтандырушы арасындағы шарт, ол заңнама және тиісті сақтандыру өнімі талаптары рұқсат етсе, қашықтан да жасалуы мүмкін.",
        "Полис — сақтандыру шарты жасалғанын растайтын қағаз немесе электрондық нысандағы құжат.",
        "Сақтандыру сыйлықақысы — сақтандыру қорғанысы үшін сақтанушы төлеуге тиіс сома.",
        "Дербес деректер — GDPR және Латвия заңнамасына сәйкес өңделетін, сәйкестендірілген немесе сәйкестендіруге болатын жеке тұлғаға қатысты кез келген ақпарат.",
      ],
    },
    {
      title: "§ 2. Жалпы ережелер",
      paragraphs: [
        "2.1. Осы Регламент EURO Polis сайтын және қашықтан байланыс арналарын ақпарат, кеңес алу және сақтандыру шарттарын жасасуға жәрдем алу үшін пайдалануға қолданылады.",
        "2.2. Регламент келесі актілерді ескере отырып әзірленген:",
        "",
        "• ЕО 2016/679 Регламенті (GDPR);",
        "• сақтандыруды тарату туралы ЕО 2016/97 Директивасы (IDD);",
        "• Латвияның сақтандыру және қайта сақтандыруды тарату туралы заңы;",
        "• Латвияның сақтандыру және қайта сақтандыру туралы заңы;",
        "• Латвияның тұтынушылар құқықтары туралы заңы;",
        "• қаржылық қызметтерді қашықтан ұсыну туралы ЕО заңнамасы;",
        "• электрондық сәйкестендіру және сенім қызметтері туралы eIDAS Регламенті. eIDAS ЕО аумағында қауіпсіз электрондық мәмілелер мен сенім қызметтері үшін құқықтық негіз қалыптастырады.",
        "",
        "2.3. Егер пайдаланушы өтінім жіберсе, форманы толтырса, құжаттарды берсе немесе кеңес алуға жүгінсе, сайтты пайдалану осы Регламентпен келісуді білдіреді.",
        "2.4. Сақтандыру шарты EURO Polis сайтымен немесе делдалмен емес, тікелей сақтанушы мен сақтандырушы арасында жасалады.",
        "2.5. Делдал сақтандырушы болып табылмайды, сақтандыру төлемі бойынша міндеттеме алмайды және оқиғаны сақтандыру жағдайы деп тану туралы шешім қабылдамайды.",
        "2.6. Сайттағы ақпарат анықтамалық сипатта болады және, егер тікелей өзгеше көрсетілмесе, жария оферта болып саналмайды.",
      ],
    },
    {
      title: "§ 3. Делдал мәртебесі және ақпаратты ашу",
      paragraphs: [
        "3.1. Сақтандыру шартын жасасқанға дейін пайдаланушыға сақтандырушы, сақтандыру делдалы, сақтандыру өнімі, сақтандыру сыйлықақысының мөлшері, сақтандырудың маңызды талаптары, ерекшеліктер және шағым беру тәртібі туралы ақпарат беріледі.",
        "3.2. Делдал сақтандырушы берген өкілеттіктер шегінде әрекет етеді және келесі мәселелерде жәрдем көрсете алады:",
        "",
        "• өтінімдерді қабылдау;",
        "• пайдаланушыға кеңес беру;",
        "• деректерді сақтандырушыға беру;",
        "• сақтандыру полисін рәсімдеу;",
        "• егер сақтандырушы және қолданылатын заңнама рұқсат етсе, сақтандыру сыйлықақысын қабылдау.",
        "",
        "3.3. Егер делдал сақтандырушыдан комиссиялық сыйақы алса, бұл сақтандыру шарты жасалғанға дейін тікелей өзгеше көрсетілмесе, пайдаланушы үшін сақтандыру сыйлықақысының автоматты түрде өсуін білдірмейді.",
        "3.4. Пайдаланушы делдалдың мәртебесі, өкілеттіктерінің сипаты және сыйақы алу тәртібі туралы қосымша ақпарат сұратуға құқылы.",
      ],
    },
    {
      title: "§ 4. Сайтты пайдалану тәртібі",
      paragraphs: [
        "4.1. EURO Polis сайты келесі мақсаттарға арналған:",
        "",
        "• сақтандыру өнімдері туралы ақпарат алу;",
        "• өтінімдер жіберу;",
        "• құжаттар мен мәліметтерді беру;",
        "• сақтандыру құнын есептеу немесе алдын ала бағалау;",
        "• сақтандыру құжаттарын электрондық түрде алу.",
        "",
        "4.2. Сайт техникалық жұмыстарды, байланыс ақауларын, жаңартуларды немесе EURO Polis-ке тәуелді емес өзге жағдайларды қоспағанда, тәулік бойы қолжетімді болуы мүмкін.",
        "4.3. Пайдаланушы шынайы, толық және өзекті мәліметтер беруге міндетті.",
        "4.4. Пайдаланушы қате, толық емес немесе шынайы емес деректерді берудің салдары үшін жауапты, соның ішінде сақтандырушының шарт жасасудан, талаптарды өзгертуден немесе сақтандыру төлемінен бас тарту қаупін көтереді.",
        "4.5. Пайдаланушыға сайтты жалған құжаттар, жалған мәліметтер, зиянды код жіберу немесе үшінші тұлғалардың құқықтарын бұзатын әрекеттер үшін пайдалануға тыйым салынады.",
      ],
    },
    {
      title: "§ 5. Сақтандыру шартын қашықтан жасасу",
      paragraphs: [
        "5.1. Сақтандыруды рәсімдеу үшін пайдаланушы нақты өнімге қажетті мәліметтерді береді: сақтанушы, көлік құралы, сақтандыру мерзімі, қолданылу аумағы, маршрут, тіркеу құжаттары және өзге мәліметтер.",
        "5.2. Шарт жасасқанға дейін пайдаланушы келесі ақпаратты алады:",
        "",
        "• сақтандырушы туралы;",
        "• делдал туралы;",
        "• сақтандыру өнімі туралы;",
        "• қолданылу аумағы туралы;",
        "• сақтандыру мерзімі туралы;",
        "• сақтандыру сыйлықақысы туралы;",
        "• ерекшеліктер мен шектеулер туралы;",
        "• төлем тәртібі туралы;",
        "• полисті алу тәртібі туралы;",
        "• шартты өзгерту немесе тоқтату тәртібі туралы;",
        "• шағым беру тәртібі туралы.",
        "",
        "5.3. Сақтандыру шарты сақтандырушы талаптарында белгіленген сәттен бастап жасалған болып саналады: пайдаланушы келісімін растау, сақтандыру талаптарын қабылдау, сыйлықақыны төлеу және полисті шығару, егер мұндай әрекеттер қажет болса.",
        "5.4. Электрондық полис немесе сақтандыру шартының жасалғанын растайтын өзге құжат пайдаланушыға e-mail, мессенджер, жеке кабинет немесе өзге келісілген арна арқылы жіберілуі мүмкін.",
        "5.5. Пайдаланушы полисті алғаннан кейін ондағы деректерді бірден тексеруге міндетті. Қате анықталса, пайдаланушы бұл туралы делдалға немесе сақтандырушыға дереу хабарлауы тиіс.",
      ],
    },
    {
      title: "§ 6. Төлем",
      paragraphs: [
        "6.1. Сақтандыру сыйлықақысын төлеу келесі тәсілдермен жүзеге асырылуы мүмкін:",
        "",
        "• банктік аударым;",
        "• төлем провайдері арқылы банк картасымен;",
        "• сайтта көрсетілген немесе пайдаланушымен келісілген өзге тәсілмен.",
        "",
        "6.2. Егер делдал сақтандыру сыйлықақысын қабылдаса, ол сақтандырушы берген өкілеттіктер шегінде әрекет етеді.",
        "6.3. Банк картасымен төлеу кезінде карта деректері банктің немесе төлем провайдерінің қорғалған бетінде енгізіледі. EURO Polis және делдал банк карталарының толық деректерін сақтамайды.",
        "6.4. Банктік аударыммен төлеу кезінде пайдаланушы берілген реквизиттерді қолдануға және төлем мақсатын дұрыс көрсетуге міндетті.",
        "6.5. Егер сақтандырушы талаптарында өзгеше көзделмесе, төлем сәті болып қаражаттың алушы шотына түсуі саналады.",
        "6.6. Сақтандыру сыйлықақысын немесе оның бір бөлігін қайтару сақтандыру шартында, сақтандырушы ережелерінде және қолданылатын заңнамада көзделген жағдайлар мен тәртіпте жүзеге асырылады.",
      ],
    },
    {
      title: "§ 7. Бас тарту құқығы және қашықтан сақтандыру ерекшеліктері",
      paragraphs: [
        "7.1. Сақтандыру қаржылық қызмет болып табылатындықтан, пайдаланушының шарттан бас тарту құқығы сақтандыру өніміне, шарт мерзіміне, сақтандыру қорғанысының басталу сәтіне және қолданылатын заңнамаға байланысты.",
        "7.2. Егер бас тарту құқығы заңмен немесе сақтандырушы талаптарымен көзделсе, пайдаланушы шарт жасасқанға дейін бас тарту тәртібі, мерзімдері және салдары туралы хабардар етіледі.",
        "7.3. Қысқа мерзімді сақтандыру шарттары және пайдаланушы келісімімен орындала бастаған шарттар бойынша бас тарту құқығы шектелуі мүмкін.",
        "7.4. Егер сақтандыру сыйлықақысын қайтару туралы шешім сақтандырушы құзыретіне жатса, делдал мұндай шешімді өз бетінше қабылдамайды.",
      ],
    },
    {
      title: "§ 8. Дербес деректер",
      paragraphs: [
        "8.1. Дербес деректерді өңдеу GDPR және Латвияның дербес деректерді қорғау туралы заңнамасына сәйкес жүзеге асырылады.",
        "8.2. EURO Polis сайты аясында деректер келесі мақсаттар үшін өңделуі мүмкін:",
        "",
        "• өтінімді қарау;",
        "• сақтандыру өнімін таңдау;",
        "• сақтандыру шартын рәсімдеу;",
        "• деректерді сақтандырушыға беру;",
        "• төлемдерді өңдеу;",
        "• пайдаланушымен байланыс;",
        "• заңды міндеттемелерді орындау;",
        "• құқықтар мен заңды мүдделерді қорғау;",
        "• сайт қауіпсіздігін қамтамасыз ету.",
        "",
        "8.3. Өңдеудің құқықтық негіздері мыналар болуы мүмкін:",
        "",
        "• шартты орындау немесе шарт жасасуға дейінгі әрекеттер;",
        "• заңды міндеттемені орындау;",
        "• заңды мүдде;",
        "• пайдаланушының келісімі — мысалы, маркетингтік тарату немесе міндетті емес cookie үшін.",
        "",
        "8.4. Деректер келесі тараптарға берілуі мүмкін:",
        "",
        "• сақтандырушыға;",
        "• төлем провайдерлеріне;",
        "• IT-подрядшыларға;",
        "• хостинг провайдерлеріне;",
        "• мемлекеттік органдарға, егер бұл заңмен талап етілсе.",
        "",
        "8.5. Пайдаланушы GDPR бойынша көзделген құқықтарға ие: деректерге қол жеткізу, түзету, жою, өңдеуді шектеу, өңдеуге қарсылық білдіру, деректерді тасымалдау және келісімді қайтарып алу.",
        "8.6. Дербес деректерді өңдеу мәселелері бойынша шағым Datu valsts inspekcija органына берілуі мүмкін. Инспекцияның байланыс деректері оның ресми сайтында жарияланған.",
      ],
    },
    {
      title: "§ 9. Cookie және техникалық деректер",
      paragraphs: [
        "9.1. Сайт cookie және ұқсас технологияларды сайт жұмысы, тілді сақтау, қауіпсіздік, аналитика және маркетинг үшін қолдануы мүмкін.",
        "9.2. Қатаң қажетті cookie пайдаланушы келісімінсіз қолданылады, себебі олар сайт жұмысы үшін қажет.",
        "9.3. Аналитикалық және маркетингтік cookie тек пайдаланушы келісімінен кейін қолданылады.",
        "9.4. Cookie қолданудың толық тәртібі EURO Polis-тің жеке Cookie саясатында көрсетіледі.",
      ],
    },
    {
      title: "§ 10. Өтініштер мен шағымдар",
      paragraphs: [
        "10.1. Пайдаланушы өтініш немесе шағымды келесі арналар арқылы жібере алады:",
        "",
        "• e-mail: ludmila.rizova@ergo.lv;",
        "• телефон: +371 22355307;",
        "• сайттағы кері байланыс формасы арқылы;",
        "• тікелей ERGO Insurance SE Latvijas filiāle сақтандырушысына.",
        "",
        "10.2. Өтініште келесі деректерді көрсету ұсынылады:",
        "",
        "• пайдаланушының аты немесе атауы;",
        "• байланыс деректері;",
        "• полис немесе өтінім нөмірі, егер бар болса;",
        "• жағдайдың сипаттамасы;",
        "• пайдаланушының талабы;",
        "• бар болса, қоса берілген құжаттар.",
        "",
        "10.3. Егер өтініш сақтандыру төлеміне, сақтандыру жағдайын тануға, төлемнен бас тартуға немесе сақтандыру шартын өзгертуге қатысты болса, ол сақтандырушыға берілуі мүмкін немесе пайдаланушыға сақтандырушыға жүгіну тәртібі түсіндіріледі.",
        "10.4. Егер пайдаланушы жауаппен келіспесе, ол сақтандырушыға, қаржылық қадағалау жөніндегі құзыретті орган ретінде Latvijas Banka-ға, дербес деректер мәселелері бойынша Datu valsts inspekcija-ға немесе сотқа жүгінуге құқылы.",
      ],
    },
    {
      title: "§ 11. Жауапкершілік",
      paragraphs: [
        "11.1. Делдал өз өкілеттіктері шегіндегі әрекеттерді тиісінше орындау үшін жауап береді.",
        "11.2. Делдал келесі жағдайлар үшін жауап бермейді:",
        "",
        "• пайдаланушы берген шынайы емес мәліметтер;",
        "• пайдаланушы деректеріне байланысты құжаттарда пайда болған қателер;",
        "• шарт жасасу, талаптарды өзгерту немесе төлем бойынша сақтандырушы шешімдері;",
        "• банктердің, төлем провайдерлерінің, байланыс операторларының және өзге үшінші тұлғалардың ақаулары;",
        "• пайдаланушының e-mail, мессенджерлеріне немесе құрылғыларына рұқсатсыз қол жеткізу.",
        "",
        "11.3. Сақтандырушы сақтандыру шарты бойынша шарт талаптары және қолданылатын заңнама шегінде жауап береді.",
      ],
    },
    {
      title: "§ 12. Зияткерлік меншік",
      paragraphs: [
        "12.1. EURO Polis сайтының материалдары, соның ішінде мәтіндер, дизайн, суреттер, сайт құрылымы, интерфейс элементтері және бағдарламалық код зияткерлік меншік туралы заңнамамен қорғалады.",
        "12.2. Сайт материалдарын тек жеке танысу және сақтандыру қызметтерін алу мақсатында пайдалануға болады.",
        "12.3. Сайт материалдарын көшіру, тарату немесе коммерциялық пайдалану заңмен өзгеше рұқсат етілмесе, құқық иесінің алдын ала келісімімен ғана мүмкін.",
      ],
    },
    {
      title: "§ 13. Регламентті өзгерту",
      paragraphs: [
        "13.1. EURO Polis заңнама, сақтандыру өнімдері, сайттың техникалық функционалы, төлем тәсілдері немесе пайдаланушылармен өзара іс-қимыл тәртібі өзгерген жағдайда осы Регламентті жаңартуға құқылы.",
        "13.2. Жаңа редакция сайтта жарияланады және, егер басқа мерзім көрсетілмесе, жарияланған күннен бастап қолданылады.",
        "13.3. Өзгерістердің кері күші болмайды және, егер заңда немесе шарт талаптарында өзгеше көзделмесе, бұрын жасалған сақтандыру шарттарына әсер етпейді.",
      ],
    },
    {
      title: "§ 14. Қолданылатын құқық және дауларды шешу",
      paragraphs: [
        "14.1. Осы Регламентке Латвия Республикасының құқығы және қолданылатын Еуропалық Одақ құқығы қолданылады.",
        "14.2. Даулар келіссөздер және пайдаланушы өтінішін қарау арқылы шешіледі.",
        "14.3. Дауды реттеу мүмкін болмаса, пайдаланушы Латвияның құзыретті органдарына немесе Латвия Республикасының сотына жүгінуге құқылы.",
      ],
    },
    {
      title: "§ 15. Қорытынды ережелер",
      paragraphs: [
        "15.1. Осы Регламент EURO Polis сайтында еркін қолжетімді түрде орналастырылады.",
        "15.2. Пайдаланушы Регламент мәтінін сақтай, басып шығара немесе қайта шығара алады.",
        "15.3. Егер Регламенттің жекелеген ережесі жарамсыз деп танылса, бұл қалған ережелердің жарамдылығына әсер етпейді.",
        "15.4. Ресми мәліметтер:",
        "",
        "Сақтандырушы: ERGO Insurance SE Latvijas filiāle",
        "Тіркеу нөмірі: 40103599913",
        "Мекенжайы: Skanstes iela 50, Rīga, LV-1013, Латвия",
        "",
        "Сақтандыру делдалы: Rižova Ludmila",
        "Телефон: +371 22355307",
        "E-mail: ludmila.rizova@ergo.lv",
        "",
        "Қызмет елі: Латвия",
        "Сайт: EURO Polis",
      ],
    },
  ],
};

const tr: RulesDictionary = {
  pageTitle: "YÖNETMELİK",
  subtitle: "EURO Polis web sitesi üzerinden elektronik hizmetlerin sunulması ve mesafeli sigorta sözleşmelerinin kurulmasına aracılık edilmesi",
  updatedAt: "05.05.2026",
  sections: [
    { title: "Sigorta şirketi ve sigorta aracısına ilişkin bilgiler", paragraphs: [
      "Sigorta hizmetleri aşağıdaki sigorta şirketinin katılımıyla sunulmaktadır:","",
      "ERGO Insurance SE Latvijas filiāle","Kayıt numarası: 40103599913","Yasal adres: Skanstes iela 50, Rīga, LV-1013, Letonya","",
      "Sigorta aracısına ait bilgiler:","",
      "Rižova Ludmila","Telefon: +371 22355307","E-posta: ludmila.rizova@ergo.lv","",
      "Faaliyet ülkesi: Letonya","Sigorta faaliyet türü: sınır sigortası sözleşmeleri, diğer ülkelere giriş için motorlu araç sahiplerinin hukuki sorumluluk sigortası dahil.","",
      "Aracı, sigortacı tarafından yetki verilmişse ve bu yetki ilgili mevzuata ve sigortacı ile yapılan sözleşme şartlarına uygunsa, müşteriden sigorta primini tahsil etme hakkına sahiptir."]},
    { title: "§ 1. Tanımlar", paragraphs: [
      "Site — kullanıcının sigorta ürünleri hakkında bilgi alabileceği, başvuru gönderebileceği, bilgi ve belge iletebileceği, danışmanlık alabileceği ve mesafeli sigorta sözleşmesi kurulmasına yönelik destek alabileceği EURO Polis web sitesidir.",
      "Sigortacı — ERGO Insurance SE Latvijas filiāle veya sigorta sözleşmesi kurulmadan önce kullanıcıya açıkça bildirilen başka bir sigortacıdır.",
      "Sigorta aracısı — Letonya’da sigortacı tarafından verilen hukuki statü ve yetkiler çerçevesinde sigorta ürünlerinin dağıtımını yapan Rižova Ludmila’dır.",
      "Kullanıcı — EURO Polis web sitesini veya uzaktan iletişim kanallarını kullanan gerçek kişi, tüzel kişi veya tüzel kişi temsilcisidir.",
      "Sigorta ettiren — sigortacı ile sigorta sözleşmesi yapan kişidir.",
      "Sigorta sözleşmesi — sigorta ettiren ile sigortacı arasında yapılan ve ilgili mevzuat ile sigorta ürününün şartları izin veriyorsa uzaktan da kurulabilen sözleşmedir.",
      "Poliçe — sigorta sözleşmesinin kurulduğunu teyit eden basılı veya elektronik belgedir.",
      "Sigorta primi — sigorta koruması karşılığında sigorta ettiren tarafından ödenmesi gereken tutardır.",
      "Kişisel veriler — GDPR ve Letonya mevzuatına uygun olarak işlenen, kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgidir."]},
    { title: "§ 2. Genel hükümler", paragraphs: [
      "2.1. Bu Yönetmelik, EURO Polis web sitesinin ve uzaktan iletişim kanallarının bilgi alma, danışmanlık ve sigorta sözleşmelerinin kurulmasına aracılık amacıyla kullanımına uygulanır.",
      "2.2. Yönetmelik aşağıdaki düzenlemeler dikkate alınarak hazırlanmıştır:","","• AB Tüzüğü 2016/679 (GDPR);","• Sigorta dağıtımına ilişkin AB Direktifi 2016/97 (IDD);","• Letonya Sigorta ve Reasürans Dağıtımı Kanunu;","• Letonya Sigorta ve Reasürans Kanunu;","• Letonya Tüketici Hakları Kanunu;","• finansal hizmetlerin mesafeli sunumuna ilişkin AB mevzuatı;","• elektronik kimlik ve güven hizmetlerine ilişkin eIDAS Tüzüğü. eIDAS, AB’de güvenli elektronik işlemler ve güven hizmetleri için hukuki temel oluşturur.","",
      "2.3. Kullanıcının başvuru göndermesi, form doldurması, belge iletmesi veya danışmanlık talep etmesi halinde siteyi kullanması bu Yönetmeliği kabul ettiği anlamına gelir.",
      "2.4. Sigorta sözleşmesi EURO Polis sitesi veya aracı ile değil, doğrudan sigorta ettiren ile sigortacı arasında kurulur.",
      "2.5. Aracı sigortacı değildir, sigorta tazminatı ödeme yükümlülüğü üstlenmez ve bir olayın sigorta olayı olarak kabul edilip edilmeyeceğine karar vermez.",
      "2.6. Sitedeki bilgiler bilgilendirme amaçlıdır ve aksi açıkça belirtilmedikçe kamuya açık teklif niteliği taşımaz."]},
    { title: "§ 3. Aracının statüsü ve bilgilendirme", paragraphs: [
      "3.1. Sigorta sözleşmesi kurulmadan önce kullanıcıya sigortacı, sigorta aracısı, sigorta ürünü türü, sigorta primi, temel sigorta şartları, istisnalar ve şikâyet süreci hakkında bilgi verilir.",
      "3.2. Aracı, sigortacı tarafından verilen yetkiler çerçevesinde hareket eder ve aşağıdaki konularda destek sağlayabilir:","","• başvuruların alınması;","• kullanıcının bilgilendirilmesi;","• verilerin sigortacıya aktarılması;","• sigorta poliçesinin düzenlenmesi;","• sigortacı ve ilgili mevzuat izin veriyorsa sigorta priminin tahsil edilmesi.","",
      "3.3. Aracının sigortacıdan komisyon alması, sigorta sözleşmesi kurulmadan önce aksi açıkça belirtilmedikçe, kullanıcı için sigorta priminin otomatik olarak artacağı anlamına gelmez.",
      "3.4. Kullanıcı, aracının statüsü, yetkilerinin niteliği ve ücretlendirme şekli hakkında ek bilgi talep etme hakkına sahiptir."]},
    { title: "§ 4. Sitenin kullanım şekli", paragraphs: [
      "4.1. EURO Polis sitesi şu amaçlarla kullanılır:","","• sigorta ürünleri hakkında bilgi almak;","• başvuru göndermek;","• belge ve bilgi iletmek;","• sigorta maliyetini hesaplamak veya ön değerlendirme yapmak;","• sigorta belgelerini elektronik formatta almak.","",
      "4.2. Site, teknik çalışmalar, bağlantı sorunları, güncellemeler veya EURO Polis’in kontrolü dışındaki diğer durumlar hariç olmak üzere günün her saati erişilebilir olabilir.",
      "4.3. Kullanıcı doğru, eksiksiz ve güncel bilgi vermekle yükümlüdür.",
      "4.4. Kullanıcı, hatalı, eksik veya gerçeğe aykırı bilgi vermesinin sonuçlarından sorumludur. Buna sigortacının sözleşme kurmayı reddetmesi, şartları değiştirmesi veya tazminat ödemeyi reddetmesi riski dahildir.",
      "4.5. Kullanıcının siteyi sahte belge, yanlış bilgi, zararlı kod iletmek veya üçüncü kişilerin haklarını ihlal eden eylemler için kullanması yasaktır."]},
    { title: "§ 5. Mesafeli sigorta sözleşmesinin kurulması", paragraphs: [
      "5.1. Sigorta düzenlenmesi için kullanıcı, ilgili ürüne bağlı olarak gerekli bilgileri sağlar: sigorta ettirenin bilgileri, araç bilgileri, sigorta süresi, geçerlilik bölgesi, güzergâh, tescil belgeleri ve diğer bilgiler.",
      "5.2. Sözleşme kurulmadan önce kullanıcı şu konularda bilgilendirilir:","","• sigortacı;","• aracı;","• sigorta ürünü;","• geçerlilik bölgesi;","• sigorta süresi;","• sigorta primi;","• istisnalar ve sınırlamalar;","• ödeme şekli;","• poliçenin alınma şekli;","• sözleşmenin değiştirilmesi veya sona erdirilmesi;","• şikâyet süreci.","",
      "5.3. Sigorta sözleşmesi, sigortacının şartlarında belirlenen anda kurulmuş sayılır: kullanıcının onay vermesi, sigorta şartlarını kabul etmesi, primin ödenmesi ve gerekli ise poliçenin düzenlenmesi.",
      "5.4. Elektronik poliçe veya sigorta sözleşmesinin kurulduğunu teyit eden başka bir belge kullanıcıya e-posta, mesajlaşma uygulaması, kişisel hesap veya mutabık kalınan başka bir kanal üzerinden gönderilebilir.",
      "5.5. Kullanıcı poliçeyi aldıktan hemen sonra bilgileri kontrol etmekle yükümlüdür. Hata tespit edilirse kullanıcı derhal aracıya veya sigortacıya bildirmelidir."]},
    { title: "§ 6. Ödeme", paragraphs: [
      "6.1. Sigorta primi şu yollarla ödenebilir:","","• banka havalesi;","• ödeme sağlayıcısı üzerinden banka kartı;","• sitede belirtilen veya kullanıcı ile mutabık kalınan başka bir yöntem.","",
      "6.2. Aracı sigorta primini tahsil ediyorsa, sigortacı tarafından verilen yetkiler çerçevesinde hareket eder.",
      "6.3. Banka kartı ile ödeme yapılırken kart bilgileri bankanın veya ödeme sağlayıcısının güvenli sayfasında girilir. EURO Polis ve aracı, banka kartı bilgilerinin tamamını saklamaz.",
      "6.4. Banka havalesi ile ödeme yapılırken kullanıcı verilen hesap bilgilerini kullanmalı ve ödeme açıklamasını doğru belirtmelidir.",
      "6.5. Sigortacının şartlarında aksi belirtilmedikçe ödeme anı, paranın alıcı hesaba geçtiği andır.",
      "6.6. Sigorta priminin tamamen veya kısmen iadesi, sigorta sözleşmesi, sigortacının kuralları ve ilgili mevzuatta öngörülen durumlarda ve usule göre yapılır."]},
    { title: "§ 7. Cayma hakkı ve mesafeli sigortanın özellikleri", paragraphs: [
      "7.1. Sigorta bir finansal hizmet olduğundan, kullanıcının sözleşmeden cayma hakkı sigorta ürününün türüne, sözleşme süresine, sigorta korumasının başlama anına ve uygulanacak mevzuata bağlıdır.",
      "7.2. Kanun veya sigortacı şartları cayma hakkı tanıyorsa, kullanıcı sözleşme kurulmadan önce cayma usulü, süresi ve sonuçları hakkında bilgilendirilir.",
      "7.3. Kısa süreli sigorta sözleşmelerinde ve kullanıcının onayıyla ifasına başlanmış sözleşmelerde cayma hakkı sınırlı olabilir.",
      "7.4. Prim iadesi kararı sigortacının yetkisindeyse aracı bu konuda bağımsız karar vermez."]},
    { title: "§ 8. Kişisel veriler", paragraphs: [
      "8.1. Kişisel veriler GDPR ve Letonya veri koruma mevzuatına uygun olarak işlenir.",
      "8.2. EURO Polis sitesi kapsamında veriler şu amaçlarla işlenebilir:","","• başvurunun değerlendirilmesi;","• uygun sigorta ürününün seçilmesi;","• sigorta sözleşmesinin düzenlenmesi;","• verilerin sigortacıya aktarılması;","• ödemelerin işlenmesi;","• kullanıcı ile iletişim;","• yasal yükümlülüklerin yerine getirilmesi;","• hakların ve meşru menfaatlerin korunması;","• site güvenliğinin sağlanması.","",
      "8.3. İşlemenin hukuki dayanakları şunlar olabilir:","","• sözleşmenin ifası veya sözleşme öncesi işlemler;","• yasal yükümlülüğün yerine getirilmesi;","• meşru menfaat;","• kullanıcının rızası — örneğin pazarlama gönderileri veya zorunlu olmayan çerezler için.","",
      "8.4. Veriler şu taraflara aktarılabilir:","","• sigortacıya;","• ödeme sağlayıcılarına;","• IT yüklenicilerine;","• hosting sağlayıcılarına;","• kanunen gerekli ise kamu kurumlarına.","",
      "8.5. Kullanıcı GDPR kapsamında öngörülen haklara sahiptir: verilere erişim, düzeltme, silme, işlemenin kısıtlanması, işlemeye itiraz, veri taşınabilirliği ve rızanın geri çekilmesi.",
      "8.6. Kişisel verilerin işlenmesine ilişkin şikâyet Datu valsts inspekcija’ya yapılabilir. Kurumun iletişim bilgileri resmi web sitesinde yayımlanmıştır."]},
    { title: "§ 9. Çerezler ve teknik veriler", paragraphs: [
      "9.1. Site, çalışması, dil tercihinin saklanması, güvenlik, analiz ve pazarlama amaçlarıyla çerezler ve benzeri teknolojiler kullanabilir.",
      "9.2. Zorunlu çerezler, sitenin çalışması için gerekli olduğundan onay olmadan kullanılır.",
      "9.3. Analitik ve pazarlama çerezleri yalnızca kullanıcının onayından sonra kullanılır.",
      "9.4. Çerez kullanımına ilişkin ayrıntılı usul, EURO Polis’in ayrı Çerez Politikası’nda belirtilir."]},
    { title: "§ 10. Başvurular ve şikâyetler", paragraphs: [
      "10.1. Kullanıcı başvuru veya şikâyetini şu yollarla iletebilir:","","• e-posta: ludmila.rizova@ergo.lv",";","• telefon: +371 22355307;","• sitedeki iletişim formu üzerinden;","• doğrudan ERGO Insurance SE Latvijas filiāle sigortacısına.","",
      "10.2. Başvuruda tercihen şu bilgiler yer almalıdır:","","• kullanıcının adı veya unvanı;","• iletişim bilgileri;","• varsa poliçe veya başvuru numarası;","• durumun açıklaması;","• kullanıcının talebi;","• varsa ek belgeler.","",
      "10.3. Başvuru sigorta tazminatı, sigorta olayının kabulü, tazminat reddi veya sigorta sözleşmesinin değiştirilmesi ile ilgiliyse sigortacıya iletilebilir veya kullanıcı sigortacıya başvuru usulü hakkında bilgilendirilir.",
      "10.4. Kullanıcı verilen yanıta katılmazsa sigortacıya, finansal denetim yetkili kurumu olarak Latvijas Banka’ya, kişisel verilerle ilgili konularda Datu valsts inspekcija’ya veya mahkemeye başvurabilir."]},
    { title: "§ 11. Sorumluluk", paragraphs: [
      "11.1. Aracı, yetkileri dahilindeki işlemleri usulüne uygun şekilde yerine getirmekten sorumludur.",
      "11.2. Aracı aşağıdakilerden sorumlu değildir:","","• kullanıcı tarafından verilen gerçeğe aykırı bilgiler;","• kullanıcının sağladığı verilerden kaynaklanan belge hataları;","• sigortacının sözleşme kurma, şartları değiştirme veya ödeme kararları;","• bankalar, ödeme sağlayıcıları, iletişim operatörleri ve diğer üçüncü kişilerden kaynaklanan kesintiler;","• kullanıcının e-postasına, mesajlaşma hesaplarına veya cihazlarına yetkisiz erişim.","",
      "11.3. Sigortacı, sigorta sözleşmesi kapsamında sözleşme şartları ve uygulanacak mevzuat çerçevesinde sorumludur."]},
    { title: "§ 12. Fikri mülkiyet", paragraphs: [
      "12.1. EURO Polis sitesindeki metinler, tasarım, görseller, site yapısı, arayüz unsurları ve yazılım kodu dahil tüm materyaller fikri mülkiyet mevzuatıyla korunur.",
      "12.2. Site materyalleri yalnızca kişisel inceleme ve sigorta hizmetlerinden yararlanma amacıyla kullanılabilir.",
      "12.3. Site materyallerinin kopyalanması, dağıtılması veya ticari kullanımı, kanunen izin verilen haller dışında, hak sahibinin önceden onayına tabidir."]},
    { title: "§ 13. Yönetmeliğin değiştirilmesi", paragraphs: [
      "13.1. EURO Polis, mevzuat, sigorta ürünleri, sitenin teknik işlevleri, ödeme yöntemleri veya kullanıcılarla etkileşim sürecindeki değişiklikler nedeniyle bu Yönetmeliği güncelleyebilir.",
      "13.2. Yeni metin sitede yayımlanır ve başka bir tarih belirtilmedikçe yayımlandığı tarihten itibaren uygulanır.",
      "13.3. Değişiklikler geriye yürümez ve kanun veya sözleşme şartları aksini öngörmedikçe daha önce kurulmuş sigorta sözleşmelerini etkilemez."]},
    { title: "§ 14. Uygulanacak hukuk ve uyuşmazlıkların çözümü", paragraphs: [
      "14.1. Bu Yönetmeliğe Letonya Cumhuriyeti hukuku ve uygulanabilir Avrupa Birliği hukuku uygulanır.",
      "14.2. Uyuşmazlıklar müzakere ve kullanıcının başvurusunun incelenmesi yoluyla çözülür.",
      "14.3. Uyuşmazlık çözülemezse kullanıcı Letonya’nın yetkili kurumlarına veya Letonya Cumhuriyeti mahkemesine başvurabilir."]},
    { title: "§ 15. Son hükümler", paragraphs: [
      "15.1. Bu Yönetmelik EURO Polis sitesinde serbest erişime açık şekilde yayımlanır.",
      "15.2. Kullanıcı Yönetmelik metnini kaydedebilir, yazdırabilir veya çoğaltabilir.",
      "15.3. Yönetmeliğin herhangi bir hükmünün geçersiz sayılması, diğer hükümlerin geçerliliğini etkilemez.",
      "15.4. Resmi bilgiler:","","Sigortacı: ERGO Insurance SE Latvijas filiāle","Kayıt numarası: 40103599913","Adres: Skanstes iela 50, Rīga, LV-1013, Letonya","","Sigorta aracısı: Rižova Ludmila","Telefon: +371 22355307","E-posta: ludmila.rizova@ergo.lv","","Faaliyet ülkesi: Letonya","Site: EURO Polis"]},
  ],
};

const fa: RulesDictionary = {
  pageTitle: "مقررات",
  subtitle: "ارائه خدمات الکترونیکی و کمک به انعقاد قراردادهای بیمه از راه دور از طریق وب‌سایت EURO Polis",
  updatedAt: "05.05.2026",
  sections: [
    {
      title: "اطلاعات شرکت بیمه و واسطه بیمه",
      paragraphs: [
        "خدمات بیمه با مشارکت شرکت بیمه ارائه می‌شود:",
        "",
        "ERGO Insurance SE Latvijas filiāle",
        "شماره ثبت: 40103599913",
        "نشانی حقوقی: Skanstes iela 50, Rīga, LV-1013, Latvia",
        "",
        "اطلاعات واسطه بیمه:",
        "",
        "Rižova Ludmila",
        "تلفن: +371 22355307",
        "ایمیل: ludmila.rizova@ergo.lv",
        "",
        "کشور فعالیت: لتونی",
        "نوع فعالیت بیمه‌ای: قراردادهای بیمه مرزی، از جمله بیمه مسئولیت مدنی دارندگان وسایل نقلیه برای ورود به قلمرو سایر کشورها.",
        "",
        "واسطه بیمه می‌تواند حق‌بیمه را از مشتری دریافت کند، در صورتی که این اختیار از سوی بیمه‌گر به او داده شده باشد و با قوانین قابل اعمال و شرایط قرارداد با بیمه‌گر مطابقت داشته باشد."
      ]
    },
    {
      title: "§ 1. تعاریف",
      paragraphs: [
        "سایت — وب‌سایت EURO Polis که از طریق آن کاربر می‌تواند اطلاعات مربوط به محصولات بیمه‌ای را دریافت کند، درخواست ارسال کند، اطلاعات و مدارک را منتقل کند، مشاوره بگیرد و برای انعقاد قرارداد بیمه از راه دور کمک دریافت کند.",
        "بیمه‌گر — ERGO Insurance SE Latvijas filiāle یا هر بیمه‌گر دیگری که پیش از انعقاد قرارداد بیمه به‌طور مشخص به کاربر اعلام می‌شود.",
        "واسطه بیمه — Rižova Ludmila که در لتونی در چارچوب وضعیت حقوقی و اختیارات اعطاشده از سوی بیمه‌گر، در زمینه توزیع محصولات بیمه‌ای فعالیت می‌کند.",
        "کاربر — شخص حقیقی، شخص حقوقی یا نماینده شخص حقوقی که از سایت یا کانال‌های ارتباطی از راه دور EURO Polis استفاده می‌کند.",
        "بیمه‌گذار — شخصی که قرارداد بیمه را با بیمه‌گر منعقد می‌کند.",
        "قرارداد بیمه — قراردادی میان بیمه‌گذار و بیمه‌گر که از جمله می‌تواند از راه دور منعقد شود، در صورتی که قانون و شرایط محصول بیمه‌ای مربوطه چنین امکانی را بدهد.",
        "بیمه‌نامه — سندی به‌صورت کاغذی یا الکترونیکی که انعقاد قرارداد بیمه را تأیید می‌کند.",
        "حق‌بیمه — مبلغی که بیمه‌گذار بابت پوشش بیمه‌ای باید پرداخت کند.",
        "داده‌های شخصی — هرگونه اطلاعات مربوط به شخص حقیقی شناسایی‌شده یا قابل شناسایی که مطابق GDPR و قوانین لتونی پردازش می‌شود."
      ]
    },
    {
      title: "§ 2. مقررات کلی",
      paragraphs: [
        "2.1. این مقررات برای استفاده از سایت EURO Polis و کانال‌های ارتباطی از راه دور جهت دریافت اطلاعات، مشاوره و کمک در انعقاد قراردادهای بیمه اعمال می‌شود.",
        "2.2. این مقررات با در نظر گرفتن موارد زیر تدوین شده است:",
        "",
        "• مقررات اتحادیه اروپا 2016/679 (GDPR)؛",
        "• دستورالعمل اتحادیه اروپا 2016/97 درباره توزیع بیمه (IDD)؛",
        "• قانون لتونی درباره توزیع بیمه و بیمه اتکایی؛",
        "• قانون لتونی درباره بیمه و بیمه اتکایی؛",
        "• قانون لتونی درباره حقوق مصرف‌کنندگان؛",
        "• مقررات اتحادیه اروپا درباره ارائه خدمات مالی از راه دور؛",
        "• مقررات eIDAS درباره شناسایی الکترونیکی و خدمات اعتماد. eIDAS مبنای حقوقی تراکنش‌های الکترونیکی امن و خدمات اعتماد در اتحادیه اروپا را ایجاد می‌کند.",
        "",
        "2.3. استفاده از سایت به معنای پذیرش این مقررات از سوی کاربر است، در صورتی که کاربر درخواست ارسال کند، فرم را تکمیل کند، مدارک ارائه دهد یا برای مشاوره مراجعه کند.",
        "2.4. قرارداد بیمه با سایت EURO Polis یا واسطه منعقد نمی‌شود، بلکه مستقیماً میان بیمه‌گذار و بیمه‌گر منعقد می‌شود.",
        "2.5. واسطه، بیمه‌گر نیست، تعهدی برای پرداخت خسارت بیمه‌ای نمی‌پذیرد و درباره شناسایی یک رویداد به‌عنوان حادثه بیمه‌ای تصمیم‌گیری نمی‌کند.",
        "2.6. اطلاعات سایت جنبه اطلاع‌رسانی دارد و پیشنهاد عمومی محسوب نمی‌شود، مگر اینکه صراحتاً خلاف آن ذکر شده باشد."
      ]
    },
    {
      title: "§ 3. وضعیت واسطه و افشای اطلاعات",
      paragraphs: [
        "3.1. پیش از انعقاد قرارداد بیمه، اطلاعات مربوط به بیمه‌گر، واسطه بیمه، نوع محصول بیمه‌ای، مبلغ حق‌بیمه، شرایط اساسی بیمه، استثنائات و نحوه طرح شکایت به کاربر ارائه می‌شود.",
        "3.2. واسطه در چارچوب اختیارات اعطاشده از سوی بیمه‌گر عمل می‌کند و می‌تواند در موارد زیر کمک کند:",
        "",
        "• دریافت درخواست‌ها؛",
        "• مشاوره به کاربر؛",
        "• انتقال داده‌ها به بیمه‌گر؛",
        "• صدور بیمه‌نامه؛",
        "• دریافت حق‌بیمه، در صورتی که توسط بیمه‌گر و قوانین قابل اعمال مجاز باشد.",
        "",
        "3.3. اگر واسطه از بیمه‌گر کارمزد دریافت کند، این موضوع به‌صورت خودکار به معنای افزایش حق‌بیمه برای کاربر نیست، مگر اینکه پیش از انعقاد قرارداد صراحتاً اعلام شده باشد.",
        "3.4. کاربر حق دارد اطلاعات تکمیلی درباره وضعیت واسطه، حدود اختیارات او و نحوه دریافت کارمزد درخواست کند."
      ]
    },
    {
      title: "§ 4. نحوه استفاده از سایت",
      paragraphs: [
        "4.1. سایت EURO Polis برای موارد زیر طراحی شده است:",
        "",
        "• دریافت اطلاعات درباره محصولات بیمه‌ای؛",
        "• ارسال درخواست‌ها؛",
        "• انتقال مدارک و اطلاعات؛",
        "• محاسبه یا برآورد اولیه هزینه بیمه؛",
        "• دریافت اسناد بیمه به‌صورت الکترونیکی.",
        "",
        "4.2. سایت ممکن است به‌صورت شبانه‌روزی در دسترس باشد، به‌جز زمان انجام کارهای فنی، اختلالات ارتباطی، به‌روزرسانی‌ها یا سایر شرایط خارج از کنترل EURO Polis.",
        "4.3. کاربر موظف است اطلاعات صحیح، کامل و به‌روز ارائه دهد.",
        "4.4. کاربر مسئول پیامدهای ارائه اطلاعات اشتباه، ناقص یا نادرست است؛ از جمله خطر رد انعقاد قرارداد، تغییر شرایط یا رد پرداخت خسارت توسط بیمه‌گر.",
        "4.5. کاربر حق ندارد از سایت برای ارسال مدارک جعلی، اطلاعات نادرست، کد مخرب یا اقداماتی که حقوق اشخاص ثالث را نقض می‌کند استفاده کند."
      ]
    },
    {
      title: "§ 5. انعقاد قرارداد بیمه از راه دور",
      paragraphs: [
        "5.1. برای صدور بیمه، کاربر اطلاعات لازم برای محصول مشخص را ارائه می‌دهد: اطلاعات بیمه‌گذار، وسیله نقلیه، دوره بیمه، قلمرو پوشش، مسیر، اسناد ثبت و سایر اطلاعات موردنیاز.",
        "5.2. پیش از انعقاد قرارداد، کاربر اطلاعات زیر را دریافت می‌کند:",
        "",
        "• بیمه‌گر؛",
        "• واسطه؛",
        "• محصول بیمه‌ای؛",
        "• قلمرو پوشش؛",
        "• مدت بیمه؛",
        "• حق‌بیمه؛",
        "• استثنائات و محدودیت‌ها؛",
        "• نحوه پرداخت؛",
        "• نحوه دریافت بیمه‌نامه؛",
        "• نحوه تغییر یا خاتمه قرارداد؛",
        "• نحوه ثبت شکایت.",
        "",
        "5.3. قرارداد بیمه از زمانی منعقدشده تلقی می‌شود که در شرایط بیمه‌گر تعیین شده است: تأیید رضایت کاربر، پذیرش شرایط بیمه، پرداخت حق‌بیمه و صدور بیمه‌نامه، در صورتی که این اقدامات لازم باشند.",
        "5.4. بیمه‌نامه الکترونیکی یا سند دیگری که انعقاد قرارداد بیمه را تأیید می‌کند، می‌تواند از طریق ایمیل، پیام‌رسان، حساب کاربری یا کانال توافق‌شده دیگر برای کاربر ارسال شود.",
        "5.5. کاربر موظف است بلافاصله پس از دریافت بیمه‌نامه، اطلاعات آن را بررسی کند. در صورت مشاهده خطا، کاربر باید فوراً واسطه یا بیمه‌گر را مطلع کند."
      ]
    },
    {
      title: "§ 6. پرداخت",
      paragraphs: [
        "6.1. پرداخت حق‌بیمه می‌تواند از روش‌های زیر انجام شود:",
        "",
        "• حواله بانکی؛",
        "• کارت بانکی از طریق ارائه‌دهنده پرداخت؛",
        "• روش دیگری که در سایت اعلام شده یا با کاربر توافق شده باشد.",
        "",
        "6.2. اگر واسطه حق‌بیمه را دریافت کند، در چارچوب اختیارات اعطاشده از سوی بیمه‌گر عمل می‌کند.",
        "6.3. هنگام پرداخت با کارت بانکی، اطلاعات کارت در صفحه امن بانک یا ارائه‌دهنده پرداخت وارد می‌شود. EURO Polis و واسطه اطلاعات کامل کارت بانکی را ذخیره نمی‌کنند.",
        "6.4. هنگام پرداخت از طریق حواله بانکی، کاربر موظف است از مشخصات پرداخت ارائه‌شده استفاده کند و توضیحات پرداخت را درست وارد کند.",
        "6.5. زمان پرداخت، زمان واریز وجه به حساب دریافت‌کننده محسوب می‌شود، مگر اینکه در شرایط بیمه‌گر خلاف آن پیش‌بینی شده باشد.",
        "6.6. بازپرداخت حق‌بیمه یا بخشی از آن در موارد و به ترتیبی انجام می‌شود که در قرارداد بیمه، قواعد بیمه‌گر و قوانین قابل اعمال پیش‌بینی شده است."
      ]
    },
    {
      title: "§ 7. حق انصراف و ویژگی‌های بیمه از راه دور",
      paragraphs: [
        "7.1. از آنجا که بیمه یک خدمت مالی است، حق کاربر برای انصراف از قرارداد به نوع محصول بیمه‌ای، مدت قرارداد، زمان شروع پوشش بیمه‌ای و قوانین قابل اعمال بستگی دارد.",
        "7.2. اگر حق انصراف طبق قانون یا شرایط بیمه‌گر پیش‌بینی شده باشد، کاربر پیش از انعقاد قرارداد از نحوه، مهلت‌ها و پیامدهای انصراف مطلع می‌شود.",
        "7.3. برای قراردادهای بیمه کوتاه‌مدت و قراردادهایی که اجرای آن‌ها با رضایت کاربر آغاز شده است، حق انصراف ممکن است محدود باشد.",
        "7.4. واسطه درباره بازپرداخت حق‌بیمه به‌طور مستقل تصمیم‌گیری نمی‌کند، اگر این تصمیم در صلاحیت بیمه‌گر باشد."
      ]
    },
    {
      title: "§ 8. داده‌های شخصی",
      paragraphs: [
        "8.1. پردازش داده‌های شخصی مطابق GDPR و قوانین لتونی درباره حفاظت از داده‌های شخصی انجام می‌شود.",
        "8.2. در چارچوب سایت EURO Polis، داده‌ها ممکن است برای اهداف زیر پردازش شوند:",
        "",
        "• بررسی درخواست؛",
        "• انتخاب محصول بیمه‌ای؛",
        "• صدور قرارداد بیمه؛",
        "• انتقال داده‌ها به بیمه‌گر؛",
        "• پردازش پرداخت‌ها؛",
        "• ارتباط با کاربر؛",
        "• انجام تعهدات قانونی؛",
        "• حفاظت از حقوق و منافع قانونی؛",
        "• تأمین امنیت سایت.",
        "",
        "8.3. مبانی حقوقی پردازش می‌تواند شامل موارد زیر باشد:",
        "",
        "• اجرای قرارداد یا اقدامات پیش از انعقاد قرارداد؛",
        "• انجام تعهد قانونی؛",
        "• منافع مشروع؛",
        "• رضایت کاربر — برای مثال برای پیام‌های بازاریابی یا کوکی‌های غیرضروری.",
        "",
        "8.4. داده‌ها ممکن است به موارد زیر منتقل شوند:",
        "",
        "• بیمه‌گر؛",
        "• ارائه‌دهندگان پرداخت؛",
        "• پیمانکاران IT؛",
        "• ارائه‌دهندگان هاستینگ؛",
        "• مراجع دولتی، در صورت الزام قانونی.",
        "",
        "8.5. کاربر حقوق پیش‌بینی‌شده در GDPR را دارد: دسترسی به داده‌ها، اصلاح، حذف، محدود کردن پردازش، اعتراض به پردازش، انتقال‌پذیری داده‌ها و لغو رضایت.",
        "8.6. شکایت درباره پردازش داده‌های شخصی می‌تواند به Datu valsts inspekcija ارسال شود. اطلاعات تماس این نهاد در وب‌سایت رسمی آن منتشر شده است."
      ]
    },
    {
      title: "§ 9. کوکی‌ها و داده‌های فنی",
      paragraphs: [
        "9.1. سایت ممکن است از کوکی‌ها و فناوری‌های مشابه برای عملکرد سایت، ذخیره زبان، امنیت، تحلیل و بازاریابی استفاده کند.",
        "9.2. کوکی‌های کاملاً ضروری بدون رضایت استفاده می‌شوند، زیرا برای عملکرد سایت لازم هستند.",
        "9.3. کوکی‌های تحلیلی و بازاریابی فقط پس از دریافت رضایت کاربر استفاده می‌شوند.",
        "9.4. نحوه دقیق استفاده از کوکی‌ها در سیاست جداگانه کوکی EURO Polis توضیح داده می‌شود."
      ]
    },
    {
      title: "§ 10. درخواست‌ها و شکایات",
      paragraphs: [
        "10.1. کاربر می‌تواند درخواست یا شکایت خود را ارسال کند:",
        "",
        "• از طریق ایمیل: ludmila.rizova@ergo.lv",
        ";",
        "• از طریق تلفن: +371 22355307؛",
        "• از طریق فرم تماس در سایت؛",
        "• مستقیماً به بیمه‌گر ERGO Insurance SE Latvijas filiāle.",
        "",
        "10.2. بهتر است درخواست شامل موارد زیر باشد:",
        "",
        "• نام یا عنوان کاربر؛",
        "• اطلاعات تماس؛",
        "• شماره بیمه‌نامه یا درخواست، در صورت وجود؛",
        "• شرح وضعیت؛",
        "• خواسته کاربر؛",
        "• مدارک پیوست، در صورت وجود.",
        "",
        "10.3. اگر درخواست مربوط به پرداخت خسارت، شناسایی حادثه بیمه‌ای، رد پرداخت یا تغییر قرارداد بیمه باشد، ممکن است به بیمه‌گر منتقل شود یا نحوه مراجعه به بیمه‌گر به کاربر اعلام شود.",
        "10.4. اگر کاربر با پاسخ موافق نباشد، حق دارد به بیمه‌گر، Latvijas Banka به‌عنوان مرجع صالح نظارت مالی، Datu valsts inspekcija در امور داده‌های شخصی یا دادگاه مراجعه کند."
      ]
    },
    {
      title: "§ 11. مسئولیت",
      paragraphs: [
        "11.1. واسطه مسئول انجام صحیح اقدامات در حدود اختیارات خود است.",
        "11.2. واسطه مسئول موارد زیر نیست:",
        "",
        "• اطلاعات نادرست ارائه‌شده توسط کاربر؛",
        "• خطاهای اسناد که ناشی از اطلاعات کاربر باشد؛",
        "• تصمیمات بیمه‌گر درباره انعقاد قرارداد، تغییر شرایط یا پرداخت خسارت؛",
        "• اختلالات بانک‌ها، ارائه‌دهندگان پرداخت، اپراتورهای ارتباطی و سایر اشخاص ثالث؛",
        "• دسترسی غیرمجاز به ایمیل، پیام‌رسان‌ها یا دستگاه‌های کاربر.",
        "",
        "11.3. بیمه‌گر طبق شرایط قرارداد و قوانین قابل اعمال، مسئول تعهدات ناشی از قرارداد بیمه است."
      ]
    },
    {
      title: "§ 12. مالکیت فکری",
      paragraphs: [
        "12.1. مطالب سایت EURO Polis، از جمله متن‌ها، طراحی، تصاویر، ساختار سایت، عناصر رابط کاربری و کد نرم‌افزاری، تحت حمایت قوانین مالکیت فکری هستند.",
        "12.2. استفاده از مطالب سایت فقط برای آشنایی شخصی و دریافت خدمات بیمه‌ای مجاز است.",
        "12.3. کپی، انتشار یا استفاده تجاری از مطالب سایت فقط با رضایت قبلی صاحب حق مجاز است، مگر اینکه قانون خلاف آن را مجاز دانسته باشد."
      ]
    },
    {
      title: "§ 13. تغییر مقررات",
      paragraphs: [
        "13.1. EURO Polis حق دارد این مقررات را در صورت تغییر قوانین، محصولات بیمه‌ای، قابلیت‌های فنی سایت، روش‌های پرداخت یا نحوه تعامل با کاربران به‌روزرسانی کند.",
        "13.2. نسخه جدید در سایت منتشر می‌شود و از تاریخ انتشار اعمال می‌گردد، مگر اینکه تاریخ دیگری ذکر شده باشد.",
        "13.3. تغییرات اثر عطف به ماسبق ندارند و بر قراردادهای بیمه‌ای که قبلاً منعقد شده‌اند تأثیر نمی‌گذارند، مگر اینکه قانون یا شرایط قرارداد خلاف آن را پیش‌بینی کند."
      ]
    },
    {
      title: "§ 14. قانون حاکم و حل اختلاف",
      paragraphs: [
        "14.1. این مقررات تابع قانون جمهوری لتونی و قوانین قابل اعمال اتحادیه اروپا است.",
        "14.2. اختلافات از طریق مذاکره و بررسی درخواست کاربر حل‌وفصل می‌شود.",
        "14.3. در صورت عدم امکان حل اختلاف، کاربر حق دارد به مراجع صالح لتونی یا دادگاه جمهوری لتونی مراجعه کند."
      ]
    },
    {
      title: "§ 15. مقررات پایانی",
      paragraphs: [
        "15.1. این مقررات در سایت EURO Polis به‌صورت آزاد در دسترس قرار می‌گیرد.",
        "15.2. کاربر می‌تواند متن مقررات را ذخیره، چاپ یا بازتولید کند.",
        "15.3. اگر یکی از مفاد مقررات نامعتبر شناخته شود، این موضوع بر اعتبار سایر مفاد تأثیر نمی‌گذارد.",
        "15.4. اطلاعات رسمی:",
        "",
        "بیمه‌گر: ERGO Insurance SE Latvijas filiāle",
        "شماره ثبت: 40103599913",
        "نشانی: Skanstes iela 50, Rīga, LV-1013, Latvia",
        "",
        "واسطه بیمه: Rižova Ludmila",
        "تلفن: +371 22355307",
        "ایمیل: ludmila.rizova@ergo.lv",
        "",
        "کشور فعالیت: لتونی",
        "سایت: EURO Polis"
      ]
    }
  ]
};

const mn: RulesDictionary = {
  pageTitle: "ЖУРАМ",
  subtitle: "EURO Polis сайтаар дамжуулан цахим үйлчилгээ үзүүлэх болон даатгалын гэрээг зайнаас байгуулахад дэмжлэг үзүүлэх журам",
  updatedAt: "05.05.2026",
  sections: [
    { title: "Даатгалын компани болон даатгалын зуучлагчийн мэдээлэл", paragraphs: [
      "Даатгалын үйлчилгээг дараах даатгалын компанийн оролцоотой үзүүлнэ:","",
      "ERGO Insurance SE Latvijas filiāle","Бүртгэлийн дугаар: 40103599913","Хууль ёсны хаяг: Skanstes iela 50, Rīga, LV-1013, Латви","",
      "Даатгалын зуучлагчийн мэдээлэл:","",
      "Rižova Ludmila","Утас: +371 22355307","И-мэйл: ludmila.rizova@ergo.lv","",
      "Үйл ажиллагаа явуулж буй улс: Латви","Даатгалын үйл ажиллагааны төрөл: хилийн даатгалын гэрээнүүд, үүнд бусад улсын нутаг дэвсгэрт нэвтрэхэд зориулсан тээврийн хэрэгслийн эзэмшигчийн иргэний хариуцлагын даатгал багтана.","",
      "Даатгагчаас ийм эрх олгосон бөгөөд холбогдох хууль тогтоомж болон даатгагчтай байгуулсан гэрээний нөхцөлд нийцэж байвал зуучлагч нь харилцагчаас даатгалын хураамж хүлээн авах эрхтэй."
    ]},
    { title: "§ 1. Тодорхойлолт", paragraphs: [
      "Сайт — EURO Polis интернет сайт бөгөөд хэрэглэгч даатгалын бүтээгдэхүүний мэдээлэл авах, хүсэлт илгээх, мэдээлэл болон баримт бичиг дамжуулах, зөвлөгөө авах, даатгалын гэрээг зайнаас байгуулахад дэмжлэг авах боломжтой.",
      "Даатгагч — ERGO Insurance SE Latvijas filiāle эсвэл даатгалын гэрээ байгуулахаас өмнө хэрэглэгчид шууд заасан өөр даатгагч.",
      "Даатгалын зуучлагч — Rižova Ludmila, Латвид даатгалын бүтээгдэхүүн түгээх үйл ажиллагааг даатгагчаас олгосон эрх зүйн статус болон бүрэн эрхийн хүрээнд эрхэлдэг.",
      "Хэрэглэгч — EURO Polis сайт эсвэл зайнаас харилцах сувгийг ашиглаж буй хувь хүн, хуулийн этгээд эсвэл хуулийн этгээдийн төлөөлөгч.",
      "Даатгуулагч — даатгагчтай даатгалын гэрээ байгуулж буй этгээд.",
      "Даатгалын гэрээ — даатгуулагч болон даатгагчийн хооронд байгуулагдах гэрээ бөгөөд хууль тогтоомж болон тухайн даатгалын бүтээгдэхүүний нөхцөл зөвшөөрвөл зайнаас байгуулж болно.",
      "Полис — даатгалын гэрээ байгуулагдсаныг баталгаажуулах цаасан эсвэл цахим баримт бичиг.",
      "Даатгалын хураамж — даатгалын хамгаалалтын төлөө даатгуулагчийн төлөх дүн.",
      "Хувийн мэдээлэл — GDPR болон Латвийн хууль тогтоомжийн дагуу боловсруулагдах, танигдсан эсвэл танигдах боломжтой хувь хүнд хамаарах аливаа мэдээлэл."
    ]},
    { title: "§ 2. Ерөнхий заалт", paragraphs: [
      "2.1. Энэхүү Журам нь EURO Polis сайтыг болон зайнаас харилцах сувгуудыг мэдээлэл, зөвлөгөө авах, даатгалын гэрээ байгуулахад дэмжлэг авах зорилгоор ашиглахад хамаарна.",
      "2.2. Журмыг дараах эрх зүйн актуудыг харгалзан боловсруулсан:","","• ЕХ-ны 2016/679 тоот журам (GDPR);","• Даатгал түгээх тухай ЕХ-ны 2016/97 дугаар директив (IDD);","• Латвийн даатгал болон давхар даатгал түгээх тухай хууль;","• Латвийн даатгал болон давхар даатгалын тухай хууль;","• Латвийн хэрэглэгчийн эрхийн тухай хууль;","• санхүүгийн үйлчилгээг зайнаас үзүүлэх тухай ЕХ-ны хууль тогтоомж;","• цахим танилт болон итгэлцлийн үйлчилгээний тухай eIDAS журам. eIDAS нь ЕХ-д аюулгүй цахим гүйлгээ болон итгэлцлийн үйлчилгээний эрх зүйн үндсийг бүрдүүлдэг.","",
      "2.3. Хэрэглэгч хүсэлт илгээх, маягт бөглөх, баримт бичиг дамжуулах эсвэл зөвлөгөө авахаар хандсан тохиолдолд сайтыг ашиглаж байгаа нь энэхүү Журмыг зөвшөөрсөнд тооцогдоно.",
      "2.4. Даатгалын гэрээ нь EURO Polis сайттай эсвэл зуучлагчтай бус, харин даатгуулагч болон даатгагчийн хооронд шууд байгуулагдана.",
      "2.5. Зуучлагч нь даатгагч биш, даатгалын нөхөн төлбөр төлөх үүрэг хүлээхгүй бөгөөд тухайн үйл явдлыг даатгалын тохиолдол гэж хүлээн зөвшөөрөх эсэх талаар шийдвэр гаргахгүй.",
      "2.6. Сайт дээрх мэдээлэл нь лавлагааны шинжтэй бөгөөд өөрөөр шууд заагаагүй бол нийтэд чиглэсэн оферт биш."
    ]},
    { title: "§ 3. Зуучлагчийн статус ба мэдээлэл ил тод болгох", paragraphs: [
      "3.1. Даатгалын гэрээ байгуулахаас өмнө хэрэглэгчид даатгагч, даатгалын зуучлагч, даатгалын бүтээгдэхүүний төрөл, даатгалын хураамжийн хэмжээ, даатгалын үндсэн нөхцөл, хасалт болон гомдол гаргах журмын талаар мэдээлэл өгнө.",
      "3.2. Зуучлагч нь даатгагчаас олгосон бүрэн эрхийн хүрээнд ажиллаж, дараахад дэмжлэг үзүүлж болно:","","• хүсэлт хүлээн авах;","• хэрэглэгчид зөвлөгөө өгөх;","• мэдээллийг даатгагчид дамжуулах;","• даатгалын полис бүрдүүлэх;","• даатгагч болон холбогдох хууль тогтоомж зөвшөөрсөн бол даатгалын хураамж хүлээн авах.","",
      "3.3. Зуучлагч даатгагчаас шимтгэл авдаг нь гэрээ байгуулахаас өмнө өөрөөр шууд заагаагүй бол хэрэглэгчийн даатгалын хураамж автоматаар нэмэгдэнэ гэсэн үг биш.",
      "3.4. Хэрэглэгч зуучлагчийн статус, бүрэн эрхийн шинж чанар болон урамшуулал авах журмын талаар нэмэлт мэдээлэл хүсэх эрхтэй."
    ]},
    { title: "§ 4. Сайтыг ашиглах журам", paragraphs: [
      "4.1. EURO Polis сайт нь дараах зориулалттай:","","• даатгалын бүтээгдэхүүний мэдээлэл авах;","• хүсэлт илгээх;","• баримт бичиг болон мэдээлэл дамжуулах;","• даатгалын үнийг тооцоолох эсвэл урьдчилан үнэлэх;","• даатгалын баримт бичгийг цахим хэлбэрээр авах.","",
      "4.2. Техникийн ажил, холбооны доголдол, шинэчлэлт эсвэл EURO Polis-оос үл хамаарах бусад нөхцөлөөс бусад үед сайт 24 цагаар ашиглах боломжтой байж болно.",
      "4.3. Хэрэглэгч үнэн зөв, бүрэн, шинэчилсэн мэдээлэл өгөх үүрэгтэй.",
      "4.4. Алдаатай, дутуу эсвэл худал мэдээлэл дамжуулснаас үүсэх үр дагавар, үүнд даатгагч гэрээ байгуулахаас татгалзах, нөхцөл өөрчлөх эсвэл нөхөн төлбөрөөс татгалзах эрсдэл багтах бөгөөд үүнийг хэрэглэгч хариуцна.",
      "4.5. Хэрэглэгч хуурамч баримт бичиг, худал мэдээлэл, хортой код дамжуулах эсвэл гуравдагч этгээдийн эрхийг зөрчих үйлдэлд сайтыг ашиглахыг хориглоно."
    ]},
    { title: "§ 5. Даатгалын гэрээг зайнаас байгуулах", paragraphs: [
      "5.1. Даатгал бүрдүүлэхийн тулд хэрэглэгч тухайн бүтээгдэхүүнд шаардлагатай мэдээллийг өгнө: даатгуулагчийн мэдээлэл, тээврийн хэрэгслийн мэдээлэл, даатгалын хугацаа, хамрах нутаг дэвсгэр, маршрут, бүртгэлийн баримт бичиг болон бусад мэдээлэл.",
      "5.2. Гэрээ байгуулахаас өмнө хэрэглэгч дараах мэдээллийг авна:","","• даатгагч;","• зуучлагч;","• даатгалын бүтээгдэхүүн;","• хамрах нутаг дэвсгэр;","• даатгалын хугацаа;","• даатгалын хураамж;","• хасалт болон хязгаарлалт;","• төлбөрийн журам;","• полис авах журам;","• гэрээг өөрчлөх эсвэл цуцлах журам;","• гомдол гаргах журам.","",
      "5.3. Даатгагчийн нөхцөлөөр тодорхойлсон мөчөөс даатгалын гэрээ байгуулагдсанд тооцогдоно: хэрэглэгчийн зөвшөөрлийг баталгаажуулах, даатгалын нөхцөлийг хүлээн зөвшөөрөх, хураамж төлөх болон полис гаргах зэрэг шаардлагатай үйлдлүүд хийгдсэн үед.",
      "5.4. Даатгалын гэрээ байгуулагдсаныг баталгаажуулах цахим полис эсвэл бусад баримт бичгийг хэрэглэгчид и-мэйл, мессенжер, хувийн кабинет эсвэл тохиролцсон өөр сувгаар илгээж болно.",
      "5.5. Хэрэглэгч полис хүлээн авмагц мэдээллийг шалгах үүрэгтэй. Алдаа илэрвэл хэрэглэгч зуучлагч эсвэл даатгагчид нэн даруй мэдэгдэх ёстой."
    ]},
    { title: "§ 6. Төлбөр", paragraphs: [
      "6.1. Даатгалын хураамжийг дараах байдлаар төлж болно:","","• банкны шилжүүлгээр;","• төлбөрийн үйлчилгээ үзүүлэгчээр дамжуулан банкны картаар;","• сайт дээр заасан эсвэл хэрэглэгчтэй тохиролцсон өөр аргаар.","",
      "6.2. Хэрэв зуучлагч даатгалын хураамж хүлээн авбал даатгагчаас олгосон бүрэн эрхийн хүрээнд ажиллана.",
      "6.3. Банкны картаар төлөх үед картын мэдээллийг банк эсвэл төлбөрийн үйлчилгээ үзүүлэгчийн хамгаалагдсан хуудсанд оруулна. EURO Polis болон зуучлагч банкны картын бүрэн мэдээллийг хадгалахгүй.",
      "6.4. Банкны шилжүүлгээр төлөх үед хэрэглэгч өгсөн реквизитийг ашиглаж, төлбөрийн зориулалтыг зөв бичих үүрэгтэй.",
      "6.5. Даатгагчийн нөхцөлд өөрөөр заагаагүй бол төлбөр хүлээн авагчийн дансанд мөнгө орсон мөчийг төлбөр хийгдсэнд тооцно.",
      "6.6. Даатгалын хураамж эсвэл түүний хэсгийг буцаах нь даатгалын гэрээ, даатгагчийн дүрэм болон холбогдох хууль тогтоомжид заасан тохиолдол, журмаар хийгдэнэ."
    ]},
    { title: "§ 7. Татгалзах эрх ба зайны даатгалын онцлог", paragraphs: [
      "7.1. Даатгал нь санхүүгийн үйлчилгээ тул хэрэглэгчийн гэрээнээс татгалзах эрх нь даатгалын бүтээгдэхүүний төрөл, гэрээний хугацаа, даатгалын хамгаалалт эхэлсэн мөч болон холбогдох хууль тогтоомжоос хамаарна.",
      "7.2. Хууль эсвэл даатгагчийн нөхцөлөөр татгалзах эрх олгогдсон бол гэрээ байгуулахаас өмнө хэрэглэгчид татгалзах журам, хугацаа, үр дагаврын талаар мэдээлнэ.",
      "7.3. Богино хугацааны даатгалын гэрээ болон хэрэглэгчийн зөвшөөрлөөр хэрэгжилт нь эхэлсэн гэрээнд татгалзах эрх хязгаарлагдаж болно.",
      "7.4. Даатгалын хураамж буцаах шийдвэр нь даатгагчийн бүрэн эрхэд хамаарах бол зуучлагч бие даан ийм шийдвэр гаргахгүй."
    ]},
    { title: "§ 8. Хувийн мэдээлэл", paragraphs: [
      "8.1. Хувийн мэдээллийг GDPR болон Латвийн хувийн мэдээлэл хамгаалах хууль тогтоомжийн дагуу боловсруулна.",
      "8.2. EURO Polis сайтаар дамжуулан мэдээллийг дараах зорилгоор боловсруулж болно:","","• хүсэлт боловсруулах;","• даатгалын бүтээгдэхүүн сонгох;","• даатгалын гэрээ бүрдүүлэх;","• мэдээллийг даатгагчид дамжуулах;","• төлбөр боловсруулах;","• хэрэглэгчтэй харилцах;","• хууль ёсны үүрэг биелүүлэх;","• эрх болон хууль ёсны ашиг сонирхлыг хамгаалах;","• сайтын аюулгүй байдлыг хангах.","",
      "8.3. Боловсруулах эрх зүйн үндэс нь дараах байж болно:","","• гэрээний хэрэгжилт эсвэл гэрээ байгуулахаас өмнөх үйлдэл;","• хууль ёсны үүрэг биелүүлэх;","• хууль ёсны ашиг сонирхол;","• хэрэглэгчийн зөвшөөрөл — жишээ нь маркетингийн мэдээлэл эсвэл шаардлагагүй cookie-д.","",
      "8.4. Мэдээллийг дараах этгээдэд дамжуулж болно:","","• даатгагч;","• төлбөрийн үйлчилгээ үзүүлэгч;","• IT гүйцэтгэгч;","• хостинг үйлчилгээ үзүүлэгч;","• хуульд шаардсан тохиолдолд төрийн байгууллага.","",
      "8.5. Хэрэглэгч GDPR-д заасан эрхтэй: мэдээлэлд хандах, засварлуулах, устгуулах, боловсруулалтыг хязгаарлуулах, боловсруулалтад эсэргүүцэх, мэдээлэл зөөвөрлөх болон зөвшөөрлөө цуцлах.",
      "8.6. Хувийн мэдээлэл боловсруулахтай холбоотой гомдлыг Datu valsts inspekcija-д гаргаж болно. Тус байгууллагын холбоо барих мэдээлэл албан ёсны сайт дээр нийтлэгдсэн байна."
    ]},
    { title: "§ 9. Cookie болон техникийн мэдээлэл", paragraphs: [
      "9.1. Сайт нь сайтын ажиллагаа, хэлний тохиргоо хадгалах, аюулгүй байдал, аналитик болон маркетингийн зорилгоор cookie болон ижил төстэй технологи ашиглаж болно.",
      "9.2. Сайтын ажиллагаанд зайлшгүй шаардлагатай тул хатуу шаардлагатай cookie-г зөвшөөрөлгүйгээр ашиглана.",
      "9.3. Аналитик болон маркетингийн cookie-г зөвхөн хэрэглэгчийн зөвшөөрлийн дараа ашиглана.",
      "9.4. Cookie ашиглах дэлгэрэнгүй журам нь EURO Polis-ийн тусдаа Cookie бодлогод заагдана."
    ]},
    { title: "§ 10. Хүсэлт ба гомдол", paragraphs: [
      "10.1. Хэрэглэгч хүсэлт эсвэл гомдлыг дараах сувгаар илгээх эрхтэй:","","• и-мэйлээр: ludmila.rizova@ergo.lv;","• утсаар: +371 22355307;","• сайтын буцах холбооны маягтаар;","• ERGO Insurance SE Latvijas filiāle даатгагчид шууд.","",
      "10.2. Хүсэлтэд дараах мэдээлэл байвал зохимжтой:","","• хэрэглэгчийн нэр эсвэл байгууллагын нэр;","• холбоо барих мэдээлэл;","• байгаа бол полис эсвэл хүсэлтийн дугаар;","• нөхцөл байдлын тайлбар;","• хэрэглэгчийн шаардлага;","• байгаа бол хавсаргасан баримт бичиг.","",
      "10.3. Хэрэв хүсэлт нь даатгалын нөхөн төлбөр, даатгалын тохиолдлыг хүлээн зөвшөөрөх, төлбөрөөс татгалзах эсвэл даатгалын гэрээг өөрчлөхтэй холбоотой бол даатгагчид дамжуулж болно, эсвэл хэрэглэгчид даатгагчид хандах журмыг мэдээлнэ.",
      "10.4. Хэрэглэгч хариутай санал нийлэхгүй бол даатгагчид, санхүүгийн хяналтын эрх бүхий байгууллага болох Latvijas Banka-д, хувийн мэдээллийн асуудлаар Datu valsts inspekcija-д эсвэл шүүхэд хандах эрхтэй."
    ]},
    { title: "§ 11. Хариуцлага", paragraphs: [
      "11.1. Зуучлагч нь өөрийн бүрэн эрхийн хүрээнд үйлдлээ зохих ёсоор гүйцэтгэх үүрэгтэй.",
      "11.2. Зуучлагч дараах зүйлд хариуцлага хүлээхгүй:","","• хэрэглэгчийн өгсөн худал эсвэл буруу мэдээлэл;","• хэрэглэгчийн өгөгдлөөс үүссэн баримт бичгийн алдаа;","• гэрээ байгуулах, нөхцөл өөрчлөх эсвэл нөхөн төлбөрийн талаар даатгагчийн гаргасан шийдвэр;","• банк, төлбөрийн үйлчилгээ үзүүлэгч, холбооны оператор болон бусад гуравдагч этгээдийн доголдол;","• хэрэглэгчийн и-мэйл, мессенжер эсвэл төхөөрөмжид зөвшөөрөлгүй нэвтэрсэн явдал.","",
      "11.3. Даатгагч нь даатгалын гэрээний нөхцөл болон холбогдох хууль тогтоомжийн хүрээнд даатгалын гэрээгээр хариуцлага хүлээнэ."
    ]},
    { title: "§ 12. Оюуны өмч", paragraphs: [
      "12.1. EURO Polis сайтын материал, үүнд текст, дизайн, зураг, сайтын бүтэц, интерфэйсийн элемент болон программын код багтах бөгөөд оюуны өмчийн хууль тогтоомжоор хамгаалагдана.",
      "12.2. Сайтын материалыг зөвхөн хувийн танилцах болон даатгалын үйлчилгээ авах зорилгоор ашиглаж болно.",
      "12.3. Сайтын материалыг хуулбарлах, түгээх эсвэл арилжааны зорилгоор ашиглах нь хуульд өөрөөр зөвшөөрөөгүй бол эрх эзэмшигчийн урьдчилсан зөвшөөрлөөр хийгдэнэ."
    ]},
    { title: "§ 13. Журамд өөрчлөлт оруулах", paragraphs: [
      "13.1. EURO Polis нь хууль тогтоомж, даатгалын бүтээгдэхүүн, сайтын техникийн функц, төлбөрийн арга эсвэл хэрэглэгчтэй харилцах журмын өөрчлөлттэй холбоотойгоор энэхүү Журмыг шинэчлэх эрхтэй.",
      "13.2. Шинэчилсэн найруулгыг сайт дээр нийтлэх бөгөөд өөр хугацаа заагаагүй бол нийтэлсэн өдрөөс хэрэглэнэ.",
      "13.3. Өөрчлөлт нь буцаан үйлчлэхгүй бөгөөд хууль эсвэл гэрээний нөхцөлд өөрөөр заагаагүй бол өмнө байгуулагдсан даатгалын гэрээнд нөлөөлөхгүй."
    ]},
    { title: "§ 14. Хэрэглэх хууль ба маргаан шийдвэрлэх", paragraphs: [
      "14.1. Энэхүү Журамд Латвийн Бүгд Найрамдах Улсын хууль болон холбогдох Европын Холбооны эрх зүй хэрэглэгдэнэ.",
      "14.2. Маргааныг хэлэлцээ хийх болон хэрэглэгчийн хүсэлтийг авч үзэх замаар шийдвэрлэнэ.",
      "14.3. Маргааныг шийдвэрлэх боломжгүй бол хэрэглэгч Латвийн эрх бүхий байгууллага эсвэл Латвийн Бүгд Найрамдах Улсын шүүхэд хандах эрхтэй."
    ]},
    { title: "§ 15. Төгсгөлийн заалт", paragraphs: [
      "15.1. Энэхүү Журам нь EURO Polis сайт дээр чөлөөтэй нэвтрэх боломжтойгоор байрлана.",
      "15.2. Хэрэглэгч Журмын текстийг хадгалах, хэвлэх эсвэл хуулбарлах боломжтой.",
      "15.3. Журмын аль нэг заалт хүчингүйд тооцогдсон ч бусад заалтын хүчинтэй байдалд нөлөөлөхгүй.",
      "15.4. Албан мэдээлэл:","","Даатгагч: ERGO Insurance SE Latvijas filiāle","Бүртгэлийн дугаар: 40103599913","Хаяг: Skanstes iela 50, Rīga, LV-1013, Латви","","Даатгалын зуучлагч: Rižova Ludmila","Утас: +371 22355307","И-мэйл: ludmila.rizova@ergo.lv","","Үйл ажиллагааны улс: Латви","Сайт: EURO Polis"
    ]},
  ],
};

const hy: RulesDictionary = {
  pageTitle: "ԿԱՆՈՆԱԿԱՐԳ",
  subtitle: "էլեկտրոնային ծառայությունների մատուցման և EURO Polis կայքի միջոցով հեռավար ապահովագրության պայմանագրերի կնքմանը աջակցելու վերաբերյալ",
  updatedAt: "05.05.2026",
  sections: [
    {
      title: "Տեղեկություններ ապահովագրական ընկերության և ապահովագրական միջնորդի մասին",
      paragraphs: [
        "Ապահովագրական ծառայությունները տրամադրվում են հետևյալ ապահովագրական ընկերության մասնակցությամբ՝",
        "",
        "ERGO Insurance SE Latvijas filiāle",
        "Գրանցման համար՝ 40103599913",
        "Իրավաբանական հասցե՝ Skanstes iela 50, Rīga, LV-1013, Լատվիա",
        "",
        "Ապահովագրական միջնորդի տվյալներ՝",
        "",
        "Rižova Ludmila",
        "Հեռախոս՝ +371 22355307",
        "Էլ. փոստ՝ ludmila.rizova@ergo.lv",
        "",
        "Գործունեության երկիր՝ Լատվիա",
        "Ապահովագրական գործունեության տեսակ՝ սահմանային ապահովագրության պայմանագրեր, ներառյալ տրանսպորտային միջոցների սեփականատերերի քաղաքացիական պատասխանատվության ապահովագրությունը՝ այլ պետությունների տարածք մուտք գործելու համար։",
        "",
        "Միջնորդն իրավունք ունի հաճախորդից ընդունել ապահովագրավճարը, եթե այդ իրավունքը նրան տրամադրված է ապահովագրողի կողմից և համապատասխանում է կիրառելի օրենսդրությանը և ապահովագրողի հետ պայմանագրի պայմաններին։",
      ],
    },
    {
      title: "§ 1. Սահմանումներ",
      paragraphs: [
        "Կայք՝ EURO Polis ինտերնետային կայքը, որի միջոցով օգտատերը կարող է ստանալ տեղեկատվություն ապահովագրական ապրանքների մասին, ուղարկել հայտ, փոխանցել տվյալներ և փաստաթղթեր, ստանալ խորհրդատվություն և աջակցություն հեռավար ապահովագրության պայմանագիր կնքելու հարցում։",
        "Ապահովագրող՝ ERGO Insurance SE Latvijas filiāle կամ այլ ապահովագրող, որը օգտատիրոջը հստակ նշվում է մինչև ապահովագրության պայմանագրի կնքումը։",
        "Ապահովագրական միջնորդ՝ Rižova Ludmila, որն իրականացնում է ապահովագրական ապրանքների տարածման գործունեություն Լատվիայում՝ ապահովագրողի կողմից տրամադրված իրավական կարգավիճակի և լիազորությունների շրջանակում։",
        "Օգտատեր՝ ֆիզիկական անձ, իրավաբանական անձ կամ իրավաբանական անձի ներկայացուցիչ, որը օգտվում է EURO Polis կայքից կամ հեռավար կապի միջոցներից։",
        "Ապահովադիր՝ անձ, որը ապահովագրողի հետ կնքում է ապահովագրության պայմանագիր։",
        "Ապահովագրության պայմանագիր՝ ապահովադրի և ապահովագրողի միջև կնքվող պայմանագիր, այդ թվում՝ հեռավար եղանակով, եթե դա թույլատրվում է օրենսդրությամբ և համապատասխան ապահովագրական ապրանքի պայմաններով։",
        "Պոլիս՝ թղթային կամ էլեկտրոնային փաստաթուղթ, որը հաստատում է ապահովագրության պայմանագրի կնքումը։",
        "Ապահովագրավճար՝ գումար, որը ապահովադիրը պետք է վճարի ապահովագրական պաշտպանության համար։",
        "Անձնական տվյալներ՝ նույնականացված կամ նույնականացվող ֆիզիկական անձին վերաբերող ցանկացած տեղեկություն, որը մշակվում է GDPR-ի և Լատվիայի օրենսդրության համաձայն։",
      ],
    },
    {
      title: "§ 2. Ընդհանուր դրույթներ",
      paragraphs: [
        "2.1. Սույն Կանոնակարգը կիրառվում է EURO Polis կայքի և հեռավար կապի միջոցների օգտագործման նկատմամբ՝ տեղեկատվություն, խորհրդատվություն և ապահովագրության պայմանագրերի կնքման աջակցություն ստանալու նպատակով։",
        "2.2. Կանոնակարգը մշակվել է՝ հաշվի առնելով՝",
        "",
        "• ԵՄ 2016/679 Կանոնակարգը (GDPR);",
        "• ԵՄ 2016/97 Դիրեկտիվը ապահովագրության տարածման մասին (IDD);",
        "• Լատվիայի օրենքը ապահովագրության և վերաապահովագրության տարածման մասին;",
        "• Լատվիայի օրենքը ապահովագրության և վերաապահովագրության մասին;",
        "• Լատվիայի օրենքը սպառողների իրավունքների մասին;",
        "• ԵՄ օրենսդրությունը ֆինանսական ծառայությունների հեռավար մատուցման վերաբերյալ;",
        "• eIDAS կանոնակարգը էլեկտրոնային նույնականացման և վստահության ծառայությունների մասին։ eIDAS-ը ԵՄ-ում ստեղծում է անվտանգ էլեկտրոնային գործարքների և վստահության ծառայությունների իրավական հիմքը։",
        "",
        "2.3. Կայքի օգտագործումը նշանակում է օգտատիրոջ համաձայնություն սույն Կանոնակարգին, եթե օգտատերը ուղարկում է հայտ, լրացնում է ձև, փոխանցում է փաստաթղթեր կամ դիմում է խորհրդատվության համար։",
        "2.4. Ապահովագրության պայմանագիրը կնքվում է ոչ թե EURO Polis կայքի կամ միջնորդի, այլ անմիջապես ապահովադրի և ապահովագրողի միջև։",
        "2.5. Միջնորդը ապահովագրող չէ, չի ստանձնում ապահովագրական հատուցման պարտավորություն և չի որոշում՝ արդյոք դեպքը համարվում է ապահովագրական պատահար։",
        "2.6. Կայքում ներկայացված տեղեկատվությունը ունի տեղեկատու բնույթ և չի հանդիսանում հրապարակային օֆերտա, եթե այլ բան հստակ նշված չէ։",
      ],
    },
    {
      title: "§ 3. Միջնորդի կարգավիճակ և տեղեկատվության բացահայտում",
      paragraphs: [
        "3.1. Մինչ ապահովագրության պայմանագրի կնքումը օգտատիրոջը տրամադրվում է տեղեկատվություն ապահովագրողի, ապահովագրական միջնորդի, ապահովագրական ապրանքի տեսակի, ապահովագրավճարի չափի, ապահովագրության էական պայմանների, բացառությունների և բողոքների ներկայացման կարգի մասին։",
        "3.2. Միջնորդը գործում է ապահովագրողի կողմից տրամադրված լիազորությունների շրջանակում և կարող է աջակցել՝",
        "",
        "• հայտերի ընդունմանը;",
        "• օգտատիրոջ խորհրդատվությանը;",
        "• տվյալների փոխանցմանը ապահովագրողին;",
        "• ապահովագրական պոլիսի ձևակերպմանը;",
        "• ապահովագրավճարի ընդունմանը, եթե դա թույլատրված է ապահովագրողի և կիրառելի օրենսդրության կողմից։",
        "",
        "3.3. Եթե միջնորդը ապահովագրողից ստանում է միջնորդավճար, դա ինքնին չի նշանակում օգտատիրոջ համար ապահովագրավճարի ավտոմատ բարձրացում, եթե այլ բան հստակ նշված չէ մինչև պայմանագրի կնքումը։",
        "3.4. Օգտատերը իրավունք ունի պահանջել լրացուցիչ տեղեկատվություն միջնորդի կարգավիճակի, նրա լիազորությունների բնույթի և վարձատրության ստացման կարգի մասին։",
      ],
    },
    {
      title: "§ 4. Կայքի օգտագործման կարգը",
      paragraphs: [
        "4.1. EURO Polis կայքը նախատեսված է՝",
        "",
        "• ապահովագրական ապրանքների մասին տեղեկատվություն ստանալու;",
        "• հայտեր ուղարկելու;",
        "• փաստաթղթեր և տվյալներ փոխանցելու;",
        "• ապահովագրության արժեքի հաշվարկի կամ նախնական գնահատման համար;",
        "• ապահովագրական փաստաթղթերը էլեկտրոնային ձևով ստանալու համար։",
        "",
        "4.2. Կայքը կարող է հասանելի լինել շուրջօրյա՝ բացառությամբ տեխնիկական աշխատանքների, կապի խափանումների, թարմացումների կամ EURO Polis-ից անկախ այլ հանգամանքների։",
        "4.3. Օգտատերը պարտավոր է տրամադրել ճշգրիտ, ամբողջական և արդիական տվյալներ։",
        "4.4. Օգտատերը պատասխանատվություն է կրում սխալ, ոչ ամբողջական կամ ոչ հավաստի տվյալների փոխանցման հետևանքների համար, ներառյալ ապահովագրողի կողմից պայմանագրի կնքումից, պայմանների փոփոխությունից կամ ապահովագրական հատուցումից հրաժարվելու ռիսկը։",
        "4.5. Օգտատիրոջը արգելվում է կայքն օգտագործել կեղծ փաստաթղթեր, սխալ տեղեկություններ, վնասակար կոդ փոխանցելու կամ երրորդ անձանց իրավունքները խախտող գործողությունների համար։",
      ],
    },
    {
      title: "§ 5. Ապահովագրության պայմանագրի հեռավար կնքում",
      paragraphs: [
        "5.1. Ապահովագրություն ձևակերպելու համար օգտատերը տրամադրում է տվյալ ապահովագրական ապրանքի համար անհրաժեշտ տվյալները՝ ապահովադրի, տրանսպորտային միջոցի, ապահովագրության ժամկետի, գործողության տարածքի, երթուղու, գրանցման փաստաթղթերի և այլ տեղեկությունների վերաբերյալ։",
        "5.2. Մինչ պայմանագրի կնքումը օգտատերը ստանում է տեղեկատվություն՝",
        "",
        "• ապահովագրողի մասին;",
        "• միջնորդի մասին;",
        "• ապահովագրական ապրանքի մասին;",
        "• գործողության տարածքի մասին;",
        "• ապահովագրության ժամկետի մասին;",
        "• ապահովագրավճարի մասին;",
        "• բացառությունների և սահմանափակումների մասին;",
        "• վճարման կարգի մասին;",
        "• պոլիսի ստացման կարգի մասին;",
        "• պայմանագրի փոփոխման կամ դադարեցման կարգի մասին;",
        "• բողոքների ներկայացման կարգի մասին։",
        "",
        "5.3. Ապահովագրության պայմանագիրը համարվում է կնքված ապահովագրողի պայմաններով սահմանված պահից՝ օգտատիրոջ համաձայնության հաստատումից, ապահովագրության պայմանների ընդունումից, ապահովագրավճարի վճարումից և պոլիսի թողարկումից հետո, եթե այդ գործողությունները պահանջվում են։",
        "5.4. Էլեկտրոնային պոլիսը կամ ապահովագրության պայմանագրի կնքումը հաստատող այլ փաստաթուղթ կարող է ուղարկվել օգտատիրոջը էլ. փոստով, մեսենջերով, անձնական կաբինետով կամ այլ համաձայնեցված կապուղով։",
        "5.5. Օգտատերը պարտավոր է ստանալուց անմիջապես հետո ստուգել պոլիսում նշված տվյալները։ Սխալ հայտնաբերելու դեպքում օգտատերը պետք է անհապաղ տեղեկացնի միջնորդին կամ ապահովագրողին։",
      ],
    },
    {
      title: "§ 6. Վճարում",
      paragraphs: [
        "6.1. Ապահովագրավճարը կարող է վճարվել՝",
        "",
        "• բանկային փոխանցմամբ;",
        "• բանկային քարտով վճարային մատակարարի միջոցով;",
        "• կայքում նշված կամ օգտատիրոջ հետ համաձայնեցված այլ եղանակով։",
        "",
        "6.2. Եթե միջնորդը ընդունում է ապահովագրավճարը, նա գործում է ապահովագրողի կողմից տրամադրված լիազորությունների շրջանակում։",
        "6.3. Բանկային քարտով վճարելիս քարտի տվյալները մուտքագրվում են բանկի կամ վճարային մատակարարի պաշտպանված էջում։ EURO Polis-ը և միջնորդը չեն պահում բանկային քարտերի ամբողջական տվյալները։",
        "6.4. Բանկային փոխանցմամբ վճարելիս օգտատերը պարտավոր է օգտագործել տրամադրված ռեկվիզիտները և ճիշտ նշել վճարման նպատակը։",
        "6.5. Վճարման պահ է համարվում գումարի մուտքագրումը ստացողի հաշվին, եթե ապահովագրողի պայմաններով այլ բան նախատեսված չէ։",
        "6.6. Ապահովագրավճարի կամ դրա մի մասի վերադարձը կատարվում է ապահովագրության պայմանագրով, ապահովագրողի կանոններով և կիրառելի օրենսդրությամբ նախատեսված դեպքերում և կարգով։",
      ],
    },
    {
      title: "§ 7. Հրաժարվելու իրավունք և հեռավար ապահովագրության առանձնահատկություններ",
      paragraphs: [
        "7.1. Քանի որ ապահովագրությունը ֆինանսական ծառայություն է, օգտատիրոջ՝ պայմանագրից հրաժարվելու իրավունքը կախված է ապահովագրական ապրանքի տեսակից, պայմանագրի գործողության ժամկետից, ապահովագրական պաշտպանության սկսվելու պահից և կիրառելի օրենսդրությունից։",
        "7.2. Եթե հրաժարվելու իրավունքը նախատեսված է օրենքով կամ ապահովագրողի պայմաններով, օգտատերը մինչև պայմանագրի կնքումը տեղեկացվում է հրաժարման կարգի, ժամկետների և հետևանքների մասին։",
        "7.3. Կարճաժամկետ ապահովագրության պայմանագրերի և այն պայմանագրերի դեպքում, որոնց կատարումը սկսվել է օգտատիրոջ համաձայնությամբ, հրաժարվելու իրավունքը կարող է սահմանափակվել։",
        "7.4. Միջնորդը ինքնուրույն որոշումներ չի կայացնում ապահովագրավճարի վերադարձի վերաբերյալ, եթե այդ որոշումը ապահովագրողի իրավասության մեջ է։",
      ],
    },
    {
      title: "§ 8. Անձնական տվյալներ",
      paragraphs: [
        "8.1. Անձնական տվյալների մշակումն իրականացվում է GDPR-ի և Լատվիայի տվյալների պաշտպանության օրենսդրության համաձայն։",
        "8.2. EURO Polis կայքի շրջանակում տվյալները կարող են մշակվել հետևյալ նպատակներով՝",
        "",
        "• հայտի դիտարկում;",
        "• ապահովագրական ապրանքի ընտրություն;",
        "• ապահովագրության պայմանագրի ձևակերպում;",
        "• տվյալների փոխանցում ապահովագրողին;",
        "• վճարումների մշակում;",
        "• օգտատիրոջ հետ կապ;",
        "• իրավական պարտավորությունների կատարում;",
        "• իրավունքների և օրինական շահերի պաշտպանություն;",
        "• կայքի անվտանգության ապահովում։",
        "",
        "8.3. Մշակման իրավական հիմքեր կարող են լինել՝",
        "",
        "• պայմանագրի կատարումը կամ պայմանագրի կնքումից առաջ գործողությունները;",
        "• իրավական պարտավորության կատարումը;",
        "• օրինական շահը;",
        "• օգտատիրոջ համաձայնությունը՝ օրինակ մարքեթինգային հաղորդագրությունների կամ ոչ պարտադիր cookie-ների համար։",
        "",
        "8.4. Տվյալները կարող են փոխանցվել՝",
        "",
        "• ապահովագրողին;",
        "• վճարային մատակարարներին;",
        "• IT մատակարարներին;",
        "• հոսթինգ ծառայությունների մատակարարներին;",
        "• պետական մարմիններին, եթե դա պահանջվում է օրենքով։",
        "",
        "8.5. Օգտատերը ունի GDPR-ով նախատեսված իրավունքներ՝ տվյալներին հասանելիություն, ուղղում, ջնջում, մշակման սահմանափակում, մշակման դեմ առարկություն, տվյալների փոխանցելիություն և համաձայնության հետկանչ։",
        "8.6. Անձնական տվյալների մշակման վերաբերյալ բողոքը կարող է ներկայացվել Datu valsts inspekcija-ին։ Տեսչության կոնտակտները հրապարակված են դրա պաշտոնական կայքում։",
      ],
    },
    {
      title: "§ 9. Cookie-ներ և տեխնիկական տվյալներ",
      paragraphs: [
        "9.1. Կայքը կարող է օգտագործել cookie-ներ և նմանատիպ տեխնոլոգիաներ՝ կայքի աշխատանքի, լեզվի պահպանման, անվտանգության, վերլուծության և մարքեթինգի համար։",
        "9.2. Խիստ անհրաժեշտ cookie-ները օգտագործվում են առանց համաձայնության, քանի որ պահանջվում են կայքի աշխատանքի համար։",
        "9.3. Վերլուծական և մարքեթինգային cookie-ները օգտագործվում են միայն օգտատիրոջ համաձայնությունից հետո։",
        "9.4. Cookie-ների օգտագործման մանրամասն կարգը ներկայացված է EURO Polis-ի առանձին Cookie քաղաքականությունում։",
      ],
    },
    {
      title: "§ 10. Դիմումներ և բողոքներ",
      paragraphs: [
        "10.1. Օգտատերը կարող է դիմում կամ բողոք ուղարկել՝",
        "",
        "• էլ. փոստով՝ ludmila.rizova@ergo.lv",
        ";",
        "• հեռախոսով՝ +371 22355307;",
        "• կայքի հետադարձ կապի ձևի միջոցով;",
        "• անմիջապես ապահովագրողին՝ ERGO Insurance SE Latvijas filiāle։",
        "",
        "10.2. Ցանկալի է, որ դիմումը պարունակի՝",
        "",
        "• օգտատիրոջ անունը կամ անվանումը;",
        "• կոնտակտային տվյալները;",
        "• պոլիսի կամ հայտի համարը, եթե կա;",
        "• իրավիճակի նկարագրությունը;",
        "• օգտատիրոջ պահանջը;",
        "• կից փաստաթղթեր, եթե կան։",
        "",
        "10.3. Եթե դիմումը վերաբերում է ապահովագրական հատուցմանը, ապահովագրական պատահարի ճանաչմանը, հատուցումից հրաժարմանը կամ ապահովագրության պայմանագրի փոփոխմանը, այն կարող է փոխանցվել ապահովագրողին կամ օգտատերը կտեղեկացվի ապահովագրողին դիմելու կարգի մասին։",
        "10.4. Եթե օգտատերը համաձայն չէ պատասխանի հետ, նա իրավունք ունի դիմել ապահովագրողին, Latvijas Banka-ին՝ որպես ֆինանսական վերահսկողության իրավասու մարմին, Datu valsts inspekcija-ին՝ անձնական տվյալների հարցերով, կամ դատարան։",
      ],
    },
    {
      title: "§ 11. Պատասխանատվություն",
      paragraphs: [
        "11.1. Միջնորդը պատասխանատվություն է կրում իր լիազորությունների սահմաններում գործողությունների պատշաճ կատարման համար։",
        "11.2. Միջնորդը պատասխանատվություն չի կրում՝",
        "",
        "• օգտատիրոջ կողմից փոխանցված ոչ հավաստի տվյալների համար;",
        "• օգտատիրոջ տվյալների պատճառով փաստաթղթերում առաջացած սխալների համար;",
        "• ապահովագրողի որոշումների համար՝ պայմանագրի կնքման, պայմանների փոփոխման կամ հատուցման վերաբերյալ;",
        "• բանկերի, վճարային մատակարարների, կապի օպերատորների և այլ երրորդ անձանց խափանումների համար;",
        "• օգտատիրոջ էլ. փոստին, մեսենջերներին կամ սարքերին չթույլատրված հասանելիության համար։",
        "",
        "11.3. Ապահովագրողը ապահովագրության պայմանագրով պատասխանատվություն է կրում պայմանագրի պայմանների և կիրառելի օրենսդրության շրջանակում։",
      ],
    },
    {
      title: "§ 12. Մտավոր սեփականություն",
      paragraphs: [
        "12.1. EURO Polis կայքի նյութերը, ներառյալ տեքստերը, դիզայնը, պատկերները, կայքի կառուցվածքը, ինտերֆեյսի տարրերը և ծրագրային կոդը, պաշտպանվում են մտավոր սեփականության մասին օրենսդրությամբ։",
        "12.2. Կայքի նյութերի օգտագործումը թույլատրվում է միայն անձնական ծանոթացման և ապահովագրական ծառայություններ ստանալու նպատակով։",
        "12.3. Կայքի նյութերի պատճենումը, տարածումը կամ առևտրային օգտագործումը թույլատրվում է միայն իրավատիրոջ նախնական համաձայնությամբ, եթե օրենքով այլ բան թույլատրված չէ։",
      ],
    },
    {
      title: "§ 13. Կանոնակարգի փոփոխություն",
      paragraphs: [
        "13.1. EURO Polis-ը իրավունք ունի թարմացնել սույն Կանոնակարգը՝ օրենսդրության, ապահովագրական ապրանքների, կայքի տեխնիկական ֆունկցիոնալի, վճարման եղանակների կամ օգտատերերի հետ փոխգործակցության կարգի փոփոխությունների դեպքում։",
        "13.2. Նոր խմբագրությունը հրապարակվում է կայքում և կիրառվում է հրապարակման օրվանից, եթե այլ ժամկետ նշված չէ։",
        "13.3. Փոփոխությունները հետադարձ ուժ չունեն և չեն ազդում արդեն կնքված ապահովագրության պայմանագրերի վրա, եթե այլ բան նախատեսված չէ օրենքով կամ պայմանագրի պայմաններով։",
      ],
    },
    {
      title: "§ 14. Կիրառելի իրավունք և վեճերի լուծում",
      paragraphs: [
        "14.1. Սույն Կանոնակարգի նկատմամբ կիրառվում է Լատվիայի Հանրապետության իրավունքը և Եվրոպական միության կիրառելի իրավունքը։",
        "14.2. Վեճերը լուծվում են բանակցությունների և օգտատիրոջ դիմումի քննարկման միջոցով։",
        "14.3. Վեճը չկարգավորելու դեպքում օգտատերը իրավունք ունի դիմել Լատվիայի իրավասու մարմիններին կամ Լատվիայի Հանրապետության դատարան։",
      ],
    },
    {
      title: "§ 15. Եզրափակիչ դրույթներ",
      paragraphs: [
        "15.1. Սույն Կանոնակարգը տեղադրվում է EURO Polis կայքում ազատ հասանելիությամբ։",
        "15.2. Օգտատերը հնարավորություն ունի պահպանել, տպել կամ վերարտադրել Կանոնակարգի տեքստը։",
        "15.3. Եթե Կանոնակարգի որևէ դրույթ ճանաչվի անվավեր, դա չի ազդում մնացած դրույթների վավերականության վրա։",
        "15.4. Պաշտոնական տվյալներ՝",
        "",
        "Ապահովագրող՝ ERGO Insurance SE Latvijas filiāle",
        "Գրանցման համար՝ 40103599913",
        "Հասցե՝ Skanstes iela 50, Rīga, LV-1013, Լատվիա",
        "",
        "Ապահովագրական միջնորդ՝ Rižova Ludmila",
        "Հեռախոս՝ +371 22355307",
        "Էլ. փոստ՝ ludmila.rizova@ergo.lv",
        "",
        "Գործունեության երկիր՝ Լատվիա",
        "Կայք՝ EURO Polis",
      ],
    },
  ],
};

const dictionaries: Record<Lang, RulesDictionary> = {
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

export function getRulesDictionary(lang: Lang): RulesDictionary {
  return dictionaries[lang];
}

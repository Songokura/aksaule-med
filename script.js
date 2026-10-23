/* Ақсауле-Мед. Интерфейс, данные и три языка: русский (основной), казахский, английский. */

/* ---------- словари ---------- */
const I = {
ru:{
 n_svc:"Услуги",n_doc:"Врачи",n_br:"Филиалы",n_cl:"Клиника",n_rev:"Отзывы",n_con:"Контакты",m_call:"Позвонить:",
 h_eye:"Кызылорда · 5 филиалов · с 2016 года",
 h_title:"Медицинский центр в Кызылорде",
 h_sub:"Ясный диагноз, честная цена и лечение без скрытых платежей. ЛОР, кардиолог, невропатолог, ревматолог и реабилитация - 12 врачей в 5 филиалах города.",
 h_hint:"Нажмите точку - откроется нужное направление",
 h_mean:"<b>Ақ сәуле</b> значит «белый луч», чистый свет. Так же мы и работаем: понятный диагноз, открытая цена, лечение без скрытых платежей.",
 b_book:"Записаться на приём",b_call:"Позвонить",b_book2:"Записаться",b_price:"Весь прайс",b_bio:"Биография",
 mp_lor:"ЛОР",mp_nev:"Невропатолог",mp_kar:"Кардиолог",mp_reab:"Реабилитация",mp_rev:"Ревматолог",
 st1:"филиалов в городе",st2:"врачей в штате",st3:"пациентов в год",st4:"рейтинг в 2GIS",st5:"год основания",
 k_svc:"Услуги",s_h:"Направления и цены",
 s_sub:"При прохождении лечения консультация бесплатна. Цены ориентировочные, точную стоимость уточняйте у врача или в WhatsApp.",
 lab_pri:"Приём",lab_con:"Консультация",lab_from:"от",free:"При лечении у нас консультация бесплатно",
 lor_h:"ЛОР-врач",lor_a:"Ухо, горло, нос",lor_p:"Диагностика и лечение заболеваний уха, горла и носа. 9 ЛОР-врачей принимают в 4 филиалах города.",
 nev_h:"Невропатолог",nev_a:"Нервная система",nev_p:"Головные боли, головокружение, нарушения сна, заболевания позвоночника и нервной системы.",
 kar_h:"Кардиолог",kar_a:"Сердце и сосуды",kar_p:"Аритмия, давление, обследование и лечение сердечно-сосудистой системы. ЭКГ на месте.",
 rev_h:"Ревматолог",rev_a:"Суставы и кости",rev_p:"Боли в суставах, артрит, артроз, заболевания опорно-двигательного аппарата.",
 reab_h:"Реабилитация",reab_a:"Физиотерапия, массаж, ЛФК",reab_p:"Реабилитационный центр на Султан Бейбарыс 2: физиотерапия, массаж, УЗИ, программы восстановления после операций и травм.",
 pak_h:"Пакеты лечения",pak_a:"Курс в дневном стационаре",pak_p:"Медикаменты, физиолечение и наблюдение врача в одном пакете. Состав подбирает врач под состояние пациента.",
 pak_lab:"Ревматология",pak_b:"Состав пакетов",
 s_note:"Для иностранных граждан стоимость услуг рассчитывается на 50% выше.",
 k_doc:"Врачи",d_h:"Кто вас примет",d_sub:"Кольцо у фотографии показывает опыт врача: 30 лет практики - полный круг.",
 all:"Все",yrs:"лет опыта",
 sp:{lor:"ЛОР-врач",kar:"Кардиолог",nev:"Невропатолог",rev:"Ревматолог",reab:"Реабилитолог",nut:"Нутрициолог",ter:"Терапевт"},
 k_br:"Филиалы",br_h:"Пять адресов по городу",br_sub:"Циферблат показывает часы работы в будни. Белый разрыв - обеденный перерыв.",
 kind_reab:"Реабилитационный центр",kind_lor:"ЛОР-отделение",
 wd:"Пн-Пт",wd6:"Пн-Сб",sat:"Суббота",sun:"Воскресенье",brk:"перерыв",off:"Выходной",map:"На карте",
 soon_b:"Скоро откроется новый филиал",soon_s:"Мы растём, чтобы быть ближе к вам. Новости - в Instagram клиники.",
 k_cl:"Клиника",g_h:"Как у нас внутри",g_sub:"Реальные снимки кабинетов, оборудования и приёма. Нажмите на фото, чтобы увеличить.",
 k_why:"Почему мы",a_h:"Почему пациенты возвращаются",
 adv:[["Опытные врачи","12 врачей: ЛОР, терапевт, кардиолог, невропатолог, ревматолог."],
      ["Всё в одном месте","Консультация, диагностика и лечение без поездок по городу."],
      ["Личный план лечения","Схему подбирают под ваш случай, а не по шаблону."],
      ["Современное оборудование","Видеоэндоскопия, аудиометрия, ЭКГ, УЗИ, физиотерапия."],
      ["Прозрачные цены","Стоимость называют заранее, скрытых платежей нет."],
      ["Бесплатная консультация","При прохождении лечения консультацию не оплачиваете."],
      ["Экономия времени","Запись заранее, приём по времени, минимум ожидания."],
      ["Забота и доверие","5.0 в 2GIS и пациенты, которые едут из районов и Астаны."]],
 k_rev:"Отзывы",r_h:"Что говорят пациенты",r_sub:"Из 2GIS, Google, Яндекса и соцсетей. Смахните карточку влево или нажмите кнопку.",
 r_next:"Следующий отзыв",r_yt:"Видео-отзывы на YouTube",r_cnt:"16 отзывов из 2GIS, Google, Яндекса, Instagram, TikTok, Threads и YouTube",
 k_con:"Контакты",c_h:"Записаться и доехать",c_sub:"Город Кызылорда. Позвоните напрямую в филиал или напишите в WhatsApp - ответим в рабочие часы.",
 f_h:"Записаться на приём",f_name:"Ваше имя",f_phone:"Номер телефона",f_svc:"Услуга",f_note:"Жалоба (необязательно)",
 f_send:"Отправить в WhatsApp",f_hint:"Откроется WhatsApp с готовым сообщением.",f_any:"Ещё не решил(а)",
 f_1:"Ваше здоровье - наша главная ценность.",f_2:"Кызылорда, 5 филиалов",f_3:"Все права защищены.",
 m_price:"Прайс",m_pkg:"Пакеты лечения",m_pkg_sub:"Состав курса в дневном стационаре. Точную схему врач подбирает на приёме.",
 doc_pref:"Врач: ",
 wa:"Здравствуйте! Хочу записаться на приём.\nИмя: {n}\nТелефон: {p}\nУслуга: {s}\nЖалоба: {c}"
},
kk:{
 n_svc:"Қызметтер",n_doc:"Дәрігерлер",n_br:"Бөлімшелер",n_cl:"Клиника",n_rev:"Пікірлер",n_con:"Байланыс",m_call:"Қоңырау шалу:",
 h_eye:"Қызылорда · 5 бөлімше · 2016 жылдан бері",
 h_title:"Қызылордадағы медициналық орталық",
 h_sub:"Анық диагноз, әділ баға және жасырын төлемсіз ем. ЛОР, кардиолог, невропатолог, ревматолог және реабилитация - қаланың 5 бөлімшесінде 12 дәрігер.",
 h_hint:"Нүктені басыңыз - керек бөлімге өтесіз",
 h_mean:"<b>Ақ сәуле</b> - таза жарық. Біз де солай жұмыс істейміз: анық диагноз, ашық баға, жасырын төлемсіз ем.",
 b_book:"Қабылдауға жазылу",b_call:"Қоңырау шалу",b_book2:"Жазылу",b_price:"Толық баға",b_bio:"Өмірбаяны",
 mp_lor:"ЛОР",mp_nev:"Невропатолог",mp_kar:"Кардиолог",mp_reab:"Реабилитация",mp_rev:"Ревматолог",
 st1:"қаладағы бөлімше",st2:"штаттағы дәрігер",st3:"жылына пациент",st4:"2GIS рейтингі",st5:"құрылған жыл",
 k_svc:"Қызметтер",s_h:"Бағыттар мен бағалар",
 s_sub:"Ем қабылдасаңыз - консультация тегін. Бағалар шамамен берілген, нақты құнды дәрігермен немесе WhatsApp арқылы анықтаңыз.",
 lab_pri:"Қабылдау",lab_con:"Консультация",lab_from:"бастап",free:"Ем қабылдасаңыз - консультация тегін",
 lor_h:"ЛОР дәрігері",lor_a:"Құлақ, мұрын, тамақ",lor_p:"Құлақ, мұрын, тамақ ауруларын диагностикалау және емдеу. Қаланың 4 бөлімшесінде 9 ЛОР дәрігері қабылдайды.",
 nev_h:"Невропатолог",nev_a:"Жүйке жүйесі",nev_p:"Бас ауруы, бас айналу, ұйқы бұзылысы, омыртқа және жүйке жүйесі аурулары.",
 kar_h:"Кардиолог",kar_a:"Жүрек және қантамыр",kar_p:"Аритмия, қан қысымы, жүрек-қантамыр жүйесін тексеру және емдеу. ЭКГ орнында.",
 rev_h:"Ревматолог",rev_a:"Буын және сүйек",rev_p:"Буын ауруы, артрит, артроз, сүйек-бұлшықет жүйесінің аурулары.",
 reab_h:"Реабилитация",reab_a:"Физиотерапия, массаж, ЕДШ",reab_p:"Сұлтан Бейбарыс 2 бойындағы реабилитациялық орталық: физиотерапия, массаж, УДЗ, операция мен жарақаттан кейінгі қалпына келтіру бағдарламалары.",
 pak_h:"Емдеу пакеттері",pak_a:"Күндізгі стационардағы курс",pak_p:"Дәрі-дәрмек, физиоем және дәрігер бақылауы бір пакетте. Құрамын дәрігер науқастың жағдайына қарай таңдайды.",
 pak_lab:"Ревматология",pak_b:"Пакет құрамы",
 s_note:"Шетел азаматтарына қызмет құны 50% жоғары есептеледі.",
 k_doc:"Дәрігерлер",d_h:"Сізді кім қабылдайды",d_sub:"Фотодағы сақина дәрігердің тәжірибесін көрсетеді: 30 жыл - толық шеңбер.",
 all:"Барлығы",yrs:"жыл тәжірибе",
 sp:{lor:"ЛОР дәрігері",kar:"Кардиолог",nev:"Невропатолог",rev:"Ревматолог",reab:"Реабилитолог",nut:"Нутрициолог",ter:"Терапевт"},
 k_br:"Бөлімшелер",br_h:"Қала бойынша бес мекенжай",br_sub:"Циферблат жұмыс күндеріндегі жұмыс уақытын көрсетеді. Ақ саңылау - түскі үзіліс.",
 kind_reab:"Реабилитациялық орталық",kind_lor:"ЛОР бөлімшесі",
 wd:"Дс-Жм",wd6:"Дс-Сб",sat:"Сенбі",sun:"Жексенбі",brk:"үзіліс",off:"Демалыс",map:"Картада",
 soon_b:"Жақында жаңа бөлімше ашылады",soon_s:"Біз дамып келеміз - сізге жақынырақ боламыз. Жаңалықтар клиника Instagram-ында.",
 k_cl:"Клиника",g_h:"Ішіміз қандай",g_sub:"Кабинеттер, жабдық және қабылдаудың нақты суреттері. Үлкейту үшін фотоны басыңыз.",
 k_why:"Неге біз",a_h:"Пациенттер неге қайта келеді",
 adv:[["Тәжірибелі дәрігерлер","12 дәрігер: ЛОР, терапевт, кардиолог, невропатолог, ревматолог."],
      ["Барлығы бір жерде","Консультация, диагностика және ем - қала кезіп жүрмей."],
      ["Жеке емдеу жоспары","Схема сіздің жағдайыңызға қарай таңдалады, үлгі бойынша емес."],
      ["Заманауи жабдық","Бейнеэндоскопия, аудиометрия, ЭКГ, УДЗ, физиотерапия."],
      ["Ашық баға","Құны алдын ала айтылады, жасырын төлем жоқ."],
      ["Тегін консультация","Ем қабылдасаңыз, консультация үшін төлемейсіз."],
      ["Уақыт үнемдеу","Алдын ала жазылу, уақыты бойынша қабылдау, аз күту."],
      ["Қамқорлық пен сенім","2GIS-те 5.0 және аудандар мен Астанадан келетін пациенттер."]],
 k_rev:"Пікірлер",r_h:"Пациенттер не дейді",r_sub:"2GIS, Google, Яндекс және әлеуметтік желілерден. Картаны солға сырғытыңыз немесе түймені басыңыз.",
 r_next:"Келесі пікір",r_yt:"Видео-пікірлер YouTube-та",r_cnt:"2GIS, Google, Яндекс, Instagram, TikTok, Threads және YouTube-тағы 16 пікір",
 k_con:"Байланыс",c_h:"Жазылу және жол",c_sub:"Қызылорда қаласы. Бөлімшеге тікелей қоңырау шалыңыз немесе WhatsApp-қа жазыңыз - жұмыс уақытында жауап береміз.",
 f_h:"Қабылдауға жазылу",f_name:"Атыңыз",f_phone:"Телефон нөміріңіз",f_svc:"Қызмет",f_note:"Шағымыңыз (міндетті емес)",
 f_send:"WhatsApp арқылы жіберу",f_hint:"WhatsApp ашылып, хабарламаңыз дайын тұрады.",f_any:"Әлі шешкен жоқпын",
 f_1:"Денсаулығыңыз - біздің басты құндылығымыз.",f_2:"Қызылорда, 5 бөлімше",f_3:"Барлық құқықтар қорғалған.",
 m_price:"Бағалар",m_pkg:"Емдеу пакеттері",m_pkg_sub:"Күндізгі стационардағы курс құрамы. Нақты схеманы дәрігер қабылдауда таңдайды.",
 doc_pref:"Дәрігер: ",
 wa:"Сәлеметсіз бе! Қабылдауға жазылғым келеді.\nАтым: {n}\nТелефон: {p}\nҚызмет: {s}\nШағым: {c}"
},
en:{
 n_svc:"Services",n_doc:"Doctors",n_br:"Branches",n_cl:"Clinic",n_rev:"Reviews",n_con:"Contacts",m_call:"Call us:",
 h_eye:"Kyzylorda · 5 branches · since 2016",
 h_title:"Medical centre in Kyzylorda",
 h_sub:"A clear diagnosis, an honest price and treatment with no hidden fees. ENT, cardiology, neurology, rheumatology and rehabilitation - 12 doctors across 5 branches.",
 h_hint:"Tap a point to open the matching section",
 h_mean:"<b>Aq saule</b> means «white ray», pure light. That is how we work: a clear diagnosis, an open price, treatment with no hidden fees.",
 b_book:"Book an appointment",b_call:"Call",b_book2:"Book",b_price:"Full price list",b_bio:"Biography",
 mp_lor:"ENT",mp_nev:"Neurology",mp_kar:"Cardiology",mp_reab:"Rehab",mp_rev:"Rheumatology",
 st1:"branches in the city",st2:"doctors on staff",st3:"patients a year",st4:"rating on 2GIS",st5:"founded",
 k_svc:"Services",s_h:"Departments and prices",
 s_sub:"If you take a course of treatment, the consultation is free. Prices are indicative - confirm the exact cost with the doctor or on WhatsApp.",
 lab_pri:"Appointment",lab_con:"Consultation",lab_from:"from",free:"Consultation is free when you are treated here",
 lor_h:"ENT doctor",lor_a:"Ear, nose and throat",lor_p:"Diagnosis and treatment of ear, nose and throat conditions. Nine ENT doctors see patients in four branches.",
 nev_h:"Neurologist",nev_a:"Nervous system",nev_p:"Headaches, dizziness, sleep disorders, spinal and nervous system conditions.",
 kar_h:"Cardiologist",kar_a:"Heart and vessels",kar_p:"Arrhythmia, blood pressure, examination and treatment of the cardiovascular system. ECG on site.",
 rev_h:"Rheumatologist",rev_a:"Joints and bones",rev_p:"Joint pain, arthritis, arthrosis and musculoskeletal conditions.",
 reab_h:"Rehabilitation",reab_a:"Physiotherapy, massage, exercise therapy",reab_p:"Rehabilitation centre at 2 Sultan Beibarys St: physiotherapy, massage, ultrasound and recovery programmes after surgery or injury.",
 pak_h:"Treatment packages",pak_a:"A course in the day hospital",pak_p:"Medication, physiotherapy and a doctor's supervision in one package. The doctor selects the contents for your condition.",
 pak_lab:"Rheumatology",pak_b:"What is included",
 s_note:"For foreign citizens the cost of services is 50% higher.",
 k_doc:"Doctors",d_h:"Who will see you",d_sub:"The ring by the photo shows the doctor's experience: 30 years of practice is a full circle.",
 all:"All",yrs:"years of practice",
 sp:{lor:"ENT doctor",kar:"Cardiologist",nev:"Neurologist",rev:"Rheumatologist",reab:"Rehab physician",nut:"Nutritionist",ter:"General physician"},
 k_br:"Branches",br_h:"Five addresses across the city",br_sub:"The dial shows weekday opening hours. The white gap is the lunch break.",
 kind_reab:"Rehabilitation centre",kind_lor:"ENT department",
 wd:"Mon-Fri",wd6:"Mon-Sat",sat:"Saturday",sun:"Sunday",brk:"break",off:"Closed",map:"On the map",
 soon_b:"A new branch is opening soon",soon_s:"We are growing to be closer to you. Follow the news on the clinic's Instagram.",
 k_cl:"Clinic",g_h:"Inside the clinic",g_sub:"Real photos of the rooms, equipment and appointments. Tap a photo to enlarge.",
 k_why:"Why us",a_h:"Why patients come back",
 adv:[["Experienced doctors","12 doctors: ENT, general physician, cardiologist, neurologist, rheumatologist."],
      ["Everything in one place","Consultation, diagnostics and treatment without travelling across the city."],
      ["A personal treatment plan","The plan is built around your case, not a template."],
      ["Modern equipment","Video endoscopy, audiometry, ECG, ultrasound, physiotherapy."],
      ["Transparent prices","The cost is stated up front, with no hidden fees."],
      ["Free consultation","If you take a course of treatment, you do not pay for the consultation."],
      ["Time saved","Book in advance, be seen on time, wait as little as possible."],
      ["Care and trust","5.0 on 2GIS, with patients travelling in from the districts and from Astana."]],
 k_rev:"Reviews",r_h:"What patients say",r_sub:"From 2GIS, Google, Yandex and social media. Swipe the card left or use the button.",
 r_next:"Next review",r_yt:"Video reviews on YouTube",r_cnt:"16 reviews from 2GIS, Google, Yandex, Instagram, TikTok, Threads and YouTube",
 k_con:"Contacts",c_h:"Book a visit and find us",c_sub:"Kyzylorda. Call a branch directly or write on WhatsApp - we reply during working hours.",
 f_h:"Book an appointment",f_name:"Your name",f_phone:"Phone number",f_svc:"Service",f_note:"Your complaint (optional)",
 f_send:"Send via WhatsApp",f_hint:"WhatsApp will open with the message ready.",f_any:"Not decided yet",
 f_1:"Your health is our main value.",f_2:"Kyzylorda, 5 branches",f_3:"All rights reserved.",
 m_price:"Price list",m_pkg:"Treatment packages",m_pkg_sub:"What a day-hospital course includes. The exact plan is set by the doctor at the appointment.",
 doc_pref:"Doctor: ",
 wa:"Hello! I would like to book an appointment.\nName: {n}\nPhone: {p}\nService: {s}\nComplaint: {c}"
}};

/* ---------- данные ---------- */
const DOCS=[
 {k:"almat",   f:"Байнаев",       n:"Алмат Айтуарұлы",        en:"Almat Bainayev",       sp:"lor", y:27, ph:"+7 747 234 4066", br:0},
 {k:"aigul",   f:"Қасымжан",      n:"Айгүл Жүгерібайқызы",    en:"Aigul Kasymzhan",      sp:"kar", y:14, ph:"+7 747 234 4066", br:0},
 {k:"asel",    f:"Култаева",      n:"Асел Шазатхановна",      en:"Assel Kultayeva",      sp:"nev", y:16, ph:"+7 747 234 4066", br:0},
 {k:"zhupar",  f:"Жантұрсынова",  n:"Жұпар Базарбекқызы",     en:"Zhupar Zhantursynova", sp:"rev", y:17, ph:"+7 747 234 4066", br:0},
 {k:"kaliev",  f:"Қалиев",        n:"Дәулет Қазиұлы",         en:"Daulet Kaliyev",       sp:"ter", y:7,  ph:"+7 747 234 4066", br:0},
 {k:"ayazhan", f:"Қаби",          n:"Аяжан Болатбекқызы",     en:"Ayazhan Kabi",         sp:"lor", y:3,  ph:"+7 747 234 4066", br:0},
 {k:"saruarov",f:"Сәруаров",      n:"Ғазиз Абатбекұлы",       en:"Gaziz Saruarov",       sp:"lor", y:3,  ph:"+7 747 234 4066", br:0},
 {k:"kairat",  f:"Дүйсенов",      n:"Қайрат Дәулетбайұлы",    en:"Kairat Duisenov",      sp:"lor", y:17, ph:"+7 700 741 7676", br:1},
 {k:"bekbolat",f:"Құрақбаев",     n:"Бекболат Алмұратұлы",    en:"Bekbolat Kurakbayev",  sp:"lor", y:12, ph:"+7 771 339 6447", br:2},
 {k:"azamat",  f:"Жарқынбаев",    n:"Азамат Жарқынбайұлы",    en:"Azamat Zharkynbayev",  sp:"lor", y:5,  ph:"+7 771 339 6447", br:2},
 {k:"bakytbek",f:"Мырзабаев",     n:"Бақытбек Сұлтанбекұлы",  en:"Bakytbek Myrzabayev",  sp:"lor", y:17, ph:"+7 705 399 3170", br:3},
 {k:"aigerim", f:"Жүсіпова",      n:"Айгерім Жүсіпқызы",      en:"Aigerim Zhusipova",    sp:"lor", y:3,  ph:"+7 747 234 4066", br:4}
];
const SP_KEYS=["lor","ter","kar","nev","rev"];

const BR=[
 {img:"beibarys",k:"reab",ph:"+7 747 234 4066",wd:[8.5,17],b:[13,14.5],sat:"08:30-13:00",sun:null,d:"wd",
  a:{ru:"Султан Бейбарыс, 2",kk:"Сұлтан Бейбарыс, 2",en:"2 Sultan Beibarys St"}},
 {img:"esenova",k:"lor",ph:"+7 700 741 7676",wd:[8.5,17],b:[13,14.5],sat:"08:30-13:00",sun:null,d:"wd",
  a:{ru:"Есенова, 4а",kk:"Есенова, 4а",en:"4a Yesenov St"}},
 {img:"aitbaev",k:"lor",ph:"+7 771 339 6447",wd:[8.5,20],b:[13,14.5],sat:null,sun:"08:30-17:00",d:"wd6",
  a:{ru:"Айтбаев, 33",kk:"Айтбаев, 33",en:"33 Aitbayev St"}},
 {img:"merei",k:"lor",ph:"+7 705 399 3170",wd:[8.5,17],b:[13,14.5],sat:"08:30-13:00",sun:null,d:"wd",
  a:{ru:"Мерей, 25",kk:"Мерей, 25",en:"25 Merey St"}},
 {img:"shugyla",k:"lor",ph:"+7 747 234 4066",wd:[9,17],b:[13,14.5],sat:"09:00-13:00",sun:null,d:"wd",
  a:{ru:"Шугыла, 30",kk:"Шұғыла, 30",en:"30 Shugyla St"}}
];

const GAL=[
 {f:"g1",alt:{ru:"Коридор клиники Ақсауле-Мед",kk:"Ақсауле-Мед клиникасының дәлізі",en:"Corridor of the Aqsaule-Med clinic"}},
 {f:"g2",alt:{ru:"Ресепшн клиники",kk:"Клиниканың ресепшні",en:"Clinic reception"}},
 {f:"g3",alt:{ru:"Детская зона ожидания",kk:"Балаларға арналған күту аймағы",en:"Children's waiting area"}},
 {f:"g4",alt:{ru:"Палата дневного стационара",kk:"Күндізгі стационар палатасы",en:"Day hospital room"}},
 {f:"g5",alt:{ru:"Зал реабилитации и ЛФК",kk:"Реабилитация және ЕДШ залы",en:"Rehabilitation and exercise therapy room"}},
 {f:"g6",alt:{ru:"Кабинет с оборудованием",kk:"Жабдықталған кабинет",en:"Treatment room with equipment"}},
 {f:"g7",alt:{ru:"Видеоэндоскопия ЛОР-органов",kk:"ЛОР мүшелерін бейнеэндоскопиялау",en:"ENT video endoscopy"}},
 {f:"g8",alt:{ru:"Приём ЛОР-врача",kk:"ЛОР дәрігерінің қабылдауы",en:"ENT appointment"}}
];

const REV=[
 {n:"Руслан Налсур",s:"2GIS",t:{ru:"Сильные врачи, я снова на ногах. Приходите!",kk:"Мықты дәрігерлер бар екен, аяғыма тұрдым, келіңдер!",en:"Strong doctors here, I am back on my feet. Go and see them!"}},
 {n:"Roza Utegenova",s:"Яндекс",t:{ru:"Прошла десять дней лечения, результат отличный. Огромное спасибо врачу Асель!",kk:"Он күн ем алдым! Нәтижесі супер! Асел дәрігерге мың алғыс!",en:"I had ten days of treatment and the result is excellent. Many thanks to Dr Assel!"}},
 {n:"Мархабай Сандыбаева",s:"Instagram",t:{ru:"Благодарность доктору Асель Шазатхановне. Чистота в клинике идеальная.",kk:"Асель Шазатханқызына алғысым шексіз! Тазалық керемет!",en:"My deepest thanks to Dr Assel Kultayeva. The clinic is spotless."}},
 {n:"Болекбаев Калдыбек",s:"TikTok",t:{ru:"Огромная благодарность Алмату Айтуаровичу и Айгуль Касымжан.",kk:"Алмат Айтуарұлына, Қасымжан Айгүлге алғысым шексіз.",en:"Huge thanks to Almat Bainayev and Aigul Kasymzhan."}},
 {n:"Abilaikhan Kungabylov",s:"YouTube",t:{ru:"Благодарю коллектив во главе с доктором Кайратом.",kk:"Қайрат дәрігер бастаған ұжымға алғысымды білдіремін.",en:"I thank the whole team led by Dr Kairat."}},
 {n:"Асанова Эльмира",s:"2GIS",t:{ru:"Вылечили за один день. Персонал не жалеет сил. Спасибо.",kk:"Бір күнде емдеп жіберді. Персоналы аянбайды. Рахмет.",en:"They treated me in a single day. The staff go out of their way. Thank you."}},
 {n:"Айгерим Шыныбек",s:"Google",t:{ru:"Прекрасный персонал. Пришли с сыном к ЛОР. Благодарим!",kk:"Тамаша ұжым. Ұлыммен ЛОР-ға келдік. Алғыс айтамыз!",en:"Wonderful staff. I came with my son to the ENT doctor. Thank you!"}},
 {n:"Нурсулу Умбетова",s:"Яндекс",t:{ru:"Благодарю ЛОР-врача Айгерим Жусиповну.",kk:"ЛОР дәрігері Айгерім Жүсіпқызына ризашылығымды білдіремін.",en:"My thanks to the ENT doctor Aigerim Zhusipova."}},
 {n:"Мейрамкул Жартыбасова",s:"Instagram",t:{ru:"Пришла с диагнозом ДППГ, за два сеанса всё прошло. Спасибо доктору Бакытбеку!",kk:"ДППГ диагнозымен келгенмін, екі сеанста басылды. Бақытбек докторға рахмет!",en:"I came with BPPV and it settled in two sessions. Thank you, Dr Bakytbek!"}},
 {n:"Сезим Абдукаримова",s:"TikTok",t:{ru:"Мырзабаев Бакытбек - грамотный специалист.",kk:"Мырзабаев Бақытбек - білікті маман.",en:"Bakytbek Myrzabayev is a very competent specialist."}},
 {n:"Ержан Қанатов",s:"YouTube",t:{ru:"Специально приехал из Астаны. Алмат Айтуарович - мастер своего дела. Прошёл лечение, результат хороший.",kk:"Астанадан арнайы келдім. Алмат Айтуарұлы өз ісінің маманы екен. Емін алып, жақсы нәтиже көрдім.",en:"I travelled from Astana on purpose. Almat Bainayev is a master of his craft. I had the treatment and the result is good."}},
 {n:"Мадина Серікқызы",s:"Google",t:{ru:"Айгуль Жугерибаевна - очень знающий кардиолог. Вижу результат лечения.",kk:"Қасымжан Айгүл Жүгерібайқызы өте білімді кардиолог екен. Емнің нәтижесін көріп жатырмын.",en:"Aigul Kasymzhan is a very knowledgeable cardiologist. I can see the result of the treatment."}},
 {n:"Аружан Нұрсұлтанқызы",s:"TikTok",t:{ru:"Култаева Асель Шазатхановна - сильный невропатолог. Выслушала внимательно, объяснила ясно.",kk:"Култаева Асель Шазатхановна өте мықты невропатолог екен. Бәрін мұқият тыңдап, анық түсіндірді.",en:"Assel Kultayeva is a strong neurologist. She listened carefully and explained everything clearly."}},
 {n:"Айман Серікқызы",s:"2GIS",t:{ru:"Жантурсынова Жупар Базарбековна - сильный ревматолог. Вижу результат.",kk:"Жантұрсынова Жұпар Базарбекқызы өте мықты ревматолог екен. Нәтижесін көріп жатырмын.",en:"Zhupar Zhantursynova is a strong rheumatologist. I can see the result."}},
 {n:"Айнұр Әбілдаева",s:"2GIS",t:{ru:"Дуйсенов Кайрат Даулетбаевич - сильный ЛОР-врач. Филиал на Есенова 4а на высоком уровне.",kk:"Дүйсенов Қайрат Дәулетбайұлы өте мықты ЛОР дәрігері екен. Есенова 4а бөлімшесі жоғары деңгейде.",en:"Kairat Duisenov is a strong ENT doctor. The branch at 4a Yesenov St is excellent."}},
 {n:"Мөлдір Айбекқызы",s:"TikTok",t:{ru:"Приехали из дальнего села и не зря. Пусть таких центров будет больше!",kk:"Алыс ауылдан келдік, бекер келмеппіз. Осындай орталықтар көп болсын!",en:"We came from a far-away village and it was worth it. May there be more centres like this!"}}
];

const SVC_KEYS={lor:"lor_h",nevropatolog:"nev_h",kardiolog:"kar_h",revmatolog:"rev_h",reabilitaciya:"reab_h",pakety:"pak_h"};
const SP2SVC={lor:"lor",nev:"nevropatolog",kar:"kardiolog",rev:"revmatolog",reab:"reabilitaciya",nut:"",ter:""};
const MAIN_PHONE="77472344066";

/* ---------- вспомогательное ---------- */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function pickLang(){
  const q=new URLSearchParams(location.search).get("lang");
  if(q&&I[q])return q;
  try{const s=localStorage.getItem("am_lang");if(s&&I[s])return s}catch(e){}
  return "ru";
}
let LANG=pickLang();
const T=k=>I[LANG][k];
const L=o=>o&&o[LANG]!==undefined?o[LANG]:o&&o.ru;
const hm=h=>{const H=Math.floor(h),M=Math.round((h-H)*60);return String(H).padStart(2,"0")+":"+String(M).padStart(2,"0")};
const tel=p=>p.replace(/[^\d+]/g,"");
function arc(cx,cy,r,a0,a1){const p=a=>[cx+r*Math.sin(a*Math.PI/180),cy-r*Math.cos(a*Math.PI/180)];const[x0,y0]=p(a0),[x1,y1]=p(a1);return `M${x0.toFixed(2)},${y0.toFixed(2)} A${r},${r} 0 ${a1-a0>180?1:0} 1 ${x1.toFixed(2)},${y1.toFixed(2)}`}
const docName=d=>LANG==="en"?d.en:d.f+" "+d.n;

/* ---------- отрисовка ---------- */
function renderStatic(){
  $$("[data-i]").forEach(el=>{const v=T(el.dataset.i);if(v!=null)el.innerHTML=v});
  $("#h1").innerHTML=T("h_title").split(" ").map(w=>`<span class="w">${esc(w)}</span>`).join(" ");
  document.documentElement.lang=LANG;
  $$(".lang button").forEach(b=>{const on=b.dataset.lang===LANG;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on)});
  $("#readout").innerHTML=T("adv").map(([a,b])=>`<li class="s"><svg class="tick" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11"/><path pathLength="1" d="M7,12.5 L10.5,16 L17,9"/></svg><div><strong>${esc(a)}</strong><span>${esc(b)}</span></div></li>`).join("");
  renderDocs();renderBranches();renderGallery();renderForm();
  fitTitle();
}

let FILTER="all";
function renderDocs(){
  $("#chips").innerHTML=[`<button class="chip ${FILTER==="all"?"on":""}" data-f="all">${T("all")}</button>`]
    .concat(SP_KEYS.map(k=>`<button class="chip ${FILTER===k?"on":""}" data-f="${k}">${T("sp")[k]}</button>`)).join("");
  $("#docs").innerHTML=DOCS.map(d=>`<article class="doc ${FILTER!=="all"&&FILTER!==d.sp?"hide":""}" data-k="${d.sp}">
    <div class="doc-ph"><img src="assets/doctors/${d.k}.webp" alt="${esc(docName(d))} - ${esc(T("sp")[d.sp])}" loading="lazy" width="480" height="600">
      <div class="ring" style="--d:${Math.min(d.y/30*100,100).toFixed(1)}"><svg viewBox="0 0 64 64"><circle class="tr" cx="32" cy="32" r="28" pathLength="100"/><circle class="pr" cx="32" cy="32" r="28" pathLength="100"/></svg><b>${d.y}</b></div>
    </div>
    <div class="doc-in">
      <div class="nm">${esc(LANG==="en"?d.en:d.f)}<small>${esc(LANG==="en"?T("sp")[d.sp]:d.n)}</small></div>
      <span class="sp">${esc(T("sp")[d.sp])}</span>
      <div class="acts">
        <button class="btn btn-mint" data-book="${SP2SVC[d.sp]}" data-doc="${esc(docName(d))}" data-phone="${tel(d.ph)}">${T("b_book2")}</button>
        <button class="lnk" data-bio="${d.k}">${T("b_bio")} →</button>
      </div>
    </div></article>`).join("");
}

function renderBranches(){
  $("#branches").innerHTML=BR.map((b,i)=>{
    const a0=b.wd[0]/24*360,a1=b.wd[1]/24*360,len=(a1-a0)/360*2*Math.PI*36;
    const b0=b.b[0]/24*360,b1=b.b[1]/24*360,addr=L(b.a);
    return `<article class="br s">
      <div class="br-ph"><img src="assets/branches/${b.img}.webp" alt="${esc(addr)} - ${esc(T(b.k==="reab"?"kind_reab":"kind_lor"))}" loading="lazy" width="640" height="400"></div>
      <div class="br-in">
        <svg class="dial" viewBox="0 0 96 96" aria-hidden="true"><circle class="bg" cx="48" cy="48" r="36"/><path class="open" d="${arc(48,48,36,a0,a1)}" style="--len:${len.toFixed(1)}"/><path class="brk" d="${arc(48,48,36,b0,b1)}"/><text x="48" y="44" class="big">${hm(b.wd[0])}</text><text x="48" y="58">${hm(b.wd[1])}</text></svg>
        <div>
          <h3>${esc(addr)}</h3>
          <div class="kind">${T(b.k==="reab"?"kind_reab":"kind_lor")}</div>
          <div class="hrs">
            <div><span>${T(b.d)}</span> <b>${hm(b.wd[0])}-${hm(b.wd[1])}</b> <span>(${T("brk")} ${hm(b.b[0])}-${hm(b.b[1])})</span></div>
            ${b.sat?`<div><span>${T("sat")}</span> <b>${b.sat}</b></div>`:""}
            <div><span>${T("sun")}</span> <b>${b.sun||T("off")}</b></div>
          </div>
          <div class="acts">
            <a class="pri" href="tel:${tel(b.ph)}">${b.ph}</a>
            <a href="https://2gis.kz/kyzylorda/search/${encodeURIComponent(b.a.kk+" Ақсауле-Мед")}" target="_blank" rel="noopener">${T("map")}</a>
          </div>
        </div>
      </div></article>`}).join("");
  $("#phones").innerHTML=BR.map(b=>`<a href="tel:${tel(b.ph)}"><div><b>${esc(L(b.a))}</b><small>${T(b.k==="reab"?"kind_reab":"kind_lor")}</small></div><span>${b.ph}</span></a>`).join("");
}

function renderGallery(){
  $("#gal").innerHTML=GAL.map(g=>`<button data-img="assets/gallery/${g.f}.webp" aria-label="${esc(L(g.alt))}"><img src="assets/gallery/${g.f}.webp" alt="${esc(L(g.alt))}" loading="lazy" width="640" height="400"></button>`).join("");
}

function formHTML(){
  const opts=Object.entries(SVC_KEYS).map(([k,v])=>`<option value="${k}">${T(v)}</option>`).join("");
  return `<h3>${T("f_h")}</h3>
  <div class="f"><label for="fn">${T("f_name")}</label><input id="fn" type="text" name="n" autocomplete="name"></div>
  <div class="f"><label for="fp">${T("f_phone")}</label><input id="fp" type="tel" name="p" inputmode="tel" placeholder="+7 ___ ___ __ __" autocomplete="tel"></div>
  <div class="f"><label for="fs">${T("f_svc")}</label><select id="fs" name="s"><option value="">${T("f_any")}</option>${opts}</select></div>
  <div class="f"><label for="fc">${T("f_note")}</label><textarea id="fc" name="c"></textarea></div>
  <button class="btn btn-mint" data-send>${T("f_send")}</button><div class="hint">${T("f_hint")}</div>`;
}
function renderForm(){$("#inline-form").className="form s lit";$("#inline-form").innerHTML=formHTML()}

/* ---------- колода отзывов ---------- */
let RI=0;
function card(i){const r=REV[i%REV.length];
  return `<div class="card"><div class="stars">★★★★★</div><q>${esc(L(r.t))}</q><div class="who"><i>${esc(r.n[0])}</i><div><b>${esc(r.n)}</b></div><span class="src">${esc(r.s)}</span></div></div>`}
function buildDeck(){
  $("#deck").innerHTML=card(RI)+card(RI+1)+card(RI+2);
  $("#cnt").textContent=`${RI%REV.length+1} / ${REV.length}`;
  bindSwipe();
}
function nextCard(){const top=$("#deck .card");if(!top||top.classList.contains("out"))return;
  top.classList.add("out");setTimeout(()=>{RI++;buildDeck()},380)}
function bindSwipe(){
  const c=$("#deck .card");if(!c)return;let x0=null;
  c.addEventListener("pointerdown",e=>{x0=e.clientX;c.style.transition="none"});
  c.addEventListener("pointermove",e=>{if(x0==null)return;const dx=e.clientX-x0;c.style.transform=`translateX(${dx}px) rotate(${dx/20}deg)`});
  const end=e=>{if(x0==null)return;const dx=e.clientX-x0;c.style.transition="";x0=null;if(dx<-70)nextCard();else c.style.transform=""};
  c.addEventListener("pointerup",end);c.addEventListener("pointercancel",end);c.addEventListener("pointerleave",end);
}

/* ---------- модальные окна ---------- */
const modal=$("#modal"),mbody=$("#modal-body"),lb=$("#lightbox");
function openModal(html){
  mbody.innerHTML=html;
  modal.classList.add("on");modal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";document.body.classList.add("modal-open");
  modal.querySelector(".sheet").scrollTop=0;
}
function closeModal(){
  modal.classList.remove("on");modal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";document.body.classList.remove("modal-open");
}
function bookHTML(){return `<div class="form">${formHTML()}</div>`}
function openBook(svc,doc,phone){
  openModal(bookHTML());
  const sel=$("select",mbody);if(sel&&svc&&SVC_KEYS[svc])sel.value=svc;
  const ta=$("textarea",mbody);if(ta&&doc)ta.value=T("doc_pref")+doc;
  mbody.dataset.phone=phone||MAIN_PHONE;
}
function priceHTML(key){
  const p=window.CONTENT&&window.CONTENT.prices[key];if(!p)return "";
  const groups=p.groups.map(([g,items])=>`<div class="pgrp">${g?`<h4>${esc(L(g))}</h4>`:""}
    ${items.map(([n,v])=>`<div class="pitem"><span>${esc(L(n))}</span><b>${esc(v)} ₸</b></div>`).join("")}</div>`).join("");
  return `<div class="mh"><h3>${esc(L(p.name))}</h3><div class="role">${T("m_price")} · ${T("s_note")}</div></div>
    <div class="plist">${groups}</div>
    <div class="mfoot-cta"><button class="btn btn-mint" data-book="">${T("b_book")}</button></div>`;
}
function bioHTML(k){
  const b=window.CONTENT&&window.CONTENT.bios[k];const d=DOCS.find(x=>x.k===k);if(!b||!d)return "";
  return `<div class="mh"><h3>${esc(docName(d))}</h3><div class="role">${esc(L(b.role))} · ${d.y} ${esc(T("yrs"))}</div></div>
    <div class="bio">${L(b.text).map(p=>`<p>${esc(p)}</p>`).join("")}</div>
    <div class="mfoot-cta"><button class="btn btn-mint" data-book="${SP2SVC[d.sp]}" data-doc="${esc(docName(d))}" data-phone="${tel(d.ph)}">${T("b_book")}</button></div>`;
}
function pkgHTML(){
  const ps=window.CONTENT&&window.CONTENT.packages;if(!ps)return "";
  return `<div class="mh"><h3>${T("m_pkg")}</h3><div class="role">${T("m_pkg_sub")}</div></div>
    ${ps.map(p=>`<div class="pkg">
      <div class="pkg-h"><b>${esc(L(p.name))}</b><span>${esc(p.price)}</span></div>
      <div class="per">${esc(L(p.period))}</div>
      ${p.groups.map(([g,items])=>`<div class="pgrp"><h4>${esc(L(g))}</h4>
        ${items.map(([n,v])=>`<div class="pitem"><span>${esc(L(n))}</span><b>${esc(v)}</b></div>`).join("")}</div>`).join("")}
    </div>`).join("")}
    <div class="mfoot-cta"><button class="btn btn-mint" data-book="pakety">${T("b_book")}</button></div>`;
}
function openLightbox(src,alt){lb.querySelector("img").src=src;lb.querySelector("img").alt=alt||"";
  lb.classList.add("on");lb.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function closeLightbox(){lb.classList.remove("on");lb.setAttribute("aria-hidden","true");
  if(!modal.classList.contains("on"))document.body.style.overflow=""}

function sendWA(form){
  const g=n=>{const el=form.querySelector(`[name=${n}]`);return el?el.value.trim():""};
  const s=form.querySelector("select");
  const sv=s&&s.value?s.options[s.selectedIndex].text:T("f_any");
  const msg=T("wa").replace("{n}",g("n")||"-").replace("{p}",g("p")||"-").replace("{s}",sv).replace("{c}",g("c")||"-");
  const phone=(form.closest("#modal-body")&&mbody.dataset.phone)||MAIN_PHONE;
  window.open("https://wa.me/"+phone+"?text="+encodeURIComponent(msg),"_blank");
}

/* ---------- события ---------- */
document.addEventListener("click",e=>{
  const f=e.target.closest(".chip");            if(f){FILTER=f.dataset.f;renderDocs();return}
  const bk=e.target.closest("[data-book]");     if(bk){openBook(bk.dataset.book,bk.dataset.doc,bk.dataset.phone);return}
  const pr=e.target.closest("[data-price]");    if(pr){openModal(priceHTML(pr.dataset.price));return}
  const bi=e.target.closest("[data-bio]");      if(bi){openModal(bioHTML(bi.dataset.bio));return}
  const pk=e.target.closest("[data-pkg]");      if(pk){openModal(pkgHTML());return}
  const im=e.target.closest("[data-img]");      if(im){openLightbox(im.dataset.img,im.getAttribute("aria-label"));return}
  const sd=e.target.closest("[data-send]");     if(sd){sendWA(sd.closest(".form"));return}
  if(e.target.closest("#lightbox [data-close]")||e.target===lb){closeLightbox();return}
  if(e.target.closest("#modal [data-close]")||e.target===modal){closeModal();return}
  if(e.target.closest(".menu a"))document.body.classList.remove("menu-open");
});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeLightbox();closeModal();document.body.classList.remove("menu-open")}});

$("#burger").addEventListener("click",()=>{
  const open=document.body.classList.toggle("menu-open");
  $("#burger").setAttribute("aria-expanded",open);
});
$("#next").addEventListener("click",nextCard);

$$(".lang button").forEach(b=>b.addEventListener("click",()=>{
  LANG=b.dataset.lang;
  try{localStorage.setItem("am_lang",LANG)}catch(e){}
  const u=new URL(location);u.searchParams.set("lang",LANG);history.replaceState(null,"",u);
  renderStatic();buildDeck();bindScan();
  if(modal.classList.contains("on"))closeModal();
}));

/* точки на карте тела */
$$(".hot").forEach(h=>{
  const go=()=>{location.hash=h.dataset.go};
  h.addEventListener("click",go);
  h.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();go()}});
});

/* шапка и нижняя панель */
new IntersectionObserver(([en])=>{
  const past=!en.isIntersecting;
  $("#hdr").classList.toggle("solid",past);
  document.body.classList.toggle("bar-on",past);
},{threshold:0,rootMargin:"-60px 0px 0px 0px"}).observe($("#glavnaya"));

/* класс lit запускает анимации иконок внутри блока; сами блоки видны сразу */
let scanIO;
function bindScan(){
  scanIO&&scanIO.disconnect();
  scanIO=new IntersectionObserver(es=>es.forEach(en=>{
    if(en.isIntersecting){en.target.classList.add("lit");scanIO.unobserve(en.target)}
  }),{rootMargin:"0px",threshold:0});
  $$(".s").forEach(el=>{if(!el.classList.contains("lit"))scanIO.observe(el)});
}

/* счётчики */
function count(el){
  const n=+el.dataset.n,suf=el.dataset.suf||"",t0=performance.now(),d=1400;
  (function f(t){const p=Math.min(1,(t-t0)/d),e=1-Math.pow(1-p,3);
    el.textContent=Math.round(n*e).toLocaleString("ru-RU").replace(/ /g," ")+suf;
    if(p<1)requestAnimationFrame(f)})(t0);
}

/* заголовок героя не должен вылезать за контейнер (казахский текст длиннее) */
function fitTitle(){
  const h=$("#h1");if(!h)return;
  h.style.fontSize="";
  const box=h.parentElement.clientWidth;let guard=0;
  while(h.scrollWidth>box&&guard<12){
    const cur=parseFloat(getComputedStyle(h).fontSize);
    h.style.fontSize=(cur*0.95).toFixed(2)+"px";guard++;
  }
}
addEventListener("resize",fitTitle);

/* якоря для рекламы */
function pinHash(){
  const id=location.hash.slice(1);if(!id)return;
  const el=document.getElementById(id);if(!el)return;
  if(el.classList.contains("svc")){
    el.classList.add("lit");el.classList.remove("pin");void el.offsetWidth;
    el.classList.add("pin");setTimeout(()=>el.classList.remove("pin"),2600);
  }
}
addEventListener("hashchange",pinHash);

/* ---------- старт ---------- */
renderStatic();buildDeck();bindScan();
addEventListener("load",()=>{
  document.body.classList.add("go");
  fitTitle();
  setTimeout(()=>$$("[data-n]").forEach(count),1800);
  if(location.hash)setTimeout(()=>{
    const el=document.getElementById(location.hash.slice(1));
    el&&el.scrollIntoView({behavior:"smooth",block:"start"});pinHash();
  },300);
});

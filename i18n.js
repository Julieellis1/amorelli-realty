/* Amorelli Realty i18n: es, zh (Simplified), el, bn. English is the in-HTML default. */
(function () {
  "use strict";
  var STR = {
  "banner": {
    "es": "Vista previa conceptual independiente · no es el sitio web oficial ni aprobado del negocio",
    "zh": "独立概念预览 · 非官方或经批准的企业网站",
    "el": "Ανεξάρτητη εννοιολογική προεπισκόπηση · όχι ο επίσημος ή εγκεκριμένος ιστότοπος της επιχείρησης",
    "bn": "স্বতন্ত্র ধারণা প্রিভিউ · অফিসিয়াল বা অনুমোদিত ব্যবসায়িক ওয়েবসাইট নয়"
  },
  "nav.buy": {
    "es": "Comprar",
    "zh": "买房",
    "el": "Αγορά",
    "bn": "কিনুন"
  },
  "nav.sell": {
    "es": "Vender",
    "zh": "卖房",
    "el": "Πώληση",
    "bn": "বিক্রি করুন"
  },
  "nav.rent": {
    "es": "Alquilar",
    "zh": "租房",
    "el": "Ενοικίαση",
    "bn": "ভাড়া"
  },
  "nav.commercial": {
    "es": "Comercial",
    "zh": "商业地产",
    "el": "Επαγγελματικά",
    "bn": "বাণিজ্যিক"
  },
  "nav.story": {
    "es": "Nuestra historia",
    "zh": "我们的故事",
    "el": "Η ιστορία μας",
    "bn": "আমাদের গল্প"
  },
  "nav.team": {
    "es": "Equipo",
    "zh": "团队",
    "el": "Ομάδα",
    "bn": "টিম"
  },
  "nav.contact": {
    "es": "Contacto",
    "zh": "联系我们",
    "el": "Επικοινωνία",
    "bn": "যোগাযোগ"
  },
  "nav.cta": {
    "es": "Tasación gratuita",
    "zh": "免费估价",
    "el": "Δωρεάν εκτίμηση",
    "bn": "বিনামূল্যে মূল্যায়ন"
  },
  "hero.kicker": {
    "es": "Astoria, Queens · Desde 1978",
    "zh": "皇后区阿斯托利亚 · 始于1978年",
    "el": "Αστόρια, Κουίνς · Από το 1978",
    "bn": "অ্যাস্টোরিয়া, কুইন্স · ১৯৭৮ থেকে"
  },
  "hero.title": {
    "es": "La agencia familiar <em>de Astoria desde 1978.</em>",
    "zh": "阿斯托利亚的<em>家族地产经纪，始于1978年。</em>",
    "el": "Το οικογενειακό μεσιτικό <em>της Αστόριας από το 1978.</em>",
    "bn": "<em>১৯৭৮ থেকে</em> অ্যাস্টোরিয়ার পারিবারিক ব্রোকারেজ।"
  },
  "hero.sub": {
    "es": "Votada la mejor agencia inmobiliaria de Queens diez años seguidos (2017–2026). Tres generaciones de la familia Halvatzis ayudando a Queens a comprar, vender y alquilar.",
    "zh": "连续十年（2017–2026）被评为皇后区最佳房地产经纪公司。Halvatzis家族三代人帮助皇后区居民买房、卖房和租房。",
    "el": "Ψηφισμένο ως το καλύτερο μεσιτικό γραφείο του Κουίνς δέκα συνεχή χρόνια (2017–2026). Τρεις γενιές της οικογένειας Χαλβατζή βοηθούν το Κουίνς να αγοράζει, να πουλά και να νοικιάζει.",
    "bn": "টানা দশ বছর (২০১৭–২০২৬) কুইন্সের সেরা রিয়েল এস্টেট এজেন্সি নির্বাচিত। Halvatzis পরিবারের তিন প্রজন্ম কুইন্সকে বাড়ি কিনতে, বিক্রি করতে ও ভাড়া নিতে সাহায্য করছে।"
  },
  "hero.cta1": {
    "es": "Obtén una tasación gratuita",
    "zh": "获取免费房屋估价",
    "el": "Δωρεάν εκτίμηση κατοικίας",
    "bn": "বিনামূল্যে বাড়ির মূল্যায়ন নিন"
  },
  "hero.cta2": {
    "es": "Ver propiedades",
    "zh": "浏览房源",
    "el": "Δείτε τα ακίνητα",
    "bn": "তালিকা দেখুন"
  },
  "hero.orcall": {
    "es": "O llame al",
    "zh": "或致电",
    "el": "Ή καλέστε",
    "bn": "অথবা কল করুন"
  },
  "hero.s1l": {
    "es": "en Queens",
    "zh": "在皇后区",
    "el": "στο Κουίνς",
    "bn": "কুইন্সে"
  },
  "hero.s2l": {
    "es": "ventas",
    "zh": "笔交易",
    "el": "πωλήσεις",
    "bn": "বিক্রি"
  },
  "hero.s3l": {
    "es": "Lo mejor del condado",
    "zh": "行政区最佳",
    "el": "Τα καλύτερα του δήμου",
    "bn": "বরোর সেরা"
  },
  "stats.founded": {
    "es": "Fundación",
    "zh": "成立",
    "el": "Ίδρυση",
    "bn": "প্রতিষ্ঠা"
  },
  "stats.totalsales": {
    "es": "Ventas totales",
    "zh": "总成交",
    "el": "Συνολικές πωλήσεις",
    "bn": "মোট বিক্রি"
  },
  "stats.avgsale": {
    "es": "Venta promedio",
    "zh": "平均成交价",
    "el": "Μέση πώληση",
    "bn": "গড় বিক্রি"
  },
  "stats.sales12": {
    "es": "Ventas en los últimos 12 meses",
    "zh": "过去12个月成交",
    "el": "Πωλήσεις τελευταίων 12 μηνών",
    "bn": "গত ১২ মাসে বিক্রি"
  },
  "stats.wins": {
    "es": "Años seguidos como los mejores del condado",
    "zh": "连续获评行政区最佳",
    "el": "Συνεχόμενες διακρίσεις",
    "bn": "টানা বরো সেরা জয়"
  },
  "list.kicker": {
    "es": "Propiedades destacadas",
    "zh": "精选房源",
    "el": "Επιλεγμένα ακίνητα",
    "bn": "বাছাই করা তালিকা"
  },
  "list.title": {
    "es": "Hogares que hemos <em>llevado al mercado.</em>",
    "zh": "我们推向市场的<em>房源。</em>",
    "el": "Σπίτια που <em>βγάλαμε στην αγορά.</em>",
    "bn": "যেসব বাড়ি আমরা <em>বাজারে এনেছি।</em>"
  },
  "list.lead": {
    "es": "Desde edificios de cuatro familias en Astoria hasta casas unifamiliares en Whitestone.",
    "zh": "从阿斯托利亚的四家庭投资房到怀特斯通的独栋别墅。",
    "el": "Από πολυκατοικίες τεσσάρων οικογενειών στην Αστόρια έως μονοκατοικίες στο Γουάιτστοουν.",
    "bn": "অ্যাস্টোরিয়ার চার-পরিবারের বিনিয়োগ ভবন থেকে হোয়াইটস্টোনের একক-পরিবারের বাড়ি পর্যন্ত।"
  },
  "list.hood": {
    "es": "Barrio",
    "zh": "社区",
    "el": "Γειτονιά",
    "bn": "এলাকা"
  },
  "list.allhood": {
    "es": "Todos los barrios",
    "zh": "所有社区",
    "el": "Όλες οι γειτονιές",
    "bn": "সব এলাকা"
  },
  "list.h_astorialic": {
    "es": "Astoria / LIC",
    "zh": "阿斯托利亚 / 长岛市",
    "el": "Αστόρια / LIC",
    "bn": "অ্যাস্টোরিয়া / LIC"
  },
  "list.h_bayside": {
    "es": "Bayside",
    "zh": "贝赛",
    "el": "Μπέισαϊντ",
    "bn": "বেসাইড"
  },
  "list.h_collegepoint": {
    "es": "College Point",
    "zh": "大学点",
    "el": "Κόλετζ Πόιντ",
    "bn": "কলেজ পয়েন্ট"
  },
  "list.h_elmhurst": {
    "es": "Elmhurst",
    "zh": "艾姆赫斯特",
    "el": "Έλμχερστ",
    "bn": "এলমহার্স্ট"
  },
  "list.h_flushing": {
    "es": "Flushing",
    "zh": "法拉盛",
    "el": "Φλάσινγκ",
    "bn": "ফ্লাশিং"
  },
  "list.h_freshmeadows": {
    "es": "Fresh Meadows",
    "zh": "新鲜草原",
    "el": "Φρες Μέντοους",
    "bn": "ফ্রেশ মেডোজ"
  },
  "list.h_jacksonheights": {
    "es": "Jackson Heights",
    "zh": "杰克逊高地",
    "el": "Τζάκσον Χάιτς",
    "bn": "জ্যাকসন হাইটস"
  },
  "list.h_sunnyside": {
    "es": "Sunnyside",
    "zh": "桑尼赛德",
    "el": "Σάνισαϊντ",
    "bn": "সানিসাইড"
  },
  "list.h_woodside": {
    "es": "Woodside",
    "zh": "伍德赛德",
    "el": "Γούντσαϊντ",
    "bn": "উডসাইড"
  },
  "list.type": {
    "es": "Tipo",
    "zh": "类型",
    "el": "Τύπος",
    "bn": "ধরন"
  },
  "list.t_all": {
    "es": "Todos",
    "zh": "全部",
    "el": "Όλα",
    "bn": "সব"
  },
  "list.t_res": {
    "es": "Residencial",
    "zh": "住宅",
    "el": "Κατοικίες",
    "bn": "আবাসিক"
  },
  "list.t_multi": {
    "es": "Multifamiliar",
    "zh": "多家庭",
    "el": "Πολυκατοικίες",
    "bn": "বহু-পরিবার"
  },
  "list.t_com": {
    "es": "Comercial",
    "zh": "商业",
    "el": "Επαγγελματικά",
    "bn": "বাণিজ্যিক"
  },
  "list.t_condo": {
    "es": "Condo/Co-op",
    "zh": "公寓/合作公寓",
    "el": "Διαμερίσματα",
    "bn": "কন্ডো/কো-অপ"
  },
  "list.t_rent": {
    "es": "Alquileres",
    "zh": "出租",
    "el": "Ενοικιάσεις",
    "bn": "ভাড়া"
  },
  "list.t_land": {
    "es": "Terrenos",
    "zh": "土地",
    "el": "Οικόπεδα",
    "bn": "জমি"
  },
  "list.badge_sale": {
    "es": "En venta",
    "zh": "在售",
    "el": "Προς πώληση",
    "bn": "বিক্রির জন্য"
  },
  "list.badge_sold": {
    "es": "Vendida",
    "zh": "已售",
    "el": "Πουλήθηκε",
    "bn": "বিক্রীত"
  },
  "list.empty": {
    "es": "Ninguna propiedad coincide con tu búsqueda.",
    "zh": "没有符合您搜索的房源。",
    "el": "Κανένα ακίνητο δεν ταιριάζει στην αναζήτησή σας.",
    "bn": "আপনার খোঁজের সাথে কোনো তালিকা মেলেনি।"
  },
  "list.empty_sub": {
    "es": "Nuestros agentes saben qué saldrá al mercado antes de publicarse.",
    "zh": "我们的经纪人会在房源上市前就知道市场动态。",
    "el": "Οι μεσίτες μας ξέρουν τι θα βγει στην αγορά πριν δημοσιευτεί.",
    "bn": "আমাদের এজেন্টরা তালিকাভুক্ত হওয়ার আগেই জানেন কী বাজারে আসছে।"
  },
  "list.empty_cta": {
    "es": "Pregunta por las propiedades actuales",
    "zh": "咨询当前房源",
    "el": "Ρωτήστε για τα τρέχοντα ακίνητα",
    "bn": "বর্তমান তালিকা সম্পর্কে জিজ্ঞাসা করুন"
  },
  "list.past": {
    "es": "Venta reciente:",
    "zh": "近期成交：",
    "el": "Πρόσφατη πώληση:",
    "bn": "সাম্প্রতিক বিক্রি:"
  },
  "svc.kicker": {
    "es": "02 — Qué hacemos",
    "zh": "02 — 我们的服务",
    "el": "02 — Τι κάνουμε",
    "bn": "০২ — আমরা যা করি"
  },
  "svc.title": {
    "es": "Todo tipo de mudanza, <em>una oficina familiar.</em>",
    "zh": "各种搬迁需求，<em>一个家族办公室。</em>",
    "el": "Κάθε είδους μετακόμιση, <em>ένα οικογενειακό γραφείο.</em>",
    "bn": "সব ধরনের স্থানান্তর, <em>একটি পারিবারিক অফিস।</em>"
  },
  "svc.c1t": {
    "es": "Residencial",
    "zh": "住宅",
    "el": "Κατοικίες",
    "bn": "আবাসিক"
  },
  "svc.c1d": {
    "es": "Compra y venta de hogares en Queens, desde primeros apartamentos hasta casas familiares.",
    "zh": "在皇后区买卖房屋，从第一套公寓到家庭住宅。",
    "el": "Αγορά και πώληση σπιτιών στο Κουίνς, από πρώτα διαμερίσματα έως οικογενειακές κατοικίες.",
    "bn": "কুইন্সে বাড়ি কেনাবেচা, প্রথম অ্যাপার্টমেন্ট থেকে পারিবারিক বাড়ি পর্যন্ত।"
  },
  "svc.c2t": {
    "es": "Multifamiliar",
    "zh": "多家庭住宅",
    "el": "Πολυκατοικίες",
    "bn": "বহু-পরিবার"
  },
  "svc.c2d": {
    "es": "Casas de una a tres familias para vivir y edificios de inversión.",
    "zh": "一至三家庭自住房和投资房。",
    "el": "Σπίτια μίας έως τριών οικογενειών για ιδιοκατοίκηση και επενδυτικά κτίρια।",
    "bn": "এক থেকে তিন পরিবারের বসবাসযোগ্য বাড়ি ও বিনিয়োগ ভবন।"
  },
  "svc.c3t": {
    "es": "Comercial y uso mixto",
    "zh": "商业与混合用途",
    "el": "Επαγγελματικά & μικτής χρήσης",
    "bn": "বাণিজ্যিক ও মিশ্র-ব্যবহার"
  },
  "svc.c3d": {
    "es": "Locales comerciales, edificios de uso mixto y alquiler comercial.",
    "zh": "临街商铺、混合用途建筑和商业租赁。",
    "el": "Καταστήματα, κτίρια μικτής χρήσης και επαγγελματικές μισθώσεις।",
    "bn": "দোকানঘর, মিশ্র-ব্যবহারের ভবন ও বাণিজ্যিক লিজ।"
  },
  "svc.c4t": {
    "es": "Alquileres y propietarios",
    "zh": "租赁与房东服务",
    "el": "Ενοικιάσεις & ιδιοκτήτες",
    "bn": "ভাড়া ও বাড়িওয়ালা সেবা"
  },
  "svc.c4d": {
    "es": "Encontramos inquilinos calificados y hacemos que alquilar se sienta personal, no corporativo.",
    "zh": "我们为您找到合格的租户，让租房体验有人情味，而非冷冰冰的公司化。",
    "el": "Βρίσκουμε αξιόπιστους ενοικιαστές και κάνουμε την ενοικίαση προσωπική, όχι εταιρική।",
    "bn": "আমরা যোগ্য ভাড়াটে খুঁজে দিই এবং ভাড়াকে ব্যক্তিগত অনুভূতি দিই, কর্পোরেট নয়।"
  },
  "svc.c5t": {
    "es": "Nuevos desarrollos",
    "zh": "新楼盘",
    "el": "Νέες αναπτύξεις",
    "bn": "নতুন ডেভেলপমেন্ট"
  },
  "svc.c5d": {
    "es": "Comercialización de obra nueva con tours 3D, tours virtuales y campañas digitales.",
    "zh": "用3D看房、虚拟看房和数字营销推广新建楼盘。",
    "el": "Προώθηση νεόδμητων με 3D περιηγήσεις, εικονικές περιηγήσεις και ψηφιακές καμπάνιες।",
    "bn": "3D ট্যুর, ভার্চুয়াল ট্যুর ও ডিজিটাল প্রচারণায় নতুন নির্মাণের বিপণন।"
  },
  "quote.text": {
    "es": "Tenemos una política de puertas abiertas. No somos agentes secretos.",
    "zh": "我们实行开门政策。我们不是神秘特工。",
    "el": "Έχουμε πολιτική ανοιχτής πόρτας. Δεν είμαστε μυστικοί πράκτορες।",
    "bn": "আমাদের ওপেন-ডোর নীতি আছে। আমরা গোপন এজেন্ট নই।"
  },
  "quote.attr": {
    "es": "Paul Halvatzis, corredor",
    "zh": "Paul Halvatzis, 经纪人",
    "el": "Paul Halvatzis, μεσίτης",
    "bn": "Paul Halvatzis, ব্রোকার"
  },
  "quote.sub": {
    "es": "Queens es uno de los lugares más diversos del mundo, y nos enorgullece la capacidad multilingüe de nuestros agentes.",
    "zh": "皇后区是世界上最多元化的地方之一，我们为经纪人的多语言能力感到自豪。",
    "el": "Το Κουίνς είναι ένα από τα πιο πολυπολιτισμικά μέρη στον κόσμο, και είμαστε περήφανοι για τις πολύγλωσσες ικανότητες των μεσιτών μας।",
    "bn": "কুইন্স বিশ্বের সবচেয়ে বৈচিত্র্যময় জায়গাগুলোর একটি, এবং আমাদের এজেন্টদের বহুভাষিক দক্ষতা নিয়ে আমরা গর্বিত।"
  },
  "rev.kicker": {
    "es": "03 — Lo que dicen los clientes",
    "zh": "03 — 客户评价",
    "el": "03 — Λόγια πελατών",
    "bn": "০৩ — ক্লায়েন্টদের কথা"
  },
  "rev.title": {
    "es": "En <em>sus palabras.</em>",
    "zh": "<em>他们</em>的话。",
    "el": "Με <em>τα δικά τους</em> λόγια।",
    "bn": "<em>তাদের</em> ভাষায়।"
  },
  "rev.note": {
    "es": "5.0★ en Zillow con 299 reseñas del equipo.",
    "zh": "Zillow 5.0★，团队共299条评价。",
    "el": "5.0★ στο Zillow με 299 κριτικές της ομάδας।",
    "bn": "Zillow-তে ২৯৯টি টিম রিভিউতে ৫.০★।"
  },
  "val.kicker": {
    "es": "06 — Tasación gratuita",
    "zh": "06 — 免费估价",
    "el": "06 — Δωρεάν εκτίμηση",
    "bn": "০৬ — বিনামূল্যে মূল্যায়ন"
  },
  "val.title": {
    "es": "¿Cuánto vale <em>tu casa?</em>",
    "zh": "您的房子<em>值多少？</em>",
    "el": "Πόσο αξίζει <em>το σπίτι σας;</em>",
    "bn": "আপনার বাড়ির <em>দাম কত?</em>"
  },
  "val.intro": {
    "es": "Desde el primer contacto hasta la fecha de cierre y más allá, el equipo de Amorelli buscará incansablemente la mejor solución para tus objetivos.",
    "zh": "从初次接触到交割日乃至之后，Amorelli团队将不懈地为您实现目标寻找最佳方案。",
    "el": "Από την πρώτη επαφή έως την ημερομηνία ολοκλήρωσης και μετά, η ομάδα της Amorelli θα επιδιώκει ακούραστα τη σωστή λύση για τους στόχους σας।",
    "bn": "প্রথম যোগাযোগ থেকে ক্লোজিং তারিখ এবং তার পরেও, Amorelli টিম আপনার লক্ষ্যের জন্য সঠিক সমাধান নিরলসভাবে খুঁজবে।"
  },
  "val.tab_sell": {
    "es": "Vender",
    "zh": "卖房",
    "el": "Πώληση",
    "bn": "বিক্রি"
  },
  "val.tab_buy": {
    "es": "Comprar",
    "zh": "买房",
    "el": "Αγορά",
    "bn": "কেনা"
  },
  "f.name": {
    "es": "Nombre",
    "zh": "姓名",
    "el": "Όνομα",
    "bn": "নাম"
  },
  "f.phone": {
    "es": "Teléfono",
    "zh": "电话",
    "el": "Τηλέφωνο",
    "bn": "ফোন"
  },
  "f.email": {
    "es": "Correo electrónico",
    "zh": "电子邮件",
    "el": "Email",
    "bn": "ইমেইল"
  },
  "f.address": {
    "es": "Dirección de la propiedad",
    "zh": "房产地址",
    "el": "Διεύθυνση ακινήτου",
    "bn": "সম্পত্তির ঠিকানা"
  },
  "f.ptype": {
    "es": "Tipo de propiedad",
    "zh": "房产类型",
    "el": "Τύπος ακινήτου",
    "bn": "সম্পত্তির ধরন"
  },
  "f.single": {
    "es": "Unifamiliar",
    "zh": "独栋",
    "el": "Μονοκατοικία",
    "bn": "একক-পরিবার"
  },
  "f.multi": {
    "es": "Multifamiliar",
    "zh": "多家庭",
    "el": "Πολυκατοικία",
    "bn": "বহু-পরিবার"
  },
  "f.condo": {
    "es": "Condo/Co-op",
    "zh": "公寓/合作公寓",
    "el": "Διαμέρισμα",
    "bn": "কন্ডো/কো-অপ"
  },
  "f.comtype": {
    "es": "Comercial",
    "zh": "商业",
    "el": "Επαγγελματικό",
    "bn": "বাণিজ্যিক"
  },
  "f.land": {
    "es": "Terreno",
    "zh": "土地",
    "el": "Οικόπεδο",
    "bn": "জমি"
  },
  "f.beds": {
    "es": "Habitaciones",
    "zh": "卧室",
    "el": "Υπνοδωμάτια",
    "bn": "বেডরুম"
  },
  "f.baths": {
    "es": "Baños",
    "zh": "浴室",
    "el": "Μπάνια",
    "bn": "বাথরুম"
  },
  "f.lot": {
    "es": "Tamaño del lote",
    "zh": "占地面积",
    "el": "Μέγεθος οικοπέδου",
    "bn": "জমির আকার"
  },
  "f.year": {
    "es": "Año de construcción",
    "zh": "建造年份",
    "el": "Έτος κατασκευής",
    "bn": "নির্মাণের বছর"
  },
  "f.msg": {
    "es": "Mensaje",
    "zh": "留言",
    "el": "Μήνυμα",
    "bn": "বার্তা"
  },
  "f.areas": {
    "es": "Zonas preferidas",
    "zh": "意向区域",
    "el": "Προτιμώμενες περιοχές",
    "bn": "পছন্দের এলাকা"
  },
  "f.price": {
    "es": "Rango de precio",
    "zh": "价格区间",
    "el": "Εύρος τιμής",
    "bn": "দামের সীমা"
  },
  "val.note": {
    "es": "Respondemos en un día hábil.",
    "zh": "我们将在一个工作日内回复。",
    "el": "Απαντάμε εντός μίας εργάσιμης ημέρας।",
    "bn": "এক কর্মদিবসের মধ্যে উত্তর দিই।"
  },
  "val.submit": {
    "es": "Solicitar mi tasación",
    "zh": "申请估价",
    "el": "Ζητήστε την εκτίμησή μου",
    "bn": "আমার মূল্যায়নের অনুরোধ করুন"
  },
  "val.again": {
    "es": "Enviar otra solicitud",
    "zh": "再发送一份申请",
    "el": "Στείλτε άλλο αίτημα",
    "bn": "আরেকটি অনুরোধ পাঠান"
  },
  "val.talk": {
    "es": "¿Prefiere hablar? <a class=\"x-link x-link--rest\" href=\"tel:7182042828\">718-204-2828</a> <a class=\"x-link x-link--rest\" href=\"mailto:info@amorellirealty.com\">info@amorellirealty.com</a>",
    "zh": "想直接沟通？<a class=\"x-link x-link--rest\" href=\"tel:7182042828\">718-204-2828</a> <a class=\"x-link x-link--rest\" href=\"mailto:info@amorellirealty.com\">info@amorellirealty.com</a>",
    "el": "Προτιμάτε να μιλήσουμε; <a class=\"x-link x-link--rest\" href=\"tel:7182042828\">718-204-2828</a> <a class=\"x-link x-link--rest\" href=\"mailto:info@amorellirealty.com\">info@amorellirealty.com</a>",
    "bn": "কথা বলতে চান? <a class=\"x-link x-link--rest\" href=\"tel:7182042828\">718-204-2828</a> <a class=\"x-link x-link--rest\" href=\"mailto:info@amorellirealty.com\">info@amorellirealty.com</a>"
  },
  "cta.kicker": {
    "es": "Amorelli Realty · Desde 1978",
    "zh": "Amorelli Realty · 始于1978年",
    "el": "Amorelli Realty · Από το 1978",
    "bn": "Amorelli Realty · ১৯৭৮ থেকে"
  },
  "cta.title": {
    "es": "Hablemos de <em>tu próximo paso.</em>",
    "zh": "聊聊您的<em>下一步。</em>",
    "el": "Ας μιλήσουμε για <em>το επόμενο βήμα σας.</em>",
    "bn": "আপনার <em>পরবর্তী পদক্ষেপ</em> নিয়ে কথা বলি।"
  },
  "cta.val": {
    "es": "Tasación gratuita",
    "zh": "免费估价",
    "el": "Δωρεάν εκτίμηση",
    "bn": "বিনামূল্যে মূল্যায়ন"
  },
  "cta.call": {
    "es": "Llama al 718-204-2828",
    "zh": "致电 718-204-2828",
    "el": "Καλέστε 718-204-2828",
    "bn": "কল করুন 718-204-2828"
  },
  "buy.kicker": {
    "es": "Comprar",
    "zh": "买房",
    "el": "Αγορά",
    "bn": "কেনা"
  },
  "buy.title": {
    "es": "Encuentra tu lugar <em>en Queens.</em>",
    "zh": "在皇后区找到<em>您的家。</em>",
    "el": "Βρείτε τη θέση σας <em>στο Κουίνς.</em>",
    "bn": "কুইন্সে <em>আপনার ঠিকানা</em> খুঁজুন।"
  },
  "buy.lead": {
    "es": "Desde primeros apartamentos hasta casas familiares, tres generaciones de la familia Halvatzis han ayudado a Queens a comprar. Díganos qué busca y haremos el trabajo.",
    "zh": "从第一套公寓到家庭住宅，Halvatzis家族三代人帮助皇后区居民买房。告诉我们您的需求，剩下的交给我们。",
    "el": "Από πρώτα διαμερίσματα έως οικογενειακές κατοικίες, τρεις γενιές της οικογένειας Χαλβατζή έχουν βοηθήσει το Κουίνς να αγοράσει. Πείτε μας τι ψάχνετε και θα κάνουμε εμείς τη δουλειά.",
    "bn": "প্রথম অ্যাপার্টমেন্ট থেকে পারিবারিক বাড়ি পর্যন্ত, Halvatzis পরিবারের তিন প্রজন্ম কুইন্সকে কিনতে সাহায্য করেছে। আপনি কী খুঁজছেন জানান, বাকিটা আমরা করব।"
  },
  "buy.s_kicker": {
    "es": "Cómo funciona",
    "zh": "流程",
    "el": "Πώς λειτουργεί",
    "bn": "কীভাবে কাজ করে"
  },
  "buy.s_intro": {
    "es": "Empiece con nuestra intake de comprador: sus zonas preferidas y su rango de precio. Le mostramos casas que valen la pena, organizamos las visitas y le acompañamos hasta el cierre.",
    "zh": "从我们的买家需求表开始：您的意向区域和价格区间。我们为您匹配值得看的房子，安排看房，并陪伴您直到交割。",
    "el": "Ξεκινήστε με τη φόρμα αγοραστή μας: τις προτιμώμενες περιοχές και το εύρος τιμής σας. Σας ταιριάζουμε με σπίτια που αξίζουν, οργανώνουμε τις επισκέψεις και σας συνοδεύουμε μέχρι την ολοκλήρωση.",
    "bn": "আমাদের ক্রেতা ইনটেক দিয়ে শুরু করুন: আপনার পছন্দের এলাকা ও দামের সীমা। আমরা দেখার মতো বাড়ির সাথে মেলাই, ভিজিটের ব্যবস্থা করি এবং ক্লোজিং পর্যন্ত সাথে থাকি।"
  },
  "buy.f1t": {
    "es": "Tus zonas, tu presupuesto",
    "zh": "您的区域，您的预算",
    "el": "Οι περιοχές σας, ο προϋπολογισμός σας",
    "bn": "আপনার এলাকা, আপনার বাজেট"
  },
  "buy.f1d": {
    "es": "Astoria, Long Island City, Bayside, College Point, Elmhurst, Flushing, Fresh Meadows, Jackson Heights, Sunnyside, Woodside: díganos dónde y cuánto puede gastar.",
    "zh": "阿斯托利亚、长岛市、贝赛、大学点、艾姆赫斯特、法拉盛、新鲜草原、杰克逊高地、桑尼赛德、伍德赛德：告诉我们地点和预算。",
    "el": "Αστόρια, Λονγκ Άιλαντ Σίτι, Μπέισαϊντ, Κόλετζ Πόιντ, Έλμχερστ, Φλάσινγκ, Φρες Μέντοους, Τζάκσον Χάιτς, Σάνισαϊντ, Γούντσαϊντ: πείτε μας πού και πόσα μπορείτε να ξοδέψετε.",
    "bn": "অ্যাস্টোরিয়া, লং আইল্যান্ড সিটি, বেসাইড, কলেজ পয়েন্ট, এলমহার্স্ট, ফ্লাশিং, ফ্রেশ মেডোজ, জ্যাকসন হাইটস, সানিসাইড, উডসাইড: কোথায় এবং কত খরচ করতে পারবেন জানান।"
  },
  "buy.f2t": {
    "es": "Puerta abierta, no discurso de ventas",
    "zh": "开门迎客，而非销售话术",
    "el": "Ανοιχτή πόρτα, όχι πωλησιακά τρικ",
    "bn": "খোলা দরজা, বিক্রির বক্তৃতা নয়"
  },
  "buy.f3t": {
    "es": "Un equipo que habla tu idioma",
    "zh": "说您语言的团队",
    "el": "Μια ομάδα που μιλά τη γλώσσα σας",
    "bn": "আপনার ভাষায় কথা বলা টিম"
  },
  "sell.kicker": {
    "es": "Vender",
    "zh": "卖房",
    "el": "Πώληση",
    "bn": "বিক্রি"
  },
  "sell.title": {
    "es": "Vende con el equipo <em>más premiado de Queens.</em>",
    "zh": "与皇后区<em>获奖最多的团队</em>一起卖房。",
    "el": "Πουλήστε με την <em>πιο βραβευμένη ομάδα</em> του Κουίνς।",
    "bn": "কুইন্সের <em>সবচেয়ে পুরস্কৃত টিমের</em> সাথে বিক্রি করুন।"
  },
  "sell.lead": {
    "es": "Más de 275 ventas con un precio promedio de $1.2M, y 34 ventas en los últimos 12 meses. Cuando llegue el momento de vender, ese historial trabaja para usted.",
    "zh": "275多笔交易，平均成交价120万美元，过去12个月成交34笔。卖房时，这份成绩单为您效力。",
    "el": "Πάνω από 275 πωλήσεις με μέση τιμή $1.2M, και 34 πωλήσεις τους τελευταίους 12 μήνες. Όταν έρθει η ώρα να πουλήσετε, αυτό το ιστορικό δουλεύει για εσάς.",
    "bn": "গড়ে $1.2M দামে ২৭৫+ বিক্রি, গত ১২ মাসে ৩৪টি বিক্রি। বিক্রির সময় এলে, এই রেকর্ড আপনার জন্য কাজ করে।"
  },
  "sell.s_kicker": {
    "es": "Qué obtienes",
    "zh": "您将获得",
    "el": "Τι κερδίζετε",
    "bn": "আপনি যা পাবেন"
  },
  "sell.s_intro": {
    "es": "Empiece con una tasación gratuita. Nuestra intake de vendedor cubre tipo de propiedad, habitaciones, baños, tamaño del lote y año de construcción: el número que le damos es fundamentado, no adivinado.",
    "zh": "从免费估价开始。我们的卖家信息表涵盖房产类型、卧室、浴室、占地面积和建造年份——我们给您的数字有依据，而非猜测。",
    "el": "Ξεκινήστε με δωρεάν εκτίμηση. Η φόρμα πωλητή μας καλύπτει τύπο ακινήτου, υπνοδωμάτια, μπάνια, μέγεθος οικοπέδου και έτος κατασκευής: ο αριθμός που σας δίνουμε είναι τεκμηριωμένος, όχι μαντεψιά.",
    "bn": "বিনামূল্যে মূল্যায়ন দিয়ে শুরু করুন। আমাদের বিক্রেতা ইনটেকে সম্পত্তির ধরন, বেডরুম, বাথরুম, জমির আকার ও নির্মাণের বছর থাকে: আমরা যে সংখ্যা দিই তা যুক্তিসঙ্গত, অনুমান নয়।"
  },
  "sell.f1t": {
    "es": "Promocionada como se merece",
    "zh": "值得的推广",
    "el": "Προώθηση όπως της αξίζει",
    "bn": "যোগ্য বিপণন"
  },
  "sell.f1d": {
    "es": "Tours virtuales, tours 3D, campañas digitales y folletos clásicos: su casa mostrada de la mejor manera, dondequiera que miren los compradores.",
    "zh": "虚拟看房、3D看房、数字营销和经典传单：让您的房子以最佳面貌出现在买家目光所及之处。",
    "el": "Εικονικές περιηγήσεις, 3D περιηγήσεις, ψηφιακές καμπάνιες και κλασικά φυλλάδια: το σπίτι σας προβεβλημένο με τον καλύτερο τρόπο, όπου κι αν κοιτάζουν οι αγοραστές.",
    "bn": "ভার্চুয়াল ট্যুর, 3D ট্যুর, ডিজিটাল প্রচারণা ও ক্লাসিক লিফলেট: ক্রেতারা যেখানেই তাকান, আপনার বাড়ি সেরা রূপে।"
  },
  "sell.f2t": {
    "es": "Cierres recientes",
    "zh": "近期成交",
    "el": "Πρόσφατες πωλήσεις",
    "bn": "সাম্প্রতিক ক্লোজিং"
  },
  "sell.f3t": {
    "es": "Diez años de confianza",
    "zh": "十年信赖",
    "el": "Δέκα χρόνια εμπιστοσύνης",
    "bn": "দশ বছরের আস্থা"
  },
  "sell.f3d": {
    "es": "Votada la mejor agencia inmobiliaria de Queens diez años seguidos (2017-2026). Los vendedores eligen el nombre en el que sus vecinos ya confían.",
    "zh": "连续十年（2017-2026）被评为皇后区最佳房地产经纪公司。卖家选择邻居们早已信赖的名字。",
    "el": "Ψηφισμένο ως το καλύτερο μεσιτικό γραφείο του Κουίνς δέκα συνεχή χρόνια (2017-2026). Οι πωλητές επιλέγουν το όνομα που οι γείτονές τους ήδη εμπιστεύονται.",
    "bn": "টানা দশ বছর (২০১৭-২০২৬) কুইন্সের সেরা রিয়েল এস্টেট এজেন্সি। বিক্রেতারা সেই নাম বেছে নেন যাকে প্রতিবেশীরা ইতিমধ্যে বিশ্বাস করেন।"
  },
  "rent.kicker": {
    "es": "Alquilar",
    "zh": "租房",
    "el": "Ενοικίαση",
    "bn": "ভাড়া"
  },
  "rent.title": {
    "es": "Alquilar, <em>a la manera personal.</em>",
    "zh": "租房，<em>有人情味的方式。</em>",
    "el": "Ενοικίαση, <em>με προσωπικό τρόπο.</em>",
    "bn": "ভাড়া, <em>ব্যক্তিগত ভঙ্গিতে।</em>"
  },
  "rent.lead": {
    "es": "Algunos agentes realmente se preocupan por sus barrios. Nuestros inquilinos lo dicen mejor: trabajar con nosotros se siente personal, no corporativo.",
    "zh": "有些经纪人真的关心他们的社区。我们的租户说得最好：与我们合作有人情味，而非公司化。",
    "el": "Κάποιοι μεσίτες νοιάζονται πραγματικά για τις γειτονιές τους. Οι ενοικιαστές μας το λένε καλύτερα: η συνεργασία μαζί μας είναι προσωπική, όχι εταιρική.",
    "bn": "কিছু এজেন্ট সত্যিই তাদের এলাকার যত্ন নেন। আমাদের ভাড়াটেরা সবচেয়ে ভালো বলেন: আমাদের সাথে কাজ করা ব্যক্তিগত মনে হয়, কর্পোরেট নয়।"
  },
  "rent.s_kicker": {
    "es": "Para inquilinos y propietarios",
    "zh": "面向租户与房东",
    "el": "Για ενοικιαστές και ιδιοκτήτες",
    "bn": "ভাড়াটে ও বাড়িওয়ালাদের জন্য"
  },
  "rent.s_intro": {
    "es": "¿Busca un lugar o busca al inquilino ideal? De cualquier manera, obtiene el mismo equipo de puertas abiertas.",
    "zh": "找房子，还是找理想租户？无论哪种，您得到的都是同样开门迎客的团队。",
    "el": "Ψάχνετε για σπίτι ή για τον ιδανικό ενοικιαστή; Με κάθε τρόπο, έχετε την ίδια ομάδα με ανοιχτές πόρτες.",
    "bn": "জায়গা খুঁজছেন, নাকি সঠিক ভাড়াটে? যেভাবেই হোক, একই ওপেন-ডোর টিম পাবেন।"
  },
  "rent.f1t": {
    "es": "Para inquilinos",
    "zh": "面向租户",
    "el": "Για ενοικιαστές",
    "bn": "ভাড়াটেদের জন্য"
  },
  "rent.f1d": {
    "es": "Desde el primer contacto hasta la firma del contrato, una persona real le guía: visitas, solicitudes y respuestas honestas sobre cada cuadra.",
    "zh": "从初次接触到签约，真人全程陪伴：看房、申请，以及对每个街区的诚实解答。",
    "el": "Από την πρώτη επαφή έως την υπογραφή του συμβολαίου, ένας πραγματικός άνθρωπος σας καθοδηγεί: επισκέψεις, αιτήσεις και ειλικρινείς απαντήσεις για κάθε τετράγωνο.",
    "bn": "প্রথম যোগাযোগ থেকে লিজ স্বাক্ষর পর্যন্ত, একজন বাস্তব মানুষ পথ দেখান: ভিজিট, আবেদন এবং প্রতিটি ব্লক সম্পর্কে সৎ উত্তর।"
  },
  "rent.f2t": {
    "es": "Para propietarios",
    "zh": "面向房东",
    "el": "Για ιδιοκτήτες",
    "bn": "বাড়িওয়ালাদের জন্য"
  },
  "rent.f2d": {
    "es": "Encontramos inquilinos calificados para su propiedad, desde casas unifamiliares hasta edificios multifamiliares, sin complicaciones.",
    "zh": "我们为您的房产找到合格租户，从独栋到多家庭住宅，全程无忧。",
    "el": "Βρίσκουμε αξιόπιστους ενοικιαστές για το ακίνητό σας, από μονοκατοικίες έως πολυκατοικίες, χωρίς ταλαιπωρία.",
    "bn": "একক-পরিবারের বাড়ি থেকে বহু-পরিবারের ভবন পর্যন্ত, আপনার সম্পত্তির জন্য যোগ্য ভাড়াটে খুঁজে দিই, ঝামেলা ছাড়াই।"
  },
  "rent.f3t": {
    "es": "También espacio comercial",
    "zh": "也有商业空间",
    "el": "Και επαγγελματικοί χώροι",
    "bn": "বাণিজ্যিক জায়গাও"
  },
  "rent.f3d": {
    "es": "¿Necesita un local o una unidad comercial? Nuestro equipo alquila espacio comercial en todo Queens, rápido.",
    "zh": "需要临街商铺或商业单元？我们的团队在皇后区各地快速出租商业空间。",
    "el": "Χρειάζεστε κατάστημα ή επαγγελματικό χώρο; Η ομάδα μας μισθώνει επαγγελματικούς χώρους σε όλο το Κουίνς, γρήγορα.",
    "bn": "দোকানঘর বা বাণিজ্যিক ইউনিট দরকার? আমাদের টিম পুরো কুইন্সে দ্রুত বাণিজ্যিক জায়গা লিজ দেয়।"
  },
  "commercial.title": {
    "es": "Comercial en Queens, <em>en manos locales.</em>",
    "zh": "皇后区商业地产，<em>本地人经手。</em>",
    "el": "Επαγγελματικά στο Κουίνς, <em>από ντόπιους.</em>",
    "bn": "কুইন্সের বাণিজ্যিক, <em>স্থানীয়দের হাতে।</em>"
  },
  "commercial.lead": {
    "es": "Locales, edificios de uso mixto, propiedades de inversión y alquiler comercial: con 48 años de conocimiento de las calles de Queens detrás de cada trato.",
    "zh": "临街商铺、混合用途建筑、投资房产和商业租赁：每笔交易背后都有48年的皇后区街区经验。",
    "el": "Καταστήματα, κτίρια μικτής χρήσης, επενδυτικά ακίνητα και επαγγελματικές μισθώσεις: με 48 χρόνια γνώσης των δρόμων του Κουίνς πίσω από κάθε συμφωνία.",
    "bn": "দোকানঘর, মিশ্র-ব্যবহারের ভবন, বিনিয়োগ সম্পত্তি ও বাণিজ্যিক লিজ: প্রতিটি চুক্তির পেছনে কুইন্সের রাস্তার ৪৮ বছরের জ্ঞান।"
  },
  "com.s_kicker": {
    "es": "Qué manejamos",
    "zh": "我们的业务",
    "el": "Τι αναλαμβάνουμε",
    "bn": "আমরা যা সামলাই"
  },
  "com.s_intro": {
    "es": "Ya sea que compre su primer edificio de inversión o alquile un espacio comercial, obtiene un equipo que conoce estas cuadras a fondo.",
    "zh": "无论您是购买第一栋投资楼，还是出租商业空间，您得到的团队都深谙这些街区。",
    "el": "Είτε αγοράζετε το πρώτο σας επενδυτικό κτίριο είτε μισθώνετε επαγγελματικό χώρο, έχετε μια ομάδα που ξέρει αυτά τα τετράγωνα απ’ έξω.",
    "bn": "প্রথম বিনিয়োগ ভবন কিনুন বা বাণিজ্যিক জায়গা লিজ দিন, এই ব্লকগুলো হাড়ে হাড়ে চেনা টিম পাবেন।"
  },
  "com.f1t": {
    "es": "Propiedades de inversión",
    "zh": "投资房产",
    "el": "Επενδυτικά ακίνητα",
    "bn": "বিনিয়োগ সম্পত্তি"
  },
  "com.f1d": {
    "es": "Representación de compradores y vendedores para propiedades de inversión multifamiliares y de uso mixto en Queens.",
    "zh": "在皇后区为多家庭和混合用途投资房产提供买卖代理。",
    "el": "Εκπροσώπηση αγοραστών και πωλητών για επενδυτικά ακίνητα πολλαπλών οικογενειών και μικτής χρήσης στο Κουίνς.",
    "bn": "কুইন্সে বহু-পরিবার ও মিশ্র-ব্যবহারের বিনিয়োগ সম্পত্তির ক্রেতা-বিক্রেতা প্রতিনিধিত্ব।"
  },
  "com.f2t": {
    "es": "Alquiler comercial",
    "zh": "商业租赁",
    "el": "Επαγγελματικές μισθώσεις",
    "bn": "বাণিজ্যিক লিজ"
  },
  "com.f2d": {
    "es": "Locales y unidades comerciales, promocionados y alquilados con el mismo cuidado que nuestras propiedades residenciales.",
    "zh": "临街商铺和商业单元，以与住宅房源同样的用心进行推广和出租。",
    "el": "Καταστήματα και επαγγελματικοί χώροι, προβεβλημένοι και μισθωμένοι με την ίδια φροντίδα όπως οι κατοικίες μας.",
    "bn": "দোকানঘর ও বাণিজ্যিক ইউনিট, আমাদের আবাসিক তালিকার মতোই যত্নে বিপণন ও লিজ।"
  },
  "com.f3t": {
    "es": "Servicios para propietarios",
    "zh": "房东服务",
    "el": "Υπηρεσίες ιδιοκτητών",
    "bn": "বাড়িওয়ালা সেবা"
  },
  "com.f3d": {
    "es": "Colocación de inquilinos y apoyo en alquileres para propietarios comerciales que quieren que se maneje bien.",
    "zh": "为希望省心的商业房东提供租户安置和租赁支持。",
    "el": "Τοποθέτηση ενοικιαστών και υποστήριξη μισθώσεων για επαγγελματίες ιδιοκτήτες που θέλουν σωστή διαχείριση.",
    "bn": "সঠিক ব্যবস্থাপনা চান এমন বাণিজ্যিক বাড়িওয়ালাদের জন্য ভাড়াটে বসানো ও লিজ সহায়তা।"
  },
  "story.kicker": {
    "es": "01 — Nuestra historia",
    "zh": "01 — 我们的故事",
    "el": "01 — Η ιστορία μας",
    "bn": "০১ — আমাদের গল্প"
  },
  "story.intro": {
    "es": "Amorelli Realty ha sido un pilar en Astoria, Queens durante más de 40 años. En 1978 Anita Halvatzis compró la empresa y, con la ayuda de sus dos hijos Paul y Jim, la convirtió en una de las oficinas más exitosas del condado.",
    "zh": "Amorelli Realty 40多年来一直是皇后区阿斯托利亚的中流砥柱。1978年，Anita Halvatzis收购了公司，在两个儿子Paul和Jim的帮助下，将其发展为行政区最成功的办公室之一。",
    "el": "Η Amorelli Realty είναι σταθερή αξία στην Αστόρια του Κουίνς για πάνω από 40 χρόνια. Το 1978 η Anita Halvatzis αγόρασε την εταιρεία και, με τη βοήθεια των δύο γιων της Paul και Jim, την έκανε ένα από τα πιο επιτυχημένα γραφεία του δήμου.",
    "bn": "৪০ বছরেরও বেশি সময় ধরে Amorelli Realty কুইন্সের অ্যাস্টোরিয়ায় একটি স্তম্ভ। ১৯৭৮ সালে Anita Halvatzis কোম্পানিটি কেনেন এবং তার দুই ছেলে Paul ও Jim-এর সাহায্যে এটিকে বরোর সবচেয়ে সফল অফিসগুলোর একটিতে পরিণত করেন।"
  },
  "rec.kicker": {
    "es": "05 — Reconocimiento",
    "zh": "05 — 荣誉",
    "el": "05 — Αναγνώριση",
    "bn": "০৫ — স্বীকৃতি"
  },
  "rec.intro": {
    "es": "Mejor agencia inmobiliaria de Queens, cada año de 2017 a 2026.",
    "zh": "2017年至2026年，每年都是皇后区最佳房地产经纪公司。",
    "el": "Καλύτερο μεσιτικό γραφείο του Κουίνς, κάθε χρόνο από το 2017 έως το 2026.",
    "bn": "২০১৭ থেকে ২০২৬, প্রতি বছর কুইন্সের সেরা রিয়েল এস্টেট এজেন্সি।"
  },
  "team.kicker": {
    "es": "04 — La familia y el equipo",
    "zh": "04 — 家族与团队",
    "el": "04 — Η οικογένεια & η ομάδα",
    "bn": "০৪ — পরিবার ও টিম"
  },
  "team.agents_h": {
    "es": "Nuestros agentes",
    "zh": "我们的经纪人",
    "el": "Οι μεσίτες μας",
    "bn": "আমাদের এজেন্টরা"
  },
  "team.intro": {
    "es": "Multilingües y arraigados en Queens.",
    "zh": "多语言，深耕皇后区。",
    "el": "Πολύγλωσσοι και ριζωμένοι στο Κουίνς.",
    "bn": "বহুভাষিক, এবং কুইন্সে প্রোথিত।"
  },
  "contact.kicker": {
    "es": "07 — Visítanos",
    "zh": "07 — 来访",
    "el": "07 — Επισκεφθείτε μας",
    "bn": "০৭ — আমাদের দেখতে আসুন"
  },
  "contact.addr_note": {
    "es": "Busca el toldo azul.",
    "zh": "认准蓝色雨篷。",
    "el": "Ψάξτε για την μπλε τέντα.",
    "bn": "নীল শামিয়ানা খুঁজুন।"
  },
  "contact.hours_wd": {
    "es": "Lun–Vie",
    "zh": "周一至周五",
    "el": "Δευ–Παρ",
    "bn": "সোম–শুক্র"
  },
  "contact.hours_we": {
    "es": "Sáb–Dom",
    "zh": "周六至周日",
    "el": "Σαβ–Κυρ",
    "bn": "শনি–রবি"
  },
  "contact.directions": {
    "es": "Cómo llegar",
    "zh": "获取路线",
    "el": "Οδηγίες",
    "bn": "দিকনির্দেশনা"
  },
  "contact.call": {
    "es": "Llamar a la oficina",
    "zh": "致电办公室",
    "el": "Καλέστε το γραφείο",
    "bn": "অফিসে কল করুন"
  },
  "foot.about": {
    "es": "Corredor familiar de Astoria NY especializado en propiedades residenciales, comerciales y de alquiler en Queens desde 1978.",
    "zh": "自1978年以来，专注于皇后区住宅、商业和租赁物业的阿斯托利亚家族经纪公司。",
    "el": "Οικογενειακό μεσιτικό γραφείο στην Αστόρια της Νέας Υόρκης, εξειδικευμένο σε οικιστικά, επαγγελματικά και ενοικιαζόμενα ακίνητα του Κουίνς από το 1978.",
    "bn": "১৯৭৮ থেকে কুইন্সের আবাসিক, বাণিজ্যিক ও ভাড়া সম্পত্তিতে বিশেষজ্ঞ অ্যাস্টোরিয়া NY-ভিত্তিক পারিবারিক রিয়েল এস্টেট ব্রোকারেজ।"
  },
  "foot.explore": {
    "es": "Explorar",
    "zh": "探索",
    "el": "Εξερευνήστε",
    "bn": "ঘুরে দেখুন"
  },
  "foot.listings": {
    "es": "Propiedades",
    "zh": "房源",
    "el": "Ακίνητα",
    "bn": "তালিকা"
  },
  "foot.services": {
    "es": "Qué hacemos",
    "zh": "我们的服务",
    "el": "Τι κάνουμε",
    "bn": "আমরা যা করি"
  },
  "foot.social": {
    "es": "Social",
    "zh": "社交媒体",
    "el": "Κοινωνικά",
    "bn": "সোশ্যাল"
  },
  "foot.equal": {
    "es": "Igualdad de oportunidades de vivienda",
    "zh": "平等住房机会",
    "el": "Ίσες ευκαιρίες στέγασης",
    "bn": "সমান আবাসন সুযোগ"
  },
  "foot.rights": {
    "es": "© 2026 Amorelli Realty LLC",
    "zh": "© 2026 Amorelli Realty LLC",
    "el": "© 2026 Amorelli Realty LLC",
    "bn": "© 2026 Amorelli Realty LLC"
  }
};

  var LANGS = ['en', 'es', 'zh', 'el', 'bn'];
  var NAMES = { en: 'English', es: 'Español', zh: '\u4e2d\u6587', el: '\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac', bn: '\u09ac\u09be\u0982\u09b2\u09be' };
  var TITLES = {
    home: { es: "Amorelli Realty \u00b7 Agencia familiar de Astoria desde 1978", zh: "Amorelli Realty \u00b7 \u963f\u65af\u6258\u5229\u4e9a\u5bb6\u65cf\u5730\u4ea7\u7ecf\u7eaa\uff0c\u59cb\u4e8e1978\u5e74", el: "Amorelli Realty \u00b7 \u03a4\u03bf \u03bf\u03b9\u03ba\u03bf\u03b3\u03b5\u03bd\u03b5\u03b9\u03b1\u03ba\u03cc \u03bc\u03b5\u03c3\u03b9\u03c4\u03b9\u03ba\u03cc \u03c4\u03b7\u03c2 \u0391\u03c3\u03c4\u03cc\u03c1\u03b9\u03b1\u03c2 \u03b1\u03c0\u03cc \u03c4\u03bf 1978", bn: "Amorelli Realty \u00b7 \u09e7\u09ef\u09ed\u09ee \u09a5\u09c7\u0995\u09c7 \u0985\u09cd\u09af\u09be\u09b8\u09cd\u099f\u09cb\u09b0\u09bf\u09af\u09bc\u09be\u09b0 \u09aa\u09be\u09b0\u09bf\u09ac\u09be\u09b0\u09bf\u0995 \u09ac\u09cd\u09b0\u09cb\u0995\u09be\u09b0\u09c7\u099c" },
    "est.title": {"es": "Estimación instantánea orientativa", "zh": "即时粗略估价", "el": "Άμεση ενδεικτική εκτίμηση", "bn": "তাৎক্ষণিক আনুমানিক মূল্য"},
    "est.sub": {"es": "Tres preguntas, un rango orientativo. Para un número preciso, envíe el formulario completo.", "zh": "三个问题，一个粗略区间。如需精确数字，请填写下方完整表格。", "el": "Τρεις ερωτήσεις, ένα ενδεικτικό εύρος. Για ακριβή αριθμό, στείλτε την πλήρη φόρμα.", "bn": "তিনটি প্রশ্ন, একটি আনুমানিক সীমা। সঠিক সংখ্যার জন্য নিচের পূর্ণ ফর্ম পাঠান।"},
    "est.sqft": {"es": "Pies cuadrados interiores aprox.", "zh": "室内面积（平方英尺）约", "el": "Κατά προσέγγιση εσωτερικά τ.μ.", "bn": "আনুমানিক ভেতরের বর্গফুট"},
    "est.go": {"es": "Obtener mi estimación", "zh": "获取估价", "el": "Λάβετε την εκτίμησή μου", "bn": "আমার অনুমান নিন"},
    "est.outk": {"es": "Su estimación orientativa", "zh": "您的粗略估价", "el": "Η ενδεικτική σας εκτίμηση", "bn": "আপনার আনুমানিক মূল্য"},
    "est.disclaimer": {"es": "Un valor orientativo basado en ventas recientes por pie cuadrado en Queens — no es una tasación formal. El estado, la distribución y la cuadra mueven el número real.", "zh": "基于皇后区近期每平方英尺成交价的粗略估算——非正式评估。房屋状况、布局和所在街区会影响实际价格。", "el": "Ενδεικτική τιμή βάσει πρόσφατων πωλήσεων ανά τετραγωνικό στο Κουίνς — όχι επίσημη εκτίμηση. Η κατάσταση, η διαρρύθμιση και το τετράγωνο αλλάζουν τον πραγματικό αριθμό.", "bn": "কুইন্সের সাম্প্রতিক প্রতি বর্গফুট বিক্রির ভিত্তিতে আনুমানিক — আনুষ্ঠানিক মূল্যায়ন নয়। অবস্থা, লেআউট ও ব্লক আসল সংখ্যা বদলে দেয়।"},
    "est.full": {"es": "Obtener mi tasación completa", "zh": "获取完整估价", "el": "Λάβετε την πλήρη εκτίμησή μου", "bn": "আমার পূর্ণ মূল্যায়ন নিন"},
    "count.tpl": {"es": "{s} de {t} mostradas", "zh": "共 {t} 条，显示 {s} 条", "el": "{s} από {t} εμφανίζονται", "bn": "{t}টির মধ্যে {s}টি দেখানো হচ্ছে"}
  };
  function current() {
    try { var s = localStorage.getItem('amorelli-lang'); if (s && STR[s] !== undefined || s === 'en') return s; } catch (e) {}
    return 'en';
  }
  function apply(lang) {
    var d = document;
    d.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : lang);
    var els = d.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      var entry = STR[key];
      if (lang === 'en') {
        var orig = els[i].getAttribute('data-i18n-en');
        if (orig !== null) els[i].innerHTML = orig;
      } else if (entry && entry[lang] !== undefined) {
        if (els[i].getAttribute('data-i18n-en') === null) {
          els[i].setAttribute('data-i18n-en', els[i].innerHTML);
        }
        els[i].innerHTML = entry[lang];
      }
    }
    // listing count template
    if (window.__amorelliCount) window.__amorelliCount();
    // document title for home
    var h = (location.hash || '').replace(/^#\/?/, '');
    if ((h === '' || h === 'home') && TITLES.home[lang]) d.title = TITLES.home[lang];
    // sync selectors
    var sels = d.querySelectorAll('.x-langsel');
    for (var j = 0; j < sels.length; j++) sels[j].value = lang;
    try { localStorage.setItem('amorelli-lang', lang); } catch (e) {}
  }
  function init() {
    var lang = current();
    // build selector options
    var sels = document.querySelectorAll('.x-langsel');
    for (var i = 0; i < sels.length; i++) {
      (function (sel) {
        if (sel.options.length) return;
        LANGS.forEach(function (l) {
          var o = document.createElement('option');
          o.value = l; o.textContent = NAMES[l];
          sel.appendChild(o);
        });
        sel.value = lang;
        sel.addEventListener('change', function () { apply(sel.value); });
      })(sels[i]);
    }
    if (lang !== 'en') apply(lang);
  }
  window.__amorelliLang = apply;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ============================================================
   BALTON — shared site data
   Single source of truth for company info + product categories.
   Product lists & catalogs reflect Balton's uploaded catalogues.
   Edit here to update every page.
   ============================================================ */

window.BALTON = {
  company: {
    name: 'Balton',
    legal: 'Balton Tıbbi Cihazlar',
    foundedWorld: '1992',
    foundedTR: '1995',
    exportCountries: '90',
    tagline: '1995’ten beri Türkiye’de',
    phone: '+90 312 219 82 40',
    phoneHref: '+903122198240',
    email: 'balton.turkiye@yahoo.com.tr',
    address: 'Çankaya Mahallesi Farabi Sokak\nNo: 24/14 Çankaya Ankara',
    hours: 'Pazartesi – Cuma · 09:00 – 18:00',
  },

  /* Navigation (order matters) */
  nav: [
    { label: 'Anasayfa',    href: 'Anasayfa.html' },
    { label: 'Hakkımızda',  href: 'Hakkimizda.html' },
    { label: 'Ürünlerimiz', href: 'Urunlerimiz.html' },
    { label: 'İletişim',    href: 'Iletisim.html' },
  ],

  /* Product categories — keyed by slug (used in Urun-Kategori.html?kategori=slug) */
  categories: {
    'anaesthesiology': {
      name: 'ANAESTHESIOLOGY',
      tr: 'Anestezi',
      icon: 'syringe',
      short: 'Epidural ve spinal anestezi setleri, büyük damar kateterizasyonu ve infüzyon ürünleri.',
      intro: 'Anestezi alanında epidural ve spinal uygulamalardan büyük damar erişimine ve termodilüsyona kadar geniş bir tek kullanımlık ürün yelpazesi sunuyoruz. Tüm ürünler klinik kullanım için güncel üretim standartlarına göre üretilmektedir.',
      products: [
        'Epidural Anestezi Setleri',
        'Epidural–Spinal Blok Setleri',
        'Büyük Damar Kateterizasyon Setleri',
        'Termodilüsyon Setleri',
        'Spinal Anestezi Setleri ve İğneleri',
        'Lomber Ponksiyon ve Biyopsi İğneleri',
        'İnfüzyon Pompa Uzatıcıları',
        'Aspirasyon ve Besleme Kateterleri',
      ],
      pdf: 'catalogs/anaesthesiology.pdf',
    },
    'cardiology': {
      name: 'CARDIOLOGY',
      tr: 'Kardiyoloji',
      icon: 'heart-pulse',
      short: 'Koroner stentler, balon kateterler, valvüloplasti ve intraaortik balon sistemleri.',
      intro: 'Kardiyoloji portföyümüz; koroner stentler (BMS/DES), bifürkasyon stentleri, koroner balon ve valvüloplasti kateterleri ile intraaortik balon ve elektrofizyoloji ürünlerini kapsar. Stent üretiminde dünyada kullanılan güncel teknoloji ve hammaddeler kullanılmaktadır.',
      products: [
        'Koroner Stentler (BMS / DES)',
        'Bifürkasyon Stentleri (BiOSS®)',
        'Koroner Balon Kateterleri',
        'Valvüloplasti Balon Kateterleri',
        'İntraaortik Balon Kateter Setleri (IABC)',
        'Elektrofizyoloji ve Geçici Pacing Elektrotları',
        'Perikardiyal Drenaj Setleri',
        'Tanısal Kateterler ve İntroduserler',
      ],
      pdf: 'catalogs/cardiology.pdf',
    },
    'endovascular': {
      name: 'ENDOVASCULAR',
      tr: 'Endovasküler',
      icon: 'route',
      short: 'Periferik, renal ve karotis stentler, ilaç kaplı balonlar, kılavuz teller ve mikrosferler.',
      intro: 'Endovasküler ürün grubumuz, periferik arter hastalığının tedavisine yönelik minimal invaziv tanı ve tedavi cihazlarını kapsar. Kendinden genişleyen ve kobalt-krom periferik stentler, karotis stentler, ilaç kaplı balonlar, nöroproteksiyon sistemleri ve kılavuz teller portföyümüzde yer alır.',
      products: [
        'Periferik Stentler (Jaguar® / Neptun C®)',
        'Renal Stentler (Nefro C®)',
        'Karotis Stentler (Mer®)',
        'Periferik Balon Kateterler (Lovix®)',
        'İlaç Kaplı Periferik Balonlar (PAK® / paklitaksel)',
        'Nöroproteksiyon Sistemi (Robin®)',
        'Mikrosferler (Embocure®)',
        'Kılavuz Teller (Enter® / çelik / teflon kaplı)',
        'İntroduserler',
      ],
      pdf: 'catalogs/endovascular.pdf',
    },
    'dialysis': {
      name: 'DIALYSIS',
      tr: 'Diyaliz',
      icon: 'droplets',
      short: 'Diyaliz kateter setleri, hemodiyaliz iğneleri ve diyaliz aksesuarları.',
      intro: 'Diyaliz alanında tek, çift ve üç lümenli kateter setleri, hemodiyaliz iğneleri ve uygulamaya yönelik aksesuarlar sunuyoruz. Ürünlerimiz güvenli ve tekrarlanabilir klinik kullanım için tasarlanmıştır.',
      products: [
        'Diyaliz Setleri (tek / çift / üç lümenli)',
        'Diyaliz Kateterleri',
        'Hemodiyaliz İğneleri',
        'Diyaliz Uzatıcıları ve Aksesuarları',
      ],
      pdf: 'catalogs/dialysis.pdf',
    },
    'gynecology': {
      name: 'GYNECOLOGY',
      tr: 'Kadın Doğum',
      icon: 'baby',
      short: 'HSG kateterleri, inseminasyon, oosit aspirasyon ve embriyo transfer setleri.',
      intro: 'Kadın doğum ve jinekoloji alanında tanısal ürünler (HSG kateterleri ve histerosalpingografi setleri), intrauterin inseminasyon ürünleri ile oosit aspirasyon ve embriyo transfer setleri sunuyoruz.',
      products: [
        'HSG Kateterleri ve Histerosalpingografi Setleri',
        'İnseminasyon Kateterleri (Frydman / Craft / Düz tip)',
        'Oosit Aspirasyon Setleri ve İğneleri',
        'Embriyo Transfer Setleri',
        'Endometriyal Biyopsi Setleri',
      ],
      pdf: 'catalogs/gynecology.pdf',
    },
    'surgery-gastroenterology': {
      name: 'SURGERY AND GASTROENTEROLOGY',
      tr: 'Cerrahi ve Gastroenteroloji',
      icon: 'scissors',
      short: 'Drenaj ve embolektomi kateterleri, biliyer stentler ve Troyca dilatasyon balonları.',
      intro: 'Genel cerrahi ve gastroenteroloji alanında drenaj ve embolektomi kateterlerinden toraks drenajına; biliyer plastik stentlerden Troyca endoskopik dilatasyon balonlarına kadar kapsamlı bir ürün grubu sunuyoruz.',
      products: [
        'Drenaj Kateter Setleri (tek / iki aşamalı)',
        'Embolektomi Kateterleri',
        'Cerrahi Saha Aspirasyon Kateterleri',
        'Toraks Drenaj Kateterleri (trokarlı / trokarsız)',
        'Troyca® Endoskopik Dilatasyon Balonları',
        'Biliyer Drenaj Setleri ve Plastik Stentler (Greenen / Pigtail / Zimmon)',
        'Taş Çıkarma ve Oklüzyon Kateterleri',
        'Gastrik, Duodenal ve Rektal Tüpler',
      ],
      pdf: 'catalogs/surgery-gastroenterology.pdf',
    },
    'urology': {
      name: 'UROLOGY',
      tr: 'Üroloji',
      icon: 'flask-conical',
      short: 'Nefrostomi, sistostomi ve Double J stent setleri ile üreteral kateterler.',
      intro: 'Üroloji alanında nefrostomi ve sistostomi setleri, Double J stent setleri, stent yerleştirme setleri, taş çıkarma sepetleri ve üreteral kateterler sunuyoruz. Ürünler güvenli ve konforlu klinik kullanım için tasarlanmıştır.',
      products: [
        'Nefrostomi Setleri',
        'Sistostomi (Sistofiks) Setleri',
        'Double J Stent Setleri (Pigtail)',
        'Stent Yerleştirme Setleri',
        'Taş Çıkarma Sepeti (Amber®)',
        'Üreteral Kateterler',
        'Nelaton Tip Üriner Kateterler',
      ],
      pdf: 'catalogs/urology.pdf',
    },
    'phlebology': {
      name: 'PHLEBOLOGY',
      tr: 'Fleboloji',
      icon: 'spline',
      short: 'Alt ekstremite venöz tedavisine yönelik Flebogrif® sistemi.',
      intro: 'Fleboloji alanında, yüzeyel venözlerin mekanik ve kimyasal obliterasyonu için geliştirilen Flebogrif® venöz tedavi sistemini sunuyoruz. Termal işlem gerektirmeyen, ayaktan uygulanabilen ve hızlı iyileşme sağlayan bir çözümdür.',
      products: [
        'Flebogrif® Venöz Tedavi Seti',
        'Mekanik–Kimyasal Obliterasyon Sistemi',
        'Yüzeyel Venöz Tedavi Aksesuarları',
      ],
      pdf: 'catalogs/phlebology.pdf',
    },
  },
};

/* Ordered list of category slugs for cards */
window.BALTON.categoryOrder = [
  'anaesthesiology',
  'cardiology',
  'endovascular',
  'dialysis',
  'gynecology',
  'surgery-gastroenterology',
  'urology',
  'phlebology',
];

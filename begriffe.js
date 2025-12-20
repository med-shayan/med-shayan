/* =========================
   KATEGORIEN
========================= */

const kategorien = {
  haematologie: {
    de: "Hämatologie",
    fa: "هماتولوژی"
  },
  kardiologie: {
    de: "Kardiologie",
    fa: "قلب و عروق"
  },
  pneumologie: {
    de: "Pneumologie",
    fa: "ریه"
  },
  allgemein: {
    de: "Allgemeinmedizin",
    fa: "پزشکی عمومی"
  }
};

/* =========================
   MEDIZINISCHE BEGRIFFE
========================= */

const begriffe = [
  {
    name_de: "Anämie",
    name_fa: "کم‌خونی",
    search_de: "anaemie anämie eisenmangel blutarmut",
    search_fa: "کم خونی کم‌خونی",
    category: "haematologie",
    file: "anaemie.html"
  },
  {
    name_de: "Leukozytose",
    name_fa: "لکوسیتوز",
    search_de: "leukozytose erhöhte leukozyten",
    search_fa: "لکوسیتوز",
    category: "haematologie",
    file: "leukozytose.html"
  },
  {
    name_de: "Bradykardie",
    name_fa: "برادی‌کاردی",
    search_de: "bradykardie langsamer puls",
    search_fa: "برادی کاردی برادی‌کاردی",
    category: "kardiologie",
    file: "bradykardie.html"
  },
  {
    name_de: "Tachykardie",
    name_fa: "تاکی‌کاردی",
    search_de: "tachykardie herzrasen schneller puls",
    search_fa: "تاکی کاردی تاکی‌کاردی",
    category: "kardiologie",
    file: "tachykardie.html"
  },
  {
    name_de: "Hypertonie",
    name_fa: "فشار خون بالا",
    search_de: "hypertonie bluthochdruck",
    search_fa: "فشار خون بالا فشارخون بالا",
    category: "kardiologie",
    file: "hypertonie.html"
  },
  {
    name_de: "Hypotonie",
    name_fa: "فشار خون پایین",
    search_de: "hypotonie niedriger blutdruck",
    search_fa: "فشار خون پایین فشارخون پایین",
    category: "kardiologie",
    file: "hypotonie.html"
  },
  {
    name_de: "Dyspnoe",
    name_fa: "تنگی نفس",
    search_de: "dyspnoe atemnot kurzatmigkeit",
    search_fa: "تنگی نفس",
    category: "pneumologie",
    file: "dyspnoe.html"
  },
  {
    name_de: "Ödem",
    name_fa: "ادم",
    search_de: "oedem ödem schwellung",
    search_fa: "ادم ورم",
    category: "allgemein",
    file: "oedem.html"
  },
  {
    name_de: "Synkope",
    name_fa: "سنکوپ",
    search_de: "synkope ohnmacht bewusstlosigkeit",
    search_fa: "سنکوپ غش",
    category: "allgemein",
    file: "synkope.html"
  },
  {
    name_de: "Ikterus",
    name_fa: "یرقان",
    search_de: "ikterus gelbsucht",
    search_fa: "یرقان زردی",
    category: "allgemein",
    file: "ikterus.html"
  }
];

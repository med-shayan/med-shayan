/* =========================
   GLOBALE VARIABLEN
========================= */

let currentLang = "de";
let searchInput = null;
let results = null;

/* =========================
   NORMALISIERUNG
========================= */

function normalizeDe(text) {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .trim();
}

function normalizeFa(text) {
  return text
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/\u200c/g, "")   // Halb-Leerzeichen entfernen
    .replace(/\s+/g, "")     // ALLE Leerzeichen entfernen
    .trim();
}

/* =========================
   SUCHE
========================= */

function search(value) {
  if (!results) return;

  results.innerHTML = "";
  if (!value) return;

  const query = currentLang === "fa"
    ? normalizeFa(value)
    : normalizeDe(value);

  begriffe.forEach(b => {
    const displayText = currentLang === "fa" ? b.name_fa : b.name_de;
    const searchText  = currentLang === "fa" ? b.search_fa : b.search_de;

    if (!displayText || !searchText) return;

    const haystack = currentLang === "fa"
      ? normalizeFa(searchText)
      : normalizeDe(searchText);

    if (haystack.includes(query)) {
      const p = document.createElement("p");
      p.innerHTML = `<a href="${b.file}">${displayText}</a>`;
      results.appendChild(p);
    }
  });
}

/* =========================
   SPRACHWECHSEL (GLOBAL)
========================= */

function setSearchLang(lang) {
  currentLang = lang;

  if (results) results.innerHTML = "";

  if (searchInput && searchInput.value) {
    search(searchInput.value);
  }
}

/* =========================
   INITIALISIERUNG (WICHTIG!)
========================= */

document.addEventListener("DOMContentLoaded", () => {
  searchInput = document.getElementById("search");
  results = document.getElementById("search-results");

  if (!searchInput || !results) return;

  searchInput.addEventListener("input", e => {
    search(e.target.value);
  });

  // Sprache aus localStorage übernehmen
  currentLang = localStorage.getItem("lang") || "de";
});

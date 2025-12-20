let currentLang = "de";

const searchInput = document.getElementById("search");
const results = document.getElementById("search-results");

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
   EVENTS
========================= */

if (searchInput && results) {
  searchInput.addEventListener("input", e => {
    search(e.target.value);
  });
}

/* =========================
   SPRACHWECHSEL
========================= */

function setSearchLang(lang) {
  currentLang = lang;

  // Ergebnisse immer leeren
  if (results) results.innerHTML = "";

  // Suche neu ausführen, falls Text vorhanden
  if (searchInput && searchInput.value) {
    search(searchInput.value);
  }
}

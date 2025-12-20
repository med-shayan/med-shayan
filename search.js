let currentLang = "de";

const searchInput = document.getElementById("search");
const results = document.getElementById("search-results");

function normalizeDe(text) {
  return text.toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss");
}

function search(value) {
  results.innerHTML = "";
  if (!value) return;

  begriffe.forEach(b => {
    const text = currentLang === "fa" ? b.name_fa : b.name_de;
    if (!text) return;

    const check = currentLang === "fa"
      ? text
      : normalizeDe(text);

    const query = currentLang === "fa"
      ? value
      : normalizeDe(value);

    if (check.includes(query)) {
      const p = document.createElement("p");
      p.innerHTML = `<a href="${b.file}">${text}</a>`;
      results.appendChild(p);
    }
  });
}

if (searchInput) {
  searchInput.addEventListener("input", e => {
    search(e.target.value);
  });
}

function setSearchLang(lang) {
  currentLang = lang;
  results.innerHTML = "";
}

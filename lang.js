document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "de";
  applyLang(savedLang);
});

function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyLang(lang);
}

function applyLang(lang) {
  document.querySelectorAll(".lang").forEach(el => {
    el.style.display = "none";
  });

  document.querySelectorAll(".lang." + lang).forEach(el => {
    el.style.display = "block";
  });

  // Suche informieren (falls vorhanden)
  if (typeof setSearchLang === "function") {
    setSearchLang(lang);
  }

  // Suchplatzhalter
  const searchInput = document.getElementById("search");
  if (searchInput) {
    searchInput.placeholder =
      lang === "fa"
        ? "اصطلاح پزشکی را وارد کنید"
        : "Medizinischen Begriff eingeben";
  }
}

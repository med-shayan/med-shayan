/* ========= GLOBALE SPRACHSTEUERUNG ========= */
window.setLang = function (lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll(".lang").forEach(el => {
    el.style.display = "none";
  });

  document.querySelectorAll(".lang." + lang).forEach(el => {
    el.style.display = "block";
  });

  if (typeof setSearchLang === "function") {
    setSearchLang(lang);
  }
};

/* ========= BEIM LADEN ========= */
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "de";
  window.setLang(savedLang);
});

const inputDe = document.getElementById("search");
const inputFa = document.getElementById("search-fa");
const results = document.getElementById("search-results");

function normalize(text) {
  return text.toLowerCase()
    .replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss");
}

function search(lang, value) {
  results.innerHTML = "";
  if (!value) return;

  begriffe.forEach(b => {
    const text = lang === "fa" ? b.name_fa : b.name_de;
    const check = lang === "fa" ? text : normalize(text);

    if (check.includes(lang === "fa" ? value : normalize(value))) {
      const p = document.createElement("p");
      p.innerHTML = `<a href="${b.file}">${text}</a>`;
      results.appendChild(p);
    }
  });
}

if (inputDe) {
  inputDe.addEventListener("input", e => search("de", e.target.value));
}
if (inputFa) {
  inputFa.addEventListener("input", e => search("fa", e.target.value));
}

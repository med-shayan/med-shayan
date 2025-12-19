const searchInput = document.getElementById("search");
const resultsContainer = document.getElementById("search-results");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  resultsContainer.innerHTML = "";

  if (query.length === 0) return;

  const treffer = begriffe.filter(b =>
    b.name.toLowerCase().includes(query)
  );

  treffer.forEach(b => {
    const p = document.createElement("p");
    p.innerHTML = `<a href="${b.file}">${b.name}</a>`;
    resultsContainer.appendChild(p);
  });

  if (treffer.length === 0) {
    resultsContainer.innerHTML = "<p>Kein Begriff gefunden.</p>";
  }
});

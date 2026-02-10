document.addEventListener("input", () => {
  const search = document.getElementById("searchInput")?.value.toLowerCase();
  const filter = document.getElementById("techFilter")?.value;
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    const matchesSearch = card.innerText.toLowerCase().includes(search || "");
    const matchesFilter = filter === "all" || card.dataset.tech === filter;
    card.style.display = matchesSearch && matchesFilter ? "block" : "none";
  });
});
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});
document.querySelector(".generate")?.addEventListener("click", () => {
  alert("AI generation is disabled in demo mode.");
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".section-header").forEach(header => {
    header.addEventListener("click", () => {
      header.parentElement.classList.toggle("open");
    });
  });
});
const themeButton = document.querySelector(".theme-toggle");
const body = document.body;

themeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    themeButton.textContent = "Светлая тема";
    localStorage.setItem("theme", "dark");
  } else {
    themeButton.textContent = "Темная тема";
    localStorage.setItem("theme", "light");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeButton.textContent = "Светлая тема";
  }
});

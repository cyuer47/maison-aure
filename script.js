const button = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav.normal");

button.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const portfolioButton = document.querySelector(".showPortfolioButton");

portfolioButton.addEventListener("click", () => {
  window.location.href = "/portfolio.html";
});

const hamBurger = document.getElementsByClassName("hamburger-container")[0];
const navs = document.getElementsByClassName("navs")[0];
const overlay = document.getElementsByClassName("overlay")[0];

hamBurger.addEventListener("click", () => {
  navs.classList.toggle("active");
  overlay.classList.toggle("active");
});

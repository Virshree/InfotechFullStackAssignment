const menu = document.querySelector(".menu");
const navItems = document.querySelector(".nav-items");
const closeBtn = document.querySelector(".close-btn");
const logo = document.querySelector(".logo");
const overlay = document.querySelector(".overlay");
const contactBtn = document.querySelector(".contact-btn");
// open menu
menu.addEventListener("click", function () {
  navItems.style.display = "flex";
  closeBtn.style.display = "block";
  logo.style.display = "block";
  overlay.style.display = "block";
  contactBtn.style.display = "block";
});

// close menu
closeBtn.addEventListener("click", function () {
  navItems.style.display = "none";
  closeBtn.style.display = "none";
  overlay.style.display = "none";
  contactBtn.style.display = "none";

});

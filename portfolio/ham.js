// Get DOM elements
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("navbar");

// Toggle the active class
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

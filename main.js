// Select the hamburger and nav links
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle menu when hamburger is clicked
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu when clicking on any link
document.querySelectorAll(".nav-links li a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});



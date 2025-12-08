// Select hamburger button and nav links
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle menu when hamburger is clicked
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // Animate hamburger
  navLinks.classList.toggle('active');  // Show/hide menu
});

// Optional: Close menu when a nav link is clicked (for single-page scroll)
document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

const aboutContent = document.querySelector('.about-content');
const aboutBlocks = document.querySelectorAll('.about-block');

// Create dots dynamically
const dotsContainer = document.createElement('div');
dotsContainer.classList.add('about-dots');
aboutBlocks.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('about-dot');
  if(index === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
});
document.querySelector('.about-section').appendChild(dotsContainer);

const dots = document.querySelectorAll('.about-dot');

// Update active dot on scroll
aboutContent.addEventListener('scroll', () => {
  const scrollLeft = aboutContent.scrollLeft;
  const width = aboutContent.clientWidth;
  const index = Math.round(scrollLeft / (width * 0.8)); // 0.8 is card width ratio
  dots.forEach(dot => dot.classList.remove('active'));
  if(dots[index]) dots[index].classList.add('active');
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('active');
  overlay.classList.toggle('active');

  hamburger.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
}

// Open/close menu on hamburger click
hamburger.addEventListener('click', toggleMenu);

// Close menu if clicking on overlay
overlay.addEventListener('click', toggleMenu);

// Optional: close menu when clicking a link (mobile nav)
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', toggleMenu);
});

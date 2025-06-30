document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('overlay'); // Make sure this line exists!

  // Check if all elements are found (good for debugging)
  if (!hamburger || !mobileMenu || !overlay) {
    console.error("One or more essential elements (hamburger, mobileMenu, overlay) not found.");
    return; // Exit if elements are missing
  }

  // Function to toggle the menu and overlay state
  function toggleMenu() {
    hamburger.classList.toggle('active');  // For hamburger animation
    mobileMenu.classList.toggle('open');   // For sliding menu in/out
    overlay.classList.toggle('active');    // This is for the blur/darkening effect

    // Accessibility improvements
    const isMenuOpen = mobileMenu.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isMenuOpen);
    mobileMenu.setAttribute('aria-hidden', !isMenuOpen);

    // Prevent body scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }

  // Event Listeners
  hamburger.addEventListener('click', toggleMenu); // Click hamburger to open/close

  // Click overlay to close the menu
  overlay.addEventListener('click', toggleMenu);

  // Optional: Close menu when a link inside it is clicked
  const mobileNavLinks = mobileMenu.querySelectorAll('a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) {
        toggleMenu(); // Close the menu
      }
    });
  });
});
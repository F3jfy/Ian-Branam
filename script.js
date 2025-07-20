document.addEventListener('DOMContentLoaded', () => {
    // Select all necessary elements from the DOM
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const navLinks = document.querySelectorAll('#mobile-menu .mobile-nav a');

    // --- Core Functions ---

    // Function to open the menu
    const openMenu = () => {
        hamburger.classList.add('active');
        mobileMenu.classList.add('open');
    };

    // Function to close the menu
    const closeMenu = () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
    };

    // --- Event Listeners ---

    // Event listener for the hamburger icon to toggle the menu
    hamburger.addEventListener('click', () => {
        if (mobileMenu.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Event listener for the dedicated close button
    closeMenuBtn.addEventListener('click', closeMenu);

    // Add this new part to make links close the menu
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
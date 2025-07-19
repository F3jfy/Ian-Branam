document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');

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

    // Event listener for the hamburger icon
    hamburger.addEventListener('click', () => {
        if (mobileMenu.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Event listener for the new close button
    closeMenuBtn.addEventListener('click', closeMenu);
});
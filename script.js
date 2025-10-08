document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Functionality (Your original script) ---
    const hamburgerBtn = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            hamburgerBtn.classList.add('active');
        });

        // Function to close the menu
        const closeMenu = () => {
            mobileMenu.classList.remove('open');
            hamburgerBtn.classList.remove('active');
        };

        // Close with the dedicated button if it exists
        if (closeMenuBtn) {
            closeMenuBtn.addEventListener('click', closeMenu);
        }

        // Close menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // --- NEW: Language Translation Functionality ---

    const translations = {
        en: {
            // Navigation
            navHome: "Home",
            navPortfolio: "Portfolio",
            navAbout: "About",
            navContact: "Contact",
            navHomeMobile: "Home",
            navPortfolioMobile: "Portfolio",
            navAboutMobile: "About",
            navContactMobile: "Contact",
            // Hero Section
            heroTitle: "Capturing Motion & Structure",
            heroSubtitle: "Specializing in Automotive and Architectural Photography",
            heroButton: "View My Work",
            // About Section
            aboutTitle: "About Me",
            aboutText: "Hi, I’m Ian Martin Branam, a passionate photographer specializing in automotive and architectural photography. My work focuses on capturing the unique essence of motion and structure with creativity and precision.",
            // Specialties Section
            specialtiesTitle: "Specialties",
            catCars: "Cars",
            catArchitecture: "Architecture",
            catPortraits: "Portraits",
            // Recent Projects Section
            recentTitle: "Recent Projects",
            viperDesc: "A raw American icon, defined by aggressive lines and pure power.",
            challengerDesc: "Modern muscle with a retro soul, built to dominate streets and tracks.",
            lexusDesc: "A refined Japanese coupe blending luxury with V8 performance.",
            // Footer
            footerCopyright: "&copy; 2025 Ian Martin Branam Photography"
        },
        cs: {
            // Navigace
            navHome: "Domů",
            navPortfolio: "Portfolio",
            navAbout: "O mně",
            navContact: "Kontakt",
            navHomeMobile: "Domů",
            navPortfolioMobile: "Portfolio",
            navAboutMobile: "O mně",
            navContactMobile: "Kontakt",
            // Hero sekce
            heroTitle: "Zachycení pohybu a struktury",
            heroSubtitle: "Specializace na automobilovou a architektonickou fotografii",
            heroButton: "Zobrazit mojí práci",
            // O mně
            aboutTitle: "O mně",
            aboutText: "Ahoj, jsem Ian Martin Branam, vášnivý fotograf specializující se na automobilovou a architektonickou fotografii. Moje práce se zaměřuje na zachycení jedinečné podstaty pohybu a struktury s kreativitou a přesností.",
            // Specializace
            specialtiesTitle: "Specializace",
            catCars: "Auta",
            catArchitecture: "Architektura",
            catPortraits: "Portréty",
            // Nedávné projekty
            recentTitle: "Nedávné projekty",
            viperDesc: "Nespoutaná americká ikona, definovaná agresivními liniemi a čistou silou.",
            challengerDesc: "Moderní muscle car s retro duší, stvořený k ovládnutí ulic i okruhů.",
            lexusDesc: "Rafinované japonské kupé, které spojuje luxus s výkonem V8.",
            // Patička
            footerCopyright: "&copy; 2025 Ian Martin Branam Photography"
        }
    };

    const languageSwitcher = document.querySelectorAll(".lang-btn");
    
    const setLanguage = (lang) => {
        // Update all elements with a data-key attribute
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                // Use innerHTML for keys that might contain HTML entities like &copy;
                if (key === 'footerCopyright') {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // Update the lang attribute of the <html> tag
        document.documentElement.lang = lang;
        
        // Save preference to localStorage
        localStorage.setItem('language', lang);

        // Update active button state
        languageSwitcher.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    languageSwitcher.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const selectedLang = event.target.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    // Check for saved language on page load
    const savedLang = localStorage.getItem('language') || 'en'; // Default to English
    setLanguage(savedLang);

});
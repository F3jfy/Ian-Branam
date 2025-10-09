// This single file now controls all website interactivity.

// 1. ALL TRANSLATIONS FOR THE ENTIRE WEBSITE ARE STORED HERE
const translations = {
    // Shared text (header, footer) used on all pages
    shared: {
        en: {
            navHome: "Home",
            navCars: "Cars",
            navPortraits: "Portraits",
            navArchitecture: "Architecture",
            navContact: "Contact",
            footerCopyright: "&copy; 2025 Ian Martin Branam Photography"
        },
        cs: {
            navHome: "Domů",
            navCars: "Auta",
            navPortraits: "Portréty",
            navArchitecture: "Architektura",
            navContact: "Kontakt",
            footerCopyright: "&copy; 2025 Ian Martin Branam Photography"
        }
    },
    // Page-specific text for index.html
    home: {
        en: {
            heroTitle: "Capturing Motion & Structure",
            heroSubtitle: "Specializing in Automotive and Architectural Photography",
            heroButton: "View My Work",
            aboutTitle: "About Me",
            aboutText: "Hi, I’m Ian Martin Branam, a passionate photographer specializing in automotive and architectural photography. My work focuses on capturing the unique essence of motion and structure with creativity and precision.",
            specialtiesTitle: "Specialties",
            catCars: "Cars",
            catArchitecture: "Architecture",
            catPortraits: "Portraits",
            recentTitle: "Recent Projects",
            viperDesc: "A raw American icon, defined by aggressive lines and pure power.",
            challengerDesc: "Modern muscle with a retro soul, built to dominate streets and tracks.",
            lexusDesc: "A refined Japanese coupe blending luxury with V8 performance."
        },
        cs: {
            heroTitle: "Zachycení pohybu a struktury",
            heroSubtitle: "Specializace na automobilovou a architektonickou fotografii",
            heroButton: "Zobrazit mojí práci",
            aboutTitle: "O mně",
            aboutText: "Ahoj, jsem Ian Martin Branam, vášnivý fotograf specializující se na automobilovou a architektonickou fotografii. Moje práce se zaměřuje na zachycení jedinečné podstaty pohybu a struktury s kreativitou a přesností.",
            specialtiesTitle: "Specializace",
            catCars: "Auta",
            catArchitecture: "Architektura",
            catPortraits: "Portréty",
            recentTitle: "Nedávné projekty",
            viperDesc: "Nespoutaná americká ikona, definovaná agresivními liniemi a čistou silou.",
            challengerDesc: "Moderní muscle car s retro duší, stvořený k ovládnutí ulic i okruhů.",
            lexusDesc: "Rafinované japonské kupé, které spojuje luxus s výkonem V8."
        }
    },
    // Page-specific text for cars.html
    cars: {
        en: {
            pageTitle: "Cars Portfolio - Ian Martin Branam",
            heroTitle: "Precision in Every Frame",
            heroSubtitle: "Showcasing the finest automotive photography with passion and detail.",
            galleryTitle: "Car Photography"
        },
        cs: {
            pageTitle: "Portfolio aut - Ian Martin Branam",
            heroTitle: "Preciznost v každém záběru",
            heroSubtitle: "Prezentace nejlepší automobilové fotografie s vášní a detailem.",
            galleryTitle: "Fotografie aut"
        }
    },
    // NEW: Page-specific text for portraits.html
    portraits: {
        en: {
            pageTitle: "Portraits Portfolio - Ian Martin Branam",
            heroTitle: "Capturing Souls Through the Lens",
            heroSubtitle: "Emotive and authentic portrait photography that tells your story.",
            comingSoonTitle: "Coming Soon!",
            comingSoonText: "Our Portrait portfolio is currently being curated with new and inspiring works. Please check back shortly!"
        },
        cs: {
            pageTitle: "Portfolio portrétů - Ian Martin Branam",
            heroTitle: "Zachycení duše skrze objektiv",
            heroSubtitle: "Emotivní a autentická portrétní fotografie, která vypráví váš příběh.",
            comingSoonTitle: "Již brzy!",
            comingSoonText: "Naše portfolio portrétů je právě aktualizováno o nové a inspirativní práce. Zkuste to prosím znovu za chvíli!"
        }
    },
    // NEW: Page-specific text for architecture.html
    architecture: {
        en: {
            pageTitle: "Architecture Portfolio - Ian Martin Branam",
            heroTitle: "Structures that Inspire",
            heroSubtitle: "Architectural photography highlighting design, light, and form.",
            comingSoonTitle: "Coming Soon!",
            comingSoonText: "Our architectural portfolio is currently being curated with new and inspiring works. Please check back shortly!"
        },
        cs: {
            pageTitle: "Portfolio architektury - Ian Martin Branam",
            heroTitle: "Struktury, které inspirují",
            heroSubtitle: "Architektonická fotografie zdůrazňující design, světlo a tvar.",
            comingSoonTitle: "Již brzy!",
            comingSoonText: "Naše portfolio architektury je právě aktualizováno o nové a inspirativní práce. Zkuste to prosím znovu za chvíli!"
        }
    },
contact: {
        en: {
            pageTitle: "Contact - Ian Martin Branam",
            heroTitle: "Let's Connect",
            heroSubtitle: "I'd love to hear about your project or answer any questions you might have.",
            contactTitle: "Get in Touch",
            emailDesc: "For detailed inquiries or project discussions.",
            phoneTitle: "Phone",
            phoneDesc: "Available for calls during business hours.",
            instagramDesc: "See my latest work and connect with me there."
        },
        cs: {
            pageTitle: "Kontakt - Ian Martin Branam",
            heroTitle: "Spojme se",
            heroSubtitle: "Rád si poslechnu o vašem projektu nebo zodpovím jakékoli dotazy.",
            contactTitle: "Kontaktujte mě",
            emailDesc: "Pro detailní dotazy nebo diskuzi o projektu.",
            phoneTitle: "Telefon",
            phoneDesc: "K zastižení na telefonu během pracovní doby.",
            instagramDesc: "Podívejte se na mé nejnovější práce a spojte se se mnou."
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu, Lightbox, and Language Switcher Logic ---
    // (The rest of the script remains exactly the same)
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');

    if (hamburger && mobileMenu) {
        const toggleMenu = () => {
            const isOpened = hamburger.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isOpened);
            mobileMenu.classList.toggle('open');
            if (overlay) overlay.classList.toggle('active');
            document.body.style.overflow = isOpened ? 'hidden' : '';
        };
        hamburger.addEventListener('click', toggleMenu);
        if (overlay) overlay.addEventListener('click', toggleMenu);
        mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', toggleMenu));
    }

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxClose = document.getElementById('lightbox-close');
        const galleryImages = document.querySelectorAll('.gallery-grid img');
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        };
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox(); });
    }

    const languageSwitcher = document.querySelectorAll(".lang-btn");
    const currentPage = document.body.dataset.page || 'home';

    const setLanguage = (lang) => {
        const shared = translations.shared[lang];
        const pageSpecific = translations[currentPage] ? translations[currentPage][lang] : {};
        const combinedTranslations = { ...shared, ...pageSpecific };

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (combinedTranslations[key]) {
                if (key.includes('Copyright')) {
                    element.innerHTML = combinedTranslations[key];
                } else {
                    element.textContent = combinedTranslations[key];
                }
            }
        });

        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);

        languageSwitcher.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    };

    languageSwitcher.forEach(btn => {
        btn.addEventListener('click', (event) => {
            setLanguage(event.target.getAttribute('data-lang'));
        });
    });

    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
});
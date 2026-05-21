// Navbar toggle, smooth scroll, active link, reveal motion, dark mode, and localization

document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.classList.add('js-ready');

    // Hide Loader
    const loader = document.getElementById('loader');
    const hideLoader = () => {
        if (loader) loader.classList.add('fade-out');
    };
    if (document.readyState === 'complete') {
        hideLoader();
    } else {
        window.addEventListener('load', hideLoader, { once: true });
    }

    let hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navContainer = document.querySelector('.nav-container');

    if (navContainer && navLinks && !hamburger) {
        hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.type = 'button';
        hamburger.setAttribute('aria-label', 'Toggle navigation');
        hamburger.textContent = '☰';
        navContainer.appendChild(hamburger);
    }

    // 1. Inject Theme & Language Toggles into Navbar
    let navRight = document.querySelector('.nav-right');
    if (navContainer && !navRight) {
        navRight = document.createElement('div');
        navRight.className = 'nav-right';
        navContainer.insertBefore(navRight, hamburger || null);
    }

    if (navLinks && navRight) {
        const desktopCta = navRight.querySelector('.nav-cta');
        if (desktopCta && !navLinks.querySelector('.mobile-nav-cta')) {
            const mobileCta = desktopCta.cloneNode(true);
            mobileCta.classList.remove('nav-cta');
            mobileCta.classList.add('mobile-nav-cta');
            navLinks.appendChild(mobileCta);
        }
    }

    if (navRight && !document.querySelector('.nav-controls')) {
        const controls = document.createElement('div');
        controls.className = 'nav-controls';
        controls.innerHTML = `
            <button class="lang-toggle" id="langToggle" type="button" title="Switch Language" aria-label="Switch language">BN</button>
            <button class="theme-toggle" id="themeToggle" type="button" title="Toggle Dark Mode" aria-label="Toggle dark mode">🌙</button>
        `;
        navRight.appendChild(controls);

        // 2. Theme Toggle Logic
        const themeToggle = document.getElementById('themeToggle');
        const currentTheme = localStorage.getItem('onnoy_theme') || 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

        themeToggle.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('onnoy_theme', theme);
            themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
        });

        // 3. Language Toggle Logic
        const langToggle = document.getElementById('langToggle');
        let currentLang = localStorage.getItem('onnoy_lang') || 'en';
        const dictionary = typeof translations !== 'undefined' ? translations : {};

        const updateLanguage = (lang) => {
            document.documentElement.setAttribute('lang', lang);
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (dictionary[key] && dictionary[key][lang] !== undefined) {
                    el.textContent = dictionary[key][lang];
                }
            });
            langToggle.textContent = lang === 'en' ? 'BN' : 'EN';
        };

        updateLanguage(currentLang);

        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'bn' : 'en';
            localStorage.setItem('onnoy_lang', currentLang);
            updateLanguage(currentLang);
        });
    }

    // 4. Navbar Logic
    if (hamburger && navLinks) {
        if (!navLinks.id) navLinks.id = 'primary-navigation';
        hamburger.setAttribute('aria-controls', navLinks.id);
        hamburger.setAttribute('aria-expanded', 'false');

        const setNavOpen = (open) => {
            navLinks.classList.toggle('open', open);
            hamburger.setAttribute('aria-expanded', String(open));
            hamburger.textContent = open ? '×' : '☰';
        };

        hamburger.addEventListener('click', () => {
            setNavOpen(!navLinks.classList.contains('open'));
        });

        navLinks.addEventListener('click', (event) => {
            const link = event.target.closest('a');
            if (!link || (link.classList.contains('dropdown-toggle') && window.innerWidth <= 768)) return;
            if (window.innerWidth <= 768) setNavOpen(false);
        });

        document.addEventListener('click', (event) => {
            if (window.innerWidth > 768) return;
            if (!navContainer || navContainer.contains(event.target)) return;
            setNavOpen(false);
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') setNavOpen(false);
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                setNavOpen(false);
                document.querySelectorAll('.dropdown-menu.open').forEach(menu => menu.classList.remove('open'));
                document.querySelectorAll('.dropdown-toggle[aria-expanded="true"]').forEach(toggle => {
                    toggle.setAttribute('aria-expanded', 'false');
                });
            }
        });
    }

    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const menu = this.closest('.dropdown').querySelector('.dropdown-menu');
                document.querySelectorAll('.dropdown-menu.open').forEach(m => {
                    if (m !== menu) {
                        m.classList.remove('open');
                        const otherToggle = m.closest('.dropdown')?.querySelector('.dropdown-toggle');
                        if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
                    }
                });
                const isOpen = menu.classList.toggle('open');
                this.setAttribute('aria-expanded', String(isOpen));
            }
        });
    });

    // 5. Active Link Highlight
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.split('/').pop() === currentPath) link.classList.add('active');
    });

    // 6. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 7. Subtle reveal animations
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animatedElements = document.querySelectorAll(
        '.fade-in, .card, .impact-card, .resource-card, .scenario-card, .story-card, .feature-card, .question-card, .about-teaser, .form-section, .step'
    );

    animatedElements.forEach((el, index) => {
        if (!el.classList.contains('fade-in')) el.classList.add('fade-in');
        el.style.setProperty('--reveal-delay', `${Math.min((index % 6) * 45, 225)}ms`);
    });

    if (motionQuery.matches || !('IntersectionObserver' in window)) {
        animatedElements.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    animatedElements.forEach(el => observer.observe(el));
});

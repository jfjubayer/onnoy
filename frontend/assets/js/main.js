// Navbar toggle, smooth scroll, active link, fade-in, dark mode, and localization

document.addEventListener('DOMContentLoaded', () => {

    // Hide Loader
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', () => {
            loader.classList.add('fade-out');
        });
    }

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navContainer = document.querySelector('.nav-container');

    // 1. Inject Theme & Language Toggles into Navbar
    let navRight = document.querySelector('.nav-right');
    if (navContainer && !navRight) {
        navRight = document.createElement('div');
        navRight.className = 'nav-right';
        navContainer.insertBefore(navRight, hamburger);
    }

    if (navRight && !document.querySelector('.nav-controls')) {
        const controls = document.createElement('div');
        controls.className = 'nav-controls';
        controls.innerHTML = `
            <button class="lang-toggle" id="langToggle" title="Switch Language">BN</button>
            <button class="theme-toggle" id="themeToggle" title="Toggle Dark Mode">🌙</button>
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
        
        const updateLanguage = (lang) => {
            document.documentElement.setAttribute('lang', lang);
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[key] && translations[key][lang] !== undefined) {
                    el.textContent = translations[key][lang];
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

    // 4. Original Navbar Logic
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    }

    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const menu = this.closest('.dropdown').querySelector('.dropdown-menu');
          document.querySelectorAll('.dropdown-menu.open').forEach(m => {
            if (m !== menu) m.classList.remove('open');
          });
          menu.classList.toggle('open');
        }
      });
    });

    // 5. Active Link Highlight
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath) link.classList.add('active');
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

    // 7. Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .card, .impact-card').forEach(el => {
        if (!el.classList.contains('fade-in')) el.classList.add('fade-in');
        observer.observe(el);
    });

});

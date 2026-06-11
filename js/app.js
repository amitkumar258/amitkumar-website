// SPA Router and Navigation Handler
class Router {
    constructor() {
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('[data-section]');
        this.sections = document.querySelectorAll('.section');
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderContent();
        this.showSection('home');
    }

    setupEventListeners() {
        // Mobile menu toggle
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.getAttribute('data-section');
                this.handleNavigation(section);
            });
        });

        // Handle browser back/forward
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1) || 'home';
            this.showSection(hash);
        });

        // Filter buttons for commentaries
        this.setupFilters();
    }

    setupFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                const filter = e.target.getAttribute('data-filter');
                this.filterCommentaries(filter);
            });
        });
    }

    filterCommentaries(filter) {
        const items = document.querySelectorAll('.commentary-item');
        items.forEach(item => {
            if (filter === 'all') {
                item.style.display = 'block';
            } else {
                const category = item.getAttribute('data-category');
                item.style.display = category === filter ? 'block' : 'none';
            }
        });
    }

    renderContent() {
        // Render commentaries
        this.renderCommentaries();
        // Render papers
        this.renderPapers();
        // Render media
        this.renderMedia();
    }

    renderCommentaries() {
        const container = document.querySelector('.commentaries-list');
        if (!container) return;

        container.innerHTML = commentariesData.map(commentary => `
            <div class="commentary-item" data-category="${commentary.category}">
                <h3><a href="${commentary.url}" target="_blank">${commentary.title}</a></h3>
                <p class="publication-meta">${commentary.publication}</p>
            </div>
        `).join('');
    }

    renderPapers() {
        const container = document.querySelector('.papers-grid');
        if (!container) return;

        container.innerHTML = papersData.map(paper => `
            <div class="paper-card">
                <h3><a href="${paper.url}" target="_blank">${paper.title}</a></h3>
                <p class="card-meta">${paper.publication} • ${paper.date}</p>
                <p>${paper.description}</p>
            </div>
        `).join('');
    }

    renderMedia() {
        const container = document.querySelector('.media-list');
        if (!container) return;

        container.innerHTML = mediaData.map(media => `
            <div class="media-item">
                <p class="media-title">${media.title}</p>
                <p class="media-outlet">${media.outlet}</p>
            </div>
        `).join('');
    }

    toggleMobileMenu() {
        this.navMenu.classList.toggle('active');
    }

    handleNavigation(sectionName) {
        this.closeMobileMenu();
        this.showSection(sectionName);
        window.location.hash = sectionName;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showSection(sectionName) {
        // Hide all sections
        this.sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show the selected section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update active nav link
        this.updateActiveNavLink(sectionName);
    }

    updateActiveNavLink(sectionName) {
        this.navLinks.forEach(link => {
            if (link.getAttribute('data-section') === sectionName) {
                link.style.color = 'var(--accent-color)';
            } else {
                link.style.color = 'white';
            }
        });
    }

    closeMobileMenu() {
        this.navMenu.classList.remove('active');
    }
}

// Initialize router when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Ensure data is available before initializing router
    if (typeof commentariesData !== 'undefined' && typeof papersData !== 'undefined' && typeof mediaData !== 'undefined') {
        const router = new Router();

        // Check for hash on page load
        const hash = window.location.hash.slice(1) || 'home';
        router.showSection(hash);
    } else {
        // Retry after a short delay if data isn't ready
        setTimeout(() => {
            if (typeof commentariesData !== 'undefined' && typeof papersData !== 'undefined' && typeof mediaData !== 'undefined') {
                const router = new Router();
                const hash = window.location.hash.slice(1) || 'home';
                router.showSection(hash);
            } else {
                console.warn('Data not loaded in time');
            }
        }, 100);
    }
});

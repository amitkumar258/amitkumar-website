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
        this.updateStatistics();
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

        // Filter buttons for commentaries and papers
        this.setupFilters();
    }

    setupFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Get the parent filter controls
                const filterControls = e.target.parentElement;

                // Only deactivate siblings in the same filter group
                filterControls.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.remove('active');
                });

                e.target.classList.add('active');
                const filter = e.target.getAttribute('data-filter');

                // Route to appropriate filter function
                if (filter.startsWith('papers-')) {
                    this.filterPapers(filter);
                } else {
                    this.filterCommentaries(filter);
                }
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

    filterPapers(filter) {
        const items = document.querySelectorAll('.paper-card');
        items.forEach(item => {
            if (filter === 'papers-all') {
                item.style.display = 'block';
            } else {
                const tags = item.getAttribute('data-tags');
                const filterTag = filter.replace('papers-', '');
                item.style.display = tags && tags.includes(filterTag) ? 'block' : 'none';
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

        container.innerHTML = commentariesData.map(commentary => {
            const pubCategory = commentary.pubCategory || 'national';
            const filterKey = `${pubCategory}-${commentary.publication.toLowerCase().replace(/\s+/g, '-')}`;
            return `
                <div class="commentary-item" data-category="${filterKey}">
                    <div class="comment-row">
                        <span class="comment-publication">${commentary.publication}</span>
                        <h3><a href="${commentary.url}" target="_blank">${commentary.title}</a></h3>
                        <span class="comment-date">${commentary.date}</span>
                    </div>
                    <div class="comment-tags">
                        ${commentary.tags.map(tag => `<span class="comment-tag ${tag}">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
        }).join('');
    }

    renderPapers() {
        const container = document.querySelector('.papers-grid');
        if (!container) return;

        container.innerHTML = papersData.map(paper => {
            const tagsString = (paper.tags || []).join(',');
            return `
                <div class="paper-card" data-tags="${tagsString}">
                    <h3><a href="${paper.url}" target="_blank">${paper.title}</a></h3>
                    <p class="card-meta">${paper.publication} • ${paper.date}</p>
                    <p>${paper.description}</p>
                    <div class="paper-tags">
                        ${(paper.tags || []).map(tag => `<span class="paper-tag ${tag}">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
        }).join('');
    }

    renderMedia() {
        const container = document.querySelector('.media-list');
        if (!container) return;

        container.innerHTML = mediaData.map(media => `
            <div class="media-item">
                ${media.url ? `<a href="${media.url}" target="_blank" class="media-title">${media.title}</a>` : `<p class="media-title">${media.title}</p>`}
                <p class="media-outlet">${media.outlet}</p>
            </div>
        `).join('');
    }

    updateStatistics() {
        // Update commentaries statistics
        const commentariesCount = document.getElementById('commentaries-count');
        if (commentariesCount) {
            commentariesCount.textContent = commentariesData.length;
        }

        // Count commentaries by theme
        const commentariesByTheme = {
            security: 0,
            economy: 0,
            technology: 0
        };

        commentariesData.forEach(item => {
            (item.tags || []).forEach(tag => {
                if (commentariesByTheme.hasOwnProperty(tag)) {
                    commentariesByTheme[tag]++;
                }
            });
        });

        document.getElementById('security-count').textContent = commentariesByTheme.security;
        document.getElementById('economy-count').textContent = commentariesByTheme.economy;
        document.getElementById('technology-count').textContent = commentariesByTheme.technology;

        // Update papers statistics
        const papersCount = document.getElementById('papers-count');
        if (papersCount) {
            papersCount.textContent = papersData.length;
        }

        // Count papers by theme
        const papersByTheme = {
            security: 0,
            economy: 0,
            technology: 0
        };

        papersData.forEach(item => {
            (item.tags || []).forEach(tag => {
                if (papersByTheme.hasOwnProperty(tag)) {
                    papersByTheme[tag]++;
                }
            });
        });

        const paperSecurityCount = document.getElementById('papers-security-count');
        const paperEconomyCount = document.getElementById('papers-economy-count');
        const paperTechnologyCount = document.getElementById('papers-technology-count');

        if (paperSecurityCount) paperSecurityCount.textContent = papersByTheme.security;
        if (paperEconomyCount) paperEconomyCount.textContent = papersByTheme.economy;
        if (paperTechnologyCount) paperTechnologyCount.textContent = papersByTheme.technology;
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

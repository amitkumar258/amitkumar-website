// SPA Router and Navigation Handler
class Router {
    constructor() {
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('[data-section]');
        this.sections = document.querySelectorAll('.section');
        this.activePubFilter = 'all';
        this.activeYearFilter = 'all';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderContent();
        this.updateStatistics();
        this.showSection('home');
    }

    setupEventListeners() {
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.getAttribute('data-section');
                this.handleNavigation(section);
            });
        });

        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1) || 'home';
            this.showSection(hash);
        });

        this.setupFilters();
    }

    setupFilters() {
        // Publication category tabs (All / National / International)
        document.querySelectorAll('.pub-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.pub-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const pubFilter = tab.getAttribute('data-pub-filter');

                // Show/hide sub-publication lists
                document.querySelectorAll('.pub-sub-list').forEach(list => list.classList.remove('visible'));
                if (pubFilter === 'national') {
                    document.getElementById('national-pubs').classList.add('visible');
                } else if (pubFilter === 'international') {
                    document.getElementById('international-pubs').classList.add('visible');
                }

                // Deactivate any specific pub buttons and apply category-level filter
                document.querySelectorAll('.pub-btn').forEach(b => b.classList.remove('active'));
                this.activePubFilter = pubFilter;
                this.applyCommentaryFilters();
            });
        });

        // Specific publication buttons
        document.querySelectorAll('.pub-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.pub-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.activePubFilter = btn.getAttribute('data-filter');
                this.applyCommentaryFilters();
            });
        });

        // Year filter buttons
        document.querySelectorAll('.year-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.year-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.activeYearFilter = btn.getAttribute('data-year');
                this.applyCommentaryFilters();
            });
        });

        // Papers filter buttons
        document.querySelectorAll('.filter-btn[data-filter^="papers-"]').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.closest('.filter-controls').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterPapers(btn.getAttribute('data-filter'));
            });
        });
    }

    applyCommentaryFilters() {
        const items = document.querySelectorAll('.commentary-item');
        items.forEach(item => {
            const category = item.getAttribute('data-category'); // e.g. "national-indian-express"
            const pubCategory = category.split('-')[0];           // "national" or "international"
            const year = item.getAttribute('data-year');

            let pubMatch;
            if (this.activePubFilter === 'all') {
                pubMatch = true;
            } else if (this.activePubFilter === 'national' || this.activePubFilter === 'international') {
                pubMatch = pubCategory === this.activePubFilter;
            } else {
                pubMatch = category === this.activePubFilter;
            }

            const yearMatch = this.activeYearFilter === 'all' || year === this.activeYearFilter;
            item.style.display = pubMatch && yearMatch ? 'block' : 'none';
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
        this.renderCommentaries();
        this.renderPapers();
        this.renderMedia();
    }

    renderCommentaries() {
        const container = document.querySelector('.commentaries-list');
        if (!container) return;

        container.innerHTML = commentariesData.map(commentary => {
            const pubCategory = commentary.pubCategory || 'national';
            const filterKey = `${pubCategory}-${commentary.publication.toLowerCase().replace(/\s+/g, '-')}`;
            const year = commentary.date ? commentary.date.split('/')[2] : '';
            return `
                <div class="commentary-item" data-category="${filterKey}" data-year="${year}">
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
        const commentariesCount = document.getElementById('commentaries-count');
        if (commentariesCount) commentariesCount.textContent = commentariesData.length;

        const papersCount = document.getElementById('papers-count');
        if (papersCount) papersCount.textContent = papersData.length;
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
        this.sections.forEach(section => section.classList.remove('active'));
        const targetSection = document.getElementById(sectionName);
        if (targetSection) targetSection.classList.add('active');
        this.updateActiveNavLink(sectionName);
    }

    updateActiveNavLink(sectionName) {
        this.navLinks.forEach(link => {
            link.style.color = link.getAttribute('data-section') === sectionName ? 'var(--accent-color)' : 'white';
        });
    }

    closeMobileMenu() {
        this.navMenu.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof commentariesData !== 'undefined' && typeof papersData !== 'undefined' && typeof mediaData !== 'undefined') {
        const router = new Router();
        const hash = window.location.hash.slice(1) || 'home';
        router.showSection(hash);
    } else {
        setTimeout(() => {
            if (typeof commentariesData !== 'undefined') {
                const router = new Router();
                const hash = window.location.hash.slice(1) || 'home';
                router.showSection(hash);
            }
        }, 100);
    }
});

// SPA Router and Navigation Handler
class Router {
    constructor() {
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('[data-section]');
        this.sections = document.querySelectorAll('.section');
        this.activePubFilter = 'all';
        this.activeYearFilter = 'all';
        this.searchQuery = '';
        this.currentPage = 1;
        this.itemsPerPage = 20;
        this.currentPapersPage = 1;
        this.papersPerPage = 10;
        this.currentMediaPage = 1;
        this.mediaPerPage = 10;
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

                document.querySelectorAll('.pub-sub-list').forEach(list => list.classList.remove('visible'));
                if (pubFilter === 'national') {
                    document.getElementById('national-pubs').classList.add('visible');
                } else if (pubFilter === 'international') {
                    document.getElementById('international-pubs').classList.add('visible');
                }

                document.querySelectorAll('.pub-btn').forEach(b => b.classList.remove('active'));
                this.activePubFilter = pubFilter;
                this.currentPage = 1;
                this.renderCommentaries();
            });
        });

        // Specific publication buttons
        document.querySelectorAll('.pub-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.pub-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.activePubFilter = btn.getAttribute('data-filter');
                this.currentPage = 1;
                this.renderCommentaries();
            });
        });

        // Year dropdown
        const yearSelect = document.getElementById('yearSelect');
        if (yearSelect) {
            yearSelect.addEventListener('change', () => {
                this.activeYearFilter = yearSelect.value;
                this.currentPage = 1;
                this.renderCommentaries();
            });
        }

        // Global search
        const searchInput = document.getElementById('globalSearch');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                this.applySearch(searchInput.value.toLowerCase().trim());
            });
        }

        // Nav search button — navigate to commentaries and focus search
        const navSearchBtn = document.getElementById('navSearchBtn');
        if (navSearchBtn) {
            navSearchBtn.addEventListener('click', () => {
                this.handleNavigation('commentaries');
                setTimeout(() => {
                    const s = document.getElementById('globalSearch');
                    if (s) s.focus();
                }, 300);
            });
        }

        // Papers filter buttons
        document.querySelectorAll('.filter-btn[data-filter^="papers-"]').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.closest('.filter-controls').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterPapers(btn.getAttribute('data-filter'));
            });
        });
    }

    // ── Filtering ────────────────────────────────────────────────────────────

    getFilteredCommentaries() {
        return commentariesData.filter(c => {
            const pubCategory = c.pubCategory || 'national';
            const filterKey = `${pubCategory}-${c.publication.toLowerCase().replace(/\s+/g, '-')}`;

            let pubMatch;
            if (this.activePubFilter === 'all') {
                pubMatch = true;
            } else if (this.activePubFilter === 'national' || this.activePubFilter === 'international') {
                pubMatch = pubCategory === this.activePubFilter;
            } else {
                pubMatch = filterKey === this.activePubFilter;
            }

            const year = c.date ? c.date.split('/')[2] : '';
            const yearMatch = this.activeYearFilter === 'all' || year === this.activeYearFilter;

            const searchMatch = !this.searchQuery ||
                c.title.toLowerCase().includes(this.searchQuery) ||
                c.publication.toLowerCase().includes(this.searchQuery) ||
                (c.tags || []).some(t => t.toLowerCase().includes(this.searchQuery));

            return pubMatch && yearMatch && searchMatch;
        });
    }

    applySearch(query) {
        this.searchQuery = query;
        const activeSection = document.querySelector('.section.active');
        if (!activeSection) return;

        if (activeSection.id === 'commentaries') {
            this.currentPage = 1;
            this.renderCommentaries();
        } else {
            const selectors = { papers: '.paper-card', media: '.media-item' };
            const selector = selectors[activeSection.id];
            if (!selector) return;
            activeSection.querySelectorAll(selector).forEach(item => {
                const match = !query || item.textContent.toLowerCase().includes(query);
                item.style.display = match ? '' : 'none';
            });
        }
    }

    filterPapers(filter) {
        document.querySelectorAll('.paper-card').forEach(item => {
            if (filter === 'papers-all') {
                item.style.display = '';
            } else {
                const tags = item.getAttribute('data-tags');
                const filterTag = filter.replace('papers-', '');
                item.style.display = tags && tags.includes(filterTag) ? '' : 'none';
            }
        });
    }

    // ── Rendering ────────────────────────────────────────────────────────────

    renderContent() {
        this.renderCommentaries();
        this.renderPapers();
        this.renderMedia();
        this.renderTagCounts();
    }

    renderTagCounts() {
        const container = document.getElementById('tag-counts');
        if (!container) return;

        const counts = {};
        commentariesData.forEach(c => {
            (c.tags || []).forEach(tag => {
                counts[tag] = (counts[tag] || 0) + 1;
            });
        });

        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

        container.innerHTML = sorted.map(([tag, count]) =>
            `<div class="tag-count-item">
                <span class="tag-count-label ${tag}">${tag}</span>
                <span class="tag-count-num">(${count})</span>
            </div>`
        ).join('');
    }

    formatDate(dateStr) {
        if (!dateStr) return '';
        const parts = dateStr.split('/');
        if (parts.length !== 3) return dateStr;
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const day = parseInt(parts[0], 10);
        const month = months[parseInt(parts[1], 10) - 1];
        const year = parts[2];
        return day ? `${day} ${month} ${year}` : `${month} ${year}`;
    }

    renderCommentaries() {
        const container = document.querySelector('.commentaries-list');
        if (!container) return;

        const filtered = this.getFilteredCommentaries();
        const totalPages = Math.max(1, Math.ceil(filtered.length / this.itemsPerPage));
        if (this.currentPage > totalPages) this.currentPage = totalPages;

        const start = (this.currentPage - 1) * this.itemsPerPage;
        const pageItems = filtered.slice(start, start + this.itemsPerPage);

        container.innerHTML = pageItems.map(c => {
            const pubCategory = c.pubCategory || 'national';
            const filterKey = `${pubCategory}-${c.publication.toLowerCase().replace(/\s+/g, '-')}`;
            const year = c.date ? c.date.split('/')[2] : '';
            const fmtDate = this.formatDate(c.date);
            return `
                <div class="commentary-item" data-category="${filterKey}" data-year="${year}">
                    <div class="comment-row">
                        <span class="comment-date">${fmtDate}</span>
                        <div class="comment-body">
                            <a href="${c.url}" target="_blank" class="comment-link">${c.title}</a>
                            <span class="comment-publication">${c.publication}</span>
                        </div>
                    </div>
                    <div class="comment-tags">
                        ${(c.tags || []).map(tag => `<span class="comment-tag ${tag}">${tag}</span>`).join('')}
                    </div>
                </div>`;
        }).join('');

        this.renderPagination(filtered.length, totalPages);
    }

    renderPagination(total, totalPages) {
        const container = document.getElementById('commentaries-pagination');
        if (!container) return;

        if (totalPages <= 1) { container.innerHTML = ''; return; }

        const cur = this.currentPage;
        const pageNums = Array.from({ length: totalPages }, (_, i) => i + 1);

        container.innerHTML = `
            <button class="page-btn" data-page="${cur - 1}" ${cur === 1 ? 'disabled' : ''}>‹</button>
            ${pageNums.map(p => `<button class="page-btn ${p === cur ? 'active' : ''}" data-page="${p}">${p}</button>`).join('')}
            <button class="page-btn" data-page="${cur + 1}" ${cur === totalPages ? 'disabled' : ''}>›</button>
        `;

        container.querySelectorAll('.page-btn:not([disabled])').forEach(btn => {
            btn.addEventListener('click', () => {
                const page = parseInt(btn.getAttribute('data-page'));
                if (page >= 1 && page <= totalPages) {
                    this.currentPage = page;
                    this.renderCommentaries();
                    document.querySelector('.commentaries-list').scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    renderPapers() {
        const container = document.querySelector('.papers-list');
        if (!container) return;

        const totalPages = Math.max(1, Math.ceil(papersData.length / this.papersPerPage));
        if (this.currentPapersPage > totalPages) this.currentPapersPage = totalPages;

        const start = (this.currentPapersPage - 1) * this.papersPerPage;
        const pageItems = papersData.slice(start, start + this.papersPerPage);

        container.innerHTML = pageItems.map(paper => {
            const fmtDate = this.formatDate(paper.date);
            const coAuthorHtml = paper.coAuthor
                ? `<span class="paper-coauthor">with ${paper.coAuthor}</span>`
                : '';
            return `
                <div class="paper-item">
                    <div class="comment-row">
                        <span class="comment-date">${fmtDate}</span>
                        <div class="comment-body">
                            <a href="${paper.url}" target="_blank" class="comment-link">${paper.title}</a>
                            <span class="comment-publication">${paper.publication}</span>
                        </div>
                    </div>
                    ${coAuthorHtml}
                    <div class="comment-tags">
                        ${(paper.tags || []).map(tag => `<span class="comment-tag ${tag}">${tag}</span>`).join('')}
                    </div>
                </div>`;
        }).join('');

        this.renderPapersPagination(papersData.length, totalPages);
    }

    renderPapersPagination(total, totalPages) {
        const container = document.getElementById('papers-pagination');
        if (!container) return;

        if (totalPages <= 1) { container.innerHTML = ''; return; }

        const cur = this.currentPapersPage;
        const pageNums = Array.from({ length: totalPages }, (_, i) => i + 1);

        container.innerHTML = `
            <button class="page-btn" data-page="${cur - 1}" ${cur === 1 ? 'disabled' : ''}>‹</button>
            ${pageNums.map(p => `<button class="page-btn ${p === cur ? 'active' : ''}" data-page="${p}">${p}</button>`).join('')}
            <button class="page-btn" data-page="${cur + 1}" ${cur === totalPages ? 'disabled' : ''}>›</button>
        `;

        container.querySelectorAll('.page-btn:not([disabled])').forEach(btn => {
            btn.addEventListener('click', () => {
                const page = parseInt(btn.getAttribute('data-page'));
                if (page >= 1 && page <= totalPages) {
                    this.currentPapersPage = page;
                    this.renderPapers();
                    document.querySelector('.papers-list').scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    getYouTubeId(url) {
        if (!url) return null;
        const patterns = [
            /youtu\.be\/([^?&]+)/,
            /[?&]v=([^&]+)/,
            /youtube\.com\/embed\/([^?&]+)/
        ];
        for (const re of patterns) {
            const m = url.match(re);
            if (m) return m[1];
        }
        return null;
    }

    renderMedia() {
        const container = document.querySelector('.media-list');
        if (!container) return;

        const totalPages = Math.max(1, Math.ceil(mediaData.length / this.mediaPerPage));
        if (this.currentMediaPage > totalPages) this.currentMediaPage = totalPages;

        const start = (this.currentMediaPage - 1) * this.mediaPerPage;
        const pageItems = mediaData.slice(start, start + this.mediaPerPage);

        container.innerHTML = pageItems.map(media => {
            const ytId = this.getYouTubeId(media.url);
            const thumbSrc = media.thumbnail
                ? media.thumbnail
                : ytId
                    ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
                    : `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='90' viewBox='0 0 160 90'%3E%3Crect width='160' height='90' fill='%23f0f0f0'/%3E%3Ctext x='80' y='50' font-size='28' text-anchor='middle' fill='%23bbb'%3E%E2%96%B6%3C/text%3E%3C/svg%3E`;
            const fmtDate = media.date ? this.formatDate(media.date) : '';
            return `
                <a href="${media.url || '#'}" target="_blank" class="media-row">
                    <img class="media-thumb" src="${thumbSrc}" alt="${media.title}" loading="lazy">
                    <div class="media-row-body">
                        <span class="media-row-title">${media.title}</span>
                        <span class="media-row-outlet">${media.outlet}</span>
                        ${fmtDate ? `<span class="media-row-date">${fmtDate}</span>` : ''}
                    </div>
                </a>`;
        }).join('');

        this.renderMediaPagination(mediaData.length, totalPages);
    }

    renderMediaPagination(total, totalPages) {
        const container = document.getElementById('media-pagination');
        if (!container) return;

        if (totalPages <= 1) { container.innerHTML = ''; return; }

        const cur = this.currentMediaPage;
        const pageNums = Array.from({ length: totalPages }, (_, i) => i + 1);

        container.innerHTML = `
            <button class="page-btn" data-page="${cur - 1}" ${cur === 1 ? 'disabled' : ''}>‹</button>
            ${pageNums.map(p => `<button class="page-btn ${p === cur ? 'active' : ''}" data-page="${p}">${p}</button>`).join('')}
            <button class="page-btn" data-page="${cur + 1}" ${cur === totalPages ? 'disabled' : ''}>›</button>
        `;

        container.querySelectorAll('.page-btn:not([disabled])').forEach(btn => {
            btn.addEventListener('click', () => {
                const page = parseInt(btn.getAttribute('data-page'));
                if (page >= 1 && page <= totalPages) {
                    this.currentMediaPage = page;
                    this.renderMedia();
                    document.querySelector('.media-list').scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    updateStatistics() {
        const el = document.getElementById('commentaries-count');
        if (el) el.textContent = commentariesData.length;
        const ep = document.getElementById('papers-count');
        if (ep) ep.textContent = papersData.length;
        const em = document.getElementById('media-count');
        if (em) em.textContent = mediaData.length;
    }

    toggleMobileMenu() {
        this.navMenu.classList.toggle('active');
    }

    handleNavigation(sectionName) {
        this.closeMobileMenu();
        const searchInput = document.getElementById('globalSearch');
        if (searchInput) { searchInput.value = ''; this.searchQuery = ''; }
        this.showSection(sectionName);
        window.location.hash = sectionName;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showSection(sectionName) {
        this.sections.forEach(s => s.classList.remove('active'));
        const target = document.getElementById(sectionName);
        if (target) target.classList.add('active');
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
        router.showSection(window.location.hash.slice(1) || 'home');
    } else {
        setTimeout(() => {
            if (typeof commentariesData !== 'undefined') {
                const router = new Router();
                router.showSection(window.location.hash.slice(1) || 'home');
            }
        }, 100);
    }
});

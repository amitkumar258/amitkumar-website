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

        // Mobile dual-dropdown filter (commentaries)
        const mobilePrimary = document.getElementById('mobilePrimaryFilter');
        const mobileSecondary = document.getElementById('mobileSecondaryFilter');
        const nationalPubs = [
            { value: 'national-indian-express',      label: 'Indian Express' },
            { value: 'national-the-hindu',           label: 'The Hindu' },
            { value: 'national-hindustan-times',     label: 'Hindustan Times' },
            { value: 'national-the-print',           label: 'The Print' },
            { value: 'national-the-quint',           label: 'The Quint' },
            { value: 'national-moneycontrol',        label: 'Moneycontrol' },
            { value: 'national-deccan-herald',       label: 'Deccan Herald' },
            { value: 'national-firstpost',           label: 'Firstpost' },
            { value: 'national-orf-expert-speak',    label: 'ORF Expert Speak' },
            { value: 'national-vif-india',           label: 'VIF India' },
            { value: 'national-the-diplomatist',     label: 'The Diplomatist' },
            { value: 'national-stratnewsglobal',     label: 'StratNewsGlobal' },
            { value: 'national-takshashila-institution', label: 'Takshashila' },
            { value: 'national-eye-on-china',        label: 'Eye on China' },
        ];
        const internationalPubs = [
            { value: 'international-foreign-policy', label: 'Foreign Policy' },
            { value: 'international-nikkei-asia',    label: 'Nikkei Asia' },
            { value: 'international-thinkchina',     label: 'ThinkChina' },
            { value: 'international-the-diplomat',   label: 'The Diplomat' },
        ];

        if (mobilePrimary) {
            mobilePrimary.addEventListener('change', () => {
                const val = mobilePrimary.value;

                if (val === 'national' || val === 'international') {
                    const pubs = val === 'national' ? nationalPubs : internationalPubs;
                    const label = val === 'national' ? 'All National' : 'All International';

                    // Default option value = category so "All" still filters by category
                    mobileSecondary.innerHTML = `<option value="${val}">${label}</option>`;
                    pubs.forEach(p => {
                        const opt = document.createElement('option');
                        opt.value = p.value;
                        opt.textContent = p.label;
                        mobileSecondary.appendChild(opt);
                    });
                    mobileSecondary.style.display = 'block';
                } else {
                    mobileSecondary.style.display = 'none';
                }

                this.activePubFilter = val;
                this.currentPage = 1;
                this.renderCommentaries();
            });

            mobileSecondary.addEventListener('change', () => {
                this.activePubFilter = mobileSecondary.value;
                this.currentPage = 1;
                this.renderCommentaries();
            });
        }

        // Global search overlay
        this.setupGlobalSearch();

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

            return pubMatch && yearMatch;
        });
    }

    setupGlobalSearch() {
        const overlay  = document.getElementById('navSearchOverlay');
        const input    = document.getElementById('navSearchInput');
        const results  = document.getElementById('navSearchResults');
        const closeBtn = document.getElementById('navSearchClose');
        const searchBtn = document.getElementById('navSearchBtn');
        if (!overlay || !input || !searchBtn) return;

        const open = () => {
            overlay.classList.add('active');
            input.focus();
        };
        const close = () => {
            overlay.classList.remove('active');
            input.value = '';
            results.innerHTML = '';
        };

        searchBtn.addEventListener('click', () => {
            overlay.classList.contains('active') ? close() : open();
        });
        closeBtn.addEventListener('click', close);

        // Close on Escape
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') close();
        });

        // Close when clicking outside the overlay
        overlay.addEventListener('click', e => {
            if (e.target === overlay) close();
        });

        input.addEventListener('input', () => {
            this.renderGlobalResults(input.value.trim(), results, close);
        });
    }

    renderGlobalResults(query, container, closeFn) {
        if (!query) { container.innerHTML = ''; return; }
        const q = query.toLowerCase();
        const hits = [];

        commentariesData.forEach((item, idx) => {
            if (item.title.toLowerCase().includes(q) ||
                item.publication.toLowerCase().includes(q) ||
                (item.tags || []).some(t => t.toLowerCase().includes(q))) {
                hits.push({ type: 'Commentary', title: item.title, meta: item.publication, date: item.date, section: 'commentaries', idx });
            }
        });

        papersData.forEach((item, idx) => {
            if (item.title.toLowerCase().includes(q) ||
                item.publication.toLowerCase().includes(q) ||
                (item.tags || []).some(t => t.toLowerCase().includes(q))) {
                hits.push({ type: 'Paper', title: item.title, meta: item.publication, date: item.date, section: 'papers', idx });
            }
        });

        mediaData.forEach((item, idx) => {
            if (item.title.toLowerCase().includes(q) ||
                item.outlet.toLowerCase().includes(q)) {
                hits.push({ type: 'Media', title: item.title, meta: item.outlet, date: item.date, section: 'media', idx });
            }
        });

        if (hits.length === 0) {
            container.innerHTML = '<p class="search-no-results">No results found.</p>';
            return;
        }

        container.innerHTML = hits.slice(0, 20).map((h, i) => `
            <div class="search-result-item" data-i="${i}">
                <span class="search-result-type">${h.type}</span>
                <span class="search-result-title">${h.title}</span>
                <span class="search-result-meta">${h.meta}${h.date ? ' · ' + this.formatDate(h.date) : ''}</span>
            </div>`).join('');

        container.querySelectorAll('.search-result-item').forEach(el => {
            el.addEventListener('click', () => {
                const h = hits[parseInt(el.getAttribute('data-i'))];
                this.navigateToResult(h);
                closeFn();
            });
        });
    }

    navigateToResult(h) {
        this.handleNavigation(h.section);
        if (h.section === 'commentaries') {
            this.activePubFilter = 'all';
            this.activeYearFilter = 'all';
            this.searchQuery = '';
            this.currentPage = Math.ceil((h.idx + 1) / this.itemsPerPage);
            this.renderCommentaries();
        } else if (h.section === 'papers') {
            this.currentPapersPage = Math.ceil((h.idx + 1) / this.papersPerPage);
            this.renderPapers();
        } else if (h.section === 'media') {
            this.currentMediaPage = Math.ceil((h.idx + 1) / this.mediaPerPage);
            this.renderMedia();
        }
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

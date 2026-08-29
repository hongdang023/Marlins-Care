import { initNavigation, renderBreadcrumbs, renderSidebar } from './components/navigation.js';
import { initSearch } from './components/search.js';
import { renderJourneyMap } from './components/journeyMap.js';
import { renderPlaybook } from './components/playbookRenderer.js';
import { renderMasterFramework } from './components/masterFrameworkRenderer.js';
import { renderOverview } from './components/overviewRenderer.js';
import { renderDecisionLogs } from './components/decisionLogsRenderer.js';

class App {
  constructor() {
    this.currentRoute = this.getRouteFromHash();
    this.initTheme();
    this.initEvents();
    this.render();
  }

  getRouteFromHash() {
    const hash = window.location.hash.replace('#', '');
    return hash || '/overview/why-parent-care';
  }

  initTheme() {
    const savedTheme = localStorage.getItem('marlins_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeButtonIcon(savedTheme);

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('marlins_theme', next);
        this.updateThemeButtonIcon(next);
      });
    }
  }

  updateThemeButtonIcon(theme) {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      toggleBtn.setAttribute('title', theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối');
    }
  }

  initEvents() {
    // Hash change router listener
    window.addEventListener('hashchange', () => {
      this.currentRoute = this.getRouteFromHash();
      this.render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile Drawer toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.querySelector('.left-sidebar');
    if (mobileMenuBtn && sidebar) {
      mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('drawer-open');
      });

      // Close drawer when clicking outside
      document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
          sidebar.classList.remove('drawer-open');
        }
      });
    }

    // Back to top
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Search Init
    initSearch((slug) => this.navigateTo(slug));
  }

  navigateTo(slug) {
    window.location.hash = slug;
  }

  render() {
    // 1. Navigation Shell & Breadcrumbs
    initNavigation(this.currentRoute, (slug) => this.navigateTo(slug));
    renderBreadcrumbs(this.currentRoute);

    // 2. Main Content Viewport
    const mainViewport = document.getElementById('main-viewport-content');
    if (!mainViewport) return;

    mainViewport.innerHTML = '';

    if (this.currentRoute.startsWith('/overview')) {
      mainViewport.appendChild(renderOverview(this.currentRoute, (slug) => this.navigateTo(slug)));
    } else if (this.currentRoute.startsWith('/journey')) {
      mainViewport.appendChild(renderJourneyMap((slug) => this.navigateTo(slug)));
    } else if (this.currentRoute === '/playbooks/master-framework') {
      mainViewport.appendChild(renderMasterFramework((slug) => this.navigateTo(slug)));
    } else if (this.currentRoute.startsWith('/playbooks')) {
      mainViewport.appendChild(renderPlaybook(this.currentRoute, (slug) => this.navigateTo(slug)));
    } else if (this.currentRoute.startsWith('/decision-logs')) {
      mainViewport.appendChild(renderDecisionLogs(this.currentRoute, (slug) => this.navigateTo(slug)));
    } else {
      mainViewport.appendChild(renderOverview('/overview/why-parent-care', (slug) => this.navigateTo(slug)));
    }

    // 3. Build Right TOC (Table of contents on-this-page)
    this.buildRightToc();
  }

  buildRightToc() {
    const tocList = document.getElementById('toc-list');
    if (!tocList) return;

    tocList.innerHTML = '';

    // Query headings and interactive section titles
    const items = [];
    const touchpointSections = document.querySelectorAll('#main-viewport-content .touchpoint-section');
    const isSingleTouchpoint = touchpointSections.length <= 1;

    if (isSingleTouchpoint) {
      // For single playbook pages, list sections directly
      const sections = document.querySelectorAll('#main-viewport-content .accordion-card');
      sections.forEach((card, idx) => {
        const titleEl = card.querySelector('.accordion-title');
        if (titleEl) {
          const title = titleEl.textContent.trim();
          if (!card.id) card.id = `sec-item-${idx}`;
          items.push({ id: card.id, title: title, level: 1, element: card });
        }
      });
    } else {
      // For multi-touchpoint playbooks (e.g. Live Class, Trial Class)
      touchpointSections.forEach((tpSec, tpIdx) => {
        const h2 = tpSec.querySelector('h2');
        if (h2) {
          const tpTitle = h2.textContent.trim();
          if (!tpSec.id) tpSec.id = `tp-sec-${tpIdx}`;
          items.push({ id: tpSec.id, title: tpTitle, level: 1, element: tpSec });
        }

        const cards = tpSec.querySelectorAll('.accordion-card');
        cards.forEach((card, cardIdx) => {
          const titleEl = card.querySelector('.accordion-title');
          if (titleEl) {
            const accTitle = titleEl.textContent.trim();
            if (!card.id) card.id = `acc-sec-${tpIdx}-${cardIdx}`;
            items.push({ id: card.id, title: accTitle, level: 2, element: card });
          }
        });
      });
    }

    // Also capture any standalone H2 on other pages (e.g. Overview, Journey)
    if (touchpointSections.length === 0) {
      const h2s = document.querySelectorAll('#main-viewport-content h2');
      h2s.forEach((h2, idx) => {
        const title = h2.textContent.replace(/^\[.*?\]\s*/, '').trim();
        if (title) {
          if (!h2.id) h2.id = `h2-sec-${idx}`;
          items.push({ id: h2.id, title: title, level: 1, element: h2 });
        }
      });
    }

    if (items.length === 0) {
      tocList.innerHTML = `<li style="color:var(--text-muted); font-size:12px;">Không có mục lục</li>`;
      return;
    }

    items.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.className = 'toc-link';
      a.href = `#${item.id}`;
      a.textContent = item.title;

      if (item.level === 2) {
        a.style.paddingLeft = '14px';
        a.style.fontSize = '12px';
        a.style.color = 'var(--text-muted)';
      } else {
        a.style.fontWeight = '600';
      }

      a.addEventListener('click', (e) => {
        e.preventDefault();
        // If it's an accordion and closed, open it
        if (item.element.classList.contains('accordion-card') && !item.element.classList.contains('open')) {
          item.element.classList.add('open');
        }
        item.element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      li.appendChild(a);
      tocList.appendChild(li);
    });
  }
}

// Start Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  new App();
});

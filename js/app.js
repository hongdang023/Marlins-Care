import { initNavigation, renderBreadcrumbs, renderSidebar } from './components/navigation.js';
import { initSearch } from './components/search.js';
import { renderJourneyMap } from './components/journeyMap.js';
import { renderPlaybook } from './components/playbookRenderer.js';
import { renderMasterFramework } from './components/masterFrameworkRenderer.js';
import { renderOverview } from './components/overviewRenderer.js';
import { renderDecisionLogs } from './components/decisionLogsRenderer.js';
import { renderRequirements } from './components/requirementsRenderer.js';

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
    } else if (this.currentRoute.startsWith('/requirements')) {
      mainViewport.appendChild(renderRequirements(this.currentRoute, (slug) => this.navigateTo(slug)));
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

    // Query headings directly from viewport
    const headings = document.querySelectorAll('#main-viewport-content h2, #main-viewport-content h3');
    const items = [];

    headings.forEach((heading, idx) => {
      const title = heading.textContent.trim();
      if (!heading.id) heading.id = `heading-sec-${idx}`;
      const level = heading.tagName.toLowerCase() === 'h2' ? 1 : 2;
      items.push({ id: heading.id, title: title, level: level, element: heading });
    });

    if (items.length === 0) {
      const container = document.getElementById('right-toc-container');
      if (container) container.style.display = 'none';
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

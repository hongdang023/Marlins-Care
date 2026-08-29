import { initNavigation, renderBreadcrumbs, renderSidebar } from "./components/navigation.js";
import { initSearch } from "./components/search.js";
import { renderJourneyMap } from "./components/journeyMap.js";
import { renderPlaybook } from "./components/playbookRenderer.js";
import { renderMasterFramework } from "./components/masterFrameworkRenderer.js";
import { renderOverview } from "./components/overviewRenderer.js";
import { renderDecisionLogs } from "./components/decisionLogsRenderer.js";
import { renderRequirements } from "./components/requirementsRenderer.js";
import { SITEMAP_CONFIG } from "./data.js";

class App {
  constructor() {
    this.currentRoute = this.getRouteFromHash();
    this.initTheme();
    this.initEvents();
    this.render();
  }

  getRouteFromHash() {
    const hash = window.location.hash.replace("#", "");
    return hash || "/overview/why-parent-care";
  }

  initTheme() {
    const savedTheme = localStorage.getItem("marlins_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateThemeButtonIcon(savedTheme);

    const toggleBtn = document.getElementById("theme-toggle-btn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || "light";
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("marlins_theme", next);
        this.updateThemeButtonIcon(next);
      });
    }
  }

  updateThemeButtonIcon(theme) {
    const toggleBtn = document.getElementById("theme-toggle-btn");
    if (toggleBtn) {
      toggleBtn.innerHTML = theme === "dark" ? "☀️" : "🌙";
      toggleBtn.setAttribute("title", theme === "dark" ? "Chuyển sang giao diện Sáng" : "Chuyển sang giao diện Tối");
    }
  }

  initEvents() {
    // Hash change router listener
    window.addEventListener("hashchange", () => {
      this.currentRoute = this.getRouteFromHash();
      this.render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Mobile Drawer toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const sidebar = document.querySelector(".left-sidebar");
    if (mobileMenuBtn && sidebar) {
      mobileMenuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("drawer-open");
      });

      // Close drawer when clicking outside
      document.addEventListener("click", (e) => {
        if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
          sidebar.classList.remove("drawer-open");
        }
      });
    }

    // Back to top
    const backToTopBtn = document.getElementById("back-to-top-btn");
    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
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
    const mainViewport = document.getElementById("main-viewport-content");
    if (!mainViewport) return;

    mainViewport.innerHTML = "";

    if (this.currentRoute.startsWith("/overview")) {
      mainViewport.appendChild(renderOverview(this.currentRoute, (slug) => this.navigateTo(slug)));
    } else if (this.currentRoute.startsWith("/journey")) {
      mainViewport.appendChild(renderJourneyMap((slug) => this.navigateTo(slug)));
    } else if (this.currentRoute === "/playbooks/master-framework") {
      mainViewport.appendChild(renderMasterFramework((slug) => this.navigateTo(slug)));
    } else if (this.currentRoute.startsWith("/playbooks")) {
      mainViewport.appendChild(renderPlaybook(this.currentRoute, (slug) => this.navigateTo(slug)));
    } else if (this.currentRoute.startsWith("/requirements")) {
      mainViewport.appendChild(renderRequirements(this.currentRoute, (slug) => this.navigateTo(slug)));
    } else if (this.currentRoute.startsWith("/decision-logs")) {
      mainViewport.appendChild(renderDecisionLogs(this.currentRoute, (slug) => this.navigateTo(slug)));
    } else {
      mainViewport.appendChild(renderOverview("/overview/why-parent-care", (slug) => this.navigateTo(slug)));
    }

    // 3. Build Right TOC (Table of contents on-this-page)
    this.buildRightToc();
  }

    buildRightToc() {
    const tocList = document.getElementById("toc-list");
    if (!tocList) return;

    tocList.innerHTML = "";

    // 1. If we are on a playbook route
    if (this.currentRoute.startsWith("/playbooks/")) {
      const parts = this.currentRoute.replace("/playbooks/", "").split("/");
      const playbookKey = parts[0];
      const activeSection = parts[1] || "overview";

      // Find playbook sections from SITEMAP_CONFIG
      const playbooksNav = SITEMAP_CONFIG.navigation.find(n => n.id === "playbooks");
      const currentPb = playbooksNav ? playbooksNav.items.find(i => i.id === playbookKey) : null;

      if (currentPb && currentPb.sections) {
        // Group header
        const headerLi = document.createElement("li");
        headerLi.innerHTML = `<span style="font-size: 11px; font-weight: 800; color: var(--color-primary-700); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 8px;">Playbook Sections</span>`;
        tocList.appendChild(headerLi);

        currentPb.sections.forEach(sec => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.className = "toc-link";
          a.href = `#${sec.slug}`;
          a.textContent = sec.name;

          const isCurrent = sec.slug.endsWith(`/${activeSection}`) || (activeSection === "overview" && sec.slug.endsWith("/overview"));
          if (isCurrent) {
            a.classList.add("active");
            a.style.color = "var(--color-primary-600)";
            a.style.fontWeight = "700";
          } else {
            a.style.color = "var(--text-secondary)";
          }

          a.addEventListener("click", (e) => {
            e.preventDefault();
            this.navigateTo(sec.slug);
          });

          li.appendChild(a);
          tocList.appendChild(li);
        });

        // 2. Query Sub-items inside active section (DARs, FAQ Groups & Questions, Headings)
        const subItems = [];
        
        // Query headings H3
        const headings = document.querySelectorAll("#main-viewport-content h3");
        headings.forEach((h, idx) => {
          if (!h.id) h.id = `h3-sub-${idx}`;
          subItems.push({ id: h.id, title: h.textContent.trim(), element: h, type: "group" });
        });

        // Query FAQ items specifically
        const faqSummaries = document.querySelectorAll("#main-viewport-content .faq-minimal-item summary");
        faqSummaries.forEach((sum, idx) => {
          const qSpan = sum.querySelector("span:first-child");
          const qText = qSpan ? qSpan.textContent.trim() : sum.textContent.trim();
          if (!sum.id) sum.id = `faq-item-${idx}`;
          subItems.push({ id: sum.id, title: qText, element: sum, type: "faq" });
        });

        if (subItems.length > 0) {
          const subHeaderLi = document.createElement("li");
          subHeaderLi.innerHTML = `<span style="font-size: 11px; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin: 18px 0 8px; padding-top: 12px; border-top: 1px dashed var(--border-subtle);">In This Section</span>`;
          tocList.appendChild(subHeaderLi);

          subItems.forEach(item => {
            const sli = document.createElement("li");
            const sa = document.createElement("a");
            sa.className = "toc-link";
            sa.href = `#${item.id}`;
            sa.textContent = item.title;
            
            if (item.type === "group") {
              sa.style.fontWeight = "700";
              sa.style.fontSize = "12px";
              sa.style.color = "var(--text-primary)";
              sa.style.marginTop = "6px";
            } else {
              sa.style.paddingLeft = "10px";
              sa.style.fontSize = "12px";
              sa.style.color = "var(--text-muted)";
              sa.style.lineHeight = "1.4";
            }

            sa.addEventListener("click", (e) => {
              e.preventDefault();
              const detailsParent = item.element.closest("details");
              if (detailsParent && !detailsParent.open) {
                detailsParent.open = true;
              }
              item.element.scrollIntoView({ behavior: "smooth", block: "start" });
            });

            sli.appendChild(sa);
            tocList.appendChild(sli);
          });
        }

        const container = document.getElementById("right-toc-container");
        if (container) container.style.display = "block";
        return;
      }
    }

    // Default fallback for other routes
    const items = [];
    const headings = document.querySelectorAll("#main-viewport-content h2, #main-viewport-content h3");
    headings.forEach((heading, idx) => {
      const title = heading.textContent.trim();
      if (!heading.id) heading.id = `heading-sec-${idx}`;
      const level = heading.tagName.toLowerCase() === "h2" ? 1 : 2;
      items.push({ id: heading.id, title: title, level: level, element: heading });
    });

    if (items.length === 0) {
      const container = document.getElementById("right-toc-container");
      if (container) container.style.display = "none";
      return;
    }

    const container = document.getElementById("right-toc-container");
    if (container) container.style.display = "block";

    items.forEach(item => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "toc-link";
      a.href = `#${item.id}`;
      a.textContent = item.title;

      if (item.level === 2) {
        a.style.paddingLeft = "14px";
        a.style.fontSize = "12px";
        a.style.color = "var(--text-muted)";
      } else {
        a.style.fontWeight = "600";
      }

      a.addEventListener("click", (e) => {
        e.preventDefault();
        const detailsParent = item.element.closest("details");
        if (detailsParent && !detailsParent.open) {
          detailsParent.open = true;
        }
        item.element.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      li.appendChild(a);
      tocList.appendChild(li);
    });
  }
          a.addEventListener("click", (e) => {
            e.preventDefault();
            this.navigateTo(sec.slug);
          });

          li.appendChild(a);
          tocList.appendChild(li);
        });

        // Also query sub-items inside current active view (e.g. DAR items, H3 headings)
        const subHeadings = document.querySelectorAll("#main-viewport-content h3, #main-viewport-content summary h3");
        if (subHeadings.length > 0) {
          const subHeaderLi = document.createElement("li");
          subHeaderLi.innerHTML = `<span style="font-size: 11px; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin: 16px 0 6px; padding-top: 10px; border-top: 1px dashed var(--border-subtle);">In This Section</span>`;
          tocList.appendChild(subHeaderLi);

          subHeadings.forEach((sh, idx) => {
            const title = sh.textContent.trim();
            if (!sh.id) sh.id = `sub-sec-${idx}`;
            const sli = document.createElement("li");
            const sa = document.createElement("a");
            sa.className = "toc-link";
            sa.href = `#${sh.id}`;
            sa.textContent = title;
            sa.style.paddingLeft = "10px";
            sa.style.fontSize = "12.5px";
            sa.style.color = "var(--text-muted)";

            sa.addEventListener("click", (e) => {
              e.preventDefault();
              const detailsParent = sh.closest("details");
              if (detailsParent && !detailsParent.open) {
                detailsParent.open = true;
              }
              sh.scrollIntoView({ behavior: "smooth", block: "start" });
            });

            sli.appendChild(sa);
            tocList.appendChild(sli);
          });
        }

        const container = document.getElementById("right-toc-container");
        if (container) container.style.display = "block";
        return;
      }
    }

    // 2. Default fallback for other pages (Overview, Requirements, Journey)
    const items = [];
    const headings = document.querySelectorAll("#main-viewport-content h2, #main-viewport-content h3");
    headings.forEach((heading, idx) => {
      const title = heading.textContent.trim();
      if (!heading.id) heading.id = `heading-sec-${idx}`;
      const level = heading.tagName.toLowerCase() === "h2" ? 1 : 2;
      items.push({ id: heading.id, title: title, level: level, element: heading });
    });

    if (items.length === 0) {
      const container = document.getElementById("right-toc-container");
      if (container) container.style.display = "none";
      return;
    }

    const container = document.getElementById("right-toc-container");
    if (container) container.style.display = "block";

    items.forEach(item => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "toc-link";
      a.href = `#${item.id}`;
      a.textContent = item.title;

      if (item.level === 2) {
        a.style.paddingLeft = "14px";
        a.style.fontSize = "12px";
        a.style.color = "var(--text-muted)";
      } else {
        a.style.fontWeight = "600";
      }

      a.addEventListener("click", (e) => {
        e.preventDefault();
        const detailsParent = item.element.closest("details");
        if (detailsParent && !detailsParent.open) {
          detailsParent.open = true;
        }
        item.element.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      li.appendChild(a);
      tocList.appendChild(li);
    });
  }
}

// Start Application on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  new App();
});

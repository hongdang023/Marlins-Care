import { SITEMAP_CONFIG } from '../data.js';

export function initNavigation(currentRoute, onNavigate) {
  renderTopNav(currentRoute, onNavigate);
  renderSidebar(currentRoute, onNavigate);
}

function renderTopNav(currentRoute, onNavigate) {
  const topNavCenter = document.querySelector('.top-nav-center');
  if (!topNavCenter) return;

  const currentCategory = getActiveCategory(currentRoute);

  topNavCenter.innerHTML = `
    <a href="#/overview/why-parent-care" class="nav-link-item ${currentCategory === 'overview' ? 'active' : ''}" data-nav="overview">
      Overview
    </a>
    <a href="#/journey" class="nav-link-item ${currentCategory === 'journey' ? 'active' : ''}" data-nav="journey">
      Parent Journey
    </a>
    <div class="mega-menu-wrapper">
      <a href="#/playbooks/marlins-day" class="nav-link-item ${currentCategory === 'playbooks' ? 'active' : ''}" data-nav="playbooks">
        Playbooks
      </a>
      <div class="mega-menu-panel">
        ${renderMegaMenuContent()}
      </div>
    </div>
    <a href="#/decision-logs/midpoint-pulse" class="nav-link-item ${currentCategory === 'decision-logs' ? 'active' : ''}" data-nav="decision-logs">
      Decision Logs
    </a>
  `;

  // Attach click events
  topNavCenter.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const slug = href.replace('#', '');
        onNavigate(slug);
      }
    });
  });
}

function renderMegaMenuContent() {
  const playbooksNav = SITEMAP_CONFIG.navigation.find(n => n.id === 'playbooks');
  if (!playbooksNav || !playbooksNav.megaGroups) return '';

  return playbooksNav.megaGroups.map(group => `
    <div class="mega-group">
      <div class="mega-group-title">
        <span>📁</span> ${group.group}
      </div>
      ${group.items.map(item => `
        <a href="#${item.slug}" class="mega-item-link">
          <div class="mega-item-name">${item.title}</div>
          <div class="mega-item-desc">${item.desc}</div>
        </a>
      `).join('')}
    </div>
  `).join('');
}

export function renderSidebar(currentRoute, onNavigate) {
  const sidebar = document.querySelector('.left-sidebar');
  if (!sidebar) return;

  const currentCategory = getActiveCategory(currentRoute);

  let html = '';

  // Group 1: OVERVIEW
  html += `
    <div class="sidebar-group">
      <div class="sidebar-group-title">1. Overview</div>
      <a href="#/overview/why-parent-care" class="sidebar-item ${currentRoute === '/overview/why-parent-care' ? 'active' : ''}">
        <span>Why Parent Care</span>
      </a>
      <a href="#/overview/parent-jobs" class="sidebar-item ${currentRoute === '/overview/parent-jobs' ? 'active' : ''}">
        <span>Parent Jobs (JTBD)</span>
      </a>
      <a href="#/overview/core-principles" class="sidebar-item ${currentRoute === '/overview/core-principles' ? 'active' : ''}">
        <span>Core Principles</span>
      </a>
      <a href="#/overview/capability-map" class="sidebar-item ${currentRoute === '/overview/capability-map' ? 'active' : ''}">
        <span>Capability Map</span>
      </a>
    </div>
  `;

  // Group 2: PARENT JOURNEY (3 Pha)
  html += `
    <div class="sidebar-group">
      <div class="sidebar-group-title">2. Parent Journey</div>
      <a href="#/journey" class="sidebar-item ${currentRoute === '/journey' ? 'active' : ''}">
        <span>Journey Map</span>
        <span class="badge badge-system" style="font-size:9px; font-weight:700;">3 PHASES</span>
      </a>
    </div>
  `;

  // Group 3: PLAYBOOKS (Collapsible Tree Navigation)
  const playbooksNav = SITEMAP_CONFIG.navigation.find(n => n.id === 'playbooks');
  const masterFw = playbooksNav ? playbooksNav.masterFramework : null;
  const playbookItems = playbooksNav ? playbooksNav.items : [];

  html += `
    <div class="sidebar-group">
      <div class="sidebar-group-title">3. Playbooks</div>
      
      <!-- Master Framework Link -->
      ${masterFw ? `
        <a href="#${masterFw.slug}" class="sidebar-item ${currentRoute === masterFw.slug ? 'active' : ''}" style="margin-bottom: var(--space-2); border-left: 2px solid var(--color-primary-600); background: var(--bg-surface-subtle);">
          <span style="font-weight:700;">📖 Master Framework</span>
        </a>
      ` : ''}

      <!-- 9 Playbooks with Collapsible Tree Sub-sections -->
      <div class="sidebar-tree">
        ${playbookItems.map(pb => {
          const isParentActive = currentRoute === pb.slug || currentRoute.startsWith(pb.slug + '/');
          return `
            <div class="sidebar-tree-node ${isParentActive ? 'open' : ''}">
              <a href="#${pb.sections[0].slug}" class="sidebar-tree-header ${isParentActive ? 'active' : ''}">
                <span class="tree-title">${pb.title}</span>
                <span class="tree-caret">${isParentActive ? '▼' : '›'}</span>
              </a>
              <div class="sidebar-tree-children" style="display: ${isParentActive ? 'flex' : 'none'};">
                ${pb.sections.map(sec => {
                  const isSubActive = currentRoute === sec.slug || (currentRoute === pb.slug && sec.name === 'Overview');
                  return `
                    <a href="#${sec.slug}" class="sidebar-sub-item ${isSubActive ? 'active' : ''}">
                      <span>${sec.name}</span>
                    </a>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Group 4: DECISION LOGS
  html += `
    <div class="sidebar-group">
      <div class="sidebar-group-title">4. Decision Logs</div>
      <a href="#/decision-logs/midpoint-pulse" class="sidebar-item ${currentRoute === '/decision-logs/midpoint-pulse' ? 'active' : ''}">
        <span>DAR 01: Pulse</span>
      </a>
      <a href="#/decision-logs/trial-support" class="sidebar-item ${currentRoute === '/decision-logs/trial-support' ? 'active' : ''}">
        <span>DAR 02: Trial</span>
      </a>
      <a href="#/decision-logs/human-trigger" class="sidebar-item ${currentRoute === '/decision-logs/human-trigger' ? 'active' : ''}">
        <span>DAR 03: Trigger</span>
      </a>
      <a href="#/decision-logs/high-touch" class="sidebar-item ${currentRoute === '/decision-logs/high-touch' ? 'active' : ''}">
        <span>DAR 04: High-Touch</span>
      </a>
      <a href="#/decision-logs/completion" class="sidebar-item ${currentRoute === '/decision-logs/completion' ? 'active' : ''}">
        <span>DAR 05: Completion</span>
      </a>
    </div>
  `;

  sidebar.innerHTML = html;

  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const slug = href.replace('#', '');
        onNavigate(slug);
      }
    });
  });
}

export function renderBreadcrumbs(currentRoute) {
  const container = document.getElementById('breadcrumb-container');
  if (!container) return;

  const parts = currentRoute.split('/').filter(Boolean);
  if (parts.length === 0) {
    container.innerHTML = `<span>Home</span> <span class="breadcrumb-sep">/</span> <span>Overview</span>`;
    return;
  }

  let crumbsHtml = `<a href="#/overview/why-parent-care">Home</a>`;

  if (parts[0] === 'overview') {
    crumbsHtml += ` <span class="breadcrumb-sep">/</span> <span>Overview</span> <span class="breadcrumb-sep">/</span> <span style="color:var(--text-primary); font-weight:600;">${formatSlugTitle(parts[1])}</span>`;
  } else if (parts[0] === 'journey') {
    crumbsHtml += ` <span class="breadcrumb-sep">/</span> <span style="color:var(--text-primary); font-weight:600;">Parent Journey</span>`;
  } else if (parts[0] === 'playbooks') {
    if (parts[1] === 'master-framework') {
      crumbsHtml += ` <span class="breadcrumb-sep">/</span> <span>Playbooks</span> <span class="breadcrumb-sep">/</span> <span style="color:var(--text-primary); font-weight:600;">Master Framework</span>`;
    } else {
      const parentName = formatSlugTitle(parts[1]);
      const subName = parts[2] ? formatSlugTitle(parts[2]) : 'Overview';
      crumbsHtml += ` <span class="breadcrumb-sep">/</span> <a href="#/playbooks/${parts[1]}/overview">Playbooks</a> <span class="breadcrumb-sep">/</span> <a href="#/playbooks/${parts[1]}/overview">${parentName}</a> <span class="breadcrumb-sep">/</span> <span style="color:var(--text-primary); font-weight:600;">${subName}</span>`;
    }
  } else if (parts[0] === 'decision-logs') {
    crumbsHtml += ` <span class="breadcrumb-sep">/</span> <a href="#/decision-logs/midpoint-pulse">Decision Logs</a> <span class="breadcrumb-sep">/</span> <span style="color:var(--text-primary); font-weight:600;">${formatSlugTitle(parts[1])}</span>`;
  }

  container.innerHTML = crumbsHtml;
}

function getActiveCategory(slug) {
  if (slug.startsWith('/overview')) return 'overview';
  if (slug.startsWith('/journey')) return 'journey';
  if (slug.startsWith('/playbooks')) return 'playbooks';
  if (slug.startsWith('/decision-logs')) return 'decision-logs';
  return 'overview';
}

function formatSlugTitle(slug) {
  if (!slug) return '';
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

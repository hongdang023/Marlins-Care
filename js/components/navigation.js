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

  // Group 2: PARENT JOURNEY
  html += `
    <div class="sidebar-group">
      <div class="sidebar-group-title">2. Parent Journey</div>
      <a href="#/journey" class="sidebar-item ${currentRoute === '/journey' ? 'active' : ''}">
        <span>Interactive Journey Map</span>
        <span class="badge badge-system" style="font-size:9px;">7 STAGES</span>
      </a>
    </div>
  `;

  // Group 3: PLAYBOOKS (AARRR Funnel Order)
  html += `
    <div class="sidebar-group">
      <div class="sidebar-group-title">3. Playbooks (AARRR Funnel)</div>
      
      <!-- Acquisition -->
      <a href="#/playbooks/marlins-day" class="sidebar-item ${currentRoute === '/playbooks/marlins-day' ? 'active' : ''}">
        <span>Marlins Day</span>
        <span class="badge-aarrr-pill acq" style="background:#ffedd5; color:#c2410c; border:1px solid #fdba74;" title="Acquisition">A</span>
      </a>
      <a href="#/playbooks/marlins-workshop" class="sidebar-item ${currentRoute === '/playbooks/marlins-workshop' ? 'active' : ''}">
        <span>Marlins Workshop</span>
        <span class="badge-aarrr-pill acq" style="background:#ffedd5; color:#c2410c; border:1px solid #fdba74;" title="Acquisition">A</span>
      </a>
      <a href="#/playbooks/community" class="sidebar-item ${currentRoute === '/playbooks/community' ? 'active' : ''}">
        <span>Community & Social</span>
        <span class="badge-aarrr-pill acq" style="background:#ffedd5; color:#c2410c; border:1px solid #fdba74;" title="Acquisition">A</span>
      </a>

      <!-- Activation -->
      <a href="#/playbooks/trial-class" class="sidebar-item ${currentRoute === '/playbooks/trial-class' || currentRoute === '/playbooks/trial-care' ? 'active' : ''}">
        <span>Trial Class</span>
        <span class="badge-aarrr-pill act" style="background:#e0f2fe; color:#0369a1; border:1px solid #7dd3fc;" title="Activation">A</span>
      </a>

      <!-- Retention -->
      <a href="#/playbooks/live-class" class="sidebar-item ${currentRoute === '/playbooks/live-class' || currentRoute === '/playbooks/progress-update' || currentRoute === '/playbooks/mentor-insight' || currentRoute === '/playbooks/parent-support' || currentRoute === '/playbooks/milestones' ? 'active' : ''}">
        <span>Live Class</span>
        <span class="badge-aarrr-pill ret" style="background:#ccfbf1; color:#0f766e; border:1px solid #5eead4;" title="Retention">R</span>
      </a>
      <a href="#/playbooks/family-meeting" class="sidebar-item ${currentRoute === '/playbooks/family-meeting' || currentRoute === '/playbooks/family-experience' ? 'active' : ''}">
        <span>Family Meeting</span>
        <span class="badge-aarrr-pill ret" style="background:#ccfbf1; color:#0f766e; border:1px solid #5eead4;" title="Retention">R</span>
      </a>

      <!-- Referral -->
      <a href="#/playbooks/growth-story" class="sidebar-item ${currentRoute === '/playbooks/growth-story' ? 'active' : ''}">
        <span>Growth Story</span>
        <span class="badge-aarrr-pill ref" style="background:#f3e8ff; color:#7e22ce; border:1px solid #d8b4fe;" title="Referral">R</span>
      </a>
      <a href="#/playbooks/referrals" class="sidebar-item ${currentRoute === '/playbooks/referrals' ? 'active' : ''}">
        <span>Referrals Program</span>
        <span class="badge-aarrr-pill ref" style="background:#f3e8ff; color:#7e22ce; border:1px solid #d8b4fe;" title="Referral">R</span>
      </a>

      <!-- Revenue -->
      <a href="#/playbooks/next-steps" class="sidebar-item ${currentRoute === '/playbooks/next-steps' ? 'active' : ''}">
        <span>Next Steps</span>
        <span class="badge-aarrr-pill rev" style="background:#dcfce7; color:#15803d; border:1px solid #86efac;" title="Revenue">R</span>
      </a>
    </div>
  `;

  // Group 4: DECISION LOGS
  html += `
    <div class="sidebar-group">
      <div class="sidebar-group-title">4. Decision Logs (DARs)</div>
      <a href="#/decision-logs/midpoint-pulse" class="sidebar-item ${currentRoute === '/decision-logs/midpoint-pulse' ? 'active' : ''}">
        <span>DAR 01: Midpoint Pulse</span>
      </a>
      <a href="#/decision-logs/trial-support" class="sidebar-item ${currentRoute === '/decision-logs/trial-support' ? 'active' : ''}">
        <span>DAR 02: Trial Support</span>
      </a>
      <a href="#/decision-logs/human-trigger" class="sidebar-item ${currentRoute === '/decision-logs/human-trigger' ? 'active' : ''}">
        <span>DAR 03: Human Trigger</span>
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
    crumbsHtml += ` <span class="breadcrumb-sep">/</span> <a href="#/playbooks/trial-care">Playbooks</a> <span class="breadcrumb-sep">/</span> <span style="color:var(--text-primary); font-weight:600;">${formatSlugTitle(parts[1])}</span>`;
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

import { KNOWLEDGE_HUB_DATA, SITEMAP_CONFIG } from '../data.js';
import { FULL_PLAYBOOKS_COMPILED } from '../data/full_playbooks_compiled.js';
import { copyToClipboard } from '../utils/copyClipboard.js';

// Mapping Playbooks slug -> Touchpoints IDs & Metadata
const PLAYBOOKS_MAP = {
  // 1. ACQUISITION
  'social-media': {
    title: 'Social Media Playbook',
    group: 'Acquisition',
    summary: 'Quy trình đúc kết phản tư, thu thập bằng chứng học tập và kể chuyện chuyển hóa của học sinh trên mạng xã hội.',
    badge: 'badge-mentor',
    touchpointIds: ['SOC']
  },
  'community': {
    title: 'Community & Social Playbook',
    group: 'Acquisition',
    summary: 'Môi trường sinh hoạt cộng đồng và lan tỏa tri thức giáo dục đa kênh.',
    badge: 'badge-hybrid',
    touchpointIds: ['COM']
  },
  'marlins-workshop': {
    title: 'Marlins Workshop Playbook',
    group: 'Acquisition',
    summary: 'Chuỗi chuyên đề trực tuyến giải tỏa trăn trở giáo dục và định hướng năng lực AI cho con.',
    badge: 'badge-marlins',
    touchpointIds: ['WS']
  },
  'marlins-day': {
    title: 'Marlins Day Playbook',
    group: 'Acquisition',
    summary: 'Không gian đối thoại tháo gỡ ngộ nhận và chuẩn bị tâm thế đồng hành cho phụ huynh.',
    badge: 'badge-marlins',
    touchpointIds: ['T3']
  },

  // 2. ACTIVATION
  'trial-class': {
    title: 'Trial Class Playbook',
    group: 'Activation',
    summary: 'Quy trình trải nghiệm học thử 2 buổi và tư vấn dữ liệu thực chứng minh bạch.',
    badge: 'badge-hybrid',
    touchpointIds: ['T1', 'T2', 'T4']
  },

  // 3. RETENTION
  'live-class': {
    title: 'Live Class Playbook',
    group: 'Retention',
    summary: 'Quy chuẩn đồng hành, cập nhật tiến độ và can thiệp sư phạm suốt 12 buổi học chính thức.',
    badge: 'badge-system',
    touchpointIds: ['T5', 'T6', 'T7', 'T8', 'T9', 'T13']
  },
  'family-meeting': {
    title: 'Family Meeting Playbook',
    group: 'Retention',
    summary: 'Gặp gỡ gia đình trực tiếp để thấu cảm bối cảnh và kiến tạo khoảnh khắc gắn kết sâu sắc.',
    badge: 'badge-mentor',
    touchpointIds: ['T10']
  },

  // 4. REFERRAL & REVENUE
  'referrals': {
    title: 'Referrals Program Playbook',
    group: 'Referral',
    summary: 'Chính sách tri ân và cơ chế giới thiệu phụ huynh đồng hành lan tỏa giá trị.',
    badge: 'badge-milestone',
    touchpointIds: ['REF']
  }
};

export function renderPlaybook(slug, onNavigate) {
  const parts = slug.replace('/playbooks/', '').split('/');
  const playbookKey = parts[0];
  const activeSectionSlug = parts[1] || 'overview';

  const config = PLAYBOOKS_MAP[playbookKey];

  if (!config) {
    const errorEl = document.createElement('div');
    errorEl.innerHTML = `<h2>Playbook không tồn tại</h2><p>Vui lòng chọn một playbook từ thanh menu.</p>`;
    return errorEl;
  }

  const container = document.createElement('div');
  container.className = 'playbook-page-wrapper';

  // Find parent playbook definition from SITEMAP_CONFIG
  const playbooksNav = SITEMAP_CONFIG.navigation.find(n => n.id === 'playbooks');
  const currentPlaybookMeta = playbooksNav ? playbooksNav.items.find(i => i.id === playbookKey) : null;
  const sectionsList = currentPlaybookMeta ? currentPlaybookMeta.sections : [];

  const playbookFull = FULL_PLAYBOOKS_COMPILED[playbookKey] || {};

  container.innerHTML = `
    <!-- Top Header & Breadcrumbs Context -->
    <div style="margin-bottom: var(--space-5);">
      <div style="display:flex; align-items:center; gap:var(--space-2); margin-bottom:var(--space-2);">
        <span class="badge ${config.badge}">NHÓM: ${config.group.toUpperCase()}</span>
        <span class="badge badge-tag">MÃ: ${config.touchpointIds.join(' · ')}</span>
        <span class="badge badge-system" style="font-size:10px;">${currentPlaybookMeta ? currentPlaybookMeta.tier : 'Tier 1'}</span>
      </div>
      <h1 style="font-size: 26px; font-weight: 800; color: var(--text-primary); letter-spacing: -0.02em; margin-bottom: var(--space-1);">
        ${config.title}
      </h1>
      <p style="font-size: 14.5px; color: var(--text-secondary); line-height: 1.5; margin: 0;">
        ${config.summary}
      </p>
    </div>

    <!-- Section Content Container (Clean Document Section - 100% Full Markdown) -->
    <div class="playbook-active-section" style="padding-top: var(--space-3);">
      ${renderSection(activeSectionSlug, playbookFull, config)}
    </div>
  `;

  // Attach copy button handlers
  container.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const copyId = btn.getAttribute('data-copy-id').replace('copy-', '');
      const contentEl = container.querySelector(`#content-${copyId}`);
      if (contentEl) {
        copyToClipboard(contentEl.innerText, btn);
      }
    });
  });

  return container;
}

function renderSection(sectionSlug, playbookFull, config) {
  const sectionContent = playbookFull[sectionSlug];

  if (!sectionContent) {
    // If exact key doesn't exist, check fallback
    if (sectionSlug === 'overview') {
      return `
        <div style="display: flex; flex-direction: column; gap: var(--space-4);">
          <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-left: 4px solid var(--color-primary-600); border-radius: var(--radius-md); padding: var(--space-5);">
            <div style="font-size: 12px; font-weight: 700; color: var(--color-primary-700); text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">
              Metadata Header
            </div>
            ${playbookFull['overview'] || `<p>${config.summary}</p>`}
          </div>
          ${playbookFull['framework'] ? `
            <div style="margin-top: var(--space-4);">
              <h2 style="font-size: 19px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-3); border-bottom: 2px solid var(--border-subtle); padding-bottom: var(--space-2);">
                Playbook Architecture & Engine
              </h2>
              ${playbookFull['framework']}
            </div>
          ` : ''}
        </div>
      `;
    }
    return `<p style="color:var(--text-muted);">Nội dung chi tiết đang được cập nhật.</p>`;
  }

  const titleMap = {
    'overview': 'Overview',
    'stakeholder-mapping': 'Stakeholder Mapping',
    'session-agenda': 'Session Agenda',
    'sop-steps': 'SOP Steps',
    'dos-donts': "Do's & Don'ts",
    'assessment-rubrics': 'Assessment Rubrics',
    'decision-logs': 'Decision Logs',
    'faq': 'FAQ'
  };

  const title = titleMap[sectionSlug] || sectionSlug.toUpperCase();

  if (sectionSlug === 'overview') {
    return `
      <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-left: 4px solid var(--color-primary-600); border-radius: var(--radius-md); padding: var(--space-5);">
          <div style="font-size: 12px; font-weight: 700; color: var(--color-primary-700); text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">
            Metadata Header
          </div>
          ${sectionContent}
        </div>
        ${playbookFull['framework'] ? `
          <div style="margin-top: var(--space-4);">
            <h2 style="font-size: 19px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-3); border-bottom: 2px solid var(--border-subtle); padding-bottom: var(--space-2);">
              Playbook Architecture & Engine
            </h2>
            ${playbookFull['framework']}
          </div>
        ` : ''}
      </div>
    `;
  }

  return `
    <div>
      <h2 style="font-size: 19px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-3); border-bottom: 2px solid var(--border-subtle); padding-bottom: var(--space-2);">
        ${title}
      </h2>
      <div class="full-section-body" style="font-size: 14px; line-height: 1.6; color: var(--text-primary);">
        ${sectionContent}
      </div>
    </div>
  `;
}

import { KNOWLEDGE_HUB_DATA, SITEMAP_CONFIG } from '../data.js';
import { copyToClipboard } from '../utils/copyClipboard.js';

// Mapping Playbooks slug -> Touchpoints IDs & Metadata (theo chuẩn AARRR)
const PLAYBOOKS_MAP = {
  // 1. ACQUISITION
  'marlins-day': {
    title: 'Marlins Day Playbook',
    group: 'Acquisition',
    summary: 'Không gian đối thoại tháo gỡ ngộ nhận và chuẩn bị tâm thế đồng hành cho phụ huynh.',
    badge: 'badge-marlins',
    touchpointIds: ['T3']
  },
  'marlins-workshop': {
    title: 'Marlins Workshop Playbook',
    group: 'Acquisition',
    summary: 'Chuỗi chuyên đề trực tuyến giải tỏa trăn trở giáo dục và định hướng năng lực AI cho con.',
    badge: 'badge-marlins',
    touchpointIds: ['WS']
  },
  'community': {
    title: 'Community & Social Playbook',
    group: 'Acquisition',
    summary: 'Môi trường sinh hoạt cộng đồng và lan tỏa tri thức giáo dục đa kênh.',
    badge: 'badge-hybrid',
    touchpointIds: ['COM']
  },

  // 2. ACTIVATION
  'trial-class': {
    title: 'Trial Class Playbook',
    group: 'Activation',
    summary: 'Quy trình trải nghiệm học thử 2 buổi và tư vấn dữ liệu thực chứng minh bạch.',
    badge: 'badge-hybrid',
    touchpointIds: ['T1', 'T2', 'T4']
  },
  'trial-care': { // Alias
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
  'progress-update': { // Alias
    title: 'Live Class Playbook',
    group: 'Retention',
    summary: 'Quy chuẩn đồng hành, cập nhật tiến độ và can thiệp sư phạm suốt 12 buổi học chính thức.',
    badge: 'badge-system',
    touchpointIds: ['T5', 'T6', 'T7', 'T8', 'T9', 'T13']
  },
  'mentor-insight': { // Alias
    title: 'Live Class Playbook',
    group: 'Retention',
    summary: 'Quy chuẩn đồng hành, cập nhật tiến độ và can thiệp sư phạm suốt 12 buổi học chính thức.',
    badge: 'badge-system',
    touchpointIds: ['T5', 'T6', 'T7', 'T8', 'T9', 'T13']
  },
  'parent-support': { // Alias
    title: 'Live Class Playbook',
    group: 'Retention',
    summary: 'Quy chuẩn đồng hành, cập nhật tiến độ và can thiệp sư phạm suốt 12 buổi học chính thức.',
    badge: 'badge-system',
    touchpointIds: ['T5', 'T6', 'T7', 'T8', 'T9', 'T13']
  },
  'milestones': { // Alias
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
  'family-experience': { // Alias
    title: 'Family Meeting Playbook',
    group: 'Retention',
    summary: 'Gặp gỡ gia đình trực tiếp để thấu cảm bối cảnh và kiến tạo khoảnh khắc gắn kết sâu sắc.',
    badge: 'badge-mentor',
    touchpointIds: ['T10']
  },

  // 4. REFERRAL
  'growth-story': {
    title: 'Growth Story Playbook',
    group: 'Referral',
    summary: 'Hồ sơ tổng kết hành trình trưởng thành 5 phần tôn vinh nỗ lực của con sau khóa học.',
    badge: 'badge-hybrid',
    touchpointIds: ['T11']
  },
  'referrals': {
    title: 'Referrals Program Playbook',
    group: 'Referral',
    summary: 'Chính sách tri ân và cơ chế giới thiệu phụ huynh đồng hành lan tỏa giá trị.',
    badge: 'badge-milestone',
    touchpointIds: ['REF']
  },

  // 5. REVENUE
  'next-steps': {
    title: 'Next Steps Playbook',
    group: 'Revenue',
    summary: 'Tư vấn lộ trình phát triển tiếp theo trung thực dựa trên nhu cầu thực tế của học sinh.',
    badge: 'badge-mentor',
    touchpointIds: ['T12']
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

  const touchpoints = config.touchpointIds.map(id => {
    return KNOWLEDGE_HUB_DATA.touchpoints.find(t => t.id === id);
  }).filter(Boolean);

  const container = document.createElement('div');
  container.className = 'playbook-page-wrapper';

  // Find parent playbook definition from SITEMAP_CONFIG
  const playbooksNav = SITEMAP_CONFIG.navigation.find(n => n.id === 'playbooks');
  const currentPlaybookMeta = playbooksNav ? playbooksNav.items.find(i => i.id === playbookKey) : null;
  const sectionsList = currentPlaybookMeta ? currentPlaybookMeta.sections : [];

  // Match current section
  const currentSectionMeta = sectionsList.find(s => s.slug.endsWith('/' + activeSectionSlug)) || sectionsList[0] || { name: 'Overview', slug: `/playbooks/${playbookKey}/overview` };

  container.innerHTML = `
    <!-- Top Header & Breadcrumbs Context -->
    <div style="margin-bottom: var(--space-5);">
      <div style="display:flex; align-items:center; gap:var(--space-2); margin-bottom:var(--space-2);">
        <span class="badge ${config.badge}">NHÓM: ${config.group.toUpperCase()}</span>
        <span class="badge badge-tag">MÃ: ${config.touchpointIds.join(' · ')}</span>
        <span class="badge badge-system" style="font-size:10px;">${currentPlaybookMeta ? currentPlaybookMeta.tier : 'Modular'}</span>
      </div>
      <h1 style="font-size: 26px; font-weight: 800; color: var(--text-primary); letter-spacing: -0.02em; margin-bottom: var(--space-1);">
        ${config.title}
      </h1>
      <p style="font-size: 14.5px; color: var(--text-secondary); line-height: 1.5; margin: 0;">
        ${config.summary}
      </p>
    </div>

    <!-- Section Content Container (Clean Document Section - No Accordion) -->
    <div class="playbook-active-section" style="padding-top: var(--space-3);">
      ${renderSpecificSectionContent(activeSectionSlug, touchpoints, config, onNavigate)}
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

function renderSpecificSectionContent(sectionSlug, touchpoints, config, onNavigate) {
  const tp = touchpoints[0] || {};

  switch (sectionSlug) {
    case 'overview':
      return `
        <div style="display: flex; flex-direction: column; gap: var(--space-5);">
          <!-- Overview Card -->
          <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-left: 4px solid var(--color-primary-600); border-radius: var(--radius-md); padding: var(--space-5);">
            <div style="font-size: 12px; font-weight: 700; color: var(--color-primary-700); text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">
              Executive Overview
            </div>
            <div style="display: flex; flex-direction: column; gap: var(--space-3);">
              <div>
                <strong style="font-size: 13.5px; color: var(--text-primary);">Objective:</strong>
                <p style="font-size: 14px; color: var(--text-secondary); margin: 4px 0 0; line-height: 1.5;">${tp.purpose || config.summary}</p>
              </div>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--space-3); padding-top: var(--space-3); border-top: 1px solid var(--border-subtle);">
                <div>
                  <strong style="font-size: 12.5px; color: var(--text-primary);">Trigger:</strong>
                  <div style="font-size: 13px; color: var(--text-secondary); margin-top: 2px;">${tp.trigger || 'Theo lịch trình hệ thống'}</div>
                </div>
                <div>
                  <strong style="font-size: 12.5px; color: var(--text-primary);">Standard Time:</strong>
                  <div style="font-size: 13px; color: var(--text-secondary); margin-top: 2px;"><code>${tp.sopTime || '≤ 15 min'}</code></div>
                </div>
                <div>
                  <strong style="font-size: 12.5px; color: var(--text-primary);">Owner:</strong>
                  <div style="font-size: 13px; color: var(--text-secondary); margin-top: 2px;"><span class="badge ${getOwnerBadge(tp.owner)}">${tp.owner || 'Mentor / System'}</span></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Multi-Touchpoints List (nếu có nhiều touchpoints như Live Class, Trial Class) -->
          ${touchpoints.length > 1 ? `
            <div>
              <h3 style="font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-3);">
                Integrated Touchpoints
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-3);">
                ${touchpoints.map(subTp => `
                  <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-3);">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 4px;">
                      <strong style="color: var(--color-primary-700); font-size: 13px;">[${subTp.id}] ${subTp.name}</strong>
                      <span class="badge ${getOwnerBadge(subTp.owner)}" style="font-size: 10px;">${subTp.owner}</span>
                    </div>
                    <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.4;">${subTp.purpose}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      `;

    case 'stakeholder-mapping':
      return `
        <div>
          <h2 style="font-size: 19px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-3); border-bottom: 2px solid var(--border-subtle); padding-bottom: var(--space-2);">
            Stakeholder Mapping
          </h2>
          ${tp.stakeholderJTBD ? `
            <div style="overflow-x:auto;">
              <table class="sop-table">
                <thead>
                  <tr>
                    <th style="width: 160px;">Stakeholder</th>
                    <th>Job to be Done</th>
                    <th style="width: 220px;">Delivered Value</th>
                  </tr>
                </thead>
                <tbody>
                  ${tp.stakeholderJTBD.map(st => `
                    <tr>
                      <td><strong>${st.stakeholder}</strong></td>
                      <td>${st.job}</td>
                      <td><span class="badge badge-hybrid" style="font-size: 11.5px;">${st.value}</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : `<p style="color:var(--text-muted);">Không có dữ liệu Stakeholder Mapping riêng cho mục này.</p>`}
        </div>
      `;

    case 'session-agenda':
      return `
        <div>
          <h2 style="font-size: 19px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-3); border-bottom: 2px solid var(--border-subtle); padding-bottom: var(--space-2);">
            Session Agenda
          </h2>
          ${tp.agendaFlow ? `
            <div style="overflow-x:auto;">
              <table class="sop-table">
                <thead>
                  <tr>
                    <th style="width: 140px;">Time</th>
                    <th style="width: 180px;">Session Stage</th>
                    <th>Objective & Facilitation Guidance</th>
                  </tr>
                </thead>
                <tbody>
                  ${tp.agendaFlow.map(ag => `
                    <tr>
                      <td><code>${ag.time}</code></td>
                      <td><strong>${ag.step}</strong></td>
                      <td>${ag.goal}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : `<p style="color:var(--text-muted);">Không có bảng Session Agenda riêng cho hoạt động này.</p>`}
        </div>
      `;

    case 'mentor-guides':
      return `
        <div>
          <h2 style="font-size: 19px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-3); border-bottom: 2px solid var(--border-subtle); padding-bottom: var(--space-2);">
            Mentor Guides
          </h2>
          ${tp.mentorGuides ? `
            <div style="display: flex; flex-direction: column; gap: var(--space-5);">
              <!-- Question Bank -->
              <div>
                <div style="font-weight: 700; font-size: 14px; color: var(--text-primary); margin-bottom: var(--space-2);">
                  Question Bank
                </div>
                <div style="display: flex; flex-direction: column; gap: var(--space-2);">
                  ${tp.mentorGuides.questionBank.map(q => `
                    <div style="background: var(--bg-surface-subtle); border-left: 3px solid var(--color-primary-600); padding: var(--space-2) var(--space-3); border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
                      <div style="font-size: 13.5px; font-weight: 600; color: var(--text-primary);">#${q.no}. "${q.q}"</div>
                      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">Objective: ${q.purpose}</div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Observation Guide -->
              <div>
                <div style="font-weight: 700; font-size: 14px; color: var(--text-primary); margin-bottom: var(--space-2);">
                  Observation Guide
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-2);">
                  ${tp.mentorGuides.observationGuide.map(ob => `
                    <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-3);">
                      <div style="font-size: 13px; font-weight: 700; color: var(--text-primary);">${ob.dim}</div>
                      <div style="font-size: 12px; color: var(--text-secondary); margin-top: 2px; line-height: 1.4;">${ob.cues}</div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Exit Checklist -->
              <div style="background: rgba(245, 158, 11, 0.06); border: 1px dashed var(--color-accent-500); border-radius: var(--radius-md); padding: var(--space-4);">
                <div style="font-weight: 700; font-size: 13.5px; color: var(--color-accent-700); margin-bottom: var(--space-2);">
                  Exit Checklist
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 8px;">
                  ${tp.mentorGuides.exitChecklist.map(ex => `
                    <div style="font-size: 12.5px; color: var(--text-primary); display:flex; align-items:center; gap:6px;">
                      <span style="color:var(--color-accent-600);">✔</span> ${ex}
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          ` : `<p style="color:var(--text-muted);">Không có hướng dẫn Mentor Guides riêng cho mục này.</p>`}
        </div>
      `;

    case 'sop-steps':
    case 'operating-sop':
      return `
        <div>
          <h2 style="font-size: 19px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-3); border-bottom: 2px solid var(--border-subtle); padding-bottom: var(--space-2);">
            SOP Steps
          </h2>
          ${tp.sopSteps ? `
            <div style="overflow-x:auto; margin-bottom: var(--space-5);">
              <table class="sop-table">
                <thead>
                  <tr>
                    <th style="width: 80px;">Step</th>
                    <th style="width: 220px;">Operation</th>
                    <th>Detailed Workflow & Deliverables</th>
                  </tr>
                </thead>
                <tbody>
                  ${tp.sopSteps.map(s => `
                    <tr>
                      <td><strong>Step ${s.step}</strong></td>
                      <td><strong>${s.title}</strong></td>
                      <td>${s.desc}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : '<p style="color:var(--text-muted);">Quy trình tác nghiệp đang được đồng bộ.</p>'}
        </div>
      `;

    case 'dos-donts':
      return `
        <div>
          <h2 style="font-size: 19px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-3); border-bottom: 2px solid var(--border-subtle); padding-bottom: var(--space-2);">
            Do's & Don'ts
          </h2>
          <div class="do-dont-grid">
            <div class="do-box">
              <div class="do-title">DO'S (NÊN LÀM)</div>
              <ul style="padding-left: var(--space-4); margin: 0; font-size: 13px; line-height: 1.6;">
                ${tp.doGuidelines ? tp.doGuidelines.map(d => `<li style="margin-bottom:6px;">${d}</li>`).join('') : '<li>Lắng nghe thấu cảm và tôn trọng cảm xúc phụ huynh</li><li>Dẫn chứng bằng dữ liệu học tập thực tế của con</li>'}
              </ul>
            </div>
            <div class="dont-box">
              <div class="dont-title">DON'TS (CẤM KỴ)</div>
              <ul style="padding-left: var(--space-4); margin: 0; font-size: 13px; line-height: 1.6;">
                ${tp.dontGuidelines ? tp.dontGuidelines.map(d => `<li style="margin-bottom:6px;">${d}</li>`).join('') : '<li>Không gửi tin nhắn spam máy móc vô hồn</li><li>Không tranh cãi hoặc phủ nhận bối cảnh gia đình</li>'}
              </ul>
            </div>
          </div>
        </div>
      `;

    case 'decision-logs':
      return `
        <div>
          <h2 style="font-size: 19px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-3); border-bottom: 2px solid var(--border-subtle); padding-bottom: var(--space-2);">
            Decision Logs
          </h2>
          <div style="background: var(--bg-surface-subtle); border-left: 3px solid var(--color-marlins); padding: var(--space-4); border-radius: var(--radius-md);">
            <div style="font-weight: 700; color: var(--text-primary); font-size: 14px; margin-bottom: 4px;">CMMI DAR Architecture Decisions</div>
            <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5; margin: 0;">
              Mọi quyết định thiết kế của Playbook này được bảo vệ bởi khung đánh giá đa phương án theo chuẩn CMMI DAR nhằm cân bằng giữa tự động hóa bằng chứng và chiều sâu thấu cảm con người.
            </p>
          </div>
        </div>
      `;

    case 'faq':
      return `
        <div>
          <h2 style="font-size: 19px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-3); border-bottom: 2px solid var(--border-subtle); padding-bottom: var(--space-2);">
            FAQ
          </h2>
          <div style="display: flex; flex-direction: column; gap: var(--space-3);">
            <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-3);">
              <div style="font-size: 13.5px; font-weight: 700; color: var(--text-primary);">Q: Khi phụ huynh phản hồi nhạy cảm hoặc lo âu quá mức, Mentor cần xử lý thế nào?</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-top: 4px; line-height: 1.5;">A: Lắng nghe 100%, ghi nhận cảm xúc và kích hoạt quy trình can thiệp thấu cảm 1-1 theo Dory Notes, không vội vàng giải thích số liệu máy móc.</div>
            </div>
            <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-3);">
              <div style="font-size: 13.5px; font-weight: 700; color: var(--text-primary);">Q: Báo cáo Dory Notes cần hoàn thành trong bao lâu sau buổi học?</div>
              <div style="font-size: 13px; color: var(--text-secondary); margin-top: 4px; line-height: 1.5;">A: Tối đa 15 phút sau khi kết thúc buổi học để đảm bảo tính thời sự và tươi mới của bằng chứng học tập.</div>
            </div>
          </div>
        </div>
      `;

    case 'templates':
    case 'deliverables':
      return `
        <div>
          <h2 style="font-size: 19px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-3); border-bottom: 2px solid var(--border-subtle); padding-bottom: var(--space-2);">
            Deliverables & Templates
          </h2>
          
          <!-- Family Notes Template if available -->
          ${tp.familyNotesTemplate ? `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-5);">
              <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-4);">
                <div style="font-size: 13.5px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-2);">Family Notes Structure:</div>
                <ul style="padding-left: var(--space-4); margin: 0; font-size: 12.5px; color: var(--text-secondary); line-height: 1.6;">
                  ${tp.familyNotesTemplate.structure.map(st => `<li>${st}</li>`).join('')}
                </ul>
              </div>
              <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-4);">
                <div style="font-size: 13.5px; font-weight: 700; color: var(--color-primary-600); margin-bottom: var(--space-2);">Reference Example:</div>
                <div style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5; display:flex; flex-direction:column; gap:4px;">
                  <div><strong>Goal:</strong> ${tp.familyNotesTemplate.exampleCase.goal}</div>
                  <div><strong>3 Insights:</strong> ${tp.familyNotesTemplate.exampleCase.insights.join(' | ')}</div>
                  <div><strong>Mentor Note:</strong> ${tp.familyNotesTemplate.exampleCase.mentorNote}</div>
                  <div><strong>Next Action:</strong> ${tp.familyNotesTemplate.exampleCase.nextActions}</div>
                  <div><strong>Evidence:</strong> <em>${tp.familyNotesTemplate.exampleCase.evidence}</em></div>
                </div>
              </div>
            </div>
          ` : ''}

          <!-- Message Templates if available -->
          ${tp.template ? `
            <div class="template-box">
              <div class="template-header">
                <span class="template-channel">Channel: <strong>${tp.template.channel}</strong></span>
                <button class="btn-copy" data-copy-id="copy-${tp.id}">
                  📋 Copy Template
                </button>
              </div>
              <div class="template-content" id="content-${tp.id}">${escapeHtml(tp.template.content)}</div>
            </div>
          ` : ''}
        </div>
      `;

    case 'assessment-rubrics':
      return `
        <div>
          <h2 style="font-size: 19px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-3); border-bottom: 2px solid var(--border-subtle); padding-bottom: var(--space-2);">
            Assessment Rubrics
          </h2>
          <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: var(--space-3);">
            Thước đo đối soát và đánh giá chất lượng bàn giao theo 5 mức độ (Chuẩn bắt buộc là <strong>L3 DoD ⭐</strong>):
          </p>
          ${tp.rubric && tp.rubric.length > 0 ? `
            <div class="rubric-card" style="border:none; padding:0; box-shadow:none;">
              <div class="rubric-table-wrapper">
                <table class="rubric-table">
                  <thead>
                    <tr>
                      <th class="rubric-col-crit">Criteria</th>
                      <th class="rubric-col-l1">L1 Deficient</th>
                      <th class="rubric-col-l2">L2 Basic</th>
                      <th class="rubric-col-l3-head">L3 Competent (DoD ⭐)</th>
                      <th class="rubric-col-l4">L4 Proficient</th>
                      <th class="rubric-col-l5">L5 Mastery</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${tp.rubric.map(r => `
                      <tr>
                        <td class="rubric-col-crit"><strong>${r.criterion}</strong></td>
                        <td>${r.l1}</td>
                        <td>${r.l2}</td>
                        <td class="rubric-cell-l3">${r.l3}</td>
                        <td>${r.l4}</td>
                        <td>${r.l5}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          ` : `
            <p style="color:var(--text-muted);">Áp dụng theo chuẩn Master Assessment Rubrics Framework.</p>
          `}
        </div>
      `;

    default:
      return `<p>Vui lòng chọn một mục từ danh mục bên trái.</p>`;
  }
}

function getOwnerBadge(owner) {
  if (!owner) return 'badge-system';
  const low = owner.toLowerCase();
  if (low.includes('system')) return 'badge-system';
  if (low.includes('mentor')) return 'badge-mentor';
  if (low.includes('marlins')) return 'badge-marlins';
  if (low.includes('hybrid')) return 'badge-hybrid';
  if (low.includes('risk')) return 'badge-risk';
  return 'badge-system';
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

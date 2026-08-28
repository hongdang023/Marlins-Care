import { KNOWLEDGE_HUB_DATA } from '../data.js';
import { copyToClipboard } from '../utils/copyClipboard.js';

// Mapping Playbooks slug -> Touchpoints IDs & Metadata (theo chuẩn AARRR)
const PLAYBOOKS_MAP = {
  // 1. ACQUISITION
  'marlins-day': {
    title: 'Marlins Day Playbook',
    group: '1. Acquisition',
    summary: 'Không gian đối thoại 14h00 - 17h00 chiều Chủ Nhật cùng Anh Đắc (Agenda: Giới thiệu bản thân ➔ Fishbowl 2 rounds ➔ 4F Reflection ➔ Demo Nemo12 ➔ 4F Reflection) giúp phụ huynh tháo gỡ ngộ nhận và chuẩn bị tâm thế đồng hành.',
    badge: 'badge-marlins',
    touchpointIds: ['T3']
  },
  'marlins-workshop': {
    title: 'Marlins Workshop Playbook',
    group: '1. Acquisition',
    summary: 'Chuyên đề Online 20h00 - 22h00 tối Thứ 5 qua Zoom: Giải tỏa trăn trở giáo dục & công nghệ AI theo cụm chủ đề, dẫn dắt tự nhiên vào 2 buổi Trial Class Offline Chủ Nhật.',
    badge: 'badge-marlins',
    touchpointIds: ['WS']
  },
  'community': {
    title: 'Community & Social Mentoring Playbook',
    group: '1. Acquisition',
    summary: 'Quy chuẩn quản trị 3 Groups Zalo trọng điểm (Vào Chuyên Cấp 2, Chuyên Cấp 3, AI Teen - Sư Tử Con) và Guideline Storytelling trên Facebook cá nhân của Mentors.',
    badge: 'badge-hybrid',
    touchpointIds: ['COM']
  },

  // 2. ACTIVATION
  'trial-class': {
    title: 'Trial Class Playbook',
    group: '2. Activation',
    summary: 'Quy trình trọn gói 2 buổi Trial Class Offline (14h-17h Chủ Nhật): Chuẩn bị trước buổi (Pre-Trial) ➔ Báo cáo bằng chứng dữ liệu thực tế (Trial Evidence) ➔ Hỗ trợ ra quyết định trung thực (Post-Trial Decision).',
    badge: 'badge-hybrid',
    touchpointIds: ['T1', 'T2', 'T4']
  },
  'trial-care': { // Alias
    title: 'Trial Class Playbook',
    group: '2. Activation',
    summary: 'Quy trình trọn gói 2 buổi Trial Class Offline (14h-17h Chủ Nhật): Chuẩn bị trước buổi (Pre-Trial) ➔ Báo cáo bằng chứng dữ liệu thực tế (Trial Evidence) ➔ Hỗ trợ ra quyết định trung thực (Post-Trial Decision).',
    badge: 'badge-hybrid',
    touchpointIds: ['T1', 'T2', 'T4']
  },

  // 3. RETENTION
  'live-class': {
    title: 'Live Class Playbook (12 Buổi Chính Thức)',
    group: '3. Retention',
    summary: 'Bộ quy chuẩn vận hành đồng hành xuyên suốt 12 buổi Live Class Offline (14h-17h Chủ Nhật): Báo cáo tự động (T5) + Quan sát định tính Mentor (T6) + Xử lý rủi ro & Khảo sát giữa kỳ (T7-T9) + Dấu mốc chúc mừng (T13).',
    badge: 'badge-system',
    touchpointIds: ['T5', 'T6', 'T7', 'T8', 'T9', 'T13']
  },
  'progress-update': { // Alias
    title: 'Live Class Playbook (12 Buổi Chính Thức)',
    group: '3. Retention',
    summary: 'Bộ quy chuẩn vận hành đồng hành xuyên suốt 12 buổi Live Class Offline: Báo cáo tự động (T5) + Quan sát định tính Mentor (T6) + Hỗ trợ rủi ro (T7-T9) + Dấu mốc (T13).',
    badge: 'badge-system',
    touchpointIds: ['T5', 'T6', 'T7', 'T8', 'T9', 'T13']
  },
  'mentor-insight': { // Alias
    title: 'Live Class Playbook (12 Buổi Chính Thức)',
    group: '3. Retention',
    summary: 'Bộ quy chuẩn vận hành đồng hành xuyên suốt 12 buổi Live Class Offline: Báo cáo tự động (T5) + Quan sát định tính Mentor (T6) + Hỗ trợ rủi ro (T7-T9) + Dấu mốc (T13).',
    badge: 'badge-system',
    touchpointIds: ['T5', 'T6', 'T7', 'T8', 'T9', 'T13']
  },
  'parent-support': { // Alias
    title: 'Live Class Playbook (12 Buổi Chính Thức)',
    group: '3. Retention',
    summary: 'Bộ quy chuẩn vận hành đồng hành xuyên suốt 12 buổi Live Class Offline: Báo cáo tự động (T5) + Quan sát định tính Mentor (T6) + Hỗ trợ rủi ro (T7-T9) + Dấu mốc (T13).',
    badge: 'badge-system',
    touchpointIds: ['T5', 'T6', 'T7', 'T8', 'T9', 'T13']
  },
  'milestones': { // Alias
    title: 'Live Class Playbook (12 Buổi Chính Thức)',
    group: '3. Retention',
    summary: 'Bộ quy chuẩn vận hành đồng hành xuyên suốt 12 buổi Live Class Offline: Báo cáo tự động (T5) + Quan sát định tính Mentor (T6) + Hỗ trợ rủi ro (T7-T9) + Dấu mốc (T13).',
    badge: 'badge-system',
    touchpointIds: ['T5', 'T6', 'T7', 'T8', 'T9', 'T13']
  },
  'family-meeting': {
    title: 'Family Meeting Playbook',
    group: '3. Retention',
    summary: 'Gặp mặt ăn uống với các gia đình & Trải nghiệm gắn kết con người chiều sâu theo các Khoảnh khắc ý nghĩa (High-touch Meaningful Moments).',
    badge: 'badge-mentor',
    touchpointIds: ['T10']
  },
  'family-experience': { // Alias
    title: 'Family Meeting Playbook',
    group: '3. Retention',
    summary: 'Gặp mặt ăn uống với các gia đình & Trải nghiệm gắn kết con người chiều sâu theo các Khoảnh khắc ý nghĩa (High-touch Meaningful Moments).',
    badge: 'badge-mentor',
    touchpointIds: ['T10']
  },

  // 4. REFERRAL
  'growth-story': {
    title: 'Growth Story Playbook',
    group: '4. Referral',
    summary: 'Bức tranh trưởng thành 5 phần tổng kết sau 12 buổi Live Class, khơi dậy niềm tự hào sâu sắc của cha mẹ và học sinh.',
    badge: 'badge-hybrid',
    touchpointIds: ['T11']
  },
  'referrals': {
    title: 'Referrals Program Playbook',
    group: '4. Referral',
    summary: 'Cơ chế kích hoạt Đại sứ gia đình: Cấp mã/link giới thiệu cá nhân hóa cho cả Bố Mẹ và Học sinh kèm chính sách 15% hoa hồng tri ân & 15% giảm học phí cho gia đình mới.',
    badge: 'badge-milestone',
    touchpointIds: ['REF']
  },

  // 5. REVENUE
  'next-steps': {
    title: 'Next Steps Playbook',
    group: '5. Revenue',
    summary: 'Tư vấn bước phát triển tiếp theo trung thực dựa trên nhu cầu học sinh sau khi kết thúc 12 buổi Live Class (Learner-need-first).',
    badge: 'badge-mentor',
    touchpointIds: ['T12']
  }
};

export function renderPlaybook(slug, onNavigate) {
  const playbookKey = slug.replace('/playbooks/', '');
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

  container.innerHTML = `
    <!-- Header -->
    <div style="margin-bottom: var(--space-6);">
      <div style="display:flex; align-items:center; gap:var(--space-2); margin-bottom:var(--space-2);">
        <span class="badge ${config.badge}">NHÓM: ${config.group.toUpperCase()}</span>
        <span class="badge badge-tag">MÃ: ${config.touchpointIds.join(' · ')}</span>
      </div>
      <h1 style="font-size: 28px; font-weight: 800; color: var(--text-primary); letter-spacing: -0.02em;">
        ${config.title}
      </h1>
      <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-2);">
        ${config.summary}
      </p>
    </div>

    <!-- Master Sub-Touchpoints Renderer -->
    ${touchpoints.map((tp, idx) => `
      <section class="touchpoint-section" id="tp-${tp.id}" style="margin-bottom: var(--space-8); padding-top: var(--space-2);">
        <div style="display:flex; align-items:center; justify-content:space-between; border-bottom: 2px solid var(--border-subtle); padding-bottom: var(--space-3); margin-bottom: var(--space-4);">
          <h2 style="font-size: 20px; font-weight: 700; color: var(--text-primary); display:flex; align-items:center; gap:var(--space-2);">
            <span style="color:var(--color-primary-600);">[${tp.id}]</span> ${tp.name}
          </h2>
          <span class="badge ${getOwnerBadge(tp.owner)}">${tp.owner || 'System / Mentor'}</span>
        </div>

        <!-- Purpose & Trigger Summary Banner -->
        <div class="callout callout-tip" style="margin-bottom: var(--space-4);">
          <div class="callout-title">🎯 Mục Đích & Bối Cảnh Kích Hoạt</div>
          <div class="callout-content">
            <p><strong>Mục đích:</strong> ${tp.purpose}</p>
            <p style="margin-top:4px;"><strong>Điều kiện kích hoạt (Trigger):</strong> ${tp.trigger || 'Theo lịch trình hệ thống'}</p>
            <p style="margin-top:4px;"><strong>Thời gian chuẩn (SOP Time):</strong> <code>${tp.sopTime || '≤ 15 phút'}</code></p>
          </div>
        </div>

        <!-- Toolbar: Expand / Collapse All -->
        <div class="playbook-accordion-controls">
          <span style="font-size: 12.5px; font-weight: 600; color: var(--text-secondary);">
            📑 Phân cấp nội dung chi tiết
          </span>
          <button type="button" class="btn-accordion-toggle-all" data-tp-id="${tp.id}">
            <span>↕️</span> <span class="toggle-text">Thu gọn tất cả</span>
          </button>
        </div>

        <!-- Accordion Container -->
        <div class="accordion-group" data-accordion-group="${tp.id}">

          <!-- 1. CORE MINDSET & PHILOSOPHY (Open by default) -->
          ${tp.mindset ? `
            <div class="accordion-card open">
              <button type="button" class="accordion-header">
                <div class="accordion-title-wrap">
                  <span class="accordion-icon">🎯</span>
                  <span class="accordion-title">Triết lý & Tư duy cốt lõi (Mindset)</span>
                </div>
                <div class="accordion-meta">
                  <span class="accordion-badge">${tp.mindset.priorities ? tp.mindset.priorities.length + ' Trụ cột' : 'Core'}</span>
                  <span class="accordion-chevron">▼</span>
                </div>
              </button>
              <div class="accordion-body">
                <blockquote style="font-size: 15px; font-weight: 700; color: var(--color-slate-900); margin: 0 0 var(--space-2) 0; border-left: 3px solid var(--color-teal-500); padding-left: var(--space-3);">
                  "${tp.mindset.quote}"
                </blockquote>
                <p style="font-size: 13.5px; color: var(--color-slate-600); margin-bottom: var(--space-3); line-height: 1.5;">
                  ${tp.mindset.definition}
                </p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--space-3);">
                  ${tp.mindset.priorities.map(p => `
                    <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-3);">
                      <div style="font-weight: 700; font-size: 13px; color: var(--color-slate-800); margin-bottom: 2px;">
                        ${p.level} ${p.goal}
                      </div>
                      <div style="font-size: 12px; color: var(--color-slate-600); line-height: 1.4;">${p.reason}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          ` : ''}

          <!-- 2. STAKEHOLDER JTBD MAPPING (Collapsed by default) -->
          ${tp.stakeholderJTBD ? `
            <div class="accordion-card">
              <button type="button" class="accordion-header">
                <div class="accordion-title-wrap">
                  <span class="accordion-icon">👥</span>
                  <span class="accordion-title">Stakeholder Analysis & JTBD Mapping</span>
                </div>
                <div class="accordion-meta">
                  <span class="accordion-badge">${tp.stakeholderJTBD.length} Stakeholders</span>
                  <span class="accordion-chevron">▼</span>
                </div>
              </button>
              <div class="accordion-body">
                <div style="overflow-x:auto;">
                  <table class="sop-table">
                    <thead>
                      <tr>
                        <th style="width: 150px;">Stakeholder</th>
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
              </div>
            </div>
          ` : ''}

          <!-- 3. SESSION AGENDA (Open by default) -->
          ${tp.agendaFlow ? `
            <div class="accordion-card open">
              <button type="button" class="accordion-header">
                <div class="accordion-title-wrap">
                  <span class="accordion-icon">⏱️</span>
                  <span class="accordion-title">Session Agenda Flow</span>
                </div>
                <div class="accordion-meta">
                  <span class="accordion-badge">${tp.agendaFlow.length} Chặng</span>
                  <span class="accordion-chevron">▼</span>
                </div>
              </button>
              <div class="accordion-body">
                <div style="overflow-x:auto;">
                  <table class="sop-table">
                    <thead>
                      <tr>
                        <th style="width: 130px;">Time</th>
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
              </div>
            </div>
          ` : ''}

          <!-- 4. MENTOR FACILITATION GUIDES (Open by default) -->
          ${tp.mentorGuides ? `
            <div class="accordion-card open">
              <button type="button" class="accordion-header">
                <div class="accordion-title-wrap">
                  <span class="accordion-icon">🧠</span>
                  <span class="accordion-title">Mentor Facilitation Guides (Question Bank & Observation)</span>
                </div>
                <div class="accordion-meta">
                  <span class="badge badge-mentor" style="font-size: 11px;">${tp.mentorGuides.rule}</span>
                  <span class="accordion-chevron">▼</span>
                </div>
              </button>
              <div class="accordion-body">
                <div style="display: flex; flex-direction: column; gap: var(--space-4);">
                  <!-- Question Bank -->
                  <div>
                    <div style="font-weight: 700; font-size: 13.5px; color: var(--color-slate-800); margin-bottom: var(--space-2); display:flex; align-items:center; gap:6px;">
                      <span>💬 Question Bank (Bộ câu hỏi gợi mở)</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: var(--space-2);">
                      ${tp.mentorGuides.questionBank.map(q => `
                        <div style="background: var(--color-slate-50); border-left: 3px solid var(--color-blue-500); padding: var(--space-2) var(--space-3); border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
                          <div style="font-size: 13px; font-weight: 600; color: var(--color-slate-800);">#${q.no}. "${q.q}"</div>
                          <div style="font-size: 11.5px; color: var(--color-slate-500); margin-top: 2px;">👉 Mục đích: ${q.purpose}</div>
                        </div>
                      `).join('')}
                    </div>
                  </div>

                  <!-- Observation Guide -->
                  <div>
                    <div style="font-weight: 700; font-size: 13.5px; color: var(--color-slate-800); margin-bottom: var(--space-2);">
                      👁️ Observation Guide (Tiêu chí quan sát)
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-2);">
                      ${tp.mentorGuides.observationGuide.map(ob => `
                        <div style="background: var(--color-slate-50); border: 1px solid var(--color-slate-200); border-radius: var(--radius-md); padding: var(--space-2) var(--space-3);">
                          <div style="font-size: 12.5px; font-weight: 700; color: var(--color-slate-800);">${ob.dim}</div>
                          <div style="font-size: 12px; color: var(--color-slate-600); margin-top: 2px; line-height: 1.4;">${ob.cues}</div>
                        </div>
                      `).join('')}
                    </div>
                  </div>

                  <!-- Exit Checklist -->
                  <div style="background: rgba(245, 158, 11, 0.06); border: 1px dashed var(--color-amber-500); border-radius: var(--radius-md); padding: var(--space-3);">
                    <div style="font-weight: 700; font-size: 13px; color: #b45309; margin-bottom: var(--space-2);">
                      ☑️ Exit Checklist (Điều kiện hoàn thành buổi gặp)
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 6px;">
                      ${tp.mentorGuides.exitChecklist.map(ex => `
                        <div style="font-size: 12px; color: var(--color-slate-700); display:flex; align-items:center; gap:6px;">
                          <span style="color:var(--color-amber-600);">✔</span> ${ex}
                        </div>
                      `).join('')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ` : ''}

          <!-- 5. FAMILY NOTES TEMPLATE & CASE (Collapsed by default) -->
          ${tp.familyNotesTemplate ? `
            <div class="accordion-card">
              <button type="button" class="accordion-header">
                <div class="accordion-title-wrap">
                  <span class="accordion-icon">📝</span>
                  <span class="accordion-title">Family Notes Template & Case Study</span>
                </div>
                <div class="accordion-meta">
                  <span class="accordion-badge">${tp.familyNotesTemplate.version || 'Template'}</span>
                  <span class="accordion-chevron">▼</span>
                </div>
              </button>
              <div class="accordion-body">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-3);">
                  <div style="background: #ffffff; border: 1px solid var(--color-slate-200); border-radius: var(--radius-md); padding: var(--space-3);">
                    <div style="font-size: 13px; font-weight: 700; color: var(--color-slate-800); margin-bottom: var(--space-2);">Cấu trúc Template:</div>
                    <ul style="padding-left: var(--space-4); margin: 0; font-size: 12px; color: var(--color-slate-600); line-height: 1.6;">
                      ${tp.familyNotesTemplate.structure.map(st => `<li>${st}</li>`).join('')}
                    </ul>
                  </div>
                  <div style="background: #f8fafc; border: 1px solid var(--color-blue-200); border-radius: var(--radius-md); padding: var(--space-3);">
                    <div style="font-size: 13px; font-weight: 700; color: var(--color-blue-700); margin-bottom: var(--space-2);">💡 Ví dụ Case Study thực tế:</div>
                    <div style="font-size: 12px; color: var(--color-slate-700); line-height: 1.5; display:flex; flex-direction:column; gap:3px;">
                      <div><strong>🎯 Goal:</strong> ${tp.familyNotesTemplate.exampleCase.goal}</div>
                      <div><strong>💡 3 Insights:</strong> ${tp.familyNotesTemplate.exampleCase.insights.join(' | ')}</div>
                      <div><strong>⚠️ Mentor Note:</strong> ${tp.familyNotesTemplate.exampleCase.mentorNote}</div>
                      <div><strong>📅 Next Action:</strong> ${tp.familyNotesTemplate.exampleCase.nextActions}</div>
                      <div><strong>📝 Evidence:</strong> <em>${tp.familyNotesTemplate.exampleCase.evidence}</em></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ` : ''}

          <!-- 6. SOP STEPS, DO'S & DON'TS, TEMPLATES (Collapsed by default) -->
          ${tp.sopSteps || tp.doGuidelines || tp.template ? `
            <div class="accordion-card">
              <button type="button" class="accordion-header">
                <div class="accordion-title-wrap">
                  <span class="accordion-icon">📋</span>
                  <span class="accordion-title">Quy trình tác nghiệp SOP & Mẫu tin nhắn</span>
                </div>
                <div class="accordion-meta">
                  <span class="accordion-badge">SOP & Do/Don't</span>
                  <span class="accordion-chevron">▼</span>
                </div>
              </button>
              <div class="accordion-body">
                <!-- SOP Steps -->
                ${tp.sopSteps ? `
                  <h4 style="font-size: 13.5px; font-weight: 700; margin: 0 0 var(--space-2);">📋 Các bước thực hiện (SOP Steps)</h4>
                  <div style="overflow-x:auto; margin-bottom: var(--space-4);">
                    <table class="sop-table">
                      <thead>
                        <tr>
                          <th style="width: 80px;">Step</th>
                          <th style="width: 200px;">Operation</th>
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
                ` : ''}

                <!-- Do & Don't -->
                ${(tp.doGuidelines || tp.dontGuidelines) ? `
                  <h4 style="font-size: 13.5px; font-weight: 700; margin: 0 0 var(--space-2);">⚖️ Do's & Don'ts</h4>
                  <div class="do-dont-grid" style="margin-bottom: var(--space-4);">
                    <div class="do-box">
                      <div class="do-title">✅ DO'S</div>
                      <ul style="padding-left: var(--space-4); margin: 0; font-size: 12px;">
                        ${tp.doGuidelines ? tp.doGuidelines.map(d => `<li style="margin-bottom:4px;">${d}</li>`).join('') : '<li>Tuân thủ nguyên tắc sư phạm</li>'}
                      </ul>
                    </div>
                    <div class="dont-box">
                      <div class="dont-title">🚫 DON'TS</div>
                      <ul style="padding-left: var(--space-4); margin: 0; font-size: 12px;">
                        ${tp.dontGuidelines ? tp.dontGuidelines.map(d => `<li style="margin-bottom:4px;">${d}</li>`).join('') : '<li>Không gửi tin nhắn máy móc</li>'}
                      </ul>
                    </div>
                  </div>
                ` : ''}

                <!-- Communication Templates -->
                ${tp.template ? `
                  <h4 style="font-size: 13.5px; font-weight: 700; margin: 0 0 var(--space-2);">💬 Communication Templates</h4>
                  <div class="template-box">
                    <div class="template-header">
                      <span class="template-channel">📡 Channel: <strong>${tp.template.channel}</strong></span>
                      <button class="btn-copy" data-copy-id="copy-${tp.id}">
                        📋 Copy Template
                      </button>
                    </div>
                    <div class="template-content" id="content-${tp.id}">${escapeHtml(tp.template.content)}</div>
                  </div>
                ` : ''}
              </div>
            </div>
          ` : ''}

          <!-- 7. ASSESSMENT RUBRICS 3x5 (Collapsed by default) -->
          ${tp.rubric && tp.rubric.length > 0 ? `
            <div class="accordion-card">
              <button type="button" class="accordion-header">
                <div class="accordion-title-wrap">
                  <span class="accordion-icon">⭐</span>
                  <span class="accordion-title">Assessment Rubrics Matrix</span>
                </div>
                <div class="accordion-meta">
                  <span class="badge badge-system" style="font-size:11px;">Level 3 = DoD Standard ⭐</span>
                  <span class="accordion-chevron">▼</span>
                </div>
              </button>
              <div class="accordion-body">
                <div class="rubric-card" style="border:none; padding:0; box-shadow:none;">
                  <div class="rubric-table-wrapper">
                    <table class="rubric-table">
                      <thead>
                        <tr>
                          <th class="rubric-col-crit">Tiêu chí (Criteria)</th>
                          <th class="rubric-col-l1">L1 (Kém)</th>
                          <th class="rubric-col-l2">L2 (Cơ bản)</th>
                          <th class="rubric-col-l3-head">L3 (DoD ⭐ ĐẠT CHUẨN)</th>
                          <th class="rubric-col-l4">L4 (Tốt / Nâng cao)</th>
                          <th class="rubric-col-l5">L5 (Xuất sắc)</th>
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
              </div>
            </div>
          ` : ''}

        </div>
      </section>
    `).join('')}
  `;

  // Attach Accordion Toggle Handlers
  container.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.accordion-card');
      if (card) {
        card.classList.toggle('open');
      }
    });
  });

  // Attach Toggle All Handlers
  container.querySelectorAll('.btn-accordion-toggle-all').forEach(btn => {
    btn.addEventListener('click', () => {
      const tpId = btn.getAttribute('data-tp-id');
      const group = container.querySelector(`[data-accordion-group="${tpId}"]`);
      if (!group) return;

      const cards = group.querySelectorAll('.accordion-card');
      const hasClosed = Array.from(cards).some(card => !card.classList.contains('open'));

      if (hasClosed) {
        // Expand all
        cards.forEach(c => c.classList.add('open'));
        btn.querySelector('.toggle-text').innerText = 'Thu gọn tất cả';
      } else {
        // Collapse all
        cards.forEach(c => c.classList.remove('open'));
        btn.querySelector('.toggle-text').innerText = 'Mở tất cả';
      }
    });
  });

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

import { SITEMAP_CONFIG } from '../data.js';

function getAarrrBadgeClass(stage) {
  switch (stage) {
    case 'Acquisition': return 'badge-hybrid';
    case 'Activation': return 'badge-system';
    case 'Retention': return 'badge-mentor';
    case 'Referral': return 'badge-milestone';
    case 'Revenue': return 'badge-marlins';
    default: return 'badge-tag';
  }
}

export function renderJourneyMap(onNavigate) {
  const stages = SITEMAP_CONFIG.journeyStages;
  let activeStageIndex = 4; // Default highlight Stage 5 (Core Learning)

  const container = document.createElement('div');
  container.className = 'journey-page-wrapper';

  function updateView() {
    const currentStage = stages[activeStageIndex];

    container.innerHTML = `
      <div class="philosophy-banner">
        <div class="philosophy-quote">"Một hành trình liền mạch, lấy người học làm trung tâm."</div>
        <div class="philosophy-desc">
          Bản đồ trải nghiệm 7 giai đoạn của phụ huynh từ lúc cân nhắc đến khi hoàn thành 12 buổi và tiếp tục đồng hành. 
          Nhấp vào từng giai đoạn để xem nhu cầu của phụ huynh, trải nghiệm mong muốn và các Playbooks tác nghiệp tương ứng.
        </div>
      </div>

      <div class="journey-pipeline-container">
        <!-- Interactive Stepper -->
        <div class="journey-stepper">
          ${stages.map((stg, idx) => `
            <div class="journey-step-node ${idx === activeStageIndex ? 'active' : ''}" data-index="${idx}">
              <div class="journey-step-num">Stage ${stg.step}</div>
              <div class="journey-step-name">${stg.name}</div>
              <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">${stg.timeline}</div>
            </div>
            ${idx < stages.length - 1 ? `<div class="journey-arrow">→</div>` : ''}
          `).join('')}
        </div>

        <!-- Stage Inspector Panel -->
        <div class="stage-inspector-panel">
          <div class="stage-inspector-header">
            <div class="stage-inspector-title">
              <span style="color:var(--color-accent-600); margin-right:8px;">[STAGE ${currentStage.step}]</span>
              ${currentStage.name.toUpperCase()} · (${currentStage.timeline})
            </div>
            <div style="display:flex; gap:6px; align-items:center;">
              <span class="badge ${getAarrrBadgeClass(currentStage.aarrrStage)}">⚡ ${currentStage.aarrr || currentStage.aarrrStage}</span>
              <span class="badge badge-system">Active Inspector</span>
            </div>
          </div>

          <div class="inspector-grid">
            <div>
              <div class="inspector-block-title">🎯 Nhu cầu Phụ huynh (Parent Needs / JTBD)</div>
              <div class="inspector-block-content" style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:var(--space-4);">
                ${currentStage.needs.map(n => `<span class="badge badge-tag" style="font-size:12px;">${n}</span>`).join('')}
              </div>

              <div class="inspector-block-title">✨ Trải nghiệm kỳ vọng (Desired Experience)</div>
              <div class="inspector-block-content" style="font-size:14.5px; color:var(--text-primary); line-height:1.6;">
                "${currentStage.desiredExperience}"
              </div>
            </div>

            <div style="border-left: 1px solid var(--border-subtle); padding-left: var(--space-6);">
              <div class="inspector-block-title">📚 Playbooks tác nghiệp chủ đạo (Key Playbooks)</div>
              <div style="display:flex; flex-direction:column; gap:var(--space-2); margin-top:var(--space-2);">
                ${currentStage.keyPlaybooks.map(pb => `
                  <a href="#${pb.slug}" class="feature-card" style="padding:var(--space-3) var(--space-4); flex-direction:row; align-items:center; justify-content:space-between; text-decoration:none; margin:0;">
                    <div>
                      <span class="badge badge-mentor" style="margin-right:6px; font-size:10px;">${pb.code}</span>
                      <strong style="color:var(--text-primary); font-size:13.5px;">${pb.title}</strong>
                    </div>
                    <span style="color:var(--color-primary-600); font-size:14px; font-weight:700;">↗</span>
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Summary Matrix -->
      <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-10) 0 var(--space-4);">
        Parent Journey Touchpoint Matrix
      </h2>
      <div style="overflow-x:auto;">
        <table class="sop-table">
          <thead>
            <tr>
              <th>Journey Stage</th>
              <th>Timeline</th>
              <th style="min-width:140px;">AARRR Funnel</th>
              <th>Desired Experience</th>
              <th>Key Playbooks</th>
            </tr>
          </thead>
          <tbody>
            ${stages.map(s => `
              <tr>
                <td><strong>${s.step}. ${s.name}</strong></td>
                <td><code>${s.timeline}</code></td>
                <td>
                  <span class="badge ${getAarrrBadgeClass(s.aarrrStage)}" style="font-size:11px; white-space:nowrap;">
                    ${s.aarrr || s.aarrrStage}
                  </span>
                </td>
                <td>${s.desiredExperience}</td>
                <td>
                  ${s.keyPlaybooks.map(k => `<a href="#${k.slug}" style="color:var(--color-primary-600); font-weight:500; margin-right:8px;">${k.title} (${k.code})</a>`).join('<br/>')}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    // Bind step node clicks
    container.querySelectorAll('.journey-step-node').forEach(node => {
      node.addEventListener('click', () => {
        activeStageIndex = parseInt(node.getAttribute('data-index'), 10);
        updateView();
      });
    });

    // Bind playbook links
    container.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          onNavigate(href.replace('#', ''));
        }
      });
    });
  }

  updateView();
  return container;
}

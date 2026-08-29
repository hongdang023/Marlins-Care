import { SITEMAP_CONFIG } from '../data.js';

export function renderJourneyMap(onNavigate) {
  const phases = SITEMAP_CONFIG.journeyPhases;
  let activePhaseIndex = 0; // Default highlight Phase 1
  let currentView = 'cards'; // 'cards' (Interactive Inspector) | 'matrix' (Full Table Matrix)

  const container = document.createElement('div');
  container.className = 'journey-page-wrapper';

  function updateView() {
    const currentPhase = phases[activePhaseIndex];

    container.innerHTML = `
      <!-- Header with Section Title & Clean Icon-Only View Switcher -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-4); flex-wrap:wrap; gap:var(--space-3);">
        <div>
          <h1 style="font-size: 26px; font-weight: 800; color: var(--text-primary); margin:0 0 4px; letter-spacing: -0.02em;">
            Journey Map
          </h1>
          <p style="font-size: 14px; color: var(--text-secondary); margin:0;">
            Bản đồ trải nghiệm 3 Pha Vòng Đời phụ huynh và học sinh Nemo12.
          </p>
        </div>

        <!-- Standalone Minimalist Icon Switcher -->
        <div style="display:inline-flex; background:var(--bg-surface-subtle); border:1px solid var(--border-default); border-radius:10px; padding:3px; gap:3px;">
          <button id="view-mode-cards-btn" class="view-mode-btn" title="Chế độ xem Thẻ Tác Nghiệp" aria-label="Thẻ Tác Nghiệp" style="
            width: 36px;
            height: 34px;
            padding: 0;
            border-radius: 7px;
            border: none;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: all 0.15s ease;
            background: ${currentView === 'cards' ? 'var(--color-primary-600)' : 'transparent'};
            color: ${currentView === 'cards' ? '#ffffff' : 'var(--text-secondary)'};
          ">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="9" rx="1"></rect>
              <rect x="14" y="3" width="7" height="5" rx="1"></rect>
              <rect x="14" y="12" width="7" height="9" rx="1"></rect>
              <rect x="3" y="16" width="7" height="5" rx="1"></rect>
            </svg>
          </button>
          <button id="view-mode-matrix-btn" class="view-mode-btn" title="Chế độ xem Bảng Ma Trận" aria-label="Bảng Ma Trận" style="
            width: 36px;
            height: 34px;
            padding: 0;
            border-radius: 7px;
            border: none;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: all 0.15s ease;
            background: ${currentView === 'matrix' ? 'var(--color-primary-600)' : 'transparent'};
            color: ${currentView === 'matrix' ? '#ffffff' : 'var(--text-secondary)'};
          ">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="3" y1="15" x2="21" y2="15"></line>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
          </button>
        </div>
      </div>

      <div class="philosophy-banner" style="margin-bottom: var(--space-6);">
        <div class="philosophy-quote">"Một hành trình liền mạch, thấu cảm và lấy người học làm trung tâm."</div>
        <div class="philosophy-desc" style="margin-top:4px;">
          Tập trung vào trải nghiệm thực chất của phụ huynh trong từng giai đoạn đồng hành cùng Nemo12.
        </div>
      </div>

      ${currentView === 'cards' ? renderCardsView(currentPhase, phases, activePhaseIndex) : renderMatrixView(phases)}
    `;

    // Bind View Mode Switcher
    const cardsBtn = container.querySelector('#view-mode-cards-btn');
    const matrixBtn = container.querySelector('#view-mode-matrix-btn');
    if (cardsBtn && matrixBtn) {
      cardsBtn.addEventListener('click', () => {
        if (currentView !== 'cards') {
          currentView = 'cards';
          updateView();
        }
      });
      matrixBtn.addEventListener('click', () => {
        if (currentView !== 'matrix') {
          currentView = 'matrix';
          updateView();
        }
      });
    }

    // Bind Phase Card switch (in cards view)
    container.querySelectorAll('.phase-switch-card').forEach(card => {
      card.addEventListener('click', () => {
        activePhaseIndex = parseInt(card.getAttribute('data-index'), 10);
        updateView();
      });
    });

    // Bind internal playbook links
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

function renderCardsView(currentPhase, phases, activePhaseIndex) {
  return `
    <div class="journey-pipeline-container">
      <!-- 3-Phase Segmented Navigation Bar -->
      <div class="phase-switcher-grid" style="display:grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-4); margin-bottom: var(--space-6);">
        ${phases.map((ph, idx) => `
          <button class="phase-switch-card ${idx === activePhaseIndex ? 'active' : ''}" data-index="${idx}" style="
            text-align: left;
            padding: var(--space-4) var(--space-5);
            background: ${idx === activePhaseIndex ? 'var(--bg-card)' : 'rgba(255,255,255,0.6)'};
            border: 2px solid ${idx === activePhaseIndex ? 'var(--color-primary-600)' : 'var(--border-subtle)'};
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: ${idx === activePhaseIndex ? '0 4px 12px rgba(15, 118, 110, 0.12)' : 'none'};
          ">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <span style="font-size:11px; font-weight:700; color:${idx === activePhaseIndex ? 'var(--color-primary-700)' : 'var(--text-muted)'}; text-transform:uppercase; letter-spacing:0.5px;">
                PHA ${ph.step}
              </span>
              <span class="badge ${idx === activePhaseIndex ? 'badge-mentor' : 'badge-tag'}" style="font-size:10px;">
                ${ph.badgeText}
              </span>
            </div>
            <div style="font-size:16px; font-weight:700; color:var(--text-primary); margin-bottom:2px;">
              ${ph.name}
            </div>
            <div style="font-size:12px; color:var(--text-muted);">
              ${ph.timeline}
            </div>
          </button>
        `).join('')}
      </div>

      <!-- Action Inspector Panel -->
      <div class="stage-inspector-panel" style="background:var(--bg-card); border-radius:16px; border:1px solid var(--border-subtle); padding:var(--space-6);">
        
        <!-- Phase Header -->
        <div class="stage-inspector-header" style="border-bottom:1px solid var(--border-subtle); padding-bottom:var(--space-4); margin-bottom:var(--space-5);">
          <div>
            <div style="font-size:12px; font-weight:700; color:var(--color-primary-600); text-transform:uppercase; margin-bottom:2px;">
              PHA ${currentPhase.step} · ${currentPhase.enName.toUpperCase()}
            </div>
            <div style="font-size:22px; font-weight:800; color:var(--text-primary);">
              ${currentPhase.name} <span style="font-size:15px; font-weight:500; color:var(--text-muted); margin-left:8px;">(${currentPhase.timeline})</span>
            </div>
          </div>
          <div style="display:flex; gap:8px; align-items:center;">
            <span class="badge badge-system" style="padding:6px 12px; font-size:12px;">Pha hiện hành</span>
          </div>
        </div>

        <!-- Section 1: JTBD Insight Summary -->
        <div style="background:var(--bg-app); border-radius:12px; padding:var(--space-4) var(--space-5); margin-bottom:var(--space-6); border-left:4px solid var(--color-primary-600);">
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:var(--space-6);">
            <div>
              <div style="font-size:12px; font-weight:700; color:var(--text-muted); margin-bottom:6px; text-transform:uppercase;">
                🎯 Nhu cầu Phụ huynh (Parent JTBD)
              </div>
              <div style="display:flex; flex-wrap:wrap; gap:6px;">
                ${currentPhase.needs.map(n => `<span class="badge badge-tag" style="font-size:12px; background:rgba(255,255,255,0.8);">${n}</span>`).join('')}
              </div>
            </div>
            <div>
              <div style="font-size:12px; font-weight:700; color:var(--text-muted); margin-bottom:6px; text-transform:uppercase;">
                ✨ Trải nghiệm kỳ vọng
              </div>
              <div style="font-size:13.5px; color:var(--text-primary); line-height:1.5; font-style:italic;">
                "${currentPhase.desiredExperience}"
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2: Action Grid Cards -->
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-4);">
            <h3 style="font-size:16px; font-weight:700; color:var(--text-primary); margin:0;">
              🛠️ Hộp Công Cụ Tác Nghiệp (Playbooks Tương Ứng)
            </h3>
            <span style="font-size:12px; color:var(--text-muted);">
              ${currentPhase.actionPlaybooks.length} playbooks trong pha này
            </span>
          </div>

          <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap:var(--space-4);">
            ${currentPhase.actionPlaybooks.map(pb => `
              <div class="action-card" style="
                background: var(--bg-card);
                border: 1px solid ${pb.highlight ? 'var(--color-primary-300)' : 'var(--border-subtle)'};
                border-radius: 12px;
                padding: var(--space-4) var(--space-5);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                position: relative;
                transition: transform 0.15s ease, box-shadow 0.15s ease;
                box-shadow: ${pb.highlight ? '0 2px 8px rgba(15,118,110,0.06)' : 'none'};
              ">
                <div>
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:var(--space-2);">
                    <div>
                      <strong style="font-size:15px; color:var(--text-primary);">${pb.title}</strong>
                    </div>
                    <span class="badge badge-mentor" style="font-size:10px; font-weight:700;">${pb.code}</span>
                  </div>

                  <div style="margin-top:var(--space-3); font-size:12.5px; color:var(--text-muted); line-height:1.5;">
                    <div style="margin-bottom:4px;">
                      <strong style="color:var(--text-primary);">Vai trò:</strong> ${pb.role}
                    </div>
                    <div>
                      <strong style="color:var(--text-primary);">Khi nào kích hoạt:</strong> ${pb.trigger}
                    </div>
                  </div>
                </div>

                <div style="margin-top:var(--space-4); pt:var(--space-3); border-top:1px dashed var(--border-subtle); display:flex; justify-content:flex-end;">
                  <a href="#${pb.slug}" class="button" style="
                    padding: 6px 14px;
                    font-size: 12px;
                    font-weight: 600;
                    text-decoration: none;
                    background: ${pb.highlight ? 'var(--color-primary-600)' : 'var(--bg-app)'};
                    color: ${pb.highlight ? '#ffffff' : 'var(--text-primary)'};
                    border-radius: 8px;
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                  ">
                    Mở Playbook ➔
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  `;
}

function renderMatrixView(phases) {
  return `
    <div>
      <div style="margin-bottom: var(--space-4);">
        <h2 style="font-size: 20px; font-weight: 700; color: var(--text-primary); margin:0 0 4px;">
          Ma Trận 3 Pha Vòng Đời
        </h2>
        <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">
          Toàn cảnh đối chiếu 3 Pha Vòng Đời, Mục tiêu trải nghiệm của Phụ huynh và Hộp công cụ Playbooks tương ứng.
        </p>
      </div>

      <div style="overflow-x:auto; background:var(--bg-card); border-radius:12px; border:1px solid var(--border-subtle); box-shadow:0 1px 3px rgba(0,0,0,0.05);">
        <table class="sop-table" style="margin:0;">
          <thead>
            <tr>
              <th style="width:200px;">Pha Vòng Đời</th>
              <th>Mục Tiêu & Trải Nghiệm</th>
              <th style="width:320px;">Playbooks Tác Nghiệp</th>
            </tr>
          </thead>
          <tbody>
            ${phases.map(ph => `
              <tr>
                <td style="vertical-align:top;">
                  <div style="font-size:11px; font-weight:700; color:var(--color-primary-600); text-transform:uppercase;">
                    PHA ${ph.step}
                  </div>
                  <strong style="font-size:15px; color:var(--text-primary);">${ph.name}</strong>
                  <div style="margin-top:4px;">
                    <span class="badge badge-mentor" style="font-size:10px;">${ph.badgeText}</span>
                  </div>
                </td>
                <td style="vertical-align:top;">
                  <div style="font-size:13.5px; line-height:1.6; color:var(--text-primary);">
                    "${ph.desiredExperience}"
                  </div>
                </td>
                <td style="vertical-align:top;">
                  <div style="display:flex; flex-direction:column; gap:6px;">
                    ${ph.actionPlaybooks.map(k => `
                      <a href="#${k.slug}" style="
                        color:var(--color-primary-600);
                        font-weight:600;
                        text-decoration:none;
                        background:var(--bg-app);
                        padding:6px 10px;
                        border-radius:6px;
                        border:1px solid var(--border-subtle);
                        display:inline-flex;
                        align-items:center;
                        justify-content:space-between;
                        font-size:13px;
                      ">
                        <span>${k.title}</span>
                        <span style="font-size:10.5px; color:var(--text-muted);">${k.code}</span>
                      </a>
                    `).join('')}
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

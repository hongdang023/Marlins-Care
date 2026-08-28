import { KNOWLEDGE_HUB_DATA } from '../data.js';

export function renderOverview(slug, onNavigate) {
  const container = document.createElement('div');
  container.className = 'overview-page-wrapper';

  if (slug === '/overview/why-parent-care') {
    container.innerHTML = renderWhyParentCare();
  } else if (slug === '/overview/parent-jobs') {
    container.innerHTML = renderParentJobs();
  } else if (slug === '/overview/core-principles') {
    container.innerHTML = renderCorePrinciples();
  } else if (slug === '/overview/capability-map') {
    container.innerHTML = renderCapabilityMap();
  } else {
    container.innerHTML = renderWhyParentCare();
  }

  // Bind links
  container.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        onNavigate(href.replace('#', ''));
      }
    });
  });

  return container;
}

function renderWhyParentCare() {
  return `
    <div style="margin-bottom: var(--space-6);">
      <span class="badge badge-system">OVERVIEW §1</span>
      <h1 style="font-size: 28px; font-weight: 800; color: var(--text-primary); margin-top: var(--space-2);">
        Why Parent Care? (Lý do tồn tại)
      </h1>
      <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-2);">
        Định vị lý do vì sao Nemo12 & Marlins Care xây dựng hệ thống chăm sóc phụ huynh chuyên sâu song hành cùng 12 buổi học của học sinh.
      </p>
    </div>

    <div class="philosophy-banner">
      <div class="philosophy-quote">"Automate the evidence. Humanize the meaning."</div>
      <div class="philosophy-desc">
        Hệ thống tự động hóa toàn bộ việc thu thập và chứng minh dữ liệu học tập khách quan. Con người (Mentors & Marlins Care) tập trung toàn lực vào việc truyền tải ý nghĩa, thấu cảm và kiến tạo mối quan hệ tin cậy.
      </div>
    </div>

    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-8) 0 var(--space-4);">
      1. Bối Cảnh Vận Hành: 12 Buổi Học + Marlins Day
    </h2>
    <div class="card-grid-2">
      <div class="feature-card">
        <div class="feature-card-header">
          <div class="feature-card-title">12 Buổi Học Học Sinh</div>
          <span class="badge badge-system">Nemo12 Core</span>
        </div>
        <div class="feature-card-desc">
          Học sinh trải nghiệm không gian học tập công nghệ, thuật toán và tư duy giải quyết vấn đề. Mọi nỗ lực, thử nghiệm và bước tiến đều được hệ thống ghi nhận trung thực.
        </div>
      </div>

      <div class="feature-card">
        <div class="feature-card-header">
          <div class="feature-card-title">Marlins Day Chiều Chủ Nhật</div>
          <span class="badge badge-marlins">Marlins Care</span>
        </div>
        <div class="feature-card-desc">
          Không gian dành riêng cho phụ huynh trao đổi trực tiếp cùng Anh Đắc. Giúp gia đình tháo gỡ ngộ nhận giáo dục và xây dựng tâm thế đồng hành lành mạnh cùng con.
        </div>
      </div>
    </div>

    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-8) 0 var(--space-4);">
      2. Bộ Rào Chắn Nguyên Tắc (Guardrails)
    </h2>
    ${KNOWLEDGE_HUB_DATA.guardrails.map(g => `
      <div class="callout callout-coral">
        <div class="callout-title">🛡️ [${g.id}] ${g.title}</div>
        <div class="callout-content">${g.content}</div>
      </div>
    `).join('')}
  `;
}

function renderParentJobs() {
  const { functional, emotional, social } = KNOWLEDGE_HUB_DATA.jtbd;
  return `
    <div style="margin-bottom: var(--space-6);">
      <span class="badge badge-mentor">OVERVIEW §2</span>
      <h1 style="font-size: 28px; font-weight: 800; color: var(--text-primary); margin-top: var(--space-2);">
        Parent Jobs To Be Done (JTBD Matrix)
      </h1>
      <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-2);">
        Ma trận 3 tầng nhu cầu cốt lõi của phụ huynh: Nhu cầu thực tế (Functional), Cảm xúc an tâm (Emotional) và Giá trị xã hội/gia đình (Social).
      </p>
    </div>

    <!-- Traceability to Nemo12 Product Specs -->
    <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.06), rgba(99, 102, 241, 0.04)); border: 1px solid rgba(37, 99, 235, 0.2); border-radius: var(--radius-lg); padding: var(--space-4) var(--space-5); margin-bottom: var(--space-6); display: flex; align-items: center; justify-content: space-between; gap: var(--space-4); flex-wrap: wrap;">
      <div style="display: flex; align-items: center; gap: var(--space-3);">
        <div style="font-size: 24px;">🔗</div>
        <div>
          <div style="font-size: 14px; font-weight: 700; color: var(--color-system);">Traceability to Platform Docs</div>
          <div style="font-size: 13px; color: var(--text-secondary); margin-top: 2px;">
            Đối chiếu JTBD-P1 → JTBD-P6, User Stories, UI Features & mã REQ-PAR / REQ-VIS chính thức trên Nemo12 Platform.
          </div>
        </div>
      </div>
      <a href="https://docs.nemo12.com/product/parent-jtbd" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 6px; font-size: 13px; padding: 6px 14px; text-decoration: none; border-color: rgba(37, 99, 235, 0.3); color: var(--color-system);">
        <span>Mở Nemo12 JTBD Docs</span>
        <span style="font-size: 11px;">↗</span>
      </a>
    </div>

    <!-- Functional Jobs -->
    <h2 style="font-size: 18px; font-weight: 700; color: var(--color-system); margin: var(--space-6) 0 var(--space-3); display:flex; align-items:center; gap:6px;">
      <span>🛠️ 1. Functional Jobs</span>
    </h2>
    <div class="card-grid-2">
      ${functional.map(j => `
        <div class="feature-card">
          <div class="feature-card-header">
            <span class="badge badge-system">${j.id}</span>
            <strong style="font-size:14.5px; color:var(--text-primary);">${j.title}</strong>
          </div>
          <div class="feature-card-desc">${j.desc}</div>
        </div>
      `).join('')}
    </div>

    <!-- Emotional Jobs -->
    <h2 style="font-size: 18px; font-weight: 700; color: var(--color-mentor); margin: var(--space-8) 0 var(--space-3); display:flex; align-items:center; gap:6px;">
      <span>💖 2. Emotional Jobs</span>
    </h2>
    <div class="card-grid-2">
      ${emotional.map(j => `
        <div class="feature-card">
          <div class="feature-card-header">
            <span class="badge badge-mentor">${j.id}</span>
            <strong style="font-size:14.5px; color:var(--text-primary);">${j.title}</strong>
          </div>
          <div class="feature-card-desc">${j.desc}</div>
        </div>
      `).join('')}
    </div>

    <!-- Social Jobs -->
    <h2 style="font-size: 18px; font-weight: 700; color: var(--color-marlins); margin: var(--space-8) 0 var(--space-3); display:flex; align-items:center; gap:6px;">
      <span>🌱 3. Social Jobs</span>
    </h2>
    <div class="card-grid-2">
      ${social.map(j => `
        <div class="feature-card">
          <div class="feature-card-header">
            <span class="badge badge-marlins">${j.id}</span>
            <strong style="font-size:14.5px; color:var(--text-primary);">${j.title}</strong>
          </div>
          <div class="feature-card-desc">${j.desc}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderCorePrinciples() {
  const rules = KNOWLEDGE_HUB_DATA.meta.rules;
  return `
    <div style="margin-bottom: var(--space-6);">
      <span class="badge badge-system">OVERVIEW §3</span>
      <h1 style="font-size: 28px; font-weight: 800; color: var(--text-primary); margin-top: var(--space-2);">
        Core Principles & Operating Philosophy
      </h1>
      <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-2);">
        7 Nguyên tắc kim chỉ nam định hình hành vi và chuẩn mực vận hành của toàn bộ Mentors, Operators và Marlins Care.
      </p>
    </div>

    <div class="philosophy-banner">
      <div class="philosophy-quote">"Do not make humans report what machines already know."</div>
      <div class="philosophy-desc">
        Hệ thống đảm nhiệm tính chính xác, tính nhất quán và quy mô. Con người đảm nhiệm bối cảnh, phán đoán và quan hệ chân thành.
      </div>
    </div>

    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-4);">
      7 Nguyên Tắc Vận Hành Bất Biến
    </h2>
    <div style="display:flex; flex-direction:column; gap:var(--space-4);">
      ${rules.map((rule, idx) => `
        <div class="feature-card" style="flex-direction:row; align-items:flex-start; gap:var(--space-4); padding:var(--space-4) var(--space-5);">
          <span class="badge badge-system" style="font-size:13px; font-weight:800; width:28px; height:28px; border-radius:50%; justify-content:center;">${idx + 1}</span>
          <div style="font-size:15px; font-weight:600; color:var(--text-primary); line-height:1.5;">
            ${rule}
          </div>
        </div>
      `).join('')}
    </div>

    <div class="callout callout-warning" style="margin-top: var(--space-8);">
      <div class="callout-title">📌 Nguyên tắc Kênh giao tiếp: "Zalo is a Channel, Not a Touchpoint"</div>
      <div class="callout-content">
        Zalo chỉ là phương tiện truyền dẫn. Không ép Mentor gửi tin nhắn định kỳ hàng tuần nếu không có quan sát sâu sắc mang lại giá trị thực sự cho gia đình.
      </div>
    </div>
  `;
}

function renderCapabilityMap() {
  const { stakeholders } = KNOWLEDGE_HUB_DATA;
  return `
    <div style="margin-bottom: var(--space-6);">
      <span class="badge badge-hybrid">OVERVIEW §4</span>
      <h1 style="font-size: 28px; font-weight: 800; color: var(--text-primary); margin-top: var(--space-2);">
        Capability Map: System vs Mentor vs Marlins Care
      </h1>
      <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-2);">
        Phân định ranh giới trách nhiệm rõ ràng: Máy móc phát hiện (Detect) ➔ Con người phán đoán (Judge) ➔ Marlins định hướng (Guide).
      </p>
    </div>

    <div class="card-grid-2">
      ${stakeholders.map(st => `
        <div class="feature-card">
          <div class="feature-card-header">
            <span class="badge ${getRoleBadge(st.id)}">${st.id.toUpperCase()}</span>
            <strong style="font-size:14.5px; color:var(--text-primary);">${st.name}</strong>
          </div>
          <div style="font-size:12px; font-weight:600; color:var(--color-primary-600); margin-bottom:4px;">
            ${st.role}
          </div>
          <div class="feature-card-desc">${st.desc}</div>
        </div>
      `).join('')}
    </div>

    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-8) 0 var(--space-4);">
      Bẫy Vận Hành & Failure Modes Cần Phòng Tránh
    </h2>
    <div class="do-dont-grid">
      <div class="dont-box">
        <div class="dont-title">⚠️ Bẫy Vận Hành 1: Gửi Tin Nhắn Máy Móc Rập Khuôn</div>
        <div>Mentor copy-paste nhận xét chung chung chỉ thay tên học sinh ➔ Làm xói mòn niềm tin quan hệ (Relational Trust).</div>
      </div>
      <div class="dont-box">
        <div class="dont-title">⚠️ Bẫy Vận Hành 2: Báo Động Tự Động Sai Ngữ Cảnh</div>
        <div>Hệ thống tự động nhắn tin phụ huynh khi thấy điểm bài tập giảm ➔ Gây hoang mang và áp lực tiêu cực lên học sinh.</div>
      </div>
    </div>
  `;
}

function getRoleBadge(id) {
  if (id === 'system') return 'badge-system';
  if (id === 'mentor') return 'badge-mentor';
  if (id === 'marlins') return 'badge-marlins';
  if (id === 'student') return 'badge-milestone';
  return 'badge-tag';
}

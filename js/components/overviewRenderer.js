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
    <!-- Page Header -->
    <div style="margin-bottom: var(--space-6);">
      <span class="badge badge-system">OVERVIEW §1</span>
      <h1 style="font-size: 28px; font-weight: 800; color: var(--text-primary); margin-top: var(--space-2);">
        Why Parent Care
      </h1>
      <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-2);">
        Cẩm nang chuẩn hóa trải nghiệm đồng hành phụ huynh toàn diện dành cho toàn bộ đội ngũ Mentors, Operators và Quản lý tại Nemo12.
      </p>
    </div>

    <!-- 1. Hub Mission -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      Hub Mission
    </h2>
    <div class="feature-card" style="padding: var(--space-5); margin-bottom: var(--space-6); background: var(--bg-surface-subtle); border-color: var(--border-default);">
      <div style="font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-2);">
        🎯 Trung tâm Tri thức Chuẩn hóa (Single Source of Truth)
      </div>
      <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6; margin: 0;">
        Marlins Care Knowledge Hub được xây dựng nhằm giúp Nemo12 thiết kế, chuẩn hóa và thực thi công tác đồng hành cùng phụ huynh một cách <strong>nhất quán, trung thực và tối ưu hóa tối đa giá trị con người</strong>. Website này loại bỏ hoàn toàn sự cảm tính và mơ hồ trong quy trình vận hành, giúp mọi thành viên hiểu rõ trách nhiệm của mình tại từng điểm chạm.
      </p>
    </div>

    <!-- 2. Core Philosophy (Placed right below Purpose/Mission) -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-8) 0 var(--space-3);">
      Core Philosophy
    </h2>
    <div class="philosophy-banner" style="margin-bottom: var(--space-6);">
      <div class="philosophy-quote">"Automate the evidence. Humanize the meaning."</div>
      <div class="philosophy-desc">
        Hệ thống đảm nhiệm dữ liệu chính xác, tính nhất quán và quy mô tự động. Con người (Mentors & Marlins Care) tập trung toàn lực vào việc thấu cảm bối cảnh, phán đoán chuyên môn và kiến tạo mối quan hệ tin cậy dài hạn.
      </div>
    </div>

    <!-- 3. Operational Questions -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-8) 0 var(--space-3);">
      Operational Questions
    </h2>
    <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: var(--space-4);">
      Website này được thiết kế để trả lời trực tiếp 6 câu hỏi vận hành cốt lõi của bạn:
    </p>
    <div class="card-grid-2" style="margin-bottom: var(--space-6);">
      <div class="feature-card">
        <div class="feature-card-header">
          <span class="badge badge-system">Q1</span>
          <strong style="font-size: 14px; color: var(--text-primary);">Nhu cầu thực sự của Phụ huynh?</strong>
        </div>
        <div class="feature-card-desc">Giải mã toàn diện 3 tầng JTBD: Nhu cầu thực tế (Functional), Cảm xúc an tâm (Emotional) và Giá trị xã hội (Social).</div>
      </div>

      <div class="feature-card">
        <div class="feature-card-header">
          <span class="badge badge-mentor">Q2</span>
          <strong style="font-size: 14px; color: var(--text-primary);">Máy làm gì & Người làm gì?</strong>
        </div>
        <div class="feature-card-desc">Phân định ranh giới năng lực rõ ràng: Máy móc phát hiện tín hiệu ➔ Mentor phán đoán bối cảnh ➔ Marlins hỗ trợ chuyên sâu.</div>
      </div>

      <div class="feature-card">
        <div class="feature-card-header">
          <span class="badge badge-marlins">Q3</span>
          <strong style="font-size: 14px; color: var(--text-primary);">Hành trình trải nghiệm ra sao?</strong>
        </div>
        <div class="feature-card-desc">Bản đồ tương tác trực quan 7 giai đoạn xuyên suốt từ lúc đăng ký đến kết thúc khóa học và kích hoạt đại sứ.</div>
      </div>

      <div class="feature-card">
        <div class="feature-card-header">
          <span class="badge badge-hybrid">Q4</span>
          <strong style="font-size: 14px; color: var(--text-primary);">Khi nào con người cần can thiệp?</strong>
        </div>
        <div class="feature-card-desc">Tiêu chí kích hoạt High-touch dựa trên Khoảnh khắc ý nghĩa (Meaningful Moments) và tín hiệu học tập bất thường.</div>
      </div>

      <div class="feature-card">
        <div class="feature-card-header">
          <span class="badge badge-risk">Q5</span>
          <strong style="font-size: 14px; color: var(--text-primary);">Thế nào là tương tác Đạt chuẩn (DoD)?</strong>
        </div>
        <div class="feature-card-desc">Bộ tiêu chí đánh giá Rubrics 3x5 định lượng rõ ràng Level 3 = Chuẩn tối thiểu cần đạt cho mỗi điểm chạm.</div>
      </div>

      <div class="feature-card">
        <div class="feature-card-header">
          <span class="badge badge-milestone">Q6</span>
          <strong style="font-size: 14px; color: var(--text-primary);">Kịch bản & Mẫu tin nhắn ở đâu?</strong>
        </div>
        <div class="feature-card-desc">9 Playbooks tác nghiệp thực chiến kèm Question Bank, Do/Don't và Mẫu tin nhắn sẵn sàng copy 1-click.</div>
      </div>
    </div>

    <!-- 4. Hub Architecture -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-8) 0 var(--space-3);">
      Hub Architecture
    </h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--space-3); margin-bottom: var(--space-8);">
      <div class="feature-card" style="padding: var(--space-4);">
        <div style="font-weight: 700; font-size: 14px; color: var(--color-system); margin-bottom: 4px;">1. Overview</div>
        <div style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5;">Nền tảng tư duy, Ma trận JTBD, 7 Nguyên tắc vận hành và Bản đồ phân định năng lực.</div>
      </div>

      <div class="feature-card" style="padding: var(--space-4);">
        <div style="font-weight: 700; font-size: 14px; color: var(--color-mentor); margin-bottom: 4px;">2. Parent Journey</div>
        <div style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5;">Pipeline 7 giai đoạn tương tác trực quan gắn với từng Touchpoint và công cụ điều phối.</div>
      </div>

      <div class="feature-card" style="padding: var(--space-4);">
        <div style="font-weight: 700; font-size: 14px; color: var(--color-marlins); margin-bottom: 4px;">3. Playbooks</div>
        <div style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5;">9 Quy trình tác nghiệp chuẩn hóa (SOP), Timeline chi tiết, Bộ câu hỏi và Tiêu chuẩn Rubrics.</div>
      </div>

      <div class="feature-card" style="padding: var(--space-4);">
        <div style="font-weight: 700; font-size: 14px; color: var(--color-hybrid); margin-bottom: 4px;">4. Decision Logs</div>
        <div style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5;">Ghi chép minh bạch các quyết định kiến trúc (DAR) và phân tích đánh đổi thực tế.</div>
      </div>
    </div>
  `;
}

function renderParentJobs() {
  const { functional, emotional, social } = KNOWLEDGE_HUB_DATA.jtbd;
  return `
    <div style="margin-bottom: var(--space-6);">
      <span class="badge badge-mentor">OVERVIEW §2</span>
      <h1 style="font-size: 28px; font-weight: 800; color: var(--text-primary); margin-top: var(--space-2);">
        Parent JTBD Matrix
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
      <span>🛠️ Functional Jobs</span>
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
      <span>💖 Emotional Jobs</span>
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
      <span>🌱 Social Jobs</span>
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
        Core Principles
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
      Operating Principles
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
      <div class="callout-title">📌 Kênh giao tiếp: "Zalo is a Channel, Not a Touchpoint"</div>
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
        Capability Map
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
      Failure Modes
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

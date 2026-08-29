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
    <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: var(--space-3);">
      Hub này được thiết kế để giải quyết 6 câu hỏi tác nghiệp cốt lõi cho mọi thành viên trong team:
    </p>
    <div style="overflow-x: auto; margin-bottom: var(--space-6);">
      <table class="sop-table">
        <thead>
          <tr>
            <th style="width: 70px;">Mã</th>
            <th style="width: 250px;">Câu hỏi cốt lõi của Bạn</th>
            <th>Giải pháp & Nội dung chuẩn hóa trong Hub</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="badge badge-system">Q1</span></td>
            <td><strong>Nhu cầu thực sự của Phụ huynh?</strong></td>
            <td>Giải mã toàn diện 3 tầng JTBD: Nhu cầu thực tế (Functional), Cảm xúc an tâm (Emotional) và Giá trị xã hội (Social).</td>
          </tr>
          <tr>
            <td><span class="badge badge-mentor">Q2</span></td>
            <td><strong>Máy làm gì & Người làm gì?</strong></td>
            <td>Phân định ranh giới năng lực rõ ràng: Máy móc phát hiện tín hiệu ➔ Mentor phán đoán bối cảnh ➔ Marlins hỗ trợ chuyên sâu.</td>
          </tr>
          <tr>
            <td><span class="badge badge-marlins">Q3</span></td>
            <td><strong>Hành trình trải nghiệm ra sao?</strong></td>
            <td>Bản đồ tương tác trực quan 7 giai đoạn xuyên suốt từ lúc đăng ký đến kết thúc khóa học và kích hoạt đại sứ.</td>
          </tr>
          <tr>
            <td><span class="badge badge-hybrid">Q4</span></td>
            <td><strong>Khi nào con người cần can thiệp?</strong></td>
            <td>Tiêu chí kích hoạt High-touch dựa trên Khoảnh khắc ý nghĩa (Meaningful Moments) và tín hiệu học tập bất thường.</td>
          </tr>
          <tr>
            <td><span class="badge badge-risk">Q5</span></td>
            <td><strong>Thế nào là tương tác Đạt chuẩn (DoD)?</strong></td>
            <td>Bộ tiêu chí đánh giá Rubrics 3x5 định lượng rõ ràng Level 3 = Chuẩn tối thiểu cần đạt cho mỗi điểm chạm.</td>
          </tr>
          <tr>
            <td><span class="badge badge-milestone">Q6</span></td>
            <td><strong>Kịch bản & Mẫu tin nhắn ở đâu?</strong></td>
            <td>9 Playbooks tác nghiệp thực chiến kèm Question Bank, Do/Don't và Mẫu tin nhắn sẵn sàng copy 1-click.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 4. Hub Architecture -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-8) 0 var(--space-3);">
      Hub Architecture
    </h2>
    <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: var(--space-3);">
      Bản đồ 4 phân hệ chính giúp bạn tra cứu nhanh theo đúng ngữ cảnh công việc:
    </p>
    <div style="overflow-x: auto; margin-bottom: var(--space-8);">
      <table class="sop-table">
        <thead>
          <tr>
            <th style="width: 180px;">Phân hệ</th>
            <th style="width: 220px;">Trọng tâm nội dung</th>
            <th>Cách khai thác khi làm việc</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong style="color: var(--color-system);">1. Overview</strong></td>
            <td>Định vị, Ma trận JTBD, 7 Nguyên tắc vận hành, Capability Map</td>
            <td>Đọc khi onboarding thành viên mới hoặc cần nắm vững ranh giới giữa Hệ thống và Con người.</td>
          </tr>
          <tr>
            <td><strong style="color: var(--color-mentor);">2. Parent Journey</strong></td>
            <td>Bản đồ tương tác 7 giai đoạn (AARRR Pipeline)</td>
            <td>Tra cứu bức tranh tổng thể dòng đời học sinh và vị trí các điểm chạm (Touchpoints).</td>
          </tr>
          <tr>
            <td><strong style="color: var(--color-marlins);">3. Playbooks</strong></td>
            <td>9 Quy trình tác nghiệp chuẩn hóa (SOP), Timeline, Kịch bản & Mẫu tin nhắn</td>
            <td>Mở hàng ngày trước mỗi buổi Live Class, Trial Class, Family Meeting để lấy checklist và script.</td>
          </tr>
          <tr>
            <td><strong style="color: var(--color-hybrid);">4. Decision Logs</strong></td>
            <td>5 Bản ghi quyết định kiến trúc vận hành (DAR)</td>
            <td>Tra cứu lý do và các phân tích đánh đổi (Trade-offs) đằng sau mỗi chính sách vận hành.</td>
          </tr>
        </tbody>
      </table>
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
    <div style="overflow-x: auto; margin-bottom: var(--space-6);">
      <table class="sop-table">
        <thead>
          <tr>
            <th style="width: 80px;">Mã</th>
            <th style="width: 240px;">Job Statement</th>
            <th>Mô tả chi tiết nhu cầu thực tế</th>
          </tr>
        </thead>
        <tbody>
          ${functional.map(j => `
            <tr>
              <td><span class="badge badge-system">${j.id}</span></td>
              <td><strong>${j.title}</strong></td>
              <td>${j.desc}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- Emotional Jobs -->
    <h2 style="font-size: 18px; font-weight: 700; color: var(--color-mentor); margin: var(--space-8) 0 var(--space-3); display:flex; align-items:center; gap:6px;">
      <span>💖 Emotional Jobs</span>
    </h2>
    <div style="overflow-x: auto; margin-bottom: var(--space-6);">
      <table class="sop-table">
        <thead>
          <tr>
            <th style="width: 80px;">Mã</th>
            <th style="width: 240px;">Job Statement</th>
            <th>Mô tả chi tiết cảm xúc an tâm</th>
          </tr>
        </thead>
        <tbody>
          ${emotional.map(j => `
            <tr>
              <td><span class="badge badge-mentor">${j.id}</span></td>
              <td><strong>${j.title}</strong></td>
              <td>${j.desc}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- Social Jobs -->
    <h2 style="font-size: 18px; font-weight: 700; color: var(--color-marlins); margin: var(--space-8) 0 var(--space-3); display:flex; align-items:center; gap:6px;">
      <span>🌱 Social Jobs</span>
    </h2>
    <div style="overflow-x: auto; margin-bottom: var(--space-6);">
      <table class="sop-table">
        <thead>
          <tr>
            <th style="width: 80px;">Mã</th>
            <th style="width: 240px;">Job Statement</th>
            <th>Mô tả chi tiết giá trị xã hội & gia đình</th>
          </tr>
        </thead>
        <tbody>
          ${social.map(j => `
            <tr>
              <td><span class="badge badge-marlins">${j.id}</span></td>
              <td><strong>${j.title}</strong></td>
              <td>${j.desc}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
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
        3 Trụ cột nguyên tắc kim chỉ nam định hình hành vi và chuẩn mực vận hành của toàn bộ Mentors, Operators và Marlins Care.
      </p>
    </div>

    <div class="philosophy-banner" style="margin-bottom: var(--space-6);">
      <div class="philosophy-quote">"Automate the evidence. Humanize the meaning."</div>
      <div class="philosophy-desc">
        Hệ thống đảm nhiệm tính chính xác, tính nhất quán và quy mô. Con người đảm nhiệm bối cảnh, phán đoán chuyên môn và kết nối chân thành.
      </div>
    </div>

    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-4);">
      Operating Principles
    </h2>

    <div style="display: flex; flex-direction: column; gap: var(--space-4); margin-bottom: var(--space-8);">
      <div style="border-left: 3px solid var(--color-system); padding: var(--space-2) var(--space-4); background: var(--bg-surface-subtle); border-radius: 0 var(--radius-md) var(--radius-md) 0;">
        <div style="font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">
          Machines detect; humans judge.
        </div>
        <div style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">
          Máy móc đảm nhiệm dữ liệu chính xác và phát hiện tín hiệu bất thường. Con người (Mentor & Marlins Care) thấu cảm bối cảnh, phán đoán chuyên môn và kết nối chân thành.
        </div>
      </div>

      <div style="border-left: 3px solid var(--color-mentor); padding: var(--space-2) var(--space-4); background: var(--bg-surface-subtle); border-radius: 0 var(--radius-md) var(--radius-md) 0;">
        <div style="font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">
          Optimize value, not frequency.
        </div>
        <div style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">
          Sự hiện diện của con người phải mang lại giá trị độc bản. Tập trung tạo chuyển biến trong từng khoảnh khắc ý nghĩa thay vì gửi tin nhắn định kỳ rập khuôn.
        </div>
      </div>

      <div style="border-left: 3px solid var(--color-marlins); padding: var(--space-2) var(--space-4); background: var(--bg-surface-subtle); border-radius: 0 var(--radius-md) var(--radius-md) 0;">
        <div style="font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">
          Job-driven & family-centric.
        </div>
        <div style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">
          Mọi điểm chạm đều phải trực tiếp giải quyết một bài toán cụ thể của phụ huynh (Parent Job) và thấu hiểu bối cảnh riêng của từng gia đình.
        </div>
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
        Phân định ranh giới trách nhiệm rõ ràng: Máy móc phát hiện (Detect) ➔ Mentor phán đoán và đồng hành (Judge & Relate).
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
  `;
}

function getRoleBadge(id) {
  if (id === 'system') return 'badge-system';
  if (id === 'mentor') return 'badge-mentor';
  if (id === 'marlins') return 'badge-marlins';
  if (id === 'student') return 'badge-milestone';
  return 'badge-tag';
}

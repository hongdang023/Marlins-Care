import { SITEMAP_CONFIG } from '../data.js';

export function renderRequirements(slug, onNavigate) {
  const container = document.createElement('div');
  container.className = 'requirements-page-wrapper';

  if (slug === '/requirements/playbooks-template' || slug === '/requirements/playbooks-framework') {
    container.innerHTML = renderPlaybooksTemplate();
  } else if (slug === '/requirements/content-standards') {
    container.innerHTML = renderContentStandards();
  } else if (slug === '/requirements/dar-template') {
    container.innerHTML = renderDARTemplate();
  } else if (slug === '/requirements/ui-design-system') {
    container.innerHTML = renderUIDesignSystem();
  } else if (slug === '/requirements/tech-stack') {
    container.innerHTML = renderTechStack();
  } else {
    container.innerHTML = renderPlaybooksTemplate();
  }

  // Bind internal navigation links
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

function renderPlaybooksTemplate() {
  return `
    <div style="margin-bottom: var(--space-6);">
      <span class="badge badge-system">REQUIREMENTS §A6</span>
      <h1 style="font-size: 28px; font-weight: 800; color: var(--text-primary); margin-top: var(--space-2);">
        Playbooks Standard Template & Boilerplate
      </h1>
      <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-2);">
        Bộ khung mẫu chuẩn mực biên soạn cẩm nang tác nghiệp thống nhất cho toàn bộ 8 Playbooks của Marlins Care.
      </p>
    </div>

    <!-- 1. 3 Tiers Architecture Matrix -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      3-Tier Playbooks Architecture
    </h2>
    <div style="overflow-x:auto; margin-bottom: var(--space-6);">
      <table class="sop-table">
        <thead>
          <tr>
            <th>Cấu Trúc Section (Pure English ≤ 3 words)</th>
            <th>Tier 1: High-Touch (P03, P04, P07)</th>
            <th>Tier 2: Routine (P05, P06)</th>
            <th>Tier 3: Outreach (P01, P02, P08)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Overview</strong> (Metadata Header)</td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
          </tr>
          <tr>
            <td><strong>Stakeholder Mapping</strong></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
            <td><span class="badge badge-tag">Tùy chọn</span></td>
          </tr>
          <tr>
            <td><strong>Session Agenda</strong></td>
            <td><span class="badge badge-marlins">Bắt buộc</span></td>
            <td><span class="badge badge-tag">Không áp dụng</span></td>
            <td><span class="badge badge-tag">Không áp dụng</span></td>
          </tr>
          <tr>
            <td><strong>SOP Steps</strong></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
          </tr>
          <tr>
            <td><strong>Do's & Don'ts</strong></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
          </tr>
          <tr>
            <td><strong>Assessment Rubrics</strong></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
          </tr>
          <tr>
            <td><strong>Decision Logs</strong></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
          </tr>
          <tr>
            <td><strong>FAQ</strong> (Đặt ở cuối cùng)</td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
            <td><span class="badge badge-system">Bắt buộc</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 2. Core Principles -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      Operational Rules
    </h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-4);">
        <strong style="color: var(--color-marlins); font-size: 14px;">1. Lean Section Titles</strong>
        <p style="font-size: 13px; color: var(--text-secondary); margin: 6px 0 0; line-height: 1.5;">
          Tên mọi Section (H1 - H4) bắt buộc là Pure English, Title Case, ≤ 3 từ, không chèn emoji ở đầu dòng.
        </p>
      </div>
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-4);">
        <strong style="color: var(--color-system); font-size: 14px;">2. Efficiency Rule (≤ 15m)</strong>
        <p style="font-size: 13px; color: var(--text-secondary); margin: 6px 0 0; line-height: 1.5;">
          Mỗi SOP thao tác trên phần mềm của Mentor chỉ được phép kéo dài tối đa 15 phút sau buổi học.
        </p>
      </div>
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-4);">
        <strong style="color: #10B981; font-size: 14px;">3. Definition of Done (L3 ⭐)</strong>
        <p style="font-size: 13px; color: var(--text-secondary); margin: 6px 0 0; line-height: 1.5;">
          Mọi kết quả tác nghiệp bắt buộc phải đạt tối thiểu chuẩn Level 3 trong thang đo Rubrics.
        </p>
      </div>
    </div>
  `;
}

function renderContentStandards() {
  return `
    <div style="margin-bottom: var(--space-6);">
      <span class="badge badge-system">REQUIREMENTS §A7</span>
      <h1 style="font-size: 28px; font-weight: 800; color: var(--text-primary); margin-top: var(--space-2);">
        Content & Language Standards
      </h1>
      <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-2);">
        Bộ tiêu chuẩn ngôn ngữ, văn phong và quy tắc đặt tên không lai tạp song ngữ trên toàn hệ thống.
      </p>
    </div>

    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      Language Matrix
    </h2>
    <div style="overflow-x:auto; margin-bottom: var(--space-6);">
      <table class="sop-table">
        <thead>
          <tr>
            <th>Hạng Mục</th>
            <th>Ngôn Ngữ Quy Định</th>
            <th>Ví Dụ Chuẩn (✅)</th>
            <th>Ví Dụ Cấm (❌)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Tiêu đề Section (H1 - H4)</strong></td>
            <td>Pure English (≤ 3 words)</td>
            <td><code>Overview</code>, <code>Session Agenda</code>, <code>FAQ</code></td>
            <td><code>Tổng quan (Overview)</code>, <code>📋 SOP Steps</code></td>
          </tr>
          <tr>
            <td><strong>Metadata Labels</strong></td>
            <td>Pure English</td>
            <td><code>Objective:</code>, <code>Trigger:</code>, <code>Owner:</code></td>
            <td><code>Mục đích (Objective):</code>, <code>Người làm:</code></td>
          </tr>
          <tr>
            <td><strong>Thuật ngữ Hệ thống</strong></td>
            <td>Giữ nguyên gốc tiếng Anh</td>
            <td><code>JTBD</code>, <code>Touchpoint</code>, <code>Rubric</code>, <code>DoD</code></td>
            <td>Dịch thô: <em>Công việc cần làm</em>, <em>Điểm tiếp xúc</em></td>
          </tr>
          <tr>
            <td><strong>Nội dung Hướng dẫn</strong></td>
            <td>Tiếng Việt tự nhiên</td>
            <td>Các bước SOP, kịch bản, Do's & Don'ts</td>
            <td>Dịch máy thô cứng vô hồn</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function renderDARTemplate() {
  return `
    <div style="margin-bottom: var(--space-6);">
      <span class="badge badge-system">REQUIREMENTS §A8</span>
      <h1 style="font-size: 28px; font-weight: 800; color: var(--text-primary); margin-top: var(--space-2);">
        DAR Template & Governance Framework
      </h1>
      <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-2);">
        Khung đánh giá quyết định kiến trúc chuẩn CMMI DAR (Decision Analysis and Resolution) với ma trận định lượng 50 điểm.
      </p>
    </div>

    <div style="background: var(--bg-surface-subtle); border-left: 4px solid var(--color-marlins); border-radius: var(--radius-md); padding: var(--space-4); margin-bottom: var(--space-6);">
      <div style="font-size: 14px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">Quy Trình 6 Bước Đánh Giá DAR:</div>
      <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.6; margin: 0;">
        1. Nhận diện xung đột ➔ 2. Thiết lập 5 tiêu chí (Trọng số 10đ/tiêu chí) ➔ 3. Đề xuất tối thiểu 3 phương án (A/B/C) ➔ 4. Chấm điểm định lượng (/50) ➔ 5. Phê duyệt & Đóng băng quyết định ➔ 6. Gắn vào Playbook.
      </p>
    </div>
  `;
}

function renderUIDesignSystem() {
  return `
    <div style="margin-bottom: var(--space-6);">
      <span class="badge badge-system">SYSTEM DESIGN §B1</span>
      <h1 style="font-size: 28px; font-weight: 800; color: var(--text-primary); margin-top: var(--space-2);">
        UI Design System & Tokens
      </h1>
      <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-2);">
        Hệ thống Design Tokens (Ocean Teal, Marlins Coral, Dark Slate) và quy chuẩn Components đồng bộ.
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
      <div style="background: #0F766E; color: #fff; padding: var(--space-4); border-radius: var(--radius-lg);">
        <strong style="font-size: 15px;">Ocean Teal (#0F766E)</strong>
        <p style="font-size: 12px; margin: 4px 0 0; opacity: 0.9;">Primary Brand Color (Sự vững chãi, khoa học sư phạm)</p>
      </div>
      <div style="background: #F97316; color: #fff; padding: var(--space-4); border-radius: var(--radius-lg);">
        <strong style="font-size: 15px;">Marlins Coral (#F97316)</strong>
        <p style="font-size: 12px; margin: 4px 0 0; opacity: 0.9;">Accent Highlight (Sự ấm áp, thấu cảm gia đình)</p>
      </div>
      <div style="background: #0F172A; color: #fff; padding: var(--space-4); border-radius: var(--radius-lg); border: 1px solid #334155;">
        <strong style="font-size: 15px;">Dark Slate (#0F172A)</strong>
        <p style="font-size: 12px; margin: 4px 0 0; opacity: 0.9;">Background / Surfaces (Độ tương phản cao, hiện đại)</p>
      </div>
    </div>
  `;
}

function renderTechStack() {
  return `
    <div style="margin-bottom: var(--space-6);">
      <span class="badge badge-system">SYSTEM DESIGN §B2</span>
      <h1 style="font-size: 28px; font-weight: 800; color: var(--text-primary); margin-top: var(--space-2);">
        Headless Edge Architecture & Tech Stack
      </h1>
      <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-2);">
        Hệ sinh thái kỹ thuật Serverless miễn phí trên Cloudflare (Cloudflare Pages + Workers API + D1 Database).
      </p>
    </div>

    <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-5);">
      <div style="font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-3);">
        🌐 3 Thành Phần Hệ Thống:
      </div>
      <ul style="padding-left: var(--space-5); margin: 0; font-size: 13.5px; color: var(--text-secondary); line-height: 1.8;">
        <li><strong>Client Hub:</strong> <code>https://marlins-care.pages.dev</code> (Cloudflare Pages)</li>
        <li><strong>API Gateway:</strong> <code>https://marlins-care-api.workers.dev</code> (Cloudflare Workers)</li>
        <li><strong>Admin Portal:</strong> <code>https://marlins-care-admin.pages.dev</code> (Cổng CRUD trực tiếp D1)</li>
        <li><strong>Database:</strong> <code>marlins_care_db</code> (Cloudflare D1 Serverless SQL)</li>
      </ul>
    </div>
  `;
}

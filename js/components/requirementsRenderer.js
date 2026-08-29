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
        A7 · Content & Language Standards
      </h1>
      <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-2);">
        Bộ tiêu chuẩn biên soạn nội dung, quy tắc ngôn ngữ & cấu trúc tài liệu toàn hệ thống Marlins Care. Áp dụng cho: Tất cả các tài liệu Requirements, Architecture, Playbooks, SOPs, Data Schema & Giao diện UI.
      </p>
    </div>

    <!-- 1. Core Principles -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      1. Nguyên Tắc Cốt Lõi (Core Principles)
    </h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-4);">
        <strong style="color: var(--color-marlins); font-size: 14.5px;">1. Nhất quán & Tối giản (Clarity & Consistency)</strong>
        <p style="font-size: 13px; color: var(--text-secondary); margin: 6px 0 0; line-height: 1.5;">
          Loại bỏ hoàn toàn sự lai tạp hai thứ tiếng trong cùng một cụm tiêu đề (ví dụ: cấm <code>Điều kiện kích hoạt (Trigger)</code>, <code>Thời gian chuẩn (SOP Time)</code>). Chọn một ngôn ngữ duy nhất cho tiêu đề theo quy tắc phân cấp rõ ràng.
        </p>
      </div>
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-4);">
        <strong style="color: var(--color-system); font-size: 14.5px;">2. Quy tắc độ dài tiêu đề (Lean Section Title Rule)</strong>
        <p style="font-size: 13px; color: var(--text-secondary); margin: 6px 0 0; line-height: 1.5;">
          Tên của mọi <strong>Section / Subsection (Header H1, H2, H3, H4)</strong> và các <strong>Meta-data Label</strong>: <strong>Tối đa 3 từ (≤ 3 words)</strong>.
        </p>
      </div>
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-4);">
        <strong style="color: #10B981; font-size: 14.5px;">3. Không đóng mở ngoặc song ngữ (Zero Parenthesis Translation)</strong>
        <p style="font-size: 13px; color: var(--text-secondary); margin: 6px 0 0; line-height: 1.5;">
          Tuyệt đối <strong>không</strong> dùng hình thức mở ngoặc giải thích tiếng Việt/tiếng Anh đi kèm nhãn (<code>Không: Mục đích (Objective)</code> / <code>Không: Kích hoạt (Trigger)</code>).
        </p>
      </div>
    </div>

    <!-- 2. Language Matrix -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      2. Ma Trận Phân Định Ngôn Ngữ (Language Matrix)
    </h2>
    <div style="overflow-x:auto; margin-bottom: var(--space-6);">
      <table class="sop-table">
        <thead>
          <tr>
            <th>Hạng Mục / Thành Phần</th>
            <th>Ngôn Ngữ Quy Định</th>
            <th>Ví Dụ Chuẩn</th>
            <th>Ví Dụ Vi Phạm (Cấm)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Tiêu đề Section / Header (H1 - H4)</strong></td>
            <td><strong>Pure English</strong> (Ưu tiên English, Title Case)</td>
            <td><code>## Playbook Overview</code><br><code>### Trigger Condition</code><br><code>### Target Audience</code></td>
            <td><span style="color: var(--color-risk);">❌ <code>## Tổng quan (Overview)</code><br><code>### Điều kiện kích hoạt (Trigger)</code><br><code>### Thời gian chuẩn (SOP Time)</code></span></td>
          </tr>
          <tr>
            <td><strong>Meta-data Labels (Nhãn trường thông tin)</strong></td>
            <td><strong>Pure English</strong></td>
            <td><code>Objective:</code><br><code>Trigger:</code><br><code>Standard Time:</code><br><code>Target Audience:</code><br><code>Owner:</code></td>
            <td><span style="color: var(--color-risk);">❌ <code>Mục đích:</code><br><code>Điều kiện kích hoạt (Trigger):</code><br><code>Thời gian chuẩn (SOP Time):</code><br><code>Mục tiêu (Goal):</code></span></td>
          </tr>
          <tr>
            <td><strong>Thuật ngữ Chuyên môn / Hệ thống</strong></td>
            <td><strong>Pure English</strong> (giữ nguyên gốc)</td>
            <td><code>JTBD</code>, <code>Touchpoint</code>, <code>Rubric</code>, <code>DoD</code>, <code>Sensemaking</code>, <code>Family Notes</code>, <code>Archetype</code></td>
            <td><span style="color: var(--color-risk);">❌ Dịch thô/ép nghĩa tiếng Việt: <em>Công việc cần làm</em>, <em>Điểm tiếp xúc</em>, <em>Thấu hiểu giác quan</em></span></td>
          </tr>
          <tr>
            <td><strong>Nội dung Chi tiết & Hướng dẫn Tác nghiệp</strong></td>
            <td><strong>Tiếng Việt tự nhiên</strong></td>
            <td>Các bước SOP chi tiết, kịch bản hội thoại, lời khuyên Mentor, Do's & Don'ts.</td>
            <td><span style="color: var(--color-risk);">❌ Dùng Google Translate cứng nhắc hoặc chèn từ tiếng Anh bừa bãi khi đã có từ tiếng Việt chuẩn xác.</span></td>
          </tr>
          <tr>
            <td><strong>Giao diện Người dùng (UI Labels - Phụ huynh)</strong></td>
            <td><strong>Tiếng Việt thân thiện</strong></td>
            <td><code>Hành trình của con</code>, <code>Nhật ký học tập</code>, <code>Đăng ký trải nghiệm</code></td>
            <td><span style="color: var(--color-risk);">❌ Chèn thuật ngữ kỹ thuật khó hiểu với phụ huynh.</span></td>
          </tr>
          <tr>
            <td><strong>Giao diện Nội bộ (Internal Workspace / Docs)</strong></td>
            <td><strong>English / Bilingual chuyên nghiệp</strong></td>
            <td><code>Family Workspace</code>, <code>Growth Scorecard</code>, <code>Risk Alerts</code></td>
            <td><span style="color: var(--color-risk);">❌ Dịch gượng ép làm mất ý nghĩa thao tác dữ liệu.</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 3. Standard Glossary -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      3. Bảng Chuẩn Hóa Nhãn Header & Meta-data (Standard Glossary)
    </h2>
    <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: var(--space-3);">
      Áp dụng thống nhất cho tất cả các Playbooks, SOPs và tài liệu thiết kế:
    </p>

    <h3 style="font-size: 16px; font-weight: 700; margin: var(--space-4) 0 var(--space-2); color: var(--text-primary);">
      3.1. Metadata Headers (Đầu mỗi Playbook/SOP)
    </h3>
    <div style="overflow-x:auto; margin-bottom: var(--space-5);">
      <table class="sop-table">
        <thead>
          <tr>
            <th>Cụm Cũ / Sai Quy Chuẩn</th>
            <th>Cụm Chuẩn Hóa (Pure English ≤ 3 words)</th>
            <th>Diễn Giải Chi Tiết (Nội dung bên trong viết bằng TV)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Mục đích:</code> / <code>Mục đích (Objective):</code></td>
            <td><strong style="color: var(--color-primary);">Objective:</strong></td>
            <td>Mục đích cốt lõi của hoạt động/tài liệu.</td>
          </tr>
          <tr>
            <td><code>Điều kiện kích hoạt (Trigger):</code></td>
            <td><strong style="color: var(--color-primary);">Trigger:</strong></td>
            <td>Sự kiện hoặc tín hiệu kích hoạt quy trình.</td>
          </tr>
          <tr>
            <td><code>Thời gian chuẩn (SOP Time):</code></td>
            <td><strong style="color: var(--color-primary);">Standard Time:</strong></td>
            <td>Khung thời gian tiêu chuẩn để hoàn thành.</td>
          </tr>
          <tr>
            <td><code>Đối tượng áp dụng (Target Audience):</code></td>
            <td><strong style="color: var(--color-primary);">Target Audience:</strong></td>
            <td>Phụ huynh, học sinh hoặc nhóm đối tượng tác động.</td>
          </tr>
          <tr>
            <td><code>Người thực hiện (Owner / PIC):</code></td>
            <td><strong style="color: var(--color-primary);">Owner:</strong></td>
            <td>Vai trò chịu trách nhiệm chính (Mentor, Host, System).</td>
          </tr>
          <tr>
            <td><code>Đầu ra bắt buộc (Deliverables / Output):</code></td>
            <td><strong style="color: var(--color-primary);">Output:</strong></td>
            <td>Kết quả, dữ liệu hoặc tài liệu phải nộp sau khi xong.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 style="font-size: 16px; font-weight: 700; margin: var(--space-4) 0 var(--space-2); color: var(--text-primary);">
      3.2. Section Naming Principles (Quy chuẩn đặt tên Tiêu đề mục)
    </h3>
    <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-4); margin-bottom: var(--space-6);">
      <p style="font-size: 13.5px; color: var(--text-secondary); margin: 0 0 var(--space-3); line-height: 1.6;">
        Tiêu đề Section (<code>##</code>, <code>###</code>, <code>####</code>) và Toggle/Accordion hoàn toàn linh hoạt theo ngữ cảnh thực tế của từng tài liệu, nhưng <strong>bắt buộc tuân thủ 3 nguyên tắc</strong>:
      </p>
      <ol style="padding-left: var(--space-5); margin: 0 0 var(--space-3); font-size: 13.5px; color: var(--text-secondary); line-height: 1.8;">
        <li><strong>Pure English & Title Case:</strong> Sử dụng tiếng Anh chuẩn ngữ nghĩa, viết hoa chữ cái đầu.</li>
        <li><strong>Lean Length (≤ 3 words):</strong> Tối đa 3 từ, ngắn gọn và hướng hành động/chủ đề.</li>
        <li><strong>No Decorative Noise:</strong> Không chèn emoji ở đầu dòng, không mở ngoặc chú thích/dịch nghĩa song ngữ.</li>
      </ol>
      <div style="border-top: 1px dashed var(--border-subtle); padding-top: var(--space-3); font-size: 13px; color: var(--text-secondary); line-height: 1.6;">
        <div>✅ <strong>Chuẩn mực:</strong> <code>Session Agenda</code>, <code>SOP Steps</code>, <code>Do's & Don'ts</code>, <code>Question Bank</code>, <code>Assessment Rubrics</code>, <code>Family Notes</code>...</div>
        <div style="margin-top: 4px;">❌ <strong>Vi phạm (Cấm):</strong> <code>Lịch trình và khung thời lượng (Session Agenda)</code>, <code>📋 SOP Steps (Các bước)</code>, <code>Standard Operating Procedure For Trial Class</code>.</div>
      </div>
    </div>

    <!-- 4. Formatting Guidelines -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      4. Quy Chuẩn Soạn Thảo & Định Dạng (Formatting Guidelines)
    </h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-4);">
        <strong style="color: var(--text-primary); font-size: 14px;">4.1. Quy tắc Viết hoa (Capitalization Rule)</strong>
        <ul style="padding-left: var(--space-4); margin: 8px 0 0; font-size: 13px; color: var(--text-secondary); line-height: 1.6;">
          <li><strong>Title Case</strong> cho toàn bộ Section Header tiếng Anh: <code>Session Agenda</code>, <code>Trigger Condition</code>, <code>Assessment Rubrics</code>.</li>
          <li><strong>Sentence case</strong> cho các câu mô tả chi tiết tiếng Việt: Bắt đầu bằng chữ hoa, kết thúc bằng dấu chấm.</li>
        </ul>
      </div>
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-4);">
        <strong style="color: var(--text-primary); font-size: 14px;">4.2. Quy tắc Đậm / Nghiêng / Code Highlight</strong>
        <ul style="padding-left: var(--space-4); margin: 8px 0 0; font-size: 13px; color: var(--text-secondary); line-height: 1.6;">
          <li><strong>In đậm (<code>**text**</code>):</strong> Dùng cho Meta-labels (<code>Trigger:</code>, <code>Objective:</code>), hành động then chốt, hoặc vai trò (<code>Mentor:</code>, <code>Parent:</code>).</li>
          <li><strong>In nghiêng (<code>*text*</code>):</strong> Dùng cho trích dẫn lời thoại mẫu, câu hỏi trực tiếp: <em>“Dạ chào anh chị, hôm nay em muốn chia sẻ về...”</em>.</li>
          <li><strong>Code Block / Inline Code (<code>\`text\`</code>):</strong> Dùng cho trường dữ liệu kỹ thuật (<code>family_contacts</code>, <code>lms_score</code>).</li>
        </ul>
      </div>
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-4);">
        <strong style="color: var(--text-primary); font-size: 14px;">4.3. Containers & Callouts Formatting</strong>
        <ul style="padding-left: var(--space-4); margin: 8px 0 0; font-size: 13px; color: var(--text-secondary); line-height: 1.6;">
          <li><strong>Gợi ý / Mẹo thực thi:</strong> Cú pháp <code>::: tip [Tiêu đề]</code> cho Best Practices.</li>
          <li><strong>Cảnh báo rủi ro:</strong> Cú pháp <code>::: warning [Tiêu đề]</code> cho lưu ý quan trọng.</li>
          <li><strong>Hành vi cấm kỵ:</strong> Cú pháp <code>::: danger [Tiêu đề]</code> cho điều cấm kỵ (Don'ts).</li>
        </ul>
      </div>
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-4);">
        <strong style="color: var(--text-primary); font-size: 14px;">4.4. Giọng Điệu & Văn Phong (Tone of Voice)</strong>
        <ul style="padding-left: var(--space-4); margin: 8px 0 0; font-size: 13px; color: var(--text-secondary); line-height: 1.6;">
          <li><strong>Văn bản Vận hành (SOP/Playbook):</strong> Ngắn gọn, dứt khoát, hướng hành động (action-oriented), không dùng từ ngữ cảm tính dư thừa.</li>
          <li><strong>Kịch bản Giao tiếp Phụ huynh:</strong> Đồng cảm, chân thành, tôn trọng, thấu hiểu, mang tinh thần giáo dục hiện đại (<em>Dory Sensemaking</em>).</li>
        </ul>
      </div>
    </div>

    <!-- 5. QA Checklist -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      5. Checklist Kiểm Thừa Trước Khi Xuất Bản (QA Checklist)
    </h2>
    <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-4); margin-bottom: var(--space-6);">
      <p style="font-size: 13.5px; color: var(--text-secondary); margin: 0 0 var(--space-3); line-height: 1.6;">
        Trước khi commit/merge bất kỳ tài liệu nào vào hệ thống, tác giả bắt buộc tự kiểm tra 5 điểm:
      </p>
      <div style="display: flex; flex-direction: column; gap: 8px; font-size: 13.5px; color: var(--text-primary);">
        <label style="display: flex; align-items: center; gap: 10px;">
          <input type="checkbox" checked disabled>
          <span><strong>Section Titles:</strong> Có tiêu đề nào vượt quá 3 từ hoặc chứa emoji ở đầu không?</span>
        </label>
        <label style="display: flex; align-items: center; gap: 10px;">
          <input type="checkbox" checked disabled>
          <span><strong>No Bilingual Parentheses:</strong> Có cặp đóng/mở ngoặc dịch ngữ nào (như <code>(Trigger)</code>, <code>(Mục đích)</code>) ở tiêu đề/nhãn không?</span>
        </label>
        <label style="display: flex; align-items: center; gap: 10px;">
          <input type="checkbox" checked disabled>
          <span><strong>Metadata Consistency:</strong> Đã có đủ 6 trường metadata chuẩn (<code>Objective:</code>, <code>Trigger:</code>, <code>Standard Time:</code>, <code>Target Audience:</code>, <code>Owner:</code>, <code>Output:</code>) chưa?</span>
        </label>
        <label style="display: flex; align-items: center; gap: 10px;">
          <input type="checkbox" checked disabled>
          <span><strong>Language Consistency:</strong> Phần giải thích chi tiết có viết bằng tiếng Việt tự nhiên, mạch lạc không?</span>
        </label>
        <label style="display: flex; align-items: center; gap: 10px;">
          <input type="checkbox" checked disabled>
          <span><strong>Terminology Integrity:</strong> Các thuật ngữ nền tảng (<code>JTBD</code>, <code>Touchpoint</code>, <code>Rubric</code>, <code>DoD</code>) có được giữ nguyên dạng không bị dịch gượng ép không?</span>
        </label>
      </div>
    </div>
  `;
}

function renderDARTemplate() {
  return `
    <div style="margin-bottom: var(--space-6);">
      <span class="badge badge-system">REQUIREMENTS §A8</span>
      <h1 style="font-size: 28px; font-weight: 800; color: var(--text-primary); margin-top: var(--space-2);">
        A8 · DAR Governance & Decision Matrix
      </h1>
      <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-2);">
        Bộ tiêu chuẩn đánh giá & ra quyết định kiến trúc hệ thống — Nemo12 & Marlins Care. Tương thích: CMMI-DEV DAR Model, SDD & Content Standards A7.
      </p>
    </div>

    <!-- 1. Core Principles -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      1. Core Principles
    </h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-4);">
        <strong style="color: var(--color-marlins); font-size: 14.5px;">1. Transparent Rationale</strong>
        <p style="font-size: 13px; color: var(--text-secondary); margin: 6px 0 0; line-height: 1.5;">
          Mọi thay đổi kiến trúc hoặc chiến lược vận hành trọng yếu không được quyết định dựa trên cảm tính ngắn hạn, mà phải qua phân tích đa chiều với các phương án thay thế (Alternatives) rõ ràng.
        </p>
      </div>
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-4);">
        <strong style="color: var(--color-system); font-size: 14.5px;">2. Weighted Scoring Matrix</strong>
        <p style="font-size: 13px; color: var(--text-secondary); margin: 6px 0 0; line-height: 1.5;">
          Sử dụng ma trận chuẩn CMMI DAR với công thức tính điểm: <code>Score = Rating × Weight</code>.
        </p>
      </div>
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-4);">
        <strong style="color: #10B981; font-size: 14.5px;">3. Frozen Decisions</strong>
        <p style="font-size: 13px; color: var(--text-secondary); margin: 6px 0 0; line-height: 1.5;">
          Khi một DAR đã được phê duyệt (<code>status: approved</code>), các kết luận trở thành quy tắc bất biến. Muốn thay đổi phải mở một DAR mới để đánh giá lại (<code>superseded</code>).
        </p>
      </div>
    </div>

    <!-- 2. Evaluation Matrix -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      2. Evaluation Matrix
    </h2>
    <div style="overflow-x:auto; margin-bottom: var(--space-4);">
      <table class="sop-table">
        <thead>
          <tr>
            <th>Criteria</th>
            <th>Weight (1-5)</th>
            <th>Option A: [Name]</th>
            <th>Option A: Score</th>
            <th>Option B: [Name]</th>
            <th>Option B: Score</th>
            <th>Option C: [Name]</th>
            <th>Option C: Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>C1: [Tên tiêu chí 1]</strong></td>
            <td>W1</td>
            <td>R_A1 (1-5)</td>
            <td>W1 × R_A1</td>
            <td>R_B1 (1-5)</td>
            <td>W1 × R_B1</td>
            <td>R_C1 (1-5)</td>
            <td>W1 × R_C1</td>
          </tr>
          <tr>
            <td><strong>C2: [Tên tiêu chí 2]</strong></td>
            <td>W2</td>
            <td>R_A2 (1-5)</td>
            <td>W2 × R_A2</td>
            <td>R_B2 (1-5)</td>
            <td>W2 × R_B2</td>
            <td>R_C2 (1-5)</td>
            <td>W2 × R_C2</td>
          </tr>
          <tr>
            <td><strong>C3: [Tên tiêu chí 3]</strong></td>
            <td>W3</td>
            <td>R_A3 (1-5)</td>
            <td>W3 × R_A3</td>
            <td>R_B3 (1-5)</td>
            <td>W3 × R_B3</td>
            <td>R_C3 (1-5)</td>
            <td>W3 × R_C3</td>
          </tr>
          <tr style="background: var(--bg-surface-subtle); font-weight: 700;">
            <td><strong>TOTAL</strong></td>
            <td><strong>Sum(W)</strong></td>
            <td>—</td>
            <td><strong>Total Score A</strong></td>
            <td>—</td>
            <td><strong>Total Score B</strong></td>
            <td>—</td>
            <td><strong>Total Score C</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 style="font-size: 16px; font-weight: 700; margin: var(--space-4) 0 var(--space-2); color: var(--text-primary);">
      Rating Rubrics
    </h3>
    <ul style="padding-left: var(--space-5); margin: 0 0 var(--space-6); font-size: 13.5px; color: var(--text-secondary); line-height: 1.8;">
      <li><strong>Rating 5 (Optimal):</strong> Đáp ứng vượt trội, không rủi ro, tối ưu chi phí & thời gian.</li>
      <li><strong>Rating 4 (Good):</strong> Đáp ứng tốt, rủi ro thấp và có giải pháp kiểm soát rõ ràng.</li>
      <li><strong>Rating 3 (Acceptable):</strong> Đáp ứng ở mức chấp nhận được, có đánh đổi vừa phải.</li>
      <li><strong>Rating 2 (High Risk):</strong> Khó khả thi hoặc tạo rủi ro lớn về vận hành/trải nghiệm.</li>
      <li><strong>Rating 1 (Disqualified):</strong> Không đáp ứng hoặc vi phạm nguyên tắc cốt lõi của hệ thống.</li>
    </ul>

    <!-- 3. Lifecycle Management -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      3. Lifecycle Management
    </h2>
    <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-4); margin-bottom: var(--space-6);">
      <ol style="padding-left: var(--space-5); margin: 0; font-size: 13.5px; color: var(--text-secondary); line-height: 1.8;">
        <li><strong>Initiation:</strong> Bất kỳ quyết định nào có tác động đến ≥ 2 thành phần trong hệ thống (SOP, Portal, Khóa học, Nhân sự) đều phải tạo file DAR dạng <code>status: draft</code>.</li>
        <li><strong>Evaluation:</strong> Người đề xuất và Core Team cùng thảo luận cho điểm Rating trên từng Tiêu chí.</li>
        <li><strong>Approval & Freeze:</strong> Chuyển trạng thái sang <code>status: approved</code> và đồng bộ vào tài liệu quản trị chung.</li>
      </ol>
    </div>
  `;
}

function renderUIDesignSystem() {
  return `
    <div style="margin-bottom: var(--space-6);">
      <span class="badge badge-system">SYSTEM DESIGN §B1</span>
      <h1 style="font-size: 28px; font-weight: 800; color: var(--text-primary); margin-top: var(--space-2);">
        B1 · UI Design System: Nemo12 & Marlins Care
      </h1>
      <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-2);">
        Triết lý thiết kế: <em>"Clarity over Decoration. Evidence over Slogans. Human Warmth within System Precision."</em> Kế thừa ngôn ngữ chuẩn từ Nemo12 Canonical Documentation System kết hợp nét ấm áp, tin cậy đặc trưng của Marlins Care.
      </p>
    </div>

    <!-- 1. Color Palette & Design Tokens -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      1. Foundations & Design Tokens
    </h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
      <div style="background: #0F766E; color: #fff; padding: var(--space-4); border-radius: var(--radius-lg);">
        <strong style="font-size: 15px;">Ocean Teal (#0F766E)</strong>
        <p style="font-size: 12px; margin: 4px 0 0; opacity: 0.9;">Main Brand & Precision (Sự vững chãi, khoa học sư phạm)</p>
      </div>
      <div style="background: #EA580C; color: #fff; padding: var(--space-4); border-radius: var(--radius-lg);">
        <strong style="font-size: 15px;">Marlins Coral (#EA580C)</strong>
        <p style="font-size: 12px; margin: 4px 0 0; opacity: 0.9;">Action & Warmth (Sự ấm áp, đồng hành phụ huynh)</p>
      </div>
      <div style="background: #0284C7; color: #fff; padding: var(--space-4); border-radius: var(--radius-lg);">
        <strong style="font-size: 15px;">System Blue (#0284C7)</strong>
        <p style="font-size: 12px; margin: 4px 0 0; opacity: 0.9;">Automated Evidence (Dữ liệu máy tự động)</p>
      </div>
      <div style="background: #0F172A; color: #fff; padding: var(--space-4); border-radius: var(--radius-lg); border: 1px solid #334155;">
        <strong style="font-size: 15px;">Dark Slate (#0F172A)</strong>
        <p style="font-size: 12px; margin: 4px 0 0; opacity: 0.9;">Background / Surfaces (Độ tương phản cao, hiện đại)</p>
      </div>
    </div>

    <!-- 2. Typography Scale -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      2. Typography Scale
    </h2>
    <div style="overflow-x:auto; margin-bottom: var(--space-6);">
      <table class="sop-table">
        <thead>
          <tr>
            <th>Element</th>
            <th>Font Family</th>
            <th>Size</th>
            <th>Weight</th>
            <th>Line Height</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Display H1</strong></td>
            <td>Inter</td>
            <td>32px / 2.0rem</td>
            <td>700 (Bold)</td>
            <td>1.25</td>
          </tr>
          <tr>
            <td><strong>Section H2</strong></td>
            <td>Inter</td>
            <td>24px / 1.5rem</td>
            <td>600 (Semibold)</td>
            <td>1.30</td>
          </tr>
          <tr>
            <td><strong>Subsection H3</strong></td>
            <td>Inter</td>
            <td>18px / 1.125rem</td>
            <td>600 (Semibold)</td>
            <td>1.40</td>
          </tr>
          <tr>
            <td><strong>Body Regular</strong></td>
            <td>Inter</td>
            <td>14px / 0.875rem</td>
            <td>400 (Regular)</td>
            <td>1.50</td>
          </tr>
          <tr>
            <td><strong>Caption / Badge</strong></td>
            <td>Inter</td>
            <td>12px / 0.75rem</td>
            <td>600 (Semibold)</td>
            <td>1.40</td>
          </tr>
          <tr>
            <td><strong>Code / Code ID</strong></td>
            <td>JetBrains Mono</td>
            <td>13px / 0.8125rem</td>
            <td>500 (Medium)</td>
            <td>1.40</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 3. Layout Specs -->
    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      3. Layout Specifications
    </h2>
    <div style="overflow-x:auto; margin-bottom: var(--space-6);">
      <table class="sop-table">
        <thead>
          <tr>
            <th>Thành phần</th>
            <th>Kích thước</th>
            <th>Trạng thái & Cơ chế hiển thị</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Top Navigation Bar</strong></td>
            <td><code>64px sticky</code></td>
            <td>Chứa Brand Cluster, phím tắt tìm kiếm <code>⌘K</code>, Menu TopNav, Theme Toggle.</td>
          </tr>
          <tr>
            <td><strong>Left Sidebar Nav</strong></td>
            <td><code>280px sticky</code></td>
            <td>Phân tầng danh mục; Active link có viền nhấn <code>3px solid var(--color-primary)</code>.</td>
          </tr>
          <tr>
            <td><strong>Main Content Viewport</strong></td>
            <td><code>Max 920px</code></td>
            <td>Đảm bảo độ dài dòng đọc tối ưu (65–85 ký tự); render trực tiếp Markdown.</td>
          </tr>
          <tr>
            <td><strong>Right Aside (TOC)</strong></td>
            <td><code>240px sticky</code></td>
            <td>Tự động quét <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code> theo chuẩn A7 Content Standards.</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function renderTechStack() {
  return `
    <div style="margin-bottom: var(--space-6);">
      <span class="badge badge-system">SYSTEM DESIGN §B2</span>
      <h1 style="font-size: 28px; font-weight: 800; color: var(--text-primary); margin-top: var(--space-2);">
        B2 · System Architecture & Tech Stack Specifications
      </h1>
      <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-2);">
        Mô hình triển khai: Decoupled Headless Edge Architecture trên hạ tầng miễn phí của Cloudflare (Cloudflare Pages + Workers API + D1 Database).
      </p>
    </div>

    <div style="overflow-x:auto; margin-bottom: var(--space-6);">
      <table class="sop-table">
        <thead>
          <tr>
            <th>Tầng Kiến Trúc (Layer)</th>
            <th>Công Nghệ / Dịch Vụ</th>
            <th>Tên miền mặc định Cloudflare (Free)</th>
            <th>Mục Đích Sử Dụng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Edge Database</strong></td>
            <td><strong>Cloudflare D1</strong></td>
            <td><code>marlins_care_db</code></td>
            <td>Cơ sở dữ liệu SQLite Serverless tại Edge, lưu trữ Playbooks, SOPs, FAQs, Rubrics và Decision Logs.</td>
          </tr>
          <tr>
            <td><strong>API Gateway</strong></td>
            <td><strong>Cloudflare Workers</strong></td>
            <td><code>marlins-care-api.*.workers.dev</code></td>
            <td>API Gateway tiếp nhận requests, xử lý routing, auth và truy vấn D1.</td>
          </tr>
          <tr>
            <td><strong>Admin Portal</strong></td>
            <td><strong>Cloudflare Pages</strong></td>
            <td><code>marlins-care-admin.pages.dev</code></td>
            <td>Cổng quản trị cho phép đội ngũ Ops/Mentors thêm, sửa, xóa nội dung mà không cần Git.</td>
          </tr>
          <tr>
            <td><strong>Client Knowledge Hub</strong></td>
            <td><strong>Cloudflare Pages</strong></td>
            <td><code>marlins-care.pages.dev</code></td>
            <td>Giao diện đọc tài liệu chính thức, gọi API Workers để fetch và hiển thị dữ liệu siêu tốc.</td>
          </tr>
          <tr>
            <td><strong>Design System</strong></td>
            <td><strong>Ocean Teal Tokens</strong></td>
            <td>—</td>
            <td>Kế thừa hệ thống màu sắc, kiểu chữ và components chuẩn từ <code>B1_UI_Design_System.md</code>.</td>
          </tr>
          <tr>
            <td><strong>Edge CDN & Security</strong></td>
            <td><strong>Cloudflare Global Network</strong></td>
            <td>—</td>
            <td>Tự động kích hoạt HTTP/3, TLS 1.3, Brotli và phân phối toàn cầu miễn phí.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 style="font-size: 20px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      Database Schema (Cloudflare D1)
    </h2>
    <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-4); margin-bottom: var(--space-6);">
      <pre style="font-family: monospace; font-size: 12.5px; line-height: 1.6; color: var(--text-primary); margin: 0; overflow-x: auto;"><code>-- 1. Bảng Module / Phân hệ chính
CREATE TABLE modules (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    order_index INTEGER DEFAULT 0
);

-- 2. Bảng Playbooks
CREATE TABLE playbooks (
    id TEXT PRIMARY KEY,
    module_id TEXT NOT NULL,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    tier TEXT CHECK(tier IN ('Tier 1', 'Tier 2', 'Tier 3')),
    touchpoints TEXT,
    objective TEXT,
    trigger_condition TEXT,
    standard_time TEXT,
    target_audience TEXT,
    owner TEXT,
    output TEXT,
    order_index INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (module_id) REFERENCES modules(id)
);

-- 3. Bảng Khối Nội Dung (Sections) của Playbook
CREATE TABLE playbook_sections (
    id TEXT PRIMARY KEY,
    playbook_id TEXT NOT NULL,
    section_key TEXT NOT NULL,
    title TEXT NOT NULL,
    content_html TEXT NOT NULL,
    order_index INTEGER DEFAULT 0,
    FOREIGN KEY (playbook_id) REFERENCES playbooks(id)
);

-- 4. Bảng FAQs
CREATE TABLE faqs (
    id TEXT PRIMARY KEY,
    playbook_id TEXT NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    order_index INTEGER DEFAULT 0,
    FOREIGN KEY (playbook_id) REFERENCES playbooks(id)
);</code></pre>
    </div>
  `;
}

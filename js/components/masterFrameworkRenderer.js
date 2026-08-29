import { SITEMAP_CONFIG } from '../data.js';

export function renderMasterFramework(onNavigate) {
  const container = document.createElement('div');
  container.className = 'playbook-page-wrapper';

  container.innerHTML = `
    <!-- Header -->
    <div style="margin-bottom: var(--space-6);">
      <div style="display:flex; align-items:center; gap:var(--space-2); margin-bottom:var(--space-2);">
        <span class="badge badge-system">ARCHITECTURAL STANDARD</span>
        <span class="badge badge-tag">v4.0.0</span>
      </div>
      <h1 style="font-size: 28px; font-weight: 800; color: var(--text-primary); letter-spacing: -0.02em;">
        Playbooks Master Framework
      </h1>
      <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-2);">
        Bộ khung kiến trúc, phân loại 3 Archetypes và Thang đo Rubrics phổ quát áp dụng thống nhất cho toàn bộ 9 Playbooks tác nghiệp của Nemo12 & Marlins Care.
      </p>
    </div>

    <!-- 1. CỐT LÕI TRIẾT LÝ VẬN HÀNH -->
    <section style="margin-bottom: var(--space-6);">
      <h2 style="font-size: 19px; font-weight: 700; color: var(--text-primary); border-bottom: 2px solid var(--border-subtle); padding-bottom: var(--space-2); margin-bottom: var(--space-3);">
        Core Operating Principles
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-4);">
        <div style="background: var(--bg-surface-subtle); border-left: 3px solid var(--color-primary-600); padding: var(--space-3) var(--space-4); border-radius: 0 var(--radius-md) var(--radius-md) 0;">
          <div style="font-weight: 700; font-size: 14px; color: var(--text-primary); margin-bottom: 4px;">
            1. Automate Evidence, Humanize Meaning
          </div>
          <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
            Hệ thống đảm nhiệm dữ liệu và sự nhất quán. Con người (Mentor & Host) đảm nhiệm bối cảnh, sự thấu cảm và phán đoán sư phạm.
          </div>
        </div>
        <div style="background: var(--bg-surface-subtle); border-left: 3px solid var(--color-primary-600); padding: var(--space-3) var(--space-4); border-radius: 0 var(--radius-md) var(--radius-md) 0;">
          <div style="font-weight: 700; font-size: 14px; color: var(--text-primary); margin-bottom: 4px;">
            2. Family-Centric Observation
          </div>
          <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
            Ghi nhận và phân tích theo đơn vị Gia đình (Bố, Mẹ, Con). Chuẩn hóa 6 trục Dory sensemaking (pain, jtbd, need, belief, goal, fact).
          </div>
        </div>
        <div style="background: var(--bg-surface-subtle); border-left: 3px solid var(--color-primary-600); padding: var(--space-3) var(--space-4); border-radius: 0 var(--radius-md) var(--radius-md) 0;">
          <div style="font-weight: 700; font-size: 14px; color: var(--text-primary); margin-bottom: 4px;">
            3. Standard Level 3 = DoD Standard ⭐
          </div>
          <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
            Mức Level 3 (Competent) là điều kiện tiên quyết bắt buộc để hoàn thành một nhiệm vụ bàn giao.
          </div>
        </div>
      </div>
    </section>

    <!-- 2. PHÂN LOẠI 3 ARCHETYPES TIERS -->
    <section style="margin-bottom: var(--space-6);">
      <h2 style="font-size: 19px; font-weight: 700; color: var(--text-primary); border-bottom: 2px solid var(--border-subtle); padding-bottom: var(--space-2); margin-bottom: var(--space-3);">
        Playbook Archetypes (3 Tiers)
      </h2>
      <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-4);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-2);">
            <strong style="font-size: 15px; color: var(--color-primary-700);">Tier 1: High-Touch / Human-Led</strong>
            <span class="badge badge-mentor">Family Meeting · Marlins Day · Workshop</span>
          </div>
          <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5; margin-bottom: var(--space-2);">
            Tương tác trực tiếp chiều sâu, đối thoại mở và thấu cảm gia đình. Yêu cầu kịch bản Agenda chi tiết, câu hỏi đào sâu và quan sát thực địa.
          </p>
          <div style="font-size: 12px; color: var(--text-muted);">
            <strong>Cấu trúc chuẩn:</strong> Overview ➔ Core Mindset ➔ Stakeholder Mapping ➔ Session Agenda ➔ Mentor Guides ➔ Deliverables & Templates ➔ Assessment Rubrics
          </div>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-4);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-2);">
            <strong style="font-size: 15px; color: var(--color-system);">Tier 2: Hybrid Routine</strong>
            <span class="badge badge-hybrid">Trial Class · Live Class · Growth Story</span>
          </div>
          <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5; margin-bottom: var(--space-2);">
            Nhịp vận hành lặp lại tuần hoàn: Máy tự động trích xuất bằng chứng ➔ Mentor phán đoán và gắn tag định tính ➔ Báo cáo minh bạch.
          </p>
          <div style="font-size: 12px; color: var(--text-muted);">
            <strong>Cấu trúc chuẩn:</strong> Overview ➔ Core Mindset ➔ Operating SOP ➔ Deliverables & Templates ➔ Assessment Rubrics
          </div>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-4);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-2);">
            <strong style="font-size: 15px; color: var(--color-marlins);">Tier 3: System & Outreach</strong>
            <span class="badge badge-tag">Community & Social · Next Steps · Referrals</span>
          </div>
          <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5; margin-bottom: var(--space-2);">
            Quy chuẩn bán tự động hóa, điều phối kênh cộng đồng Zalo/Facebook và chính sách tri ân tái tục/giới thiệu minh bạch.
          </p>
          <div style="font-size: 12px; color: var(--text-muted);">
            <strong>Cấu trúc chuẩn:</strong> Overview ➔ Core Mindset ➔ Operating SOP ➔ Communication Templates ➔ Assessment Rubrics
          </div>
        </div>
      </div>
    </section>

    <!-- 3. MASTER ASSESSMENT RUBRICS (3 TRỤ CỘT × 5 CẤP ĐỘ) -->
    <section style="margin-bottom: var(--space-6);">
      <h2 style="font-size: 19px; font-weight: 700; color: var(--text-primary); border-bottom: 2px solid var(--border-subtle); padding-bottom: var(--space-2); margin-bottom: var(--space-3);">
        Master Assessment Rubrics (3 Dimensions × 5 Levels)
      </h2>
      <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: var(--space-3);">
        Mọi hoạt động tác nghiệp đều được đối soát và chấm điểm dựa trên 3 trụ cột phổ quát với chuẩn bàn giao tối thiểu là <strong>Level 3 (DoD ⭐)</strong>:
      </p>

      <div style="overflow-x:auto;">
        <table class="rubric-table">
          <thead>
            <tr>
              <th class="rubric-col-crit">Trụ Cột Đánh Giá</th>
              <th class="rubric-col-l1">L1 Deficient</th>
              <th class="rubric-col-l2">L2 Basic</th>
              <th class="rubric-col-l3-head">L3 Competent (DoD ⭐)</th>
              <th class="rubric-col-l4">L4 Proficient</th>
              <th class="rubric-col-l5">L5 Mastery</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="rubric-col-crit"><strong>1. Execution & Compliance</strong></td>
              <td>Không làm, làm sai quy trình SOP, vi phạm thời gian hoặc bảo mật thông tin.</td>
              <td>Làm đủ bước nhưng chậm trễ, thao tác lúng túng.</td>
              <td class="rubric-cell-l3">Thực hiện đầy đủ, đúng hạn, chuẩn xác quy trình SOP và bảo mật dữ liệu.</td>
              <td>Thao tác nhanh gọn, chủ động xử lý các tình huống phát sinh linh hoạt.</td>
              <td>Vận hành mẫu mực, tối ưu hóa quy trình giúp đội ngũ học hỏi theo.</td>
            </tr>
            <tr>
              <td class="rubric-col-crit"><strong>2. Empathy & Insight Quality</strong></td>
              <td>Nhận định cảm tính, quy chụp hoặc không thu thập được dữ liệu chân thực.</td>
              <td>Thu thập thông tin rời rạc bề mặt, chỉ thấy điểm số không thấy tâm lý con.</td>
              <td class="rubric-cell-l3">Phân tách rõ Fact – Observation – Interpretation, ghi nhận đúng insight và bối cảnh riêng của gia đình.</td>
              <td>Thấu cảm sâu sắc, nhận diện được động lực ẩn sau hành vi của học sinh.</td>
              <td>Giúp gia đình tháo gỡ nút thắt tâm lý sâu kín, chuyển biến nhận thức giáo dục.</td>
            </tr>
            <tr>
              <td class="rubric-col-crit"><strong>3. Parent Experience & Value</strong></td>
              <td>Gây phiền hà, lo lắng hoặc áp lực kiểm soát lên phụ huynh và học sinh.</td>
              <td>Giao tiếp hành chính máy móc, không tạo được ấn tượng hay sự an tâm.</td>
              <td class="rubric-cell-l3">Phụ huynh an tâm, tin tưởng, hiểu rõ sự tiến bộ thực chất và lộ trình của con.</td>
              <td>Phụ huynh xúc động, cảm nhận con được yêu thương và tôn trọng độc bản.</td>
              <td>Kiến tạo khoảnh khắc ý nghĩa (Meaningful Moments), gắn kết gia đình bền chặt.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;

  return container;
}

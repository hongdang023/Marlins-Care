import { KNOWLEDGE_HUB_DATA } from '../data.js';

const DAR_SLUG_MAP = {
  'midpoint-pulse': 'DAR-01',
  'trial-support': 'DAR-02',
  'human-trigger': 'DAR-03',
  'high-touch': 'DAR-04',
  'completion': 'DAR-05'
};

const DAR_DETAILS = {
  'DAR-01': {
    context: 'Liệu có nên áp dụng khảo sát định kỳ giữa khóa (Mid-term survey) cho toàn bộ phụ huynh?',
    alternatives: [
      'Lựa chọn A: Bắt buộc gọi điện thoại 15 phút với từng phụ huynh (Gây kiệt sức nhân sự, tỷ lệ phản hồi thấp).',
      'Lựa chọn B: Gửi form khảo sát dài 20 câu hỏi (Gây khó chịu cho phụ huynh bận rộn).',
      'Lựa chọn C (Được chọn): Thử nghiệm Pilot siêu nhẹ (≤3 câu hỏi, ≤3 phút trên Zalo) chỉ nhắm vào các tín hiệu bất thường.'
    ],
    tradeoffs: 'Chấp nhận lượng dữ liệu thu về ít hơn nhưng đảm bảo độ tin cậy và không tạo gánh nặng thủ tục lên phụ huynh.'
  },
  'DAR-02': {
    context: 'Làm thế nào để tư vấn cho phụ huynh sau 2 buổi học thử (Trial) mà không rơi vào bẫy chèo kéo bán hàng (Hard-sales)?',
    alternatives: [
      'Lựa chọn A: Telesale gọi chốt sale bằng cách hối thúc giữ chỗ hoặc giảm giá giờ vàng.',
      'Lựa chọn B (Được chọn): Cung cấp báo cáo dữ liệu năng lực thực tế của trẻ ➔ Mentor đưa ra phán đoán độ phù hợp (Fit Judgment) trung thực.'
    ],
    tradeoffs: 'Sẵn sàng từ chối nhận học sinh nếu Nemo12 thực sự không phù hợp với giai đoạn phát triển hiện tại của con.'
  },
  'DAR-03': {
    context: 'Khi hệ thống phát hiện học sinh sụt giảm nỗ lực làm bài tập (Learning Risk), cơ chế can thiệp nào là tối ưu?',
    alternatives: [
      'Lựa chọn A: Hệ thống tự động gửi tin nhắn cảnh báo đỏ cho phụ huynh (Dễ gây áp lực gia đình và stress cho con).',
      'Lựa chọn B (Được chọn): Kiến trúc 4 bước: Signal ➔ Mentor Review ➔ Context Judgment ➔ Action.'
    ],
    tradeoffs: 'Đòi hỏi Mentor phải có chuyên môn phán đoán bối cảnh, nhưng bảo vệ được tâm lý tự chủ của người học.'
  },
  'DAR-04': {
    context: 'Tần suất và tiêu chí kích hoạt các hoạt động gắn kết con người chiều sâu (Gặp gỡ gia đình, thăm nhà, ăn tối)?',
    alternatives: [
      'Lựa chọn A: Tổ chức theo lịch cứng cố định (Thiếu tự nhiên, hình thức gượng ép).',
      'Lựa chọn B: Ưu tiên cho các phụ huynh VIP / đóng học phí cao (Gây bất bình đẳng).',
      'Lựa chọn C (Được chọn): Kích hoạt dựa trên Khoảnh khắc ý nghĩa (Meaningful Moments) và nhu cầu gắn kết chân thực.'
    ],
    tradeoffs: 'Số lượng cuộc gặp ít hơn nhưng mỗi cuộc gặp đều tạo ra chuyển biến cảm xúc sâu sắc và sự gắn kết bền vững.'
  },
  'DAR-05': {
    context: 'Làm thế nào để tổng kết trọn vẹn giá trị 12 buổi học mà không dừng lại ở một bảng điểm số vô cảm?',
    alternatives: [
      'Lựa chọn A: Xuất bảng điểm và chứng chỉ hoàn thành khóa học thông thường.',
      'Lựa chọn B (Được chọn): Xây dựng Narrative câu chuyện trưởng thành 5 phần (Growth Story).'
    ],
    tradeoffs: 'Đòi hỏi sự phối hợp dữ liệu hệ thống + quan sát Mentor nhưng trao cho gia đình một câu chuyện trưởng thành đáng tự hào.'
  }
};

export function renderDecisionLogs(slug, onNavigate) {
  const darKey = slug.replace('/decision-logs/', '');
  const darId = DAR_SLUG_MAP[darKey] || 'DAR-01';

  const darData = KNOWLEDGE_HUB_DATA.dars.find(d => d.id === darId) || KNOWLEDGE_HUB_DATA.dars[0];
  const detail = DAR_DETAILS[darId] || {};

  const container = document.createElement('div');
  container.className = 'dar-page-wrapper';

  container.innerHTML = `
    <div style="margin-bottom: var(--space-6);">
      <div style="display:flex; align-items:center; gap:var(--space-2); margin-bottom:var(--space-2);">
        <span class="badge badge-system">${darData.id}</span>
        <span class="badge badge-tag">DECISION ARCHITECTURE RECORD</span>
      </div>
      <h1 style="font-size: 28px; font-weight: 800; color: var(--text-primary); letter-spacing: -0.02em;">
        ${darData.id}: ${darData.title}
      </h1>
      <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-top: var(--space-2);">
        Ghi chép minh bạch lý do và phân tích đánh đổi đằng sau quyết định kiến trúc vận hành của Parent Care.
      </p>
    </div>

    <!-- Quick DAR Switcher -->
    <div style="display:flex; flex-wrap:wrap; gap:var(--space-2); margin-bottom:var(--space-8);">
      ${KNOWLEDGE_HUB_DATA.dars.map(d => `
        <a href="#/decision-logs/${getSlugFromDarId(d.id)}" class="badge ${d.id === darId ? 'badge-mentor' : 'badge-tag'}" style="padding:6px 12px; font-size:12px; text-decoration:none;">
          ${d.id}: ${d.title}
        </a>
      `).join('')}
    </div>

    <!-- Decision -->
    <div class="callout callout-coral">
      <div class="callout-title">⚖️ The Decision</div>
      <div class="callout-content" style="font-size:15px; font-weight:600; color:var(--text-primary);">
        ${darData.decision}
      </div>
    </div>

    <!-- Rationale -->
    <h2 style="font-size: 18px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      💡 Rationale & Philosophy
    </h2>
    <div class="philosophy-banner" style="margin-bottom:var(--space-6);">
      <div class="philosophy-quote">"${darData.rationale}"</div>
    </div>

    <!-- Context & Problem -->
    <h2 style="font-size: 18px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      🔍 Problem Statement
    </h2>
    <p style="font-size: 14.5px; color: var(--text-secondary); line-height: 1.6; margin-bottom: var(--space-6);">
      ${detail.context || 'Vấn đề tối ưu hóa trải nghiệm của phụ huynh và phân bổ nguồn lực con người hiệu quả.'}
    </p>

    <!-- Alternatives Considered -->
    <h2 style="font-size: 18px; font-weight: 700; margin: var(--space-6) 0 var(--space-3);">
      🔄 Alternatives Considered
    </h2>
    <div style="display:flex; flex-direction:column; gap:var(--space-3); margin-bottom:var(--space-6);">
      ${detail.alternatives ? detail.alternatives.map(alt => `
        <div class="feature-card" style="padding:var(--space-4);">
          <div style="font-size:14px; color:var(--text-primary); line-height:1.5;">${alt}</div>
        </div>
      `).join('') : ''}
    </div>

    <!-- Trade-offs -->
    <div class="callout callout-tip">
      <div class="callout-title">⚖️ Trade-off Analysis</div>
      <div class="callout-content">
        ${detail.tradeoffs || 'Tối ưu chất lượng mối quan hệ và sự an tâm bền vững thay vì chạy theo số lượng bề nổi.'}
      </div>
    </div>
  `;

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

function getSlugFromDarId(id) {
  const map = {
    'DAR-01': 'midpoint-pulse',
    'DAR-02': 'trial-support',
    'DAR-03': 'human-trigger',
    'DAR-04': 'high-touch',
    'DAR-05': 'completion'
  };
  return map[id] || 'midpoint-pulse';
}

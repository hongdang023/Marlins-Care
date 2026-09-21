/**
 * GTM Plan Renderer
 * Renders Go-To-Market plans with the same markdown parsing pipeline
 * used by the Requirements renderer.
 */

// ─── Markdown → HTML parser (shared pattern) ───────────────────────────────
function parseMarkdownToHtml(md) {
  if (!md) return "";
  let html = md;

  // 1. Math & Unicode sanitize
  html = html.replace(/\\\$/g, "$");
  html = html.replace(/\$\s*\\le\s*\$|\$\\le\$|\\le/g, "≤");
  html = html.replace(/\$\s*\\ge\s*\$|\$\\ge\$|\\ge/g, "≥");
  html = html.replace(/\$\s*\\ne\s*\$|\$\\ne\$|\\ne/g, "≠");
  html = html.replace(/\$\s*\\to\s*\$|\$\\to\$|\\to/g, "➔");
  html = html.replace(/\$\s*\\leftrightarrow\s*\$|\$\\leftrightarrow\$|\\leftrightarrow/g, "↔");
  html = html.replace(/\\%/g, "%");
  html = html.replace(/\$([^\$]+)\$/g, "$1");

  // 2. Remove Mermaid / Graph codeblocks
  html = html.replace(/```mermaid[\s\S]*?```/g, "");

  // 3. Fenced Code blocks
  html = html.replace(/```text([\s\S]*?)```/g, (match, p1) => {
    return `<pre style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-4); font-family: monospace; font-size: 12.5px; line-height: 1.6; overflow-x: auto; white-space: pre-wrap;"><code>${escapeHtml(p1.trim())}</code></pre>`;
  });
  html = html.replace(/```([\s\S]*?)```/g, (match, p1) => {
    return `<pre style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-4); font-size: 12.5px; overflow-x: auto;"><code>${escapeHtml(p1.trim())}</code></pre>`;
  });

  // 4. Inline code
  html = html.replace(/`([^`]+)`/g, `<code style="background: var(--bg-surface-subtle); padding: 2px 6px; border-radius: 4px; font-size: 12.5px; border: 1px solid var(--border-subtle); font-family: monospace;">$1</code>`);

  // 5. Links
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, `<a href="$2" target="_blank" rel="noopener" style="color: var(--color-primary-600); font-weight: 600; text-decoration: underline;">$1 ↗</a>`);
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, `<span style="color: var(--color-primary-600); font-weight: 600;">$1</span>`);

  // 6. Bold & Italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // 7. Headers
  html = html.replace(/^#### (.*$)/gim, `<h4 style="font-size: 15px; font-weight: 700; color: var(--text-primary); margin: 20px 0 10px;">$1</h4>`);
  html = html.replace(/^### (.*$)/gim, `<h3 style="font-size: 16.5px; font-weight: 700; color: var(--text-primary); margin: 22px 0 12px;">$1</h3>`);
  html = html.replace(/^## (.*$)/gim, `<h2 style="font-size: 19px; font-weight: 700; color: var(--text-primary); margin: 24px 0 12px; border-bottom: 2px solid var(--border-subtle); padding-bottom: 6px;">$1</h2>`);
  html = html.replace(/^# (.*$)/gim, `<h1 style="font-size: 24px; font-weight: 800; color: var(--text-primary); margin: 0 0 16px;">$1</h1>`);

  // 8. Blockquotes
  html = html.replace(/^\\> (.*$)/gim, `<div style="background: var(--bg-surface-subtle); border-left: 3px solid var(--color-primary-600); margin: 12px 0; padding: 12px 18px; border-radius: 0 var(--radius-md) var(--radius-md) 0; font-size: 13.5px; color: var(--text-secondary); line-height: 1.6;">$1</div>`);

  // 9. Horizontal Rule
  html = html.replace(/^---$/gim, `<hr style="border: none; border-top: 1px solid var(--border-subtle); margin: 20px 0;">`);

  // 10. Tables & List processing line by line
  const lines = html.split("\n");
  let inTable = false;
  let inUl = false;
  let inOl = false;
  let tableHtml = "";
  let processedLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Table handling
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      if (inUl) { processedLines.push("</ul>"); inUl = false; }
      if (inOl) { processedLines.push("</ol>"); inOl = false; }

      if (!inTable) {
        inTable = true;
        tableHtml = `<div style="overflow-x:auto; margin: 16px 0;"><table class="sop-table">`;
      }
      if (trimmed.includes("---")) continue;

      const cells = trimmed.split("|").filter((_, idx, arr) => idx > 0 && idx < arr.length - 1).map(c => c.trim());
      const isHeader = !tableHtml.includes("<tbody>");

      if (isHeader) {
        tableHtml += `<thead><tr>` + cells.map(c => `<th>${c}</th>`).join("") + `</tr></thead><tbody>`;
      } else {
        tableHtml += `<tr>` + cells.map(c => `<td>${c}</td>`).join("") + `</tr>`;
      }
      continue;
    } else if (inTable) {
      tableHtml += `</tbody></table></div>`;
      processedLines.push(tableHtml);
      inTable = false;
      tableHtml = "";
    }

    // List handling (unordered: *, -, •)
    const ulMatch = line.match(/^(\s*)([\*\-\•])\s+(.*)$/);
    if (ulMatch) {
      if (inOl) { processedLines.push("</ol>"); inOl = false; }
      if (!inUl) { processedLines.push(`<ul style="margin: 8px 0 12px 20px; padding-left: 0;">`); inUl = true; }
      const indent = ulMatch[1].length > 0 ? "margin-left: 18px;" : "";
      processedLines.push(`<li style="margin-bottom: 6px; font-size: 13.5px; color: var(--text-secondary); line-height: 1.6; ${indent}">${ulMatch[3]}</li>`);
      continue;
    }

    // List handling (ordered: 1., 2.)
    const olMatch = line.match(/^(\s*)([0-9]+)\.\s+(.*)$/);
    if (olMatch) {
      if (inUl) { processedLines.push("</ul>"); inUl = false; }
      if (!inOl) { processedLines.push(`<ol style="margin: 8px 0 12px 20px; padding-left: 0;">`); inOl = true; }
      const indent = olMatch[1].length > 0 ? "margin-left: 18px;" : "";
      processedLines.push(`<li style="margin-bottom: 6px; font-size: 13.5px; color: var(--text-secondary); line-height: 1.6; ${indent}">${olMatch[3]}</li>`);
      continue;
    }

    // Close any open lists
    if (inUl) { processedLines.push("</ul>"); inUl = false; }
    if (inOl) { processedLines.push("</ol>"); inOl = false; }

    processedLines.push(line);
  }

  if (inTable) { tableHtml += `</tbody></table></div>`; processedLines.push(tableHtml); }
  if (inUl) processedLines.push("</ul>");
  if (inOl) processedLines.push("</ol>");

  return processedLines.join("\n");
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ─── GTM Plan Content ───────────────────────────────────────────────────────

const SEP_2026_MARKDOWN = `# Nemo12 · Kế hoạch truyền thông tháng 9/2026

**Trạng thái:** Working Plan
**Thời gian:** 01/09/2026–30/09/2026
**Core promise:** **Một đứa trẻ không thể được đồng hành đúng nếu người lớn chưa thật sự hiểu nó.**

## 1. Mục tiêu

Tháng 9 là giai đoạn xNội dung sử dụng các tư liệu có sẵn từ lớp Sư Tử Con AI Teen, gồm website, sản phẩm, prompt, 4F Reflection, quan sát mentor và các câu chuyện phụ huynh core từ Marlins Workshop.

## 2. Kiến trúc nội dung

### Hai key concepts xuyên suốt

#### Student Portrait

Không nhìn trẻ chỉ qua điểm số, thành tích hoặc một hành vi đơn lẻ, mà quan sát cách con suy nghĩ, học tập, phản ứng, giao tiếp, tự chủ và phát triển theo thời gian.

#### BEM Model

Hành vi của trẻ chịu ảnh hưởng bởi Mental Model và những trải nghiệm trước đó. Trước khi kết luận con "lười", "thiếu tập trung" hoặc "không có năng lực", người lớn cần xem lại con đang hiểu gì, từng trải qua điều gì và môi trường hiện tại đang khuyến khích hay cản trở hành vi nào.

### Các framework hỗ trợ

| Framework | Vai trò |
|---|---|
| **IB** | Inquiry, reflection, learner agency và tôn trọng tiếng nói của người học |
| **Building21** | Competency, learner model, learning experience và evidence-based judgment |
| **NVC** | Công cụ giao tiếp để duy trì trust, agency và psychological safety |
| **Core Parents** | Bằng chứng sống về sự thay đổi trong cách phụ huynh hiểu và đồng hành cùng con |

## 3. Chuỗi Online Workshop

**Thời gian:** 15h00–17h00 Chủ Nhật hàng tuần, qua Zoom
**Host:** Anh Đắc
**Co-host:** Mentor Hồng

| Ngày | Tập | Essential question | Nội dung |
|---|---|---|---|
| **06/09** | **See the Whole Child** | Ngoài điểm số, ta thực sự biết gì về con? | Student Portrait và giới hạn của việc chỉ nhìn con qua KPI |
| **13/09** | **Decode the Behaviour** | Vì sao con biết nhưng vẫn không làm? | Dùng BEM để đọc lại một hành vi thường bị gắn nhãn |
| **20/09** | **Talk Without Breaking Trust** | Làm thế nào để góp ý mà con vẫn muốn chia sẻ? | Dùng NVC để bảo vệ psychological safety và learner agency |
| **27/09** | **From Portrait to Action** | Hiểu con rồi thì người lớn nên làm gì tiếp? | Chuyển Student Portrait thành một learning experiment trong gia đình |

### Core parents

Core parent không xuất hiện như một testimonial quảng cáo. Họ chia sẻ quá trình thay đổi thật:

1. Trước đây gia đình từng nhìn hoặc hiểu sai điều gì về con?
2. Điều gì khiến bố mẹ bắt đầu nhìn con khác đi?
3. Gia đình đã thay đổi hành động hoặc cách giao tiếp nào?
4. Có bằng chứng nhỏ nào cho thấy sự thay đổi?

| Workshop | Vai trò của core parent |
|---|---|
| **06/09** | Chia sẻ một ngộ nhận ban đầu về năng lực của con |
| **13/09** | Kể về một hành vi từng bị gắn nhãn "lười" hoặc "thiếu cố gắng" |
| **20/09** | Chia sẻ một cuộc trò chuyện gia đình đã thay đổi |
| **27/09** | Kể về learning experiment gia đình đã thử và kết quả |

Success case không nhất thiết là điểm số tăng. Có thể là con chủ động chia sẻ hơn, bố mẹ bớt gắn nhãn, con kiên trì hơn hoặc gia đình biết khi nào nên hỗ trợ và khi nào nên lùi lại.

## 4. Vai trò của hai Facebook

### Facebook Hồng — Mentor Reflection

Facebook Hồng là nhật ký nghề nghiệp công khai của mentor. Mục tiêu là để phụ huynh tự cảm nhận:

\> "Mentor này quan sát các con rất kỹ, luôn suy nghĩ về cách dạy và thật sự hết mình vì sự tiến bộ của từng đứa trẻ."

Hồng tập trung vào:

- Hồng học được gì từ học sinh.
- Hồng quan sát thấy gì qua website, sản phẩm và quá trình làm bài.
- Một lần Hồng thay đổi cách hỗ trợ một học sinh.
- Vì sao Hồng chọn đặt câu hỏi thay vì đưa đáp án.
- Sự tiến bộ của học sinh dù sản phẩm cuối chưa hoàn hảo.
- Reflection sau buổi học, Workshop và Trial Class.

**Nhịp đăng:** Thứ 3 là reflection từ quá trình dạy học; Thứ 6 là reflection từ một website, sản phẩm hoặc evidence cụ thể.

**Công thức:**

\> Khoảnh khắc thật → Điều Hồng quan sát được → Điều Hồng suy nghĩ lại → Bài học về việc dạy/học → Website hoặc evidence của học sinh.

### Facebook anh Đắc — Parent Perspective

Anh Đắc diễn giải lại các insight từ góc nhìn của một phụ huynh:

- Nỗi lo quen thuộc của phụ huynh.
- Cách phụ huynh có thể đang hiểu sai hành vi của con.
- Câu chuyện của core parent.
- Những thay đổi trong cách gia đình giao tiếp và đồng hành.
- Các câu hỏi lớn về việc chọn môi trường học tập cho con.

**Nhịp đăng:** Đăng sau bài Hồng khoảng 12–24 giờ, chủ yếu vào Thứ 4 và Thứ 7.

**Công thức:**

\> Nỗi lo của phụ huynh → Một cách nhìn khác → Câu chuyện thật → Điều gia đình đã thay đổi → Câu hỏi mở.

Hồng cung cấp chiều sâu và bằng chứng từ lớp học; anh Đắc chuyển hóa thành câu hỏi và suy ngẫm của phụ huynh.

## 5. Lịch truyền thông tháng 9/2026

| Ngày | Facebook Hồng | Facebook anh Đắc | Hoạt động |
|---|---|---|---|
| **01/09** | Website AI Teen cho thấy nhiều hơn điểm số | — | — |
| **02/09** | — | Điểm số không đủ để hiểu con | — |
| **04/09** | Hồng học được gì từ sản phẩm của các bé | — | — |
| **05/09** | — | Câu chuyện phụ huynh trước Workshop | — |
| **06/09** | — | — | Marlins Workshop 1 |
| **08/09** | Một bé biết nhưng vẫn dừng ở phiên bản đầu | — | — |
| **09/09** | — | Con lười hay trải nghiệm học tập chưa phù hợp? | — |
| **11/09** | Một lần Hồng thay đổi cách hỗ trợ học sinh | — | — |
| **12/09** | — | Core parent kể về một hành vi từng khiến gia đình lo lắng | — |
| **13/09** | — | — | Marlins Workshop 2 |
| **15/09** | Khi học sinh bắt đầu chia sẻ sau khi được lắng nghe | — | — |
| **16/09** | — | Vì sao lời khuyên đúng vẫn khiến con im lặng? | — |
| **18/09** | Hồng học được gì về psychological safety | — | — |
| **19/09** | — | Câu chuyện gia đình áp dụng NVC | — |
| **20/09** | — | — | Marlins Workshop 3 |
| **22/09** | Một website chưa hoàn hảo nhưng cho thấy sự phát triển | — | — |
| **23/09** | — | Một môi trường học tốt cần giúp phụ huynh nhìn thấy gì? | — |
| **25/09** | Cách Hồng thiết kế trải nghiệm khác nhau cho từng bé | — | — |
| **26/09** | — | Core parent chia sẻ thay đổi sau khi hiểu lại con | — |
| **27/09** | — | — | Marlins Workshop 4 |
| **29/09** | Hồng tổng kết một tháng học được gì từ các con | — | — |
| **30/09** | — | Anh Đắc tổng kết hành trình nhìn con khác đi | — |

## 6. Lịch vận hành hàng tuần

| Ngày | Công việc | Người phụ trách |
|---|---|---|
| Thứ 2 | Chọn case học sinh, sản phẩm hoặc phụ huynh để khai thác | Hồng + Mentor |
| Thứ 3 | Đăng bài Hồng; broadcast case trên Zalo Public | Hồng/Ops |
| Thứ 4 | Đăng bài diễn giải trên Facebook anh Đắc | Anh Đắc |
| Thứ 6 | Đăng reflection thứ hai của Hồng | Hồng |
| Thứ 7 | Đăng bài core parent hoặc bài phụ huynh | Anh Đắc |
| Chủ Nhật | Tổ chức Marlins Workshop (15h00 - 17h00); mở Reflection Zalo; kết nối Private Group | Anh Đắc + Mentor/Ops |

## 7. Cơ chế đo lường

### Gắn nguồn cho từng phụ huynh

| Trường | Ví dụ |
|---|---|
| **Source** | Facebook Hồng / Facebook anh Đắc / Core Parent / Zalo / Referral |
| **Event** | Marlins Workshop / Trial Class |
| **Concept** | Student Portrait / BEM / NVC |
| **Parent Stage** | Chưa biết / Đang quan tâm / Đã tham dự / Đã trải nghiệm / Đã có Fit Judgment |
| **Key Pain** | Điểm số / Hành vi / Giao tiếp / Chọn môi trường học |

### Weekly dashboard

Mỗi tuần tổng hợp:

- Bài nào tạo ra nhiều phản hồi có chiều sâu nhất.
- Concept nào khiến phụ huynh tự nhận ra vấn đề của gia đình.
- Phụ huynh đang thay đổi cách nói về con như thế nào.
- Câu chuyện core parent nào có sức thuyết phục nhất.
- Bao nhiêu phụ huynh quay lại hoạt động tiếp theo.
- Bao nhiêu phụ huynh chuyển từ quan tâm sang Trial.

Mỗi tương tác quan trọng cần có qualitative note:

\> "Phụ huynh nhận ra điều gì sau bài viết hoặc sự kiện này?"

## 8. Ba metrics quan trọng nhất cho mỗi sự kiện

### Trial Class

| Metric | Cách đo |
|---|---|
| **Completion Rate** | Tỷ lệ học sinh tham gia đủ 2 buổi Trial |
| **Evidence Quality** | Tỷ lệ học sinh có đủ log, sản phẩm và quan sát mentor để tạo Trial Evidence |
| **Parent Fit Clarity** | Mức độ phụ huynh hiểu điểm mạnh, điểm cần hỗ trợ và mức độ phù hợp của con sau tư vấn |

Trial tốt giúp gia đình hiểu con rõ hơn, kể cả khi kết luận là chưa nên học ngay.

### Online Marlins Workshop

| Metric | Cách đo |
|---|---|
| **Qualified Attendance Rate** | Tỷ lệ phụ huynh phù hợp thực sự tham dự trên tổng số đăng ký |
| **Meaningful Participation** | Số phụ huynh đặt câu hỏi, chia sẻ Fishbowl hoặc hoàn thành reflection |
| **Perspective Shift** | Mức độ thay đổi trong cách phụ huynh nhìn một hành vi của con trước và sau Workshop |

Câu hỏi đo Perspective Shift:

\> "Sau buổi này, anh/chị đang nhìn hành vi đó của con khác đi như thế nào?"

## 9. Definition of Done

Chiến dịch tháng 9 đạt chuẩn khi:

- Có đủ 4 Marlins Workshop theo cùng một series.
- Facebook Hồng duy trì reflection đều đặn mỗi tuần.
- Facebook anh Đắc đăng sau và phát triển được góc nhìn phụ huynh riêng.
- Mỗi Workshop có ít nhất một case thật hoặc câu chuyện core parent.
- Trial Class có đủ Trial Evidence và Fit Judgment trung thực.
- Mỗi phụ huynh có Source, Event, Concept và Parent Stage.
- Cuối tháng có báo cáo content performance, event performance và qualitative insight.

## 10. Tuyên ngôn xuyên suốt

\> **Nemo12 không bắt đầu bằng câu hỏi "Con đạt bao nhiêu điểm?", mà bắt đầu bằng câu hỏi "Chúng ta đã thực sự hiểu con chưa?"**
`;

// ─── Public Render Function ─────────────────────────────────────────────────

export function renderGtmPlan(slug, onNavigate) {
  const container = document.createElement("div");
  container.className = "requirements-page-wrapper";

  let docContent = "";

  if (slug === "/gtm-plan/sep-2026") {
    docContent = SEP_2026_MARKDOWN;
  } else {
    // Default to sep-2026
    docContent = SEP_2026_MARKDOWN;
  }

  container.innerHTML = parseMarkdownToHtml(docContent);
  return container;
}

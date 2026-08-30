import { SITEMAP_CONFIG } from "../data.js";

/**
 * Universal robust markdown-to-HTML parser for Requirements and Documents
 */
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
  html = html.replace(/```markdown([\s\S]*?)```/g, (match, p1) => {
    return `
      <div style="position:relative; margin: 16px 0;">
        <div style="display:flex; justify-content:space-between; align-items:center; background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-bottom: none; border-radius: var(--radius-md) var(--radius-md) 0 0; padding: 8px 14px; font-size: 12px; font-weight: 700; color: var(--text-muted);">
          <span>MARKDOWN BOILERPLATE</span>
          <button class="btn btn-secondary btn-sm" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText); this.innerText='Copied!'; setTimeout(()=>this.innerText='Copy Code', 2000);" style="padding: 3px 8px; font-size: 11px;">Copy Code</button>
        </div>
        <pre style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: 0 0 var(--radius-md) var(--radius-md); padding: var(--space-4); font-family: monospace; font-size: 12.5px; line-height: 1.6; overflow-x: auto; margin: 0; white-space: pre-wrap;"><code>${escapeHtml(p1.trim())}</code></pre>
      </div>
    `;
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
  html = html.replace(/^\> (.*$)/gim, `<div style="background: var(--bg-surface-subtle); border-left: 3px solid var(--color-primary-600); margin: 12px 0; padding: 12px 18px; border-radius: 0 var(--radius-md) var(--radius-md) 0; font-size: 13.5px; color: var(--text-secondary); line-height: 1.6;">$1</div>`);

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

export function renderRequirements(slug, onNavigate) {
  const container = document.createElement("div");
  container.className = "requirements-page-wrapper";

  // Import directly from pre-parsed documents if available or parse dynamically
  let docContent = "";
  
  if (slug === "/requirements/topic-library" || slug === "/requirements/pedagogy-standards") {
    docContent = A9_MARKDOWN;
  } else if (slug === "/requirements/playbooks-template" || slug === "/requirements/playbooks-framework") {
    docContent = A6_MARKDOWN;
  } else if (slug === "/requirements/content-standards") {
    docContent = A7_MARKDOWN;
  } else if (slug === "/requirements/dar-template") {
    docContent = A8_MARKDOWN;
  } else if (slug === "/requirements/ui-design-system") {
    docContent = B1_MARKDOWN;
  } else if (slug === "/requirements/tech-stack") {
    docContent = B2_MARKDOWN;
  } else {
    docContent = A9_MARKDOWN;
  }

  container.innerHTML = parseMarkdownToHtml(docContent);
  return container;
}

const A9_MARKDOWN = `# A9 · Topic Library & Pedagogy Standards

> **Hệ thống từ điển sư phạm cốt lõi và 7 lăng kính tranh biện phục vụ khai phóng nhận thức giáo dục cho phụ huynh Nemo12 & Marlins Care**  
> **Áp dụng cho:** Toàn bộ chuỗi chuyên đề Marlins Workshop (Online Zoom tối Thứ 5), Fishbowl Marlins Day (Offline Chủ Nhật), Kênh đúc kết Mentor và Cổng tự học Family Portal.

---

## 1. Mục Đích & Nguyên Tắc Vận Hành (Purpose & Core Principles)

1. **Chuẩn mực hóa Tri thức Sư phạm (Canonical Pedagogy):** Cung cấp nguồn tài nguyên tri thức duy nhất (Single Source of Truth) về khoa học nhận thức, mô hình người học và thiết kế môi trường sống cho toàn bộ đội ngũ Host, Mentor và phụ huynh.
2. **Mô hình 2 Lớp (Two-Layer Architecture):**
   * **Lớp Dẫn Nhập (Argument Angles):** 7 Luận điểm tranh luận sắc bén dùng để kích hoạt tư duy, bóc tách ngộ nhận bề mặt của cha mẹ.
   * **Lớp Bản Chất (Core Concepts):** Kho tàng khái niệm chuẩn mực quốc tế giải thích tận gốc cơ chế học tập và đưa ra giải pháp thực hành.
3. **Ngôn ngữ bình dân, chuẩn xác bản chất (Democratized Pedagogy):** Chuyển hóa các thuật ngữ học thuật phức tạp thành các ẩn dụ đời sống và công cụ trực quan dễ thực hành tại gia đình.

---

## 2. Phần A: Bảy Lăng Kính Tranh Biện (7 Provocative Argument Angles)

*Bảng đối chiếu 7 luận điểm sắc bén dùng làm chủ đề dẫn dắt trong các phiên Workshop và Marlins Day:*

| # | Luận Điểm Dẫn Dắt | Ngộ Nhận Bề Mặt Của Phụ Huynh | Sự Thật Bản Chất Sư Phạm | Concepts Ánh Xạ Để Đào Sâu |
| :---: | :--- | :--- | :--- | :--- |
| **1** | **Điểm cao ≠ Hiểu sâu** | Nghĩ rằng con được điểm 9, 10 trên lớp là đã thực sự làm chủ kiến thức. | 4 cách đạt điểm cao mà rỗng tuếch: học vẹt, học tủ, luyện mẹo, áp lực gia đình. Điểm số chỉ phản ánh 1 khoảnh khắc, không đo được năng lực tư duy. | \`Bloom's Taxonomy\`, \`Mastery Level\`, \`Worked Examples\` |
| **2** | **Nhiều bài ≠ Học tốt** | Càng ép con làm nhiều đề, cày nhiều phiếu bài tập thì con càng học giỏi. | Làm đến bài thứ 20 cùng một dạng chỉ tạo phản xạ sao chép máy móc, gây kiệt quệ nhận thức và triệt tiêu khả năng tự đào sâu bản chất. | \`Spaced Practice\`, \`Retrieval Practice\`, \`Cognitive Load\` |
| **3** | **Test không phải để phán xét learner** | Coi bài kiểm tra là "bản án" để kết luận con lười biếng, tiếp thu chậm hay kém cỏi. | Một bài test là câu hỏi dành cho hệ thống dạy học (*"Cách tiếp cận đã trúng điểm mù của con chưa?"*), không phải công cụ để định tội đứa trẻ. | \`Assessment ≠ Learning\`, \`Assessment Experience\` |
| **4** | **Mọi learner model đều có uncertainty** | Tin vào các bài trắc nghiệm tính cách/sinh trắc phán chắc nịch tương lai của con. | Con người luôn vận động và biến đổi; một hệ thống/người thầy khoa học luôn tôn trọng "khoảng bất định" để kiên nhẫn quan sát và đồng hành. | \`Learner Model\`, \`Evidence\`, \`Readiness\` |
| **5** | **Không phải cuộc thi nào cũng đáng tham gia** | Ép con sưu tập thật nhiều huy chương/chứng chỉ phong trào để làm đẹp hồ sơ. | Mỗi kỳ thi đều trả giá đắt bằng thời gian và áp lực tâm lý. Cha mẹ cần tính toán ROI thực chất: *"Kỳ thi này bồi đắp gì cho năng lực tự học của con?"*. | \`Competency Framework\`, \`Building 21\` |
| **6** | **Mục tiêu cuối cùng không chỉ là thi đỗ** | Xem việc đỗ vào trường Chuyên/Chọn là đích đến hoàn tất của hành trình nuôi dạy. | Đỗ chuyên chỉ là một cánh cửa mở ra; nếu không chuẩn bị năng lực tự học và sức khỏe tinh thần, con rất dễ rơi vào khủng hoảng sau cánh cửa đó. | \`Student Portrait\`, \`Pedagogy\`, \`BEM Model\` |
| **7** | **Student Portrait quan trọng hơn danh sách KPI** | Đánh giá sự trưởng thành của con hoàn toàn bằng bảng điểm và thứ hạng lớp học. | Cái gì đo được sẽ bị tối ưu hóa phiến diện (Goodhart's Law). Cha mẹ cần nhìn bức chân dung phẩm chất toàn diện thay vì danh sách chỉ số rời rạc. | \`Student Portrait\`, \`Mental Model\`, \`Evidence\` |

---

## 3. Phần B: Thư Viện Khái Niệm Cốt Lõi (Core Concepts Library)

### 3.1 Trụ Cột 1: Learning Science (Khoa Học & Kỹ Thuật Học)
*Giải mã cơ chế tiếp thu của não bộ và các phương pháp sư phạm thực chứng:*

1. **Learning Experience vs Assessment Experience:**
   * *Learning Experience (Trải nghiệm học tập):* Không gian an toàn để tò mò, khám phá, thử nghiệm và được phép phạm sai lầm.
   * *Assessment Experience (Trải nghiệm đánh giá):* Hoạt động thu thập dữ liệu về điểm nghẽn nhận thức mà không tạo áp lực trừng phạt.
   * *Nguyên lý bất biến:* **Assessment ≠ Learning** (Đo lường chỉ là phép đo, không thể thay thế cho quá trình chuyển hóa tri thức).
2. **Scaffolding (Bắc giàn giáo sư phạm):**
   * Kỹ thuật người lớn hỗ trợ đúng mức tại Vùng phát triển gần nhất (Zone of Proximal Development - ZPD), sau đó từng bước "rút giàn giáo" để đứa trẻ tự đứng vững trên đôi chân của mình.
3. **Retrieval Practice (Truy xuất chủ động / Active Recall):**
   * Việc đọc đi đọc lại tài liệu thụ động chỉ tạo ảo tưởng ghi nhớ; chủ động tự kiểm tra bằng cách nhớ lại và giải thích khái niệm giúp kiến thức khắc sâu vào trí nhớ dài hạn gấp 3 lần.
4. **Spaced Practice (Luyện tập ngắt quãng / Giãn cách):**
   * Phân bổ các phiên học ngắn cách nhau vài ngày thay vì dồn toàn bộ thời gian cày cuốc trong một đêm, giúp não bộ có thời gian củng cố các liên kết thần kinh.
5. **Worked Examples & Cognitive Load (Bài toán mẫu & Giảm tải nhận thức):**
   * Khi tiếp cận dạng bài phức tạp, phân tích chi tiết các bước giải mẫu giúp giải phóng bộ nhớ làm việc (Working Memory), ngăn ngừa trạng thái quá tải nhận thức.
6. **Mastery Level (Học kỹ tới đâu):**
   * Tiêu chuẩn làm chủ tri thức bản chất: Đạt đến mức độ hiểu sâu nguyên lý gốc rễ trước khi chuyển sang các chủ đề nâng cao kế tiếp.
7. **Bloom's Taxonomy (Thang đo cấp độ tư duy 6 bậc):**
   * *Bậc 1–3 (Cơ bản):* Nhớ (Remember) ➔ Hiểu (Understand) ➔ Vận dụng (Apply công thức có sẵn).
   * *Bậc 4–6 (Bản chất):* Phân tích (Analyze) ➔ Đánh giá (Evaluate) ➔ Sáng tạo (Create sản phẩm công nghệ/AI mới).
8. **Curriculum Architecture (Kiến trúc chương trình học):**
   * \`Knowledge Node\`: Điểm nút tri thức cấu thành mạng lưới kiến thức (Knowledge Graph).
   * \`Learning Package\`, \`Module & Unit\`, \`Ngữ liệu\`: Đơn vị đóng gói tài liệu, bài tập và dự án thực tế.

---

### 3.2 Trụ Cột 2: Learner Modeling (Mô Hình Hóa Người Học & Dữ Liệu Thực Chứng)
*Cách thức hệ thống và Mentor thu thập, giải mã và khắc họa học sinh thông qua dữ liệu sống:*

1. **Learner Model & Uncertainty:**
   * Hồ sơ số hóa động mô tả sự tiến bộ của con (mắt xích đã vững, điểm nghẽn kiến thức, tốc độ phản xạ). Hệ thống luôn giữ khoảng bất định (Uncertainty) để tránh dán nhãn định kiến lên học sinh.
2. **Student Portrait (Chân dung học sinh độc bản):**
   * Bức chân dung đa chiều khắc họa: Phong cách tư duy, mức độ kiên trì vượt khó, sở thích công nghệ, thế mạnh độc đáo và khát vọng tự thân của con.
3. **Mental Model (Mô hình tư duy nội tại):**
   * Hệ thống niềm tin và lăng kính nhìn nhận thế giới ẩn sâu trong tâm trí trẻ, chi phối cách con phản ứng khi đối mặt với thất bại hay bài toán khó.
4. **Evidence-Based Learning (Học tập dựa trên bằng chứng):**
   * Đánh giá học sinh dựa trên sản phẩm thực tế con làm ra (Dự án website, công cụ AI, nhật ký phản tư) thay vì dựa trên cảm tính hay lời khen xã giao.
5. **Readiness & Recommendation (Độ sẵn sàng & Đề xuất cá nhân hóa):**
   * Đánh giá chính xác mức độ sẵn sàng về mặt tâm lý và học thuật để đưa ra khuyến nghị lộ trình phù hợp nhất (Fit Judgment).

---

### 3.3 Trụ Cột 3: Environment Design (Thiết Kế Môi Trường & Giao Tiếp Gia Đình)
*Khung tư duy kiến tạo không gian sống, thiết lập văn hóa gia đình và phương pháp giao tiếp thấu cảm:*

1. **BEM Model (Behavior – Experience – Mental Model):**
   * Cơ chế hình thành hành vi: **Mental Model (Mô hình tư duy)** ➔ **Experience (Trải nghiệm cảm xúc)** ➔ **Behavior (Hành vi bề mặt con bộc lộ)**.
   * *Ứng dụng:* Muốn sửa hành vi "lười học / nghiện game" của con, bố mẹ không thể chỉ cấm đoán bên ngoài mà phải giải quyết từ Trải nghiệm bất lực và Mô hình tư duy sợ thất bại bên trong.
2. **NVC (Nonviolent Communication - Giao Tiếp Trắc Ẩn):**
   * Bộ công cụ 4 bước đối thoại với con:
     * **1. Facts (Sự thật khách quan):** *"Bố thấy con ngồi vào bàn học 45 phút nhưng chưa bắt đầu làm bài..."* (Không phán xét).
     * **2. Feelings (Cảm xúc chân thật):** *"...bố cảm thấy lo lắng và băn khoăn..."* (Không đổ lỗi).
     * **3. Needs (Nhu cầu thực sự):** *"...vì bố rất mong con giữ được sự tự tin và không bị ngợp bài vở..."*
     * **4. Requests (Đề xuất cụ thể):** *"Con có thể chia sẻ cho bố biết con đang kẹt ở câu nào để hai bố con mình cùng xem không?"*
3. **Building 21 (Mô hình môi trường giáo dục đổi mới):**
   * Triết lý thiết kế môi trường giáo dục dựa trên năng lực (Competency-Based), kết nối trực tiếp bài học với đời sống thực tế, trao quyền tự chủ và tôn trọng nhịp độ phát triển riêng của từng học sinh.
4. **Competency Framework (Khung năng lực thực tế):**
   * Bộ tiêu chuẩn đo lường năng lực giải quyết vấn đề, tư duy phản biện, khả năng tự học và ứng dụng công nghệ AI vào đời sống thực.
5. **Psychological Safety (Vùng an toàn tâm lý tại gia đình):**
   * Không gian gia đình nơi đứa trẻ cảm thấy an toàn tuyệt đối khi nói lên suy nghĩ thật, dám đem bài kiểm tra điểm kém về chia sẻ với bố mẹ mà không sợ bị mắng mỏ hay so sánh với "con nhà người ta".

---

## 4. Hướng Dẫn Vận Dụng Trong Thực Tế (Application Playbook Linkage)

| Điểm Chạm / Playbook | Cách Thức Sử Dụng Topic Library |
| :--- | :--- |
| **Marlins Workshop (\`P03\`)** | Mỗi tối Thứ 5 chọn **1 Lăng kính tranh biện trong Phần A** làm chủ đề thảo luận, sau đó kết nối sang **2–3 Concepts trong Phần B** để phụ huynh thực hành trong Breakout Room 4F. |
| **Marlins Day (\`P04\`)** | Dùng các Lăng kính tranh biện làm câu hỏi mồi trong phiên **Fishbowl Dialogue**, sau đó Mentor demo giải pháp bằng chứng thực tế trên màn hình Nemo12. |
| **Social Media (\`P01\`)** | Mentor trích xuất 1 Concept sâu sắc (như Scaffolding hay BEM Model) kết hợp với 1 câu chuyện thật tại lớp Sư Tử Con để viết bài phản tư theo khung \`T-A-C-E\`. |
| **Family Meeting (\`P07\`)** | Mentor áp dụng mô hình \`BEM\` và công cụ \`NVC\` để giải mã bối cảnh gia đình và thiết lập cam kết đồng hành 3 bên. |
`;

const A6_MARKDOWN = `# A6 · Playbooks Standard Template & Boilerplate

> **Bộ khung mẫu chuẩn mực để biên soạn, cập nhật và ban hành Playbook tác nghiệp**  
> **Áp dụng cho:** Toàn bộ 8 Playbooks hiện tại (\`P01\` – \`P08\`) và các Playbooks mới trong tương lai.

---

## 1. Nguyên Tắc & Quy Chuẩn Cấu Trúc (Core Principles)

1. **3 Hình thái Phân loại Playbook (3 Tiers & Archetypes):**
   * **Tier 1: High-Touch (Archetype C):** Tương tác trực tiếp, đối thoại sâu (\`Marlins Workshop\`, \`Marlins Day\`, \`Family Meeting\`). Bắt buộc có \`Session Agenda\` và \`Stakeholder Mapping\`.
   * **Tier 2: Routine & Hybrid (Archetype B):** Vận hành lớp học tuần hoàn kết hợp máy và người (\`Trial Class\`, \`Live Class\`). Không có \`Session Agenda\`.
   * **Tier 3: Outreach & Policy (Archetype A):** Kênh mạng xã hội, cộng đồng và chính sách (\`Social Media\`, \`Community\`, \`Referrals Program\`). Không có \`Session Agenda\`.
2. **Quy tắc độ dài & định dạng tiêu đề (Lean Section Title Rule):** Tiêu đề Section (\`##\`, \`###\`) bắt buộc là **Pure English, Title Case, ≤ 3 words, TUYỆT ĐỐI KHÔNG CHÈN EMOJI** theo [A7_Content_Standards.md](#/requirements/content-standards).
3. **Thứ tự khối nội dung bất biến:** Mọi Playbook đều kết thúc bằng \`Decision Logs\` và cuối cùng là \`FAQ\`.
4. **Chuẩn hoàn thành bắt buộc (Definition of Done):** Mọi hành động bắt buộc phải đạt tối thiểu **Level 3 (L3 DoD ⭐)** trong bảng Rubric.

---

## 2. Ma Trận Cấu Trúc Khối Nội Dung & Sub-Navigation (Structure Matrix)

| Cấu Trúc Section (Pure English ≤ 3 words) | Tier 1: High-Touch (\`P03, P04, P07\`) | Tier 2: Routine (\`P05, P06\`) | Tier 3: Outreach (\`P01, P02, P08\`) | Ghi chú vai trò |
| :--- | :---: | :---: | :---: | :--- |
| **\`Overview\`** *(Metadata Header)* | Bắt buộc | Bắt buộc | Bắt buộc | Mục tiêu, điều kiện kích hoạt, thời lượng, chủ sở hữu, đầu ra. |
| **\`Stakeholder Mapping\`** | Bắt buộc | Bắt buộc | Tùy chọn | Bản đồ tương tác và kỳ vọng 3 bên: Phụ huynh – Học sinh – Mentor. |
| **\`Session Agenda\`** | Bắt buộc | Không áp dụng | Không áp dụng | Khung thời gian & kịch bản phiên làm việc / buổi gặp trực tiếp. |
| **\`SOP Steps\`** | Bắt buộc | Bắt buộc | Bắt buộc | Quy trình tác nghiệp chi tiết (Pre-Action ➔ In-Action ➔ Post-Action). |
| **\`Do's & Don'ts\`** | Bắt buộc | Bắt buộc | Bắt buộc | Bảng chuẩn mực hành vi nên làm và điều cấm kỵ. |
| **\`Assessment Rubrics\`** | Bắt buộc | Bắt buộc | Bắt buộc | Thang đo chất lượng L1 – L5 (L3 DoD ⭐). |
| **\`Decision Logs\`** | Bắt buộc | Bắt buộc | Bắt buộc | Các quyết định kiến trúc CMMI DAR giải trình và bảo vệ giải pháp. |
| **\`FAQ\`** | Bắt buộc | Bắt buộc | Bắt buộc | Tình huống thực tế, câu hỏi thường gặp và kịch bản xử lý nhanh. |

---

## 3. Khung Mẫu Biên Soạn Playbook Chuẩn (Playbook Boilerplate Markdown)

*Sao chép toàn bộ khối mã dưới đây khi khởi tạo hoặc chuẩn hóa một Playbook mới:*

\`\`\`markdown
---
id: PXX-PLAYBOOK-SLUG
title: "PXX · [Tên Playbook Bằng Tiếng Anh] — Nemo12 & Marlins Care"
status: approved
version: "1.0.0"
date: "YYYY-MM-DD"
authors: ["Marlins Care Ops", "Nemo12 Core Team"]
domain: "Operational Playbooks / [Acquisition | Learning Experience]"
relates_to:
  - "A1_Sitemap.md"
  - "A6_Playbooks_Template.md"
  - "A7_Content_Standards.md"
---

# PXX · [Tên Playbook]

> **Mô tả ngắn gọn mục đích và giá trị cốt lõi của Playbook trong 1–2 câu.**  
> **Triết lý:** *"Automate the evidence. Humanize the meaning."*

---

## Metadata Header
* **Objective:** [Mục tiêu cụ thể cần đạt được]
* **Trigger:** [Tín hiệu hoặc sự kiện kích hoạt quy trình]
* **Standard Time:** [Thời lượng tiêu chuẩn, ví dụ: ≤ 15 phút hoặc 60 phút gặp trực tiếp]
* **Target Audience:** [Phụ huynh, Học sinh hoặc cả Gia đình]
* **Owner:** [Mentor | Marlins Host | System]
* **Output:** [Bản ghi Dory Notes | Báo cáo tiến độ | Family Notes 6 trục]

---

<details open>
<summary><h3>Stakeholder Mapping</h3></summary>

| Bên Liên Quan | Mục Tiêu & Trách Nhiệm | Kỳ Vọng Đạt Được |
| :--- | :--- | :--- |
| **Phụ huynh (Parent)** | [Bối cảnh & mong đợi của gia đình] | [Sự an tâm, thấu hiểu, tự hào] |
| **Học sinh (Student)** | [Tâm lý & rào cản học tập] | [Được tôn trọng, tạo động lực] |
| **Mentor / Host** | [Quan sát, thấu cảm & dẫn dắt] | [Xây dựng niềm tin mối quan hệ] |

</details>

---

<details open>
<summary><h3>Session Agenda</h3></summary>

*(Chỉ áp dụng cho Tier 1: Marlins Workshop, Marlins Day, Family Meeting)*

| Thời Lượng | Giai Đoạn (Stage) | Hoạt Động Cốt Lõi | Người Phụ Trách |
| :---: | :--- | :--- | :--- |
| **00 - 10m** | **Warm-up & Connect** | Phá băng, lắng nghe bối cảnh gia đình | Host / Mentor |
| **10 - 40m** | **Core Discussion** | Phân tích bằng chứng học tập & tháo gỡ điểm nghẽn | Mentor |
| **40 - 60m** | **Action Alignment** | Thống nhất 1-2 hành động đồng hành & cam kết | Cả hai bên |

</details>

---

<details open>
<summary><h3>SOP Steps</h3></summary>

* **Bước 1: Chuẩn bị (Pre-Action):** [Checklist dữ liệu, log hệ thống cần xem trước]
* **Bước 2: Thực thi (In-Action):** [Các bước tương tác cụ thể, lời thoại mẫu gợi ý]
* **Bước 3: Tổng kết & Bàn giao (Post-Action):** [Ghi nhận Dory Notes, lưu trữ bằng chứng]

</details>

---

<details open>
<summary><h3>Do's & Don'ts</h3></summary>

| Nên Làm (Best Practices / Do's) | Cấm Kỵ (Avoid / Don'ts) |
| :--- | :--- |
| ✅ Lắng nghe 70%, chỉ nói 30% khi phụ huynh chia sẻ. | ❌ Tranh cãi hoặc bác bỏ cảm xúc của phụ huynh. |
| ✅ Dẫn chứng bằng hành vi cụ thể của con. | ❌ Dùng nhận xét chung chung, sáo rỗng vô hồn. |
| ✅ Đưa ra giải pháp hành động khả thi tại nhà. | ❌ Ép buộc hoặc gây thêm áp lực điểm số. |

</details>

---

<details open>
<summary><h3>Assessment Rubrics</h3></summary>

| Tiêu Chí Đánh Giá | L1 (Kém) | L2 (Cơ Bản) | L3 (ĐẠT CHUẨN DoD ⭐) | L4 (Nâng Cao) | L5 (Xuất Sắc) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Execution** | Không làm / Quá hạn | Máy móc, trễ hạn | Đúng quy trình, đúng hạn ≤ 15m | Xử lý linh hoạt, chu đáo | Mẫu mực, tối ưu hóa |
| **2. Empathy & Insight** | Nhận xét cảm tính | Đọc lại dữ liệu máy | Thu thập đúng insight 6 trục | Thấu cảm bối cảnh sâu | Chuyển hóa niềm tin |
| **3. Parent Value** | Gây thêm lo âu | Giải đáp hời hợt | Giải quyết đúng JTBD phụ huynh | Gia đình tin tưởng cao | Trở thành đại sứ tự nguyện |

</details>

---

<details open>
<summary><h3>Decision Logs</h3></summary>

Tổng hợp các quyết định kiến trúc CMMI DAR bảo vệ cho phương pháp tiếp cận của Playbook:

#### 📌 DAR XX: [Tên Quyết Định Cốt Lõi]
* **Bối cảnh & Trade-offs:** [Xung đột mục tiêu giữa tốc độ và chiều sâu]
* **Ma trận đánh giá:** [Phương án được duyệt vs Các phương án bị loại bỏ]
* **Quyết định chốt:** [Quy tắc bất biến được áp dụng]

</details>

---

<details open>
<summary><h3>FAQ</h3></summary>

| Tình Huống Thực Tế (Question / Scenario) | Hướng Xử Lý Chuẩn (Actionable Guidance) |
| :--- | :--- |
| **Q1:** [Tình huống phát sinh thường gặp] | **A1:** [Cách tháo gỡ & giải đáp thấu cảm] |
| **Q2:** [Phụ huynh thắc mắc hoặc có phản hồi nhạy cảm] | **A2:** [Quy trình chuyển tiếp hoặc cách hồi đáp nhanh] |

</details>
\`\`\`

---

## 4. Quy Trình Ban Hành & Nghiệm Thu Playbook Mới

Trước khi commit một Playbook mới vào thư mục \`C_Playbooks/\`:
1. **Kiểm tra QA Checklist (5 điểm theo A7):** Đảm bảo không có tiêu đề > 3 từ, không mở ngoặc dịch ngữ song ngữ, **không chứa emoji ở tiêu đề**.
2. **Khai báo vào Sitemap & Web Data:** Cập nhật route và sub-navigation tương ứng theo đúng Tier vào [A1_Sitemap.md](#/requirements/sitemap) và file cấu hình \`js/data.js\`.
3. **Đóng băng quyết định:** Mỗi Playbook bắt buộc phải có ít nhất 1 mục DAR và mục FAQ ở cuối cùng để hoàn thiện bộ tài liệu.
`;

const A7_MARKDOWN = `# A7 · Content & Language Standards

> **Bộ tiêu chuẩn biên soạn nội dung, quy tắc ngôn ngữ & cấu trúc tài liệu toàn hệ thống Marlins Care**  
> **Áp dụng cho:** Tất cả các tài liệu Requirements, Architecture, Playbooks, SOPs, Data Schema & Giao diện UI.

---

## 1. Nguyên Tắc Cốt Lõi (Core Principles)

1. **Nhất quán & Tối giản (Clarity & Consistency):**
   * Loại bỏ hoàn toàn sự lai tạp hai thứ tiếng trong cùng một cụm tiêu đề (ví dụ: cấm \`Điều kiện kích hoạt (Trigger)\`, \`Thời gian chuẩn (SOP Time)\`).
   * Chọn một ngôn ngữ duy nhất cho tiêu đề theo quy tắc phân cấp rõ ràng.
2. **Quy tắc độ dài tiêu đề (Lean Section Title Rule):**
   * Tên của mọi **Section / Subsection (Header H1, H2, H3, H4)** và các **Meta-data Label**: **Tối đa 3 từ (≤ 3 words)**.
3. **Không đóng mở ngoặc song ngữ (Zero Parenthesis Translation):**
   * Tuyệt đối **không** dùng hình thức mở ngoặc giải thích tiếng Việt/tiếng Anh đi kèm nhãn (\`Không: Mục đích (Objective)\` / \`Không: Kích hoạt (Trigger)\`).

---

## 2. Ma Trận Phân Định Ngôn Ngữ (Language Matrix)

Bảng phân định phạm vi sử dụng **Tiếng Anh** và **Tiếng Việt** trong toàn bộ hệ thống:

| Hạng Mục / Thành Phần | Ngôn Ngữ Quy Định | Ví Dụ Chuẩn | Ví Dụ Vi Phạm (Cấm) |
| :--- | :--- | :--- | :--- |
| **Tiêu đề Section / Header (H1 - H4)** | **Pure English** (Ưu tiên English, Title Case) | \`## Playbook Overview\`<br>\`### Trigger Condition\`<br>\`### Target Audience\` | \`## Tổng quan (Overview)\`<br>\`### Điều kiện kích hoạt (Trigger)\`<br>\`### Thời gian chuẩn (SOP Time)\` |
| **Meta-data Labels (Nhãn trường thông tin)** | **Pure English** | \`Objective:\`<br>\`Trigger:\`<br>\`Standard Time:\`<br>\`Target Audience:\`<br>\`Owner:\` | \`Mục đích:\`<br>\`Điều kiện kích hoạt (Trigger):\`<br>\`Thời gian chuẩn (SOP Time):\`<br>\`Mục tiêu (Goal):\` |
| **Thuật ngữ Chuyên môn / Hệ thống** | **Pure English** (giữ nguyên gốc) | \`JTBD\`, \`Touchpoint\`, \`Rubric\`, \`DoD\`, \`Sensemaking\`, \`Family Notes\`, \`Archetype\` | Dịch thô/ép nghĩa tiếng Việt: *Công việc cần làm*, *Điểm tiếp xúc*, *Thấu hiểu giác quan* |
| **Nội dung Chi tiết & Hướng dẫn Tác nghiệp** | **Tiếng Việt tự nhiên** | Các bước SOP chi tiết, kịch bản hội thoại, lời khuyên Mentor, Do's & Don'ts. | Dùng Google Translate cứng nhắc hoặc chèn từ tiếng Anh bừa bãi khi đã có từ tiếng Việt chuẩn xác. |
| **Giao diện Người dùng (UI Labels - Phụ huynh)** | **Tiếng Việt thân thiện** | \`Hành trình của con\`, \`Nhật ký học tập\`, \`Đăng ký trải nghiệm\` | Chèn thuật ngữ kỹ thuật khó hiểu với phụ huynh. |
| **Giao diện Nội bộ (Internal Workspace / Docs)** | **English / Bilingual chuyên nghiệp** | \`Family Workspace\`, \`Growth Scorecard\`, \`Risk Alerts\` | Dịch gượng ép làm mất ý nghĩa thao tác dữ liệu. |

---

## 3. Bảng Chuẩn Hóa Nhãn Header & Meta-data (Standard Glossary)

Áp dụng thống nhất cho tất cả các Playbooks, SOPs và tài liệu thiết kế:

### 3.1. Metadata Headers (Đầu mỗi Playbook/SOP)

| Cụm Cũ / Sai Quy Chuẩn | Cụm Chuẩn Hóa (Pure English ≤ 3 words) | Diễn Giải Chi Tiết (Nội dung bên trong viết bằng TV) |
| :--- | :--- | :--- |
| \`Mục đích:\` / \`Mục đích (Objective):\` | \`Objective:\` | Mục đích cốt lõi của hoạt động/tài liệu. |
| \`Điều kiện kích hoạt (Trigger):\` | \`Trigger:\` | Sự kiện hoặc tín hiệu kích hoạt quy trình. |
| \`Thời gian chuẩn (SOP Time):\` | \`Standard Time:\` | Khung thời gian tiêu chuẩn để hoàn thành. |
| \`Đối tượng áp dụng (Target Audience):\` | \`Target Audience:\` | Phụ huynh, học sinh hoặc nhóm đối tượng tác động. |
| \`Người thực hiện (Owner / PIC):\` | \`Owner:\` | Vai trò chịu trách nhiệm chính (Mentor, Host, System). |
| \`Đầu ra bắt buộc (Deliverables / Output):\` | \`Output:\` | Kết quả, dữ liệu hoặc tài liệu phải nộp sau khi xong. |

### 3.2. Section Naming Principles (Quy chuẩn đặt tên Tiêu đề mục)

Tiêu đề Section (\`##\`, \`###\`, \`####\`) và Toggle/Accordion hoàn toàn linh hoạt theo ngữ cảnh thực tế của từng tài liệu, nhưng **bắt buộc tuân thủ 3 nguyên tắc**:
1. **Pure English & Title Case:** Sử dụng tiếng Anh chuẩn ngữ nghĩa, viết hoa chữ cái đầu.
2. **Lean Length (≤ 3 words):** Tối đa 3 từ, ngắn gọn và hướng hành động/chủ đề.
3. **No Decorative Noise:** Không chèn emoji ở đầu dòng, không mở ngoặc chú thích/dịch nghĩa song ngữ.

**Ví dụ minh họa đối chiếu:**
* ✅ **Chuẩn mực:** \`Session Agenda\`, \`SOP Steps\`, \`Do's & Don'ts\`, \`Question Bank\`, \`Assessment Rubrics\`, \`Family Notes\`...
* ❌ **Vi phạm (Cấm):** \`Lịch trình và khung thời lượng (Session Agenda)\`, \`📋 SOP Steps (Các bước)\`, \`Standard Operating Procedure For Trial Class\`.

---

## 4. Quy Chuẩn Soạn Thảo & Định Dạng (Formatting Guidelines)

### 4.1. Quy tắc Viết hoa (Capitalization Rule)
* **Title Case** cho toàn bộ Section Header tiếng Anh: \`Session Agenda\`, \`Trigger Condition\`, \`Assessment Rubrics\`.
* **Sentence case** cho các câu mô tả chi tiết tiếng Việt: *Bắt đầu bằng chữ hoa, kết thúc bằng dấu chấm.*

### 4.2. Quy tắc Đậm / Nghiêng / Code Highlight
* **In đậm (\`**text**\`):** Dùng cho Meta-labels (\`Trigger:\`, \`Objective:\`), hành động then chốt, hoặc vai trò (\`Mentor:\`, \`Parent:\`).
* **In nghiêng (\`*text*\`):** Dùng cho trích dẫn lời thoại mẫu, câu hỏi trực tiếp trong kịch bản giao tiếp: *“Dạ chào anh chị, hôm nay em muốn chia sẻ về...”*.
* **Code Highlight (\` \`text\` \`):** Dùng cho trường dữ liệu kỹ thuật, route slug, mã số (\`P01\`, \`T10\`, \`/playbooks/social-media\`).
`;

const A8_MARKDOWN = `# A8 · Decision Analysis & Resolution (DAR) Template & Governance

> **Bộ tiêu chuẩn đánh giá & ra quyết định kiến trúc hệ thống — Nemo12 & Marlins Care**  
> **Tương thích:** CMMI-DEV DAR Model, SDD & Content Standards A7.

---

## 1. Core Principles

1. **Transparent Rationale:** Mọi thay đổi kiến trúc hoặc chiến lược vận hành trọng yếu không được quyết định dựa trên cảm tính ngắn hạn, mà phải qua phân tích đa chiều với các phương án thay thế (Alternatives) rõ ràng.
2. **Weighted Scoring Matrix:** Sử dụng ma trận chuẩn CMMI DAR với công thức tính điểm: \`Score = Rating × Weight\`.
3. **Frozen Decisions:** Khi một DAR đã được phê duyệt (\`status: approved\`), các kết luận trở thành quy tắc bất biến. Muốn thay đổi phải mở một DAR mới để đánh giá lại (\`superseded\`).

---

## 2. Evaluation Matrix

Mọi bảng ma trận trong tài liệu DAR bắt buộc tuân theo cấu trúc bảng chuẩn sau (linh hoạt số cột theo 2–4 options thực tế):

| Tiêu Chí Đánh Giá (Criteria) | Trọng Số (Weight) | Option A: [Tên Phương Án A] | Option B: [Tên Phương Án B] | Option C: [Tên Phương Án C ⭐] |
| :--- | :---: | :---: | :---: | :---: |
| **C1: Tính Khả Thi & Tinh Gọn (Feasibility)** | W3 | R_A1 (Điểm $\times$ W1) | R_B1 (Điểm $\times$ W1) | R_C1 (Điểm $\times$ W1) |
| **C2: Tác Động Niềm Tin & Thấu Cảm (Trust & Empathy)** | W4 | R_A2 (Điểm $\times$ W2) | R_B2 (Điểm $\times$ W2) | R_C2 (Điểm $\times$ W2) |
| **C3: Bảo Mật & Kiểm Soát Rủi Ro (Risk Control)** | W3 | R_A3 (Điểm $\times$ W3) | R_B3 (Điểm $\times$ W3) | R_C3 (Điểm $\times$ W3) |
| **TỔNG ĐIỂM (TOTAL SCORE)** | **Sum: 10** | **Total Score A** | **Total Score B** | **Total Score C (Approved ⭐)** |
| **Phân Tích Đánh Đổi (Trade-offs)** | — | [Lý do / Rủi ro loại trừ] | [Lý do / Rủi ro loại trừ] | [Lợi thế vượt trội được chọn] |

### Rating Rubrics

* **Rating 5 (Optimal):** Đáp ứng vượt trội, không rủi ro, tối ưu chi phí & thời gian.
* **Rating 4 (Good):** Đáp ứng tốt, rủi ro thấp và có giải pháp kiểm soát rõ ràng.
* **Rating 3 (Acceptable):** Đáp ứng ở mức chấp nhận được, có đánh đổi vừa phải.
* **Rating 2 (High Risk):** Khó khả thi hoặc tạo rủi ro lớn về vận hành/trải nghiệm.
* **Rating 1 (Disqualified):** Không đáp ứng hoặc vi phạm nguyên tắc cốt lõi của hệ thống.
`;

const B1_MARKDOWN = `# B1 · UI Design System & Component Library

> **Đặc tả hệ thống thiết kế giao diện (Design System Tokens) và thư viện component chuẩn mực cho Marlins Care Web**  
> **Áp dụng:** Toàn bộ Single Page Application (SPA), Dark/Light Themes và Responsive Layouts.

---

## 1. Design Tokens & Color Palette

Hệ màu chuẩn mực được thiết kế tương thích hoàn hảo giữa Light Mode và Dark Mode:

| Token Name | Light Mode Value | Dark Mode Value | Mục Đích Sử Dụng |
| :--- | :--- | :--- | :--- |
| \`--color-primary-600\` | \`#0284C7\` (Deep Sky Blue) | \`#38BDF8\` | Màu thương hiệu chủ đạo, links & active tabs |
| \`--color-primary-700\` | \`#0369A1\` | \`#0284C7\` | Headers chuyên đề, section labels in hoa |
| \`--color-marlins\` | \`#0D9488\` (Marlins Teal) | \`#14B8A6\` | Viền Objective & điểm nhấn thương hiệu |
| \`--bg-base\` | \`#FFFFFF\` | \`#0F172A\` | Nền gốc toàn trang |
| \`--bg-surface-subtle\` | \`#F8FAFC\` | \`#1E293B\` | Nền khối code, bảng, thẻ blockquote |
| \`--text-primary\` | \`#0F172A\` | \`#F8FAFC\` | Văn bản chính, tiêu đề H1-H4 |
| \`--text-secondary\` | \`#475569\` | \`#94A3B8\` | Văn bản giải thích, nội dung SOP & mô tả |
| \`--border-subtle\` | \`#E2E8F0\` | \`#334155\` | Đường kẻ phân cách mờ, viền bảng |

---

## 2. Component Guidelines

* **Executive KPI Strip:** Trình bày Objective có viền xanh mỏng bên trái, theo sau bởi 4 cột thông số phân tách bằng đường kẻ mỏng trên dưới.
* **Claude Minimalist Toggle:** Sử dụng thẻ \`<details>\` với viền mờ dưới (\`border-bottom: 1px solid var(--border-subtle)\`), không lồng khung hộp thô kệch.
* **CMMI DAR Table:** Ma trận chấm điểm so sánh phương án với cột dọc là Tiêu chí có trọng số và cột ngang là các Options.
`;

const B2_MARKDOWN = `# B2 · Tech Stack Specifications

> **Đặc tả kiến trúc công nghệ, mô hình triển khai và quản trị dữ liệu cho Marlins Care Hub**

---

## 1. Core Technology Stack

* **Frontend Engine:** Vanilla ES Modules (ES2022+), không phụ thuộc framework nặng, tải trang dưới 50ms.
* **Styling:** Modern CSS Variables, Responsive Grid/Flexbox, Native Glassmorphism & Smooth Transitions.
* **Hosting & CDN:** Cloudflare Pages với Edge Caching toàn cầu và tự động triển khai qua GitHub Actions.
* **Data Layer:** Pre-compiled static JSON/JS bundles (\`full_playbooks_compiled.js\`) đảm bảo Zero API Latency.
`;

---
id: A7-CONTENT-STANDARDS
title: "A7 · Content & Language Standards — Nemo12 & Marlins Care"
status: approved
version: "2.0.0"
date: "2026-08-30"
authors: ["Antigravity", "Nemo12 Design & Frontend Core", "Marlins Care Ops"]
domain: "Product Requirements / Content & Language Standardization"
relates_to:
  - "A1_Sitemap.md"
  - "A6_Playbooks_Template.md"
  - "A8_DAR_Template.md"
  - "B1_UI_Design_System.md"
---

# A7 · Content & Language Standards

> **Bộ tiêu chuẩn biên soạn nội dung, quy tắc ngôn ngữ & cấu trúc tài liệu toàn hệ thống Marlins Care**  
> **Áp dụng cho:** Tất cả các tài liệu Requirements, Architecture, Playbooks, SOPs, Data Schema & Giao diện UI.

---

## 1. Nguyên Tắc Cốt Lõi (Core Principles)

1. **Nhất quán & Tối giản (Clarity & Consistency):**
   - Loại bỏ hoàn toàn sự lai tạp hai thứ tiếng trong cùng một cụm tiêu đề (ví dụ: cấm `Điều kiện kích hoạt (Trigger)`, `Thời gian chuẩn (SOP Time)`).
   - Chọn một ngôn ngữ duy nhất cho tiêu đề theo quy tắc phân cấp rõ ràng.
2. **Quy tắc độ dài tiêu đề (Lean Section Title Rule):**
   - Tên của mọi **Section / Subsection (Header H1, H2, H3, H4)** và các **Meta-data Label**: **Tối đa 3 từ (≤ 3 words)**.
3. **Không đóng mở ngoặc song ngữ (Zero Parenthesis Translation):**
   - Tuyệt đối **không** dùng hình thức mở ngoặc giải thích tiếng Việt/tiếng Anh đi kèm nhãn (`Không: Mục đích (Objective)` / `Không: Kích hoạt (Trigger)`).

---

## 2. Ma Trận Phân Định Ngôn Ngữ (Language Matrix)

Bảng phân định phạm vi sử dụng **Tiếng Anh** và **Tiếng Việt** trong toàn bộ hệ thống:

| Hạng Mục / Thành Phần | Ngôn Ngữ Quy Định | Ví Dụ Chuẩn | Ví Dụ Vi Phạm (Cấm) |
| :--- | :--- | :--- | :--- |
| **Tiêu đề Section / Header (H1 - H4)** | **Pure English** (Ưu tiên English, Title Case) | `## Playbook Overview`<br>`### Trigger Condition`<br>`### Target Audience` | `## Tổng quan (Overview)`<br>`### Điều kiện kích hoạt (Trigger)`<br>`### Thời gian chuẩn (SOP Time)` |
| **Meta-data Labels (Nhãn trường thông tin)** | **Pure English** | `Objective:`<br>`Trigger:`<br>`Standard Time:`<br>`Target Audience:`<br>`Owner:` | `Mục đích:`<br>`Điều kiện kích hoạt (Trigger):`<br>`Thời gian chuẩn (SOP Time):`<br>`Mục tiêu (Goal):` |
| **Thuật ngữ Chuyên môn / Hệ thống** | **Pure English** (giữ nguyên gốc) | `JTBD`, `Touchpoint`, `Rubric`, `DoD`, `Sensemaking`, `Family Notes`, `Archetype` | Dịch thô/ép nghĩa tiếng Việt: *Công việc cần làm*, *Điểm tiếp xúc*, *Thấu hiểu giác quan* |
| **Nội dung Chi tiết & Hướng dẫn Tác nghiệp** | **Tiếng Việt tự nhiên** | Các bước SOP chi tiết, kịch bản hội thoại, lời khuyên Mentor, Do's & Don'ts. | Dùng Google Translate cứng nhắc hoặc chèn từ tiếng Anh bừa bãi khi đã có từ tiếng Việt chuẩn xác. |
| **Giao diện Người dùng (UI Labels - Phụ huynh)** | **Tiếng Việt thân thiện** | `Hành trình của con`, `Nhật ký học tập`, `Đăng ký trải nghiệm` | Chèn thuật ngữ kỹ thuật khó hiểu với phụ huynh. |
| **Giao diện Nội bộ (Internal Workspace / Docs)** | **English / Bilingual chuyên nghiệp** | `Family Workspace`, `Growth Scorecard`, `Risk Alerts` | Dịch gượng ép làm mất ý nghĩa thao tác dữ liệu. |

---

## 3. Bảng Chuẩn Hóa Nhãn Header & Meta-data (Standard Glossary)

Áp dụng thống nhất cho tất cả các Playbooks, SOPs và tài liệu thiết kế:

### 3.1. Metadata Headers (Đầu mỗi Playbook/SOP)

| Cụm Cũ / Sai Quy Chuẩn | Cụm Chuẩn Hóa (Pure English ≤ 3 words) | Diễn Giải Chi Tiết (Nội dung bên trong viết bằng TV) |
| :--- | :--- | :--- |
| `Mục đích:` / `Mục đích (Objective):` | `Objective:` | Mục đích cốt lõi của hoạt động/tài liệu. |
| `Điều kiện kích hoạt (Trigger):` | `Trigger:` | Sự kiện hoặc tín hiệu kích hoạt quy trình. |
| `Thời gian chuẩn (SOP Time):` | `Standard Time:` | Khung thời gian tiêu chuẩn để hoàn thành. |
| `Đối tượng áp dụng (Target Audience):` | `Target Audience:` | Phụ huynh, học sinh hoặc nhóm đối tượng tác động. |
| `Người thực hiện (Owner / PIC):` | `Owner:` | Vai trò chịu trách nhiệm chính (Mentor, Host, System). |
| `Đầu ra bắt buộc (Deliverables / Output):` | `Output:` | Kết quả, dữ liệu hoặc tài liệu phải nộp sau khi xong. |

### 3.2. Section Naming Principles (Quy chuẩn đặt tên Tiêu đề mục)

Tiêu đề Section (`##`, `###`, `####`) và Toggle/Accordion hoàn toàn linh hoạt theo ngữ cảnh thực tế của từng tài liệu, nhưng **bắt buộc tuân thủ 3 nguyên tắc**:
1. **Pure English & Title Case:** Sử dụng tiếng Anh chuẩn ngữ nghĩa, viết hoa chữ cái đầu.
2. **Lean Length (≤ 3 words):** Tối đa 3 từ, ngắn gọn và hướng hành động/chủ đề.
3. **No Decorative Noise:** Không chèn emoji ở đầu dòng, không mở ngoặc chú thích/dịch nghĩa song ngữ.

**Ví dụ minh họa đối chiếu:**
- ✅ **Chuẩn mực:** `Session Agenda`, `SOP Steps`, `Do's & Don'ts`, `Question Bank`, `Assessment Rubrics`, `Family Notes`...
- ❌ **Vi phạm (Cấm):** `Lịch trình và khung thời lượng (Session Agenda)`, `📋 SOP Steps (Các bước)`, `Standard Operating Procedure For Trial Class`.

---

## 4. Quy Chuẩn Soạn Thảo & Định Dạng (Formatting Guidelines)

### 4.1. Quy tắc Viết hoa (Capitalization Rule)
- **Title Case** cho toàn bộ Section Header tiếng Anh: `Session Agenda`, `Trigger Condition`, `Assessment Rubrics`.
- **Sentence case** cho các câu mô tả chi tiết tiếng Việt: *Bắt đầu bằng chữ hoa, kết thúc bằng dấu chấm.*

### 4.2. Quy tắc Đậm / Nghiêng / Code Highlight
- **In đậm (`**text**`)**: Dùng cho Meta-labels (`Trigger:`, `Objective:`), hành động then chốt, hoặc vai trò (`Mentor:`, `Parent:`).
- **In nghiêng (`*text*`)**: Dùng cho trích dẫn lời thoại mẫu, câu hỏi trực tiếp trong kịch bản giao tiếp: `*“Dạ chào anh chị, hôm nay em muốn chia sẻ về...”*`.
- **Code Block / Inline Code (`` `text` ``)**: Dùng cho trường dữ liệu kỹ thuật (`family_contacts`, `lms_score`, `risk_level_high`).

### 4.3. Containers & Callouts Formatting
- **Gợi ý / Mẹo thực thi:** Sử dụng cú pháp `::: tip [Tiêu đề]` cho các Best Practices.
- **Cảnh báo rủi ro:** Sử dụng cú pháp `::: warning [Tiêu đề]` cho các lưu ý quan trọng.
- **Hành vi cấm kỵ:** Sử dụng cú pháp `::: danger [Tiêu đề]` cho các điều cấm kỵ (Don'ts).

### 4.4. Giọng Điệu & Văn Phong (Tone of Voice)
- **Văn bản Vận hành (SOP/Playbook):** Ngắn gọn, dứt khoát, hướng hành động (action-oriented), không dùng từ ngữ cảm tính dư thừa.
- **Kịch bản Giao tiếp Phụ huynh (Parent Communication):** Đồng cảm, chân thành, tôn trọng, thấu hiểu, mang tinh thần giáo dục hiện đại (*Dory Sensemaking*).

---

## 5. Checklist Kiểm Thừa Trước Khi Xuất Bản (QA Checklist)

Trước khi commit/merge bất kỳ tài liệu nào vào hệ thống, tác giả bắt buộc tự kiểm tra 5 điểm:

- [ ] **Section Titles:** Có tiêu đề nào vượt quá 3 từ hoặc chứa emoji ở đầu không?
- [ ] **No Bilingual Parentheses:** Có cặp đóng/mở ngoặc dịch ngữ nào (như `(Trigger)`, `(Mục đích)`) ở tiêu đề/nhãn không?
- [ ] **Metadata Consistency:** Đã có đủ 6 trường metadata chuẩn (`Objective:`, `Trigger:`, `Standard Time:`, `Target Audience:`, `Owner:`, `Output:`) chưa?
- [ ] **Language Consistency:** Phần giải thích chi tiết có viết bằng tiếng Việt tự nhiên, mạch lạc không?
- [ ] **Terminology Integrity:** Các thuật ngữ nền tảng (`JTBD`, `Touchpoint`, `Rubric`, `DoD`) có được giữ nguyên dạng không bị dịch gượng ép không?

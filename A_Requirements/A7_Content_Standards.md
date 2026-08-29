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
| **Tiêu đề Section / Header (H1 - H4)** | **Pure English** (hoặc Pure Vietnamese thuần túy, ưu tiên English) | `## Playbook Overview`<br>`### Trigger Condition`<br>`### Target Audience` | `## Tổng quan (Overview)`<br>`### Điều kiện kích hoạt (Trigger)`<br>`### Thời gian chuẩn (SOP Time)` |
| **Meta-data Labels (Nhãn trường thông tin)** | **Pure English** | `Objective:`<br>`Trigger:`<br>`Standard Time:`<br>`Target Audience:`<br>`Owner:` | `Mục đích:`<br>`Điều kiện kích hoạt (Trigger):`<br>`Thời gian chuẩn (SOP Time):`<br>`Mục tiêu (Goal):` |
| **Thuật ngữ Chuyên môn / Hệ thống** | **Pure English** (giữ nguyên gốc) | `JTBD`, `Touchpoint`, `Rubric`, `DoD`, `Sensemaking`, `Family Notes`, `Archetype` | Dịch thô/ép nghĩa tiếng Việt: *Công việc cần làm*, *Điểm tiếp xúc*, *Thấu hiểu giác quan* |
| **Nội dung Chi tiết & Hướng dẫn Tác nghiệp** | **Tiếng Việt tự nhiên** | Các bước SOP chi tiết, kịch bản hội thoại, lời khuyên Mentor, Do's & Don'ts. | Dùng Google Translate cứng nhắc hoặc chèn từ tiếng Anh bừa bãi khi đã có từ tiếng Việt chuẩn xác. |
| **Giao diện Người dùng (UI Labels - Dành cho Phụ huynh)** | **Tiếng Việt thân thiện** | `Hành trình của con`, `Nhật ký học tập`, `Đăng ký trải nghiệm` | Chèn thuật ngữ kỹ thuật khó hiểu với phụ huynh. |
| **Giao diện Nội bộ (Internal Workspace / Tooling)** | **English / Bilingual chuyên nghiệp** | `Family Workspace`, `Growth Scorecard`, `Risk Alerts` | Dịch gượng ép làm mất ý nghĩa thao tác dữ liệu. |

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

### 3.2. Core Section Titles (Các tiêu đề mục trong Playbook)

| Cụm Cũ / Sai Quy Chuẩn | Cụm Chuẩn Hóa (≤ 3 words) | Định dạng H |
| :--- | :--- | :--- |
| `Phân tích các bên liên quan (Stakeholder Mapping)` | `Stakeholder Mapping` | `##` / `###` |
| `Lịch trình và khung thời lượng (Session Agenda)` | `Session Agenda` | `##` / `###` |
| `Ngân hàng câu hỏi gợi mở (Question Bank)` | `Question Bank` | `###` / `####` |
| `Hướng dẫn quan sát thực tế (Observation Guide)` | `Observation Guide` | `###` / `####` |
| `Các bước thực hiện quy trình (SOP Steps)` | `SOP Steps` | `##` / `###` |
| `Những điều nên làm và không nên làm (Do's and Don'ts)` | `Do's and Don'ts` | `##` / `###` |
| `Tiêu chí đánh giá chất lượng (Assessment Rubrics)` | `Assessment Rubrics` | `##` / `###` |
| `Ghi chép hồ sơ gia đình (Family Notes)` | `Family Notes` | `##` / `###` |
| `Bộ công cụ và tài nguyên (Tooling & Resources)` | `Tooling & Resources` | `##` / `###` |

---

## 4. Quy Chuẩn Soạn Thảo & Định Dạng (Formatting Guidelines)

### 4.1. Quy tắc Viết hoa (Capitalization Rule)
- **Title Case** cho toàn bộ Section Header tiếng Anh: `Session Agenda`, `Trigger Condition`, `Assessment Rubrics`.
- **Sentence case** cho các câu mô tả chi tiết tiếng Việt: *Bắt đầu bằng chữ hoa, kết thúc bằng dấu chấm.*

### 4.2. Quy tắc Đậm / Nghiêng / Code Highlight
- **In đậm (`**text**`)**: Dùng cho Meta-labels (`Trigger:`, `Objective:`), hành động then chốt, hoặc vai trò (`Mentor:`, `Parent:`).
- **In nghiêng (`*text*`)**: Dùng cho trích dẫn lời thoại mẫu, câu hỏi trực tiếp trong kịch bản giao tiếp: `*“Dạ chào anh chị, hôm nay em muốn chia sẻ về...”*`.
- **Code Block / Inline Code (`` `text` ``)**: Dùng cho trường dữ liệu kỹ thuật (`family_contacts`, `lms_score`, `risk_level_high`).

### 4.3. Giọng Điệu & Văn Phong (Tone of Voice)
- **Văn bản Vận hành (SOP/Playbook):** Ngắn gọn, dứt khoát, hướng hành động (action-oriented), không dùng từ ngữ cảm tính dư thừa.
- **Kịch bản Giao tiếp Phụ huynh (Parent Communication):** Đồng cảm, chân thành, tôn trọng, thấu hiểu, mang tinh thần giáo dục hiện đại (*Dory Sensemaking*).

---

## 5. Checklist Kiểm Thừa Trước Khi Xuất Bản (QA Checklist)

Trước khi commit/merge bất kỳ tài liệu nào vào hệ thống, tác giả bắt buộc tự kiểm tra 5 điểm:

- [ ] **Section Titles:** Có tiêu đề nào vượt quá 3 từ không?
- [ ] **No Bilingual Parentheses:** Có cặp đóng/mở ngoặc dịch ngữ nào (như `(Trigger)`, `(Mục đích)`) ở tiêu đề/nhãn không?
- [ ] **Metadata Consistency:** Các trường metadata đầu bài có đúng chuẩn (`Objective:`, `Trigger:`, `Standard Time:`, `Owner:`, `Output:`) chưa?
- [ ] **Language Consistency:** Phần giải thích chi tiết có viết bằng tiếng Việt tự nhiên, mạch lạc không?
- [ ] **Terminology Integrity:** Các thuật ngữ nền tảng (`JTBD`, `Touchpoint`, `Rubric`, `DoD`) có được giữ nguyên dạng không bị dịch gượng ép không?

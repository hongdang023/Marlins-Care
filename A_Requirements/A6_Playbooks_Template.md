---
id: A6-PLAYBOOKS-TEMPLATE
title: "A6 · Playbooks Standard Template & Boilerplate — Nemo12 & Marlins Care"
status: approved
version: "5.0.0"
date: "2026-08-30"
authors: ["Antigravity", "Nemo12 Design & Frontend Core", "Marlins Care Ops"]
domain: "Product Requirements / Playbooks Standardization"
relates_to:
  - "A1_Sitemap.md"
  - "A7_Content_Standards.md"
  - "A8_DAR_Template.md"
  - "B1_UI_Design_System.md"
---

# A6 · Playbooks Standard Template & Boilerplate

> **Bộ khung mẫu chuẩn mực để biên soạn, cập nhật và ban hành Playbook tác nghiệp**  
> **Áp dụng cho:** Toàn bộ 8 Playbooks hiện tại (`P01` – `P08`) và các Playbooks mới trong tương lai.

---

## 1. Nguyên Tắc & Quy Chuẩn Cấu Trúc (Core Principles)

1. **3 Hình thái Phân loại Playbook (3 Tiers & Archetypes):**
   * **Tier 1: High-Touch (Archetype C):** Tương tác trực tiếp, đối thoại sâu (`Marlins Workshop`, `Marlins Day`, `Family Meeting`). Bắt buộc có `Session Agenda` và `Stakeholder Mapping`.
   * **Tier 2: Routine & Hybrid (Archetype B):** Vận hành lớp học tuần hoàn kết hợp máy và người (`Trial Class`, `Live Class`). Không có `Session Agenda`.
   * **Tier 3: Outreach & Policy (Archetype A):** Kênh mạng xã hội, cộng đồng và chính sách (`Social Media`, `Community`, `Referrals Program`). Không có `Session Agenda`.
2. **Quy tắc độ dài & định dạng tiêu đề (Lean Section Title Rule):** Tiêu đề Section (`##`, `###`) bắt buộc là **Pure English, Title Case, $\le 3$ words, TUYỆT ĐỐI KHÔNG CHÈN EMOJI** theo [A7_Content_Standards.md](file:///Users/danghong/Documents/Marlins%20Care/A_Requirements/A7_Content_Standards.md).
3. **Thứ tự khối nội dung bất biến:** Mọi Playbook đều kết thúc bằng `Decision Logs` và cuối cùng là `FAQ`.
4. **Chuẩn hoàn thành bắt buộc (Definition of Done):** Mọi hành động bắt buộc phải đạt tối thiểu **Level 3 (L3 DoD ⭐)** trong bảng Rubric.

---

## 2. Ma Trận Cấu Trúc Khối Nội Dung & Sub-Navigation (Structure Matrix)

| Cấu Trúc Section (Pure English ≤ 3 words) | Tier 1: High-Touch (`P03, P04, P07`) | Tier 2: Routine (`P05, P06`) | Tier 3: Outreach (`P01, P02, P08`) | Ghi chú vai trò |
| :--- | :---: | :---: | :---: | :--- |
| **`Overview`** *(Metadata Header)* | Bắt buộc | Bắt buộc | Bắt buộc | Mục tiêu, điều kiện kích hoạt, thời lượng, chủ sở hữu, đầu ra. |
| **`Stakeholder Mapping`** | Bắt buộc | Bắt buộc | Tùy chọn | Bản đồ tương tác và kỳ vọng 3 bên: Phụ huynh – Học sinh – Mentor. |
| **`Session Agenda`** | Bắt buộc | Không áp dụng | Không áp dụng | Khung thời gian & kịch bản phiên làm việc / buổi gặp trực tiếp. |
| **`SOP Steps`** | Bắt buộc | Bắt buộc | Bắt buộc | Quy trình tác nghiệp chi tiết (Pre-Action ➔ In-Action ➔ Post-Action). |
| **`Do's & Don'ts`** | Bắt buộc | Bắt buộc | Bắt buộc | Bảng chuẩn mực hành vi nên làm và điều cấm kỵ. |
| **`Assessment Rubrics`** | Bắt buộc | Bắt buộc | Bắt buộc | Thang đo chất lượng L1 – L5 (L3 DoD ⭐). |
| **`Decision Logs`** | Bắt buộc | Bắt buộc | Bắt buộc | Các quyết định kiến trúc CMMI DAR giải trình và bảo vệ giải pháp. |
| **`FAQ`** | Bắt buộc | Bắt buộc | Bắt buộc | Tình huống thực tế, câu hỏi thường gặp và kịch bản xử lý nhanh. |

---

## 3. Khung Mẫu Biên Soạn Playbook Chuẩn (Playbook Boilerplate Markdown)

*Sao chép toàn bộ khối mã dưới đây khi khởi tạo hoặc chuẩn hóa một Playbook mới:*

````markdown
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
| **1. Execution** | Không làm / Quá hạn | Máy móc, trễ hạn | Đúng quy trình, đúng hạn $\le 15$m | Xử lý linh hoạt, chu đáo | Mẫu mực, tối ưu hóa |
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
````

---

## 4. Quy Trình Ban Hành & Nghiệm Thu Playbook Mới

Trước khi commit một Playbook mới vào thư mục `C_Playbooks/`:
1. **Kiểm tra QA Checklist (5 điểm theo A7):** Đảm bảo không có tiêu đề $> 3$ từ, không mở ngoặc dịch ngữ song ngữ, **không chứa emoji ở tiêu đề**.
2. **Khai báo vào Sitemap & Web Data:** Cập nhật route và sub-navigation tương ứng theo đúng Tier vào [A1_Sitemap.md](file:///Users/danghong/Documents/Marlins%20Care/A_Requirements/A1_Sitemap.md) và file cấu hình `website/js/data.js`.
3. **Đóng băng quyết định:** Mỗi Playbook bắt buộc phải có ít nhất 1 mục DAR và mục FAQ ở cuối cùng để hoàn thiện bộ tài liệu.

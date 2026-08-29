---
id: A8-DAR-TEMPLATE
title: "A8 · Decision Analysis & Resolution (DAR) Template & Governance"
status: approved
version: "2.0.0"
date: "2026-08-30"
authors: ["Antigravity", "Nemo12 Architecture Core", "Marlins Care Governance"]
domain: "Architecture / Governance / Decision Matrix"
relates_to:
  - "A1_Sitemap.md"
  - "A7_Content_Standards.md"
  - "B1_UI_Design_System.md"
---

# A8 · DAR Governance

> **Bộ tiêu chuẩn đánh giá & ra quyết định kiến trúc hệ thống — Nemo12 & Marlins Care**  
> **Tương thích:** CMMI-DEV DAR Model, SDD & Content Standards A7.

---

## 1. Core Principles

1. **Transparent Rationale:** Mọi thay đổi kiến trúc hoặc chiến lược vận hành trọng yếu không được quyết định dựa trên cảm tính ngắn hạn, mà phải qua phân tích đa chiều với các phương án thay thế (Alternatives) rõ ràng.
2. **Weighted Scoring Matrix:** Sử dụng ma trận chuẩn CMMI DAR với công thức tính điểm: `Score = Rating × Weight`.
3. **Frozen Decisions:** Khi một DAR đã được phê duyệt (`status: approved`), các kết luận trở thành quy tắc bất biến. Muốn thay đổi phải mở một DAR mới để đánh giá lại (`superseded`).

---

## 2. Evaluation Matrix

Mọi bảng ma trận trong tài liệu DAR bắt buộc tuân theo cấu trúc bảng chuẩn sau (linh hoạt số cột theo 2–4 options thực tế):

| Criteria | Weight (1-5) | Option A: [Name] | Option A: Score | Option B: [Name] | Option B: Score | Option C: [Name] | Option C: Score |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **C1: [Tên tiêu chí 1]** | W1 | R_A1 (1-5) | W1 × R_A1 | R_B1 (1-5) | W1 × R_B1 | R_C1 (1-5) | W1 × R_C1 |
| **C2: [Tên tiêu chí 2]** | W2 | R_A2 (1-5) | W2 × R_A2 | R_B2 (1-5) | W2 × R_B2 | R_C2 (1-5) | W2 × R_C2 |
| **C3: [Tên tiêu chí 3]** | W3 | R_A3 (1-5) | W3 × R_A3 | R_B3 (1-5) | W3 × R_B3 | R_C3 (1-5) | W3 × R_C3 |
| **TOTAL** | **Sum(W)** | — | **Total Score A** | — | **Total Score B** | — | **Total Score C** |

### Rating Rubrics

- **Rating 5 (Optimal):** Đáp ứng vượt trội, không rủi ro, tối ưu chi phí & thời gian.
- **Rating 4 (Good):** Đáp ứng tốt, rủi ro thấp và có giải pháp kiểm soát rõ ràng.
- **Rating 3 (Acceptable):** Đáp ứng ở mức chấp nhận được, có đánh đổi vừa phải.
- **Rating 2 (High Risk):** Khó khả thi hoặc tạo rủi ro lớn về vận hành/trải nghiệm.
- **Rating 1 (Disqualified):** Không đáp ứng hoặc vi phạm nguyên tắc cốt lõi của hệ thống.

---

## 3. Standard Template

```markdown
---
id: DAR-XX-TITLE-SLUG
title: "DAR XX · [Tên Quyết Định]"
status: draft
version: "1.0.0"
date: "YYYY-MM-DD"
authors: ["Tác giả đề xuất"]
domain: "Architecture / Operations / Data"
relates_to:
  - "A1_Sitemap.md"
---

# DAR XX · [Tên Quyết Định]

## 1. Problem Context
- Nguồn gốc bài toán, bối cảnh thực tế và sự xung đột mục tiêu (trade-offs).
- Câu hỏi quyết định cốt lõi cần giải quyết.

## 2. Evaluation Criteria
Liệt kê tối thiểu 3–5 tiêu chí và giải thích lý do gán trọng số:
- **C1 ([Tên tiêu chí 1]):** Trọng số W1 (1–5). Giải thích ý nghĩa.
- **C2 ([Tên tiêu chí 2]):** Trọng số W2 (1–5). Giải thích ý nghĩa.
- **C3 ([Tên tiêu chí 3]):** Trọng số W3 (1–5). Giải thích ý nghĩa.

## 3. Solution Alternatives
Mô tả chi tiết từ 2–4 phương án thay thế:
- **Option A ([Tên phương án A]):** Cơ chế vận hành, ưu điểm, nhược điểm, bẫy rủi ro.
- **Option B ([Tên phương án B]):** Cơ chế vận hành, ưu điểm, nhược điểm, bẫy rủi ro.
- **Option C ([Tên phương án C]):** Cơ chế vận hành, ưu điểm, nhược điểm, bẫy rủi ro.

## 4. Evaluation Matrix
[Chèn bảng Ma trận chuẩn theo mục 2]

## 5. Decision & Implementation
- **Phương án được chọn:** Option X (Điểm cao nhất và bảo toàn giá trị cốt lõi).
- **Lý do quyết định:** Phân tích lý do giải quyết tốt nhất các trade-offs.
- **Kế hoạch hành động:** Các bước thực thi và Playbooks/SOPs cần cập nhật.
```

---

## 4. Lifecycle Management

1. **Initiation:** Bất kỳ quyết định nào có tác động đến $\ge 2$ thành phần trong hệ thống (SOP, Portal, Khóa học, Nhân sự) đều phải tạo file DAR dạng `status: draft`.
2. **Evaluation:** Người đề xuất và Core Team cùng thảo luận cho điểm Rating trên từng Tiêu chí.
3. **Approval & Freeze:** Chuyển trạng thái sang `status: approved` và đồng bộ vào tài liệu quản trị chung.

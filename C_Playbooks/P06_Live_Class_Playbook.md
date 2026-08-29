---
id: P06-LIVE-CLASS
title: "P06 · Live Class Playbook — Nemo12 & Marlins Care"
status: approved
version: "2.0.0"
date: "2026-08-30"
authors: ["Marlins Care Ops", "Teaching Mentors"]
domain: "Operational Playbooks / Active Journey & Retention"
relates_to:
  - "A1_Sitemap.md"
  - "A6_Playbooks_Template.md"
  - "A7_Content_Standards.md"
---

# P06 · Live Class Playbook

> **Quy trình đồng hành cùng phụ huynh trong suốt 12 buổi học chính thức, báo cáo tuần tự động, can thiệp rủi ro và xuất bản Growth Story.**  
> **Triết lý:** *"Automate the evidence. Humanize the meaning."*

---

## Metadata Header
* **Objective:** Minh bạch hóa tiến độ học tập hàng tuần của con, phát hiện sớm nguy cơ sụt giảm nỗ lực và xuất bản ấn phẩm Growth Story 5 phần kết khóa.
* **Trigger:** Học sinh chính thức bước vào khóa học 12 buổi (Live Class).
* **Standard Time:** Hệ thống đồng bộ tự động; Mentor viết Growth Story ≤  10 phút/học sinh; can thiệp rủi ro ≤  15 phút/case.
* **Target Audience:** Phụ huynh và học sinh đang tham gia khóa học 12 buổi.
* **Owner:** Hybrid (System & Mentor).
* **Output:** Dashboard Weekly Pulse + Can thiệp nguy cơ kịp thời + Ấn phẩm số Growth Story xuất bản tại Buổi 12.

---

---


<details open>
<summary><h3>Decision Logs</h3></summary>

Tổng hợp các quyết định kiến trúc và đánh giá CMMI DAR bảo vệ cho phương pháp tiếp cận của Playbook:

#### 📌 DAR 01: Nhịp Báo Cáo Tuần: Weekly Pulse 3 Dòng vs Báo Cáo Chi Tiết
* **Bối cảnh:** Cân bằng giữa việc cập nhật tiến độ liên tục cho phụ huynh và việc tránh làm phiền bố mẹ bận rộn.

| Tiêu Chí Đánh Giá (Criteria) | Trọng Số | Option A: Soạn Báo Cáo Dài Hàng Trang Mỗi Tuần | Option B: Weekly Pulse 3 Dòng + Link Xem Bằng Chứng Trực Tiếp ⭐ |
| :--- | :---: | :---: | :---: |
| **C1: Tối Giản & Tránh Quá Tải Thông Tin (Cognitive Load)** | W4 | 2.0 / 5 (8.0) | 5.0 / 5 (20.0) |
| **C2: Minh Bạch Bằng Chứng Học Tập (Evidence Transparency)** | W3 | 4.8 / 5 (14.4) | 4.9 / 5 (14.7) |
| **C3: Tinh Gọn Thời Gian Của Mentor (Mentor Efficiency)** | W3 | 2.5 / 5 (7.5) | 4.8 / 5 (14.4) |
| **TỔNG ĐIỂM (TOTAL SCORE)** | **Sum: 10** | 29.9 / 50 | 49.1 / 50 (Approved ⭐) |
| **Phân Tích & Đánh Đổi (Trade-offs)** | — | Phụ huynh không có thời gian đọc, mentor kiệt sức vì làm báo cáo hình thức. | Tự động xuất 3 dòng trọng tâm (Điểm sáng, Điểm nghẽn, Hành động) kèm link Portal. |

* **Quyết định:** Áp dụng định dạng Weekly Pulse 3 Dòng siêu tinh gọn gửi qua Zalo mỗi tuần, kết nối trực tiếp với dashboard bằng chứng trên Family Portal.

#### 📌 DAR 03: Ấn Phẩm Kết Khóa: Bảng Điểm Truyền Thống vs Growth Story 5 Phần
* **Bối cảnh:** Lựa chọn hình thức tổng kết hành trình học tập 12 buổi của học sinh.

| Tiêu Chí Đánh Giá (Criteria) | Trọng Số | Option A: Bảng Điểm Số & Nhận Xét Chung Chung | Option B: Ấn Phẩm Kể Chuyện Growth Story 5 Phần Cá Nhân Hóa ⭐ |
| :--- | :---: | :---: | :---: |
| **C1: Chiều Sâu Tôn Vinh Sự Chuyển Hóa (Transformation Depth)** | W4 | 1.5 / 5 (6.0) | 5.0 / 5 (20.0) |
| **C2: Giá Trị Lưu Niệm & Niềm Tự Hào Của Cha Mẹ (Parent Pride)** | W4 | 1.0 / 5 (4.0) | 5.0 / 5 (20.0) |
| **C3: Mức Độ Tự Động Hóa Dữ Liệu (Automation Feasibility)** | W2 | 5.0 / 5 (10.0) | 4.5 / 5 (9.0) |
| **TỔNG ĐIỂM (TOTAL SCORE)** | **Sum: 10** | 20.0 / 50 | 49.0 / 50 (Approved ⭐) |
| **Phân Tích & Đánh Đổi (Trade-offs)** | — | Vô hồn, dễ gây so sánh điểm số tiêu cực và không lột tả được nỗ lực của con. | Khắc họa sinh động 5 chặng chuyển biến tư duy, lưu giữ như kỷ vật vô giá của gia đình. |

* **Quyết định:** Đóng gói toàn bộ hành trình 12 buổi thành ấn phẩm Growth Story 5 phần gửi tặng gia đình vào Buổi 12, biến thành tựu học tập thành niềm tự hào kết nối cha mẹ và con cái.

</details>

---

<details>
<summary><h3>FAQ</h3></summary>

#### Nhóm 1: Về Vận Hành Lớp Học 12 Buổi (Class Operations & Support)
* **Học sinh vắng một buổi học chính thức thì được hỗ trợ học bù như thế nào?**  
  👉 **A:** Hệ thống tự động lưu video bài giảng và bài tập thực hành trên Family Portal; Mentor sẽ dành 15 phút đầu giờ buổi kế tiếp để gỡ rối nhanh cho con.
* **Khi con gặp khó khăn với bài tập về nhà thì liên hệ hỗ trợ ra sao?**  
  👉 **A:** Học sinh gửi câu hỏi trực tiếp trên hệ thống hoặc nhắn tin trong nhóm lớp để Mentor hướng dẫn gợi mở tư duy, tuyệt đối không giải hộ bài.

#### Nhóm 2: Về Báo Cáo Tuần & Bằng Chứng Học Tập (Progress Tracking)
* **Phụ huynh có thể xem sản phẩm lập trình và bài giải của con ở đâu?**  
  👉 **A:** Mọi sản phẩm, log nỗ lực và nhận xét của Mentor được cập nhật liên tục theo thời gian thực trên Family Portal của từng học sinh.
* **Ấn phẩm Growth Story kết khóa được bàn giao dưới định dạng nào?**  
  👉 **A:** Gia đình nhận bản Digital tương tác trực quan trên Portal kèm bản in trang trọng lưu niệm gửi tới tận nhà sau Buổi 12.

</details>

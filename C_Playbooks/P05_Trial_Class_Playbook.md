---
id: P05-TRIAL-CLASS
title: "P05 · Trial Class Playbook — Nemo12 & Marlins Care"
status: approved
version: "2.0.0"
date: "2026-08-30"
authors: ["Marlins Care Ops", "Dolphin Mentors"]
domain: "Operational Playbooks / Trial & Fit Judgment"
relates_to:
  - "A1_Sitemap.md"
  - "A6_Playbooks_Template.md"
  - "A7_Content_Standards.md"
---

# P05 · Trial Class Playbook

> **Quy trình hỗ trợ phụ huynh đồng hành xuyên suốt 02 buổi học thử từ chuẩn bị, thu thập bằng chứng đến tư vấn độ phù hợp.**  
> **Triết lý:** *"Automate the evidence. Humanize the meaning."*

---

## Metadata Header
* **Objective:** Giúp phụ huynh an tâm chuẩn bị cho con, tự động thu thập bằng chứng học tập và nhận tư vấn trung thực về độ phù hợp.
* **Trigger:** Phụ huynh hoàn tất đăng ký 02 buổi học thử trên hệ thống.
* **Standard Time:** Hệ thống xử lý tức thời; Mentor tư vấn Fit Judgment ≤  15 phút/gia đình.
* **Target Audience:** Phụ huynh và học sinh mới đăng ký tham gia học thử lớp Sư Tử Con / Chuyên Toán.
* **Owner:** Hybrid (System & Mentor).
* **Output:** 02 buổi học thử hoàn tất + Báo cáo Trial Evidence trên Family Portal + Phiên tư vấn Fit Judgment trung thực.

---


---

---


<details open>
<summary><h3>Decision Logs</h3></summary>

Tổng hợp các quyết định kiến trúc và đánh giá CMMI DAR bảo vệ cho phương pháp tiếp cận của Playbook:

#### 📌 DAR 02: Mô Hình Đánh Giá Fit Judgment: System-Driven vs Human Insight
* **Bối cảnh:** Phân định vai trò giữa hệ thống tự động và mentor trong việc tham vấn kết quả 2 buổi học thử của học sinh.

| Tiêu Chí Đánh Giá (Criteria) | Trọng Số | Option A: 100% Hệ Thống Tự Động Gửi Báo Cáo | Option B: 100% Mentor Tự Nhận Xét Thủ Công | Option C: Hybrid (Hệ Thống Xuất Bằng Chứng + Mentor Tham Vấn) ⭐ |
| :--- | :---: | :---: | :---: | :---: |
| **C1: Bằng Chứng Khách Quan & Minh Bạch (Objectivity)** | W3 | 5.0 / 5 (15.0) | 2.0 / 5 (6.0) | 4.9 / 5 (14.7) |
| **C2: Thấu Cảm Bối Cảnh Cá Nhân (Human Judgment)** | W4 | 2.0 / 5 (8.0) | 4.8 / 5 (19.2) | 5.0 / 5 (20.0) |
| **C3: Tốc Độ Phản Hồi Trong 24h (SLA Speed)** | W3 | 5.0 / 5 (15.0) | 2.5 / 5 (7.5) | 4.8 / 5 (14.4) |
| **TỔNG ĐIỂM (TOTAL SCORE)** | **Sum: 10** | 38.0 / 50 | 32.7 / 50 | 49.1 / 50 (Approved ⭐) |
| **Phân Tích & Đánh Đổi (Trade-offs)** | — | Nhanh nhưng khô khan, thiếu sự thấu cảm bối cảnh riêng của từng đứa trẻ. | Chậm trễ, tốn nhiều thời gian và dễ rơi vào đánh giá cảm tính không số liệu. | Đòi hỏi Mentor dành thời gian gọi điện 1-1 thấu cảm thay vì hoàn toàn tự động hóa bằng bot. |

* **Quyết định:** Bằng chứng năng lực và log dữ liệu được hệ thống tự động xuất bản lên Portal (System-First); Mentor chịu trách nhiệm tham vấn trực tiếp 1-1 (Human Judgment) để đảm bảo sự đồng thuận cao nhất.

#### 📌 DAR 13: Quy Chuẩn 02 Buổi Học Thử Miễn Phí & Kiểm Soát No-Show
* **Bối cảnh:** Thiết kế số lượng buổi học thử tối ưu và cơ chế nhắc lịch để đảm bảo học sinh bộc lộ đúng năng lực mà không gây lãng phí nguồn lực.

| Tiêu Chí Đánh Giá (Criteria) | Trọng Số | Option A: 01 Buổi Học Thử Duy Nhất | Option B: 02 Buổi Học Thử Kèm Poll Zalo Nhắc Lịch Trước 24h ⭐ | Option C: 04 Buổi Học Thử Dài Ngày |
| :--- | :---: | :---: | :---: | :---: |
| **C1: Đủ Dữ Liệu Đánh Giá Năng Lực Học Sinh (Data Sufficiency)** | W4 | 2.0 / 5 (8.0) | 5.0 / 5 (20.0) | 4.5 / 5 (18.0) |
| **C2: Tỷ Lệ Đi Học Đầy Đủ (Show-up Rate)** | W3 | 4.5 / 5 (13.5) | 4.8 / 5 (14.4) | 2.5 / 5 (7.5) |
| **C3: Tối Ưu Chi Phí Giảng Dạy (Teaching Resource)** | W3 | 5.0 / 5 (15.0) | 4.5 / 5 (13.5) | 2.0 / 5 (6.0) |
| **TỔNG ĐIỂM (TOTAL SCORE)** | **Sum: 10** | 36.5 / 50 | 47.9 / 50 (Approved ⭐) | 31.5 / 50 |
| **Phân Tích & Đánh Đổi (Trade-offs)** | — | Thời gian quá ngắn, học sinh chưa kịp làm quen môi trường và bộc lộ tư duy. | Cần nhân sự theo dõi Poll Zalo trước 24h và sắp xếp lịch bù linh hoạt nếu học sinh vắng 1 buổi. | Gây quá tải vận hành cho mentor và giảm tính cam kết của gia đình. |

* **Quyết định:** Áp dụng mô hình 02 buổi Trial miễn phí để học sinh đủ thời gian bộc lộ phong cách tư duy; tích hợp Poll Zalo trước 24h tại Bước 1 để kiểm soát sĩ số chủ động.

#### 📌 DAR 14: Nguyên Tắc Sẵn Sàng Từ Chối (Honest Gatekeeping)
* **Bối cảnh:** Quy tắc ứng xử khi học sinh chưa sẵn sàng hoặc phong cách học tập không phù hợp với triết lý Nemo12.

| Tiêu Chí Đánh Giá (Criteria) | Trọng Số | Option A: Nhận 100% Học Sinh Để Đạt Chỉ Tiêu Tuyển Sinh | Option B: Trung Thực Từ Chối & Trao Lộ Trình Tự Học Bổ Trợ ⭐ |
| :--- | :---: | :---: | :---: |
| **C1: Bảo Toàn Chất Lượng & Môi Trường Học (Cohort Quality)** | W4 | 1.5 / 5 (6.0) | 5.0 / 5 (20.0) |
| **C2: Niềm Tin Dài Hạn Của Phụ Huynh (Long-term Trust)** | W4 | 2.0 / 5 (8.0) | 5.0 / 5 (20.0) |
| **C3: Áp Lực Doanh Số Ngắn Hạn (Short-term Revenue)** | W2 | 5.0 / 5 (10.0) | 3.0 / 5 (6.0) |
| **TỔNG ĐIỂM (TOTAL SCORE)** | **Sum: 10** | 24.0 / 50 | 46.0 / 50 (Approved ⭐) |
| **Phân Tích & Đánh Đổi (Trade-offs)** | — | Gây quá tải cho học sinh, giảm chất lượng lớp học và làm mất uy tín đường dài. | Chấp nhận hy sinh chỉ tiêu doanh số ngắn hạn để bảo toàn văn hóa học tập và chất lượng đồng hành. |

* **Quyết định:** Mentor tuyệt đối không vì áp lực doanh số mà nhận học sinh chưa phù hợp; sẵn sàng từ chối trung thực và trao lộ trình tự học tại nhà trên Portal.

</details>

---

<details>
<summary><h3>FAQ</h3></summary>

#### Nhóm 1: Về Quy Trình Học Thử (Trial Flow & Operations)
* **Học sinh vắng 1 trong 2 buổi Trial thì có được đánh giá Fit Judgment không?**  
  👉 **A:** Mentor sẽ hỗ trợ xếp lịch bù 1 buổi phù hợp để đảm bảo thu thập đủ dữ liệu 2 buổi trước khi đưa ra kết luận tham vấn chính thức.
* **Phụ huynh có được vào dự giờ cùng con trong 2 buổi Trial không?**  
  👉 **A:** Phụ huynh hoàn toàn được khuyến khích đồng hành quan sát trong yên lặng để thấu hiểu cách tương tác sư phạm của Mentor.

#### Nhóm 2: Về Tham Vấn & Quyết Định Nhập Học (Fit Judgment Consultation)
* **Nếu Mentor kết luận học sinh chưa phù hợp thì gia đình cần làm gì?**  
  👉 **A:** Mentor sẽ gửi kèm tài liệu hướng dẫn và bài tập rèn luyện tư duy nền tảng tại nhà trên Family Portal để con bổ trợ thêm trước khi thử lại.
* **Học phí và chính sách ưu đãi sau học thử được áp dụng như thế nào?**  
  👉 **A:** Hệ thống tự động áp dụng chính sách học phí minh bạch và bảo lưu quyền lợi cho phụ huynh xác nhận trong vòng 48h sau buổi tham vấn.

</details>

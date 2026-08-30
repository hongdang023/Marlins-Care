---
id: P02-COMMUNITY
title: "P02 · Community Playbook — Nemo12 & Marlins Care"
status: approved
version: "2.0.0"
date: "2026-08-30"
authors: ["Marlins Care Ops", "Anh Đắc", "Mentor Hồng"]
domain: "Operational Playbooks / Acquisition & Community"
relates_to:
  - "A1_Sitemap.md"
  - "A6_Playbooks_Template.md"
  - "A7_Content_Standards.md"
---

# P02 · Community Playbook

> **Quy trình vận hành hệ thống Group Zalo đa tầng (2 Broadcast Public + 1 Private Interactive) nuôi dưỡng niềm tin và chăm sóc sâu.**  
> **Triết lý:** *"Automate the evidence. Humanize the meaning."*

---

## Metadata Header
* **Objective:** Biến hệ thống Group Zalo cộng đồng thành không gian nuôi dưỡng niềm tin (Trust Building), phân tách đối tượng linh hoạt và vận hành tinh gọn.
* **Trigger:** Định kỳ hàng tuần (Thứ 2 chuẩn bị case, Thứ 3 & Thứ 5 phát sóng Public; Chủ Nhật đón tiếp phụ huynh Marlins Day vào Private).
* **Standard Time:** 25 phút / tuần (15p soạn Case Study + 10p gửi Broadcast đồng loạt).
* **Target Audience:** Phụ huynh quan tâm ôn thi Chuyên Toán/Lập trình Cấp 2, Cấp 3 và phụ huynh thân thiết Marlins.
* **Owner:** Mentor & System.
* **Output:** 1–2 bài Case Study tuần trên 2 Group Public + Phiên chăm sóc chuyên sâu trên Group Private Marlins.

---



---

<details open>
<summary><h3>🏛️ Decision Logs</h3></summary>

Tổng hợp các quyết định kiến trúc và đánh giá CMMI bảo vệ cho phương pháp tiếp cận của Playbook P02:

#### 📌 DAR 10: Kiến Trúc Phân Tầng Group Zalo: Broadcast Public vs Interactive Private
* **Bối cảnh:** Vận hành hệ thống cộng đồng phụ huynh lớn mà không làm loãng thông tin và không tốn nhân sự trực mod 24/7.
* **Ma trận đánh giá (CMMI Evaluation):**
  * *Option A (Mở chat 100% tất cả các nhóm):* 23/50 điểm — Ô nhiễm tin nhắn rác, phụ huynh tắt thông báo/rời nhóm hàng loạt.
  * *Option B (Chỉ dùng Fanpage/Zalo OA):* 27/50 điểm — Mất đi cảm giác ấm áp và gần gũi của Group cộng đồng.
  * *Option C (Mô hình phân tầng: 2 Broadcast Public + 1 Private Interactive) ⭐:* **48/50 điểm (Approved)**.
* **Quyết định:** Áp dụng mô hình **02 Public Groups cài đặt Broadcast 1 chiều (Low Maintenance, không spam)** để phát Case Study tuần + **01 Private Group (Nemo12 - Marlins) mở chat 2 chiều** cho phụ huynh sau sự kiện Marlins Day để chăm sóc sâu.

</details>

---


<details open>
<summary><h3>Decision Logs</h3></summary>

Tổng hợp các quyết định kiến trúc và đánh giá CMMI DAR bảo vệ cho phương pháp tiếp cận của Playbook:

#### 📌 DAR 10: Kiến Trúc Phân Tầng Group Zalo: Broadcast Public vs Interactive Private
* **Bối cảnh:** Vận hành hệ thống cộng đồng phụ huynh lớn mà không làm loãng thông tin và không tốn nhân sự trực mod 24/7.

| Tiêu Chí Đánh Giá (Criteria) | Trọng Số | Option A: Mở Chat 100% Tại Tất Cả Group | Option B: Chỉ Dùng Kênh Thông Báo Zalo OA / Fanpage | Option C: 2 Public Broadcast + 1 Private Interactive ⭐ |
| :--- | :---: | :---: | :---: | :---: |
| **C1: Tinh Gọn & Không Ô Nhiễm Tin Rác (Low Maintenance)** | W4 | 1.5 / 5 (6.0) | 4.0 / 5 (16.0) | 4.9 / 5 (19.6) |
| **C2: Chiều Sâu Gắn Kết & Chăm Sóc Riêng (High-Touch Value)** | W4 | 2.0 / 5 (8.0) | 2.5 / 5 (10.0) | 5.0 / 5 (20.0) |
| **C3: Khả Năng Mở Rộng Quy Mô (Scalability)** | W2 | 1.0 / 5 (2.0) | 5.0 / 5 (10.0) | 4.8 / 5 (9.6) |
| **TỔNG ĐIỂM (TOTAL SCORE)** | **Sum: 10** | 16.0 / 50 | 36.0 / 50 | 49.2 / 50 (Approved ⭐) |
| **Phân Tích & Đánh Đổi (Trade-offs)** | — | Tràn lan tin nhắn rác, phụ huynh tắt thông báo và rời nhóm hàng loạt. | Mất đi cảm giác ấm áp, thiếu không gian tương tác gần gũi cho phụ huynh thân thiết. | Cần phân quyền quản trị viên chuẩn hóa giữa 2 nhóm phát tin và 1 nhóm tương tác chiều sâu. |

* **Quyết định:** Áp dụng mô hình 02 Public Groups cài đặt Broadcast 1 chiều (Low Maintenance, không spam) để phát Case Study tuần + 01 Private Group (Nemo12 - Marlins) mở chat 2 chiều cho phụ huynh sau sự kiện Marlins Day để chăm sóc sâu.

</details>

---

<details>
<summary><h3>FAQ</h3></summary>

#### Nhóm 1: Về Tương Tác & Độ Sống Của Cộng Đồng (Community Engagement)
* **Group Zalo khóa chat 1 chiều thì có bị giảm tương tác không?**  
  👉 **A:** Phụ huynh bận rộn đánh giá cao việc nhóm không có tin rác. Mỗi bài Case Study gửi đi đều mang lại giá trị cao và tỷ lệ giữ chân phụ huynh cao hơn 60% so với nhóm mở chat.
* **Nội dung chia sẻ cho nhóm Cấp 2 và Cấp 3 có bị lệch tệp không?**  
  👉 **A:** Quy luật tư duy logic và điểm mù học tập có tính phổ quát; việc tách 2 nhóm giúp phân đoạn chính xác khi gửi các thông báo chuyên sâu từng kỳ thi.

#### Nhóm 2: Về Đo Lường & Đạo Đức Sư Phạm (Ethics & Attribution)
* **Nguồn phụ huynh mới gia nhập nhóm cộng đồng đến từ đâu?**  
  👉 **A:** Đến từ bài viết phản tư trên trang cá nhân của Mentor, lời giới thiệu truyền miệng của phụ huynh cũ và các diễn đàn giáo dục uy tín.
* **Cách bảo mật danh tính khi đưa tình huống học sinh vào Case Study?**  
  👉 **A:** Toàn bộ tên học sinh được ẩn danh hóa bằng nickname, dữ liệu được tổng hợp từ nhiều buổi học khác nhau để phân tích bài học sư phạm mà không lộ danh tính.

</details>

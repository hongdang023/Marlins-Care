---
id: P08-REFERRALS
title: "P08 · Referrals Program Playbook — Nemo12 & Marlins Care"
status: approved
version: "2.0.0"
date: "2026-08-30"
authors: ["Marlins Care Ops", "System Team"]
domain: "Operational Playbooks / Referral & Advocacy"
relates_to:
  - "A1_Sitemap.md"
  - "A6_Playbooks_Template.md"
  - "A7_Content_Standards.md"
---

# P08 · Referrals Program Playbook

> **Quy chuẩn chính sách và cơ chế vận hành tự động chương trình Phụ huynh Giới thiệu Phụ huynh (Chính sách 15% - 15%), tích hợp sẵn trên Family Portal.**  
> **Triết lý:** *"Automate the evidence. Humanize the meaning."*

---

## Metadata Header
* **Objective:** Tạo cơ chế tri ân tự nhiên và minh bạch để phụ huynh tin tưởng chủ động chia sẻ môi trường học tập Nemo12 cho bạn bè; tự động hóa 100% việc cấp mã và áp dụng ưu đãi.
* **Trigger:** Phụ huynh đăng nhập Family Portal hoặc chia sẻ link giới thiệu.
* **Standard Time:** Tự động hóa 100% thời gian thực (Realtime); Cấp voucher ngay sau khi giao dịch thành công.
* **Target Audience:** Phụ huynh có con đang theo học hoặc đã hoàn thành khóa học tại Nemo12.
* **Owner:** System.
* **Output:** Mã giới thiệu cá nhân hóa trên Portal + Voucher 15% tự động trong ví phụ huynh + Ưu đãi 15% cho học viên mới.

---


---

---


<details open>
<summary><h3>Decision Logs</h3></summary>

Tổng hợp các quyết định kiến trúc và đánh giá CMMI DAR bảo vệ cho phương pháp tiếp cận của Playbook:

#### 📌 DAR 12: Cơ Chế Tri Ân Song Phương: Tiền Mặt Chiết Khấu vs Tuition Credit 15% - 15%
* **Bối cảnh:** Lựa chọn chính sách tưởng thưởng giới thiệu phụ huynh mới vừa đảm bảo đạo đức giáo dục vừa khuyến khích lan tỏa tự nhiên.

| Tiêu Chí Đánh Giá (Criteria) | Trọng Số | Option A: Hoa Hồng Tiền Mặt Chiết Khấu Trực Tiếp | Option B: Chính Sách Tri Ân Song Phương 15% - 15% Tuition Credit ⭐ |
| :--- | :---: | :---: | :---: |
| **C1: Giữ Gìn Chuẩn Mực & Đạo Đức Sư Phạm (Educational Dignity)** | W4 | 1.0 / 5 (4.0) | 5.0 / 5 (20.0) |
| **C2: Động Lực Lan Tỏa Chân Thành (Organic Advocacy)** | W3 | 3.0 / 5 (9.0) | 4.8 / 5 (14.4) |
| **C3: Tự Động Hóa 100% Trên Hệ Thống (System Automation)** | W3 | 4.0 / 5 (12.0) | 5.0 / 5 (15.0) |
| **TỔNG ĐIỂM (TOTAL SCORE)** | **Sum: 10** | 25.0 / 50 | 49.4 / 50 (Approved ⭐) |
| **Phân Tích & Đánh Đổi (Trade-offs)** | — | Thương mại hóa mối quan hệ phụ huynh, làm giảm giá trị và uy tín cao quý của giáo dục. | Học phí tích lũy dạng credit giáo dục trên hệ thống, không tạo doanh thu tiền mặt tức thì từ phí hoa hồng. |

* **Quyết định:** Áp dụng chính sách Tri Ân Song Phương 15% - 15% Tuition Credit tự động kích hoạt trên Family Portal, tuyệt đối không dùng hoa hồng tiền mặt thương mại.

</details>

---

<details>
<summary><h3>FAQ</h3></summary>

#### Nhóm 1: Về Cơ Chế & Điều Kiện Áp Dụng (Program Rules & Eligibility)
* **Mã giới thiệu cá nhân của phụ huynh lấy ở đâu?**  
  👉 **A:** Phụ huynh chỉ cần đăng nhập Family Portal, mã giới thiệu độc bản kèm link chia sẻ nhanh sẽ hiển thị ngay tại mục Tri Ân Đồng Hành.
* **Tuition Credit 15% có thời hạn sử dụng trong bao lâu?**  
  👉 **A:** Credit có giá trị tích lũy vĩnh viễn và được tự động khấu trừ vào học phí các khóa học nâng cao kế tiếp của con hoặc chuyển tặng cho người thân.

#### Nhóm 2: Về Tự Động Hóa & Minh Bạch (Automation & Tracking)
* **Làm sao phụ huynh biết bạn bè của mình đã sử dụng mã giới thiệu thành công?**  
  👉 **A:** Hệ thống tự động gửi thông báo chúc mừng qua Zalo và cập nhật trạng thái voucher vào ví điện tử trên Portal của phụ huynh ngay khi giao dịch hoàn tất.
* **Gia đình mới được nhận ưu đãi như thế nào khi đăng ký qua link giới thiệu?**  
  👉 **A:** Học sinh mới được tự động giảm trực tiếp 15% học phí ngay tại bước thanh toán học phí chính thức.

</details>

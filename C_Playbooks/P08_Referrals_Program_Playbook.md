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

<details open>
<summary><h3>SOP Steps</h3></summary>

| Bước | Hành động Hệ thống (System Action) | Hành động Phụ huynh (Parent Action) |
| :--- | :--- | :--- |
| **1. Cấp mã độc bản** | Tự động tạo `Referral_Code` và đường dẫn cá nhân hóa hiển thị sẵn trên Family Portal. | Đăng nhập Portal, bấm 1 chạm để sao chép link giới thiệu. |
| **2. Gắn tag tự động** | Khi người mới click link và điền thông tin đăng ký $\to$ Hệ thống tự động liên kết ID của người giới thiệu vào hồ sơ học sinh mới. | Gửi link qua tin nhắn cho bạn bè/người thân có con trong độ tuổi. |
| **3. Xác thực thanh toán** | Khi người mới thanh toán thành công khóa 12 buổi $\to$ Hệ thống tự động áp dụng mức giảm 15% học phí cho hóa đơn của người mới. | Người mới nhận ưu đãi 15% ngay trên màn hình thanh toán. |
| **4. Trả thưởng người giới thiệu** | Tự động cộng Voucher 15% vào ví tài khoản Family Portal của người giới thiệu + Gửi Email chúc mừng và cảm ơn tự động. | Người giới thiệu nhận thông báo qua Email/Portal, dùng voucher cho kỳ học tiếp theo của con. |

</details>

---

<details open>
<summary><h3>Do's & Don'ts</h3></summary>

| Do's | Don'ts |
| :--- | :--- |
| ✅ **Minh bạch trạng thái:** Hiển thị rõ ràng trên Family Portal trạng thái lời giới thiệu để phụ huynh dễ theo dõi. | ❌ **Tuyệt đối không biến thành mô hình đa cấp (Zero MLM):** Không tạo hoa hồng nhiều tầng, không chi trả tiền mặt. |
| ✅ **Trân trọng lời giới thiệu:** Gửi Email cảm ơn ấm áp mang danh nghĩa Giảng viên/Mentor trực tiếp dạy con. | ❌ **Không làm phiền:** Không liên tục spam tin nhắn ép phụ huynh phải đi chia sẻ link. |
| ✅ **Hỗ trợ kịp thời:** Giải quyết tức thời các trường hợp phụ huynh quên nhập mã giới thiệu qua kênh hỗ trợ 1-1. | ❌ **Không gây khó dễ:** Không đặt ra các điều khoản ẩn gây khó khăn khi áp dụng voucher học phí. |

</details>

---

<details>
<summary><h3>Assessment Rubrics</h3></summary>

Đánh giá chất lượng chương trình Referrals Program theo 3 tiêu chuẩn phổ quát (Thang đo L1 – L5, **L3 là Definition of Done ⭐**):

| Trụ Cột Đánh Giá | L1 (Chưa Đạt) | L2 (Cơ Bản) | L3 (Đạt Chuẩn - DoD ⭐) | L4 (Tốt) | L5 (Xuất Sắc) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. System Automation** | Hệ thống lỗi mã, không ghi nhận người giới thiệu, phải xử lý thủ công. | Hệ thống hoạt động nhưng chậm trễ, phải chờ duyệt tay mất nhiều ngày. | **Hệ thống tự động hóa 100% thời gian thực; cấp mã và áp dụng voucher 15% tức thì và chính xác.** | Giao diện quản lý ví voucher trên Portal mượt mà, trực quan, hỗ trợ chia sẻ 1-click. | Hệ thống ổn định tuyệt đối, tự động phân tích và đề xuất tri ân phụ huynh đại sứ tích cực. |
| **2. Policy Integrity** | Trả tiền mặt hoặc tạo chính sách hoa hồng nhiều tầng kiểu đa cấp (MLM). | Chính sách mập mờ, nhiều điều kiện ràng buộc gây khó khăn cho phụ huynh. | **Tuân thủ nghiêm ngặt chính sách 15% - 15% dạng Tuition Credit; minh bạch và rõ ràng.** | Truyền thông chính sách nhẹ nhàng, mang tinh thần tri ân giáo dục văn minh. | Phụ huynh hoàn toàn tự hào khi chia sẻ vì tính minh bạch và nhân văn của chương trình. |
| **3. Advocacy Growth** | Không có phụ huynh nào giới thiệu; phụ huynh e ngại chia sẻ. | Chỉ có vài lượt chia sẻ mang tính chất người thân trong gia đình. | **$\ge 20\%$ học viên mới đến từ nguồn phụ huynh giới thiệu (Organic Referral).** | Hình thành mạng lưới phụ huynh đại sứ gắn kết, chủ động bảo vệ và lan tỏa giá trị Nemo12. | Chương trình trở thành động cơ tăng trưởng tự nhiên bền vững nhất của tổ chức. |

</details>

---

<details open>
<summary><h3>Do's & Don'ts</h3></summary>

| Do's | Don'ts |
| :--- | :--- |
| ✅ **Minh bạch trạng thái:** Hiển thị rõ ràng trên Family Portal trạng thái lời giới thiệu để phụ huynh dễ theo dõi. | ❌ **Tuyệt đối không biến thành mô hình đa cấp (Zero MLM):** Không tạo hoa hồng nhiều tầng, không chi trả tiền mặt. |
| ✅ **Trân trọng lời giới thiệu:** Gửi Email cảm ơn ấm áp mang danh nghĩa Giảng viên/Mentor trực tiếp dạy con. | ❌ **Không làm phiền:** Không liên tục spam tin nhắn ép phụ huynh phải đi chia sẻ link. |
| ✅ **Hỗ trợ kịp thời:** Giải quyết tức thời các trường hợp phụ huynh quên nhập mã giới thiệu qua kênh hỗ trợ 1-1. | ❌ **Không gây khó dễ:** Không đặt ra các điều khoản ẩn gây khó khăn khi áp dụng voucher học phí. |

</details>

---

<details>
<summary><h3>Assessment Rubrics</h3></summary>

| Trụ Cột Đánh Giá | L1 (Chưa Đạt) | L2 (Cơ Bản) | L3 (ĐẠT CHUẨN DoD ⭐) | L4 (Tốt) | L5 (Xuất Sắc) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. System Automation** | Hệ thống lỗi mã, không ghi nhận người giới thiệu, phải xử lý thủ công. | Hệ thống hoạt động nhưng chậm trễ, phải chờ duyệt tay mất nhiều ngày. | **Hệ thống tự động hóa 100% thời gian thực; cấp mã và áp dụng voucher 15% tức thì và chính xác.** | Giao diện quản lý ví voucher trên Portal mượt mà, trực quan, hỗ trợ chia sẻ 1-click. | Hệ thống ổn định tuyệt đối, tự động phân tích và đề xuất tri ân phụ huynh đại sứ tích cực. |
| **2. Policy Integrity** | Trả tiền mặt hoặc tạo chính sách hoa hồng nhiều tầng kiểu đa cấp (MLM). | Chính sách mập mờ, nhiều điều kiện ràng buộc gây khó khăn cho phụ huynh. | **Tuân thủ nghiêm ngặt chính sách 15% - 15% dạng Tuition Credit; minh bạch và rõ ràng.** | Truyền thông chính sách nhẹ nhàng, mang tinh thần tri ân giáo dục văn minh. | Phụ huynh hoàn toàn tự hào khi chia sẻ vì tính minh bạch và nhân văn của chương trình. |
| **3. Advocacy Growth** | Không có phụ huynh nào giới thiệu; phụ huynh e ngại chia sẻ. | Chỉ có vài lượt chia sẻ mang tính chất người thân trong gia đình. | **$\ge 20\%$ học viên mới đến từ nguồn phụ huynh giới thiệu (Organic Referral).** | Hình thành mạng lưới phụ huynh đại sứ gắn kết, chủ động bảo vệ và lan tỏa giá trị Nemo12. | Chương trình trở thành động cơ tăng trưởng tự nhiên bền vững nhất của tổ chức. |

</details>

---

<details open>
<summary><h3>Decision Logs</h3></summary>

Tổng hợp các quyết định kiến trúc và đánh giá CMMI DAR bảo vệ cho phương pháp tiếp cận của Playbook:

#### DAR 12: Cơ Chế Tri Ân Song Phương: Tiền Mặt Chiết Khấu vs Tuition Credit 15% - 15%
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

<details open>
<summary><h3>Do's & Don'ts</h3></summary>

| Do's | Don'ts |
| :--- | :--- |
| ✅ **Minh bạch trạng thái:** Hiển thị rõ ràng trên Family Portal trạng thái lời giới thiệu để phụ huynh dễ theo dõi. | ❌ **Tuyệt đối không biến thành mô hình đa cấp (Zero MLM):** Không tạo hoa hồng nhiều tầng, không chi trả tiền mặt. |
| ✅ **Trân trọng lời giới thiệu:** Gửi Email cảm ơn ấm áp mang danh nghĩa Giảng viên/Mentor trực tiếp dạy con. | ❌ **Không làm phiền:** Không liên tục spam tin nhắn ép phụ huynh phải đi chia sẻ link. |
| ✅ **Hỗ trợ kịp thời:** Giải quyết tức thời các trường hợp phụ huynh quên nhập mã giới thiệu qua kênh hỗ trợ 1-1. | ❌ **Không gây khó dễ:** Không đặt ra các điều khoản ẩn gây khó khăn khi áp dụng voucher học phí. |

</details>

---

<details>
<summary><h3>Assessment Rubrics</h3></summary>

| Trụ Cột Đánh Giá | L1 (Chưa Đạt) | L2 (Cơ Bản) | L3 (ĐẠT CHUẨN DoD ⭐) | L4 (Tốt) | L5 (Xuất Sắc) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. System Automation** | Hệ thống lỗi mã, không ghi nhận người giới thiệu, phải xử lý thủ công. | Hệ thống hoạt động nhưng chậm trễ, phải chờ duyệt tay mất nhiều ngày. | **Hệ thống tự động hóa 100% thời gian thực; cấp mã và áp dụng voucher 15% tức thì và chính xác.** | Giao diện quản lý ví voucher trên Portal mượt mà, trực quan, hỗ trợ chia sẻ 1-click. | Hệ thống ổn định tuyệt đối, tự động phân tích và đề xuất tri ân phụ huynh đại sứ tích cực. |
| **2. Policy Integrity** | Trả tiền mặt hoặc tạo chính sách hoa hồng nhiều tầng kiểu đa cấp (MLM). | Chính sách mập mờ, nhiều điều kiện ràng buộc gây khó khăn cho phụ huynh. | **Tuân thủ nghiêm ngặt chính sách 15% - 15% dạng Tuition Credit; minh bạch và rõ ràng.** | Truyền thông chính sách nhẹ nhàng, mang tinh thần tri ân giáo dục văn minh. | Phụ huynh hoàn toàn tự hào khi chia sẻ vì tính minh bạch và nhân văn của chương trình. |
| **3. Advocacy Growth** | Không có phụ huynh nào giới thiệu; phụ huynh e ngại chia sẻ. | Chỉ có vài lượt chia sẻ mang tính chất người thân trong gia đình. | **$\ge 20\%$ học viên mới đến từ nguồn phụ huynh giới thiệu (Organic Referral).** | Hình thành mạng lưới phụ huynh đại sứ gắn kết, chủ động bảo vệ và lan tỏa giá trị Nemo12. | Chương trình trở thành động cơ tăng trưởng tự nhiên bền vững nhất của tổ chức. |

</details>

---

<details open>
<summary><h3>Decision Logs</h3></summary>

Tổng hợp các quyết định kiến trúc và đánh giá CMMI DAR bảo vệ cho phương pháp tiếp cận của Playbook:

#### DAR 12: Cơ Chế Tri Ân Song Phương: Tiền Mặt Chiết Khấu vs Tuition Credit 15% - 15%
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

<details open>
<summary><h3>Decision Logs</h3></summary>

Tổng hợp các quyết định kiến trúc và đánh giá CMMI DAR bảo vệ cho phương pháp tiếp cận của Playbook:

#### DAR 12: Cơ Chế Tri Ân Song Phương: Tiền Mặt Chiết Khấu vs Tuition Credit 15% - 15%
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

#### Program Rules & Eligibility
* **Mã giới thiệu cá nhân của phụ huynh lấy ở đâu?**  
  👉 **A:** Phụ huynh chỉ cần đăng nhập Family Portal, mã giới thiệu độc bản kèm link chia sẻ nhanh sẽ hiển thị ngay tại mục Tri Ân Đồng Hành.
* **Tuition Credit 15% có thời hạn sử dụng trong bao lâu?**  
  👉 **A:** Credit có giá trị tích lũy vĩnh viễn và được tự động khấu trừ vào học phí các khóa học nâng cao kế tiếp của con hoặc chuyển tặng cho người thân.

#### Automation & Tracking
* **Làm sao phụ huynh biết bạn bè của mình đã sử dụng mã giới thiệu thành công?**  
  👉 **A:** Hệ thống tự động gửi thông báo chúc mừng qua Zalo và cập nhật trạng thái voucher vào ví điện tử trên Portal của phụ huynh ngay khi giao dịch hoàn tất.
* **Gia đình mới được nhận ưu đãi như thế nào khi đăng ký qua link giới thiệu?**  
  👉 **A:** Học sinh mới được tự động giảm trực tiếp 15% học phí ngay tại bước thanh toán học phí chính thức.

</details>

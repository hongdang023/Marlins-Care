---
title: "Decision Logs"
---

# Decision Logs

Tổng hợp các quyết định kiến trúc và đánh giá CMMI bảo vệ cho phương pháp tiếp cận của Playbook.

<details class="custom-toggle" style="margin-bottom: 12px; border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 10px 16px;">
<summary style="font-weight: 600; cursor: pointer; color: var(--vp-c-brand-1);">
DAR 07: Kênh Truyền Thông: Mentor Personal Branding vs Company Fanpage
</summary>


* **Bối cảnh:** Lựa chọn kênh truyền thông mạng xã hội giữa Facebook cá nhân của Mentor và Fanpage công ty để thu hút phụ huynh đồng hành.

| Tiêu Chí Đánh Giá (Criteria) | Trọng Số | Option A: 100% Fanpage Công Ty | Option B: 100% Facebook Cá Nhân Mentor | Option C: Hybrid (Mentor-First + Fanpage Curation) ⭐ |
| :--- | :---: | :---: | :---: | :---: |
| **C1: Tính Khả Thi & Tinh Gọn (Feasibility)** | W3 | 2.5 / 5 (7.5) | 4.0 / 5 (12.0) | 4.8 / 5 (14.4) |
| **C2: Tác Động Niềm Tin & Thấu Cảm (Trust & Empathy)** | W4 | 2.0 / 5 (8.0) | 4.5 / 5 (18.0) | 5.0 / 5 (20.0) |
| **C3: An Toàn & Bảo Toàn Tri Thức (Asset Retention)** | W3 | 4.5 / 5 (13.5) | 2.0 / 5 (6.0) | 4.8 / 5 (14.4) |
| **TỔNG ĐIỂM (TOTAL SCORE)** | **Sum: 10** | 29.0 / 50 | 36.0 / 50 | 48.8 / 50 (Approved ⭐) |
| **Phân Tích & Đánh Đổi (Trade-offs)** | — | Reach tự nhiên thấp, phụ huynh có tâm lý phòng thủ cao trước các trang thương mại. | Reach cao và ấm áp nhưng rủi ro phụ thuộc cá nhân và thiếu tính kế thừa cho tổ chức. | Hiệu quả niềm tin cao nhất nhưng đòi hỏi Mentor duy trì tính kỷ luật xuất bản và Ops phối hợp biên tập lưu trữ. |

* **Quyết định:** Facebook cá nhân Mentor là mũi nhọn tiếp cận cảm xúc và xây dựng niềm tin tự nhiên (Human-Led First); Fanpage/Hub của tổ chức đóng vai trò tuyển tập, khuếch đại và lưu trữ tài sản tri thức.

</details>

<details class="custom-toggle" style="margin-bottom: 12px; border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 10px 16px;">
<summary style="font-weight: 600; cursor: pointer; color: var(--vp-c-brand-1);">
DAR 08: Quyền Riêng Tư & Bảo Vệ Hình Ảnh Trẻ Em (Child Privacy & Consent)
</summary>


* **Bối cảnh:** Sử dụng hình ảnh và sản phẩm học sinh thực tế để tạo trust nhưng phải tuân thủ Luật Trẻ em & Nghị định 13/2023/NĐ-CP.

| Tiêu Chí Đánh Giá (Criteria) | Trọng Số | Option A: Đăng Tự Do Không Xin Phép | Option B: Che Mặt 100% & Ẩn Mọi Dữ Liệu | Option C: Cấu Trúc Đồng Thuận Đa Tầng (Tiered Consent) ⭐ |
| :--- | :---: | :---: | :---: | :---: |
| **C1: Tuân Thủ Pháp Lý & An Toàn Trẻ (Legal & Privacy)** | W4 | 1.0 / 5 (4.0) | 5.0 / 5 (20.0) | 5.0 / 5 (20.0) |
| **C2: Bằng Chứng Cảm Xúc Người Thật (Authenticity)** | W3 | 5.0 / 5 (15.0) | 2.0 / 5 (6.0) | 4.8 / 5 (14.4) |
| **C3: Độ Tinh Gọn Trong Vận Hành (Low Maintenance)** | W3 | 4.5 / 5 (13.5) | 3.0 / 5 (9.0) | 4.6 / 5 (13.8) |
| **TỔNG ĐIỂM (TOTAL SCORE)** | **Sum: 10** | 32.5 / 50 | 35.0 / 50 | 48.2 / 50 (Approved ⭐) |
| **Phân Tích & Đánh Đổi (Trade-offs)** | — | Rủi ro pháp lý nghiêm trọng và vi phạm quyền riêng tư của gia đình. | Mất hoàn toàn tính cảm xúc và bằng chứng mặt người thật việc thật. | Cần thiết lập quy trình Onboarding phân tầng chặt chẽ và lọc dữ liệu ảnh trước khi đăng tải. |

* **Quyết định:** Thiết lập Cấu trúc Đồng thuận Đa tầng (Tiered Consent: Tier 1 Public / Tier 2 Obscured / Tier 3 Private) ngay từ Form Onboarding; ẩn danh hóa 100% họ tên thật (chỉ dùng biệt danh) và không tự ý tag phụ huynh.

</details>

<details class="custom-toggle" style="margin-bottom: 12px; border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 10px 16px;">
<summary style="font-weight: 600; cursor: pointer; color: var(--vp-c-brand-1);">
DAR 09: Định Vị Nội Dung: Zero Hard-Selling vs Chuyển Đổi Thực Tế
</summary>


* **Bối cảnh:** Giữ vững giá trị giáo dục phản tư chân thành, tuyệt đối không biến kênh cá nhân thành nơi bán hàng nhưng vẫn đo lường được hiệu quả.

| Tiêu Chí Đánh Giá (Criteria) | Trọng Số | Option A: Chèn Link Bán Khóa Học Trực Tiếp | Option B: Chia Sẻ Tự Nhiên Không Đo Lường | Option C: Zero Hard-Selling + Đo Lường Ngầm Qua CRM ⭐ |
| :--- | :---: | :---: | :---: | :---: |
| **C1: Bảo Toàn Uy Tín & Giá Trị Chân Thật (Integrity)** | W4 | 1.5 / 5 (6.0) | 5.0 / 5 (20.0) | 5.0 / 5 (20.0) |
| **C2: Đo Lường Hiệu Quả Tăng Trưởng (Attribution)** | W3 | 5.0 / 5 (15.0) | 1.0 / 5 (3.0) | 4.8 / 5 (14.4) |
| **C3: Trải Nghiệm Tiếp Nhận Của Phụ Huynh (User Experience)** | W3 | 2.0 / 5 (6.0) | 4.5 / 5 (13.5) | 4.9 / 5 (14.7) |
| **TỔNG ĐIỂM (TOTAL SCORE)** | **Sum: 10** | 27.0 / 50 | 36.5 / 50 | 49.1 / 50 (Approved ⭐) |
| **Phân Tích & Đánh Đổi (Trade-offs)** | — | Mất sự tin cậy, gây phản cảm và biến mentor thành nhân viên telesales. | Mù mờ về nguồn tuyển sinh và không tối ưu được nỗ lực của mentor. | Tốc độ thu lead trực tiếp chậm hơn telesales, đòi hỏi kiên trì nuôi dưỡng niềm tin và đo lường gián tiếp qua CRM. |

* **Quyết định:** Tuyệt đối giữ nguyên tắc Zero Hard-Selling trên trang cá nhân; đo lường chuyển đổi qua CRM Tagging (Lead_Source: Mentor_Social_Reflections) và câu hỏi khám phá nguồn tại Form Onboarding.

</details>


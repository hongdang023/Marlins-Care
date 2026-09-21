---
id: A4-PARENT-JOURNEY
title: "A4 · Parent Journey Framework — Core Path & Triggered Branches"
status: approved
version: "3.0.0"
date: "2026-08-29"
authors: ["Antigravity", "Nemo12 Design & Frontend Core", "Marlins Care Ops"]
domain: "Product Requirements / Parent Journey Architecture"
relates_to:
  - "A1_Sitemap.md"
  - "A3_Parent_JTBD_and_Needs.md"
  - "A6_Playbooks_Template.md"
  - "B1_UI_Design_System.md"
---

# A4 · Parent Journey Framework

## 1. Bản Chất Kiến Trúc Hành Trình

Hành trình phụ huynh tại Nemo12 & Marlins Care được thiết kế theo cấu trúc:
> **Core Path (Đường ray chính) + Triggered Branches (Các nhánh rẽ kích hoạt có điều kiện)**

Hành trình **không phải là một checklist cứng nhắc** bắt buộc mọi gia đình đều phải đi qua tất cả các điểm chạm, mà là một hệ thống phản ứng thông minh dựa trên tín hiệu thực tế. Toàn bộ hành trình được vận hành xoay quanh **6 Playbooks Chuẩn Hóa Theo Thứ Tự Thời Gian**.

---

## 2. Bảng Ánh Xạ 3 Pha Vòng Đời (3-Phase Framework)

| Pha (Phase) | Cột Mốc Thời Gian | JTBD Trọng Tâm | Trải Nghiệm Mong Muốn Của Phụ Huynh | Vai Trò Hệ Thống (System) | Vai Trò Con Người (Human) | Playbooks Vận Hành |
|---|---|---|---|---|---|:---:|
| **Pha 1: Trước Khóa Học** *(Pre-enrollment & Acquisition)* | Tiếp cận, Nhận thức & Workshop | `F5`, `E1`, `S3`, `F1` | Hiểu rõ phương pháp giáo dục bản chất, tháo gỡ bế tắc/ngộ nhận khi kèm con, chuẩn bị tâm thế vững vàng và tin tưởng đồng hành cùng Nemo12. | Tự động hóa đăng ký, gửi thông tin chuẩn bị Workshop, cập nhật học liệu tự học trên Family Portal. | Xây dựng thương hiệu cá nhân (**Social Media**), Quản trị cộng đồng (**Community**), Tổ chức Workshop trực tuyến tương tác cao (**Marlins Workshop**). | **Social Media, Community, Marlins Workshop** |
| **Pha 2: Trong Khóa Học** *(Active 12-session Journey)* | 12 Buổi Live Class | `F1`, `F4`, `E2`, `F2`, `S5` | Thấy con tiến bộ thực chất bằng dữ liệu, cảm nhận con được thấu hiểu qua Mentor, có kỷ niệm gia đình ý nghĩa và nhận Growth Story kết khóa. | Gửi báo cáo tiến độ tuần tự động, phát hiện sụt giảm nỗ lực / kẹt bài tập (**Live Class**). | **Live Class Mentoring Routine** (**Live Class**) quan sát độc bản & can thiệp sư phạm; tổ chức **Family Meeting** (**Family Meeting**) tại khoảnh khắc ý nghĩa. | **Live Class, Family Meeting** |
| **Pha 3: Sau Khóa Học** *(Post-course & Retention)* | Tái tục & Lan tỏa cộng đồng | `S2`, `E5`, `F3`, `S4` | Tiếp tục đồng hành dài hạn và trở thành đại sứ lan tỏa giá trị giáo dục Nemo12 đến bạn bè. | Quản trị mã liên kết và ghi nhận ưu đãi tự động 15% - 15% trên Family Portal (**Referrals Program**). | Chăm sóc và tri ấn phụ huynh đại sứ (**Referrals Program**). | **Referrals Program** |

---

## Triggered Branches

Các nhánh này chỉ xuất hiện khi có tín hiệu kích hoạt cụ thể từ hệ thống hoặc nhu cầu gia đình:

```mermaid
graph TD
    Main["Core Learning Path (Buổi 1 ➡️ 12 · Live Class Playbook)"]
    
    Main -.->|Tín hiệu vắng học / Kẹt bài tập| B1["Nhánh Can Thiệp Rủi Ro (Risk Intervention · Trong Live Class)<br><i>System phát hiện ➡️ Mentor xác minh bối cảnh</i>"]
    Main -.->|Phụ huynh thắc mắc / Cần hỗ trợ| B2["Nhánh Phản Hồi Phụ Huynh (Parent Support · Trong Live Class)<br><i>Tự động phân luồng ➡️ Mentor phản hồi trong 24h</i>"]
    Main -.->|Khoảnh khắc bứt phá / Ý nghĩa sâu sắc| B3["Nhánh Trải Nghiệm Chuyên Sâu (Family Meeting Playbook)<br><i>Gặp gỡ trực tiếp / Thấu hiểu gia đình chiều sâu</i>"]
    Main -.->|Cột mốc tiến bộ vượt bậc| B4["Nhánh Vinh Danh Tiến Bộ (Milestone Recognition · Trong Live Class)<br><i>Hệ thống gắn cờ ➡️ Mentor gửi lời công nhận</i>"]
```

---

## Persistent Capabilities

* **Marlins Workshop (15h00 - 17h00 Chủ Nhật):** Không phải là sự kiện một lần duy nhất. Đây là **năng lực hỗ trợ thường trực (Persistent Capability)** trên Zoom sẵn sàng tiếp đón phụ huynh ở bất kỳ giai đoạn nào khi họ cần gỡ rối định kiến hoặc muốn trao đổi phương pháp giáo dục.

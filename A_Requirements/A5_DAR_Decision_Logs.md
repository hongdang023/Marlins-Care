---
id: A5-DAR-DECISION-LOGS
title: "A5 · DAR Decision Logs & Frozen Architecture Decisions — Parent Care Hub"
status: approved
version: "2.0.0"
date: "2026-08-28"
authors: ["Antigravity", "Nemo12 Design & Frontend Core", "Marlins Care Ops"]
domain: "Product Requirements / Decision Architecture Records (DAR)"
relates_to:
  - "A1_Sitemap.md"
  - "A2_Product_Goal_and_Vision.md"
  - "A4_Parent_Journey_Framework.md"
---

# A5 · DAR Decision Logs & Frozen Architecture Decisions

Tài liệu ghi nhận 5 Quyết định Kiến trúc Bắt buộc (Decision Architecture Records - DAR) và 12 Quyết định Đóng băng (Frozen Decisions) không được phép tự ý thay đổi nếu không có quy trình đánh giá DAR mới.

---

## 1. Danh Sách 5 Quyết Định Kiến Trúc (DAR 01 – DAR 05)

### DAR 01 — Mid-point Parent Pulse (Dò Tìm Khoảng Trống Kỳ Vọng)
* **Bối cảnh:** Cần phát hiện sớm các bất an, băn khoăn thầm kín của phụ huynh mà hệ thống log máy móc không ghi nhận được.
* **Quyết định:** Thử nghiệm khảo sát siêu nhẹ (**Pilot $\le$ 3 câu hỏi, $\le$ 3 phút**) quanh Buổi 6. **Tuyệt đối không tổ chức cuộc họp bắt buộc dài dòng**.
* **Phân luồng xử lý (Routing):**
  * *Hài lòng / Không vấn đề:* Đóng ticket, gửi lời cảm ơn.
  * *Thắc mắc nhỏ:* Mentor nhắn tin phản hồi trong 24h.
  * *Kỳ vọng sai lệch / Băn khoăn lớn:* Chuyển tiếp Marlins Host / Quản lý can thiệp.

---

### DAR 02 — Post-Trial Fit Alignment (Đồng Thuận Quyết Định Sau Học Thử)
* **Bối cảnh:** Sau 2 buổi học thử, phụ huynh cần đưa ra quyết định đăng ký chính thức.
* **Quyết định:** Tổ chức theo mô hình **Hybrid: Bằng chứng học tập tự động (System) + Tham vấn mức độ phù hợp (Human Fit Judgment)**.
* **Nguyên tắc cốt lõi:** Tuyệt đối không biến thành cuộc gọi bán hàng ép chốt (Hard-sales call). Trọng tâm là đánh giá xem năng lực/tâm lý của học sinh và kỳ vọng của gia đình có thực sự khớp với triết lý của Nemo12 hay không.

---

### DAR 03 — Learning Concern & Risk Intervention Engine (Bộ Máy Xử Lý Nguy Cơ)
* **Bối cảnh:** Khi học sinh có dấu hiệu chán nản, vắng học hoặc kẹt bài tập.
* **Quyết định:** Vận hành theo chu trình 4 bước:
  > **Signal (Tín hiệu hệ thống) ➡️ Mentor Review (Xem xét bối cảnh) ➡️ Judgment (Phán đoán) ➡️ Action (Hành động)**
* **Nguyên tắc cốt lõi:** Máy móc gắn cờ cảnh báo (vắng 2 buổi, nộp bài trễ 2 tuần, tương tác kém); Mentor bắt buộc phải kiểm tra bối cảnh trước khi liên hệ phụ huynh. Không tự động gửi tin nhắn cảnh báo thô từ hệ thống sang Zalo phụ huynh.

---

### DAR 04 — High-Touch Activation Filter (Bộ Lọc Kích Hoạt Trải Nghiệm Chuyên Sâu)
* **Bối cảnh:** Các hoạt động tương tác trực tiếp (Family Tour, Thăm nhà, Ăn tối thân mật, Họp mặt riêng) tốn nhiều nguồn lực con người.
* **Quyết định:** Kích hoạt dựa trên **Khoảnh khắc ý nghĩa (Meaningful Moments)**, tuyệt đối không kích hoạt theo lịch định kỳ cứng nhắc hay mức chi tiêu tài chính của phụ huynh.
* **Bộ lọc quyết định (The High-touch Filter):**
  > *"Liệu việc gặp trực tiếp này có tạo ra ý nghĩa và giá trị cảm xúc sâu sắc mà một tin nhắn hay cuộc gọi số không thể làm được hay không?"*  
  > 👉 Nếu **KHÔNG** ➡️ **KHÔNG tổ chức High-touch**.

---

### DAR 05 — Completion & Growth Story Framework (Khung Câu Chuyện Trưởng Thành)
* **Bối cảnh:** Tổng kết sau 12 buổi học.
* **Quyết định:** Chuyển hóa dữ liệu Portfolio thành một ấn phẩm **Câu chuyện Trưởng thành (Growth Story)** chuẩn hóa 5 phần:
  1. *Where I Started* (Điểm xuất phát)
  2. *What I Did* (Hành trình thực chiến & Thử thách)
  3. *How I Changed* (Chuyển biến năng lực & Tư duy)
  4. *What We Learned About You* (Góc nhìn thấu hiểu độc bản từ Mentor)
  5. *What's Next* (Định hướng chặng đường tiếp theo)
* **Quy tắc đối thoại:** Chỉ tổ chức cuộc gọi 1-1 khi phụ huynh yêu cầu hoặc lộ trình tiếp theo cần trao đổi sâu.

---

## 2. Danh Mục 12 Quyết Định Đóng Băng (Frozen Decisions)

1. **Khách hàng trọng tâm:** Phụ huynh là đối tác đồng hành chính; Học sinh là đối tượng thụ hưởng tối hậu.
2. **Nguyên tắc System-First:** Máy móc tự động hóa toàn bộ dữ liệu, báo cáo, chứng cứ và quy mô.
3. **Vai trò Con người:** Dành trọn vẹn thời gian cho bối cảnh, thấu cảm, phán đoán và xây dựng mối quan hệ.
4. **Marlins Day:** Là năng lực hỗ trợ thường trực định kỳ chiều Chủ Nhật, không phải sự kiện một lần.
5. **Kênh Zalo:** "Zalo hàng tuần" không phải là một touchpoint; Zalo là kênh truyền thông được dùng khi có ý nghĩa.
6. **Mid-point Pulse:** Khảo sát siêu nhẹ ($\le$ 3 phút), không tổ chức họp bắt buộc.
7. **Post-Trial:** Kết hợp Bằng chứng hệ thống + Phán đoán mức độ phù hợp của con người.
8. **Xử lý rủi ro:** Chu trình *Signal ➡️ Review ➡️ Judgment ➡️ Action*.
9. **Kích hoạt High-touch:** Dựa trên Khoảnh khắc ý nghĩa, không dựa trên lịch cố định hay doanh thu.
10. **Tổng kết khóa học:** Xuất bản Growth Story 5 phần; cuộc gọi đối thoại có điều kiện.
11. **Dữ liệu gia đình:** Chuẩn hóa theo 6 trục Dory Sensemaking (`pain`, `jtbd`, `need`, `belief`, `goal`, `fact`).
12. **Chuẩn Rubrics:** Mọi điểm chạm đều có bảng đánh giá chuẩn mực, lấy **Level 3 (L3) làm Definition of Done (DoD)**.

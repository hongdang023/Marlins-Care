---
title: "Decision Logs"
description: "Tổng hợp các quyết định kiến trúc CMMI DAR"
---

# Decision Logs

> **Tổng hợp các quyết định kiến trúc và đánh giá CMMI bảo vệ cho phương pháp tiếp cận của Community Playbook.**

---

### DAR 10: Kiến Trúc Phân Tầng Group Zalo (Broadcast Public vs Interactive Private)

* **Bối cảnh:** Vận hành hệ thống cộng đồng phụ huynh lớn mà không làm loãng thông tin và không tốn nhân sự trực mod 24/7.

| Tiêu Chí Đánh Giá (Criteria) | Trọng Số | Option A: Mở Chat 100% Tất Cả Nhóm | Option B: Chỉ Dùng Zalo OA / Fanpage | Option C: Phân Tầng (2 Broadcast + 1 Private) ⭐ |
| :--- | :---: | :---: | :---: | :---: |
| **C1: Tính Khả Thi & Tinh Gọn (Low Maintenance)** | W4 | 1.5 / 5 (6.0) | 4.5 / 5 (18.0) | 4.8 / 5 (19.2) |
| **C2: Chất Lượng Thông Tin (No-Spam Rigor)** | W3 | 1.0 / 5 (3.0) | 4.0 / 5 (12.0) | 5.0 / 5 (15.0) |
| **C3: Độ Ấm Áp & Gắn Kết (Trust & Depth)** | W3 | 3.5 / 5 (10.5) | 2.0 / 5 (6.0) | 4.6 / 5 (13.8) |
| **TỔNG ĐIỂM (TOTAL SCORE)** | **Sum: 10** | 19.5 / 50 | 36.0 / 50 | **48.0 / 50 (Approved ⭐)** |
| **Phân Tích & Đánh Đổi (Trade-offs)** | — | Ô nhiễm tin nhắn rác, phụ huynh tắt thông báo và rời nhóm hàng loạt. | Mất đi cảm giác ấm áp, gần gũi của Group cộng đồng giáo dục. | Phải phân loại tệp phụ huynh sau Marlins Day để add vào nhóm Private chăm sóc sâu. |

* **Quyết định:** Áp dụng mô hình **02 Public Groups cài đặt Broadcast 1 chiều** (Admin gửi Case Study tuần, không spam) + **01 Private Group (Nemo12 - Marlins) mở chat 2 chiều** cho phụ huynh sau sự kiện Marlins Day để đồng hành chuyên sâu.

---
title: "Decision Logs"
---

# Decision Logs

Tổng hợp các quyết định kiến trúc và đánh giá CMMI bảo vệ cho phương pháp tiếp cận của Playbook P02:

#### 📌 DAR 10: Kiến Trúc Phân Tầng Group Zalo: Broadcast Public vs Interactive Private
* **Bối cảnh:** Vận hành hệ thống cộng đồng phụ huynh lớn mà không làm loãng thông tin và không tốn nhân sự trực mod 24/7.
* **Ma trận đánh giá (CMMI Evaluation):**
  * *Option A (Mở chat 100% tất cả các nhóm):* 23/50 điểm — Ô nhiễm tin nhắn rác, phụ huynh tắt thông báo/rời nhóm hàng loạt.
  * *Option B (Chỉ dùng Fanpage/Zalo OA):* 27/50 điểm — Mất đi cảm giác ấm áp và gần gũi của Group cộng đồng.
  * *Option C (Mô hình phân tầng: 2 Broadcast Public + 1 Private Interactive) ⭐:* **48/50 điểm (Approved)**.
* **Quyết định:** Áp dụng mô hình **02 Public Groups cài đặt Broadcast 1 chiều (Low Maintenance, không spam)** để phát Case Study tuần + **01 Private Group (Nemo12 - Marlins) mở chat 2 chiều** cho phụ huynh sau sự kiện Marlins Day để chăm sóc sâu.

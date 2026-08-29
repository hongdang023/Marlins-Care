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

<details open>
<summary><h3>Purpose & JTBD</h3></summary>

Giải quyết các bài toán trọng tâm của phụ huynh trong hành trình 12 buổi học (JTBD):
* **`F1` (Accurate Assessment):** Nắm rõ mức độ tiến bộ thực chất và các điểm con đang làm chủ hoặc còn hổng qua dữ liệu minh bạch trên Portal.
* **`F4` (Early Warning):** Nhận được cảnh báo sớm từ Mentor khi con có dấu hiệu chán nản, kẹt bài hoặc sụt giảm nỗ lực.
* **`E2` (Reduced Pressure):** Phụ huynh hoàn toàn an tâm, giải tỏa áp lực đôn đốc hay quát tháo con mỗi tối.
* **`S2` (Beyond Grades):** Tự hào sở hữu câu chuyện chuyển biến tư duy và phẩm chất của con vượt trên điểm số vô cảm.
* **`S5` (Shared Moments):** Cùng con ghi nhận và tự hào về những cột mốc bứt phá trong quá trình học.

</details>

---

<details open>
<summary><h3>SOP Steps</h3></summary>

```mermaid
graph TD
    A["Buổi 1 ➡️ 11: Live Class Routine"] --> B["1. Weekly Pulse Tự Động<br><i>Email + Portal</i>"]
    A --> C["2. Risk Detection Engine<br><i>System gắn cờ ➡️ Mentor can thiệp Zalo 1-1</i>"]
    
    A -->|Buổi 12 - Kết thúc khóa| D["3. Growth Story Publishing"]
    D --> D1["Máy kết xuất data: Where I Started ➔ What I Did ➔ How I Changed"]
    D --> D2["Mentor viết nhận xét thấu cảm: What We Learned About You ➔ What's Next"]
    D --> E["4. Xuất bản trên Portal & Mentor gửi thiệp chúc mừng qua Zalo"]
```

| Quy trình con | Hành động Hệ thống (System Action) | Hành động Con người (Mentor Action qua Zalo) | Chu kỳ & Thời lượng |
| :--- | :--- | :--- | :---: |
| **1. Báo cáo tuần** *(Weekly Progress Pulse)* | • Tự động trích xuất log: số bài hoàn thành, thời lượng tự học, điểm làm chủ kiến thức.<br>• Cập nhật dashboard trên **Family Portal**.<br>• Gửi **Email Weekly Pulse** tóm tắt vào sáng hôm sau. | • Mentor **không phải gõ báo cáo hành chính** lặp lại.<br>• Mentor chỉ gửi 1 tin nhắn ấm áp trên nhóm Zalo chia sẻ không khí lớp học và ghi nhận nỗ lực chung. | Hàng tuần (≤  5 phút/lớp) |
| **2. Can thiệp rủi ro** *(Risk Intervention)* | • **Phát hiện tín hiệu (Signal):** Tự động gắn cờ cảnh báo nội bộ khi học sinh vắng 2 buổi liên tiếp, trễ bài tập 2 tuần hoặc sụt giảm nỗ lực ≥  30\%.<br>• Tuyệt đối **không gửi tin nhắn bot cảnh báo thô** sang Zalo phụ huynh. | • **Review & Judgment:** Mentor kiểm tra bối cảnh (con ốm, áp lực thi ở trường...).<br>• **Action:** Mentor trực tiếp nhắn tin/gọi điện riêng cho phụ huynh qua Zalo để thấu hiểu và phối hợp gỡ rối nhẹ nhàng. | Khi phát sinh tín hiệu (≤  15 phút/case) |
| **3. Xuất bản Growth Story** *(Buổi 12)* | • Tự động tổng hợp dữ liệu 12 buổi (Portfolio, bài tập, biểu đồ năng lực) thành 3 phần đầu của ấn phẩm.<br>• Xuất bản ấn phẩm hoàn chỉnh lên Family Portal và gửi Email thông báo tốt nghiệp. | • **Viết nhận xét thấu cảm (Phần 4 & 5):** Mentor dành 10 phút/bé viết góc nhìn độc bản về sự chuyển hóa tính cách & gợi ý chặng đường tiếp theo.<br>• Gửi tin nhắn chúc mừng ấm áp trên Zalo. | Buổi 12 (≤  10 phút/bé) |

</details>

---

<details open>
<summary><h3>Mentor Growth Narrative</h3></summary>

Hướng dẫn kỹ năng viết nhận xét thấu cảm cho Mentor trong ấn phẩm **Growth Story (Phần 4 & 5)**:

#### Cấu Trúc 5 Phần Của Ấn Phẩm Growth Story:
* **Phần 1: Where I Started (Máy xuất):** Vị trí xuất phát điểm và các điểm nghẽn ban đầu của con.
* **Phần 2: What I Did (Máy xuất):** Các dự án, bài toán thực tế con đã tự tay hoàn thành.
* **Phần 3: How I Changed (Máy xuất):** Biểu đồ đo lường sự tiến bộ về năng lực logic và thời gian giải quyết vấn đề.
* **Phần 4: What We Learned About You (Mentor viết):** Quan sát độc bản về tính cách, khoảnh khắc con vượt qua sự nản chí, phẩm chất kiên trì của riêng con.
* **Phần 5: What's Next (Mentor viết):** Lời khuyên định hướng chuyên môn chân thành cho chặng đường tiếp theo của con.

</details>

---

<details>
<summary><h3>Do's & Don'ts</h3></summary>

| Nên Làm (Best Practices / Do's) | Cấm Kỵ (Avoid / Don'ts) |
| :--- | :--- |
| ✅ Tận dụng tối đa dữ liệu tự động của Portal để giảm tải công việc hành chính. | ❌ Để bot tự động gửi tin nhắn báo lỗi làm phụ huynh lo âu. |
| ✅ Can thiệp rủi ro bằng sự thấu hiểu bối cảnh (ốm đau, thi cử ở trường). | ❌ Đổ lỗi cho học sinh hoặc phụ huynh khi con bị trễ tiến độ. |
| ✅ Nhận xét Growth Story bằng câu chuyện cụ thể và lời văn ấm áp. | ❌ Sao chép nhận xét mẫu rập khuôn hàng loạt cho cả lớp. |

</details>

---

<details>
<summary><h3>Assessment Rubrics</h3></summary>

| Trụ Cột Đánh Giá | L1 (Chưa Đạt) | L2 (Cơ Bản) | L3 (Đạt Chuẩn - DoD ⭐) | L4 (Tốt) | L5 (Xuất Sắc) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Execution** | Quên xuất báo cáo tuần; không can thiệp khi học sinh vắng 2 buổi. | Gửi báo cáo trễ hạn; can thiệp rủi ro hời hợt sau 1 tuần. | **Hệ thống gửi Weekly Pulse đúng hạn; Mentor can thiệp rủi ro trong 24h; hoàn tất Growth Story trước Buổi 12.** | Xử lý các ca nguy cơ học tập cực kỳ chu đáo; kết nối phụ huynh chặt chẽ. | 100% học sinh hoàn thành khóa học với trải nghiệm tuyệt vời, không có trường hợp drop-out bất ngờ. |
| **2. Empathy Depth** | Nhận xét Growth Story rập khuôn, vô hồn hoặc chỉ chép lại số liệu. | Nhận xét chung chung, thiếu câu chuyện hay kỷ niệm vượt khó của con. | **Nhận xét nêu bật được 1 phẩm chất độc bản và 1 khoảnh khắc bứt phá thật của học sinh; định hướng trung thực.** | Chạm sâu vào cảm xúc của cả gia đình, phụ huynh đọc và rưng rưng xúc động. | Tạo nên bước ngoặt thay đổi tích cực trong cách bố mẹ nhìn nhận và đối xử với con. |
| **3. Retention & Love** | Phụ huynh bức xúc vì con bị bỏ rơi hoặc không tiến bộ. | Phụ huynh kết thúc khóa học trong im lặng. | **≥  60\% phụ huynh tái đăng ký khóa học tiếp theo; 100\% gia đình tự hào chia sẻ Growth Story.** | Phụ huynh chủ động gửi thư cảm ơn Mentor và đăng bài chia sẻ tự hào trên mạng xã hội. | Gia đình trở thành đại sứ trọn đời của Nemo12. |

</details>

---

<details open>
<summary><h3>Decision Logs</h3></summary>

#### 📌 DAR 03: Quy Trình Can Thiệp Nguy Cơ Học Tập (Risk Intervention Engine)
* **Quyết định chốt:** Áp dụng chu trình *Signal ➔ Review ➔ Judgment ➔ Action*. Hệ thống chỉ cảnh báo nội bộ, tuyệt đối không gửi bot báo lỗi sang Zalo phụ huynh để tránh làm tổn thương tâm lý học sinh.

#### 📌 DAR 05: Cấu Trúc Ấn Phẩm Câu Chuyện Trưởng Thành (Growth Story Framework)
* **Quyết định chốt:** Chuẩn hóa ấn phẩm theo format **5 phần nhất quán**: Máy tự động kết xuất 3 phần đầu; Mentor dành 10 phút/học sinh viết thấu cảm 2 phần sau.

#### 📌 DAR 15: Phân Định Trách Nhiệm Báo Cáo Tuần: System-First vs Human Context
* **Quyết định chốt:** Báo cáo tiến độ chi tiết được xuất bản 100% tự động lên Family Portal và gửi Email; Mentor chỉ gửi tin nhắn chúc mừng và xây dựng không khí ấm áp trên Zalo.

#### 📌 DAR 16: Xuất Bản Kỹ Thuật Số Ấn Phẩm Growth Story Trên Family Portal
* **Quyết định chốt:** Growth Story được xuất bản dạng web interactive trên Family Portal của từng gia đình, hỗ trợ chia sẻ 1-click lên mạng xã hội và xuất file PDF lưu niệm.

</details>
---

<details>
<summary><h3>FAQ</h3></summary>

#### Nhóm 1: Về Quy Trình Vận Hành & Hỗ Trợ
* **Quy trình này có gây quá tải thời gian cho Mentor không?**  
  👉 **A:** Mọi bước đã được chuẩn hóa và tinh gọn tối đa, kết hợp tự động hóa dữ liệu để Mentor tập trung hoàn toàn vào chất lượng thấu cảm.
* **Khi có sự cố phát sinh ngoài kịch bản thì xử lý như thế nào?**  
  👉 **A:** Mentor kích hoạt nguyên tắc trung thực và chủ động liên hệ trực tiếp 1-1 với gia đình để hỗ trợ nhanh chóng.

</details>

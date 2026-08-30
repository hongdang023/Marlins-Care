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

<details open>
<summary><h3>Playbook Architecture & Framework</h3></summary>

Quy chuẩn chuyển hóa dữ liệu quan sát thực tế thành **Serial Case Study Ẩn Danh** đăng đồng thời trên 2 Group Public:

```mermaid
graph TD
    A["Nguồn: Marlins Day / Call Tư Vấn / Live Class"] --> B["1. Ẩn danh hóa thông tin (Bảo mật)"]
    B --> C["2. Bóc tách: Triệu chứng bề mặt vs Nguyên nhân gốc"]
    C --> D["3. Đăng Broadcast đồng loạt lên 2 Group Public (Low Maintenance)"]
```

#### Công Thức Bóc Tách "Khám Bệnh":
* **Triệu chứng phụ huynh thấy (Symptom):** *"Con lớp 8, mẹ bảo lười học, không chịu làm bài tập, điểm toán tụt dốc..."*
* **Khám bệnh ra sự thật (Root Cause):** Hệ thống Nemo12 soi ra con không hề lười, mà bị **hổng kiến thức Bất đẳng thức & Biến đổi đại số từ tận kỳ 2 Lớp 7**, dẫn tới việc lên lớp 8 nghe giảng như "vịt nghe sấm" và sinh ra phản ứng phòng vệ là buông xuôi.
* **Kê đơn & Chuyển biến (Prescription):** Lộ trình vá đúng mắt xích bị hổng trong 3 tuần $\to$ Con tự tin lấy lại nhịp học.

</details>

---

<details open>
<summary><h3>SOP Steps</h3></summary>

| Giai đoạn | Thao tác chi tiết | Người phụ trách | Chu kỳ & Thời lượng |
| :--- | :--- | :--- | :---: |
| **1. Thu thập & Chọn Case** | • Trích xuất 1 case điển hình từ nhật ký Marlins Day, Call 1-1 hoặc Live Class.<br>• Ẩn danh 100% tên học sinh và thông tin gia đình. | Hồng | Thứ 2 hàng tuần (15p) |
| **2. Đăng Broadcast lên 2 Group Public** | • Đăng bài Case Study đồng loạt vào 2 Group Public (*Vào Chuyên Chọn Cấp 2 & Cấp 3*).<br>• Chế độ chỉ Admin nhắn tin giúp vận hành cực kỳ tinh gọn, không tốn thời gian kiểm duyệt chat. | Anh Đắc (Host) | Thứ 3 & Thứ 5 (10p) |
| **3. Vận hành Group Private Marlins** | • Sau sự kiện Marlins Day (17h00 Chủ Nhật), add phụ huynh tham gia vào Group Private.<br>• Đăng bài tổng hợp Reflection, mở không gian chat 2 chiều để tương tác thân mật với các bố mẹ. | Anh Đắc & Hồng | Chiều CN & Thứ 2 (20p) |
| **4. Đồng hành & Lắng nghe Private** | • Trực tiếp trả lời, tâm sự và tháo gỡ băn khoăn cho các phụ huynh trong nhóm Private. | Toàn team | Hàng ngày |

</details>

---

<details>
<summary><h3>Communication Templates</h3></summary>

#### Mẫu 1: Bài Đăng Broadcast Cho 2 Group Public (Không CTA)
```text
[GÓC KHÁM BỆNH HỌC TẬP #CASE_08] 
"Mẹ bảo con lười, nhưng khi khám ra thì sự thật lại hoàn toàn khác..."

Chào các bố mẹ trong group Nemo12!

Tuần vừa rồi trong buổi Marlins Day, em có gặp một người mẹ rất trăn trở: "Con chị dạo này lười lắm, cứ ngồi vào bàn học Toán là ngáp ngắn ngáp dài, điểm kiểm tra tụt dốc không phanh...".

Nhưng khi đưa con vào hệ thống Nemo12 để "khám" chi tiết từng mắt xích tư duy, kết quả làm cả mẹ lẫn con đều giật mình:
👉 Con KHÔNG HỀ LƯỜI.
👉 Điểm nghẽn thực sự: Con bị hổng đúng phần "Biến đổi đại số & Bất đẳng thức" từ học kỳ trước. 

Vì mắt xích đó bị gãy, nên khi học đến phần phân thức phức tạp, con hoàn toàn không theo kịp thầy cô trên lớp. Cảm giác bất lực kéo dài khiến con chọn cách "buông xuôi" để đỡ bị cảm giác thất bại — điều mà người lớn chúng ta rất dễ quy chụp thành chữ "LƯỜI".

💡 Bài học rút ra: Đừng vội mắng con khi điểm số tụt dốc. Hãy tìm đúng mắt xích kiến thức bị đứt gãy để nối lại cho con trước!
Chúc các bố mẹ một tuần mới nhiều năng lượng tích cực bên con!
```

#### Mẫu 2: Bài Đăng Dành Riêng Cho Group Private (Nemo12 - Marlins)
```text
Chào các bố mẹ trong gia đình Nemo12 - Marlins! 🌿

Sau buổi gặp gỡ Marlins Day chiều Chủ Nhật vừa rồi tại Sky Lounge Lotte Hotel, em và bạn Hồng có ngồi lại để hoàn thiện bản Reflection Report. 

Điều đọng lại sâu sắc nhất với team là chia sẻ của ba mẹ về "Khoảng cách thế hệ khi con bước vào tuổi dậy thì". Chúng ta ai cũng muốn tốt cho con, nhưng đôi khi sự kỳ vọng vô tình tạo thành một bức tường vô hình...

Team đã tổng hợp lại 3 góc nhìn quan sát quan trọng nhất từ buổi gặp vừa rồi. Mời cả nhà cùng đọc và chia sẻ thêm cảm nhận, tâm sự của mình vào nhóm nhé ạ!
```

</details>

---

<details open>
<summary><h3>Do's & Don'ts</h3></summary>

#### ✅ Do's (Nên làm)
* **Khóa chat ở 2 Group Public:** Giữ đúng thiết lập "Chỉ Trưởng/Phó nhóm gửi tin nhắn" để duy trì chất lượng thông tin sạch sẽ, tránh spam quảng cáo và giảm thiểu chi phí quản trị (Low Maintenance).
* **Mở tương tác ở Group Private:** Tạo không gian thân mật, tôn trọng để các phụ huynh đã đi offline thoải mái giãi bày tâm tư.
* **Kể chuyện thật, việc thật:** Dùng 100% dữ liệu quan sát thật từ Marlins Day, các buổi call tư vấn và Live Class.
* **Tôn trọng cảm xúc của bố mẹ:** Luôn chia sẻ với tinh thần gỡ rối, không phán xét cách nuôi dạy con.

#### ❌ Don'ts (Không được làm)
* **Không mở chat đại trà ở Public Group:** Tránh để các nhóm cộng đồng hàng nghìn người thành nơi gửi link rác, tin nhắn dạo gây phiền hà cho phụ huynh.
* **Không chèn bất kỳ CTA bán hàng nào:** Tuyệt đối không gắn link kêu gọi mua hàng, không chèn link phễu hay ép phụ huynh làm bài test.
* **Không biến group thành chợ rao vặt:** Cấm đăng các banner khuyến mãi, giảm giá sốc, chèo kéo đóng học phí kiểu telesale.
* **Không bịa đặt câu chuyện:** Tuyệt đối không tự bịa ra các case ảo thiếu logic sư phạm.

</details>

---

<details>
<summary><h3>Assessment Rubrics</h3></summary>

Đánh giá chất lượng vận hành Hệ thống Community Group Zalo theo 3 tiêu chuẩn phổ quát (Thang đo L1 – L5, **L3 là Definition of Done ⭐**):

| Trụ Cột Đánh Giá | L1 (Chưa Đạt) | L2 (Cơ Bản) | L3 (Đạt Chuẩn - DoD ⭐) | L4 (Tốt) | L5 (Xuất Sắc) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Execution & Compliance** | Quên khóa chat ở nhóm Public để spam tràn lan; không đăng case tuần; bỏ rơi nhóm Private. | Đăng bài thất thường, nội dung sao chép qua loa, chưa phân biệt rõ cách chăm sóc nhóm Private. | **Khóa chat 2 nhóm Public chuẩn xác (Low Maintenance); đăng đều đặn 1 case/tuần; nhóm Private chăm sóc ấm áp; 100% không CTA bán hàng.** | Vận hành cực kỳ tinh gọn, tiết kiệm thời gian; nội dung case hấp dẫn, tạo độ tin cậy tự nhiên cao. | Hệ thống cộng đồng vận hành tự động mượt mà, trở thành kênh lan tỏa tri thức cốt lõi của thương hiệu. |
| **2. Insight & Diagnosis Depth** | Phân tích hời hợt, quy chụp nguyên nhân cảm tính, không chỉ ra được mắt xích gãy. | Chỉ ra được lỗi sai nhưng chưa thuyết phục về mặt phương pháp sư phạm. | **Bóc tách chuẩn xác giữa Triệu chứng bề mặt vs Nguyên nhân gốc rễ; đưa ra bài học nhân văn, thực tế cho cha mẹ.** | Insight sắc sảo, đánh trúng điểm mù tâm lý của đại đa số phụ huynh có con học cấp 2/3. | Phụ huynh đọc case thấy hình ảnh con mình trong đó và thay đổi hoàn toàn thái độ đồng hành cùng con. |
| **3. Trust & Organic Connection** | Phụ huynh rời nhóm vì cảm thấy bị làm phiền hoặc bị bán hàng lộ liễu. | Phụ huynh đọc bài nhưng chỉ im lặng, chưa có sự gắn kết cảm xúc. | **Phụ huynh tin tưởng, đón đọc bài chia sẻ; phụ huynh nhóm Private chủ động chia sẻ tâm sự sâu sắc với Mentor.** | Nhiều phụ huynh nhóm Private chủ động cảm ơn; tự nguyện giới thiệu bạn bè tham gia sự kiện Marlins Day. | Nuôi dưỡng niềm tin tuyệt đối; cộng đồng tự vận hành và lan tỏa uy tín giáo dục của Nemo12 một cách bền vững. |

</details>

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

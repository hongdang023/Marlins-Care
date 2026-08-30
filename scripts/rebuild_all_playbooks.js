import fs from "fs";

const standardizedDosDonts = {
  "social-media": `| Do's | Don'ts |
| :--- | :--- |
| ✅ **Luôn có ảnh người thật:** Đảm bảo bài viết có hình ảnh chân thực của học sinh và Mentor để tạo cảm xúc chân thực và sự tin cậy. | ❌ **Không chèn CTA bán hàng:** Tuyệt đối không kêu gọi *"Inbox ngay để nhận ưu đãi khóa học"*, *"Đăng ký tại link này"* trên Facebook cá nhân. |
| ✅ **Tự vấn khiêm tốn:** Thể hiện tinh thần cầu tiến, học hỏi từ chính học sinh — Mentor không phải là "thợ dạy hoàn hảo", mà là người đồng hành tận tâm. | ❌ **Không dùng thuật ngữ đao to búa lớn:** Tránh các từ ngữ hàn lâm gây e ngại (ví dụ: *kiến trúc cognitive load, thuật toán đệ quy trừu tượng...*). |
| ✅ **Ngôn ngữ bình dân:** Giải thích mọi vấn đề tư duy/công nghệ bằng góc nhìn đời sống mà bất kỳ ông bố bà mẹ nào đọc cũng hiểu ngay. | ❌ **Không than phiền:** Không biến trang cá nhân thành nơi phàn nàn về học sinh nghịch hay phụ huynh khó tính. |
| ✅ **Phản hồi bình luận có tâm:** Coi phần comment như một buổi trò chuyện thân mật với từng phụ huynh, trả lời 100% trong ngày. | ❌ **Không bỏ rơi bình luận:** Không để phụ huynh bình luận mà chỉ thả like hời hợt hoặc phớt lờ. |`,

  "community": `| Do's | Don'ts |
| :--- | :--- |
| ✅ **Khóa chat ở 2 Group Public:** Giữ đúng thiết lập "Chỉ Trưởng/Phó nhóm gửi tin nhắn" để duy trì chất lượng thông tin sạch sẽ, tránh spam quảng cáo (Low Maintenance). | ❌ **Không mở chat đại trà ở Public Group:** Tránh để các nhóm cộng đồng hàng nghìn người thành nơi gửi link rác, tin nhắn dạo gây phiền hà cho phụ huynh. |
| ✅ **Mở tương tác ở Group Private:** Tạo không gian thân mật, tôn trọng để các phụ huynh đã đi offline thoải mái giãi bày tâm tư và thảo luận Reflection. | ❌ **Không chèn bất kỳ CTA bán hàng nào:** Tuyệt đối không gắn link kêu gọi mua hàng, không chèn link phễu hay ép phụ huynh làm bài test. |
| ✅ **Kể chuyện thật, việc thật:** Dùng 100% dữ liệu quan sát thật từ Marlins Day, các buổi call tư vấn và Live Class với danh tính ẩn danh hóa. | ❌ **Không biến group thành chợ rao vặt:** Cấm đăng các banner khuyến mãi, giảm giá sốc, chèo kéo đóng học phí kiểu telesale. |
| ✅ **Tôn trọng cảm xúc của bố mẹ:** Luôn chia sẻ với tinh thần gỡ rối, không phán xét cách nuôi dạy con của gia đình. | ❌ **Không bịa đặt câu chuyện:** Tuyệt đối không tự bịa ra các case ảo thiếu logic sư phạm. |`,

  "marlins-workshop": `| Do's | Don'ts |
| :--- | :--- |
| ✅ **Tôn trọng an toàn tâm lý (Psychological Safety):** Tạo không gian an toàn để cha mẹ dám thừa nhận sai lầm và sự bất lực khi kèm con mà không sợ bị phán xét. | ❌ **Không biến thành buổi bán hàng (Zero Hard-selling):** Cấm chào bán khóa học, cấm đưa bảng giá hoặc gây áp lực chốt sale trong phòng Zoom. |
| ✅ **Giữ vững kỷ luật Cam/Mic:** Nghiêm túc duy trì văn hóa hiện diện trọn vẹn để nâng cao chất lượng thảo luận nhóm theo [DAR 11]. | ❌ **Không độc thoại slide:** Cấm Host nói liên tục quá 30 phút mà không có bài tập tương tác hoặc thảo luận breakout. |
| ✅ **Đưa ra công cụ hành động tức thì:** Sau mỗi buổi, phụ huynh có ít nhất 1 câu hỏi hoặc 1 mẫu câu NVC cụ thể để về nói chuyện ngay với con vào sáng hôm sau. | ❌ **Không làm phụ huynh cảm thấy tội lỗi:** Tránh dùng ngôn từ chỉ trích cách dạy con của phụ huynh; luôn tiếp cận bằng sự đồng cảm. |
| ✅ **Khuyến khích tự học theo pace riêng:** Nhắc phụ huynh truy cập Family Portal để tự làm bài tập trắc nghiệm và đo lường sự chuyển biến của chính mình. | ❌ **Không ép buộc phụ huynh bật cam nếu bất khả kháng:** Điều hướng linh hoạt phụ huynh bận rộn sang chế độ nghe thụ động tại Main Room hoặc tự học trên Portal. |`,

  "marlins-day": `| Do's | Don'ts |
| :--- | :--- |
| ✅ **Lắng nghe tích cực (Listen First):** Dành 70% thời lượng để phụ huynh giãi bày tâm sự và nỗi lo âu giáo dục. | ❌ **Không biến thành hội thảo bán hàng:** Tuyệt đối không phát tờ rơi, không chốt sale khóa học tại sự kiện. |
| ✅ **Tôn trọng tính chân thực:** Chia sẻ thẳng thắn cả những điểm chưa hoàn hảo và giới hạn của hệ thống Nemo12. | ❌ **Không phán xét phụ huynh:** Tuyệt đối không chỉ trích phương pháp dạy con của bố mẹ trước mặt người khác. |
| ✅ **Tập trung vào giải pháp sư phạm:** Hướng dẫn phụ huynh cách tháo gỡ điểm nghẽn nhận thức bằng bộ công cụ thực hành. | ❌ **Không hứa hẹn điểm số viển vông:** Tránh cam kết điểm thi đỗ chuyên mà tập trung vào năng lực tự học bền vững. |`,

  "trial-class": `| Do's | Don'ts |
| :--- | :--- |
| ✅ **Tư vấn Fit Judgment trung thực:** Sẵn sàng khuyên gia đình chưa nên cho con học nếu thấy phương pháp hoặc thời điểm chưa phù hợp. | ❌ **Không chèo kéo bằng mọi giá:** Tuyệt đối không gây áp lực tài chính hay tạo cảm giác FOMO để ép phụ huynh đóng tiền. |
| ✅ **Dựa trên dữ liệu thực chứng (Evidence-Based):** Mọi nhận xét về năng lực học sinh đều trích dẫn từ log bài tập thực tế trên hệ thống. | ❌ **Không nhận xét cảm tính:** Tránh dùng các từ ngữ chung chung thiếu minh chứng như *"con học rất tốt"* hay *"con tiếp thu chậm"*. |
| ✅ **Tôn trọng nhịp tiếp thu riêng:** Khích lệ và ghi nhận từng nỗ lực nhỏ của con trong suốt 2 buổi trải nghiệm. | ❌ **Không so sánh giữa các học sinh:** Tuyệt đối không mang kết quả của học sinh này ra so sánh với học sinh khác trong lớp trial. |`,

  "live-class": `| Do's | Don'ts |
| :--- | :--- |
| ✅ **Báo cáo tuần tự động & chuẩn xác:** Đảm bảo phụ huynh nhận Weekly Pulse đều đặn vào sáng hôm sau mỗi buổi học. | ❌ **Không spam tin nhắn hành chính:** Tuyệt đối không gửi hàng loạt tin nhắn rác không có giá trị sư phạm. |
| ✅ **Can thiệp sư phạm sớm (Early Intervention):** Chủ động liên hệ 1-1 với gia đình ngay khi hệ thống gắn cờ rủi ro (Risk Alert). | ❌ **Không bỏ rơi học sinh tụt hậu:** Không để học sinh mất nhịp học quá 2 buổi mà không có sự phối hợp với gia đình. |
| ✅ **Viết nhận xét Growth Story thấu cảm:** Mentor dành thời gian chấp bút nhận xét độc bản, ghi nhận sự chuyển hóa tính cách của từng con. | ❌ **Không copy-paste nhận xét:** Cấm dùng một mẫu nhận xét chung cho nhiều học sinh ở buổi tổng kết. |`,

  "family-meeting": `| Do's | Don'ts |
| :--- | :--- |
| ✅ **Giao tiếp bình đẳng:** Lắng nghe học sinh với sự tôn trọng như một cá thể độc lập; khuyến khích con nói lên cảm xúc thật. | ❌ **Không mang tâm thế "khảo sát / thanh tra":** Tuyệt đối không cầm giấy bút hay laptop gõ liên tục như đang phỏng vấn lấy số liệu. |
| ✅ **Tách bạch dữ liệu:** Phân định rành mạch giữa *Fact* (Sự thật khách quan), *Observation* (Quan sát thấy) và *Interpretation* (Suy đoán của mentor). | ❌ **Không chỉ nói chuyện với bố mẹ:** Tránh biến học sinh thành người vô hình hoặc chỉ ngồi nghe người lớn nói về mình. |
| ✅ **Ghi nhận nỗ lực:** Tìm kiếm và khen ngợi những điểm sáng, thói quen tốt hoặc sự nỗ lực của con trước mặt bố mẹ. | ❌ **Không phán xét hay đổ lỗi:** Không chỉ trích cách dạy con của phụ huynh hoặc phàn nàn về học sinh một cách tiêu cực. |
| ✅ **Tôn trọng ranh giới gia đình:** Luôn lịch thiệp, giữ gìn tác phong sư phạm và tôn trọng không gian sống riêng tư của gia đình theo [DAR 17]. | ❌ **Không hứa hẹn vượt khả năng:** Không đưa ra những cam kết viển vông về điểm số mà tập trung vào sự tiến bộ về thói quen học tập. |`,

  "referrals": `| Do's | Don'ts |
| :--- | :--- |
| ✅ **Minh bạch trạng thái:** Hiển thị rõ ràng trên Family Portal trạng thái lời giới thiệu để phụ huynh dễ theo dõi. | ❌ **Tuyệt đối không biến thành mô hình đa cấp (Zero MLM):** Không tạo hoa hồng nhiều tầng, không chi trả tiền mặt. |
| ✅ **Trân trọng lời giới thiệu:** Gửi Email cảm ơn ấm áp mang danh nghĩa Giảng viên/Mentor trực tiếp dạy con. | ❌ **Không làm phiền:** Không liên tục spam tin nhắn ép phụ huynh phải đi chia sẻ link. |
| ✅ **Hỗ trợ kịp thời:** Giải quyết tức thời các trường hợp phụ huynh quên nhập mã giới thiệu qua kênh hỗ trợ 1-1. | ❌ **Không gây khó dễ:** Không đặt ra các điều khoản ẩn gây khó khăn khi áp dụng voucher học phí. |`
};

const standardizedSopSteps = {
  "social-media": `| Giai đoạn | Thao tác cụ thể | Thời lượng | Deliverable / Ghi chú |
| :--- | :--- | :---: | :--- |
| **1. Thu thập dữ liệu** *(Ngay sau buổi học)* | • Chụp lại 2–3 bức ảnh khoảnh khắc đẹp (ưu tiên ảnh có mặt học sinh & Mentor).<br>• Lưu lại link sản phẩm website hoặc chụp màn hình thành quả của các con.<br>• Ghi nhanh 2–3 câu thoại hoặc chi tiết đắt giá vào sổ tay/notion. | 10p | Kho tư liệu thực tế (Evidences bạt ngàn) |
| **2. Chọn lọc & Soạn thảo** *(Trước ngày đăng)* | • Chọn 1 câu chuyện chạm nhất theo khung **T-A-C-E**.<br>• Kiểm tra lại ngôn từ: Đảm bảo nhẹ nhàng, giản dị, không dùng từ ngữ học thuật đao to búa lớn.<br>• Áp dụng quy tắc bảo mật danh tính học sinh. | 20p | Bản nháp bài viết hoàn chỉnh |
| **3. Đăng bài đúng lịch** *(Thứ 3 & Thứ 6)* | • Xuất bản bài viết vào khung giờ vàng trên Facebook cá nhân.<br>• Đính kèm ảnh mặt người thật + link/ảnh sản phẩm con làm. | 5p | Bài post hiển thị công khai |
| **4. Chăm sóc tương tác** *(Post-publishing)* | • **Comment Handling:** Trả lời 100% bình luận của phụ huynh với sự trân trọng, chia sẻ thêm chi tiết đáng yêu về con.<br>• Nếu có phụ huynh inbox hỏi thăm ➔ đón tiếp thấu cảm, giải đáp chân thành 1-1. | Linh hoạt | Tương tác gắn kết & Chuyển đổi tự nhiên |`,

  "community": `| Giai đoạn | Thao tác chi tiết | Người phụ trách | Chu kỳ & Thời lượng |
| :--- | :--- | :--- | :---: |
| **1. Thu thập & Chọn Case** | • Trích xuất 1 case điển hình từ nhật ký Marlins Day, Call 1-1 hoặc Live Class.<br>• Ẩn danh 100% tên học sinh và thông tin gia đình. | Hồng | Thứ 2 hàng tuần (15p) |
| **2. Đăng Broadcast lên 2 Group Public** | • Đăng bài Case Study đồng loạt vào 2 Group Public (*Vào Chuyên Chọn Cấp 2 & Cấp 3*).<br>• Chế độ chỉ Admin nhắn tin giúp vận hành cực kỳ tinh gọn, không tốn thời gian kiểm duyệt chat. | Anh Đắc (Host) | Thứ 3 & Thứ 5 (10p) |
| **3. Vận hành Group Private Marlins** | • Sau sự kiện Marlins Day (17h00 Chủ Nhật), add phụ huynh tham gia vào Group Private.<br>• Đăng bài tổng hợp Reflection, mở không gian chat 2 chiều để tương tác thân mật với các bố mẹ. | Anh Đắc & Hồng | Chiều CN & Thứ 2 (20p) |
| **4. Đồng hành & Lắng nghe Private** | • Trực tiếp trả lời, tâm sự và tháo gỡ băn khoăn cho các phụ huynh trong nhóm Private. | Toàn team | Hàng ngày |`,

  "marlins-workshop": `| Giai đoạn | Thao tác Hệ thống (System Action via Portal/Zalo) | Thao tác Con người (Host & Mentor Action) | Thời gian chuẩn |
| :--- | :--- | :--- | :---: |
| **1. Pre-Workshop** *(Trước 72h - 24h)* | • Tự động gửi thông báo chủ đề tuần và form đăng ký vào 3 Group Zalo.<br>• Nhắc nhở quy định bất biến: **100% Bật Cam/Mic suốt 120 phút**. | • Host & Mentor thống nhất Concept trọng tâm và chuẩn bị 2 bài tập tình huống.<br>• Duyệt danh sách phụ huynh đăng ký. | $\\le$ 30 phút |
| **2. In-Workshop** *(20h00 - 22h00)* | • Phân phòng tự động (Breakout Rooms 3-4 phụ huynh/phòng theo [DAR 11]).<br>• Chuyển các tài khoản tắt cam vào Main Room nghe thụ động. | • Host dẫn dắt nội dung, điều phối năng lượng phòng Zoom.<br>• Mentor Hồng đảo qua các breakout rooms hỗ trợ phụ huynh thảo luận 4F. | 120 phút |
| **3. Post-Workshop** *(Sáng hôm sau)* | • Cập nhật bài tập trắc nghiệm và case study lên mục **Parent Self-Paced** trên Family Portal ([DAR 12]).<br>• Gửi thông điệp cảm ơn và Infographic tóm tắt vào 3 Group Zalo. | • Mentor nhắn tin Zalo cảm ơn các phụ huynh đã phát biểu tích cực.<br>• Phân luồng phụ huynh có nhu cầu gặp chuyên sâu để gửi thư mời **Marlins Day**. | $\\le$ 15 phút |`,

  "marlins-day": `| Giai đoạn | Thao tác chi tiết | Thời lượng | Deliverable / Ghi chú |
| :--- | :--- | :---: | :--- |
| **1. Pre-Event** *(Thứ 6 & Thứ 7)* | • Chốt danh sách $\\le 10$ phụ huynh tham dự qua Form đăng ký.<br>• Gửi tin nhắn Zalo xác nhận địa điểm (Lotte Hotel, Tầng 38 Sky Lounge) và lưu ý gửi xe.<br>• Chuẩn bị sẵn 10 bản in Phiếu Phản Tư 4F và 2 laptop kết nối sẵn hệ sinh thái Nemo12. | 30p | Danh sách chốt & Học liệu in ấn |
| **2. In-Event** *(15h00 – 17h00 Chủ Nhật)* | • Tuân thủ nghiêm ngặt khung thời lượng Session Agenda (Fishbowl & Live Demo).<br>• Co-host Hồng liên tục ghi chép các câu thoại, trăn trở đắt giá của phụ huynh vào sổ Dory Notes. | 120p | Phiên đối thoại thấu cảm & Live demo |
| **3. Post-Event** *(Tối Chủ Nhật & Thứ 2)* | • Gửi lời cảm ơn chân thành và gửi tặng file tổng hợp ảnh/Reflection Report.<br>• Mời phụ huynh tham gia **Group Zalo Private: Nemo12 - Marlins** để tiếp tục đồng hành sâu. | 20p | Reflection Report & Kết nối Group Private |`,

  "trial-class": `| Giai đoạn | Hành động Hệ thống (System Action) | Hành động Con người (Mentor Action qua Zalo) | Thời lượng |
| :--- | :--- | :--- | :---: |
| **1. Trước Trial** *(Pre-Trial)* | • Tự động gửi **Email xác nhận** + tài khoản truy cập **Family Portal**.<br>• Hiển thị hướng dẫn chuẩn bị thiết bị ngắn gọn trên Portal. | • Mentor tạo nhóm Zalo lớp học, gửi lời chào đón.<br>• **Nhắn tin tóm tắt sơ bộ nội dung buổi học** và **tạo Poll bình chọn trên Zalo** để nắm chắc danh sách phụ huynh/học sinh tham gia.<br>• Hỗ trợ gia đình nếu có vấn đề kỹ thuật/thiết bị. | $\\le$ 10 phút |
| **2. Trong Trial** *(During Trial)* | • Tự động ghi nhận log học tập: thời gian giải quyết bài toán, tương tác, các điểm kẹt kiến thức.<br>• Hệ thống chấm và phân tích dữ liệu tư duy ban đầu. | • Giảng viên/Mentor quan sát độ tự tin, khả năng tự học và sự hào hứng của con.<br>• Ghi chú nhanh các biểu hiện đặc thù vào hệ thống Dory. | — |
| **3. Sau Trial** *(Post-Trial)* | • Tự động kết xuất **Báo cáo Bằng chứng Năng lực (Trial Evidence)** lên Family Portal của phụ huynh.<br>• Gửi Email thông báo kết quả sẵn sàng trên Portal. | • **Tư vấn Fit Judgment:** Mentor nhắn tin/gọi điện trao đổi 1-1 với phụ huynh dựa trên dữ liệu thật trên Portal.<br>• **Sẵn sàng từ chối:** Nếu thấy con chưa phù hợp thời điểm này, khuyên bố mẹ chân thành và trao lộ trình tự học tại nhà trên Portal. | $\\le$ 15 phút/case |`,

  "live-class": `| Quy trình con | Hành động Hệ thống (System Action) | Hành động Con người (Mentor Action qua Zalo) | Chu kỳ & Thời lượng |
| :--- | :--- | :--- | :---: |
| **1. Báo cáo tuần** *(Weekly Progress Pulse)* | • Tự động trích xuất log: số bài hoàn thành, thời lượng tự học, điểm làm chủ kiến thức.<br>• Cập nhật dashboard trên **Family Portal**.<br>• Gửi **Email Weekly Pulse** tóm tắt vào sáng hôm sau. | • Mentor **không phải gõ báo cáo hành chính** lặp lại.<br>• Mentor chỉ gửi 1 tin nhắn ấm áp trên nhóm Zalo chia sẻ không khí lớp học và ghi nhận nỗ lực chung. | Hàng tuần ($\\le$ 5 phút/lớp) |
| **2. Can thiệp rủi ro** *(Risk Intervention)* | • **Phát hiện tín hiệu (Signal):** Tự động gắn cờ cảnh báo nội bộ khi học sinh vắng 2 buổi liên tiếp, trễ bài tập 2 tuần hoặc sụt giảm nỗ lực $\\ge 30\\%$.<br>• Tuyệt đối **không gửi tin nhắn bot cảnh báo thô** sang Zalo phụ huynh. | • **Review & Judgment:** Mentor kiểm tra bối cảnh (con ốm, áp lực thi ở trường...).<br>• **Action:** Mentor trực tiếp nhắn tin/gọi điện riêng cho phụ huynh qua Zalo để thấu hiểu và phối hợp gỡ rối nhẹ nhàng. | Khi phát sinh tín hiệu ($\\le$ 15 phút/case) |
| **3. Xuất bản Growth Story** *(Buổi 12)* | • Tự động tổng hợp dữ liệu 12 buổi (Portfolio, bài tập, biểu đồ năng lực) thành 3 phần đầu của ấn phẩm.<br>• Xuất bản ấn phẩm hoàn chỉnh lên Family Portal và gửi Email thông báo tốt nghiệp. | • **Viết nhận xét thấu cảm (Phần 4 & 5):** Mentor dành 10 phút/bé viết góc nhìn độc bản về sự chuyển hóa tính cách & gợi ý chặng đường tiếp theo.<br>• Gửi tin nhắn chúc mừng ấm áp trên Zalo. | Buổi 12 ($\\le$ 10 phút/bé) |`,

  "family-meeting": `| Giai đoạn | Nhiệm vụ cụ thể | Thời lượng | Deliverable / Trạng thái |
| :--- | :--- | :---: | :--- |
| **Trước buổi gặp** *(Pre-Meeting)* | • Phát hiện tín hiệu và gửi đề xuất phê duyệt qua Host trong 4h ([DAR 18]).<br>• Đọc hồ sơ học sinh trên Portal (không hỏi lại thông tin đã có).<br>• Chuẩn bị 2–3 câu hỏi mở trọng tâm và danh mục Observation cues. | 15p | Kế hoạch gặp & Host Approved |
| **Trong buổi gặp** *(In-Meeting)* | • Triển khai theo Agenda 60 phút (Warm-up $\\to$ Stories $\\to$ Alignment $\\to$ Next Steps).<br>• Lắng nghe tích cực (70%), tách biệt Fact và Observation ([DAR 17]).<br>• Thống nhất cam kết hành động nhỏ tiếp theo với gia đình. | 60p | Buổi gặp diễn ra tự nhiên, ấm cúng |
| **Sau buổi gặp** *(Post-Meeting)* | • Hoàn thiện Family Notes và gắn tag vào **Hệ thống Dory** trong 24h.<br>• Gửi tin nhắn cảm ơn ngắn gọn và ấm áp cho phụ huynh qua Zalo. | 15p | Cập nhật hồ sơ gia đình trên Dory |`,

  "referrals": `| Bước | Hành động Hệ thống (System Action) | Hành động Phụ huynh (Parent Action) |
| :--- | :--- | :--- |
| **1. Cấp mã độc bản** | Tự động tạo \`Referral_Code\` và đường dẫn cá nhân hóa hiển thị sẵn trên Family Portal. | Đăng nhập Portal, bấm 1 chạm để sao chép link giới thiệu. |
| **2. Gắn tag tự động** | Khi người mới click link và điền thông tin đăng ký $\\to$ Hệ thống tự động liên kết ID của người giới thiệu vào hồ sơ học sinh mới. | Gửi link qua tin nhắn cho bạn bè/người thân có con trong độ tuổi. |
| **3. Xác thực thanh toán** | Khi người mới thanh toán thành công khóa 12 buổi $\\to$ Hệ thống tự động áp dụng mức giảm 15% học phí cho hóa đơn của người mới. | Người mới nhận ưu đãi 15% ngay trên màn hình thanh toán. |
| **4. Trả thưởng người giới thiệu** | Tự động cộng Voucher 15% vào ví tài khoản Family Portal của người giới thiệu + Gửi Email chúc mừng và cảm ơn tự động. | Người giới thiệu nhận thông báo qua Email/Portal, dùng voucher cho kỳ học tiếp theo của con. |`
};

const stakeholderMappings = {
  "marlins-workshop": `| Stakeholder | Job cần giải quyết (JTBD) | Marlins Workshop mang lại giá trị gì? (Delivered Value) |
| :--- | :--- | :--- |
| **Phụ huynh tham dự** | Tìm kiếm phương pháp đồng hành đúng đắn, giải tỏa âu lo áp lực học tập và định hướng năng lực AI cho con. | Không gian an toàn để tự phản tư (4F Reflection), thấu hiểu ngộ nhận giáo dục và nhận công cụ giao tiếp NVC/BEM thực tế. |
| **Host & Mentor** | Lan tỏa tri thức sư phạm bản chất, lắng nghe trăn trở thực tế của phụ huynh và kết nối các gia đình cùng hệ giá trị. | Thấu hiểu các điểm mù tâm lý phụ huynh, nuôi dưỡng niềm tin tự nhiên và chuyển hóa sang Marlins Day / Trial Class. |
| **Học sinh (Gián tiếp)** | Cần sự thấu hiểu và cách tiếp cận giáo dục tôn trọng, không áp đặt từ bố mẹ tại nhà. | Bố mẹ thay đổi góc nhìn, giảm áp lực kỳ vọng độc hại và tạo môi trường tự giác học tập tại gia đình. |`,

  "marlins-day": `| Stakeholder | Job cần giải quyết (JTBD) | Marlins Day mang lại giá trị gì? (Delivered Value) |
| :--- | :--- | :--- |
| **Phụ huynh tham dự** | Tìm phương pháp đúng đắn giúp con tự giác, học hiệu quả và đỗ chuyên Cấp 3 mà gia đình không bị kiệt sức. | Sự đồng cảm từ cộng đồng PH cùng mục tiêu, giải tỏa áp lực, nhìn thấy giải pháp học tập cá nhân hóa rõ ràng qua Nemo12. |
| **Marlins Care / Nemo12** | Thấu hiểu chân dung, nỗi đau và kỳ vọng thật của phụ huynh; chọn lọc các gia đình cùng hệ giá trị để đồng hành. | Dữ liệu định tính sâu sắc cho Dory Sensemaking; mở rộng tệp phụ huynh nòng cốt cho cộng đồng Private. |
| **Học sinh (Gián tiếp)** | Cần cha mẹ thấu hiểu tâm lý lứa tuổi và phương pháp học không gây kiệt quệ tinh thần. | Bố mẹ thay đổi góc nhìn, giảm áp lực kỳ vọng sai lệch và tìm được công cụ học tập đúng đắn cho con. |`,

  "trial-class": `| Stakeholder | Job cần giải quyết (JTBD) | Trial Class mang lại giá trị gì? (Delivered Value) |
| :--- | :--- | :--- |
| **Phụ huynh học thử** | Kiểm chứng môi trường học tập thực tế, đánh giá độ phù hợp và sự hứng thú của con trước khi quyết định đầu tư dài hạn. | Báo cáo Bằng chứng Năng lực (Trial Evidence) minh bạch trên Portal; tư vấn Fit Judgment trung thực từ Mentor. |
| **Học sinh trải nghiệm** | Khám phá cách học mới không áp lực, tự tay hoàn thiện sản phẩm công nghệ đầu tiên và xây dựng niềm tin tự học. | Trải nghiệm học tập cá nhân hóa qua Nemo12, được Mentor khích lệ và tự tin vượt qua thử thách. |
| **Mentor & Hệ thống** | Đo lường độ sẵn sàng, phong cách tư duy và phát hiện sớm các điểm nghẽn kiến thức/tâm lý của học sinh. | Dữ liệu định lượng thực chứng (log làm bài, tốc độ tiếp thu) để phán đoán mức độ phù hợp và thiết kế lộ trình riêng. |`,

  "live-class": `| Stakeholder | Job cần giải quyết (JTBD) | Live Class mang lại giá trị gì? (Delivered Value) |
| :--- | :--- | :--- |
| **Phụ huynh chính thức** | Theo dõi sát sao sự tiến bộ thực chất của con qua 12 buổi học mà không cần phải gặng hỏi hay nghi ngờ. | Báo cáo Weekly Progress Pulse tự động hàng tuần và ấn phẩm Growth Story 5 phần lưu giữ trọn đời trên Portal. |
| **Học sinh chính thức** | Làm chủ kiến thức nền tảng, phát triển tư duy logic/AI và hoàn thiện Portfolio sản phẩm công nghệ cá nhân. | Lớp học tương tác cao, được theo sát và hỗ trợ kịp thời; tự hào nhìn thấy sự chuyển biến của bản thân sau 12 buổi. |
| **Mentor & Sư phạm** | Dẫn dắt hành trình chuyển biến của từng học sinh, can thiệp sư phạm sớm khi có rủi ro và đúc kết nhận xét thấu cảm. | Hệ thống tự động hóa thu thập dữ liệu (Automate Evidence) giúp Mentor toàn tâm toàn ý vào việc thấu cảm và truyền cảm hứng (Humanize Meaning). |`,

  "family-meeting": `| Stakeholder | Job cần giải quyết (JTBD) | Family Meeting mang lại giá trị gì? (Delivered Value) |
| :--- | :--- | :--- |
| **Phụ huynh học sinh** | Cần người thầy thực sự hiểu con mình, giải tỏa nỗi lo âu thầm kín và tìm tiếng nói chung với con trong gia đình. | Sự hiện diện ấm áp của Mentor tại nhà; định hướng sư phạm rõ ràng và thấu cảm sâu sắc. |
| **Học sinh** | Cần được lắng nghe như một cá thể độc lập, giải tỏa áp lực kỳ vọng và tìm thấy động lực tự thân. | Không gian an toàn để con cất lên tiếng nói riêng, được Mentor công nhận và bảo vệ góc nhìn. |
| **Mentor & Đội ngũ** | Thấu hiểu môi trường học tập thực tế (Learning Environment) và động lực ẩn sâu (Hidden Motivation) của học sinh. | Thu thập insight định tính vô giá cập nhật vào Family Notes 6 trục Dory để đồng hành dài hạn. |`
};

const sessionAgendas = {
  "marlins-workshop": `| Khung giờ | Nội dung hoạt động | Hình thức | Mục tiêu & Phương pháp |
| :---: | :--- | :---: | :--- |
| **20:00 – 20:15** (15') | **Warm-up & Breakout Check-in** | Nhóm nhỏ<br>(3-4 người) | • Điểm danh Cam/Mic.<br>• Phụ huynh chia sẻ 1 "cơn đau đầu / cảm giác bất lực" gần nhất khi kèm con học tại nhà. |
| **20:15 – 20:45** (30') | **Chuyên đề 1 & Bài tập Mini** | Toàn phòng | • Anh Đắc mổ xẻ 1 Ngộ nhận trọng tâm.<br>• Giao bài tập tình huống thực tế (tình huống con lười học / trốn tránh bài khó). |
| **20:45 – 21:00** (15') | **Breakout 4F Reflection 1** | Nhóm nhỏ | Thực hành khung **4F**:<br>• **Facts:** Sự thật con đã làm gì?<br>• **Feelings:** Cảm xúc lúc đó của bố/mẹ là gì?<br>• **Findings:** Ngộ nhận nào đang chi phối phản ứng của mình?<br>• **Future:** Lần tới sẽ phản ứng khác đi như thế nào? |
| **21:00 – 21:30** (30') | **Chuyên đề 2 & Case Study Thực Chiến** | Toàn phòng | • Mentor Hồng chia sẻ góc nhìn sư phạm thực tế từ lớp học Nemo12.<br>• Hướng dẫn công cụ NVC / BEM xử lý triệt để bế tắc. |
| **21:30 – 21:45** (15') | **Breakout 4F Reflection 2** | Nhóm nhỏ | Áp dụng giải pháp mới vào đúng trường hợp cụ thể của con mình; các bố mẹ góp ý chéo cho nhau. |
| **21:45 – 22:00** (15') | **Harvesting & Call To Action** | Toàn phòng | • Đại diện 2 phụ huynh chia sẻ bài học tâm đắc nhất.<br>• Hướng dẫn làm bài tập theo pace riêng trên **Family Portal**.<br>• Mời tham gia **Marlins Day** chiều Chủ Nhật tại Lotte Hotel. |`,

  "marlins-day": `| Khung giờ | Nội dung hoạt động | Hình thức | Mục tiêu & Phương pháp |
| :---: | :--- | :---: | :--- |
| **15:00 – 15:20** (20') | **Đón tiếp & Tea-break Thân mật** | Tự do | Đón tiếp ấm áp, tạo cảm giác như những người bạn gặp nhau cuối tuần tại Sky Lounge. |
| **15:20 – 16:10** (50') | **Fishbowl Dialogue: Tháo gỡ ngộ nhận** | Vòng tròn Fishbowl | Anh Đắc điều phối vòng tròn đối thoại, mời 2-3 phụ huynh ngồi giữa chia sẻ sâu sắc. |
| **16:10 – 16:40** (30') | **Live Demo: Soi sáng lộ trình Nemo12** | Trực quan trên màn hình | Mentor Hồng demo trực tiếp cách hệ thống phát hiện lỗ hổng và cá nhân hóa lộ trình. |
| **16:40 – 17:00** (20') | **Reflection & Kết nối Private** | Trò chuyện 1-1 | Phụ huynh ghi nhận cảm nhận vào Phiếu 4F; mời tham gia Group Zalo Private. |`,

  "family-meeting": `| Phần | Thời lượng | Nội dung chính | Lưu ý thực thi cho Mentor |
| :--- | :---: | :--- | :--- |
| **0. Warm-up** | 5p | Chào hỏi, tạo cảm giác thân mật *\"như khách quý đến chơi nhà\"*. | **Không mở laptop, không rút sổ ghi chép ngay.** Hỏi thăm thú cưng, không gian nhà, khen góc học của con. |
| **1. Family Story** | 10p | Mời phụ huynh chia sẻ về hành trình lớn lên của con và những điều tự hào nhất. | Lắng nghe trọn vẹn, không vội nói về chương trình học hay điểm số. |
| **2. Student Story** | 15p | Chuyển sự chú ý sang học sinh: sở thích, điều hào hứng gần đây, trải nghiệm học tập. | Tạo không gian an toàn để con tự do bày tỏ, không biến thành cuộc phỏng vấn chất vấn. |
| **3. Alignment** | 15p | Mentor phản chiếu các quan sát tích cực về điểm mạnh của con và góc nhìn sư phạm. | Hai bên cùng nhìn về một hướng; gia đình nhận được giá trị và định hướng rõ ràng. |
| **4. Next Steps** | 10p | Thống nhất 1–2 mục tiêu ưu tiên trong 4 tuần tới và cam kết phối hợp giữa 3 bên. | Thiết lập một hành động/cam kết nhỏ (Micro-commitment) cho học sinh, bố mẹ và mentor. |
| **5. Closing** | 5p | Cảm ơn sự tiếp đón của gia đình, chụp bức ảnh kỷ niệm (nếu gia đình đồng ý). | Kết thúc đúng giờ (không kéo dài lê thê làm phiền sinh hoạt của gia đình). |`
};

const rubrics = {
  "social-media": `Đánh giá chất lượng thực thi Social Media theo 3 tiêu chuẩn phổ quát (Thang đo L1 – L5, **L3 là Definition of Done ⭐**):

| Trụ Cột Đánh Giá | L1 (Chưa Đạt) | L2 (Cơ Bản) | L3 (Đạt Chuẩn - DoD ⭐) | L4 (Tốt) | L5 (Xuất Sắc) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Execution & Compliance** | Không đăng bài, đăng thất thường tháng 1 bài, vi phạm bảo mật tên học sinh. | Đăng đủ 2 bài/tuần nhưng nội dung qua loa, thiếu ảnh người thật, viết lan man. | **Đăng đều đặn 2 bài/tuần (T3 & T6); đúng cấu trúc T-A-C-E; có ảnh mặt người thật & sản phẩm; tuân thủ quy tắc bảo mật.** | Nội dung chỉn chu, hình ảnh đẹp và tự nhiên; trả lời 100% comment của phụ huynh trong ngày. | Tạo thành series bài viết truyền cảm hứng có lượng theo dõi định kỳ cao từ cộng đồng cha mẹ. |
| **2. Tone & Reflection Depth** | Viết như bài quảng cáo bán khóa học; giọng điệu khoe khoang hoặc giáo điều. | Kể lại sự việc đơn thuần như biên bản buổi học, không bộc lộ bài học hay cảm xúc của Mentor. | **Lời văn nhẹ nhàng, không học thuật; bộc lộ rõ sự tự vấn, cầu tiến và tình yêu thương dành cho học sinh.** | Góc nhìn phản tư sâu sắc, chạm đến trăn trở nuôi dạy con của nhiều bậc cha mẹ. | Định vị vững chắc hình tượng Mentor có tâm, có tầm, là hình mẫu giáo dục đồng hành lý tưởng. |
| **3. Parent Engagement & Trust** | Bài viết gây tranh cãi tiêu cực hoặc không có tương tác nào từ phụ huynh. | Có tương tác bề nổi (bạn bè like dạo) nhưng không có phụ huynh quan tâm. | **Phụ huynh học sinh vào comment tự hào; bạn bè có con trong độ tuổi chủ động tương tác tích cực.** | Phụ huynh chủ động chia sẻ (share) bài viết về trang cá nhân; nhận được inbox hỏi xin lời khuyên giáo dục. | Uy tín tự nhiên chuyển hóa thành hàng loạt lời giới thiệu học sinh mới (Organic Referral) mà không cần sales. |`,

  "community": `Đánh giá chất lượng vận hành Hệ thống Community Group Zalo theo 3 tiêu chuẩn phổ quát (Thang đo L1 – L5, **L3 là Definition of Done ⭐**):

| Trụ Cột Đánh Giá | L1 (Chưa Đạt) | L2 (Cơ Bản) | L3 (Đạt Chuẩn - DoD ⭐) | L4 (Tốt) | L5 (Xuất Sắc) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Execution & Compliance** | Quên khóa chat ở nhóm Public để spam tràn lan; không đăng case tuần; bỏ rơi nhóm Private. | Đăng bài thất thường, nội dung sao chép qua loa, chưa phân biệt rõ cách chăm sóc nhóm Private. | **Khóa chat 2 nhóm Public chuẩn xác (Low Maintenance); đăng đều đặn 1 case/tuần; nhóm Private chăm sóc ấm áp; 100% không CTA bán hàng.** | Vận hành cực kỳ tinh gọn, tiết kiệm thời gian; nội dung case hấp dẫn, tạo độ tin cậy tự nhiên cao. | Hệ thống cộng đồng vận hành tự động mượt mà, trở thành kênh lan tỏa tri thức cốt lõi của thương hiệu. |
| **2. Insight & Diagnosis Depth** | Phân tích hời hợt, quy chụp nguyên nhân cảm tính, không chỉ ra được mắt xích gãy. | Chỉ ra được lỗi sai nhưng chưa thuyết phục về mặt phương pháp sư phạm. | **Bóc tách chuẩn xác giữa Triệu chứng bề mặt vs Nguyên nhân gốc rễ; đưa ra bài học nhân văn, thực tế cho cha mẹ.** | Insight sắc sảo, đánh trúng điểm mù tâm lý của đại đa số phụ huynh có con học cấp 2/3. | Phụ huynh đọc case thấy hình ảnh con mình trong đó và thay đổi hoàn toàn thái độ đồng hành cùng con. |
| **3. Trust & Organic Connection** | Phụ huynh rời nhóm vì cảm thấy bị làm phiền hoặc bị bán hàng lộ liễu. | Phụ huynh đọc bài nhưng chỉ im lặng, chưa có sự gắn kết cảm xúc. | **Phụ huynh tin tưởng, đón đọc bài chia sẻ; phụ huynh nhóm Private chủ động chia sẻ tâm sự sâu sắc với Mentor.** | Nhiều phụ huynh nhóm Private chủ động cảm ơn; tự nguyện giới thiệu bạn bè tham gia sự kiện Marlins Day. | Nuôi dưỡng niềm tin tuyệt đối; cộng đồng tự vận hành và lan tỏa uy tín giáo dục của Nemo12 một cách bền vững. |`,

  "marlins-workshop": `Đánh giá chất lượng vận hành Marlins Workshop theo 5 cấp độ (Chuẩn **L3 DoD ⭐**):

| Cấp độ | Execution & Discipline | Insight & Transformation Quality | Conversion & Parent Engagement |
| :---: | :--- | :--- | :--- |
| **L1** | Phòng Zoom lộn xộn, nhiều người tắt cam, trễ giờ, breakout room không hoạt động. | Nói lý thuyết suông, không có bài tập tình huống, phụ huynh không đọng lại gì. | Phụ huynh rời phòng sớm $>50\\%$; không ai quan tâm đến bước tiếp theo. |
| **L2** | Tổ chức đúng giờ nhưng không kiểm soát được cam/mic; thảo luận nhóm gượng gạo. | Nội dung còn chung chung, chưa chạm vào nỗi đau thật của việc kèm con học. | Phụ huynh nghe thụ động, ít tương tác trong phần Q&A và bài tập 4F. |
| **L3 (DoD ⭐)** | **100% bật cam/mic; phân phòng breakout mượt mà; tuân thủ đúng khung 120 phút.** | **Mổ xẻ trúng 1 Concept ngộ nhận; phụ huynh hoàn thành 2 vòng 4F Reflection tại chỗ.** | **$\\ge 75\\%$ phụ huynh ở lại đến cuối; có phụ huynh chủ động đăng ký tham gia Marlins Day / Trial Class.** |
| **L4** | Không khí sôi nổi, điều phối breakout nhịp nhàng; Mentor hỗ trợ tháo gỡ bế tắc nhóm xuất sắc. | Phụ huynh vỡ òa nhận thức, nhiều bố mẹ xúc động chia sẻ câu chuyện gia đình thật. | Nhiều phụ huynh truy cập Portal làm bài tập tự học và đề xuất mời bạn bè tham gia buổi sau. |
| **L5** | Buổi workshop trở thành một không gian chuyển hóa tâm lý sâu sắc; cộng đồng gắn kết mạnh mẽ. | Tạo ra bước ngoặt tư duy lâu dài trong cách cha mẹ giao tiếp và tôn trọng con cái. | Tỷ lệ chuyển đổi tự nhiên sang Marlins Day và Trial Class đạt mức kỷ lục mà không cần sale. |`,

  "marlins-day": `Đánh giá chất lượng thực thi Marlins Day theo 3 tiêu chuẩn phổ quát (Thang đo L1 – L5, **L3 là Definition of Done ⭐**):

| Trụ Cột Đánh Giá | L1 (Chưa Đạt) | L2 (Cơ Bản) | L3 (Đạt Chuẩn - DoD ⭐) | L4 (Tốt) | L5 (Xuất Sắc) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Execution & Atmosphere** | Sự kiện lộn xộn, trễ giờ, không gian ồn ào; phụ huynh cảm thấy bị gò bó. | Đúng giờ nhưng không khí trang trọng gượng gạo như hội thảo thương mại. | **Không gian ấm cúng, đúng giờ, quy mô chuẩn $\\le 10$ người; tuân thủ đúng kịch bản Fishbowl.** | Không khí vô cùng xúc động, ấm áp; kết nối tự nhiên và thân tình giữa các gia đình. | Trở thành sự kiện biểu tượng tạo ra ấn tượng sâu sắc không thể quên cho phụ huynh. |
| **2. Insight & Empathy** | Host nói lấn át, không lắng nghe phụ huynh; trả lời chung chung mang tính quảng cáo. | Lắng nghe nhưng chưa chạm vào nỗi đau thật của việc định hướng học tập cho con. | **Tạo Psychological Safety tuyệt đối; phụ huynh cởi mở chia sẻ bế tắc và tìm thấy sự đồng cảm.** | Bóc tách xuất sắc các ngộ nhận giáo dục, giúp phụ huynh tháo gỡ gánh nặng tâm lý ngay tại chỗ. | Chuyển biến hoàn toàn nhận thức của phụ huynh về phương pháp đồng hành cùng con. |
| **3. Community Conversion** | Phụ huynh về ngay sau sự kiện, không ai muốn tham gia Group Private. | Có phụ huynh vào nhóm nhưng tương tác mờ nhạt, không duy trì được ngọn lửa kết nối. | **$\\ge 80\\%$ phụ huynh tham gia Group Private; hào hứng đọc và bình luận bản Reflection Report.** | Nhiều phụ huynh chủ động đăng ký Trial Class cho con và rủ bạn bè cùng tham gia buổi sau. | Phụ huynh trở thành hạt nhân tích cực, tự nguyện lan tỏa uy tín giáo dục của Nemo12. |`,

  "trial-class": `Đánh giá chất lượng thực thi Trial Class theo 3 tiêu chuẩn phổ quát (Thang đo L1 – L5, **L3 là Definition of Done ⭐**):

| Trụ Cột Đánh Giá | L1 (Chưa Đạt) | L2 (Cơ Bản) | L3 (Đạt Chuẩn - DoD ⭐) | L4 (Tốt) | L5 (Xuất Sắc) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Automation & Tooling** | Hệ thống không ghi log, không xuất báo cáo Portal; Mentor phải tổng hợp thủ công. | Báo cáo xuất chậm $>24h$, giao diện lỗi hiển thị trên điện thoại của phụ huynh. | **Log dữ liệu tự động 100%; báo cáo trực quan sẵn sàng trên Portal trong 2h sau buổi 2.** | Báo cáo trực quan sinh động, phân tích sâu sắc các chiều cạnh tư duy và độ kiên trì của con. | Báo cáo trở thành tài liệu tham khảo giá trị giúp gia đình hiểu rõ tiềm năng học tập của con. |
| **2. Sincerity & Fit Judgment** | Telesale ép chốt khóa học bất chấp năng lực và sự phù hợp của học sinh. | Tư vấn chung chung, chưa phân tích được điểm mạnh/điểm kẹt thực tế của con. | **Tư vấn 1-1 dựa trên dữ liệu Portal; sẵn sàng từ chối và hướng dẫn lộ trình tự học nếu chưa phù hợp.** | Mentor đưa ra những lời khuyên sư phạm sắc sảo, giúp phụ huynh gỡ bỏ hoàn toàn ngộ nhận về con. | Phụ huynh cảm phục sự trung thực và đạo đức sư phạm cao quý của đội ngũ Nemo12. |
| **3. Student Experience** | Học sinh cảm thấy áp lực, sợ hãi hoặc chán nản trong 2 buổi học thử. | Học sinh tham gia thụ động, chỉ làm bài theo yêu cầu mà không có sự hứng thú. | **Học sinh hào hứng, tự tay hoàn thành sản phẩm nhỏ; cảm thấy tự tin và muốn tiếp tục học.** | Học sinh say mê khám phá, chủ động hỏi thêm bài nâng cao và tự hào khoe sản phẩm với bố mẹ. | Khơi dậy ngọn lửa đam mê học tập tự thân lâu dài bên trong đứa trẻ. |`,

  "live-class": `Đánh giá chất lượng vận hành Live Class theo 3 tiêu chuẩn phổ quát (Thang đo L1 – L5, **L3 là Definition of Done ⭐**):

| Trụ Cột Đánh Giá | L1 (Chưa Đạt) | L2 (Cơ Bản) | L3 (Đạt Chuẩn - DoD ⭐) | L4 (Tốt) | L5 (Xuất Sắc) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Delivery & Engagement** | Buổi học nhàm chán, giảng viên nói một chiều; học sinh mất tập trung hoặc tắt cam. | Dạy đủ giáo án nhưng ít tương tác, chưa khơi dậy được tư duy phản biện của học sinh. | **Tương tác 2 chiều liên tục; học sinh chủ động đặt câu hỏi và hoàn thành $\\ge 80\\%$ bài tập tại lớp.** | Không khí học tập say mê, hào hứng; học sinh sáng tạo vượt ngoài yêu cầu bài toán. | Lớp học trở thành không gian ươm mầm tài năng và tư duy tự học xuất sắc cho học sinh. |
| **2. Progress & Risk Control** | Không theo dõi tiến độ, học sinh nghỉ học/hổng kiến thức kéo dài mà không ai hay biết. | Phát hiện chậm trễ, chỉ can thiệp khi phụ huynh phàn nàn. | **Risk Detection Engine tự động gắn cờ; Mentor can thiệp 1-1 trong 24h gỡ rối dứt điểm.** | Mentor dự đoán trước các điểm nghẽn tâm lý/học thuật và hỗ trợ đón đầu hiệu quả. | Không có học sinh nào bị bỏ rơi; tỷ lệ hoàn thành khóa học đạt mức tối ưu. |
| **3. Growth Narrative Depth** | Nhận xét qua loa, sao chép mẫu chung, chỉ liệt kê điểm số vô hồn. | Nhận xét có tính động viên nhưng còn chung chung, thiếu minh chứng cụ thể. | **Growth Story 5 phần hoàn chỉnh; nhận xét độc bản, sâu sắc về sự chuyển hóa tính cách của con.** | Nhận xét chạm đến trái tim phụ huynh, phân tích chuẩn xác điểm mù và định hướng tương lai. | Ấn phẩm trở thành kỷ vật giáo dục thiêng liêng được gia đình trân trọng lưu giữ. |`,

  "family-meeting": `Đánh giá chất lượng thực thi Family Meeting theo 3 trụ cột chuẩn hóa (Thang đo L1 – L5, **L3 là chuẩn Definition of Done ⭐**):

| Trụ Cột Đánh Giá | L1 (Chưa Đạt) | L2 (Cơ Bản) | L3 (Đạt Chuẩn - DoD ⭐) | L4 (Tốt) | L5 (Xuất Sắc) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Kỹ năng Điều phối & Tác phong (Execution)** | Trễ hẹn, biến thành buổi hỏi đáp tra khảo, học sinh bị gạt ra ngoài lề. | Giao tiếp đúng quy trình nhưng gượng gạo, chủ yếu nói nhiều hơn nghe. | **Đúng giờ, tạo không khí thân mật tự nhiên; tuân thủ tỷ lệ Listen 70% - Ask 20% - Talk 10%; cả PH và con đều được chia sẻ.** | Dẫn dắt mượt mà, xử lý tinh tế các tình huống nhạy cảm, giúp gia đình cởi mở hoàn toàn. | Tạo ra một cuộc trò chuyện truyền cảm hứng sâu sắc, xóa tan khoảng cách thế hệ trong gia đình. |
| **2. Độ sâu Insight & Ghi chép Dory (Sensemaking)** | Không ghi chép, bỏ sót thông tin hoặc ghi chép suy diễn cảm tính. | Ghi lại thông tin hành chính bề nổi, không có gì mới so với form đăng ký. | **Khai thác đủ 3 insight (Dynamics, Environment, Motivation); cập nhật Family Notes & gắn tag 6 trục Dory trong 24h.** | Phát hiện được những điểm mù sư phạm và động lực nội tại độc đáo của học sinh có bằng chứng rõ ràng. | Insight có giá trị định hình lại toàn bộ chiến lược đồng hành, giúp cả team hiểu sâu sắc học sinh. |
| **3. Mức độ Tin cậy & Gắn kết (Parent Value)** | Phụ huynh cảm thấy bị soi mói, khó chịu hoặc mất thời gian. | Phụ huynh lịch sự tiếp đón nhưng vẫn giữ khoảng cách phòng thủ. | **Gia đình an tâm, cảm nhận rõ sự tận tâm của Mentor; đồng thuận với mục tiêu và bước hành động tiếp theo.** | Phụ huynh chủ động chia sẻ những khó khăn sâu kín và đặt niềm tin trọn vẹn vào định hướng của Mentor. | Phụ huynh xem Mentor như người đồng hành tri kỷ của gia đình, chủ động kết nối và giới thiệu thêm các gia đình khác. |`,

  "referrals": `Đánh giá chất lượng chương trình Referrals Program theo 3 tiêu chuẩn phổ quát (Thang đo L1 – L5, **L3 là Definition of Done ⭐**):

| Trụ Cột Đánh Giá | L1 (Chưa Đạt) | L2 (Cơ Bản) | L3 (Đạt Chuẩn - DoD ⭐) | L4 (Tốt) | L5 (Xuất Sắc) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. System Automation** | Hệ thống lỗi mã, không ghi nhận người giới thiệu, phải xử lý thủ công. | Hệ thống hoạt động nhưng chậm trễ, phải chờ duyệt tay mất nhiều ngày. | **Hệ thống tự động hóa 100% thời gian thực; cấp mã và áp dụng voucher 15% tức thì và chính xác.** | Giao diện quản lý ví voucher trên Portal mượt mà, trực quan, hỗ trợ chia sẻ 1-click. | Hệ thống ổn định tuyệt đối, tự động phân tích và đề xuất tri ân phụ huynh đại sứ tích cực. |
| **2. Policy Integrity** | Trả tiền mặt hoặc tạo chính sách hoa hồng nhiều tầng kiểu đa cấp (MLM). | Chính sách mập mờ, nhiều điều kiện ràng buộc gây khó khăn cho phụ huynh. | **Tuân thủ nghiêm ngặt chính sách 15% - 15% dạng Tuition Credit; minh bạch và rõ ràng.** | Truyền thông chính sách nhẹ nhàng, mang tinh thần tri ân giáo dục văn minh. | Phụ huynh hoàn toàn tự hào khi chia sẻ vì tính minh bạch và nhân văn của chương trình. |
| **3. Advocacy Growth** | Không có phụ huynh nào giới thiệu; phụ huynh e ngại chia sẻ. | Chỉ có vài lượt chia sẻ mang tính chất người thân trong gia đình. | **$\\ge 20\\%$ học viên mới đến từ nguồn phụ huynh giới thiệu (Organic Referral).** | Hình thành mạng lưới phụ huynh đại sứ gắn kết, chủ động bảo vệ và lan tỏa giá trị Nemo12. | Chương trình trở thành động cơ tăng trưởng tự nhiên bền vững nhất của tổ chức. |`
};

const fileMap = {
  "social-media": "P01_Social_Media_Playbook.md",
  "community": "P02_Community_Playbook.md",
  "marlins-workshop": "P03_Marlins_Workshop_Playbook.md",
  "marlins-day": "P04_Marlins_Day_Playbook.md",
  "trial-class": "P05_Trial_Class_Playbook.md",
  "live-class": "P06_Live_Class_Playbook.md",
  "family-meeting": "P07_Family_Meeting_Playbook.md",
  "referrals": "P08_Referrals_Program_Playbook.md"
};

for (const [slug, fileName] of Object.entries(fileMap)) {
  const filePath = "C_Playbooks/" + fileName;
  const currentContent = fs.readFileSync(filePath, "utf-8");
  
  // Extract frontmatter & Metadata Header
  const headerMatch = currentContent.match(/^([\s\S]*?## Metadata Header[\s\S]*?\n\n)/i);
  if (!headerMatch) {
    console.error("Could not find Metadata Header in:", filePath);
    continue;
  }
  const header = headerMatch[1].trim();
  
  // Extract DAR block & FAQ block
  const darMatch = currentContent.match(/<details[\s\S]*?<summary><h3>Decision Logs<\/h3><\/summary>[\s\S]*?<\/details>/i);
  const faqMatch = currentContent.match(/<details[\s\S]*?<summary><h3>FAQ<\/h3><\/summary>[\s\S]*?<\/details>/i);
  
  let bodySections = [];
  
  // 1. Stakeholder Mapping (if applicable)
  if (stakeholderMappings[slug]) {
    bodySections.push(`<details open>\n<summary><h3>Stakeholder Mapping</h3></summary>\n\n${stakeholderMappings[slug]}\n\n</details>`);
  }
  
  // 2. Session Agenda (if applicable)
  if (sessionAgendas[slug]) {
    bodySections.push(`<details open>\n<summary><h3>Session Agenda</h3></summary>\n\n${sessionAgendas[slug]}\n\n</details>`);
  }
  
  // 3. SOP Steps (All 8 playbooks have standard tables!)
  if (standardizedSopSteps[slug]) {
    bodySections.push(`<details open>\n<summary><h3>SOP Steps</h3></summary>\n\n${standardizedSopSteps[slug]}\n\n</details>`);
  }
  
  // 4. Do's & Don'ts (All 8 playbooks have standard 2-column table with header | Do's | Don'ts |)
  if (standardizedDosDonts[slug]) {
    bodySections.push(`<details open>\n<summary><h3>Do's & Don'ts</h3></summary>\n\n${standardizedDosDonts[slug]}\n\n</details>`);
  }
  
  // 5. Assessment Rubrics
  if (rubrics[slug]) {
    bodySections.push(`<details>\n<summary><h3>Assessment Rubrics</h3></summary>\n\n${rubrics[slug]}\n\n</details>`);
  }
  
  // 6. Decision Logs
  if (darMatch) {
    bodySections.push(darMatch[0].trim());
  }
  
  // 7. FAQ
  if (faqMatch) {
    bodySections.push(faqMatch[0].trim());
  }
  
  const fullMarkdown = header + "\n\n---\n\n" + bodySections.join("\n\n---\n\n") + "\n";
  fs.writeFileSync(filePath, fullMarkdown);
  console.log(`[REBUILT 100% OK] ${fileName}`);
}

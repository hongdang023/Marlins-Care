import fs from "fs";
import path from "path";

const fullFaqAndDarSpecs = {
  "P01_Social_Media_Playbook.md": {
    dars: [
      {
        title: "📌 DAR 07: Kênh Truyền Thông: Mentor Personal Branding vs Company Fanpage",
        context: "Lựa chọn kênh truyền thông mạng xã hội giữa Facebook cá nhân của Mentor và Fanpage công ty để thu hút phụ huynh đồng hành.",
        criteria: [
          { name: "C1: Tính Khả Thi & Tinh Gọn (Feasibility)", weight: "W3", scores: ["2.5 / 5 (7.5)", "4.0 / 5 (12.0)", "4.8 / 5 (14.4)"] },
          { name: "C2: Tác Động Niềm Tin & Thấu Cảm (Trust & Empathy)", weight: "W4", scores: ["2.0 / 5 (8.0)", "4.5 / 5 (18.0)", "5.0 / 5 (20.0)"] },
          { name: "C3: An Toàn & Bảo Toàn Tri Thức (Asset Retention)", weight: "W3", scores: ["4.5 / 5 (13.5)", "2.0 / 5 (6.0)", "4.8 / 5 (14.4)"] }
        ],
        total: ["29.0 / 50", "36.0 / 50", "48.8 / 50 (Approved ⭐)"],
        options: [
          { name: "Option A: 100% Fanpage Công Ty", desc: "Reach tự nhiên thấp, phụ huynh có tâm lý phòng thủ cao trước các trang thương mại." },
          { name: "Option B: 100% Facebook Cá Nhân Mentor", desc: "Reach cao và ấm áp nhưng rủi ro phụ thuộc cá nhân và thiếu tính kế thừa cho tổ chức." },
          { name: "Option C: Hybrid (Mentor-First + Fanpage Curation) ⭐", desc: "Facebook cá nhân là mũi nhọn cảm xúc (Human-Led); Fanpage đóng vai trò lưu trữ và tuyển tập.", approved: true }
        ],
        decision: "Facebook cá nhân Mentor là mũi nhọn tiếp cận cảm xúc và xây dựng niềm tin tự nhiên (Human-Led First); Fanpage/Hub của tổ chức đóng vai trò tuyển tập, khuếch đại và lưu trữ tài sản tri thức."
      },
      {
        title: "📌 DAR 08: Quyền Riêng Tư & Bảo Vệ Hình Ảnh Trẻ Em (Child Privacy & Consent)",
        context: "Sử dụng hình ảnh và sản phẩm học sinh thực tế để tạo trust nhưng phải tuân thủ Luật Trẻ em & Nghị định 13/2023/NĐ-CP.",
        criteria: [
          { name: "C1: Tuân Thủ Pháp Lý & An Toàn Trẻ (Legal & Privacy)", weight: "W4", scores: ["1.0 / 5 (4.0)", "5.0 / 5 (20.0)", "5.0 / 5 (20.0)"] },
          { name: "C2: Bằng Chứng Cảm Xúc Người Thật (Authenticity)", weight: "W3", scores: ["5.0 / 5 (15.0)", "2.0 / 5 (6.0)", "4.8 / 5 (14.4)"] },
          { name: "C3: Độ Tinh Gọn Trong Vận Hành (Low Maintenance)", weight: "W3", scores: ["4.5 / 5 (13.5)", "3.0 / 5 (9.0)", "4.6 / 5 (13.8)"] }
        ],
        total: ["32.5 / 50", "35.0 / 50", "48.2 / 50 (Approved ⭐)"],
        options: [
          { name: "Option A: Đăng Tự Do Không Xin Phép", desc: "Rủi ro pháp lý nghiêm trọng và vi phạm quyền riêng tư của gia đình." },
          { name: "Option B: Che Mặt 100% & Ẩn Mọi Dữ Liệu", desc: "Mất hoàn toàn tính cảm xúc và bằng chứng mặt người thật việc thật." },
          { name: "Option C: Cấu Trúc Đồng Thuận Đa Tầng (Tiered Consent) ⭐", desc: "Thu thập consent từ Form Onboarding, chỉ dùng nickname và ảnh được duyệt.", approved: true }
        ],
        decision: "Thiết lập Cấu trúc Đồng thuận Đa tầng (Tiered Consent: Tier 1 Public / Tier 2 Obscured / Tier 3 Private) ngay từ Form Onboarding; ẩn danh hóa 100% họ tên thật (chỉ dùng biệt danh) và không tự ý tag phụ huynh."
      },
      {
        title: "📌 DAR 09: Định Vị Nội Dung: Zero Hard-Selling vs Chuyển Đổi Thực Tế",
        context: "Giữ vững giá trị giáo dục phản tư chân thành, tuyệt đối không biến kênh cá nhân thành nơi bán hàng nhưng vẫn đo lường được hiệu quả.",
        criteria: [
          { name: "C1: Bảo Toàn Uy Tín & Giá Trị Chân Thật (Integrity)", weight: "W4", scores: ["1.5 / 5 (6.0)", "5.0 / 5 (20.0)", "5.0 / 5 (20.0)"] },
          { name: "C2: Đo Lường Hiệu Quả Tăng Trưởng (Attribution)", weight: "W3", scores: ["5.0 / 5 (15.0)", "1.0 / 5 (3.0)", "4.8 / 5 (14.4)"] },
          { name: "C3: Trải Nghiệm Tiếp Nhận Của Phụ Huynh (User Experience)", weight: "W3", scores: ["2.0 / 5 (6.0)", "4.5 / 5 (13.5)", "4.9 / 5 (14.7)"] }
        ],
        total: ["27.0 / 50", "36.5 / 50", "49.1 / 50 (Approved ⭐)"],
        options: [
          { name: "Option A: Chèn Link Bán Khóa Học Trực Tiếp", desc: "Mất sự tin cậy, gây phản cảm và biến mentor thành nhân viên telesales." },
          { name: "Option B: Chia Sẻ Tự Nhiên Không Đo Lường", desc: "Mù mờ về nguồn tuyển sinh và không tối ưu được nỗ lực của mentor." },
          { name: "Option C: Zero Hard-Selling + Đo Lường Ngầm Qua CRM ⭐", desc: "Không gắn link bán hàng; đo lường ngầm qua CRM Tag Lead Source và Form Khám Phá.", approved: true }
        ],
        decision: "Tuyệt đối giữ nguyên tắc Zero Hard-Selling trên trang cá nhân; đo lường chuyển đổi qua CRM Tagging (Lead_Source: Mentor_Social_Reflections) và câu hỏi khám phá nguồn tại Form Onboarding."
      }
    ],
    faqs: [
      {
        group: "Nhóm 1: Về Tần Suất & Tải Trọng Đăng Bài (Cadence & Workload)",
        items: [
          { q: "Mentor bận dạy học và chấm bài, làm sao đảm bảo được tần suất 2 bài/tuần?", a: "Quy trình đúc kết chỉ chiếm tối đa 35 phút/bài nhờ tận dụng trực tiếp sản phẩm học tập và ghi chú Dory Notes sau giờ dạy. Mentor không cần sáng tạo từ đầu mà chỉ kể lại khoảnh khắc bứt phá có thật của học sinh." },
          { q: "Nếu tuần đó lớp học không có sự kiện gì đặc biệt thì viết về chủ đề gì?", a: "Mentor khai thác góc nhìn phản tư về quá trình tự học, sai lầm phổ biến khi giải toán/lập trình hoặc chia sẻ một lời khuyên chân thành gửi phụ huynh." }
        ]
      },
      {
        group: "Nhóm 2: Về Tương Tác & Chăm Sóc Bình Luận (Engagement & Trust)",
        items: [
          { q: "Nếu phụ huynh để lại bình luận tiêu cực hoặc thắc mắc học phí trên bài viết thì xử lý thế nào?", a: "Luôn cảm ơn và phản hồi lịch sự, sau đó chủ động nhắn tin riêng (Direct Message) để lắng nghe và hỗ trợ thấu đáo, tuyệt đối không tranh luận công khai trên mạng xã hội." },
          { q: "Có cần trả lời tất cả bình luận của phụ huynh không?", a: "Bắt buộc trả lời 100% bình luận của phụ huynh học sinh trong ngày để thể hiện sự hiện diện và trân trọng mối quan hệ đồng hành." }
        ]
      }
    ]
  },
  "P02_Community_Playbook.md": {
    dars: [
      {
        title: "📌 DAR 10: Kiến Trúc Phân Tầng Group Zalo: Broadcast Public vs Interactive Private",
        context: "Vận hành hệ thống cộng đồng phụ huynh lớn mà không làm loãng thông tin và không tốn nhân sự trực mod 24/7.",
        criteria: [
          { name: "C1: Tinh Gọn & Không Ô Nhiễm Tin Rác (Low Maintenance)", weight: "W4", scores: ["1.5 / 5 (6.0)", "4.0 / 5 (16.0)", "4.9 / 5 (19.6)"] },
          { name: "C2: Chiều Sâu Gắn Kết & Chăm Sóc Riêng (High-Touch Value)", weight: "W4", scores: ["2.0 / 5 (8.0)", "2.5 / 5 (10.0)", "5.0 / 5 (20.0)"] },
          { name: "C3: Khả Năng Mở Rộng Quy Mô (Scalability)", weight: "W2", scores: ["1.0 / 5 (2.0)", "5.0 / 5 (10.0)", "4.8 / 5 (9.6)"] }
        ],
        total: ["16.0 / 50", "36.0 / 50", "49.2 / 50 (Approved ⭐)"],
        options: [
          { name: "Option A: Mở Chat 100% Tại Tất Cả Group", desc: "Tràn lan tin nhắn rác, phụ huynh tắt thông báo và rời nhóm hàng loạt." },
          { name: "Option B: Chỉ Dùng Kênh Thông Báo Zalo OA / Fanpage", desc: "Mất đi cảm giác ấm áp, thiếu không gian tương tác gần gũi cho phụ huynh thân thiết." },
          { name: "Option C: 2 Public Broadcast + 1 Private Interactive ⭐", desc: "Khóa chat nhóm công chúng phát case định kỳ; mở tương tác tại nhóm riêng phụ huynh Marlins.", approved: true }
        ],
        decision: "Áp dụng mô hình 02 Public Groups cài đặt Broadcast 1 chiều (Low Maintenance, không spam) để phát Case Study tuần + 01 Private Group (Nemo12 - Marlins) mở chat 2 chiều cho phụ huynh sau sự kiện Marlins Day để chăm sóc sâu."
      }
    ],
    faqs: [
      {
        group: "Nhóm 1: Về Tương Tác & Độ Sống Của Cộng Đồng (Community Engagement)",
        items: [
          { q: "Group Zalo khóa chat 1 chiều thì có bị giảm tương tác không?", a: "Phụ huynh bận rộn đánh giá cao việc nhóm không có tin rác. Mỗi bài Case Study gửi đi đều mang lại giá trị cao và tỷ lệ giữ chân phụ huynh cao hơn 60% so với nhóm mở chat." },
          { q: "Nội dung chia sẻ cho nhóm Cấp 2 và Cấp 3 có bị lệch tệp không?", a: "Quy luật tư duy logic và điểm mù học tập có tính phổ quát; việc tách 2 nhóm giúp phân đoạn chính xác khi gửi các thông báo chuyên sâu từng kỳ thi." }
        ]
      },
      {
        group: "Nhóm 2: Về Đo Lường & Đạo Đức Sư Phạm (Ethics & Attribution)",
        items: [
          { q: "Nguồn phụ huynh mới gia nhập nhóm cộng đồng đến từ đâu?", a: "Đến từ bài viết phản tư trên trang cá nhân của Mentor, lời giới thiệu truyền miệng của phụ huynh cũ và các diễn đàn giáo dục uy tín." },
          { q: "Cách bảo mật danh tính khi đưa tình huống học sinh vào Case Study?", a: "Toàn bộ tên học sinh được ẩn danh hóa bằng nickname, dữ liệu được tổng hợp từ nhiều buổi học khác nhau để phân tích bài học sư phạm mà không lộ danh tính." }
        ]
      }
    ]
  },
  "P03_Marlins_Workshop_Playbook.md": {
    dars: [
      {
        title: "📌 DAR 06: Định Dạng Workshop: Live Zoom Tối Thứ 5 vs Khóa Học Phụ Huynh Đóng Gói Sẵn",
        context: "Lựa chọn định dạng học tập cho phụ huynh bận rộn giữa việc sản xuất khóa học video hay tổ chức Live Zoom hàng tuần.",
        criteria: [
          { name: "C1: Tương Tác Trực Tiếp & Giải Tỏa Nỗi Đau (Live Empathy)", weight: "W4", scores: ["2.0 / 5 (8.0)", "5.0 / 5 (20.0)"] },
          { name: "C2: Tối Ưu Tải Trọng Đội Ngũ (Team Workload)", weight: "W3", scores: ["4.5 / 5 (13.5)", "4.8 / 5 (14.4)"] },
          { name: "C3: Tính Kế Thừa Dữ Liệu & Xem Lại (Reusability)", weight: "W3", scores: ["5.0 / 5 (15.0)", "4.8 / 5 (14.4)"] }
        ],
        total: ["36.5 / 50", "48.8 / 50 (Approved ⭐)"],
        options: [
          { name: "Option A: Đóng Gói 100% Khóa Học Video Tự Học LMS", desc: "Tỷ lệ hoàn thành dưới 5%, thiếu sự đồng cảm và không giải quyết được vướng mắc tức thì." },
          { name: "Option B: Live Zoom Tối Thứ 5 + Lưu Kho Tư Liệu Family Portal ⭐", desc: "Live đối thoại trực tiếp 120p; tự động cắt clip đúc kết lưu trên Portal cho bố mẹ xem lại.", approved: true }
        ],
        decision: "Tổ chức Live Zoom tương tác trực tiếp 120 phút tối Thứ 5 hàng tuần do Anh Đắc chủ trì; toàn bộ nội dung được biên tập tinh gọn lưu trữ trên Family Portal."
      },
      {
        title: "📌 DAR 11: Thời Lượng Workshop: 120 Phút Sâu vs 60 Phút Ngắn",
        context: "Thiết kế thời lượng workshop đảm bảo đủ thời gian thực hành Breakout Room và giải đáp thấu cảm.",
        criteria: [
          { name: "C1: Chiều Sâu Giải Quyết Vấn Đề (Problem Solving Depth)", weight: "W4", scores: ["2.0 / 5 (8.0)", "5.0 / 5 (20.0)"] },
          { name: "C2: Khả Năng Tập Trung Của Phụ Huynh (Parent Attention)", weight: "W3", scores: ["4.5 / 5 (13.5)", "4.5 / 5 (13.5)"] },
          { name: "C3: Hoạt Động Thấu Cảm Đa Chiều (Breakout Facilitation)", weight: "W3", scores: ["1.5 / 5 (4.5)", "4.8 / 5 (14.4)"] }
        ],
        total: ["26.0 / 50", "47.9 / 50 (Approved ⭐)"],
        options: [
          { name: "Option A: 60 Phút Thuyết Trình Một Chiều", desc: "Chỉ kịp nói lý thuyết bề mặt, không có thời gian đối thoại và chia phòng thực hành." },
          { name: "Option B: 120 Phút Đa Tầng (40p Khung + 40p Breakout + 40p Q&A) ⭐", desc: "Cấu trúc khoa học, bố mẹ được thảo luận nhóm nhỏ và giải quyết trăn trở thực tế.", approved: true }
        ],
        decision: "Chuẩn hóa thời lượng 120 phút (20h00 - 22h00 tối Thứ 5) với cấu trúc 3 chặng cân bằng giữa truyền đạt kiến thức, thực hành nhóm nhỏ và giải đáp cá nhân hóa."
      }
    ],
    faqs: [
      {
        group: "Nhóm 1: Về Thời Lượng & Tải Trọng Đội Ngũ (Capacity & Burnout)",
        items: [
          { q: "Tổ chức tối Thứ 5 và Chủ Nhật hàng tuần có gây quá tải cho Host và Mentor không?", a: "Nội dung Workshop xoay quanh các chủ đề nền tảng đã được chuẩn hóa khung; Mentor phối hợp đồng hành giúp chia tải và duy trì năng lượng bền bỉ." },
          { q: "120 phút vào tối Thứ 5 có quá dài với phụ huynh bận rộn không?", a: "Phụ huynh được phân bổ vào các phòng Breakout tương tác liên tục nên không khí luôn hào hứng, không gây cảm giác mệt mỏi." }
        ]
      },
      {
        group: "Nhóm 2: Về Tỷ Lệ Chuyển Đổi & Đo Lường Hiệu Quả (Conversion & Funnel)",
        items: [
          { q: "Tổ chức Workshop miễn phí thì đo lường hiệu quả như thế nào?", a: "Đo lường bằng tỷ lệ phụ huynh tham gia trọn vẹn, số lượng câu hỏi chất lượng và lượng phụ huynh chủ động đăng ký tham gia Marlins Day hoặc Trial Class." },
          { q: "Nếu phụ huynh tham gia nhiều tuần nhưng chưa đăng ký khóa học thì sao?", a: "Workshop phục vụ mục tiêu lan tỏa tri thức cộng đồng; sự hiện diện đều đặn của phụ huynh là minh chứng cho niềm tin ngày càng sâu sắc." }
        ]
      }
    ]
  },
  "P04_Marlins_Day_Playbook.md": {
    dars: [
      {
        title: "📌 DAR 04: Mô Hình Tổ Chức Marlins Day: Năng Lực Thường Trực vs Sự Kiện Đột Xuất",
        context: "Lựa chọn giữa việc tổ chức hội thảo quy mô lớn hàng quý hay duy trì không gian đối thoại nhóm nhỏ hàng tuần.",
        criteria: [
          { name: "C1: Chiều Sâu Thấu Cảm & Tương Tác 1-1 (Empathy Depth)", weight: "W4", scores: ["2.0 / 5 (8.0)", "4.8 / 5 (19.2)"] },
          { name: "C2: Tính Ổn Định & Dễ Dự Đoán (Predictability)", weight: "W3", scores: ["2.5 / 5 (7.5)", "5.0 / 5 (15.0)"] },
          { name: "C3: Tối Ưu Chi Phí & Nhân Sự Vận Hành (Cost & Ops)", weight: "W3", scores: ["3.0 / 5 (9.0)", "4.6 / 5 (13.8)"] }
        ],
        total: ["24.5 / 50", "48.0 / 50 (Approved ⭐)"],
        options: [
          { name: "Option A: Hội Thảo Quy Mô Lớn Hàng Quý (> 100 người)", desc: "Chi phí tổ chức cao, loãng cảm xúc và không thể lắng nghe từng phụ huynh." },
          { name: "Option B: Đối Thoại Nhóm Nhỏ Thường Trực Chiều Chủ Nhật (≤ 10 người) ⭐", desc: "Không gian Fishbowl ấm cúng tại Lotte Hotel, kết nối sâu sắc từng gia đình.", approved: true }
        ],
        decision: "Duy trì Marlins Day định kỳ 15h00 – 17h00 Chủ Nhật hàng tuần tại Lotte Hotel với quy mô giới hạn ≤ 10 người/buổi. Đây là năng lực chăm sóc trực tiếp thường trực (Persistent Capability) nuôi dưỡng niềm tin chiều sâu."
      }
    ],
    faqs: [
      {
        group: "Nhóm 1: Về Địa Điểm & Trải Nghiệm Không Gian (Venue & Atmosphere)",
        items: [
          { q: "Tại sao lại chọn không gian Sky Lounge tại Lotte Hotel thay vì văn phòng lớp học thông thường?", a: "Không gian trang nhã, riêng tư và tách biệt khỏi áp lực học đường giúp phụ huynh thả lỏng tâm lý, sẵn sàng mở lòng chia sẻ những trăn trở sâu kín nhất về con." },
          { q: "Sự kiện có thu phí tham dự của phụ huynh không?", a: "Hoàn toàn miễn phí, Nemo12 tài trợ 100% không gian và đồ uống như một lời tri ân dành cho các bậc cha mẹ luôn trăn trở đồng hành cùng con." }
        ]
      },
      {
        group: "Nhóm 2: Về Điều Phối Phiên Đối Thoại (Facilitation & Fishbowl)",
        items: [
          { q: "Nếu phụ huynh rụt rè không dám chia sẻ trong vòng tròn Fishbowl thì Host xử lý thế nào?", a: "Host mở đầu bằng một câu chuyện quan sát thực tế và đặt câu hỏi gợi mở nhẹ nhàng, tạo bầu không khí an toàn không phán xét để từng bố mẹ tự nhiên lên tiếng." },
          { q: "Sau buổi gặp, phụ huynh được nhận những tài liệu gì?", a: "Mentor tổng hợp bản Dory Notes cá nhân hóa ghi nhận điểm mạnh và lộ trình gợi ý cho con gửi riêng cho gia đình trong vòng 24h." }
        ]
      }
    ]
  },
  "P05_Trial_Class_Playbook.md": {
    dars: [
      {
        title: "📌 DAR 02: Mô Hình Đánh Giá Fit Judgment: System-Driven vs Human Insight",
        context: "Phân định vai trò giữa hệ thống tự động và mentor trong việc tham vấn kết quả 2 buổi học thử của học sinh.",
        criteria: [
          { name: "C1: Bằng Chứng Khách Quan & Minh Bạch (Objectivity)", weight: "W3", scores: ["5.0 / 5 (15.0)", "2.0 / 5 (6.0)", "4.9 / 5 (14.7)"] },
          { name: "C2: Thấu Cảm Bối Cảnh Cá Nhân (Human Judgment)", weight: "W4", scores: ["2.0 / 5 (8.0)", "4.8 / 5 (19.2)", "5.0 / 5 (20.0)"] },
          { name: "C3: Tốc Độ Phản Hồi Trong 24h (SLA Speed)", weight: "W3", scores: ["5.0 / 5 (15.0)", "2.5 / 5 (7.5)", "4.8 / 5 (14.4)"] }
        ],
        total: ["38.0 / 50", "32.7 / 50", "49.1 / 50 (Approved ⭐)"],
        options: [
          { name: "Option A: 100% Hệ Thống Tự Động Gửi Báo Cáo", desc: "Nhanh nhưng khô khan, thiếu sự thấu cảm bối cảnh riêng của từng đứa trẻ." },
          { name: "Option B: 100% Mentor Tự Nhận Xét Thủ Công", desc: "Chậm trễ, tốn nhiều thời gian và dễ rơi vào đánh giá cảm tính không số liệu." },
          { name: "Option C: Hybrid (Hệ Thống Xuất Bằng Chứng + Mentor Tham Vấn) ⭐", desc: "Máy tự động xuất dữ liệu lên Family Portal; Mentor gọi điện tham vấn thấu cảm.", approved: true }
        ],
        decision: "Bằng chứng năng lực và log dữ liệu được hệ thống tự động xuất bản lên Portal (System-First); Mentor chịu trách nhiệm tham vấn trực tiếp 1-1 (Human Judgment) để đảm bảo sự đồng thuận cao nhất."
      },
      {
        title: "📌 DAR 13: Quy Chuẩn 02 Buổi Học Thử Miễn Phí & Kiểm Soát No-Show",
        context: "Thiết kế số lượng buổi học thử tối ưu và cơ chế nhắc lịch để đảm bảo học sinh bộc lộ đúng năng lực mà không gây lãng phí nguồn lực.",
        criteria: [
          { name: "C1: Đủ Dữ Liệu Đánh Giá Năng Lực Học Sinh (Data Sufficiency)", weight: "W4", scores: ["2.0 / 5 (8.0)", "5.0 / 5 (20.0)", "4.5 / 5 (18.0)"] },
          { name: "C2: Tỷ Lệ Đi Học Đầy Đủ (Show-up Rate)", weight: "W3", scores: ["4.5 / 5 (13.5)", "4.8 / 5 (14.4)", "2.5 / 5 (7.5)"] },
          { name: "C3: Tối Ưu Chi Phí Giảng Dạy (Teaching Resource)", weight: "W3", scores: ["5.0 / 5 (15.0)", "4.5 / 5 (13.5)", "2.0 / 5 (6.0)"] }
        ],
        total: ["36.5 / 50", "47.9 / 50 (Approved ⭐)", "31.5 / 50"],
        options: [
          { name: "Option A: 01 Buổi Học Thử Duy Nhất", desc: "Thời gian quá ngắn, học sinh chưa kịp làm quen môi trường và bộc lộ tư duy." },
          { name: "Option B: 02 Buổi Học Thử Kèm Poll Zalo Nhắc Lịch Trước 24h ⭐", desc: "Đủ 2 buổi để quan sát độ tiến bộ; Poll Zalo giúp kiểm soát sĩ số chuẩn xác.", approved: true },
          { name: "Option C: 04 Buổi Học Thử Dài Ngày", desc: "Gây quá tải vận hành cho mentor và giảm tính cam kết của gia đình." }
        ],
        decision: "Áp dụng mô hình 02 buổi Trial miễn phí để học sinh đủ thời gian bộc lộ phong cách tư duy; tích hợp Poll Zalo trước 24h tại Bước 1 để kiểm soát sĩ số chủ động."
      },
      {
        title: "📌 DAR 14: Nguyên Tắc Sẵn Sàng Từ Chối (Honest Gatekeeping)",
        context: "Quy tắc ứng xử khi học sinh chưa sẵn sàng hoặc phong cách học tập không phù hợp với triết lý Nemo12.",
        criteria: [
          { name: "C1: Bảo Toàn Chất Lượng & Môi Trường Học (Cohort Quality)", weight: "W4", scores: ["1.5 / 5 (6.0)", "5.0 / 5 (20.0)"] },
          { name: "C2: Niềm Tin Dài Hạn Của Phụ Huynh (Long-term Trust)", weight: "W4", scores: ["2.0 / 5 (8.0)", "5.0 / 5 (20.0)"] },
          { name: "C3: Áp Lực Doanh Số Ngắn Hạn (Short-term Revenue)", weight: "W2", scores: ["5.0 / 5 (10.0)", "3.0 / 5 (6.0)"] }
        ],
        total: ["24.0 / 50", "46.0 / 50 (Approved ⭐)"],
        options: [
          { name: "Option A: Nhận 100% Học Sinh Để Đạt Chỉ Tiêu Tuyển Sinh", desc: "Gây quá tải cho học sinh, giảm chất lượng lớp học và làm mất uy tín đường dài." },
          { name: "Option B: Trung Thực Từ Chối & Trao Lộ Trình Tự Học Bổ Trợ ⭐", desc: "Bảo vệ quyền lợi của con, phụ huynh nể phục sự trung thực và quay lại khi phù hợp.", approved: true }
        ],
        decision: "Mentor tuyệt đối không vì áp lực doanh số mà nhận học sinh chưa phù hợp; sẵn sàng từ chối trung thực và trao lộ trình tự học tại nhà trên Portal."
      }
    ],
    faqs: [
      {
        group: "Nhóm 1: Về Quy Trình Học Thử (Trial Flow & Operations)",
        items: [
          { q: "Học sinh vắng 1 trong 2 buổi Trial thì có được đánh giá Fit Judgment không?", a: "Mentor sẽ hỗ trợ xếp lịch bù 1 buổi phù hợp để đảm bảo thu thập đủ dữ liệu 2 buổi trước khi đưa ra kết luận tham vấn chính thức." },
          { q: "Phụ huynh có được vào dự giờ cùng con trong 2 buổi Trial không?", a: "Phụ huynh hoàn toàn được khuyến khích đồng hành quan sát trong yên lặng để thấu hiểu cách tương tác sư phạm của Mentor." }
        ]
      },
      {
        group: "Nhóm 2: Về Tham Vấn & Quyết Định Nhập Học (Fit Judgment Consultation)",
        items: [
          { q: "Nếu Mentor kết luận học sinh chưa phù hợp thì gia đình cần làm gì?", a: "Mentor sẽ gửi kèm tài liệu hướng dẫn và bài tập rèn luyện tư duy nền tảng tại nhà trên Family Portal để con bổ trợ thêm trước khi thử lại." },
          { q: "Học phí và chính sách ưu đãi sau học thử được áp dụng như thế nào?", a: "Hệ thống tự động áp dụng chính sách học phí minh bạch và bảo lưu quyền lợi cho phụ huynh xác nhận trong vòng 48h sau buổi tham vấn." }
        ]
      }
    ]
  },
  "P06_Live_Class_Playbook.md": {
    dars: [
      {
        title: "📌 DAR 01: Nhịp Báo Cáo Tuần: Weekly Pulse 3 Dòng vs Báo Cáo Chi Tiết",
        context: "Cân bằng giữa việc cập nhật tiến độ liên tục cho phụ huynh và việc tránh làm phiền bố mẹ bận rộn.",
        criteria: [
          { name: "C1: Tối Giản & Tránh Quá Tải Thông Tin (Cognitive Load)", weight: "W4", scores: ["2.0 / 5 (8.0)", "5.0 / 5 (20.0)"] },
          { name: "C2: Minh Bạch Bằng Chứng Học Tập (Evidence Transparency)", weight: "W3", scores: ["4.8 / 5 (14.4)", "4.9 / 5 (14.7)"] },
          { name: "C3: Tinh Gọn Thời Gian Của Mentor (Mentor Efficiency)", weight: "W3", scores: ["2.5 / 5 (7.5)", "4.8 / 5 (14.4)"] }
        ],
        total: ["29.9 / 50", "49.1 / 50 (Approved ⭐)"],
        options: [
          { name: "Option A: Soạn Báo Cáo Dài Hàng Trang Mỗi Tuần", desc: "Phụ huynh không có thời gian đọc, mentor kiệt sức vì làm báo cáo hình thức." },
          { name: "Option B: Weekly Pulse 3 Dòng + Link Xem Bằng Chứng Trực Tiếp ⭐", desc: "Tự động xuất 3 dòng trọng tâm (Điểm sáng, Điểm nghẽn, Hành động) kèm link Portal.", approved: true }
        ],
        decision: "Áp dụng định dạng Weekly Pulse 3 Dòng siêu tinh gọn gửi qua Zalo mỗi tuần, kết nối trực tiếp với dashboard bằng chứng trên Family Portal."
      },
      {
        title: "📌 DAR 03: Ấn Phẩm Kết Khóa: Bảng Điểm Truyền Thống vs Growth Story 5 Phần",
        context: "Lựa chọn hình thức tổng kết hành trình học tập 12 buổi của học sinh.",
        criteria: [
          { name: "C1: Chiều Sâu Tôn Vinh Sự Chuyển Hóa (Transformation Depth)", weight: "W4", scores: ["1.5 / 5 (6.0)", "5.0 / 5 (20.0)"] },
          { name: "C2: Giá Trị Lưu Niệm & Niềm Tự Hào Của Cha Mẹ (Parent Pride)", weight: "W4", scores: ["1.0 / 5 (4.0)", "5.0 / 5 (20.0)"] },
          { name: "C3: Mức Độ Tự Động Hóa Dữ Liệu (Automation Feasibility)", weight: "W2", scores: ["5.0 / 5 (10.0)", "4.5 / 5 (9.0)"] }
        ],
        total: ["20.0 / 50", "49.0 / 50 (Approved ⭐)"],
        options: [
          { name: "Option A: Bảng Điểm Số & Nhận Xét Chung Chung", desc: "Vô hồn, dễ gây so sánh điểm số tiêu cực và không lột tả được nỗ lực của con." },
          { name: "Option B: Ấn Phẩm Kể Chuyện Growth Story 5 Phần Cá Nhân Hóa ⭐", desc: "Khắc họa sinh động 5 chặng chuyển biến tư duy, lưu giữ như kỷ vật vô giá của gia đình.", approved: true }
        ],
        decision: "Đóng gói toàn bộ hành trình 12 buổi thành ấn phẩm Growth Story 5 phần gửi tặng gia đình vào Buổi 12, biến thành tựu học tập thành niềm tự hào kết nối cha mẹ và con cái."
      }
    ],
    faqs: [
      {
        group: "Nhóm 1: Về Vận Hành Lớp Học 12 Buổi (Class Operations & Support)",
        items: [
          { q: "Học sinh vắng một buổi học chính thức thì được hỗ trợ học bù như thế nào?", a: "Hệ thống tự động lưu video bài giảng và bài tập thực hành trên Family Portal; Mentor sẽ dành 15 phút đầu giờ buổi kế tiếp để gỡ rối nhanh cho con." },
          { q: "Khi con gặp khó khăn với bài tập về nhà thì liên hệ hỗ trợ ra sao?", a: "Học sinh gửi câu hỏi trực tiếp trên hệ thống hoặc nhắn tin trong nhóm lớp để Mentor hướng dẫn gợi mở tư duy, tuyệt đối không giải hộ bài." }
        ]
      },
      {
        group: "Nhóm 2: Về Báo Cáo Tuần & Bằng Chứng Học Tập (Progress Tracking)",
        items: [
          { q: "Phụ huynh có thể xem sản phẩm lập trình và bài giải của con ở đâu?", a: "Mọi sản phẩm, log nỗ lực và nhận xét của Mentor được cập nhật liên tục theo thời gian thực trên Family Portal của từng học sinh." },
          { q: "Ấn phẩm Growth Story kết khóa được bàn giao dưới định dạng nào?", a: "Gia đình nhận bản Digital tương tác trực quan trên Portal kèm bản in trang trọng lưu niệm gửi tới tận nhà sau Buổi 12." }
        ]
      }
    ]
  },
  "P07_Family_Meeting_Playbook.md": {
    dars: [
      {
        title: "📌 DAR 05: Thời Điểm Tổ Chức Family Meeting: Bắt Buộc Định Kỳ vs Khi Có Khoảnh Khắc Ý Nghĩa",
        context: "Lựa chọn thời điểm gặp gỡ trực tiếp gia đình để đạt hiệu quả thấu cảm cao nhất.",
        criteria: [
          { name: "C1: Mức Độ Cần Thiết & Giá Trị Thực Chất (Value per Meeting)", weight: "W4", scores: ["2.5 / 5 (10.0)", "5.0 / 5 (20.0)"] },
          { name: "C2: Tối Ưu Thời Gian Của Phụ Huynh & Mentor (Time Optimization)", weight: "W3", scores: ["2.0 / 5 (6.0)", "4.8 / 5 (14.4)"] },
          { name: "C3: Tác Động Gắn Kết Gia Đình (Bonding Impact)", weight: "W3", scores: ["3.0 / 5 (9.0)", "4.9 / 5 (14.7)"] }
        ],
        total: ["25.0 / 50", "49.1 / 50 (Approved ⭐)"],
        options: [
          { name: "Option A: Họp Phụ Huynh Bắt Buộc Cả Lớp Cùng Lúc", desc: "Hình thức hành chính rập khuôn, không giải quyết được vấn đề riêng của từng nhà." },
          { name: "Option B: Gặp Gỡ 1-1 Theo Khoảnh Khắc Ý Nghĩa (Meaningful Moments) ⭐", desc: "Kích hoạt khi học sinh bứt phá vượt bậc hoặc gặp điểm nghẽn tâm lý cần gỡ rối.", approved: true }
        ],
        decision: "Chỉ tổ chức Family Meeting 1-1 khi xuất hiện khoảnh khắc ý nghĩa (High-touch Meaningful Moments) hoặc cột mốc giữa kỳ (~Buổi 5-7), đảm bảo mỗi cuộc gặp đều mang lại giá trị độc bản."
      }
    ],
    faqs: [
      {
        group: "Nhóm 1: Về Chuẩn Bị & Đặt Lịch Gặp Gỡ (Scheduling & Preparation)",
        items: [
          { q: "Buổi Family Meeting kéo dài bao lâu và diễn ra ở đâu?", a: "Thời lượng tiêu chuẩn là 60 phút, diễn ra trực tiếp tại nhà học sinh hoặc không gian yên tĩnh phù hợp do gia đình lựa chọn." },
          { q: "Cả bố và mẹ có bắt buộc phải cùng tham dự không?", a: "Nemo12 khuyến khích cả bố, mẹ và học sinh cùng hiện diện trọn vẹn để tạo sự thấu hiểu đồng thuận đa chiều trong gia đình." }
        ]
      },
      {
        group: "Nhóm 2: Về Kết Quả Bàn Giao (Family Notes & Next Steps)",
        items: [
          { q: "Bản Family Notes 6 trục bao gồm những nội dung gì?", a: "Ghi nhận 6 chiều kích: Điểm mạnh cốt lõi, Rào cản tâm lý, Phong cách tư duy, Mục tiêu gia đình, Thỏa thuận đồng hành và Kế hoạch 30 ngày tiếp theo." },
          { q: "Sau buổi gặp, Mentor sẽ theo dõi tiến độ như thế nào?", a: "Mentor cập nhật Family Notes lên Portal và định kỳ nhắn tin chia sẻ những chuyển biến nhỏ của con theo đúng cam kết đã thống nhất." }
        ]
      }
    ]
  },
  "P08_Referrals_Program_Playbook.md": {
    dars: [
      {
        title: "📌 DAR 12: Cơ Chế Tri Ân Song Phương: Tiền Mặt Chiết Khấu vs Tuition Credit 15% - 15%",
        context: "Lựa chọn chính sách tưởng thưởng giới thiệu phụ huynh mới vừa đảm bảo đạo đức giáo dục vừa khuyến khích lan tỏa tự nhiên.",
        criteria: [
          { name: "C1: Giữ Gìn Chuẩn Mực & Đạo Đức Sư Phạm (Educational Dignity)", weight: "W4", scores: ["1.0 / 5 (4.0)", "5.0 / 5 (20.0)"] },
          { name: "C2: Động Lực Lan Tỏa Chân Thành (Organic Advocacy)", weight: "W3", scores: ["3.0 / 5 (9.0)", "4.8 / 5 (14.4)"] },
          { name: "C3: Tự Động Hóa 100% Trên Hệ Thống (System Automation)", weight: "W3", scores: ["4.0 / 5 (12.0)", "5.0 / 5 (15.0)"] }
        ],
        total: ["25.0 / 50", "49.4 / 50 (Approved ⭐)"],
        options: [
          { name: "Option A: Hoa Hồng Tiền Mặt Chiết Khấu Trực Tiếp", desc: "Thương mại hóa mối quan hệ phụ huynh, làm giảm giá trị và uy tín cao quý của giáo dục." },
          { name: "Option B: Chính Sách Tri Ân Song Phương 15% - 15% Tuition Credit ⭐", desc: "Tặng 15% học phí cho cả gia đình giới thiệu và gia đình mới, tự động cấp mã qua Portal.", approved: true }
        ],
        decision: "Áp dụng chính sách Tri Ân Song Phương 15% - 15% Tuition Credit tự động kích hoạt trên Family Portal, tuyệt đối không dùng hoa hồng tiền mặt thương mại."
      }
    ],
    faqs: [
      {
        group: "Nhóm 1: Về Cơ Chế & Điều Kiện Áp Dụng (Program Rules & Eligibility)",
        items: [
          { q: "Mã giới thiệu cá nhân của phụ huynh lấy ở đâu?", a: "Phụ huynh chỉ cần đăng nhập Family Portal, mã giới thiệu độc bản kèm link chia sẻ nhanh sẽ hiển thị ngay tại mục Tri Ân Đồng Hành." },
          { q: "Tuition Credit 15% có thời hạn sử dụng trong bao lâu?", a: "Credit có giá trị tích lũy vĩnh viễn và được tự động khấu trừ vào học phí các khóa học nâng cao kế tiếp của con hoặc chuyển tặng cho người thân." }
        ]
      },
      {
        group: "Nhóm 2: Về Tự Động Hóa & Minh Bạch (Automation & Tracking)",
        items: [
          { q: "Làm sao phụ huynh biết bạn bè của mình đã sử dụng mã giới thiệu thành công?", a: "Hệ thống tự động gửi thông báo chúc mừng qua Zalo và cập nhật trạng thái voucher vào ví điện tử trên Portal của phụ huynh ngay khi giao dịch hoàn tất." },
          { q: "Gia đình mới được nhận ưu đãi như thế nào khi đăng ký qua link giới thiệu?", a: "Học sinh mới được tự động giảm trực tiếp 15% học phí ngay tại bước thanh toán học phí chính thức." }
        ]
      }
    ]
  }
};

Object.entries(fullFaqAndDarSpecs).forEach(([fileName, spec]) => {
  const filePath = path.join("C_Playbooks", fileName);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, "utf-8");
  
  // Format DARs Markdown
  let darSectionHtml = "\n\n<details open>\n<summary><h3>Decision Logs</h3></summary>\n\nTổng hợp các quyết định kiến trúc và đánh giá CMMI DAR bảo vệ cho phương pháp tiếp cận của Playbook:\n\n";
  
  spec.dars.forEach(dar => {
    darSectionHtml += "#### " + dar.title + "\n";
    darSectionHtml += "* **Bối cảnh:** " + dar.context + "\n\n";
    
    // Markdown Table
    darSectionHtml += "| Tiêu Chí Đánh Giá (Criteria) | Trọng Số | " + dar.options.map(o => o.name).join(" | ") + " |\n";
    darSectionHtml += "| :--- | :---: | " + dar.options.map(() => ":---:").join(" | ") + " |\n";
    
    dar.criteria.forEach(c => {
      darSectionHtml += "| **" + c.name + "** | " + c.weight + " | " + c.scores.join(" | ") + " |\n";
    });
    darSectionHtml += "| **TỔNG ĐIỂM (TOTAL SCORE)** | **Sum: 10** | " + dar.total.join(" | ") + " |\n";
    darSectionHtml += "| **Phân Tích & Đánh Đổi (Trade-offs)** | — | " + dar.options.map(o => o.desc).join(" | ") + " |\n\n";
    darSectionHtml += "* **Quyết định:** " + dar.decision + "\n\n";
  });
  darSectionHtml += "</details>\n\n";
  
  // Format FAQs Markdown
  let faqSectionHtml = "<details>\n<summary><h3>FAQ</h3></summary>\n\n";
  spec.faqs.forEach(g => {
    faqSectionHtml += "#### " + g.group + "\n";
    g.items.forEach(it => {
      faqSectionHtml += "* **" + it.q + "**  \n  👉 **A:** " + it.a + "\n";
    });
    faqSectionHtml += "\n";
  });
  faqSectionHtml += "</details>\n";
  
  // Strip previous DAR/FAQ blocks
  content = content.replace(/<details[\s\S]*?<summary>[\s\S]*?<h3>Decision Logs[\s\S]*?<\/details>/gi, "");
  content = content.replace(/<details[\s\S]*?<summary>[\s\S]*?<h3>FAQ[\s\S]*?<\/details>/gi, "");
  content = content.replace(/<details[\s\S]*?<summary>[\s\S]*?<h3>Strategic FAQ[\s\S]*?<\/details>/gi, "");
  
  content = content.trim() + "\n\n---\n" + darSectionHtml + "---\n\n" + faqSectionHtml;
  fs.writeFileSync(filePath, content);
  console.log("Successfully synchronized Markdown DAR & FAQ in:", fileName);
});

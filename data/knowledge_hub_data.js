export const KNOWLEDGE_HUB_DATA = {
  "meta": {
    "title": "Nemo12 Parent Care Knowledge Hub",
    "version": "1.0.0",
    "date": "2026-08-28",
    "corePhilosophy": "Automate the evidence. Humanize the meaning.",
    "rules": [
      "Do not make humans report what machines already know.",
      "Machines detect; humans judge.",
      "Human touch must add something the system cannot.",
      "Personalization is not inserting the student's name; it means showing meaningful understanding of that learner/family.",
      "Optimize human value, not human frequency.",
      "Minimize low-value human work, not human relationship.",
      "Every touchpoint must solve a specific Parent Job.",
      "Family-Centric: Mentors observe, tag (pain, jtbd, need, belief, goal, fact) and follow whole families in Dolphin Workspace."
    ]
  },
  "stakeholders": [
    {
      "id": "parent",
      "name": "Phụ huynh (Parent / Marlin)",
      "role": "Primary Stakeholder / Customer",
      "desc": "Khách hàng trực tiếp của Parent Care, người đồng hành và kiến tạo môi trường gia đình lành mạnh."
    },
    {
      "id": "student",
      "name": "Học sinh (Student / Nemo)",
      "role": "Ultimate Beneficiary",
      "desc": "Người thụ hưởng cuối cùng; được bảo vệ quyền tự chủ và tâm lý học tập tích cực."
    },
    {
      "id": "system",
      "name": "Nemo12 System",
      "role": "Automated Layer (Data + Scale + Consistency)",
      "desc": "Thu thập log, đo lường năng lực, phát hiện bất thường, gửi báo cáo tiến độ định kỳ."
    },
    {
      "id": "mentor",
      "name": "Dolphin Mentor",
      "role": "Human Layer (Context + Judgment + Relationship)",
      "desc": "Quan sát định tính, phán đoán bối cảnh, đối thoại thấu cảm, gắn Dory tags và chăm sóc theo gia đình (family_mentors)."
    },
    {
      "id": "marlins",
      "name": "Marlins Care (Anh Đắc)",
      "role": "Guidance Layer (Reflection + Misconception Resolution)",
      "desc": "Năng lực hỗ trợ thường trực chiều Chủ Nhật; tháo gỡ ngộ nhận và trang bị mô hình tư duy giáo dục."
    }
  ],
  "guardrails": [
    {
      "id": "G01",
      "title": "Mục đích tối thượng của Parent Care",
      "content": "Parent Care tồn tại để giúp phụ huynh thấu hiểu, tin tưởng và hỗ trợ phù hợp cho con — tuyệt đối không biến thành công cụ kiểm soát hoặc gây áp lực lên học sinh."
    },
    {
      "id": "G02",
      "title": "Information Trust ≠ Relational Trust",
      "content": "Một hệ thống tự động hóa hoàn hảo có thể cung cấp đủ thông tin nhưng vẫn khiến phụ huynh cảm thấy xa lạ nếu thiếu đi sự hiện diện và gắn kết của con người."
    },
    {
      "id": "G03",
      "title": "Weekly Zalo is a Channel, Not a Touchpoint",
      "content": "Không ép buộc Mentor gửi tin nhắn Zalo hàng tuần định kỳ nếu không có quan sát đắt giá. Tối ưu chất lượng giá trị chứ không tối ưu tần suất gửi tin."
    }
  ],
  "jtbd": {
    "functional": [
      {
        "id": "F1",
        "title": "Understand progress",
        "desc": "Hiểu con đang học gì và tiến bộ ra sao qua dữ liệu thực nghiệm."
      },
      {
        "id": "F2",
        "title": "Early risk detection",
        "desc": "Biết sớm khi con gặp vấn đề để cùng phối hợp, không bị bất ngờ quá muộn."
      },
      {
        "id": "F3",
        "title": "Actionable guidance",
        "desc": "Biết phụ huynh nên làm gì cụ thể để hỗ trợ đúng cách tại nhà."
      },
      {
        "id": "F4",
        "title": "Child perspective",
        "desc": "Thấu hiểu con sâu sắc hơn qua góc nhìn sư phạm độc bản của Nemo12."
      },
      {
        "id": "F5",
        "title": "Clear access path",
        "desc": "Biết tìm kiếm hỗ trợ ở đâu, khi nào và như thế nào một cách dễ dàng."
      }
    ],
    "emotional": [
      {
        "id": "E1",
        "title": "Reassurance",
        "desc": "An tâm vì con luôn được theo sát chu đáo và liên tục."
      },
      {
        "id": "E2",
        "title": "Genuinely seen",
        "desc": "Cảm nhận con được thực sự nhìn nhận như một cá nhân độc bản."
      },
      {
        "id": "E3",
        "title": "Included",
        "desc": "Cảm thấy là một phần của hành trình mà không cần can thiệp vi mô."
      },
      {
        "id": "E4",
        "title": "Accompanied",
        "desc": "Có người thấu hiểu và cùng đồng hành khi xuất hiện khó khăn."
      },
      {
        "id": "E5",
        "title": "Worthwhile investment",
        "desc": "Cảm thấy sự đầu tư thời gian và tài chính là hoàn toàn xứng đáng."
      }
    ],
    "social": [
      {
        "id": "S1",
        "title": "Better parent",
        "desc": "Trở thành người cha/mẹ hiểu và đồng hành cùng con tích cực."
      },
      {
        "id": "S2",
        "title": "Beyond grades",
        "desc": "Tự hào chia sẻ về sự trưởng thành của con vượt trên điểm số."
      },
      {
        "id": "S3",
        "title": "Good educational choice",
        "desc": "Tin tưởng gia đình đã lựa chọn đúng môi trường giáo dục phù hợp."
      },
      {
        "id": "S4",
        "title": "Belonging",
        "desc": "Thuộc về cộng đồng phụ huynh có cùng hệ giá trị giáo dục văn minh."
      },
      {
        "id": "S5",
        "title": "Shared moments",
        "desc": "Có những kỷ niệm và cột mốc học tập ý nghĩa cùng con."
      }
    ]
  },
  "dars": [
    {
      "id": "DAR-01",
      "title": "Mid-point Parent Pulse",
      "decision": "Pilot khảo sát siêu nhẹ (~Session 6, ≤3 câu hỏi, ≤3 phút). Không tạo cuộc họp bắt buộc.",
      "rationale": "Dò tìm các khoảng trống kỳ vọng âm thầm (silent expectation gaps) mà data hệ thống và Marlins Day tự nguyện có thể bỏ sót."
    },
    {
      "id": "DAR-02",
      "title": "Post-Trial Decision Support",
      "decision": "Mô hình Hybrid: System chuẩn bị bằng chứng → Human phán đoán độ phù hợp (Fit judgment).",
      "rationale": "Tư vấn dựa trên sự phù hợp thực sự của người học, sẵn sàng từ chối nhận nếu Nemo12 không phù hợp."
    },
    {
      "id": "DAR-03",
      "title": "System → Mentor Intervention Engine",
      "decision": "Kiến trúc 4 bước: Signal → Mentor Review → Judgment → Action. Không gửi tin nhắn tự động cảnh báo phụ huynh.",
      "rationale": "Máy móc phát hiện tín hiệu, con người xác minh bối cảnh để tránh phản ứng thái quá làm tổn hại tâm lý học sinh."
    },
    {
      "id": "DAR-04",
      "title": "High-touch Family Experience",
      "decision": "Kích hoạt dựa trên Khoảnh khắc ý nghĩa (Meaningful Moments), không kích hoạt theo lịch cứng hay mức chi trả.",
      "rationale": "Chỉ gặp trực tiếp khi tương tác con người tạo ra giá trị cảm xúc sâu sắc mà tin nhắn/cuộc gọi không thể làm được."
    },
    {
      "id": "DAR-05",
      "title": "Completion Growth Story",
      "decision": "Khung Narrative 5 phần (Where I Started -> What I Did -> How I Changed -> What We Learned -> What's Next). Cuộc gọi đối thoại là có điều kiện.",
      "rationale": "Biến 12 buổi học thành câu chuyện chuyển biến tư duy trọn vẹn thay vì bảng điểm số vô cảm."
    }
  ],
  "touchpoints": [
    {
      "id": "T1",
      "name": "Pre-Trial Information",
      "category": "System-first",
      "owner": "System",
      "stage": "Consideration / Pre-Trial",
      "jobs": [
        "F1",
        "F5",
        "E1",
        "S3"
      ],
      "trigger": "Phụ huynh hoàn tất đăng ký học thử trên hệ thống",
      "purpose": "Phụ huynh và học sinh chuẩn bị đầy đủ về tâm thế, thiết bị, thời gian và hiểu rõ bản chất 2 buổi học thử mà không cần nhân sự gọi điện giải thích thủ công.",
      "sopTime": "Tự động (Con người can thiệp ≤10 min nếu có ngoại lệ)",
      "sopSteps": [
        {
          "step": 1,
          "title": "Trigger & Gửi",
          "desc": "Tự động gửi Email xác nhận + Zalo ZNS kèm link Portal Hướng dẫn chuẩn bị."
        },
        {
          "step": 2,
          "title": "Cung cấp Mental Model",
          "desc": "Nêu rõ mục tiêu Trial (Khám phá tư duy & trải nghiệm, không áp lực điểm số), hướng dẫn thiết bị và gửi lời mời Marlins Day."
        },
        {
          "step": 3,
          "title": "Nhắc lịch tự động",
          "desc": "Gửi tin nhắn nhắc lịch tự động tại mốc T-24h và T-2h trước giờ học."
        },
        {
          "step": 4,
          "title": "Xử lý ngoại lệ",
          "desc": "Operator chỉ hỗ trợ khi phụ huynh báo kẹt thiết bị hoặc đổi lịch gấp."
        }
      ],
      "doGuidelines": [
        "Nêu rõ Trial là để tìm hiểu phong cách tư duy của con, giảm áp lực bài thi.",
        "Hướng dẫn thiết bị trực quan bằng hình ảnh ngắn gọn.",
        "Giới thiệu Marlins Day như một đặc quyền dành cho phụ huynh vào chiều Chủ Nhật."
      ],
      "dontGuidelines": [
        "Không gửi tài liệu PDF dài dòng hàng chục trang.",
        "Không gọi điện telesale thúc ép hoặc làm phiền phụ huynh trước giờ học."
      ],
      "template": {
        "channel": "Zalo ZNS / SMS tự động",
        "content": "[Nemo12] Chào Anh/Chị {Parent_Name}, Nemo12 đã nhận lịch trải nghiệm 02 buổi học thử của bé {Student_Name}:\n📅 Buổi 1: {Time_1} - {Date_1}\n📅 Buổi 2: {Time_2} - {Date_2}\n📍 Hình thức: {Location_or_Zoom_Link}\n\n💡 Tại Nemo12, 02 buổi Trial là không gian để con tự do khám phá và bộc lộ phong cách tư duy tự nhiên nhất, hoàn toàn không phải bài thi áp lực. \nAnh/Chị có thể xem hướng dẫn chuẩn bị thiết bị và lịch trình chi tiết tại: {Portal_Link}\n\nĐặc biệt, kính mời Anh/Chị tham gia buổi trò chuyện \"Marlins Day\" vào chiều Chủ Nhật tuần này để cùng trao đổi về phương pháp đồng hành cùng con.\nHotline hỗ trợ kỹ thuật: 09xx.xxx.xxx"
      },
      "rubric": [
        {
          "criterion": "Clarity (Độ rõ ràng)",
          "l1": "Phụ huynh không biết ngày giờ/cách vào học, phải gọi hỏi lại.",
          "l2": "Thiếu thông tin quan trọng (thiếu link, thiếu hotline hoặc sai giờ).",
          "l3": "Thông tin cơ bản đầy đủ: thời gian, địa điểm/link, thiết bị cần chuẩn bị.",
          "l4": "Lộ trình trải nghiệm của phụ huynh và học sinh được trực quan hóa rõ ràng.",
          "l5": "Phụ huynh chuẩn bị hoàn hảo, tự tin 100% không phát sinh bất kỳ câu hỏi phụ nào."
        },
        {
          "criterion": "Relevance (Mức độ phù hợp)",
          "l1": "Thông tin thừa thãi, lan man, khó tìm thông tin chính.",
          "l2": "Phải cuộn trang/đọc nhiều đoạn văn dài mới thấy link học.",
          "l3": "Thông tin cần thiết hiển thị trọng tâm, dễ nắm bắt trong 30 giây.",
          "l4": "Phân cấp thông tin ưu tiên theo đúng mốc thời gian (trước 24h, trước 2h).",
          "l5": "Cá nhân hóa theo độ tuổi học sinh và thiết bị đã đăng ký (iPad/Laptop)."
        },
        {
          "criterion": "Expectation Setting (Thiết lập kỳ vọng)",
          "l1": "Khiến phụ huynh nghĩ đây là buổi thi tuyển áp lực hoặc phỏng vấn gắt gao.",
          "l2": "Kỳ vọng mơ hồ, không rõ học thử để làm gì.",
          "l3": "Nêu đúng bản chất: Khám phá tư duy & trải nghiệm môi trường Nemo12.",
          "l4": "Phụ huynh hiểu rõ con sẽ được quan sát điều gì và mình nhận được gì sau Trial.",
          "l5": "Phụ huynh bước vào Trial với tâm thế cởi mở, đúng mental model giáo dục của Nemo12."
        }
      ]
    },
    {
      "id": "T2",
      "name": "Trial Learning Evidence",
      "category": "System-first",
      "owner": "System-first",
      "stage": "Trial",
      "jobs": [
        "F1",
        "F4",
        "E2",
        "E5"
      ],
      "trigger": "Kết thúc buổi Trial thứ 2 (hoặc cả 2 buổi hoàn tất)",
      "purpose": "Cung cấp báo cáo bằng chứng học tập khách quan, dữ liệu hóa quá trình thể hiện của học sinh sau 2 buổi Trial, làm cơ sở khoa học để phụ huynh nhìn nhận năng lực và ra quyết định.",
      "sopTime": "System tự động (Mentor gắn tag ≤5 min)",
      "sopSteps": [
        {
          "step": 1,
          "title": "Ghi nhận log & Dory Quick Tags",
          "desc": "Mentor gắn 2-3 tags quan sát chuẩn Dory (fact, pain, need) trên Dolphin Workspace."
        },
        {
          "step": 2,
          "title": "Sinh báo cáo tự động",
          "desc": "Hệ thống tổng hợp dữ liệu bài tập + tags thành Báo cáo Bằng chứng Trial."
        },
        {
          "step": 3,
          "title": "Phát hành báo cáo",
          "desc": "Gửi link báo cáo riêng tư qua Zalo/Email cho phụ huynh trong vòng 2h sau buổi học."
        },
        {
          "step": 4,
          "title": "Chuyển tiếp luồng T4",
          "desc": "Đồng bộ dữ liệu sang màn hình chuẩn bị tư vấn T4 và cập nhật Scorecard gia đình."
        }
      ],
      "doGuidelines": [
        "Đưa ra dữ liệu thực tế (số lần thử lại, thời gian giải quyết thử thách).",
        "Làm nổi bật xu hướng tư duy và điểm mạnh tự nhiên của con.",
        "Giữ ngôn ngữ tích cực, khách quan, mang tính xây dựng."
      ],
      "dontGuidelines": [
        "Không dán nhãn tiêu cực (tiếp thu chậm, kém tập trung).",
        "Không dùng những lời khen sáo rỗng vô thưởng vô phạt."
      ],
      "template": {
        "channel": "Web Portal / Báo cáo Trial",
        "content": "HỌC VIÊN: Nguyễn Minh An | LỚP TRẢI NGHIỆM TRIAL T26\n---------------------------------------------------------------------\n1. DỮ LIỆU HOẠT ĐỘNG THỰC TẾ:\n- Hoàn thành 5/6 thử thách tư duy thuật toán mức độ Starter.\n- Chỉ số kiên trì: Thử lại trung bình 3.2 lần/thử thách mà không bỏ cuộc.\n- Tốc độ xử lý: Dành 65% thời gian để phân tích quy luật trước khi kéo thả lệnh.\n\n2. ĐẶC ĐIỂM QUAN SÁT TỪ MENTOR:\n- Minh An có khả năng phát hiện lỗi sai (debugging) rất nhạy bén khi được gợi mở bằng câu hỏi.\n- Trong hoạt động nhóm, bé thích độc lập suy nghĩ trước khi chia sẻ giải pháp với bạn.\n\n3. ĐIỂM CẦN ĐỒNG HÀNH TIẾP THEO:\n- Rèn luyện sự tự tin khi trình bày giải pháp bằng lời trước nhóm đông."
      },
      "rubric": [
        {
          "criterion": "Evidence (Tính bằng chứng)",
          "l1": "Toàn nhận xét chung chung, không có dữ liệu chứng minh.",
          "l2": "Bằng chứng mờ nhạt, chỉ liệt kê số buổi tham gia.",
          "l3": "Có bằng chứng cụ thể: nhiệm vụ đã làm, số lần thử lại, sản phẩm hoàn thành.",
          "l4": "Bằng chứng chỉ ra được xu hướng/mô hình tư duy rõ nét của học sinh.",
          "l5": "Dữ liệu bằng chứng trực tiếp làm sáng tỏ năng lực cốt lõi và tiềm năng phát triển."
        },
        {
          "criterion": "Child-specificity (Tính cá nhân hóa)",
          "l1": "Báo cáo mẫu rập khuôn, chỉ thay mỗi tên học sinh.",
          "l2": "Có nhắc đến tên bài tập nhưng nhận xét chung cho cả lớp.",
          "l3": "Phản ánh đúng hoạt động cụ thể và sản phẩm thực tế của chính học sinh đó.",
          "l4": "Khắc họa rõ nét nét tính cách và đặc điểm học tập riêng biệt của học sinh.",
          "l5": "Phụ huynh đọc vào nhận diện ngay chính xác con mình với sự thấu hiểu sâu sắc."
        },
        {
          "criterion": "Decision Value (Giá trị quyết định)",
          "l1": "Không giúp phụ huynh hiểu gì thêm về năng lực của con.",
          "l2": "Báo cáo mang tính mô tả đơn thuần, không biết nên làm gì tiếp.",
          "l3": "Giúp phụ huynh hiểu rõ con đạt được gì và gặp thử thách ở đâu.",
          "l4": "Giúp phụ huynh thấy rõ điểm mạnh vượt trội và khoảng trống cần rèn luyện.",
          "l5": "Phụ huynh hiểu rõ việc học tiếp sẽ giải quyết điểm nghẽn và phát huy điểm mạnh ra sao."
        }
      ]
    },
    {
      "id": "T3",
      "name": "Marlins Day",
      "category": "Parent → Human",
      "owner": "Human (Anh Đắc / Marlins Care)",
      "stage": "Persistent Support (Toàn bộ hành trình)",
      "jobs": [
        "F4",
        "E4",
        "S1",
        "S4"
      ],
      "trigger": "Định kỳ chiều Chủ Nhật hàng tuần; Thư mời Trial; Phụ huynh tự đăng ký hoặc Mentor đề xuất",
      "purpose": "Tháo gỡ hiểu lầm, giải tỏa lo lắng, và trang bị mô hình tư duy (mental models) đúng đắn cho phụ huynh trong việc đồng hành cùng con.",
      "sopTime": "60 - 90 phút (Thao tác chuẩn bị ≤15 min)",
      "sopSteps": [
        {
          "step": 1,
          "title": "Tiếp nhận & Phân nhóm băn khoăn",
          "desc": "Tra cứu thẻ gia đình trên Dolphin và phân loại mối bận tâm trước 24h."
        },
        {
          "step": 2,
          "title": "Tổ chức đối thoại & Reframing",
          "desc": "Mở đầu bằng bối cảnh thực tế -> Lắng nghe -> Tìm giả định ngầm -> Tái định hình góc nhìn (Reframing)."
        },
        {
          "step": 3,
          "title": "Đúc kết Micro-action",
          "desc": "Hướng dẫn mỗi phụ huynh chọn đúng 01 hành động nhỏ cụ thể để áp dụng tại nhà trong tuần."
        },
        {
          "step": 4,
          "title": "Lưu trữ Dory Insight & Chuyển giao",
          "desc": "Lưu ghi chú vào thẻ Bố/Mẹ trên Dolphin gắn tag belief, need, pain, nâng chỉ số Understanding Scorecard."
        }
      ],
      "doGuidelines": [
        "Đặt câu hỏi truy vấn nguyên nhân gốc rễ phía sau nỗi lo của phụ huynh.",
        "Chia sẻ câu chuyện thật, chân thành, bình đẳng giữa những người làm cha mẹ.",
        "Tôn trọng sự khác biệt trong hoàn cảnh mỗi gia đình."
      ],
      "dontGuidelines": [
        "Tuyệt đối không biến thành hội thảo bán hàng (Sales webinar).",
        "Không phán xét hay đổ lỗi cho cách dạy con của phụ huynh.",
        "Không đưa ra lời khuyên giáo điều, sáo rỗng thiếu tính thực thi."
      ],
      "template": {
        "channel": "Offline Hub (14h00 - 17h00 Chủ Nhật hàng tuần)",
        "content": "AGENDA MARLINS DAY (14h00 - 17h00 CHỦ NHẬT HÀNG TUẦN):\n1. Giới thiệu bản thân & Kết nối phụ huynh (15 min).\n2. Fishbowl Round 1 - Lắng nghe & Bóc tách câu chuyện thực tế (30 min).\n3. 4F Reflection Round 1 - Fact, Feeling, Finding, Future (15 min).\n4. Fishbowl Round 2 - Đào sâu & Tái định hình góc nhìn Reframing (30 min).\n5. 4F Reflection Round 2 (15 min).\n6. Demo trực tiếp hệ thống Nemo12 & Bằng chứng dữ liệu (30 min).\n7. 4F Reflection tổng kết & Xác lập 01 Micro-action tại nhà (30 min)."
      },
      "rubric": [
        {
          "criterion": "Understanding Parent (Thấu cảm phụ huynh)",
          "l1": "Trả lời bộp chộp, ngắt lời hoặc áp đặt câu trả lời ngay lập tức.",
          "l2": "Chỉ hiểu câu hỏi bề mặt trên câu chữ của phụ huynh.",
          "l3": "Hiểu đúng nỗi lo âu và băn khoăn thực tế của gia đình.",
          "l4": "Bóc tách và chỉ ra được giả định ngầm sai lệch phía sau lo âu đó.",
          "l5": "Phụ huynh tự giật mình nhận ra gốc rễ vấn đề nằm ở mô hình tương tác gia đình."
        },
        {
          "criterion": "Reframing (Tái định hình tư duy)",
          "l1": "Đưa ra lời khuyên chung chung kiểu 'về bảo ban cháu'.",
          "l2": "Giải thích lý thuyết giáo dục một chiều.",
          "l3": "Đưa ra góc nhìn mới giúp phụ huynh nhìn nhận hành vi của con khác đi.",
          "l4": "Thay đổi hoàn toàn cách phụ huynh hiểu về vấn đề của con (chuyển lo âu thành cơ hội).",
          "l5": "Trang bị cho phụ huynh mô hình tư duy bền vững có thể tự áp dụng cho mọi tình huống sau này."
        },
        {
          "criterion": "Actionability (Tính hành động)",
          "l1": "Không có giải pháp tiếp theo, phụ huynh thêm hoang mang.",
          "l2": "Đưa ra lời khuyên chung chung khó áp dụng.",
          "l3": "Có 1-2 hành động cụ thể, khả thi để phụ huynh làm thử ở nhà.",
          "l4": "Hành động được thiết kế riêng vừa vặn với bối cảnh từng gia đình.",
          "l5": "Phụ huynh tự tin thử nghiệm hành động, tự quan sát và tự điều chỉnh cách phản ứng với con."
        }
      ]
    },
    {
      "id": "T4",
      "name": "Post-Trial Decision Support",
      "category": "Journey / Relationship",
      "owner": "Hybrid",
      "stage": "Decision",
      "jobs": [
        "F3",
        "E5",
        "S3"
      ],
      "trigger": "Sau khi gửi báo cáo T2 và phụ huynh tham gia Marlins Day T3",
      "purpose": "Đồng hành cùng phụ huynh đưa ra quyết định học tập sáng suốt dựa trên sự phù hợp thực tế của học sinh (Fit Judgment), sẵn sàng từ chối nhận nếu chưa phù hợp.",
      "sopTime": "10 - 15 phút tư vấn",
      "sopSteps": [
        {
          "step": 1,
          "title": "Xem xét Dữ liệu & Đánh giá Fit",
          "desc": "Mentor đọc báo cáo T2 và thẻ gia đình trên Dolphin để đánh giá mức độ phù hợp của con với phương pháp Nemo12."
        },
        {
          "step": 2,
          "title": "Trao đổi tư vấn 1-1",
          "desc": "Nêu bật 1 điểm tiến bộ cụ thể (dùng tên gọi ở nhà nickname), giải thích sự phù hợp, nêu rõ cam kết 2 phía (hoặc thẳng thắn từ chối nếu không fit)."
        },
        {
          "step": 3,
          "title": "Gửi tóm tắt & Nhận care",
          "desc": "Gửi tin nhắn tóm tắt lộ trình, thời gian học và bấm Follow/Look after gia đình trên Dolphin."
        }
      ],
      "doGuidelines": [
        "Dựa trên bằng chứng thực tế từ 2 buổi Trial để nói chuyện.",
        "Nói rõ những khó khăn mà học sinh có thể gặp phải trong khóa chính.",
        "Sẵn sàng từ chối nếu học sinh chưa sẵn sàng hoặc gia đình chỉ tìm kiếm lò luyện thi áp lực."
      ],
      "dontGuidelines": [
        "Không dùng thủ thuật chèo kéo bán hàng hoặc giảm giá gấp gáp.",
        "Không hứa hẹn quá mức kết quả thần kỳ (Over-promising)."
      ],
      "template": {
        "channel": "Zalo / Điện thoại tư vấn",
        "content": "Dạ chào Anh/Chị {Parent_Name}, qua 2 buổi Trial vừa rồi, Nemo12 nhận thấy bé {Student_Name} có tư duy trực quan rất tốt và đặc biệt kiên trì khi gỡ lỗi. \n\nKhóa học chính Nemo Core 12 buổi sẽ tập trung sâu vào việc rèn luyện tư duy thuật toán tự chủ cho con. Tuy nhiên, chương trình đòi hỏi con cần dành khoảng 45 phút tự thực hành mỗi tuần tại nhà trong không gian yên tĩnh.\n\nNếu gia đình thấy mục tiêu này phù hợp với định hướng rèn luyện tính tự lập cho con, Nemo12 rất sẵn sàng đồng hành cùng bé trong khóa tới ạ!"
      },
      "rubric": [
        {
          "criterion": "Evidence-based (Dựa trên bằng chứng)",
          "l1": "Toàn lời hứa hẹn bán hàng suông, không nhắc gì đến buổi học thử.",
          "l2": "Sử dụng bằng chứng chọn lọc phiến diện để ép mua khóa học.",
          "l3": "Sử dụng đầy đủ dữ liệu thực tế từ 2 buổi Trial để phân tích.",
          "l4": "Phân tích cân bằng cả điểm mạnh và thử thách con cần vượt qua.",
          "l5": "Đưa ra khuyến nghị lộ trình hoàn toàn dựa trên dữ liệu bằng chứng xác thực."
        },
        {
          "criterion": "Fit Judgment (Phán đoán độ phù hợp)",
          "l1": "Mặc định học sinh nào cũng phù hợp để chốt sale.",
          "l2": "Đưa ra nhận xét phù hợp chung chung, thiếu căn cứ.",
          "l3": "Nêu rõ điểm phù hợp giữa nhu cầu của con và mô hình Nemo12.",
          "l4": "Phân tích rõ cả những rủi ro/khó khăn có thể gặp phải khi theo học.",
          "l5": "Dũng cảm khuyên không nên tiếp tục nếu mô hình Nemo12 không phù hợp với mục tiêu của bé."
        },
        {
          "criterion": "Expectation Setting (Thiết lập cam kết)",
          "l1": "Hứa hẹn kết quả thần kỳ phi thực tế.",
          "l2": "Thiết lập kỳ vọng mơ hồ, không rõ trách nhiệm các bên.",
          "l3": "Kỳ vọng hợp lý, phụ huynh hiểu rõ con sẽ học gì và đạt được gì.",
          "l4": "Nêu rõ quyền lợi, trách nhiệm và sự phối hợp cần thiết từ phía gia đình.",
          "l5": "Phụ huynh bước vào khóa học với sự hiểu biết trọn vẹn và cam kết đồng hành bền vững."
        }
      ]
    },
    {
      "id": "T5",
      "name": "Learning Progress Update",
      "category": "System-first",
      "owner": "System",
      "stage": "Core Learning (Weekly S1-S12)",
      "jobs": [
        "F1",
        "E1",
        "E3"
      ],
      "trigger": "Định kỳ hàng tuần (Thứ 2 hàng tuần sau khi kết thúc các buổi học cuối tuần)",
      "purpose": "Cung cấp báo cáo định kỳ tự động hàng tuần trả lời câu hỏi cốt lõi: 'Con tôi tuần này học đến đâu, tiến bộ ra sao và tuần tới cần làm gì?' trong 2 phút.",
      "sopTime": "Tự động 100% (Mentor không viết báo cáo tuần lặp lại)",
      "sopSteps": [
        {
          "step": 1,
          "title": "Quét & Tổng hợp log",
          "desc": "Hệ thống tự động thu thập số buổi tham gia, bài tập nộp, dự án hoàn thành lúc 06:00 Thứ 2."
        },
        {
          "step": 2,
          "title": "Sinh báo cáo trực quan",
          "desc": "Tự động tạo thẻ tóm tắt: (1) Cột mốc hoàn thành, (2) Điểm nổi bật, (3) Nhiệm vụ tuần tới."
        },
        {
          "step": 3,
          "title": "Phát hành thông báo",
          "desc": "Gửi Email Check-in + Zalo ZNS tóm tắt lúc 08:00 Thứ 2."
        },
        {
          "step": 4,
          "title": "Kích hoạt ngoại lệ T7",
          "desc": "Nếu vắng 2 buổi liên tiếp hoặc không nộp bài 2 tuần, tự động đẩy cờ T7 sang cho Mentor."
        }
      ],
      "doGuidelines": [
        "Trực quan hóa tiến độ bằng thanh tiến trình và thẻ ngắn gọn.",
        "Gợi ý 1 câu hỏi gợi mở để phụ huynh trò chuyện vui vẻ cùng con.",
        "Giữ ngôn ngữ đơn giản, loại bỏ thuật ngữ kỹ thuật phức tạp."
      ],
      "dontGuidelines": [
        "Không bắt Mentor phải viết nhận xét thủ công hàng tuần cho từng học sinh.",
        "Không gửi báo cáo dạng bảng điểm khô khan thiếu bối cảnh."
      ],
      "template": {
        "channel": "Email / Zalo ZNS định kỳ Thứ 2",
        "content": "📊 BÁO CÁO TIẾN ĐỘ TUẦN — HỌC VIÊN: BẢO NAM (LỚP NEMO CORE S04)\n-------------------------------------------------------------\n1. TIẾN ĐỘ HIỆN TẠI:\n✅ Hoàn thành: Buổi 4/12 (Chủ đề: Cấu trúc điều kiện & Rẽ nhánh thuật toán)\n✅ Dự án mini: \"Trò chơi giải cứu san hô\" — Đạt 100% yêu cầu tính năng.\n⏱️ Thời gian thực hành tự chủ: 45 phút trong tuần.\n\n2. TRỌNG TÂM TUẦN TỚI (BUỔI 5):\n🎯 Khám phá khái niệm \"Vòng lặp hữu hạn\" và ứng dụng vẽ hoa văn phức tạp.\n\n💡 LỜI KHUYÊN CHO PHỤ HUYNH:\nBa mẹ có thể hỏi bé: \"Con đã dùng câu lệnh 'Nếu... thì...' để giúp chú cá Nemo tránh chướng ngại vật như thế nào?\" để khuyến khích con hào hứng kể lại bài học."
      },
      "rubric": [
        {
          "criterion": "Accuracy (Tính chính xác & Bối cảnh)",
          "l1": "Sai lệch thông tin bài học, nhầm lẫn học sinh.",
          "l2": "Đúng dữ liệu thô nhưng rời rạc, không có ý nghĩa sư phạm.",
          "l3": "Dữ liệu chính xác, thể hiện rõ con đang ở đâu trong lộ trình.",
          "l4": "Dữ liệu chính xác và được đặt trong bối cảnh mục tiêu từng chặng.",
          "l5": "Khắc họa được xu hướng tiến bộ dài hạn qua nhiều tuần liên tiếp."
        },
        {
          "criterion": "Comprehensibility (Độ dễ hiểu)",
          "l1": "Báo cáo đầy thuật ngữ chuyên môn khó hiểu, trình bày rối mắt.",
          "l2": "Quá nhiều chữ, khó tìm được điểm chính.",
          "l3": "Dễ đọc, trực quan, phụ huynh nắm bắt được ý chính trong < 2 phút.",
          "l4": "Trực quan hóa bằng thẻ tóm tắt, nổi bật ngay thông điệp quan trọng nhất.",
          "l5": "Phụ huynh nắm bắt hoàn hảo chỉ sau 30 giây đọc lướt."
        },
        {
          "criterion": "Actionability (Tính định hướng hành động)",
          "l1": "Báo cáo liệt kê số liệu vô cảm, không có hướng dẫn gì.",
          "l2": "Lời khuyên chung chung kiểu 'nhắc cháu làm bài'.",
          "l3": "Phụ huynh biết rõ tuần tới con học gì và mình có cần làm gì không.",
          "l4": "Gợi ý 1 câu hỏi tương tác thú vị giúp phụ huynh trò chuyện vui vẻ cùng con.",
          "l5": "Phụ huynh chỉ cần hành động khi thực sự cần thiết, tối ưu thời gian cho gia đình."
        }
      ]
    },
    {
      "id": "T6",
      "name": "Mentor Personal Insight",
      "category": "Human-value",
      "owner": "Mentor",
      "stage": "Core Learning (Khi có quan sát đắt giá)",
      "jobs": [
        "F4",
        "E2",
        "E4"
      ],
      "trigger": "Mentor bắt trọn một khoảnh khắc/hành vi có ý nghĩa định tính trong lớp (không gửi theo lịch cố định)",
      "purpose": "Chia sẻ những quan sát định tính đắt giá và tinh tế của Mentor về học sinh mà máy móc không thể thấy được, giúp phụ huynh thấu hiểu con sâu sắc hơn.",
      "sopTime": "≤10 phút (Pre-send test + Soạn tin + Lưu Dolphin Note)",
      "sopSteps": [
        {
          "step": 1,
          "title": "Ghi nhận khoảnh khắc",
          "desc": "Ghi chép nhanh hành động/lời nói hoặc phản ứng tâm lý đáng chú ý của học sinh trong lớp."
        },
        {
          "step": 2,
          "title": "Kiểm tra Pre-send Test",
          "desc": "Tự hỏi: Nếu tin nhắn này không gửi đi, phụ huynh có bị mất một insight giá trị về con không? (Nếu KHÔNG -> Dừng)."
        },
        {
          "step": 3,
          "title": "Soạn tin 3 phần",
          "desc": "Soạn tin: (1) Sự việc cụ thể, (2) Góc nhìn sư phạm Mentor nhìn thấy, (3) Gợi ý nhỏ để phụ huynh quan sát tại nhà (dùng nickname)."
        },
        {
          "step": 4,
          "title": "Gửi Zalo & Lưu Dolphin Note",
          "desc": "Gửi qua Zalo 1-1 cho phụ huynh; sao chép vào Family Notes trên Dolphin gắn tag fact và need, làm mới chỉ số Momentum Scorecard."
        }
      ],
      "doGuidelines": [
        "Tập trung vào chi tiết quan sát độc bản và cảm xúc của học sinh.",
        "Chỉ ra ý nghĩa sư phạm đằng sau hành vi của con.",
        "Gợi ý cách phụ huynh khích lệ con tại nhà."
      ],
      "dontGuidelines": [
        "Tuyệt đối không gửi lời khen chung chung sáo rỗng.",
        "Không dùng tin nhắn này để báo điểm hay nhắc lịch học (việc của System)."
      ],
      "template": {
        "channel": "Zalo 1-1 cá nhân hóa",
        "content": "Dạ chào Chị Hà, hôm nay trong buổi học làm game Logic, em có một quan sát nhỏ rất thú vị về Minh Quân muốn chia sẻ cùng Chị:\n\nLúc gặp lỗi nhân vật không di chuyển được, thay vì bấm nút xin trợ giúp ngay như các buổi trước, Quân đã tự tắt mic và ngồi thử lại từng dòng lệnh tới 3 lần. Khi tìm ra lỗi do đặt sai vị trí câu lệnh rẽ nhánh, bạn ấy cười rất tươi và tự hào giải thích lại cách sửa cho bạn ngồi cạnh.\n\nEm thấy Quân đang hình thành tính kiên nhẫn và tự tin đối diện với lỗi sai rất tốt mà không còn sợ bị đánh giá. Về nhà nếu bé có khoe game, Chị có thể thử hỏi bé: \"Lúc bị lỗi con đã tự tìm cách sửa như thế nào?\" để bé có cơ hội tự hào kể lại trải nghiệm này nhé ạ!"
      },
      "rubric": [
        {
          "criterion": "Specificity (Tính cụ thể)",
          "l1": "Lời khen sáo rỗng (VD: 'Hôm nay con học ngoan lắm ạ').",
          "l2": "Nhắc đến hành vi mơ hồ, thiếu chi tiết chứng minh.",
          "l3": "Có dẫn chứng quan sát cụ thể: hành động, lời nói hoặc tình huống thật trong lớp.",
          "l4": "Quan sát cụ thể đi kèm bối cảnh lớp học và phản ứng tâm lý của học sinh.",
          "l5": "Tái hiện sống động khoảnh khắc mà phụ huynh đọc vào nhận ra ngay tính cách con."
        },
        {
          "criterion": "Insight (Giá trị chiều sâu)",
          "l1": "Chỉ tường thuật lại sự việc như camera ghi hình.",
          "l2": "Đưa ra nhận xét chung về tính cách con.",
          "l3": "Chỉ ra được ý nghĩa hoặc xu hướng thay đổi trong cách học của con.",
          "l4": "Giúp phụ huynh nhìn thấy một điểm mạnh hoặc khía cạnh mới chưa từng biết về con.",
          "l5": "Thay đổi tích cực cách phụ huynh nhìn nhận và đồng hành cùng con tại nhà."
        },
        {
          "criterion": "Human Value (Giá trị con người)",
          "l1": "Máy móc AI cũng có thể tự sinh được nội dung này.",
          "l2": "Chỉ diễn đạt lại số liệu từ báo cáo tiến độ T5.",
          "l3": "Mang lại giá trị định tính rõ ràng từ sự tận tâm quan sát của Mentor.",
          "l4": "Đòi hỏi năng lực sư phạm và sự thấu cảm con người thực thụ.",
          "l5": "Tạo dựng niềm tin sâu sắc, phụ huynh cảm thấy vô cùng may mắn khi con có Mentor này."
        }
      ]
    },
    {
      "id": "T7",
      "name": "Learning Concern / Risk",
      "category": "System → Human",
      "owner": "System detects → Mentor judges",
      "stage": "Core Learning (Khi có tín hiệu rủi ro)",
      "jobs": [
        "F2",
        "E4"
      ],
      "trigger": "Hệ thống phát hiện vắng 2 buổi, không nộp bài 2 tuần, tương tác <20% mức trung bình",
      "purpose": "Phát hiện sớm các rủi ro học tập và can thiệp kịp thời theo nguyên tắc: Tín hiệu hệ thống -> Mentor phán đoán bối cảnh -> Can thiệp chuẩn mực, không phản ứng thái quá.",
      "sopTime": "≤15 phút phán đoán và can thiệp",
      "sopSteps": [
        {
          "step": 1,
          "title": "Bắt tín hiệu (Signal)",
          "desc": "Thuật toán gắn cờ Risk đẩy về Dolphin Dashboard (Cờ Vàng/Cờ Đỏ)."
        },
        {
          "step": 2,
          "title": "Mentor Review",
          "desc": "Mentor đọc dòng thời gian Dolphin của gia đình; kiểm tra: ốm, thi cử ở trường hay mất động lực? Trao đổi 1-1 với học sinh trước."
        },
        {
          "step": 3,
          "title": "Phán đoán & Chọn hành động",
          "desc": "Lựa chọn: (1) Quan sát thêm, (2) Điều chỉnh sư phạm trong lớp, (3) Trao đổi với phụ huynh, (4) Giới thiệu Marlins Day."
        },
        {
          "step": 4,
          "title": "Thực thi & Lưu Dory Note",
          "desc": "Nếu liên hệ phụ huynh: Trao đổi theo tinh thần đồng đội và lưu ngay ghi chú Dolphin gắn tag pain/need kèm mức độ chắc fact/opinion."
        }
      ],
      "doGuidelines": [
        "Tập trung vào nguyên nhân gốc rễ và giải pháp hỗ trợ.",
        "Bảo vệ quyền tự chủ và tâm lý thoải mái của học sinh.",
        "Phối hợp với phụ huynh như những người đồng đội."
      ],
      "dontGuidelines": [
        "Không biến tin báo thành biên bản khiển trách học sinh.",
        "Tuyệt đối không tự động gửi tin cảnh báo thô sang phụ huynh khi Mentor chưa xác minh."
      ],
      "template": {
        "channel": "Zalo / Điện thoại hỗ trợ",
        "content": "Dạ chào Anh Tuấn, em là Hoàng - Mentor phụ trách lớp của bé Bảo Long. \nTuần vừa rồi em thấy Long có gặp chút bỡ ngỡ ở phần bài tập cấu trúc Vòng lặp nâng cao nên chưa hoàn thành xong dự án nhỏ. \n\nEm có quan sát thấy ở lớp Long nắm ý tưởng rất nhanh nhưng đang hơi ngại hỏi khi gặp chỗ kẹt lệnh. Em đã lên kế hoạch dành riêng 15 phút trước buổi học tới để ngồi cùng Long gỡ rối phần này. \n\nỞ nhà Anh có thể động viên nhẹ nhàng để Long yên tâm là việc gặp lỗi sai trong lập trình là hoàn toàn bình thường và rất thú vị nhé ạ!"
      },
      "rubric": [
        {
          "criterion": "Detection (Tính phát hiện)",
          "l1": "Bỏ sót rủi ro, để học sinh bỏ học hoặc chán nản mà không biết.",
          "l2": "Phát hiện quá muộn khi vấn đề đã trở nên nghiêm trọng.",
          "l3": "Phát hiện rủi ro kịp thời ngay khi có dấu hiệu bất thường.",
          "l4": "Nhận diện được quy luật và xu hướng suy giảm sớm trước khi thành rủi ro lớn.",
          "l5": "Phát hiện đón đầu các rào cản tâm lý tiềm ẩn trước khi ảnh hưởng đến kết quả học."
        },
        {
          "criterion": "Judgment (Chất lượng phán đoán)",
          "l1": "Đồng nhất tín hiệu hệ thống là lỗi của học sinh, phản ứng vội vã.",
          "l2": "Đánh giá qua loa, thiếu tìm hiểu bối cảnh thực tế.",
          "l3": "Mentor xác minh bối cảnh thực tế trước khi đưa ra kết luận.",
          "l4": "Đối chiếu đa nguồn dữ liệu (log hệ thống, quan sát lớp, tâm lý).",
          "l5": "Tách biệt chuẩn xác giữa tín hiệu nhiễu, nguyên nhân bề mặt và nguyên nhân gốc rễ."
        },
        {
          "criterion": "Intervention (Hiệu quả can thiệp)",
          "l1": "Phản ứng thái quá gây hoảng loạn hoặc thờ ơ buông xuôi.",
          "l2": "Can thiệp bằng tin nhắn cảnh báo mẫu chung chung.",
          "l3": "Thực hiện can thiệp phù hợp, đúng trọng tâm vấn đề.",
          "l4": "Áp dụng giải pháp ít xâm lấn nhất nhưng mang lại hiệu quả cao nhất.",
          "l5": "Giải quyết triệt để khó khăn, củng cố sự tự tin và bảo vệ quyền tự chủ của học sinh."
        }
      ]
    },
    {
      "id": "T8",
      "name": "Mid-point Parent Pulse (Pilot)",
      "category": "Experimental",
      "owner": "System → Human when needed",
      "stage": "Mid-point (~Session 6)",
      "jobs": [
        "F2",
        "E3"
      ],
      "trigger": "Sau khi kết thúc Buổi học thứ 6",
      "purpose": "Dò tìm các khoảng trống kỳ vọng âm thầm (Silent Expectation Gaps) bằng form khảo sát siêu nhẹ (≤3 câu hỏi, ≤3 phút) mà không tạo cuộc họp bắt buộc.",
      "sopTime": "Phụ huynh điền ≤3 min; Xử lý ticket vàng/đỏ ≤15 min",
      "sopSteps": [
        {
          "step": 1,
          "title": "Gửi khảo sát tự động",
          "desc": "Hệ thống tự động gửi form 3 câu hỏi qua Zalo sau Session 6."
        },
        {
          "step": 2,
          "title": "Tự động phân luồng",
          "desc": "Phân loại: Xanh (Hài lòng -> Cảm ơn), Vàng (Thắc mắc nhỏ -> Mentor phản hồi), Đỏ (Ngộ nhận lớn -> Chuyển Marlins Host)."
        },
        {
          "step": 3,
          "title": "Xử lý & Cập nhật Dory",
          "desc": "Liên hệ giải tỏa khoảng trống kỳ vọng; cập nhật băn khoăn vào thẻ Bố/Mẹ trên Dolphin gắn tag belief và need."
        }
      ],
      "doGuidelines": [
        "Giữ khảo sát cực ngắn (≤3 câu hỏi mở gợi cảm xúc).",
        "Tập trung vào khoảng cách giữa kỳ vọng ban đầu và thực tế.",
        "Chỉ can thiệp sâu đối với những phản hồi có vấn đề thực sự."
      ],
      "dontGuidelines": [
        "Không bắt phụ huynh tham gia họp bắt buộc.",
        "Không dùng các câu hỏi khảo sát chấm điểm thang 1-10 sáo rỗng."
      ],
      "template": {
        "channel": "Web Form siêu nhẹ qua Zalo",
        "content": "🌿 KHẢO SÁT NHANH GIỮA CHẶNG ĐƯỜNG — NEMO12\nAnh/Chị dành 2 phút chia sẻ cảm nhận để Nemo12 hỗ trợ bé tốt hơn nhé:\n1. Từ đầu khóa đến nay, chuyển biến rõ nhất Anh/Chị thấy ở con là gì?\n2. Có điều gì đang khác so với kỳ vọng ban đầu của gia đình không?\n3. Có điều gì Anh/Chị muốn Nemo12 đồng hành thêm cùng con trong 6 buổi tới?"
      },
      "rubric": [
        {
          "criterion": "Signal Quality (Chất lượng tín hiệu)",
          "l1": "Chỉ hỏi điểm số hài lòng CSAT chung chung vô nghĩa.",
          "l2": "Thu thập ý kiến cảm tính, không tìm ra được khoảng trống kỳ vọng.",
          "l3": "Dò tìm chính xác các băn khoăn và khoảng cách kỳ vọng của phụ huynh.",
          "l4": "Khơi gợi phụ huynh chia sẻ được cả những suy nghĩ ngầm chưa nói.",
          "l5": "Phát hiện ra những góc khuất quan trọng chưa từng được hệ thống ghi nhận."
        },
        {
          "criterion": "Effort (Trải nghiệm & Nỗ lực)",
          "l1": "Bắt phụ huynh tham gia cuộc họp bắt buộc dài dòng.",
          "l2": "Bắt điền biểu mẫu khảo sát quá dài nhiều trang.",
          "l3": "Phụ huynh hoàn thành khảo sát siêu nhẹ trong ≤ 3 phút.",
          "l4": "Trải nghiệm mượt mà trên di động, câu hỏi gợi mở tự nhiên.",
          "l5": "Hoàn thành gần như không tốn sức (frictionless) nhưng mang lại giá trị cao."
        },
        {
          "criterion": "Routing (Phân luồng & Xử lý)",
          "l1": "Thu thập xong để đó, không ai đọc hay phản hồi.",
          "l2": "Nhân sự phải đọc thủ công toàn bộ và phản hồi rập khuôn.",
          "l3": "Phân luồng tự động chuẩn xác: Chỉ tín hiệu có vấn đề mới chuyển tiếp can thiệp.",
          "l4": "Tín hiệu vàng/đỏ được giải quyết triệt để trong vòng 24 giờ.",
          "l5": "Đúng vấn đề được kết nối đến đúng người xử lý tốt nhất (Mentor / Marlins Host)."
        }
      ]
    },
    {
      "id": "T9",
      "name": "Parent-Initiated Support",
      "category": "Parent → Human",
      "owner": "System routing → Human",
      "stage": "Continuous Support (Khi phụ huynh liên hệ)",
      "jobs": [
        "F5",
        "E4"
      ],
      "trigger": "Phụ huynh chủ động nhắn tin/gọi điện hỏi qua Zalo OA, Hotline, hoặc Email",
      "purpose": "Phụ huynh luôn nhận được sự tiếp nhận tức thì, phân luồng thông minh và giải quyết thấu đáo mà không cần hiểu cơ cấu tổ chức nội bộ của Nemo12.",
      "sopTime": "Xác nhận ≤1 min; Giải quyết dứt điểm ≤2h",
      "sopSteps": [
        {
          "step": 1,
          "title": "Tiếp nhận & Xác nhận",
          "desc": "Hệ thống tự động gửi thông điệp xác nhận đã tiếp nhận kèm khung giờ dự kiến phản hồi."
        },
        {
          "step": 2,
          "title": "Phân loại thông minh (Triage)",
          "desc": "Tự động phân luồng: Kỹ thuật/Hậu cần -> CSKH; Tiến độ/Lớp học -> Dolphin Mentor; Quan điểm giáo dục -> Marlins Host."
        },
        {
          "step": 3,
          "title": "Giải quyết & Thấu cảm",
          "desc": "Chủ thể phụ trách liên hệ giải quyết tận gốc rễ băn khoăn của phụ huynh."
        },
        {
          "step": 4,
          "title": "Đóng ticket & Lưu Dory Note",
          "desc": "Xác nhận phụ huynh đã an tâm, lưu ghi chú phản ánh vào thẻ người liên hệ (family_contacts) trên Dolphin."
        }
      ],
      "doGuidelines": [
        "Xác nhận tiếp nhận tức thì để phụ huynh an tâm.",
        "Lắng nghe nỗi lo âu tiềm ẩn phía sau câu hỏi của phụ huynh.",
        "Giải quyết dứt điểm và cập nhật tiến trình rõ ràng."
      ],
      "dontGuidelines": [
        "Không đùn đẩy phụ huynh qua lại giữa các phòng ban.",
        "Không trả lời bằng các mẫu tin nhắn soạn sẵn vô cảm."
      ],
      "template": {
        "channel": "Zalo OA / Hotline hỗ trợ",
        "content": "[Nemo12 Care] Dạ chào Anh/Chị {Parent_Name}, Nemo12 đã nhận được câu hỏi của Anh/Chị về {Topic}. \n\nMentor phụ trách lớp của bé đang xem xét thông tin và sẽ phản hồi chi tiết tới Anh/Chị trước {Estimated_Time} hôm nay ạ. Nếu cần hỗ trợ khẩn cấp, Anh/Chị có thể bấm gọi Hotline: 09xx.xxx.xxx."
      },
      "rubric": [
        {
          "criterion": "Accessibility (Độ thuận tiện tiếp cận)",
          "l1": "Phụ huynh không biết hỏi ai, bị đùn đẩy qua lại giữa các phòng ban.",
          "l2": "Kênh liên hệ khó tiếp cận, quy trình rườm rà.",
          "l3": "Kênh liên hệ Zalo/Hotline rõ ràng, tiếp nhận ngay.",
          "l4": "Phụ huynh gửi yêu cầu dễ dàng không cần hiểu cấu trúc nội bộ của Nemo12.",
          "l5": "Trải nghiệm tiếp cận liền mạch, một điểm chạm giải quyết mọi nhu cầu."
        },
        {
          "criterion": "Responsiveness (Tốc độ phản hồi)",
          "l1": "Bị lãng quên, không ai trả lời hoặc phản hồi sau nhiều ngày.",
          "l2": "Trả lời chậm trễ, không thông báo thời gian xử lý.",
          "l3": "Xác nhận tiếp nhận tức thì và phản hồi trong khung giờ cam kết.",
          "l4": "Giải quyết nhanh chóng và liên tục cập nhật trạng thái xử lý cho phụ huynh.",
          "l5": "Phụ huynh luôn luôn cảm nhận được sự hiện diện và đồng hành chu đáo."
        },
        {
          "criterion": "Resolution Quality (Chất lượng giải quyết)",
          "l1": "Đóng ticket cho xong chuyện, thái độ thờ ơ né tránh.",
          "l2": "Trả lời qua loa bằng các câu trả lời soạn sẵn.",
          "l3": "Giải đáp chính xác, giải quyết trọn vẹn câu hỏi của phụ huynh.",
          "l4": "Thấu hiểu nỗi lo âu tiềm ẩn phía sau câu hỏi và giải tỏa lo lắng.",
          "l5": "Giải quyết dứt điểm gốc rễ vấn đề và củng cố vững chắc niềm tin của gia đình."
        }
      ]
    },
    {
      "id": "T10",
      "name": "Family Meeting (High-touch Experience)",
      "category": "Journey / Relationship",
      "owner": "Human (Mentor / Marlins Care)",
      "stage": "Meaningful Moments Triggered",
      "jobs": [
        "F4",
        "E2",
        "S5"
      ],
      "trigger": "Phát sinh khoảnh khắc ý nghĩa (Đột phá lớn, Cơ hội thấu hiểu sâu sắc, Gắn kết đặc biệt, Khôi phục niềm tin sau khủng hoảng)",
      "purpose": "Hiểu bối cảnh gia đình, kỳ vọng từ phụ huynh để thiết kế trải nghiệm học tập phù hợp hơn và xây dựng mối quan hệ đồng hành lâu dài. Nguyên tắc: 'Đến để hiểu, không phải để đánh giá'.",
      "sopTime": "60 phút gặp mặt (Chuẩn bị ≤15 min)",
      "mindset": {
        "quote": "Đến để hiểu, không phải để đánh giá.",
        "definition": "Family Tour / Family Meeting không phải là hoạt động chăm sóc khách hàng. Đó là bước đầu tiên của quá trình mentoring. Trước khi mentor hiểu học sinh, mentor cần hiểu gia đình.",
        "priorities": [
          { "level": "⭐⭐⭐", "goal": "Xây dựng Trust với gia đình", "reason": "Không có niềm tin thì rất khó thu thập thông tin, phối hợp giáo dục hay tạo hiệu ứng giới thiệu." },
          { "level": "⭐⭐⭐", "goal": "Hiểu Future Portrait", "reason": "Đây là đích đến để mọi quyết định giảng dạy và mentoring đều bám theo." },
          { "level": "⭐⭐⭐", "goal": "Hiểu Learning Context", "reason": "Giải thích vì sao hai học sinh có kết quả khác nhau và giúp cá nhân hóa việc hỗ trợ." }
        ]
      },
      "stakeholderJTBD": [
        { "stakeholder": "Phụ huynh", "job": "Tin rằng con mình được đồng hành đúng cách", "value": "Trust, Alignment, Partnership" },
        { "stakeholder": "Sư Tử Con / Nemo12", "job": "Hiểu khách hàng và nâng cao chất lượng chương trình, tăng retention", "value": "Customer Insights, Trust" },
        { "stakeholder": "Học sinh", "job": "Cảm thấy được hiểu và được lắng nghe", "value": "Psychological Safety, Motivation, Connection" }
      ],
      "agendaFlow": [
        { "time": "00-05 min (5p)", "step": "0. Warm-up", "goal": "Tạo không khí 'Khách đến chơi nhà', không mở laptop hay lấy sổ ngay. Hỏi thăm, trò chuyện về nhà, thú cưng, góc học tập." },
        { "time": "05-15 min (10p)", "step": "1. Family Story", "goal": "Không hỏi kỳ vọng ngay. Hỏi câu chuyện tuổi thơ của con, điều khiến bố mẹ tự hào nhất. Mentor chủ yếu lắng nghe." },
        { "time": "15-30 min (15p)", "step": "2. Student Story", "goal": "Trò chuyện tự nhiên với học sinh về điều thích nhất gần đây, dự án muốn làm, cảm nhận về lớp AI. Không biến thành phỏng vấn." },
        { "time": "30-45 min (15p)", "step": "3. Alignment", "goal": "Mentor chia sẻ điểm mạnh quan sát được của con, định hướng hai bên cùng đồng hành. Đảm bảo gia đình cũng nhận được giá trị." },
        { "time": "45-55 min (10p)", "step": "4. Next Step", "goal": "Chốt mục tiêu 1–2 tháng tới: Gia đình hỗ trợ gì, Mentor hỗ trợ gì, Học sinh thử điều gì (Tạo commitment nhỏ)." },
        { "time": "55-60 min (5p)", "step": "5. Closing", "goal": "Cảm ơn gia đình, chụp ảnh kỷ niệm nếu gia đình đồng ý. Tuyệt đối không kéo dài lê thê thêm 30 phút." }
      ],
      "mentorGuides": {
        "rule": "Listen 70%, Ask 20%, Talk 10%",
        "questionBank": [
          { "no": 1, "q": "Nếu chỉ mong con thay đổi được một điều sau khóa học này, anh/chị sẽ chọn điều gì? Vì sao?", "purpose": "Hiểu Future Portrait và kỳ vọng thực sự của gia đình." },
          { "no": 2, "q": "Ở nhà, khi con gặp một việc khó, con thường tự làm, nhờ ai hay bỏ cuộc?", "purpose": "Hiểu mức độ tự chủ và Family Dynamics." },
          { "no": 3, "q": "Có khoảnh khắc nào gần đây khiến anh/chị thấy con rất hào hứng hoặc rất tự hào về bản thân không?", "purpose": "Khám phá Hidden Motivation và điểm mạnh." },
          { "no": 4, "q": "Sau vài buổi học vừa rồi, anh/chị hoặc con có điều gì bất ngờ, băn khoăn hoặc muốn mentor biết thêm không?", "purpose": "Kiểm chứng giả thuyết, tạo không gian chia sẻ hai chiều." },
          { "no": 5, "q": "Nếu một năm nữa nhìn lại, điều gì sẽ khiến anh/chị cảm thấy quyết định cho con học là đúng?", "purpose": "Hiểu tiêu chí thành công của phụ huynh và căn chỉnh kỳ vọng." }
        ],
        "observationGuide": [
          { "dim": "1. Family Dynamics", "cues": "Ai là người nói nhiều? Ai thường trả lời thay? Học sinh có được tự do bày tỏ ý kiến không?" },
          { "dim": "2. Student Behavior", "cues": "Học sinh chủ động hay bị động? Thoải mái với mentor không? Điều gì khiến em hứng thú nhất trong cuộc trò chuyện?" },
          { "dim": "3. Learning Environment", "cues": "Không gian học tập có phù hợp không? Thiết bị máy tính, internet, mức độ yên tĩnh và yếu tố xao nhãng ra sao?" },
          { "dim": "4. Parent Involvement", "cues": "Phụ huynh mong muốn đồng hành ở mức nào? Sẵn sàng hỗ trợ hay kỳ vọng mentor làm tất cả?" },
          { "dim": "5. Hidden Signals", "cues": "Sở thích, đồ chơi, sách truyện hoặc hành vi gợi ý về điểm mạnh và động lực tự nhiên của học sinh." }
        ],
        "exitChecklist": [
          "Tôi đã hiểu điều gì khiến học sinh có động lực học chưa?",
          "Tôi đã hiểu môi trường học tập thực tế của học sinh chưa?",
          "Tôi đã biết ai là người đồng hành chính trong gia đình chưa?",
          "Học sinh đã có cơ hội chia sẻ quan điểm của mình chưa?",
          "Phụ huynh đã hiểu vai trò của mentor và phương pháp đào tạo chưa?",
          "Tôi đã xác nhận bước tiếp theo với gia đình chưa?",
          "Tôi đã có ít nhất 3 insight mới (không có trong form ban đầu) chưa?"
        ]
      },
      "familyNotesTemplate": {
        "version": "v2.0",
        "structure": [
          "🎯 Mục tiêu gia đình: ...",
          "💡 3 Core Insights: Family Dynamics | Learning Environment | Hidden Motivation",
          "🧠 Điều cần hiểu thêm về bé: ...",
          "👨‍👩‍👦 Background gia đình & Relationship: ...",
          "⚠️ Lưu ý cho Mentor: ...",
          "📅 Next Actions: ...",
          "📝 Evidence: Phân tách rõ Lời nói (Fact) vs Quan sát (Observation)"
        ],
        "exampleCase": {
          "goal": "Tự học, tự tin trình bày ý tưởng trước tập thể.",
          "insights": [
            "Family Dynamics: Mẹ thường hay trả lời thay con.",
            "Learning Environment: Có góc học riêng yên tĩnh, nhưng laptop hơi chậm.",
            "Hidden Motivation: Rất thích game Minecraft và thích được khoe sản phẩm tự làm."
          ],
          "mentorNote": "Ưu tiên hỏi trực tiếp học sinh trước khi hỏi phụ huynh; giao các mini-project liên quan đến chủ đề game yêu thích.",
          "nextActions": "Giao project chủ đề Minecraft ➔ Khuyến khích học sinh tự thuyết trình ➔ Cập nhật phụ huynh sau 2 tuần.",
          "evidence": "Lời nói: 'Con thích tự mày mò hơn là được chỉ từng bước.' | Quan sát: Học sinh chủ động dẫn mentor xem góc Lego và máy tính."
        }
      },
      "sopSteps": [
        {
          "step": 1,
          "title": "Trước buổi gặp (Pre-Meeting)",
          "desc": "Đọc Family Profile trên hệ thống (không hỏi lại thông tin đã có) ➔ Lọc gia đình ➔ Xác định mục tiêu riêng & chuẩn bị 3-5 câu hỏi mở + điểm quan sát ➔ Chốt lịch hẹn 60p."
        },
        {
          "step": 2,
          "title": "Trong buổi gặp (In-Meeting)",
          "desc": "Thực hiện theo đúng Agenda 60p (Warm-up ➔ Family Story ➔ Student Story ➔ Alignment ➔ Next Step ➔ Closing). Lắng nghe 70%, quan sát tương tác, phân biệt rõ Fact vs Insight."
        },
        {
          "step": 3,
          "title": "Sau buổi gặp (Post-Meeting)",
          "desc": "Hoàn thiện Family Notes trong vòng 24 giờ ➔ Cập nhật Learner Model trên hệ thống ➔ Đánh giá lại các giả thuyết ban đầu về học sinh và gia đình."
        }
      ],
      "doGuidelines": [
        "Lắng nghe 70%, hỏi 20%, chia sẻ 10% (Tạo cảm giác khách đến chơi nhà).",
        "Tập trung tìm hiểu 3 insight cốt lõi: Family Dynamics, Learning Environment, Hidden Motivation.",
        "Phân tách rõ ràng giữa Sự thật (Fact) - Quan sát (Observation) - Nhận định (Insight) trong ghi chép.",
        "Chốt được một cam kết đồng hành cụ thể (Next Step) giữa 3 bên trước khi ra về."
      ],
      "dontGuidelines": [
        "Tuyệt đối không biến buổi gặp thành buổi khảo sát hay phỏng vấn tra hỏi.",
        "Không kích hoạt theo lịch cứng hay mức chi trả tài chính của phụ huynh.",
        "Không hỏi lại những thông tin cơ bản mà phụ huynh đã điền trong form.",
        "Không kéo dài buổi gặp quá 60 phút làm ảnh hưởng đến thời gian của gia đình."
      ],
      "rubric": [
        {
          "criterion": "1. Family Understanding (Thấu hiểu gia đình)",
          "l1": "Chỉ thu thập thông tin hành chính bề mặt hoặc hỏi lặp lại dữ liệu form.",
          "l2": "Hiểu được một vài thông tin mới nhưng còn rời rạc, thiếu chiều sâu.",
          "l3": "Xác định được 3 insight cốt lõi: Family Dynamics, Learning Environment, Hidden Motivation.",
          "l4": "Có bằng chứng quan sát và câu chuyện thực tế minh chứng rõ ràng cho từng insight.",
          "l5": "Insight sâu sắc làm thay đổi tích cực phương thức sư phạm và cách mentor đồng hành cùng con."
        },
        {
          "criterion": "2. Trust & Connection (Xây dựng niềm tin & Kết nối)",
          "l1": "Buổi gặp mang tính hỏi đáp gượng gạo, học sinh và phụ huynh rụt rè ít chia sẻ.",
          "l2": "Có trao đổi hai chiều nhưng còn dè dặt, chưa tạo được sự cởi mở.",
          "l3": "Phụ huynh và học sinh chủ động chia sẻ suy nghĩ, câu chuyện và khó khăn thực tế.",
          "l4": "Hai bên cảm thấy được tôn trọng và lắng nghe; học sinh thoải mái kết nối với mentor.",
          "l5": "Gia đình xem mentor như người bạn đồng hành tin cậy, học sinh hào hứng bứt phá."
        },
        {
          "criterion": "3. Mentoring Readiness & SOP Execution (Tính sẵn sàng & Quy chuẩn SOP)",
          "l1": "Trễ hẹn, không chuẩn bị trước hoặc không biết sẽ hỗ trợ học sinh như thế nào.",
          "l2": "Có nhận định chung chung nhưng chưa có kế hoạch hành động cụ thể.",
          "l3": "Điều phối đúng Agenda 60p, hoàn thành Family Notes chuẩn trong 24h với kế hoạch 4-6 tuần.",
          "l4": "Kế hoạch đồng hành được cá nhân hóa sát sao, có giả thuyết và tiêu chí kiểm chứng rõ ràng.",
          "l5": "Hồ sơ Family Notes xuất sắc, bất kỳ mentor nào đọc vào cũng thấu hiểu và đồng hành được ngay."
        }
      ]
    },
    {
      "id": "T11",
      "name": "Completion / Growth Story",
      "category": "Journey / Relationship",
      "owner": "Hybrid",
      "stage": "Completion (Session 12)",
      "jobs": [
        "F4",
        "E5",
        "S2"
      ],
      "trigger": "Học sinh hoàn thành buổi học thứ 12 của khóa học",
      "purpose": "Chuyển hóa dữ liệu 12 buổi học thành Câu chuyện Trưởng thành (Growth Story) 5 phần mạch lạc, giàu cảm xúc và bằng chứng, giúp gia đình nhìn lại hành trình chuyển biến tư duy.",
      "sopTime": "Mentor chấp bút ≤15 min / học sinh",
      "sopSteps": [
        {
          "step": 1,
          "title": "Trích xuất Portfolio dữ liệu",
          "desc": "Hệ thống tự động kết xuất toàn bộ sản phẩm dự án và log tiến độ 12 buổi."
        },
        {
          "step": 2,
          "title": "Mentor chấp bút Qualitative Insight",
          "desc": "Mentor viết phần cảm nhận định tính cho Mục 3 (How I Changed) và Mục 4 (What We Learned About You); lưu một bản vào Dolphin Family Notes gắn tag goal và need."
        },
        {
          "step": 3,
          "title": "Xuất bản Growth Story",
          "desc": "Hệ thống xuất bản trang Web Growth Story tương tác đẹp mắt gửi cho gia đình."
        },
        {
          "step": 4,
          "title": "Đối thoại có điều kiện",
          "desc": "Chỉ tổ chức cuộc gọi 1-1 khi phụ huynh yêu cầu hoặc lộ trình tiếp theo có yếu tố phức tạp."
        }
      ],
      "doGuidelines": [
        "Tuân thủ cấu trúc 5 phần chuẩn hóa (Where I Started -> What I Did -> How I Changed -> What We Learned -> What's Next).",
        "Sử dụng bằng chứng đối chiếu trước - sau khóa học.",
        "Làm nổi bật nét tính cách và tiềm năng riêng biệt của con."
      ],
      "dontGuidelines": [
        "Không gửi bảng điểm số khô khan vô cảm.",
        "Không viết nhận xét chung chung theo mẫu công nghiệp."
      ],
      "template": {
        "channel": "Web Interactive Story / Ấn phẩm số",
        "content": "🌟 CÂU CHUYỆN TRƯỞNG THÀNH CỦA BẢO NAM (KHÓA NEMO CORE 12 BUỔI)\n----------------------------------------------------------------------\n1. WHERE I STARTED (XUẤT PHÁT ĐIỂM):\nNhững ngày đầu, Nam thường khá rụt rè khi đối diện với các bài toán logic có nhiều biến số và thường chờ Mentor gợi ý.\n\n2. WHAT I DID (HÀNH TRÌNH ĐÃ ĐI):\nTự tay lập trình 4 dự án game mô phỏng sinh thái biển, hoàn thành 12 thử thách thuật toán với tổng cộng 86 lần tự sửa lỗi.\n\n3. HOW I CHANGED (CON ĐÃ THAY ĐỔI RA SAO):\nNam đã xây dựng được phản xạ phân rã bài toán lớn thành các bước nhỏ và tự tin thử nghiệm các phương án giải quyết khác nhau mà không sợ sai.\n\n4. WHAT WE LEARNED ABOUT YOU (THẤU HIỂU ĐỘC BẢN):\nNam sở hữu tư duy cấu trúc rất mạch lạc và khả năng tập trung sâu khi được giao đề tài tự do sáng tạo.\n\n5. WHAT'S NEXT (HƯỚNG ĐI TIẾP THEO):\nRèn luyện thêm kỹ năng làm việc nhóm và giao tiếp phản biện giải pháp trước tập thể."
      },
      "rubric": [
        {
          "criterion": "Growth Evidence (Bằng chứng trưởng thành)",
          "l1": "Chỉ có giấy chứng nhận hoàn thành chung chung vô nghĩa.",
          "l2": "Liệt kê danh sách các bài học đã qua một cách máy móc.",
          "l3": "Thể hiện rõ nét bằng chứng so sánh trước và sau khóa học.",
          "l4": "Xâu chuỗi nhiều bằng chứng chứng minh sự thay đổi trong cách tư duy.",
          "l5": "Làm nổi bật rõ ràng cả những bước đột phá lẫn các điểm cần tiếp tục hoàn thiện."
        },
        {
          "criterion": "Learner Insight (Thấu hiểu người học)",
          "l1": "Dán nhãn năng lực chung chung (VD: 'Con rất sáng tạo').",
          "l2": "Nhận xét điểm mạnh một cách khái quát.",
          "l3": "Có 1 quan sát sâu sắc, xác thực về phong cách tư duy của học sinh.",
          "l4": "Đưa ra 2-3 insight độc bản được chứng minh bằng sản phẩm thực tế.",
          "l5": "Giúp học sinh và phụ huynh hiểu sâu sắc hơn về chính bản thân mình."
        },
        {
          "criterion": "Meaning-making (Khắc họa ý nghĩa hành trình)",
          "l1": "Chỉ dừng lại ở thông báo 'Đã học xong khóa học'.",
          "l2": "Tóm tắt sơ lược kết quả khóa học.",
          "l3": "Phụ huynh và con cảm nhận rõ ràng sự tiến bộ và giá trị nhận được.",
          "l4": "Kết nối hành trình học tập vừa qua với những cơ hội phát triển tương lai.",
          "l5": "Gia đình sở hữu một câu chuyện trưởng thành trọn vẹn, đáng tự hào để lưu giữ."
        }
      ]
    },
    {
      "id": "T12",
      "name": "Next-step Recommendation",
      "category": "Journey / Relationship",
      "owner": "Hybrid",
      "stage": "Continuation",
      "jobs": [
        "F3",
        "S3"
      ],
      "trigger": "Đi kèm sau khi xuất bản Growth Story T11",
      "purpose": "Cung cấp định hướng bước tiếp theo trung thực dựa trên đúng nhu cầu phát triển của học sinh (Learner-need-first), thay vì cố gắng bán thêm khóa học (Product-first).",
      "sopTime": "≤10 phút tư vấn định hướng",
      "sopSteps": [
        {
          "step": 1,
          "title": "Phân tích Nhu cầu & Điểm nghẽn",
          "desc": "Mentor đối chiếu kết quả T11 và thẻ Dory trên Dolphin để xác định 1-2 năng lực ưu tiên con cần rèn luyện tiếp."
        },
        {
          "step": 2,
          "title": "Lập đề xuất trung thực",
          "desc": "Nếu chương trình Nemo12 phù hợp -> Đề xuất lớp; Nếu con cần học kỹ năng khác ngoài Nemo12 -> Thành thật gợi ý. Cập nhật goal trên Dolphin."
        },
        {
          "step": 3,
          "title": "Trao quyền cho phụ huynh",
          "desc": "Giải thích rõ ràng lý do, sự đánh đổi và trao trọn quyền tự chủ quyết định cho gia đình."
        }
      ],
      "doGuidelines": [
        "Ưu tiên tuyệt đối nhu cầu phát triển của học sinh.",
        "Chỉ ra cụ thể năng lực ưu tiên kèm lý do và dấu hiệu thành công.",
        "Sẵn sàng tư vấn giải pháp ngoài Nemo12 nếu điều đó tốt hơn cho con."
      ],
      "dontGuidelines": [
        "Không dùng tâm lý khan hiếm slot để ép phụ huynh tái tục.",
        "Không chỉ đưa ra đúng 1 lựa chọn duy nhất."
      ],
      "template": {
        "channel": "Tư vấn lộ trình / Báo cáo đề xuất",
        "content": "Dạ chào Anh/Chị {Parent_Name}, dựa trên sự chuyển biến của bé trong 12 buổi vừa qua, Nemo12 xin gửi tới gia đình phân tích định hướng chặng tiếp theo:\n\n🎯 NĂNG LỰC ƯU TIÊN: Rèn luyện khả năng giao tiếp và làm việc nhóm trong môi trường giải quyết vấn đề.\n📌 ĐỀ XUẤT:\n- Lựa chọn A (Tại Nemo12): Tham gia CLB Dự Án Sáng Tạo Nhóm (Nơi con được đóng vai trò nhóm trưởng thiết kế sản phẩm).\n- Lựa chọn B (Ngoài Nemo12): Tham gia một môn thể thao đồng đội hoặc hoạt động kịch nghệ để phát triển biểu đạt cảm xúc tự nhiên.\n\nNemo12 tin rằng việc phát triển cân bằng cả tư duy logic lẫn biểu đạt cảm xúc sẽ giúp con tự tin nhất trong giai đoạn này ạ!"
      },
      "rubric": [
        {
          "criterion": "Need-based (Dựa trên nhu cầu thực)",
          "l1": "Chăm chăm bán khóa học tiếp theo bất chấp mức độ phù hợp.",
          "l2": "Gợi ý lộ trình chung chung theo khung có sẵn của trung tâm.",
          "l3": "Đề xuất dựa trên đúng điểm mạnh và điểm nghẽn của học sinh.",
          "l4": "Đề xuất có dữ liệu chứng minh rõ ràng vì sao con cần năng lực này.",
          "l5": "Sẵn sàng khuyên gia đình cho con học kỹ năng khác ngoài Nemo12 nếu phù hợp hơn."
        },
        {
          "criterion": "Specificity (Độ cụ thể)",
          "l1": "Lời khuyên mơ hồ kiểu 'nên học tiếp để giỏi hơn'.",
          "l2": "Đưa ra định hướng chung chung không rõ hành động.",
          "l3": "Xác định rõ 1-2 năng lực ưu tiên cần phát triển trong giai đoạn tới.",
          "l4": "Nêu rõ ưu tiên kèm theo lý do thuyết phục và mục tiêu cần đạt.",
          "l5": "Xác định cụ thể chỉ số thành công để phụ huynh có thể tự đo lường tại nhà."
        },
        {
          "criterion": "Decision Support (Hỗ trợ ra quyết định)",
          "l1": "Chèn ép tâm lý để phụ huynh xuống tiền mua tiếp.",
          "l2": "Chỉ đưa ra đúng 1 lựa chọn duy nhất không có giải thích.",
          "l3": "Phụ huynh hiểu rõ lý do và lợi ích của lộ trình đề xuất.",
          "l4": "Phụ huynh nắm rõ các phương án lựa chọn khác nhau cùng sự đánh đổi.",
          "l5": "Phụ huynh được trang bị đầy đủ góc nhìn để hoàn toàn tự chủ ra quyết định cho con."
        }
      ]
    },
    {
      "id": "T13",
      "name": "Positive Milestone / Celebration",
      "category": "System → Human",
      "owner": "System flag → Mentor confirms",
      "stage": "Core Learning (Khi có cột mốc vượt bậc)",
      "jobs": [
        "E2",
        "S2",
        "S5"
      ],
      "trigger": "Hệ thống gắn cờ khi học sinh có bước tiến vượt bậc, chỉ số kiên trì đột phá, hoặc giúp đỡ bạn tích cực",
      "purpose": "Kịp thời công nhận và tôn vinh những nỗ lực kiên trì, bước chuyển biến thái độ của học sinh theo nguyên tắc: Hệ thống gắn cờ -> Mentor xác nhận và cá nhân hóa lời chúc mừng.",
      "sopTime": "≤5 phút xác nhận và gửi thiệp",
      "sopSteps": [
        {
          "step": 1,
          "title": "Hệ thống gắn cờ cột mốc",
          "desc": "Thuật toán phát hiện cột mốc đột phá và đẩy thông báo Positive Signal về cho Mentor."
        },
        {
          "step": 2,
          "title": "Mentor xác nhận & Cá nhân hóa",
          "desc": "Mentor duyệt và viết 1-2 câu chúc mừng nêu bật ý nghĩa sự nỗ lực; lưu ghi chú tag fact vào Dolphin."
        },
        {
          "step": 3,
          "title": "Phát hành Thiệp Vinh Danh",
          "desc": "Hệ thống gửi thiệp số chúc mừng qua Zalo cho phụ huynh và học sinh."
        }
      ],
      "doGuidelines": [
        "Tôn vinh sự kiên trì và tiến bộ tự thân, không so sánh hơn thua với bạn khác.",
        "Nêu dẫn chứng cụ thể hành động đẹp hoặc thử thách con đã vượt qua.",
        "Chia sẻ niềm tự hào cùng gia đình."
      ],
      "dontGuidelines": [
        "Không khen bừa bãi những việc quá nhỏ nhặt làm giảm giá trị của lời khen.",
        "Không khen bằng các danh hiệu sáo rỗng vô thưởng vô phạt."
      ],
      "template": {
        "channel": "Thiệp vinh danh số qua Zalo",
        "content": "🎉 CHÚC MỪNG CỘT MỐC ĐỘT PHÁ CỦA BẢO NAM!\nHôm nay Nemo12 rất tự hào gửi tặng Bảo Nam huy hiệu \"Chiến Binh Kiên Trì\" 🌟\n\nTrong buổi học hôm nay, Nam đã không hề bỏ cuộc mà kiên trì thử lại tới 6 lần để hoàn thiện thuật toán cho nhân vật di chuyển chính xác qua mê cung. Sự bền bỉ này quý giá hơn rất nhiều việc làm đúng ngay từ lần đầu tiên.\n\nChúc mừng Nam và chúc mừng gia đình vì sự trưởng thành tuyệt vời của con!"
      },
      "rubric": [
        {
          "criterion": "Significance (Ý nghĩa cột mốc)",
          "l1": "Khen ngợi bừa bãi, việc cỏn con cũng làm rầm rộ khiến mất giá trị.",
          "l2": "Cột mốc nhỏ, chưa thể hiện được sự tiến bộ rõ rệt.",
          "l3": "Công nhận cột mốc có ý nghĩa thực sự trong sự phát triển của học sinh.",
          "l4": "Cột mốc được kết nối trực tiếp với hành trình nỗ lực bền bỉ của con.",
          "l5": "Thể hiện sự chuyển biến mang tính bước ngoặt trong tư duy/thái độ của học sinh."
        },
        {
          "criterion": "Evidence (Tính bằng chứng xác thực)",
          "l1": "Lời khen sáo rỗng (VD: 'Con giỏi nhất lớp').",
          "l2": "Nêu thành tích chung chung không có dẫn chứng.",
          "l3": "Có bằng chứng cụ thể: Tên dự án, số lần kiên trì thử lại, hành động đẹp.",
          "l4": "Bằng chứng được đặt trong bối cảnh hành trình vượt khó của chính học sinh đó.",
          "l5": "Chỉ rõ vì sao cột mốc này lại có ý nghĩa đặc biệt quan trọng đối với riêng học sinh này."
        },
        {
          "criterion": "Recognition (Cách thức công nhận)",
          "l1": "Khen qua loa, rập khuôn công nghiệp.",
          "l2": "Tặng phần thưởng vật chất đơn thuần thiếu cảm xúc.",
          "l3": "Lời công nhận trang trọng, chân thành và ấm áp.",
          "l4": "Cá nhân hóa lời chúc mừng sâu sắc đến cả phụ huynh và học sinh.",
          "l5": "Giúp học sinh và phụ huynh thấu hiểu sâu sắc giá trị của sự kiên trì và nỗ lực nội tại."
        }
      ]
    },
    {
      "id": "WS",
      "name": "Marlins Workshop (Online Zoom tối Thứ 5)",
      "category": "Acquisition / Workshop",
      "owner": "Human (Marlins Care / Anh Đắc & Mentors)",
      "stage": "Acquisition (Trước khóa học)",
      "jobs": ["F5", "E1", "S3", "S4"],
      "trigger": "Định kỳ 20h00 - 22h00 Thứ 5 hàng tuần qua Zoom",
      "purpose": "Tổ chức các buổi Workshop chuyên đề chuyên sâu theo cụm chủ đề (Tư duy lập trình, Định hướng chuyên cấp 2/3, Ứng dụng AI thực chiến cho Teen), giải tỏa lo âu của cha mẹ và dẫn dắt phụ huynh đăng ký 2 buổi Trial Class Offline Chủ Nhật.",
      "sopTime": "120 phút trực tiếp (Chuẩn bị ≤30 min)",
      "sopSteps": [
        {
          "step": 1,
          "title": "Lên cụm chủ đề & Phát động Zoom",
          "desc": "Công bố chủ đề theo nhu cầu phụ huynh (Toán tin, Chuyên cấp 2/3, AI) và mở form đăng ký trước 72h."
        },
        {
          "step": 2,
          "title": "Điều phối Workshop chuyên sâu",
          "desc": "20h00 - 22h00: Chia sẻ góc nhìn thực chiến, giải mã tâm lý lứa tuổi và đối thoại trực tiếp cùng phụ huynh."
        },
        {
          "step": 3,
          "title": "Demo hệ thống Nemo12 & Lời mời Trial",
          "desc": "Trình chiếu cách Nemo12 cá nhân hóa việc học và trao vé mời tham gia 2 buổi Trial Class Offline chiều Chủ Nhật."
        },
        {
          "step": 4,
          "title": "Chăm sóc hậu Workshop & Nurturing",
          "desc": "Gửi tài liệu tóm tắt vào 3 Group Zalo Community và phân luồng hỗ trợ phụ huynh đặt lịch Trial Class."
        }
      ],
      "doGuidelines": [
        "Tập trung trao giá trị tri thức và phương pháp giáo dục thực tế.",
        "Dành tối thiểu 30-45 phút cho phần Q&A giải đáp trăn trở của từng gia đình.",
        "Dẫn dắt tự nhiên vào trải nghiệm Trial Class như một cơ hội khám phá tư duy cho con."
      ],
      "dontGuidelines": [
        "Không biến workshop thành buổi telesale chèo kéo lộ liễu.",
        "Không nói lý thuyết hàn lâm xa rời bối cảnh học đường Việt Nam."
      ],
      "template": {
        "channel": "Zoom Online (20h00 - 22h00 Thứ 5 hàng tuần)",
        "content": "AGENDA MARLINS WORKSHOP:\n1. 20h00 - 20h15: Check-in & Khảo sát nhanh trăn trở của phụ huynh.\n2. 20h15 - 21h00: Trình bày Chuyên đề trọng tâm theo cụm chủ đề.\n3. 21h00 - 21h30: Demo case study thực tế từ học sinh Nemo12.\n4. 21h30 - 22h00: Q&A trực tiếp cùng Anh Đắc & Đội ngũ Mentor."
      },
      "rubric": [
        {
          "criterion": "Value Delivered (Giá trị chuyên đề)",
          "l1": "Nội dung nghèo nàn, nói lý thuyết suông.",
          "l2": "Nội dung còn chung chung, thiếu ví dụ thực tế.",
          "l3": "Cung cấp kiến thức bổ ích, giải tỏa đúng băn khoăn của phụ huynh.",
          "l4": "Phân tích sâu sắc các cạm bẫy tư duy và định hướng lộ trình rõ ràng.",
          "l5": "Phụ huynh hoàn toàn vỡ òa nhận thức và chủ động đăng ký Trial Class cho con."
        }
      ]
    },
    {
      "id": "COM",
      "name": "Community & Social Mentoring",
      "category": "Acquisition / Community Nurturing",
      "owner": "Mentors & Community Lead",
      "stage": "Acquisition (Duy trì thường trực)",
      "jobs": ["S4", "F5", "S1", "E1"],
      "trigger": "Sinh hoạt hàng ngày trên 3 Groups Zalo và Facebook cá nhân của Mentors",
      "purpose": "Xây dựng môi trường cộng đồng phụ huynh và học sinh chất lượng cao (Zalo Chuyên Cấp 2, Chuyên Cấp 3, AI Teen - Sư Tử Con & FB cá nhân của Mentors), chia sẻ case study thật, tài liệu bổ ích và tạo niềm tin tự nhiên.",
      "sopTime": "15-30 phút/ngày điều phối & giải đáp",
      "sopSteps": [
        {
          "step": 1,
          "title": "Phân luồng & Quản trị 3 Groups Zalo",
          "desc": "Điều phối nội dung đúng trọng tâm từng nhóm: Group Cấp 2 (Tư duy thuật toán nền tảng), Group Cấp 3 (Lộ trình Chuyên Tin/Du học), Group AI Teen (Sản phẩm AI sáng tạo)."
        },
        {
          "step": 2,
          "title": "Storytelling trên Facebook cá nhân Mentor",
          "desc": "Mentor định kỳ chia sẻ những mẩu chuyện quan sát tinh tế về học sinh trong giờ học (tuân thủ bảo mật hình ảnh/danh tính)."
        },
        {
          "step": 3,
          "title": "Giải đáp thắc mắc & Hướng dẫn lộ trình",
          "desc": "Trả lời câu hỏi chuyên môn của phụ huynh trong cộng đồng với tinh thần phụng sự và trung thực."
        }
      ],
      "doGuidelines": [
        "Chia sẻ câu chuyện thật, chuyển biến thật của học sinh.",
        "Giữ gìn không gian cộng đồng văn minh, tôn trọng và tương trợ.",
        "Tạo cơ hội để các phụ huynh kết nối và học hỏi kinh nghiệm lẫn nhau."
      ],
      "dontGuidelines": [
        "Không spam tin nhắn quảng cáo gây rác group.",
        "Tuyệt đối không vi phạm bảo mật dữ liệu và quyền riêng tư của học sinh."
      ],
      "template": {
        "channel": "Zalo Groups + Facebook Cá Nhân",
        "content": "KHUNG CHỦ ĐỀ SINH HOẠT CỘNG ĐỒNG:\n- Thứ 2: Góc nhìn phương pháp & Bí quyết đồng hành cùng con.\n- Thứ 4: Giới thiệu sản phẩm ấn tượng tuần qua của học sinh Nemo12.\n- Thứ 6: Case study tháo gỡ điểm nghẽn học tập thực tế từ Mentor."
      },
      "rubric": [
        {
          "criterion": "Engagement & Trust (Độ tương tác & Niềm tin)",
          "l1": "Group chết, chỉ toàn tin nhắn bán hàng một chiều.",
          "l2": "Tương tác yếu, ít nội dung giá trị.",
          "l3": "Cộng đồng trao đổi tích cực, giải đáp nhanh chóng.",
          "l4": "Nhiều phụ huynh chia sẻ câu chuyện và giới thiệu bạn bè tham gia.",
          "l5": "Cộng đồng trở thành điểm tựa giáo dục tin cậy hàng đầu cho phụ huynh."
        }
      ]
    },
    {
      "id": "REF",
      "name": "Referrals Program (Chính sách 15% - 15%)",
      "category": "Referral & Advocacy",
      "owner": "System + Operations Layer",
      "stage": "Referral (Sau Growth Story / Milestone)",
      "jobs": ["S1", "S5", "E5"],
      "trigger": "Sau khi phụ huynh nhận Growth Story (T11) hoặc học sinh đạt cột mốc xuất sắc (T13)",
      "purpose": "Cung cấp mã và link giới thiệu cá nhân hóa riêng biệt cho cả Bố Mẹ và Học sinh: Người giới thiệu nhận 15% hoa hồng tri ân và Người được giới thiệu nhận ưu đãi giảm 15% học phí khi đăng ký khóa học.",
      "sopTime": "Tự động hóa 100% (Đối soát ≤24h)",
      "sopSteps": [
        {
          "step": 1,
          "title": "Tạo Referral Link cá nhân hóa",
          "desc": "Hệ thống tự động cấp mã riêng cho phụ huynh và học sinh kèm thư chúc mừng hoàn thành khóa học."
        },
        {
          "step": 2,
          "title": "Trao chính sách 15% - 15% minh bạch",
          "desc": "Người giới thiệu nhận 15% hoa hồng chuyển khoản/voucher; gia đình mới được giảm ngay 15% học phí Live Class."
        },
        {
          "step": 3,
          "title": "Ghi nhận & Tri ân Đại sứ gia đình",
          "desc": "Tự động gửi thông báo chúc mừng khi có người đăng ký thành công qua link và cập nhật điểm thưởng Đại sứ."
        }
      ],
      "doGuidelines": [
        "Chỉ kích hoạt lời mời giới thiệu tại thời điểm phụ huynh và con đang cảm thấy tự hào và hài lòng nhất.",
        "Đảm bảo chi trả hoa hồng và áp dụng mã giảm giá 15% chính xác, tự động và minh bạch."
      ],
      "dontGuidelines": [
        "Không gạ gẫm phụ huynh làm đại lý bán hàng đa cấp.",
        "Không gửi tin nhắn đòi hỏi giới thiệu nếu học sinh đang gặp trục trặc học tập."
      ],
      "template": {
        "channel": "Portal Cá Nhân / Zalo ZNS",
        "content": "✨ CHIA SẺ HÀNH TRÌNH TƯ DUY - NHẬN TRI ÂN TỪ NEMO12:\nChào Anh/Chị {Parent_Name}, chúc mừng bé {Student_Name} đã hoàn thành xuất sắc chặng đường Live Class!\n\nNếu Anh/Chị thấy trải nghiệm tại Nemo12 mang lại giá trị thực sự cho con, hãy gửi tặng mã ưu đãi đặc quyền này tới bạn bè:\n🔗 Link giới thiệu riêng của Anh/Chị: nemo12.com/ref/{Parent_Code}\n🎁 Đặc quyền: \n- Gia đình bạn bè: Được GIẢM NGAY 15% học phí khi đăng ký khóa học.\n- Anh/Chị: Nhận 15% hoa hồng tri ân trực tiếp từ Nemo12."
      },
      "rubric": [
        {
          "criterion": "Transparency & Experience (Tính minh bạch & Trải nghiệm)",
          "l1": "Hệ thống lỗi không ghi nhận người được refer, thanh toán chậm trễ.",
          "l2": "Quy trình nhận hoa hồng phức tạp, gây phiền hà.",
          "l3": "Mã giới thiệu hoạt động mượt mà, ghi nhận và áp dụng giảm 15% tự động.",
          "l4": "Trải nghiệm chia sẻ sang trọng, gia đình tự hào khi lan tỏa phương pháp giáo dục.",
          "l5": "Tạo thành mạng lưới phụ huynh đại sứ tự nhiên và bền vững."
        }
      ]
    }
  ]
};

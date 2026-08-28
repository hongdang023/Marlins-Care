import { KNOWLEDGE_HUB_DATA } from '../data/knowledge_hub_data.js';

/**
 * Cấu trúc 9 Playbooks hợp nhất theo chuẩn A1_Sitemap.md:
 * Gộp 13 Touchpoints thành 9 Workflows tác nghiệp thực tế.
 */
export const SITEMAP_CONFIG = {
  navigation: [
    {
      id: "overview",
      title: "Overview",
      slug: "/overview",
      subItems: [
        { title: "Why Parent Care", slug: "/overview/why-parent-care", desc: "Lý do tồn tại & Bối cảnh 12 buổi học + Marlins Day" },
        { title: "Parent Jobs", slug: "/overview/parent-jobs", desc: "Ma trận JTBD toàn diện: Functional, Emotional, Social" },
        { title: "Core Principles", slug: "/overview/core-principles", desc: "7 Triết lý & Nguyên tắc kim chỉ nam" },
        { title: "Capability Map", slug: "/overview/capability-map", desc: "Phân định năng lực: System vs Mentor vs Marlins" }
      ]
    },
    {
      id: "journey",
      title: "Parent Journey",
      slug: "/journey",
      subItems: [
        { title: "Journey Map", slug: "/journey", desc: "Bản đồ tương tác 7 giai đoạn (Interactive 7-Stage Pipeline)" }
      ]
    },
    {
      id: "playbooks",
      title: "Playbooks",
      slug: "/playbooks",
      megaGroups: [
        {
          group: "1. Acquisition",
          items: [
            { id: "marlins-day", title: "Marlins Day", slug: "/playbooks/marlins-day", touchpoints: ["T3"], desc: "Tháo gỡ ngộ nhận & Fishbowl (Offline CN 14h-17h)" },
            { id: "marlins-workshop", title: "Marlins Workshop", slug: "/playbooks/marlins-workshop", touchpoints: ["WS"], desc: "Chuyên đề Online qua Zoom (Thứ 5 20h-22h)" },
            { id: "community", title: "Community & Social", slug: "/playbooks/community", touchpoints: ["COM"], desc: "3 Groups Zalo Chuyên/AI Teen & FB cá nhân Mentors" }
          ]
        },
        {
          group: "2. Activation",
          items: [
            { id: "trial-class", title: "Trial Class", slug: "/playbooks/trial-class", touchpoints: ["T1", "T2", "T4"], desc: "Quy trình 2 buổi Trial Class (Pre-Trial ➔ Evidence ➔ Decision)" }
          ]
        },
        {
          group: "3. Retention",
          items: [
            { id: "live-class", title: "Live Class", slug: "/playbooks/live-class", touchpoints: ["T5", "T6", "T7", "T8", "T9", "T13"], desc: "Đồng hành 12 buổi Live Class: Báo cáo máy + Mentor Insight + Hỗ trợ & Dấu mốc" },
            { id: "family-meeting", title: "Family Meeting", slug: "/playbooks/family-meeting", touchpoints: ["T10"], desc: "Gặp mặt ăn uống với các gia đình & Khoảnh khắc ý nghĩa" }
          ]
        },
        {
          group: "4. Referral",
          items: [
            { id: "growth-story", title: "Growth Story", slug: "/playbooks/growth-story", touchpoints: ["T11"], desc: "Hồ sơ tổng kết câu chuyện trưởng thành 5 phần sau 12 buổi" },
            { id: "referrals", title: "Referrals Program", slug: "/playbooks/referrals", touchpoints: ["REF"], desc: "Cơ chế link giới thiệu & Chính sách 15% - 15% cho PH & HS" }
          ]
        },
        {
          group: "5. Revenue",
          items: [
            { id: "next-steps", title: "Next Steps", slug: "/playbooks/next-steps", touchpoints: ["T12"], desc: "Tư vấn lộ trình tiếp theo trung thực dựa trên nhu cầu học sinh" }
          ]
        }
      ]
    },
    {
      id: "decision-logs",
      title: "Decision Logs",
      slug: "/decision-logs",
      subItems: [
        { darId: "DAR-01", title: "Midpoint Pulse", slug: "/decision-logs/midpoint-pulse", desc: "DAR 01: Khảo sát pilot siêu ngắn gọn" },
        { darId: "DAR-02", title: "Trial Support", slug: "/decision-logs/trial-support", desc: "DAR 02: Tư vấn dựa trên dữ liệu & fit judgment" },
        { darId: "DAR-03", title: "Human Trigger", slug: "/decision-logs/human-trigger", desc: "DAR 03: Động cơ can thiệp System → Mentor" },
        { darId: "DAR-04", title: "High-Touch", slug: "/decision-logs/high-touch", desc: "DAR 04: Kích hoạt theo khoảnh khắc ý nghĩa (Family Meeting)" },
        { darId: "DAR-05", title: "Completion", slug: "/decision-logs/completion", desc: "DAR 05: Narrative 5 phần câu chuyện trưởng thành" }
      ]
    }
  ],

  journeyStages: [
    {
      id: "stage-1",
      step: "01",
      name: "Consideration",
      timeline: "Trước khóa học",
      aarrr: "Acquisition",
      aarrrStage: "Acquisition",
      needs: ["Clear access path (F5)", "Reassurance (E1)", "Good educational choice (S3)"],
      desiredExperience: "Phụ huynh hiểu rõ mục đích, tin tưởng phương pháp giáo dục và biết cách chuẩn bị cho con.",
      keyPlaybooks: [
        { title: "Marlins Day", slug: "/playbooks/marlins-day", code: "T3" },
        { title: "Marlins Workshop", slug: "/playbooks/marlins-workshop", code: "WS" },
        { title: "Community & Social", slug: "/playbooks/community", code: "COM" }
      ]
    },
    {
      id: "stage-2",
      step: "02",
      name: "Trial Learning",
      timeline: "Buổi 1 – 2 (Trial Class)",
      aarrr: "Activation",
      aarrrStage: "Activation",
      needs: ["Understand progress (F1)", "Child perspective (F4)", "Genuinely seen (E2)"],
      desiredExperience: "Con được tự do khám phá tư duy; phụ huynh nhận báo cáo bằng chứng dữ liệu khách quan.",
      keyPlaybooks: [
        { title: "Trial Class (Trial Evidence)", slug: "/playbooks/trial-class", code: "T2" },
        { title: "Trial Class (Pre-Trial)", slug: "/playbooks/trial-class", code: "T1" }
      ]
    },
    {
      id: "stage-3",
      step: "03",
      name: "Decision",
      timeline: "Sau 2 buổi Trial Class",
      aarrr: "Activation",
      aarrrStage: "Activation",
      needs: ["Actionable guidance (F3)", "Worthwhile investment (E5)", "Good educational choice (S3)"],
      desiredExperience: "Nhận tư vấn trung thực về mức độ phù hợp của con, không bị chèo kéo bán hàng.",
      keyPlaybooks: [
        { title: "Trial Class (Post-Trial Decision)", slug: "/playbooks/trial-class", code: "T4" }
      ]
    },
    {
      id: "stage-4",
      step: "04",
      name: "Early Learning",
      timeline: "Buổi 1 – 3 (Live Class)",
      aarrr: "Retention",
      aarrrStage: "Retention",
      needs: ["Reassurance (E1)", "Early risk detection (F2)", "Accompanied (E4)"],
      desiredExperience: "An tâm thấy con bắt nhịp môi trường học tập, mentor luôn sẵn sàng hỗ trợ.",
      keyPlaybooks: [
        { title: "Live Class (Progress & Support)", slug: "/playbooks/live-class", code: "T5·T9" }
      ]
    },
    {
      id: "stage-5",
      step: "05",
      name: "Core Learning",
      timeline: "Buổi 4 – 9 (Live Class)",
      aarrr: "Retention",
      aarrrStage: "Retention",
      needs: ["Understand progress (F1)", "Child perspective (F4)", "Genuinely seen (E2)", "Shared moments (S5)"],
      desiredExperience: "Nhìn thấy sự tiến bộ thực chất bằng dữ liệu, cảm nhận con được thấu hiểu qua quan sát của Mentor.",
      keyPlaybooks: [
        { title: "Live Class (Progress + Insight + Support + Milestones)", slug: "/playbooks/live-class", code: "T5-T13" },
        { title: "Family Meeting", slug: "/playbooks/family-meeting", code: "T10" }
      ]
    },
    {
      id: "stage-6",
      step: "06",
      name: "Completion",
      timeline: "Buổi 10 – 12 (Live Class)",
      aarrr: "Referral",
      aarrrStage: "Referral",
      needs: ["Understand progress (F1)", "Beyond grades (S2)", "Worthwhile investment (E5)"],
      desiredExperience: "Gia đình sở hữu một bức tranh trưởng thành toàn diện 5 phần, tự hào về nỗ lực của con.",
      keyPlaybooks: [
        { title: "Growth Story", slug: "/playbooks/growth-story", code: "T11" },
        { title: "Referrals Program", slug: "/playbooks/referrals", code: "REF" }
      ]
    },
    {
      id: "stage-7",
      step: "07",
      name: "Continuation",
      timeline: "Hậu 12 buổi Live Class",
      aarrr: "Revenue",
      aarrrStage: "Revenue",
      needs: ["Actionable guidance (F3)", "Belonging (S4)", "Better parent (S1)"],
      desiredExperience: "Được tư vấn bước phát triển tiếp theo trung thực dựa trên nhu cầu học sinh.",
      keyPlaybooks: [
        { title: "Next Steps", slug: "/playbooks/next-steps", code: "T12" },
        { title: "Marlins Day", slug: "/playbooks/marlins-day", code: "T3" }
      ]
    }
  ]
};

export { KNOWLEDGE_HUB_DATA };

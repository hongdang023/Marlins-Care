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
      masterFramework: {
        id: "master-framework",
        title: "Master Framework",
        slug: "/playbooks/master-framework",
        desc: "Quy chuẩn kiến trúc 3 Archetypes, Cấu trúc chuẩn & Thang đo Rubrics phổ quát"
      },
      items: [
        {
          id: "community",
          title: "Community & Social",
          slug: "/playbooks/community",
          touchpoints: ["COM"],
          tier: "Tier 3",
          sections: [
            { name: "Overview", slug: "/playbooks/community/overview" },
            { name: "SOP Steps", slug: "/playbooks/community/sop-steps" },
            { name: "Do's & Don'ts", slug: "/playbooks/community/dos-donts" },
            { name: "Assessment Rubrics", slug: "/playbooks/community/assessment-rubrics" },
            { name: "Decision Logs", slug: "/playbooks/community/decision-logs" },
            { name: "FAQ", slug: "/playbooks/community/faq" }
          ]
        },
        {
          id: "marlins-workshop",
          title: "Marlins Workshop",
          slug: "/playbooks/marlins-workshop",
          touchpoints: ["WS"],
          tier: "Tier 1",
          sections: [
            { name: "Overview", slug: "/playbooks/marlins-workshop/overview" },
            { name: "Stakeholder Mapping", slug: "/playbooks/marlins-workshop/stakeholder-mapping" },
            { name: "Session Agenda", slug: "/playbooks/marlins-workshop/session-agenda" },
            { name: "SOP Steps", slug: "/playbooks/marlins-workshop/sop-steps" },
            { name: "Do's & Don'ts", slug: "/playbooks/marlins-workshop/dos-donts" },
            { name: "Assessment Rubrics", slug: "/playbooks/marlins-workshop/assessment-rubrics" },
            { name: "Decision Logs", slug: "/playbooks/marlins-workshop/decision-logs" },
            { name: "FAQ", slug: "/playbooks/marlins-workshop/faq" }
          ]
        },
        {
          id: "marlins-day",
          title: "Marlins Day",
          slug: "/playbooks/marlins-day",
          touchpoints: ["T3"],
          tier: "Tier 1",
          sections: [
            { name: "Overview", slug: "/playbooks/marlins-day/overview" },
            { name: "Stakeholder Mapping", slug: "/playbooks/marlins-day/stakeholder-mapping" },
            { name: "Session Agenda", slug: "/playbooks/marlins-day/session-agenda" },
            { name: "SOP Steps", slug: "/playbooks/marlins-day/sop-steps" },
            { name: "Do's & Don'ts", slug: "/playbooks/marlins-day/dos-donts" },
            { name: "Assessment Rubrics", slug: "/playbooks/marlins-day/assessment-rubrics" },
            { name: "Decision Logs", slug: "/playbooks/marlins-day/decision-logs" },
            { name: "FAQ", slug: "/playbooks/marlins-day/faq" }
          ]
        },
        {
          id: "trial-class",
          title: "Trial Class",
          slug: "/playbooks/trial-class",
          touchpoints: ["T1", "T2", "T4"],
          tier: "Tier 2",
          sections: [
            { name: "Overview", slug: "/playbooks/trial-class/overview" },
            { name: "Stakeholder Mapping", slug: "/playbooks/trial-class/stakeholder-mapping" },
            { name: "SOP Steps", slug: "/playbooks/trial-class/sop-steps" },
            { name: "Do's & Don'ts", slug: "/playbooks/trial-class/dos-donts" },
            { name: "Assessment Rubrics", slug: "/playbooks/trial-class/assessment-rubrics" },
            { name: "Decision Logs", slug: "/playbooks/trial-class/decision-logs" },
            { name: "FAQ", slug: "/playbooks/trial-class/faq" }
          ]
        },
        {
          id: "live-class",
          title: "Live Class",
          slug: "/playbooks/live-class",
          touchpoints: ["T5", "T6", "T7", "T8", "T9", "T13"],
          tier: "Tier 2",
          sections: [
            { name: "Overview", slug: "/playbooks/live-class/overview" },
            { name: "Stakeholder Mapping", slug: "/playbooks/live-class/stakeholder-mapping" },
            { name: "SOP Steps", slug: "/playbooks/live-class/sop-steps" },
            { name: "Do's & Don'ts", slug: "/playbooks/live-class/dos-donts" },
            { name: "Assessment Rubrics", slug: "/playbooks/live-class/assessment-rubrics" },
            { name: "Decision Logs", slug: "/playbooks/live-class/decision-logs" },
            { name: "FAQ", slug: "/playbooks/live-class/faq" }
          ]
        },
        {
          id: "family-meeting",
          title: "Family Meeting",
          slug: "/playbooks/family-meeting",
          touchpoints: ["T10"],
          tier: "Tier 1",
          sections: [
            { name: "Overview", slug: "/playbooks/family-meeting/overview" },
            { name: "Stakeholder Mapping", slug: "/playbooks/family-meeting/stakeholder-mapping" },
            { name: "Session Agenda", slug: "/playbooks/family-meeting/session-agenda" },
            { name: "SOP Steps", slug: "/playbooks/family-meeting/sop-steps" },
            { name: "Do's & Don'ts", slug: "/playbooks/family-meeting/dos-donts" },
            { name: "Assessment Rubrics", slug: "/playbooks/family-meeting/assessment-rubrics" },
            { name: "Decision Logs", slug: "/playbooks/family-meeting/decision-logs" },
            { name: "FAQ", slug: "/playbooks/family-meeting/faq" }
          ]
        },
        {
          id: "growth-story",
          title: "Growth Story",
          slug: "/playbooks/growth-story",
          touchpoints: ["T11"],
          tier: "Tier 2",
          sections: [
            { name: "Overview", slug: "/playbooks/growth-story/overview" },
            { name: "Stakeholder Mapping", slug: "/playbooks/growth-story/stakeholder-mapping" },
            { name: "SOP Steps", slug: "/playbooks/growth-story/sop-steps" },
            { name: "Do's & Don'ts", slug: "/playbooks/growth-story/dos-donts" },
            { name: "Assessment Rubrics", slug: "/playbooks/growth-story/assessment-rubrics" },
            { name: "Decision Logs", slug: "/playbooks/growth-story/decision-logs" },
            { name: "FAQ", slug: "/playbooks/growth-story/faq" }
          ]
        },
        {
          id: "next-steps",
          title: "Next Steps",
          slug: "/playbooks/next-steps",
          touchpoints: ["T12"],
          tier: "Tier 3",
          sections: [
            { name: "Overview", slug: "/playbooks/next-steps/overview" },
            { name: "SOP Steps", slug: "/playbooks/next-steps/sop-steps" },
            { name: "Do's & Don'ts", slug: "/playbooks/next-steps/dos-donts" },
            { name: "Assessment Rubrics", slug: "/playbooks/next-steps/assessment-rubrics" },
            { name: "Decision Logs", slug: "/playbooks/next-steps/decision-logs" },
            { name: "FAQ", slug: "/playbooks/next-steps/faq" }
          ]
        },
        {
          id: "referrals",
          title: "Referrals Program",
          slug: "/playbooks/referrals",
          touchpoints: ["REF"],
          tier: "Tier 3",
          sections: [
            { name: "Overview", slug: "/playbooks/referrals/overview" },
            { name: "SOP Steps", slug: "/playbooks/referrals/sop-steps" },
            { name: "Do's & Don'ts", slug: "/playbooks/referrals/dos-donts" },
            { name: "Assessment Rubrics", slug: "/playbooks/referrals/assessment-rubrics" },
            { name: "Decision Logs", slug: "/playbooks/referrals/decision-logs" },
            { name: "FAQ", slug: "/playbooks/referrals/faq" }
          ]
        }
      ]
    },
    {
      id: "requirements",
      title: "Requirements & Standards",
      slug: "/requirements",
      subItems: [
        { darId: "A6", title: "Playbooks Master Framework", slug: "/requirements/playbooks-framework", desc: "Quy chuẩn kiến trúc, Archetypes & Rubrics" },
        { darId: "A7", title: "Content Standards", slug: "/requirements/content-standards", desc: "Tiêu chuẩn nội dung & Lean Section Rule" },
        { darId: "A8", title: "DAR Template & Governance", slug: "/requirements/dar-template", desc: "Khung mẫu đánh giá CMMI DAR & Ma trận định lượng" },
        { darId: "B1", title: "UI Design System", slug: "/requirements/ui-design-system", desc: "Hệ thống Design Tokens & Component giao diện" }
      ]
    }
  ],


  journeyPhases: [
    {
      id: "phase-1",
      step: "01",
      name: "Trước Khóa Học",
      enName: "Pre-enrollment",
      timeline: "Cân nhắc & Học thử",
      badgeText: "Khám phá",
      needs: ["Clear access path (F5)", "Reassurance (E1)", "Good educational choice (S3)", "Understand progress (F1)"],
      desiredExperience: "Phụ huynh hiểu rõ triết lý giáo dục, chuẩn bị chu đáo tâm thế cho con và nhận tư vấn trung thực dựa trên bằng chứng dữ liệu.",
      actionPlaybooks: [
        { id: "community", title: "Community & Social", code: "COM", role: "Admin / Care", trigger: "Thường trực tương tác hàng ngày", slug: "/playbooks/community" },
        { id: "marlins-workshop", title: "Marlins Workshop", code: "WS", role: "Speaker / Mentors", trigger: "Tối Thứ 5 trực tuyến Zoom", slug: "/playbooks/marlins-workshop" },
        { id: "marlins-day", title: "Marlins Day", code: "T3", role: "Care Team", trigger: "Chiều Chủ Nhật định kỳ (14h - 17h)", slug: "/playbooks/marlins-day" },
        { id: "trial-class", title: "Trial Class", code: "T1 · T2 · T4", role: "Mentor + System", trigger: "Khi đăng ký & hoàn thành 2 buổi học thử", slug: "/playbooks/trial-class", highlight: true }
      ]
    },
    {
      id: "phase-2",
      step: "02",
      name: "Trong Khóa Học",
      enName: "Active Journey",
      timeline: "12 Buổi Live Class",
      badgeText: "Đồng hành",
      needs: ["Understand progress (F1)", "Child perspective (F4)", "Genuinely seen (E2)", "Early risk detection (F2)", "Shared moments (S5)"],
      desiredExperience: "Nhìn thấy sự tiến bộ thực chất bằng dữ liệu, cảm nhận con được thấu hiểu qua quan sát độc bản của Mentor và có khoảnh khắc gia đình ý nghĩa.",
      actionPlaybooks: [
        { id: "live-class", title: "Live Class Routine", code: "T5 - T13", role: "Dolphin Mentor", trigger: "Quy trình nhịp lặp lại hàng tuần (12 buổi)", slug: "/playbooks/live-class", highlight: true },
        { id: "family-meeting", title: "Family Meeting", code: "T10", role: "Mentor + Gia đình", trigger: "Cột mốc đặc biệt giữa kỳ (~Buổi 5-7)", slug: "/playbooks/family-meeting", highlight: true }
      ]
    },
    {
      id: "phase-3",
      step: "03",
      name: "Sau Khóa Học",
      enName: "Post-course",
      timeline: "Tổng kết & Tiếp tục",
      badgeText: "Gắn kết",
      needs: ["Beyond grades (S2)", "Worthwhile investment (E5)", "Actionable guidance (F3)", "Belonging (S4)"],
      desiredExperience: "Gia đình sở hữu câu chuyện trưởng thành 5 phần đầy tự hào, được định hướng lộ trình tiếp theo trung thực và gắn kết cộng đồng dài hạn.",
      actionPlaybooks: [
        { id: "growth-story", title: "Growth Story", code: "T11", role: "Mentor + System", trigger: "Tổng kết sau buổi 12", slug: "/playbooks/growth-story", highlight: true },
        { id: "next-steps", title: "Next Steps", code: "T12", role: "Academic Advisor", trigger: "Tư vấn lộ trình sau hoàn thành", slug: "/playbooks/next-steps" },
        { id: "referrals", title: "Referrals Program", code: "REF", role: "Care / Referral Link", trigger: "Sau khi hoàn thành câu chuyện trưởng thành", slug: "/playbooks/referrals" }
      ]
    }
  ]
};

export { KNOWLEDGE_HUB_DATA };

import { KNOWLEDGE_HUB_DATA } from "../data/knowledge_hub_data.js";

/**
 * Cấu trúc chuẩn hóa theo đúng A1_Sitemap.md (Phiên bản 6.0.0):
 * Gồm đúng 8 Playbooks tác nghiệp chuẩn hóa (P01 - P08).
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
        { title: "Journey Map", slug: "/journey", desc: "Bản đồ trải nghiệm 3 pha vòng đời phụ huynh" }
      ]
    },
    {
      id: "playbooks",
      title: "Playbooks",
      slug: "/playbooks",
      items: [
        {
          id: "social-media",
          title: "Social Media",
          slug: "/playbooks/social-media",
          touchpoints: ["SOC"],
          tier: "Tier 3",
          sections: [
            { name: "Overview", slug: "/playbooks/social-media/overview" },
            { name: "SOP Steps", slug: "/playbooks/social-media/sop-steps" },
            { name: "Do's & Don'ts", slug: "/playbooks/social-media/dos-donts" },
            { name: "Assessment Rubrics", slug: "/playbooks/social-media/assessment-rubrics" },
            { name: "Decision Logs", slug: "/playbooks/social-media/decision-logs" }
          ]
        },
        {
          id: "community",
          title: "Community Playbook",
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
        { darId: "A6", title: "Playbooks Framework", slug: "/requirements/playbooks-template", desc: "Quy chuẩn kiến trúc, Archetypes & Rubrics" },
        { darId: "A7", title: "Content Standards", slug: "/requirements/content-standards", desc: "Tiêu chuẩn nội dung & Lean Section Rule" },
        { darId: "A8", title: "DAR Template & Governance", slug: "/requirements/dar-template", desc: "Khung mẫu đánh giá CMMI DAR & Ma trận định lượng" },
        { darId: "B1", title: "UI Design System", slug: "/requirements/ui-design-system", desc: "Hệ thống Design Tokens & Component giao diện" },
        { darId: "B2", title: "Tech Stack Specifications", slug: "/requirements/tech-stack", desc: "Đặc tả kỹ thuật hệ thống, D1 DB Schema & Cloudflare Pages" }
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
        { id: "social-media", title: "Social Media Playbook", code: "P01", role: "Mentor", trigger: "2 bài/tuần trên Facebook cá nhân", slug: "/playbooks/social-media" },
        { id: "community", title: "Community Playbook", code: "P02", role: "Mentor & System", trigger: "Thường trực tương tác hàng ngày", slug: "/playbooks/community" },
        { id: "marlins-workshop", title: "Marlins Workshop", code: "P03", role: "Anh Đắc (Host) & Mentor", trigger: "Tối Thứ 5 trực tuyến Zoom", slug: "/playbooks/marlins-workshop" },
        { id: "marlins-day", title: "Marlins Day", code: "P04", role: "Anh Đắc (Host) & Mentor", trigger: "Chiều Chủ Nhật tại Lotte Hotel", slug: "/playbooks/marlins-day" },
        { id: "trial-class", title: "Trial Class", code: "P05", role: "Mentor & System", trigger: "Khi đăng ký & hoàn thành 2 buổi học thử", slug: "/playbooks/trial-class", highlight: true }
      ]
    },
    {
      id: "phase-2",
      step: "02",
      name: "Trong Khóa Học",
      enName: "Active 12-session Journey",
      timeline: "12 Buổi Live Class",
      badgeText: "Đồng hành",
      needs: ["Understand progress (F1)", "Child perspective (F4)", "Genuinely seen (E2)", "Early risk detection (F2)", "Shared moments (S5)"],
      desiredExperience: "Nhìn thấy sự tiến bộ thực chất bằng dữ liệu, cảm nhận con được thấu hiểu qua quan sát độc bản của Mentor, có kỷ niệm gia đình ý nghĩa và nhận Growth Story kết khóa.",
      actionPlaybooks: [
        { id: "live-class", title: "Live Class Playbook", code: "P06", role: "Mentor & System", trigger: "Quy trình nhịp lặp lại hàng tuần (12 buổi) + Growth Story Buổi 12", slug: "/playbooks/live-class", highlight: true },
        { id: "family-meeting", title: "Family Meeting", code: "P07", role: "Mentor", trigger: "Cột mốc đặc biệt giữa kỳ (~Buổi 5-7)", slug: "/playbooks/family-meeting", highlight: true }
      ]
    },
    {
      id: "phase-3",
      step: "03",
      name: "Sau Khóa Học",
      enName: "Post-course & Retention",
      timeline: "Tái tục & Lan tỏa cộng đồng",
      badgeText: "Gắn kết",
      needs: ["Beyond grades (S2)", "Worthwhile investment (E5)", "Actionable guidance (F3)", "Belonging (S4)"],
      desiredExperience: "Tiếp tục đồng hành dài hạn và trở thành đại sứ lan tỏa giá trị giáo dục Nemo12 đến bạn bè với chính sách tri ân song phương.",
      actionPlaybooks: [
        { id: "referrals", title: "Referrals Program", code: "P08", role: "System", trigger: "Chính sách ưu đãi song phương 15% - 15% Tuition Credit", slug: "/playbooks/referrals", highlight: true }
      ]
    }
  ]
};

export { KNOWLEDGE_HUB_DATA };

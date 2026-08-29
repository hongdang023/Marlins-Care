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
            { name: "Core Mindset", slug: "/playbooks/community/core-mindset" },
            { name: "Operating SOP", slug: "/playbooks/community/operating-sop" },
            { name: "Deliverables & Templates", slug: "/playbooks/community/templates" },
            { name: "Assessment Rubrics", slug: "/playbooks/community/assessment-rubrics" }
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
            { name: "Core Mindset", slug: "/playbooks/marlins-workshop/core-mindset" },
            { name: "Session Agenda", slug: "/playbooks/marlins-workshop/session-agenda" },
            { name: "Operating SOP", slug: "/playbooks/marlins-workshop/operating-sop" },
            { name: "Assessment Rubrics", slug: "/playbooks/marlins-workshop/assessment-rubrics" }
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
            { name: "Core Mindset", slug: "/playbooks/marlins-day/core-mindset" },
            { name: "Session Agenda", slug: "/playbooks/marlins-day/session-agenda" },
            { name: "Operating SOP", slug: "/playbooks/marlins-day/operating-sop" },
            { name: "Assessment Rubrics", slug: "/playbooks/marlins-day/assessment-rubrics" }
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
            { name: "Core Mindset", slug: "/playbooks/trial-class/core-mindset" },
            { name: "Operating SOP", slug: "/playbooks/trial-class/operating-sop" },
            { name: "Deliverables & Templates", slug: "/playbooks/trial-class/templates" },
            { name: "Assessment Rubrics", slug: "/playbooks/trial-class/assessment-rubrics" }
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
            { name: "Core Mindset", slug: "/playbooks/live-class/core-mindset" },
            { name: "Operating SOP", slug: "/playbooks/live-class/operating-sop" },
            { name: "Deliverables & Templates", slug: "/playbooks/live-class/templates" },
            { name: "Assessment Rubrics", slug: "/playbooks/live-class/assessment-rubrics" }
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
            { name: "Core Mindset", slug: "/playbooks/family-meeting/core-mindset" },
            { name: "Stakeholder Mapping", slug: "/playbooks/family-meeting/stakeholder-mapping" },
            { name: "Session Agenda", slug: "/playbooks/family-meeting/session-agenda" },
            { name: "Mentor Guides", slug: "/playbooks/family-meeting/mentor-guides" },
            { name: "Deliverables & Templates", slug: "/playbooks/family-meeting/templates" },
            { name: "Assessment Rubrics", slug: "/playbooks/family-meeting/assessment-rubrics" }
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
            { name: "Core Mindset", slug: "/playbooks/growth-story/core-mindset" },
            { name: "Operating SOP", slug: "/playbooks/growth-story/operating-sop" },
            { name: "Deliverables & Templates", slug: "/playbooks/growth-story/templates" },
            { name: "Assessment Rubrics", slug: "/playbooks/growth-story/assessment-rubrics" }
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
            { name: "Core Mindset", slug: "/playbooks/next-steps/core-mindset" },
            { name: "Operating SOP", slug: "/playbooks/next-steps/operating-sop" },
            { name: "Deliverables & Templates", slug: "/playbooks/next-steps/templates" },
            { name: "Assessment Rubrics", slug: "/playbooks/next-steps/assessment-rubrics" }
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
            { name: "Core Mindset", slug: "/playbooks/referrals/core-mindset" },
            { name: "Operating SOP", slug: "/playbooks/referrals/operating-sop" },
            { name: "Deliverables & Templates", slug: "/playbooks/referrals/templates" },
            { name: "Assessment Rubrics", slug: "/playbooks/referrals/assessment-rubrics" }
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

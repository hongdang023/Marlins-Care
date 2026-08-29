import { KNOWLEDGE_HUB_DATA } from "../../data/knowledge_hub_data.js";
import { SITEMAP_CONFIG } from "../data.js";

export function initSearch(onNavigate) {
  const modal = document.getElementById("search-modal");
  const input = document.getElementById("search-input");
  const resultsContainer = document.getElementById("search-results");
  const closeBtn = document.getElementById("search-close-btn");

  if (!modal || !input || !resultsContainer) return;

  const searchIndex = buildSearchIndex();

  function openModal() {
    modal.classList.remove("hidden");
    input.value = "";
    renderResults(searchIndex);
    setTimeout(() => input.focus(), 50);
  }

  function closeModal() {
    modal.classList.add("hidden");
  }

  // Keyboard shortcut Ctrl+K / Cmd+K
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (modal.classList.contains("hidden")) {
        openModal();
      } else {
        closeModal();
      }
    } else if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  // Open trigger button from header
  const triggerBtn = document.getElementById("search-trigger-btn");
  if (triggerBtn) {
    triggerBtn.addEventListener("click", openModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  input.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      renderResults(searchIndex);
      return;
    }

    const filtered = searchIndex.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(query);
      const snippetMatch = item.snippet && item.snippet.toLowerCase().includes(query);
      const categoryMatch = item.category.toLowerCase().includes(query);
      const tagMatch = item.tags && item.tags.some(t => t.toLowerCase().includes(query));
      return titleMatch || snippetMatch || categoryMatch || tagMatch;
    });

    renderResults(filtered);
  });

  function renderResults(items) {
    if (items.length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-empty-state">
          <p>Không tìm thấy tài liệu phù hợp.</p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = items.map((item, idx) => `
      <div class="search-result-item" data-slug="${item.slug}">
        <div class="search-item-header">
          <span class="search-item-icon">${item.icon}</span>
          <span class="search-item-title">${item.title}</span>
          <span class="badge badge-tag">${item.category}</span>
        </div>
        <div class="search-item-snippet">${item.snippet || ""}</div>
      </div>
    `).join("");

    resultsContainer.querySelectorAll(".search-result-item").forEach(itemEl => {
      itemEl.addEventListener("click", () => {
        const slug = itemEl.getAttribute("data-slug");
        closeModal();
        onNavigate(slug);
      });
    });
  }
}

function buildSearchIndex() {
  const index = [];

  // 1. Overview pages
  index.push(
    { title: "Why Parent Care", slug: "/overview/why-parent-care", category: "Overview", icon: "🧭", snippet: "Lý do tồn tại của Parent Care, bối cảnh 12 buổi học và Marlins Day." },
    { title: "Parent Jobs (JTBD)", slug: "/overview/parent-jobs", category: "Overview", icon: "🎯", snippet: "Ma trận Functional, Emotional và Social Jobs của phụ huynh." },
    { title: "Core Principles", slug: "/overview/core-principles", category: "Overview", icon: "⭐", snippet: "Triết lý 'Automate the evidence. Humanize the meaning' và 7 nguyên tắc." },
    { title: "Capability Map", slug: "/overview/capability-map", category: "Overview", icon: "🗺️", snippet: "Phân định năng lực System vs Mentor vs Marlins Care." }
  );

  // 2. Journey Map
  index.push({
    title: "Parent Journey Map",
    slug: "/journey",
    category: "Journey",
    icon: "🚀",
    snippet: "Bản đồ trải nghiệm 3 Pha Vòng Đời phụ huynh Nemo12."
  });

  // 3. Playbooks (8 Playbooks chuẩn theo A1_Sitemap.md)
  const playbooks = [
    { title: "Social Media Playbook (P01)", slug: "/playbooks/social-media", category: "Playbook", icon: "📱", snippet: "Kể chuyện phản tư & bằng chứng học tập trên Facebook cá nhân Mentor.", tags: ["P01", "Social Media", "Facebook", "Branding"] },
    { title: "Community Playbook (P02)", slug: "/playbooks/community", category: "Playbook", icon: "👥", snippet: "Vận hành hệ thống 3 nhóm Zalo cộng đồng đa tầng và serial case study.", tags: ["P02", "Community", "Zalo", "Case Study"] },
    { title: "Marlins Workshop Playbook (P03)", slug: "/playbooks/marlins-workshop", category: "Playbook", icon: "💡", snippet: "Live Zoom tương tác tối Thứ 5 và cổng tự học Family Portal.", tags: ["P03", "Workshop", "Zoom", "Parent LMS"] },
    { title: "Marlins Day Playbook (P04)", slug: "/playbooks/marlins-day", category: "Playbook", icon: "☀️", snippet: "Không gian đối thoại thấu cảm Fishbowl chiều Chủ Nhật tại Lotte Hotel.", tags: ["P04", "Marlins Day", "Chủ Nhật", "Fishbowl"] },
    { title: "Trial Class Playbook (P05)", slug: "/playbooks/trial-class", category: "Playbook", icon: "🧪", snippet: "Quy trình học thử 2 buổi và tham vấn Fit Judgment dựa trên dữ liệu thật.", tags: ["P05", "Trial Class", "Học thử", "Fit Judgment"] },
    { title: "Live Class Playbook (P06)", slug: "/playbooks/live-class", category: "Playbook", icon: "📚", snippet: "Vận hành 12 buổi học chính thức, báo cáo tuần và Growth Story kết khóa.", tags: ["P06", "Live Class", "Growth Story", "Weekly Pulse"] },
    { title: "Family Meeting Playbook (P07)", slug: "/playbooks/family-meeting", category: "Playbook", icon: "🏡", snippet: "Gặp gỡ trực tiếp gia đình theo khoảnh khắc ý nghĩa và lập Family Notes.", tags: ["P07", "Family Meeting", "Family Tour", "Family Notes"] },
    { title: "Referrals Program Playbook (P08)", slug: "/playbooks/referrals", category: "Playbook", icon: "🎁", snippet: "Chính sách tri ân song phương 15% - 15% Tuition Credit cho phụ huynh.", tags: ["P08", "Referrals", "Tuition Credit", "Tri ân"] }
  ];
  index.push(...playbooks);

  // 4. Requirements
  index.push(
    { title: "Playbooks Framework (A6)", slug: "/requirements/playbooks-template", category: "Requirements", icon: "📖", snippet: "Quy chuẩn kiến trúc 3 Tiers, Playbook Boilerplate Markdown & DoD L3." },
    { title: "Content Standards (A7)", slug: "/requirements/content-standards", category: "Requirements", icon: "✍️", snippet: "Tiêu chuẩn nội dung, quy tắc đặt tên tiêu đề ≤ 3 từ & văn phong thấu cảm." },
    { title: "DAR Template & Governance (A8)", slug: "/requirements/dar-template", category: "Requirements", icon: "📐", snippet: "Khung mẫu đánh giá CMMI DAR & ma trận chấm điểm định lượng." },
    { title: "UI Design System (B1)", slug: "/requirements/ui-design-system", category: "Requirements", icon: "🎨", snippet: "Hệ thống Design Tokens (Color, Typography) & UI Components." },
    { title: "Tech Stack Specifications (B2)", slug: "/requirements/tech-stack", category: "Requirements", icon: "⚡", snippet: "Đặc tả kỹ thuật hệ thống, D1 DB Schema & Cloudflare Pages." }
  );

  return index;
}

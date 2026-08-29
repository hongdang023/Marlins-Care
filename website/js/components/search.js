import { SITEMAP_CONFIG, KNOWLEDGE_HUB_DATA } from '../data.js';

export function initSearch(onNavigate) {
  const trigger = document.getElementById('search-trigger-btn');
  const modalOverlay = document.getElementById('search-modal-overlay');
  const searchInput = document.getElementById('modal-search-input');
  const resultsContainer = document.getElementById('search-results-container');
  const closeBtn = document.getElementById('search-close-btn');

  if (!trigger || !modalOverlay || !searchInput || !resultsContainer) return;

  const searchIndex = buildSearchIndex();

  function openSearch() {
    modalOverlay.classList.add('open');
    searchInput.value = '';
    searchInput.focus();
    renderResults(searchIndex.slice(0, 8)); // default recent/popular
  }

  function closeSearch() {
    modalOverlay.classList.remove('open');
  }

  trigger.addEventListener('click', openSearch);
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeSearch();
  });

  // Global Keyboard Shortcuts: Cmd+K / Ctrl+K & Escape
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modalOverlay.classList.contains('open')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closeSearch();
    }
  });

  // Search input handler
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      renderResults(searchIndex.slice(0, 8));
      return;
    }

    const filtered = searchIndex.filter(item => {
      return (
        item.title.toLowerCase().includes(query) ||
        item.snippet.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(query)))
      );
    });

    renderResults(filtered);
  });

  function renderResults(items) {
    if (items.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: var(--space-6); text-align: center; color: var(--text-muted); font-size: 14px;">
          🔍 Không tìm thấy kết quả phù hợp
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = items.map(item => `
      <div class="search-result-item" data-slug="${item.slug}">
        <div class="search-result-title">
          <span>${item.icon || '📄'}</span>
          <span>${item.title}</span>
          <span class="badge ${item.badgeClass || 'badge-tag'}" style="margin-left:auto; font-size:10px;">${item.category}</span>
        </div>
        <div class="search-result-snippet">${item.snippet}</div>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const slug = el.getAttribute('data-slug');
        if (slug) {
          closeSearch();
          onNavigate(slug);
        }
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
    title: "Interactive Parent Journey",
    slug: "/journey",
    category: "Journey",
    icon: "🚀",
    snippet: "7 Giai đoạn từ Consideration đến Continuation kèm Inspector chi tiết."
  });

  // 3. Playbooks (9 Unified Workflows)
  const playbooks = [
    { title: "Trial Care (T1, T2, T4)", slug: "/playbooks/trial-care", category: "Playbook", icon: "🧪", snippet: "Quy trình trọn gói Pre-Trial, Trial Evidence và Post-Trial Decision Support.", tags: ["T1", "T2", "T4", "Trial", "Học thử"] },
    { title: "Progress Update (T5)", slug: "/playbooks/progress-update", category: "Playbook", icon: "📊", snippet: "Báo cáo tiến độ học tập hàng tuần tự động bằng dữ liệu thực nghiệm.", tags: ["T5", "Progress", "Báo cáo"] },
    { title: "Mentor Insight (T6)", slug: "/playbooks/mentor-insight", category: "Playbook", icon: "💡", snippet: "Quan sát định tính con người, thấu hiểu tính cách và tư duy học sinh.", tags: ["T6", "Mentor", "Quan sát"] },
    { title: "Parent Support (T7, T8, T9)", slug: "/playbooks/parent-support", category: "Playbook", icon: "🛡️", snippet: "Xử lý hỗ trợ phụ huynh, cảnh báo nguy cơ học tập và triage routing.", tags: ["T7", "T8", "T9", "Support", "Rủi ro"] },
    { title: "Marlins Day (T3)", slug: "/playbooks/marlins-day", category: "Playbook", icon: "☀️", snippet: "Không gian trò chuyện chiều Chủ Nhật cùng Anh Đắc tháo gỡ ngộ nhận.", tags: ["T3", "Marlins Day", "Chủ Nhật"] },
    { title: "Milestones (T13)", slug: "/playbooks/milestones", category: "Playbook", icon: "🎉", snippet: "Tôn vinh và chúc mừng những nỗ lực bền bỉ, cột mốc tiến bộ vượt bậc.", tags: ["T13", "Milestone", "Khen ngợi"] },
    { title: "Family Experience (T10)", slug: "/playbooks/family-experience", category: "Playbook", icon: "🏡", snippet: "Gặp gỡ gia đình, thăm nhà, gắn kết niềm tin theo khoảnh khắc ý nghĩa.", tags: ["T10", "Family", "High-touch"] },
    { title: "Growth Story (T11)", slug: "/playbooks/growth-story", category: "Playbook", icon: "📖", snippet: "Hồ sơ tổng kết câu chuyện trưởng thành 5 phần sau 12 buổi học.", tags: ["T11", "Growth Story", "Tổng kết"] },
    { title: "Next Steps (T12)", slug: "/playbooks/next-steps", category: "Playbook", icon: "🌱", snippet: "Tư vấn định hướng lộ trình tiếp theo dựa trên nhu cầu thực sự của con.", tags: ["T12", "Next Steps", "Tư vấn"] }
  ];
  index.push(...playbooks);

  // 4. Decision Logs (DARs)
  if (KNOWLEDGE_HUB_DATA.dars) {
    KNOWLEDGE_HUB_DATA.dars.forEach(dar => {
      index.push({
        title: `${dar.id}: ${dar.title}`,
        slug: `/decision-logs/${slugify(dar.title)}`,
        category: "Decision Log",
        icon: "⚖️",
        snippet: dar.decision,
        tags: [dar.id, "DAR", "Kiến trúc"]
      });
    });
  }

  return index;
}

function slugify(text) {
  if (text.includes("Pulse")) return "midpoint-pulse";
  if (text.includes("Trial")) return "trial-support";
  if (text.includes("Engine") || text.includes("Intervention")) return "human-trigger";
  if (text.includes("High-touch")) return "high-touch";
  if (text.includes("Growth")) return "completion";
  return text.toLowerCase().replace(/\s+/g, '-');
}

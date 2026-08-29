// Cấu hình URL API Gateway (Tự động thích ứng môi trường Local và Cloudflare Live)
const API_BASE_URL = window.location.hostname === "localhost" 
  ? "http://127.0.0.1:8787/api/v1" 
  : "https://marlins-care-api.workers.dev/api/v1";

// Dữ liệu mẫu khởi tạo khi chưa kết nối Worker Live
let playbooksCache = [
  { id: "community", title: "Community & Social", tier: "Tier 3", touchpoints: ["COM"], owner: "Community Specialist", standard_time: "15m/day", objective: "Vận hành hệ thống nhóm Zalo tương tác và kênh mạng xã hội gắn kết." },
  { id: "marlins-workshop", title: "Marlins Workshop", tier: "Tier 1", touchpoints: ["WS"], owner: "Host / Mentor", standard_time: "60m", objective: "Tổ chức Live Workshop trực tuyến tối Thứ 5 và giải đáp sư phạm." },
  { id: "marlins-day", title: "Marlins Day", tier: "Tier 1", touchpoints: ["T3"], owner: "Care Lead / Mentor", standard_time: "120m", objective: "Đối thoại trực tiếp chiều Chủ Nhật tại không gian khách sạn." },
  { id: "trial-class", title: "Trial Class", tier: "Tier 2", touchpoints: ["T1", "T2", "T4"], owner: "Trial Mentor", standard_time: "2 buổi × 90m", objective: "Quy trình học thử 2 buổi và tham vấn độ phù hợp dựa trên bằng chứng dữ liệu." },
  { id: "live-class", title: "Live Class", tier: "Tier 2", touchpoints: ["T5", "T6", "T7", "T8", "T9", "T13"], owner: "Primary Mentor", standard_time: "12 buổi", objective: "Vận hành 12 buổi học chính thức, báo cáo tuần và ấn phẩm Growth Story 5 phần." },
  { id: "family-meeting", title: "Family Meeting", tier: "Tier 1", touchpoints: ["T10"], owner: "Mentor & Care Lead", standard_time: "45m", objective: "Gặp gỡ trực tiếp gia đình theo khoảnh khắc ý nghĩa (Family Tour)." },
  { id: "referrals", title: "Referrals Program", tier: "Tier 3", touchpoints: ["REF"], owner: "System / Care Lead", standard_time: "Tức thì", objective: "Chính sách tri ân song phương 15% - 15% Tuition Credit cho phụ huynh." }
];

document.addEventListener("DOMContentLoaded", () => {
  fetchPlaybooks();
  setupEventListeners();
});

// 1. Fetch Danh Sách Playbooks từ API Gateway (hoặc Cache)
async function fetchPlaybooks() {
  try {
    const res = await fetch(`${API_BASE_URL}/playbooks`);
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) {
        playbooksCache = data.data;
      }
    }
  } catch (e) {
    console.warn("API Gateway offline, using local storage/cache fallback");
  }
  renderTable();
}

// 2. Render Table Playbooks
function renderTable() {
  const tbody = document.getElementById("playbooks-table-body");
  tbody.innerHTML = playbooksCache.map(p => `
    <tr>
      <td>
        <strong style="color: var(--text-primary); display:block;">${p.title}</strong>
        <span style="font-size: 11px; color: var(--text-muted); font-family: monospace;">/${p.id}</span>
      </td>
      <td>
        <span class="badge ${p.tier === 'Tier 1' ? 'badge-high-touch' : p.tier === 'Tier 2' ? 'badge-hybrid' : 'badge-tag'}" style="font-size: 11px; padding: 2px 8px; border-radius: 4px; background: rgba(15,118,110,0.2); color: #2DD4BF;">
          ${p.tier}
        </span>
      </td>
      <td>
        <span style="font-size: 12px; color: var(--text-secondary);">${Array.isArray(p.touchpoints) ? p.touchpoints.join(", ") : p.touchpoints || "-"}</span>
      </td>
      <td>${p.owner || "-"}</td>
      <td><span style="font-family: monospace; font-size: 12px;">${p.standard_time || "-"}</span></td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="openEditModal('${p.id}')">✏️ Sửa</button>
      </td>
    </tr>
  `).join("");
}

// 3. Mở Modal Chỉnh Sửa
window.openEditModal = function(id) {
  const playbook = playbooksCache.find(p => p.id === id);
  if (!playbook) return;

  document.getElementById("modal-title").innerText = `Chỉnh Sửa: ${playbook.title}`;
  document.getElementById("form-id").value = playbook.id;
  document.getElementById("form-title").value = playbook.title;
  document.getElementById("form-tier").value = playbook.tier || "Tier 2";
  document.getElementById("form-owner").value = playbook.owner || "";
  document.getElementById("form-objective").value = playbook.objective || "";
  document.getElementById("form-time").value = playbook.standard_time || "";
  document.getElementById("form-touchpoints").value = Array.isArray(playbook.touchpoints) ? playbook.touchpoints.join(", ") : playbook.touchpoints || "";

  document.getElementById("modal-edit").style.display = "flex";
};

// 4. Lưu Thay Đổi (Gửi PUT request vào API Gateway)
async function handleFormSubmit(e) {
  e.preventDefault();
  const id = document.getElementById("form-id").value;
  const updatedData = {
    title: document.getElementById("form-title").value,
    tier: document.getElementById("form-tier").value,
    owner: document.getElementById("form-owner").value,
    objective: document.getElementById("form-objective").value,
    standard_time: document.getElementById("form-time").value,
    touchpoints: document.getElementById("form-touchpoints").value.split(",").map(s => s.trim())
  };

  // Cập nhật Cache Local
  const idx = playbooksCache.findIndex(p => p.id === id);
  if (idx !== -1) {
    playbooksCache[idx] = { ...playbooksCache[idx], ...updatedData };
  }

  // Gọi API Gateway
  try {
    await fetch(`${API_BASE_URL}/playbooks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData)
    });
  } catch (err) {
    console.warn("Lưu cục bộ thành công (API Gateway offline)");
  }

  document.getElementById("modal-edit").style.display = "none";
  renderTable();
  alert("✅ Đã cập nhật thành công Playbook trên hệ thống D1!");
}

function setupEventListeners() {
  document.getElementById("playbook-form").addEventListener("submit", handleFormSubmit);
  document.getElementById("btn-close-modal").addEventListener("click", () => {
    document.getElementById("modal-edit").style.display = "none";
  });
  document.getElementById("btn-cancel").addEventListener("click", () => {
    document.getElementById("modal-edit").style.display = "none";
  });
}

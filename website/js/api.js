// Cấu hình API Gateway Endpoint
const API_BASE_URL = window.location.hostname === "localhost"
  ? "http://127.0.0.1:8787/api/v1"
  : "https://marlins-care-api.workers.dev/api/v1";

export async function fetchPlaybooksFromAPI() {
  try {
    const res = await fetch(`${API_BASE_URL}/playbooks`);
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) {
        return data.data;
      }
    }
  } catch (err) {
    console.info("⚡ Đang sử dụng Local Fallback Data (API Gateway Offline)");
  }
  return null;
}

export async function fetchPlaybookBySlug(slug) {
  try {
    const res = await fetch(`${API_BASE_URL}/playbooks/${slug.replace('/playbooks/', '')}`);
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) {
        return data.data;
      }
    }
  } catch (err) {
    console.info("⚡ Đang sử dụng Local Fallback Playbook Detail");
  }
  return null;
}

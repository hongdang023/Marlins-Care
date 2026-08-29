# Nemo12 & Marlins Care Knowledge Hub

> **Hệ thống cơ sở tri thức, cẩm nang tác nghiệp & tiêu chuẩn chăm sóc phụ huynh Nemo12 & Marlins Care.**  
> **Triết lý kim chỉ nam:** *"Automate the evidence. Humanize the meaning."*

---

## 📚 Tổng Quan Kho Tri Thức (Repository Architecture)

Toàn bộ tài liệu được tổ chức theo cấu trúc module rõ ràng, đóng vai trò là "Single Source of Truth":

```text
Marlins Care/
├── A_Requirements/              # Yêu cầu nghiệp vụ, triết lý & tiêu chuẩn chuẩn hóa
│   ├── A1_Sitemap.md            # Bản đồ điều hướng website (IA Navigation)
│   ├── A2_Product_Goal_and_Vision.md
│   ├── A3_Parent_JTBD_and_Needs.md
│   ├── A4_Parent_Journey_Framework.md
│   ├── A6_Playbooks_Master_Framework.md
│   ├── A7_Content_Standards.md
│   └── A8_DAR_Template.md
│
├── B_System Design/             # Thiết kế hệ thống & Công nghệ
│   ├── B1_UI_Design_System.md   # Design Tokens (Ocean Teal, Coral), Fonts, Components
│   └── B2_Tech_Stack.md         # Đặc tả kiến trúc VitePress & Cloudflare Pages
│
├── playbooks/                   # 8 Cẩm nang tác nghiệp trọn gói (P01 - P08)
│   ├── P01_Social_Media_Playbook.md
│   ├── P02_Community_Playbook.md
│   ├── P03_Marlins_Workshop_Playbook.md
│   ├── P04_Marlins_Day_Playbook.md
│   ├── P05_Trial_Class_Playbook.md
│   ├── P06_Live_Class_Playbook.md
│   ├── P07_Family_Meeting_Playbook.md
│   └── P08_Referrals_Program_Playbook.md
│
├── website/                     # Website SPA tĩnh (Standalone Custom Web App)
│   ├── index.html               # Entry point HTML của giao diện web
│   ├── css/                     # Toàn bộ Stylesheets (design-system, layout, components)
│   ├── js/                      # Toàn bộ mã nguồn Javascript (Router, Components, Views)
│   ├── data/                    # Dữ liệu nội dung (knowledge_hub_data.js)
│   └── _headers                 # Cấu hình Security & Cache headers
├── .vitepress/                  # Cấu hình website tĩnh VitePress
│   ├── config.mts               # Điều hướng TopNav, Sidebar & Tìm kiếm ⌘K
│   └── theme/                   # Theme nhận diện Ocean Teal & Marlins Coral
│
├── package.json                 # Khai báo scripts & dependencies
└── index.md                     # Trang chủ VitePress
```

---

## ⚡ Hướng Dẫn Vận Hành & Khởi Chạy (Quickstart)

Hệ thống sử dụng **VitePress** để biên dịch trực tiếp các file Markdown thành website tài liệu tốc độ cao.

### 1. Cài đặt môi trường
```bash
npm install
```

### 2. Chạy môi trường phát triển (Dev Server)
```bash
npm run docs:dev
```
Truy cập: `http://localhost:5173` để xem giao diện trực quan.

### 3. Đóng gói & Triển khai (Build & Deploy)
```bash
npm run docs:build
```
Toàn bộ mã tĩnh được xuất ra thư mục `.vitepress/dist` sẵn sàng triển khai trên **Cloudflare Pages**.

---

## 📐 Quy Chuẩn Biên Soạn Nội Dung
Khi tạo mới hoặc cập nhật tài liệu trong hệ thống, bắt buộc tuân thủ:
- **Nguyên tắc đặt tên tiêu đề:** Tiêu đề Section tiếng Anh, tối đa 3 từ ($\le 3$ words), không emoji ở đầu dòng theo [A7_Content_Standards.md](file:///Users/danghong/Documents/Marlins%20Care/A_Requirements/A7_Content_Standards.md).
- **Quyết định kiến trúc:** Sử dụng khung [A8_DAR_Template.md](file:///Users/danghong/Documents/Marlins%20Care/A_Requirements/A8_DAR_Template.md) để đánh giá đa phương án trước khi thay đổi.

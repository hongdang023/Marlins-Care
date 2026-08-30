---
title: "Tech Stack Specifications"
description: "Đặc tả kỹ thuật hệ thống, D1 DB Schema & Cloudflare Pages"
---

# Tech Stack Specifications

> **Kiến trúc kỹ thuật, công nghệ tĩnh hóa VitePress và quy trình triển khai Cloudflare Pages.**

---

## 1. Core Stack

| Thành Phần | Công Nghệ | Vai Trò |
| :--- | :--- | :--- |
| **Documentation Engine** | **VitePress 1.6+** | Biên dịch Markdown tĩnh siêu tốc, SEO tối ưu và tích hợp Vue 3. |
| **Search Engine** | **MiniSearch (Local)** | Tìm kiếm toàn văn bản thời gian thực không phụ thuộc server ngoài. |
| **Deployment** | **Cloudflare Pages** | Phân phối toàn cầu (Global Edge CDN), phản hồi cực nhanh dưới 50ms. |
| **Design Tokens** | **CSS Variables** | Đồng bộ hệ màu Ocean Teal & Marlins Coral Light/Dark Mode. |

---

## 2. Directory Architecture

```text
├── public/                      # Static Assets (Logo, Favicon)
├── overview/                    # 1. Overview Section
├── journey/                     # 2. Parent Journey Section
├── playbooks/                   # 3. 8 Operational Playbooks
└── requirements/                # 4. Standards & Specifications
```

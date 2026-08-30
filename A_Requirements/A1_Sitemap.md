---
id: A1-SITEMAP-PC
title: "A1 · Sitemap & Navigation Architecture — Nemo12 & Marlins Care Knowledge Hub"
status: approved
version: "6.0.0"
date: "2026-08-30"
authors: ["Antigravity", "Nemo12 Design & Frontend Core", "Marlins Care Ops"]
domain: "Information Architecture, Navigation & Sitemap / Parent Care Hub"
relates_to:
  - "A6_Playbooks_Master_Framework.md"
  - "A7_Content_Standards.md"
  - "A8_DAR_Template.md"
  - "B1_UI_Design_System.md"
  - "B2_Tech_Stack.md"
---

# A1 · Sitemap & Navigation Architecture
## Nemo12 & Marlins Care Knowledge Hub

> **Triết lý kiến trúc thông tin (IA Philosophy)**:  
> *"Minimal Cognitive Load, Maximum Operational Focus, Universal Modular Schema."*  
> Bản đồ website mô tả chính xác hệ thống điều hướng trực quan người dùng trên giao diện web (Top Navbar & Left Sidebar), bao gồm **4 phân hệ chính**:
> 1. **`1. OVERVIEW`**: Định vị triết lý, JTBD của phụ huynh, nguyên tắc cốt lõi và bản đồ phân định năng lực.
> 2. **`2. PARENT JOURNEY`**: Bản đồ hành trình trải nghiệm của phụ huynh và học sinh qua các giai đoạn.
> 3. **`3. PLAYBOOKS`**: 8 Cẩm nang tác nghiệp chuẩn hóa cho đội ngũ Mentors, Hosts và Care Specialists.
> 4. **`4. REQUIREMENTS`**: Bộ tiêu chuẩn kỹ thuật, Playbooks Template, DAR Template, UI Design System và Tech Stack.

---

## 1. Master Navigation Hierarchy Tree (Cây Điều Hướng Giao Diện)

```text
NEMO12 & MARLINS CARE KNOWLEDGE HUB
│
├── 1. OVERVIEW
│   ├── Why Parent Care                     --> (/overview/why-parent-care)
│   ├── Parent Jobs (JTBD)                  --> (/overview/parent-jobs)
│   ├── Core Principles                     --> (/overview/core-principles)
│   └── Capability Map                      --> (/overview/capability-map)
│
├── 2. PARENT JOURNEY
│   └── Journey Map                         --> (/journey)
│
├── 3. PLAYBOOKS
│   ├── Social Media Playbook               --> (/playbooks/social-media)
│   ├── Community Playbook                  --> (/playbooks/community)
│   ├── Marlins Workshop Playbook           --> (/playbooks/marlins-workshop)
│   ├── Marlins Day Playbook                --> (/playbooks/marlins-day)
│   ├── Trial Class Playbook                --> (/playbooks/trial-class)
│   ├── Live Class Playbook                 --> (/playbooks/live-class)
│   ├── Family Meeting Playbook             --> (/playbooks/family-meeting)
│   └── Referrals Program Playbook          --> (/playbooks/referrals)
│
└── 4. REQUIREMENTS
    ├── Playbooks Template                  --> (/requirements/playbooks-template)
    ├── Content Standards                   --> (/requirements/content-standards)
    ├── DAR Template & Governance           --> (/requirements/dar-template)
    ├── UI Design System                    --> (/requirements/ui-design-system)
    └── Tech Stack Specifications           --> (/requirements/tech-stack)
```

---

## 2. Chi Tiết 4 Cụm Navigation Chính

### 2.1 Navigation 1: OVERVIEW (`/overview`)
*Định vị lý do tồn tại của Parent Care, giải mã nhu cầu cốt lõi của phụ huynh, triết lý vận hành và ranh giới Con người vs Hệ thống.*

| Trang (Page Title) | Route Slug | Mục đích & Trọng tâm nội dung |
| :--- | :--- | :--- |
| **Why Parent Care** | `/overview/why-parent-care` | Trả lời câu hỏi nền tảng: *Vì sao Nemo12 làm Parent Care?* Guardrails bảo vệ học sinh. |
| **Parent Jobs (JTBD)** | `/overview/parent-jobs` | Ma trận JTBD toàn diện (Functional, Emotional, Social) và ánh xạ Pain → Need → Desired Outcome. |
| **Core Principles** | `/overview/core-principles` | Triết lý kim chỉ nam: *"Automate the evidence. Humanize the meaning"* và 7 nguyên tắc vận hành. |
| **Capability Map** | `/overview/capability-map` | Ma trận phân định năng lực: Máy móc phát hiện (System) — Con người phán đoán & thấu cảm (Mentor/Host). |

---

### 2.2 Navigation 2: PARENT JOURNEY (`/journey`)
*Bản đồ trải nghiệm vòng đời phụ huynh và học sinh Nemo12 qua 3 pha vĩ mô.*

| Trang (Page Title) | Route Slug | Trọng tâm trải nghiệm |
| :--- | :--- | :--- |
| **Journey Map** | `/journey` | Bản đồ tương tác đa chiều qua 3 pha (Trước khóa học · Trong 12 buổi học · Sau khóa học) liên kết trực tiếp tới các điểm chạm tác nghiệp. |

---

### 2.3 Navigation 3: PLAYBOOKS (`/playbooks`)
*Trọng tâm tác nghiệp chuẩn hóa gồm **8 Playbooks Full-Pack** tích hợp sẵn SOPs, Rubrics, FAQ và Decision Logs.*

| Trang (Page Title) | Route Slug | Phạm vi & Điểm chạm nghiệp vụ |
| :--- | :--- | :--- |
| **Social Media Playbook** | `/playbooks/social-media` | Kể chuyện phản tư & bằng chứng học tập trên mạng xã hội cá nhân của Mentor. |
| **Community Playbook** | `/playbooks/community` | Vận hành hệ thống 3 nhóm Zalo đa tầng (2 Broadcast Public + 1 Private Interactive). |
| **Marlins Workshop Playbook** | `/playbooks/marlins-workshop` | Tổ chức Live Workshop trực tuyến tối Thứ 5 và điều phối cổng tự học. |
| **Marlins Day Playbook** | `/playbooks/marlins-day` | Đối thoại trực tiếp & điều phối không gian Fishbowl chiều Chủ Nhật tại khách sạn. |
| **Trial Class Playbook** | `/playbooks/trial-class` | Quy trình học thử 2 buổi và tham vấn độ phù hợp dựa trên bằng chứng dữ liệu. |
| **Live Class Playbook** | `/playbooks/live-class` | Vận hành 12 buổi học chính thức, báo cáo tuần và ấn phẩm Growth Story 5 phần. |
| **Family Meeting Playbook** | `/playbooks/family-meeting` | Gặp gỡ trực tiếp gia đình theo khoảnh khắc ý nghĩa (Family Tour) và lập Family Notes. |
| **Referrals Program Playbook** | `/playbooks/referrals` | Chính sách tri ân song phương 15% - 15% dạng Tuition Credit cho phụ huynh giới thiệu. |

---

### 2.4 Navigation 4: REQUIREMENTS (`/requirements`)
*Trung tâm quy chuẩn kỹ thuật, kiến trúc hệ thống và biểu mẫu chuẩn mực toàn hệ thống.*

| Trang (Page Title) | Route Slug | Nội dung quy chuẩn |
| :--- | :--- | :--- |
| **Topic Library & Pedagogy** | `/requirements/topic-library` | Hệ thống từ điển sư phạm cốt lõi (Learning Science, Learner Modeling, Environment) & 7 lăng kính tranh biện. |
| **Playbooks Template** | `/requirements/playbooks-template` | Khung cấu trúc chuẩn mực & tiêu chuẩn biên soạn Playbook trọn gói 9 phần. |
| **Content Standards** | `/requirements/content-standards` | Quy tắc đặt tên Section (Lean Rule $\le 3$ words), văn phong thấu cảm, không sáo rỗng. |
| **DAR Template & Governance** | `/requirements/dar-template` | Khung đánh giá quyết định kiến trúc chuẩn CMMI DAR với ma trận chấm điểm định lượng. |
| **UI Design System** | `/requirements/ui-design-system` | Hệ thống Design Tokens (Color Palette, Typography, Spacing) và chuẩn Components. |
| **Tech Stack Specifications** | `/requirements/tech-stack` | Đặc tả ngăn xếp công nghệ VitePress, quy chuẩn Markdown và pipeline Cloudflare Pages. |

---

## 3. Bảng Ánh Xạ Đường Dẫn Tổng Thể (Master Route Mapping)

| Top Navigation | Left Sidebar Item | Route Slug (URL) |
| :--- | :--- | :--- |
| **1. Overview** | Why Parent Care | `/overview/why-parent-care` |
| **1. Overview** | Parent Jobs (JTBD) | `/overview/parent-jobs` |
| **1. Overview** | Core Principles | `/overview/core-principles` |
| **1. Overview** | Capability Map | `/overview/capability-map` |
| **2. Parent Journey** | Journey Map | `/journey` |
| **3. Playbooks** | Social Media Playbook | `/playbooks/social-media` |
| **3. Playbooks** | Community Playbook | `/playbooks/community` |
| **3. Playbooks** | Marlins Workshop Playbook | `/playbooks/marlins-workshop` |
| **3. Playbooks** | Marlins Day Playbook | `/playbooks/marlins-day` |
| **3. Playbooks** | Trial Class Playbook | `/playbooks/trial-class` |
| **3. Playbooks** | Live Class Playbook | `/playbooks/live-class` |
| **3. Playbooks** | Family Meeting Playbook | `/playbooks/family-meeting` |
| **3. Playbooks** | Referrals Program Playbook | `/playbooks/referrals` |
| **4. Requirements** | Playbooks Template | `/requirements/playbooks-template` |
| **4. Requirements** | Content Standards | `/requirements/content-standards` |
| **4. Requirements** | DAR Template & Governance | `/requirements/dar-template` |
| **4. Requirements** | UI Design System | `/requirements/ui-design-system` |
| **4. Requirements** | Tech Stack Specifications | `/requirements/tech-stack` |

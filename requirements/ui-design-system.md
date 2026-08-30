---
title: "UI Design System"
description: "Hệ thống Design Tokens & Component giao diện"
---

# UI Design System

> **Hệ thống Design Tokens chuẩn hóa kế thừa từ Nemo12 Canonical Design System kết hợp nhận diện thương hiệu Marlins Care.**

---

## 1. Color Palette & Tokens

```css
:root {
  /* Brand Core Tokens */
  --color-primary: #0F766E;       /* Ocean Teal (Main Brand) */
  --color-primary-hover: #0D9488;
  --color-primary-soft: rgba(15, 118, 110, 0.12);
  --color-accent: #EA580C;        /* Marlins Coral (Action & Highlights) */

  /* Functional Roles & Status Badges */
  --color-system: #0284C7;        /* Blue: Automated System Evidence */
  --color-mentor: #0D9488;        /* Teal: Mentor Context & Judgment */
  --color-marlins: #EA580C;       /* Coral: Marlins Care / Reflection */
  --color-hybrid: #7C3AED;        /* Violet: System + Mentor Collaborative */
  --color-risk: #DC2626;          /* Red: Learning Risk / Concern */
  --color-milestone: #059669;     /* Emerald: Milestone Achievement */

  /* Surface & Text */
  --bg-app: #F8FAFC;
  --bg-surface: #FFFFFF;
  --text-primary: #0F172A;
  --text-secondary: #475569;
  --text-muted: #94A3B8;
  --border-subtle: #E2E8F0;
}
```

---

## 2. Typography

* **Headings & Body:** **Inter** (400, 500, 600, 700).
* **Code & Tokens:** **JetBrains Mono** (500).

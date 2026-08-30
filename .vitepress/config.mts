import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Marlins Care",
  description: "Nemo12 Parent Care Knowledge Hub & Operational Playbooks",
  lang: 'vi-VN',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#0F766E' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap', rel: 'stylesheet' }]
  ],

  themeConfig: {
    siteTitle: 'Marlins Care',
    logo: {
      light: '/logo.svg',
      dark: '/logo.svg',
      alt: 'Marlins Care Logo'
    },

    // 1. Top Navigation Bar
    nav: [
      { text: 'Tổng quan', link: '/A_Requirements/A2_Product_Goal_and_Vision' },
      { text: 'Hành trình', link: '/A_Requirements/A4_Parent_Journey_Framework' },
      { 
        text: 'Playbooks', 
        items: [
          { text: 'P01 - Social Media Playbook', link: '/C_Playbooks/P01_Social_Media_Playbook' },
          { text: 'P02 - Community Playbook', link: '/C_Playbooks/P02_Community_Playbook' },
          { text: 'P03 - Marlins Workshop Playbook', link: '/C_Playbooks/P03_Marlins_Workshop_Playbook' },
          { text: 'P04 - Marlins Day Playbook', link: '/C_Playbooks/P04_Marlins_Day_Playbook' },
          { text: 'P05 - Trial Class Playbook', link: '/C_Playbooks/P05_Trial_Class_Playbook' },
          { text: 'P06 - Live Class Playbook', link: '/C_Playbooks/P06_Live_Class_Playbook' },
          { text: 'P07 - Family Meeting Playbook', link: '/C_Playbooks/P07_Family_Meeting_Playbook' },
          { text: 'P08 - Referrals Program Playbook', link: '/C_Playbooks/P08_Referrals_Program_Playbook' }
        ]
      },
      { text: 'Tiêu chuẩn', link: '/A_Requirements/A7_Content_Standards' },
      { text: 'Quyết định (DAR)', link: '/A_Requirements/A8_DAR_Template' }
    ],

    // 2. Sidebar Navigation
    sidebar: {
      '/C_Playbooks/': [
        {
          text: 'Acquisition & Onboarding',
          collapsed: false,
          items: [
            { text: 'P01 - Social Media', link: '/C_Playbooks/P01_Social_Media_Playbook' },
            { text: 'P02 - Community', link: '/C_Playbooks/P02_Community_Playbook' },
            { text: 'P03 - Marlins Workshop', link: '/C_Playbooks/P03_Marlins_Workshop_Playbook' },
            { text: 'P04 - Marlins Day', link: '/C_Playbooks/P04_Marlins_Day_Playbook' }
          ]
        },
        {
          text: 'Core Retention & Growth',
          collapsed: false,
          items: [
            { text: 'P05 - Trial Class', link: '/C_Playbooks/P05_Trial_Class_Playbook' },
            { text: 'P06 - Live Class', link: '/C_Playbooks/P06_Live_Class_Playbook' },
            { text: 'P07 - Family Meeting', link: '/C_Playbooks/P07_Family_Meeting_Playbook' },
            { text: 'P08 - Referrals Program', link: '/C_Playbooks/P08_Referrals_Program_Playbook' }
          ]
        }
      ],
      '/A_Requirements/': [
        {
          text: 'Yêu Cầu & Định Hướng',
          collapsed: false,
          items: [
            { text: 'A1 - Sitemap & Kiến Trúc', link: '/A_Requirements/A1_Sitemap' },
            { text: 'A2 - Mục Tiêu & Tầm Nhìn', link: '/A_Requirements/A2_Product_Goal_and_Vision' },
            { text: 'A3 - JTBD & Nhu Cầu Phụ Huynh', link: '/A_Requirements/A3_Parent_JTBD_and_Needs' },
            { text: 'A4 - Khung Hành Trình Phụ Huynh', link: '/A_Requirements/A4_Parent_Journey_Framework' },
            { text: 'A6 - Playbooks Template', link: '/A_Requirements/A6_Playbooks_Template' },
            { text: 'A7 - Tiêu Chuẩn Nội Dung', link: '/A_Requirements/A7_Content_Standards' },
            { text: 'A8 - DAR Template & Quản Trị', link: '/A_Requirements/A8_DAR_Template' },
            { text: 'A9 - Topic Library & Sư Phạm', link: '/A_Requirements/A9_Topic_Library_and_Pedagogy_Standards' }
          ]
        }
      ],
      '/B_System Design/': [
        {
          text: 'Thiết Kế Hệ Thống',
          collapsed: false,
          items: [
            { text: 'B1 - UI Design System', link: '/B_System Design/B1_UI_Design_System' },
            { text: 'B2 - Tech Stack Specifications', link: '/B_System Design/B2_Tech_Stack' }
          ]
        }
      ]
    },

    // 3. Search Engine (MiniSearch Local Index)
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Tìm kiếm tài liệu...',
                buttonAriaLabel: 'Tìm kiếm'
              },
              modal: {
                noResultsText: 'Không tìm thấy kết quả phù hợp',
                resetButtonTitle: 'Xóa tìm kiếm',
                footer: {
                  selectText: 'để chọn',
                  navigateText: 'để điều hướng',
                  closeText: 'để đóng'
                }
              }
            }
          }
        }
      }
    },

    // 4. Footer & Social / Meta
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    docFooter: {
      prev: 'Trang trước',
      next: 'Trang tiếp theo'
    },
    darkModeSwitchLabel: 'Giao diện',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Lên đầu trang ↑'
  }
})

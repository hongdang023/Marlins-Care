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
      { text: 'Overview', link: '/A_Requirements/A2_Product_Goal_and_Vision' },
      { text: 'Parent Journey', link: '/A_Requirements/A4_Parent_Journey_Framework' },
      { text: 'Playbooks', link: '/C_Playbooks/P01_Social_Media_Playbook' },
      { text: 'Requirements', link: '/A_Requirements/A9_Topic_Library_and_Pedagogy_Standards' }
    ],

    // 2. Sidebar Navigation (Unified 4-section Architecture)
    sidebar: [
      {
        text: '1. OVERVIEW',
        collapsed: false,
        items: [
          { text: 'Why Parent Care', link: '/A_Requirements/A2_Product_Goal_and_Vision' },
          { text: 'Parent Jobs (JTBD)', link: '/A_Requirements/A3_Parent_JTBD_and_Needs' },
          { text: 'Core Principles', link: '/A_Requirements/A2_Product_Goal_and_Vision#golden-principles' },
          { text: 'Capability Map', link: '/A_Requirements/A4_Parent_Journey_Framework#persistent-capabilities' }
        ]
      },
      {
        text: '2. PARENT JOURNEY',
        collapsed: false,
        items: [
          { text: 'Journey Map', link: '/A_Requirements/A4_Parent_Journey_Framework' }
        ]
      },
      {
        text: '3. PLAYBOOKS',
        collapsed: false,
        items: [
          { text: 'Social Media', link: '/C_Playbooks/P01_Social_Media_Playbook' },
          { text: 'Community Playbook', link: '/C_Playbooks/P02_Community_Playbook' },
          { text: 'Marlins Workshop', link: '/C_Playbooks/P03_Marlins_Workshop_Playbook' },
          { text: 'Marlins Day', link: '/C_Playbooks/P04_Marlins_Day_Playbook' },
          { text: 'Trial Class', link: '/C_Playbooks/P05_Trial_Class_Playbook' },
          { text: 'Live Class', link: '/C_Playbooks/P06_Live_Class_Playbook' },
          { text: 'Family Meeting', link: '/C_Playbooks/P07_Family_Meeting_Playbook' },
          { text: 'Referrals Program', link: '/C_Playbooks/P08_Referrals_Program_Playbook' }
        ]
      },
      {
        text: '4. REQUIREMENTS & STANDARDS',
        collapsed: false,
        items: [
          { text: 'Topic Library & Pedagogy', link: '/A_Requirements/A9_Topic_Library_and_Pedagogy_Standards' },
          { text: 'Playbooks Framework', link: '/A_Requirements/A6_Playbooks_Template' },
          { text: 'Content Standards', link: '/A_Requirements/A7_Content_Standards' },
          { text: 'DAR Template & Governance', link: '/A_Requirements/A8_DAR_Template' },
          { text: 'UI Design System', link: '/B_System Design/B1_UI_Design_System' },
          { text: 'Tech Stack Specifications', link: '/B_System Design/B2_Tech_Stack' }
        ]
      }
    ],

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

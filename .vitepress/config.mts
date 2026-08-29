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
      { text: 'Overview', link: '/overview/why-parent-care' },
      { text: 'Parent Journey', link: '/journey' },
      { text: 'Playbooks', link: '/C_Playbooks/P01_Social_Media_Playbook' },
      { text: 'Requirements', link: '/requirements/playbooks-framework' }
    ],

    // 2. Sidebar Navigation
    sidebar: {
      '/overview/': [
        {
          text: '1. Overview',
          items: [
            { text: 'Why Parent Care', link: '/overview/why-parent-care' },
            { text: 'Parent Jobs (JTBD)', link: '/overview/parent-jobs' },
            { text: 'Core Principles', link: '/overview/core-principles' },
            { text: 'Capability Map', link: '/overview/capability-map' }
          ]
        }
      ],
      '/journey': [
        {
          text: '2. Parent Journey',
          items: [
            { text: 'Journey Map', link: '/journey' }
          ]
        }
      ],
      '/C_Playbooks/': [
        {
          text: '3. Playbooks',
          items: [
            { text: 'Social Media Playbook', link: '/C_Playbooks/P01_Social_Media_Playbook' },
            { text: 'Community Playbook', link: '/C_Playbooks/P02_Community_Playbook' },
            { text: 'Marlins Workshop Playbook', link: '/C_Playbooks/P03_Marlins_Workshop_Playbook' },
            { text: 'Marlins Day Playbook', link: '/C_Playbooks/P04_Marlins_Day_Playbook' },
            { text: 'Trial Class Playbook', link: '/C_Playbooks/P05_Trial_Class_Playbook' },
            { text: 'Live Class Playbook', link: '/C_Playbooks/P06_Live_Class_Playbook' },
            { text: 'Family Meeting Playbook', link: '/C_Playbooks/P07_Family_Meeting_Playbook' },
            { text: 'Referrals Program Playbook', link: '/C_Playbooks/P08_Referrals_Program_Playbook' }
          ]
        }
      ],
      '/requirements/': [
        {
          text: '4. Requirements',
          items: [
            { text: 'Playbooks Template', link: '/requirements/playbooks-template' },
            { text: 'Content Standards', link: '/requirements/content-standards' },
            { text: 'DAR Template & Governance', link: '/requirements/dar-template' },
            { text: 'UI Design System', link: '/requirements/ui-design-system' },
            { text: 'Tech Stack Specifications', link: '/requirements/tech-stack' }
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

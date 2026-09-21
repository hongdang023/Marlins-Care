import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Marlins Care",
  description: "Nemo12 Parent Care Knowledge Hub & Operational Playbooks",
  lang: 'vi-VN',
  
  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
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
      { text: 'Parent Journey', link: '/journey/' },
      { text: 'Playbooks', link: '/playbooks/social-media/overview' },
      { text: 'Requirements', link: '/requirements/topic-library' },
      { text: 'GTM Plan', link: '/gtm-plan/sep-2026' }
    ],

    // 2. Sidebar Navigation (Unified 4-section Architecture)
    sidebar: [
      {
        text: '1. OVERVIEW',
        collapsed: false,
        items: [
          { text: 'Why Parent Care', link: '/overview/why-parent-care' },
          { text: 'Parent Jobs (JTBD)', link: '/overview/parent-jobs' },
          { text: 'Core Principles', link: '/overview/core-principles' },
          { text: 'Capability Map', link: '/overview/capability-map' }
        ]
      },
      {
        text: '2. PARENT JOURNEY',
        collapsed: false,
        items: [
          { text: 'Journey Map', link: '/journey/' }
        ]
      },
      {
        text: '3. PLAYBOOKS',
        collapsed: false,
        items: [
          {
            text: 'Social Media',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/playbooks/social-media/overview' },
              { text: 'Core Mindset', link: '/playbooks/social-media/core-mindset' },
              { text: 'Framework', link: '/playbooks/social-media/framework' },
              { text: 'SOP Steps', link: '/playbooks/social-media/sop-steps' },
              { text: "Do's & Don'ts", link: '/playbooks/social-media/dos-donts' },
              { text: 'Assessment Rubrics', link: '/playbooks/social-media/assessment-rubrics' },
              { text: 'Privacy Guidelines', link: '/playbooks/social-media/privacyguidelines' },
              { text: 'FAQ', link: '/playbooks/social-media/faq' },
              { text: 'Decision Logs', link: '/playbooks/social-media/decision-logs' }
            ]
          },
          {
            text: 'Community Playbook',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/playbooks/community/overview' },
              { text: 'Framework', link: '/playbooks/community/framework' },
              { text: 'SOP Steps', link: '/playbooks/community/sop-steps' },
              { text: 'Templates', link: '/playbooks/community/templates' },
              { text: "Do's & Don'ts", link: '/playbooks/community/dos-donts' },
              { text: 'Assessment Rubrics', link: '/playbooks/community/assessment-rubrics' },
              { text: 'FAQ', link: '/playbooks/community/faq' },
              { text: 'Decision Logs', link: '/playbooks/community/decision-logs' }
            ]
          },
          {
            text: 'Marlins Workshop',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/playbooks/marlins-workshop/overview' },
              { text: 'Core Mindset', link: '/playbooks/marlins-workshop/core-mindset' },
              { text: 'Framework', link: '/playbooks/marlins-workshop/framework' },
              { text: 'Session Agenda', link: '/playbooks/marlins-workshop/session-agenda' },
              { text: 'SOP Steps', link: '/playbooks/marlins-workshop/sop-steps' },
              { text: "Do's & Don'ts", link: '/playbooks/marlins-workshop/dos-donts' },
              { text: 'Assessment Rubrics', link: '/playbooks/marlins-workshop/assessment-rubrics' },
              { text: 'FAQ', link: '/playbooks/marlins-workshop/faq' },
              { text: 'Decision Logs', link: '/playbooks/marlins-workshop/decision-logs' }
            ]
          },

          {
            text: 'Live Class',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/playbooks/live-class/overview' },
              { text: 'SOP Steps', link: '/playbooks/live-class/sop-steps' },
              { text: "Do's & Don'ts", link: '/playbooks/live-class/dos-donts' },
              { text: 'Assessment Rubrics', link: '/playbooks/live-class/assessment-rubrics' },
              { text: 'FAQ', link: '/playbooks/live-class/faq' },
              { text: 'Decision Logs', link: '/playbooks/live-class/decision-logs' }
            ]
          },
          {
            text: 'Family Meeting',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/playbooks/family-meeting/overview' },
              { text: 'Stakeholder Mapping', link: '/playbooks/family-meeting/stakeholder-mapping' },
              { text: 'Needed Information', link: '/playbooks/family-meeting/needed-information' },
              { text: 'Session Agenda', link: '/playbooks/family-meeting/session-agenda' },
              { text: 'SOP Steps', link: '/playbooks/family-meeting/sop-steps' },
              { text: 'Family Notes Template', link: '/playbooks/family-meeting/family-notes-template' },
              { text: 'Reflection Report', link: '/playbooks/family-meeting/reflection-report' },
              { text: "Do's & Don'ts", link: '/playbooks/family-meeting/dos-donts' },
              { text: 'Assessment Rubrics', link: '/playbooks/family-meeting/assessment-rubrics' },
              { text: 'FAQ', link: '/playbooks/family-meeting/faq' },
              { text: 'Decision Logs', link: '/playbooks/family-meeting/decision-logs' }
            ]
          },
          {
            text: 'Referrals Program',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/playbooks/referrals/overview' },
              { text: 'Framework', link: '/playbooks/referrals/framework' },
              { text: 'SOP Steps', link: '/playbooks/referrals/sop-steps' },
              { text: "Do's & Don'ts", link: '/playbooks/referrals/dos-donts' },
              { text: 'Assessment Rubrics', link: '/playbooks/referrals/assessment-rubrics' },
              { text: 'FAQ', link: '/playbooks/referrals/faq' },
              { text: 'Decision Logs', link: '/playbooks/referrals/decision-logs' }
            ]
          }
        ]
      },
      {
        text: '4. REQUIREMENTS & STANDARDS',
        collapsed: false,
        items: [
          { text: 'Topic Library & Pedagogy', link: '/requirements/topic-library' },
          { text: 'Playbooks Framework', link: '/requirements/playbooks-template' },
          { text: 'Content Standards', link: '/requirements/content-standards' },
          { text: 'DAR Template & Governance', link: '/requirements/dar-template' },
          { text: 'UI Design System', link: '/requirements/ui-design-system' },
          { text: 'Tech Stack Specifications', link: '/requirements/tech-stack' }
        ]
      },
      {
        text: '5. GTM PLAN',
        collapsed: false,
        items: [
          { text: 'Sep 2026', link: '/gtm-plan/sep-2026' }
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

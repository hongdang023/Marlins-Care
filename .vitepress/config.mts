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
            text: 'Marlins Day',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/playbooks/marlins-day/overview' },
              { text: 'Core Mindset', link: '/playbooks/marlins-day/core-mindset' },
              { text: 'Stakeholder Mapping', link: '/playbooks/marlins-day/stakeholder-mapping' },
              { text: 'Session Agenda', link: '/playbooks/marlins-day/session-agenda' },
              { text: 'SOP Steps', link: '/playbooks/marlins-day/sop-steps' },
              { text: "Do's & Don'ts", link: '/playbooks/marlins-day/dos-donts' },
              { text: 'Assessment Rubrics', link: '/playbooks/marlins-day/assessment-rubrics' },
              { text: 'FAQ', link: '/playbooks/marlins-day/faq' },
              { text: 'Decision Logs', link: '/playbooks/marlins-day/decision-logs' }
            ]
          },
          {
            text: 'Trial Class',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/playbooks/trial-class/overview' },
              { text: 'Stakeholder Mapping', link: '/playbooks/trial-class/stakeholder-mapping' },
              { text: 'Session Agenda', link: '/playbooks/trial-class/session-agenda' },
              { text: 'SOP Steps', link: '/playbooks/trial-class/sop-steps' },
              { text: 'School Adapters', link: '/playbooks/trial-class/school-adapters' },
              { text: "Do's & Don'ts", link: '/playbooks/trial-class/dos-donts' },
              { text: 'Assessment Rubrics', link: '/playbooks/trial-class/assessment-rubrics' },
              { text: 'FAQ', link: '/playbooks/trial-class/faq' },
              { text: 'Decision Logs', link: '/playbooks/trial-class/decision-logs' }
            ]
          },
          {
            text: 'Live Class',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/playbooks/live-class/overview' },
              { text: 'Stakeholder Mapping', link: '/playbooks/live-class/stakeholder-mapping' },
              { text: 'Session Agenda', link: '/playbooks/live-class/session-agenda' },
              { text: 'SOP Steps', link: '/playbooks/live-class/sop-steps' },
              { text: 'School Adapters', link: '/playbooks/live-class/school-adapters' },
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
              { text: 'Session Agenda', link: '/playbooks/family-meeting/session-agenda' },
              { text: 'SOP Steps', link: '/playbooks/family-meeting/sop-steps' },
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

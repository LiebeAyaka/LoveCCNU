import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LoveCCNU",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        '/入学必备/': [
          {
            text: '入学必备',
            item: [
              { text: '入学需要带的材料', link: '/入学必备/' },
              { text: '日常生活用品', link: '/入学必备/日常生活用品' },
              { text: '如何去华师', link: '/入学必备/如何去华师' },
              { text: '入学考试', link: '/入学必备/入学考试' },
              { text: '校园网', link: '/入学必备/校园网' },
              { text: '常用app', link: '/入学必备/常用app' },
              { text: '常用网站', link: '/入学必备/常用网站' },
              { text: '提供意见', link: '/入学必备/提供意见或帮助我' },
              { text: '致谢', link: '/入学必备/致谢' }
            ]
          }
        ],

        '/学在华大/': [
          {
            text: '学在华大',
            item: [
              { text: '首页', link: '/学在华大/' },
              { text: '专业人培', link: '/学在华大/专业人培' },
              { text: '学院机构', link: '/学在华大/学院机构' },
              { text: '转专业', link: '/学在华大/转专业' }
            ]
          }
        ],

        '/生活娱乐/': [
          {
            text: '生活娱乐',
            item: [
              { text: '首页', link: '/生活娱乐/' },
              { text: '吃饭篇概况', link: '/生活娱乐/吃饭篇概况' },
              { text: '校内出行', link: '/生活娱乐/校内出行' },
              { text: '校外公共交通', link: '/生活娱乐/校外公共交通' },
              { text: '武汉哪里可以玩', link: '/生活娱乐/武汉哪里可以玩' }
            ]
          }
        ],

        '/住在华大/': [
          {
            text: '住在华大',
            item: [
              { text: '首页', link: '/住在华大/' },
              { text: '住宿情况概要', link: '/住在华大/住宿情况概要' },
              { text: '住宿生活改善', link: '/住在华大/住宿生活改善' },
              { text: '医疗服务', link: '/住在华大/医疗服务' }
            ]
          }
        ]
      }
    ]
  },

  socialLinks: [
    { icon: 'github', link: 'https://github.com/LiebeAyaka/LoveCCNU' }
  ]
})

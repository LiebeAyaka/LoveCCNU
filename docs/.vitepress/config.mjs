import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LoveCCNU",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/入学必备/': [
        {
          text: '入学必备',
          items: [
            { text: '入学需要带的材料', link: '/入学必备/' },
            { text: '日常生活用品', link: '/入学必备/日常生活用品' },
            { text: '如何去华师', link: '/入学必备/如何去华师' },
            { text: '入学考试', link: '/入学必备/入学考试' },
            { text: '军训', link: '/入学必备/军训' },
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
          items: [
            { text: '各专业人培', link: '/学在华大/' },
            { text: '转专业', link: '/学在华大/转专业' },
            { text: '评优评先保研', link: '/学在华大/评优评先' },
            { text: '图书馆', link: '/学在华大/图书馆' },
            { text: '学习生活', link: '/学在华大/学习生活' }
          ]
        }
      ],

      '/生活娱乐/': [
        {
          text: '生活娱乐',
          items: [
            { text: '吃饭篇概况', link: '/生活娱乐/' },
            { text: '校内出行', link: '/生活娱乐/校内出行' },
            { text: '校外公共交通', link: '/生活娱乐/校外公共交通' },
            { text: '武汉哪里可以玩', link: '/生活娱乐/武汉哪里可以玩' }
          ]
        }
      ],

      '/住在华大/': [
        {
          text: '住在华大',
          items: [
            { text: '首页', link: '/住在华大/' },
            { text: '住宿情况概要', link: '/住在华大/住宿情况概要' },
            { text: '住宿生活改善', link: '/住在华大/住宿生活改善' },
            { text: '医疗服务', link: '/住在华大/医疗服务' }
          ]
        }
      ],

      '/校园活动/':[
        {
          text:'校园活动',
          items:[
            { text: '社团目录', link: '/校园活动/' },
            { text: '校园媒体', link: '/校园活动/校园媒体' },
            { text: '学生部门', link: '/校园活动/学生部门' },
            { text: '大型活动', link: '/校园活动/大型活动' },
          ]
        }
      ]

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LiebeAyaka/LoveCCNU' }
    ]
  }
})

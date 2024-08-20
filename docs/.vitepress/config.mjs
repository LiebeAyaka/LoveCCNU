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
    ],

    sidebar: {
      '/入学必备/': [
        {
          text: '入学必备',
          items: [
            { text: '入学需要带的材料', link: '/入学必备/' },
            { text: '日常生活用品', link: '/入学必备/日常生活用品' },
            { text: '如何去华师', link: '/入学必备/如何去华师' },
            { text: '酒店睿评', link: '/入学必备/酒店睿评' },
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
            { text: '吃在华大', link: '/生活娱乐/',
              items: [
                { text: '东一', link: '/生活娱乐/detalle/东一' },
                { text: '东二', link: '/生活娱乐/detalle/东二' },
                { text: '学子', link: '/生活娱乐/detalle/学子' },
                { text: '桂香园', link: '/生活娱乐/detalle/桂香园' },
                { text: '沁园春', link: '/生活娱乐/detalle/沁园春' },
                { text: '南湖', link: '/生活娱乐/detalle/南湖' },
              ]
            },
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
            { text: '寝室介绍', link: '/住在华大/',
              items: [
                { text: '东一~九', link: '/住在华大/detalle/东区1-9'},
                { text: '东十~十八', link: '/住在华大/detalle/东区10-18'},
                { text: '西区', link: '/住在华大/detalle/西区'},
                { text: '元宝山', link: '/住在华大/detalle/元宝山'},
                { text: '南湖', link: '/住在华大/detalle/南湖'},
              ]
            },
            { text: '住宿情况概要', link: '/住在华大/住宿情况概要' },
            { text: '住宿生活改善', link: '/住在华大/住宿生活改善' },
            { text: '医疗服务', link: '/住在华大/医疗服务' },
          ]
        }
      ],

      '/校园活动/':[
        {
          text:'校园活动',
          items:[
            { text: '社团目录', link: '/校园活动/' },
            { text: '校园媒体', link: '/校园活动/校园媒体' },
            { 
              text: '学生部门', 
              link: '/校园活动/学生部门',
              items: [
                { text: '年级学生会', link: '/校园活动/年级学生会' },
                { text: '班委会', link: '/校园活动/班委会'}
              ]
            },
            { text: '大型活动', link: '/校园活动/大型活动' },
          ]
        }
      ],

      '/华师地标/':[
        {
          text: '华师地标',
          items: [
            { text: '华师地标', link: '/华师地标/' },
            { text: '教学楼', link: '/华师地标/教学楼'},
            { text: '体育课在哪上', link: '/华师地标/体育课在哪上'},
            { text: 'yy楼怎么走', link: '/华师地标/yy楼怎么走'},
          ]
        }
      ],

      '新生入学教育':[{text: '题库', link:'新生入学教育'},],
      
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LiebeAyaka/LoveCCNU' }
    ]
  }
})

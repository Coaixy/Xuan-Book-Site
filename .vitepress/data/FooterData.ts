import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  beian: {
    icp: '浙ICP备2024132053号-1',
    // police: '粤公网安备44200102445449号',
    showIcon: true
  },
  author: {
    name: 'Theo-Messi',
    link: 'https://github.com/Theo-Messi'
  },
  group: [
    {
      title: '开源申明',
      icon: 'mdi:github',
      links: [
        {
          name: 'Theo-Docs',
          link: 'https://github.com/Theo-Messi/Theo-Docs'
        },
        {
          name: '玄学宝典',
          link: 'https://github.com/Theo-Messi/xx.theojs.cn'
        },
        {
          name: '常用配置文件',
          link: 'https://github.com/Theo-Messi/dotfiles'
        },
        {
          name: 'Lumen',
          link: 'https://github.com/Theo-Messi/lumen'
        }
      ]
    },
    {
      title: '合作伙伴',
      icon: 'mdi:partnership',
      links: [
        {
          name: '鬼谷奇门',
          icon: 'el:fire',
          color: 'rgba(255, 87, 51, 1)',
          link: 'https://guiguqimen.com'
        },
        { name: '灵启天玑', link: 'https://ai.diviner.fun' },
        { name: '奈飞小铺', link: 'https://ihezu.love/UKTer6' },
        {
          name: '寻智启明',
          link: 'https://chat.diviner.fun'
        },
      ]
    },
    // {
    //   title: '观影指南',
    //   icon: 'mdi:local-movies',
    //   links: [
    //     {
    //       name: 'Netflix',
    //       link: 'https://doc.theojs.cn/streaming/Netflix-guide'
    //     },
    //     {
    //       name: 'Disney+',
    //       link: 'https://doc.theojs.cn/streaming/Disney-introduce'
    //     },
    //     {
    //       name: 'Spotify Premium',
    //       link: 'https://doc.theojs.cn/streaming/Spotify'
    //     },
    //     {
    //       name: 'YouTube Premium',
    //       link: 'https://doc.theojs.cn/streaming/YouTube'
    //     },
    //     { name: 'Hulu', link: 'https://doc.theojs.cn/streaming/Hulu' },
    //     { name: 'HBO Max', link: 'https://doc.theojs.cn/streaming/HBO-Max' }
    //   ]
    // },
    {
      title: '相关链接',
      icon: 'mdi:link-variant',
      links: [
        { name: 'Theo-Docs', link: 'https://doc.theojs.cn/' },
        // { name: '玄学宝典', link: 'https://xx.theojs.cn/' },
        { name: 'VitePress', link: 'https://vitepress.dev/' }
      ]
    }
  ]
}

import { defineStore } from 'pinia';

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [
      {
        name: 'Y2磨砂MAX',
        image: './mmexportef8caf2ba684b989d2314a6a3d8890a2_1747916193027.webp',
        link: 'https://e.tb.cn/h.6uftpgN1qxGjHOq?tk=YO3VVkf7j13',
      },
      {
        name: 'Y3超白pro',
        image: './mmexportd4253129c7ec4e40bb771d73b5595a38_1747916210517.webp',
        link: 'https://e.tb.cn/h.6u2l6b50eZ7veWE?tk=yTWmVkf7KVK',
      },
      {
        name: 'Y4磨砂猛男粉',
        image: './mmexport1bbc4d4170fe800deae3b432160c3a3a_1747916222143.webp',
        link: 'https://e.tb.cn/h.6ufu6MJn5Ty9Svj?tk=F9CWVkf8i3U',
      },
      {
        name: 'Y10乳白pro',
        image: './mmexportef9a6c64518a96c3b134bf861d092bab_1747916232272.webp',
        link: 'https://e.tb.cn/h.6u2MlMZbqYHQOk7?tk=o6ccVkfQKv6',
      },
      {
        name: 'R1润一下 润油笔',
        image: './mmexportd60ad6a2463ce215ef2e455f4d34e220_1747916244303.webp',
        link: 'https://e.tb.cn/h.6ufuCYRaqg5xe8G?tk=Iz9IVkfjQUo',
      },
      {
        name: '战术韭菜 电池',
        image: './mmexportb2ac29e6ed345a5f69be5169ed397e8f_1747916256507.webp',
        link: 'https://e.tb.cn/h.6u2or0b5xtuH2Na?tk=wLRFVkfPgTn',
      },
      {
        name: '电手转换线',
        image: './mmexport0d79650658882dcc57141d89f56afda1_1747916266589.webp',
        link: 'https://e.tb.cn/h.6u5xRrHtEGg4k0X?tk=Ofo1VkfOPLC',
      },
      {
        name: 'Y8夜光水弹',
        image: './mmexporta388c32d4d8db6fad987881c6e184086_1747916276597.webp',
        link: 'https://e.tb.cn/h.6uRuHJdx3WNuuzj?tk=TsitVkfm1C9',
      },
      {
        name: '惩罚者改水套件',
        image: './mmexporta6c5e1b3d5003bd0f288a6b4ba4999ae_1747916286215.webp',
        link: 'https://e.tb.cn/h.6ufzbJKKiaKzbJN?tk=9avUVkfn6nA',
      },
      {
        name: '战术韭菜厂服定制',
        image: './mmexportde1b72feca4ab9c169e6239d56a603c9_1747916294802.webp',
        link: 'https://e.tb.cn/h.6ugaXhYMLR801tX?tk=Q7pVVkfM59Y',
      },
    ],
    testData: [
      {
        title: '电池测试',
        link: 'https://docs.qq.com/sheet/DQ1NBQWtkdWNXYlJD?tab=BB08J2',
        icon: 'fas fa-bolt',
      },
      {
        title: '水弹测试数据',
        link: 'https://docs.qq.com/sheet/DQ1ZNR2psb3BJS0Ft?tab=BB08J2',
        icon: 'fas fa-tint',
      },
    ],
    announcements: [
      {
        title: '新品发布：Y8夜光水弹',
        date: '2025-05-20',
        content: '战术韭菜推出全新Y8夜光水弹，夜战利器，点亮你的wargame体验！',
      },
      {
        title: '社区活动公告',
        date: '2025-05-15',
        content: '战术韭菜厂服，定制你的唯一编号！',
      },
      {
        title: '产品升级通知',
        date: '2025-05-10',
        content: 'Y3超白pro已升级，性能更优，欢迎体验！',
      },
    ],
  }),
});
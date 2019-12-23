module.exports = {
  title: "金卡智能IC卡",
  description: "Just playing around",
  head: [
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: `/img/favicon.ico` }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: "/img/logo.png",
    nav: [
      // {
      //   text: "API",
      //   ariaLabel: "Language Menu",
      //   items: [
      //     { text: "发票平台", link: "/life/invoice/" },
      //     { text: "缴费平台", link: "/presented/pay/" }
      //   ]
      // },
      // { text: "工具", link: "/guide/hello" },
      { text: "关于我们", link: "http://www.china-goldcard.com/" }
    ],
    /* 
      '/',
      '/guide/hello',
      '/guide/',
      '/hello'
     */
    sidebar: {
      "/life/": [
        {
          title: "金卡IC卡",
          sidebarDepth: 1, // 可选的, 默认值是 1,
          children: [
            "invoice/",
            // "invoice/business_overview.md",
            "invoice/invoice_issuing.md",
            "invoice/red_ink.md",
            "invoice/invoice_search.md",
            "invoice/appendix.md",
            "invoice/appendix_two.md"
          ]
        }
      ]
    },
    smoothScroll: true // 顺滑回滚
  }
};

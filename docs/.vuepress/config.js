module.exports = {
  title: "开放平台",
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
      {
        text: "API",
        ariaLabel: "Language Menu",
        items: [
          { text: "发票平台", link: "/life/invoice/" },
          { text: "缴费平台", link: "/presented/pay/" }
        ]
      },
      { text: "工具", link: "/guide/hello" },
      { text:"关于我们", link:"http://www.china-goldcard.com/"}
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
          title: "电子发票平台",
          sidebarDepth: 1, // 可选的, 默认值是 1,
          children: [
            "invoice/",
            "invoice/business_overview.md",
            "invoice/invoice_issuing.md",
            "invoice/red_ink.md",
            "invoice/invoice_search.md",
            "invoice/appendix.md"
          ]
        },
        {
          title: "短信平台",
          sidebarDepth: 1, // 可选的, 默认值是 1,
          children: [
            "message/",
            "message/business_overview.md",
            "message/invoice_issuing.md",
            "message/red_ink.md",
            "message/invoice_search.md",
            "message/appendix.md"
          ]
        }
      ],
      "/presented/": [
        {
          title: "燃气表缴费平台",
          sidebarDepth: 1, // 可选的, 默认值是 1,
          children: [
            "pay/",
            "pay/business_overview.md",
            "pay/invoice_issuing.md",
            "pay/red_ink.md",
            "pay/invoice_search.md",
            "pay/appendix.md"
          ]
        },
        {
          title: "水表缴费平台",
          sidebarDepth: 1, // 可选的, 默认值是 1,
          children: [
            "water/",
            "water/business_overview.md",
            "water/invoice_issuing.md",
            "water/red_ink.md",
            "water/invoice_search.md",
            "water/appendix.md"
          ]
        }
      ]
    },
    smoothScroll: true
  }
};

import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "博客主页",
    icon: "mdi:home",
    link: "/",
  },
  {
    text: "论文算法",
    icon: "ion:newspaper",
    prefix: "/demo/",
    children: [
      {
        text: "图像感知",
        prefix: "apple/",
        children: [
          { text: "图像分类", icon: "eva:image-2-fill", link: "1" },
          { text: "目标检测", icon: "material-symbols:detection-and-zone-rounded", link: "2" },
          { text: "语义分割", icon: "ph:line-segments-bold", link: "1" },
          { text: "OCR", icon: "mdi:ocr", link: "2" },
        ],
      },
      {
        text: "视频理解",
        prefix: "apple/",
        children: [
          { text: "视频目标检测", icon: "arcticons:ds-video", link: "1" },
          { text: "视频内容描述", icon: "file-icons:video", link: "2" },
          { text: "视频异常检测", icon: "fluent:warning-24-filled", link: "1" },
        ],
      },
      {
        text: "大模型应用",
        prefix: "apple/",
        children: [
          { text: "后训练", icon: "icon-park-twotone:fire", link: "1" },
          { text: "RAG", icon: "line-md:search-twotone", link: "2" },
          { text: "Multi-Agents", icon: "mingcute:robot-fill", link: "1" },
        ],
      },
      {
        text: "模型架构基础",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "传统网络架构", icon: "akar-icons:network", link: "1" },
          { text: "视觉基础模型", icon: "simple-icons:openjsfoundation", link: "2" },
          { text: "大模型基础", icon: "file-icons:nvidia", link: "1" },
        ],
      },
      {
        text: "模型训推工程化",
        // icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "剪枝", icon: "ix:cut-filled", link: "1" },
          { text: "量化", icon: "fa7-solid:square-binary", link: "2" },
          { text: "蒸馏", icon: "fa6-solid:flask-vial", link: "1" },
          { text: "部署", icon: "ion:hardware-chip", link: "1" },
        ],
      },
    ],
  },
  {
    text: "学习手记",
    icon: "solar:notebook-bold",
    prefix: "/demo/",
    children: [
      { text: "语言基础", icon: "mdi:code", link: "classfication/" },
      { text: "工具基础", icon: "mdi:git", link: "detection/" },
      { text: "操作系统", icon: "gravity-ui:logo-linux", link: "LLMs/" },
      { text: "计算机网络", icon: "streamline-ultimate:network-users", link: "LLMs/" },
      { text: "深度学习", icon: "streamline-plump:deepfake-technology-1-solid", link: "LLMs/" },
    ],
  },
  {
    text: "日常随笔",
    icon: "streamline-ultimate:time-daily-1-bold",
    prefix: "/demo/",
    children: [
      { text: "网站公告", icon: "pepicons-pop:speaker-high", link: "classfication/" },
      { text: "乐谱记录", icon: "mdi:music-box", link: "detection/" },
    ],
  },
  {
    text: "项目介绍",
    icon: "game-icons:unstable-projectile",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  {
    text: "资源链接",
    icon: "hugeicons:tools",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  {
    text: "友情链接",
    icon: "fa-solid:user-friends",
    link: "https://theme-hope.vuejs.press/zh/",
  },
    {
    text: "关于我",
    icon: "icon-park-solid:me",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  // {
  //   text: "博文",
  //   icon: "lightbulb",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "苹果",
  //       icon: "pen-to-square",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "pen-to-square", link: "1" },
  //         { text: "苹果2", icon: "pen-to-square", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "香蕉",
  //       icon: "pen-to-square",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "香蕉 1",
  //           icon: "pen-to-square",
  //           link: "1",
  //         },
  //         {
  //           text: "香蕉 2",
  //           icon: "pen-to-square",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "樱桃", icon: "pen-to-square", link: "cherry" },
  //     { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);

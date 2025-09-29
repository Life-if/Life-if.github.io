import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "期刊论文",
    icon: "mdi:home",
    prefix: "/demo/",
    children: [
      { text: "图像分类", icon: "iconfont icon-autumn", link: "classfication/" },
      { text: "目标检测", icon: "iconfont icon-ability", link: "detection/" },
      { text: "目标跟踪", icon: "iconfont icon-lightbulb", link: "track/" },
      { text: "视觉大模型", icon: "ability", link: "LLMs/" },
    ],
  },
  {
    text: "博文",
    icon: "lightbulb",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);

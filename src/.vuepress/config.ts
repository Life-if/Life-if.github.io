import { defineUserConfig } from "vuepress";


import theme from "./theme.js";


export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Voyager's Blog",
  description: "这里是Voyager的学习小站，和大家分享我的学习心得和生活。",

  theme,

  head:[
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com',crossorigin:"" }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap' }],

  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

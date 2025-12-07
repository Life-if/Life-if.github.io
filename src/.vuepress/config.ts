import { defineUserConfig } from "vuepress";


import theme from "./theme.js";

import { PopperShape } from "@moefy-canvas/theme-popper";
import { popperPlugin } from "./plugins/vuepress-plugin-popper/index.js";

import {
  canvasPlugin,
  CanvasPluginType,
} from "./plugins/vuepress-plugin-canvas/index.js";

// import { getDirname, path } from '@vuepress/utils'
// import { gradientCoverPlugin,GradientCoverOptions } from "./plugins/vuepress-plugin-gradient-cover/index.js";
// const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "SeanVoyager's Blog",
  description: "这里是Voyager的学习小站，和大家分享我的学习心得和生活。",

  head:[
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com',crossorigin:"" }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Kalam:wght@300;400;700&family=Qwigley&display=swap' }],
  ],

  plugins: [
    popperPlugin({
      config: {
        shape: PopperShape.Star,
        size: 2,
        numParticles: 20,
      },
    }),
    
    //  背景插件
    // 干扰阅读注意力，因此弃用
    // canvasPlugin({
    //   type: CanvasPluginType.Figure,
    //   // ribbonOption: {
    //   //   zIndex: 1,
    //   //   alpha: 0.15,
    //   //   size: 200,
    //   // },
    // }),
    // 遮罩插件
    // gradientCoverPlugin({}),
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
  theme,
});

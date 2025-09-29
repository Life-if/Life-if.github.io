import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";
import { getRecentUpdatedArticles } from "vuepress-theme-hope/presets/getRecentUpdatedArticles.js";

import Blog from "./layouts/Blog.vue";

export default defineClientConfig({

  setup: () => {
    // setupSnowFall();
    setupTransparentNavbar({ type: "homepage" });
    setupRunningTimeFooter(
      new Date("2025-09-20"),
      {
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
  },

  layouts: {
    // ...
    Blog,
  },
});


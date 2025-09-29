<script setup lang="ts">
import { Blog } from "vuepress-theme-hope/blog";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";
</script>

<template>
  <Blog>
    <template #heroInfo="heroInfo">
      <HitokotoBlogHero v-bind="heroInfo" />
    </template>
  </Blog>
</template>
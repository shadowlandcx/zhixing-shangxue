<script setup>
import { books } from '../data/books'
</script>

<template>
  <div class="container-px py-12">
    <div class="mx-auto max-w-2xl">
      <h1 class="text-2xl font-bold text-brand">关于知行商学</h1>
      <p class="mt-4 leading-relaxed text-muted">
        这是一个<strong class="text-ink">企业经营 + 读书研报</strong>的统一学习平台：把「读书笔记」与「读书研报」咬合在一起——
        用阿吉里斯的<strong class="text-ink">宣称理论 vs 使用理论</strong>作为学习观基石，让"读到的"真正变成"用上的"。
      </p>

      <h2 class="mt-8 text-lg font-bold text-brand">它和"普通读书站"有什么不同</h2>
      <ul class="mt-3 space-y-2 text-muted">
        <li>· <strong class="text-ink">带着岗位视角读</strong>：每本书都从营销战略、销售方法论、团队管理三视角拆解，标注"对谁的什么工作有用"。</li>
        <li>· <strong class="text-ink">有方法、能上手</strong>：提炼可立刻套用的框架、清单、话术，并链回对应赛道（阅读视角）。</li>
        <li>· <strong class="text-ink">读用闭环</strong>：每篇读书笔记与研报都挂"关联赛道"，每个赛道都配"配套书单"。</li>
        <li>· <strong class="text-ink">留白给你</strong>：每篇都能写"我的个人观点"，自动存浏览器本地。</li>
      </ul>

      <h2 class="mt-8 text-lg font-bold text-brand">技术</h2>
      <p class="mt-3 text-muted">
        基于 Vue3 + Vite + Tailwind 构建，内容用 Markdown 编写、数据驱动——<strong class="text-ink">加一本书只改一个数据文件</strong>。
        纯静态产物可一键部署到 GitHub Pages / CloudStudio，零后端、零成本。
      </p>

      <div class="mt-8 rounded-xl border border-line bg-white p-6 text-center">
        <p class="text-3xl font-bold text-brand">{{ books.length }}</p>
        <p class="mt-1 text-sm text-muted">本库已收录读书研报</p>
        <router-link to="/books" class="btn-gold mt-4 inline-flex">回到书架</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { trackList } from '../data/tracks'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-20 border-t border-line bg-brand-dark text-white/80">
    <div class="container-px grid gap-10 py-12 md:grid-cols-4">
      <div>
        <div class="flex items-center gap-2">
          <span class="flex h-9 w-9 items-center justify-center rounded-md bg-gold font-serif text-lg font-bold text-brand-dark">知</span>
          <span class="text-lg font-semibold text-white">知行商学</span>
        </div>
        <p class="mt-4 text-sm leading-relaxed text-white/60">面向企业经营者的读书研报站，带着岗位视角读透商业经典。</p>
      </div>
      <div>
        <h4 class="text-sm font-semibold text-white">分类浏览</h4>
        <ul class="mt-4 space-y-2 text-sm">
          <li v-for="t in trackList" :key="t.id"><router-link :to="`/track/${t.id}`" class="text-white/60 transition hover:text-gold">{{ t.name }}</router-link></li>
        </ul>
      </div>
      <div>
        <h4 class="text-sm font-semibold text-white">关于</h4>
        <ul class="mt-4 space-y-2 text-sm text-white/60">
          <li><router-link to="/about" class="transition hover:text-gold">关于本站</router-link></li>
          <li><a href="#" class="transition hover:text-gold">联系我们</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-sm font-semibold text-white">读书视角</h4>
        <ul class="mt-4 space-y-2 text-sm text-white/60">
          <li><router-link to="/books" class="transition hover:text-gold">全部书单</router-link></li>
          <li><router-link to="/toolbox" class="transition hover:text-gold">实战工具箱</router-link></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10 py-4 text-center text-xs text-white/40">© {{ year }} 知行商学 · 读书研报站（演示站）</div>
  </footer>
</template>

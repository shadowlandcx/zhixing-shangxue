<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { readingPaths, getPath } from '../data/reading-paths'
import { books } from '../data/books'

const route = useRoute()
const pathId = computed(() => route.params.id)
const path = computed(() => (pathId.value ? getPath(pathId.value) : null))

function book(id) {
  return books.find(b => b.id === id) || null
}
</script>

<template>
  <!-- 单路径详情 -->
  <template v-if="path">
    <section class="bg-gradient-to-b from-brand to-brand-dark text-white">
      <div class="container-px py-14 lg:py-20">
        <nav class="text-sm text-white/60">
          <router-link to="/" class="hover:text-gold">首页</router-link>
          <span class="mx-2">/</span>
          <router-link to="/paths" class="hover:text-gold">阅读路径</router-link>
          <span class="mx-2">/</span>
          <span class="text-gold-light">{{ path.title }}</span>
        </nav>
        <div class="mt-4 flex items-center gap-3">
          <span class="text-4xl">{{ path.icon }}</span>
          <div>
            <p class="eyebrow text-gold-light">{{ path.audience }}</p>
            <h1 class="text-3xl font-bold sm:text-4xl">{{ path.title }}</h1>
          </div>
        </div>
        <p class="mt-4 max-w-2xl leading-relaxed text-white/70">{{ path.desc }}</p>
      </div>
    </section>

    <section class="container-px py-14">
      <h2 class="text-2xl font-bold text-brand">精读顺序 · {{ path.steps.length }} 步</h2>
      <p class="mt-2 text-sm text-muted">按从上到下的顺序读，每一步都标了「为什么读这本 / 衔接点」。</p>
      <div class="mt-8 space-y-6">
        <div v-for="(s, i) in path.steps" :key="s.bookId" class="flex flex-col gap-4 md:flex-row md:items-stretch">
          <div class="flex items-center justify-center md:w-16">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-bold text-gold-light">第 {{ i + 1 }} 步</div>
          </div>
          <router-link
            v-if="book(s.bookId)"
            :to="`/book/${s.bookId}`"
            class="card flex flex-1 flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div class="flex h-20 items-end p-4" :style="{ background: book(s.bookId).cover }">
              <span class="text-base font-bold text-white/95">{{ book(s.bookId).title }}</span>
            </div>
            <div class="flex flex-1 flex-col p-4">
              <p class="text-sm text-muted">{{ book(s.bookId).author }}</p>
              <h3 class="mt-1 font-semibold text-ink">{{ book(s.bookId).title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-brand">{{ s.note }}</p>
            </div>
          </router-link>
          <div v-else class="card flex flex-1 items-center p-4 text-sm text-muted">未找到书本：{{ s.bookId }}</div>
        </div>
      </div>
    </section>
  </template>

  <!-- 路径总览 -->
  <template v-else>
    <section class="bg-gradient-to-b from-brand to-brand-dark text-white">
      <div class="container-px py-14 lg:py-20">
        <p class="eyebrow text-gold-light">阅读路径 · Reading Path</p>
        <h1 class="mt-2 text-3xl font-bold sm:text-4xl">该先读哪本？按顺序来</h1>
        <p class="mt-4 max-w-2xl leading-relaxed text-white/70">
          不是书架里随便翻，而是按业务目标编排的精读顺序：政企打单、销售进阶、营销负责人、管理者、组织学习、战略思维。每条路径都标了「下一步读什么、为什么」。
        </p>
      </div>
    </section>

    <section class="container-px py-14">
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <router-link
          v-for="p in readingPaths"
          :key="p.id"
          :to="`/paths/${p.id}`"
          class="card flex flex-col p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div class="flex items-center gap-3">
            <span class="text-3xl">{{ p.icon }}</span>
            <h3 class="text-lg font-semibold text-brand">{{ p.title }}</h3>
          </div>
          <p class="mt-2 text-sm font-medium text-gold-dark">{{ p.audience }}</p>
          <p class="mt-2 flex-1 text-sm leading-relaxed text-muted">{{ p.desc }}</p>
          <p class="mt-4 text-sm text-brand">{{ p.steps.length }} 步精读 · 查看路径 →</p>
        </router-link>
      </div>
    </section>
  </template>
</template>

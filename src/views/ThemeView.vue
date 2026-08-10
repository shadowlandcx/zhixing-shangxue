<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { themes, getTheme, booksForTheme } from '../data/themes'
import { books } from '../data/books'

const route = useRoute()
const themeId = computed(() => route.params.id)
const theme = computed(() => (themeId.value ? getTheme(themeId.value) : null))
const themeBooks = computed(() => (theme.value ? booksForTheme(theme.value.id) : []))

function count(id) {
  const t = getTheme(id)
  return t ? t.bookIds.length : 0
}
</script>

<template>
  <!-- 单主题详情 -->
  <template v-if="theme">
    <section class="bg-gradient-to-b from-brand to-brand-dark text-white">
      <div class="container-px py-14 lg:py-20">
        <nav class="text-sm text-white/60">
          <router-link to="/" class="hover:text-gold">首页</router-link>
          <span class="mx-2">/</span>
          <router-link to="/themes" class="hover:text-gold">主题导览</router-link>
          <span class="mx-2">/</span>
          <span class="text-gold-light">{{ theme.title }}</span>
        </nav>
        <div class="mt-4 flex items-center gap-3">
          <span class="text-4xl">{{ theme.icon }}</span>
          <div>
            <p class="eyebrow text-gold-light">{{ theme.tagline }}</p>
            <h1 class="text-3xl font-bold sm:text-4xl">{{ theme.title }}</h1>
          </div>
        </div>
        <p class="mt-4 max-w-2xl leading-relaxed text-white/70">{{ theme.desc }}</p>
      </div>
    </section>

    <section class="container-px py-14">
      <h2 class="text-2xl font-bold text-brand">本主题书单 · {{ themeBooks.length }} 本</h2>
      <p class="mt-2 text-sm text-muted">按业务问题聚合的精读清单，点开看三视角读书笔记与实战研报。</p>
      <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <router-link
          v-for="b in themeBooks"
          :key="b.id"
          :to="`/book/${b.id}`"
          class="card flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div class="flex h-28 items-end p-4" :style="{ background: b.cover }">
            <span class="text-base font-bold text-white/95">{{ b.title }}</span>
          </div>
          <div class="flex flex-1 flex-col p-4">
            <p class="text-sm text-muted">{{ b.author }}</p>
            <h3 class="mt-1 font-semibold text-ink">{{ b.title }}</h3>
            <p class="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">{{ b.intro }}</p>
            <div class="mt-3 flex items-center justify-between">
              <span class="rounded-full bg-paper px-2.5 py-1 text-xs text-brand">{{ b.category }}</span>
              <span class="text-sm text-gold">⭐ {{ b.rating.toFixed(1) }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </template>

  <!-- 主题总览 -->
  <template v-else>
    <section class="bg-gradient-to-b from-brand to-brand-dark text-white">
      <div class="container-px py-14 lg:py-20">
        <p class="eyebrow text-gold-light">主题导览 · Theme Guide</p>
        <h1 class="mt-2 text-3xl font-bold sm:text-4xl">按业务问题找书</h1>
        <p class="mt-4 max-w-2xl leading-relaxed text-white/70">
          不按赛道，而按你正在面对的真实业务问题聚合：政企 ToG 打单、一线销售、营销获客、谈判沟通、带团队、定战略、组织学习、看懂技术。挑一个主题，直接开读。
        </p>
      </div>
    </section>

    <section class="container-px py-14">
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <router-link
          v-for="t in themes"
          :key="t.id"
          :to="`/themes/${t.id}`"
          class="card flex flex-col p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div class="flex items-center gap-3">
            <span class="text-3xl">{{ t.icon }}</span>
            <h3 class="text-lg font-semibold text-brand">{{ t.title }}</h3>
          </div>
          <p class="mt-3 text-sm font-medium text-gold-dark">{{ t.tagline }}</p>
          <p class="mt-2 flex-1 text-sm leading-relaxed text-muted">{{ t.desc }}</p>
          <p class="mt-4 text-sm text-brand">{{ count(t.id) }} 本 · 查看书单 →</p>
        </router-link>
      </div>
    </section>
  </template>
</template>

<script setup>
import { computed } from 'vue'
import { getTheme, booksForTheme } from '../data/themes'
import { getPath } from '../data/reading-paths'
import { allTools, getTool } from '../data/tools/index.js'
import { recipes } from '../data/recipes.js'
import { books } from '../data/books'

const togBooks = computed(() => booksForTheme('tog'))
const togIds = computed(() => togBooks.value.map(b => b.id))
const togPath = computed(() => getPath('tog-deal'))

const togTools = computed(() => allTools.filter(t => togIds.value.includes(t.bookId)))
const toolsByBook = computed(() => {
  const map = {}
  for (const t of togTools.value) {
    if (!map[t.bookId]) {
      const b = books.find(x => x.id === t.bookId)
      map[t.bookId] = { book: b, tools: [] }
    }
    map[t.bookId].tools.push(t)
  }
  return Object.values(map)
})

const togRecipes = computed(() =>
  recipes.filter(r => r.tools.some(tid => {
    const tl = getTool(tid)
    return tl && togIds.value.includes(tl.bookId)
  }))
)

function book(id) {
  return books.find(b => b.id === id) || null
}
</script>

<template>
  <section class="bg-gradient-to-b from-brand to-brand-dark text-white">
    <div class="container-px py-14 lg:py-20">
      <nav class="text-sm text-white/60">
        <router-link to="/" class="hover:text-gold">首页</router-link>
        <span class="mx-2">/</span>
        <span class="text-gold-light">政企 ToG 垂直</span>
      </nav>
      <p class="eyebrow mt-4 text-gold-light">政企 ToG 专属</p>
      <h1 class="mt-2 text-3xl font-bold sm:text-4xl">政企 ToG 大客户打法</h1>
      <p class="mt-4 max-w-2xl leading-relaxed text-white/70">
        政府采购、信创、招投标、预算制、长决策链、关系经营与合规——一套为政企打单量身策展的读书 + 工具 + 路径。从认知到控单，循序渐进。
      </p>
      <div class="mt-6 flex flex-wrap gap-3">
        <span class="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">{{ togBooks.length }} 本精选书</span>
        <span class="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">{{ togTools.length }} 个实战工具</span>
        <span class="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">{{ togRecipes.length }} 个场景配方</span>
        <router-link to="/paths/tog-deal" class="rounded-full bg-gold px-3 py-1 text-sm font-medium text-brand transition hover:bg-gold-light">📍 政企打单路径 →</router-link>
      </div>
    </div>
  </section>

  <!-- 政企打单路径 -->
  <section v-if="togPath" class="container-px py-14">
    <h2 class="text-2xl font-bold text-brand">{{ togPath.icon }} {{ togPath.title }}</h2>
    <p class="mt-2 text-sm text-muted">{{ togPath.desc }}</p>
    <div class="mt-6 flex flex-wrap items-center gap-3">
      <template v-for="(s, i) in togPath.steps" :key="s.bookId">
        <router-link
          :to="`/book/${s.bookId}`"
          class="rounded-lg border border-line bg-white px-4 py-3 text-sm font-medium text-brand transition hover:border-gold hover:bg-gold/5"
        >{{ i + 1 }}. {{ book(s.bookId)?.title }}</router-link>
        <span v-if="i < togPath.steps.length - 1" class="text-gold">→</span>
      </template>
    </div>
  </section>

  <!-- 精选书单 -->
  <section class="container-px py-14">
    <h2 class="text-2xl font-bold text-brand">精选书单 · {{ togBooks.length }} 本</h2>
    <p class="mt-2 text-sm text-muted">政企 ToG 相关的经典与新书，点开看三视角读书笔记与实战研报。</p>
    <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <router-link
        v-for="b in togBooks"
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
            <span v-if="b.rating" class="text-sm text-gold">⭐ {{ b.rating.toFixed(1) }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </section>

  <!-- 场景配方 -->
  <section v-if="togRecipes.length" class="container-px py-14">
    <h2 class="text-2xl font-bold text-brand">相关场景配方</h2>
    <p class="mt-2 text-sm text-muted">按政企场景组合的跨书工具包，点开到工具箱「领方案」。</p>
    <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <router-link
        v-for="r in togRecipes"
        :key="r.id"
        :to="`/toolbox?recipe=${r.id}`"
        class="card flex flex-col p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
      >
        <h3 class="font-semibold text-brand">{{ r.title }}</h3>
        <p class="mt-2 flex-1 text-sm leading-relaxed text-muted">{{ r.painPoint }}</p>
        <p class="mt-3 text-sm text-gold">领方案 →</p>
      </router-link>
    </div>
  </section>

  <!-- 配套实战工具（按来源书分组） -->
  <section v-if="togTools.length" class="container-px py-14">
    <h2 class="text-2xl font-bold text-brand">配套实战工具 · {{ togTools.length }} 个</h2>
    <p class="mt-2 text-sm text-muted">来自上述政企书的「拿来即用」工具，按来源书分组。</p>
    <div class="mt-6 space-y-8">
      <div v-for="grp in toolsByBook" :key="grp.book.id">
        <h3 class="mb-3 flex items-center gap-2 text-lg font-semibold text-brand">
          <router-link :to="`/book/${grp.book.id}`" class="hover:text-gold">{{ grp.book.title }}</router-link>
          <span class="text-sm font-normal text-muted">· {{ grp.tools.length }} 个工具</span>
        </h3>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <router-link
            v-for="t in grp.tools"
            :key="t.id"
            :to="`/book/${grp.book.id}`"
            class="card flex flex-col p-4 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span class="rounded-full bg-gold/15 px-2 py-0.5 text-xs font-medium text-gold-dark self-start">{{ t.type || t.category }}</span>
            <h4 class="mt-2 font-semibold text-ink">{{ t.title }}</h4>
            <p class="mt-1 line-clamp-2 text-sm leading-relaxed text-muted">{{ t.useCase || t.desc }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

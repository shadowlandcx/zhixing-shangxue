<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { books, getBook } from '../data/books'
import { tracks } from '../data/tracks'
import { allTools } from '../data/tools/index'

const route = useRoute()
const router = useRouter()
const q = ref((route.query.q || '').toString())

// 从首页 / 顶部导航跳转进来时，同步输入框
watch(() => route.query.q, (v) => { q.value = (v || '').toString() })

function doSearch() {
  const kw = q.value.trim()
  router.push(kw ? { path: '/search', query: { q: kw } } : { path: '/search' })
}

const query = computed(() => (route.query.q || '').toString().trim().toLowerCase())

const bookHits = computed(() => {
  if (!query.value) return []
  return books
    .filter((b) =>
      [b.title, b.author, b.intro, b.category, (b.tags || []).join(' ')]
        .join(' ').toLowerCase().includes(query.value)
    )
})

const trackHits = computed(() => {
  if (!query.value) return []
  return Object.values(tracks).filter((t) =>
    [t.name, t.tagline, t.desc].join(' ').toLowerCase().includes(query.value)
  )
})

const toolHits = computed(() => {
  if (!query.value) return []
  return allTools.filter((t) => {
    const bt = getBook(t.bookId)?.title || ''
    return [t.title, t.desc, t.useCase, t.thinking, t.bookId, bt]
      .join(' ').toLowerCase().includes(query.value)
  })
})

const total = computed(() => bookHits.value.length + trackHits.value.length + toolHits.value.length)
</script>

<template>
  <div class="container-px py-10">
    <h1 class="text-2xl font-bold text-brand">全站搜索</h1>

    <form class="mt-4 flex gap-3" @submit.prevent="doSearch">
      <input
        v-model="q"
        type="text"
        placeholder="搜书籍、分类…（如：SPIN、大客户、定位、团队）"
        class="flex-1 rounded-lg border border-line bg-white px-4 py-3 text-sm outline-none focus:border-gold"
      />
      <button class="btn-gold shrink-0" type="submit">搜索</button>
    </form>

    <!-- 空状态 -->
    <div v-if="!query" class="mt-10 rounded-xl border border-line bg-white p-10 text-center text-sm leading-relaxed text-muted">
      输入关键词，跨「读书研报 + 分类」聚合检索。<br/>试试：<button class="text-brand hover:text-gold" @click="q='SPIN';doSearch()">SPIN</button>、
      <button class="text-brand hover:text-gold" @click="q='大客户';doSearch()">大客户</button>、
      <button class="text-brand hover:text-gold" @click="q='定位';doSearch()">定位</button>、
      <button class="text-brand hover:text-gold" @click="q='团队';doSearch()">团队</button>
    </div>

    <div v-else>
      <p class="mt-6 text-sm text-muted">
        找到 <strong class="text-brand">{{ total }}</strong> 条与“{{ route.query.q }}”相关的结果
      </p>

      <!-- 读书研报 -->
      <section v-if="bookHits.length" class="mt-8">
        <h2 class="eyebrow">读书研报</h2>
        <div class="mt-3 grid gap-4 md:grid-cols-3">
          <div v-for="b in bookHits" :key="b.id" class="card overflow-hidden">
            <div class="flex h-24 items-end p-3" :style="{ background: b.cover }">
              <span class="text-sm font-bold text-white/95">{{ b.title }}</span>
            </div>
            <div class="p-4">
              <p class="text-xs text-muted">{{ b.author }}</p>
              <div class="mt-2 flex gap-2">
                <router-link :to="`/book/${b.id}`" class="btn-outline flex-1 text-center text-xs">读笔记</router-link>
                <router-link :to="`/book/${b.id}`" class="btn-gold flex-1 text-center text-xs">看研报</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 按分类浏览 -->
      <section v-if="trackHits.length" class="mt-8">
        <h2 class="eyebrow">按分类浏览</h2>
        <div class="mt-3 grid gap-4 md:grid-cols-3">
          <router-link
            v-for="t in trackHits"
            :key="t.id"
            :to="`/track/${t.id}`"
            class="card p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div class="text-2xl">{{ t.icon }}</div>
            <h3 class="mt-2 font-semibold text-brand">{{ t.name }}</h3>
            <p class="mt-1 text-sm leading-relaxed text-muted line-clamp-2">{{ t.desc }}</p>
          </router-link>
        </div>
      </section>

      <!-- 实战工具 -->
      <section v-if="toolHits.length" class="mt-8">
        <h2 class="eyebrow">实战工具</h2>
        <div class="mt-3 grid gap-4 md:grid-cols-3">
          <router-link
            v-for="t in toolHits"
            :key="t.id"
            :to="`/toolbox?tool=${t.id}`"
            class="card p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <h3 class="font-semibold text-brand">📑 {{ t.title }}</h3>
            <p class="mt-1 text-sm leading-relaxed text-muted line-clamp-2">{{ t.desc }}</p>
            <p class="mt-2 text-xs text-gold">出自《{{ getBook(t.bookId)?.title }}》→</p>
          </router-link>
        </div>
      </section>

      <!-- 无结果 -->
      <div v-if="!total" class="mt-10 rounded-xl border border-line bg-white p-10 text-center text-sm text-muted">
        没有找到匹配的内容。试试更宽泛的关键词，或浏览
        <router-link to="/books" class="text-brand hover:text-gold">全部书单</router-link>。
      </div>
    </div>
  </div>
</template>

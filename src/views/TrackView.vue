<script setup>
import { computed } from 'vue'
import { tracks } from '../data/tracks'
import { books } from '../data/books'

const props = defineProps({ id: String })
const track = computed(() => tracks[props.id] || null)
const relatedBookList = computed(() =>
  (track.value?.relatedBooks || [])
    .map((id) => books.find((b) => b.id === id))
    .filter(Boolean)
)
</script>

<template>
  <template v-if="track">
    <!-- Hero -->
    <section class="bg-gradient-to-b from-brand to-brand-dark text-white">
      <div class="container-px py-14 lg:py-20">
        <nav class="text-sm text-white/60">
          <router-link to="/" class="hover:text-gold">首页</router-link>
          <span class="mx-2">/</span>
          <span class="text-gold-light">{{ track.name }}</span>
        </nav>
        <div class="mt-4 flex items-center gap-3">
          <span class="text-4xl">{{ track.icon }}</span>
          <div>
            <p class="eyebrow text-gold-light">{{ track.en }}</p>
            <h1 class="text-3xl font-bold sm:text-4xl">{{ track.name }}</h1>
          </div>
        </div>
        <p class="mt-4 max-w-2xl text-lg font-medium text-gold-light">{{ track.tagline }}</p>
        <p class="mt-3 max-w-2xl leading-relaxed text-white/70">{{ track.desc }}</p>
      </div>
    </section>

    <!-- Categories -->
    <section class="container-px py-14">
      <h2 class="text-2xl font-bold text-brand">阅读视角</h2>
      <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="c in track.categories" :key="c.name" class="card p-5">
          <h3 class="font-semibold text-brand">{{ c.name }}</h3>
          <p class="mt-2 text-sm text-muted">{{ c.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Cases -->
    <section class="container-px py-14">
      <h2 class="text-2xl font-bold text-brand">真实战役案例</h2>
      <p class="mt-2 text-sm text-muted">每个案例来自企业真实场景，含冲突与结果，对照学更透。</p>
      <div class="mt-6 grid gap-5 md:grid-cols-3">
        <div v-for="(cs, i) in track.cases" :key="i" class="card flex flex-col p-6">
          <span class="self-start rounded-md bg-gold/15 px-2 py-1 text-xs font-medium text-gold-dark">案例 {{ i + 1 }}</span>
          <h3 class="mt-3 text-base font-semibold text-brand">{{ cs.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted"><span class="font-medium text-ink">场景：</span>{{ cs.scene }}</p>
          <p class="mt-2 text-sm leading-relaxed text-muted"><span class="font-medium text-ink">冲突：</span>{{ cs.conflict }}</p>
          <p class="mt-2 text-sm leading-relaxed text-muted"><span class="font-medium text-ink">结果：</span>{{ cs.outcome }}</p>
        </div>
      </div>
    </section>

    <!-- Path -->
    <section class="container-px py-14">
      <h2 class="text-2xl font-bold text-brand">进阶阅读路径</h2>
      <div class="mt-6 grid gap-5 md:grid-cols-3">
        <div v-for="p in track.path" :key="p.step" class="card p-6">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-gold-light font-bold">第{{ p.step }}级</div>
          <h3 class="mt-4 text-lg font-semibold text-brand">{{ p.title }}</h3>
          <p class="mt-2 text-sm text-muted">{{ p.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Related books -->
    <section class="container-px py-14">
      <h2 class="text-2xl font-bold text-brand">配套书单 · 读透这个分类</h2>
      <p class="mt-2 text-sm text-muted">把这一类的打法，用经典著作再夯实一层。点开看营销+销售视角读书笔记与研报。</p>
      <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <router-link
          v-for="b in relatedBookList"
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
  </template>

  <template v-else>
    <div class="container-px py-24 text-center">
      <h1 class="text-2xl font-bold text-brand">未找到该分类</h1>
      <router-link to="/" class="btn-primary mt-6 inline-block">返回首页</router-link>
    </div>
  </template>
</template>

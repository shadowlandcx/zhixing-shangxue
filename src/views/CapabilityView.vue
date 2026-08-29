<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { capabilityTracks, capabilityMap, dimensionMeta } from '../data/capability'
import { books } from '../data/books'
import { templatesForBook } from '../data/tools/index'

const router = useRouter()
const activeTrack = ref('sales')

const titleMap = {}
for (const b of books) titleMap[b.id] = b.title

function titleOf(id) {
  return titleMap[id] || id
}

const levels = computed(() => capabilityMap[activeTrack.value] || [])
const trackMeta = computed(() => capabilityTracks.find((t) => t.id === activeTrack.value))

function goBook(id) {
  router.push(`/book/${id}`)
}

// 书目 → 配套工具（每本书 1 个工具），能力点下挂「配套工具」入口
function toolOf(bookId) {
  return templatesForBook(bookId)[0] || null
}
function toolsOfCp(cp) {
  return (cp.books || []).map((bid) => ({ bid, tool: toolOf(bid) })).filter((x) => x.tool)
}

const dimOrder = ['K', 'S', 'A']
</script>

<template>
  <div class="min-h-screen bg-paper">
    <!-- 页头 -->
    <section class="border-b border-line bg-white">
      <div class="container-px mx-auto max-w-7xl py-10">
        <div class="flex items-center gap-3">
          <span class="flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-xl">🗺️</span>
          <div>
            <h1 class="text-2xl font-bold text-brand">能力地图 · 销售 / 营销 / 管理三条线</h1>
            <p class="mt-1 text-sm text-muted">按「职级分层 × 能力维度」画出成长路径，每个能力点可点进对应书目——把一本好书读成能上手的武器。</p>
          </div>
        </div>

        <!-- 方向切换 -->
        <div class="mt-6 flex flex-wrap gap-3">
          <button
            v-for="t in capabilityTracks"
            :key="t.id"
            @click="activeTrack = t.id"
            class="rounded-full border px-5 py-2 text-sm font-semibold transition"
            :class="activeTrack === t.id
              ? 'border-transparent text-white shadow-sm'
              : 'border-line bg-paper text-ink hover:border-gold'"
            :style="activeTrack === t.id ? { backgroundColor: t.color } : {}"
          >
            {{ t.name }}方向
          </button>
        </div>
        <p v-if="trackMeta" class="mt-3 text-sm text-muted">{{ trackMeta.desc }}</p>
      </div>
    </section>

    <!-- 图例 -->
    <div class="container-px mx-auto max-w-7xl pt-6">
      <div class="flex flex-wrap items-center gap-5 text-sm">
        <span class="font-semibold text-ink">维度图例：</span>
        <span v-for="d in dimOrder" :key="d" class="flex items-center gap-2">
          <span class="inline-block h-3 w-3 rounded-full" :style="{ backgroundColor: dimensionMeta[d].color }"></span>
          <span class="font-medium text-ink">{{ dimensionMeta[d].name }}</span>
          <span class="text-muted">· {{ dimensionMeta[d].desc }}</span>
        </span>
      </div>
    </div>

    <!-- 地图主体：4 层 -->
    <section class="container-px mx-auto max-w-7xl py-8">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="lv in levels"
          :key="lv.id"
          class="flex flex-col rounded-xl border border-line bg-white shadow-sm"
        >
          <!-- 层级头 -->
          <div class="rounded-t-xl border-b border-line bg-brand/5 px-4 py-3">
            <div class="flex items-baseline justify-between">
              <h3 class="text-base font-bold text-brand">{{ lv.name }}</h3>
              <span class="rounded-full bg-brand/10 px-2 py-0.5 text-xs text-brand">{{ lv.years }}</span>
            </div>
            <p class="mt-1 text-xs text-muted">{{ lv.desc }}</p>
          </div>

          <!-- 三维 -->
          <div class="flex flex-1 flex-col gap-3 p-4">
            <div v-for="d in dimOrder" :key="d">
              <div class="mb-2 flex items-center gap-2">
                <span class="inline-block h-2.5 w-2.5 rounded-full" :style="{ backgroundColor: dimensionMeta[d].color }"></span>
                <span class="text-xs font-bold uppercase tracking-wide" :style="{ color: dimensionMeta[d].color }">{{ d }} · {{ dimensionMeta[d].name }}</span>
              </div>
              <div class="space-y-2">
                <div
                  v-for="(cp, i) in lv.dims[d]"
                  :key="i"
                  class="rounded-lg border border-line/70 bg-paper p-2.5"
                >
                  <p class="text-sm font-medium text-ink">{{ cp.point }}</p>
                  <div class="mt-2 flex flex-wrap gap-1.5">
                    <button
                      v-for="bid in cp.books"
                      :key="bid"
                      @click="goBook(bid)"
                      class="rounded-md border border-line bg-white px-2 py-1 text-xs text-brand transition hover:border-gold hover:bg-gold/10"
                      :title="`查看《${titleOf(bid)}》`"
                    >
                      《{{ titleOf(bid) }}》
                    </button>
                  </div>
                  <!-- 配套实战工具：直达工具箱对应工具 -->
                  <div v-if="toolsOfCp(cp).length" class="mt-2 flex flex-wrap items-center gap-1.5">
                    <span class="text-[11px] font-semibold text-gold-dark">🔧 配套工具</span>
                    <router-link
                      v-for="x in toolsOfCp(cp)"
                      :key="'t-' + x.bid"
                      :to="{ path: '/toolbox', query: { tool: x.tool.id } }"
                      class="rounded-md border border-gold/40 bg-gold/10 px-2 py-1 text-xs text-gold-dark transition hover:bg-gold hover:text-white"
                      :title="`打开《${titleOf(x.bid)}》配套工具：${x.tool.title}`"
                    >{{ x.tool.title }}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-8 text-center text-xs text-muted">
        能力地图由知行商学培训设计师基于三条线书目设计，点书名即可跳转到对应「深度导读」，点 🔧 配套工具可直接打开该书的实战模板（支持 Excel / PDF 下载）。建议结合读书会共读，按层级逐格点亮。
      </p>
    </section>
  </div>
</template>

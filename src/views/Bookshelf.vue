<script setup>
import { ref, computed } from 'vue'
import { books, categories } from '../data/books'
import { allTools } from '../data/tools/index'

const kw = ref('')
const activeCat = ref('全部')
const activeTag = ref('')
const activeArchive = ref('') // 如 '2026-7'
const sortMode = ref('default') // default | hot | new

function parseYM(d) {
  const m = /(\d{4})年(\d{1,2})月/.exec(d || '')
  return m ? +m[1] * 12 + +m[2] : 0
}

// 标签云（去重排序）
const allTags = computed(() => {
  const s = new Set()
  books.forEach((b) => (b.tags || []).forEach((t) => s.add(t)))
  return [...s].sort((a, b) => a.localeCompare(b, 'zh'))
})

// 归档（按年月分组，倒序）
const archiveGroups = computed(() => {
  const map = {}
  books.forEach((b) => {
    const m = /(\d{4})年(\d{1,2})月/.exec(b.meta?.date || '')
    if (!m) return
    const key = `${m[1]}-${+m[2]}`
    const label = `${m[1]}年${+m[2]}月`
    if (!map[key]) map[key] = { key, label, list: [] }
    map[key].list.push(b)
  })
  return Object.values(map).sort((a, b) => b.key.localeCompare(a.key))
})

// 热门排行 Top5
const topHot = computed(() =>
  [...books].filter((b) => typeof b.rating === 'number').sort((a, b) => b.rating - a.rating).slice(0, 5)
)

const hasFilter = computed(
  () => activeCat.value !== '全部' || !!activeTag.value || !!activeArchive.value || !!kw.value.trim()
)

const base = computed(() => {
  const q = kw.value.trim().toLowerCase()
  return books.filter((b) => {
    const catOk = activeCat.value === '全部' || b.category === activeCat.value
    const tagOk = !activeTag.value || (b.tags || []).includes(activeTag.value)
    const arcOk = !activeArchive.value || (() => {
      const m = /(\d{4})年(\d{1,2})月/.exec(b.meta?.date || '')
      return m && `${m[1]}-${+m[2]}` === activeArchive.value
    })()
    const kwOk =
      !q ||
      [b.title, b.author, b.intro, b.category, ...(b.tags || [])]
        .join(' ')
        .toLowerCase()
        .includes(q)
    return catOk && tagOk && arcOk && kwOk
  })
})

const filtered = computed(() => {
  const arr = [...base.value]
  if (sortMode.value === 'hot') arr.sort((a, b) => b.rating - a.rating)
  else if (sortMode.value === 'new')
    arr.sort((a, b) => parseYM(b.meta?.date) - parseYM(a.meta?.date))
  return arr
})

function toggleTag(t) {
  activeTag.value = activeTag.value === t ? '' : t
}
function toggleArchive(key) {
  activeArchive.value = activeArchive.value === key ? '' : key
}
function resetAll() {
  activeCat.value = '全部'
  activeTag.value = ''
  activeArchive.value = ''
  kw.value = ''
  sortMode.value = 'default'
}

function stars(r) {
  return '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r))
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="border-b border-line bg-brand text-white">
      <div class="container-px py-14 text-center">
        <p class="text-gold">知行商学 · 读书研报</p>
        <h1 class="mt-2 text-3xl font-bold sm:text-4xl">把读过的书，变成用得上的营销销售能力</h1>
        <p class="mx-auto mt-3 max-w-2xl text-white/80">
          每本书一份「精华导读 + 落地方法 + 个人笔记」，全部从营销战略、销售方法论与团队管理三视角拆解。结构化拆解，打印即学习资料，记下你自己的观点。
        </p>
      </div>
    </section>

    <div class="container-px py-10">
      <!-- 工具箱横幅 -->
      <router-link
        to="/toolbox"
        class="mb-8 flex flex-col items-start gap-2 rounded-xl border border-gold/40 bg-gradient-to-r from-gold/15 to-gold/5 p-4 transition hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
      >
        <span class="text-sm text-brand">
          <span class="mr-1 text-base">🧰</span>
          <strong>需要直接能用的模板？</strong> {{ allTools.length }} 个可落地模板（定位卡 / 客户经营看板 / NRR 仪表盘…），每个都预填标杆示例，一键下载 Excel / PDF。
        </span>
        <span class="btn-gold shrink-0">前往工具箱 →</span>
      </router-link>

      <!-- 工具栏：搜索 + 分类 + 排序 -->
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div class="relative w-full sm:max-w-sm">
          <input
            v-model="kw"
            type="search"
            placeholder="搜书名 / 作者 / 关键词…"
            class="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm outline-none focus:border-gold"
          />
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <button
            v-for="c in ['全部', ...categories]"
            :key="c"
            @click="activeCat = c"
            class="rounded-full border px-3 py-1.5 text-sm transition"
            :class="activeCat === c ? 'border-gold bg-gold/10 text-brand font-semibold' : 'border-line text-muted hover:border-gold'"
          >
            {{ c }}
          </button>
          <select
            v-model="sortMode"
            class="ml-auto rounded-lg border border-line bg-white px-3 py-1.5 text-sm text-ink outline-none focus:border-gold"
          >
            <option value="default">默认顺序</option>
            <option value="hot">热门排行（评分高→低）</option>
            <option value="new">最新归档（时间新→旧）</option>
          </select>
        </div>
      </div>

      <!-- 主体 + 侧栏 -->
      <div class="mt-8 grid gap-8 lg:grid-cols-[1fr_280px]">
        <!-- 左：书架网格 -->
        <div>
          <div class="mb-4 flex items-center justify-between">
            <p class="text-sm text-muted">
              共 <span class="font-semibold text-ink">{{ filtered.length }}</span> 本
              <template v-if="activeTag"> · 标签「{{ activeTag }}」</template>
              <template v-if="activeArchive"> · 归档「{{ archiveGroups.find(g => g.key === activeArchive)?.label }}」</template>
            </p>
            <button
              v-if="hasFilter"
              @click="resetAll"
              class="text-sm text-gold transition hover:underline"
            >清除筛选</button>
          </div>

          <div v-if="filtered.length" class="grid gap-5 sm:grid-cols-2">
            <router-link
              v-for="b in filtered"
              :key="b.id"
              :to="`/book/${b.id}`"
              class="card flex flex-col overflow-hidden"
            >
              <div class="flex h-32 items-end p-4" :style="{ background: b.cover }">
                <span class="text-lg font-bold text-white/95">{{ b.title }}</span>
              </div>
              <div class="flex flex-1 flex-col p-4">
                <p class="text-sm text-muted">{{ b.author }}</p>
                <h3 class="mt-1 font-semibold text-ink">{{ b.title }}</h3>
                <p class="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{{ b.intro }}</p>
                <div class="mt-3 flex flex-wrap gap-1">
                  <span
                    v-for="t in (b.tags || []).slice(0, 3)"
                    :key="t"
                    class="rounded bg-paper px-2 py-0.5 text-xs text-brand/80"
                  >#{{ t }}</span>
                </div>
                <div class="mt-3 flex items-center justify-between">
                  <div class="flex flex-wrap gap-1">
                    <span class="rounded-full bg-paper px-2.5 py-1 text-xs text-brand">{{ b.category }}</span>
                    <span v-if="b.priority" class="rounded-full px-2.5 py-1 text-xs" :class="b.priority === '必读' ? 'bg-brand text-white' : 'bg-paper text-muted'">{{ b.priority }}</span>
                  </div>
                  <span v-if="b.rating" class="text-sm text-gold">{{ stars(b.rating) }} <span class="text-muted">{{ b.rating.toFixed(1) }}</span></span>
                </div>
              </div>
            </router-link>
          </div>

          <p v-else class="mt-12 text-center text-muted">没有匹配的书籍，换个关键词试试。</p>
        </div>

        <!-- 右：侧栏三栏目 -->
        <aside class="space-y-6">
          <!-- 热门排行 -->
          <div class="card p-4">
            <h3 class="flex items-center gap-2 text-sm font-bold text-brand">
              <span class="text-gold">🔥</span> 热门排行
            </h3>
            <ol class="mt-3 space-y-3">
              <li v-for="(b, i) in topHot" :key="b.id">
                <router-link :to="`/book/${b.id}`" class="group flex items-center gap-3">
                  <span
                    class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    :class="i < 3 ? 'bg-gold text-brand' : 'bg-paper text-muted'"
                  >{{ i + 1 }}</span>
                  <span class="flex-1 truncate text-sm text-ink transition group-hover:text-gold">{{ b.title }}</span>
                  <span class="text-xs text-gold">{{ b.rating.toFixed(1) }}</span>
                </router-link>
              </li>
            </ol>
          </div>

          <!-- 标签 -->
          <div class="card p-4">
            <h3 class="flex items-center gap-2 text-sm font-bold text-brand">
              <span class="text-gold">🏷️</span> 标签
            </h3>
            <div class="mt-3 flex flex-wrap gap-2">
              <button
                v-for="t in allTags"
                :key="t"
                @click="toggleTag(t)"
                class="rounded-full border px-2.5 py-1 text-xs transition"
                :class="activeTag === t ? 'border-gold bg-gold/10 font-semibold text-brand' : 'border-line text-muted hover:border-gold'"
              >#{{ t }}</button>
            </div>
          </div>

          <!-- 归档 -->
          <div class="card p-4">
            <h3 class="flex items-center gap-2 text-sm font-bold text-brand">
              <span class="text-gold">🗓️</span> 归档
            </h3>
            <ul class="mt-3 space-y-1">
              <li v-for="g in archiveGroups" :key="g.key">
                <button
                  @click="toggleArchive(g.key)"
                  class="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-sm transition"
                  :class="activeArchive === g.key ? 'bg-gold/10 font-semibold text-brand' : 'text-muted hover:bg-paper'"
                >
                  <span>{{ g.label }}</span>
                  <span class="rounded-full bg-paper px-2 text-xs">{{ g.list.length }}</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

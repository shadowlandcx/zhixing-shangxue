<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { allTools, toolCategories, toolsByCategory, getTool } from '../data/tools/index'
import { getBook } from '../data/books'
import { recipes, RECIPE_STAGE_WEIGHT } from '../data/recipes'
import ToolCard from '../components/ToolCard.vue'

// 取模板的标杆示例行（供卡片内联预览）
function exampleRows(tpl) {
  if (!Array.isArray(tpl.exampleRows) || !tpl.exampleRows.length) return null
  return {
    head: tpl.rows[0],
    body: tpl.exampleRows.map((idx) => tpl.rows[idx])
  }
}
// 把原始工具补充成卡片需要的富对象（书名 / 示例 / 分类）
function enrich(t) {
  return {
    ...t,
    bookTitle: getBook(t.bookId)?.title || '',
    example: exampleRows(t),
    cat: toolCategories[t.category] || null
  }
}

// 分类筛选：all / marketing / sales / team
const activeCat = ref('all')
const highlightId = ref('')
const kw = ref('')
const validCats = ['all', ...Object.keys(toolCategories)]

// 多维筛选：类型 / 阶段 / 难度（与赛道分类、关键词叠加，AND 关系）
const selType = ref('all')
const selStage = ref('all')
const selDiff = ref('all')
const TYPE_OPTIONS = [
  { value: 'all', label: '全部类型' },
  { value: 'framework', label: '🖼️ 框架画布' },
  { value: 'checklist', label: '✅ 清单' },
  { value: 'scorecard', label: '📊 评分卡' },
  { value: 'script', label: '💬 话术' },
  { value: 'calculator', label: '🧮 测算' },
  { value: 'worksheet', label: '📝 工作表' }
]
const STAGE_OPTIONS = [
  { value: 'all', label: '全部阶段' },
  { value: 'diagnose', label: '🔍 诊断' },
  { value: 'plan', label: '🗺️ 规划' },
  { value: 'execute', label: '⚡ 执行' },
  { value: 'review', label: '🔁 复盘' }
]
const DIFF_OPTIONS = [
  { value: 'all', label: '全部难度' },
  { value: '1', label: '★ 入门' },
  { value: '2', label: '★★ 进阶' },
  { value: '3', label: '★★★ 高阶' }
]
function resetFilters() {
  selType.value = 'all'
  selStage.value = 'all'
  selDiff.value = 'all'
  kw.value = ''
}

// 来自能力地图 / 书页的 deep-link：
//   ?c=<分类>   预筛选赛道
//   ?tool=<id>  定位并高亮某个工具（先切到它所属分类，再平滑滚动 + 短暂高亮）
const route = useRoute()
function applyQuery() {
  const c = route.query.c
  if (c && validCats.includes(c)) activeCat.value = c
  const tid = route.query.tool
  if (tid && typeof tid === 'string') {
    const t = getTool(tid)
    if (t) {
      activeCat.value = t.category
      selType.value = selStage.value = selDiff.value = 'all'
      highlightId.value = t.id
      requestAnimationFrame(() => {
        const el = document.getElementById('tool-' + t.id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        setTimeout(() => { highlightId.value = '' }, 2800)
      })
    }
  }
  // ?recipe=<id>：从书页「相关场景」卡进来，自动展开对应场景配方
  const rid = route.query.recipe
  if (rid && typeof rid === 'string' && recipes.some((x) => x.id === rid)) {
    activeRecipe.value = rid
    selType.value = selStage.value = selDiff.value = 'all'
    requestAnimationFrame(() => {
      const el = document.getElementById('recipe-area')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }
}
onMounted(applyQuery)

const catList = computed(() => [
  { key: 'all', label: '全部', icon: '🧰', desc: '' },
  ...Object.values(toolCategories)
])

const filtered = computed(() => {
  const base = activeCat.value === 'all' ? allTools : toolsByCategory[activeCat.value] || []
  const q = kw.value.trim().toLowerCase()
  const ty = selType.value
  const st = selStage.value
  const df = selDiff.value
  return base.filter((t) => {
    if (ty !== 'all' && t.type !== ty) return false
    if (st !== 'all' && t.stage !== st) return false
    if (df !== 'all' && String(t.difficulty) !== df) return false
    if (q) {
      const bt = getBook(t.bookId)?.title || ''
      const hay = [t.title, t.desc, t.useCase, t.thinking, t.bookId, bt].join(' ').toLowerCase()
      if (!hay.includes(q)) return false
    }
    return true
  })
})
const resultCount = computed(() => filtered.value.length)

const cards = computed(() => filtered.value.map(enrich))

function countOf(key) {
  return key === 'all' ? allTools.length : (toolsByCategory[key] || []).length
}

// 场景配方：点击场景 → 展开跨书工具包（按 stage 排序）
const activeRecipe = ref('')
function toggleRecipe(id) { activeRecipe.value = activeRecipe.value === id ? '' : id }
const currentRecipe = computed(
  () => recipes.find((x) => x.id === activeRecipe.value) || { title: '', scenario: '', why: '' }
)
const recipeTools = computed(() => {
  const r = recipes.find((x) => x.id === activeRecipe.value)
  if (!r) return []
  return r.tools
    .map((id) => getTool(id))
    .filter(Boolean)
    .map(enrich)
    .sort((a, b) => (RECIPE_STAGE_WEIGHT[a.stage] ?? 9) - (RECIPE_STAGE_WEIGHT[b.stage] ?? 9))
})
</script>

<template>
  <article class="container-px py-10">
    <!-- 头部 -->
    <header class="rounded-xl border border-gold/40 bg-gradient-to-r from-gold/15 to-gold/5 p-6 sm:p-8">
      <div class="flex items-center gap-4">
        <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand text-2xl text-gold-light">🧰</span>
        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-gold-dark">实战工具箱</p>
          <h1 class="mt-1 text-2xl font-bold text-brand sm:text-3xl">把读过的书，变成拿起来就用的模板</h1>
        </div>
      </div>
      <p class="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
        共 <span class="font-semibold text-gold-dark">{{ allTools.length }}</span> 个可落地模板，全部来自读书研报里的真实框架。
        每个模板都已<span class="font-semibold text-gold-dark">预填一行标杆示例</span>（高亮），照着填就行；
        并附上<span class="font-semibold text-gold-dark">「我的思考」</span>——设计者视角的落地提醒，帮你避开最常见的坑。
        一键下载 Excel 或 PDF，回到工位直接用。
      </p>
    </header>

    <!-- 按场景领方案 -->
    <section id="recipe-area" class="mt-6 rounded-2xl border border-brand/30 bg-brand/5 p-5 sm:p-6 no-print">
      <div class="flex items-center gap-2">
        <span class="text-xl">🧭</span>
        <div>
          <p class="eyebrow text-brand">按场景领方案 · 不是搜工具，是领打法</p>
          <p class="mt-1 text-sm text-muted">选一个你正卡住的痛点，直接拿走一套跨书组合的工具包。</p>
        </div>
      </div>

      <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <button
          v-for="r in recipes"
          :key="r.id"
          @click="toggleRecipe(r.id)"
          class="rounded-xl border p-4 text-left transition"
          :class="activeRecipe === r.id ? 'border-gold bg-gold/10 shadow-sm' : 'border-line bg-white hover:border-gold'"
        >
          <p class="text-sm font-bold text-brand">{{ r.title }}</p>
          <p class="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">{{ r.painPoint }}</p>
          <p class="mt-2 text-xs text-gold-dark">📦 {{ r.tools.length }} 个工具 →</p>
        </button>
      </div>

      <!-- 展开的工具包 -->
      <div v-if="activeRecipe" class="mt-5 rounded-xl border border-gold/40 bg-white p-5">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="text-base font-bold text-brand">{{ currentRecipe.title }}</h3>
            <p class="mt-1 text-xs text-muted">适用：{{ currentRecipe.scenario }}</p>
            <p class="mt-2 text-sm leading-relaxed text-ink">💡 {{ currentRecipe.why }}</p>
          </div>
          <button class="btn-outline-sm shrink-0" @click="activeRecipe = ''">收起</button>
        </div>

        <div class="mt-4 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <ToolCard v-for="t in recipeTools" :key="t.id" :tool="t" />
        </div>
      </div>
    </section>

    <!-- 分类筛选 -->
    <div class="mt-6 flex flex-wrap gap-2">
      <button
        v-for="c in catList"
        :key="c.key"
        class="rounded-full border px-4 py-1.5 text-sm transition"
        :class="activeCat === c.key
          ? 'border-gold bg-gold text-white shadow-sm'
          : 'border-line bg-white text-muted hover:border-gold hover:text-gold'"
        @click="activeCat = c.key"
      >
        {{ c.icon }} {{ c.label }}
        <span class="ml-1 opacity-70">{{ countOf(c.key) }}</span>
      </button>
    </div>

    <!-- 多维筛选：类型 / 阶段 / 难度 -->
    <div class="mt-4 flex flex-wrap items-center gap-3">
      <select
        v-model="selType"
        class="rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none transition focus:border-gold"
      >
        <option v-for="o in TYPE_OPTIONS" :key="o.value" :value="o.value">{{ o.label }}</option>
      </select>
      <select
        v-model="selStage"
        class="rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none transition focus:border-gold"
      >
        <option v-for="o in STAGE_OPTIONS" :key="o.value" :value="o.value">{{ o.label }}</option>
      </select>
      <select
        v-model="selDiff"
        class="rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none transition focus:border-gold"
      >
        <option v-for="o in DIFF_OPTIONS" :key="o.value" :value="o.value">{{ o.label }}</option>
      </select>
      <button
        class="rounded-lg border border-line bg-white px-3 py-2 text-sm text-muted transition hover:border-gold hover:text-gold"
        @click="resetFilters"
      >↺ 重置</button>
      <span class="ml-auto text-sm text-muted">共 <span class="font-semibold text-gold-dark">{{ resultCount }}</span> 个工具</span>
    </div>

    <!-- 关键词搜索 -->
    <div class="mt-4 relative max-w-sm">
      <input
        v-model="kw"
        type="search"
        placeholder="搜工具名 / 场景 / 书…"
        class="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm outline-none focus:border-gold"
      />
    </div>

    <!-- 模板卡片网格 -->
    <div class="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      <ToolCard
        v-for="t in cards"
        :key="t.id"
        :tool="t"
        :highlight="highlightId === t.id"
        :id="'tool-' + t.id"
      />
    </div>

    <!-- 底部提示 -->
    <p class="mt-10 text-center text-sm text-muted">
      每个工具都对应一本书的实战方法论 · 想要某本专属工具？去对应
      <router-link to="/books" class="text-gold hover:underline">读书研报</router-link>
      页查看。
    </p>
  </article>
</template>

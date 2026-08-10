<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { marked } from 'marked'
import { books, getBook, getBookContent, getBookReport } from '../data/books'
import { tracks } from '../data/tracks'
import { useUser } from '../store/useUser'
import { templatesForBook, toolCategories } from '../data/tools/index'
import { recipes } from '../data/recipes'
import { pathContextForBook } from '../data/reading-paths'
import { downloadExcel, downloadPdf } from '../utils/download'
import { bookShareUrl, canNativeShare, nativeShare, copyText, qrImageUrl } from '../utils/share'

const props = defineProps({ id: String })
const book = computed(() => getBook(props.id))

// 书架内上一本 / 下一本（按 books-meta 顺序）
const idx = computed(() => books.findIndex((b) => b.id === props.id))
const prevBook = computed(() => (idx.value > 0 ? books[idx.value - 1] : null))
const nextBook = computed(() => (idx.value < books.length - 1 ? books[idx.value + 1] : null))

// 阅读路径联动：本书在哪些路径里、下一步读哪本
const pathCtx = computed(() => pathContextForBook(props.id))

// 正文按需加载（脱离主包，打开时再拉取分片）
const content = ref('')
const reportFb = ref('')
const loading = ref(true)
const error = ref(null)
const TIMEOUT_MS = 15000
async function loadContent(id) {
  loading.value = true
  error.value = null
  let timer = null
  try {
    const timeoutPromise = new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error('加载超时，请检查网络后重试')), TIMEOUT_MS)
    })
    const contentPromise = getBookContent(id)
    const reportPromise = getBookReport(id)
    const [c, r] = await Promise.race([Promise.all([contentPromise, reportPromise]), timeoutPromise])
    content.value = c || ''
    reportFb.value = r || ''
  } catch (e) {
    error.value = e?.message || '笔记加载失败'
    console.error('[BookDetail] load failed for', id, e)
  } finally {
    clearTimeout(timer)
    loading.value = false
  }
}
onMounted(() => loadContent(props.id))
watch(() => props.id, (id) => loadContent(id))

// 笔记 / 研报 同页切换
const activeTab = ref('note')
const hasNote = computed(() => (content.value || '').trim().length > 0)
const hasReport = computed(() => (reportFb.value || '').trim().length > 0)
const html = computed(() => {
  const primary = activeTab.value === 'report' ? reportFb.value : content.value
  const fallback = activeTab.value === 'report' ? content.value : reportFb.value
  return marked.parse(primary || fallback || '')
})

// 关联赛道：把读到的书，链回对应阅读视角
const relatedLinks = computed(() => {
  const ids = book.value.relatedTracks || []
  return ids
    .map((id) => {
      const t = tracks[id]
      return t ? { to: `/track/${id}`, label: `${t.name} 赛道` } : null
    })
    .filter(Boolean)
})

// 同一著作的不同版本（原典 ↔ 中文译本）
const originalBook = computed(() =>
  book.value.editionOf ? getBook(book.value.editionOf) : null
)
const siblingBooks = computed(() =>
  book.value.series
    ? books.filter((b) => b.series === book.value.series && b.id !== props.id)
    : []
)

// 本书实战工具：覆盖该书的可下载模板（含「我的思考」）
const bookTools = computed(() =>
  templatesForBook(props.id).map((t) => ({
    ...t,
    catLabel: toolCategories[t.category]?.label || t.category,
    example: exampleRowsOf(t)
  }))
)
function exampleRowsOf(tpl) {
  if (!Array.isArray(tpl.exampleRows) || !tpl.exampleRows.length) return null
  return { head: tpl.rows[0], body: tpl.exampleRows.map((i) => tpl.rows[i]) }
}

// 书页底部「相关场景」推荐卡：本书工具命中哪些场景配方（动态计算）
const relatedRecipes = computed(() => {
  const bookIds = new Set(bookTools.value.map((t) => t.id))
  return recipes
    .map((r) => {
      const hits = r.tools.filter((id) => bookIds.has(id))
      return hits.length ? { ...r, hitCount: hits.length } : null
    })
    .filter(Boolean)
})

// 工具包按「类型」归类展示
const TYPE_ORDER = ['framework', 'checklist', 'scorecard', 'script', 'calculator', 'worksheet']
const TYPE_ICON = {
  framework: '🖼️', checklist: '✅', scorecard: '📊',
  script: '💬', calculator: '🧮', worksheet: '📝'
}
const TYPE_DESC = {
  framework: '结构化画布，照着填就能用',
  checklist: '一步一勾的执行清单',
  scorecard: '量化自评 / 打分',
  script: '可直接照念的话术卡',
  calculator: '输入即出数的测算表',
  worksheet: '边读边记的工作表'
}
const TYPE_META = {
  framework: '框架画布',
  checklist: '清单',
  scorecard: '评分卡',
  script: '话术',
  calculator: '测算',
  worksheet: '工作表'
}
function typeLabel(t) {
  return TYPE_META[t.type] || '工具'
}
function difficultyStars(n) {
  const k = n || 1
  return '★'.repeat(k) + '☆'.repeat(3 - k)
}
const toolByType = computed(() => {
  const groups = {}
  for (const t of bookTools.value) {
    const tp = t.type || 'framework'
    ;(groups[tp] = groups[tp] || []).push(t)
  }
  return TYPE_ORDER.filter((tp) => groups[tp]).map((tp) => ({
    key: tp,
    label: TYPE_META[tp] || tp,
    icon: TYPE_ICON[tp] || '📑',
    desc: TYPE_DESC[tp] || '',
    tools: groups[tp]
  }))
})

// 读书进度：进入即记已读，写笔记记已保存
const { markBookRead, setBookNoteSaved } = useUser()

// 下载 Excel：xlsx 分包首次加载有等待，加 loading 态防误触
const downloadingId = ref('')
async function onExcel(t) {
  downloadingId.value = t.id
  try {
    await downloadExcel(t)
  } finally {
    downloadingId.value = ''
  }
}

// 个人笔记：存浏览器 localStorage，按书 id 区分
const noteKey = computed(() => `rn-note:${props.id}`)
const note = ref('')
const savedAt = ref('')

function loadNote() {
  const raw = localStorage.getItem(noteKey.value)
  note.value = raw ? raw.content : ''
  savedAt.value = raw ? raw.savedAt : ''
}
function saveNote() {
  const t = new Date().toLocaleString('zh-CN')
  localStorage.setItem(noteKey.value, JSON.stringify({ content: note.value, savedAt: t }))
  savedAt.value = t
  setBookNoteSaved(props.id)
}
onMounted(() => { loadNote(); markBookRead(props.id) })
watch(() => props.id, (id) => { loadNote(); markBookRead(id) })

function printBook() {
  window.print()
}

// 分享：移动端系统面板直达微信/飞书；桌面端弹层给复制链接 + 二维码
const showShare = ref(false)
const copied = ref(false)
const shareUrl = computed(() => bookShareUrl(props.id))
const qrUrl = computed(() => qrImageUrl(shareUrl.value, 200))
async function onShare() {
  if (canNativeShare()) {
    await nativeShare({
      title: `《${book.value.title}》· 知行商学`,
      text: `推荐一本好书：《${book.value.title}》（${book.value.author}）`,
      url: shareUrl.value
    })
    return
  }
  showShare.value = !showShare.value
}
async function onCopy() {
  const ok = await copyText(shareUrl.value)
  if (ok) {
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  }
}
</script>

<template>
  <article class="container-px py-10">
    <!-- 面包屑 -->
    <nav class="mb-6 text-sm text-muted no-print">
      <router-link to="/books" class="hover:text-gold">书架</router-link>
      <span class="mx-2">/</span>
      <span class="text-ink">{{ book.title }}</span>
    </nav>

    <!-- 书讯头 -->
    <header class="rounded-xl border border-line bg-white p-6 sm:p-8">
      <div class="flex flex-col gap-6 sm:flex-row">
        <div class="flex h-40 w-28 shrink-0 items-end rounded-lg p-4 shadow-sm" :style="{ background: book.cover }">
          <span class="text-base font-bold text-white/95">{{ book.title }}</span>
        </div>
        <div class="flex-1">
          <p class="text-gold">{{ book.subtitle }} · 打印学习版</p>
          <h1 class="mt-1 text-2xl font-bold text-brand">{{ book.title }}</h1>
          <p class="mt-1 text-muted">原著作者：<strong class="text-ink">{{ book.author }}</strong></p>
          <p class="text-sm text-muted">出版社：{{ book.meta.publisher }} · 研读视角：{{ book.meta.role }} · 整理：{{ book.meta.date }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="rounded-full bg-paper px-3 py-1 text-sm text-brand">{{ book.category }}</span>
            <span v-if="book.priority" class="rounded-full px-3 py-1 text-sm" :class="book.priority === '必读' ? 'bg-brand text-white' : 'bg-paper text-muted'">{{ book.priority }}</span>
            <span v-if="book.rating" class="rounded-full bg-gold/10 px-3 py-1 text-sm text-gold">⭐ {{ book.rating.toFixed(1) }}</span>
          </div>
          <p v-if="book.feishuUrl" class="mt-2 text-xs text-muted">来源：<a :href="book.feishuUrl" target="_blank" rel="noopener" class="text-gold hover:underline">锐捷读书会飞书书单 ↗</a></p>
        </div>
      </div>

      <!-- 核心数字 -->
      <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div v-for="s in book.stats" :key="s.label" class="rounded-lg bg-paper p-4 text-center">
          <p class="text-2xl font-bold text-brand">{{ s.num }}</p>
          <p class="mt-1 text-xs text-muted">{{ s.label }}</p>
        </div>
      </div>

      <!-- 核心命题 -->
      <blockquote v-if="book.proposition" class="mt-6 border-l-4 border-gold bg-paper px-4 py-3 text-brand">
        {{ book.proposition }}
      </blockquote>

      <div class="mt-5 flex flex-wrap gap-3 no-print">
        <button class="btn-gold" @click="printBook">🖨 打印学习版</button>
        <a href="#my-note" class="btn-outline">✍️ 写我的笔记</a>
        <button class="btn-outline" @click="onShare">🔗 分享</button>
      </div>

      <!-- 分享弹层：复制链接 + 二维码（移动端直接走系统分享面板，不弹此层） -->
      <div
        v-if="showShare"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 no-print"
        @click="showShare = false"
      >
        <div class="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl" @click.stop>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-bold text-brand">分享《{{ book.title }}》</h3>
            <button class="text-muted transition hover:text-ink" @click="showShare = false" aria-label="关闭">✕</button>
          </div>
          <p class="mt-1 text-xs text-muted">微信 / 飞书：扫二维码打开本书页后转发，或直接复制链接粘贴。</p>
          <div class="mt-4 flex flex-col items-center">
            <img
              :src="qrUrl"
              :alt="`《${book.title}》分享二维码`"
              class="h-44 w-44 rounded-lg border border-line"
              @error="$event.target.style.display = 'none'"
            />
            <p class="mt-2 text-center text-xs text-muted">微信 / 飞书「扫一扫」打开本书页</p>
          </div>
          <div class="mt-4 rounded-lg bg-paper px-3 py-2">
            <p class="text-xs text-muted">分享链接：</p>
            <p class="mt-0.5 break-all text-xs text-ink">{{ shareUrl }}</p>
          </div>
          <button class="btn-gold mt-4 w-full" @click="onCopy">
            {{ copied ? '✓ 已复制链接' : '📋 复制分享链接' }}
          </button>
        </div>
      </div>
    </header>

    <!-- 笔记 / 研报 同页切换 -->
    <div class="mt-6 flex flex-wrap gap-2 no-print">
      <button :class="activeTab === 'note' ? 'btn-gold' : 'btn-outline'" @click="activeTab = 'note'">📖 读书笔记<span v-if="!hasNote" class="ml-1 text-xs opacity-70">（暂无）</span></button>
      <button :class="activeTab === 'report' ? 'btn-gold' : 'btn-outline'" @click="activeTab = 'report'">📊 读书研报<span v-if="!hasReport" class="ml-1 text-xs opacity-70">（暂无）</span></button>
    </div>

    <!-- 关联课程 -->
    <section v-if="relatedLinks.length" class="mt-6 rounded-xl border border-gold/40 bg-gold/5 p-5 no-print">
      <p class="eyebrow text-gold-dark">关联赛道 · 同视角延伸阅读</p>
      <div class="mt-3 flex flex-wrap gap-3">
        <router-link
          v-for="l in relatedLinks"
          :key="l.to"
          :to="l.to"
          class="btn-outline border-gold text-gold transition hover:bg-gold hover:text-white"
        >🎯 {{ l.label }}</router-link>
      </div>
    </section>

    <!-- 阅读路径 · 下一步读（策展式进阶链） -->
    <section v-if="pathCtx.length" class="mt-6 rounded-xl border border-brand/30 bg-brand/5 p-5 no-print">
      <p class="eyebrow text-brand">阅读路径 · 下一步读</p>
      <div class="mt-3 space-y-4">
        <div v-for="c in pathCtx" :key="c.path.id">
          <router-link :to="`/paths/${c.path.id}`" class="text-sm font-semibold text-brand transition hover:underline">📍 {{ c.path.title }}</router-link>
          <p class="mt-1 text-xs text-muted">第 {{ c.index + 1 }} / {{ c.path.steps.length }} 步 · {{ c.path.steps[c.index].note }}</p>
          <router-link
            v-if="c.next"
            :to="`/book/${c.next}`"
            class="mt-2 inline-flex items-center gap-2 btn-outline border-brand text-brand transition hover:bg-brand hover:text-white"
          >➡️ 下一步读：{{ getBook(c.next).title }}</router-link>
          <p v-else class="mt-2 text-xs text-gold-dark">🎉 这是该路径的最后一步，恭喜走完这条进阶链！</p>
        </div>
      </div>
    </section>

    <!-- 同一著作 · 中文译本（扩展） -->
    <section v-if="originalBook" class="mt-6 rounded-xl border border-brand/30 bg-brand/5 p-5 no-print">
      <p class="eyebrow text-brand">原典 · 回到母本</p>
      <router-link
        :to="`/book/${originalBook.id}`"
        class="mt-3 inline-flex items-center gap-2 btn-outline border-brand text-brand transition hover:bg-brand hover:text-white"
      >📕 {{ originalBook.title }}（{{ originalBook.meta && originalBook.meta.publisher }}）</router-link>
    </section>
    <section v-else-if="siblingBooks.length" class="mt-6 rounded-xl border border-gold/40 bg-gold/5 p-5 no-print">
      <p class="eyebrow text-gold-dark">中文译本（扩展） · 同一著作的不同版本</p>
      <div class="mt-3 flex flex-wrap gap-3">
        <router-link
          v-for="b in siblingBooks"
          :key="b.id"
          :to="`/book/${b.id}`"
          class="btn-outline border-gold text-gold transition hover:bg-gold hover:text-white"
        >📘 {{ b.title }}</router-link>
      </div>
    </section>

    <!-- 实战案例卡（仅该书含 cases 时显示） -->
    <section v-if="book.cases && book.cases.length" class="mt-6 space-y-4">
      <p class="eyebrow text-brand">实战案例卡 · 把理论用进真实业务</p>
      <div
        v-for="(c, i) in book.cases"
        :key="i"
        class="rounded-xl border border-line bg-white p-6"
      >
        <h3 class="text-lg font-bold text-brand">📌 {{ c.title }}</h3>
        <div class="mt-4 grid gap-4 md:grid-cols-2">
          <div class="rounded-lg bg-paper p-4">
            <p class="text-xs font-semibold uppercase tracking-wider text-muted">背景</p>
            <p class="mt-1 text-sm leading-relaxed text-ink">{{ c.scene }}</p>
          </div>
          <div class="rounded-lg bg-paper p-4">
            <p class="text-xs font-semibold uppercase tracking-wider text-muted">冲突</p>
            <p class="mt-1 text-sm leading-relaxed text-ink">{{ c.conflict }}</p>
          </div>
          <div v-if="c.action" class="rounded-lg bg-gold/5 p-4">
            <p class="text-xs font-semibold uppercase tracking-wider text-gold-dark">动作（DBS 应用）</p>
            <p class="mt-1 text-sm leading-relaxed text-ink">{{ c.action }}</p>
          </div>
          <div class="rounded-lg bg-gold/5 p-4">
            <p class="text-xs font-semibold uppercase tracking-wider text-gold-dark">结果</p>
            <p class="mt-1 text-sm leading-relaxed text-ink">{{ c.outcome }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 正文（Markdown 渲染，按需加载） -->
    <div class="mt-8 rounded-xl border border-line bg-white p-6 sm:p-10">
      <div v-if="loading" class="flex items-center justify-center gap-3 py-12 text-sm text-muted">
        <span class="h-4 w-4 animate-spin rounded-full border-2 border-gold border-t-transparent"></span>
        正在加载读书笔记…（若超过 {{ TIMEOUT_MS/1000 }} 秒无响应，请刷新或切换网络）
      </div>
      <div v-else-if="error" class="py-12 text-center text-sm text-red-600">
        <p class="font-semibold">⚠️ 笔记加载失败</p>
        <p class="mt-2 text-muted">{{ error }}</p>
        <p class="mt-1 text-xs text-muted">可能原因：网络波动、浏览器缓存旧版本、或该分片未正确生成。</p>
        <div class="mt-4 flex justify-center gap-3">
          <button class="btn-gold" @click="loadContent(props.id)">🔄 重新加载</button>
          <button class="btn-outline" @click="window.location.reload()">🔄 刷新页面</button>
        </div>
      </div>
      <div v-else class="prose-note" v-html="html"></div>
    </div>

    <!-- 本书实战工具包（按「类型」归类：框架画布 / 清单 / 评分卡 / 话术 / 测算 / 工作表） -->
    <section v-if="bookTools.length" class="mt-6 space-y-6 no-print">
      <div>
        <p class="eyebrow text-brand">本书实战工具包 · 拿来就能用</p>
        <p class="mt-1 text-sm text-muted">共 {{ bookTools.length }} 个工具，按「类型」归类——框架画布、清单、评分卡、话术、测算、工作表；按你要的形态直接取用。</p>
      </div>

      <div
        v-for="grp in toolByType"
        :key="grp.key"
        class="rounded-2xl border border-line bg-paper/50 p-5"
      >
        <div class="flex items-center gap-3">
          <span class="text-2xl">{{ grp.icon }}</span>
          <div>
            <h3 class="text-base font-bold text-brand">{{ grp.label }}</h3>
            <p class="text-xs text-muted">{{ grp.desc }}</p>
          </div>
          <span class="ml-auto rounded-full bg-white px-3 py-1 text-xs text-muted shadow-sm">{{ grp.tools.length }} 个</span>
        </div>

        <div class="mt-4 grid gap-4 md:grid-cols-2">
          <div
            v-for="t in grp.tools"
            :key="t.id"
            class="flex flex-col rounded-xl border border-line bg-white p-5"
          >
            <h4 class="text-base font-bold text-brand">📑 {{ t.title }}</h4>

            <div class="mt-2 flex flex-wrap items-center gap-2">
              <span v-if="t.difficulty" class="rounded-full bg-gold/10 px-2.5 py-1 text-xs text-gold">难度 {{ difficultyStars(t.difficulty) }}</span>
              <span v-if="t.duration" class="rounded-full bg-paper px-2.5 py-1 text-xs text-muted">⏱ {{ t.duration }}</span>
            </div>

            <p class="mt-2 text-sm leading-relaxed text-muted">{{ t.desc }}</p>

            <div v-if="t.useCase" class="mt-3 rounded-lg bg-paper px-3 py-2">
              <p class="text-xs font-semibold text-gold-dark">🎯 适用场景</p>
              <p class="mt-1 text-xs leading-relaxed text-ink">{{ t.useCase }}</p>
            </div>

            <div v-if="t.thinking" class="mt-3 rounded-lg border-l-4 border-brand bg-brand/5 px-3 py-2">
              <p class="text-xs font-semibold text-brand">🧠 我的思考</p>
              <p class="mt-1 text-xs leading-relaxed text-ink">{{ t.thinking }}</p>
            </div>

            <!-- 示例填法预览 -->
            <div v-if="t.example" class="mt-3">
              <p class="mb-1.5 text-xs font-semibold text-gold-dark">💡 标杆示例填法（高亮行）</p>
              <div class="max-h-40 overflow-auto rounded-lg border border-line">
                <table class="w-full border-collapse text-xs">
                  <thead>
                    <tr class="bg-brand text-white">
                      <th
                        v-for="(h, i) in t.example.head"
                        :key="i"
                        class="border border-line px-2 py-1.5 text-left font-medium"
                      >{{ h }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(r, ri) in t.example.body" :key="ri" class="bg-gold/10">
                      <td
                        v-for="(c, ci) in r"
                        :key="ci"
                        class="border border-gold/30 px-2 py-1.5 align-top text-ink"
                      >{{ c || '—' }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div v-if="t.pitfalls" class="mt-3 rounded-lg border-l-4 border-red-300 bg-red-50 px-3 py-2">
              <p class="text-xs font-semibold text-red-700">⚠️ 常见坑</p>
              <p class="mt-1 text-xs leading-relaxed text-ink">{{ t.pitfalls }}</p>
            </div>

            <div v-if="t.successMetric" class="mt-2 rounded-lg bg-gold/5 px-3 py-2">
              <p class="text-xs font-semibold text-gold-dark">✅ 怎么算用对</p>
              <p class="mt-1 text-xs leading-relaxed text-ink">{{ t.successMetric }}</p>
            </div>

            <div class="mt-4 flex flex-wrap gap-2 pt-1">
              <button class="btn-gold-sm" :disabled="downloadingId === t.id" @click="onExcel(t)">
                <span v-if="downloadingId === t.id" class="inline-flex items-center gap-1"><span class="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent"></span>生成中…</span>
                <span v-else>⬇ Excel</span>
              </button>
              <button class="btn-outline-sm" @click="downloadPdf(t, book.title)">🖨 PDF</button>
            </div>
          </div>
        </div>
      </div>

      <router-link to="/toolbox" class="btn-outline border-gold text-gold transition hover:bg-gold hover:text-white">查看全部工具箱 →</router-link>
    </section>

    <!-- 相关场景推荐：本书工具命中哪些「领方案」场景 -->
    <section v-if="relatedRecipes.length" class="mt-6 rounded-2xl border border-gold/40 bg-gold/5 p-5 no-print">
      <div class="flex items-center gap-2">
        <span class="text-xl">🧭</span>
        <div>
          <p class="eyebrow text-gold-dark">相关场景 · 这些工具还能这样组队</p>
          <p class="mt-1 text-sm text-muted">本书的实战工具被收录进以下场景配方——点开即到工具箱领整套打法。</p>
        </div>
      </div>

      <div class="mt-4 grid gap-3 sm:grid-cols-2">
        <router-link
          v-for="r in relatedRecipes"
          :key="r.id"
          :to="`/toolbox?recipe=${r.id}`"
          class="flex flex-col rounded-xl border border-line bg-white p-4 transition hover:border-gold hover:shadow-sm"
        >
          <div class="flex items-center justify-between gap-2">
            <p class="text-sm font-bold text-brand">{{ r.title }}</p>
            <span class="shrink-0 rounded-full bg-gold/10 px-2 py-0.5 text-xs text-gold">本书 {{ r.hitCount }} 个</span>
          </div>
          <p class="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">{{ r.painPoint }}</p>
          <p class="mt-2 text-xs text-gold-dark">📦 共 {{ r.tools.length }} 个工具 · 领整套 →</p>
        </router-link>
      </div>
    </section>

    <!-- 个人笔记（本地存储） -->
    <section id="my-note" class="mt-8 rounded-xl border border-line bg-white p-6 no-print">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-bold text-brand">✍️ 我的个人观点</h2>
        <span v-if="savedAt" class="text-xs text-muted">已保存：{{ savedAt }}</span>
      </div>
      <textarea
        v-model="note"
        rows="6"
        placeholder="写下你的感悟、反驳或本周能立刻用的方法…（自动保存在本浏览器）"
        class="mt-3 w-full rounded-lg border border-line bg-paper p-4 text-sm outline-none focus:border-gold"
      ></textarea>
      <div class="mt-3 flex gap-3">
        <button class="btn-gold" @click="saveNote">保存笔记</button>
        <button class="btn-outline" @click="note = ''; saveNote()">清空</button>
      </div>
    </section>

    <!-- 上一本 / 下一本 翻页 -->
    <nav class="mt-10 grid gap-4 sm:grid-cols-2 no-print">
      <router-link
        v-if="prevBook"
        :to="`/book/${prevBook.id}`"
        class="group flex flex-col rounded-xl border border-line bg-white p-5 transition hover:border-gold hover:shadow-md"
      >
        <span class="text-xs text-muted">← 上一本</span>
        <span class="mt-1 font-semibold text-brand transition group-hover:text-gold">{{ prevBook.title }}</span>
      </router-link>
      <span v-else></span>
      <router-link
        v-if="nextBook"
        :to="`/book/${nextBook.id}`"
        class="group flex flex-col items-end rounded-xl border border-line bg-white p-5 text-right transition hover:border-gold hover:shadow-md"
      >
        <span class="text-xs text-muted">下一本 →</span>
        <span class="mt-1 font-semibold text-brand transition group-hover:text-gold">{{ nextBook.title }}</span>
      </router-link>
      <span v-else></span>
    </nav>
  </article>
</template>

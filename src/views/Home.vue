<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { trackList } from '../data/tracks'
import { books } from '../data/books'
import { allTools } from '../data/tools/index'
import { themes } from '../data/themes'
import { readingPaths, getPath } from '../data/reading-paths'

// 首页「本周开读」推荐位：政企打单路径与全部 8 大主题
const featuredPath = computed(() => getPath('tog-deal'))

const router = useRouter()
// 首页精选书单：固定把两本新书放到轮播前列，再补足高评分书目
const featuredIds = [
  'cognitive-awakening',
  'danaher-model',
  'tech-product-marketing',
  'salesforce-legend',
  'singularity-nearer',
  'zero-trust'
]
const featuredBooks = computed(() =>
  featuredIds.map((id) => books.find((b) => b.id === id)).filter(Boolean)
)
const bookScroller = ref(null)
function scrollBooks(dir) {
  const el = bookScroller.value
  if (!el) return
  el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' })
}
// hash 路由下不能用 <a href="#tracks">（会覆盖路由跳 404），改成 JS 平滑滚动
function scrollToTracks() {
  document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// 首页搜索聚合：提交后跳转到 /search 做跨工具 + 读书研报检索
const searchQ = ref('')
function onSearch() {
  const kw = searchQ.value.trim()
  router.push(kw ? { path: '/search', query: { q: kw } } : { path: '/search' })
}
</script>

<template>
  <!-- Hero -->
  <section class="bg-gradient-to-b from-brand to-brand-dark text-white">
    <div class="container-px grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
      <div>
        <p class="eyebrow text-gold-light">企业经营 · 读书研报</p>
        <h1 class="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          读透商业经典<br/>把书读成自己的方法论
        </h1>
        <p class="mt-5 max-w-xl text-base leading-relaxed text-white/70">
          {{ books.length }} 本精选商业读物，每本附读书笔记与实战研报。带着销售、市场、团队三视角拆解，读完就能用。
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <button type="button" class="btn-gold" @click="scrollToTracks">开始学习</button>
          <router-link to="/books" class="btn-outline border-white/30 text-white hover:border-gold hover:text-gold">读书研报 →</router-link>
        </div>
        <div class="mt-10 flex gap-8">
          <div><div class="text-2xl font-bold text-gold-light">{{ books.length }} 本</div><div class="text-sm text-white/60">读书研报</div></div>
          <div><div class="text-2xl font-bold text-gold-light">3 大</div><div class="text-sm text-white/60">阅读视角</div></div>
          <div><div class="text-2xl font-bold text-gold-light">本地</div><div class="text-sm text-white/60">个人笔记</div></div>
        </div>
      </div>
      <div class="relative hidden lg:block">
        <div class="card p-6">
          <p class="eyebrow">本周精选</p>
          <h3 class="mt-2 text-lg font-semibold text-brand">销售管理 · 大客户突破</h3>
          <p class="mt-2 text-sm text-muted">用决策人地图拆关键关系，把单子从 30% 推到 80%。</p>
          <div class="mt-4 flex items-center gap-3">
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">▶</span>
            <div><div class="text-sm font-medium text-ink">读书笔记 + 研报</div><div class="text-xs text-muted">含可下载作战模板</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 首页搜索聚合：跨工具 + 读书研报 -->
  <section class="container-px -mt-8 relative z-20">
    <form class="mx-auto flex max-w-2xl gap-3 rounded-xl border border-line bg-white p-2 shadow-card" @submit.prevent="onSearch">
      <input
        v-model="searchQ"
        type="text"
        placeholder="搜索书籍、分类…（如：SPIN、大客户、定位、团队）"
        class="flex-1 rounded-lg px-4 py-2.5 text-sm outline-none"
      />
      <button class="btn-gold shrink-0" type="submit">搜索</button>
    </form>
  </section>

  <!-- 工具箱 entry -->
  <section class="container-px mt-4 relative z-10">
    <router-link to="/toolbox" class="block rounded-xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-gold hover:shadow-lg sm:p-6">
      <div class="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-4">
          <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand text-2xl text-gold-light">🧰</span>
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-gold-dark">实战工具箱 · {{ allTools.length }} 个可落地模板</p>
            <h3 class="mt-1 text-lg font-bold text-brand sm:text-xl">读完就动手：每个模板都预填了标杆示例</h3>
            <p class="mt-1 text-sm text-muted">定位卡、客户经营看板、NRR 仪表盘… 照着高亮示例填，一键下载 Excel / PDF。</p>
          </div>
        </div>
        <span class="btn-gold shrink-0">前往工具箱 →</span>
      </div>
    </router-link>
  </section>

  <!-- 三大新入口引导卡 -->
  <section class="container-px mt-6 relative z-10">
    <div class="grid gap-4 sm:grid-cols-3">
      <router-link to="/themes" class="flex items-center gap-4 rounded-xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-gold hover:shadow-lg">
        <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-2xl">🧭</span>
        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-gold-dark">主题导览</p>
          <h3 class="mt-0.5 text-lg font-bold text-brand">按业务问题找书</h3>
          <p class="mt-1 text-sm text-muted">8 大主题，跨分类聚合 · 探索 →</p>
        </div>
      </router-link>
      <router-link to="/paths" class="flex items-center gap-4 rounded-xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-gold hover:shadow-lg">
        <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-2xl">📍</span>
        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-gold-dark">阅读路径</p>
          <h3 class="mt-0.5 text-lg font-bold text-brand">该先读哪本？</h3>
          <p class="mt-1 text-sm text-muted">6 条精读进阶链 · 探索 →</p>
        </div>
      </router-link>
      <router-link to="/tog" class="flex items-center gap-4 rounded-xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-gold hover:shadow-lg">
        <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-2xl">🏛️</span>
        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-gold-dark">政企 ToG 垂直</p>
          <h3 class="mt-0.5 text-lg font-bold text-brand">政企 ToG 打单</h3>
          <p class="mt-1 text-sm text-muted">书单+路径+工具 · 探索 →</p>
        </div>
      </router-link>
    </div>
  </section>

  <!-- Tracks -->
  <section id="tracks" class="container-px py-16">
    <div class="text-center">
      <p class="eyebrow">{{ trackList.length }} 大能力域 · 覆盖 {{ books.length }} 本</p>
      <h2 class="mt-3 text-2xl font-bold text-brand sm:text-3xl">选你的战场，学你的打法</h2>
      <p class="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted">
        按「能力域」而非按岗位分类——同一个打单难题，往往需要跨域组合阅读。
      </p>
    </div>
    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <router-link
        v-for="t in trackList"
        :key="t.id"
        :to="`/track/${t.id}`"
        class="card group p-6 transition hover:-translate-y-1 hover:shadow-lg"
      >
        <div class="flex items-start justify-between gap-2">
          <div class="text-4xl">{{ t.icon }}</div>
          <span class="shrink-0 rounded-full bg-paper px-2 py-0.5 text-xs font-medium text-muted">{{ t.relatedBooks.length }} 本</span>
        </div>
        <h3 class="mt-4 text-xl font-semibold text-brand group-hover:text-gold-dark">{{ t.name }}</h3>
        <p class="mt-1 text-sm font-medium text-gold-dark">{{ t.tagline }}</p>
        <p class="mt-3 text-sm leading-relaxed text-muted">{{ t.desc }}</p>
        <span class="mt-5 inline-flex items-center text-sm font-medium text-brand">进入分类 →</span>
      </router-link>

      <!-- 末位 CTA：填满 4 列网格末行，同时给一个明确的兜底入口 -->
      <router-link
        to="/books"
        class="group flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-line p-6 text-center transition hover:border-gold hover:bg-paper"
      >
        <div class="text-3xl">📖</div>
        <p class="mt-3 text-base font-semibold text-brand">浏览全部 {{ books.length }} 本</p>
        <p class="mt-1 text-sm text-muted">按分类筛选 · 按评分排序</p>
        <span class="mt-4 inline-flex items-center text-sm font-medium text-gold-dark">进入书架 →</span>
      </router-link>
    </div>
  </section>

  <!-- 精选书单（轮播） -->
  <section class="container-px py-16">
    <div class="flex items-end justify-between">
      <div>
        <p class="eyebrow">读书研报 · 营销+销售视角</p>
        <h2 class="mt-3 text-2xl font-bold text-brand sm:text-3xl">精选书单，读透经营</h2>
      </div>
      <div class="flex items-center gap-2">
        <button class="flex h-9 w-9 items-center justify-center rounded-full border border-line text-brand transition hover:border-gold hover:text-gold" @click="scrollBooks(-1)" aria-label="上一组">‹</button>
        <button class="flex h-9 w-9 items-center justify-center rounded-full border border-line text-brand transition hover:border-gold hover:text-gold" @click="scrollBooks(1)" aria-label="下一组">›</button>
        <router-link to="/books" class="ml-2 text-sm font-medium text-brand hover:text-gold">查看全部 →</router-link>
      </div>
    </div>
    <div ref="bookScroller" class="no-scrollbar mt-8 flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2">
      <router-link
        v-for="b in featuredBooks"
        :key="b.id"
        :to="`/book/${b.id}`"
        class="card flex w-[280px] shrink-0 snap-start flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-lg sm:w-[300px]"
      >
        <div class="flex h-36 items-end p-4" :style="{ background: b.cover }">
          <span class="text-lg font-bold text-white/95">{{ b.title }}</span>
        </div>
        <div class="flex flex-1 flex-col p-5">
          <p class="text-sm text-muted">{{ b.author }}</p>
          <h3 class="mt-1 font-semibold text-ink">{{ b.title }}</h3>
          <p class="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{{ b.intro }}</p>
          <div class="mt-3 flex items-center justify-between">
            <span class="rounded-full bg-paper px-2.5 py-1 text-xs text-brand">{{ b.category }}</span>
            <span v-if="b.rating" class="text-sm text-gold">⭐ {{ b.rating.toFixed(1) }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </section>

  <!-- 本周开读 · 阅读路径 + 主题 -->
  <section class="bg-paper/40 py-16">
    <div class="container-px">
      <div class="text-center">
        <p class="eyebrow">本周开读</p>
        <h2 class="mt-3 text-2xl font-bold text-brand sm:text-3xl">别随便翻，照着路径和主题读</h2>
        <p class="mt-2 text-sm text-muted">按业务目标编排的精读顺序，和按真实问题聚合的主题书单。</p>
      </div>

      <!-- 阅读路径卡片网格 -->
      <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <router-link
          v-for="p in readingPaths"
          :key="p.id"
          :to="`/paths/${p.id}`"
          class="card flex flex-col p-6 transition hover:-translate-y-1 hover:shadow-lg"
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

      <!-- 主题快捷入口 -->
      <div class="mt-12">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-brand">或按主题直接找</h3>
          <router-link to="/themes" class="text-sm font-medium text-brand hover:text-gold">全部主题 →</router-link>
        </div>
        <div class="mt-4 flex flex-wrap gap-3">
          <router-link
            v-for="t in themes"
            :key="t.id"
            :to="`/themes/${t.id}`"
            class="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-medium text-brand transition hover:border-gold hover:bg-gold/5"
          >
            <span class="text-lg">{{ t.icon }}</span>
            {{ t.title }}
            <span class="text-xs text-muted">· {{ t.bookIds.length }} 本</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="bg-white py-16">
    <div class="container-px">
      <div class="text-center">
        <p class="eyebrow">为什么是知行商学</p>
        <h2 class="mt-3 text-2xl font-bold text-brand sm:text-3xl">不灌鸡汤，只给能落地的视角</h2>
      </div>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <div class="card p-6">
          <div class="text-3xl">🎯</div>
          <h3 class="mt-3 text-lg font-semibold text-brand">带着岗位视角读</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">每本书从销售、市场、团队三视角拆解，标注"对谁的什么工作有用"。</p>
        </div>
        <div class="card p-6">
          <div class="text-3xl">📑</div>
          <h3 class="mt-3 text-lg font-semibold text-brand">笔记 + 研报双层</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">读书笔记讲透观点，实战研报给数据与打法，同页一键切换。</p>
        </div>
        <div class="card p-6">
          <div class="text-3xl">✍️</div>
          <h3 class="mt-3 text-lg font-semibold text-brand">留白给你写</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">每篇都能写"我的个人观点"，自动存在本浏览器，随时回看。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="container-px py-16">
    <div class="card bg-brand p-10 text-center text-white">
      <h2 class="text-2xl font-bold sm:text-3xl">从一个真实的问题，开始读一本书</h2>
      <p class="mt-3 text-white/70">挑一本和你下周工作相关的书，读笔记、看研报、写两句自己的观点。</p>
      <div class="mt-6 flex flex-wrap justify-center gap-3">
        <router-link to="/books" class="btn-gold">浏览全部书单</router-link>
        <router-link to="/toolbox" class="btn-outline border-white/30 text-white hover:border-gold hover:text-gold">实战工具箱</router-link>
      </div>
    </div>
  </section>
</template>

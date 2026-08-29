<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { trackList } from '../data/tracks'
import { useUser } from '../store/useUser'

const open = ref(false)
const router = useRouter()
const route = useRoute()
const { isLogin, logout } = useUser()

// 当前所处分类（用于下拉里高亮）
const activeTrack = computed(() => route.params.id || '')
const isActive = (path) => route.path === path

const searchQ = ref('')
function onSearch() {
  const kw = searchQ.value.trim()
  router.push(kw ? { path: '/search', query: { q: kw } } : { path: '/search' })
  open.value = false
}

function handleLogout() {
  logout()
  open.value = false
  router.push('/')
}

// 「更多」菜单：低频但重要的入口，收进二级避免主导航拥挤
const moreLinks = [
  { to: '/capability', icon: '🗺️', label: '能力地图', desc: '按职级看该补哪些能力' },
  { to: '/themes', icon: '📚', label: '主题导览', desc: '按业务问题跨书聚合' },
  { to: '/paths', icon: '🛤️', label: '阅读路径', desc: '按顺序读，读完能上手' },
  { to: '/tog', icon: '🏛️', label: '政企 ToG', desc: '政府采购 · 信创 · 招投标' },
  { to: '/about', icon: '💡', label: '关于知行商学', desc: '站点定位与使用方法' }
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
    <div class="container-px flex h-16 items-center justify-between gap-4">
      <router-link to="/" class="flex shrink-0 items-center gap-2" @click="open = false">
        <span class="flex h-9 w-9 items-center justify-center rounded-md bg-brand font-serif text-lg font-bold text-gold">知</span>
        <span class="text-lg font-semibold text-brand">知行商学</span>
        <span class="hidden text-sm text-muted lg:inline">企业经营 · 读书研报</span>
      </router-link>

      <!-- 桌面端导航：分类收进下拉，避免 7 个分类把导航挤爆 -->
      <nav class="hidden items-center gap-1 lg:flex">
        <!-- 分类下拉 -->
        <div class="group relative">
          <button
            class="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-paper"
            :class="route.path.startsWith('/track') ? 'text-brand' : 'text-ink'"
            aria-haspopup="true"
          >
            分类
            <svg class="h-3.5 w-3.5 transition group-hover:rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
            <div class="w-[600px] rounded-xl border border-line bg-white p-4 shadow-xl">
              <p class="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-muted">按能力域浏览（{{ trackList.length }} 大分类）</p>
              <div class="grid grid-cols-2 gap-1">
                <router-link
                  v-for="t in trackList"
                  :key="t.id"
                  :to="`/track/${t.id}`"
                  class="flex items-start gap-3 rounded-lg p-2.5 transition hover:bg-paper"
                  :class="activeTrack === t.id ? 'bg-paper' : ''"
                >
                  <span class="mt-0.5 text-lg leading-none">{{ t.icon }}</span>
                  <span class="min-w-0 flex-1">
                    <span class="flex items-center gap-1.5">
                      <span class="text-sm font-semibold" :class="activeTrack === t.id ? 'text-brand' : 'text-ink'">{{ t.name }}</span>
                      <span class="rounded bg-paper px-1.5 py-0.5 text-[10px] text-muted">{{ t.relatedBooks.length }} 本</span>
                    </span>
                    <span class="mt-0.5 block truncate text-xs text-muted">{{ t.tagline }}</span>
                  </span>
                </router-link>
              </div>
              <router-link to="/books" class="mt-2 block rounded-lg bg-paper px-3 py-2 text-center text-xs font-medium text-brand transition hover:bg-line/40">
                查看全部 91 本 →
              </router-link>
            </div>
          </div>
        </div>

        <router-link to="/books" class="rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-paper" :class="isActive('/books') ? 'text-brand' : 'text-ink'">
          读书研报
        </router-link>
        <router-link to="/toolbox" class="rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-paper" :class="isActive('/toolbox') ? 'text-brand' : 'text-ink'">
          🧰 工具箱
        </router-link>

        <!-- 更多下拉 -->
        <div class="group relative">
          <button class="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ink transition hover:bg-paper" aria-haspopup="true">
            更多
            <svg class="h-3.5 w-3.5 transition group-hover:rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="invisible absolute right-0 top-full z-50 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
            <div class="w-64 rounded-xl border border-line bg-white p-2 shadow-xl">
              <router-link
                v-for="m in moreLinks"
                :key="m.to"
                :to="m.to"
                class="flex items-start gap-2.5 rounded-lg p-2.5 transition hover:bg-paper"
              >
                <span class="text-base leading-none">{{ m.icon }}</span>
                <span class="min-w-0">
                  <span class="block text-sm font-medium" :class="isActive(m.to) ? 'text-brand' : 'text-ink'">{{ m.label }}</span>
                  <span class="block text-xs text-muted">{{ m.desc }}</span>
                </span>
              </router-link>
            </div>
          </div>
        </div>

        <form class="relative ml-1" @submit.prevent="onSearch">
          <input
            v-model="searchQ"
            type="text"
            placeholder="搜索书籍 / 工具…"
            class="w-40 rounded-full border border-line bg-paper py-1.5 pl-4 pr-8 text-sm outline-none transition focus:w-56 focus:border-gold"
          />
          <button type="submit" class="absolute right-2 top-1/2 -translate-y-1/2 text-muted transition hover:text-brand" aria-label="搜索">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path stroke-linecap="round" d="M21 21l-4.3-4.3"/></svg>
          </button>
        </form>
      </nav>

      <div class="hidden shrink-0 items-center gap-3 lg:flex">
        <template v-if="isLogin">
          <router-link to="/me" class="text-sm font-medium text-ink transition hover:text-brand">个人中心</router-link>
          <button class="text-sm font-medium text-ink transition hover:text-brand" @click="handleLogout">退出</button>
        </template>
        <template v-else>
          <router-link to="/login" class="text-sm font-medium text-ink transition hover:text-brand">登录</router-link>
          <router-link to="/books" class="btn-gold">进入书架</router-link>
        </template>
      </div>

      <button class="p-2 text-brand lg:hidden" @click="open = !open" aria-label="菜单">
        <svg v-if="!open" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
    </div>

    <!-- 移动端菜单：分类单列展示，配图标与册数，便于快速识别 -->
    <div v-if="open" class="max-h-[80vh] overflow-y-auto border-t border-line bg-white lg:hidden">
      <nav class="container-px flex flex-col py-2">
        <form class="mb-3 flex gap-2" @submit.prevent="onSearch">
          <input
            v-model="searchQ"
            type="search"
            placeholder="搜索书籍 / 工具…"
            class="flex-1 rounded-lg border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-gold"
          />
          <button type="submit" class="btn-gold shrink-0">搜索</button>
        </form>

        <p class="px-1 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-muted">分类</p>
        <router-link
          v-for="t in trackList"
          :key="t.id"
          :to="`/track/${t.id}`"
          class="flex items-center gap-2.5 py-2.5 text-sm font-medium text-ink"
          @click="open = false"
        >
          <span>{{ t.icon }}</span>
          <span class="flex-1">{{ t.name }}</span>
          <span class="text-xs font-normal text-muted">{{ t.relatedBooks.length }} 本</span>
        </router-link>

        <p class="mt-3 border-t border-line px-1 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-muted">工具与导览</p>
        <router-link to="/books" class="py-2.5 text-sm font-medium text-ink" @click="open = false">📖 读书研报</router-link>
        <router-link to="/toolbox" class="py-2.5 text-sm font-medium text-ink" @click="open = false">🧰 工具箱</router-link>
        <router-link
          v-for="m in moreLinks"
          :key="m.to"
          :to="m.to"
          class="py-2.5 text-sm font-medium text-ink"
          @click="open = false"
        >{{ m.icon }} {{ m.label }}</router-link>

        <div class="mt-3 flex gap-3 border-t border-line py-3">
          <template v-if="isLogin">
            <router-link to="/me" class="btn-outline flex-1" @click="open = false">个人中心</router-link>
            <button class="btn-gold flex-1" @click="handleLogout">退出</button>
          </template>
          <template v-else>
            <router-link to="/login" class="btn-outline flex-1" @click="open = false">登录</router-link>
            <router-link to="/books" class="btn-gold flex-1" @click="open = false">进入书架</router-link>
          </template>
        </div>
      </nav>
    </div>
  </header>
</template>

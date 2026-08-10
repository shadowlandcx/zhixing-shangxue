<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { trackList } from '../data/tracks'
import { useUser } from '../store/useUser'

const open = ref(false)
const router = useRouter()
const { isLogin, logout } = useUser()

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
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
    <div class="container-px flex h-16 items-center justify-between">
      <router-link to="/" class="flex items-center gap-2" @click="open=false">
        <span class="flex h-9 w-9 items-center justify-center rounded-md bg-brand font-serif text-lg font-bold text-gold">知</span>
        <span class="text-lg font-semibold text-brand">知行商学</span>
        <span class="hidden text-sm text-muted sm:inline">企业经营 · 读书研报</span>
      </router-link>

      <nav class="hidden items-center gap-8 md:flex">
        <router-link v-for="t in trackList" :key="t.id" :to="`/track/${t.id}`" class="text-sm font-medium text-ink transition hover:text-brand">
          {{ t.name }}
        </router-link>
        <router-link to="/books" class="text-sm font-medium text-ink transition hover:text-brand">读书研报</router-link>
        <router-link to="/toolbox" class="text-sm font-medium text-ink transition hover:text-brand">🧰 工具箱</router-link>
        <router-link to="/capability" class="text-sm font-medium text-ink transition hover:text-brand">🗺️ 能力地图</router-link>
        <router-link to="/themes" class="text-sm font-medium text-ink transition hover:text-brand">📚 主题导览</router-link>
        <router-link to="/paths" class="text-sm font-medium text-ink transition hover:text-brand">🛤️ 阅读路径</router-link>
        <router-link to="/tog" class="text-sm font-medium text-ink transition hover:text-brand">🏛️ 政企ToG</router-link>
        <form class="relative" @submit.prevent="onSearch">
          <input
            v-model="searchQ"
            type="text"
            placeholder="搜索…"
            class="w-36 rounded-full border border-line bg-paper py-1.5 pl-4 pr-8 text-sm outline-none transition focus:w-48 focus:border-gold"
          />
          <button type="submit" class="absolute right-2 top-1/2 -translate-y-1/2 text-muted hover:text-brand" aria-label="搜索">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path stroke-linecap="round" d="M21 21l-4.3-4.3"/></svg>
          </button>
        </form>
      </nav>

      <div class="hidden items-center gap-3 md:flex">
        <template v-if="isLogin">
          <router-link to="/me" class="text-sm font-medium text-ink transition hover:text-brand">个人中心</router-link>
          <button class="text-sm font-medium text-ink transition hover:text-brand" @click="handleLogout">退出</button>
        </template>
        <template v-else>
          <router-link to="/login" class="text-sm font-medium text-ink transition hover:text-brand">登录</router-link>
          <router-link to="/books" class="btn-gold">进入书架</router-link>
        </template>
      </div>

      <button class="p-2 text-brand md:hidden" @click="open=!open" aria-label="菜单">
        <svg v-if="!open" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
    </div>

    <div v-if="open" class="border-t border-line bg-white md:hidden">
      <nav class="container-px flex flex-col py-2">
        <form class="mb-2 flex gap-2" @submit.prevent="onSearch">
          <input
            v-model="searchQ"
            type="search"
            placeholder="搜索书籍 / 工具…"
            class="flex-1 rounded-lg border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-gold"
          />
          <button type="submit" class="btn-gold shrink-0">搜索</button>
        </form>
        <router-link v-for="t in trackList" :key="t.id" :to="`/track/${t.id}`" class="py-3 text-sm font-medium text-ink" @click="open=false">{{ t.name }}</router-link>
        <router-link to="/books" class="py-3 text-sm font-medium text-ink" @click="open=false">读书研报</router-link>
        <router-link to="/toolbox" class="py-3 text-sm font-medium text-ink" @click="open=false">🧰 工具箱</router-link>
        <router-link to="/capability" class="py-3 text-sm font-medium text-ink" @click="open=false">🗺️ 能力地图</router-link>
        <router-link to="/themes" class="py-3 text-sm font-medium text-ink" @click="open=false">📚 主题导览</router-link>
        <router-link to="/paths" class="py-3 text-sm font-medium text-ink" @click="open=false">🛤️ 阅读路径</router-link>
        <router-link to="/tog" class="py-3 text-sm font-medium text-ink" @click="open=false">🏛️ 政企ToG</router-link>
        <router-link to="/search" class="py-3 text-sm font-medium text-ink" @click="open=false">搜索</router-link>
        <div class="flex gap-3 py-3">
          <template v-if="isLogin">
            <router-link to="/me" class="btn-outline flex-1" @click="open=false">个人中心</router-link>
            <button class="btn-gold flex-1" @click="handleLogout">退出</button>
          </template>
          <template v-else>
            <router-link to="/login" class="btn-outline flex-1" @click="open=false">登录</router-link>
            <router-link to="/books" class="btn-gold flex-1" @click="open=false">进入书架</router-link>
          </template>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUser } from '../store/useUser'
import { trackList } from '../data/tracks'
import { books } from '../data/books'

const router = useRouter()
const { state, isLogin, logout, getBookProgress } = useUser()

const initial = computed(() => (state.user?.name || '学').slice(0, 1).toUpperCase())

const bookList = computed(() =>
  books.map((b) => ({ ...b, p: getBookProgress(b.id) }))
)

function handleLogout() {
  logout()
  router.push('/')
}
</script>

<template>
  <div class="container-px py-10">
    <template v-if="isLogin">
      <!-- user card -->
      <div class="card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-4">
          <span class="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-2xl font-bold text-gold-light">{{ initial }}</span>
          <div>
            <h1 class="text-xl font-bold text-brand">{{ state.user.name }}</h1>
            <p class="text-sm text-muted">{{ state.user.email }}</p>
          </div>
        </div>
        <button class="btn-outline" @click="handleLogout">退出登录</button>
      </div>

      <!-- my reading -->
      <section class="mt-8">
        <h2 class="text-lg font-bold text-brand">我的读书</h2>
        <div class="mt-4 grid gap-4 sm:grid-cols-2">
          <router-link
            v-for="b in bookList"
            :key="b.id"
            :to="`/book/${b.id}`"
            class="card flex items-center gap-4 p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div class="flex h-16 w-12 shrink-0 items-end rounded p-2" :style="{ background: b.cover }">
              <span class="text-xs font-bold text-white/95">{{ b.title.slice(0, 4) }}</span>
            </div>
            <div class="flex-1">
              <p class="font-semibold text-ink">{{ b.title }}</p>
              <div class="mt-1 flex gap-2 text-xs">
                <span v-if="b.p?.read" class="rounded bg-gold/15 px-2 py-0.5 text-gold-dark">已读</span>
                <span v-else class="rounded bg-line px-2 py-0.5 text-muted">未读</span>
                <span v-if="b.p?.noteSaved" class="rounded bg-gold/15 px-2 py-0.5 text-gold-dark">已写笔记</span>
              </div>
            </div>
            <span class="text-sm text-brand">→</span>
          </router-link>
        </div>
      </section>

      <!-- recommended tracks -->
      <section class="mt-8">
        <h2 class="text-lg font-bold text-brand">推荐继续学</h2>
        <div class="mt-4 grid gap-4 md:grid-cols-3">
          <router-link v-for="t in trackList" :key="t.id" :to="`/track/${t.id}`" class="card p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
            <div class="text-3xl">{{ t.icon }}</div>
            <h3 class="mt-3 font-semibold text-brand">{{ t.name }}</h3>
            <p class="mt-1 text-sm text-muted">{{ t.tagline }}</p>
          </router-link>
        </div>
      </section>
    </template>

    <template v-else>
      <div class="card mx-auto max-w-md p-10 text-center">
        <h1 class="text-xl font-bold text-brand">你还未登录</h1>
        <p class="mt-2 text-sm text-muted">登录后可记录学习进度、进入个人中心。</p>
        <router-link to="/login" class="btn-gold mt-6 inline-block">去登录</router-link>
      </div>
    </template>
  </div>
</template>

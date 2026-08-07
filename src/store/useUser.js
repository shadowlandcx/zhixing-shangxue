// 前端用户态原型（localStorage 模拟，无后端）
// 仅用于演示登录 / 个人中心 / 学习进度；接入真实后端时替换本文件即可。
import { reactive, computed } from 'vue'

const USER_KEY = 'bs_user'
const PROGRESS_KEY = 'bs_progress'

function load(key, fallback) {
  try {
    const v = JSON.parse(localStorage.getItem(key))
    return v ?? fallback
  } catch {
    return fallback
  }
}

const state = reactive({
  user: load(USER_KEY, null),
  progress: load(PROGRESS_KEY, {})
})

function persist() {
  localStorage.setItem(USER_KEY, JSON.stringify(state.user))
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(state.progress))
}

export function useUser() {
  const isLogin = computed(() => !!state.user)

  function login(email, name) {
    state.user = {
      email,
      name: name && name.trim() ? name.trim() : email.split('@')[0],
      loginAt: Date.now()
    }
    persist()
  }

  function logout() {
    state.user = null
    persist()
  }

  function setProgress(courseId, value) {
    const v = Math.max(0, Math.min(100, Math.round(value)))
    state.progress[courseId] = v
    persist()
  }

  function getProgress(courseId) {
    return state.progress[courseId] || 0
  }

  // 读书进度（与课程进度统一存放在 progress.books 下）
  function markBookRead(bookId) {
    const b = state.progress.books || (state.progress.books = {})
    b[bookId] = { ...(b[bookId] || {}), read: true }
    persist()
  }

  function setBookNoteSaved(bookId) {
    const b = state.progress.books || (state.progress.books = {})
    b[bookId] = { ...(b[bookId] || {}), noteSaved: true }
    persist()
  }

  function getBookProgress(bookId) {
    return state.progress.books?.[bookId] || null
  }

  return { state, isLogin, login, logout, setProgress, getProgress, markBookRead, setBookNoteSaved, getBookProgress }
}

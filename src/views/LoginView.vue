<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUser } from '../store/useUser'

const router = useRouter()
const { login } = useUser()

const email = ref('')
const name = ref('')
const pwd = ref('')
const error = ref('')

function submit() {
  error.value = ''
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
    error.value = '请输入有效邮箱'
    return
  }
  if (pwd.value.length < 4) {
    error.value = '密码至少 4 位（原型演示，任意密码均可）'
    return
  }
  login(email.value, name.value)
  router.push('/me')
}
</script>

<template>
  <div class="container-px flex min-h-[70vh] items-center justify-center py-12">
    <div class="card w-full max-w-md p-8">
      <h1 class="text-2xl font-bold text-brand">登录商学云</h1>
      <p class="mt-2 text-sm text-muted">登录后可记录学习进度、进入个人中心。（前端原型，无后端，数据存本地浏览器）</p>

      <form class="mt-6 space-y-4" @submit.prevent="submit">
        <div>
          <label class="text-sm font-medium text-ink">邮箱</label>
          <input v-model="email" type="email" placeholder="you@company.com" class="mt-1 w-full rounded-md border border-line px-3 py-2.5 text-sm outline-none focus:border-brand" />
        </div>
        <div>
          <label class="text-sm font-medium text-ink">称呼（选填）</label>
          <input v-model="name" type="text" placeholder="如：王经理" class="mt-1 w-full rounded-md border border-line px-3 py-2.5 text-sm outline-none focus:border-brand" />
        </div>
        <div>
          <label class="text-sm font-medium text-ink">密码</label>
          <input v-model="pwd" type="password" placeholder="任意 4 位以上" class="mt-1 w-full rounded-md border border-line px-3 py-2.5 text-sm outline-none focus:border-brand" />
        </div>

        <p v-if="error" class="text-sm text-red-600">{{ error }}</p>

        <button type="submit" class="btn-gold w-full">登录</button>
      </form>

      <p class="mt-4 text-center text-xs text-muted">演示账号随意填 · 数据仅保存在本机，清除浏览器缓存即清空</p>
    </div>
  </div>
</template>

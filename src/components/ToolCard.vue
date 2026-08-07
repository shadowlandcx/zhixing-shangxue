<script setup>
import { ref } from 'vue'
import { downloadExcel, downloadPdf } from '../utils/download'

const props = defineProps({
  tool: { type: Object, required: true },
  highlight: { type: Boolean, default: false }
})

const TYPE_META = {
  framework: '框架画布', checklist: '清单', scorecard: '评分卡',
  script: '话术', calculator: '测算', worksheet: '工作表'
}
const STAGE_META = { diagnose: '诊断', plan: '规划', execute: '执行', review: '复盘' }
function typeLabel(t) { return TYPE_META[t?.type] || '' }
function stageLabel(t) { return STAGE_META[t?.stage] || '' }
function difficultyStars(n) {
  const k = n || 0
  return '★'.repeat(k) + '☆'.repeat(3 - k)
}

const downloadingId = ref('')
async function onExcel(t) {
  downloadingId.value = t.id
  try { await downloadExcel(t) } finally { downloadingId.value = '' }
}
</script>

<template>
  <div
    :class="[
      'flex flex-col rounded-xl bg-white p-5 shadow-card transition',
      highlight ? 'border-2 border-gold ring-2 ring-gold/40' : 'border border-line'
    ]"
  >
    <div class="flex items-start justify-between gap-3">
      <h3 class="text-base font-bold leading-snug text-ink">📑 {{ tool.title }}</h3>
      <span
        v-if="tool.cat"
        class="shrink-0 rounded-full px-2.5 py-0.5 text-xs"
        :class="{
          'bg-rose-50 text-rose-600': tool.category === 'marketing',
          'bg-blue-50 text-blue-600': tool.category === 'sales',
          'bg-emerald-50 text-emerald-600': tool.category === 'team'
        }"
      >{{ tool.cat.icon }} {{ tool.cat.label }}</span>
      <span v-if="typeLabel(tool)" class="shrink-0 rounded-full bg-brand/10 px-2.5 py-0.5 text-xs text-brand">{{ typeLabel(tool) }}</span>
      <span v-if="stageLabel(tool)" class="shrink-0 rounded-full bg-gold/10 px-2.5 py-0.5 text-xs text-gold-dark">{{ stageLabel(tool) }}</span>
      <span v-if="tool.difficulty" class="shrink-0 rounded-full bg-paper px-2.5 py-0.5 text-xs text-muted">{{ difficultyStars(tool.difficulty) }}</span>
      <span v-if="tool.duration" class="shrink-0 rounded-full bg-paper px-2.5 py-0.5 text-xs text-muted">⏱ {{ tool.duration }}</span>
    </div>
    <router-link
      v-if="tool.bookTitle"
      :to="`/book/${tool.bookId}`"
      class="mt-1 inline-flex w-fit items-center gap-1 text-xs text-gold transition hover:underline"
    >出自《{{ tool.bookTitle }}》→</router-link>

    <p class="mt-2 flex-1 text-sm leading-relaxed text-muted">{{ tool.desc }}</p>

    <!-- 适用场景 -->
    <div v-if="tool.useCase" class="mt-3 rounded-lg bg-paper px-3 py-2">
      <p class="text-xs font-semibold text-gold-dark">🎯 适用场景</p>
      <p class="mt-1 text-xs leading-relaxed text-ink">{{ tool.useCase }}</p>
    </div>

    <!-- 我的思考 -->
    <div v-if="tool.thinking" class="mt-3 rounded-lg border-l-4 border-brand bg-brand/5 px-3 py-2">
      <p class="text-xs font-semibold text-brand">🧠 我的思考</p>
      <p class="mt-1 text-xs leading-relaxed text-ink">{{ tool.thinking }}</p>
    </div>

    <!-- 常见坑 -->
    <div v-if="tool.pitfalls" class="mt-3 rounded-lg border-l-4 border-red-300 bg-red-50 px-3 py-2">
      <p class="text-xs font-semibold text-red-700">⚠️ 常见坑</p>
      <p class="mt-1 text-xs leading-relaxed text-ink">{{ tool.pitfalls }}</p>
    </div>

    <!-- 怎么算用对 -->
    <div v-if="tool.successMetric" class="mt-2 rounded-lg bg-gold/5 px-3 py-2">
      <p class="text-xs font-semibold text-gold-dark">✅ 怎么算用对</p>
      <p class="mt-1 text-xs leading-relaxed text-ink">{{ tool.successMetric }}</p>
    </div>

    <!-- 示例填法预览 -->
    <div v-if="tool.example" class="mt-4">
      <p class="mb-1.5 text-xs font-semibold text-gold-dark">💡 标杆示例填法（高亮行）</p>
      <div class="max-h-44 overflow-auto rounded-lg border border-line">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-brand text-white">
              <th
                v-for="(h, i) in tool.example.head"
                :key="i"
                class="border border-line px-2 py-1.5 text-left font-medium"
              >{{ h }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(r, ri) in tool.example.body" :key="ri" class="bg-gold/10">
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
    <p v-else class="mt-4 rounded-lg bg-paper px-3 py-2 text-xs text-muted">
      参考结构（已填全），可直接用于向客户 / 团队讲解。
    </p>

    <!-- 下载 -->
    <div class="mt-4 flex flex-wrap gap-2">
      <button class="btn-gold-sm" :disabled="downloadingId === tool.id" @click="onExcel(tool)">
        <span v-if="downloadingId === tool.id" class="inline-flex items-center gap-1"><span class="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent"></span>生成中…</span>
        <span v-else>⬇ 下载 Excel</span>
      </button>
      <button class="btn-outline-sm" @click="downloadPdf(tool, tool.bookTitle)">🖨 下载 PDF</button>
    </div>
  </div>
</template>

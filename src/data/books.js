// 合并导出层：视图只认本文件导出的 books / categories / getBook。
// 元数据（meta）常驻主包，供书架 / 首页 / 轨道 / 搜索使用；
// 大段正文（content / report）改为动态 import 按需分片加载（见 getBookContent / getBookReport），
// 使首屏主包体积显著下降，正文仅在打开读书笔记 / 研报时加载。

import { metaArray } from './books-meta'

// 仅元数据（不含 content / report）
export const books = metaArray

export const categories = [...new Set(books.map((b) => b.category))]

export function getBook(id) {
  return books.find((b) => b.id === id) || books[0]
}

// 读书笔记正文：每本书独立分片 notes/<id>.js，动态 import 按需加载；
// 未生成时分片时回退到旧 books-content.js（兼容过渡）
export async function getBookContent(id) {
  try {
    const mod = await import(`./notes/${id}.js`)
    if (mod.note) return mod.note
  } catch (e) {
    // 分片未生成，回退旧数据
  }
  const { contents } = await import('./books-content')
  return contents[id] || ''
}

// 营销·销售研报：每本书独立模块文件，按 id 动态 import 各自分片
const reportModules = {
  'tech-product-marketing': () => import('./reports/tech-product-marketing'),
  'chip-history': () => import('./reports/chip-history'),
  'zero-trust': () => import('./reports/zero-trust'),
  'singularity-nearer': () => import('./reports/singularity-nearer'),
  'danaher-model': () => import('./reports/danaher-model'),
  'industry-research': () => import('./reports/industry-research'),
  'salesforce-legend': () => import('./reports/salesforce-legend'),
  'cloud-primer': () => import('./reports/cloud-primer'),
  'cognitive-awakening': () => import('./reports/cognitive-awakening'),
  'tip': () => import('./reports/tip'),
  'tip-cn08': () => import('./reports/tip-cn08'),
  'tip-cn24': () => import('./reports/tip-cn24'),
  'key-account-management': () => import('./reports/key-account-management')
}

export async function getBookReport(id) {
  const loader = reportModules[id]
  if (loader) {
    try {
      const mod = await loader()
      return mod.report || ''
    } catch (e) {
      console.error(`[getBookReport] reportModules load failed for ${id}`, e)
      return ''
    }
  }
  // 读书会 56 本（rc 前缀）按需动态加载；文件未生成时返回空（页面显示「编写中」）
  if (id && id.startsWith('rc')) {
    try {
      const mod = await import(`./reports/${id}.js`)
      return mod.report || ''
    } catch (e) {
      console.error(`[getBookReport] dynamic report load failed for ${id}`, e)
      return ''
    }
  }
  return ''
}

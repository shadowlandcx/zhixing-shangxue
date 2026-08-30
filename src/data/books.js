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
  'smart-pricing': () => import('./reports/smart-pricing'),
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
  'key-account-management': () => import('./reports/key-account-management'),
  'rc01': () => import('./reports/rc01'),
  'rc02': () => import('./reports/rc02'),
  'rc03': () => import('./reports/rc03'),
  'rc04': () => import('./reports/rc04'),
  'rc05': () => import('./reports/rc05'),
  'rc06': () => import('./reports/rc06'),
  'rc07': () => import('./reports/rc07'),
  'rc08': () => import('./reports/rc08'),
  'rc09': () => import('./reports/rc09'),
  'rc10': () => import('./reports/rc10'),
  'rc11': () => import('./reports/rc11'),
  'rc12': () => import('./reports/rc12'),
  'rc13': () => import('./reports/rc13'),
  'rc14': () => import('./reports/rc14'),
  'rc15': () => import('./reports/rc15'),
  'rc16': () => import('./reports/rc16'),
  'rc17': () => import('./reports/rc17'),
  'rc18': () => import('./reports/rc18'),
  'rc19': () => import('./reports/rc19'),
  'rc20': () => import('./reports/rc20'),
  'rc21': () => import('./reports/rc21'),
  'rc22': () => import('./reports/rc22'),
  'rc23': () => import('./reports/rc23'),
  'rc24': () => import('./reports/rc24'),
  'rc25': () => import('./reports/rc25'),
  'rc26': () => import('./reports/rc26'),
  'rc27': () => import('./reports/rc27'),
  'rc28': () => import('./reports/rc28'),
  'rc29': () => import('./reports/rc29'),
  'rc30': () => import('./reports/rc30'),
  'rc31': () => import('./reports/rc31'),
  'rc32': () => import('./reports/rc32'),
  'rc33': () => import('./reports/rc33'),
  'rc34': () => import('./reports/rc34'),
  'rc35': () => import('./reports/rc35'),
  'rc36': () => import('./reports/rc36'),
  'rc37': () => import('./reports/rc37'),
  'rc38': () => import('./reports/rc38'),
  'rc39': () => import('./reports/rc39'),
  'rc40': () => import('./reports/rc40'),
  'rc41': () => import('./reports/rc41'),
  'rc42': () => import('./reports/rc42'),
  'rc43': () => import('./reports/rc43'),
  'rc44': () => import('./reports/rc44'),
  'rc45': () => import('./reports/rc45'),
  'rc46': () => import('./reports/rc46'),
  'rc47': () => import('./reports/rc47'),
  'rc48': () => import('./reports/rc48'),
  'rc49': () => import('./reports/rc49'),
  'rc50': () => import('./reports/rc50'),
  'rc51': () => import('./reports/rc51'),
  'rc52': () => import('./reports/rc52'),
  'rc53': () => import('./reports/rc53'),
  'rc54': () => import('./reports/rc54'),
  'rc55': () => import('./reports/rc55'),
  'rc56': () => import('./reports/rc56'),
  'strategic-selling': () => import('./reports/strategic-selling'),
  'power-negotiation': () => import('./reports/power-negotiation'),
  'principled-negotiation': () => import('./reports/principled-negotiation'),
  'gov-enterprise-sales': () => import('./reports/gov-enterprise-sales'),
  'crossing-the-chasm': () => import('./reports/crossing-the-chasm'),
  'positioning': () => import('./reports/positioning'),
  'abm': () => import('./reports/abm'),
  'coaching-for-performance': () => import('./reports/coaching-for-performance'),
  'leadership-pipeline': () => import('./reports/leadership-pipeline'),
  'crucial-conversations': () => import('./reports/crucial-conversations'),
  'competitive-strategy': () => import('./reports/competitive-strategy'),
  'ai-for-sales': () => import('./reports/ai-for-sales'),
  'new-solution-selling': () => import('./reports/new-solution-selling'),
  'visual-hammer': () => import('./reports/visual-hammer'),
  '22-immutable-laws': () => import('./reports/22-immutable-laws'),
  'blue-ocean-strategy': () => import('./reports/blue-ocean-strategy'),
  'high-output-management': () => import('./reports/high-output-management'),
  'innovators-dilemma': () => import('./reports/innovators-dilemma'),
  'principles': () => import('./reports/principles'),
  'ji-kong': () => import('./reports/ji-kong'),
  'escape-velocity': () => import('./reports/escape-velocity'),
  'procurement-40': () => import('./reports/procurement-40'),
  'insight-principle': () => import('./reports/insight-principle'),
  'cognitive-drive': () => import('./reports/cognitive-drive'),
  'smart-thinking': () => import('./reports/smart-thinking'),
  'tomorrowmind': () => import('./reports/tomorrowmind'),
  'success-mindsets': () => import('./reports/success-mindsets'),
}

export async function getBookReport(id) {
  const loader = reportModules[id]
  if (loader) {
    try {
      const mod = await loader()
      return mod.report || ''
    } catch (e) {
      console.error(`[getBookReport] load failed for ${id}`, e)
      return ''
    }
  }
  return ''
}

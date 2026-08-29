// 主题导览 · 8 大业务主题（人工策展，覆盖全部 91 本）
// 与赛道(track)不同：主题是跨赛道、按「业务问题」聚合的阅读入口。
import { books } from './books'

export const themes = [
  {
    id: 'tog',
    title: '政企 · ToG 大客户打法',
    icon: '🏛️',
    tagline: '政府采购 · 信创 · 招投标 · 复杂大客户',
    desc: '面向锐捷政企事业群（尤其北区）的 ToG 打法合集：从政企客户全局认知，到大客户经营、复杂机会管控、解决方案对话，再到谈判收口。一套可直接用于打单的阅读链。',
    bookIds: [
      'gov-enterprise-sales', 'key-account-management', 'strategic-selling',
      'power-negotiation', 'principled-negotiation', 'new-solution-selling',
      'rc16', 'rc18', 'rc19', 'rc04', 'rc09'
    ]
  },
  {
    id: 'sales-method',
    title: '销售实战方法论',
    icon: '🤝',
    tagline: '一线签单 · 客户经营 · 数字化销售',
    desc: '销售一线的方法论合集：挑战式、SPIN、价值竞争、信任五环、数字化销售……把经典著作变成可复用的签单动作。',
    bookIds: [
      'rc01', 'rc02', 'rc03', 'rc07', 'rc10', 'rc13', 'rc14', 'rc20', 'rc21', 'rc22',
      'ai-for-sales', 'rc05', 'rc08', 'rc15', 'rc11', 'rc12', 'rc17', 'rc06'
    ]
  },
  {
    id: 'marketing',
    title: '营销 · 品牌 · 获客',
    icon: '📣',
    tagline: '定位 · 鸿沟 · ABM · 生命周期营销',
    desc: '市场与品牌视角的读书合集：从定位理论、跨越鸿沟，到 ABM 账号化营销、视觉锤与品牌 22 律，覆盖 ToB 营销全链路。',
    bookIds: [
      'tech-product-marketing', 'crossing-the-chasm', 'positioning', 'abm',
      'visual-hammer', '22-immutable-laws',
      'rc23', 'rc24', 'rc25', 'rc26', 'rc27', 'rc28', 'smart-pricing'
    ]
  },
  {
    id: 'negotiation',
    title: '谈判 · 沟通 · 影响力',
    icon: '💬',
    tagline: '价格谈判 · 原则谈判 · 共情沟通',
    desc: '搞定人与对话的能力合集：优势谈判与原则谈判、关键对话、影响力、策略思维、同理心与学会提问。',
    bookIds: [
      'power-negotiation', 'principled-negotiation', 'crucial-conversations',
      'rc36', 'rc37', 'rc38', 'rc32', 'rc39'
    ]
  },
  {
    id: 'leadership',
    title: '团队管理 · 领导力',
    icon: '👥',
    tagline: '教练式领导 · 梯队 · 经营系统',
    desc: '带人带团队的合集：高绩效教练、领导梯队、高产出管理、丹纳赫经营系统、原则与专业团队管理。',
    bookIds: [
      'coaching-for-performance', 'leadership-pipeline', 'high-output-management',
      'danaher-model', 'principles', 'rc44', 'rc53', 'rc56', 'rc40', 'rc41',
      'rc46', 'rc43', 'rc45', 'ji-kong'
    ]
  },
  {
    id: 'strategy',
    title: '战略 · 增长 · 创新',
    icon: '🧭',
    tagline: '竞争战略 · 蓝海 · 10倍增长',
    desc: '看方向与打法盘的合集：竞争战略、蓝海战略、创新者的窘境、赢利、价值驱动增长、战略 7 力等。',
    bookIds: [
      'competitive-strategy', 'blue-ocean-strategy', 'innovators-dilemma',
      'rc47', 'rc49', 'rc50', 'rc52', 'rc55', 'rc42', 'rc48', 'rc54', 'escape-velocity'
    ]
  },
  {
    id: 'mindset',
    title: '组织学习 · 心智 · 成长',
    icon: '🧠',
    tagline: '双环学习 · 习惯 · 自我进化',
    desc: '个人与组织进化的合集：阿吉里斯行动科学（原典+两译本）、认知觉醒、思考快与慢、第五项修炼、原子习惯等。',
    bookIds: [
      'tip', 'tip-cn08', 'tip-cn24', 'cognitive-awakening', 'rc30', 'rc51',
      'rc33', 'rc34', 'rc35', 'rc29', 'rc31'
    ]
  },
  {
    id: 'tech-ai',
    title: '产品 · 技术 · AI 前沿',
    icon: '⚡',
    tagline: '芯片 · 云 · 零信任 · AI 未来',
    desc: '看懂技术与产品的合集：芯片简史、零信任网络、行业研究方法、Salesforce 传奇、云计算、奇点更近与 AI for Sales。',
    bookIds: [
      'chip-history', 'zero-trust', 'industry-research', 'salesforce-legend',
      'cloud-primer', 'singularity-nearer', 'ai-for-sales'
    ]
  }
]

export function getTheme(id) {
  return themes.find(t => t.id === id) || null
}
export function booksForTheme(id) {
  const t = getTheme(id)
  if (!t) return []
  return t.bookIds.map(bid => books.find(b => b.id === bid)).filter(Boolean)
}

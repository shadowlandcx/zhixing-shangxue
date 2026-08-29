// 阅读路径 · 策展式跨书阅读序列（含「下一步读」联动）
// 与 tracks.js 的赛道内「进阶阅读路径」互补：这里是跨书、按业务目标编排的精读顺序。
export const readingPaths = [
  {
    id: 'tog-deal',
    title: '政企打单进阶 · 锐捷北区适用',
    icon: '🏛️',
    audience: '政企销售 / 大客户经理 / 销售管理者',
    desc: '从建立政企 ToG 全局认知，到大客户经营、复杂机会管控、解决方案对话，再到谈判收口——一条可落地的打单进阶链。',
    steps: [
      { bookId: 'gov-enterprise-sales', note: '建立政企 ToG 全局认知：政府采购、信创、招投标、预算制、决策链、关系经营与合规边界。' },
      { bookId: 'key-account-management', note: '把客户当组合经营：关键客户经理角色、客户分级与相合性模型。' },
      { bookId: 'strategic-selling', note: '复杂机会的标准打法：蓝表/绿表、四类买家角色、胜负信号。' },
      { bookId: 'new-solution-selling', note: '从卖产品转向卖解决方案：痛点到共识的对话框架。' },
      { bookId: 'power-negotiation', note: '价格与条款谈判的战术、让步节奏与锚定。' },
      { bookId: 'principled-negotiation', note: '原则谈判：守住底线、保全长期关系。' }
    ]
  },
  {
    id: 'sales-rookie',
    title: '销售新人 → 销售冠军',
    icon: '🚀',
    audience: '新销售 / 销售骨干',
    desc: '从建立销售世界观，到掌握挑战式、SPIN、信任五环与顾问式经营——一线打法的进阶顺序。',
    steps: [
      { bookId: 'rc01', note: '建立「教导—定制—掌控」的挑战式销售世界观。' },
      { bookId: 'rc02', note: '用硅谷蓝图看清销售流程与协同分工。' },
      { bookId: 'rc20', note: 'SPIN：用提问重构客户痛点。' },
      { bookId: 'rc04', note: '桑德拉：反向提问与平等对话。' },
      { bookId: 'rc18', note: '信任五环：建立信任的五个关键动作。' },
      { bookId: 'rc19', note: '值得信赖的顾问：从卖产品到经营客户。' }
    ]
  },
  {
    id: 'marketing-lead',
    title: '营销负责人成长路径',
    icon: '📣',
    audience: '市场 / 品牌 / 产品营销负责人',
    desc: '从产品营销基本功，到定位、跨越鸿沟与 ABM 账号化增长——ToB 营销负责人的能力构建顺序。',
    steps: [
      { bookId: 'tech-product-marketing', note: '产品营销的职能边界与战略工具。' },
      { bookId: 'positioning', note: '定位：在用户心智中占一个位置。' },
      { bookId: 'crossing-the-chasm', note: '跨越鸿沟：从早期市场到主流市场。' },
      { bookId: 'abm', note: 'ABM：按账号精准经营。' },
      { bookId: 'visual-hammer', note: '视觉锤：用视觉符号钉住品牌。' }
    ]
  },
  {
    id: 'mgr-track',
    title: '管理者进阶路径',
    icon: '👥',
    audience: '新经理 / 团队负责人 / 管理者',
    desc: '从教练式领导，到领导梯队、高产出管理与经营系统——带人带团队的递进阅读。',
    steps: [
      { bookId: 'coaching-for-performance', note: '高绩效教练：用提问代替给答案。' },
      { bookId: 'leadership-pipeline', note: '领导梯队：各层级的角色转型。' },
      { bookId: 'high-output-management', note: '高产出管理：用指标与会议驱动产出。' },
      { bookId: 'danaher-model', note: '丹纳赫经营系统：可复制的增长引擎。' },
      { bookId: 'principles', note: '原则：把决策变成可复用的原则。' }
    ]
  },
  {
    id: 'org-learning',
    title: '组织学习 · 团队心智',
    icon: '🧠',
    audience: '团队 / HR / 组织发展',
    desc: '从行动科学原典，到认知觉醒与系统思考——让团队真正「学以致用」的阅读链。',
    steps: [
      { bookId: 'tip', note: '行动科学原典：宣称理论 vs 使用理论、双环学习。' },
      { bookId: 'cognitive-awakening', note: '认知觉醒：元认知与自我驱动。' },
      { bookId: 'rc30', note: '思考快与慢：两套思维系统与前文偏误。' },
      { bookId: 'rc51', note: '第五项修炼：系统思考与学习型组织。' },
      { bookId: 'crucial-conversations', note: '关键对话：高风险对话的处理框架。' }
    ]
  },
  {
    id: 'strategy-track',
    title: '战略思维路径',
    icon: '🧭',
    audience: '管理者 / 战略岗',
    desc: '从竞争战略根基，到蓝海、颠覆式创新与战略定力——建立看方向与打法盘的思维框架。',
    steps: [
      { bookId: 'competitive-strategy', note: '竞争战略：五力模型与三种通用战略。' },
      { bookId: 'blue-ocean-strategy', note: '蓝海战略：跳出竞争、重构价值曲线。' },
      { bookId: 'innovators-dilemma', note: '创新者的窘境：颠覆式创新的规律。' },
      { bookId: 'rc50', note: '战略 7 力：护城河的来源。' }
    ]
  },
  {
    id: 'account-master',
    title: '大客户经营进阶',
    icon: '🏛️',
    audience: '大客户经理 / 客户成功 / 生态负责人',
    desc: '从把单个客户做深，到把客户当组合经营，再到用谈判守住利润——客户经营的完整进阶链。',
    steps: [
      { bookId: 'key-account-management', note: '相合性模型：判断「谁才配当关键客户」，而不是谁大谁关键。' },
      { bookId: 'rc16', note: '大客户管理流程与实务：把经营动作标准化。' },
      { bookId: 'rc09', note: '客户关系管理战略框架：从关系维护到价值共创。' },
      { bookId: 'salesforce-legend', note: '客户成功与 NRR：让续约成为增长引擎。' },
      { bookId: 'power-negotiation', note: '谈判收口：守住价格与条款，别让经营成果在最后一步漏掉。' }
    ]
  },
  {
    id: 'tech-literacy',
    title: '技术认知补课路径',
    icon: '⚡',
    audience: '销售 / 售前 / 转岗做 ToB 的同学',
    desc: '不必成为工程师，但要能听懂客户的技术语言、讲清方案背后的业务取舍。',
    steps: [
      { bookId: 'chip-history', note: '先建立技术产业的宏观感：为什么技术会这样演进。' },
      { bookId: 'cloud-primer', note: '云计算通俗讲义：把最常遇到的技术概念补齐。' },
      { bookId: 'zero-trust', note: '零信任与安全：政企客户绕不开的合规语境。' },
      { bookId: 'industry-research', note: '行业研究方法：两周摸清一个陌生行业。' },
      { bookId: 'singularity-nearer', note: 'AI 前沿：判断趋势，别被概念带节奏。' }
    ]
  },
  {
    id: 'mindset-growth',
    title: '心智与影响力进阶',
    icon: '🧠',
    audience: '所有岗位（尤其新任管理者）',
    desc: '方法论能不能落地，取决于底层心智。这条链解决「道理都懂、就是做不到」。',
    steps: [
      { bookId: 'cognitive-awakening', note: '认知觉醒：先看见自己的思维模式与惯性。' },
      { bookId: 'rc34', note: '原子习惯：用环境设计替代意志力，把改变变成默认选项。' },
      { bookId: 'rc32', note: '学会提问：批判性思维，别把假设当事实。' },
      { bookId: 'rc35', note: '能力陷阱：警惕「越擅长越被困住」，先行动再思考。' },
      { bookId: 'rc31', note: '纳瓦尔宝典：把特定知识产品化，放大个人杠杆。' }
    ]
  }
]

export function getPath(id) {
  return readingPaths.find(p => p.id === id) || null
}
// 返回某本书所属的阅读路径，以及「下一步」书本 id（用于 BookDetail 联动）
export function pathContextForBook(bookId) {
  const list = readingPaths
    .map(p => {
      const idx = p.steps.findIndex(s => s.bookId === bookId)
      if (idx < 0) return null
      const next = p.steps[idx + 1] ? p.steps[idx + 1].bookId : null
      return { path: p, index: idx, next }
    })
    .filter(Boolean)
  return list
}

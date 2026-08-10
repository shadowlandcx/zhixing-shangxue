// 实战工具统一入口：69 本书的基础工具 + Phase 1 标杆书「工具包」扩展。
// 数据按赛道拆分在 marketing.js / sales.js / team.js 三个文件，本文件负责聚合与检索。
//
// 每条工具字段：
//   id          唯一标识
//   title       工具名
//   bookId      对应书目 id（与 books-meta 一致）
//   category    'marketing' | 'sales' | 'team'  赛道分类
//   desc        一句话说明
//   useCase     适用场景（何时用、给谁用）
//   thinking    「我的思考」——设计者视角的方法论拆解与落地提醒
//   notes       使用说明（下载 PDF 会带出）
//   exampleRows 预填为标杆示例的行下标（1 起，含表头）；下载时高亮
//   rows        二维数组：rows[0] 为表头，其余为填法行
// —— 以下为 Phase 1 工具包扩展字段（旧工具可缺省，视图做了兼容）——
//   type: framework(框架画布) | checklist(清单) | scorecard(评分卡) | script(话术) | calculator(测算) | worksheet(工作表)
//   stage: diagnose(诊断) | plan(规划) | execute(执行) | review(复盘)
//   difficulty: 1|2|3（★ 数）  duration: 建议用时  pitfalls: 常见坑  successMetric: 怎么算用对

import { marketingTools } from './marketing'
import { salesTools } from './sales'
import { teamTools } from './team'
import { pilotTools } from './pilot'
import { salesBatch1Tools } from './sales-batch1'
import { salesBatch2Tools } from './sales-batch2'
import { salesBatch3Tools } from './sales-batch3'
import { salesBatch4Tools } from './sales-batch4'
import { teamBatch1Tools } from './team-batch1'
import { teamBatch2Tools } from './team-batch2'
import { teamBatch3Tools } from './team-batch3'
import { teamBatch4Tools } from './team-batch4'
import { teamBatch5Tools } from './team-batch5'
import { marketingBatch1Tools } from './marketing-batch1'
import { strategicSellingTools } from './strategic-selling'
import { powerNegotiationTools } from './power-negotiation'
import { principledNegotiationTools } from './principled-negotiation'
import { govEnterpriseSalesTools } from './gov-enterprise-sales'
import { crossingTheChasmTools } from './crossing-the-chasm'
import { positioningTools } from './positioning'
import { abmTools } from './abm'
import { coachingForPerformanceTools } from './coaching-for-performance'
import { leadershipPipelineTools } from './leadership-pipeline'
import { crucialConversationsTools } from './crucial-conversations'
import { competitiveStrategyTools } from './competitive-strategy'
import { aiForSalesTools } from './ai-for-sales'
import { newSolutionSellingTools } from './new-solution-selling'
import { visualHammerTools } from './visual-hammer'
import { twentyTwoLawsTools } from './22-immutable-laws'
import { blueOceanStrategyTools } from './blue-ocean-strategy'
import { highOutputManagementTools } from './high-output-management'
import { innovatorsDilemmaTools } from './innovators-dilemma'
import { principlesTools } from './principles'

// 被「完整工具包」取代的旧单工具，合并时去重，避免重复展示。
// 注意 architect-map 属于 chip-history，不在移除之列。
const REPLACED_IDS = new Set([
  // —— Phase 1 标杆书旧单工具 ——
  'kam-account-scoring', // key-account-management
  'customer-board',      // danaher-model
  'positioning-card',    // tech-product-marketing
  // —— Phase 2 销售第 1 批旧单工具 ——
  'rc20-spin-coding',    // rc20 SPIN销售巨人
  'rc01-five-profiles',  // rc01 挑战式销售
  'rc07-value-rewrite',  // rc07 价值竞争
  'rc18-visit-3q',       // rc18 信任五环
  'rc04-triangle-qualify', // rc04 桑德拉销售原则
  'rc19-trust-equation', // rc19 值得信赖的顾问
  'rc10-pro-transition', // rc10 B2B销售原理与实践
  // —— Phase 2 销售第 2 批旧单工具 ——
  'rc02-three-layer-funnel', // rc02 硅谷蓝图
  'rc03-farming-map',        // rc03 绝不推销
  'rc08-hiring-scorecard',   // rc08 销售加速公式
  'rc13-simplify-audit',     // rc13 新销售手册
  'rc21-report-audit',       // rc21 99%的销售指标都用错了
  'rc16-big-fish',           // rc16 大客户管理流程与实务
  'rc11-coach-hour',         // rc11 带出销售冠军
  // —— Phase 2 销售第 3 批旧单工具 ——
  'rc05-seven-habits',       // rc05 销售组织的数字化转型宝典
  'rc06-manager-duty',       // rc06 销售管理
  'rc09-roc-board',          // rc09 客户关系管理：战略框架
  'rc12-system-check',       // rc12 用管理驱动销售
  'rc14-tech-gap',           // rc14 数字化销售
  'rc15-value-role',         // rc15 销售与销售管理
  'rc17-trait-assess',       // rc17 销售人力资源管理
  // —— Phase 2 销售第 4 批旧单工具 ——
  'rc22-perspective-flip',   // rc22 客户天才
  'zero-trust-mapping',      // zero-trust 零信任网络（chip-history 的 architect-map 保留，不在此列）
  // —— Phase 2 团队第 1 批旧单工具 ——
  'rc29-gift-plan',      // rc29 商务馈赠准备计划卡
  'rc30-bias-check',     // rc30 重大决策偏差自检清单
  'rc31-leverage-audit', // rc31 个人杠杆盘点表
  'rc32-gold-panning',   // rc32 淘金式思维提问卡
  'rc33-entropy-stoploss', // rc33 内耗盘点停损表
  'rc34-daily-system',   // rc34 目标翻译每日体系表
  'rc35-outsight-plan',  // rc35 能力陷阱破局：由外而内行动表
  // —— Phase 2 团队第 2 批旧单工具 ——
  'rc36-influence-pause',   // rc36 影响力
  'rc37-game-tree',         // rc37 博弈论
  'rc38-empathy-skill',     // rc38 共情
  'rc39-complaint-counter', // rc39 不抱怨的世界
  'rc40-hard-right',        // rc40 做难而正确的事
  'rc41-process-lifecycle', // rc41 流程管理
  'rc42-4t-mirror',         // rc42 腾讯增效密码
  // —— Phase 2 团队第 3 批旧单工具 ——
  'rc43-torch-loop',        // rc43 变革八步法
  'rc44-output-review',     // rc44 上任第一年
  'rc45-crisis-resilience', // rc45 苦难英雄任正非
  'rc46-talent-value',      // rc46 高效能招聘
  'rc47-strategy-omit',     // rc47 赢利
  'rc48-ambidex-audit',     // rc48 思科实访录
  'rc49-first-principle',   // rc49 价值驱动增长
  // —— Phase 2 团队第 4 批旧单工具 ——
  'rc50-power-scan',        // rc50 战略7力
  'rc51-tension-check',     // rc51 第五项修炼
  'rc52-noncompete-curve',  // rc52 不战而胜
  'rc53-team-player',       // rc53 理想团队成员
  'rc54-structure-first',   // rc54 10倍创新
  'rc55-10x-subtraction',   // rc55 高效能人士
  'rc56-mgmt-foundation',    // rc56 管理学
  // —— Phase 2 团队第 5 批旧单工具（阿吉里斯三版本 + 认知觉醒）——
  'clarity-template',        // cognitive-awakening 认知觉醒
  'tip-two-theories',        // tip 阿吉里斯原典
  'tip-cn08-term-card',      // tip-cn08 2008 译本
  'tip-cn24-reading-route',  // tip-cn24 2024 译本
  // —— Phase 2 营销第 1 批旧单工具 ——
  'value-curve'             // singularity-nearer 奇点更近
])
const marketingTools2 = marketingTools.filter((t) => !REPLACED_IDS.has(t.id))
const salesTools2 = salesTools.filter((t) => !REPLACED_IDS.has(t.id))
const teamTools2 = teamTools.filter((t) => !REPLACED_IDS.has(t.id))

// 全量工具 1221 个（esbuild 实测 2026-08-07）：旧 69 移除 58 个重复单工具(Phase1 的 3 + 销售 4 批 23 + 团队 5 批 32)，保留 15 旧工具；+ Phase1 标杆 22 + 各赛道批挖矿。按赛道：marketing 15 / sales 374 / team 832。
export const allTools = [
  ...marketingTools2,
  ...salesTools2,
  ...teamTools2,
  ...pilotTools,
  ...salesBatch1Tools,
  ...salesBatch2Tools,
  ...salesBatch3Tools,
  ...salesBatch4Tools,
  ...teamBatch1Tools,
  ...teamBatch2Tools,
  ...teamBatch3Tools,
  ...teamBatch4Tools,
  ...teamBatch5Tools,
  ...marketingBatch1Tools,
  ...strategicSellingTools,
  ...powerNegotiationTools,
  ...principledNegotiationTools,
  ...govEnterpriseSalesTools,
  ...crossingTheChasmTools,
  ...positioningTools,
  ...abmTools,
  ...coachingForPerformanceTools,
  ...leadershipPipelineTools,
  ...crucialConversationsTools,
  ...competitiveStrategyTools,
  ...aiForSalesTools,
  ...newSolutionSellingTools,
  ...visualHammerTools,
  ...twentyTwoLawsTools,
  ...blueOceanStrategyTools,
  ...highOutputManagementTools,
  ...innovatorsDilemmaTools,
  ...principlesTools
]

// 赛道元信息（用于筛选 Tab 与徽标）
export const toolCategories = {
  marketing: { key: 'marketing', label: '营销', icon: '📣', desc: '定位 · 渠道 · 场景 · 内容获客' },
  sales: { key: 'sales', label: '销售', icon: '🤝', desc: '大客户 · SaaS 漏斗 · 拜访 · 谈判' },
  team: { key: 'team', label: '团队', icon: '👥', desc: '管理 · 组织 · 决策 · 人才' }
}

// 按赛道分组（旧工具 + 对应赛道的 Phase 1/2 工具包）
export const toolsByCategory = {
  marketing: [...marketingTools2, ...pilotTools.filter((t) => t.category === 'marketing'), ...marketingBatch1Tools, ...crossingTheChasmTools, ...positioningTools, ...abmTools, ...visualHammerTools, ...twentyTwoLawsTools],
  sales: [
    ...salesTools2,
    ...pilotTools.filter((t) => t.category === 'sales'),
    ...salesBatch1Tools,
    ...salesBatch2Tools,
    ...salesBatch3Tools,
    ...salesBatch4Tools,
    ...strategicSellingTools,
    ...powerNegotiationTools,
    ...principledNegotiationTools,
    ...govEnterpriseSalesTools,
    ...aiForSalesTools,
    ...newSolutionSellingTools
  ],
  team: [...teamTools2, ...pilotTools.filter((t) => t.category === 'team'), ...teamBatch1Tools, ...teamBatch2Tools, ...teamBatch3Tools, ...teamBatch4Tools, ...teamBatch5Tools, ...coachingForPerformanceTools, ...leadershipPipelineTools, ...crucialConversationsTools, ...competitiveStrategyTools, ...blueOceanStrategyTools, ...highOutputManagementTools, ...innovatorsDilemmaTools, ...principlesTools]
}

export function getTool(id) {
  return allTools.find((t) => t.id === id) || null
}

// 取某本书对应的全部工具（书页「本书实战工具」区块用）
export function templatesForBook(bookId) {
  return allTools.filter((t) => t.bookId === bookId)
}

// 兼容旧引用：toolbox 历史用 templates 数组名
export const templates = allTools

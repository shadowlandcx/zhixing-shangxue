// 场景配方：按「场景 / 痛点」组合跨书工具包，让用户"领方案"而不是"搜工具"。
// 每个配方的 tools 为真实工具 id（均来自 src/data/tools，构建期会被 esbuild 静态打包）。
// 渲染时按 stage（诊断→规划→执行→复盘）自动排序，保证工作流顺序。

export const recipes = [
  {
    id: 'recipe-cold-open',
    title: '新客户破冰',
    painPoint: '第一次见面容易变成自卖自夸，客户设防、聊不下去。',
    scenario: '初次拜访 / 陌生客户接触 / 开场前 30 秒',
    why: '先用清单看清"关系失灵"在哪，再用信任模型与对话脚本把开场从"推销"转成"共创"。',
    tools: [
      'rc01-relationship-myth-audit', // 关系失灵盘点表
      'rc07-picc-trust',              // PICC 信任建立模型
      'rc20-opening-agenda-script',   // 开场议程确认脚本（30 秒版）
      'rc03-listen-ask-script',       // 不推销对话脚本
      'rc18-question-script',         // 提问引发思考话术卡
      'rc01-teaching-six-steps'       // 教导式讲述六步脚本
    ]
  },
  {
    id: 'recipe-discovery',
    title: '需求挖掘与立项',
    painPoint: '客户说"再看看"，其实是我们没把隐性需求显性化、没量化到能立项。',
    scenario: '拜访中挖掘痛点 / 把需求推进到可立项 / 向团队讲清"为什么值得做"',
    why: 'SPIN 提问打底，需求成熟度追踪控节奏，暗示问题与效益量化把痛点变成客户自己的"必须解决"。',
    tools: [
      'rc20-spin-question-card',      // SPIN 四类提问卡
      'rc20-need-maturity-tracker',   // 需求成熟度追踪表
      'rc20-implication-designer',    // 暗示问题四维设计器
      'rc20-payoff-quantifier',       // 需求—效益量化收口表
      'rc20-need-benefit-matrix',     // 需求—利益对照表
      'dbs-cvd-workshop'              // CVD 客户价值工作坊清单
    ]
  },
  {
    id: 'recipe-deal-control',
    title: '控单与商机推进',
    painPoint: '商机看着热闹，却总在关键时刻卡住——分不清大单小单打法，拿不到晋级承诺。',
    scenario: '商机评估 / 关键节点推进 / 多角色客户中的路径设计',
    why: '先分流大单小单，再用角色定制矩阵锁定每位关键人，靠晋级承诺阶梯把"关系好"变成"能往前走"。',
    tools: [
      'rc20-big-small-deal-sorter',       // 大单／小单打法分流器
      'rc03-diamond-opportunity-map',     // 机会开发钻石模型盘点表
      'rc10-win-hypothesis-card',         // 赢单假设卡
      'rc01-stakeholder-tailoring-matrix',// 角色定制矩阵（关切—证据—代言）
      'rc20-advance-commitment-ladder'    // 晋级承诺阶梯表
    ]
  },
  {
    id: 'recipe-negotiation',
    title: '价格谈判与异议处理',
    painPoint: '一谈价格就慌，要么轻易让步，要么硬顶把单谈崩。',
    scenario: '报价后议价 / 客户压价 / 顾虑与异议浮现时',
    why: '先有谈判规划图兜住底线与三套反应预案，再用守卫话术与痛点分析把"贵"转回"值"。',
    tools: [
      'rc01-negotiation-planner',   // 谈判规划图（三反应预案版）
      'rc04-no-candy',              // 门厅不撒糖·不让步清单
      'rc10-price-defense-script',  // 价格守卫三步话术卡
      'rc07-deal-close',            // 达成协议三步曲与顾虑缓解表
      'rc07-pain-analysis',         // 痛点分析表（顾问式需求显性化）
      'rc04-pain-three-questions'   // 痛点三问
    ]
  },
  {
    id: 'recipe-win-loss',
    title: '丢单复盘与改进',
    painPoint: '赢了不知道为啥赢，输了重复犯同样的错，团队能力不沉淀。',
    scenario: '丢单 / 赢单后复盘 / 陪访后纠偏 / 月度回顾',
    why: '结构化四分类复盘定位真因，异议预防溯源与一次一行为陪访把复盘变成下次的具体动作。',
    tools: [
      'rc10-loss-review-4d',            // 丢单结构化复盘四分类
      'rc20-four-stage-scorecard',      // 拜访四阶段复盘计分卡
      'rc20-objection-prevention-audit',// 异议预防溯源表
      'rc20-one-behavior-drill',        // 一次一行为陪访训练卡
      'rc01-relationship-myth-audit',   // 关系失灵盘点表
      'kam-relationship-board'          // 关系健康度看板
    ]
  },
  {
    id: 'recipe-team-goal',
    title: '团队目标拆解与经营',
    painPoint: '目标一摊下去就失真，月度经营会沦为"报数会"，没有动作闭环。',
    scenario: '年度/季度目标拆解 / 经营会设计 / GTM 对齐',
    why: '100 天计划与 GTM 一页纸把目标落成路径，4P 经营会月历与 30/60/90 清单保证节奏与动作闭环。',
    tools: [
      'dbs-100day-plan',        // 100 天整合 / 大客户计划
      'pmm-gtm-onepager',       // GTM 战略一页纸
      'rc21-object-metric-card',// 五类管理对象指标卡
      'dbs-4p-meeting',         // 4P 经营会月历
      'pmm-3090'                // 产品营销 30/60/90 天行动清单
    ]
  },
  {
    id: 'recipe-channel',
    title: '渠道与生态拓展',
    painPoint: '直营打到天花板，生态伙伴拉不来、转介绍断断续续。',
    scenario: '渠道体系设计 / 伙伴联合 GTM / 转介绍引擎 / 客户分层经营',
    why: '信任账本与转介绍引擎把"关系"变成可复制机制，JBP 共创画布与客户分层配置把生态合作落到共同利益。',
    tools: [
      'rc03-trust-ledger',           // 无诉求触点信任账本
      'rc03-referral-engine',        // 转介绍引擎设计表
      'rc15-relationship-tier-matrix',// 客户关系类型分层配置表
      'rc16-winwin-jbp-canvas',      // 双赢客户计划（JBP）共创画布
      'rc14-outbound-cadence',       // 人机协同触达节奏设计
      'rc13-weapon-mix-map'          // 销售武器配比图
    ]
  },
  {
    id: 'recipe-coaching',
    title: '新人带教与能力复制',
    painPoint: '明星销售的经验带不出来，新人成长靠撞，赢单无法复制。',
    scenario: '新人 onboarding / 陪访带教 / 销售打法标准化 / 能力认证',
    why: '打法标准化库沉淀"败因+觉醒"，一次一行为陪访把能力拆成可练的动作，能力雷达与认证保证复制有标准。',
    tools: [
      'dbs-playbook-library',          // 销售打法标准化库
      'rc20-spin-question-card',       // SPIN 四类提问卡
      'rc01-buyer-selfeducation-brief',// 拜访前认知落差简报
      'rc20-one-behavior-drill',       // 一次一行为陪访训练卡
      'dbs-leadership-cert',           // DBS 式领导力认证清单
      'kam-capability-radar'           // KAM 能力雷达自评
    ]
  }
]

// 工具按阶段排序用的权重（diagnose→plan→execute→review）
export const RECIPE_STAGE_WEIGHT = { diagnose: 0, plan: 1, execute: 2, review: 3 }

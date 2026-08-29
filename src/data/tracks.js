// 分类体系（7 大类）· 2026-08-29 重构
// 说明：原 销售管理 / 市场营销 / 团队管理 三类存在「分类过粗、归属不准、
// 技术与成长类无处安放」的问题，现按「能力域」重划为 7 类，覆盖全部 91 本。
export const tracks = {
  'sales-craft': {
    id: 'sales-craft',
    relatedBooks: [
      'rc01', 'rc02', 'rc03', 'rc04', 'rc05', 'rc06',
      'rc07', 'rc08', 'rc10', 'rc11', 'rc12', 'rc13',
      'rc14', 'rc15', 'rc18', 'rc19', 'rc20', 'rc21',
      'new-solution-selling', 'strategic-selling'
    ],
    name: '销售打法',
    en: 'Sales Craft',
    icon: '🎯',
    tagline: '从开场到收口，把单子打赢',
    desc: '一线签单的方法论与技巧合集：提问、顾问式、解决方案、挑战式、信任建立，以及销售团队的目标、流程与数字化管理。',
    categories: [
      { name: '打法方法论', desc: 'SPIN、挑战式、解决方案、顾问式' },
      { name: '信任与沟通', desc: '信任五环、值得信赖的顾问、绝不推销' },
      { name: '销售管理', desc: '目标拆解、流程、指标、人才' },
      { name: '数字化与 AI', desc: '数字化销售、AI 赋能、组织转型' }
    ],
    cases: [
      { title: '客户说"再看看"，其实是痛点没挖透', scene: '销售拜访后客户总说考虑一下，再无下文。', conflict: '一直在讲产品多好，没让客户自己说出"这个问题必须解决"。', outcome: '改用 SPIN 提问 + 暗示问题设计，客户主动立项，赢单周期缩短 40%。' },
      { title: '关系很好，却总在最后一轮输掉', scene: '跟客户关系到位，但评比时总输给对手。', conflict: '关系不等于采购理由，没给客户"选你"的商业逻辑。', outcome: '用挑战式销售重构客户认知，把关系优势转成差异化洞察，赢率回升。' },
      { title: '明星销售的经验，团队复制不出来', scene: 'Top Sales 业绩占团队一半，新人成长慢。', conflict: '打法靠个人天赋，没有沉淀成可训练的动作标准。', outcome: '建打法标准化库 + 一次一行为陪访，新人达标周期从 9 个月降到 5 个月。' }
    ],
    path: [
      { step: '1', title: '销售新人', desc: '掌握提问、信任与方案表达的基本功' },
      { step: '2', title: '销售骨干', desc: '打法稳定可复制，能独立运作复杂机会' },
      { step: '3', title: '销售管理者', desc: '建流程、定指标、带队伍' }
    ]
  },
  'account': {
    id: 'account',
    relatedBooks: [
      'key-account-management', 'gov-enterprise-sales', 'rc09', 'rc16', 'rc22', 'salesforce-legend',
      'power-negotiation', 'principled-negotiation', 'crucial-conversations', 'rc38'
    ],
    name: '客户经营',
    en: 'Account Management',
    icon: '🏛️',
    tagline: '把关键客户，经营成长期资产',
    desc: '大客户与政企客户的经营合集：关键客户管理、政企 ToG 打法、客户关系战略、客户成功，以及谈判与关键对话的收口能力。',
    categories: [
      { name: '大客户经营', desc: 'KAM、客户分级、相合性模型' },
      { name: '政企 ToG', desc: '政府采购、信创、招投标、合规' },
      { name: '谈判与对话', desc: '优势谈判、原则谈判、关键对话' },
      { name: '客户成功', desc: 'NRR、续约、客户天才' }
    ],
    cases: [
      { title: '大客户决策链 7 人，跟了半年没进展', scene: '某制造企业大单，销售只盯采购总监。', conflict: '真正拍板的副总担心交期风险，从没人正面回应过。', outcome: '重画决策人地图、按角色做价值提案，30 天内签下 320 万订单。' },
      { title: '续约率掉到 90%，NRR 一直上不去', scene: 'SaaS 公司签得多、留不住。', conflict: '把客户成功做成售后客服，没有主动经营客户价值。', outcome: '建客户健康度看板 + 分层经营机制，NRR 从 90% 回到 112%。' },
      { title: '政企招投标总在最后一轮出局', scene: '资质、方案都不差，但总是第二名。', conflict: '前期没参与参数制定，最后一轮才发现参数被对手锁定。', outcome: '前置到需求论证阶段参与，用合规化改造承接信创要求，中标率翻倍。' }
    ],
    path: [
      { step: '1', title: '大客户经理', desc: '把单个客户做深、做透' },
      { step: '2', title: '关键客户负责人', desc: '把客户当组合经营，分级配置资源' },
      { step: '3', title: '政企/生态负责人', desc: '体系化经营大客户与生态伙伴' }
    ]
  },
  'marketing': {
    id: 'marketing',
    relatedBooks: [
      'tech-product-marketing', 'crossing-the-chasm', 'positioning', 'abm', 'visual-hammer', '22-immutable-laws',
      'smart-pricing', 'rc23', 'rc24', 'rc25', 'rc26', 'rc27',
      'rc28', 'rc49'
    ],
    name: '营销增长',
    en: 'Marketing & Growth',
    icon: '📣',
    tagline: '让价值被看见，让增长可复制',
    desc: '市场与品牌视角的合集：定位理论、跨越鸿沟、品牌塑造、产品营销、ABM 账号化经营与定价策略，覆盖 ToB 营销全链路。',
    categories: [
      { name: '定位与品牌', desc: '心智占位、视觉锤、品牌定律' },
      { name: '产品营销', desc: 'GTM、Message House、生命周期' },
      { name: '获客与增长', desc: 'ABM、场景、数字营销、渠道' },
      { name: '定价策略', desc: '价值定价、动态定价、支付意愿' }
    ],
    cases: [
      { title: '技术讲得很清楚，客户却记不住', scene: '产品发布后市场没水花，销售抱怨线索质量差。', conflict: '在讲"我们有什么"，而不是"你为什么要现在换"。', outcome: '用 Message House 重构信息屋，一句话价值主张统一内外口径，赢单率提升。' },
      { title: '投了 50 万信息流，ROI 只有 0.3', scene: '大促前重投信息流，预期 ROI 2.0。', conflict: '流量没问题，落地页讲的是功能，访客要的是"同行怎么做的"。', outcome: '重做落地页 + 加客户证言，ROI 回到 2.4。' },
      { title: '品牌升级后老客户反而流失', scene: '换 Logo 和 slogan 冲击高端。', conflict: '新定位偏离老客户最看重的性价比，被竞品截胡。', outcome: '回调传播重点、保留价值锚点，季度流失率回落 9 个百分点。' }
    ],
    path: [
      { step: '1', title: '市场专员', desc: '产出内容、执行活动' },
      { step: '2', title: '产品营销', desc: '做 GTM、定位与竞争分析' },
      { step: '3', title: '市场负责人', desc: '定品牌策略、算增长总账' }
    ]
  },
  'leadership': {
    id: 'leadership',
    relatedBooks: [
      'coaching-for-performance', 'leadership-pipeline', 'high-output-management', 'principles', 'ji-kong', 'rc17',
      'rc41', 'rc42', 'rc43', 'rc44', 'rc45', 'rc46',
      'rc51', 'rc53', 'rc56', 'rc40', 'tip', 'tip-cn08',
      'tip-cn24'
    ],
    name: '团队管理',
    en: 'Team & Leadership',
    icon: '🤝',
    tagline: '把人带好，把事做成',
    desc: '带人带团队的合集：教练式领导、领导梯队、高产出管理、组织流程与变革、人才选育用留，以及组织学习的底层方法。',
    categories: [
      { name: '教练与领导', desc: 'GROW、梯队、一对一、授权' },
      { name: '组织与流程', desc: '流程即组织力、变革、增效' },
      { name: '人才与绩效', desc: '招聘、带教、绩效改进' },
      { name: '组织学习', desc: '双环学习、学习型组织、行动科学' }
    ],
    cases: [
      { title: '技术骨干被提拔，3 个月带崩了团队', scene: '年度技术之星被提为组长。', conflict: '沿用"自己拼命干"的模式，不懂授权，团队憋屈、交付延期。', outcome: '补管理必修课 + 设双周 1-on-1，一个季度后人效回升、离职归零。' },
      { title: '周会变成汇报表演，没人敢说问题', scene: '管理层周会人人念 PPT，问题被美化。', conflict: '老板当场拍板风格，让员工不敢暴露坏消息。', outcome: '改"报忧不报喜"机制 + 匿名风险墙，真实问题浮出、决策质量提升。' },
      { title: '空降总监推变革，被元老集体抵制', scene: '新任业务总监想推流程数字化。', conflict: '没先听元老顾虑、没找同盟，被解读为"否定过去"。', outcome: '用行动学习小组让元老牵头试点，阻力变动力，3 个月落地。' }
    ],
    path: [
      { step: '1', title: '新任主管', desc: '从自己干到带人干' },
      { step: '2', title: '中层管理者', desc: '管团队、跨部门协同' },
      { step: '3', title: '业务负责人', desc: '搭班子、建机制、塑文化' }
    ]
  },
  'strategy': {
    id: 'strategy',
    relatedBooks: [
      'competitive-strategy', 'blue-ocean-strategy', 'innovators-dilemma', 'escape-velocity', 'danaher-model', 'rc47',
      'rc48', 'rc50', 'rc52', 'rc54', 'rc55'
    ],
    name: '战略经营',
    en: 'Strategy & Business',
    icon: '🧭',
    tagline: '看准方向，配好打法',
    desc: '战略与经营视角的合集：竞争战略、蓝海、颠覆式创新、商业模式、经营系统与增长战略，解决"往哪打、怎么赢"的问题。',
    categories: [
      { name: '竞争战略', desc: '五力模型、蓝海、不战而胜' },
      { name: '创新与转型', desc: '颠覆式创新、换轨、第二曲线' },
      { name: '经营系统', desc: '丹纳赫模式、赢利、思科' },
      { name: '增长战略', desc: '10 倍增长、战略 7 力、价值驱动' }
    ],
    cases: [
      { title: '市场份额第一，却越卖越不赚钱', scene: '行业第一名的净利率不足 3%。', conflict: '陷入了"份额即胜利"的陷阱，没有看清五力结构里的利润流向。', outcome: '用五力模型重画产业结构，主动放弃低毛利细分，利润翻倍。' },
      { title: '新业务投了三年，始终长不大', scene: '公司孵化新业务，一直靠母体输血。', conflict: '用成熟业务的 KPI 和流程管新业务，被过往引力拖死。', outcome: '设隔离区、换指标体系，新业务独立跑通后年增速 60%。' },
      { title: '规模越大越笨重，反应越来越慢', scene: '公司从 200 人长到 2000 人，决策链条冗长。', conflict: '流程是照搬的，不是围绕自身价值流设计的。', outcome: '按端到端价值流重建流程与 Owner 机制，交付周期缩短一半。' }
    ],
    path: [
      { step: '1', title: '看懂竞争', desc: '五力模型、价值链与定位' },
      { step: '2', title: '设计打法', desc: '蓝海、颠覆式创新、第二曲线' },
      { step: '3', title: '经营系统', desc: '把战略落成经营机制' }
    ]
  },
  'mindset': {
    id: 'mindset',
    relatedBooks: [
      'cognitive-awakening', 'rc29', 'rc30', 'rc31', 'rc32', 'rc33',
      'rc34', 'rc35', 'rc36', 'rc37', 'rc39'
    ],
    name: '认知进化',
    en: 'Mindset & Thinking',
    icon: '🧠',
    tagline: '升级心智，才接得住方法',
    desc: '个人心智与思维的合集：思考快与慢、习惯养成、影响力、同理心与批判性思维，是所有方法论能否落地的底层操作系统。',
    categories: [
      { name: '思维模型', desc: '双系统思考、策略思维、学会提问' },
      { name: '习惯与心智', desc: '原子习惯、内耗到心流、认知觉醒' },
      { name: '影响力', desc: '说服六原则、共情、不抱怨' },
      { name: '自我经营', desc: '纳瓦尔宝典、送礼的艺术' }
    ],
    cases: [
      { title: '道理都懂，就是做不到', scene: '读完很多书，行为没变。', conflict: '把"知道"当成"改变"，缺的是环境与触发机制。', outcome: '用原子习惯四法则设计环境，把想做的事变成默认选项。' },
      { title: '天天在救火，没时间想重要的事', scene: '管理者日程被会议和突发占满。', conflict: '用"紧急"代理了"重要"，系统一主导了决策。', outcome: '引入双系统觉察 + 每周深度思考时段，季度战略议题推进率翻倍。' },
      { title: '跨部门推不动，谁都不配合', scene: '需要其他部门配合的项目一拖再拖。', conflict: '只在讲自己的诉求，没有建立互惠与共同目的。', outcome: '用影响力六原则 + 关键对话安全感框架，协作阻力显著下降。' }
    ],
    path: [
      { step: '1', title: '觉察', desc: '看清自己的思维模式与盲区' },
      { step: '2', title: '重构', desc: '建立新习惯与心智框架' },
      { step: '3', title: '影响', desc: '用认知优势放大协作与说服' }
    ]
  },
  'industry': {
    id: 'industry',
    relatedBooks: [
      'chip-history', 'zero-trust', 'cloud-primer', 'industry-research', 'singularity-nearer', 'ai-for-sales'
    ],
    name: '行业科技',
    en: 'Industry & Tech',
    icon: '⚡',
    tagline: '看懂技术，才讲得清价值',
    desc: '行业与技术认知的合集：芯片、云计算、零信任、AI 前沿与行业研究方法，帮你在客户面前把技术语言翻译成业务价值。',
    categories: [
      { name: '技术素养', desc: '芯片、云计算、零信任' },
      { name: 'AI 前沿', desc: '奇点更近、AI for Sales' },
      { name: '行业研究', desc: '快速了解一个行业' }
    ],
    cases: [
      { title: '客户问技术细节，答不上来', scene: '政企客户技术负责人追问架构细节。', conflict: '只会背话术，讲不清技术背后的业务取舍。', outcome: '补技术素养 + 类比表达法，能讲清"为什么这么设计"，客户信任度提升。' },
      { title: '进入新行业三个月还没摸清门道', scene: '公司开拓新行业，团队一头雾水。', conflict: '零散查资料，没有行业研究的框架。', outcome: '用七维度行业体检 + 产业链地图，两周产出可用判断。' },
      { title: 'AI 火了，但不知道怎么用', scene: '管理层要求 AI 赋能销售。', conflict: '把 AI 当万能药，没有落到具体场景。', outcome: '锁定线索评分、对话智能、预测三个场景试点，人效提升 25%。' }
    ],
    path: [
      { step: '1', title: '技术素养', desc: '看懂芯片、云、安全的基本逻辑' },
      { step: '2', title: '行业研究', desc: '快速吃透一个行业的方法' },
      { step: '3', title: 'AI 前沿', desc: '把握趋势并落到业务场景' }
    ]
  }
}

export const trackList = Object.values(tracks)

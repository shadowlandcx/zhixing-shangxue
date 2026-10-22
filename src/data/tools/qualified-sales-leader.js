// 《The Qualified Sales Leader》（Jason McMahon）销售赛道工具包（管理者视角）。
// 字段扩展：type / stage / difficulty / duration / pitfalls / successMetric（同 pilot schema）。
// 内容均为中文引号，不使用反引号，避免破坏 JS 模板字符串。
// 赛道：sales（leader 帮销售一起看机会：七要素诊断 / Champion vs Economic Buyer / 教练节奏 / A-player 招聘）。
// 2026-10-22 由旧 schema（name/when/how/result）整体迁移为新 schema，补齐 id/title 等字段。

export const qualifiedSalesLeaderTools = [
  {
    id: 'qsl-seven-elements-diagnosis',
    title: '七要素诊断卡',
    bookId: 'qualified-sales-leader',
    category: 'sales',
    type: 'framework',
    stage: 'review',
    difficulty: 2,
    duration: '20 分钟 / 机会',
    desc: '每次 1v1，leader 和销售一起逐格拆机会：Metrics / Economic Buyer / Decision Criteria / Decision Process / Identify Pain / Champion / Competition / Paper Process，每要素三色标记。',
    useCase: '每周 1v1 拆机会、月度 pipeline 评审、关键机会立项与止损决策时。',
    thinking: '这是 Managing 转向 Coaching 的标志性动作：不看数字看格子。leader 的价值不在比销售更会填表，而在追问销售不敢追问自己的问题——「你说经济买家见了，他原话怎么说的」「这个黄格你打算这周找谁验证」。三色规则逼出诚实：绿要证据、黄要动作、红要么补要么放。管理动作从最红的那格开始，而不是从最好看的那格开始。',
    notes: 'leader 只追问不代填；每次 1v1 至少更新一个格子；连续两次全红的机会启动止损讨论，不拖季度末。',
    exampleRows: [1],
    pitfalls: '常见坑：1v1 变成进度汇报会；leader 代答格子的内容；全绿不收口（证据呢）；只诊断不排下一步动作。',
    successMetric: '团队每个关键机会都有七要素三色记录，且每次 1v1 后黄/红格都有责任人与时限。',
    rows: [
      ['要素', '三色', '证据 / 缺口', 'owner + 时限'],
      ['Metrics 量化收益', '', '', ''],
      ['Economic Buyer 出钱的人', '', '', ''],
      ['Decision Criteria 判定标准', '', '', ''],
      ['Decision Process 决策流程', '', '', ''],
      ['Identify Pain 痛点', '', '', ''],
      ['Champion 内部支持者', '', '', ''],
      ['Competition 竞争态势', '', '', ''],
      ['Paper Process 文书流程', '', '', '']
    ]
  },
  {
    id: 'qsl-champion-signals',
    title: 'Champion 四信号识别法（管理者版）',
    bookId: 'qualified-sales-leader',
    category: 'sales',
    type: 'checklist',
    stage: 'diagnose',
    difficulty: 1,
    duration: '15 分钟 / 接口人',
    desc: 'leader 带销售一起验证接口人是不是真 champion：能带你见 Economic Buyer、能在会议上为你说话、愿意在截止日期前推动、能告诉你项目内部的真实进展。',
    useCase: '1v1 中复查 champion 身份、销售 enthusiasm 过高时降温、机会复盘归因时。',
    thinking: '管理者用这张卡的重点不是自己判断，而是教销售判断——问「他上次带你去见谁了」「会上他原话怎么说的」，让销售自己发现 champion 是真是假。四信号缺一的代价在组织层面放大：一个把热情接口人当 champion 的销售，会带着整个团队的机会一起踩空。所以这是 1v1 里最值得固定追问的一张卡。',
    notes: '四信号逐项要行为证据；leader 示范一次完整追问后，改由销售自评、leader 抽查；接口人换岗/失势时强制复查。',
    exampleRows: [1],
    pitfalls: '常见坑：leader 代下结论不给方法；只看关系热度不看权力与信息；一次认定永不复查。',
    successMetric: '团队 champion 认定均有四信号验证记录；因误判 champion 导致的丢单在复盘中有明确归因。',
    rows: [
      ['信号', '具体表现（销售举证）', '是否具备'],
      ['能把你带到 Economic Buyer 面前', '', ''],
      ['能在会议上为你说话', '', ''],
      ['愿意在截止日期前推动', '', ''],
      ['能告诉你项目内部的真实进展', '', '']
    ]
  },
  {
    id: 'qsl-eb-signals',
    title: 'Economic Buyer 三信号识别法',
    bookId: 'qualified-sales-leader',
    category: 'sales',
    type: 'checklist',
    stage: 'diagnose',
    difficulty: 2,
    duration: '20 分钟 / 机会',
    desc: '判断谁是最终批预算的人：不参与技术讨论但参与预算讨论、KPI 里有这个项目要解决的问题、上级会问他「这个项目花这么多钱值不值」。',
    useCase: '确认决策链顶端、champion 推不动预算时的决策链复查、大单立项评审时。',
    thinking: 'McMahon 说这是 qualification 里最贵的错误：把 champion 当 economic buyer，于是销售一直在跟 champion 喝咖啡，而真正批预算的人根本不知道你是谁。三信号里最硬的是第三条——有人向他问责这个项目的回报，他就是经济买家；没人问，他就只是参与者。管理动作：每个关键机会必须回答「经济买家见过我们没有、他点头了没有」，答不上来就是最红的那格。',
    notes: '经济买家可能不止一个（多部门预算）；信号用可观察事实验证（会议纪要、汇报线、问责问题），不用头衔猜测。',
    exampleRows: [1],
    pitfalls: '常见坑：用头衔代替信号判断；把「对我们很热情的高层」当经济买家；明知没见到经济买家却继续往前推方案。',
    successMetric: '每个关键机会都有明确的 economic buyer 名单与接触记录；无经济买家接触的机会在评审中被降速或叫停。',
    rows: [
      ['信号', '观察到的证据', '是否符合'],
      ['不参与技术讨论但参与预算讨论', '', ''],
      ['KPI 里有本项目要解决的问题', '', ''],
      ['有人向他问责项目回报', '', '']
    ]
  },
  {
    id: 'qsl-coaching-cadence',
    title: '教练节奏模板',
    bookId: 'qualified-sales-leader',
    category: 'sales',
    type: 'worksheet',
    stage: 'plan',
    difficulty: 1,
    duration: '40 分钟 / 团队规划',
    desc: '建立团队的教练节奏：每周 1v1 拆机会（不是看数字）、每月团会挑 2-3 个机会现场诊断、每季 QBR 汇总所有机会状态看整体健康度。',
    useCase: '新团队组建、教练节奏重建、季度管理计划制定时。',
    thinking: '「教练节奏不是更多的会，而是更对的会」——周会看数字只能得到「进度正常」的幻觉，1v1 拆格子才能得到「这个机会经济买家还没见」的真相。三层节奏各有分工：周会治单个机会的健康，月会治团队方法的传导（现场诊断就是示范课），季会治资源与取舍（哪些机会该放）。节奏的关键是固定——不定期就不成习惯，不成习惯就退回 Managing。',
    notes: '1v1 只带七要素表不带进度表；月会现场诊断提前抽 2-3 个真实机会（提前打招呼别搞成批斗）；QBR 输出机会分级（加码/维持/止损）。',
    exampleRows: [1],
    pitfalls: '常见坑：1v1 变成汇报会；月会挑最好的机会表演；节奏被日常事务挤掉后不再恢复。',
    successMetric: '三层节奏连续两个季度执行率 ≥ 90%；季会有明确的加码/维持/止损分级结论。',
    rows: [
      ['节奏', '频次', '带什么材料', '产出'],
      ['1v1 拆机会', '每周', '七要素诊断卡', '黄/红格动作清单'],
      ['团会现场诊断', '每月', '2-3 个真实机会', '方法示范 + 团队共学'],
      ['QBR 机会健康度', '每季', '全部机会状态', '加码/维持/止损分级']
    ]
  },
  {
    id: 'qsl-a-player-interview',
    title: 'A-player 情景面试法',
    bookId: 'qualified-sales-leader',
    category: 'sales',
    type: 'script',
    stage: 'execute',
    difficulty: 2,
    duration: '45 分钟 / 候选人',
    desc: '招聘时用情景题筛选 A-player：不问「你之前做过什么」，而是问「如果你现在有一个机会，Economic Buyer 不见你，你会怎么做」——看第一反应。',
    useCase: '大客户销售岗面试、团队关键岗位招聘、晋升评估时。',
    thinking: '经历会过期，第一反应不会。这道题测三样东西：会不会绕过 champion 找决策链（方法）、敢不敢直接约经济买家（胆识）、懂不懂用价值理由约而不是硬约（专业）。想听「打电话给 champion 问怎么接近」也及格，但「等 champion 来找我」直接出局。面试官的功夫在追问第二层——「他拒绝你怎么办」「你带什么材料去」，情景题的价值全在追问深度。',
    notes: '同一情景追问至少三层（做法→被拒怎么办→带什么材料）；记录原话不记录印象；让两名面试官独立评分再对齐。',
    exampleRows: [1],
    pitfalls: '常见坑：候选人讲经历就跟着听故事；只问一层不追问；用「感觉不错」代替结构化记录。',
    successMetric: '每个候选人都有三层追问记录与双面试官独立评分；入职 6 个月留存率与首年业绩验证筛选有效性。',
    rows: [
      ['追问层', '问题', '候选人原话', '评分'],
      ['第一层：你会怎么做', '', '', ''],
      ['第二层：他拒绝你怎么办', '', '', ''],
      ['第三层：你带什么材料去', '', '', '']
    ]
  }
]

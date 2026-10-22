// 《Always Be Qualifying》（Jason McMahon）销售赛道工具包。
// 字段扩展：type / stage / difficulty / duration / pitfalls / successMetric（同 pilot schema）。
// 内容均为中文引号，不使用反引号，避免破坏 JS 模板字符串。
// 赛道：sales（qualification 从直觉变成动作）。
// 2026-10-22 由旧 schema（name/when/how/result）整体迁移为新 schema，补齐 id/title 等字段。

export const alwaysBeQualifyingTools = [
  {
    id: 'abq-three-whys',
    title: '三个为什么卡片',
    bookId: 'always-be-qualifying',
    category: 'sales',
    type: 'checklist',
    stage: 'diagnose',
    difficulty: 1,
    duration: '10 分钟 / 机会',
    desc: '每次客户接触前自检：客户为什么要买、为什么要现在买、为什么要跟我们买——三个问题答不上来，这个机会就不该往下走。',
    useCase: '客户接触前自检、机会立项评审、季度 pipeline 清理时。',
    thinking: '这三个为什么狠在「不是客户说，而是你验证」：客户说要买不等于真痛，客户说现在买不等于有触发事件，客户说我们好不等于有不可替代性。多数输单复盘到根上，都是三个为什么里至少一个从来没答过。把它做成接触前的固定动作，qualification 才从感觉变成纪律。',
    notes: '三个问题都要求写证据（客户原话、行为、预算文件），不写观点；答不上来的问题就是下一步要拜访验证的清单。',
    exampleRows: [1],
    pitfalls: '常见坑：把客户的客套话当答案；只问「要不要买」不问「为什么是现在」；第三个为什么用「我们服务好」这类可替代表述。',
    successMetric: '每个在途机会三问都有书面答案与证据，答不上来的转化为明确的验证动作。',
    rows: [
      ['为什么', '我的答案（写证据）', '证据来源', '验证状态'],
      ['客户为什么要买', '', '', '已确认 / 待验证'],
      ['客户为什么现在买', '', '', '已确认 / 待验证'],
      ['客户为什么跟我们买', '', '', '已确认 / 待验证']
    ]
  },
  {
    id: 'abq-meddpicc-tracker',
    title: 'MEDDPICC 七要素状态表',
    bookId: 'always-be-qualifying',
    category: 'sales',
    type: 'scorecard',
    stage: 'review',
    difficulty: 2,
    duration: '15 分钟 / 机会 / 次更新',
    desc: '每个机会全程维护七要素三色状态：绿（已确认）/ 黄（有线索未验证）/ 红（不满足或未知），让机会健康度一目了然。',
    useCase: '机会全程维护、1v1 汇报、周会 pipeline 评审时。',
    thinking: '这张表替代「我觉得能赢」的是结构化可见性：七要素里四绿两黄一红，该做什么动作一目了然。价值在三色规则——红格不是坏消息而是行动指令（未知就去问，不满足就想办法或放弃）。最容易糊弄的是 Decision Process 和 Paper Process，凭经验猜流程，到谈判才发现要招标要过法务，所以这两格强制要求书面流程。',
    notes: '每次客户接触后至少更新一个要素；黄格必须带「谁、何时验证」；全绿不等于稳赢，但全红一定不值得投入。',
    exampleRows: [1],
    pitfalls: '常见坑：把「客户说会买」当绿灯；只更新不行动；七要素全填绿自欺欺人——证据呢？',
    successMetric: '每个在途机会七要素均有三色标记，黄/红格对应明确的验证动作与责任人。',
    rows: [
      ['要素', '状态（绿/黄/红）', '证据 / 缺口', '下一步动作'],
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
    id: 'abq-pain-to-money',
    title: '痛点→钱翻译公式',
    bookId: 'always-be-qualifying',
    category: 'sales',
    type: 'calculator',
    stage: 'diagnose',
    difficulty: 2,
    duration: '30 分钟 / 痛点',
    desc: '把客户描述的痛点翻译成金额：痛点 → 影响范围 → 每单位损失 → 年化损失 → 不解决的后果，让 Metrics 格有数字可填。',
    useCase: '客户描述痛点后量化、向 Economic Buyer 汇报价值、方案报价前建立价值锚点时。',
    thinking: '「我们响应慢」没有杀伤力，「响应慢导致客户流失率上升 X%，一年损失 Z 元」才进得了预算讨论。这个公式的难点不在算术，在敢不敢和客户一起把数字算出来——敢算，说明痛点是真的；不敢算或客户不肯算，多半是痛得还不够。年化损失出来后，方案的投入产出比就有了分母。',
    notes: '数字优先用客户自己的数据（报表、KPI、公开财报）；客户没有数据时用行业基准并明确标注假设。',
    exampleRows: [1],
    pitfalls: '常见坑：用我们的产品性能替代客户的业务损失；数字拍脑袋无来源；只算收益不算不解决的后果（紧迫感来源）。',
    successMetric: '每个主打痛点都有客户认可的量级数字（年化损失或可量化收益），并写入 MEDDPICC 的 Metrics 格。',
    rows: [
      ['步骤', '内容', '客户数据 / 假设'],
      ['痛点描述', '', ''],
      ['影响范围', '', ''],
      ['每单位损失', '', ''],
      ['年化损失', '', ''],
      ['不解决的后果', '', '']
    ]
  },
  {
    id: 'abq-champion-signals',
    title: 'Champion 四信号识别法',
    bookId: 'always-be-qualifying',
    category: 'sales',
    type: 'checklist',
    stage: 'diagnose',
    difficulty: 1,
    duration: '15 分钟 / 接口人',
    desc: '判断接口人是否是真 champion 的四信号：能带你见 Economic Buyer、能在会议上为你说话、愿意在截止日期前推动、能告诉你项目内部的真实进展。',
    useCase: '新接口人评估、机会中段 champion 身份复查、输单复盘归因时。',
    thinking: '热情的接口人最容易误判成 champion——他喜欢你、回消息快、愿意开会，但推不动任何事。四个信号缺一不可，因为它们分别测量 champion 的三个实质：权力（能见到说了算的人）、意愿（愿意替你承担社交风险）、信息（知道牌桌底下在发生什么）。缺权力的是玩伴，缺意愿的是路人，缺信息的是传声筒。',
    notes: '四信号用行为验证不用感觉：见他带你见过谁、听他在会上说了什么、看他赶过什么截止日期、比对他透露的信息与事实的吻合度。',
    exampleRows: [1],
    pitfalls: '常见坑：把态度好当 champion；四个信号只验证一两个就下结论；champion 身份一次认定永不复查（人会调岗、会失势）。',
    successMetric: '每个机会的 champion 都有四信号逐项验证记录；缺信号的接口人明确标注为「非 champion」并调整策略。',
    rows: [
      ['信号', '具体表现', '是否具备'],
      ['能把你带到 Economic Buyer 面前', '', ''],
      ['能在会议上为你说话', '', ''],
      ['愿意在截止日期前推动', '', ''],
      ['能告诉你项目内部的真实进展', '', '']
    ]
  },
  {
    id: 'abq-roi-pitch',
    title: 'ROI Pitch 模板',
    bookId: 'always-be-qualifying',
    category: 'sales',
    type: 'script',
    stage: 'execute',
    difficulty: 2,
    duration: '20 分钟 / 场演示',
    desc: '方案阶段向 Economic Buyer 演示的价值故事线：pain → metrics → solution → investment → ROI → economic buyer，qualification 的最终交付物。',
    useCase: 'Economic Buyer 层面的方案演示、投标前高层汇报、价值论证材料撰写时。',
    thinking: '这条线的顺序就是经济买家的决策心理顺序：他先认痛点（关我什么事），再认量级（有多值得），才听方案（你能干什么），最后才轮到价格（花多少、回多少）。常见死法是倒过来讲——一上来讲产品多先进，经济买家心里还在想「这跟我 KPI 有什么关系」。结尾必须落回 economic buyer 的具体决策：批多少预算、什么时候批、走什么程序。',
    notes: 'metrics 用痛点→钱翻译公式的输出；ROI 讲三年不讲一年；收尾必须有明确的下一步决策请求，不演示完就 passive 结束。',
    exampleRows: [1],
    pitfalls: '常见坑：对技术听众讲 ROI、对经济买家讲参数；ROI 数字无出处；演示结束没有明确的决策请求与时间点。',
    successMetric: '每场 Economic Buyer 演示后拿到明确的预算/流程/时间表回应，而非「我们研究一下」。',
    rows: [
      ['环节', '要点', '我方内容'],
      ['Pain 痛点', '', ''],
      ['Metrics 量级', '', ''],
      ['Solution 方案', '', ''],
      ['Investment 投入', '', ''],
      ['ROI 回报', '', ''],
      ['Economic Buyer 决策请求', '', '']
    ]
  }
]

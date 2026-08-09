// 第一波补强书《谈判力》（哈佛原则谈判 / Getting to Yes）工具包。
// 字段扩展：type / stage / difficulty / duration / pitfalls / successMetric（同 pilot schema）。
// 内容均为中文全角引号「」，不使用反引号，避免破坏 JS 模板字符串。

export const principledNegotiationTools = [
  {
    id: 'pn2-interest-list',
    title: '利益清单（僵局必填）',
    bookId: 'principled-negotiation',
    category: 'sales',
    type: 'checklist',
    stage: 'diagnose',
    difficulty: 1,
    duration: '15 分钟 / 单',
    desc: '每个僵局先问「对方为什么坚持这个」，把立场拆成背后利益，找不冲突的替代解，而非硬顶。',
    useCase: '谈判卡死、双方各咬一个数、为避免结仇需找活路时。',
    thinking: '多数僵局不是利益真冲突，是双方被自己的立场绑架了。这张清单最锋利的一格是「不冲突的替代解」——一旦写出，你会发现很多「不可能」其实只是没换角度。它把「捍卫立场」的力气，转去「解利益」。',
    notes: '利益常是安全感/成本/面子/政治风险，多问「为什么需要这个」能挖到。',
    exampleRows: [1],
    pitfalls: '常见坑：把立场当利益硬扛；不写替代解；只盘己方不盘对方。',
    successMetric: '每个僵局都填了双方利益与至少一条替代解，而非停留在立场对抗。',
    rows: [
      ['我方利益', '对方利益', '不冲突的替代解'],
      ['毛利/现金流', '成本/政治安全', '打包交付降 TCO'],
      ['', '', '']
    ]
  },
  {
    id: 'pn2-batna-card',
    title: 'BATNA 评估卡',
    bookId: 'principled-negotiation',
    category: 'sales',
    type: 'scorecard',
    stage: 'diagnose',
    difficulty: 2,
    duration: '20 分钟 / 单',
    desc: '算清谈崩了你能去哪（最佳退路），并尽量改善它；同时评估对方 BATNA 宽度判断压价空间，设底线。',
    useCase: '判断该硬还是该让、评估单子值不值得死磕、设谈判底线时。',
    thinking: 'BATNA 是整本书的杠杆点，也是和道森「随时能走」殊途同归的系统性版本。它最残酷也最解放：当你写清「谈崩了去哪」，你就不再被「多想要这单」绑架，反而能冷静谈。多数人的谈判力被「渴望」误导了，BATNA 把它拉回现实。',
    notes: '真实力量来自退路宽度，而非职位或口才；底线（Reservation Value）据此设。',
    exampleRows: [1],
    pitfalls: '常见坑：用「多想要」代替 BATNA 评估；不改善退路；亮尽 BATNA 被对方拿捏。',
    successMetric: '每单有写实的 BATNA 与底线，且 BATNA 有具体改善动作。',
    rows: [
      ['维度', '现状', '动作'],
      ['我方最佳退路', '', '多备备选'],
      ['对方退路宽度', '宽/窄', '判断压价空间'],
      ['我方底线', '数值', '超则转身']
    ]
  },
  {
    id: 'pn2-objective-standard',
    title: '客观标准三问',
    bookId: 'principled-negotiation',
    category: 'sales',
    type: 'method',
    stage: 'execute',
    difficulty: 2,
    duration: '随谈判',
    desc: '用「行业惯例 / 先例 / 独立第三方评估」体面拒绝对方，让拒绝显得「不是针对你，是标准如此」，保全面子守底线。',
    useCase: '需拒绝对方但不想结仇、对方靠嗓门施压、谈价格陷主观拉锯时。',
    thinking: '客观标准是不伤关系也能拒人的关键武器。它把「我不要降价」换成「行业通行计价不支持这样降」——对方失去攻击靶子，因为你对抗的是标准不是他。练熟这招，你能在政企长周期里既硬气又不得罪人。',
    notes: '标准要独立、合法、事先双方认可，否则又变回比嗓门。',
    exampleRows: [1],
    pitfalls: '常见坑：用主观意志硬扛伤关系；标准不独立被对方反质疑；事后才找标准。',
    successMetric: '拒绝时引用事先认可的客观标准，对方无法以「你抠门」归因。',
    rows: [
      ['场景', '标准类型', '话术示例'],
      ['压价', '行业惯例', '「这领域通行按项目计价，是惯例」'],
      ['条款', '先例', '「过往同类合作均如此约定」'],
      ['争议', '第三方', '「以独立评估/法规为准」']
    ]
  },
  {
    id: 'pn2-people-separate',
    title: '人/事分离检查',
    bookId: 'principled-negotiation',
    category: 'sales',
    type: 'checklist',
    stage: 'execute',
    difficulty: 1,
    duration: '随谈判',
    desc: '把情绪与实质分开处理：先处理感受（「理解你压力大」≠认同立场）再处理事情；沟通双向校准避免误会。',
    useCase: '对方情绪化、谈着谈着变人身攻击、怕伤长期关系时。',
    thinking: '关系破裂的谈判，赢了条款也输了未来——这对政企长周期生意是致命的。这张检查单最该养成的，是「承认感受但不认同立场」的肌肉记忆：你越能接住对方情绪，越能保住自己的底线不被情绪裹挟。',
    notes: '不因讨厌对方就乱让步，也不因想讨好就丢底线；情绪处理在前，事情在后。',
    exampleRows: [1],
    pitfalls: '常见坑：情绪与实质混谈变人身攻击；为讨好乱让步；不校准沟通致误会。',
    successMetric: '谈判中情绪被先接住、实质条款未被情绪绑架，长期关系未受损。',
    rows: [
      ['检查项', '通过标准', '动作'],
      ['情绪处理', '对方感受被承认', '「理解你压力大」'],
      ['事实分离', '立场≠人', '对事不对人'],
      ['双向校准', '互相听懂', '复述确认']
    ]
  },
  {
    id: 'pn2-3090',
    title: '谈判力 30/60/90 天行动清单',
    bookId: 'principled-negotiation',
    category: 'sales',
    type: 'checklist',
    stage: 'execute',
    difficulty: 2,
    duration: '90 天',
    desc: '分三阶段：30 天建框架（利益清单+BATNA卡）→ 60 天练标准（客观标准库+拒价演练）→ 90 天看活路（商机评审查 BATNA、折扣率改善复盘）。',
    useCase: '启动原则谈判、新经理接手、区域想「守关系又改善折扣」时。',
    thinking: '这是把整本书压成执行甘特。最该被咬住的是「90 天·商机评审查 BATNA」——它最不紧急却最决定团队是否真把退路当资产。管理者逼团队改善 BATNA，比喊一百遍「别贱卖」都管用。',
    notes: '三阶段：建框架 / 练标准 / 看活路。',
    exampleRows: [1],
    pitfalls: '常见坑：30 天填完不跟进 60 天演练；90 天只复盘不抓 BATNA 评审；折扣率改善无对照。',
    successMetric: '90 天后 BATNA 成评审固定项、守关系前提下折扣率可量化改善。',
    rows: [
      ['阶段', '动作', '交付物'],
      ['30 天·建框架', '填利益清单+BATNA卡', '僵局分析模板'],
      ['60 天·练标准', '客观标准库+拒价演练', '弹药包+演练记录'],
      ['90 天·看活路', '评审查 BATNA、复盘', '区域折扣看板']
    ]
  }
]

// 《团队协作的五大障碍》工具包 · Patrick Lencioni

export const teamDysfunctionsTools = [
  {
    id: 'dysfunctions-assessment',
    title: '团队五大障碍评估表',
    bookId: 'team-dysfunctions',
    category: 'team',
    type: 'scorecard',
    stage: 'diagnose',
    difficulty: 2,
    duration: '约 20 分钟 / 每季度',
    desc: 'Lencioni 说：团队协作的五大障碍是一个金字塔，从底往上叠。这张表帮你团队「一量就知道在哪一层断掉」。',
    useCase: '每季度做一次，团队全员匿名填，结果只给核心团队看。',
    thinking: 'Lencioni 发现：团队健康不是「感觉好」，是「成员之间能不能进行无保留的、建设性的、以解决问题为目的的对话」。15 题覆盖五大障碍的每一层。',
    notes: '15 题各 1-5 分。把结果按层拆开看——哪一层得分最低，就是团队当前的瓶颈。',
    exampleRows: [1, 2],
    rows: [
      ['问题', '评分（1-5）', '这季度的具体事例'],
      ['团队成员是否愿意承认自己的错误和不足？', '', ''],
      ['团队成员之间是否能进行直接、坦诚的交流？', '', ''],
      ['团队成员是否愿意在争论中表达不同意见？', '', ''],
      ['团队在做出决定后，成员是否都愿意全力执行？', '', ''],
      ['团队成员之间是否能互相期望并要求对方负责？', '', ''],
      ['团队是否把集体目标放在个人荣誉之上？', '', '']
    ]
  },
  {
    id: 'dysfunctions-trust-card',
    title: '个人背景分享引导卡',
    bookId: 'team-dysfunctions',
    category: 'team',
    type: 'worksheet',
    stage: 'build',
    difficulty: 3,
    duration: '约 45 分钟 / 次',
    desc: 'Lencioni 发现：信任是五大障碍的最底层。而建立信任最快的方法不是「说好话」，是「暴露弱点」。这张卡帮你在第一次 offsite 上引导团队互相暴露弱点。',
    useCase: '团队 offsite 第一天的第一个活动，每个人 5 分钟分享。',
    thinking: 'Lencioni 发现：当领导者先暴露自己的弱点，团队的防御机制会瞬间瓦解。凯瑟琳就是这么做的——她先讲了自己从蓝领主管爬上来的经历，讲了她犯过的错。',
    notes: '分享的顺序：①成长经历中最有挑战的一段 ②工作中最失败的一次经历 ③现在最害怕什么。不要跳过第三步。',
    exampleRows: [1, 2],
    rows: [
      ['分享维度', '引导问题', '我的回答'],
      ['成长经历', '你成长过程中最有挑战的一段是什么？它怎么影响了你现在的工作方式？', ''],
      ['失败经历', '你在工作中最失败的一次经历是什么？你从中学到了什么？', ''],
      ['当前恐惧', '你现在在工作中最害怕什么？', '']
    ]
  },
  {
    id: 'dysfunctions-conflict-tool',
    title: 'TKI 冲突模式工具',
    bookId: 'team-dysfunctions',
    category: 'team',
    type: 'framework',
    stage: 'build',
    difficulty: 3,
    duration: '约 30 分钟 / 次',
    desc: 'Lencioni 发现：恐惧冲突是第二大障碍。而化解恐惧的最好方法不是「避免冲突」，是「用 TKI 工具把冲突变成建设性的争论」。',
    useCase: '团队就一个真实存在的分歧进行正面争论时使用。',
    thinking: 'TKI（Thomas-Kilmann Conflict Mode Instrument）把冲突处理方式分成五种：竞争、合作、妥协、回避、顺应。Lencioni 发现：杰出团队不是「没有冲突」，是「有能力进行建设性冲突」。',
    notes: '五个模式各 1-5 分。合作模式（≥4 分）是建设性冲突的标志。回避模式（≤2 分）说明信任层还有问题。',
    exampleRows: [1, 2],
    rows: [
      ['冲突处理模式', '描述', '我的自评（1-5）'],
      ['竞争（Competing）', '坚持自己的方案，不考虑他人的立场', ''],
      ['合作（Collaborating）', '找到一个满足双方关切的方案', ''],
      ['妥协（Compromising）', '双方各让一步，找到中间方案', ''],
      ['回避（Avoiding）', '不面对冲突，推迟或逃避', ''],
      ['顺应（Accommodating）', '顺从他人的立场，放弃自己的关切', '']
    ]
  },
  {
    id: 'dysfunctions-commitment-card',
    title: '低风险激进决策卡',
    bookId: 'team-dysfunctions',
    category: 'team',
    type: 'framework',
    stage: 'build',
    difficulty: 2,
    duration: '约 15 分钟 / 次',
    desc: 'Lencioni 发现：缺乏投入的根因是「没有经过真正的争论」。而「低风险激进决策法」解决了这个矛盾——先定一个方向，错了再调。',
    useCase: '团队需要做一个重要决策但时间有限时使用。',
    thinking: 'Lencioni 发现：追求 100% 共识的决策过程，往往导致「再研究研究」的拖延。低风险激进决策法允许 70% 的确定性就行动，在行动中收集反馈。',
    notes: '四步：①团队讨论分歧 ②定一个方向 ③每个人说「我对这个决定的承诺是什么」 ④执行中收集反馈，必要时调整。',
    exampleRows: [1, 2],
    rows: [
      ['步骤', '内容', '团队的执行情况'],
      ['1. 讨论分歧', '把所有不同的意见摆出来，不评判', ''],
      ['2. 定方向', '在讨论的基础上，定一个方向', ''],
      ['3. 承诺', '每个人说「我对这个决定的承诺是什么」', ''],
      ['4. 执行与反馈', '在执行中收集反馈，必要时调整', '']
    ]
  },
  {
    id: 'dysfunctions-accountability-sheet',
    title: '同事责任表',
    bookId: 'team-dysfunctions',
    category: 'team',
    type: 'worksheet',
    stage: 'execute',
    difficulty: 3,
    duration: '约 20 分钟 / 次',
    desc: 'Lencioni 发现：逃避责任的根因是「没有明确的承诺」。而「同事责任」——团队成员之间互相明确期望——比上级对下级的问责更有效。',
    useCase: '团队 offsite 第二天，每个人之间互相写「我对你的期望」。',
    thinking: 'Lencioni 发现：同事之间的问责比上下级之间的问责更有效——因为同事之间是平等的，没有人想在 peer 面前失职。',
    notes: '每个人给团队里的另外两个人各写一条「我对你的期望」。写完后互相讨论：这个期望合理吗？我能满足吗？',
    exampleRows: [1, 2],
    rows: [
      ['我对谁的期望', '期望的具体内容', '对方的反馈'],
      ['（写名字）', '（具体到可观察的行为）', '（我能满足 / 我需要支持）'],
      ['（写名字）', '（具体到可观察的行为）', '（我能满足 / 我需要支持）']
    ]
  },
  {
    id: 'dysfunctions-reward-system',
    title: '集体成就奖励制度',
    bookId: 'team-dysfunctions',
    category: 'team',
    type: 'framework',
    stage: 'execute',
    difficulty: 2,
    duration: '约 15 分钟 / 次',
    desc: 'Lencioni 发现：无视结果的根因是「个人荣誉压倒集体目标」。而把奖励从「个人」改成「集体」，是最直接的解法。',
    useCase: '设计团队的激励机制时使用。',
    thinking: 'Lencioni 发现：当团队的奖励是「集体成就」时，成员之间会互相帮助——因为帮助别人就是帮助自己。当奖励是「个人成就」时，成员之间会互相拆台。',
    notes: '不是「取消个人奖励」，是「集体奖励和个人奖励并列，且集体奖励的权重更高」。',
    exampleRows: [1, 2],
    rows: [
      ['奖励类型', '具体做法', '对团队协作的影响'],
      ['集体签单额奖', '团队签单额达到目标，全员分享奖金', '促进合作，老销售愿意带新销售'],
      ['个人签单额奖', '个人签单额达到目标，个人获得奖金', '促进竞争，但也可能导致藏私'],
      ['客户满意度集体奖', '团队客户满意度达到目标，全员分享荣誉', '让每个人关心客户体验，不只是自己的单'],
      ['晋升中的团队贡献', '晋升评估中加入「你对团队的贡献」', '让 top sales 愿意分享经验']
    ]
  },
  {
    id: 'dysfunctions-weekly-health-check',
    title: '每周团队健康检查',
    bookId: 'team-dysfunctions',
    category: 'team',
    type: 'ritual',
    stage: 'maintain',
    difficulty: 1,
    duration: '约 10 分钟 / 周',
    desc: 'Lencioni 发现：团队协作的修复不会自动持续。唯一能对抗衰减的，是把 offsite 上达成的机制固化成日常流程。这个 10 分钟的周会 ritual 就是那个「固化」。',
    useCase: '每周团队例会的第一个固定议题（10 分钟，雷打不动）。',
    thinking: 'Lencioni 发现：团队的问题往往在「没人说」的时候恶化。每周 10 分钟的「健康检查」让问题在变成危机之前就被发现。',
    notes: '三个固定问题：①这周我们在哪个障碍上卡住了？②有没有人因为害怕冲突而没说真话？③下周我们可以做什么来改善？',
    exampleRows: [1, 2],
    rows: [
      ['周次', '我们在哪个障碍上卡住了？', '下周做什么来改善？'],
      ['第 1 周', '', ''],
      ['第 2 周', '', ''],
      ['第 3 周', '', ''],
      ['第 4 周', '', '']
    ]
  },
  {
    id: 'dysfunctions-culture-audit',
    title: '反销售文化自查表',
    bookId: 'team-dysfunctions',
    category: 'team',
    type: 'scorecard',
    stage: 'diagnose',
    difficulty: 3,
    duration: '约 20 分钟 / 次',
    desc: 'Lencioni 在书里提到一个被忽视的问题：很多时候团队协作的障碍不是「人不行」，是「文化在奖励错误的行为」。这张表帮你检查你的团队文化是不是在「反销售」。',
    useCase: '每季度一次，区域总经理自己填，然后和核心团队讨论。',
    thinking: 'Lencioni 发现：当一个组织的文化在奖励「藏私」「甩锅」「报喜不报忧」时，再好的个人也改变不了什么。文化不是「团队的氛围」，是「团队默认的行为方式」。',
    notes: '每个问题 1-5 分。总分 <20 说明文化在促进协作，20-30 说明有改善空间，>30 说明文化本身在制造障碍。',
    exampleRows: [1, 2],
    rows: [
      ['问题', '评分（1-5）', '这季度的具体事例'],
      ['团队里最优秀的销售，是愿意分享经验的人吗？', '', ''],
      ['客户投诉出来后，有人主动认领吗？', '', ''],
      ['总部的政策下来后，团队是全力执行还是敷衍？', '', ''],
      ['团队成员之间是互相帮助还是互相拆台？', '', ''],
      ['「报喜不报忧」是团队的默认行为吗？', '', ''],
      ['奖励制度是在鼓励「我们」还是「我」？', '', '']
    ]
  }
]
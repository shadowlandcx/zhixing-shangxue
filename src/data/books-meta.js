// 元数据数组（不含 content / report）。加一本书只需在此加一个对象，
// 并在 books-content.js / books-report.js 补上对应 id 的内容即可。
// books.js 负责把三者合并导出，视图层无需改动。

export const metaArray = [
  {
    id: 'tech-product-marketing',
    title: '科技产品营销基本法',
    author: '玛蒂娜·劳琴科（Martina Lauchengco）',
    subtitle: '营销·销售管理视角导读',
    category: '营销销售',
    track: 'marketing',
    relatedTracks: ['marketing', 'strategy', 'sales-craft'],
    tags: ['产品营销', 'GTM', '定位', 'Message House', '价值销售', 'SaaS'],
    rating: 5.0,
    cover: '#1A2B45',
    intro: '硅谷产品集团里程碑式著作，首次系统定义"产品营销"职能。从营销战略与销售管理视角拆解四大角色与七大战略工具，教你如何把技术语言翻译为客户价值语言、把内容产出转化为赢单率。',
    meta: {
      publisher: '硅谷产品集团（SVPG）',
      role: '营销 / 销售 / 团队管理者',
      date: '2026年7月'
    },
    stats: [
      { num: '4', label: '核心角色' },
      { num: '7', label: '战略工具' },
      { num: '29', label: '全书章节' },
      { num: 'GTM', label: '协同枢纽' }
    ],
    proposition: '构建产品的认知，与构建产品本身同等重要，有时甚至更重要。没有被讲述的价值，就等于不存在。'
  },
  {
    id: 'chip-history',
    title: '芯片简史',
    author: '汪波',
    subtitle: '营销·销售管理视角导读',
    category: '芯片技术产业史',
    track: 'industry',
    relatedTracks: ['industry', 'strategy', 'marketing'],
    tags: ['芯片', '产业史', '创新', '摩尔定律', '技术趋势', '生态营销'],
    rating: 4.9,
    cover: '#7A2E2E',
    intro: '从晶体管到 AI 芯片，60 年创新史的因果逻辑。以营销战略与长周期关系销售视角，提供一套用"产业叙事"建立专业信任、用生态整合拿下硬科技大单的方法论。',
    meta: {
      publisher: '湛庐文化',
      role: '营销 / 销售 / 团队管理者',
      date: '2026年6月'
    },
    stats: [
      { num: '60年', label: '创新史' },
      { num: '3', label: '范式转移' },
      { num: '1', label: '摩尔定律' }
    ],
    proposition: '创新即叛逆。摩尔定律与其说是物理定律，不如说是整个行业共同相信的"信心定律"。'
  },
  {
    id: 'zero-trust',
    title: '零信任网络',
    author: '埃文·吉尔曼 / 道格·巴斯',
    subtitle: '营销·销售管理视角导读',
    category: '网络安全零信任',
    track: 'industry',
    relatedTracks: ['industry', 'strategy', 'marketing'],
    tags: ['网络安全', '零信任', '等保', '合规营销', 'CISO销售', '价值销售'],
    rating: 4.8,
    cover: '#1F4D3A',
    intro: '从边界安全到身份驱动的安全范式革命。从合规营销与 CISO 决策链销售视角，提供零信任方案销售的完整工具箱：信任模型诊断、阶段化落地、ROI 测算与异议处理。',
    meta: {
      publisher: "O'Reilly / 人民邮电出版社",
      role: '营销 / 销售 / 团队管理者',
      date: '2026年6月'
    },
    stats: [
      { num: '4', label: '信任支柱' },
      { num: '0', label: '隐式信任' },
      { num: '246%', label: '三年ROI' }
    ],
    proposition: '网络安全不再是关于"边界内可信"，而是"永不信任，始终验证"——信任是一个动态计算的结果，不是一个静态的位置属性。'
  },
  {
    id: 'singularity-nearer',
    title: '奇点更近',
    author: '雷·库兹韦尔',
    subtitle: '营销·销售管理视角导读',
    category: 'AI未来技术战略',
    track: 'industry',
    relatedTracks: ['industry', 'strategy', 'marketing'],
    tags: ['AI', '指数思维', '未来', 'AI赋能销售', '价值销售', '技术管理'],
    rating: 4.9,
    cover: '#3A2C5E',
    intro: '从加速回报定律到人机融合奇点。以指数思维营销与 AI 赋能销售组织视角，拆解如何把"未来来得更快"转化为客户紧迫感，并把 AI 变成销售团队的人均产能放大器。',
    meta: {
      publisher: '中信出版集团',
      role: '营销 / 销售 / 团队管理者',
      date: '2026年5月'
    },
    stats: [
      { num: '6', label: '进化纪元' },
      { num: 'GNR', label: '三大技术' },
      { num: '指数', label: '思维内核' }
    ],
    proposition: '技术能力呈指数增长，而人的直觉是线性的——绝大多数战略误判，都源于用线性思维预测指数现实。'
  },
  {
    id: 'industry-research',
    title: '如何快速了解一个行业',
    author: '肖璟',
    subtitle: '营销·销售管理视角导读',
    category: '方法论思维',
    track: 'industry',
    relatedTracks: ['industry', 'strategy', 'marketing'],
    tags: ['行业研究', '麦肯锡', '生命周期营销', '顾问式销售', '售前', '内容营销'],
    rating: 4.8,
    cover: '#B5651D',
    intro: '产业生命周期 + 七大分析维度 + 麦肯锡资讯料理法。以"行业洞察即营销弹药"和"以专业建立销售信任"视角，把研究方法论落成可复用的获客与成交工具箱。',
    meta: {
      publisher: '中信出版集团',
      role: '营销 / 销售 / 团队管理者',
      date: '2026年5月'
    },
    stats: [
      { num: '7', label: '分析维度' },
      { num: '1', label: '生命周期' },
      { num: 'MECE', label: '研究纪律' }
    ],
    proposition: '看懂一个行业，不是记事实，而是掌握一套"抽丝剥茧"的分析框架，并能复用到任何陌生领域。'
  },
  {
    id: 'salesforce-legend',
    title: 'Salesforce传奇',
    author: '马克·贝尼奥夫',
    subtitle: '营销·销售管理视角导读',
    category: 'SaaS商业方法论',
    track: 'account',
    relatedTracks: ['account', 'sales-craft', 'mindset'],
    tags: ['SaaS', '订阅营销', '客户成功', 'NRR', '价值销售', '平台化'],
    rating: 5.0,
    cover: '#0E6BA8',
    intro: '从"No Software"宣言到千亿美元帝国。以订阅制营销与客户成功型销售视角，拆解 ToB SaaS 如何把"卖软件"升级为"卖持续兑现的客户成功"，并用 NRR 重构增长引擎。',
    meta: {
      publisher: '中信出版集团',
      role: '营销 / 销售 / 团队管理者',
      date: '2026年4月'
    },
    stats: [
      { num: 'No', label: 'Software 宣言' },
      { num: '多租户', label: '架构基石' },
      { num: 'NRR', label: '增长引擎' }
    ],
    proposition: 'SaaS 卖的不是软件，而是持续兑现的"客户成功"——收入来自续费，而非一次性 license。'
  },
  {
    id: 'cloud-primer',
    title: '云计算通俗讲义',
    author: '王良明',
    subtitle: '营销·销售管理视角导读',
    category: '云计算入门经典',
    track: 'industry',
    relatedTracks: ['industry', 'strategy', 'marketing'],
    tags: ['云计算', '类比营销', '分层方案', '责任共担', 'OPEX', '售前'],
    rating: 4.8,
    cover: '#2C7A7B',
    intro: '用通俗类比把云计算讲透。以类比营销与分层方案销售视角，提供一套"把技术翻译成客户语言"的方法论：用生活类比破冰、按客户规模匹配 IaaS/PaaS/SaaS、用责任共担降低决策焦虑。',
    meta: {
      publisher: '人民邮电出版社',
      role: '营销 / 销售 / 团队管理者',
      date: '2026年4月'
    },
    stats: [
      { num: '3', label: '服务模型' },
      { num: 'N', label: '经典类比' },
      { num: 'OPEX', label: '财务优势' }
    ],
    proposition: '云计算的本质，是"把复杂留给自己，把简单交给客户"——抽象层不断上移的历史。'
  }
  ,
  {
    id: 'cognitive-awakening',
    title: '认知觉醒',
    author: '周岭',
    subtitle: '管理自我升级视角导读',
    category: '认知与自我管理',
    track: 'mindset',
    relatedTracks: ['mindset', 'leadership', 'sales-craft'],
    tags: ['认知', '元认知', '自我管理', '专注力', '习惯', '复利', '团队觉醒'],
    rating: 4.9,
    cover: '#2E5A7A',
    intro: '一部可穿透时间的个人成长方法论，被读者称为"大脑使用说明书"。以管理者 / 销售 leader 的自我升级视角重读：三重大脑解释拖延天性，元认知给出思维停顿点，舒适区边缘与清晰力落成带团队的具体动作。',
    meta: {
      publisher: '人民邮电出版社',
      role: '管理者 / 销售 leader / 自我成长者',
      date: '2026年7月'
    },
    stats: [
      { num: '3', label: '重大脑' },
      { num: '5', label: '人生五件套' },
      { num: '1', label: '元认知' }
    ],
    proposition: '认知决定选择，选择决定命运。一流的生活不是富有，而是觉知。'
  }
  ,
  {
    id: 'danaher-model',
    title: '丹纳赫模式',
    author: '丹纳赫公开资料 + 管理学界研究综编',
    subtitle: '经营系统视角导读',
    category: '经营系统与持续增长',
    track: 'strategy',
    relatedTracks: ['strategy', 'leadership', 'marketing'],
    tags: ['DBS', '精益', '并购整合', '运营系统', '领导力', '持续增长', '管理操作系统'],
    rating: 4.9,
    cover: '#8C3B3B',
    intro: '40 年 600+ 次并购、市值 2000 亿美元的"并购之王"。核心不是资本，而是一套 DBS 经营操作系统：把经验驱动转为系统驱动，让一群普通人打出一流业绩。从营销 / 销售 / 团队三视角拆成可落地的管理工具箱。',
    meta: {
      publisher: '丹纳赫官网 / 中外管理 / 金科之家 等公开研究',
      role: '管理者 / 业务负责人 / 创业者',
      date: '2026年7月'
    },
    stats: [
      { num: '600+', label: '次并购' },
      { num: 'DBS', label: '经营系统' },
      { num: '4P', label: '管理闭环' }
    ],
    proposition: '我们不是在管理一家公司，而是在培育一种能力。',
    cases: [
      {
        title: '优化一线销售团队客户经营效率',
        scene: '丹纳赫旗下某生命科学子公司，一线销售约 40 人，覆盖数百家医院与科研机构；产品组合宽、客户决策链长。销售各自为政，客户信息散落在个人微信与 Excel，重复拜访与漏跟并存，新人无老人带就开不了单。',
        conflict: '问题不是"不够努力"，而是经营动作没有标准化：① 客户分级靠感觉，高价值客户被平均分配；② 拜访记录不沉淀，丢单后无人复盘；③ 周会只报数字、不暴露卡点；④ 新人成长慢，3 个月开不了单就流失。',
        action: '用 DBS 把客户经营流程化：客户价值定义（CVD）按"战略价值 × 合作深度"矩阵把客户分 A/B/C 级，A 类由资深销售 + 应用专家双人护航、资源倾斜；导入"客户经营看板"（线索→商机→验证→复购四阶段），每次拜访后 5 分钟录入关键动作与下一步，沉淀为组织资产；晨会 15 分钟只暴露卡点、周五用 A3 复盘一张败因卡，下周一即改；新人前 100 天按"跟访→首通→方案→小单"四里程碑推进，主管用元认知克制"自己上手"；北极星指标从单纯新签改为"客户复购率 + 单客户产出"。',
        outcome: '6 个月内 A 类客户覆盖完整度从 62% 升到 94%，单客户年均产出 +27%，新人 90 天开单率从 35% 提到 78%；周会从"报喜"变"报忧即解决"，销售管理者从救火转为教练。'
      }
    ]
  },
  {
    "id": "rc01",
    "title": "挑战式销售：引爆第四次销售革命",
    "author": "马修·狄克逊 / 布伦特·亚当森",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#1A2B45",
    "intro": "提出\"教导—定制—掌控\"的挑战式销售法，用洞察重构客户认知。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc02",
    "title": "硅谷蓝图",
    "author": "雅各·范德库伊 / 费尔南多·皮萨罗",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "选读",
      "销售"
    ],
    "cover": "#7A2E2E",
    "intro": "系统拆解 SaaS 销售体系搭建路径，从客户细分到流程标准化。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc03",
    "title": "绝不推销",
    "author": "[美]汤姆·麦克马金 / 雅各布·帕克斯 著 / 欧阳小珍等 译",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "选读",
      "销售"
    ],
    "cover": "#1F4D3A",
    "intro": "主张以吸引与信任替代硬推销，用内容与口碑自然获客。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc04",
    "title": "桑德拉销售原则",
    "author": "大卫·桑德拉 等",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#3A2C5E",
    "intro": "相信销售技能培养和行为模式的改变不是靠一两次的“短期刺激”形成的，而是通过“态度-行…",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": "相信销售技能培养和行为模式的改变不是靠一两次的“短期刺激”形成的，而是通过“态度-行为-技巧”（成功金三角）均衡发展，依靠不断的强化训练和持续改进而形成的。本书提炼49条，令人难忘的原则，这些原则坦率、有趣，而且容易使用。",
    "rating": 8.4
  },
  {
    "id": "rc05",
    "title": "销售组织的数字化转型宝典",
    "author": "代爱军",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#B5651D",
    "intro": "传统销售组织存在客户拓展困难（新客户拓展乏力，老客户无人看护），只看生意，看不清抓不…",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": "传统销售组织存在客户拓展困难（新客户拓展乏力，老客户无人看护），只看生意，看不清抓不住客户，销售过程看不清楚（一线销售和管理者每天都很忙，但不知道在忙啥，销售每天都在见客户，但不知道见了谁，效果怎么样，管理者经常开会，但流于形式，问题得不到解决，管理者只看结果不关注过程，管理者凭直觉做事，管理方式高度个性化）。"
  },
  {
    "id": "rc06",
    "title": "销售管理",
    "author": "[美]博恩·崔西 著 / 赵倩 译",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#0E6BA8",
    "intro": "清楚销售主管角色，提高销售工作效率。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": "清楚销售主管角色，提高销售工作效率。"
  },
  {
    "id": "rc07",
    "title": "价值竞争",
    "author": "付遥",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#2C7A7B",
    "intro": "这本书提出了价值竞争——以客户为中心的销售方法论，并分别针对客户管理和孵化、建立信任…",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": "这本书提出了价值竞争——以客户为中心的销售方法论，并分别针对客户管理和孵化、建立信任、激发需求、促成立项、建立购买标准、屏蔽对手、成交、管理期望、收款、销售指挥体系、赋能等12个方面提出了一揽子的解决方案。"
  },
  {
    "id": "rc08",
    "title": "销售加速公式：如何实现从0到1亿美元的火箭式增长",
    "author": "[美]马克·罗伯格 著 / 高成资本 译",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#8C3B3B",
    "intro": "给出从 0 到 1 亿美元营收可复制的增长公式与组织打法。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc09",
    "title": "客户关系管理：战略框架",
    "author": "[美]邓·皮泊斯 / 马沙·容格斯 著 / 郑志凌等 译",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "account",
    "relatedTracks": [
      "account",
      "sales-craft",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#2E5A7A",
    "intro": "提供 CRM 战略框架，把客户经营从工具层面拉回战略层面。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc10",
    "title": "B2B销售原理与实践",
    "author": "张烈生",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#5A3E2B",
    "intro": "系统讲透 B2B 销售底层原理与一线实操方法。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc11",
    "title": "带出销售冠军",
    "author": "[美]基思·罗森 著 / 张瀚文 译",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#4A235A",
    "intro": "聚焦销售管理者如何选拔、培养并带出冠军团队。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc12",
    "title": "用管理驱动销售",
    "author": "孙宏伟",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#1E5631",
    "intro": "强调以目标/过程/激励体系而非个人英雄驱动业绩。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc13",
    "title": "新销售手册：数字化时代的销售革命",
    "author": "迈克·温伯格（Mike Weinberg）",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#6B2737",
    "intro": "阐述数字化时代销售逻辑与打法的系统性重构。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc14",
    "title": "数字化销售：数字时代的销售艺术",
    "author": "贾斯汀·迈克尔（Justin Michael）、托尼·J·休斯（Tony J. Hughes）",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#274472",
    "intro": "讲解数据与技术驱动下的数字销售艺术与实务。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc15",
    "title": "销售与销售管理",
    "author": "Jobber & Lancaster《Selling and Sales Management》第10版 / 李先国 译",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#3B5E2B",
    "intro": "覆盖销售个人技法到团队管理的完整知识地图。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc16",
    "title": "大客户管理流程与实务",
    "author": "沈阿强 / 陈洁 / 秦娟",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "account",
    "relatedTracks": [
      "account",
      "sales-craft",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#7A4B00",
    "intro": "拆解大客户（KA）管理标准流程与关键动作。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc17",
    "title": "销售人力资源管理-如何选育用留销售人才",
    "author": "[美]赫伯·戈瑞伯格 等 著 / 曹淮扬等 译",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "leadership",
    "relatedTracks": [
      "leadership",
      "strategy",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#2B4C5E",
    "intro": "专讲销售团队\"选、育、用、留\"的人才管理实务。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc18",
    "title": "信任五环",
    "author": "夏凯",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#5C2B4D",
    "intro": "以\"拜访是一门技术\"为主线，拆解建立客户信任的五环方法。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc19",
    "title": "值得信赖的顾问",
    "author": "戴维·梅斯特 / 查尔斯·格林 / 罗伯特·加夫",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#3E4A2B",
    "intro": "讲专业顾问如何以可信赖姿态赢得客户长期信赖。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc20",
    "title": "SPIN销售巨人",
    "author": "尼尔·雷克汉姆",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#4B2E0E",
    "intro": "经典大客户方法论，用四类提问引导客户认知痛点。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc21",
    "title": "99%的销售指标都用错了",
    "author": "[美]杰森·乔丹 / 米歇尔·法森那 著 / 毛雪梅 译",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "sales-craft",
    "relatedTracks": [
      "sales-craft",
      "account",
      "mindset"
    ],
    "tags": [
      "销售",
      "必读",
      "销售"
    ],
    "cover": "#1A2B45",
    "intro": "直指销售考核指标常见误区，给出科学指标设计方法。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc22",
    "title": "客户天才：如何成为高增长的客户型企业",
    "author": "[英]彼得·菲斯克 著 / 杨瑛 译",
    "subtitle": "销售实战荐读",
    "category": "销售",
    "track": "account",
    "relatedTracks": [
      "account",
      "sales-craft",
      "mindset"
    ],
    "tags": [
      "销售",
      "选读",
      "销售"
    ],
    "cover": "#7A2E2E",
    "intro": "通过剖析50家世界顶级客户型企业案例，从客户愿景、战略等10个维度，为企业提供了从客…",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "销售 / 销售管理者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "销售",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": "通过剖析 50 家世界顶级客户型企业案例，从客户愿景、战略等 10 个维度，为企业提供了从客户视角出发实现高增长的理论与实践指导的市场营销及客户管理领域的书籍。"
  },
  {
    "id": "rc23",
    "title": "营销革命5.0",
    "author": "菲利普·科特勒 等",
    "subtitle": "营销战略荐读",
    "category": "营销",
    "track": "marketing",
    "relatedTracks": [
      "marketing",
      "strategy",
      "sales-craft"
    ],
    "tags": [
      "营销",
      "必读",
      "营销"
    ],
    "cover": "#1F4D3A",
    "intro": "数智化重新定义了顾客和企业的连接方式，以及企业为顾客创造价值的模式和空间，它成为战略…",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "营销 / 市场",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "营销",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": "数智化重新定义了顾客和企业的连接方式，以及企业为顾客创造价值的模式和空间，它成为战略优势的新来源。"
  },
  {
    "id": "rc24",
    "title": "营销渠道-管理的视野",
    "author": "[美]伯特·罗森布洛姆 著 / 宋华等 译",
    "subtitle": "营销战略荐读",
    "category": "营销",
    "track": "marketing",
    "relatedTracks": [
      "marketing",
      "strategy",
      "sales-craft"
    ],
    "tags": [
      "营销",
      "选读",
      "营销"
    ],
    "cover": "#3A2C5E",
    "intro": "聚焦渠道战略设计与实战应用，《营销渠道-管理的视野》以体系化方法论+行业案例解析，可…",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "营销 / 市场",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "营销",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": "聚焦渠道战略设计与实战应用，《营销渠道-管理的视野》以体系化方法论+行业案例解析，可以助力团队共学共进，掌握渠道动态管理核心逻辑",
    "rating": 8.5
  },
  {
    "id": "rc25",
    "title": "场景革命",
    "author": "吴声",
    "subtitle": "营销战略荐读",
    "category": "营销",
    "track": "marketing",
    "relatedTracks": [
      "marketing",
      "strategy",
      "sales-craft"
    ],
    "tags": [
      "营销",
      "选读",
      "营销"
    ],
    "cover": "#B5651D",
    "intro": "提出\"产品解决功能、场景解决意义\"的新营销逻辑。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "营销 / 市场",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "营销",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc26",
    "title": "科学营销",
    "author": "郑毓煌",
    "subtitle": "营销战略荐读",
    "category": "营销",
    "track": "marketing",
    "relatedTracks": [
      "marketing",
      "strategy",
      "sales-craft"
    ],
    "tags": [
      "营销",
      "选读",
      "营销"
    ],
    "cover": "#0E6BA8",
    "intro": "这本书较为基础，但对营销本质进行了深刻的讲述，给我印象比较深的是对之前我们接触的较多…",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "营销 / 市场",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "营销",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": "这本书较为基础，但对营销本质进行了深刻的讲述，给我印象比较深的是对之前我们接触的较多商业分析模型的使用进行了深入浅出的讲解，比如宏观环境分析PEST模型、行业进入分析BCG矩阵、行业现状分析波特五力模型和4C模型，然后附以大量案例进行细致说明，值得我们在市场营销中加以运用。"
  },
  {
    "id": "rc27",
    "title": "真体验",
    "author": "[美]乔恩·皮科特 著 / 马俊斌 译",
    "subtitle": "营销战略荐读",
    "category": "营销",
    "track": "marketing",
    "relatedTracks": [
      "marketing",
      "strategy",
      "sales-craft"
    ],
    "tags": [
      "营销",
      "选读",
      "营销"
    ],
    "cover": "#2C7A7B",
    "intro": "讲体验经济下如何用真实体验撬动用户增长与口碑。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "营销 / 市场",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "营销",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc28",
    "title": "SIVA范式-搜索引擎触发的营销革命",
    "author": "罗伯特·劳特朋 等",
    "subtitle": "营销战略荐读",
    "category": "营销",
    "track": "marketing",
    "relatedTracks": [
      "marketing",
      "strategy",
      "sales-craft"
    ],
    "tags": [
      "营销",
      "必读",
      "营销"
    ],
    "cover": "#8C3B3B",
    "intro": "以 SIVA 替代 4P，重构搜索时代的营销沟通范式。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "营销 / 市场",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "营销",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc29",
    "title": "不失礼！送礼的艺术",
    "author": "代莹莹",
    "subtitle": "个人成长荐读",
    "category": "个人成长",
    "track": "mindset",
    "relatedTracks": [
      "mindset",
      "leadership",
      "sales-craft"
    ],
    "tags": [
      "个人成长",
      "选读",
      "个人成长"
    ],
    "cover": "#2E5A7A",
    "intro": "讲透商务与生活场景下的送礼礼仪与分寸感。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "个人成长",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc30",
    "title": "思考，快与慢",
    "author": "丹尼尔·卡尼曼",
    "subtitle": "个人成长荐读",
    "category": "个人成长",
    "track": "mindset",
    "relatedTracks": [
      "mindset",
      "leadership",
      "sales-craft"
    ],
    "tags": [
      "个人成长",
      "选读",
      "个人成长"
    ],
    "cover": "#5A3E2B",
    "intro": "卡尼曼揭示直觉与理性两套思维系统及决策偏差。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "个人成长",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc31",
    "title": "纳瓦尔宝典",
    "author": "埃里克·乔根森 编 / 纳瓦尔·拉维坎特",
    "subtitle": "个人成长荐读",
    "category": "个人成长",
    "track": "mindset",
    "relatedTracks": [
      "mindset",
      "leadership",
      "sales-craft"
    ],
    "tags": [
      "个人成长",
      "选读",
      "个人成长"
    ],
    "cover": "#4A235A",
    "intro": "汇总财富与幸福的可复制原则（杠杆/专长/复利）。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "个人成长",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc32",
    "title": "学会提问",
    "author": "尼尔·布朗 / 斯图尔特·基利",
    "subtitle": "个人成长荐读",
    "category": "个人成长",
    "track": "mindset",
    "relatedTracks": [
      "mindset",
      "leadership",
      "sales-craft"
    ],
    "tags": [
      "个人成长",
      "必读",
      "个人成长"
    ],
    "cover": "#1E5631",
    "intro": "训练批判性思维与精准提问，避免被带节奏。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "个人成长",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc33",
    "title": "从内耗到心流",
    "author": "杨鸣",
    "subtitle": "个人成长荐读",
    "category": "个人成长",
    "track": "mindset",
    "relatedTracks": [
      "mindset",
      "leadership",
      "sales-craft"
    ],
    "tags": [
      "个人成长",
      "选读",
      "个人成长"
    ],
    "cover": "#6B2737",
    "intro": "拆解精神内耗成因，给出进入专注心流的方法。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "个人成长",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc34",
    "title": "原子习惯",
    "author": "詹姆斯·克利尔",
    "subtitle": "个人成长荐读",
    "category": "个人成长",
    "track": "mindset",
    "relatedTracks": [
      "mindset",
      "leadership",
      "sales-craft"
    ],
    "tags": [
      "个人成长",
      "必读",
      "个人成长"
    ],
    "cover": "#274472",
    "intro": "用\"微小习惯×系统\"实现持续自我提升的四步法。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "个人成长",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc35",
    "title": "能力陷阱",
    "author": "埃米尼亚·伊巴拉",
    "subtitle": "个人成长荐读",
    "category": "个人成长",
    "track": "mindset",
    "relatedTracks": [
      "mindset",
      "leadership",
      "sales-craft"
    ],
    "tags": [
      "个人成长",
      "必读",
      "个人成长"
    ],
    "cover": "#3B5E2B",
    "intro": "指出\"做得越好越被困原角色\"，教你先行动再突破。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "个人成长",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc36",
    "title": "影响力",
    "author": "罗伯特·西奥迪尼",
    "subtitle": "个人成长荐读",
    "category": "个人成长",
    "track": "mindset",
    "relatedTracks": [
      "mindset",
      "leadership",
      "sales-craft"
    ],
    "tags": [
      "个人成长",
      "必读",
      "个人成长"
    ],
    "cover": "#7A4B00",
    "intro": "西奥迪尼揭秘说服与影响力的六大心理学原则。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "个人成长",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc37",
    "title": "策略思维-商界、政界及日常生活中的策略竞争",
    "author": "阿维纳什·迪克西特 / 巴里·奈尔伯夫",
    "subtitle": "个人成长荐读",
    "category": "个人成长",
    "track": "mindset",
    "relatedTracks": [
      "mindset",
      "leadership",
      "sales-craft"
    ],
    "tags": [
      "个人成长",
      "必读",
      "个人成长"
    ],
    "cover": "#2B4C5E",
    "intro": "用博弈论讲清商界与日常中的策略竞争与决策。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "个人成长",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc38",
    "title": "同理心，做个让人舒服的共情高手",
    "author": "[美]辛迪·戴尔 著 / 镜如 译",
    "subtitle": "个人成长荐读",
    "category": "个人成长",
    "track": "account",
    "relatedTracks": [
      "account",
      "sales-craft",
      "mindset"
    ],
    "tags": [
      "个人成长",
      "必读",
      "个人成长"
    ],
    "cover": "#5C2B4D",
    "intro": "训练共情能力，成为让人舒服的沟通者。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "个人成长",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc39",
    "title": "不抱怨的世界",
    "author": "威尔·鲍温",
    "subtitle": "个人成长荐读",
    "category": "个人成长",
    "track": "mindset",
    "relatedTracks": [
      "mindset",
      "leadership",
      "sales-craft"
    ],
    "tags": [
      "个人成长",
      "必读",
      "个人成长"
    ],
    "cover": "#3E4A2B",
    "intro": "用\"21天不抱怨\"实践，培养积极心智习惯。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "个人成长",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc40",
    "title": "做难而正确的事",
    "author": "[以]尤里·莱文 著 / 桂曙光等 译",
    "subtitle": "经营管理荐读",
    "category": "管理·经营",
    "track": "leadership",
    "relatedTracks": [
      "leadership",
      "strategy",
      "mindset"
    ],
    "tags": [
      "经营管理",
      "必读",
      "管理·经营"
    ],
    "cover": "#4B2E0E",
    "intro": "生意的本质是通过解决别人的问题获利，要么找到市场产品契合点，要么死掉，越是活的艰难，…",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "管理·经营",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": "生意的本质是通过解决别人的问题获利，要么找到市场产品契合点，要么死掉，越是活的艰难，越要始终坚持。",
    "rating": 8.4
  },
  {
    "id": "rc41",
    "title": "流程即组织力",
    "author": "杨勇",
    "subtitle": "经营管理荐读",
    "category": "管理·经营",
    "track": "leadership",
    "relatedTracks": [
      "leadership",
      "strategy",
      "mindset"
    ],
    "tags": [
      "经营管理",
      "选读",
      "管理·经营"
    ],
    "cover": "#1A2B45",
    "intro": "本书，是用50多个案例来阐述流程建设的九大要素，八大误区，是一本流程建设的工具书。涉…",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "管理·经营",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": "本书，是用50多个案例来阐述流程建设的九大要素，八大误区，是一本流程建设的工具书。涉及流程定位，流程规划，流程建恶化，流程推行，流程运营和流程优化的具体案例和方法。主要观点是，流程是产品和服务所走过的路径的显化，也是价值创造诸要素在业务活动中所贡献的价值在特定规则下有秩序的流动。",
    "rating": 7.7
  },
  {
    "id": "rc42",
    "title": "腾讯增效密码",
    "author": "况阳",
    "subtitle": "经营管理荐读",
    "category": "管理·经营",
    "track": "leadership",
    "relatedTracks": [
      "leadership",
      "strategy",
      "mindset"
    ],
    "tags": [
      "经营管理",
      "选读",
      "管理·经营"
    ],
    "cover": "#7A2E2E",
    "intro": "拆解腾讯在组织效率与成本管理上的实践方法论。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "管理·经营",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc43",
    "title": "华为变革法",
    "author": "毛万金",
    "subtitle": "经营管理荐读",
    "category": "管理·经营",
    "track": "leadership",
    "relatedTracks": [
      "leadership",
      "strategy",
      "mindset"
    ],
    "tags": [
      "经营管理",
      "选读",
      "管理·经营"
    ],
    "cover": "#1F4D3A",
    "intro": "华为变革项目管理办公室主任毛万金写的。管理进步的根本是持续有效的变革。结合变革之心的…",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "管理·经营",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": "华为变革项目管理办公室主任毛万金写的。管理进步的根本是持续有效的变革。结合变革之心的八步法，提出“你是火炬手·变革领导力”模型。",
    "rating": 7.8
  },
  {
    "id": "rc44",
    "title": "高分经理人：如何成为专业的管理者",
    "author": "张烈生",
    "subtitle": "经营管理荐读",
    "category": "管理·经营",
    "track": "leadership",
    "relatedTracks": [
      "leadership",
      "strategy",
      "mindset"
    ],
    "tags": [
      "经营管理",
      "必读",
      "管理·经营"
    ],
    "cover": "#3A2C5E",
    "intro": "系统讲管理者从骨干到 leader 的专业化角色与方法。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "管理·经营",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc45",
    "title": "苦难英雄任正非",
    "author": "王育琨",
    "subtitle": "经营管理荐读",
    "category": "管理·经营",
    "track": "leadership",
    "relatedTracks": [
      "leadership",
      "strategy",
      "mindset"
    ],
    "tags": [
      "经营管理",
      "选读",
      "管理·经营"
    ],
    "cover": "#B5651D",
    "intro": "也算是任正非的传记，可以看华为发展的脉络和企业经营哲学，从中获取自己所需的观点",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "管理·经营",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": "也算是任正非的传记，可以看华为发展的脉络和企业经营哲学，从中获取自己所需的观点",
    "rating": 8.6
  },
  {
    "id": "rc46",
    "title": "高效能招聘",
    "author": "戴维・E. 佩里（David E. Perry）、马克・J. 哈鲁斯卡（Mark J. Haluska）",
    "subtitle": "经营管理荐读",
    "category": "管理·经营",
    "track": "leadership",
    "relatedTracks": [
      "leadership",
      "strategy",
      "mindset"
    ],
    "tags": [
      "经营管理",
      "选读",
      "管理·经营"
    ],
    "cover": "#0E6BA8",
    "intro": "讲科学招聘与人才甄选，降低错配、提升组织效能。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "管理·经营",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc47",
    "title": "赢利",
    "author": "李践",
    "subtitle": "经营管理荐读",
    "category": "管理·经营",
    "track": "strategy",
    "relatedTracks": [
      "strategy",
      "leadership",
      "marketing"
    ],
    "tags": [
      "经营管理",
      "选读",
      "管理·经营"
    ],
    "cover": "#2C7A7B",
    "intro": "系统讲企业盈利的底层逻辑与经营抓手。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "管理·经营",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc48",
    "title": "思科实访录(从创新到运营)",
    "author": "董小英 / 周佳利 / 余艳",
    "subtitle": "经营管理荐读",
    "category": "管理·经营",
    "track": "strategy",
    "relatedTracks": [
      "strategy",
      "leadership",
      "marketing"
    ],
    "tags": [
      "经营管理",
      "选读",
      "管理·经营"
    ],
    "cover": "#8C3B3B",
    "intro": "思科的创新是活跃的——行业内的每一次变革它好像都能提前洞悉。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "管理·经营",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": "思科的创新是活跃的——行业内的每一次变革它好像都能提前洞悉。"
  },
  {
    "id": "rc49",
    "title": "价值驱动增长",
    "author": "陶鑫亚 / 高燕",
    "subtitle": "经营管理荐读",
    "category": "管理·经营",
    "track": "marketing",
    "relatedTracks": [
      "marketing",
      "strategy",
      "sales-craft"
    ],
    "tags": [
      "经营管理",
      "必读",
      "管理·经营"
    ],
    "cover": "#2E5A7A",
    "intro": "讲以客户价值为核心的可持续增长路径。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "管理·经营",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc50",
    "title": "战略7力",
    "author": "汉密尔顿·赫尔默",
    "subtitle": "经营管理荐读",
    "category": "管理·经营",
    "track": "strategy",
    "relatedTracks": [
      "strategy",
      "leadership",
      "marketing"
    ],
    "tags": [
      "经营管理",
      "选读",
      "管理·经营"
    ],
    "cover": "#5A3E2B",
    "intro": "提炼支撑长期优势的七种\"力量\"（护城河）战略框架。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "管理·经营",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc51",
    "title": "第五项修炼-学习型组织的艺术与实践",
    "author": "彼得·圣吉",
    "subtitle": "经营管理荐读",
    "category": "管理·经营",
    "track": "leadership",
    "relatedTracks": [
      "leadership",
      "strategy",
      "mindset"
    ],
    "tags": [
      "经营管理",
      "选读",
      "管理·经营"
    ],
    "cover": "#4A235A",
    "intro": "是一本兼具理论深度和实践价值的经典管理书籍。它不仅能够帮助管理者提升个人能力，还能够…",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "管理·经营",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": "是一本兼具理论深度和实践价值的经典管理书籍。它不仅能够帮助管理者提升个人能力，还能够推动整个组织实现持续改进和卓越发展。无论是企业高管、中层管理者，还是希望提升领导力的职场人士，这本书都值得一读。通过学习和实践书中的理念，企业能够在复杂多变的商业环境中保持竞争力，实现长期成功。"
  },
  {
    "id": "rc52",
    "title": "不战而胜：新商业模式下的竞争战略",
    "author": "[日]山田英夫 著 / 范婷婷 译",
    "subtitle": "经营管理荐读",
    "category": "管理·经营",
    "track": "strategy",
    "relatedTracks": [
      "strategy",
      "leadership",
      "marketing"
    ],
    "tags": [
      "经营管理",
      "选读",
      "管理·经营"
    ],
    "cover": "#1E5631",
    "intro": "讲新商业模式下\"不战而屈人之兵\"的竞争战略。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "管理·经营",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc53",
    "title": "专业团队的管理",
    "author": "[美]帕特里克·兰西奥尼 著 / 林屾 译",
    "subtitle": "经营管理荐读",
    "category": "管理·经营",
    "track": "leadership",
    "relatedTracks": [
      "leadership",
      "strategy",
      "mindset"
    ],
    "tags": [
      "经营管理",
      "选读",
      "管理·经营"
    ],
    "cover": "#6B2737",
    "intro": "讲如何管理知识型/专业型团队并激发其效能。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "管理·经营",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc54",
    "title": "Google 未来之镜",
    "author": "托马斯·舒尔茨",
    "subtitle": "经营管理荐读",
    "category": "管理·经营",
    "track": "strategy",
    "relatedTracks": [
      "strategy",
      "leadership",
      "marketing"
    ],
    "tags": [
      "经营管理",
      "选读",
      "管理·经营"
    ],
    "cover": "#274472",
    "intro": "透视 Google 对未来技术与社会的前沿判断。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "管理·经营",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc55",
    "title": "为什么10倍增长比2倍增长更容易",
    "author": "[美]丹·沙利文 / 本杰明·哈迪 著 / 白瑞霞 译",
    "subtitle": "经营管理荐读",
    "category": "管理·经营",
    "track": "strategy",
    "relatedTracks": [
      "strategy",
      "leadership",
      "marketing"
    ],
    "tags": [
      "经营管理",
      "选读",
      "管理·经营"
    ],
    "cover": "#3B5E2B",
    "intro": "用 10x 思维突破线性增长，重构目标与打法。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "选读",
        "label": "优先级"
      },
      {
        "num": "管理·经营",
        "label": "主题"
      }
    ],
    "priority": "选读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },
  {
    "id": "rc56",
    "title": "向管理要绩效",
    "author": "赵国军",
    "subtitle": "经营管理荐读",
    "category": "管理·经营",
    "track": "leadership",
    "relatedTracks": [
      "leadership",
      "strategy",
      "mindset"
    ],
    "tags": [
      "经营管理",
      "必读",
      "管理·经营"
    ],
    "cover": "#7A4B00",
    "intro": "讲以管理体系驱动组织绩效提升的实务方法。",
    "meta": {
      "publisher": "锐捷读书会推荐",
      "role": "管理者 / 自我成长者",
      "date": "2026年7月"
    },
    "stats": [
      {
        "num": "必读",
        "label": "优先级"
      },
      {
        "num": "管理·经营",
        "label": "主题"
      }
    ],
    "priority": "必读",
    "feishuUrl": "https://ruijie.feishu.cn/wiki/NXugwoogti82gtkFNzTcGCgcn9f",
    "reason": ""
  },

  // —— 阿吉里斯《Theory in Practice》原典 + 两中文译本（同一著作 series: 'tip'）——
  {
    id: 'tip',
    title: 'Theory in Practice：提高专业效能',
    author: '克里斯·阿吉里斯（Chris Argyris）/ 唐纳德·舍恩（Donald A. Schön）',
    subtitle: '组织学习·行动科学视角导读',
    category: '组织学习',
    track: 'leadership',
    relatedTracks: ['leadership', 'strategy', 'mindset'],
    series: 'tip',
    tags: ['宣称理论', '使用理论', '双环学习', 'Model I/II', '行动科学', '组织学习', '知行合一'],
    rating: 5.0,
    cover: '#2A3B5C',
    intro: '行动科学奠基之作。首次明确区分「宣称理论（espoused theory，你说的）」与「使用理论（theory-in-use，你实际做的）」，并提出 Model I / Model II 与双环学习。它是「知易行难」这一现象的底层解释，也是知行商学「知→行」命名的思想源头。',
    meta: {
      publisher: 'Jossey-Bass（1974 初版）',
      role: '团队管理者 / 高潜人才 / HRD / OD',
      date: '2026年7月'
    },
    stats: [
      { num: '1974', label: '初版年份' },
      { num: '2', label: '核心概念' },
      { num: '3', label: '部分 理论/行动/实践' },
      { num: 'Model I/II', label: '双环学习' }
    ],
    proposition: '真正的学习，是让使用理论（theory-in-use）发生改变——而不只是把宣称理论（espoused theory）说得更漂亮。'
  },
  {
    id: 'tip-cn08',
    title: '实践理论：提高专业效能',
    author: '克里斯·阿吉里斯 / 唐纳德·A.舍恩',
    subtitle: '2008 中文译本 · 译本导读',
    category: '组织学习',
    track: 'leadership',
    relatedTracks: ['leadership', 'strategy', 'mindset'],
    series: 'tip',
    editionOf: 'tip',
    tags: ['宣称理论', '使用理论', '行动科学经典译丛', '译本', '专业效能'],
    rating: 4.9,
    cover: '#5C2A3B',
    intro: '《Theory in Practice》首个简体中文译本（邢清清、赵宁宁 译，教育科学出版社，收入「行动科学经典译丛」）。术语多作「信奉理论 / 使用理论」，是学术与教育学院系统最常被引用的版本。',
    meta: {
      publisher: '教育科学出版社（2008）· ISBN 978-7-5041-3803-3',
      role: '研究者 / 教育工作者 / 管理者',
      date: '2026年7月'
    },
    stats: [
      { num: '2008', label: '中译初版' },
      { num: '教育科学', label: '出版社' },
      { num: '行动科学', label: '译丛' }
    ],
    proposition: '同一本阿吉里斯，为什么有两个中文书名？这本 2008 译本把它译作「实践理论」，是「行动科学经典译丛」的开路之作。'
  },
  {
    id: 'tip-cn24',
    title: '学习型组织的实践理论',
    author: '克里斯·阿吉里斯 / 唐纳德·舍恩',
    subtitle: '2024 中文新译 · 译本导读',
    category: '组织学习',
    track: 'leadership',
    relatedTracks: ['leadership', 'strategy', 'mindset'],
    series: 'tip',
    editionOf: 'tip',
    tags: ['宣称理论', '使用理论', '学习型组织', '译本', '双环学习'],
    rating: 4.8,
    cover: '#2A5C47',
    intro: '《Theory in Practice》2024 年新版简体译本（包云波 译，九州出版社）。书名改为更贴近「学习型组织」语境的《学习型组织的实践理论》，术语译法也更靠近圣吉一脉，适合企业读者。',
    meta: {
      publisher: '九州出版社（2024）· ISBN 978-7-5225-2432-0',
      role: '企业管理者 / OD / 团队领导者',
      date: '2026年7月'
    },
    stats: [
      { num: '2024', label: '新版中译' },
      { num: '九州', label: '出版社' },
      { num: '包云波', label: '译者' }
    ],
    proposition: '2024 新版换了个更贴近「学习型组织」的名字，术语也更靠近圣吉一脉——同一著作，两种中文读法。'
  },

  {
    id: 'key-account-management',
    title: '关键客户管理：大客户营销圣经',
    author: '诺埃尔·凯普（Noel Capon）/ 郑毓煌 / 张坚 著，郭武文 译',
    subtitle: '营销·销售管理视角导读',
    category: '大客户销售 · 关键客户管理',
    track: 'account',
    relatedTracks: ['account', 'sales-craft', 'mindset'],
    tags: ['关键客户', '大客户', 'KAM', '相合性模型', '关键客户经理', '客户组合', '价值销售'],
    rating: 4.9,
    cover: '#2E4A7A',
    intro: '哥伦比亚大学商学院诺埃尔·凯普（被誉为「关键客户之父」）的权威手册。以「关键客户管理相合性模型」为核心，系统回答：如何选关键客户、怎么搭组织与角色、关键客户经理要什么能力、怎么做方案规划与关系经营。80% 收入来自 20% 客户的现实下，这是大客户管理的底层操作系统。',
    meta: {
      publisher: '机械工业出版社（2021）· ISBN 9787111671022',
      role: '大客户销售 / 销售管理者 / 营销负责人',
      date: '2026年7月'
    },
    stats: [
      { num: '4', label: '相合性要素' },
      { num: '10', label: '全书章节' },
      { num: '80/20', label: '客户收入定律' }
    ],
    proposition: '关键客户管理不是「多派几个销售去盯大客户」，而是一套把战略、组织、人和流程咬合起来的「相合性」系统——哪一块松了，大客户都留不住。'
  },
  {
    id: 'strategic-selling',
    title: '战略销售：大客户复杂销售的方法论',
    author: '史蒂夫·赫曼（Stephen E. Heiman）/ 黛安·桑切兹（Diane Sanchez）/ 泰德·图勒（Tad Tuleja） 著',
    subtitle: '复杂大单控单方法论导读',
    category: '大客户销售 · 复杂机会管控',
    track: 'sales-craft',
    relatedTracks: ['sales-craft', 'account', 'mindset'],
    tags: ['战略销售', '蓝表', '绿表', '四种买家角色', '经济买家', '教练', '复杂销售', '米勒黑曼'],
    rating: 4.8,
    cover: '#1F6F54',
    intro: '米勒·黑曼奠基之作。针对「大单总在最后一刻失控」：复杂销售里同时有经济 / 用户 / 技术 / 教练四种买家、多条决策链，靠感觉 cover 一定会漏人。本书给出蓝表（机会评估）与绿表（覆盖规划）两张标准表单，让复杂机会从凭手感变成按图施工。是政企大客户销售补齐「价值（rc07）/ 关系（rc20 KAM）」之外「过程管控」空白的必装操作系统。',
    meta: {
      publisher: '企业管理出版社（中文版）· 原著名 Strategic Selling',
      role: '大客户销售 / 销售管理者 / 政企大单操盘人',
      date: '2026年8月'
    },
    stats: [
      { num: '4', label: '种买家角色' },
      { num: '2', label: '张核心表单（蓝/绿）' },
      { num: '4', label: '类响应模式' }
    ],
    proposition: '复杂销售赢不赢，取决于你把结构盲区填满没有——角色漏一个、位置错一档，单子就悬。蓝表绿表不是表格，是让赢单脱离个人天赋、变成组织能力的纪律。'
  }

  , {
    id: 'power-negotiation',
    title: '优势谈判：罗杰·道森的经典谈判术',
    author: '罗杰·道森（Roger Dawson） 著',
    subtitle: '开局 · 中局 · 终局战术导读',
    category: '谈判 · 价格与条款',
    track: 'account',
    relatedTracks: ['account', 'sales-craft', 'mindset'],
    tags: ['优势谈判', '开局策略', '钳子策略', '谈判让步', '道森', '价格谈判', '条款博弈', '定价书组'],
    rating: 4.6,
    cover: '#B5462E',
    intro: '罗杰·道森把"谈判"从天赋拆成可练习的战术库。核心主张：绝不和对方的第一次开价说 yes、永远让对方先亮底、用"钳子"（"你还得更好些"）锁住让步节奏、用"更高权威"给自己留缓冲、终局再"咬一口"（nibble）多要一点。政企大单常卡在价格与条款，这本书补的是"价值讲完了、怎么把价谈回来"的临门一脚——与《让顾客自己来定价》组成「定价书组」：它管桌面上怎么守住价格，后者管定价机制怎么设计才少给砍价空间；蓝海战略则从战略层帮你跳出价格战。',
    meta: {
      publisher: '重庆出版社（中文版）· 原著名 Secrets of Power Negotiating',
      role: '销售 / 销售管理者 / 商务谈判负责人',
      date: '2026年8月'
    },
    stats: [
      { num: '3', label: '局：开 / 中 / 终' },
      { num: '24', label: '种实用战术' },
      { num: '1', label: '核心：让对方先亮底' }
    ],
    proposition: '谈判不是比谁嗓门大，是比谁更会制造"无法拒绝的台阶"——钳子、更高权威、咬一口，都是把让步变成对方的主动选择。'
  }

  , {
    id: 'principled-negotiation',
    title: '谈判力：哈佛原则谈判法',
    author: '罗杰·费希尔（Roger Fisher）/ 威廉·尤里（William Ury）/ 布鲁斯·巴顿（Bruce Patton） 著',
    subtitle: '原则式谈判四要素导读',
    category: '谈判 · 原则与底层',
    track: 'account',
    relatedTracks: ['account', 'sales-craft', 'mindset'],
    tags: ['原则谈判', '哈佛', '利益而非立场', 'BATNA', '客观标准', '双赢', 'Getting to Yes'],
    rating: 4.7,
    cover: '#2E5B84',
    intro: '《Getting to Yes》给出了谈判的"原则底层"：把人和事分开、盯利益而非立场、为共同利益发明选项、坚持用客观标准。最关键的底牌是 BATNA（最佳替代方案）——它决定了你敢不敢走、能谈多硬。与《优势谈判》的"战术"形成互补：一本教你怎么"出招"，一本教你怎么"不崩、不陷、不亏"。政企谈判动辄跨年、多角色博弈，原则法比纯技巧更扛得住长期关系。',
    meta: {
      publisher: '中信出版社（中文版）· 原著名 Getting to Yes',
      role: '销售 / 管理者 / 任何需要做协商决策的人',
      date: '2026年8月'
    },
    stats: [
      { num: '4', label: '大原则' },
      { num: '1', label: '张底牌：BATNA' },
      { num: '3', label: '类风格：温和/强硬/原则' }
    ],
    proposition: '立场之争没有赢家，利益之谈才有出路。BATNA 是你谈判桌上唯一的硬通货——没有它，再好的技巧也是空中楼阁。'
  }

  , {
    id: 'gov-enterprise-sales',
    title: '政企客户实战：政府采购 · 信创 · 招投标',
    author: '综合实操（基于政企销售一线经验与公开采购制度整理）',
    subtitle: '政企 ToG 大客户打法导读',
    category: '政企销售 · ToG 垂直',
    track: 'account',
    relatedTracks: ['account', 'sales-craft', 'mindset'],
    tags: ['政企销售', '政府采购', '招投标', '信创', '预算制', '决策链', '关系经营', '合规'],
    rating: 4.5,
    cover: '#6B4F8A',
    intro: '政企（ToG）客户和普通 B2B 是两套逻辑：预算制、采购法约束、多部门会签、信创国产化替代趋势、关系经营长周期、招投标合规红线。本书把政企打法按"预算周期→决策链→关系地图→招投标合规→信创切入"串成一条线，是锐捷政企事业群场景最贴的垂直实操——全站此前政企/ToG 方向 0 覆盖，你作为政企 GM 的角色刚需正落在此处。',
    meta: {
      publisher: '内部实战整理（一线经验 + 公开制度）',
      role: '政企销售 / 区域总经理 / 行业负责人',
      date: '2026年8月'
    },
    stats: [
      { num: '5', label: '步打法主线' },
      { num: 'N', label: '级会签决策链' },
      { num: '1', label: '条红线：合规' }
    ],
    proposition: '政企生意不是"卖得动"，是"进得去、陪得起、合规过"——预算节奏踩不准、关系地图画不全、红线碰一根，前面全白干。'
  },
  {
    id: 'crossing-the-chasm',
    title: '跨越鸿沟',
    author: '杰弗里·摩尔（Geoffrey A. Moore）',
    subtitle: '高科技产品规模化营销导读',
    category: '科技产品营销 · 鸿沟理论',
    track: 'marketing',
    relatedTracks: ['marketing', 'strategy', 'sales-craft'],
    tags: ['鸿沟理论', '技术采纳生命周期', '整体产品', '利基滩头', 'GTM', '规模化', '定位进攻'],
    rating: 4.8,
    cover: '#2E5A4B',
    intro: '高科技营销圣经。它解释了一个诡异死亡：产品在早期尝鲜者圈子里口碑炸裂，一碰主流客户就卖不动——中间横着一条没人预警过的「鸿沟」。本书给出一张「先占利基滩头、用整体产品补齐交付、再横向扩张」的作战图，是科技产品 GTM 与政企 SaaS 规模化的必装操作系统；全站营销赛道此前最薄，本书是补强第一枪。',
    meta: {
      publisher: 'HarperBusiness（简体中文：机械工业出版社）',
      role: '产品营销 / 增长 / 销售 / 团队管理者',
      date: '2026年8月'
    },
    stats: [
      { num: '5', label: '类采纳群体' },
      { num: '1', label: '道鸿沟' },
      { num: '4', label: '层整体产品' },
      { num: 'D日', label: '滩头战术' }
    ],
    proposition: '高科技产品的规模化，不是卖得更多，而是换一套打法——在利基里用整体产品成为唯一合理选择，鸿沟才过得去。'
  },
  {
    id: 'positioning',
    title: '定位',
    author: '艾·里斯（Al Ries）& 杰克·特劳特（Jack Trout）',
    subtitle: '争夺用户心智的战争导读',
    category: '品牌营销 · 定位理论',
    track: 'marketing',
    relatedTracks: ['marketing', 'strategy', 'sales-craft'],
    tags: ['定位', '心智阶梯', '数一数二', '空位战略', '品牌延伸陷阱', '视觉锤'],
    rating: 4.8,
    cover: '#9A3B3B',
    intro: '定位理论的奠基之作。它把营销的战场从「产品本身」拉到「顾客心智」——赢不是功能最多，而是在某个清晰品类里成为顾客心中的第一选择。本书给出心智阶梯、数一数二法则、领导者/跟进者打法、空位战略与品牌延伸陷阱，是科技产品营销与政企品牌卡位的必读底层；全站营销赛道补强第二枪。',
    meta: {
      publisher: 'McGraw-Hill（简体中文：机械工业出版社）',
      role: '品牌/产品营销/销售/团队管理者',
      date: '2026年8月'
    },
    stats: [
      { num: '1', label: '个心智位置' },
      { num: '5', label: '类群体阶梯' },
      { num: '3', label: '类空位' },
      { num: '1', label: '条延伸红线' }
    ],
    proposition: '营销的终极战场是心智，不是市场——在顾客心里占不住一个清晰位置，再多功能也是噪音。'
  },
  {
    id: 'abm',
    title: 'ABM 账号化营销',
    author: '综合（基于 Bevans & Klein《Account-Based Marketing》公开方法论与 B2B 一线实践整理）',
    subtitle: '政企精准营销导读',
    category: 'B2B 营销 · 账号化增长',
    track: 'marketing',
    relatedTracks: ['marketing', 'strategy', 'sales-craft'],
    tags: ['ABM', 'ICP', 'TAL', '营销销售协同', '1对1个性化', '按账号度量', '政企精准'],
    rating: 4.6,
    cover: '#2F6B5E',
    intro: '账号化营销（Account-Based Marketing）把 B2B 获客逻辑从「广撒网捞线索」翻转成「先锁定高价值目标客户、营销与销售协同对其做 1对1 精准攻势」。本书串起 ICP 理想客户画像、TAL 目标客户清单、smarketing 协同、个性化战役与按账号度量，正是政企「按客户/行业精准营销」的方法论底座；全站营销赛道补强第三枪，与跨越鸿沟、定位构成营销铁三角。',
    meta: {
      publisher: '综合整理（公开方法论 + B2B 一线实践）',
      role: '营销/销售/大客户管理者',
      date: '2026年8月'
    },
    stats: [
      { num: '1', label: '个目标账号为中心' },
      { num: 'ICP', label: '理想客户画像' },
      { num: 'TAL', label: '目标客户清单' },
      { num: '1v1', label: '个性化攻势' }
    ],
    proposition: '高价值客户不是捞出来的，是锁定后营销销售协同「围猎」出来的——ABM 把资源压在少数能赢的账号上。'
  },
  {
    id: 'coaching-for-performance',
    title: '高绩效教练',
    author: '约翰·惠特默（John Whitmore）',
    subtitle: '用提问释放团队潜能导读',
    category: '团队管理 · 教练式领导',
    track: 'leadership',
    relatedTracks: ['leadership', 'strategy', 'mindset'],
    tags: ['教练', 'GROW模型', '提问', '潜能', '绩效', '倾听'],
    rating: 4.7,
    cover: '#3B5B9A',
    intro: '教练技术的开山之作，GROW 模型的总源头。它主张「绩效=潜能−干扰」，管理者的核心动作不是给答案，而是用结构化提问帮下属自己找到答案、释放被干扰压住的潜能。对带 13 区域 17 省一线团队的管理者，这是把「指令式」升级为「教练式」的底层操作系统；全站团队赛道补强第一枪。',
    meta: {
      publisher: 'Nicholas Brealey（简体中文：机械工业出版社）',
      role: '管理者/团队领导/HR/教练',
      date: '2026年8月'
    },
    stats: [
      { num: 'GROW', label: '教练四步' },
      { num: '=', label: '潜能−干扰' },
      { num: '1', label: '个核心：提问' }
    ],
    proposition: '最好的管理不是替下属解决问题，而是用对的问题让他自己解决——绩效的敌人是干扰，不是能力。'
  },
  {
    id: 'leadership-pipeline',
    title: '领导梯队',
    author: '拉姆·查兰（Ram Charan）、斯蒂芬·德罗特、詹姆斯·诺埃尔',
    subtitle: '六层领导力转型导读',
    category: '组织领导 · 梯队建设',
    track: 'leadership',
    relatedTracks: ['leadership', 'strategy', 'mindset'],
    tags: ['领导梯队', '六层转型', '角色转型', '能力时间价值', '人才盘点', '管理层级'],
    rating: 4.8,
    cover: '#5A4B8A',
    intro: '领导力发展的经典框架。它把企业从一线到 CEO 拆成六层，并指出每次晋层都必须完成「三种转换」：工作能力、时间配置、工作价值标准——多数管理者失败，是用旧层级的习惯做新层级的事。对管 13 区域 17 省、下属层层 manager 的区域总，这是识别「人卡在哪一层的转型」、做梯队盘点的标准地图；全站团队赛道补强第二枪。',
    meta: {
      publisher: 'Crown（简体中文：机械工业出版社）',
      role: '中高层管理者/HR/组织发展',
      date: '2026年8月'
    },
    stats: [
      { num: '6', label: '层领导力' },
      { num: '3', label: '类转型转换' },
      { num: '1', label: '张梯队地图' }
    ],
    proposition: '晋升不是权力变大，是工作内核必须重写——能力、时间、价值标准三样不换，人就卡在转型期。'
  },
  {
    id: 'crucial-conversations',
    title: '关键对话',
    author: '科里·帕特森（Kerry Patterson）等（VitalSmarts）',
    subtitle: '高风险沟通实战导读',
    category: '团队沟通 · 冲突管理',
    track: 'account',
    relatedTracks: ['account', 'sales-craft', 'mindset'],
    tags: ['关键对话', 'CPR', '安全感', 'STATE法', '冲突', '沟通'],
    rating: 4.7,
    cover: '#8A6B3B',
    intro: '高风险沟通的工具箱。当「观点分歧 + 情绪激烈 + 后果重大」同时出现，人要么沉默要么暴力，对话就死。本书给出 CPR 分层、安全感重建、STATE 表达法，把「谈崩的对话」拉回建设性。对做绩效面谈、客户冲突挽回、跨团队争资源的北区管理者，这是高情绪场景下的沟通操作系统；与 rc32《学会提问》相邻但偏实战冲突，全站团队赛道补强第三枪。',
    meta: {
      publisher: 'McGraw-Hill（简体中文：机械工业出版社）',
      role: '管理者/销售/跨团队协作者',
      date: '2026年8月'
    },
    stats: [
      { num: 'CPR', label: '内容/模式/关系' },
      { num: 'STATE', label: '表达六步' },
      { num: '2', label: '个极端：沉默/暴力' }
    ],
    proposition: '关键对话死在沉默或暴力——重建安全感、用事实而非故事开场，才能把高风险沟通变成共识。'
  },
  {
    id: 'competitive-strategy',
    title: '竞争战略',
    author: '迈克尔·波特（Michael E. Porter）',
    subtitle: '结构化行业分析导读',
    category: '战略 · 行业分析',
    track: 'strategy',
    relatedTracks: ['strategy', 'leadership', 'marketing'],
    tags: ['五力模型', '三大通用战略', '价值链', '战略取舍', '差异化', '集中化'],
    rating: 4.9,
    cover: '#7A3B5A',
    intro: '竞争战略的方法论基石。波特把「竞争」的分析单元定为行业而非企业，用五力模型拆解行业利润结构，用总成本领先/差异化/集中化三大通用战略定位，用价值链看活动系统，并用「战略即取舍」警告「夹在中间」的失败。对北区政企业务选定位、看客户所在行业格局，这是最硬核的结构化武器；与 rc52《不战而胜》相邻但更偏框架工具，全站战略补强第一枪。',
    meta: {
      publisher: 'Free Press（简体中文：中信出版社）',
      role: '战略/销售/行业负责人',
      date: '2026年8月'
    },
    stats: [
      { num: '5', label: '力定格局' },
      { num: '3', label: '大通用战略' },
      { num: '1', label: '条铁律：取舍' }
    ],
    proposition: '战略不是口号，是取舍——不想清楚「不做什么」，就会夹在中间，被两头夹击。'
  },
  {
    id: 'ai-for-sales',
    title: 'AI for Sales（销售智能化实战）',
    author: '综合（基于 AI 销售一线实践与公开研究整理）',
    subtitle: '销售智能化落地导读',
    category: '销售科技 · AI 赋能',
    track: 'industry',
    relatedTracks: ['industry', 'strategy', 'marketing'],
    tags: ['AI销售', '预测性线索评分', '对话智能', 'CRM智能化', '销售预测', '赋能', '人机协同'],
    rating: 4.5,
    cover: '#3B7A6B',
    intro: '销售智能化的落地手册（综合整理）。它把 AI 在销售里的真价值拆成可落地的几块：预测性线索评分、对话智能与教练、CRM 自动补录省力、AI 辅助邮件跟进、销售预测与 pipeline 健康度、赋能内容推荐，并划出数据隐私合规与人机协同的红线。对正在用销售易 NeoCRM 的北区团队，这是把「AI 辅助」从概念变成日常动作的路线图；全站销售赛道前瞻补强第一枪。',
    meta: {
      publisher: '综合整理（一线实践 + 公开研究）',
      role: '销售/销售管理/CRM运营',
      date: '2026年8月'
    },
    stats: [
      { num: '6', label: '类AI应用场景' },
      { num: '1', label: '条主线：省力→增效' },
      { num: '2', label: '条红线：合规/协同' }
    ],
    proposition: 'AI 在销售里不是替代人，是先替你省力（补录/评分）、再帮你增效（预测/教练）——人机协同才是主线。'
  },
  {
    id: 'new-solution-selling',
    title: '新解决方案销售（Solution Selling）',
    author: '基斯·伊迪斯（Keith Eades）',
    subtitle: '用痛点逻辑树卖解决方案',
    category: '销售方法 · 解决方案销售',
    track: 'sales-craft',
    relatedTracks: ['sales-craft', 'account', 'mindset'],
    tags: ['解决方案销售', '痛点逻辑树', '买方流程', '量化影响', '控单', 'PIC/S'],
    rating: 4.5,
    cover: '#2E6E8E',
    intro: '解决方案销售的方法论闭环。它把「卖产品」升级为「卖业务结果」：用痛点逻辑树（Pain→Impact→Cause→Solution）挖出客户真实痛点，用买方流程（BFM）对齐销售动作，用美元化影响量化业务代价，再反过来掌控销售周期与预测。与米勒黑曼《战略销售》互补——战略销售重角色与控单，本书重痛点量化与逻辑闭环；是全站 solution selling 方向的补强。',
    meta: {
      publisher: 'McGraw-Hill（原版）',
      role: '销售/销售管理/售前',
      date: '2026年8月'
    },
    stats: [
      { num: '4', label: '步痛点逻辑树 PIC/S' },
      { num: '1', label: '条主线：痛点→方案' },
      { num: '5', label: '个可落地工具' }
    ],
    proposition: '别再卖产品功能，先帮客户算清「不解决的代价」——美元化的痛点，才是方案成交的支点。'
  },
  {
    id: 'visual-hammer',
    title: '视觉锤（Visual Hammer）',
    author: '劳拉·里斯特劳特（Laura Ries） & 阿尔·里斯（Al Ries）',
    subtitle: '用视觉占据顾客心智',
    category: '营销 · 品牌定位',
    track: 'marketing',
    relatedTracks: ['marketing', 'strategy', 'sales-craft'],
    tags: ['视觉锤', '语言钉', '品牌心智', '视觉营销', '定位', 'B2B品牌'],
    rating: 4.3,
    cover: '#C8553D',
    intro: '「定位」的孪生篇。它点破一个真相：语言（语言钉）负责说清楚，但视觉（视觉锤）才最容易被人记住——可口可乐的红色弧线、万宝路的牛仔，都是视觉锤钉进心智的范例。书中给出视觉锤的 11 种来源（形状/颜色/产品/创始人/标志……），并强调 B2B 同样需要视觉锤。与《定位》《品牌22律》构成定位系列三连环；对做政企品牌与方案 PPT 的北区团队，这是「让客户记住你」的视觉抓手。',
    meta: {
      publisher: 'HarperCollins（原版）',
      role: '营销/品牌/销售赋能',
      date: '2026年8月'
    },
    stats: [
      { num: '11', label: '种视觉锤来源' },
      { num: '1', label: '对定位的孪生补充' },
      { num: '5', label: '个可落地工具' }
    ],
    proposition: '语言钉说清定位，视觉锤钉进心智——没有视觉锤的定位，只能停留在 PPT 里。'
  },
  {
    id: '22-immutable-laws',
    title: '品牌22律（The 22 Immutable Laws of Branding）',
    author: '阿尔·里斯（Al Ries） & 劳拉·里斯特劳特（Laura Ries）',
    subtitle: '不可动摇的品牌定律',
    category: '营销 · 品牌定位',
    track: 'marketing',
    relatedTracks: ['marketing', 'strategy', 'sales-craft'],
    tags: ['品牌', '品类定律', '品牌延伸', '公关', '命名', '定位系列'],
    rating: 4.2,
    cover: '#7A4F91',
    intro: '「定位」系列的延伸与实战化。它把品牌建设提炼为 22 条不可逆定律：收缩定律（聚焦一个品类而非扩张）、公关先于广告、命名定律、品类定律、以及最常被违反也最致命的品牌延伸定律。核心主张与《定位》《视觉锤》一脉相承——品牌的力量来自占据一个品类，而非无限延伸产品线。对政企品牌「做窄做深」有直接的纠偏价值。',
    meta: {
      publisher: 'HarperCollins（原版）',
      role: '营销/品牌',
      date: '2026年8月'
    },
    stats: [
      { num: '22', label: '条品牌定律' },
      { num: '1', label: '主线：聚焦品类' },
      { num: '5', label: '个可落地工具' }
    ],
    proposition: '品牌的力量来自占据一个品类，而非延伸出一堆产品——收缩，才是最好的扩张。'
  },
  {
    id: 'blue-ocean-strategy',
    title: '蓝海战略（Blue Ocean Strategy）',
    author: 'W. 钱·金（W. Chan Kim） & 勒妮·莫博涅（Renée Mauborgne）',
    subtitle: '开创无争市场的战略逻辑',
    category: '团队 · 战略思维',
    track: 'strategy',
    relatedTracks: ['strategy', 'leadership', 'marketing'],
    tags: ['蓝海战略', '价值创新', '四步动作', '战略布局图', '差异化', '去价格战', '定价书组'],
    rating: 4.6,
    cover: '#1F7A8C',
    intro: '与波特「竞争战略」互补的另一条战略路：不要在与对手血拼的红海里内卷，而去开创没有竞争的「蓝海」。核心工具是价值创新（Value Innovation）与四步动作框架（剔除-减少-增加-创造 ERRC），配合战略布局图与价值曲线、六条路径框架。对政企北区团队，它提供了避开招投标价格战、用场景化差异化方案突围的打法——与《让顾客自己来定价》组成「定价书组」：蓝海从战略层跳出价格战、价值创新重画价格要素；后者从机制层把价值变现金；优势谈判则管谈判桌上的价格博弈。',
    meta: {
      publisher: 'Harvard Business Review Press（原版）',
      role: '管理者/战略/业务负责人',
      date: '2026年8月'
    },
    stats: [
      { num: '4', label: '步动作 ERRC' },
      { num: '6', label: '条创新路径' },
      { num: '5', label: '个可落地工具' }
    ],
    proposition: '别在红海里拼价格，去开创一片没有竞争对手的蓝海——价值创新，才是增长的另一条路。'
  },
  {
    id: 'high-output-management',
    title: '高产出管理（High Output Management）',
    author: '安迪·格鲁夫（Andy Grove）',
    subtitle: '一线经理的日常动作手册',
    category: '团队 · 管理实务',
    track: 'leadership',
    relatedTracks: ['leadership', 'strategy', 'mindset'],
    tags: ['管理', '一对一会议', '目标KPI', '授权', '反馈', '时间杠杆'],
    rating: 4.7,
    cover: '#B5651D',
    intro: '英特尔前 CEO 格鲁夫写的管理经典，也是《领导梯队》的绝佳搭档：梯队讲「层级转型」，本书讲「日常怎么干」。它把管理定义成「通过他人完成工作」，并给出一线可抄的动作——1:1 一对一会议、目标与 KPI 设定、委派授权、绩效反馈、会议与决策、时间杠杆。对管着 13 区域 17 省的多层 manager，这是把「带团队」从感觉变成动作的底座。',
    meta: {
      publisher: 'Vintage（原版）',
      role: '一线经理/管理者',
      date: '2026年8月'
    },
    stats: [
      { num: '1:1', label: '会议是管理核心' },
      { num: '5', label: '步管理动作' },
      { num: '5', label: '个可落地工具' }
    ],
    proposition: '管理不是当官，是通过他人拿结果——1:1、KPI、反馈，是把「带人」从玄学变成动作的三件套。'
  },
  {
    id: 'innovators-dilemma',
    title: '创新者的窘境（The Innovator’s Dilemma）',
    author: '克莱顿·克里斯坦森（Clayton M. Christensen）',
    subtitle: '大公司为何在颠覆中失败',
    category: '团队 · 战略思维',
    track: 'strategy',
    relatedTracks: ['strategy', 'leadership', 'marketing'],
    tags: ['颠覆式创新', '延续性创新', 'RPV框架', '价值网络', '破坏性创新', '创新管理'],
    rating: 4.6,
    cover: '#2D6A4F',
    intro: '「跨越鸿沟」的兄弟篇，专讲创新为什么难。克里斯坦森用 RPV 框架（资源·流程·价值观）解释：正是那些让大公司成功的管理动作，导致它们在颠覆式创新面前失败——因为价值网络把资源锁在原有客户与利润池里。书中给出破坏性创新的两条路径（低端颠覆/新市场颠覆）与建立独立创新单元的解法。对科技与政企玩家，这是「别被小颠覆者掀翻」的预警与对策。',
    meta: {
      publisher: 'Harvard Business Review Press（原版）',
      role: '管理者/战略/创新负责人',
      date: '2026年8月'
    },
    stats: [
      { num: 'RPV', label: '框架解释失败' },
      { num: '2', label: '条颠覆路径' },
      { num: '5', label: '个可落地工具' }
    ],
    proposition: '杀死巨头的不是对手，是自己成功的流程——当颠覆从低端或新市场来，独立小队才扛得住。'
  },
  {
    id: 'principles',
    title: '原则（Principles）',
    author: '瑞·达里奥（Ray Dalio）',
    subtitle: '用可执行的准则把决策交给系统',
    category: '团队 · 决策准则',
    track: 'leadership',
    relatedTracks: ['leadership', 'strategy', 'mindset'],
    tags: ['原则', '可信度加权', '极度求真', '五步流程', '决策系统', '反思'],
    rating: 4.4,
    cover: '#9A2D2D',
    intro: '桥水基金创始人达里奥把毕生决策方法写成「原则」。核心是用可信度加权决策替代一言堂，用极度求真与极度透明打破信息过滤，用五步流程（目标→问题→诊断→方案→执行）把目标变成结果，再把原则编写成可执行的算法。与《思考快与慢》《纳瓦尔宝典》互补——它给管理者一套「把团队决策从靠人变成靠系统」的底座。',
    meta: {
      publisher: 'Simon & Schuster（原版）',
      role: '管理者/团队/决策者',
      date: '2026年8月'
    },
    stats: [
      { num: '5', label: '步目标流程' },
      { num: '1', label: '条主线：求真求透' },
      { num: '5', label: '个可落地工具' }
    ],
    proposition: '把决策从「靠老板拍脑袋」变成「靠可信度加权」——极度求真，才敢极度透明。'
  }

  , {
    id: 'ji-kong',
    title: '技控：向方法要效率',
    author: '刘春雷 / 易虹 / 王琳',
    subtitle: '绩效改进·技控思维导读',
    category: '团队 · 绩效改进',
    track: 'leadership',
    relatedTracks: ['leadership', 'strategy', 'mindset'],
    tags: ['技控', '人控', '绩效改进', '行为工程模型', 'CODE模型', '4E原则', '简化事赋能人', '可复制扩张'],
    rating: 4.7,
    cover: '#2D7A6B',
    intro: '华商基业三位深耕绩效改进二十余年的专家，把「为什么很多团队越管人越累、越考核越差」这件事讲透了。它的核心一句话：做一件事的效率 = 人的效率 + 方法的效率，而管理者 90% 的精力都砸在只占 25% 的「人」上，却忽略了占 75% 的「方法/环境」。基于吉尔伯特行为工程模型（BEM），本书给出人人可套的 CODE 四步技控密码（选题→展开→开发→定型）与 4E 优选原则，并把技控分成岗位 / 流程 / 系统 / 生态四级进阶。对管着 13 区域 17 省、靠层层 manager 拿结果的北区总，这是把「靠人盯人」升级为「靠系统赋能」的底层操作系统——先简化事，再赋能人。',
    meta: {
      publisher: '中信出版集团（2024.04）· 华商基业',
      role: '管理者 / 团队 / 业务负责人',
      date: '2026年8月'
    },
    stats: [
      { num: 'CODE', label: '技控四步' },
      { num: '75/25', label: '环境/人占比' },
      { num: '4E', label: '优选原则' },
      { num: '4', label: '级技控进阶' }
    ],
    proposition: '管理的核心不是改变人，而是搭建让人轻松做对事的环境、流程与工具——先简化事，再赋能人，靠方法拉开效率差距。'
  }

  , {
    id: 'smart-pricing',
    title: '让顾客自己来定价（Smart Pricing）',
    author: '贾格莫汉·拉古（Jagmohan Raju）/ 张忠（Z. John Zhang）',
    subtitle: '世界最盈利公司的创新定价策略',
    category: '营销 · 定价策略',
    track: 'marketing',
    relatedTracks: ['marketing', 'strategy', 'sales-craft'],
    tags: ['定价', '支付意愿', '价值定价', '动态定价', '零定价', '绩效定价', '差异化定价', '订购式定价', '价格战', '微定价'],
    rating: 4.6,
    cover: '#B5651D',
    intro: '沃顿商学院营销学教授拉古与张忠合著的定价实战书。核心观点：定价是企业拉动利润最强的杠杆——价格提升 1%，盈利能力可提升 10.29%（远超销量提升的 3.28%）。书中系统拆解 9 大创新定价策略（意愿定价/零定价/价格战/微定价/自动降价/动态定价/订购式定价/差异化定价/绩效定价），并用 Google、Priceline、迪士尼、麦当劳等真实案例说明「怎么收费」往往比「收多少」更能决定盈利。对政企 B2B 场景，它把「报价」从谈判尾声的被动动作，变成一套可主动设计的产品化能力。',
    meta: {
      publisher: '中国人民大学出版社（2012，刘媛媛 译）',
      role: '营销 / 销售 / 产品负责人',
      date: '2026年8月'
    },
    stats: [
      { num: '9', label: '大创新定价策略' },
      { num: '1%', label: '提价 → 利润 +10.29%' },
      { num: '3', label: '大定价误区' }
    ],
    proposition: '定价不是谈判最后一步的「讨价还价」，而是产品设计里最先该想清楚的核心战略——怎么收费，往往比收多少更重要。'
  },
  {
    id: 'escape-velocity',
    title: '换轨策略',
    author: '杰弗里·摩尔（Geoffrey A. Moore）',
    subtitle: '持续增长的新五力分析',
    category: '企业战略 · 组织转型',
    track: 'strategy',
    relatedTracks: ['strategy', 'leadership', 'marketing'],
    tags: ['品类力', '新五力模型', '组织惯性', '投资组合', '品类成熟生命周期', '第二曲线', '战略转型', '增长突围'],
    rating: 4.7,
    cover: '#3A6EA5',
    intro: '《跨越鸿沟》作者摩尔写给「已经跨越了鸿沟、却卡在成熟期」的企业的续集。它不教你怎么赢下一场仗，而教你怎么让一家赢过的公司不被自己的胜利困死——摩尔把这种拽力叫「过往引力（Pull of the Past）」：成熟业务用它的规模、利润和话语权，吸走本该投向新赛道的资本、人才与注意力。本书用「新五力模型」与「品类成熟生命周期」把增长的根从「公司强不强」翻转到「你经营的品类本身有没有力」，再用「组合管理 + 组织隔离」给出抵达「逃逸速度」的操盘手册。对正带一片成熟区域又必须长出新增长曲线的管理者，它是战略与组织双视角的必读。',
    meta: {
      publisher: '机械工业出版社（2023，祝惠娇 译）',
      role: '企业一号位 / 事业部负责人 / 战略 / 组织发展',
      date: '2026年8月'
    },
    stats: [
      { num: '5', label: '大新五力来源' },
      { num: '4', label: '段品类成熟周期' },
      { num: '1', label: '道过往引力' }
    ],
    proposition: '企业的衰退，往往不是做错了什么，而是把「曾经对的事」做得太好，以至于腾不出手去做「未来对的事」——换轨的本质，是用组合管理与组织隔离的纪律持续对抗过往引力。'
  }

]

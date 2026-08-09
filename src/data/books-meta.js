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
    relatedTracks: ['marketing'],
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
    track: 'sales',
    relatedTracks: ['sales'],
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
    track: 'sales',
    relatedTracks: ['sales', 'marketing'],
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
    track: 'marketing',
    relatedTracks: ['marketing', 'sales'],
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
    track: 'sales',
    relatedTracks: ['sales', 'marketing', 'team'],
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
    track: 'sales',
    relatedTracks: ['sales', 'marketing', 'team'],
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
    track: 'sales',
    relatedTracks: ['sales', 'marketing'],
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
    track: 'team',
    relatedTracks: ['team', 'sales'],
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
    track: 'team',
    relatedTracks: ['team', 'sales', 'marketing'],
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
    "track": "sales",
    "relatedTracks": [
      "sales"
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
      "marketing"
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
      "marketing"
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
      "marketing"
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
      "marketing"
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
      "marketing"
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
      "marketing"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    "track": "team",
    "relatedTracks": [
      "team"
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
    track: 'team',
    relatedTracks: ['team'],
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
    track: 'team',
    relatedTracks: ['team'],
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
    track: 'team',
    relatedTracks: ['team'],
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
    track: 'sales',
    relatedTracks: ['sales'],
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
    track: 'sales',
    relatedTracks: ['sales'],
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

]

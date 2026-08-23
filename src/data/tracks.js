export const tracks = {
  sales: {
    id: 'sales',
    relatedBooks: ['chip-history', 'zero-trust', 'industry-research', 'salesforce-legend', 'cloud-primer', 'danaher-model', 'cognitive-awakening', 'key-account-management', 'singularity-nearer', 'rc01', 'rc02', 'rc03', 'rc04', 'rc05', 'rc06', 'rc07', 'rc08', 'rc09', 'rc10', 'rc11', 'rc12', 'rc13', 'rc14', 'rc15', 'rc16', 'rc17', 'rc18', 'rc19', 'rc20', 'rc21', 'rc22'],
    name: '销售管理',
    en: 'Sales Management',
    tagline: '从签单到带队，让业绩可复制',
    desc: '面向销售总监与团队负责人，聚焦目标拆解、客户经营、团队激励与 pipeline 管理，用真实战役案例拆解可落地的打法。',
    icon: '📈',
    categories: [
      { name: '销售战略与目标', desc: '市场切入、年度目标拆解、区域策略' },
      { name: '大客户经营', desc: '关键决策人 map、价值提案、招投标' },
      { name: '团队管理与激励', desc: '薪酬设计、陪访辅导、士气管理' },
      { name: 'Pipeline 与预测', desc: '漏斗健康度、预测准确度、CRM 用法' }
    ],
    cases: [
      { title: '半年没拿下的制造业大单，30 天翻盘', scene: '一家区域制造企业，决策链 7 人，销售跟了 6 个月无进展。', conflict: '一直只盯采购总监，忽略了真正拍板的副总对"交期风险"的顾虑。', outcome: '重画决策人地图、针对副总顾虑做价值提案，30 天内签下 320 万订单。' },
      { title: '"价格太高"背后，是价值没讲清', scene: 'SaaS 销售在最后一步频繁被砍价，毛利持续走低。', conflict: '销售把报价当终点，没把"帮客户省下的人效成本"算成账。', outcome: '改用 ROI 测算表替代报价单，成交价回升 18%，砍价投诉减半。' },
      { title: '团队离职率 40%，根因在激励结构', scene: '一支 12 人团队半年走 5 人，业绩滑坡。', conflict: '提成只看个人业绩，老人不愿带新人，新人成长慢易流失。', outcome: '引入"师徒带教奖 + 团队超额池"，半年离职率降到 12%。' }
    ],
    path: [
      { step: '1', title: '销售骨干', desc: '掌握单兵作战与基础管理' },
      { step: '2', title: '团队主管', desc: '带 3-10 人小队，跑通流程' },
      { step: '3', title: '销售总监', desc: '建体系、定策略、扛指标' }
    ]
  },
  marketing: {
    id: 'marketing',
    relatedBooks: ['tech-product-marketing', 'smart-pricing', 'singularity-nearer', 'industry-research', 'salesforce-legend', 'cloud-primer', 'danaher-model', 'zero-trust', 'rc23', 'rc24', 'rc25', 'rc26', 'rc27', 'rc28'],
    name: '市场营销',
    en: 'Marketing',
    tagline: '让每一分预算，都长出增长',
    desc: '面向市场负责人与运营同学，覆盖品牌定位、内容增长、投放 ROI 与活动转化，用数据闭环代替灵感驱动。',
    icon: '📣',
    categories: [
      { name: '品牌与定位', desc: '价值主张、差异化、品牌资产' },
      { name: '内容增长', desc: '选题、私域、社媒矩阵' },
      { name: '投放与 ROI', desc: '渠道组合、归因、预算分配' },
      { name: '活动与转化', desc: '活动策划、落地页、转化漏斗' }
    ],
    cases: [
      { title: '投了 50 万信息流，ROI 只有 0.3', scene: '某教育品牌大促前重投信息流，预期 ROI 2.0。', conflict: '流量没问题，落地页讲的是功能，访客要的是"孩子提分案例"。', outcome: '重做落地页 + 加客户证言，ROI 从 0.3 拉回 2.4，省下 30 万试错费。' },
      { title: '一篇内容带来 800 条销售线索', scene: 'B2B 企业公众号长期阅读不过百。', conflict: '内容在讲"我们多厉害"，客户只关心"我的麻烦怎么解"。', outcome: '改写"客户原话 + 拆解"型内容，单篇引流 800 条线索，转化 37 单。' },
      { title: '品牌升级后老客户反而流失', scene: '消费品牌换 Logo 和 slogan，想冲击高端。', conflict: '新定位偏离了老客户最看重的"性价比"，被竞品截胡。', outcome: '回调传播重点、保留价值锚点，季度流失率回落 9 个百分点。' }
    ],
    path: [
      { step: '1', title: '市场专员', desc: '执行活动、产出内容' },
      { step: '2', title: '运营负责人', desc: '管渠道、看数据' },
      { step: '3', title: '市场总监', desc: '定策略、算总账' }
    ]
  },
  team: {
    id: 'team',
    relatedBooks: ['industry-research', 'salesforce-legend', 'cognitive-awakening', 'danaher-model', 'tip', 'tip-cn08', 'tip-cn24', 'rc29', 'rc30', 'rc31', 'rc32', 'rc33', 'rc34', 'rc35', 'rc36', 'rc37', 'rc38', 'rc39', 'rc40', 'rc41', 'rc42', 'rc43', 'rc44', 'rc45', 'rc46', 'rc47', 'rc48', 'rc49', 'rc50', 'rc51', 'rc52', 'rc53', 'rc54', 'rc55', 'rc56'],
    name: '团队管理',
    en: 'Team Leadership',
    tagline: '把人带好，把事做成',
    desc: '面向管理者与创业老板，围绕目标管理、授权沟通、人才梯队与跨部门协同，用管理工具替代救火式忙乱。',
    icon: '🤝',
    categories: [
      { name: '目标与执行', desc: 'OKR/KPI、周会、复盘' },
      { name: '沟通与授权', desc: '1-on-1、反馈、授权边界' },
      { name: '人才梯队', desc: '识人、带教、保留' },
      { name: '跨部门协同', desc: '机制、冲突、项目制' }
    ],
    cases: [
      { title: '技术骨干被提拔，3 个月带崩了团队', scene: '公司把年度技术之星小李提拔为组长。', conflict: '小李沿用"自己拼命干"的模式，不懂授权，团队憋屈、交付延期。', outcome: '补管理必修课 + 设双周 1-on-1，一个季度后人效回升、离职归零。' },
      { title: '周会变成汇报表演，没人敢说问题', scene: '管理层周会人人念 PPT，问题被美化。', conflict: '老板当场拍板风格，让员工不敢暴露坏消息，隐患越积越大。', outcome: '改"报忧不报喜"机制 + 匿名风险墙，真实问题浮出、决策质量提升。' },
      { title: '空降总监推变革，被元老集体抵制', scene: '新任业务总监想推流程数字化。', conflict: '没先听元老顾虑、没找同盟，被解读为"否定过去"。', outcome: '改用行动学习小组让元老牵头试点，阻力变动力，3 个月落地。' }
    ],
    path: [
      { step: '1', title: '新任主管', desc: '从自己干到带人干' },
      { step: '2', title: '中层管理者', desc: '管团队、跨部门' },
      { step: '3', title: '业务负责人', desc: '搭班子、建文化' }
    ]
  }
}

export const trackList = Object.values(tracks)

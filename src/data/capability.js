// 三赛道能力地图数据
// 设计原则（知行商学·培训设计师视角）：
//  - 4 个职级层：新人(0-1年,个人贡献者) → 专员(1-3年,独立产出) → 专家(3-5年,体系/高潜) → 管理者(带团队)
//  - 3 个能力维度：K 知识 / S 技能 / A 态度
//  - 每个能力点挂接本赛道书目（rc 前缀=读书会荐书；其余=站点自有经营/技术类书），点图即跳《书目》详情
//  - 能力点取"可衡量、可上岗即用"的颗粒度，呼应「知→行」——学了下周就能用。

// 说明：这里是「职业发展线」（销售人 / 市场人 / 管理者怎么成长），
// 与 books-meta 的 7 大「能力域分类」是两个维度。tracks 字段把两者打通——
// 标明这条能力线主要要从哪些能力域取书，便于跨体系跳转，避免两套分类割裂。
export const capabilityTracks = [
  { id: 'sales', name: '销售', color: '#0E6BA8', desc: '从跟访首单到带销售团队的完整能力进阶', tracks: ['sales-craft', 'account', 'industry'] },
  { id: 'marketing', name: '营销', color: '#1F4D3A', desc: '从市场执行到营销战略的能力进阶', tracks: ['marketing', 'strategy'] },
  { id: 'team', name: '团队', color: '#8C3B3B', desc: '从自我管理到经营领导的通用能力进阶', tracks: ['leadership', 'mindset', 'strategy'] }
]

export const dimensionMeta = {
  K: { key: 'K', name: '知识', color: '#0E6BA8', desc: '必须懂的原理、框架与行业认知' },
  S: { key: 'S', name: '技能', color: '#1F4D3A', desc: '能上手做的关键动作与方法' },
  A: { key: 'A', name: '态度', color: '#B5651D', desc: '支撑长期胜任的心智与职业素养' }
}

export const capabilityMap = {
  sales: [
    {
      id: 'l1', name: '新人', years: '0–1年 · 个人贡献者', desc: '跟访、首单、打基础',
      dims: {
        K: [
          { point: '销售底层逻辑与客户心理', books: ['rc01', 'rc04'] },
          { point: '产品技术与行业认知', books: ['chip-history', 'zero-trust', 'cloud-primer', 'industry-research'] }
        ],
        S: [
          { point: '客户拜访与信任建立', books: ['rc18', 'rc19'] },
          { point: '提问与需求挖掘（SPIN）', books: ['rc20'] }
        ],
        A: [
          { point: '以价值取胜而非硬推销', books: ['rc03'] },
          { point: '职业化与抗压韧性', books: ['rc39'] }
        ]
      }
    },
    {
      id: 'l2', name: '专员', years: '1–3年 · 独立成单', desc: '独立产出、稳定贡献',
      dims: {
        K: [
          { point: 'B2B 销售原理与流程', books: ['rc10', 'rc13'] },
          { point: '大客户（KA）经营', books: ['rc16'] }
        ],
        S: [
          { point: '价值竞争与方案销售', books: ['rc07'] },
          { point: '数字化销售赋能', books: ['rc14', 'rc05'] }
        ],
        A: [
          { point: '客户成功导向', books: ['rc22', 'rc19'] }
        ]
      }
    },
    {
      id: 'l3', name: '专家', years: '3–5年 · 体系/高潜', desc: '操盘打法、可复制',
      dims: {
        K: [
          { point: '销售体系与组织设计', books: ['rc02', 'rc08'] },
          { point: 'CRM 与客户经营战略', books: ['rc09'] }
        ],
        S: [
          { point: '管理驱动与指标设计', books: ['rc12', 'rc21'] },
          { point: '销售组织数字化转型', books: ['rc05'] }
        ],
        A: [
          { point: '复盘与精益迭代', books: ['rc34'] }
        ]
      }
    },
    {
      id: 'l4', name: '管理者', years: '带销售团队', desc: '带人、带体系',
      dims: {
        K: [
          { point: '销售管理角色认知', books: ['rc06', 'rc15'] },
          { point: '销售人才选育用留', books: ['rc17', 'rc11'] }
        ],
        S: [
          { point: '团队教练与冠军培养', books: ['rc11', 'rc44'] },
          { point: '目标与过程管理', books: ['rc06', 'rc12'] }
        ],
        A: [
          { point: '以系统而非个人英雄驱动', books: ['rc12', 'danaher-model'] }
        ]
      }
    }
  ],

  marketing: [
    {
      id: 'l1', name: '新人', years: '0–1年 · 市场执行', desc: '内容、活动、执行',
      dims: {
        K: [
          { point: '营销科学与基础框架', books: ['rc26'] }
        ],
        S: [
          { point: '场景与体验设计', books: ['rc25', 'rc27'] }
        ],
        A: [
          { point: '用户视角与同理心', books: ['rc22', 'rc38'] }
        ]
      }
    },
    {
      id: 'l2', name: '专员', years: '1–3年 · 独立操盘', desc: '渠道、内容、增长',
      dims: {
        K: [
          { point: '渠道战略与营销范式', books: ['rc24', 'rc28'] }
        ],
        S: [
          { point: '产品营销与 GTM 落地', books: ['tech-product-marketing'] }
        ],
        A: [
          { point: '数据驱动与数智化意识', books: ['rc23'] }
        ]
      }
    },
    {
      id: 'l3', name: '专家', years: '3–5年 · 体系/策略', desc: '策略、品牌、增长',
      dims: {
        K: [
          { point: '营销战略与数智化', books: ['rc23', 'singularity-nearer'] }
        ],
        S: [
          { point: '产品上市与定位（Message House）', books: ['tech-product-marketing'] }
        ],
        A: [
          { point: '创新与增长心智', books: ['rc27', 'rc22'] }
        ]
      }
    },
    {
      id: 'l4', name: '管理者', years: '带市场团队', desc: '战略、组织、整合',
      dims: {
        K: [
          { point: '营销战略与组织能力', books: ['rc23'] }
        ],
        S: [
          { point: '全渠道整合与资源编排', books: ['rc24', 'rc28'] }
        ],
        A: [
          { point: '长期主义客户经营', books: ['rc22', 'danaher-model'] }
        ]
      }
    }
  ],

  team: [
    {
      id: 'l1', name: '新人', years: '0–1年 · 自我贡献', desc: '习惯、思维、协作',
      dims: {
        K: [
          { point: '思维与认知基础', books: ['rc30', 'rc32'] }
        ],
        S: [
          { point: '习惯与自我管理', books: ['rc34', 'rc33'] }
        ],
        A: [
          { point: '同理心与积极心态', books: ['rc38', 'rc39', 'rc29'] }
        ]
      }
    },
    {
      id: 'l2', name: '专员', years: '1–3年 · 独立贡献', desc: '影响、协同、招聘',
      dims: {
        K: [
          { point: '影响力与策略思维', books: ['rc36', 'rc37'] }
        ],
        S: [
          { point: '招聘与流程建设', books: ['rc46', 'rc41'] }
        ],
        A: [
          { point: '成长型思维', books: ['rc35', 'rc31'] }
        ]
      }
    },
    {
      id: 'l3', name: '专家', years: '3–5年 · 体系/高潜', desc: '经营、变革、增长',
      dims: {
        K: [
          { point: '经营与增长逻辑', books: ['rc47', 'rc49'] }
        ],
        S: [
          { point: '变革管理与组织力', books: ['rc43', 'rc48'] }
        ],
        A: [
          { point: '做难而正确的事', books: ['rc40', 'rc55'] }
        ]
      }
    },
    {
      id: 'l4', name: '管理者', years: '带团队', desc: '领导、绩效、系统',
      dims: {
        K: [
          { point: '管理专业化', books: ['rc44', 'rc56'] }
        ],
        S: [
          { point: '团队管理与领导力', books: ['rc53', 'rc45'] }
        ],
        A: [
          { point: '经营系统思维', books: ['danaher-model', 'rc52'] }
        ]
      }
    }
  ]
}

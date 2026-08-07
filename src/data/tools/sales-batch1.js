// Phase 2 销售赛道第 1 批（7 本标杆书）工具包聚合
// 覆盖：rc20 SPIN销售巨人 / rc01 挑战式销售 / rc07 价值竞争 / rc18 信任五环
//       rc04 桑德拉销售原则 / rc19 值得信赖的顾问 / rc10 B2B销售原理与实践
// 每本单独成文件（sales-b1-<id>.js），按书内逻辑全量挖掘，不限 4 个。
// 合并时已剔除这 7 本原有的旧单工具：
//   rc20-spin-coding / rc01-five-profiles / rc07-value-rewrite / rc18-visit-3q
//   rc04-triangle-qualify / rc19-trust-equation / rc10-pro-transition

import { tools as tRc20 } from './sales-b1-rc20'
import { tools as tRc01 } from './sales-b1-rc01'
import { tools as tRc07 } from './sales-b1-rc07'
import { tools as tRc18 } from './sales-b1-rc18'
import { tools as tRc04 } from './sales-b1-rc04'
import { tools as tRc19 } from './sales-b1-rc19'
import { tools as tRc10 } from './sales-b1-rc10'

export const salesBatch1Tools = [
  ...tRc20,
  ...tRc01,
  ...tRc07,
  ...tRc18,
  ...tRc04,
  ...tRc19,
  ...tRc10
]

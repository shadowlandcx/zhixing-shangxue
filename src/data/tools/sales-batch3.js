// Phase 2 销售第 3 批工具包聚合（rc05/rc06/rc09/rc12/rc14/rc15/rc17，共 67 个工具）
// 各书独立挖掘后在此汇总，便于 index.js 统一合并与去重。
import { tools as rc05Tools } from './sales-b3-rc05'
import { tools as rc06Tools } from './sales-b3-rc06'
import { tools as rc09Tools } from './sales-b3-rc09'
import { tools as rc12Tools } from './sales-b3-rc12'
import { tools as rc14Tools } from './sales-b3-rc14'
import { tools as rc15Tools } from './sales-b3-rc15'
import { tools as rc17Tools } from './sales-b3-rc17'

export const salesBatch3Tools = [
  ...rc05Tools, // 销售组织的数字化转型宝典
  ...rc06Tools, // 销售管理
  ...rc09Tools, // 客户关系管理：战略框架
  ...rc12Tools, // 用管理驱动销售
  ...rc14Tools, // 数字化销售
  ...rc15Tools, // 销售与销售管理
  ...rc17Tools  // 销售人力资源管理
]

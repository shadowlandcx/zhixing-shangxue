// Phase 2 销售第4批工具包聚合（rc22/chip-history/zero-trust/industry-research/salesforce-legend/cloud-primer，共 146 个工具）
// 各书独立挖掘后在此汇总，便于 index.js 统一合并与去重。
import { tools as rc22Tools } from './sales-b4-rc22'
import { tools as chipHistoryTools } from './sales-b4-chip-history'
import { tools as zeroTrustTools } from './sales-b4-zero-trust'
import { tools as industryResearchTools } from './sales-b4-industry-research'
import { tools as salesforceLegendTools } from './sales-b4-salesforce-legend'
import { tools as cloudPrimerTools } from './sales-b4-cloud-primer'

export const salesBatch4Tools = [
  ...rc22Tools,            // 客户天才
  ...chipHistoryTools,     // 芯片简史
  ...zeroTrustTools,       // 零信任网络
  ...industryResearchTools, // 行业研究方法
  ...salesforceLegendTools, // Salesforce传奇
  ...cloudPrimerTools      // 云计算
]

// 团队赛道 第5批（阿吉里斯三版本 + 认知觉醒）：聚合各书工具包
import { tools as cognitiveAwakening } from './team-b5-cognitive-awakening'
import { tools as tip } from './team-b5-tip'
import { tools as tipCn08 } from './team-b5-tip-cn08'
import { tools as tipCn24 } from './team-b5-tip-cn24'

export const teamBatch5Tools = [
  ...cognitiveAwakening,
  ...tip,
  ...tipCn08,
  ...tipCn24
]

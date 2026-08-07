// 兼容层（请勿在此新增工具）。
// 工具数据已统一迁移到 src/data/tools/index.js（69 本全量，含 category / useCase / thinking）。
// 保留以下导出名，避免影响既有引用（ToolboxView、BookDetail 等）：
//   templates          → 全部 69 个工具
//   templatesForBook   → 按书目 id 取工具
export { allTools as templates, templatesForBook } from './tools/index'

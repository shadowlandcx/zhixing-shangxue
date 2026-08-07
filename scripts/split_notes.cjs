// 将 books-content.js 的 contents 对象拆分为独立笔记分片 src/data/notes/<id>.js
// 每个文件: export const note = `...markdown...`
const fs = require('fs')
const path = require('path')
const Module = require('module')

const root = process.cwd()
const dataDir = path.join(root, 'src/data')
const notesDir = path.join(dataDir, 'notes')
if (!fs.existsSync(notesDir)) fs.mkdirSync(notesDir, { recursive: true })

// 读 meta 拿标题
let metaSrc = fs.readFileSync(path.join(dataDir, 'books-meta.js'), 'utf8')
  .replace(/export const metaArray =/, 'var metaArray =')
metaSrc += '\nmodule.exports={metaArray};'
const mm = new Module(); mm.paths = Module._nodeModulePaths(root); mm._compile(metaSrc, 'books-meta.js')
const titleMap = {}
for (const b of mm.exports.metaArray) titleMap[b.id] = b.title

// 读 books-content
const c = fs.readFileSync(path.join(dataDir, 'books-content.js'), 'utf8')
const re = /'((?:[a-z0-9]|[-])+)':\s*`([\s\S]*?)`\s*,?/g
let m, count = 0, ids = []
while ((m = re.exec(c))) {
  const id = m[1]
  const body = m[2]
  const title = titleMap[id] || id
  const out = `// 《${title}》读书笔记 · 逐章复原（由 books-content 迁移，待优化为逐章结构）\nexport const note = \`${body}\`\n`
  fs.writeFileSync(path.join(notesDir, `${id}.js`), out)
  count++; ids.push(id)
}
console.log(`已拆分 ${count} 本: ${ids.join(', ')}`)

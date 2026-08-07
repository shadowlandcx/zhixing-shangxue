const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const REP = path.join(__dirname, '..', 'src', 'data', 'reports')
const NOTE = path.join(__dirname, '..', 'src', 'data', 'notes')

function extract(body) {
  const m = body.match(/export const (?:note|report)\s*=\s*`([\s\S]*)`\s*;?\s*$/)
  return m ? m[1] : null
}

const PLACE = ['待补', '编写中', '敬请期待']
const ids = fs.readdirSync(REP).filter(f => f.endsWith('.js')).map(f => f.replace(/\.js$/, ''))
ids.sort()

let fail = 0
const rows = []
for (const id of ids) {
  const repFile = path.join(REP, id + '.js')
  const noteFile = path.join(NOTE, id + '.js')
  const r = { id }
  // notes
  if (!fs.existsSync(noteFile)) { r.note = 'MISSING'; r.noteLen = 0 }
  else {
    const nb = extract(fs.readFileSync(noteFile, 'utf8'))
    r.note = nb ? 'ok' : 'NO_EXPORT'
    r.noteLen = nb ? nb.length : 0
  }
  // reports
  const rb = extract(fs.readFileSync(repFile, 'utf8'))
  r.rep = rb ? 'ok' : 'NO_EXPORT'
  r.repLen = rb ? rb.length : 0
  r.hasDaodu = rb ? rb.includes('知行商学导读') : false
  r.placeholder = rb ? PLACE.filter(p => rb.includes(p)) : []
  // syntax
  try { execSync(`node --check ${repFile}`); r.syntax = 'ok' }
  catch (e) { r.syntax = 'ERR' }
  rows.push(r)
}

// tally
const noteThin = rows.filter(r => r.noteLen < 6000)
const repNoDaodu = rows.filter(r => !r.hasDaodu)
const repPlaceholder = rows.filter(r => r.placeholder && r.placeholder.length)
const syntaxErr = rows.filter(r => r.syntax === 'ERR')
const noteMissing = rows.filter(r => r.note === 'MISSING')
const repMissingExport = rows.filter(r => r.rep === 'NO_EXPORT')

console.log('=== 65本全量校验 ===')
console.log('总本数:', rows.length)
console.log('笔记 <6000字:', noteThin.length, noteThin.map(r => `${r.id}(${r.noteLen})`).join(', ') || '无')
console.log('研报 缺「知行商学导读」:', repNoDaodu.length, repNoDaodu.map(r => r.id).join(', ') || '无')
console.log('研报 含占位(待补/编写中/敬请期待):', repPlaceholder.length, repPlaceholder.map(r => `${r.id}[${r.placeholder.join('/')}]`).join(', ') || '无')
console.log('语法错误:', syntaxErr.length, syntaxErr.map(r => r.id).join(', ') || '无')
console.log('笔记缺失文件:', noteMissing.length, noteMissing.map(r => r.id).join(', ') || '无')
console.log('研报缺导出:', repMissingExport.length, repMissingExport.map(r => r.id).join(', ') || '无')

console.log('\n=== 逐本明细 (id | note字 | report字 | 导读 | 占位 | 语法) ===')
for (const r of rows) {
  console.log(`${r.id.padEnd(22)} | ${String(r.noteLen).padStart(6)} | ${String(r.repLen).padStart(6)} | ${r.hasDaodu?'✓':'✗'} | ${r.placeholder&&r.placeholder.length?r.placeholder.join('/'):'-'} | ${r.syntax}`)
}
const allOk = noteThin.length===0 && repNoDaodu.length===0 && repPlaceholder.length===0 && syntaxErr.length===0 && noteMissing.length===0 && repMissingExport.length===0
console.log('\n结论:', allOk ? 'ALL OK ✅' : '存在异常 ❌')

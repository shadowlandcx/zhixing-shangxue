// 诊断：直接按 id 动态 import 每个 reports/<id>.js，检查导出的 report 实际内容长度。
// 等价于生产环境 getBookReport 对 rc 分支 / reportModules 分支的返回结果。
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const reportsDir = path.resolve(__dirname, '../src/data/reports')
const notesDir = path.resolve(__dirname, '../src/data/notes')
const metaPath = path.resolve(__dirname, '../src/data/books-meta.js')

const { metaArray } = await import('file://' + metaPath)

const out = []
for (const b of metaArray) {
  const id = b.id
  let rLen = 0, rErr = ''
  const rFile = path.join(reportsDir, `${id}.js`)
  if (!fs.existsSync(rFile)) {
    rErr = 'FILE_MISSING'
  } else {
    try {
      const mod = await import('file://' + rFile)
      rLen = (mod.report || '').length
      if (!mod.report) rErr = 'NO_EXPORT_report'
    } catch (e) { rErr = e.message || String(e) }
  }
  let nLen = 0, nErr = ''
  const nFile = path.join(notesDir, `${id}.js`)
  if (!fs.existsSync(nFile)) {
    nErr = 'FILE_MISSING'
  } else {
    try {
      const mod = await import('file://' + nFile)
      nLen = (mod.note || '').length
      if (!mod.note) nErr = 'NO_EXPORT_note'
    } catch (e) { nErr = e.message || String(e) }
  }
  out.push({ id, title: b.title, rLen, rErr, nLen, nErr })
}

const noReport = out.filter(r => r.rLen < 300 || r.rErr)
const noNote = out.filter(r => r.nLen < 300 || r.nErr)
console.log('=== 总计', out.length, '本 ===')
console.log('\n--- 研报异常（空 / 过短 / 报错） ---')
console.log('数量:', noReport.length)
noReport.forEach(r => console.log(`  ${r.id} | ${r.title} | rLen=${r.rLen}${r.rErr ? ' | '+r.rErr : ''}`))
console.log('\n--- 笔记异常（空 / 过短 / 报错） ---')
console.log('数量:', noNote.length)
noNote.forEach(r => console.log(`  ${r.id} | ${r.title} | nLen=${r.nLen}${r.nErr ? ' | '+r.nErr : ''}`))

console.log('\n--- 全部研报字数分布 ---')
out.forEach(r => console.log(`  ${r.id.padEnd(24)} rLen=${String(r.rLen).padStart(6)}  nLen=${String(r.nLen).padStart(6)}`))

// 知行商学 · 全站笔记/研报达标审计
// 用法: npm run audit  (或 node scripts/audit.mjs)
// 防回归: 每次加书/改内容后跑一遍，核对笔记5模块、研报8节+三视角+30/60/90、禁用词(仅站点自称课程话术/行动作业)。
import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..', 'src', 'data')
const OUT = join(__dirname, 'audit-report.md')

const metaMod = await import(join(ROOT, 'books-meta.js'))
const metaMap = Object.fromEntries(metaMod.metaArray.map((b) => [b.id, b]))
const ids = metaMod.metaArray.map((b) => b.id)

function extract(file) {
  try {
    const t = readFileSync(file, 'utf8')
    const s = t.indexOf('`'), e = t.lastIndexOf('`')
    if (s < 0 || e <= s) return { ok: false, text: '' }
    return { ok: true, text: t.slice(s + 1, e) }
  } catch {
    return { ok: false, text: '' }
  }
}
function sectionBody(text, headingRe) {
  const lines = text.split('\n')
  let cap = false
  const buf = []
  for (const line of lines) {
    if (/^#{1,6}\s/.test(line)) {
      if (cap) break
      if (headingRe.test(line)) cap = true
    } else if (cap) buf.push(line)
  }
  return buf.join('\n').trim()
}
const cc = (s) => [...s.replace(/\s/g, '')].length

// 笔记: 原典/普通书要求「分章」(第X章/分章精读/第一部分/篇/幕); 译本(editionOf)接受「一、二、三、」译本对照
const NOTE_WHY = /##\s*为什么读/
const NOTE_CHAPTER = /##\s*分章精读|##\s*第\s*[一二三四五六七八九十百千0-9]+|##\s*第一[部分篇幕]|##\s*第[一二三四五六七八九十]+\s*[幕篇]/
const NOTE_EDITION = /##\s*[一二三四五六七八九十]+\s*[、.．]/
const NOTE_TAKEAWAY = /一句话带走/
const NOTE_LOGICAL = /全书逻辑脉络/

const REPORT_SECTIONS = [
  { re: /##\s*研导读语/, label: '研导读语' },
  { re: /##\s*一[、.．]/, label: '一、解决什么问题' },
  { re: /##\s*二[、.．]/, label: '二、核心框架/命题' },
  { re: /三视角|##\s*三[、.．]/, label: '三、三视角拆解' },
  { re: /##\s*四[、.．]/, label: '四、关键工具清单' },
  { re: /##\s*五[、.．]/, label: '五、共读与团队应用' },
  { re: /##\s*六[、.．]/, label: '六、30/60/90行动清单' },
  { re: /##\s*七[、.．]/, label: '七、读书会荐语' }
]
const VIEWS = [
  { re: /^###\s*销售视角/, label: '销售视角' },
  { re: /^###\s*营销视角/, label: '营销视角' },
  { re: /^###\s*团队视角/, label: '团队视角' }
]
// 禁用词仅限「站点自称课程/培训」话术; 书中内容提及课程不算
const BANNED_HARD = [/行动作业/g]
const COURSE_SITE = /本课程|系列课程|在线课程|课程大纲|课程表|培训课程|微课|公开课|课程设计|课程体系|选课|课件/g

const results = []
for (const id of ids) {
  const m = metaMap[id] || {}
  const isEdition = !!m.editionOf
  const note = extract(join(ROOT, 'notes', `${id}.js`))
  const report = extract(join(ROOT, 'reports', `${id}.js`))
  const r = {
    id, isEdition, noteP0: [], noteSoft: [], noteLen: 0,
    reportP0: [], emptyView: [], has306090: false, bannedHard: [], courseSite: [], reportLen: 0
  }

  if (!note.ok) r.noteP0.push('(笔记文件缺失)')
  else {
    r.noteLen = cc(note.text)
    if (!NOTE_WHY.test(note.text)) r.noteP0.push('为什么读')
    const hasBody = isEdition ? NOTE_EDITION.test(note.text) : NOTE_CHAPTER.test(note.text)
    if (!hasBody) r.noteP0.push(isEdition ? '译本对照结构' : '分章精读')
    if (!NOTE_TAKEAWAY.test(note.text)) r.noteP0.push('一句话带走')
    if (r.noteLen < 1500) (isEdition ? r.noteSoft : r.noteP0).push(`篇幅<1500(${r.noteLen})`)
    if (!NOTE_LOGICAL.test(note.text) && !NOTE_TAKEAWAY.test(note.text)) r.noteSoft.push('全书逻辑脉络缺失')
  }
  if (!report.ok) r.reportP0.push('(研报文件缺失)')
  else {
    r.reportLen = cc(report.text)
    for (const s of REPORT_SECTIONS) if (!s.re.test(report.text)) r.reportP0.push(s.label)
    for (const v of VIEWS) {
      const b = sectionBody(report.text, v.re)
      if (!b || cc(b) < 8) r.emptyView.push(v.label)
    }
    const sec6 = sectionBody(report.text, /##\s*六[、.．]/)
    r.has306090 =
      /30[\s\S]{0,260}60[\s\S]{0,260}90/.test(sec6) || /30\s*[\/／]\s*60\s*[\/／]\s*90/.test(report.text)
    if (!r.has306090) r.reportP0.push('30/60/90缺失')
    if (r.reportLen < 2000) r.reportP0.push(`篇幅<2000(${r.reportLen})`)
    for (const re of BANNED_HARD) {
      const n = (report.text.match(re) || []).length + (note.text.match(re) || []).length
      if (n > 0) r.bannedHard.push(`行动作业×${n}`)
    }
    const cs = (report.text.match(COURSE_SITE) || []).length + (note.text.match(COURSE_SITE) || []).length
    if (cs > 0) r.courseSite.push(`站点课程话术×${cs}`)
  }
  results.push(r)
}

function grade(r) {
  if (r.noteP0.length || r.reportP0.length || r.emptyView.length || r.bannedHard.length)
    return {
      level: 'P0',
      reasons: [
        ...r.noteP0, ...r.reportP0,
        ...(r.emptyView.length ? [`空心视角(${r.emptyView.join('/')})`] : []),
        ...r.bannedHard
      ]
    }
  if (r.courseSite.length) return { level: 'P1', reasons: r.courseSite }
  if (r.noteSoft.length) return { level: 'SOFT', reasons: r.noteSoft }
  return { level: 'PASS', reasons: [] }
}
for (const r of results) {
  const g = grade(r)
  r.level = g.level
  r.reasons = g.reasons
}

const byLevel = { P0: [], P1: [], SOFT: [], PASS: [] }
for (const r of results) byLevel[r.level].push(r)
const notePass = results.filter((r) => r.noteP0.length === 0).length
const reportPass = results.filter(
  (r) => r.reportP0.length === 0 && r.emptyView.length === 0 && r.bannedHard.length === 0
).length

const summary = {
  total: results.length, notePass, reportPass,
  P0: byLevel.P0.length, P1: byLevel.P1.length, SOFT: byLevel.SOFT.length, PASS: byLevel.PASS.length
}

let md = `# 知行商学 · 笔记/研报达标审计\n\n`
md += `> 生成时间: ${new Date().toISOString().slice(0, 10)}  \n`
md += `> 标准: 笔记(为什么读+分章/译本对照+一句话带走+≥1500; 译本<1500作软项) / 研报(8节+三视角非空+30/60/90+≥2000) / 禁用词仅限站点自称课程话术与「行动作业」\n\n`
md += `## 总览\n- 书目: **${results.length}**\n- 笔记达标: **${notePass}/${results.length}**\n- 研报达标: **${reportPass}/${results.length}**\n- 等级: P0=${byLevel.P0.length}  P1=${byLevel.P1.length}  SOFT=${byLevel.SOFT.length}  PASS=${byLevel.PASS.length}\n\n`
for (const lv of ['P0', 'P1', 'SOFT', 'PASS']) {
  md += `## ${lv} — ${byLevel[lv].length} 本\n`
  if (lv === 'PASS') md += byLevel[lv].map((r) => '`' + r.id + '`').join('  ') + '\n'
  else for (const r of byLevel[lv]) md += `- \`${r.id}\` — ${r.reasons.join('; ')}\n`
  md += '\n'
}
writeFileSync(OUT, md)

console.log(JSON.stringify(summary))
console.log('--- P0 ---'); console.log(byLevel.P0.map((r) => `${r.id}: ${r.reasons.join('; ')}`).join('\n') || '(none)')
console.log('--- P1 ---'); console.log(byLevel.P1.map((r) => `${r.id}: ${r.reasons.join('; ')}`).join('\n') || '(none)')
console.log('--- SOFT ---'); console.log(byLevel.SOFT.map((r) => `${r.id}: ${r.reasons.join('; ')}`).join('\n') || '(none)')
console.log(`\n报告已写入: ${OUT}`)

// 以退出码反馈回归状态: 有 P0 视为不通过
process.exit(byLevel.P0.length > 0 ? 1 : 0)

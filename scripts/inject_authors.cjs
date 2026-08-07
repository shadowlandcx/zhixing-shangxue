// 注入 33 本「待补」作者。高置信直接填；中置信(rc06/rc15)填最可能作者；
// 暂不可考(rc13/rc14/rc46)保留"待补（作者待核实）"，不编造。
const fs = require('fs')
const path = 'src/data/books-meta.js'
let src = fs.readFileSync(path, 'utf8')

const map = {
  // 销售赛道
  rc03: '[美]汤姆·麦克马金 / 雅各布·帕克斯 著 / 欧阳小珍等 译',
  rc05: '代爱军',
  rc06: '[美]博恩·崔西 著 / 赵倩 译',                 // 中置信，待你核对版本
  rc07: '付遥',
  rc08: '[美]马克·罗伯格 著 / 高成资本 译',
  rc09: '[美]邓·皮泊斯 / 马沙·容格斯 著 / 郑志凌等 译',
  rc10: '张烈生',
  rc11: '[美]基思·罗森 著 / 张瀚文 译',
  rc12: '孙宏伟',
  rc13: '迈克·温伯格（Mike Weinberg）',               // 用户确认
  rc14: '贾斯汀·迈克尔（Justin Michael）、托尼·J·休斯（Tony J. Hughes）', // 用户确认
  rc15: 'Jobber & Lancaster《Selling and Sales Management》第10版 / 李先国 译', // 用户确认
  rc16: '沈阿强 / 陈洁 / 秦娟',
  rc17: '[美]赫伯·戈瑞伯格 等 著 / 曹淮扬等 译',
  rc21: '[美]杰森·乔丹 / 米歇尔·法森那 著 / 毛雪梅 译',
  rc22: '[英]彼得·菲斯克 著 / 杨瑛 译',
  // 营销赛道
  rc24: '[美]伯特·罗森布洛姆 著 / 宋华等 译',
  rc27: '[美]乔恩·皮科特 著 / 马俊斌 译',
  // 团队赛道
  rc29: '代莹莹',
  rc33: '杨鸣',
  rc38: '[美]辛迪·戴尔 著 / 镜如 译',
  rc40: '[以]尤里·莱文 著 / 桂曙光等 译',
  rc41: '杨勇',
  rc42: '况阳',
  rc44: '张烈生',
  rc45: '王育琨',
  rc46: '待补（作者待核实）',                          // 暂不可考
  rc48: '董小英 / 周佳利 / 余艳',
  rc49: '陶鑫亚 / 高燕',
  rc52: '[日]山田英夫 著 / 范婷婷 译',
  rc53: '[美]帕特里克·兰西奥尼 著 / 林屾 译',
  rc55: '[美]丹·沙利文 / 本杰明·哈迪 著 / 白瑞霞 译',
  rc56: '赵国军'
}

let done = 0, skip = 0
for (const [id, author] of Object.entries(map)) {
  const idMarker = `"id": "${id}",`
  const idx = src.indexOf(idMarker)
  if (idx === -1) { console.log('✗ 未找到', id); continue }
  const oldStr = `"author": "待补",`
  const aIdx = src.indexOf(oldStr, idx)
  if (aIdx === -1) { console.log('· 非待补，跳过', id); skip++; continue }
  const repl = `"author": ${JSON.stringify(author)},`
  src = src.slice(0, aIdx) + repl + src.slice(aIdx + oldStr.length)
  done++
}
fs.writeFileSync(path, src)
console.log(`\n完成：填入 ${done} 本，跳过(非待补) ${skip} 本，合计处理 ${Object.keys(map).length} 本。`)

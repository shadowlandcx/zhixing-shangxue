// 验收闸门：直接读磁盘上的 notes/*.js，抽取 note 模板字符串，统计字符数
// 用法: node scripts/verify_notes.cjs
// 退出码: 0=全部达标(>=6000字) 1=有未达标
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "src", "data", "notes");
const MIN = 6000;

const files = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith(".js"))
  .sort();

let fails = [];
let lens = [];
for (const f of files) {
  const raw = fs.readFileSync(path.join(dir, f), "utf8");
  const m = raw.match(/export const note = `([\s\S]*)`;?\s*$/);
  const content = m ? m[1] : raw;
  const len = content.length;
  lens.push(len);
  if (len < MIN) fails.push([f, len]);
}

const min = Math.min(...lens);
const max = Math.max(...lens);
const avg = Math.round(lens.reduce((a, b) => a + b, 0) / lens.length);

console.log(`NOTES 文件数: ${files.length}`);
console.log(`字符数 min/max/avg: ${min} / ${max} / ${avg}`);
console.log(`达标(>=${MIN})本数: ${files.length - fails.length} / ${files.length}`);
if (fails.length) {
  console.log("未达标:");
  for (const [f, len] of fails) console.log(`  ${f}: ${len}`);
}
process.exit(fails.length ? 1 : 0);

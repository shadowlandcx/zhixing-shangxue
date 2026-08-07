// 模板下载工具：Excel（动态加载 xlsx，不进主包）+ PDF（新窗口打印，中文原生渲染）。
// 两份格式共用模板的 rows 二维数组，保证完全一致。
// exampleRows：模板中已被预填为「标杆示例」的行下标（含表头，1 起）；下载时高亮这些行并附图例。

const LEGEND = '💡 表中高亮行为标杆示例填法，可照此填写，或清空后自填。'

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function isExampleRow(tpl, sheetIdx) {
  return Array.isArray(tpl.exampleRows) && tpl.exampleRows.includes(sheetIdx)
}

// Excel：动态 import xlsx，生成 .xlsx 并触发下载
export async function downloadExcel(tpl) {
  const XLSX = await import('xlsx')
  const wb = XLSX.utils.book_new()
  const sheetName = (tpl.title || '模板').slice(0, 28)
  const ws = XLSX.utils.aoa_to_sheet(tpl.rows)
  // 列宽适中，便于打印与填写
  ws['!cols'] = tpl.rows[0].map(() => ({ wch: 24 }))
  // 高亮示例行（用户列已预填标杆数据）
  if (Array.isArray(tpl.exampleRows) && tpl.exampleRows.length) {
    const fill = { fgColor: { rgb: 'FFF3D6' } }
    tpl.exampleRows.forEach((idx) => {
      for (let c = 0; c < tpl.rows[0].length; c++) {
        const ref = XLSX.utils.encode_cell({ r: idx, c })
        if (!ws[ref]) ws[ref] = { t: 's', v: '' }
        ws[ref].s = { fill: { patternType: 'solid', fgColor: fill.fgColor } }
      }
    })
    // 底部追加图例行并合并
    const legendRow = tpl.rows.length + 2
    const lastCol = tpl.rows[0].length - 1
    ws['A' + legendRow] = { t: 's', v: LEGEND }
    ws['!merges'] = [{ s: { r: legendRow - 1, c: 0 }, e: { r: legendRow - 1, c: lastCol } }]
    if (!ws['!rows']) ws['!rows'] = []
    ws['!rows'][legendRow - 1] = { hpt: 28 }
  }
  XLSX.utils.book_append_sheet(wb, ws, sheetName)
  XLSX.writeFile(wb, `${tpl.title}.xlsx`)
}

// PDF：新窗口写入样式化 HTML 并调起打印（浏览器「另存为 PDF」原生支持中文）
export function downloadPdf(tpl, bookTitle) {
  const w = window.open('', '_blank')
  if (!w) {
    alert('请允许浏览器弹出窗口，以生成 PDF。')
    return
  }
  const head = tpl.rows[0]
  const body = tpl.rows.slice(1)
  const thead = head.map((h) => `<th>${escapeHtml(h)}</th>`).join('')
  const tbody = body
    .map((r, i) => {
      const ex = isExampleRow(tpl, i + 1) ? ' class="ex"' : ''
      return `<tr${ex}>${r.map((c) => `<td>${escapeHtml(c)}</td>`).join('')}</tr>`
    })
    .join('')
  const notes = tpl.notes
    ? `<div class="notes"><strong>使用说明：</strong>${escapeHtml(tpl.notes)}</div>`
    : ''
  const legend =
    Array.isArray(tpl.exampleRows) && tpl.exampleRows.length
      ? `<div class="legend">${escapeHtml(LEGEND)}</div>`
      : ''
  const sub = bookTitle ? `出自《${escapeHtml(bookTitle)}》研读` : ''
  w.document.write(`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><title>${escapeHtml(tpl.title)}</title>
<style>
  body{font-family:-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif;color:#1A2B45;padding:32px;max-width:920px;margin:auto}
  h1{font-size:22px;margin:0 0 4px}
  .sub{color:#888;font-size:13px;margin-bottom:16px}
  .notes{background:#f7f4ec;border-left:4px solid #d4a13c;padding:10px 14px;font-size:13px;line-height:1.7;margin-bottom:18px}
  .legend{background:#fff3d6;border:1px solid #e8c977;border-radius:6px;padding:8px 12px;font-size:12px;color:#8a6d1f;margin-bottom:14px}
  table{border-collapse:collapse;width:100%;font-size:13px}
  th,td{border:1px solid #d8d8d8;padding:8px 10px;text-align:left;vertical-align:top}
  th{background:#1A2B45;color:#fff}
  tr:nth-child(even) td{background:#fafafa}
  tr.ex td{background:#fff3d6}
  .ft{margin-top:20px;color:#aaa;font-size:11px}
  @media print{body{padding:0}}
</style></head><body>
  <h1>${escapeHtml(tpl.title)}</h1>
  <div class="sub">知行商学 · 可落地模板 · ${sub}</div>
  ${notes}
  ${legend}
  <table><thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody></table>
  <div class="ft">本模板由「知行商学」生成，供学习演练使用。</div>
  <script>window.onload=function(){window.print();}<\/script>
</body></html>`)
  w.document.close()
}

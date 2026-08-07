// 书籍分享工具：兼容微信 / 飞书的前端分享方案
// 静态站点（GitHub Pages）无后端，采用三层兜底：
//   1) 系统分享 API（移动端浏览器/微信/飞书内可直接唤起分享面板）
//   2) 复制链接（clipboard，带 execCommand 兜底）
//   3) 二维码图片（扫码进微信/飞书后转发）

export function bookShareUrl(id) {
  const base =
    typeof location !== 'undefined' ? location.origin + location.pathname : ''
  return `${base}#/book/${id}`
}

export function canNativeShare() {
  return typeof navigator !== 'undefined' && typeof navigator.share === 'function'
}

export async function nativeShare({ title, text, url }) {
  if (!canNativeShare()) return false
  try {
    await navigator.share({ title, text, url })
    return true
  } catch (e) {
    // 用户取消或不支持：静默返回，不报错
    return false
  }
}

export async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch (e) {
    /* 落到兜底方案 */
  }
  try {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(ta)
    return ok
  } catch (e) {
    return false
  }
}

// 二维码图片地址（第三方服务，运行时生成；加载失败不影响复制链接）
export function qrImageUrl(text, size = 200) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&margin=8&data=${encodeURIComponent(
    text
  )}`
}

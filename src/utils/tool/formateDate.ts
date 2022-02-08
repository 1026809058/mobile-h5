// 来获取当前时间戳
function now() {
  return +new Date()
}

/**
 *日期格式转换(yyyy-MM-dd hh:mm:ss)
 * @param {String} format 时间格式，例如'yyyy-MM-dd'
 * @param {string | Date | number} dates 需要转换的时间
 * @return {string} 转换后的时间
 */
function formatDate(format: string, dates: string | Date | number) {
  let date
  dates instanceof Date ? (date = dates) : (date = new Date(dates))
  let o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds() //秒
  }
  if (/(y+)/.test(format as string)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return format
}

export { formatDate, now }

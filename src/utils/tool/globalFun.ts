import type { App } from 'vue' //导入类型

/**
 * 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 *
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，是否立即调用函数
 * @return {function}             返回客户调用函数
 */

function debounce(func: Function, wait: number = 500, immediate: boolean = true) {
  let timer
  let context, args
  //延迟执行函数
  const later = () =>
    //延迟函数执行完，清空定时器
    setTimeout(() => {
      timer = null
      if (!immediate) {
        func.apply(context, args)
        context = args = null
      }
    }, wait)

  return function (...params) {
    if (!timer) {
      timer = later()
      if (immediate) {
        func.apply(this, params)
      } else {
        context = this
        args = params
      }
    } else {
      //重新计算时间
      clearTimeout(timer)
      timer = later()
    }
  }
}

/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
function throttle(func: Function, wait: number = 1000, type: number = 1) {
  if (type === 1) {
    var previous = 0
  } else if (type === 2) {
    var timeout
  }
  return function () {
    let context = this
    let args = arguments
    if (type === 1) {
      let now = Date.now()
      if (now - previous > wait) {
        func.apply(context, args)
        previous = now
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null
          func.apply(context, args)
        }, wait)
      }
    }
  }
}

export default function globalFun(app: App<Element>) {
  app.config.globalProperties.$debounce = debounce
  app.config.globalProperties.$throttle = throttle
}

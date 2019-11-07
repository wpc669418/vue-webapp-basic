import { storage } from './storage'
import { vantInit } from './vant-u'
import { utils } from './index'

const init = {
  install: (Vue) => {
    // 生产环境下阻止 vue 在启动时生成生产提示
    if (process.env.NODE_ENV === 'production') Vue.config.productionTip = false
    // 挂在vant
    vantInit(Vue)
    // 缓存系统 localstorage
    Vue.prototype.$storage = storage
    // 挂载工具类
    Vue.prototype.$utils = utils
  }
}

export { init }

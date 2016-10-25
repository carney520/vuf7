import Vue from 'vue'

if (process.env.NODE_ENV !== 'production') {
  Vue.config.debug = true
  Vue.config.devtools = true
} else {
  Vue.config.debug = false
  Vue.config.devtools = false
}

import router from './routes'
import App from './app'
import Vuf7 from '../src'

Vue.use(Vuf7, {
  confirmText: '确定',
  closeText: '关闭',
  doneText: '完成',
  cancelText: '取消',
  searchText: '搜索',
  backText: '返回',
  monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  monthNamesShort: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
})

router.start(App, '#app')
window.Vue = Vue

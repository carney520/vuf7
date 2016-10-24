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

Vue.use(Vuf7)

router.start(App, '#app')
window.Vue = Vue

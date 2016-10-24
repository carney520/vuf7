import installPatchs from './f7-patch'
import installRouter from './f7-router'
import installMixins from './f7-mixins'

const compatibleVersion = /^1\.4/
let _Vue

/**
 * @param {Object} options - initialize options
 *   The extended options
 *     target {String} run platform, 'android' and 'ios' supported
 *     cancelText {String} ['Cacel']
 *     searchText {String} ['Search']
 */
export default {
  install (Vue, options = {}) {
    if (_Vue) {
      console.warn('Vuef already installed.')
      return
    }

    _Vue = Vue

    const F7 = window.Framework7
    const Swiper = window.Swiper
    const Dom7 = window.Dom7

    if (!F7) {
      throw new Error('Framework7 not found')
    }

    const target = options.target || (F7.prototype.device.android ? 'android' : 'ios')

    options = {
      ...{
        androidStyles: [
          'css/framework7.android.min.css',
          'css/framework7.android.colors.min.css'
        ],
        iosStyles: [
          'css/framework7.ios.min.css',
          'css/framework7.ios.colors.min.css'
        ],
        initPageOnSetup: false,
        material: target === 'android',
        swipePanel: 'left',
        // enable image or background lazy load
        lazyload: true,
        imagesLazyLoadSequential: false
      },
      ...options,
      target,
      // disable cache, because we don't use F7 router to loader HTML content
      cache: false,
      // disable router
      router: false,
      // disable swipeBackPage. swipeBackPage haven't be supported so far
      swipeBackPage: false,
      smartSelectSearchbar: true,
      // lazy init
      init: false
    }

    Vue.F7 = F7
    Vue.$$ = Vue.Dom7 = Dom7
    Vue.Swiper = Swiper

    let app = (Vue.app = new F7(options))
    checkF7Compatibility(app)
    installDependency(Vue, app, Dom7, options)
    installRouter(Vue, app, Dom7, options)
    installPatchs(Vue, app, Dom7, options)
    installMixins(Vue, app, Dom7, options)

    // initial APP
    app.init()
  }
}

function installDependency (Vue, app, $, options) {
  let {target, androidStyles, iosStyles} = options
  let styles = target === 'android' ? androidStyles : iosStyles
  let stylesheets = styles.map(value => `<link rel="stylesheet" href="${value}">`).join('')
  $('head').append(stylesheets)
}

function checkF7Compatibility (app) {
  if (!compatibleVersion.test(app.version)) {
    throw new Error('Current Version Vuf7 only compatible with Framework7 1.4.*.')
  }
}


import installPatchs from './f7-patch'
import installRouter from './f7-router'
import installMixins from './f7-mixins'
import installRouterTransition from './f7-transition'

const compatibleVersion = /^1\.(4|5)/
let _Vue

const copywritings = {
  confirmText: 'OK',
  closeText: 'Close',
  doneText: 'Done',
  cancelText: 'Cancel',
  searchText: 'Search',
  backText: 'Back',
  loadingText: 'Loading...',
  usernameText: 'Username',
  passwordText: 'Password',
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
}

function getCopyright (name, options) {
  let copywriting = options[name] || copywritings[name]
  return typeof copywriting === 'function' ? copywriting() : copywriting
}

/**
 * @param {Object} options - initialize options
 *   The extended options
 *     target {String} run platform, 'android' and 'ios' supported
 *     // copywriting. value can be function that return required type data
 *     confirmText {String} ['Ok']
 *     closeText   {String} ['Close']
 *     doneText    {String} ['Done']
 *     cancelText {String} ['Cancel']
 *     searchText {String} ['Search']
 *     backText   {String} ['Back']
 *     monthNames {Array<String>}   ['January', 'February', ...'November', 'December']
 *     monthNamesShort {Array<String>} ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'...]
 *     dayNames {Array<String>} ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
 *     dayNamesShort {Array}  ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
 */
export default {
  install (Vue, VueRouter, options = {}) {
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
      /* default options can be override */
      ...{
        androidStyles: [
          'css/framework7.material.min.css',
          'css/framework7.material.colors.min.css'
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
        imagesLazyLoadSequential: false,
        // copywriting
        ...copywritings
      },
      /* custom options */
      ...options,
      // modal copywriting
      modalButtonOk: options.modalButtonOk || getCopyright('confirmText', options),
      modalButtonCancel: options.modalButtonCancel || getCopyright('cancelText', options),
      modalPreloaderTitle: options.modalPreloaderTitle || getCopyright('loadingText', options),
      modalUsernamePlaceholder: options.modalUsernamePlaceholder || getCopyright('usernameText', options),
      modalPasswordPlaceholder: options.modalPasswordPlaceholder || getCopyright('passwordText', options),
      notificationCloseButtonText: options.notificationCloseButtonText || getCopyright('closeText', options),
      /* default can't be override */
      target,
      // disable cache, because we don't use F7 router to loader HTML content
      cache: false,
      // disable router
      router: true,
      // disable swipeBackPage. swipeBackPage haven't be supported so far
      swipeBackPage: false,
      smartSelectSearchbar: true,
      pushState: false,
      template7Pages: false,
      // lazy init
      init: false
    }

    Vue.F7 = F7
    Vue.$$ = Vue.Dom7 = Dom7
    Vue.Swiper = Swiper

    let app = (Vue.app = new F7(options))
    checkF7Compatibility(app)
    installRouterTransition(Vue, VueRouter, options)
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
  $('head').prepend(stylesheets)
  $('html').addClass('f7-' + target)
}

function checkF7Compatibility (app) {
  if (!compatibleVersion.test(app.version)) {
    throw new Error('Current Version Vuf7 only compatible with Framework7 1.(4|5).*.')
  }
}

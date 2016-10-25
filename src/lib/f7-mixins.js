export default function installMixins (Vue, app, $, options) {
  let p = Vue.prototype
  p.$android = app.device.android
  p.$ios = app.device.ios
  p.$app = app
  p.$$ = $

  // get localization copywriting
  p.$copywriting = function (name) {
    if (name in options) {
      let value = options[name]
      return typeof value === 'function' ? value() : value
    }
  }

  p.$getSlot = function (name) {
    return this._slotContents && this._slotContents[name]
  }

  p.$getPageContainer = function (el) {
    return $(el).parents('.' + app.params.viewClass)[0]
  }

  function makeProxy (name) {
    let alias, orgName
    if (typeof name === 'string') alias = orgName = name
    else [ alias, orgName ] = name

    p[`$${alias}`] = function (...args) {
      return app[orgName](...args)
    }
  }

  [
    //  pullToRefresh & infiniteScroll
    'pullToRefreshDone',
    'pullToRefreshTrigger',
    'initPullToRefresh',
    'destroyPullToRefresh',
    'attachInfiniteScroll',
    'detachInfiniteScroll',
    //  navbar
    'hideNavbar',
    'showNavbar',
    //  toolbar
    'showToolbar',
    'hideToolbar',
    //  panel
    'openPanel',
    'closePanel',
    //  tabs
    'showTab',
    //  modal
    'alert',
    'confirm',
    'prompt',
    'modalLogin',
    'modalPassword',
    'showPreloader',
    'hidePreloader',
    'showIndicator',
    'hideIndicator',
    'modal',
    'closeModal',
    //  action-sheet
    'actions',
    ['closeActions', 'closeModal'],
    //  popup
    'popup',
    ['closePopup', 'closeModal'],
    //  popover
    'popover',
    ['closePopover', 'closeModal'],
    //  picker-modal
    'pickerModal',
    ['closePickerModal', 'closeModal'],
    // photo-browser
    'photoBrowser',
    //  notification
    'addNotification',
    'closeNotification',
    //  sortable
    'sortableOpen',
    'sortableClose',
    'sortableToggle',
    //  autocomplete
    'autocomplete',
    //  picker
    'picker',
    'calendar',
    ['datepicker', 'calendar']
  ].forEach((name) => {
    makeProxy(name)
  })
}

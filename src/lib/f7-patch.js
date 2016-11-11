/**
 * framework monkey patch
 */

import Icons from '../components/icon/manifest.json'

/**
 * allowed destroy panels
 * @param  {[type]} app - F7 instance
 * @param  {[type]} $   - Dom7
 */
function patchPanel (app, $) {
  const origin = app.initSwipePanels

  let touchEvents = []

  function patchInitSwipePanel () {
    if (touchEvents.length) app.destroySwipePanels()

    // hack $.on() method
    const orgOn = $.fn.on
    $.fn.on = function () {
      touchEvents.push(arguments)
      orgOn.apply(this, arguments)
    }

    origin.apply(app, arguments)

    $.fn.on = orgOn
  }

  app.initSwipePanels = patchInitSwipePanel

  // unbind touch event
  app.destroySwipePanels = function () {
    let $doc = $(document)
    for (let i = 0, l = touchEvents.length; i < l; i++) {
      $doc.off.apply($doc, touchEvents[i])
    }

    touchEvents = []
  }
}

/**
 * disable auto init resizeable textarea
 */
function patchResizableTextarea (app, $) {
  // disable init resizable textarea
  app.initPageResizableTextarea = () => {}
}

function patchPage (app, $, options) {
  let orgInitPage = app.initPageWithCallback

  // disable init page on app init
  app.initPageWithCallback = function () {
    if (!options.initPageOnSetup) {
      app.initPageWithCallback = orgInitPage
      return
    }

    orgInitPage.apply(app, arguments)
  }
}

function patchToast (app, $, options) {
  const icons = {
    warning: Icons['ios-alert-outline'],
    success: Icons['ios-checkmark-circle-outline'],
    error: Icons['ios-close-circle-outline']
  }

  app.showToast = function (type = 'warning', text, duration) {
    if ($('.preloader-indicator-overlay').length > 0) return
    let toast = $(`
      <div class="f7-toast">` +
      (type in icons
       ? `<div class="f7-toast-icon">
            <svg viewBox="0 0 ${icons[type].width} ${icons[type].height}">
              <path d="${icons[type].d}">
            </svg>
          </div>
         `
       : '') +
      `  <span class="f7-toast-title">${text}</span>
      </div>`)
    .appendTo('body')

    $('html').on('click', () => {
      toast.remove()
    })

    if (duration) {
      setTimeout(() => toast.remove(), duration)
    }
  }

  app.hideToast = function () {
    $('.preloader-indicator-overlay, .f7-toast').remove()
  }
}

export default function installPatchs (Vue, app, $, options) {
  patchPage(app, $, options)
  patchPanel(app, $)
  patchResizableTextarea(app, $)
  patchToast(app, $)
}

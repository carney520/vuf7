/**
 * framework monkey patch
 */

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
    console.log('init page')
    if (!options.initPageOnSetup) return
    console.log('inited page')
    orgInitPage.apply(app, arguments)
  }
}

export default function installPatchs (Vue, app, $, options) {
  patchPage(app, $, options)
  patchPanel(app, $)
  patchResizableTextarea(app, $)

  app.onPageInit('*', function (page) {
    console.log('init', page)
  })

  app.onPageBeforeRemove('*', function (page) {
    console.log('remove', page)
  })
}

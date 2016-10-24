export default function installRouter (Vue, app, $, options) {
  $(document).on('click', '[f7-back], .f7-back', function () {
    window.history.go(-1)
  })
  .on('click', '[f7-forward], .f7-forward', function () {
    window.history.go(1)
  })
  .on('click', 'a[href^="#"]', function (event) {
    // omit vue-router
    if (/^#!/.test(event.target.hash)) return
    // else prevent default
    event.preventDefault()
  })
  .on('click', 'a.back', function () {
    let currentView = app.getCurrentView()
    if (currentView) currentView.back()
  })
}

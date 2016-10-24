<template lang="jade">
div
  f7-view
    f7-page(name="tabs", navbar-type="fixed", toolbar-type="fixed", with-subnavbar)
      f7-navbar
        span(f7-back, slot="left") back
        span(slot="center") Swipable tabs
        f7-buttons-row(slot="subnavbar")
          f7-button.tab-link.active(href="#tab1") Tab1
          f7-button.tab-link(href="#tab2") Tab2
          f7-button.tab-link(href="#tab3") Tab3

      f7-tabs(swipeable)
        f7-tab#tab1.active
          f7-page-content
            f7-content-block
              p This is Tab1
        f7-tab#tab2
          f7-page-content
            f7-content-block
              p This is Tab2
        f7-tab#tab3
          f7-page-content
            f7-content-block
              p This is Tab3
</template>
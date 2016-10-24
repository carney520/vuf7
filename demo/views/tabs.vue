<template lang="jade">
div
  f7-view
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed", transition="fade")
      f7-navbar
        span(f7-back, slot="left") back
        span(slot="center") List
      f7-page-content
        f7-content-block
          f7-buttons-row
            f7-button.tab-link.active(href="#tab1") Tab1
            f7-button.tab-link(href="#tab2") Tab2
            f7-button.tab-link(href="#tab3") Tab3
        f7-tabs(animate)
          f7-tab#tab1.active
            f7-content-block
              p This is Tab1
          f7-tab#tab2
            f7-content-block
              p This is Tab2
          f7-tab#tab3
            f7-content-block
              p This is Tab3
        f7-content-block
          p
            a(v-link="{name: 'tabs-swipeable'}") swipeable tabs
</template>
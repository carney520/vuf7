<template lang="jade">
div
  f7-page(name="navbar", navbar-type="fixed", transition="fade", with-subnavbar)
    f7-navbar(v-ref:navbar)
      span(slot="left", f7-back) back
      span(slot="center") static
      span(slot="right") right
      .buttons-row
        a.button.active(href="#") Tab1
        a.button(href="#") Tab2
        a.button(href="#") Tab3

    f7-page-content
      h1 subnavbar
</template>
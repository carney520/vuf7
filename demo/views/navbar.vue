<template lang="jade">
div
  f7-page(name="navbar", navbar-type="fixed", transition="fade")
    f7-navbar
      span(slot="left", f7-back) left
      span(slot="center") center
      span(slot="right") right
    .page-content
      code.
        f7-page(name="navbar")
          f7-navbar
            span(slot="left") left
            span(slot="center") center
            span(slot="right") right
      ul
        li
          a(v-link="{name: 'navbar-static'}") 静态布局
        li
          a(v-link="{name: 'navbar-fixed'}") fixed 布局
        li
          a(v-link="{name: 'navbar-method'}") navbar 操作
        li
          a(v-link="{name: 'navbar-subnavbar'}") subnavbar
</template>
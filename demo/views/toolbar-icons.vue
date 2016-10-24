<template lang="jade">
div
  f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed")
    f7-navbar
      span(slot="left", f7-back) back
      span(slot="center") Toolbar
      span(slot="right") 
    f7-page-content
      code.
        f7-page
          f7-page-content
          f7-toolbar(v-ref:toolbar)
            a.active(href="#") 
            a(href="#") Link2
            a(href="#") Link2

    f7-toolbar(v-ref:toolbar).tabbar.tabbar-labels
      a.active.tab-link(href="#") 
        i.icon.icon-test
          span.badge.bg-red 5
        .tabbar-label One
      a.tab-link(href="#") 
        i.icon.icon-test
        .tabbar-label Two
      a.tab-link(href="#") 
        i.icon.icon-test
        .tabbar-label Three
</template>

<style lang="scss">
  .icon-test {
    width: 30px;
    height: 30px;
    background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 30 30' fill='%23007aff'><path d='M15,2.6C8.1,2.6,2.5,8.2,2.5,15.1C2.5,22,8.1,27.6,15,27.6S27.5,22,27.5,15.1C27.5,8.2,21.9,2.6,15,2.6z M15,7.6 c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5C13.5,8.3,14.2,7.6,15,7.6z M17.5,21.6h-4v-1h1v-8h-1v-1h3V12 v0.6v8h1V21.6z'/></svg>");
  }
</style>
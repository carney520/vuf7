<template lang="jade">
div
  f7-page(name="navbar", navbar-type="fixed", transition="fade")
    f7-navbar(v-ref:navbar)
      span(slot="left", f7-back) back
      span(slot="center") static
      span(slot="right") right
    f7-page-content
      button(@click="$refs.navbar.hide") 关闭
      button(@click="$refs.navbar.show") 显示
</template>
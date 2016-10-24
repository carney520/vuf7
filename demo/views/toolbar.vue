<template lang="jade">
div
  f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed", transition="fade")
    f7-navbar
      span(slot="left", f7-back) left
      span(slot="center") center
      span(slot="right") right
    f7-page-content
      code.
        f7-page
          f7-page-content
          f7-toolbar(v-ref:toolbar)
            a(href="#") Link1
            a(href="#") Link2
            a(href="#") Link2
      ul
        li
          a(v-link="{name: 'toolbar-icons'}") 标签栏
      p
        button(@click="show") 显示
        button(@click="hide") 隐藏

    f7-toolbar(v-ref:toolbar)
      a(href="#") Link1
      a(href="#") Link2
      a(href="#") Link2
</template>

<script>
  export default {
    methods: {
      show () {
        this.$refs.toolbar.show()
      },

      hide () {
        this.$refs.toolbar.hide()
      },
    },
  }
</script>
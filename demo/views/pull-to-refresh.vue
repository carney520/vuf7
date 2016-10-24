<template lang="jade">
div
  f7-view
    f7-navbar
      span(f7-back, slot="left") back
      span(slot="center") Pull-to-refresh
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed")
      f7-page-content(v-ref:content, pull-to-refresh, @refresh="refresh")
        f7-list-block
          f7-list-item
            f7-list-content(title="ITEM 1")
          f7-list-item
            f7-list-content(title="ITEM 2")
          f7-list-item
            f7-list-content(title="ITEM 3")
          f7-list-item
            f7-list-content(title="ITEM 4")
</template>

<script>
  export default {
    methods: {
      refresh () {
        setTimeout(() => {
          this.$refs.content.pullToRefreshDone()
        }, 3000)
      },
    },
  }
</script>
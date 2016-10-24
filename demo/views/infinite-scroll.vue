<template lang="jade">
div
  f7-view
    f7-navbar
      span(f7-back, slot="left") back
      span(slot="center") Infinite Scroll
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed")
      f7-page-content(v-ref:content, infinite-scroll, @infinite="infinite")
        f7-list-block
          f7-list-item
            f7-list-content(title="ITEM 1")
          f7-list-item
            f7-list-content(title="ITEM 2")
          f7-list-item
            f7-list-content(title="ITEM 3")
          f7-list-item
            f7-list-content(title="ITEM 4")
          f7-list-item
            f7-list-content(title="ITEM 1")
          f7-list-item
            f7-list-content(title="ITEM 2")
          f7-list-item
            f7-list-content(title="ITEM 3")
          f7-list-item
            f7-list-content(title="ITEM 4")
          f7-list-item
            f7-list-content(title="ITEM 1")
          f7-list-item
            f7-list-content(title="ITEM 2")
          f7-list-item
            f7-list-content(title="ITEM 3")
          f7-list-item
            f7-list-content(title="ITEM 4")
        .infinite-scroll-preloader(v-show="loading")
          f7-preloader
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
      }
    },
    methods: {
      infinite () {
        if (this.loading) return 
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 3000)
      },
    },
  }
</script>

<style>
  .infinite-scroll-preloader {
    text-align: center;
  }
</style>
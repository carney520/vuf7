<template lang="jade">
div
  f7-view
    f7-navbar
      span(f7-back, slot="left") back
      span(slot="center") Form Layout
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed", transition="fade")
      f7-page-content
        f7-content-block(title="SIMPLE")
          f7-button(@click="showPhotoBrowser") show
</template>

<script>
  export default {
    methods: {
      showPhotoBrowser () {
        this.myPhotoBrowser.open()
      }
    },

    ready () {
      this.myPhotoBrowser = this.$photoBrowser({
        photos: [
          'http://lorempixel.com/1024/1024/sports/1/',
          'http://lorempixel.com/1024/1024/sports/2/',
          'http://lorempixel.com/1024/1024/sports/3/',
        ]
      })
    },
  }
</script>
<template lang="jade">
div
  f7-panel(v-ref:panel, right-type="cover")
    f7-content-block
      p Left Panel Here
      p
        span(@click="close()") Close me
      p
        span(data-panel="right", class="open-panel") Open Right Panel
    f7-content-block(slot="right")
      p Right Panel Here
      p
        span(class="close-panel") Close me
      p
        span(data-panel="left", class="open-panel") Open left Panel

  f7-view
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed", transition="fade")
      f7-navbar
        span(slot="left", f7-back) back
      f7-page-content
        f7-content-block
          p
            span(@click="open") open Left Panel
          p
            span.open-panel(data-panel="right") open Right Panel
</template>

<script>
  export default {
    methods: {
      open (pos) {
        this.$refs.panel.open(pos)
      },

      close () {
        this.$refs.panel.close()
      },
    },
  }
</script>
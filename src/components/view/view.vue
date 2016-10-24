<template lang="jade">
  .views
    .view(v-el:view)
      slot
</template>

<script>
  export default {
    name: 'View',
    props: {
      options: {
        type: Object,
        default: () => ({}),
      },
    },

    ready () {
      // initial view on $el attach to document
      this._view = this.$app.addView(this.$els.view, {
        ...this.options,
        // for smart select
        dynamicNavbar: true,
      })
      console.log('view')
    },

    beforeDestroy () {
      // page remove callback
      // some components depend on 'pageBeforeRemove' event to destroy
      this.$app.pageRemoveCallback(this._view, this.$els.view)
      this.$app.views.splice(this.$app.views.indexOf(this._view), 1)
      this._view.destroy()
      console.log('remove view')
    },
  }
</script>
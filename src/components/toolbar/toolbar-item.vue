<template lang="jade">
  a.link
    slot
    span.tabbar-label(v-if="label") {{ label }}
</template>

<script>
  export default {
    name: 'ToolbarItem',
    props: {
      label: String,
      href: String
    },

    ready () {
      if (this.href) {
        this.$el.setAttribute('href', this.href)
      }
    }
  }
</script>
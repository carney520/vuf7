<template lang="jade">
  .toolbar
    .toolbar-inner
      slot
</template>

<script>
  export default {
    name: 'Toolbar',
    methods: {
      show () {
        this.$showToolbar(this.$el)
      },

      hide () {
        this.$hideToolbar(this.$el)
      },
    },
  }
</script>
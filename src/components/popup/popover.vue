<template lang="jade">
  .popover
    .popover-angle
    .popover-inner
      slot
</template>

<script>
  export default {
    name: 'Popover',
    methods: {
      show (target) {
        this.$popover(this.$el, target)
        this.$emit('show')
      },

      hide () {
        this.$closePopover(this.$el)
        this.$emit('hide')
      }
    }
  }
</script>
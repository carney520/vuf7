<template lang="jade">
  .picker-modal
    slot(name="toolbar")
    .picker-modal-inner
      slot
</template>

<script>
  export default {
    name: 'PickerModal',
    methods: {
      show () {
        this.$pickerModal(this.$el)
        this.$emit('show')
      },

      hide () {
        this.$closePickerModal(this.$el)
        this.$emit('hide')
      }
    }
  }
</script>
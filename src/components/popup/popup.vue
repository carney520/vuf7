<template lang="jade">
  .popup(:class="popupClasses")
    slot
</template>

<script>
  export default {
    name: 'Popup',
    props: {
      size: {
        type: String, 
        validator: (value) => [undefined, 'tablet'].indexOf(value) !== -1
      },
    },

    computed: {
      popupClasses () {
       return {
          'tablet-fullscreen': this.size === 'tablet',
        }
      },
    },

    methods: {
      show () {
        this.$popup(this.$el)
        this.$emit('show')
      },

      hide() {
        this.$closePopup(this.$el)
        this.$emit('hide')
      },
    },
  }
</script>
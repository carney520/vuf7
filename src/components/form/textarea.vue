<template lang="jade">
  textarea(v-model="value", :class="textareaClasses")
</template>

<script> 
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'F7Textarea',
    props: {
      resizable: {
        type: Boolean,
        coerce: coerceBoolean,
      },
      value: {},
    },

    computed: {
      textareaClasses () {
        return {
          'resizable': this.resizable,
        }
      },
    },

    compiled () {
      if (this.resizable) {
        this.$app.resizableTextarea(this.$el)
      }
    },

    beforeDestroy () {
      if (this.resizable) {
        this.$app.destroyResizableTextarea(this.$el)
      }
    },
  }
</script>
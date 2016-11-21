<template lang="jade">
  .f7-textarea
    textarea(v-model="value", :class="textareaClasses", :placeholder="placeholder", :rows="rows", :cols="cols")
    .f7-textarea-counter(v-if="max != null && showCounter") {{ remain }} / {{ max }}
</template>

<script>
  import { coerceBoolean, coerceNumber } from '../../helpers/coerces'

  export default {
    name: 'F7Textarea',
    props: {
      resizable: {
        type: Boolean,
        coerce: coerceBoolean
      },
      value: {
        type: String,
        default: ''
      },
      placeholder: String,
      max: {
        type: Number,
        coerce: coerceNumber
      },
      showCounter: {
        type: Boolean,
        default: true,
        coerce: coerceBoolean
      },
      rows: {
        type: Number,
        coerce: coerceNumber
      },
      cols: {
        type: Number,
        coerce: coerceNumber
      }
    },

    computed: {
      textareaClasses () {
        return {
          'resizable': this.resizable
        }
      },
      remain () {
        if (this.max != null && this.showCounter) {
          return this.max - this.value.length
        }
      }
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
    }
  }
</script>

<style lang="scss">
.f7-textarea-counter {
  text-align: right;
  font-size: .7rem;
  color: gray;
}
</style>
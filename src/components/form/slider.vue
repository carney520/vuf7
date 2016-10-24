<template lang="jade">
 .range-slider
   input(type="range", v-model="value", :min="min", :max="max", :step="step", :disabled="disabled")
</template>

<script>
  import { coerceBoolean, coerceNumber } from '../../helpers/coerces'

  export default {
    name: 'Slider',
    props: {
      value: {},
      min: {
        type: Number,
        coerce: coerceNumber,
      },

      max: {
        type: Number,
        coerce: coerceNumber,
      },

      step: {
        type: Number,
        coerce: coerceNumber,
      },

      disabled: {
        type: Boolean,
        coerce: coerceBoolean,
      },
    },
    methods: {
      handleChange (event) {
        // 注意事件可以冒泡
        this.checked = this.$els.input.checked
      },
    },

    compiled () {
      if (this.checked) {
        this.$els.input.checked = true
      }
    },
  }
</script>
<!-- 事件可以冒泡 -->
<template lang="jade">
  label.label-switch
    input(v-el:input, type="checkbox", v-model="value", @change="handleChange", :disabled="disabled")
    .checkbox
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'Switch',
    props: {
      value: {},
      checked: {
        type: Boolean,
        coerce: coerceBoolean,
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
<template lang="jade">
  .tab(:class="tabClasses", @show="handleShow")
    slot
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'Tab',
    props: {
      active: {
        type: Boolean,
        coerce: coerceBoolean,
      },
    },

    data () {
      return {
        shown: false,
      }
    },

    computed: {
      tabClasses () {
        return {
          'active': this.active,
        }
      },
    },


    methods: {
      handleShow () {
        if (this.shown === false)
          this.shown = true
      },

      show () {
        this.$showTab(this.$el)
      },
    }
  }
</script>
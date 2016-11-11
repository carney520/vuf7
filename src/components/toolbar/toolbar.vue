<template lang="jade">
  .toolbar(:class="toolbarClasses")
    .toolbar-inner
      slot
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'Toolbar',
    props: {
      tabbar: {
        type: Boolean,
        coerce: coerceBoolean
      },
      withLabels: {
        type: Boolean,
        coerce: coerceBoolean
      },
      // material only
      bottom: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },
    computed: {
      toolbarClasses () {
        return {
          'toolbar-bottom': this.bottom,
          'tabbar': this.tabbar,
          'tabbar-labels': this.withLabels
        }
      }
    },
    methods: {
      show () {
        this.$showToolbar(this.$el)
      },

      hide () {
        this.$hideToolbar(this.$el)
      }
    }
  }
</script>
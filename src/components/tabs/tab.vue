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
        coerce: coerceBoolean
      }
    },

    data () {
      return {
        shown: false,
        index: -1
      }
    },

    computed: {
      tabClasses () {
        return {
          'active': this.active
        }
      }
    },

    methods: {
      handleShow () {
        if (this.shown === false) {
          this.shown = true
        }
        this.$parent.index = this.index
      },

      show () {
        this.$showTab(this.$el)
      }
    },

    // 可能是新增的
    ready () {
      if (this.$parent.ready) {
        this.$parent.updateIndex()
      }
    },
    // 可能单独被移除
    beforeDestroy () {
      const $parent = this.$parent
      this.$nextTick(() => {
        $parent.updateIndex()
      })
    }
  }
</script>
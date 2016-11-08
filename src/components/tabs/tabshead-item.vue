<template lang="jade">
  a.f7-tabshead-item(@click="handleClick", :class="itemClasses")
    slot
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'TabsheadItem',
    props: {
      selected: {
        type: Boolean,
        default: false,
        coerce: coerceBoolean
      },
      disabled: {
        type: Boolean,
        default: false,
        coerce: coerceBoolean
      },
      activeClass: {
        type: String,
        default: 'selected'
      },
    },
    data () {
      return {
        index: -1
      }
    },
    computed: {
      itemClasses () {
        return {
          selected: this.selected,
          active: this.selected,
          [this.activeClass]: this.selected
        }
      }
    },
    methods: {
      handleClick () {
        if (!this.disabled) {
          this.$parent.index = this.index
          this.$emit('selected', this)
        }
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
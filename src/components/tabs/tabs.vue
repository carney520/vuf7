<template lang="jade">
  div(:class="{'tabs-animated-wrap': animate, 'tabs-swipeable-wrap': swipeable}")
    .tabs
      slot
</template>

<script>
  import { coerceBoolean, coerceNumber } from '../../helpers/coerces'

  // TODO 优化

  export default {
    name: 'Tabs',
    props: {
      animate: {
        type: Boolean,
        coerce: coerceBoolean
      },
      swipeable: {
        type: Boolean,
        coerce: coerceBoolean
      },
      index: {
        type: Number,
        coerce: coerceNumber,
        default: -1
      }
    },

    data () {
      return {
        length: this.$children.length,
        ready: false
      }
    },

    watch: {
      index (val, old) {
        old > -1 && this.$children[old] && (this.$children[old].active = false)
        val > -1 && this.$children[val] && (this.$children[val].active = true)
      }
    },

    methods: {
      showTab (...args) {
        this.$showTab(...args)
      },
      updateIndex () {
        if (!this.$children) return
        this.length = this.$children.length
        let children = this.$children
        for (let i = 0, l = children.length; i < l; i++) {
          children[i].index = i
          if (children[i].active) {
            this.index = i
          }
        }
      }
    },

    ready () {
      if (this.swipeable) {
        let PageContainer = this.$getPageContainer(this.$el)
        if (PageContainer) {
          //  swipe will destroy when pageContainer's pageBeforeRemove event emit
          this.$app.initPageSwiper(PageContainer)
        }
      }

      this.updateIndex()
      this.ready = true
    }
  }
</script>

<style>
.navbar-fixed .tab .page-content {
  margin-top: -44px;
  height: calc(100% + 44px);
}
</style>
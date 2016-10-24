<template lang="jade">
  div(:class="{'tabs-animated-wrap': animate, 'tabs-swipeable-wrap': swipeable}")
    .tabs
      slot
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'Tabs',
    props: {
      animate: {
        type: Boolean,
        coerce: coerceBoolean,
      },
      swipeable: {
        type: Boolean,
        coerce: coerceBoolean,
      },
    },

    attached () {
      if (this.swipeable) {
        let PageContainer = this.$getPageContainer(this.$el)
        if (PageContainer) {
          //  swipe will destroy when pageContainer's pageBeforeRemove event emit
          this.$app.initPageSwiper(PageContainer)
        }
      }
    },

    methods: {
      showTab (...args) {
        this.$showTab(...args)
      },
    },
  }
</script>
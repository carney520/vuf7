<template lang="jade">
  .page-content(:class="pageContentClasses", :style="pageContentStyle", :data-ptr-distance="ptrDistance", :data-distance="distance")
    .pull-to-refresh-layer(v-if="pullToRefresh")
      preloader
      .pull-to-refresh-arrow
    slot
</template>

<script>
  import { coerceBoolean, coerceNumber } from '../../helpers/coerces'
  import Preloader from '../preloader'

  export default {
    name: 'PageContent',
    components: {
      Preloader
    },
    props: {
      contacts: {
        type: Boolean,
        coerce: coerceBoolean
      },

      pullToRefresh: {
        type: Boolean,
        coerce: coerceBoolean
      },

      infiniteScroll: {
        type: Boolean,
        coerce: coerceBoolean
      },

      ptrDistance: {
        type: Number,
        coerce: coerceNumber
      },

      distance: {
        type: Number,
        coerce: coerceNumber
      },
      withSubnavbar: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    computed: {
      pageContentClasses () {
        return {
          'contacts-content': this.contacts,
          'pull-to-refresh-content': this.pullToRefresh,
          'infinite-scroll': this.infiniteScroll
        }
      },
      pageContentStyle () {
        return {
          'padding-top': (this.$ios && this.withSubnavbar) ? '88px' : null
        }
      }
    },

    methods: {
      pullToRefreshDone () {
        if (!this.pullToRefresh) return
        this.$pullToRefreshDone(this.$el)
      },

      pullToRefreshTrigger () {
        if (!this.pullToRefresh) return
        this.$pullToRefreshTrigger(this.$el)
      },

      attachInfiniteScroll () {
        if (!this.infiniteScroll) return
        this.$attachInfiniteScroll(this.$el)
      },

      detachInfiniteScroll () {
        if (!this.infiniteScroll) return
        this.$detachInfiniteScroll(this.$el)
      }
    },

    ready () {
      let pageContainer = this.$$(this.$el).parents('.' + this.$app.params.viewClass)[0]

      if (this.contacts) {
        this.$$(this.$el).find('.list-block').addClass('contacts-block')
      }

      if (this.pullToRefresh) {
        this.$initPullToRefresh(this.$el)
      }

      if (this.infiniteScroll) {
        this.$app.initPageInfiniteScroll(pageContainer)
      }

      // init Lazyload image or background
      if (this.$app.params.lazyload) {
        this.$nextTick(() => {
          this.$app.initImagesLazyLoad(this.$el)
        })
      }
    },

    beforeDestroy () {
      if (this.pullToRefresh) {
        this.$destroyPullToRefresh(this.$el)
      }

      if (this.infiniteScroll) {
        this.detachInfiniteScroll()
      }

      if (this.$app.params.lazyload) {
        this.$app.destroyImagesLazyLoad(this.$el)
      }
    }
  }
</script>

<style>
  .pull-to-refresh-layer .preloader {
    width: 20px !important;
    height: 20px !important;
    margin-left: -10px !important;
    margin-right: -10px !important;
  }
</style>
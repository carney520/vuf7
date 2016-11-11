<template lang="jade">
  .swiper-container
    .swiper-wrapper
      slot
    .swiper-pagination(v-el:pagination, v-if="showPagination")
    template(v-if="showNavButtons")
      .swiper-button-prev(v-el:prev)
      .swiper-button-next(v-el:next)
    .swiper-scrollbar(v-el:scrollbar, v-if="showScrollbar")
    slot(name="after")
</template>

<script>
  import { coerceBoolean, coerceNumber } from '../../helpers/coerces'

  export default {
    name: 'Swiper',
    props: {
      showPagination: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      },
      showNavButtons: {
        type: Boolean,
        coerce: coerceBoolean
      },
      showScrollbar: {
        type: Boolean,
        coerce: coerceBoolean
      },
      // common options
      initialSlide: {
        type: Number,
        default: 0,
        coerce: coerceNumber
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator (value) {
          return ['horizontal', 'vertical'].indexOf(value) !== -1
        }
      },
      speed: {
        type: Number,
        default: 300,
        coerce: coerceNumber
      },
      nested: {
        type: Boolean,
        coerce: coerceBoolean
      },
      autoplay: {
        type: Number,
        coerce: coerceNumber
      },
      autoplayStopOnLast: {
        type: Boolean,
        coerce: coerceBoolean
      },
      autoplayDisableOnInteraction: {
        type: Boolean,
        coerce: coerceBoolean
      },

      effect: {
        default: 'slide',
        validator (value) {
          return ['slide', 'fade', 'cube', 'coverflow', 'flip'].indexOf(value) !== -1
        }
      },
      parallax: {
        type: Boolean,
        coerce: coerceBoolean
      },
      loop: {
        type: Boolean,
        coerce: coerceBoolean
      },
      paginationType: {
        default: 'bullets',
        validator (value) {
          return ['bullets', 'fraction', 'progress', 'custom'].indexOf(value) !== -1
        }
      },
      paginationClickable: {
        type: Boolean,
        coerce: coerceBoolean
      },

      // raw options
      options: {
        type: Object
      }
    },
    methods: {
      getInstance () {
        return this._swiper
      },
      // update after you add/remove slides manully
      update (...args) {
        this._swiper.update(...args)
      },
      appendSlide (...args) {
        this._swiper.appendSlide(...args)
      },
      prependSlide (...args) {
        this._swiper.prependSlide(...args)
      },
      removeSlide (...args) {
        this._swiper.removeSlide(...args)
      },
      removeAllSlides (...args) {
        this._swiper.removeAllSlides(...args)
      },
      slideNext (...args) {
        this._swiper.slideNext(...args)
      },
      slidePrev (...args) {
        this._swiper.slidePrev(...args)
      },
      slideTo (...args) {
        this._swiper.slideTo(...args)
      }
    },
    ready () {
      const { initialSlide, direction, speed, nested, autoplay, autoplayStopOnLast, autoplayDisableOnInteraction,
        effect, parallax, loop, paginationType, paginationClickable
      } = this
      // init swiper
      let options = {
        initialSlide,
        direction,
        speed,
        nested,
        autoplay,
        autoplayStopOnLast,
        autoplayDisableOnInteraction,
        effect,
        parallax,
        loop,
        paginationType,
        paginationClickable,
        ...options
      }

      if (this.showPagination) {
        options.pagination = this.$els.pagination
      }

      if (this.showNavButtons) {
        options.prevButton = this.$els.prev
        options.nextButton = this.$els.next
      }

      if (this.showScrollbar) {
        options.scrollbar = this.$els.scrollbar
      }

      this.$nextTick(() => {
        this._swiper = this.$swiper(this.$el, options)
      })
    },
    beforeDestroy () {
      // destory swiper instance
      this._swiper.destory()
    }
  }
</script>
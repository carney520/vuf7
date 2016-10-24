<template lang="jade">
  img(:data-src="src", :class="lazyImgClasses")
</template>

<script>
  import { warn } from '../../helpers/utils'

  export default {
    name: 'LazyImg',
    props: {
      src: String,
      effect: {
        type: String,
        default: 'fadeIn',
      },
    },

    computed: {
      lazyImgClasses () {
        return [
          'lazy',
          this.effect && `lazy-${this.effect}`,
        ]
      },
    },

    methods: {
      load () {
        this.$$(this.$el).trigger('lazy')
      },
    },

    ready () {
      if (!this.$app.params.lazyload) {
        warn('Warning: lazyload was disabled! set "lazyload" to "true" when F7 init.')
        // fallback
        this.$el.setAttribute('src', this.src)
      }
    },
  }
</script>
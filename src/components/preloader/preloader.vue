<template lang="jade">
  span.preloader(:class="preloaderClasses")
    template(v-if="$android")
      span.preloader-inner
        span.preloader-inner-gap
        span.preloader-inner-left
          span.preloader-inner-half-circle
        span.preloader-inner-right
          span.preloader-inner-half-circle
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'Preloader',
    props: {
      color: String,
      big: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },
    computed: {
      preloaderClasses () {
        return [
          this.color && `preloader-${this.color}`
        ]
      }
    }
  }
</script>
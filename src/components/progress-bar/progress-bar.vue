<template lang="jade">
  .progressbar(:class="progressbarClasses")
    span
</template>

<script>
  import { coerceBoolean, coerceNumber } from '../../helpers/coerces'

  export default {
    name: 'ProgressBar',
    props: {
      progress: {
        type: Number,
        default: 0,
        coerce: coerceNumber,
        validator (value) {
          return value >= 0 && value <= 100
        }
      },
      infinite: {
        type: Boolean,
        coerce: coerceBoolean
      },
      speed: {
        type: Number,
        coerce: coerceNumber,
        default: 400
      },
      color: String
    },
    computed: {
      progressbarClasses () {
        return [
          this.color && `color-${this.color}`,
          this.infinite && !this.color && `color-multi`,
          {
            'progressbar-infinite': this.infinite
          }
        ]
      }
    },
    methods: {
      hide () {
        this.$app.hideProgressbar(this.$el)
      },
      show () {
        this.$app.showProgressbar(this.$el, this.progress)
      }
    },
    ready () {
      this.$watch('progress', (value) => {
        this.$app.setProgressbar(this.$el, value, this.speed)
      }, {immediate: true})
    }
  }
</script>
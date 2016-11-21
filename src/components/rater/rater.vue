<template lang="jade">
  span.f7-rater
    span.f7-rater-box(v-for="i of max",
      :style="{color: value - (i + 1) >= 0 ? activeColor : undefined}",
      @click.prevent="handleClick(i)")
      span.f7-rater-star
        |{{ star }}
        span.f7-rater-start-outer(v-if="value - (i + 1) > -1 && value - (i + 1) < 0", :style="outerStyle") {{ star }}
</template>

<script>
  import { coerceNumber, coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'Rater',
    props: {
      value: {
        type: Number,
        coerce: coerceNumber,
        default: 0
      },
      max: {
        type: Number,
        coerce: coerceNumber,
        default: 5
      },
      star: {
        type: String,
        default: '★'
      },
      activeColor: {
        type: String,
        default: '#fc6'
      },
      static: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },
    computed: {
      outerStyle () {
        return {
          color: this.activeColor
        }
      }
    },
    methods: {
      handleClick (index) {
        if (this.static) return
        this.value = index + 1
        this.$emit('change', index + 1)
      }
    }
  }
</script>

<style lang="scss">
  .f7-rater {
    vertical-align: middle;
  }

  .f7-rater-box {
    font-size: 1.6em;
    width: 1em;
    height: 1em;
    line-height: 1em;
    margin-left: .1em;
    color: rgb(204, 204, 204);
    user-select: none;
  }
  .f7-rater-star {
    position: relative;
    transition: color .5s ease;
  }

  .f7-rater-start-outer {
    position: absolute;
    left: 0;
    width: 50%;
    overflow: hidden;
  }
</style>
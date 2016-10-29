<template lang="jade">
  span.f7-badge(:class="badgeClasses")
    slot
    span.f7-badge-text(v-if="text") {{ displayText }}
    sub.f7-badge-dot(v-if="dot")
</template>

<script>
  import { coerceBoolean, coerceNumber } from '../../helpers/coerces'

  export default {
    name: 'Badge',
    props: {
      text: String,
      dot: {
        type: Boolean,
        coerce: coerceBoolean
      },
      overflowCount: {
        type: Number,
        coerce: coerceNumber
      }
    },
    computed: {
      badgeClasses () {
        return {
          'f7-badge-not-a-wrapper': this.$getSlot('default') == null
        }
      },

      displayText () {
        let num = typeof this.text === 'number' ? this.text : parseInt(this.text)
        if (Number.isNaN(num) || this.overflowCount == null) {
          return this.text
        } else {
          return num > this.overflowCount ? this.overflowCount + '+' : num
        }
      }
    }
  }
</script>

<style lang="scss">
  .f7-badge {
    position: relative;
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
  }

  %corner {
    position: absolute;
    left: 100%;
    top: 0;
    transform: translate(-50%, -50%);
    background-color: #ff3b30;
    z-index: 10;
  }

  .f7-badge-text {
    @extend %corner;
    box-sizing: border-box;
    height: 16px;
    min-width: 16px;
    font-size: 10px;
    line-height: 16px;
    padding: 0 4px;
    text-align: center;
    border-radius: 16px;
    white-space: nowrap;
    color: white;
  }

  .f7-badge-dot {
    @extend %corner;
    width: 8px;
    height: 8px;
    border-radius: 8px;
  }

  .f7-badge.f7-badge-not-a-wrapper {
    .f7-badge-text,
    .f7-badge-dot {
      position: relative;
      display: block;
      left: auto;
      top: auto;
      transform: translate(0, 0);
    }
  }
</style>
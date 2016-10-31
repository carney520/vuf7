<template lang="jade">
  .picker-modal.picker-keypad(:class="{'picker-modal-inline': this.inline}")
    .toolbar(v-if="toolbar")
      .toolbar-inner
        .left
        .right
          a.link.close-picker {{ toolbarCloseText || $copywriting('doneText') }}
    .picker-modal-inner.picker-keypad-buttons
      span.picker-keypad-button(
        v-for="button of buttons", 
        :class="{'picker-keypad-button-dark': !button.number, 'picker-keypad-button-dummy': button.dummy}", 
        @click="handleButtonClick(button)"
      )
        span.picker-keypad-button-num(v-if="button.number") {{ button.value }}
        template(v-else)
          span.picker-keypad-button-num(v-if="button.dot && button.value !== undefined") .
          i.picker-keypad-delete(v-if="button.delete")
        span.picker-keypad-button-letters(v-if="button.letters") {{ button.letters }}
</template>

<script>
  import { coerceBoolean, coerceNumber } from '../../../helpers/coerces.js'

  export default {
    name: 'NumpadKeyPad',
    props: {
      dotButton: {
        type: Boolean,
        default: true,
        coerce: coerceBoolean
      },
      dotCharacter: {
        type: String,
        default: '.'
      },
      value: String,
      maxLength: {
        type: Number,
        coerce: coerceNumber
      },
      inline: {
        type: Boolean,
        coerce: coerceBoolean
      },
      toolbar: {
        type: Boolean,
        default: true,
        coerce: coerceBoolean
      },
      toolbarCloseText: String
    },
    computed: {
      buttons () {
        return [
          {
            number: true,
            value: 1
          },
          {
            number: true,
            letters: 'ABC',
            value: 2
          },
          {
            number: true,
            letters: 'DEF',
            value: 3
          },
          {
            number: true,
            letters: 'GHI',
            value: 4
          },
          {
            number: true,
            letters: 'JKL',
            value: 5
          },
          {
            number: true,
            letters: 'MNO',
            value: 6
          },
          {
            number: true,
            letters: 'PQRS',
            value: 7
          },
          {
            number: true,
            letters: 'TUV',
            value: 8
          },
          {
            number: true,
            letters: 'WXYZ',
            value: 9
          },
          {
            number: false,
            dot: true,
            value: this.dotButton ? this.dotCharacter : undefined,
            dummy: !this.dotButton
          },
          {
            number: true,
            value: 0
          },
          {
            number: false,
            delete: true
          }
        ]
      }
    },
    methods: {
      handleButtonClick (button) {
        let buttonValue = button.value
        const isDelete = button.delete
        const isDot = button.dot
        let currentValue = this.value
        if (typeof currentValue === 'undefined') currentValue = ''
        if (isDelete) {
          currentValue = currentValue.substring(0, currentValue.length - 1)
        } else {
          if (typeof buttonValue !== 'undefined') {
            // . existed
            if (isDot && currentValue.indexOf(this.dotCharacter) !== -1) {
              buttonValue = ''
            }

            currentValue += buttonValue
          }
        }

        // splice
        if (this.maxLength && currentValue.length > this.maxLength) {
          currentValue = currentValue.substring(0, this.maxLength)
        }

        this.value = currentValue
        this.$emit('change', currentValue)
      }
    },
    beforeDestroy () {
      console.log('keypad destroy')
    }
  }
</script>

<style lang="scss">
  $hairline-color: rgba(92, 94, 96, .35) !default;

  %hairline-base {
    content: '';
    position: absolute;
    display: block;
    z-index: 15;
  }

  %hairline-vertical-base {
    @extend %hairline-base;
    top: 0;
    width: 1px;
    height: 100%;
    html.ios-gt-6.pixel-ratio-2 & {
      transform: scaleX(.5);
    }
    html.ios-gt-6.pixel-ratio-3 & {
      transform: scaleX(.33);
    }
  }

  %hairline-horizontal-base {
    @extend %hairline-base;
    left: 0;
    width: 100%;
    height: 1px;
    html.ios-gt-6.pixel-ratio-2 & {
      transform: scaleY(.5);
    }
    html.ios-gt-6.pixel-ratio-3 & {
      transform: scaleY(.33);
    }
  }

  @mixin hairline($position, $color: $hairline-color) {
    @if $position == top {
      &::before {
        @extend %hairline-horizontal-base;
        top: 0;
        background-color: $color;
        transform-origin: 50% 0;
      }
    } @else if $position == bottom {
      &::after {
        @extend %hairline-horizontal-base;
        bottom: 0;
        background-color: $color;
        transform-origin: 50% 100%;
      }
    } @else if $position == left {
      &::before {
        @extend %hairline-vertical-base;
        left: 0;
        background-color: $color;
        transform-origin: 0 50%;
      }
    } @else if $position == right {
      &::after {
        @extend %hairline-vertical-base;
        right: 0;
        background-color: $color;
        transform-origin: 100% 50%;
      }
    }
  }

  @mixin hairline-remove-lt {
    &::before {
      content: none;
    }
  }

  @mixin hairline-remove-rb {
    &::after {
      content: none;
    }
  }

  .picker-keypad-buttons {
    display: flex;
    flex-wrap: wrap;
    height: 200px;
    color: #000;
  }

  .picker-keypad-button {
    @include hairline(top);
    @include hairline(right);
    background-color: #fcfcfd;
    position: relative;
    display: flex;
    text-align: center;
    cursor: pointer;
    width: (100% / 3);
    height: 25%;
    flex-basis: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:nth-child(3n) {
      @include hairline-remove-rb;
    }

    &:not(.picker-keypad-button-dummy) {
      html:not(.watch-active-state) &:active, &.active-state {
        background-color: #bcc0c5;
      }
    }

    &.picker-keypad-button-dark {
      background-color: #bcc0c5;
      &:not(.picker-keypad-button-dummy) {
        html:not(.watch-active-state) &:active, &.active-state {
          background-color: #fcfcfd;
        }
      }
    }

    &.picker-keypad-button-dummy {
      cursor: default;
    }
  }

  .picker-keypad-button-num,
  .picker-keypad-button-letters {
    display: block;
  }

  .picker-keypad-button-num {
    font-size: 28px;
    line-height: 1;
  }

  .picker-keypad-button-letters {
    font-size: 11px;
    line-height: 15px;
    height: 15px;
  }

  .picker-keypad-delete {
    width: 22px;
    height: 16px;
    background-size: 22px 16px;
    background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 16'><path d='M18,0h-8C8.9,0,7.9,0.5,7.1,1.2c0,0,0,0,0,0L1,7.2C0.6,7.7,0.6,8.4,1,8.8l4.9,4.7L7,14.6c0,0,0,0,0,0c0.7,0.9,1.8,1.4,3,1.4 h8c2.2,0,4-1.8,4-4V4C22,1.8,20.2,0,18,0z M17.3,11.2l-0.7,0.7l-3.2-3.2l-3.2,3.2l-0.7-0.7L12.8,8L9.6,4.8l0.7-0.7l3.2,3.2l3.2-3.2 l0.7,0.7L14.2,8L17.3,11.2z' fill='%23000000'/></svg>");
  }

</style>
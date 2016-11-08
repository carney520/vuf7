<template lang="jade">
  .f7-num-pw
    number-pad.f7-num-pw-input(
      v-ref:numpad,
      :value.sync="value",
      :max-length="length", 
      :dot-button="dotButton",
      :toolbar="toolbar", 
      :toolbar-close-text="toolbarCloseText")
    .f7-num-pw-places
      .f7-num-pw-place(v-for="i of length")
        .f7-num-pw-dot(v-show="value !== undefined && i < value.length")
</template>

<script>
  import NumberPad from './numpad'
  import { coerceNumber, coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'NumberPassword',
    components: {
      NumberPad
    },
    props: {
      value: {},
      length: {
        type: Boolean,
        default: 6,
        coerce: coerceNumber
      },
      dotButton: {
        type: Boolean,
        default: false,
        coerce: coerceBoolean
      },
      toolbar: {
        type: Boolean,
        default: false,
        coerce: coerceBoolean
      },
      toolbarCloseText: String,
      // only one number-password can set this field
      autoOpen: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      },
      closeOnCompleted: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      }
    },
    methods: {
      open () {
        this.$refs.numpad.open()
      },

      close () {
        this.$refs.numpad.close()
      }
    },
    watch: {
      value (val, old) {
        if (val !== old) {
          this.$emit('change', val)
          if (val.length === this.length) {
            if (this.closeOnCompleted) {
              this.close()
            }
            this.$emit('completed', val)
          }
        }
      }
    },

    ready () {
      if (this.autoOpen) {
        this.open()
      }
    }
  }
</script>

<style lang="scss">
  $pw-border-color: rgba(92, 94, 96, .35) !default;

  .f7-num-pw {
    position: relative;
    padding: .5em;
    overflow: hidden;
  }

  .f7-num-pw-input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
  }

  .f7-num-pw-places {
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 45px;
    border: 1px solid $pw-border-color;
    border-radius: 5px;
    background-color: #FFF;
  }

  .f7-num-pw-place {
    position: relative;
    height: 100%;
    flex: 1;
    &:not(:first-child) {
      border-left: 1px solid $pw-border-color;
    }
  }

  .f7-num-pw-dot {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    border-radius: 14px;
    background-color: rgba(black, .7);
  }
</style>
<template lang="jade">
  a(:href="href || '#'", :class="buttonClasses")
    slot
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'
  export default {
    name: 'Button',
    props: {
      href: String,
      active: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      round: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      big: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      fill: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      list: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      color: String,

      // android
      raised: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      rippleColor: String,
    },

    computed: {
      buttonClasses () {
        return [
          this.color && `color-${this.color}`,
          this.rippleColor && `ripple-${this.rippleColor}`,
          {
            'button': !this.list,
            'active': this.active,
            'button-round': this.round,
            'button-big': this.big,
            'button-fill': this.fill,
            'item-link': this.list,
            'list-button': this.list,
            //android
            'button-raised': this.raised,
          },
        ]
      },
    },
  }
</script>
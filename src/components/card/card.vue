<template lang="jade">
  .card
    .card-header(v-if="headerInserted", :valign="headerAlign", :class="headerClasses")
      slot(name="header")
    .card-content
      slot
      .card-content-inner(v-if="innerInserted")
        slot(name="inner")
    .card-footer(v-if="footerInserted", :valign="footerAlign", :class="footerClasses")
      slot(name="footer")
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'Card',
    props: {
      headerAlign: {
        type: String,
        validator (value) {
          return [undefined, 'top', 'bottom'].indexOf(value) !== -1
        },
      },

      headerColor: String,

      headerNoBorder: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      footerAlign: {
        type: String,
        validator (value) {
          return [undefined, 'top', 'bottom'].indexOf(value) !== -1
        },
      },

      footerColor: String,

      footerNoBorder: {
        type: Boolean,
        coerce: coerceBoolean,
      },
    },

    computed: {
      headerInserted () {
        return this.$getSlot('header')
      },

      headerClasses () {
        return [
          this.headerColor && `color-${this.headerColor}`,
          {
            'no-border': this.headerNoBorder,
          },
        ]
      },

      footerInserted () {
        return this.$getSlot('footer')
      },

      footerClasses () {
        return [
          this.footerColor && `color-${this.footerColor}`,
          {
            'no-border': this.footerNoBorder,
          }
        ]
      },

      innerInserted () {
        return this.$getSlot('inner')
      },
    },
  }
</script>
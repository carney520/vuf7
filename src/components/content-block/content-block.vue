<template lang="jade">
  .content-block(:class="contentBlockClasses", :style="contentblockStyle")
    .content-block-inner(v-if="innerInserted")
      slot(name="inner")
    slot
</template>


<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'ContentBlock',
    props: {
      inset: {
        type: Boolean,
        coerce: coerceBoolean
      },
      tabletInset: {
        type: Boolean,
        coerce: coerceBoolean
      },
      noGutter: {
        type: Boolean,
        coerce: coerceBoolean
      },
      smallGutter: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    computed: {
      innerInserted () {
        return this.$getSlot('inner')
      },

      contentblockStyle () {
        const gutter = this.noGutter
          ? '0'
          : this.smallGutter
          ? '10px'
          : undefined
        return {
          'margin-top': gutter,
          'margin-bottom': gutter
        }
      },

      contentBlockClasses () {
        return [
          {
            'inset': this.inset,
            'tablet-inset': this.tabletInset
          }
        ]
      }
    }
  }
</script>
<template lang="jade">
  .content-block-title(v-if="title") {{ title }}
  .content-block(:class="contentBlockClasses")
    .content-block-inner(v-if="innerInserted")
      slot(name="inner")
    slot
</template>


<script>
  import { coerceBoolean, coerceClass } from '../../helpers/coerces'

  export default {
    name: 'ContentBlock',
    props: {
      title: String,
      inset: {
        type: Boolean,
        coerce: coerceBoolean,
      },
      tabletInset: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      'class': {
        type: Array,
        coerce: coerceClass,
      },
    },

    computed: {
      innerInserted () {
        return this.$getSlot('inner')
      },

      contentBlockClasses () {
        return [
          ...this.class,
          {
            'inset': this.inset,
            'tablet-inset': this.tabletInset,
          },
        ]
      },
    },
  }
</script>
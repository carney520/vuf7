<template lang="jade">
  .row(:class="rowClasses")
    slot
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'Row',
    props: {
      collapsed: {
        type: Boolean,
        coerce: coerceBoolean,
      },
      //  alias of collapsed
      noGutter: {
        type: Boolean,
        coerce: coerceBoolean,
      },
    },

    computed: {
      rowClasses () {
        return [
          {
            'no-gutter': this.collapsed || this.noGutter,
          },
        ]
      },
    },
  }
</script>
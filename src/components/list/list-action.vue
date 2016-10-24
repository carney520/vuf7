<template lang="jade">
  a(:href="href || '#'", :class="listActionClasses", :data-confirm="confirmText", :data-confirm-title="confirmTitle")
    slot
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'ListAction',
    props: {
      background: String,
      close: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      delete: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      overswipe: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      href: String,
      confirmText: String,
      confirmTitle: String,
    },

    computed: {
      listActionClasses () {
        return [
          this.background && `bg-${this.background}`,
          {
            'swipeout-delete': this.delete,
            'swipeout-close': this.close,
            'swipeout-overswipe': this.overswipe,
          },
        ]
      }
    },
  }
</script>
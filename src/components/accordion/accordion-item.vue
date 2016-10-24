<template lang="jade">
  .accordion-item
    .accordion-item-toggle
      slot(name="toggle")
    .accordion-item-content
      slot
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'AccordionItem',
    props: {
      expanded: {
        type: Boolean,
        coerce: coerceBoolean,
      },
    },

    computed: {
      accordionClasses () {
        return {
          'accordion-item-expanded': this.expanded,
        }
      },
    },

    methods: {
      open () {
        this.$app.accordionOpen(this.$el)
      },

      close () {
        this.$app.accordionClose(this.$el)
      },

      toggle () {
        this.$app.accordionToggle(this.$el)
      },
    },
  }
</script>
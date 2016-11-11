<template lang="jade">
  li(:class="listItemClasses")
    template(v-if="swipeable")
      .swipeout-content
        slot
    template(v-else)
      slot
    .swipeout-actions-left(v-if="swipeable && actionsLeftInserted")
      slot(name="actions-left")
    .swipeout-actions-right(v-if="swipeable && actionsRightInserted")
      slot(name="actions-right")
    .sortable-handler(v-if="sortable")
    .accordion-item-content(v-if="accordion")
      slot(name="accordion-content")
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'ListItem',
    props: {
      swipeable: {
        type: Boolean,
        coerce: coerceBoolean
      },

      sortable: {
        type: Boolean,
        coerce: coerceBoolean
      },

      accordion: {
        type: Boolean,
        coerce: coerceBoolean
      },

      align: {
        type: String
      }
    },

    computed: {
      listItemClasses () {
        return [
          this.align && `align-${this.align}`,
          {
            'swipeout': this.swipeable,
            'accordion-item': this.accordion
          }
        ]
      },

      actionsLeftInserted () {
        return this.$getSlot('actions-left')
      },

      actionsRightInserted () {
        return this.$getSlot('actions-right')
      }
    },

    methods: {
      // open swipeout actions
      swipeoutOpen (direction, callback) {
        if (!this.swipeable) return
        direction = direction || this.actionsLeftInserted
          ? 'left'
          : this.actionsRightInserted
            ? 'right'
            : undefined
        this.$app.swipeoutOpen(this.$el, direction, callback)
      },

      // close swipeout actions
      swipeoutClose (callback) {
        if (!this.swipeable) return
        this.$app.swipeoutClose(this.$el, callback)
      },

      swipeoutDelete (callback) {
        if (!this.swipeable) return
        this.$app.swipeoutDelete(this.$el, callback)
      },

      accordionOpen () {
        this.$app.accordionOpen(this.$el)
      },

      accordionClose () {
        this.$app.accordionClose(this.$el)
      },

      accordionToggle () {
        this.$app.accordionToggle(this.$el)
      }

    }
  }
</script>
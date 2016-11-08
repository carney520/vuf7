<template lang="jade">
  .list-block(:class="listBlockClasses", :style="listBlockStyle")
    ul
      slot
    .list-block-label(v-if="labelInserted")
      slot(name="label") {{ label }}
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'ListBlock',
    props: {
      label: String,

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
      },

      // media list
      media: {
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

      cards: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    computed: {
      listBlockClasses () {
        return [
          {
            'inset': this.inset,
            'tablet-inset': this.tabletInset,
            'media-list': this.media,
            'accordion-list': this.accordion,
            'cards-list': this.cards,
            'sortable': this.sortable
          }
        ]
      },
      listBlockStyle () {
        return {
          'margin': this.noGutter
            ? '0 0'
            : this.smallGutter
            ? '10px 0'
            : undefined
        }
      },

      labelInserted () {
        return this.$getSlot('label') || this.label
      }
    },

    methods: {
      sortableOpen () {
        this.$sortableOpen(this.$el)
      },

      sortableClose () {
        this.$sortableClose(this.$el)
      },

      sortableToggle () {
        this.$sortableToggle(this.$el)
      }
    }
  }
</script>
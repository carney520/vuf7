<template lang="jade">
  .content-block-title(v-if="titleInserted") 
    slot(name="title") {{ title }}
  .list-block(:class="listBlockClasses")
    ul
      slot
    .list-block-label(v-if="labelInserted")
      slot(name="label") {{ label }}
</template>

<script>
  import { coerceBoolean,coerceClass } from '../../helpers/coerces'

  export default {
    name: 'ListBlock',
    props: {
      title: String,
      label: String,

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

      //media list
      media: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      sortable: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      accordion: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      cards: {
        type: Boolean,
        coerce: coerceBoolean,
      },
    },

    computed: {
      listBlockClasses () {
        return [
          ...this.class,
          {
            'inset': this.inset,
            'tablet-inset': this.tabletInset,
            'media-list': this.media,
            'accordion-list': this.accordion,
            'cards-list': this.cards,
            'sortable': this.sortable,
          },
        ]
      },

      titleInserted () {
        return this.$getSlot('title') || this.title
      },

      labelInserted () {
        return this.$getSlot('label') || this.label
      },
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
      },
    },
  }
</script>
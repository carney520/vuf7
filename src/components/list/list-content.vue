<template lang="jade">
  a.item-content(:class="{'item-link': link || accordion}")
    .item-media(v-if="mediaInserted")
      slot(name="media")
    .item-inner(v-if="!media")
      .item-title(:class="{label: input}", v-if="title") {{ title }}
      template(v-if="input")
        .item-input(v-if="input")
          slot
        .item-after
          slot(name="after")
      .item-after(v-else)
        slot
    .item-inner(v-else)
      .item-title-row
        .item-title(v-if="title") {{ title }}
        .item-after
          slot
          slot(name="after")
      .item-subtitle(v-if="subtitle") {{ subtitle }}
      .item-text(v-if="text") {{ text }}
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: "ListContent",
    props: {
      title: String,
      subtitle: String,
      text: String,
      href: String,
      link: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      media: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      input: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      accordion: {
        type: Boolean,
        coerce: coerceBoolean,
      },
    },

    computed: {
      ListContentClasses () {
        return {
          'item-link': this.href || this.link || this.accordion,
        }
      },

      mediaInserted () {
        return this.$getSlot('media')
      },
    },

    compiled () {
      if (this.href) {
        this.$el.setAttribute('href', this.href)
      }
    },
  }
</script>

<style lang="scss">
  .item-content {
    color: inherit;
  }
</style>
<template lang="jade">
  label.label-checkbox.item-content
    input(type="checkbox", :name="name", v-model="value", :value="checkedValue", :checked="checked", :disabled="disabled")
    .item-media
      i.icon.icon-form-checkbox
    .item-media(v-if="mediaInserted")
      slot(name="media")

    .item-inner(v-if="isMedia")
      .item-title-row
        .item-title(v-if="titleInserted")
          slot(name="title") {{ title }}
        .item-after
          slot
      .item-subtitle(v-if="subtitleInserted")
        slot(name="subtitle") {{ subtitle }}
      .item-text(v-if="textInserted")
        slot(name="text") {{ text }}
    .item-inner(v-else)
      .item-title
        slot {{ title }}

</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'ListCheckbox',
    props: {
      name: String,
      value: {},
      checked: {
        type: Boolean,
        coerce: coerceBoolean
      },
      checkedValue: {
        default: true
      },

      media: {
        type: Boolean,
        coerce: coerceBoolean
      },
      title: String,
      subtitle: String,
      text: String,
      disabled: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    computed: {
      isMedia () {
        return this.media || this.mediaInserted || this.subtitleInserted || this.textInserted
      },

      mediaInserted () {
        return this.$getSlot('media')
      },

      titleInserted () {
        return this.title || this.$getSlot('title')
      },

      subtitleInserted () {
        return this.subtitle || this.$getSlot('subtitle')
      },

      textInserted () {
        return this.text || this.$getSlot('text')
      }
    }
  }
</script>
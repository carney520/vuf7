<template lang="jade">
  div.item-content(:class="listContentClasses")
    input(v-if="selectable && selectMode", type="checkbox", :value="selectedValue", v-model="selectSource")
    .item-media(v-if="selectable && selectMode", transition="expand")
      i.icon.icon-form-checkbox
    .item-media(v-if="mediaInserted")
      slot(name="media")
    .item-inner(v-if="!isMedia")
      .item-title(:class="{label: input}", v-if="titleInserted") 
        slot(name="title")
          |{{ title }}
      template(v-if="input")
        .item-input(v-if="input")
          slot
        .item-after
          slot(name="after")
      .item-after(v-else)
        slot
    .item-inner(v-else)
      .item-title-row
        .item-title(v-if="titleInserted") 
          slot(name="title")
            |{{ title }}
        .item-after
          slot
          slot(name="after")
      .item-subtitle(v-if="subtitleInserted") 
        slot(name="subtitle") {{ subtitle }}
      .item-text-row
        .item-text(v-if="textInserted")
          slot(name="text") {{ text }}
        .item-text-after(v-if="textAfterInserted")
          slot(name="text-after")
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'ListContent',
    props: {
      title: String,
      subtitle: String,
      text: String,
      href: String,
      link: {
        type: Boolean,
        coerce: coerceBoolean
      },

      media: {
        type: Boolean,
        coerce: coerceBoolean
      },

      input: {
        type: Boolean,
        coerce: coerceBoolean
      },

      accordion: {
        type: Boolean,
        coerce: coerceBoolean
      },
      selectable: {
        type: Boolean,
        coerce: coerceBoolean
      },
      selectMode: {
        type: Boolean,
        coerce: coerceBoolean
      },
      selectedValue: {},
      selectSource: {}
    },

    computed: {
      listContentClasses () {
        return {
          'item-link': this.href || this.link || this.accordion,
          'label-checkbox': this.selectable && this.selectMode
        }
      },

      isMedia () {
        return this.media || this.textInserted || this.subtitleInserted
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
      },

      textAfterInserted () {
        return this.$getSlot('text-after')
      }
    },
    created () {
      // change element
      if (this.href || this.link) {
        this.$options.template = this.$options.template.replace(/^<div\b/, '<a')
        .replace(/<\/div>$/, '</a>')
      } else if (this.selectable) {
        this.$options.template = this.$options.template.replace(/^<div\b/, '<label')
        .replace(/<\/div>$/, '</label>')
      }
    },

    compiled () {
      if (this.href) {
        this.$el.setAttribute('href', this.href)
      }
    }
  }
</script>

<style lang="scss">
  .item-content {
    color: inherit;
  }

  .item-text-row {
    display: flex;
    justify-content: space-between;
  }

  .item-text {
    max-height: 42px;
    height: auto !important;
    flex-shrink: 1;
    min-width: 0;
    max-width: 100%;
  }

  .item-text-after {
    display: flex;
    font-size: 15px;
    flex-shrink: 0;
    margin-left: 5px;
    max-height: 28px;
    white-space: nowrap;
    color: #8e8e93;
  }

  .expand-transition {
    transition: all .4s ease;
    width: 22px;

    & + .item-inner {
      transition: all .2s ease;
    }
  }

  .expand-enter,
  .expand-leave {
    width: 0;
    opacity: 0;

    & + .item-inner {
      margin-left: 0 !important;
    }
  }
</style>
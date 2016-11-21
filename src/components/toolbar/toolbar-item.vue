<template lang="jade">
  a.link(:class="toolbarItemClasses")
    slot
    span.tabbar-label(v-if="label && showLabel") {{ label }}
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'ToolbarItem',
    props: {
      showLabel: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      },
      label: String,
      href: String,
      active: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    ready () {
      if (this.href) {
        this.$el.setAttribute('href', this.href)
      }
    },
    computed: {
      toolbarItemClasses () {
        return {
          'tab-link': this.$parent.tabbar,
          'active': this.active
        }
      }
    }
  }
</script>
<template lang="jade">
  .pages(:class="pagesClasses")
    .page(:data-page="name", :class="pageClasses" )
      slot
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'Page',
    props: {
      name: {
        type: String,
        default: 'main',
      },

      navbarType: {
        type: String,
        validator (value) {
          return [undefined, 'fixed', 'through'].indexOf(value) !== -1
        }
      },

      toolbarType: {
        type: String,
        validator (value) {
          return [undefined, 'fixed', 'through'].indexOf(value) !== -1
        }
      },

      noNavbar: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      noToolbar: {
        type: Boolean,
        coerce: coerceBoolean,
      },

      withSubnavbar: {
        type: Boolean,
        coerce: coerceBoolean,
      },
    },

    computed: {
      pagesClasses () {
        return [
          this.navbarType && `navbar-${this.navbarType}`,
          this.toolbarType && `toolbar-${this.toolbarType}`,
          this.noNavbar && 'no-navbar',
          this.noToolbar && 'no-toolbar',
        ]
      },

      pageClasses () {
        return {
          'with-subnavbar': this.withSubnavbar,
        }
      },
    },
  }
</script>
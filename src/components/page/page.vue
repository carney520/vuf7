<template lang="jade">
  .page(:data-page="name", :class="pageClasses" )
    slot
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'
  let uid = 0

  export default {
    name: 'Page',
    props: {
      name: {
        type: String,
        default () {
          uid++
          return 'page-' + uid
        }
      },

      active: {
        type: Boolean,
        coerce: coerceBoolean
      },

      class: {
        type: String,
        default: ''
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
          return [undefined, 'fixed', 'through', 'bottom'].indexOf(value) !== -1
        }
      },

      noNavbar: {
        type: Boolean,
        coerce: coerceBoolean
      },

      noToolbar: {
        type: Boolean,
        coerce: coerceBoolean
      },

      noTabbar: {
        type: Boolean,
        coerce: coerceBoolean
      },

      withSubnavbar: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    computed: {
      pageClasses () {
        return [
          this.navbarType && `navbar-${this.navbarType}`,
          this.toolbarType && `toolbar-${this.toolbarType}`,
          this.noNavbar && 'no-navbar',
          this.noToolbar && 'no-toolbar',
          this.noTabbar && 'no-tabbar',
          ...this.class.split(/\s+/),
          {
            'with-subnavbar': this.withSubnavbar,
            'page-on-center': this.active
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .f7-android {
    .toolbar-bottom .page-content {
      padding-bottom: 75px;
    }
  }
</style>
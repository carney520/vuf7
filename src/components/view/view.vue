<template lang="jade">
  .views
    .view(v-el:view)
      slot(name="navbar")
      .pages(:class="pagesClasses")
        slot
      slot(name="toolbar")
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'
  export default {
    name: 'View',
    props: {
      options: {
        type: Object,
        default: () => ({})
      },
      page: String,
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
        coerce: coerceBoolean
      },

      noToolbar: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    computed: {
      pagesClasses () {
        return [
          this.navbarType && `navbar-${this.navbarType}`,
          this.toolbarType && `toolbar-${this.toolbarType}`,
          this.noNavbar && 'no-navbar',
          this.noToolbar && 'no-toolbar'
        ]
      }
    },

    methods: {
      loadPage (name) {
        this._view.loadPage(name[0] === '#' ? name : '#' + name)
      },

      back () {
        this._view.router.back()
      }
    },

    ready () {
      // initial view on $el attach to document
      this._view = this.$app.addView(this.$els.view, {
        ...this.options,
        domCache: true
      })
    },

    beforeDestroy () {
      // page remove callback
      // some components depend on 'pageBeforeRemove' event to destroy
      this.$app.pageRemoveCallback(this._view, this.$els.view)
      this.$app.views.splice(this.$app.views.indexOf(this._view), 1)
      this._view.destroy()
    }
  }
</script>
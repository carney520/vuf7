<template lang="jade">
  form.searchbar.searchbar-init(v-el:searchbar)
    .searchbar-input
      input(type="search", :placeholder="_placeholder")
      a.searchbar-clear(href="javascript:")
    .searchbar-cancel {{ _cancelText }}
  .searchbar-overlay(v-el:overlay)
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'Searchbar',
    props: {
      placeholder: String,
      cancelText: String,
      //  css Selector or HTML element to **search**
      searchList: {
        default: '.list-block-search'
      },

      //  Search key: css Selector of List View element's field where we need to search, default is '.item-title'
      searchIn: {},
      ignore: {},
      found: {},
      notFound: {},
      //  disable search `searchList`
      customSearch: {
        type: Boolean,
        coerce: coerceBoolean
      },
      removeDiacritics: {
        type: Boolean,
        coerce: coerceBoolean
      },
      hideDividers: {
        type: Boolean,
        coerce: coerceBoolean
      },
      hideGroups: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    data () {
      return {
        query: '',
        active: false
      }
    },

    computed: {
      _placeholder () {
        return this.placeholder || this.$copywriting('searchText')
      },

      _cancelText () {
        return this.cancelText || this.$copywriting('cancelText')
      }
    },

    methods: {
      getParams () {
        return this._searchbar.params
      },
      search (query) {
        this._searchbar.search(query)
      },
      enable () {
        this._searchbar.enable()
      },
      disable () {
        this._searchbar.disable()
      },
      clear () {
        this._searchbar.clear()
      },

      destroy () {
        this._searchbar.destroy()
      }
    },

    ready () {
      this._searchbar = this.$app.searchbar(this.$els.searchbar, {
        overlay: this.$els.overlay,
        searchList: this.searchList,
        searchIn: this.searchIn,
        found: this.found,
        notFound: this.notFound,
        ignore: this.ignore,
        customSearch: this.customSearch,
        removeDiacritics: this.removeDiacritics,
        hideDividers: this.hideDividers,
        hideGroups: this.hideGroups,
        onSearch: (s) => {
          this.query = s.value
          this.$emit('search', s)
        },
        onEnable: (s) => {
          this.active = true
          this.$emit('enable', s)
        },
        onDisable: (s) => {
          this.active = false
          this.$emit('disable', s)
        },
        onClear: (s) => {
          this.query = ''
          this.$emit('clear', s)
        }
      })
    },

    beforeDestroy () {
      this.destroy()
    }
  }
</script>
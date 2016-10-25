<template lang="jade">
  a.item-link.smart-select(
    :data-open-in="openIn",
    :data-searchbar="searchbar.toString()", 
    :data-searchbar-placeholder="_searchbarPlaceholder", 
    :data-searchbar-cancel="_searchbarCancelText",
    :data-back-on-select="closeOnSelect.toString()",
    :data-page-title="pageTitle",
    :data-back-text="_backText",
    :data-popup-close-text="_closeText",
    :data-picker-close-text="_pickerCloseText",
    :data-picker-height="pickerHeight + 'px'",
    :data-navbar-theme="navbarColor",
    :data-form-theme="formColor",
    )
    slot
    slot(name="input")
    slot(name="content")
</template>

<script>
  import { coerceBoolean, coerceNumber } from '../../helpers/coerces'

  export default {
    name: 'ListSmartSelect',
    props: {
      openIn: {
        type: String,
        default: 'page',
        validator (value) {
          return ['page', 'popup', 'picker'].indexOf(value) !== -1
        }
      },
      searchbar: {
        type: Boolean,
        coerce: coerceBoolean
      },
      searchbarPlaceholder: String,
      searchbarCancelText: String,
      pageTitle: String,
      closeText: String,
      pickerHeight: {
        type: Number,
        coerce: coerceNumber
      },
      closeOnSelect: {
        type: Boolean,
        coerce: coerceBoolean
      },
      navbarColor: String,
      formColor: String
    },

    computed: {
      _searchbarPlaceholder () {
        return this.searchbarPlaceholder || this.$copywriting('searchText')
      },

      _searchbarCancelText () {
        return this.searchbarCancelText || this.$copywriting('cancelText')
      },

      _closeText () {
        return this.closeText || this.$copywriting('closeText')
      },

      _pickerCloseText () {
        return this.closeText || this.$copywriting('doneText')
      },

      _backText () {
        return this.closeText || this.$copywriting('backText')
      }
    },

    methods: {
      open () {
        this.$app.smartSelectOpen(this.$el)
      }
    }
  }

</script>
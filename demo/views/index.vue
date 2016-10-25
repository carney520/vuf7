<template lang="jade">
div
  f7-page(name="index", navbar-type="fixed")
    .navbar
      .navbar-inner
          .left left
          .center center
          .right right
    .page-content
      h1 DEMO
      div.test {{ num }}
      button(@click="increase") INCREASE
      ul
       li
         a(v-link="{name: 'foo'}") foo
       li 
         a(v-link="{name: 'navbar'}") navbar
       li 
         a(v-link="{name: 'toolbar'}") toolbar
       li 
         a(v-link="{name: 'grid'}") grid
       li 
         a(v-link="{name: 'content-block'}") content-block
       li 
         a(v-link="{name: 'panel'}") panel
       li 
         a(v-link="{name: 'searchbar'}") searchbar
       li 
         a(v-link="{name: 'modal'}") Modal
       li 
         a(v-link="{name: 'popup'}") Popup
       li 
         a(v-link="{name: 'popover'}") Popover
       li 
         a(v-link="{name: 'picker-modal'}") PickerModal
       li 
         a(v-link="{name: 'list'}") List
       li 
         a(v-link="{name: 'contacts'}") Contacts List
       li 
         a(v-link="{name: 'swipeout'}") Swipeout List
       li 
         a(v-link="{name: 'accordion'}") Accordion
       li 
         a(v-link="{name: 'card'}") Card
       li 
         a(v-link="{name: 'button'}") Button
       li 
         a(v-link="{name: 'form-layout'}") Form
       li 
         a(v-link="{name: 'tabs'}") Tabs
       li 
         a(v-link="{name: 'photo-browser'}") Photo Browser
       li 
         a(v-link="{name: 'picker'}") Picker
       li 
         a(v-link="{name: 'datepicker'}") Date picker
       li 
         a(v-link="{name: 'pull-to-refresh'}") PullToRefresh
       li 
         a(v-link="{name: 'infinite-scroll'}") Infinite scroll
       li 
         a(v-link="{name: 'notification'}") Notification
       li 
         a(v-link="{name: 'lazyload'}") lazyload
</template>

<script>
  import { increase } from 'actions/test'

  export default {
    vuex: {
      getters: {
        num: (state) => state.test.num
      },

      actions: {
        increase,
      },
    },
  }
</script>

<style lang="scss">
</style>
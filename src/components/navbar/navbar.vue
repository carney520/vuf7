<template lang="jade">
  .navbar
    .navbar-inner
      .left
        slot(name="left")
      .center
        slot(name="center") {{ title }}
      .right
        slot(name="right")
      //- subnavbar
      .subnavbar(v-if="subnavbarInserted")
        slot(name="subnavbar")
        slot
</template>

<script>
  export default {
    name: 'Navbar',
    props: {
      title: String
    },
    computed: {
      subnavbarInserted () {
        return this.$getSlot('default') || this.$getSlot('subnavbar')
      }
    },
    methods: {
      hide () {
        this.$hideNavbar(this.$el)
      },

      show () {
        this.$showNavbar(this.$el)
      }
    },

    ready () {
      if (this.subnavbarInserted) {
        let pageContainer = this.$getPageContainer(this.$el)
        if (pageContainer) {
          this.$$(pageContainer).find('.page').addClass('with-subnavbar')
        }
      }
    }
  }
</script>
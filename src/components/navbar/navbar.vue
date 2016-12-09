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
    }
  }
</script>

<style lang="scss">
  .f7-ios {
    .navbar-inner {
      .left, .center, .right {
        flex: 1;
      }

      .left {
        justify-content: flex-start;
      }

      .center {
        justify-content: center;

        &:last-child {
          padding-right: 33.33%;
        }
      }

      .right {
        justify-content: flex-end;
      }
    }
  }
  .navbar, .toolbar {
    transform: translate3d(0, 0, 0);
  }
</style>
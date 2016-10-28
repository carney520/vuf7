<template lang="jade">
  .app
    //- use v-f7-transition to enable page transition
    router-view.page-container(v-f7-transition, keep-alive)
</template>

<script>
  import store from './vuex/store'

  export default {
    //  将store 注入根组件
    store
  }

</script>

<style lang="scss">
  // import global style
  @import "main";
</style>
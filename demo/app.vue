<template lang="jade">
  .app
    router-view.page-container(transition, v-r-transition, keep-alive)
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
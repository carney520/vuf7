<template lang="jade">
  li.list-group
    .list-group-title(v-if="titleInserted") 
      slot(name="title") {{ title }}
    ul
      slot
</template>

<script>
  export default {
    name: 'ListGroup',
    props: {
      title: String,
    },

    computed: {
      titleInserted () {
        return this.$getSlot('title') || this.title
      }
    },
  }
</script>

<style lang="scss">
  .list-group > ul {
    padding-left: 0 !important;
  }
</style>
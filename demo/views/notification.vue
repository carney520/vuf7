<template lang="jade">
div
  f7-view
    f7-navbar
      span(f7-back, slot="left") back
      span(slot="center") Notification
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed")
      f7-page-content
        f7-content-block
          p
            f7-button(@click="addDefault") DEFAULT
          p
            f7-button(@click="addFull") addFull
</template>

<script>
  export default {
    methods: {
      addDefault () {
        this.$addNotification({
          title: 'Framework7',
          message: '这是一个包含标题和消息内容的简单通知',
        })
      },

      addFull () {
        this.$addNotification({
          title: 'Framework7',
          subtitle: '副标题',
          message: '这是一个包含标题, 副标题,消息内容以及自定义图标的通知',
          media: '<i class="icon icon-f7"></i>',
        })
      },
    },
  }
</script>

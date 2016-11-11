<!-- 
@example 
  f7-panel
    content-here
      ...
    anther-content(slot="right")
      ...
  //- very important
  f7-view
    f7-page
-->
<template lang="jade">
  .panel-overlay
  //- panel-left by default
  .panel.panel-left(v-if="leftInserted", :class="leftClasses")
    slot

  //- panel-right
  .panel.panel-right(v-if="rightInserted", :class="rightClasses")
    slot(name="right")
</template>

<script>
  export default {
    name: 'Panel',
    props: {
      type: {
        type: String,
        default: 'reveal',
        validator: (value) => ['reveal', 'cover'].indexOf(value) !== -1
      },

      rightType: {
        type: String,
        default: 'reveal',
        validator: (value) => ['reveal', 'cover'].indexOf(value) !== -1
      }
    },

    computed: {
      leftInserted () {
        return this.$getSlot('default')
      },

      rightInserted () {
        return this.$getSlot('right')
      },

      leftClasses () {
        return [
          `panel-${this.type}`
        ]
      },

      rightClasses () {
        return [
          `panel-${this.rightType}`
        ]
      }
    },

    methods: {
      open (pos) {
        pos = pos || this.leftInserted
          ? 'left'
          : this.rightInserted
          ? 'right'
          : null
        if (!pos) return
        this.$openPanel(pos)
      },

      close () {
        this.$closePanel()
      }
    },

    ready () {
      // init swipePanel
      this.$app.initSwipePanels()
    },

    beforeDestroy () {
      this.$app.destroySwipePanels()
    }
  }
</script>
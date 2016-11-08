<template lang="jade">
  svg.f7-icon(:view-box.camel="viewBox")
    path(:d="d")
</template>

<script>
  import icons from './manifest.json'

  export default {
    name: 'Icon',
    props: {
      name: {
        type: String,
        required: true,
        validator (value) {
          return value in icons
        }
      },
      type: {
      }
    },
    computed: {
      viewBox () {
        let {width, height} = icons[this.name]
        return `0 0 ${width} ${height}`
      },

      d () {
        return icons[this.name].d
      }
    }
  }
</script>

<style lang="scss">
  .f7-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    vertical-align: middle;
    fill: currentColor;
  }
</style>
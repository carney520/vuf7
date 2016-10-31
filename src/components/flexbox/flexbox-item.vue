<template lang="jade">
  .f7-flex-item
    slot
</template>

<script>
  export default {
    name: 'FlexItem',
    props: {
      order: {
        type: String,
        validator (value) {
          return ['first', 'last'].indexOf(value) !== -1
        }
      },
      align: {
        type: String,
        validator (value) {
          return ['center', 'start', 'end', 'baseline', 'stretch'].indexOf(value) !== -1
        }
      }
    },

    computed: {
      flexItemClasses () {
        const { order, align } = this
        return [
          order && `f7-flex-item-${order}`,
          align && `f7-flex-item-ali-${align}`
        ]
      }
    }
  }
</script>
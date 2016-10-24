<template lang="jade">
  .col(:class="colClasses")
    slot
</template>

<script>
  export default {
    name: 'Col',
    props: {
      /**
       * col width, like <normal>:<tablet>, tablet == width >= 768
       * @type {Object}
       */
      size: {
        type: String,
        default: 'auto',
      },
    },

    computed: {
      colClasses () {
        let [normal, tablet] = this.size.split(':')
        return [
          normal && `col-${normal}`,
          tablet && `tablet-${tablet}`,
        ]
      },
    },
  }
</script>
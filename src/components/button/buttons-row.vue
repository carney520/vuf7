<template lang="jade">
 .buttons-row(:class="buttonsRowClasses")
    slot
</template>

<script>
  export default {
    name: 'ButtonsRow',
    props: {
      color: String,
    },
    computed: {
      buttonsRowClasses () {
        return [
          this.color && `theme-${this.color}`,
        ]
      },
    },
  }
</script>
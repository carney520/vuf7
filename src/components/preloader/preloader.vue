<template lang="jade">
  span.preloader(:class="{'preloader-white': white}")
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'Preloader',
    props: {
      white: {
        type: Boolean,
        coerce: coerceBoolean,
      },
    },
  }
</script>
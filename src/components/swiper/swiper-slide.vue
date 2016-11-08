<template lang="jade">
  .swiper-slide
    slot
</template>
<script>
  import { coerceNumber } from '../../helpers/coerces'
  export default {
    name: 'SwiperSlide',
    props: {
      autoplay: {
        type: Number,
        coerce: coerceNumber
      }
    }
  }
</script>
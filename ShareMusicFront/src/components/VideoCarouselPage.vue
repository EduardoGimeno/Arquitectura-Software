<template>
  <mdb-carousel :interval="8000" showControls showIndicators>
    <mdb-carousel-item video src="https://mdbootstrap.com/img/video/Agua-natural.mp4" alt="Third slide" auto loop>
    </mdb-carousel-item>
  </mdb-carousel>
</template>

<script>
import { mdbCarousel, mdbCarouselItem } from 'mdbvue';

export default {
  name: 'VideoCarouselPage',
  components: {
    mdbCarousel,
    mdbCarouselItem
  }
};
</script>

<style scoped>
</style>
<template>
    <div class="slider__container">
      <carousel class="slider__carousel" :per-page="1" :mouse-drag="false">
        <slide class="slider__slide">
          <img class="slider__image" :src="harassment"/>
        </slide>
        <slide>
          <img class="slider__image" :src="harassment"/>
        </slide>
        <slide>
          <img class="slider__image" :src="harassment"/>
        </slide>
        <slide>
          <img class="slider__image" :src="harassment"/>
        </slide>
      </carousel>
    </div>
</template>

<script>

    import VueCarousel from 'vue-carousel';
    import { Carousel, Slide } from 'vue-carousel';
    import Harassment from '@/assets/img/harassment.jpg';
    export default {
        name: "Slider",
        components: {  VueCarousel, Carousel, Slide },
        data: () => ({
          harassment: Harassment
        }),
        methods: {
           
        },
    }
</script>

<style scoped lang="scss">
    .slider {
      &__container {
        border: 1.5px solid $white;
        .VueCarousel-dot-container {
          margin: 0;
        }
      }
      &__carousel {
        &.VueCarousel {
           .VueCarousel-pagination{
            margin-top: -6rem !important;
            z-index: 5 !important;
          }
        }
      }
      &__image {
       width: 100%;
      }

    }
</style>

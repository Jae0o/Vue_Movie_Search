<template>
  <transition name="fade">
    <section
      v-if="movieStore.isLoading"
      class="loading">
      <div class="loading__innerbox">
        <p class="loading__text">Loading...</p>

        <img
          class="loading__img"
          src="https://res.cloudinary.com/dalxgxu2o/image/upload/v1699980818/IMG_0508_mke9kp.gif" />
      </div>
    </section>
  </transition>
</template>

<script setup lang="ts">
import { useMovieStore } from "~/store/MovieStore";
const movieStore = useMovieStore();
</script>

<style lang="scss" scoped>
.loading {
  background-color: rgba(#000000, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .loading__innerbox {
    width: 420px;
    height: 420px;
    background-color: var(--color-semi-white);

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;

    .loading__text {
      width: 100%;
      height: 80px;

      position: absolute;
      top: 40px;
      left: 40px;

      color: var(--color-semi-white);
      font-size: 32px;
    }

    .loading__img {
      width: 400px;
      height: 400px;
      border-radius: 12px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

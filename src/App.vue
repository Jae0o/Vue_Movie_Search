<template>
  <section class="app">
    <MovieNavbar />
    <RouterView />
  </section>

  <LoadingPage />
</template>

<script setup lang="ts">
import MovieNavbar from "./components/MovieNavbar.vue";
import LoadingPage from "./components/LoadingPage.vue";
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;

  position: relative;
  z-index: 0;

  background: url("/background.jpg") center center fixed no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  user-select: none;
}
</style>

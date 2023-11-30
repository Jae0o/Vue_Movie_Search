<template>
  <section class="app">
    <MovieNavbar />
    <RouterView />
  </section>
</template>

<script setup lang="ts">
import MovieNavbar from "./components/MovieNavbar.vue";
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;

  background-image: linear-gradient(360deg, #000, #adb5bd);

  display: flex;
  flex-direction: column;
}
</style>
s

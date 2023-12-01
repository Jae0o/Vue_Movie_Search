<template>
  <form
    class="navbar"
    @submit.prevent="searchMovie">
    <div class="navbar__actions">
      <input
        class="navbar__input"
        :value="title"
        placeholder="입력후 Enter를 눌러주세요!"
        @input.stop="title = ($event.target as HTMLInputElement).value" />
      <button class="navbar__button">
        <span class="material-symbols-outlined"> search </span>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMovieStore } from "~/store/MovieStore";
import router from "~/routes";

const movieStore = useMovieStore();

const title = ref<string>("");

function searchMovie() {
  router.push({
    name: "movieList",
    params: {
      title: title.value
    }
  });
  movieStore.fetchNewMovieList(title.value);
  title.value = "";
}
</script>

<style lang="scss" scoped>
.navbar {
  flex-shrink: 0;
  width: 100%;
  height: 15%;
  min-height: 60px;
  max-height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.7);

  .navbar__actions {
    width: 60%;
    height: 40px;
    max-width: 600px;
    min-width: 300px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 12px;
    .navbar__input {
      flex-grow: 1;
      height: 100%;
      padding: 0 10px;

      font-size: 20px;
      opacity: 0.9;

      outline: none;
      background-color: #ddd;
      border: none;

      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }

    .navbar__button {
      height: 100%;
      width: 60px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #adb5bd;
      outline: none;
      border: none;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;

      cursor: pointer;

      .material-symbols-outlined {
        transition: all 0.3s;
      }

      &:hover {
        .material-symbols-outlined {
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>

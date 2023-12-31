<template>
  <ul class="movielist">
    <li
      v-for="list in movieStore.movieList"
      :key="list.imdbID"
      class="movielist__item">
      <MovieListItem :movie="list" />
    </li>
    <button
      class="movielist__button"
      @click="fetchNextList">
      <span class="material-symbols-outlined"> add </span>
    </button>
  </ul>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useMovieStore } from "../../store/MovieStore";
import MovieListItem from "./MovieListItem.vue";
import router from "../../routes";

const movieStore = useMovieStore();

async function fetchList() {
  if (typeof router.currentRoute.value.params.title !== "string") return;
  const title: string = router.currentRoute.value.params.title;
  await movieStore.fetchNewMovieList(title);
}

async function fetchNextList() {
  movieStore.page = movieStore.page + 1;
  movieStore.fetchNextMovieList(movieStore.page);
}

onMounted(() => {
  fetchList();
});
</script>

<style lang="scss" scoped>
.movielist {
  width: 100%;
  flex-grow: 1;

  position: relative;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-items: center;

  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .movielist__item {
    width: 250px;
    height: 320px;
    margin: 10px 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(#000, 0.6);
    border-radius: 8px;
  }

  .movielist__button {
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 40px;

    outline: none;
    border: none;
    background-color: rgba(#adb5bd, 0.8);
    border-radius: 50%;

    cursor: pointer;
    transition: all 0.3s;
    .material-symbols-outlined {
      font-size: 32px;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
}
@media (max-width: 1300px) {
  .movielist {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1120px) {
  .movielist {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 760px) {
  .movielist {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .movielist {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

<template>
  <div
    class="item"
    @click="selectedMovie(movie.imdbID)">
    <div class="item__imgbox">
      <img
        :src="movie.Poster"
        alt="movie_poster"
        class="item__img" />
    </div>

    <div class="item__info">
      <div class="item__info-top">
        <h1 class="item__title">
          {{ movie.Title }}
        </h1>
        <h4 class="item__year">
          {{ movie.Year }}
        </h4>
      </div>
      <span class="item__type">
        {{ movie.Type }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Movie } from "../../Types/MovieTypes";
import router from "../../routes";

defineProps<{
  movie: Movie;
}>();

async function selectedMovie(id: string) {
  router.push({
    name: "movieInfo",
    params: {
      id
    }
  });
}
</script>

<style scoped lang="scss">
.item {
  width: 210px;
  height: 280px;

  position: relative;
  border-radius: 4px;

  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  .item__imgbox {
    width: 100%;
    height: 100%;

    position: absolute;
    .item__img {
      width: 210px;
      height: 280px;
      object-fit: cover;
    }
  }

  .item__info {
    width: 100%;
    height: 100%;

    position: absolute;
    right: -105%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    color: var(--color-semi-white);
    background-color: rgba(#000, 0.8);
    box-sizing: border-box;
    transition: all 0.3s;

    .item__info-top {
      width: 100%;
      flex-grow: 1;
      padding: 10px;

      display: flex;
      flex-direction: column;

      box-sizing: border-box;

      .item__title {
        width: 100%;
        margin-bottom: 10px;

        font-size: 24px;
        -webkit-line-clamp: 3;
        text-overflow: ellipsis;
      }
    }

    .item__type {
      flex-shrink: 0;
      padding: 4px 6px;
      margin: 10px;

      color: var(--color-dark);
      background-color: var(--color-semi-white);
      border-radius: 4px;
    }
  }

  &:hover {
    transform: scale(1.1);
    .item__info {
      right: 0;
    }
  }
}
</style>

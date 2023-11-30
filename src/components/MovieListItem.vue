<template>
  <div class="item">
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
import { Movie } from "~/Types/MovieTypes";

defineProps<{
  movie: Movie;
}>();
</script>

<style scoped lang="scss">
.item {
  width: 210px;
  height: 280px;
  position: relative;
  overflow: hidden;

  cursor: pointer;
  .item__imgbox {
    position: absolute;
    width: 100%;
    height: 100%;

    .item__img {
      width: 210px;
      height: 280px;
      object-fit: cover;
    }
  }

  .item__info {
    position: absolute;
    right: -105%;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    background-color: rgba(#000, 0.8);
    box-sizing: border-box;
    transition: all 0.3s;

    color: var(--color-semi-white);

    .item__info-top {
      box-sizing: border-box;
      width: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      padding: 10px;

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
      background-color: var(--color-semi-white);

      padding: 4px 6px;
      margin: 10px;
      border-radius: 4px;

      color: var(--color-dark);
    }
  }

  &:hover {
    .item__info {
      right: 0;
    }
  }
}
</style>

<template>
  <section class="info__container">
    <div
      v-if="!movieStore.isLoading"
      class="info">
      <div class="info__header">
        <div class="info-details">
          <h1 class="info__title">{{ movieStore.movieInfo.Title }}</h1>
          <DetailTextLine
            :text="movieStore.movieInfo.Released"
            tag-name="Released" />
          <DetailTextLine
            :text="movieStore.movieInfo.Director"
            tag-name="Director" />

          <DetailTextLine
            :text="movieStore.movieInfo.Writer"
            tag-name="Writer" />

          <DetailTextLine
            :text="movieStore.movieInfo.Actors"
            tag-name="Actors" />

          <DetailTextLine
            :text="movieStore.movieInfo.Awards"
            tag-name="Awards" />
        </div>

        <div class="info__poster">
          <img
            class="info__img"
            :src="movieStore.movieInfo.Poster" />
        </div>
      </div>

      <div class="info__plot">{{ movieStore.movieInfo.Plot }}</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useMovieStore } from "~/store/MovieStore";
import router from "~/routes";
import DetailTextLine from "./DetailTextLine.vue";

const movieStore = useMovieStore();

async function getInfo() {
  if (typeof router.currentRoute.value.params.id !== "string") return;
  const id: string = router.currentRoute.value.params.id;
  await movieStore.fetchMovieInfo(id);
}

onMounted(() => getInfo());
</script>

<style lang="scss" scoped>
.info__container {
  width: 100%;
  height: 100%;

  padding: 40px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  overflow: hidden;

  .info {
    flex-shrink: 0;
    width: 800px;
    height: 100%;
    padding: 20px;

    color: var(--color-semi-white);
    background-color: rgba(#000, 0.7);
    box-sizing: border-box;
    border-radius: 12px;
    overflow: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .info__header {
    width: 100%;

    display: flex;
    justify-content: space-between;

    .info-details {
      width: 400px;

      display: flex;
      flex-direction: column;
      align-items: center;

      .info__title {
        flex-shrink: 0;
        width: 400px;
        height: 70px;
        margin-bottom: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 30px;
        font-weight: 500;
        text-align: center;

        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .info__poster {
      width: 400px;

      display: flex;
      justify-content: center;
      align-items: center;
      .info__img {
        width: 300px;
        height: 400px;

        border-radius: 12px;
        object-fit: contain;
      }
    }
  }
  .info__plot {
    margin-top: 40px;

    font-size: 16px;
    line-height: 1.4;
  }
}

@media (max-width: 800px) {
  .info__header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .info__plot {
    width: 400px;
    padding-bottom: 40px;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>

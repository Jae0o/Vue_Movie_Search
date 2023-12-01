import { createRouter, createWebHistory } from "vue-router";
import MovieHome from "~/components/MovieHome.vue";
import MovieListPage from "~/components/MovieList/MovieListPage.vue";
import MovieInfoPage from "~/components/MovieInfo/MovieInfoPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MovieHome },
    { name: "movieList", path: "/movie/:title", component: MovieListPage },
    { name: "movieInfo", path: "/info/:id", component: MovieInfoPage }
  ]
});

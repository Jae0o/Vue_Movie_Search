import { createRouter, createWebHistory } from "vue-router";
import MovieHome from "~/components/MovieHome.vue";
import MovieListPage from "~/components/MovieListPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MovieHome },
    { name: "movieList", path: "/movie/:title", component: MovieListPage }
  ]
});

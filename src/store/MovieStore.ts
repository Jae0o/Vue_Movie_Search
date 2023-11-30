import { defineStore } from "pinia";
import { MovieInfo, MovieList, ResponseListType } from "../Types/MovieTypes";
import axios from "axios";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    movieList: [] as MovieList,
    movieInfo: {} as MovieInfo,
    page: 1 as number
  }),
  actions: {
    async fetchNewMovieList(title: string) {
      this.page = 1;
      const responce: ResponseListType = await axios
        .get("/api/movieListAPI", { params: { title, page: 1 } })
        .then((res) => res.data);
      this.movieList = responce.Search;
    },

    async fetchNextMovieList(title: string, page: number) {
      const responce: ResponseListType = await axios
        .get("/api/movieListAPI", { params: { title, page } })
        .then((res) => res.data);
      this.movieList = [...this.movieList, ...responce.Search];
    },

    async fetchMovieInfo(id: string) {
      const responce: MovieInfo = await axios
        .get("/api/movieInfoAPI", { params: { id } })
        .then((res) => res.data);
      this.movieInfo = responce;
    }
  }
});

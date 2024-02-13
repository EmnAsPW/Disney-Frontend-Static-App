import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "63be29f56ec440f33f751233689d251d";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=63be29f56ec440f33f751233689d251d";
//https://api.themoviedb.org/3/movie/550?api_key=63be29f56ec440f33f751233689d251d

//https://api.themoviedb.org/3/trending/all/day?api_key=63be29f56ec440f33f751233689d251d

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};

import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Slider() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  return (
    <div className="flex overflow-x-auto">
      {movieList.map((item) => (
        <img
          src={IMAGE_BASE_URL + item.backdrop_path}
          className="min-w-full h-[310px] object-cover"
        />
      ))}
    </div>
  );
}

export default Slider;

import React, { useContext, useState } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { MovieDetails } from "./MovieDetails";

export const MovieCard = ({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
  popularity,
}) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  const [,setMovieDetails] = useContext(MoviesContext);

  const showCardDetails = () => {
    const currentMovie = {
      hidden: false,
      title,
      poster_path,
      overview,
      vote_average,
      release_date,
    };

    setMovieDetails(currentMovie);
  };

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <img src={API_IMG + poster_path} alt="movie-poster" />
      <h2>IMDb: {vote_average}</h2>
      <button onClick={showCardDetails}>View Details</button>
    </div>
  );
};

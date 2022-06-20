import React, { useState, useEffect } from "react";
import { MoviesContext } from "./context/MoviesContext";

/* import { GetMoviesData } from "./helpers/getMoviesData"; */

import { DiscoverHeader } from "./containers/DiscoverHeader";
import { MoviesCards } from "./containers/MoviesCards";
import { MovieDetails } from "./components/MovieDetails";

import "./moviesapp.css";

import 'dotenv/config';

const API_KEY = process.env.API_KEY;

const API_URL =
  `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

export const MoviesApp = () => {
  const [movies, setMovies] = useState('loading');

  useEffect(() => {
    fetch(API_URL)
      .then((tmdbRes) => tmdbRes.json())
      .then((moviesData) => setMovies(moviesData.results));
  }, []);

  const [movieDetails, setMovieDetails] = useState({hidden: true});

  return (
    <>
      <MoviesContext.Provider value={[movies, setMovieDetails]}>
        <header>
          <h1>MoviesApp</h1>
        </header>
        <main>
          <DiscoverHeader setMovies={setMovies} API_URL={API_URL}/>

          {
            movies === "loading" ? 
            (<h1>Cargando</h1>) : (<MoviesCards/>)
          }

          {
            !movieDetails.hidden && <MovieDetails MovieDetails={movieDetails}/>
          }
        </main>
      </MoviesContext.Provider>
    </>
  );
};

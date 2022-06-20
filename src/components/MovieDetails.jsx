import React, { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';

export const MovieDetails = ({MovieDetails}) => { 
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  const [,setMovieDetails] = useContext(MoviesContext);

  const hideCardDetails = () => {
    setMovieDetails({hidden: true});
  }
  
  return (
    <div className='movie-details'>
        <button onClick={hideCardDetails}>Cerrar</button>
        <h2>{MovieDetails.title}</h2>
        <img src={API_IMG + MovieDetails.poster_path} alt="movie-poster-details"/>
        <h1>Overview</h1>
        <p>{MovieDetails.overview}</p>
        <h3>imdB: {MovieDetails.vote_average}</h3>
        <h3>Release date:{MovieDetails.release_date}</h3>
    </div>
  );
};

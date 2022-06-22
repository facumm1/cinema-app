//Importación de hooks y el contexto creado en MoviesApp.jsx que actua de provider
import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

//Obtengo los detalles de la pelicula del componente padre
export const MovieDetails = ({ MovieDetails }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  //Obtengo las peliculas actuales de mi contexto general
  const [, , , setMovieDetails] = useContext(MoviesContext);

  const hideCardDetails = () => {
    setMovieDetails({ hidden: true });
  };

  return (
    //Conditional rendering en donde si la pelicula que se solicitó no tiene poster (generalmente sucede cuando se realiza una búsqueda de películas), renderizo un poster con solo el titulo y un mensaje de poster no disponible.
    <div className="movie-details">
      <div className="details-card">
        {
          MovieDetails.poster_path
          ? 
          <img src={API_IMG + MovieDetails.poster_path} alt="movie-poster" />
          :
          <div className="movie-poster-unavailable">
            <h4>
              {MovieDetails.title} 
              <br />
              <span>(Poster unavailable)</span> 
            </h4> 
          </div>
        }
        <article className="details-article">
          <h1>{MovieDetails.title}</h1>
          <h2>Overview</h2>
          <p>{MovieDetails.overview}</p>
          <h3>imdB: {MovieDetails.vote_average}</h3>
          <h3>Release date: {MovieDetails.release_date}</h3>
          <button onClick={hideCardDetails}>Close</button>
        </article>
      </div>
    </div>
  );
};

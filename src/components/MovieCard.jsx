//Importación de hooks y el contexto creado en MoviesApp.jsx que actua de provider
import React, { useContext, useState } from "react";
import { MoviesContext } from "../context/MoviesContext";

//Obtengo la información de cada película con un destructuring desde los parámetros de la expresión de función principal
export const MovieCard = ({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
  popularity,
}) => {
  //Ruta para cada imagen
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  //Obtengo el set de movieDetails (vista de detalles) de mi contexto general
  const [,,, setMovieDetails] = useContext(MoviesContext);

  //Cuando se hace click en un poster de pelicula, le envio los detalles a movieDetails para que se pueda renderizar con la información correspondiente
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
    //Conditional rendering en donde si la pelicula que se solicitó no tiene poster (generalmente sucede cuando se realiza una búsqueda de películas), renderizo un poster con solo el titulo y un mensaje de poster no disponible.
    <article className="movie-card">
      <p>{vote_average}</p>
      {
        poster_path
        ? 
        <img src={API_IMG + poster_path} alt="movie-poster" />
        :
        <div className="movie-poster-unavailable">
          <h4>
            {title} 
            <br />
            <span>(Poster unavailable)</span> 
          </h4> 
        </div>
      }
      <button onClick={showCardDetails}></button>
    </article>
  );
};

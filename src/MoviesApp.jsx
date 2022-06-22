// Importaciones de hook useState y el contexto que va a actuar de provider para sus componentes hijos
import React, { useState } from "react";
import { MoviesContext } from "./context/MoviesContext"; 

//Importación de custom hook, el cual me devuelve un array con las peliculas que proporciona la API
import { useFetch } from "./hooks/useFetch";

//Containers para la estructura general de la página (header, main, footer)
import { PageHeader } from "./components/page-containers/PageHeader";
import { PageMain } from "./components/page-containers/PageMain";
import { PageFooter } from "./components/page-containers/PageFooter";

//Importación de estilos CSS generados con SASS
import "./styles/moviesapp.css";

//URL de la API que devuelve las películas ordenadas por popularidad (de mayor a menor)
//API KEY en variable de entorno
const API_URL =
  `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`;

//Componente principal
export const MoviesApp = () => {
  // Peliculas ordenadas por popularidad
  const {state:movies, setState:setMovies} = useFetch(API_URL);

  //Estado inicial de la ventana de detalles (escondido)
  const [movieDetails, setMovieDetails] = useState({hidden: true});
 
  return (
    // Contexto creado para no perder el flujo de props y facilitar el acceso a los estados de más arriba
    <>
      <MoviesContext.Provider 
        value={[movies, setMovies, movieDetails, setMovieDetails, API_URL]}
      >
        <PageHeader/>
        <PageMain/>
        <PageFooter/>
      </MoviesContext.Provider>
    </>
  );
};

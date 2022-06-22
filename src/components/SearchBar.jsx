//Importación de hooks y el contexto creado en MoviesApp.jsx que actua de provider
import React, { useContext, useState } from "react";
import { MoviesContext } from "../context/MoviesContext";

//Importación de icono para el boton de buscar
import {GoSearch} from "react-icons/go";

//Recibo del componente padre 2 props
export const SearchBar = ({setSearchUrl, setDisableRating}) => {
  //Obtengo de mi contexto general, la URL de discover y el set de Movies para renderizar de nuevo las peliculas resultado de la búsqueda
  const [, setMovies ,,, API_URL] = useContext(MoviesContext);

  //Valor de input
  const [query, setQuery] = useState("");

  //La url principal es la de Discover
  let searchUrl = API_URL;

  //Una vez escrito el nombre de una pelicula (star wars por ejemplo), seteo el valor del input a query
  const handleQueryValue = ({ target }) => {
    setQuery(target.value);
  };

  const searchMovies = async (e) => {
    e.preventDefault();
    
    //Si el input esta vacio, renderizo las peliculas ordenadas por popularidad (discover)
    if(query === ''){
      searchUrl = API_URL;
    } 
    //Si tiene caracteres, renderizo los resultados de la búsqueda
    else{
      //API_KEY en variable de entorno
      searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;
    }

    try {
      const res = await fetch(searchUrl);
      const data = await res.json();

      setMovies(data.results);

      //renderizo las peliculas dependiendo del condicional de más arriba
      setSearchUrl(searchUrl);

      //Deshabilito el filtro por clasificación
      setDisableRating(true);
    } catch {
      throw new Error(e);
    }
  };

  return (
    <form onSubmit={searchMovies}>
      <input
        type="text"
        placeholder="Search movies"
        onChange={handleQueryValue}
      />
      <button>
        <GoSearch/>
      </button>
    </form>
  );
};

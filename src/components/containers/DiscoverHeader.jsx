//Importación de hooks y el contexto creado en MoviesApp.jsx que actua de provider
import React, { useState } from "react";
import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";

//Importación de componentes simples
import { RatingBtns } from "../RatingBtns";
import { SearchBar } from "../SearchBar";

export const DiscoverHeader = () => {
  //Obtengo la URL de discover desde mi contexto general
  const [, , , , API_URL] = useContext(MoviesContext);

  //Nuevo state con la URL de discover como estado inicial
  const [searchUrl, setSearchUrl] = useState(API_URL);

  //Nuevo state para quitarle el filtro por clasificación
  const [disableRating, setDisableRating] = useState(false);

  return (
    //Conditional rendering al final de todo, si no se introdujo nada en el campo de búsqueda, volverá a la vista de discover (peliculas ordenadas por popularidad)

    <div className="discover-header">
      <div className="rating-search-container">
        <RatingBtns
          API_URL={searchUrl}
          disableRating={disableRating}
          setDisableRating={setDisableRating}
        />
        <SearchBar
          setSearchUrl={setSearchUrl}
          setDisableRating={setDisableRating}
        />
      </div>
      {
        searchUrl === API_URL 
        ? 
        <h1>
          Discover trending movies
        </h1> 
        : 
        <div>
          <h1>Search results</h1>
        </div>
      }
    </div>
  );
};

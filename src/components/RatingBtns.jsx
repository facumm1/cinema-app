//Importación de hooks y el contexto creado en MoviesApp.jsx que actua de provider
import React, { useContext, useRef, useState } from "react";
import { MoviesContext } from "../context/MoviesContext";

//Importación de custom hook
import { useFetch } from "../hooks/useFetch";

//Importación de icono de estrella para "Rating:"
import { FaStar } from "react-icons/fa";

//Obtengo props del componente padre de forma más rápida haciendo destructuring
export const RatingBtns = ({ API_URL, disableRating, setDisableRating }) => {
  //Obtengo las peliculas actuales de mi contexto general
  const [, setMovies] = useContext(MoviesContext);

  const { state: moviesNonFiltered } = useFetch(API_URL);

  //Estados para el filtrado por clasificación

  //Estado para deshabilitar filtro cuando se hace click en una estrella ya seleccionada
  const [filterState, setFilterState] = useState([]);

  //Estado para "pintar" las estrellas anteriores a la seleccionada
  const [ratingValue, setRatingValue] = useState(null);

  const filterMovies = ({ target }) => {
    setDisableRating(false);

    //Obtengo los intervalos (ej: 6-8) de la estrella (boton) seleccionado y los almaceno en un array
    const intervals = target.value;
    const [firstInterval, secondInterval] = intervals.split(",");

    //Memorizo que estrella (boton) fue presionada
    let currentActiveButton = +target.id;
    setRatingValue(currentActiveButton);

    //Si se presiona un boton que no fue presionado (estrella despintada) realizo el filtro de peliculas por clasificación normalmente
    if (!filterState.includes(+target.id)) {
      let moviesFiltered = moviesNonFiltered.filter(
        ({ vote_average }) =>
          vote_average >= firstInterval && vote_average <= secondInterval
      );

      //Renderizo las peliculas filtradas
      setMovies(moviesFiltered);

      //Memorizo que boton (estrella) fue seleccionado
      setFilterState([+target.id]);
    }
    //De haber ya sido presionado el boton (estrella pintada) 
    else {
      //Elimino su id (referencia del boton memorizado)
      filterState.splice(filterState.indexOf(+target.id), 1);

      //Renderizo las peliculas sin filtro
      setMovies(moviesNonFiltered);

      //Elimino el boton memorizado anteriormente
      setFilterState([...filterState]);

      //Estrella despintada
      setRatingValue(null);
    }
  };

  return (
    <div className="rating-btns">
      <p>Rating:</p>
      <div>
        <button id={1} value={[0, 2]} onClick={filterMovies}>
          <FaStar
            color={
              ratingValue >= 1 && disableRating === false ? "#ffdd00" : "#f4f4f9"
            }
          />
        </button>
        <button id={2} value={[2, 4]} onClick={filterMovies}>
          <FaStar
            color={
              ratingValue >= 2 && disableRating === false ? "#ffdd00" : "#f4f4f9"
            }
          />
        </button>
        <button id={3} value={[4, 6]} onClick={filterMovies}>
          <FaStar
            color={
              ratingValue >= 3 && disableRating === false ? "#ffdd00" : "#f4f4f9"
            }
          />
        </button>
        <button id={4} value={[6, 8]} onClick={filterMovies}>
          <FaStar
            color={
              ratingValue >= 4 && disableRating === false ? "#ffdd00" : "#f4f4f9"
            }
          />
        </button>
        <button id={5} value={[8, 10]} onClick={filterMovies}>
          <FaStar
            color={
              ratingValue >= 5 && disableRating === false ? "#ffdd00" : "#f4f4f9"
            }
          />
        </button>
      </div>
    </div>
  );
};

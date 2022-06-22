import React from 'react';

//Importación de hook useContext y el MovieContext.Provider para obtener los estados iniciales creados en MoviesApp.jsx
import { useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';

//Importación de componente: ventana pop-up con detalles de la película
import { MovieDetails } from '../MovieDetails';

//Importación de containers
import { MoviesCards } from '../containers/MoviesCards';
import { DiscoverHeader } from '../containers/DiscoverHeader';

export const PageMain = () => {

  //Extraigo los states de mi contexto creado en MoviesApp.jsx
  const [movies ,, movieDetails] = useContext(MoviesContext);

  return (

    //En la primera sintaxis de conditional rendering (movies === "loading"...), si las peliculas aún no fueron obtenidas, aparecerá un loader hasta que termine su carga.

    //En la segunda sintaxis de conditional rendering (!moviesDetails.hidden &&...), si el poster de una pelicula es presionado (onClick), cambiará el estado de movieDetails.hidden a true y se renderizará la vista de detalles (ventana pop-up)

    <main>
      <DiscoverHeader/>

      {
          movies === "loading" ? 
          (<div className="loader"></div>) : (<MoviesCards/>)
      }

      {
          !movieDetails.hidden && <MovieDetails MovieDetails={movieDetails}/>
      }
    </main>
  )
}

//Importación de hooks y el contexto creado en MoviesApp.jsx que actua de provider
import React, { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";

//Importación de componentes simples
import { MovieCard } from "../MovieCard";

export const MoviesCards = () => {
  //Obtengo las peliculas actuales de mi contexto general
  const [movies] = useContext(MoviesContext);
  
  return (
    //Conditional rendering en donde si la API contiene peliculas, renderizará sus posters en forma de cards, de lo contrario mostrará un mensaje de que no se encontraron peliculas (sucede cuando se realiza una búsqueda o cuando se filtra por clasificación).
    <section className="card-container">
      {
        movies.length > 0 ?
        (
          movies.map((movieReq) => (
            <MovieCard key={movieReq.id} {...movieReq} />
          ))
        )
        :
        (<h1>No movies found</h1>)
      }
    </section>
  );
};

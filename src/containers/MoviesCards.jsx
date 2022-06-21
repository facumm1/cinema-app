import React, { useContext } from "react";
import { MovieCard } from "../components/MovieCard";
import { RatingBtns } from "../components/RatingBtns";
import { MoviesContext } from "../context/MoviesContext";

export const MoviesCards = () => {
  const [movies] = useContext(MoviesContext);
  
  return (
    <div className="card-container">
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
    </div>
  );
};

import React, { useContext, useRef, useState } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { useFetch } from "../hooks/useFetch";

export const RatingBtns = ({API_URL}) => {

  const [,,setMovies] = useContext(MoviesContext);

  const {state:moviesForFilter} = useFetch(API_URL);

  const [filterState, setFilterState] = useState([]);

  const filterMovies = ({target}) => {
    const intervals = target.value;

    const [firstInterval, secondInterval] = intervals.split(',');

    setFilterState([...filterState, target.id]);

    let moviesFiltered;

    moviesFiltered = moviesForFilter.filter(
      ({ vote_average }) =>
        vote_average >= firstInterval && vote_average <= secondInterval 
    );

    setMovies(moviesFiltered);

    /* console.log(filterState);

    console.log(moviesFiltered); */
  };

  return (
    <div className="rating-btns">
      <p>Rating:</p>
      <div>
        <button id={0} value={[0,2]} onClick={filterMovies}>
          0-2
        </button>
        <button id={2} value={[2,4]} onClick={filterMovies}>
          2-4
        </button>
        <button id={4} value={[4,6]} onClick={filterMovies}>
          4-6
        </button>
        <button id={6} value={[6,8]} onClick={filterMovies}>
          6-8
        </button>
        <button id={8} value={[8,10]} onClick={filterMovies}>
          8-10
        </button>
      </div>
    </div>
  );
};

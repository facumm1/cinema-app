import React, { useState } from "react";
import { RatingBtns } from "../components/RatingBtns";
/* import { GetMoviesData } from "../helpers/getMoviesData"; */

export const DiscoverHeader = ({ setMovies, API_URL }) => {
  const [query, setQuery] = useState("");

  const handleQueryValue = ({ target }) => {
    setQuery(target.value);
  };

  const searchMovies = async (e) => {
    e.preventDefault();

    let SEARCH_URL;

    if(query == ''){
      SEARCH_URL = API_URL;
    } 
    else{
      SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    }

    try {
      const res = await fetch(SEARCH_URL);
      const data = await res.json();
      setMovies(data.results);

    } catch {
      throw new Error(e);
    }
  };

  return (
    <div className="discover-header">
      <h1>Discover</h1>
      <RatingBtns />
      <form onSubmit={searchMovies}>
        <input
          type="text"
          placeholder="Search movies"
          onChange={handleQueryValue}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

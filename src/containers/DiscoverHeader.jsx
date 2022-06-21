import React, { useState } from "react";
import { RatingBtns } from "../components/RatingBtns";

export const DiscoverHeader = ({ setMovies, API_URL }) => {
  const [query, setQuery] = useState("");

  const [searchUrlState, setSearchUrlState] = useState(API_URL);

  let searchUrl = API_URL;

  const handleQueryValue = ({ target }) => {
    setQuery(target.value);
  };

  const searchMovies = async (e) => {
    e.preventDefault();
    
    if(query === ''){
      searchUrl = API_URL;
    } 
    else{
      searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    }

    try {
      const res = await fetch(searchUrl);
      const data = await res.json();
      setMovies(data.results);
      setSearchUrlState(searchUrl);
    } catch {
      throw new Error(e);
    }
  };

  return (
    <div className="discover-header">
      <h1>Discover</h1>
      <RatingBtns API_URL={searchUrlState}/>
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

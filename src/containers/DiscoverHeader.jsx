import React, { useState } from "react";
import { RatingBtns } from "../components/RatingBtns";
import { GetMoviesData } from "../helpers/getMoviesData";

export const DiscoverHeader = ({setMovies}) => {

  const [query, setQuery] = useState('');

  
  const handleQueryValue = ({target}) => {
    setQuery(target.value);
  };

  const searchMovies = async (e) => {
    e.preventDefault();
    
    try{
      console.log("searching");
      const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
      const res = await fetch(API_URL);
      const data = await res.json();
      setMovies(data.results);
    }
    catch{
      console.log(e);
      console.log('error');
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

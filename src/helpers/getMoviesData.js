import { useEffect, useState } from "react";

export const GetMoviesData = (url) => {
  const [state, setState] = useState("loading");

  useEffect(() => {
    fetch(url)
      .then((moviesData) => moviesData.json())
      .then((moviesData) => setState(moviesData.results));
  }, []);

  return state;
};

import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState('loading');

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setState(data.results));
  }, [url]);

  return {state, setState};
};

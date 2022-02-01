import { useState, useEffect } from "react";
import { getData } from "../helpers/getData";

export const useGetData = (page) => {
  const [state, setState] = useState({
    characters: [],
    loading: true,
  });

  useEffect(() => {
    getData(page)
      .then(characters => {
        setState({
          characters: characters,
          loading: false,
        });
      })
  }, [page]);
  
  return state;
};

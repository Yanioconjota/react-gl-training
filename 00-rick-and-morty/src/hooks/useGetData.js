import { useState, useEffect } from "react";
import { getData } from "../helpers/getData";

export const useGetData = () => {
  
  const [state, setState] = useState({
    characters: [],
    loading: true
  });

  useEffect(() => {
    getData()
      .then(characters => {
        setState({
          characters: characters,
          loading: false,
        });
      })
  }, []);
  
  return state;
};

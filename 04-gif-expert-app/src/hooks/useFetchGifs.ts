import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category, limit, offset) => {

  const [state, setState] = useState({
    data: [],
    loading: true,
    limit: limit,
    offset: offset,
  });

  useEffect(() => {
    getGifs(category, limit, offset)
      .then( imgs => {
        setState({
          data: imgs,
          loading: false,
          limit: limit,
          offset: offset 
        });
      });
  }, [category, limit, offset]);

  return state; //{ data: [], loading: true }
}
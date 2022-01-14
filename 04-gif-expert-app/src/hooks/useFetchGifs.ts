import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { IGifState } from "../modules/exports";


export const useFetchGifs = (category: string, limit: number, offset: number) => {

  const [state, setState] = useState<IGifState>({
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
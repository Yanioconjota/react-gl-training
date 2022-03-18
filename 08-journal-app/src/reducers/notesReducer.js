/* state de las notas

  {
    notes: [],
    //active puede ser null o un objeto con la nota activa
    active: {
      id: 'ASKJHDSDSA1877/7',
      title: '',
      body: '',
      imageUrl: '',
      date: 123876123765
    },
    active: null
  }

*/

import { types } from "../types/types";

const initialState = {
  notes: [],
  active: null
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload
        }
      }

    case types.notesLoad:
      return {
        ...state,
        notes: [ ...action.payload ]
      }
  
    default:
      return state;
  }
};
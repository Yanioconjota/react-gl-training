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

    case types.notesAddNew:
      return {
        ...state,
        //recibimos el activeNote en el payload y la colocamos en la primera posición del array de notas
        notes: [ action.payload, ...state.notes ]
      }

    case types.notesLoad:
      return {
        ...state,
        notes: [ ...action.payload ]
      }

    case types.notesUpdated:
      return {
        ...state,
        notes: state.notes.map(
          note => note.id === action.payload.id
            ? action.payload.note
            : note
        )
      }
    
      case types.notesDelete:
        return {
          ///recibimos el state y purgamos la nota activa
          ...state,
          active: null,
          //sacamos la nota cuyo id coincida con eñ que viene del payload
          notes: state.notes.filter(note => note.id !== action.payload)
        }

      case types.notesLogoutCleaning:
        return {
          ...state,
          active: null,
          notes: []
        }
  
    default:
      return state;
  }
};
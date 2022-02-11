import { types } from "../types/types";

//ejemplo de state
/* const state = {
  name: 'Homero',
  logged: true
}; */

//ejemplo de action
/* const loginAction = {
  type: types.login,
  payload: {
    name: 'Homero',
    email: 'homero@email.com'
  }
}; */

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true
      }
    
    case types.logout:
      return {
        logged: false
      }
  
    default:
      return state;
  }
}
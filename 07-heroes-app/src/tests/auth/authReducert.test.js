import "@testing-library/jest-dom";
import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('pruebas con authReducer', () => {

  const typesDemo = {
    login: '[auth] Login',
    logout: '[auth] Logout',
  };
  test('debe retornar el estado por defecto', () => {
    const state = authReducer({logged: false}, {});
    //El estado inicial es logged en false
    expect(state).toEqual({ logged: false });
  });

  test('debe autenticar y colocar el "name" del usuario', () => { 
    const action = {
      type: types.login,
      payload: {
        name: 'Homero Thompson'
      }
    };
    //le pasamos el estado por default y el action 
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      name: 'Homero Thompson'
    });
   });

   test('debe borrar el name del usuaui y pasar logged a false', () => {
    //No le pasamos pauload porque el el método logouot automáticamente devuelve el logged en false
    const action = {
      type: types.logout
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: false });
   });
});
import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('pruebas con authReducer', () => {

  //mock del la respuesta de login de Google
  const mockUser = {
    uid: 'dsakjsa2e2323',
    displayName: 'Homero'
  };

  //mock del estado inicial
  const initState = {};

  test('la acción de Login debe retornar un uid y un name', () => {
    //El action debe tener un type y un payload
    const action = {
      type: types.login,
      payload: mockUser,
    };

    //El authReducer, recibe un state que por defecto es {} y un action
    const state = authReducer(initState, action);
    //este nos devuelve un objeto con esta estructura: { uid: 'dsakjsa2e2323', name: 'Homero' }
    console.log(state);
    expect(typeof state.uid).toBe("string");
    expect(typeof state.name).toBe("string");
    expect(state).toEqual({ uid: "dsakjsa2e2323", name: "Homero" });
  });

  test('La acción de Logout debe retornar un objeto vacío', () => {

    //no espera payload
    const action = {
      type: types.logout
    };

    const state = authReducer(initState, action);
    console.log(types.logout, state);
    //la acctón de logout vuelve es state a su valor por defecto que es un objeto vacío
    expect(state).toEqual(initState);
  });

  test('No debe hacer cambios en es state cuando la acción no se reconozca', () => {
    const mockState = { uid: "dsakjsa2e2323", name: "Homero" };

    const action = {
      type: 'dsdsds'
    };

    const state = authReducer(mockState, action);
    console.log('no action:', state);
    //si no pasamos ninguna acción devuelve el state original
    expect(state).toEqual(mockState);
  });
});
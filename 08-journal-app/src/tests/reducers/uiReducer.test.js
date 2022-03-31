import { uiReducer } from "../../reducers/uiReducer";
import { types } from "../../types/types";

const initialStateMock = {
  loading: false,
  msgError: null,
};

const errorMsgMock = 'Error message!';

describe('Pruebas con uiReducer', () => {
  test('Debe mostrar el mensaje de error que recibe', () => {

    const action = {
      type: types.uiSetError,
      payload: errorMsgMock
    };

    const state = uiReducer(initialStateMock, action);
    console.log(state);

    expect(state).toEqual({ loading: false, msgError: 'Error message!' });
  });

  test('Debe eliminar el mensaje de error', () => {

    const action = {
      type: types.uiRemoveError
    };

    //aunque reciba un mensaje en el state, siempre devolverá null en msgError
    const stateMock = {
      loading: false,
      msgError: errorMsgMock,
    };

    const state = uiReducer(stateMock, action);
    console.log(state);

    expect(state.msgError).toBe(null);
  });

  test('El loading debe estar en true', () => {

    const action = {
      type: types.uiStartLoading
    };

    const state = uiReducer(initialStateMock, action);
    console.log(state);

    expect(state.loading).toBe(true);
  });

  test('El loading debe estar en false', () => {

    const action = {
      type: types.uiFinishLoading
    };

    const state = uiReducer(initialStateMock, action);
    console.log(state);

    expect(state.loading).toBe(false);
  });

  test('Debe retornar el state que recibe si no reconoce la acción', () => {

    const stateMock = {
      loading: true,
      msgError: 'Error de capa 8',
    };

    const action = {
      type: 'acción'
    };

    const state = uiReducer(stateMock, action);
    console.log(state);

    expect(state).toBe(stateMock);
  });
});
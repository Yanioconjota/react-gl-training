import {
  setError,
  removeError,
  startLoading,
  finishLoading,
} from "../../actions/ui";
import { types } from "../../types/types";

describe('Pruebas con ui actions', () => {
  test('todas las funciones deben funcionar', () => {
    //setError() test

    const err = "Error!";

    //Retornan un objeto con el tipo especificado en el archivo ui y el payload el mensaje de error que recibe como argumento setError
    const setErrorAction = setError(err);

    console.log(setErrorAction);

    expect(setErrorAction).toEqual({
      type: types.uiSetError,
      payload: err,
    });

    //removeError() test

    const removeErrorAction = removeError();

    console.log(removeErrorAction);

    expect(removeErrorAction).toEqual({
      type: types.uiRemoveError,
    });

    //startLoading() test

    const startLoadingAction = startLoading();

    console.log(startLoadingAction);

    expect(startLoadingAction).toEqual({
      type: types.uiStartLoading,
    });

    //finishLoading() test

    const finishLoadingAction = finishLoading();

    console.log(finishLoadingAction);

    expect(finishLoadingAction).toEqual({
      type: types.uiFinishLoading,
    });
  });
});
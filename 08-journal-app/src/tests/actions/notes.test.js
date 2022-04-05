//*2-importaciones para el mockStore
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';
//-fin imports del mockStore
import { db } from '../../firebase/firebase-config';

import { startNewNote } from "../../actions/notes";
import { types } from "../../types/types";

//*3- config del muckStore
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

//hacemos el mock del estado del store actual
const store = mockStore({
  auth: {
    uid: 'testingUID'
  }
});

describe("Pruebas con notes actions", () => {
  //El método startNewNote accede al store para obtener el estado con getState y hace un dispatch de activeNote y addNewNote, previamente debemos hacer una configuración:
  
  //1- instalar redux-mock-store: npm install redux-mock-store --save-dev
  //2- hacemos las importaciones cecesarias
  //3- configurar el store
  test("debe crear una nueva nota con startNewNote", async() => {
    //FirebaseError: 7 PERMISSION_DENIED: Missing or insufficient permissions.
    //Necesitamos estar "autenticados" por ende crearemos una db de testing en firebase y agregamos la configuración a nuestro archivo src/firebase/firebase-config.js

    await store.dispatch(startNewNote());

    //con ese dispatch de startNewNote se disparan las acciones activeNote y addNewNote y las obtenemos mediante:
    const actions = store.getActions();
    console.log(actions);

    //Nuesro expect debe recibir un objeto con esta estructura de payloadMock, donde claramente el id y la fecha van a cambiar.
    const payloadMock = {
      id: expect.any(String),
      title: "",
      body: "",
      date: expect.any(Number),
    };

    //prueba del dispatch de activeNote
    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: payloadMock,
    });

    //prueba del dispatch de addNewNote
    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: payloadMock,
    });

    //Borramos la nota creada para no contaminar la db de testing

    //testingUID corresponde al UID que hardcodeamos en firebase para la db de testing
    await db.doc(`testingUID/journal/notes/${actions[0].payload.id}`).delete();

    //no repetimos el delete porque es el mismo ID para ambas acciones
  });
});

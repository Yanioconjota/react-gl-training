/**
 * @jest-environment node
 */

// para evitar el error: FIRESTORE (9.6.8) INTERNAL ASSERTION FAILED: Unexpected state debe agregarse el comentario anterior en la primera línea

//*2-importaciones para el mockStore
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
//-fin imports del mockStore
import { db } from "../../firebase/firebase-config";

import {
  startNewNote,
  activeNote,
  addNewNote,
  setNotes,
  refreshNote,
  startLoadingNotes,
  startSaveNote,
  startDeletingNote,
} from "../../actions/notes";
import { types } from "../../types/types";

//*3- config del muckStore
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

//creamos un estado inicial
const initState = {
  auth: {
    uid: "testingUID",
  },
};

//hacemos el mock del estado del store actual
let store = mockStore(initState);

describe("Pruebas con notes actions", () => {

  beforeEach(() => {
    //regresamos el store al estado inicial antes de iniciar cada test
    store = mockStore(initState);
  });

  //El método startNewNote accede al store para obtener el estado con getState y hace un dispatch de activeNote y addNewNote, previamente debemos hacer una configuración:

  //1- instalar redux-mock-store: npm install redux-mock-store --save-dev
  //2- hacemos las importaciones cecesarias
  //3- configurar el store
  test("debe crear una nueva nota con startNewNote", async () => {
    //FirebaseError: 7 PERMISSION_DENIED: Missing or insufficient permissions.
    //Necesitamos estar "autenticados" por ende crearemos una db de testing en firebase y agregamos la configuración a nuestro archivo src/firebase/firebase-config.js

    await store.dispatch(startNewNote());

    //con ese dispatch de startNewNote se disparan las acciones activeNote y addNewNote y las obtenemos mediante:
    const actions = store.getActions();
    //console.log(actions);

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

  test("prueba de los payload de addNewNote, activeNote, setNote", () => {
    const noteMock = {
      title: "Title",
      body: "some random text",
      date: new Date().getTime(),
    };

    const docId = "mockID123";

    const addNewNoteMock = addNewNote(docId, noteMock);
    const activeNoteMock = activeNote(docId, noteMock);
    const setNotesMock = setNotes([noteMock]);
    const refreshNoteMock = refreshNote(docId, noteMock);

    expect(addNewNoteMock).toEqual({
      type: types.notesAddNew,
      payload: {
        id: docId,
        ...noteMock,
      },
    });

    expect(activeNoteMock).toEqual({
      type: types.notesActive,
      payload: {
        id: docId,
        ...noteMock,
      },
    });

    expect(setNotesMock).toEqual({
      type: types.notesLoad,
      payload: [noteMock]
    });

    expect(refreshNoteMock).toEqual({
      type: types.notesUpdated,
      payload: {
        id: docId,
        note: {
          id: docId,
          ...noteMock
        }
      },
    });
  });

  test("startLoadingNotes debe cargar las notas", async () => {

    //Al igual que en la primera prueba usamos el dispatch para disparar la acción
    await store.dispatch(startLoadingNotes("testingUID"));
    //las obtenemos con el getActions
    const actions = store.getActions();

    //console.log(actions);
    //Esperamos que tenga la siguiente estructura
    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array)
    });

    //Creamos un "modelo" de la nota esperada para el próximo expect
    //Si no viene la url no hay problema porque solo se evaluaran las siguientes propiedades
    const expectedNote = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number),
    };

    //console.log(actions[0].payload[0]);

    expect(actions[0].payload[0]).toMatchObject(expectedNote);

  });

  test("startSaveNote debe actualizar la nota", async() => {
    //Utilizaremos un ID real de la db de testing para verificar los cambios
    const noteUpdate = {
      id: "NAABKijgpcbMLjMlZ0I2",
      title: "#ChuckNorrisFact",
      body: "If Chuck Norris makes a joke about Jada Pinkett, Will Smith will slap himself"
    };

    await store.dispatch(startSaveNote(noteUpdate));

    const actions = store.getActions();

    //console.log(actions);

    //Es la referencia a la nota real en la db
    const docRef = await db.doc(`testingUID/journal/notes/${noteUpdate.id}`).get();
    
    //Accedemos al id de la nota en db
    //console.log(docRef.id);
    //El resto de las propiedades están guardadas en data
    //console.log(typeof docRef.data());
    
    //Comparamos el titulo de noteUpdate con el de la nota de la db de testing
    expect(docRef.data().title).toBe(noteUpdate.title);

    //Comparamos el body que recibe el payload de la acción con la nota actualizada en testing
    expect(actions[0].payload.note.body).toBe(docRef.data().body);

    expect(actions[0].type).toBe(types.notesUpdated);
  });

  test('startDeletingNote debe borrar una nota', async() => {

    //creamos la nota que vamos a borrar
    await store.dispatch(startNewNote());
    const actions = store.getActions();
    const id = actions[0].payload.id;
    await store.dispatch(startDeletingNote(id));
    //console.log("startDeletingNote: ", actions);

    expect(actions[2]).toEqual({
      type: types.notesDelete,
      payload: id
    });
    

  });

});

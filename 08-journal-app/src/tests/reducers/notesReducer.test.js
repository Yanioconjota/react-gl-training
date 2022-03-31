import { notesReducer } from "../../reducers/notesReducer";
import { types } from "../../types/types";

const initialStateMock = {
  notes: [],
  active: null,
};

const noteMock = {
  title: 'Hola mundo!',
  body: 'Cualquier cosa',
  date: 1648752810156
};

const id = 'dsad32232dd';

//Es una nota activa con un ID
const activeNote = {
  id: "dsad32232dd",
  title: "Hola mundo!",
  body: "Cualquier cosa",
  date: 1648752810156,
};

const notesMock = [
  {
    id: "323dddsa3da",
    title: "Some other title!",
    body: "Some other body text",
    date: 1648752810164,
  },
  {
    id: "323dddsa3da",
    title: "Some other title!",
    body: "Some other body text",
    date: 1648752810164,
  },
];

describe('Pruebas con notesReducer', () => {
  test('Debe regresar la nota activa', () => {
    const action = {
      type: types.notesActive,
      payload: {
        id: id,
        ...noteMock,
      },
    };

    const state = notesReducer(initialStateMock, action);

    console.log('active note: ', state);

    expect(state.active).toEqual(activeNote);
  });

  test('Debe agregar una nota', () => {
    const action = {
      type: types.notesAddNew,
      payload: {
        id: id,
        ...noteMock,
      },
    };

    //El initial state tiene notes:[], con el  método notesAddNew del reducer agregamos la nota noteMock
    const state = notesReducer(initialStateMock, action);

    console.log("new note added: ", state);

    expect(state.notes.length).toBe(1);
    expect(state.notes[0]).toEqual(activeNote);
  });

  test('Debe actualizar una nota', () => {

    //no pasamos el active porque lo hace otro reducer, en este caso no  actualizará el active sino la nota con el id que llega del payload,
    const stateMock = {
      notes: [activeNote]
    };

    const noteUpdate = {
      title: "Some new title!",
      body: "Some new text",
      date: 1648752810160,
    };

    const action = {
      type: types.notesUpdated,
      payload: {
        id: activeNote.id,
        note: {
          id: activeNote.id,
          ...noteUpdate,
        },
      },
    };
    
    const state = notesReducer(stateMock, action);

    console.log("note updated: ", state);

    expect(state.notes.length).toBe(1);
    expect(state.notes[0]).toEqual({
      id,
      ...noteUpdate,
    });
  });

  test('Debe retornar las notas existentes', () => {

    const stateMock = {
      notes: notesMock,
    };

    const action = {
      type: types.notesLoad,
      payload: notesMock
    };
    
    const state = notesReducer(stateMock, action);

    console.log("notes loaded: ", state);

    expect(state.notes).toEqual(notesMock);
  });

  test('Debe borrar una nota', () => {

    const stateMock = {
      notes: [activeNote],
      active: activeNote,
    };

    const action = {
      type: types.notesDelete,
      payload: activeNote.id
    };

    const state = notesReducer(stateMock, action);

    console.log("note deleted: ", state);

    expect(state.notes.length).toBe(0);
  });

  test('Debe blanquear las notas en el logout', () => {

    //Creamos un mock con notas cargadas y una nota activa, aplicando el reducer obtendremos el initalState
    const stateMock = {
      notes: notesMock,
      active: notesMock[0],
    };

    const action = {
      type: types.notesLogoutCleaning
    };

    const state = notesReducer(stateMock, action);

    console.log('state cleaned after logout: ', state);

    expect(state).toEqual(initialStateMock);
  })
});
import { db } from "../firebase/firebase-config";
import Swal from 'sweetalert2';
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import { fileUpload } from "../helpers/fileUpload";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    //getState funciona como el useSelector, nos trae todo el state
    //Nos quedamos con el uid que va a ser el nombre de la colección de firestore
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    };

    //doc hace referencia al documento de una colección de firestore y devuelve una promesa
    const doc = await db.collection(`${uid}/journal/notes`).add( newNote );

    //Selecciona la nota en NoteScreen
    dispatch(activeNote(doc.id, newNote));
    //Actualiza el sidebar con la nueva nota
    dispatch(addNewNote(doc.id, newNote));
  };
};

//Acción sincrona --> Devuelve el objeto
//Agrega la nota al sidebar al momento de crearla
export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    //recibimos el id y la nota que puede que venga sin id
    id, ...note
  }
});

//Acción sincrona --> Devuelve el objeto
export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note
  }
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  }
};

//Acción sincrona --> Devuelve el objeto
export const setNotes = ( notes ) => ({
  type: types.notesLoad,
  payload: notes
});

export const startSaveNote = ( note ) => {
  return async( dispatch, getState ) => {
    try {
      const { uid } = getState().auth;

      if (!note.url) {
        //borramos la url si viene undefined porque firebase no soporta valores en null/undefined
        delete note.url
      }

      const noteToFirestore = { ...note };
      delete noteToFirestore.id;
      
      await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

      dispatch(refreshNote(note.id, note));
      Swal.fire({
        title: 'Saved',
        text: note.title,
        icon: 'success'
      });
    } catch(err) {
      Swal.fire({
        title: "Error",
        text: err,
        icon: "error",
      });
    }
  }
};

export const refreshNote = ( id, note ) => ({
  type: types.notesUpdated,
  payload: {
    id, 
    note: {
      id,
      ...note
    }
  }
});

export const startUploadingNote = (file) => {
  return async( dispatch, getState ) => {
    
    const { active: activeNote } = getState().notes;

    const fileUrl = await fileUpload(file);

    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait',
      icon: 'info',
      allowOutsideClick: false,
      onBeforeOpen () {
        Swal.showLoading();
      },
      timer: 2000
    });
    
    //Actualizamos el url de la nota activa que es donde guarda la imagen
    activeNote.url = fileUrl;
    //hacemos el dispatch de la acción startSaveNote con la nota activa y la url de la imagen actualizada
    dispatch( startSaveNote(activeNote) );

    //Cierra el modal sweetalert cuando se termina de subir la imagen
    Swal.close();
  };
};

export const startDeletingNote = (id) => {
  return async( dispatch, getState ) => {
    const { uid } = getState().auth;
    await db.doc(`${ uid }/journal/notes/${ id }`).delete();

    dispatch(deleteNote(id));
  };
};

//Acción sincrona --> Devuelve el objeto
//Debe agregarse al reducer
export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id,
});

export const notesLogout = () => ({
  type: types.notesLogoutCleaning
})
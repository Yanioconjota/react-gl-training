import { db } from "../firebase/firebase-config";

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
    console.log(doc);
  };
};
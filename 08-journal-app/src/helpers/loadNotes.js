import { db } from "../firebase/firebase-config"

export const loadNotes = async (uid) => {
  //Trae los documentos guardados dentro de notes que corresponden al id que recibe
  //Devuelve un QuerySnapshot
  const notesSnap = await db.collection(`${uid}/journal/notes`).get();

  const notes = [];

  notesSnap.forEach((snapHijo) => {
    //Cada item tiene un id y con data() obtenemos la info que tenía al ser creado en firestore
    notes.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });

  return notes;
}
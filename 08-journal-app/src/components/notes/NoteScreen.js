import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

  const dispatch = useDispatch();
  
  const { active: note } = useSelector( state => state.notes );

  //Al hacer click en las notas no cambian el la vista porque es useForm cambia el state una vez
  const [ formValues, handleInputChange, reset ] = useForm(note);

  //Con useRef alamacenamos una variable que puede mutar y no redibujará el componente si cambia
  const activeId = useRef( note.id );

  const { body, title, url } = formValues;

  //El useEffect se dispara si y solo si el note.id cambió
  useEffect(() => {
    //Si el note.id cambió usamos el reset y el useRef para escuchar dicho cambio, seteando en la vista esa nota como activa cuando hagamos click en el journalEntry
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }

  }, [note, reset]);

  useEffect(() => {
    //nos aseguramos de actualizar el state de la nota activa al escribir con activeNote, recibe un id y la nota, desestructuramos formValues y usamos el spread operator para asegurar de mandarle todo su contenido,.
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);
  
  

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          name="title"
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          placeholder="What happened today?"
          className="notes__textarea"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className="notes__image">
            <img src={note.url} alt={title} />
          </div>
        )}
      </div>
    </div>
  );
};

import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  
  const { active: note } = useSelector( state => state.notes );

  //Al hacer click en las notas no cambian el la vista porque es useForm cambia el state una vez
  const [ formValues, handleInputChange, reset ] = useForm(note);

  //Con useRef alamacenamos una variable que puede mutar y no redibujará el componente si cambia
  const activeId = useRef( note.id );

  const { body, title } = formValues;

  //El useEffect se dispara si y solo si el note.id cambió
  useEffect(() => {
    //Si el note.id cambió usamos el reset y el useRef para escuchar dicho cambio, seteando en la vista esa nota como activa cuando hagamos click en el journalEntry
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }

  }, [note, reset])
  

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={ title }
          onChange={ handleInputChange }
        />

        <textarea
          placeholder="What happened today?"
          className="notes__textarea"
          value={ body }
          onChange={ handleInputChange }
        ></textarea>

        { (note.url) &&
          <div className="notes__image">
            <img
              src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/10/the-batman-scaled.jpg?fit=2560%2C1587&ssl=1"
              alt="the batman"
            />
          </div>
        }
      </div>
    </div>
  );
};

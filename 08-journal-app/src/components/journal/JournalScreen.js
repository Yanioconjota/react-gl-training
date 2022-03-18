import React from 'react';
import { useSelector } from 'react-redux';
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';

export const JournalScreen = () => {

  //Extraemos el active del state almacenado en el store
  const { active } = useSelector( state => state.notes );

  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>
        {
          (active)
            ? (<NoteScreen/>)
            : (<NothingSelected/>)
        }
      </main>
    </div>
  )
}

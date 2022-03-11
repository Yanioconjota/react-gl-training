import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />

        <textarea
          placeholder="What happened today?"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/10/the-batman-scaled.jpg?fit=2560%2C1587&ssl=1"
            alt="the batman"
          />
        </div>
      </div>
    </div>
  );
}

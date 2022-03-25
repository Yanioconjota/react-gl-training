import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploadingNote } from "../../actions/notes";

export const NotesAppBar = () => {

  const dispatch = useDispatch();

  const { active: note } = useSelector( state => state.notes );

  const handleSave = () => {
    dispatch(startSaveNote(note));
  };

  const handlePictureUpload = () => {
    //Apunta al input file oculto
    document.querySelector('#fileSelector').click();
  };

  const handleDileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(startUploadingNote(file));
    }
  };

  return (
    <div className="notes__appbar">
      <span>11 de marzo de 2022</span>

      <input type="file"
             name="file"
             id="fileSelector"
             style={{ display: 'none' }}
             onChange={ handleDileChange }/>

      <div>
        <button className="btn"
                onClick={ handlePictureUpload }>Picture</button>

        <button className="btn"
                onClick={ handleSave }>Save</button>
      </div>
    </div>
  );
}

import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';

const FocusScreen = () => {

  const inputRef = useRef(null);
  console.log(inputRef);

  const handleInput = () => {
    inputRef.current.select();
    console.log(inputRef);
    //document.querySelector('input').select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input 
        className="form-control"
        placeholder="your name"
        ref={inputRef}/>

      <button
        className="mt-2 btn btn-outline-primary"
        onClick={handleInput}
      >
        Focus
      </button>
    </>
  );
};

export default FocusScreen;

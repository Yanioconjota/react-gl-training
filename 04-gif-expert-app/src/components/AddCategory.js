import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('Default value');
  
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements[0].value !== '') {
      console.log(e.target.elements[0].value);
      setCategories((categories) => [
        ...categories,
        e.target.elements[0].value,
      ]);
      e.target.elements[0].value = "";
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Type something"
          onChange={handleInputChange}
          className="form-control"
        />
        <Button type="submit" variant="secondary">
          Agregar
        </Button>
      </div>
    </form>
  );
}

export default AddCategory;
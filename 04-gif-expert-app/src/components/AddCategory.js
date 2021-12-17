import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventValue = inputValue;
    
    if (eventValue.trim() !== "") {
      setCategories(() => [
       inputValue,
      ]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Type something"
          onChange={handleInputChange}
          className="form-control"
          value={inputValue}
        />
        <Button type="submit" variant="secondary">
          Agregar
        </Button>
      </div>
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};

export default AddCategory;
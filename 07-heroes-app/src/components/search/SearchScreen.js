import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { getHeroById } from "../../selectors/getHeroById";

export const SearchScreen = () => {
  //usamos un custom hook, handleInput change le pasa el valor al handleSearch
  const [formValues, handleInputChange, resetForm] = useForm({
    searchText: ''
  });

  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault(); 
    console.log(searchText);
    console.log(getHeroById(searchText));
  };

  return (
    <>
      <h1>Hero Search</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <div className="h4">Buscar</div>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Hero name"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}/>
            <button
              type="submit"
              className="btn btn-primary btn-block w-100 mt-3">Buscar</button>
            </form>
        </div>
      </div>
    </>
  );
};

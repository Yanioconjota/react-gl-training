import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log('hey inició el componente');
  }, []);

  useEffect(() => {
    console.log('formState cambio!');
  }, [formState]);

  useEffect(() => {
    console.log("email cambio!");
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control mb-2"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
          placeholder="please type 123"
        />

        <input
          type="text"
          name="email"
          className="form-control mb-2"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
          placeholder="email"
        />
      </div>
      {name === "123" && <Message />}
    </>
  );
};

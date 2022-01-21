import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {

  const [formValues, handleInputChange, resetForm] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    console.log("cambió el form!");

    return () => {
      console.log("se desmontó el form!");
    };
  }, [formValues]);

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    setSubmitted(true);
  };

  const handleReset = () => {
    resetForm();
    setSubmitted(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form with custom hook</h1>
      <hr />
      <p>submitted: {`${submitted}`}</p>
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control mb-2"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
          placeholder="name"
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

        <input
          type="password"
          name="password"
          className="form-control mb-2"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
          placeholder="********"
        />
      </div>
      {submitted && (
        <>
          <p>Form value: </p>
          <code className="d-block mb-4">
            {JSON.stringify(formValues, null, 3)}
          </code>
        </>
      )}
      <ButtonGroup>
        <Button type="submit" variant="primary">
          Guardar
        </Button>
        <Button type="button" onClick={handleReset} variant="secondary">
          Reset
        </Button>
      </ButtonGroup>
    </form>
  );
};

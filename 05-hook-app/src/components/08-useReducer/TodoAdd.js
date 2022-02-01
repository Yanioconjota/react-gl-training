import React from 'react';
import { Button } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, resetForm] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length < 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    resetForm();
  };

  return (
    <>
      <h4>Agregar todo</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="description"
          autocompplete="off"
          placeholder="Tengo que..."
          value={description}
          onChange={handleInputChange}
        />
        <div className="d-grid mt-2">
          <Button type="submit" variant="outline-primary">
            Agregar
          </Button>
        </div>
      </form>
    </>
  );
};

export default TodoAdd;

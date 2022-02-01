import React, { useEffect, useReducer } from 'react';
import {Row, Col, Button, ButtonGroup} from 'react-bootstrap';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import '../../assets/scss/TodoApp.scss';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
 /*  return [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
  }]; */
};

const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

  const [{description}, handleInputChange, resetForm] = useForm({
    description: ''
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  }

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

    const action = {
      type: 'add',
      payload: newTodo
    };

    dispatch(action);
    resetForm();
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    });
  };

  return (
    <>
      <h1>
        TodoApp <small>({todos.length})</small>
      </h1>
      <hr />
      <Row>
        <Col md={7}>
          <ol className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <p className={`${todo.done && 'complete'}`} onClick={() => handleToggle(todo.id)}>
                  {i + 1}. {todo.desc}
                </p>
                <ButtonGroup>
                  <Button
                    onClick={() => handleDelete(todo.id)}
                    variant="danger"
                  >
                    ✖️
                  </Button>
                </ButtonGroup>
              </li>
            ))}
          </ol>
        </Col>
        <Col md={5}>
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
        </Col>
      </Row>
    </>
  );
};

export default TodoApp;

import React, { useReducer } from 'react';
import {Row, Col, Button, ButtonGroup} from 'react-bootstrap';
import { todoReducer } from './todoReducre';
import '../../assets/scss/TodoApp.scss';

const initialState = [{
  id: new Date().getTime(),
  desc: 'Aprender React',
  done: false
}];

const TodoApp = () => {

  const [ todos ] = useReducer(todoReducer, initialState);

  console.log(todos);

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
                <p className="m-0">
                  {i + 1}. {todo.desc}
                </p>
                <ButtonGroup>
                  <Button variant="danger">Borrar</Button>
                </ButtonGroup>
              </li>
            ))}
          </ol>
        </Col>
        <Col md={5}>
          <h4>Agregar todo</h4>
          <hr />
          <form>
            <input
              className="form-control"
              type="text"
              name="description"
              autocompplete="off"
              placeholder="Aprender..."
            />
            <div className="d-grid mt-2">
              <Button variant="outline-primary">Agregar</Button>
            </div>
          </form>
        </Col>
      </Row>
    </>
  );
};

export default TodoApp;

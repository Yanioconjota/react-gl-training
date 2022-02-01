import React, { useEffect, useReducer } from 'react';
import {Row, Col } from 'react-bootstrap';
import { todoReducer } from './todoReducer';
import '../../assets/scss/TodoApp.scss';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

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

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo
    });
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
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </Col>
        <Col md={5}>
          <TodoAdd
            handleAddTodo={handleAddTodo}/>
        </Col>
      </Row>
    </>
  );
};

export default TodoApp;

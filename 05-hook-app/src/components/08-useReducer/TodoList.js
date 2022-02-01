import React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from "prop-types";

const TodoList = ({todos, handleDelete, handleToggle}) => {
  return (
    <ol className="list-group list-group-flush">
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={i}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ol>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleDelete: PropTypes.func,
  handleToggle: PropTypes.func
}

export default TodoList;

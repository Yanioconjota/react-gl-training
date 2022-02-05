import React from "react";
import PropTypes from "prop-types";

const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between align-items-center">
      <p
        className={`${todo.done && "complete"}`}
        onClick={() => handleToggle(todo.id)}>
        {index + 1}. {todo.desc}
      </p>
      <div className="btn-group">
        <button onClick={() => handleDelete(todo.id)} className="btn btn-danger">
          ✖️
        </button>
      </div>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number, 
  handleDelete: PropTypes.func,
  handleToggle: PropTypes.func,
};

export default TodoListItem;

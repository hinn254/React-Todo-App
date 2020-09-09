import React from "react";

const TodoList = ({ todoItem, isSelected = (f) => f }) => {
  return (
    <div>
      {todoItem.map((item, i) => (
        <div key={i} className="todo-container">
          <p className="item">{item}</p>
          <p className="btn" onClick={() => isSelected(i)}>
            Delete
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

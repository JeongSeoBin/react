import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <ul data-testid="TodoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default TodoList;

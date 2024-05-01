// TodoItem.js
import React from 'react';
import './styles.css'; // Import the CSS file for styling

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;

// TodoForm.js
import React, { useState } from 'react';
import './styles.css'; // Import the CSS file for styling

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add a new todo"
      />
      <button className="add-button" type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;

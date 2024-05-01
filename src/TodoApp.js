// TodoApp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './styles.css'; // Import the CSS file for styling


function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState([]);
useEffect(()=>{
    const response = trial()
console.log(response)},[]) // useEffect will be called once if []
async function trial(){
    
   await axios.get('https://dummyjson.com/products').then((res)=>{
       console.log('ty',res)
       setData(res.data.products);
       return res;
   })
   

    
}

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <TodoForm addTodo={addTodo} />
      {data.length!=0 ? data.map((ele)=>{
          return <div>
              {ele.title}
              </div>
      }):<div>
          loading
          </div>}
    </div>
  );
}



export default TodoApp;

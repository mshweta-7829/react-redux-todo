import React from 'react';
import './App.css';
import {useSelector} from 'react-redux'
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'

function App() {

  const todos = useSelector(store => store.todos)

  return (
    <div className="App">
      <NewTodoForm />
      <TodoList />
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

function NewTodoForm() {
  const initialData = {
    todo: '',
    id: ''
  }
  const [todoData, setTodoData] = useState(initialData)
  const dispatch = useDispatch()

  function handleChange(evt) {
    const { name, value } = evt.target
    setTodoData(todoData => ({
      ...todoData,
      [name]: value
    }))
  }
  
  function handleSubmit(evt) {
    evt.preventDefault()
    dispatch({ type: 'ADD_TODO', payload: {...todoData, id:uuidv4() } })
    setTodoData(initialData)
  }

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="todo">Add Todo :</label>
        <input
          id="newTodo-todo"
          name="todo"
          className="form-control"
          placeholder="Todo"
          onChange={handleChange}
          value={todoData.todo}
          aria-label="Todo"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  )
}
export default NewTodoForm
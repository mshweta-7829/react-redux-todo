import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import Todo from './Todo'

function TodoList() {
  const todos = useSelector(store => store.todos)
  const dispatch = useDispatch()

  function handleDelete(evt){
    const id = evt.target.id
    dispatch({type:"DELETE_TODO", payload:id})
  }

  const todosDisplay = todos.map(todoData =>
    <Todo key={todoData.id}
      id={todoData.id}
      todo={todoData.todo}
      handleDelete={handleDelete}
    />)


  return (
    <div className="TodoList">
      <ul>
        {todosDisplay}
      </ul>
    </div>
  )
}
export default TodoList
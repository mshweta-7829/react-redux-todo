import React from 'react'

function Todo({todo, handleDelete, id}){

  return (
     <li className="Todo">
       <p>{todo}</p>
       <button id={id}className="btn btn-primary" onClick={handleDelete}>Delete</button>
     </li>
  )
}

export default Todo
const INITIAL_STATE = { todos: [] }

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] }

    case "DELETE_TODO":
      const filteredTodos = state.todos.
                            filter(todo => todo.id !== action.payload)
      return {todos : filteredTodos}

    default:
      return state;
  }
}

export default rootReducer
import { Todo, ActionTypes, Actions } from '../actions'

export const todosReducer = (state: Todo[] = [], action: Actions): Todo[] => {
  switch (action.type) {
    case ActionTypes.FetchTodos: {
      return action.payload
    }
    case ActionTypes.DeleteTodo: {
      return state.filter((todo) => todo.id !== action.payload)
    }
    default: {
      return state
    }
  }
}

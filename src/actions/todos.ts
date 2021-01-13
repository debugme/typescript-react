import { Dispatch } from 'redux'
import { ActionTypes } from './types'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type FetchTodosAction = {
  type: ActionTypes.FetchTodos
  payload: Todo[]
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const endpoint = 'https://jsonplaceholder.typicode.com/todos'
    const response = await fetch(endpoint)
    const payload: Todo[] = await response.json()
    const type = ActionTypes.FetchTodos
    const action: FetchTodosAction = { type, payload }
    dispatch<FetchTodosAction>(action)
  }
}

export interface DeleteTodoAction {
  type: typeof ActionTypes.DeleteTodo
  payload: number
}

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: ActionTypes.DeleteTodo,
  payload: id,
})

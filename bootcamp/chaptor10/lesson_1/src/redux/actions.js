import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO
} from './constants';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
})

export const editTodo = (todo) => ({
  type: EDIT_TODO,
  payload: todo
})
import * as api from './api'

const ADD_REQUEST = 'ADD_REQUEST'
const ADD_SUCCESS = 'ADD_SUCCESS'
const REMOVE_REQUEST = 'REMOVE_REQUEST'
const REMOVE_SUCCESS = 'REMOVE_SUCCESS'
const LOAD_REQUEST = 'LOAD_REQUEST'
const LOAD_SUCCESS = 'LOAD_SUCCESS'

const add = (todo) => async (dispatch) => {
  dispatch({ type: ADD_REQUEST, body: todo.body })

  const item = await api.addTodo(todo)

  dispatch({ type: ADD_SUCCESS, id: item.id, body: item.body })
}

const remove = (id) => async (dispatch) => {
  dispatch({ type: REMOVE_REQUEST, id })

  await api.removeTodo(id)

  dispatch({ type: REMOVE_SUCCESS, id })
}

const load = () => async (dispatch) => {
  dispatch({ type: LOAD_REQUEST })

  const items = await api.getTodos()

  dispatch({ type: LOAD_SUCCESS, items })
}

export { ADD_REQUEST, ADD_SUCCESS, REMOVE_REQUEST, REMOVE_SUCCESS, LOAD_REQUEST, LOAD_SUCCESS, add, remove, load }

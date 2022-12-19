import { combineReducers } from 'redux'
import { ADD_REQUEST, ADD_SUCCESS, REMOVE_REQUEST, REMOVE_SUCCESS, LOAD_REQUEST, LOAD_SUCCESS } from './actions'

function items(state = [], action) {
  switch (action.type) {
    case ADD_SUCCESS:
      return state.concat({
        id: action.id,
        body: action.body,
      })

    case REMOVE_REQUEST:
      return state.map((item) => (item.id === action.id ? Object.assign(item, { pending: true }) : item))

    case REMOVE_SUCCESS:
      return state.filter((item) => item.id !== action.id)

    case LOAD_SUCCESS:
      return action.items

    default:
      return state
  }
}

function adding(state = false, action) {
  switch (action.type) {
    case ADD_REQUEST:
      return true

    case ADD_SUCCESS:
      return false

    default:
      return state
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case LOAD_REQUEST:
      return true

    case LOAD_SUCCESS:
      return false

    default:
      return state
  }
}

export default combineReducers({
  items,
  adding,
  loading,
})

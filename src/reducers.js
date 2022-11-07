import { combineReducers } from 'redux'
import { ADD_REQUEST, ADD_SUCCESS, REMOVE_REQUEST, REMOVE_SUCCESS, LOAD_REQUEST, LOAD_SUCCESS } from './actions'

function items(state = [], action) {
  switch (action.type) {
    case ADD_REQUEST:
      const lastIndex = state[state.length - 1] ? state[state.length - 1].id : 0

      return state.concat({
        id: lastIndex + 1,
        body: action.body,
        pending: true,
      })

    case ADD_SUCCESS:
      return state
        .filter((item) => !item.hasOwnProperty('pending'))
        .concat({
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
  loading,
})

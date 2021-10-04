import { SET_DATA_PEOPLE, ERROR_DATA_PEOPLE } from '../actions/types'

const initialState = {
  list: null,
  error: null,
  selected: null
}

export default (state = initialState, action) => {

  switch (action.type) {

    case SET_DATA_PEOPLE:
      return {
        ...state,
        list: action.data.results,
        count: action.data.count
      }

    case ERROR_DATA_PEOPLE:
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}
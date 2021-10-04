import { SET_DATA_PEOPLE, ERROR_DATA_PEOPLE, SET_PEOPLE_SELECTED } from '../actions/types'

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

    case SET_PEOPLE_SELECTED:
      return {
        ...state,
        selected: action.selected
      }

    default:
      return state
  }
}
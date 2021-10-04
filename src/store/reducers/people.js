import { SET_DATA_PEOPLE, ERROR_DATA_PEOPLE, UPDATE_PAGE_PEOPLE_LIST } from '../actions/types'

const initialState = {
  list: null,
  error: null,
  selected: null,
  currentPage: 1
}

export default (state = initialState, action) => {

  switch (action.type) {

    case SET_DATA_PEOPLE:
      return {
        ...state,
        list: action.data.results,
        count: action.data.count,
      }

    case ERROR_DATA_PEOPLE:
      return {
        ...state,
        error: action.error
      }

    case UPDATE_PAGE_PEOPLE_LIST:
      return {
        ...state,
        currentPage: action.page
      }

    default:
      return state
  }
}
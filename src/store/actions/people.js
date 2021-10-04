import { SET_DATA_PEOPLE, ERROR_DATA_PEOPLE, REQUEST_PEOPLE, UPDATE_PAGE_PEOPLE_LIST } from './types'
import constants from '../../utils/constans'
import { getCurrentPage } from '../selectors/people'

const requestPeople = () => ({
  type: REQUEST_PEOPLE
})

const fetchPeopleError = error => ({
  type: ERROR_DATA_PEOPLE,
  error
})

const setDataPeople = data => ({
  type: SET_DATA_PEOPLE,
  data
})

export const updatePageList = page => ({
  type: UPDATE_PAGE_PEOPLE_LIST,
  page
})


export const fetchPeople = () => (dispatch, getState) => {
  const state = getState()
  const currentPage = getCurrentPage(state)
  
  dispatch(requestPeople())
    fetch(constants.API_URL + constants.GET_PEOPLE_PATH + currentPage)
      .then(response => response.json())
      .then(data => {
        dispatch(setDataPeople(data))
      })
      .catch(error => dispatch(fetchPeopleError(error)))
  }
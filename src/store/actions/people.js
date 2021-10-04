import { SET_DATA_PEOPLE, ERROR_DATA_PEOPLE, REQUEST_PEOPLE, SET_PEOPLE_SELECTED } from './types'
import constants from '../../utils/constans'

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

export const setSelected = people => ({
    type: SET_PEOPLE_SELECTED,
    people
  })

export const fetchPeople = () => dispatch => {
  dispatch(requestPeople())
    fetch(constants.API_URL + constants.GET_PEOPLE_PATH)
      .then(response => response.json())
      .then(data => {
        dispatch(setDataPeople(data))
      })
      .catch(error => dispatch(fetchPeopleError(error)))
  }
import { SET_SELECTED_FILM, ERROR_DATA_FILM } from './types'

const setSelectedFilm = film => ({
  type: SET_SELECTED_FILM,
  film
})

const fetchFilmError = error => ({
  type: ERROR_DATA_FILM,
  error
})


export const fetchFilm = filmUrl => dispatch => {
  fetch(filmUrl)
    .then(response => response.json())
    .then(data => {
      dispatch(setSelectedFilm(data))
    })
    .catch(error => dispatch(fetchFilmError(error)))
}
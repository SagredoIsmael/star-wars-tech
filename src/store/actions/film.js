import { SET_SELECTED_FILM } from './types'

export const setSelectedFilm = film => ({
    type: SET_SELECTED_FILM,
    film
  })
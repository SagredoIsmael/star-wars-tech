import { SET_SELECTED_FILM } from '../actions/types'

const initialState = {
    selected: null
}

export default (state = initialState, action) => {

    switch (action.type) {

        case SET_SELECTED_FILM:
            return {
                ...state,
                selected: action.film
            }

        default:
            return state
    }
}
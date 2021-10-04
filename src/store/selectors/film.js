import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'

const getFilm = get('film')

export const getSelectedFilm = pipe(
    getFilm,
    get('selected')
)
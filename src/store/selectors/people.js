import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'

const getPeople = get('people')

export const getListPeople = pipe(
    getPeople,
    get('list')
)

export const getCountPeople = pipe(
    getPeople,
    get('count')
)

export const getErrorPeople = pipe(
    getPeople,
    get('error')
)

export const getSelectedPeople = pipe(
    getPeople,
    get('selected')
)
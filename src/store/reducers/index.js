import { combineReducers } from 'redux'
import people from './people'
import film from './film'

export const rootReducer = combineReducers({
  people,
  film
})
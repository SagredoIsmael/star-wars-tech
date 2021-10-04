import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import { rootReducer } from './reducers'

export const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk, logger))
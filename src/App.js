import * as React from 'react'
import MainScreen from './screens/Main'
import { Provider } from 'react-redux'
import { store } from './store/config'

export default () =>
    <Provider store={store}>
      <MainScreen />
    </Provider>

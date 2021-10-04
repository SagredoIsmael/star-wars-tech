import * as React from 'react'
import MainContainer from './store/containers/main'
import { Provider } from 'react-redux'
import { store } from './store/config'

export default () =>
    <Provider store={store}>
      <MainContainer />
    </Provider>
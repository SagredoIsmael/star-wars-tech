import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/config'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  background-color: blue;
`

const IconStyled = styled.img`
  width: 180px;
`

export default () =>
  <Provider store={store}>
    <Wrapper>
      
    </Wrapper>
  </Provider>
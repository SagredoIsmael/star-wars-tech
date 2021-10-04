import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/config'
import styled from 'styled-components'
import people_icon_1 from './assets/people_icon_1.png'

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
      <IconStyled src={people_icon_1} />
    </Wrapper>
  </Provider>
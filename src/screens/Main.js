import React from 'react'
import styled from 'styled-components'
import people_icon_1 from '../assets/people_icon_1.png'
import Button from '@mui/material/Button'
import theme from '../utils/theme'

const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
`
const IconStyled = styled.img`
  margin: 2rem;
  width: 30rem;
`

const ButtonStyled = styled(Button)`
  align-self: center;
  color: ${theme.secondaryColor};
  background-color: ${theme.primaryColor};
 
`

export default () =>
  <Wrapper>
    <IconStyled src={people_icon_1} />
    <ButtonStyled variant="text">Ver todos los personajes de Star Wars</ButtonStyled>
  </Wrapper >

import React, { useState } from 'react'
import styled from 'styled-components'
import people_icon_1 from '../assets/people_icon_1.png'
import LoadingButton from '@mui/lab/LoadingButton'
import theme from '../utils/theme'
import isArray from 'lodash/isArray'

const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
`
const IconStyled = styled.img`
  margin: 2rem;
  width: 30rem;
`

const ButtonStyled = styled(LoadingButton)`
  align-self: center;
  color: ${theme.secondaryColor};
  background-color: ${theme.primaryColor};
`

export default ({ fetchPeople, people }) => {
  const [isLoading, setIsLoading] = useState(false)
  const hasPeople = !isArray(people)
  return (
    < Wrapper >
      <IconStyled src={people_icon_1} />
      {
        hasPeople ?
          <ButtonStyled
            onClick={() => {
              setIsLoading(true)
              fetchPeople()
            }}
            loading={isLoading}
          >Ver todos los personajes de Star Wars
          </ButtonStyled>
          :
          <ButtonStyled
          >Ya están cargados
          </ButtonStyled>
      }
    </Wrapper >
  )
}







import React, { useState } from 'react'
import styled from 'styled-components'
import people_icon_1 from '../assets/people_icon_1.png'
import LoadingButton from '@mui/lab/LoadingButton'
import theme from '../utils/theme'
import isArray from 'lodash/isArray'
import PeopleList from '../store/containers/peopleList'
import FilmDetail from '../store/containers/filmDetail'

const GeneralWrapper = styled.div`
  display:flex;
  flex-direction: column;
`
const ListWrapperRow = styled.div`
  display:flex;
  flex-direction: row;
`
const IconStyled = styled.img`
  margin: 2rem;
  height: 50rem;
`
const ButtonStyled = styled(LoadingButton)`
  align-self: center;
  color: ${theme.secondaryColor};
  background-color: ${theme.primaryColor};
`

export default ({ fetchPeople, people, error }) => {
  const [isLoading, setIsLoading] = useState(false)
  const hasPeople = !isArray(people)

  if (error)
    return alert(error)

  return (
    <GeneralWrapper>
      < ListWrapperRow >
        <IconStyled src={people_icon_1} />
        {
          hasPeople ?
            <ButtonStyled
              onClick={() => {
                setIsLoading(true)
                fetchPeople()
              }}
              loading={isLoading}
            >See all Star Wars people
            </ButtonStyled>
            :
            <PeopleList />
        }
      </ListWrapperRow >
      <FilmDetail />
    </GeneralWrapper>

  )
}







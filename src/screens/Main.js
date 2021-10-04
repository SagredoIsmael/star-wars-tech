import React, { useState } from 'react'
import styled from 'styled-components'
import people_icon_1 from '../assets/people_icon_1.png'
import people_icon_2 from '../assets/people_icon_2.png'
import space_craft_icon from '../assets/space_craft_icon.png'
import LoadingButton from '@mui/lab/LoadingButton'
import isArray from 'lodash/isArray'
import PeopleList from '../store/containers/peopleList'
import FilmDetail from '../store/containers/filmDetail'

const GeneralWrapper = styled.div`
  display:flex;
  flex-direction: row;
`
const ImagesWrapper = styled.div`
  display:flex;
  flex-direction: column;
  `
const IconStyled = styled.img`
  margin: 2rem;
  width: 20rem;
`

export default ({ fetchPeople, people, error }) => {
  const [isLoading, setIsLoading] = useState(false)
  const hasPeople = !isArray(people)

  if (error)
    return alert(error)

  return (
    <GeneralWrapper>
      <ImagesWrapper>
        <IconStyled src={people_icon_1} />
        <IconStyled src={space_craft_icon} />
        <IconStyled src={people_icon_2} />
      </ImagesWrapper>
      {
        hasPeople ?
          <LoadingButton
            style={{ fontSize: '2rem' }}
            onClick={() => {
              setIsLoading(true)
              fetchPeople()
            }}
            loading={isLoading}
          >See all Star Wars people
          </LoadingButton>
          :
          <PeopleList />
      }
      <FilmDetail />
    </GeneralWrapper>

  )
}







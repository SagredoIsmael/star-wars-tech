import React from 'react'
import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import space_craft_icon from '../assets/space_craft_icon.png'

const Wrapper = styled.div`
  display:flex;
  margin: 3rem;
`

const IconStyled = styled.img`
  margin: 2rem;
  width: 20em;
`

export default ({ selectedFilm }) =>
    <Wrapper>
        {selectedFilm && <IconStyled src={space_craft_icon} />}
        {selectedFilm && 
        <Card >
            <CardContent>
                <Typography color="text.secondary" gutterBottom>
                    Films of {selectedFilm.name}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.well meaning and kindly.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>}
    </Wrapper>

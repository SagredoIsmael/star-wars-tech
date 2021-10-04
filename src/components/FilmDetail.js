import React from 'react'
import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const Wrapper = styled.div`
  display:flex;
  margin: 3rem;
`

export default ({ selectedFilm }) =>
    <Wrapper>
        {selectedFilm && 
        <Card >
            <CardContent>
                <Typography color="text.primary" gutterBottom>
                    {selectedFilm.title}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {selectedFilm.director}
                </Typography>
                <Typography variant="body2">
                    {selectedFilm.opening_crawl}
                </Typography>
            </CardContent>
        </Card>}
    </Wrapper>

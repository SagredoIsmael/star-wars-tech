import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper'
import styled from 'styled-components'
import { stringAvatar } from '../utils/functions'

const Wrapper = styled.div`
  display:flex;
  margin: 3rem;
`

const FilmsWrapper = styled.div`
  display:flex;
  flex-direction: row;
`

const AvatarWrapper = styled(Avatar)`
  margin:0.5rem;
`
export default ({ people, fetchFilm, count }) =>
    <Wrapper>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Height</TableCell>
                        <TableCell >Mass</TableCell>
                        <TableCell >Films</TableCell>
                        <TableCell >Eye color</TableCell>
                        <TableCell >Skin Color</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {people.map((item) => (
                        <TableRow
                            key={item.name}
                        >
                            <TableCell >
                                {item.name}
                            </TableCell>
                            <TableCell>{item.height}</TableCell>
                            <TableCell>{item.mass}</TableCell>
                            <TableCell>
                                <FilmsWrapper>
                                    {item.films.map((urlFilm) => (
                                        <AvatarWrapper {...stringAvatar('Film ' + urlFilm.substr(urlFilm.length - 2))}
                                            onClick={() => fetchFilm(urlFilm)} />
                                    ))}
                                </FilmsWrapper>
                            </TableCell>
                            <TableCell>{item.eye_color}</TableCell>
                            <TableCell>{item.skin_color}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[10]}
                            colSpan={30}
                            count={count}
                            rowsPerPage={10}
                            page={0}
                            onPageChange={console.log('@@page change')}
                            onRowsPerPageChange={console.log('@onRowsPerPageChange')}
                            ActionsComponent={console.log('@ActionsComponent')}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    </Wrapper>

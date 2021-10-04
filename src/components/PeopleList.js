import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import Paper from '@mui/material/Paper'
import styled from 'styled-components'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
]

const Wrapper = styled.div`
  display:flex;
  margin: 3rem;
`


export default ({ people, selected, setSelected, count }) =>
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
                            <TableCell>See</TableCell>
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

import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


const Customer = (props) => {
  return (
         
    <TableRow>
        <TableCell>{props.id}</TableCell>
        <TableCell>
        <img src={props.image} alt='USER'/>
        {props.name}
        </TableCell>
        <TableCell>{props.birthday}</TableCell>
        <TableCell>{props.gender}</TableCell>
        <TableCell>{props.job}</TableCell>
    </TableRow>
  )
}

export default Customer

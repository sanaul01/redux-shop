import React from 'react';
import { useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const UsersComponent = () => {
    const users = useSelector((state)=>state.allUsers.users);
    // const renderList = users?.map((user) => {
    //     const {_id, displayName, email} = user;
    //     console.log(user)
    //     return(
    //         <div className='four wide column mt-5' key = {_id}>

    //             <div className='ui link cards'>
    //                 <div className='card'>
    //                     <div className='content'>
    //                     <div className='header'>{displayName}</div>
    //                     <div className=' price'>TK {email}</div>
    //                     </div>
    //                 </div>
    //             </div>

    //         </div>
    //     )
    // });
    return (
        <TableContainer component={Paper} sx={{marginTop: 10, width: 700}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="right">User Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user) => (
            <TableRow
              key={user.displayName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.displayName}
              </TableCell>
              <TableCell align="right">{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
};

export default UsersComponent;
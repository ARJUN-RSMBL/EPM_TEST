import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStakeholders } from '../store/stakeholderSlice';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

const StakeholderPage = () => {
  const dispatch = useDispatch();
  const stakeholders = useSelector((state) => state.stakeholders.data);
  const status = useSelector((state) => state.stakeholders.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStakeholders());
    }
  }, [dispatch, status]);

  return (
    <div>
      <h1>Stakeholder List</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {stakeholders.map((stakeholder) => (
            <TableRow key={stakeholder.id}>
              <TableCell>{stakeholder.name}</TableCell>
              <TableCell>{stakeholder.role}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary">
                  Edit
                </Button>
                <Button variant="contained" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody> */}
         <TableBody>
         
            <TableRow >
              <TableCell>1</TableCell>
              <TableCell>Arjun</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>
                <Button variant="contained" color="primary">
                  Edit
                </Button>
                <Button variant="contained" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>2</TableCell>
              <TableCell>Rosario</TableCell>
              <TableCell>Vendor</TableCell>
              <TableCell>
                <Button variant="contained" color="primary">
                  Edit
                </Button>
                <Button variant="contained" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>3</TableCell>
              <TableCell>Mohammed</TableCell>
              <TableCell>Buyer</TableCell>
              <TableCell>
                <Button variant="contained" color="primary">
                  Edit
                </Button>
                <Button variant="contained" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </div>
  );
};

export default StakeholderPage;

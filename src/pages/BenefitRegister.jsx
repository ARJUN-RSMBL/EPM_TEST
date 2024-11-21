import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Button } from '@mui/material';

const BenefitRegister = () => {
  const benefits = [
    { id: 1, name: 'Increased Revenue', description: 'Generate additional revenue streams.' },
    { id: 2, name: 'Process Efficiency', description: 'Optimize internal processes.' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Benefit Register
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Benefit</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {benefits.map((benefit) => (
            <TableRow key={benefit.id}>
              <TableCell>{benefit.name}</TableCell>
              <TableCell>{benefit.description}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary">
                  Edit
                </Button>
                <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BenefitRegister;

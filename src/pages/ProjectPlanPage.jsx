import React from 'react';
import { Typography, Button, Grid } from '@mui/material';

const ProjectPlanPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Project Plan
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" color="primary">
            Add Deliverable
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Approve Plan
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectPlanPage;

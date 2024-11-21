import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

const Dashboard = () => {
  const pages = [
    { title: 'Stakeholder List', link: '/stakeholders' },
    { title: 'Risks, Issues, and Actions', link: '/risks' },
    { title: 'Benefit Register', link: '/benefits' },
    { title: 'Project Plan', link: '/project-plan' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {pages.map((page) => (
          <Grid item xs={12} sm={6} md={4} key={page.title}>
            <Card>
              <CardContent>
                <Typography variant="h6">{page.title}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={page.link}
                  style={{ marginTop: '10px' }}
                >
                  Go to {page.title}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;

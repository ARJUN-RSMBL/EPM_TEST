import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

const RiskIssueActionPage = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const renderContent = () => {
    switch (tabIndex) {
      case 0:
        return <Typography>Risk Management Content</Typography>;
      case 1:
        return <Typography>Issue Management Content</Typography>;
      case 2:
        return <Typography>Action Management Content</Typography>;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Risks, Issues, and Actions
      </Typography>
      <Tabs value={tabIndex} onChange={handleChange}>
        <Tab label="Risks" />
        <Tab label="Issues" />
        <Tab label="Actions" />
      </Tabs>
      <Box sx={{ padding: '20px' }}>{renderContent()}</Box>
    </Box>
  );
};

export default RiskIssueActionPage;

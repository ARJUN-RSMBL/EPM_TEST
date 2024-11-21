import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import StakeholderPage from '../pages/StakeholderPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/stakeholders" element={<StakeholderPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;

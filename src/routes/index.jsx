// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from '../pages/Dashboard';
// import StakeholderPage from '../pages/StakeholderPage';

// const AppRoutes = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<Dashboard />} />
//       <Route path="/stakeholders" element={<StakeholderPage />} />
//     </Routes>
//   </Router>
// );

// export default AppRoutes;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import StakeholderPage from '../pages/StakeholderPage';
import RiskIssueActionPage from '../pages/RiskIssueActionPage';
import BenefitRegister from '../pages/BenefitRegister';
import ProjectPlanPage from '../pages/ProjectPlanPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/stakeholders" element={<StakeholderPage />} />
      <Route path="/risks" element={<RiskIssueActionPage />} />
      <Route path="/benefits" element={<BenefitRegister />} />
      <Route path="/project-plan" element={<ProjectPlanPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;

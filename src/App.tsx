import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import JobManagement from './pages/JobManagement';
import EmployerDetailPage from './pages/employers/EmployerDetailPage';
import CandidatesTable from './pages/employers/CandidatesTable';
import JobDetailsPage from './pages/jobManagemant/JobDetailsPage';
import CandidateProfile from './pages/jobManagemant/CandidateProfile';
import ModifyShifts from './pages/jobManagemant/modifyShifts';
import EmployerTable from './pages/employers/Employers';
import ActiveJobPosting from './pages/employers/ActiveJobPosting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="job-management" element={<JobManagement />} />
          <Route path="hustle-heroes" element={<div className="p-6">Hustle Heroes Page</div>} />

          <Route path="payments" element={<div className="p-6">Payments Page</div>} />
          <Route path="support" element={<div className="p-6">Support Page</div>} />

          {/* check page */}
          <Route path="employeedetail" element={<EmployerDetailPage/>} />
          <Route path="candidate" element={<CandidatesTable/>} />
          <Route path="jobdetail" element={<JobDetailsPage/>} />
          <Route path="candidate-profile" element={<CandidateProfile/>} />
          <Route path="modify-shifts" element={<ModifyShifts/>} />

          {/* employers pages */}
          <Route path="employers" element={<EmployerTable/>} />
          <Route path="active-job-posting" element={<ActiveJobPosting/>} />




        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
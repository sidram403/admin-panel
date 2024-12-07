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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="job-management" element={<JobManagement />} />
          <Route path="hustle-heroes" element={<div className="p-6">Hustle Heroes Page</div>} />

          <Route path="employers" element={<div className="p-6">Employers Page</div>} />
          <Route path="payments" element={<div className="p-6">Payments Page</div>} />
          <Route path="support" element={<div className="p-6">Support Page</div>} />

          {/* check page */}
          <Route path="checkpage" element={<EmployerDetailPage/>} />
          <Route path="candidate" element={<CandidatesTable/>} />
          <Route path="jobdetail" element={<JobDetailsPage/>} />
          <Route path="candidate-profile" element={<CandidateProfile/>} />
          <Route path="modify-shifts" element={<ModifyShifts/>} />



        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
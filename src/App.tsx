import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import JobManagement from './pages/JobManagement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="job-management" element={<JobManagement />} />
          <Route path="employers" element={<div className="p-6">Employers Page</div>} />
          <Route path="payments" element={<div className="p-6">Payments Page</div>} />
          <Route path="support" element={<div className="p-6">Support Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
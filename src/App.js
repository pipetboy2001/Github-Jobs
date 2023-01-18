import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobSearch from './Components/JobSearch';
import JobPage from './Components/JobPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobSearch />} />
        <Route path="/job/:jobId" element={<JobPage />} />
      </Routes>
    </Router>
  );
}
export default App;


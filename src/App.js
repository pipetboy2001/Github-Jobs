import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobSearch from './Components/JobSearch';
import JobPage from './Components/JobPage';
import { Footer } from './Components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobSearch />} />
        <Route path="/job/:id" element={<JobPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;


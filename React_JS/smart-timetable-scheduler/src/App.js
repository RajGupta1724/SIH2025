import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import components
import Navigation from './components/Navigation';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DataInput from './pages/DataInput';
import TimetableGeneration from './pages/TimetableGeneration';
import TimetableView from './pages/TimetableView';
import ApprovalWorkflow from './pages/ApprovalWorkflow';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/data-input" element={<DataInput />} />
            <Route path="/generate-timetable" element={<TimetableGeneration />} />
            <Route path="/view-timetable" element={<TimetableView />} />
            <Route path="/approval" element={<ApprovalWorkflow />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

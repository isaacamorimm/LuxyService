import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CftvIp from './pages/CftvIp';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<CftvIp />} />
          {/* Future routes can be added here */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
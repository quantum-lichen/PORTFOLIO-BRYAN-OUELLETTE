import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import CraidView from './components/CraidView';
import TrpuView from './components/TrpuView';
import NgcView from './components/NgcView';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/craid" element={<CraidView />} />
          <Route path="/trpu" element={<TrpuView />} />
          <Route path="/ngc" element={<NgcView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

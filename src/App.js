import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VPSPlans from './components/VPSPlans';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <VPSPlans />
              <Services />
            </>
          } />
          <Route path="/vps" element={
            <>
              <VPSPlans />
              <Services />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import CasesPage from './pages/CasesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900 min-h-screen text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
            style={{
              top: '10%',
              left: '20%',
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
          <div 
            className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
            style={{
              bottom: '20%',
              right: '10%',
              transform: `translate(-${scrollY * 0.08}px, -${scrollY * 0.12}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
          <div 
            className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
            style={{
              top: '50%',
              right: '30%',
              transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.1}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
        </div>

        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
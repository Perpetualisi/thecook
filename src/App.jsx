import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import Magazine from './Components/Magazine/Magazine';
import Store from './Components/Store/Store';
import Recipes from './Components/Recipes/Recipes';
import Aboutus from './Components/Aboutus/Aboutus';
import Contact from './Components/Contact/Contact';

import './App.css';
import './index.css';

/* =========================
   ScrollToTop Component
========================= */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // smooth scroll up
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div>
      <Navbar />
      {/* ✅ Scroll reset on every route change */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/store" element={<Store />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

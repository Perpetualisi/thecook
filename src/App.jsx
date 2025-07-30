import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import Magazine from './Components/Magazine/Magazine';
import Store from './Components/Store/Store';
import { Route, Routes } from 'react-router-dom'; 
import Recipes from './Components/Recipes/Recipes'; 
import Aboutus from './Components/Aboutus/Aboutus'; 
import Contact from './Components/Contact/Contact'; 
import './App.css';
const App = () => {
  return (
    <div>
      <Navbar />
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

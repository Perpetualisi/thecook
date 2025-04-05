import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => setMenuOpen(!menuOpen); 
  const closeMenu = () => setMenuOpen(false); 

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>TheCook</h1>
      </div>

      
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/magazine" onClick={closeMenu}>Magazine</Link></li>
        <li><Link to="/store" onClick={closeMenu}>Store</Link></li>
        <li><Link to="/recipes" onClick={closeMenu}>Recipes</Link></li>
        <li><Link to="/aboutus" onClick={closeMenu}>AboutUs</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;

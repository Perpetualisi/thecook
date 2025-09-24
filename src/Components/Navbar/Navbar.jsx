import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo" onClick={closeMenu}>
        <Link to="/" className="logo-link">
          TheCook
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/magazine" onClick={closeMenu}>
            Magazine
          </Link>
        </li>
        <li>
          <Link to="/store" onClick={closeMenu}>
            Store
          </Link>
        </li>
        <li>
          <Link to="/recipes" onClick={closeMenu}>
            Recipes
          </Link>
        </li>
        <li>
          <Link to="/aboutus" onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

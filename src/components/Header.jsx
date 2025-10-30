import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">KIYONGA -B- ASASIRA & CO.</div>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className="menu-icon"></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Services</Link></li>
          <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Our Team</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
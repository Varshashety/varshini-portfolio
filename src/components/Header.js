import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="header">
      <div className="logo">Varshini</div>
      <nav className={mobileMenu ? 'nav-menu active' : 'nav-menu'}>
        <Link to="/" onClick={() => setMobileMenu(false)}>Home</Link>
        <Link to="/about" onClick={() => setMobileMenu(false)}>About</Link>
        <Link to="/skills" onClick={() => setMobileMenu(false)}>Skills</Link>
        <Link to="/projects" onClick={() => setMobileMenu(false)}>Projects</Link>
        <Link to="/experience" onClick={() => setMobileMenu(false)}>Experience</Link>
        <Link to="/contact" onClick={() => setMobileMenu(false)}>Contact</Link>
      </nav>
      <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </header>
  );
};

export default Header;
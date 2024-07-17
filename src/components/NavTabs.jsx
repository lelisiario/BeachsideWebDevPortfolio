import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'; // Ensure the correct path

const NavTabs = ({ toggleTheme, theme }) => {
  const currentPage = useLocation().pathname;

  return (
    <nav className="nav">
      <ul className="nav-tabs">
        <li className="nav-item">
          <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/resume" className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>
            Resume
          </Link>
        </li>
      </ul>
      <div>
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark-mode'} />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
};

export default NavTabs;

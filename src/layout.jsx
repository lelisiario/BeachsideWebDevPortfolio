import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './App.css';
import Footer from '../src/components/footer'; // Import the Footer component

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light-mode');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode');
  };

  return (
    <div>
      <button className="mode-toggle" onClick={toggleTheme}>
        {theme === 'light-mode' ? 'Dark Mode' : 'Light Mode'}
      </button>
      <nav className="nav nav-tabs">
        <div className="nav-item">

        </div>
        <div className="nav-item">

        </div>
        <div className="nav-item">

        </div>
        <div className="nav-item">

        </div>
      </nav>
      {children}
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
};

export default Layout;

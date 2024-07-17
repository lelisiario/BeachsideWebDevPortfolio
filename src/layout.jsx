import React, { useState, useEffect } from 'react';
import './App.css';
import NavTabs from './components/NavTabs'; // Adjust the path if needed
import Footer from './components/footer'; // Adjust the path if needed

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light-mode');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode');
  };

  return (
    <div className="layout-container">
      <NavTabs toggleTheme={toggleTheme} theme={theme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

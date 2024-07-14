import React from 'react';
import Contact from './pages/Contact';
import './data/projectData';
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

function ContactPageApp() {
  return (
    <div className="Contact">
      <h1>Contact Us</h1>
      <Contact />
    </div>
  );
}

export default App;
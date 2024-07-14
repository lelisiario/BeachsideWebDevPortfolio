import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../App.css';

const HomePage = () => {
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
          <Link to="about" smooth={true} duration={500} className="scroll-link">About</Link>
        </div>
        <div className="nav-item">
          <Link to="services" smooth={true} duration={500} className="scroll-link">Services</Link>
        </div>
        <div className="nav-item">
          <Link to="portfolio" smooth={true} duration={500} className="scroll-link">Portfolio</Link>
        </div>
        <div className="nav-item">
          <Link to="contact" smooth={true} duration={500} className="scroll-link">Contact</Link>
        </div>
      </nav>
      <section id="about" className="section">
        <div className="content">
          <h1>Beachside Web Development</h1>
          <p>Welcome to Beachside Web Development, where creativity meets functionality. With a background rooted in business and government, 
            I've embarked on a journey to blend my passion for technology with a keen eye for user-centric design. <br /> <br />
            What drives me in the world of web development is the opportunity to create impactful solutions that simplify complexities and enhance user experiences. 
            Each project is not just a technological endeavor but a chance to make a meaningful difference in how businesses connect with their audiences.
          </p>
        </div>
      </section>
      <section id="services" className="section">
        <div className="content">
          <h2>Services</h2>
          <h3>Comprehensive Web Solutions </h3>
          <p> From front-end design to back-end development, we offer a full spectrum of services designed to elevate your digital presence. Our expertise includes:
          <ul>
            <li> Web Design: Crafting visually stunning and user-friendly interfaces. </li>
            <li> Web Development: Building scalable and robust web applications. </li>
            <li> UI/UX Design: Enhancing user experiences through intuitive design principles. </li>
          </ul>
              Client-Centric Approach
              At Beachside Web Development, we prioritize understanding your business objectives to deliver solutions that not only meet but exceed your expectations. 
              Let's collaborate to transform your ideas into impactful digital experiences.</p>
        </div>
      </section>
      <section id="portfolio" className="section">
        <div className="content">
          <h2>Portfolio</h2>
          <p>Explore our portfolio, where each project tells a story of innovation and problem-solving. 
            From intuitive user interfaces to robust backend architectures, our projects showcase our commitment to excellence and client satisfaction.</p>
        </div>
      </section>
      <section id="contact" className="section">
        <div className="content">
          <h2>Contact Me</h2>
          <h3> Let's Connect </h3>
         <p> Have questions or ready to get started? Reach out to us today via our contact form or connect with us on LinkedIn and GitHub. 
          We look forward to collaborating with you on your next project.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
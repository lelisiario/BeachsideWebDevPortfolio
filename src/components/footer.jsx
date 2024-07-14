import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>Follow us on:</p>
            <ul className="social-icons">
              <li>
                <a href="https://github.com/lelisiario" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/laurenelisiario/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
              {/* Add more social media icons as needed */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

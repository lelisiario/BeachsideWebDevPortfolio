import React from 'react';
import Layout from '../layout';

const Contact = () => {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
        <h1>Contact Me</h1>
        <p>
          Feel free to reach out to me via LinkedIn or Twitter, or check out my GitHub profile.
        </p>
        <div className="social-links">
          <a href="https://github.com/lelisiario" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/laurenelisiario/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://x.com/BeachsideWebDev" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
        <form>
          {/* <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                required
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                required
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                rows="5"
                required
              />
            </div>
            <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
              Submit
            </button>
          </form> */}
        </form>
      </div>
    </Layout>
  );
};

export default Contact;

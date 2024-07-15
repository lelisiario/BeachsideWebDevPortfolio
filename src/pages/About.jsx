import React from 'react';
import Layout from '../layout';
import App from '../App.css';

const About = () => {
  return (
    <Layout> 
    <div style={{ maxWidth: '800px', margin: 'auto', textAlign: 'center', padding: '20px' }}>
      <h1>About Me</h1>
      <p>
        I have a background in business and government with a bachelor's degree in business and a master's degree in public administration. Transitioning into the tech space, I have honed my skills in full-stack web development through various projects and a comprehensive bootcamp. My goal is to leverage my diverse experience to create impactful and efficient web applications.
      </p>
      <hr style={{ width: '60%', margin: 'auto', marginBottom: '20px' }} />
      <h2>Education</h2>
      <ul style={{ listStylePosition: 'inside', textAlign: 'left' }}>
        <li>Bachelor's Degree in Business</li>
        <li>Master's Degree in Public Administration</li>
      </ul>
      <h2>Interests</h2>
      <p>
        In my free time, I enjoy reading, traveling, writing, and continuously learning new skills. These interests not only enrich my personal life but also inspire creativity and innovation in my professional work.
      </p>
    </div>
    </Layout>
  );
};

export default About;
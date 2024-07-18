import React from 'react';
import { projects } from '../data/projectData';
import Layout from '../layout';


const Portfolio = () => {
  return (
    <Layout> 
    <div style={{ maxWidth: '1200px', margin: 'auto', padding: '20px' }}>
      <h1>Portfolio</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ width: '300px', margin: '20px', textAlign: 'center' }}>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Portfolio;
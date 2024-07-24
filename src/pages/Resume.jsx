import React from 'react';
import Layout from '../layout';

const Resume = () => {
  return (
    <Layout>
        <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
        <h1>My Resume</h1>
      <p>Here you can find a downloadable version of my resume.</p>
      <a href="public\Elisiario_Resume_FullStack.pdf" download="Elisiario_Resume.pdf">
        Download Resume
      </a>
      <section style={{ marginBottom: '20px', padding: '10px', border: '1px', borderRadius: '5px' }}>
        <h2>Skills and Technologies</h2>
        <p>I know:</p>
        <ul>
          HTML
          <br />
          CSS
          <br />
          JavaScript
          <br />
          WebAPIs
          <br />
          Node.js
          <br />
          Express.js
          <br />
          SQL
          <br />
          MongoDB
          <br />
          React
          <br />
          Node.js
        </ul>
      </section>

      <section style={{ marginBottom: '20px', padding: '10px', border: '1px', borderRadius: '5px' }}>
        <h2>Degrees and Certifications</h2>
        <ul>
          <strong> Full-Stack Web Development Bootcamp</strong>
          <br />
          UC Berkley
          <br />
            <strong>Master's Degree in Public Administration</strong>
            <br />
            Grand Canyon University
            <br />
            <strong>Bachelor's Degree in Business</strong>
            <br />
            University of Phoenix
        </ul>
      </section>

      <section style={{ marginBottom: '20px', padding: '10px', border: '1px' }}>
        <h2>Professional Experience</h2>
        <ul style={{ listStylePosition: 'inside', textAlign: 'left' }}>
          <li>
            <strong>Program Manager – Election Operations</strong> <br />
            Solano County – Registrar of Voters, November 2023 - Present
            <ul>
              <li>Proactively engages in ongoing program planning, utilizing continuous improvement efforts to enhance election day processes.</li>
              <li>Conducts high-level management analysis, promptly identifying and resolving potential issues to ensure the efficient and successful completion of project tasks.</li>
              <li>Leads the logistical aspects of the election process, ensuring secure and organized transportation of ballots.</li>
              <li>Successfully implements program activities, guaranteeing timely completion of all projects required for seamless election day processes.</li>
            </ul>
          </li>
          <li>
            <strong>Freelance Writer/Editor</strong> <br />
            Self-Employed, February 2017 - November 2023
            <ul>
              <li>Achieved high client satisfaction through consistent positive feedback by maintaining open communication with clients to ensure their satisfaction with project progress.</li>
              <li>Ensured efficient order processing and timely content delivery by consistently meeting or exceeding project deadlines, making data-driven decisions regarding customer orders and deadlines.</li>
              <li>Effectively allocated resources and prioritized tasks, leading to project completion within deadlines and budget constraints by pragmatically evaluating customer requests and validating resource needs.</li>
            </ul>
          </li>
          <li>
            <strong>Covid-19 Assistance Case Manager</strong> <br />
            TEKsystems, April 2022 - July 2022
            <ul>
              <li>Conducted detailed fiscal analysis by tracking and reporting case statuses, ensuring accurate and timely disbursement of $1.1 million+ in rent and utility assistance to eligible households.</li>
              <li>Utilized critical thinking and analytical skills to confirm eligibility of rent and utility assistance applicants, ensuring efficient and accurate processing of applications.</li>
              <li>Provided valuable decision support data to team leads by tracking and reporting case statuses, leading to improved coordination and effective monitoring of case progress.</li>
              <li>Managed a high volume of 600+ cases, requiring precise resource allocation and prioritization, resulting in successful payouts and positive feedback.</li>
            </ul>
          </li>
          <li>
            <strong>eStore Support/Client Services</strong> <br />
            Autodesk Inc, Sept 2017 – April 2018 & Sept 2018 – Oct 2018
            <ul>
              <li>Maintained consistent customer relationship management with a 95% average KPI by serving as the first point of contact between sales and tech support, supporting customers via live chat, email, and phone.</li>
              <li>Achieved a one-call resolution rate of 90%, exceeding Autodesk's goal of 80%, resulting in increased customer satisfaction and loyalty.</li>
              <li>Owned and/or assisted with investigations of customer complaints and issues, responding to customer escalations to ensure timely resolution.</li>
              <li>Collaborated with various teams, including sales and tier 2 tech support, to troubleshoot and resolve complex customer issues.</li>
              <li>Documented customer issues and resolutions through Salesforce, maintaining accurate and up-to-date records.</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>  
    </Layout>

  );
};

export default Resume;
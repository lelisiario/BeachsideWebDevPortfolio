export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', lineHeight: '1.6' }}>
      <h1 style={{ color: '#333' }}>Welcome to My Portfolio</h1>
      <hr style={{ width: '200px', margin: '10px auto' }} />

      <section style={{ marginBottom: '20px', padding: '10px', border: '1px', borderRadius: '5px' }}>
        <h2>About Me</h2>
        <p>
          Hi, I'm [Your Name], a passionate Full-Stack Web Developer with a strong background in business and government.
          I recently transitioned into tech to leverage my analytical and problem-solving skills in a dynamic and innovative industry.
        </p>
      </section>

      <section style={{ marginBottom: '20px', padding: '10px', border: '1px', borderRadius: '5px' }}>
        <h2>Skills and Technologies</h2>
        <p>I am fluent in:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>WebAPIs</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>React</li>
          <li>MERN Stack</li>
        </ul>
      </section>



      <section style={{ marginBottom: '20px', padding: '10px', border: '1px', borderRadius: '5px' }}>
        <h2>Contact</h2>
        <p>
          Feel free to <a href="#Contact">contact me</a> if you have any questions or if you'd like to discuss potential opportunities.
        </p>
      </section>
    </div>
  );
}
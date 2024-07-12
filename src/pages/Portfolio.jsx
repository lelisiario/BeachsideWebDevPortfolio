export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <section style={{ marginBottom: '20px', padding: '10px', border: '1px', borderRadius: '5px' }}>
        <p>
          My portfolio showcases my projects, where I've combined my technical skills with my experience in program management and client services to build robust and user-friendly applications.
        </p>
        <p>Explore my work and see how I can bring value to your team or project.</p>
      </section>

      <section style={{ marginBottom: '20px', padding: '10px', border: '1px', borderRadius: '5px' }}>
        <h2>Recent Projects</h2>
        <ul>
          <li>
            <strong>Cookie Clicker Game:</strong> A fun and interactive game that challenges users to click their way to the top of the leaderboard.
          </li>
          <li>
            <strong>Book Recommendation Application:</strong> A platform that helps users discover their next favorite book based on personalized recommendations.
          </li>
          <li>
            <strong>E-commerce Site for Coffee Products:</strong> An online store offering a variety of coffee products, designed with a user-friendly interface and seamless shopping experience.
          </li>
        </ul>
      </section>
    </div>
  );
}

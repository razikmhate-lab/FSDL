function Skills() {
  return (
    <section className="portfolio-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Programming</h3>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>AI & Data Science</h3>
          <ul>
            <li>Machine Learning & Deep Learning</li>
            <li>TensorFlow & LSTMs</li>
            <li>Graph Neural Networks</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Web Development</h3>
          <ul>
            <li>React & MERN Stack</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Skills;
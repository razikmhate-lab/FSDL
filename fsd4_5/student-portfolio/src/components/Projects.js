function Projects() {
  return (
    <section className="portfolio-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Collaborator Finder</h3>
          <p>A full-stack web application utilizing Graph Neural Networks to recommend ideal GitHub collaborators.</p>
        </div>
        <div className="project-card">
          <h3>ExamCell Scheduler</h3>
          <p>An automated university timetable and seating scheduler built using Java, Servlets, JDBC, and Swing.</p>
        </div>
        <div className="project-card">
          <h3>E-Commerce Sales Predictor</h3>
          <p>A machine learning model and interactive dashboard for predicting sales trends.</p>
        </div>
        <div className="project-card">
          <h3>Generative NLP Research</h3>
          <p>A comprehensive seminar research project focused on generative diffusion-based text models.</p>
        </div>
      </div>
    </section>
  );
}
export default Projects;
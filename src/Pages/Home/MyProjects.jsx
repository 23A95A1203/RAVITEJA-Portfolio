import React from "react";
import data from "../../data/index.json";

export default function MyProjects() {
  console.log(data.projects); // Debug: Check if data is loaded correctly

  return (
    <section className="projects-section" id="MyProjects">
      <h2 className="section-heading">My Projects</h2>
      <div className="projects-grid">
        {data.projects.map((project) => {
          console.log(project.liveLink, project.sourceCode); // Debug: Check individual URLs
          return (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img
                  src={`${process.env.PUBLIC_URL}${project.image}`}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-buttons">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button live-button"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button code-button"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

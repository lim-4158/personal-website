'use client';

import React from 'react';

const ProjectCard = ({ title, description, technologies, achievements, links }) => {
  return (
    <div className="card project-card">
      <h3 className="card-title">{title}</h3>
      <div className="card-content">
        <p className="project-description">{description}</p>
        
        {achievements && achievements.length > 0 && (
          <div className="achievements-container">
            <h4>Achievements</h4>
            <ul className="achievements-list">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="technologies-container">
          <h4>Technologies</h4>
          <div className="tech-tags">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        
        {links && (
          <div className="project-links">
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fab fa-github"></i> GitHub
              </a>
            )}
            {links.live && (
              <a href={links.live} target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

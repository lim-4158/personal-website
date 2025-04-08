'use client';

import React from 'react';

const ProjectCard = ({ title, period, description, technologies, achievements, links }) => {
  return (
    <div className="card project-card">
      <div className="card-header">
        <span className="card-indicator"></span>
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-content">
        {period && <div className="project-period">{period}</div>}
        <p className="project-description">{description}</p>
        
        {achievements && achievements.length > 0 && (
          <div className="achievements-container">
            <h4 className="section-subtitle">Achievements</h4>
            <ul className="achievements-list">
              {achievements.map((achievement, index) => (
                <li key={index}>
                  <span className="terminal-bullet">›</span> {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {technologies && technologies.length > 0 && (
          <div className="technologies-container">
            <h4 className="section-subtitle">Technologies</h4>
            <div className="tech-tags">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        )}
        
        {links && Object.keys(links).length > 0 && (
          <div className="project-links">
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                <i className="fab fa-github"></i> GitHub
              </a>
            )}
            {links.live && (
              <a href={links.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            )}
            {links.demo && (
              <a href={links.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                {links.demo.includes('youtube') ? 
                  <><i className="fab fa-youtube"></i> Demo</> : 
                  <><i className="fas fa-laptop-code"></i> Demo</>
                }
              </a>
            )}
            {links.dorahacks && (
              <a href={links.dorahacks} target="_blank" rel="noopener noreferrer" className="project-link dorahacks">
                <i className="fas fa-trophy"></i> DoraHacks
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

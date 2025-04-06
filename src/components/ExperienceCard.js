'use client';

import React from 'react';

const ExperienceCard = ({ title, company, period, description, skills }) => {
  return (
    <div className="card experience-card">
      <div className="card-header">
        <span className="card-indicator"></span>
        <h3 className="card-title">{title}</h3>
      </div>
      <h4 className="card-subtitle">{company} | {period}</h4>
      <div className="card-content">
        <ul className="experience-list">
          {description.map((item, index) => (
            <li key={index}>
              <span className="terminal-bullet">›</span> {item}
            </li>
          ))}
        </ul>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

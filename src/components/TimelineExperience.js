'use client';

import React, { useState } from 'react';

const TimelineExperience = ({ experiences }) => {
  // Use an array of active states instead of a single active index
  const [activeExps, setActiveExps] = useState([]);

  const toggleExpand = (index) => {
    setActiveExps(prev => {
      // If already active, remove it; otherwise add it
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className="timeline-container">
      <div className="timeline-track">
        {/* Displaying experiences in the order they are provided, not chronologically */}
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div 
              className={`timeline-node ${activeExps.includes(index) ? 'active' : ''}`}
              onClick={() => toggleExpand(index)}
              style={{ top: '-15px' }}  // Position the node above the content box
            >
              <span className="timeline-date">{exp.period}</span>
            </div>
            <div className={`timeline-content ${activeExps.includes(index) ? 'expanded' : ''}`}>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <div className="timeline-details">
                <ul>
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="timeline-skills">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="timeline-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineExperience;

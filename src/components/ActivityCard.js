'use client';

import React from 'react';

const ActivityCard = ({ category, title, period, description }) => {
  return (
    <div className="card activity-card">
      <div className="activity-category">{category}</div>
      <div className="card-header">
        <span className="card-indicator"></span>
        <h3 className="card-title">{title}</h3>
      </div>
      {period && <h4 className="card-subtitle">{period}</h4>}
      <div className="card-content">
        {Array.isArray(description) ? (
          <ul className="activity-list">
            {description.map((item, index) => (
              <li key={index}>
                <span className="terminal-bullet">›</span> {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="terminal-text">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;

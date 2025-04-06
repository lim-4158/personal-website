'use client';

import React from 'react';

const ActivityCard = ({ category, title, period, description }) => {
  return (
    <div className="card activity-card">
      <div className="activity-category">{category}</div>
      <h3 className="card-title">{title}</h3>
      {period && <h4 className="card-subtitle">{period}</h4>}
      <div className="card-content">
        {Array.isArray(description) ? (
          <ul className="activity-list">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;

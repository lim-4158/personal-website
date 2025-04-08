'use client';

import React, { useState } from 'react';

const activitiesData = [
  {
    category: "Leadership",
    title: "Business Development Lead, NUS Fintech Society",
    period: "July 2024 – Present",
    description: [
      "Organised NUS Fintech Summit 2025 with 18 sponsors/partners and 600+ attendees from 9 different countries",
      "Led a team of 20 executives to cultivate industrial partnerships",
      "Sourced and secured $150,000 worth of sponsorship as a team"
    ]
  },
  {
    category: "Education",
    title: "Peer Tutor, NUS Centre of English Language and Communications",
    period: "Jan 2024 – Present",
    description: [
      "Coached 20 postgraduates using tailored tutoring strategies to improve communication and presentation skills"
    ]
  },
  {
    category: "Entrepreneurship",
    title: "Student Ambassador, NUS Enterprise Summer Programme",
    period: "Aug 2024",
    description: [
      "Led a team of 5 and pitched about a micro learning app to replace doom scrolling during demo day",
      "Learnt about entrepreneurship from serial entrepreneurs",
      "Facilitated as the bridge between NUS Enterprise and the participants"
    ]
  },
  {
    category: "Athletics",
    title: "Varsity Athlete, NUS Badminton",
    period: "Aug 2023 – May 2024",
    description: [
      "Singapore University Games 2023 Gold Medalist",
      "Institute-Varsity-Polytechnic Games 2024 Bronze Medalist",

    ]
  },
  {
    category: "Community",
    title: "Eusoff Hall Block Committee",
    period: "Aug 2023 – May 2024",
    description: [
      "Planned bi-weekly bonding events for 100 residents",
      "Fostered community engagement and hall spirit"
    ]
  }
];

const ActivitiesSection = () => {
  const [expandedActivity, setExpandedActivity] = useState(null);

  const toggleActivity = (index) => {
    if (expandedActivity === index) {
      setExpandedActivity(null);
    } else {
      setExpandedActivity(index);
    }
  };

  return (
    <div className="activities-list">
      {activitiesData.map((activity, index) => (
        <div 
          key={index} 
          className={`activity-item ${expandedActivity === index ? 'expanded' : ''}`}
          onClick={() => toggleActivity(index)}
        >
          <div className="activity-header">
            <div className="activity-title-row">
              <span className="activity-indicator"></span>
              <h3 className="activity-title">{activity.title}</h3>
              <span className="activity-expand-icon">{expandedActivity === index ? '−' : '+'}</span>
            </div>
            <div className="activity-meta">
              <span className="activity-category">{activity.category}</span>
              <span className="activity-period">{activity.period}</span>
            </div>
          </div>
          
          <div className="activity-content">
            {Array.isArray(activity.description) ? (
              <ul className="activity-description-list">
                {activity.description.map((item, idx) => (
                  <li key={idx}>
                    <span className="terminal-bullet">›</span> {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="activity-description">{activity.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivitiesSection;

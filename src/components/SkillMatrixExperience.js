'use client';

import React, { useState, useEffect } from 'react';

const SkillMatrixExperience = ({ experiences }) => {
  // Extract all unique skills from experiences
  const allSkills = [...new Set(experiences.flatMap(exp => exp.skills))].sort();
  
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [filteredExperiences, setFilteredExperiences] = useState(experiences);
  
  useEffect(() => {
    if (selectedSkill) {
      setFilteredExperiences(experiences.filter(exp => 
        exp.skills.includes(selectedSkill)
      ));
    } else {
      setFilteredExperiences(experiences);
    }
  }, [selectedSkill, experiences]);
  
  // Calculate skill usage counts
  const skillUsage = allSkills.reduce((acc, skill) => {
    acc[skill] = experiences.filter(exp => exp.skills.includes(skill)).length;
    return acc;
  }, {});
  
  return (
    <div className="skill-matrix-container">
      <div className="skill-matrix-header">
        <h3>Filter by Skill</h3>
        <div className="skill-matrix-tags">
          {allSkills.map(skill => (
            <button
              key={skill}
              className={`skill-matrix-tag ${selectedSkill === skill ? 'active' : ''}`}
              onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
              style={{
                fontSize: `${Math.min(1.2, 0.8 + (skillUsage[skill] * 0.1))}rem`
              }}
            >
              {skill}
              <span className="skill-count">{skillUsage[skill]}</span>
            </button>
          ))}
        </div>
        {selectedSkill && (
          <p className="skill-filter-info">
            Showing experiences with <span className="highlight">{selectedSkill}</span>
            <button 
              className="clear-filter"
              onClick={() => setSelectedSkill(null)}
            >
              Clear filter
            </button>
          </p>
        )}
      </div>
      
      <div className="skill-matrix-experiences">
        {filteredExperiences.map((exp, index) => (
          <div 
            key={index} 
            className={`skill-matrix-card ${
              selectedSkill && exp.skills.includes(selectedSkill) ? 'highlighted' : ''
            }`}
          >
            <div className="skill-matrix-company">
              <h3>{exp.company}</h3>
              <span className="skill-matrix-period">{exp.period}</span>
            </div>
            <h4 className="skill-matrix-title">{exp.title}</h4>
            <div className="skill-matrix-content">
              <ul className="skill-matrix-list">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="skill-matrix-skills">
                {exp.skills.map(skill => (
                  <span 
                    key={skill} 
                    className={`skill-matrix-skill ${skill === selectedSkill ? 'active' : ''}`}
                    onClick={() => setSelectedSkill(skill === selectedSkill ? null : skill)}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillMatrixExperience;

/* CSS to add to your stylesheet:

.skill-matrix-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
}

.skill-matrix-header {
  background: rgba(30, 33, 48, 0.6);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid rgba(1, 200, 238, 0.2);
}

.skill-matrix-header h3 {
  margin: 0 0 1rem;
  color: var(--text-highlight);
}

.skill-matrix-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.skill-matrix-tag {
  background: transparent;
  border: 1px solid var(--accent-secondary);
  color: var(--accent-secondary);
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  font-family: 'Chakra Petch', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.skill-matrix-tag:hover {
  background: rgba(1, 200, 238, 0.1);
  transform: translateY(-2px);
}

.skill-matrix-tag.active {
  background: var(--accent-secondary);
  color: var(--bg-dark);
}

.skill-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  font-size: 0.7rem;
}

.skill-matrix-tag.active .skill-count {
  background: rgba(0, 0, 0, 0.2);
}

.skill-filter-info {
  color: var(--text-light);
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.highlight {
  color: var(--accent-secondary);
  font-weight: bold;
}

.clear-filter {
  background: rgba(255, 42, 109, 0.1);
  border: 1px solid var(--accent-primary);
  color: var(--accent-primary);
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-filter:hover {
  background: rgba(255, 42, 109, 0.2);
}

.skill-matrix-experiences {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1.5rem;
}

.skill-matrix-card {
  background: rgba(30, 33, 48, 0.6);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid rgba(1, 200, 238, 0.2);
  transition: all 0.3s ease;
}

.skill-matrix-card.highlighted {
  border-color: var(--accent-secondary);
  box-shadow: 0 5px 15px rgba(1, 200, 238, 0.3);
  transform: translateY(-5px);
}

.skill-matrix-company {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-matrix-company h3 {
  margin: 0;
  color: var(--accent-secondary);
  font-size: 1.2rem;
}

.skill-matrix-period {
  font-size: 0.85rem;
  color: var(--text-light);
  font-family: 'Chakra Petch', sans-serif;
}

.skill-matrix-title {
  margin: 0 0 1.5rem;
  color: var(--text-highlight);
  font-size: 1.5rem;
  border-bottom: 1px solid rgba(1, 200, 238, 0.2);
  padding-bottom: 0.5rem;
}

.skill-matrix-list {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
}

.skill-matrix-list li {
  margin-bottom: 0.75rem;
  position: relative;
  padding-left: 1.5rem;
  line-height: 1.5;
}

.skill-matrix-list li::before {
  content: '›';
  color: var(--accent-highlight);
  position: absolute;
  left: 0;
  font-weight: bold;
}

.skill-matrix-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.skill-matrix-skill {
  background: rgba(1, 200, 238, 0.05);
  border: 1px solid rgba(1, 200, 238, 0.3);
  color: var(--accent-secondary);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.skill-matrix-skill:hover, .skill-matrix-skill.active {
  background: var(--accent-secondary);
  color: var(--bg-dark);
}

@media (max-width: 768px) {
  .skill-matrix-experiences {
    grid-template-columns: 1fr;
  }
}
*/ 
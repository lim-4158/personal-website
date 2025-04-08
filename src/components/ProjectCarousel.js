'use client';

import React, { useState, useEffect } from 'react';

const ProjectCarousel = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 6000); // Slightly longer time for projects to read details
    
    return () => clearInterval(interval);
  }, [autoRotate, projects.length]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
    setAutoRotate(false);
  };

  return (
    <div className="carousel-container project-carousel">
      <div className="carousel-controls">
        <button 
          className="carousel-btn" 
          onClick={() => setActiveIndex((activeIndex - 1 + projects.length) % projects.length)}
          aria-label="Previous project"
        >
          ‹
        </button>
        <button 
          className="carousel-btn auto-rotate" 
          onClick={() => setAutoRotate(!autoRotate)}
          aria-label={autoRotate ? "Pause rotation" : "Start rotation"}
        >
          {autoRotate ? '⏸' : '▶'}
        </button>
        <button 
          className="carousel-btn" 
          onClick={() => setActiveIndex((activeIndex + 1) % projects.length)}
          aria-label="Next project"
        >
          ›
        </button>
      </div>
      
      <div className="carousel-stage">
        {projects.map((project, index) => {
          // Calculate position in carousel
          const position = index - activeIndex;
          const isActive = position === 0;
          
          // Wider spacing for cards to prevent overlapping text
          const xOffset = position * 70;
          
          return (
            <div 
              key={index}
              className={`carousel-card project-card ${isActive ? 'active' : ''}`}
              style={{
                transform: isActive 
                  ? `translateZ(100px)` 
                  : `
                    translateX(${xOffset}%) 
                    translateZ(${Math.abs(position) === 1 ? '20px' : '0'}) 
                    rotateY(${position * -10}deg)
                  `,
                opacity: Math.abs(position) > 2 ? 0 : 1 - (Math.abs(position) * 0.25),
                zIndex: isActive ? 20 : 10 - Math.abs(position),
                // Adding a subtle scale to improve readability
                scale: isActive ? '1' : `${1 - Math.abs(position) * 0.1}`
              }}
              onClick={() => handleCardClick(index)}
            >
              <div className="carousel-card-inner">
                <div className="carousel-card-front">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                  </div>
                  {project.projectType && (
                    <span className="project-type-tag">{project.projectType}</span>
                  )}
                  <p className="project-description">{project.description}</p>
                </div>
                {isActive && (
                  <div className="carousel-card-back">
                    {project.achievements && project.achievements.length > 0 && (
                      <div className="project-achievements">
                        <h4>Achievements</h4>
                        <ul className="carousel-details">
                          {project.achievements.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="project-technologies">
                      <h4>Technologies</h4>
                      <div className="carousel-techs">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="carousel-tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    {project.links && (
                      <div className="project-links">
                        {project.links.github && (
                          <a 
                            href={project.links.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-link github"
                            onClick={(e) => e.stopPropagation()}
                          >
                            GitHub
                          </a>
                        )}
                        {project.links.live && (
                          <a 
                            href={project.links.live} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-link live"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="carousel-indicators">
        {projects.map((_, index) => (
          <span 
            key={index}
            className={`carousel-indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel; 
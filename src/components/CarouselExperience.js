'use client';

import React, { useState, useEffect } from 'react';

const CarouselExperience = ({ experiences }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoRotate, experiences.length]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
    setAutoRotate(false);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-controls">
        <button 
          className="carousel-btn" 
          onClick={() => setActiveIndex((activeIndex - 1 + experiences.length) % experiences.length)}
        >
          ‹
        </button>
        <button 
          className="carousel-btn auto-rotate" 
          onClick={() => setAutoRotate(!autoRotate)}
        >
          {autoRotate ? '⏸' : '▶'}
        </button>
        <button 
          className="carousel-btn" 
          onClick={() => setActiveIndex((activeIndex + 1) % experiences.length)}
        >
          ›
        </button>
      </div>
      
      <div className="carousel-stage">
        {experiences.map((exp, index) => {
          // Calculate position in carousel
          const position = index - activeIndex;
          const isActive = position === 0;
          
          return (
            <div 
              key={index}
              className={`carousel-card ${isActive ? 'active' : ''}`}
              style={{
                transform: `
                  translateX(${position * 50}%) 
                  translateZ(${position === 0 ? '50px' : '0'}) 
                  rotateY(${position * -15}deg)
                `,
                opacity: Math.abs(position) > 2 ? 0 : 1,
                zIndex: 10 - Math.abs(position)
              }}
              onClick={() => handleCardClick(index)}
            >
              <div className="carousel-card-inner">
                <div className="carousel-card-front">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <p className="carousel-period">{exp.period}</p>
                </div>
                {isActive && (
                  <div className="carousel-card-back">
                    <ul className="carousel-details">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <div className="carousel-skills">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="carousel-skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="carousel-indicators">
        {experiences.map((_, index) => (
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

export default CarouselExperience;

/* CSS to add to your stylesheet:

.carousel-container {
  position: relative;
  width: 100%;
  height: 600px;
  perspective: 1200px;
  margin: 3rem auto;
}

.carousel-stage {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-card {
  position: absolute;
  width: 400px;
  height: 500px;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(.2,.85,.4,1.275);
  transform-style: preserve-3d;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  background: linear-gradient(45deg, var(--accent-primary-dark), var(--bg-dark));
  border: 1px solid rgba(1, 200, 238, 0.2);
}

.carousel-card.active {
  box-shadow: 0 20px 50px rgba(1, 200, 238, 0.4);
  border: 1px solid var(--accent-secondary);
}

.carousel-card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  overflow: hidden;
}

.carousel-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.carousel-card h4 {
  margin: 0 0 1rem;
  color: var(--text-highlight);
  font-size: 1.2rem;
}

.carousel-period {
  display: inline-block;
  background: rgba(1, 200, 238, 0.1);
  border: 1px solid var(--accent-secondary);
  color: var(--accent-secondary);
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-family: 'Chakra Petch', sans-serif;
  margin-bottom: 1.5rem;
}

.carousel-card-back {
  margin-top: 1rem;
  animation: fadeIn 0.4s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.carousel-details {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
}

.carousel-details li {
  margin-bottom: 0.75rem;
  position: relative;
  padding-left: 1.5rem;
  line-height: 1.5;
}

.carousel-details li::before {
  content: '›';
  color: var(--accent-highlight);
  position: absolute;
  left: 0;
  font-weight: bold;
}

.carousel-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.carousel-skill-tag {
  background-color: rgba(1, 200, 238, 0.1);
  border: 1px solid var(--accent-secondary);
  color: var(--accent-secondary);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-family: 'Chakra Petch', sans-serif;
}

.carousel-controls {
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 5;
}

.carousel-btn {
  background: transparent;
  border: 2px solid var(--accent-secondary);
  color: var(--accent-secondary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.carousel-btn:hover {
  background: var(--accent-secondary);
  color: var(--bg-dark);
}

.carousel-btn.auto-rotate {
  font-size: 0.8rem;
}

.carousel-indicators {
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.carousel-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-indicator.active {
  background: var(--accent-secondary);
  transform: scale(1.3);
}

@media (max-width: 768px) {
  .carousel-container {
    height: 500px;
  }
  
  .carousel-card {
    width: 300px;
    height: 400px;
  }
}
*/ 
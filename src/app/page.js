'use client';

import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TimelineExperience from '@/components/TimelineExperience';
import ProjectCarousel from '@/components/ProjectCarousel';
import ActivitiesSection from '@/components/ActivitiesSection';
import Optimizations from '@/components/Optimizations';
import { experiencesData } from '@/components/ExperiencesSection';
import { projectsData } from '@/components/ProjectsSection';

export default function Home() {
  // Add intersection observer for section animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.add('lazy-section');
      observer.observe(section);
    });
    
    return () => {
      document.querySelectorAll('.content-section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main>
      <Navigation />
      <Optimizations />
      
      <section id="home" className="content-section">
        <div className="container">
          <div className="hero-content fade-in">
            <h1 data-text="Lim Teng Hong" className="glitch">Lim Teng Hong </h1>
            <h3>
              <span>AI Enthusiast & Software Engineer</span>
            </h3>
            <p>
              On a mission to build cool stuff with AI using AI
            </p>
            <div className="hero-buttons">
              <a href="#experiences" className="btn btn-primary">View My Work</a>
              <a href="https://www.linkedin.com/in/teng-hong-lim/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>
      
      <section id="experiences" className="content-section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <TimelineExperience experiences={experiencesData} />
        </div>
      </section>
      
      <section id="projects" className="content-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <ProjectCarousel projects={projectsData} />
        </div>
      </section>
      
      <section id="activities" className="content-section">
        <div className="container">
          <h2 className="section-title">Other Activities</h2>
          <ActivitiesSection />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

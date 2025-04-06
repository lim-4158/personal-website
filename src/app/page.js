'use client';

import React from 'react';
import ThreeScene from '@/components/ThreeScene';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ExperiencesSection from '@/components/ExperiencesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import Optimizations from '@/components/Optimizations';

export default function Home() {
  return (
    <main>
      <ThreeScene />
      <Navigation />
      <Optimizations />
      
      <section id="home" className="content-section">
        <div className="container">
          <div className="hero-content fade-in">
            <h1>Lim Teng Hong</h1>
            <h3>Software Engineer & Developer</h3>
            <p>
              Building innovative solutions with a focus on user experience and cutting-edge technologies.
              Passionate about creating impactful applications that solve real-world problems.
            </p>
            <div className="hero-buttons">
              <a href="#experiences" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline mt-3 ml-3">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>
      
      <section id="experiences" className="content-section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <ExperiencesSection />
        </div>
      </section>
      
      <section id="projects" className="content-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <ProjectsSection />
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

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'experiences', 'projects', 'activities'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="#home" className="nav-logo">
          LTH
        </Link>
        <div className="nav-links">
          <Link
            href="#home"
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            href="#experiences"
            className={`nav-link ${activeSection === 'experiences' ? 'active' : ''}`}
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            Projects
          </Link>
          <Link
            href="#activities"
            className={`nav-link ${activeSection === 'activities' ? 'active' : ''}`}
          >
            Activities
          </Link>
        </div>
        <button className="mobile-menu-btn hidden">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

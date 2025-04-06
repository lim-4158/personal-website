'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="#home" className="nav-logo" onClick={closeMenu}>
          <span data-text="LTH" className="glitch">LTH</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link
            href="#home"
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            HOME
          </Link>
          <Link
            href="#experiences"
            className={`nav-link ${activeSection === 'experiences' ? 'active' : ''}`}
          >
            EXPERIENCE
          </Link>
          <Link
            href="#projects"
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            PROJECTS
          </Link>
          <Link
            href="#activities"
            className={`nav-link ${activeSection === 'activities' ? 'active' : ''}`}
          >
            ACTIVITIES
          </Link>
        </div>
        
        {/* Mobile Menu Button - Visible only on mobile */}
        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {/* Mobile Menu - Hidden by default */}
      {mobileMenuOpen && (
        <div className="mobile-menu active">
          <Link
            href="#home"
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            HOME
          </Link>
          <Link
            href="#experiences"
            className={`nav-link ${activeSection === 'experiences' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            EXPERIENCE
          </Link>
          <Link
            href="#projects"
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            PROJECTS
          </Link>
          <Link
            href="#activities"
            className={`nav-link ${activeSection === 'activities' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            ACTIVITIES
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

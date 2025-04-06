'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://linkedin.com/in/teng-hong-lim" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:kevinthlim@gmail.com" className="social-link">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        
        <div className="footer-divider"></div>
        
        <p className="copyright terminal-text">
          &copy; {new Date().getFullYear()} Lim Teng Hong. All rights reserved.
        </p>
        <p className="contact-info">
          <a href="mailto:kevinthlim@gmail.com" className="footer-link">kevinthlim@gmail.com</a> | 
          <a href="tel:+6586796424" className="footer-link">+65 86796424</a>
        </p>
      </div>
      
      {/* Retro-futuristic footer decoration */}
      <div className="footer-decoration">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>
    </footer>
  );
};

export default Footer;

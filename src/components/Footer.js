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
        <p className="copyright">
          &copy; {new Date().getFullYear()} Lim Teng Hong. All rights reserved.
        </p>
        <p className="contact-info">
          <a href="mailto:kevinthlim@gmail.com">kevinthlim@gmail.com</a> | <a href="tel:+6586796424">+65 86796424</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

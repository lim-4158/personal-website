'use client';

import React, { useEffect } from 'react';
import '../app/globals.css';
import '../app/responsive.css';

// Lazy loading for content sections
const LazyLoad = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('.content-section');
    const cards = document.querySelectorAll('.card');

    sections.forEach(section => {
      section.classList.add('lazy-section');
      observer.observe(section);
    });

    cards.forEach(card => {
      card.classList.add('lazy-section');
      observer.observe(card);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return null;
};

// Performance optimizations
const PerformanceOptimizations = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&family=Chakra+Petch:wght@300;400;500;600;700&display=swap', as: 'style' }
    ];

    preloadLinks.forEach(link => {
      const linkEl = document.createElement('link');
      Object.keys(link).forEach(attr => {
        linkEl.setAttribute(attr, link[attr]);
      });
      document.head.appendChild(linkEl);
    });

    // Defer non-critical resources
    const loadFontAwesome = () => {
      const script = document.createElement('script');
      script.src = 'https://kit.fontawesome.com/a076d05399.js';
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    };

    // Load non-critical resources after page load
    if (document.readyState === 'complete') {
      loadFontAwesome();
    } else {
      window.addEventListener('load', loadFontAwesome);
      return () => window.removeEventListener('load', loadFontAwesome);
    }
  }, []);

  return null;
};

// Combine all optimizations
const Optimizations = () => {
  return (
    <>
      <LazyLoad />
      <PerformanceOptimizations />
    </>
  );
};

export default Optimizations;

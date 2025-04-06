'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useTexture, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { ExperienceModel, ProjectModel, ActivityModel } from './InteractiveModels';

// Floating particles component
const Particles = ({ count = 1000, color = '#6366f1' }) => {
  const mesh = useRef();
  const positions = useRef(null);
  const speeds = useRef(null);

  useEffect(() => {
    // Initialize particle positions and speeds
    positions.current = new Float32Array(count * 3);
    speeds.current = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions.current[i3] = (Math.random() - 0.5) * 10;
      positions.current[i3 + 1] = (Math.random() - 0.5) * 10;
      positions.current[i3 + 2] = (Math.random() - 0.5) * 10;
      speeds.current[i] = 0.01 + Math.random() * 0.02;
    }

    mesh.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions.current, 3)
    );
  }, [count]);

  useFrame(() => {
    if (!positions.current) return;

    const positionAttribute = mesh.current.geometry.getAttribute('position');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positionAttribute.array[i3 + 1] -= speeds.current[i];

      // Reset particles that go below the scene
      if (positionAttribute.array[i3 + 1] < -5) {
        positionAttribute.array[i3] = (Math.random() - 0.5) * 10;
        positionAttribute.array[i3 + 1] = 5;
        positionAttribute.array[i3 + 2] = (Math.random() - 0.5) * 10;
      }
    }

    positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry />
      <pointsMaterial
        size={0.05}
        color={color}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Background scene component with interactive elements
const BackgroundScene = () => {
  const { mouse, viewport } = useThree();
  const groupRef = useRef();
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredModel, setHoveredModel] = useState(null);

  // Listen for scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = ['home', 'experiences', 'projects', 'activities'];
      
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

  useFrame(() => {
    if (!groupRef.current) return;
    // Subtle movement based on mouse position
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.1,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.y * 0.05,
      0.05
    );
  });

  // Scroll to section when model is clicked
  const handleModelClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <group ref={groupRef}>
      <Particles count={1500} />
      
      {/* Interactive models for each section */}
      <ExperienceModel 
        position={[2, 0, -2]} 
        hovered={hoveredModel === 'experiences'}
        onClick={() => handleModelClick('experiences')}
        onPointerOver={() => setHoveredModel('experiences')}
        onPointerOut={() => setHoveredModel(null)}
      />
      
      <ProjectModel 
        position={[-2, 1, -1]} 
        hovered={hoveredModel === 'projects'}
        onClick={() => handleModelClick('projects')}
        onPointerOver={() => setHoveredModel('projects')}
        onPointerOut={() => setHoveredModel(null)}
      />
      
      <ActivityModel 
        position={[0, -1.5, -3]} 
        hovered={hoveredModel === 'activities'}
        onClick={() => handleModelClick('activities')}
        onPointerOver={() => setHoveredModel('activities')}
        onPointerOut={() => setHoveredModel(null)}
      />
    </group>
  );
};

// Main Three.js scene component
const ThreeScene = () => {
  // Performance optimization for mobile devices
  const [dpr, setDpr] = useState(1);
  
  useEffect(() => {
    // Detect device capabilities and set appropriate DPR
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setDpr(isMobile ? [0.5, 1] : [1, 2]);
  }, []);

  return (
    <div className="three-canvas">
      <Canvas dpr={dpr} gl={{ antialias: true, powerPreference: 'high-performance' }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <BackgroundScene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;

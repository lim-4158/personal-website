'use client';

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Interactive 3D model for experience section
const ExperienceModel = ({ position, hovered, onClick }) => {
  const mesh = useRef();
  
  useFrame(() => {
    if (!mesh.current) return;
    
    // Rotate slowly by default
    mesh.current.rotation.y += 0.005;
    
    // Scale up slightly when hovered
    mesh.current.scale.x = THREE.MathUtils.lerp(
      mesh.current.scale.x,
      hovered ? 1.2 : 1,
      0.1
    );
    mesh.current.scale.y = THREE.MathUtils.lerp(
      mesh.current.scale.y,
      hovered ? 1.2 : 1,
      0.1
    );
    mesh.current.scale.z = THREE.MathUtils.lerp(
      mesh.current.scale.z,
      hovered ? 1.2 : 1,
      0.1
    );
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      onClick={onClick}
    >
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={hovered ? "#8b5cf6" : "#6366f1"}
        metalness={0.5}
        roughness={0.2}
        wireframe={true}
      />
    </mesh>
  );
};

// Interactive 3D model for project section
const ProjectModel = ({ position, hovered, onClick }) => {
  const mesh = useRef();
  
  useFrame(() => {
    if (!mesh.current) return;
    
    // Rotate slowly by default
    mesh.current.rotation.x += 0.003;
    mesh.current.rotation.y += 0.005;
    
    // Scale up slightly when hovered
    mesh.current.scale.x = THREE.MathUtils.lerp(
      mesh.current.scale.x,
      hovered ? 1.2 : 1,
      0.1
    );
    mesh.current.scale.y = THREE.MathUtils.lerp(
      mesh.current.scale.y,
      hovered ? 1.2 : 1,
      0.1
    );
    mesh.current.scale.z = THREE.MathUtils.lerp(
      mesh.current.scale.z,
      hovered ? 1.2 : 1,
      0.1
    );
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      onClick={onClick}
    >
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={hovered ? "#10b981" : "#059669"}
        metalness={0.5}
        roughness={0.2}
        wireframe={true}
      />
    </mesh>
  );
};

// Interactive 3D model for activities section
const ActivityModel = ({ position, hovered, onClick }) => {
  const mesh = useRef();
  
  useFrame(() => {
    if (!mesh.current) return;
    
    // Rotate slowly by default
    mesh.current.rotation.y += 0.005;
    
    // Scale up slightly when hovered
    mesh.current.scale.x = THREE.MathUtils.lerp(
      mesh.current.scale.x,
      hovered ? 1.2 : 1,
      0.1
    );
    mesh.current.scale.y = THREE.MathUtils.lerp(
      mesh.current.scale.y,
      hovered ? 1.2 : 1,
      0.1
    );
    mesh.current.scale.z = THREE.MathUtils.lerp(
      mesh.current.scale.z,
      hovered ? 1.2 : 1,
      0.1
    );
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      onClick={onClick}
    >
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={hovered ? "#f59e0b" : "#d97706"}
        metalness={0.5}
        roughness={0.2}
        wireframe={true}
      />
    </mesh>
  );
};

export { ExperienceModel, ProjectModel, ActivityModel };

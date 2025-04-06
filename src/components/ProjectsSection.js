'use client';

import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const projectsData = [
  {
    title: "FlareGate",
    description: "A decentralized peer-to-peer (P2P) platform to facilitate seamless on-ramping and off-ramping between fiat currencies and cryptocurrencies.",
    technologies: ["Blockchain", "Solidity", "Web3", "React", "Smart Contracts"],
    achievements: [
      "Won 1st place for Consumer Main Track (1,500 USD) at ETH Oxford Hackathon",
      "Won 1st place for Flare Data Connector Track (5,000 USD)",
      "Awarded the STOW grant to represent NUS in international events"
    ],
    links: {
      github: "https://github.com/username/flaregate",
      live: "https://flaregate.example.com"
    }
  },
  {
    title: "24X365: AI-Powered Calendar Application",
    description: "An innovative AI calendar app that helps users manage their time more effectively through intelligent scheduling and task management.",
    technologies: ["Django", "React", "PostgreSQL", "OpenAI API"],
    achievements: [
      "Developed from ideation to deployment using Django, React and PostgreSQL",
      "Implemented chain of thought prompting using OpenAI API, achieving over 95% accuracy in task execution"
    ],
    links: {
      github: "https://github.com/username/24x365",
      live: "https://24x365.example.com"
    }
  }
];

const ProjectsSection = () => {
  return (
    <div className="projects-grid">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          achievements={project.achievements}
          links={project.links}
        />
      ))}
    </div>
  );
};

export default ProjectsSection;

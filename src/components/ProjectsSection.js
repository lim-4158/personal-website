'use client';

import React from 'react';
import ProjectCard from '@/components/ProjectCard';

export const projectsData = [
  {
    title: "FlareGate",
    projectType: "ETH Oxford 2025 Hackathon",
    description: "A decentralized peer-to-peer (P2P) platform for seamless on-ramping and off-ramping between fiat currencies and cryptocurrencies.",
    technologies: ["Blockchain", "Solidity", "Web3", "React", "Smart Contracts"],
    achievements: [
      "1st place for Consumer Main Track (1,500 USD)",
      "1st place for Flare Data Connector Track (5,000 USD)",
      "Awarded the STOW grant to represent NUS at ETH Oxford @ Oxford University"
    ],
    links: {
      github: "https://dorahacks.io/buidl/22543/",
      live: "https://flaregate.example.com"
    }
  },
  {
    title: "24X365: AI Calendar",
    projectType: "Startup",
    description: "An AI calendar app that helps users manage time more effectively through a chat interface.",
    technologies: ["Django", "React", "PostgreSQL", "OpenAI API"],
    achievements: [
      "Developed from ideation to deployment using Django, React and PostgreSQL",
      "Implemented chain of thought prompting using OpenAI API, achieving over 95% accuracy in task execution"
    ],
    links: {
      github: "https://github.com/username/24x365",
      live: "https://24x365.example.com"
    }
  },
  {
    title: "Eusoff Hall Digital Systems",
    projectType: "School",
    description: "Digital tools that streamlined administrative processes for Eusoff Hall, including CCA registration and jersey bidding systems.",
    technologies: ["Next.js", "MongoDB", "Node.js", "Express", "JWT"],
    achievements: [
      "Reduced manual processing time by 70% through automated form handling",
      "Implemented secure authentication system for 600+ hall residents",
      "Created intuitive interfaces leading to 98% user satisfaction rating"
    ],
    links: {
      github: "https://github.com/username/eusoff-digital",
      live: "https://eusoff-systems.example.com"
    }
  },
  {
    title: "NLP-Enhanced Education Platform",
    projectType: "Personal",
    description: "AI-powered platform using NLP to provide personalized feedback to students on their assignments and presentations.",
    technologies: ["Python", "TensorFlow", "Flask", "Vue.js", "NLP"],
    achievements: [
      "Built custom NLP models with 92% accuracy in identifying improvement areas",
      "Deployed to 3 university departments as a pilot program",
      "Featured in campus tech showcase for innovation in education technology"
    ],
    links: {
      github: "https://github.com/username/nlp-education",
      live: "https://edu-nlp.example.com"
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
          projectType={project.projectType}
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

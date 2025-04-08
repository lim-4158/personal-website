'use client';

import React from 'react';
import ProjectCard from '@/components/ProjectCard';

export const projectsData = [
  {
    title: "FlareGate",
    projectType: "ETH Oxford 2025 Hackathon",
    period: "Mar 2025",
    description: "A decentralized peer-to-peer (P2P) platform for seamless on-ramping and off-ramping between fiat currencies and cryptocurrencies.",
    technologies: ["Blockchain", "Solidity", "Web3", "React", "Smart Contracts"],
    achievements: [
      "1st place for Consumer Main Track (1,500 USD)",
      "1st place for Flare Data Connector Track (5,000 USD)",
      "Awarded the STOW grant to represent NUS at ETH Oxford @ Oxford University"
    ],
    links: {
      github: "https://github.com/jefflcy/eth-oxford-2025",
      dorahacks: "https://dorahacks.io/buidl/22543/",
      live: "https://eth-oxford-2025-two.vercel.app",
      demo: "https://www.youtube.com/watch?v=P0KEnGjBFUc"
    }
  },
  {
    title: "24X365: AI Calendar",
    projectType: "School",
    period: "May - Jul 2024",
    description: "An AI calendar app that helps users manage time more effectively through a chat interface.",
    technologies: ["Django", "React", "PostgreSQL", "OpenAI API"],
    achievements: [
      "Developed from ideation to deployment using Django, React and PostgreSQL",
      "Implemented chain of thought prompting using OpenAI API, achieving over 95% accuracy in task execution"
    ],
    links: {
      github: "https://github.com/lim-4158/24x365",
      demo: "https://www.youtube.com/watch?v=Fl1JJUhk-fs"
    }
  },
  {
    title: "IntelliGENce",
    projectType: "Startup",
    period: "March 2025 - Present",
    description: "Alongside with another 2 co-founders, we are building a platform that save teachers' time by automating marking and providing student analytics while students get hyper-personalised feedback",
    technologies: ["Cursor", "NextJS"],
    links: {
      demo: "https://www.youtube.com/watch?v=TtdgfVJAtA8"
    }
  },

];

const ProjectsSection = () => {
  return (
    <div className="projects-grid">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          projectType={project.projectType}
          period={project.period}
          description={project.description}
          technologies={project.technologies || []}
          achievements={project.achievements || []}
          links={project.links || {}}
        />
      ))}
    </div>
  );
};

export default ProjectsSection;

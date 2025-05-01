'use client';

import React from 'react';
import ExperienceCard from '@/components/ExperienceCard';

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    company: "Immersive Reality Labs NUS",
    period: "Jan 2025 – Present",
    description: [
      "Developed AI investor agents with web browsing capabilities for startup students to practice pitching skills and receive constructive feedback",
      "Researched with various prompt engineering techniques to improve the quality of the AI agents",
    ],
    skills: ["AI Agents", "LangChain", "Fine-tuning"]
  },
  {
    title: "Software Developer",
    company: "Eusoff Hackers",
    period: "Aug 2024 – Present",
    description: [
      "Digitalized Eusoff Hall operations by developing systems for CCA Registration and Jersey Bidding",
      "Reduced manual processing time by 90% through automated data management and outcome allocation"
    ],
    skills: ["System Architecture", "Web Development"]
  },
  {
    title: "Software Engineer Intern",
    company: "NUS Enterprise",
    period: "June 2024 – Dec 2024",
    description: [
      "Collaborated with startups and researchers to conceptualise and develop prototypes or MVPs",
      "Architected and implemented full-stack applications using Django, TypeScript and React",
      "Implemented single sign-on solutions and monitoring tools for healthcare applications"
    ],
    skills: ["Full-stack Development", "Agile", "Entrepreneurship"]
  }
];

const ExperiencesSection = () => {
  return (
    <div className="experiences-grid">
      {experiencesData.map((experience, index) => (
        <ExperienceCard
          key={index}
          title={experience.title}
          company={experience.company}
          period={experience.period}
          description={experience.description}
          skills={experience.skills}
        />
      ))}
    </div>
  );
};

export default ExperiencesSection;

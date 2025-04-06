'use client';

import React from 'react';
import ExperienceCard from '@/components/ExperienceCard';

const experiencesData = [
  {
    title: "Software Engineer Intern",
    company: "Immersive Reality Labs NUS",
    period: "Jan 2025 – Present",
    description: [
      "Developed AI customer and investor agents for startup students to practice interview and pitching skills",
      "Researched the effectiveness of multimodal AI agents in enhancing educational experiences"
    ],
    skills: ["AI", "Machine Learning", "Educational Technology"]
  },
  {
    title: "Software Engineer Intern",
    company: "NUS Enterprise",
    period: "June 2024 – Dec 2024",
    description: [
      "Collaborated with startups to conceptualise and develop prototypes or MVPs using agile methodologies",
      "Architected and implemented full-stack applications using Django, TypeScript and React",
      "Designed and implemented a monitoring tool and dashboard for patients' vitals from zero to one",
      "Supported the development of a Single Sign-On solution for streamlined authentication and authorisation"
    ],
    skills: ["Django", "TypeScript", "React", "Full-stack Development", "Agile"]
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

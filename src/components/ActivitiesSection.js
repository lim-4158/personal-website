'use client';

import React from 'react';
import ActivityCard from '@/components/ActivityCard';

const activitiesData = [
  {
    category: "Leadership",
    title: "Business Development Lead, NUS Fintech Society",
    period: "July 2024 – Present",
    description: [
      "Organised NUS Fintech Summit 2025 with 18 sponsors/partners and 600+ attendees from 9 different countries",
      "Led a team of 20 executives to cultivate industrial partnerships",
      "Sourced and secured $150,000 worth of sponsorship as a team"
    ]
  },
  {
    category: "Education",
    title: "Peer Tutor, NUS Centre of English Language and Communications",
    period: "Jan 2024 – Present",
    description: [
      "Coached 20 postgraduates using tailored tutoring strategies to improve communication and presentation skills"
    ]
  },
  {
    category: "Education",
    title: "Student Ambassador, NUS Enterprise Summer Programme",
    period: "2024",
    description: [
      "Represented NUS Enterprise during the Summer Programme in Entrepreneurship",
      "Guided and mentored program participants",
      "Facilitated workshops and networking events"
    ]
  },
  {
    category: "Athletics",
    title: "Varsity Athlete, NUS Badminton",
    period: "2023 – Present",
    description: [
      "SuniG 2023 Gold Medalist",
      "IVP Games 2024 Bronze Medalist",
      "Badminton Captain – led and coached Eusoff Hall Badminton Team to Inter-Hall Games Champions"
    ]
  },
  {
    category: "Community",
    title: "Eusoff Hall Block Committee",
    period: "2023 – Present",
    description: [
      "Planned bi-weekly bonding events for 100 residents",
      "Fostered community engagement and hall spirit"
    ]
  }
];

const ActivitiesSection = () => {
  return (
    <div className="activities-grid">
      {activitiesData.map((activity, index) => (
        <ActivityCard
          key={index}
          category={activity.category}
          title={activity.title}
          period={activity.period}
          description={activity.description}
        />
      ))}
    </div>
  );
};

export default ActivitiesSection;

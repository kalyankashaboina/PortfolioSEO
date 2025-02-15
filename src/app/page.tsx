import React from 'react';
import Dashboard from '@/components/Dashboard/Dashboard';
import SkillsPage from '@/components/Skills/Skills';
import ProjectPage from '@/components/Projects/Projects';
import ContactUsPage from '@/components/Contact/ContactUs';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalyan Kashaboina - Web Developer & Portfolio",
  description: "Kalyan Kashaboina's Web Developer Portfolio showcasing front-end projects and skills.",
  keywords: "Kalyan Kashaboina, Kalyan Kashaboina Web Developer, Kalyan Kashaboina Portfolio, Kalyan Kashaboina Frontend Developer",
  openGraph: {
    title: "Kalyan Kashaboina - Web Developer & Portfolio",
    description: "Kalyan Kashaboina's Web Developer Portfolio showcasing front-end projects and skills.",
    url: "https://portfolio-git-master-kalyankashaboinas-projects.vercel.app/",
    type: "website",
  },
};

const HomePage: React.FC = () => {
  return (
    <div>
      <Dashboard />
      <SkillsPage />
      <ProjectPage />
      <ContactUsPage />
    </div>
  );
};

export default HomePage;

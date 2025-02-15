// import kalyanportfolio from "../Images/kalyan-portfolio.png";
// import hostelcoverpic from "../Images/hostel-coverpic.png";
import { StaticImageData } from "next/image";  

interface Project {
  name: string;
  description: string;
  image: string;  
  github: string;
  liveDemo: string;
}

export const projects = [
  {
    name: "Hostel Finder",
    description:
      "This is a description of my project. It is an amazing project that solves the problems of students and jobseekers who want accommodation near their place.",
    image: '/images/hostel-coverpic.png', 
    github: "https://github.com/kalyankashaboina/hostel-finder-react-app",
    liveDemo: "https://hostel-finder.netlify.app/",
  },
  {
    name: "Portfolio",
    description: "My personal portfolio website.",
    image: '/images/kalyan-portfolio.png', 
    github: "https://github.com/kalyankashaboina/Portfolio",
    liveDemo: "https://kalyankashaboina.github.io/Portfolio/",
  },
];


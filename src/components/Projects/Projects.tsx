import React from "react";
import Image from "next/image"; 
import { projects } from "../../data/projects";
import "./projects.css";

const ProjectPage = () => {
  return (
    <div className="project-container">
      <h1 className="project-heading">My Projects</h1>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <Image
              src={project.image} 
              alt={project.name}
              className="project-image"
              width={280} 
              height={150}  
            />
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;

import React from "react";
import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import plagiarismImage from "../../assets/projects/plagiarism.png";
import hospitalImage from "../../assets/projects/hospital.png";
import signLanguageImage from "../../assets/projects/sign-Language.png";

const projects = [
  {
    id: 1,
    title: "Image & Text Based Plagiarism Detector",
    description:
      "AI-powered plagiarism detector using OCR, NLP and semantic similarity.",
    image: plagiarismImage,
    technologies: ["Python", "SpaCy", "Tesseract OCR", "OpenCV"],
    github: "https://github.com/Anshukumar0112/Plagiarism-Detector",
    live: "",
  },
  {
    id: 2,
    title: "Hospital Management System",
    description:
      "A web-based hospital management system for efficient patient and staff management.",
    image: hospitalImage,
    technologies: ["JavaScript", "MySQL", "PHP"],
    github: "https://github.com/Anshukumar0112/Hospital-management-system",
    live: "",
  },
  {
    id: 3,
    title: "Sign Language Recognition",
    description:
      "A computer vision system that translates hand gestures into text using machine learning.",
    image: signLanguageImage,
    technologies: ["Python", "TensorFlow", "OpenCV"],
    github: "",
    live: "",
  },
];

function Projects() {
  return (
    <section className="projects">
      <div className="projects-wrapper">

        <h2 className="section-title">Projects</h2>

        <p className="section-description">
          A collection of projects that showcase my experience in
            Backend Development, and Full Stack Web Development.
        </p>

        <div className="projects-container">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
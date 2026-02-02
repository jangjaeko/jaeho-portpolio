import { useState } from "react";
import { projects, Project as ProjectType } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import "./Project.css";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  return (
    <section id="Project" className="project-section">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16 text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-500 mb-4">
          Projects
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-teal-300 to-cyan-500 rounded-full" />
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto project-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card group"
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image-wrapper">
              <img
                src={project.thumbnail}
                alt={project.name}
                className="project-image"
              />
              <div className="project-overlay">
                <span className="project-view-label">View Project</span>
              </div>
            </div>

            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-preview">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="project-tech-chip">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="project-tech-more">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

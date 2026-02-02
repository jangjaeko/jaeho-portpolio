import { useEffect } from "react";
import { Project } from "@/data/projects";
import "./ProjectModal.css";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="modal-content">
          <div className="modal-image-section">
            <img
              src={project.detailedImage}
              alt={project.name}
              className="modal-image"
            />
          </div>

          <div className="modal-info-section">
            <h2 className="modal-title">{project.name}</h2>

            <div className="modal-description">
              <p>{project.description}</p>
            </div>

            <div className="modal-what-i-did">
              <h3 className="modal-subtitle">What I Did</h3>
              <p>{project.whatIDid}</p>
            </div>

            <div className="modal-tech">
              <h3 className="modal-subtitle">Tech Stack</h3>
              <div className="modal-tech-tags">
                {project.techStack.map((tech) => (
                  <span key={tech} className="modal-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

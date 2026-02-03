import { useEffect } from "react";
import { Experience } from "@/data/experiences";
import "./ExperienceModal.css";

interface ExperienceModalProps {
  experience: Experience;
  onClose: () => void;
}

export default function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
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
    <div className="exp-modal-backdrop" onClick={handleBackdropClick}>
      <div className="exp-modal-container">
        <button className="exp-modal-close" onClick={onClose}>
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

        <div className="exp-modal-content">
          <div className="exp-modal-image-section">
            <img
              src={experience.detailedImage}
              alt={experience.company}
              className="exp-modal-image"
            />
          </div>

          <div className="exp-modal-info-section">
            <div className="exp-modal-header">
              <h2 className="exp-modal-company">{experience.company}</h2>
              <h3 className="exp-modal-role">{experience.role}</h3>
              <span className="exp-modal-period">{experience.period}</span>
            </div>

            <div className="exp-modal-description">
              <p>{experience.detailedDescription}</p>
            </div>

            <div className="exp-modal-responsibilities">
              <h4 className="exp-modal-subtitle">Key Responsibilities</h4>
              <ul className="exp-modal-list">
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="exp-modal-achievements">
              <h4 className="exp-modal-subtitle">Achievements</h4>
              <ul className="exp-modal-achievement-list">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx}>
                    <svg
                      className="exp-modal-achievement-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="exp-modal-skills">
              <h4 className="exp-modal-subtitle">Skills</h4>
              <div className="exp-modal-skill-tags">
                {experience.skills.map((skill) => (
                  <span key={skill} className="exp-modal-skill-tag">
                    {skill}
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

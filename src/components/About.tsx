import "./About.css";
import { AboutData } from "@/data/About";

export default function About() {
  return (
    <section id="About" className="about-section">
      {/* Hero Introduction */}
      <div className="max-w-5xl mx-auto about-hero">
        <div className="hero-avatar">
          <div className="hero-avatar-inner">JC</div>
        </div>

        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">{AboutData.name}</h1>

        <div className="hero-title">
          <span className="hero-title-dot" />
          <span>{AboutData.title}</span>
          <span className="hero-title-dot" />
        </div>

        <span className="hero-location">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {AboutData.location}
        </span>

        <p className="hero-summary">{AboutData.summary}</p>
      </div>

      {/* Bento Grid */}
      <div className="max-w-5xl mx-auto bento-grid">
        {/* Skills Card - Full Width */}
        <div className="bento-card bento-skills">
          <div className="card-header">
            <div className="card-icon card-icon-skills">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <span className="card-title">Tech Stack</span>
          </div>

          <div className="skills-grid-horizontal">
            <div className="skill-row">
              <span className="skill-label">Languages</span>
              <div className="skill-chips">
                {AboutData.skills.languages.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-row">
              <span className="skill-label">Frameworks</span>
              <div className="skill-chips">
                {AboutData.skills.frameworks.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-row">
              <span className="skill-label">Databases</span>
              <div className="skill-chips">
                {AboutData.skills.databases.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-row">
              <span className="skill-label">Tools</span>
              <div className="skill-chips">
                {AboutData.skills.tools.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="bento-card bento-education">
          <div className="card-header">
            <div className="card-icon card-icon-education">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <span className="card-title">Education</span>
          </div>

          <div className="education-content">
            <h3 className="edu-school">{AboutData.education.school}</h3>
            <p className="edu-degree">{AboutData.education.degree}</p>

            <div className="edu-meta">
              <span className="edu-meta-item">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {AboutData.education.period}
              </span>
              <span className="edu-meta-item">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                {AboutData.education.location}
              </span>
            </div>

            <div className="edu-highlight">
              <p className="edu-highlight-label">Leadership</p>
              <p className="edu-highlight-text">
                {AboutData.education.highlight}
              </p>
            </div>
          </div>
        </div>

        {/* Awards Card */}
        <div className="bento-card bento-awards">
          <div className="card-header">
            <div className="card-icon card-icon-awards">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <span className="card-title">Recognition</span>
          </div>

          <div className="awards-list">
            {AboutData.awards.map((award, idx) => (
              <div key={idx} className="award-row">
                <div className="award-badge">
                  <svg
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="award-content">
                  <p className="award-text">{award.text}</p>
                  <span className="award-year">{award.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto about-footer">
        <div className="footer-line">
          <div className="footer-line-segment" />
          <div className="footer-diamond" />
          <div className="footer-line-segment" />
        </div>
        <p className="footer-tagline">
          Building <span>products</span> that matter
        </p>
      </div>
    </section>
  );
}

import React from "react";
import { experiences } from "@/data/experiences";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import "./Experience.css";

export default function Experience() {
  const featuredExperiences = experiences.filter((exp) => exp.featured);
  const otherExperiences = experiences.filter((exp) => !exp.featured);

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: featuredRef, isVisible: featuredVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="Experience" className="experience-section">
      {/* Section Header */}
      <div
        ref={headerRef}
        className={`max-w-6xl mx-auto mb-16 text-left slide-in-section ${headerVisible ? "visible" : ""}`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-500 mb-4">
          Experience
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-teal-300 to-cyan-500 rounded-full" />
      </div>

      {/* Featured Experience */}
      {featuredExperiences.map((exp, index) => (
        <div
          key={exp.id}
          ref={index === 0 ? featuredRef : undefined}
          className={`max-w-6xl mx-auto mb-8 slide-in-section ${featuredVisible ? "visible" : ""}`}
        >
          <div className="glass-card glass-card-featured group p-8">
            <div className="glow-effect" />
            <div className="flex flex-col md:flex-row gap-6 text-left">
              <div className="logo-container logo-container-lg">
                <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-500">
                      {exp.role}
                    </h3>
                    <p className="text-teal-400/90 font-medium">{exp.company}</p>
                  </div>
                  <span className="period-badge">{exp.period}</span>
                </div>
                <ul className="text-gray-400 mt-4 space-y-2 text-left">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="bullet bullet-featured">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="skill-tag skill-tag-lg">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="corner-gradient corner-gradient-lg" />
          </div>
        </div>
      ))}

      {/* Experience Grid */}
      <div
        ref={gridRef}
        className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 slide-in-section ${gridVisible ? "visible" : ""}`}
      >
        {otherExperiences.map((exp) => (
          <div key={exp.id} className="glass-card group p-6">
            <div className="glow-effect" />
            <div className="flex gap-4 text-left">
              <div className="logo-container logo-container-sm">
                <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-300 group-hover:to-cyan-500 transition-all duration-300">
                  {exp.role}
                </h3>
                <p className="text-teal-400/90 font-medium text-sm">{exp.company}</p>
                <span className="text-xs text-cyan-400/70 font-medium">{exp.period}</span>
              </div>
            </div>
            <ul className="text-gray-400 text-sm mt-4 space-y-1.5 text-left">
              {exp.description.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="bullet">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
            <div className="corner-gradient corner-gradient-sm" />
          </div>
        ))}
      </div>

      {/* Timeline Indicator */}
      <div
        ref={timelineRef}
        className={`max-w-6xl mx-auto mt-16 flex items-center justify-center gap-4 slide-in-section ${timelineVisible ? "visible" : ""}`}
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
        <div className="timeline-badge">Building products since 2021</div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>
    </section>
  );
}

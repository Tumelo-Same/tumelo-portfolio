/*
 * DESIGN: Editorial Modernism — ELITE
 * Visual structure: short statement → bullets → highlight line
 * Grouped skills with icons. Better hierarchy and visual tension.
 */

import AnimatedSection from "../AnimatedSection";

const skillGroups = [
  {
    label: "Core",
    skills: ["Python", "Java", "SQL"],
    icon: "⚙️",
  },
  {
    label: "Backend",
    skills: ["REST APIs", "MCP Servers", "System Design"],
    icon: "🔧",
  },
  {
    label: "Cloud",
    skills: ["AWS Lambda", "API Gateway", "Infrastructure"],
    icon: "☁️",
  },
  {
    label: "AI",
    skills: ["LLM Integration", "NLP", "Data Processing"],
    icon: "🧠",
  },
];

const languages = ["English", "Setswana", "Sepedi", "Sesotho", "IsiZulu"];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
      }}
    >
      <div className="container">
        <AnimatedSection>
          <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
            {/* Section header */}
            <div>
              <p className="section-label" style={{ marginBottom: "1.5rem" }}>
                // 00 — About
              </p>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.1,
                  color: "#E5E7EB",
                  marginBottom: "3.5rem",
                  maxWidth: "560px",
                }}
              >
                Backend engineer.{" "}
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)",
                    backgroundSize: "100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Systems thinker.
                </span>
              </h2>

              {/* Structured body — short statement */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  maxWidth: "680px",
                }}
              >
                {/* Main statement */}
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    lineHeight: 1.6,
                    color: "#E5E7EB",
                    letterSpacing: "-0.01em",
                  }}
                >
                  You build systems that{" "}
                  <span
                    style={{
                      backgroundImage: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)",
                      backgroundSize: "100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontWeight: 600,
                    }}
                  >
                    connect data to real-world outcomes.
                  </span>
                </p>

                {/* Bullet points */}
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    paddingLeft: 0,
                    listStyle: "none",
                  }}
                >
                  {[
                    "Backend-focused architecture and design",
                    "Cloud infrastructure (AWS Lambda, API Gateway)",
                    "AI-driven systems with LLM integration",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "1rem",
                        lineHeight: 1.6,
                        color: "#9CA3AF",
                      }}
                    >
                      <span
                        style={{
                          color: "#3B82F6",
                          flexShrink: 0,
                          marginTop: "0.3rem",
                          fontSize: "0.5rem",
                          fontWeight: "bold",
                        }}
                      >
                        ●
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Highlight line */}
                <div
                  style={{
                    paddingLeft: "1.25rem",
                    paddingRight: "1.25rem",
                    paddingTop: "1.25rem",
                    paddingBottom: "1.25rem",
                    borderLeft: "2.5px solid #3B82F6",
                    background: "rgba(59,130,246,0.04)",
                    borderRadius: "0 6px 6px 0",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      color: "#E5E7EB",
                      margin: 0,
                    }}
                  >
                    At <span style={{ color: "#3B82F6", fontWeight: 600 }}>Amazon</span>, I built systems that replaced manual workflows with{" "}
                    <span style={{ color: "#3B82F6", fontWeight: 600 }}>natural language interfaces</span>, allowing engineers to interact with data without writing code.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills — grouped with icons */}
            <div>
              <p className="section-label" style={{ marginBottom: "2rem" }}>
                Technical Skills
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "2rem",
                }}
              >
                {skillGroups.map((group) => (
                  <div
                    key={group.label}
                    style={{
                      padding: "1.5rem",
                      borderRadius: "8px",
                      border: "1px solid rgba(59,130,246,0.15)",
                      background: "rgba(59,130,246,0.04)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                      e.currentTarget.style.background = "rgba(59,130,246,0.08)";
                      e.currentTarget.style.boxShadow = "0 0 24px rgba(59,130,246,0.12)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)";
                      e.currentTarget.style.background = "rgba(59,130,246,0.04)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                      <span style={{ fontSize: "1.25rem" }}>{group.icon}</span>
                      <h4
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          color: "#3B82F6",
                          letterSpacing: "0.05em",
                          margin: 0,
                        }}
                      >
                        {group.label}
                      </h4>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {group.skills.map((skill) => (
                        <span key={skill} className="tech-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages + Certifications */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "3rem",
                marginTop: "40px",
              }}
            >
              <div className="languages">
                <p className="section-label" style={{ marginBottom: "1.5rem" }}>
                  Languages
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.95rem",
                        color: "#9CA3AF",
                        fontWeight: 500,
                        paddingLeft: "0.75rem",
                        borderLeft: "2px solid rgba(59,130,246,0.2)",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderLeftColor = "rgba(59,130,246,0.6)";
                        e.currentTarget.style.color = "#3B82F6";
                        e.currentTarget.style.paddingLeft = "1rem";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderLeftColor = "rgba(59,130,246,0.2)";
                        e.currentTarget.style.color = "#9CA3AF";
                        e.currentTarget.style.paddingLeft = "0.75rem";
                      }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="certifications">
                <p className="section-label" style={{ marginBottom: "1.5rem" }}>
                  Certifications
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    padding: "1.25rem 1.5rem",
                    borderRadius: "8px",
                    border: "1.5px solid rgba(139,92,246,0.3)",
                    background: "rgba(139,92,246,0.06)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
                    e.currentTarget.style.background = "rgba(139,92,246,0.12)";
                    e.currentTarget.style.boxShadow = "0 0 24px rgba(139,92,246,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)";
                    e.currentTarget.style.background = "rgba(139,92,246,0.06)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 900,
                      fontSize: "2rem",
                      background: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    15+
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      color: "#9CA3AF",
                      lineHeight: 1.4,
                      fontWeight: 500,
                    }}
                  >
                    Professional<br />Certifications
                  </span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <p className="section-label" style={{ marginBottom: "1.5rem" }}>
                Education
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {[
                  {
                    degree: "BSc Honours Computer Science",
                    school: "University of Pretoria",
                    years: "2026 – Present",
                  },
                  {
                    degree: "BSc Information Technology",
                    school: "North-West University",
                    years: "2023 – 2025",
                  },
                ].map((edu) => (
                  <div
                    key={edu.school}
                    style={{
                      paddingLeft: "1.5rem",
                      borderLeft: "2.5px solid rgba(59,130,246,0.25)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderLeftColor = "rgba(59,130,246,0.6)";
                      e.currentTarget.style.paddingLeft = "1.75rem";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderLeftColor = "rgba(59,130,246,0.25)";
                      e.currentTarget.style.paddingLeft = "1.5rem";
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        color: "#E5E7EB",
                        marginBottom: "0.4rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {edu.degree}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        color: "#9CA3AF",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {edu.school}
                    </p>
                    <p
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.75rem",
                        color: "#3B82F6",
                        letterSpacing: "0.06em",
                        fontWeight: 700,
                      }}
                    >
                      {edu.years}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

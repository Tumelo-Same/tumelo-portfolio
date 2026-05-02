/*
 * DESIGN: Editorial Modernism — ELITE
 * Projects section with outcome-driven headlines.
 * First project dominates with larger card and stronger visual emphasis.
 */

import AnimatedSection from "../AnimatedSection";

const projects = [
  {
    number: "01",
    title: "LLM-Powered Customer Support Tool",
    impact: "60% faster internal queries",
    supporting: "LLM interface for live support data",
    description:
      "Built a natural language interface connecting LLM agents to Amazon's internal systems via a custom MCP server. Fully deployed on AWS using serverless architecture. Replaced manual database queries entirely.",
    tech: ["AWS Lambda", "API Gateway", "Python", "MCP Server", "LLM Integration"],
    featured: true,
    dominant: true,
    company: "Amazon",
    icon: "⚡",
  },
  {
    number: "02",
    title: "Personal Finance Tracker",
    impact: "100+ transactions tracked in real-time",
    supporting: "Full-stack analytics with relational database",
    description:
      "Full-stack application built from scratch. Includes relational database design, REST API, and analytics layer.",
    tech: ["Python", "SQL", "REST API", "Database Design"],
    featured: false,
    company: null,
    icon: "💰",
  },
  {
    number: "03",
    title: "DSA Problem Library",
    impact: "50+ problems organized by pattern",
    supporting: "Sliding window, graphs, DP, trees",
    description:
      "Curated algorithm library organized by patterns, not difficulty. Covers sliding window, graphs, dynamic programming, and trees.",
    tech: ["Python", "Java", "Data Structures", "Algorithms"],
    featured: false,
    company: null,
    icon: "🧩",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "100px 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
      }}
    >
      {/* Large background number */}
      <div
        style={{
          position: "absolute",
          top: "4rem",
          right: "-2rem",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(10rem, 25vw, 18rem)",
          color: "rgba(59,130,246,0.04)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          letterSpacing: "-0.08em",
        }}
      >
        02
      </div>

      <div className="container">
        {/* Section header */}
        <AnimatedSection>
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>
            // 02 — Projects
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "#E5E7EB",
              marginBottom: "4.5rem",
            }}
          >
            Things I've built
          </h2>
        </AnimatedSection>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            gap: "2.5rem",
            gridAutoFlow: "dense",
            alignItems: "start",
          }}
        >
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 120}>
              <div
                className={!project.featured ? "project-card" : undefined}
                style={{
                  padding: project.dominant ? "3.5rem" : "2.5rem",
                  marginTop: i === 1 ? "3rem" : "0",
                  borderRadius: "12px",
                  border: project.featured
                    ? "1.5px solid rgba(59,130,246,0.5)"
                    : "1px solid rgba(255,255,255,0.08)",
                  background: project.featured
                    ? "rgba(59,130,246,0.08)"
                    : "rgba(255,255,255,0.02)",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transform: project.dominant ? "scale(1.03)" : project.featured ? "scale(1.02)" : "scale(1)",
                  transformOrigin: "center",
                  gridColumn: project.dominant ? "span 2" : "span 1",
                  animation: project.dominant ? "pulse-glow 3s ease-in-out infinite" : "none",
                  opacity: project.dominant ? 1 : 0.85,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = project.featured
                    ? "rgba(59,130,246,0.8)"
                    : "rgba(255,255,255,0.25)";
                  el.style.background = project.featured
                    ? "rgba(59,130,246,0.12)"
                    : "rgba(255,255,255,0.06)";
                  el.style.boxShadow = project.featured
                    ? "0 24px 80px rgba(59,130,246,0.35), 0 0 40px rgba(59,130,246,0.25)"
                    : "0 16px 56px rgba(255,255,255,0.12)";
                  el.style.transform = project.dominant
                    ? "scale(1.06) translateY(-12px)"
                    : project.featured
                      ? "scale(1.05) translateY(-8px)"
                      : "scale(1.03) translateY(-6px)";
                  el.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = project.featured
                    ? "rgba(59,130,246,0.5)"
                    : "rgba(255,255,255,0.08)";
                  el.style.background = project.featured
                    ? "rgba(59,130,246,0.08)"
                    : "rgba(255,255,255,0.02)";
                  el.style.boxShadow = "none";
                  el.style.transform = project.dominant ? "scale(1.03)" : project.featured ? "scale(1.02)" : "scale(1)";
                  el.style.opacity = project.dominant ? "1" : "0.85";
                }}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1.75rem",
                      right: "1.75rem",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      padding: "0.5rem 1rem",
                      background: "rgba(59,130,246,0.2)",
                      border: "1px solid rgba(59,130,246,0.6)",
                      borderRadius: "4px",
                      color: "#60A5FA",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      boxShadow: "0 0 12px rgba(59,130,246,0.3)",
                    }}
                  >
                    ⭐ Featured
                  </div>
                )}

                {/* Project number */}
                <div
                  style={{
                    fontSize: project.dominant ? "3.5rem" : "2.5rem",
                    fontWeight: 900,
                    color: "rgba(59,130,246,0.1)",
                    lineHeight: 1,
                    marginBottom: "1rem",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {project.number}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: project.dominant ? "1.75rem" : "1.25rem",
                    fontWeight: 900,
                    color: "#F3F4F6",
                    marginBottom: "1rem",
                    fontFamily: "'Space Grotesk', sans-serif",
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h3>

                {/* Impact (bold outcome) */}
                <p
                  style={{
                    fontSize: project.dominant ? "1.1rem" : "0.95rem",
                    fontWeight: 700,
                    color: "#60A5FA",
                    marginBottom: "0.75rem",
                    lineHeight: 1.5,
                  }}
                >
                  {project.impact}
                </p>

                {/* Supporting line */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#9CA3AF",
                    marginBottom: "1.5rem",
                    lineHeight: 1.6,
                  }}
                >
                  {project.supporting}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#D1D5DB",
                    marginBottom: "1.5rem",
                    lineHeight: 1.7,
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                    marginTop: "auto",
                  }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        padding: "0.4rem 0.9rem",
                        borderRadius: "4px",
                        background: "rgba(59,130,246,0.08)",
                        border: "1px solid rgba(59,130,246,0.2)",
                        color: "#9CA3AF",
                        fontFamily: "'JetBrains Mono', monospace",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(59,130,246,0.15)";
                        e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                        e.currentTarget.style.color = "#60A5FA";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(59,130,246,0.08)";
                        e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)";
                        e.currentTarget.style.color = "#9CA3AF";
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

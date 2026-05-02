/*
 * DESIGN: Editorial Modernism — ELITE
 * Experience section with Amazon as a dominant hero block.
 * Pulls out the most important role for maximum visual impact.
 */

import AnimatedSection from "../AnimatedSection";

export default function ExperienceHero() {
  return (
    <section
      id="experience"
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
        01
      </div>

      <div className="container">
        {/* Section header */}
        <AnimatedSection>
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>
            // 01 — Experience
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
            Where I've worked
          </h2>
        </AnimatedSection>

        {/* Amazon Hero Block */}
        <AnimatedSection delay={120}>
          <div
            style={{
              padding: "4rem",
              borderRadius: "14px",
              border: "1.5px solid rgba(59,130,246,0.5)",
              background: "rgba(59,130,246,0.1)",
              position: "relative",
              overflow: "hidden",
              marginBottom: "3rem",
              transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(59,130,246,0.8)";
              e.currentTarget.style.background = "rgba(59,130,246,0.14)";
              e.currentTarget.style.boxShadow = "0 24px 80px rgba(59,130,246,0.35), 0 0 40px rgba(59,130,246,0.25)";
              e.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)";
              e.currentTarget.style.background = "rgba(59,130,246,0.1)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-block",
                fontSize: "0.65rem",
                fontWeight: 700,
                padding: "0.5rem 1rem",
                background: "rgba(59,130,246,0.2)",
                border: "1px solid rgba(59,130,246,0.6)",
                borderRadius: "4px",
                color: "#60A5FA",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                boxShadow: "0 0 12px rgba(59,130,246,0.3)",
              }}
            >
              ⭐ Current Focus
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                color: "#F3F4F6",
                marginBottom: "0.5rem",
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: 1.2,
              }}
            >
              Amazon SDE Intern
            </h3>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "1rem",
                color: "#9CA3AF",
                marginBottom: "2rem",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Backend + Cloud Infrastructure
            </p>

            {/* Impact metrics */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "2rem",
                marginBottom: "2rem",
              }}
            >
              <div>
                <div
                  className="metric-primary"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    lineHeight: 1,
                    textShadow: "0 0 40px rgba(59,130,246,0.5), 0 0 80px rgba(59,130,246,0.3)",
                  }}
                >
                  60%
                </div>
                <p style={{ fontSize: "1rem", color: "#60A5FA", marginTop: "0.5rem", fontWeight: 700 }}>
                  Query time reduction
                </p>
              </div>
              <div>
                <div
                  className="metric-secondary"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#60A5FA" }}
                >
                  100%
                </div>
                <p style={{ fontSize: "0.9rem", color: "#9CA3AF", marginTop: "0.5rem" }}>
                  Uptime maintained
                </p>
              </div>
              <div>
                <div
                  className="metric-secondary"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#60A5FA" }}
                >
                  3
                </div>
                <p style={{ fontSize: "0.9rem", color: "#9CA3AF", marginTop: "0.5rem" }}>
                  Months to production
                </p>
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: "0.95rem",
                color: "#D1D5DB",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Built a natural language interface connecting LLM agents to internal systems via custom MCP server. Deployed on AWS Lambda + API Gateway. Replaced manual database queries entirely, reducing support team query time by 60%.
            </p>

            {/* Tech stack */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
              {["AWS Lambda", "API Gateway", "Python", "MCP Server", "LLM Integration", "System Design"].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    background: "rgba(59,130,246,0.1)",
                    border: "1px solid rgba(59,130,246,0.3)",
                    color: "#9CA3AF",
                    fontFamily: "'JetBrains Mono', monospace",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(59,130,246,0.2)";
                    e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)";
                    e.currentTarget.style.color = "#60A5FA";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(59,130,246,0.1)";
                    e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)";
                    e.currentTarget.style.color = "#9CA3AF";
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Other experiences */}
        <div style={{ marginTop: "3rem" }}>
          <p
            className="section-label"
            style={{ marginBottom: "2rem", fontSize: "0.7rem", opacity: 0.7 }}
          >
            // Additional Experience
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                title: "Freelance Backend Developer",
                description: "Built REST APIs and database systems for startups.",
                tech: ["Python", "FastAPI", "PostgreSQL"],
              },
              {
                title: "Open Source Contributor",
                description: "Contributed to NLP and backend infrastructure projects.",
                tech: ["Python", "NLP", "System Design"],
              },
            ].map((exp, i) => (
              <AnimatedSection key={exp.title} delay={240 + i * 120}>
                <div
                  style={{
                    padding: "2rem",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.02)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)";
                    e.currentTarget.style.background = "rgba(59,130,246,0.06)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(59,130,246,0.15)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#E5E7EB",
                      marginBottom: "0.5rem",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {exp.title}
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "#D1D5DB", marginBottom: "1rem", lineHeight: 1.6 }}>
                    {exp.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: "0.7rem",
                          padding: "0.3rem 0.6rem",
                          background: "rgba(59,130,246,0.08)",
                          border: "1px solid rgba(59,130,246,0.15)",
                          borderRadius: "3px",
                          color: "#9CA3AF",
                          fontFamily: "'JetBrains Mono', monospace",
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
      </div>
    </section>
  );
}

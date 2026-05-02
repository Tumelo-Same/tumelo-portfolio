/*
 * DESIGN: Editorial Modernism — ELITE
 * Purple glow border, bigger title, gradient background.
 * Highlighted key phrases: "11 official languages", "low-resource NLP".
 */

import AnimatedSection from "../AnimatedSection";

export default function Research() {
  return (
    <section
      id="research"
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
          color: "rgba(139,92,246,0.04)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          letterSpacing: "-0.08em",
        }}
      >
        03
      </div>

      <div className="container">
        <AnimatedSection>
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>
            // 03 — Research
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
            Active research
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div
            style={{
              padding: "3rem",
              borderRadius: "12px",
              border: "2px solid rgba(139,92,246,0.4)",
              background: "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(139,92,246,0.04) 100%)",
              maxWidth: "900px",
              transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              position: "relative",
              overflow: "hidden",
              transform: "scale(1)",
              transformOrigin: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(139,92,246,0.7)";
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.08) 100%)";
              e.currentTarget.style.boxShadow = "0 0 50px rgba(139,92,246,0.25)";
              e.currentTarget.style.transform = "scale(1.02) translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)";
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(139,92,246,0.04) 100%)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {/* Status */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.7rem",
                marginBottom: "2rem",
                padding: "0.4rem 1rem",
                borderRadius: "100px",
                border: "1px solid rgba(139,92,246,0.5)",
                background: "rgba(139,92,246,0.15)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#8B5CF6",
                  display: "inline-block",
                  boxShadow: "0 0 12px rgba(139,92,246,0.95)",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  color: "#8B5CF6",
                  letterSpacing: "0.08em",
                  fontWeight: 700,
                }}
              >
                Active · Ongoing
              </span>
            </div>

            {/* Title with gradient highlight */}
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                color: "#E5E7EB",
                letterSpacing: "-0.02em",
                lineHeight: 1.3,
                marginBottom: "2rem",
              }}
            >
              Researching Multilingual Misinformation Detection across{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)",
                  backgroundSize: "100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                South African Languages
              </span>
            </h3>

            {/* Description with highlighted phrases */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#9CA3AF",
                marginBottom: "2.5rem",
              }}
            >
              Investigating how AI and NLP can detect misinformation across South African languages.
              This research addresses one of the most complex challenges in{" "}
              <span style={{ color: "#E5E7EB", fontWeight: 600 }}>low-resource NLP</span>: understanding
              political context, local dialects, and linguistic nuance across{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)",
                  backgroundSize: "100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 700,
                }}
              >
                11 official languages.
              </span>
            </p>

            {/* Focus areas */}
            <div>
              <p className="section-label" style={{ marginBottom: "1.5rem" }}>
                Focus Areas
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {[
                  "11 Official Languages",
                  "Low-Resource NLP",
                  "Local Dialects",
                  "Political Context",
                  "Misinformation Detection",
                  "AI / NLP",
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      padding: "0.35rem 0.9rem",
                      borderRadius: "5px",
                      background: "rgba(139,92,246,0.12)",
                      border: "1px solid rgba(139,92,246,0.3)",
                      color: "#9CA3AF",
                      letterSpacing: "0.04em",
                      transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(139,92,246,0.2)";
                      e.currentTarget.style.borderColor = "rgba(139,92,246,0.6)";
                      e.currentTarget.style.color = "#8B5CF6";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 6px 16px rgba(139,92,246,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(139,92,246,0.12)";
                      e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)";
                      e.currentTarget.style.color = "#9CA3AF";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 12px rgba(139,92,246,0.95); }
          50% { opacity: 0.5; box-shadow: 0 0 6px rgba(139,92,246,0.4); }
        }
      `}</style>
    </section>
  );
}

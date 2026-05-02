/*
 * DESIGN: Editorial Modernism — ELITE
 * Larger CTA headline, stronger gradient on "real".
 * Email card primary (stronger border). Arrow animation on hover.
 */

import AnimatedSection from "../AnimatedSection";

export default function Contact() {
  return (
    <section
      id="contact"
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
        04
      </div>

      <div className="container">
        <AnimatedSection>
          <p className="section-label" style={{ marginBottom: "1.75rem" }}>
            // 04 — Contact
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3.25rem, 8vw, 5.5rem)",
              letterSpacing: "-0.05em",
              lineHeight: 1.1,
              color: "#E5E7EB",
              marginBottom: "2rem",
              maxWidth: "850px",
            }}
          >
            Let's build something{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #1D4ED8 100%)",
                backgroundSize: "100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 40px rgba(59,130,246,0.3)",
              }}
            >
              real.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "#9CA3AF",
              marginBottom: "4.5rem",
              maxWidth: "580px",
              fontWeight: 400,
            }}
          >
            Available for backend and cloud engineering roles. If you're building systems that matter, let's talk.
          </p>
        </AnimatedSection>

        {/* Contact links + right visual */}
        <AnimatedSection delay={100}>
          <div
            style={{
              display: "flex",
              gap: "4rem",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              flex: "1 1 380px",
              maxWidth: "580px",
            }}
          >
            {/* Email — PRIMARY */}
            <a
              className="contact-card"
              href="mailto:tumelosame2003@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.75rem 2rem",
                borderRadius: "10px",
                border: "2px solid rgba(59,130,246,0.5)",
                background: "rgba(59,130,246,0.08)",
                textDecoration: "none",
                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.95)";
                e.currentTarget.style.background = "rgba(59,130,246,0.18)";
                e.currentTarget.style.boxShadow = "0 24px 80px rgba(59,130,246,0.5), 0 0 48px rgba(59,130,246,0.3)";
                e.currentTarget.style.transform = "translateY(-12px) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)";
                e.currentTarget.style.background = "rgba(59,130,246,0.08)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(59,130,246,0.08))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "1.5px solid rgba(59,130,246,0.3)",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#9CA3AF", marginBottom: "0.25rem", fontWeight: 600 }}>Email</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#E5E7EB", letterSpacing: "-0.01em", margin: 0 }}>tumelosame2003@gmail.com</p>
                </div>
              </div>
              <svg
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ flexShrink: 0, transition: "transform 0.3s ease" }}
                className="arrow-icon"
              >
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              className="contact-card"
              href="https://github.com/tumelo-same"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.75rem 2rem",
                borderRadius: "10px",
                border: "1.5px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                textDecoration: "none",
                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.boxShadow = "0 16px 56px rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(-6px) scale(1.01)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "1.5px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#E5E7EB">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#9CA3AF", marginBottom: "0.25rem", fontWeight: 600 }}>GitHub</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#E5E7EB", letterSpacing: "-0.01em", margin: 0 }}>github.com/tumelo-same</p>
                </div>
              </div>
              <svg
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ flexShrink: 0, transition: "transform 0.3s ease" }}
                className="arrow-icon"
              >
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              className="contact-card"
              href="https://www.linkedin.com/in/tumelo-same-5b8593323"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.75rem 2rem",
                borderRadius: "10px",
                border: "1.5px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                textDecoration: "none",
                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.boxShadow = "0 16px 56px rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(-6px) scale(1.01)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "1.5px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#E5E7EB">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#9CA3AF", marginBottom: "0.25rem", fontWeight: 600 }}>LinkedIn</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#E5E7EB", letterSpacing: "-0.01em", margin: 0 }}>tumelo-same-5b8593323</p>
                </div>
              </div>
              <svg
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ flexShrink: 0, transition: "transform 0.3s ease" }}
                className="arrow-icon"
              >
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>

            {/* Phone */}
            <a
              className="contact-card"
              href="tel:+27607652253"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.75rem 2rem",
                borderRadius: "10px",
                border: "1.5px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                textDecoration: "none",
                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.boxShadow = "0 16px 56px rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(-6px) scale(1.01)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "1.5px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#9CA3AF", marginBottom: "0.25rem", fontWeight: 600 }}>Phone</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#E5E7EB", letterSpacing: "-0.01em", margin: 0 }}>060 765 2253</p>
                </div>
              </div>
              <svg
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ flexShrink: 0, transition: "transform 0.3s ease" }}
                className="arrow-icon"
              >
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          {/* Right-side visual */}
          <div
            style={{
              flex: "1 1 260px",
              position: "relative",
              minHeight: "320px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Faint grid */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `
                  linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
                borderRadius: "12px",
                opacity: 0.6,
              }}
            />
            {/* Gradient blob */}
            <div
              style={{
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(139,92,246,0.08) 50%, transparent 70%)",
                filter: "blur(40px)",
                animation: "breathe 6s ease-in-out infinite",
              }}
            />
            {/* Centered monogram */}
            <span
              style={{
                position: "absolute",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: "6rem",
                color: "rgba(59,130,246,0.08)",
                letterSpacing: "-0.06em",
                userSelect: "none",
              }}
            >
              TS
            </span>
          </div>
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        a:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}

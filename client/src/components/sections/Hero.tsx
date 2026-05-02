/*
 * DESIGN: Editorial Modernism — ELITE
 * Removed junior signals. Added visual tension, motion, credibility strip.
 * Gradient motion, cursor-reactive particles, stronger contrast.
 */

import { useEffect, useRef, useState } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663622053130/QJBvDhQcWgwpoSinYTjjLm/hero-bg-dS9sCoeBe2HVLwtURc7mEe.webp";

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      glowRef.current.style.background = `radial-gradient(900px circle at ${x}% ${y}%, rgba(59,130,246,0.1), transparent 60%)`;

      // Particle generation
      if (Math.random() > 0.85) {
        const newParticle = {
          x: clientX,
          y: clientY,
          id: Math.random(),
        };
        setParticles((prev) => [...prev.slice(-8), newParticle]);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate name on load
  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.style.opacity = "0";
      nameRef.current.style.transform = "translateY(30px)";
      setTimeout(() => {
        if (nameRef.current) {
          nameRef.current.style.transition = "all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)";
          nameRef.current.style.opacity = "1";
          nameRef.current.style.transform = "translateY(0)";
        }
      }, 150);
    }
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#0A0F1C",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* Animated grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          zIndex: 1,
          animation: "gridShift 30s linear infinite",
        }}
      />

      {/* Floating gradient background */}
      <div
        className="hero-bg"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Mouse-tracking glow */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          pointerEvents: "none",
          transition: "background 0.15s ease",
        }}
      />

      {/* Radial glow behind name */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "8%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(100px)",
          zIndex: 1,
          pointerEvents: "none",
          animation: "breathe 6s ease-in-out infinite",
        }}
      />

      {/* Particle effects */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "fixed",
            left: p.x,
            top: p.y,
            width: "2px",
            height: "2px",
            borderRadius: "50%",
            background: "#3B82F6",
            pointerEvents: "none",
            zIndex: 3,
            animation: `particleFloat 1.2s ease-out forwards`,
            opacity: 0.6,
            boxShadow: "0 0 8px rgba(59,130,246,0.6)",
          }}
        />
      ))}

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "300px",
          background: "linear-gradient(to bottom, transparent, #0A0F1C)",
          zIndex: 3,
        }}
      />

      {/* Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 4,
          paddingTop: "8rem",
          paddingBottom: "6rem",
        }}
      >
        {/* Main headline with strong contrast */}
        <div ref={nameRef}>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(4rem, 14vw, 9rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.05em",
              color: "#D1D5DB",
              marginBottom: "1.5rem",
              maxWidth: "1000px",
            }}
          >
            Tumelo{" "}
            <span className="hero-name-gradient">
              Same.
            </span>
          </h1>
        </div>

        {/* Tagline with strategic purple/blue */}
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.2rem, 3vw, 1.9rem)",
            lineHeight: 1.35,
            color: "#E5E7EB",
            marginBottom: "2rem",
            maxWidth: "700px",
            letterSpacing: "-0.015em",
          }}
        >
          I ship backend systems that cut query time by{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)",
              backgroundSize: "100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            60%.
          </span>
        </p>

        {/* Credibility strip — tight, inline, minimal */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                color: "#9CA3AF",
                letterSpacing: "0.06em",
                fontWeight: 600,
              }}
            >
              Amazon SDE Intern
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                color: "#9CA3AF",
                letterSpacing: "0.06em",
                fontWeight: 600,
              }}
            >
              Backend + Cloud
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                color: "#9CA3AF",
                letterSpacing: "0.06em",
                fontWeight: 600,
              }}
            >
              Pretoria
            </span>
          </div>
        </div>

        {/* CTAs with icons */}
        <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", alignItems: "center" }}>
          <button
            className="btn-primary"
            onClick={() => scrollToSection("#projects")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
            View my work
          </button>
          <button
            className="btn-ghost"
            onClick={() => scrollToSection("#contact")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Contact
          </button>
        </div>

        {/* Location */}
        <div
          style={{
            marginTop: "5.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
              color: "#9CA3AF",
              letterSpacing: "0.05em",
              fontWeight: 600,
            }}
          >
            Pretoria, South Africa
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
          opacity: 0.4,
        }}
      >
        <div
          style={{
            width: "1.5px",
            height: "56px",
            background: "linear-gradient(to bottom, rgba(59,130,246,0.5), transparent)",
            animation: "scrollLine 2.5s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes particleFloat {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(var(--tx, 0px), var(--ty, -60px)) scale(0); opacity: 0; }
        }
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
          50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
        }
        @keyframes gridShift {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
      `}</style>
    </section>
  );
}

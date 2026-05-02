/*
 * DESIGN: Editorial Modernism — "The Systems Thinker"
 * Minimal top nav: name left, anchor links right. No boxes, no backgrounds on scroll.
 * Thin 1px bottom border appears on scroll.
 */

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(10, 15, 28, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#E5E7EB",
              letterSpacing: "-0.01em",
              textDecoration: "none",
            }}
          >
            TS
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="nav-link"
                style={{ background: "none", border: "none", fontSize: "0.9rem", color: "#9CA3AF", transition: "all 0.3s ease", cursor: "pointer", position: "relative" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#E5E7EB";
                  e.currentTarget.style.textShadow = "0 0 12px rgba(59,130,246,0.4)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#9CA3AF";
                  e.currentTarget.style.textShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:tumelosame2003@gmail.com"
              className="btn-primary nav-cta"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none" }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "#E5E7EB",
                transition: "transform 0.2s ease, opacity 0.2s ease",
                transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "#E5E7EB",
                transition: "opacity 0.2s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "#E5E7EB",
                transition: "transform 0.2s ease, opacity 0.2s ease",
                transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
              }}
            />
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingBottom: "1.5rem",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "0.75rem 0",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#9CA3AF",
                  background: "none",
                  border: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E5E7EB")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:tumelosame2003@gmail.com"
              className="btn-primary"
              style={{ textDecoration: "none", display: "inline-block", marginTop: "0.5rem" }}
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

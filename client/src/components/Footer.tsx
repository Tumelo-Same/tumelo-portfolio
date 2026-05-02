/*
 * DESIGN: Editorial Modernism — minimal footer.
 * Single line: name left, copyright right. Thin top border.
 */

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "2rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "0.875rem",
            color: "#E5E7EB",
            letterSpacing: "-0.01em",
          }}
        >
          Tumelo Same
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.72rem",
            color: "#9CA3AF",
            letterSpacing: "0.04em",
          }}
        >
          © {new Date().getFullYear()} · Pretoria, South Africa
        </span>
      </div>
    </footer>
  );
}

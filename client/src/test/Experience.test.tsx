import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ExperienceHero from "../components/sections/ExperienceHero";

describe("Experience section", () => {
  it("renders without crashing", () => {
    render(<ExperienceHero />);
    expect(screen.getByText(/Amazon SDE Intern/i)).toBeInTheDocument();
  });

  it("has correct section id for nav scrolling", () => {
    const { container } = render(<ExperienceHero />);
    expect(container.querySelector("#experience")).toBeInTheDocument();
  });

  it("displays the primary metric — 60% query time reduction", () => {
    render(<ExperienceHero />);
    expect(screen.getByText("60%")).toBeInTheDocument();
    expect(screen.getByText(/Query time reduction/i)).toBeInTheDocument();
  });

  it("displays secondary metrics", () => {
    render(<ExperienceHero />);
    expect(screen.getByText("100%")).toBeInTheDocument();
    expect(screen.getByText(/Uptime maintained/i)).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText(/Months to production/i)).toBeInTheDocument();
  });

  it("60% metric uses metric-primary class", () => {
    const { container } = render(<ExperienceHero />);
    const primaryMetric = container.querySelector(".metric-primary");
    expect(primaryMetric).toBeInTheDocument();
    expect(primaryMetric?.textContent).toBe("60%");
  });

  it("secondary metrics use metric-secondary class", () => {
    const { container } = render(<ExperienceHero />);
    const secondaryMetrics = container.querySelectorAll(".metric-secondary");
    expect(secondaryMetrics).toHaveLength(2);
  });

  it("lists tech stack", () => {
    render(<ExperienceHero />);
    expect(screen.getAllByText("AWS Lambda").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Python").length).toBeGreaterThan(0);
  });

  it("shows additional experience entries", () => {
    render(<ExperienceHero />);
    expect(screen.getByText(/Freelance Backend Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/Open Source Contributor/i)).toBeInTheDocument();
  });
});

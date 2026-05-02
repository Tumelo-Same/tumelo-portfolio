import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "../components/sections/Hero";

describe("Hero section", () => {
  it("renders without crashing", () => {
    render(<Hero />);
    expect(screen.getByText(/Tumelo/i)).toBeInTheDocument();
  });

  it("renders the hero section element", () => {
    const { container } = render(<Hero />);
    expect(container.querySelector("#hero")).toBeInTheDocument();
  });

  it("displays the main tagline", () => {
    render(<Hero />);
    expect(screen.getByText(/60%/)).toBeInTheDocument();
  });

  it("shows credibility strip items", () => {
    render(<Hero />);
    expect(screen.getByText(/Amazon SDE Intern/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend \+ Cloud/i)).toBeInTheDocument();
    // "Pretoria" appears in both the strip and the location line — use getAllBy
    expect(screen.getAllByText(/Pretoria/i).length).toBeGreaterThanOrEqual(2);
  });

  it("has View my work and Contact CTAs", () => {
    render(<Hero />);
    expect(screen.getByRole("button", { name: /view my work/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /contact/i })).toBeInTheDocument();
  });

  it("shows location", () => {
    render(<Hero />);
    expect(screen.getByText(/Pretoria, South Africa/i)).toBeInTheDocument();
  });
});

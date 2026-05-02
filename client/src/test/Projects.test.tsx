import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Projects from "../components/sections/Projects";

describe("Projects section", () => {
  it("renders without crashing", () => {
    render(<Projects />);
    expect(screen.getByText(/Things I've built/i)).toBeInTheDocument();
  });

  it("has correct section id", () => {
    const { container } = render(<Projects />);
    expect(container.querySelector("#projects")).toBeInTheDocument();
  });

  it("renders all three projects", () => {
    render(<Projects />);
    expect(screen.getByText(/LLM-Powered Customer Support Tool/i)).toBeInTheDocument();
    expect(screen.getByText(/Personal Finance Tracker/i)).toBeInTheDocument();
    expect(screen.getByText(/DSA Problem Library/i)).toBeInTheDocument();
  });

  it("featured project shows Amazon attribution", () => {
    render(<Projects />);
    expect(screen.getByText(/Amazon/i)).toBeInTheDocument();
  });

  it("featured project shows impact metric", () => {
    render(<Projects />);
    expect(screen.getByText(/60% faster internal queries/i)).toBeInTheDocument();
  });

  it("featured project has Featured badge", () => {
    render(<Projects />);
    expect(screen.getByText(/Featured/i)).toBeInTheDocument();
  });

  it("all projects show tech tags", () => {
    render(<Projects />);
    expect(screen.getAllByText("Python").length).toBeGreaterThan(0);
    expect(screen.getAllByText("AWS Lambda").length).toBeGreaterThan(0);
  });

  it("non-featured cards have project-card class for depth gradient", () => {
    const { container } = render(<Projects />);
    const projectCards = container.querySelectorAll(".project-card");
    expect(projectCards.length).toBe(2);
  });
});

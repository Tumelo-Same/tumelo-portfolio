import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "../components/sections/About";

describe("About section", () => {
  it("renders without crashing", () => {
    render(<About />);
    expect(screen.getByText(/Backend engineer/i)).toBeInTheDocument();
  });

  it("has correct section id", () => {
    const { container } = render(<About />);
    expect(container.querySelector("#about")).toBeInTheDocument();
  });

  it("displays all skill groups", () => {
    render(<About />);
    expect(screen.getByText("Core")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("Cloud")).toBeInTheDocument();
    expect(screen.getByText("AI")).toBeInTheDocument();
  });

  it("displays key skills", () => {
    render(<About />);
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("AWS Lambda")).toBeInTheDocument();
    expect(screen.getByText("REST APIs")).toBeInTheDocument();
  });

  it("lists all spoken languages", () => {
    render(<About />);
    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("Setswana")).toBeInTheDocument();
    expect(screen.getByText("Sepedi")).toBeInTheDocument();
    expect(screen.getByText("Sesotho")).toBeInTheDocument();
    expect(screen.getByText("IsiZulu")).toBeInTheDocument();
  });

  it("shows education entries", () => {
    render(<About />);
    expect(screen.getByText(/BSc Honours Computer Science/i)).toBeInTheDocument();
    expect(screen.getByText(/University of Pretoria/i)).toBeInTheDocument();
    expect(screen.getByText(/BSc Information Technology/i)).toBeInTheDocument();
    expect(screen.getByText(/North-West University/i)).toBeInTheDocument();
  });

  it("mentions Amazon in the highlight block", () => {
    render(<About />);
    expect(screen.getByText(/Amazon/i)).toBeInTheDocument();
  });
});

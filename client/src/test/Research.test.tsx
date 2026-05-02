import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Research from "../components/sections/Research";

describe("Research section", () => {
  it("renders without crashing", () => {
    render(<Research />);
    expect(screen.getByText(/Active research/i)).toBeInTheDocument();
  });

  it("has correct section id", () => {
    const { container } = render(<Research />);
    expect(container.querySelector("#research")).toBeInTheDocument();
  });

  it("shows the research title", () => {
    render(<Research />);
    expect(
      screen.getByText(/Researching Multilingual Misinformation Detection/i)
    ).toBeInTheDocument();
  });

  it("shows active status badge", () => {
    render(<Research />);
    expect(screen.getByText(/Active · Ongoing/i)).toBeInTheDocument();
  });

  it("mentions South African languages", () => {
    render(<Research />);
    // phrase appears in both the heading span and the body paragraph
    expect(screen.getAllByText(/South African Languages/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/11 official languages\./i)).toBeInTheDocument();
  });

  it("displays all focus area tags", () => {
    render(<Research />);
    expect(screen.getByText("11 Official Languages")).toBeInTheDocument();
    expect(screen.getByText("Low-Resource NLP")).toBeInTheDocument();
    expect(screen.getByText("Misinformation Detection")).toBeInTheDocument();
    expect(screen.getByText("Political Context")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  it("renders without crashing", () => {
    render(<Navbar />);
    expect(screen.getByText("TS")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    expect(screen.getAllByText("About").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Experience").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Projects").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Research").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
  });

  it("renders Hire Me button linking to email", () => {
    render(<Navbar />);
    const hireMeLinks = screen.getAllByRole("link", { name: /hire me/i });
    expect(hireMeLinks.length).toBeGreaterThan(0);
    hireMeLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "mailto:tumelosame2003@gmail.com");
    });
  });

  it("hamburger menu button has accessibility label", () => {
    render(<Navbar />);
    expect(screen.getByRole("button", { name: /toggle menu/i })).toBeInTheDocument();
  });

  it("nav logo links to top of page", () => {
    render(<Navbar />);
    const logo = screen.getByRole("link", { name: /ts/i });
    expect(logo).toHaveAttribute("href", "#");
  });
});

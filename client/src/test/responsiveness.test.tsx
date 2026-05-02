import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Navbar from "../components/Navbar";
import Contact from "../components/sections/Contact";
import Projects from "../components/sections/Projects";

function setViewport(width: number) {
  Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: width });
  window.dispatchEvent(new Event("resize"));
}

describe("Responsiveness", () => {
  describe("Navbar", () => {
    it("renders hamburger button (visible on mobile)", () => {
      setViewport(375);
      render(<Navbar />);
      expect(screen.getByRole("button", { name: /toggle menu/i })).toBeInTheDocument();
    });

    it("renders desktop nav links at all viewports", () => {
      setViewport(1280);
      render(<Navbar />);
      expect(screen.getAllByText("About").length).toBeGreaterThan(0);
    });
  });

  describe("Contact section", () => {
    it("renders contact cards on mobile viewport", () => {
      setViewport(375);
      render(<Contact />);
      expect(screen.getByText("tumelosame2003@gmail.com")).toBeInTheDocument();
      expect(screen.getByText("060 765 2253")).toBeInTheDocument();
    });

    it("renders contact cards on tablet viewport", () => {
      setViewport(768);
      render(<Contact />);
      expect(screen.getByText("tumelosame2003@gmail.com")).toBeInTheDocument();
    });

    it("contact cards use flexWrap for responsive layout", () => {
      const { container } = render(<Contact />);
      const outerFlex = container.querySelector('[style*="flex-wrap"]');
      expect(outerFlex).toBeInTheDocument();
    });
  });

  describe("Projects section", () => {
    it("renders all projects at mobile width", () => {
      setViewport(375);
      render(<Projects />);
      expect(screen.getByText(/LLM-Powered Customer Support Tool/i)).toBeInTheDocument();
      expect(screen.getByText(/Personal Finance Tracker/i)).toBeInTheDocument();
      expect(screen.getByText(/DSA Problem Library/i)).toBeInTheDocument();
    });

    it("project grid uses auto-fit for responsiveness", () => {
      const { container } = render(<Projects />);
      const grid = container.querySelector('[style*="auto-fit"]');
      expect(grid).toBeInTheDocument();
    });
  });

  describe("Section padding consistency", () => {
    it("Contact section has 100px padding", () => {
      const { container } = render(<Contact />);
      const section = container.querySelector("#contact");
      expect(section).toHaveStyle({ padding: "100px 0" });
    });
  });
});

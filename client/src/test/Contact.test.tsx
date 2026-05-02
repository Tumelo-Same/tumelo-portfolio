import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Contact from "../components/sections/Contact";

describe("Contact section", () => {
  it("renders without crashing", () => {
    render(<Contact />);
    expect(screen.getByText(/Let's build something/i)).toBeInTheDocument();
  });

  it("has the correct section id for nav scrolling", () => {
    const { container } = render(<Contact />);
    expect(container.querySelector("#contact")).toBeInTheDocument();
  });

  it("email link points to correct address", () => {
    render(<Contact />);
    const emailLink = screen.getByRole("link", { name: /tumelosame2003@gmail\.com/i });
    expect(emailLink).toHaveAttribute("href", "mailto:tumelosame2003@gmail.com");
  });

  it("GitHub link points to correct profile", () => {
    render(<Contact />);
    const githubLink = screen.getByRole("link", { name: /github\.com\/tumelo-same/i });
    expect(githubLink).toHaveAttribute("href", "https://github.com/tumelo-same");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("LinkedIn link points to correct profile URL", () => {
    render(<Contact />);
    const linkedinLink = screen.getByRole("link", { name: /tumelo-same-5b8593323/i });
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/tumelo-same-5b8593323"
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("phone number is displayed and links correctly", () => {
    render(<Contact />);
    expect(screen.getByText("060 765 2253")).toBeInTheDocument();
    const phoneLink = screen.getByRole("link", { name: /060 765 2253/i });
    expect(phoneLink).toHaveAttribute("href", "tel:+27607652253");
  });

  it("shows availability message", () => {
    render(<Contact />);
    expect(
      screen.getByText(/Available for backend and cloud engineering roles/i)
    ).toBeInTheDocument();
  });

  it("external links have security attributes", () => {
    render(<Contact />);
    const externalLinks = screen
      .getAllByRole("link")
      .filter((l) => l.getAttribute("target") === "_blank");
    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });
});

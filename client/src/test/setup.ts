import "@testing-library/jest-dom";
import { vi } from "vitest";

// jsdom doesn't implement IntersectionObserver.
// Provide a minimal stub — AnimatedSection renders content into the DOM
// at opacity:0 until the observer fires, but getByText finds it regardless.
vi.stubGlobal("IntersectionObserver", vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
})));

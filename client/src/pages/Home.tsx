/*
 * DESIGN: Editorial Modernism — "The Systems Thinker"
 * Main page: Navbar + Hero + About + Experience + Projects + Research + Contact + Footer
 * Background: #0A0F1C throughout. Sections separated by thin borders and generous spacing.
 */

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import ExperienceHero from "@/components/sections/ExperienceHero";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#0A0F1C",
        minHeight: "100vh",
        color: "#E5E7EB",
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceHero />
        <Projects />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

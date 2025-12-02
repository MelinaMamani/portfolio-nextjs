import React from "react";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import PROJECTS from "../data/projects";
import TECHS from "../data/technologies";
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto w-full">
        <Hero />
        <TechStack techs={TECHS} />
        <Projects projects={PROJECTS} />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

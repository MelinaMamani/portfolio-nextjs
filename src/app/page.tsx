import React from "react";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import PROJECTS from "../data/projects";
import TECHS from "../data/technologies";
import { getTranslations } from "../lib/i18n";

export default function Home() {
  const t = getTranslations("en");
  const experienceItems = t.experience?.items || [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto w-full">
        <Hero />
        <AboutMe />
        <Experience items={experienceItems} />
        <TechStack techs={TECHS} />
        <Projects projects={PROJECTS} />
      </main>
      <Footer />
    </div>
  );
}

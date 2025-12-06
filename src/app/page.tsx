import React from "react";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import TECHS from "../data/technologies";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto w-full">
        <Hero />
        <Experience />
        <TechStack techs={TECHS} />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

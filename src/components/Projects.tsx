"use client";
import React from "react";
import { useI18n } from "../lib/I18nProvider";
import ProjectCard, { Project } from "./ProjectCard";
import { motion } from "framer-motion";

type Props = {
  projects?: Project[];
};

export default function Projects({ projects = [] }: Props) {
  const { t } = useI18n();

  return (
    <section id="projects" className="container py-12 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-lg font-semibold">{t?.projects?.title ?? ""}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t?.projects?.description ?? ""}</p>

        <motion.div
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {},
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "../lib/I18nProvider";

export type Project = {
  id: string;
  tech: string[];
  link?: string;
};

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const { t } = useI18n();
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col rounded-lg border border-border p-4 bg-card"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-base font-semibold leading-snug">
            {t?.projects?.itemsById?.[project.id]?.name ?? ""}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {t?.projects?.itemsById?.[project.id]?.description ?? ""}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-end">
        {project.link ? (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            {t?.projects?.see_project ?? ""}
          </Link>
        ) : null}
      </div>
    </motion.article>
  );
}

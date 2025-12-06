"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "../lib/I18nProvider";
import type { ProjectItem } from "@/lib/types";

type Props = {
  project: ProjectItem;
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
      <h3 className="text-base font-semibold leading-snug">{project.name}</h3>
      <div className="mt-4 flex flex-wrap gap-3 justify-end">
        {project.links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            target="_blank"
            className="text-sm font-medium text-primary hover:underline"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </motion.article>
  );
}

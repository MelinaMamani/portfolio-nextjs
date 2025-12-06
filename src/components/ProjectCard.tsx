"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { ProjectItem } from "@/lib/types";

type Props = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ scale: 1.02 }}
      className="bg-(--accent) flex flex-col rounded-lg border border-border p-4 bg-card text-black shadow hover:shadow-md transition-shadow"
    >
      {/* Imagen */}
      <div className="relative w-full h-48 rounded overflow-hidden mb-4">
        <Image
          src={project.imageSrc}
          alt={project.imagesAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Título */}
      <h3 className="text-base font-semibold leading-snug text-foreground">
        {project.name}
      </h3>

      {/* Links */}
      <div className="mt-4 flex flex-wrap gap-3">
        {project.links.map((link, idx) => (
          <Link
            key={link.url}
            href={link.url}
            target="_blank"
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            {idx === 0 && <ExternalLink size={16} />}
            {link.text}
          </Link>
        ))}
      </div>
    </motion.article>
  );
}

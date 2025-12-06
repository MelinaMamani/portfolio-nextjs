"use client";
import React, { useState } from "react";
import { useI18n } from "../lib/I18nProvider";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ExperienceItem } from "../lib/types";

type SortOrder = "desc" | "asc";

export default function Experience() {
  const { t } = useI18n();
  const items = (t?.experience?.items as ExperienceItem[]) ?? [];

  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const sortedItems = sortOrder === "desc" ? [...items].reverse() : items;

  return (
    <section id="experience" className="container py-12 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between gap-4 mb-2">
          <h2 className="text-lg font-semibold">{t?.experience?.title}</h2>

          <div className="flex gap-2">
            <button
              onClick={() => setSortOrder("desc")}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-medium transition-colors ${
                sortOrder === "desc"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-card"
              }`}
            >
              <ChevronUp size={14} />
              {t?.experience?.newerBtn}
            </button>

            <button
              onClick={() => setSortOrder("asc")}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-medium transition-colors ${
                sortOrder === "asc"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-card"
              }`}
            >
              <ChevronDown size={14} />
              {t?.experience?.olderBtn}
            </button>
          </div>
        </div>

        <div className="mt-8 relative">
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-linear-to-b from-primary via-border to-primary" />

            {sortedItems.map((exp: ExperienceItem, idx: number) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="mb-8 relative group"
              >
                <div className="absolute -left-7 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="pl-2 pt-1 pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                    <h3 className="text-base font-semibold">{exp.place}</h3>
                    <span className="text-xs font-medium text-primary">
                      {exp.date}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {exp.paragraphs.map((p: string, i: number) => (
                      <p
                        key={i}
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

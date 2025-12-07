"use client";
import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/I18nProvider";
import { ExperienceItem } from "@/lib/types";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { t } = useI18n();
  const items = (t?.experience?.items as ExperienceItem[]) ?? [];
  const colors = ["var(--primary)", "var(--accent)"];

  return (
    <section id="experience" className="container py-16 px-6">
      <h2 className="text-lg font-semibold mb-10 text-center text-foreground">
        {t?.experience?.title}
      </h2>

      <div
        className="space-y-8 relative
             before:absolute before:top-0 before:bottom-0 
             before:left-5 md:before:left-1/2 md:before:-translate-x-1/2
             before:w-1 before:bg-white before:z-0"
      >
        {items.map((exp: ExperienceItem, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group z-10"
          >
            {/* Icon */}
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
              style={{
                backgroundColor: colors[idx % colors.length],
                color: "var(--foreground)",
              }}
            >
              <Briefcase size={18} strokeWidth={2} />
            </div>

            {/* Card */}
            <div
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-4 rounded border border-border shadow ml-4 md:ml-0"
              role="article"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
                <div className="font-bold text-foreground">{exp.place}</div>
                <time className="font-medium text-primary">{exp.date}</time>
              </div>

              <div className="space-y-2 text-muted-foreground">
                {exp.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

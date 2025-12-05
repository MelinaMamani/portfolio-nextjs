"use client";
import React from "react";
import { useI18n } from "../lib/I18nProvider";
import { motion } from "framer-motion";

type Props = {
  items?: Array<{
    role: string;
    date: string;
    paragraphs: string[];
    links?: Record<string, string>;
  }>;
};

export default function Experience({ items = [] }: Props) {
  const { t } = useI18n();

  return (
    <section id="experience" className="container py-12 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-lg font-semibold">{t?.experience?.title ?? ""}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t?.experience?.description ?? ""}
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {},
          }}
          className="mt-6 space-y-8"
        >
          {items.length === 0 ? (
            <div className="text-sm text-muted-foreground">
              {t?.experience?.no_experience ?? ""}
            </div>
          ) : (
            items.map((exp, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="flex flex-col rounded-lg border border-border p-4 bg-card"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-base font-semibold">{exp.role}</h3>
                  <span className="text-xs font-medium text-muted-foreground">
                    {exp.date}
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  {exp.paragraphs.map((para, pidx) => (
                    <p key={pidx} className="text-sm text-muted-foreground leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {exp.links && Object.keys(exp.links).length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {Object.entries(exp.links).map(([key, url]) => (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        {url}
                      </a>
                    ))}
                  </div>
                )}
              </motion.article>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}

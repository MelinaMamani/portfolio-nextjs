"use client";
import React from "react";
import { useI18n } from "../lib/I18nProvider";
import { motion } from "framer-motion";

type Props = {
  children?: React.ReactNode;
};

export default function AboutMe({ children }: Props) {
  const { t } = useI18n();
  const paragraphs = t?.about?.paragraphs || [];

  return (
    <section id="about" className="container py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl"
      >
        <h2 className="text-lg font-semibold">{t?.about?.title}</h2>
        <div className="mt-4 space-y-3">
          {paragraphs.map((para: string, idx: number) => (
            <p
              key={idx}
              className="text-sm text-muted-foreground leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>
        {children ? <div className="mt-6">{children}</div> : null}
      </motion.div>
    </section>
  );
}

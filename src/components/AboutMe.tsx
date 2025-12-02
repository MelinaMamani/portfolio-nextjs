"use client";
import React from "react";
import { useI18n } from "../lib/I18nProvider";
import { motion } from "framer-motion";

type Props = {
  children?: React.ReactNode;
  highlight?: string;
};

export default function AboutMe({
  children,
  highlight,
}: Props) {
  const { t } = useI18n();
  const text = highlight ?? t?.about?.description;
  return (
    <section className="container py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl"
      >
        <h2 className="text-lg font-semibold">{t?.about?.title ?? "Sobre mí"}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{text}</p>
        {children ? <div className="mt-3">{children}</div> : null}
      </motion.div>
    </section>
  );
}

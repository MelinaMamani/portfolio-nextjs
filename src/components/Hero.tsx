"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useI18n } from "../lib/I18nProvider";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="container py-16 px-6 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center sm:text-left"
      >
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{t?.hero?.greeting ?? ""}</h1>
        <p className="mt-2 text-lg font-medium text-muted sm:text-xl">{t?.hero?.subtitle}</p>
        {/* Hero description intentionally empty - use subtitle and about sections for detailed text */}
        <div className="mt-6 flex justify-center gap-3 sm:justify-start">
          <Link
            href="#projects"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:scale-[1.02]"
          >
            {t?.hero?.see_projects ?? ""}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

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
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          {t?.hero?.greeting}
        </h1>

        {/* CTA buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
          <Link
            href="#experience"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:scale-[1.02]"
          >
            {t?.hero?.cta}
          </Link>

          <Link
            href="#about"
            className="inline-flex items-center rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition hover:scale-[1.02]"
          >
            {t?.hero?.secondaryCta}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useI18n } from "../lib/I18nProvider";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="min-h-screen flex items-center py-16 px-6 pt-24 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex flex-col-reverse items-center gap-8 sm:flex-row sm:items-start sm:gap-12 max-w-5xl"
      >
        {/* Texto */}
        <div className="text-center sm:text-left flex-1">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            {t?.hero?.greeting.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <p className="mt-4 text-muted-foreground">{t?.hero?.aboutMe}</p>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
            <Link
              href="#experience"
              className="bg-(--primary) inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:scale-[1.02]"
            >
              {t?.hero?.cta}
            </Link>

            <Link
              href={t?.hero?.secondaryLinkCta}
              className="inline-flex items-center rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition hover:scale-[1.02]"
            >
              {t?.hero?.secondaryCta}
            </Link>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/hero/me.jpeg"
            alt={t?.hero?.profileImageAlt}
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

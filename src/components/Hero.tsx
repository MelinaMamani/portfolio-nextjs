"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useI18n } from "@/lib/I18nProvider";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="flex items-start py-8 px-6 pt-24 pb-12 sm:min-h-screen sm:items-center sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          mx-auto
          w-full
          max-w-md sm:max-w-5xl
          flex flex-col-reverse items-center gap-8
          sm:flex-row sm:items-start sm:gap-12
        "
      >
        {/* Texto */}
        <div className="text-center sm:text-left flex-1 w-full">
          <h1 className="text-2xl font-bold leading-snug md:text-4xl md:leading-tight break-words">
            {t?.hero?.greeting.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-2">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (wordIndex * 10 + charIndex) * 0.05 }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <p className="mt-4 text-base md:text-lg text-muted-foreground break-words">
            {t?.hero?.aboutMe}
          </p>

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
              target="_blank"
              rel="noopener noreferrer"
            >
              {t?.hero?.secondaryCta}
            </Link>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
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

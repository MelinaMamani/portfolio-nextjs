"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "../lib/I18nProvider";
import clsx from "clsx";

export default function Header() {
  const { locale, setLocale, t } = useI18n();

  return (
    <header className="border-b border-border bg-card" role="banner">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-semibold hover:opacity-80 transition"
            aria-label="Go to homepage"
          >
            {t?.nav?.brand}
          </Link>

          <nav
            className="hidden items-center gap-3 sm:flex"
            aria-label="Main navigation"
          >
            <Link
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground hover:underline transition"
            >
              {t?.nav?.menu?.projects}
            </Link>

            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground hover:underline transition"
            >
              {t?.nav?.menu?.about}
            </Link>
          </nav>
        </div>

        {/* Language selector */}
        <div className="flex items-center gap-2" aria-label="Language selector">
          <button
            aria-pressed={locale === "en"}
            onClick={() => setLocale("en")}
            className={clsx(
              "px-3 py-1 rounded text-sm transition",
              locale === "en"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            {t?.nav?.language?.en}
          </button>

          <button
            aria-pressed={locale === "es"}
            onClick={() => setLocale("es")}
            className={clsx(
              "px-3 py-1 rounded text-sm transition",
              locale === "es"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            {t?.nav?.language?.es}
          </button>
        </div>
      </div>
    </header>
  );
}

"use client";
import React from "react";
import Link from "next/link";
import { useI18n } from "../lib/I18nProvider";
import clsx from "clsx";

export default function Header() {
  const { locale, setLocale, t } = useI18n();

  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm font-semibold">
            {t?.nav?.brand ?? ""}
          </Link>
          <nav className="hidden items-center gap-3 sm:flex">
            <Link href="#projects" className="text-sm text-muted-foreground hover:underline">
              {t?.nav?.menu?.projects ?? ""}
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground hover:underline">
              {t?.nav?.menu?.about ?? ""}
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-pressed={locale === "en"}
            onClick={() => setLocale("en")}
            className={clsx(
              "px-3 py-1 rounded text-sm",
              locale === "en" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            )}
          >
            {t?.nav?.language?.en ?? ""}
          </button>
          <button
            aria-pressed={locale === "es"}
            onClick={() => setLocale("es")}
            className={clsx(
              "px-3 py-1 rounded text-sm",
              locale === "es" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            )}
          >
            {t?.nav?.language?.es ?? ""}
          </button>
        </div>
      </div>
    </header>
  );
}

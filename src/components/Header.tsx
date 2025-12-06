"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/I18nProvider";
import clsx from "clsx";
import { Menu, X, Home } from "lucide-react";
import { MenuItem } from "@/lib/types";

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-(--primary)
        shadow-md
      "
      role="banner"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition"
            aria-label="Go to homepage"
          >
            <Home className="hidden sm:block w-6 h-6 text-white" />
            <span className="block sm:hidden text-sm font-semibold text-white">
              {t?.nav?.brand}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-3 sm:flex"
            aria-label="Main navigation"
          >
            {t?.nav?.menu?.map((item: MenuItem) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-sm hover:underline transition"
              >
                {item.text}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          {(["en", "es"] as const).map((lng) => (
            <button
              key={lng}
              aria-pressed={locale === lng}
              onClick={() => setLocale(lng)}
              className={clsx(
                "px-3 py-1 rounded text-sm transition",
                locale === lng
                  ? "bg-white text-black shadow-sm"
                  : "bg-black/20 text-white hover:bg-black/30"
              )}
            >
              {t?.nav?.language?.[lng]}
            </button>
          ))}
        </div>

        <button
          className="sm:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div
        className={clsx(
          "sm:hidden overflow-hidden transition-all duration-300 ease-in-out bg-(--primary)",
          open ? "max-h-64 opacity-100 pb-4 px-6" : "max-h-0 opacity-0 px-6"
        )}
      >
        <div className="flex flex-col gap-4 pt-2">
          {t?.nav?.menu?.map((item: MenuItem) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white hover:underline transition"
            >
              {item.text}
            </Link>
          ))}

          <div className="flex gap-2 pt-2">
            {(["en", "es"] as const).map((lng) => (
              <button
                key={lng}
                aria-pressed={locale === lng}
                onClick={() => {
                  setLocale(lng);
                  setOpen(false);
                }}
                className={clsx(
                  "px-3 py-1 rounded text-sm transition",
                  locale === lng
                    ? "bg-white text-black shadow-sm"
                    : "bg-white/30 text-white hover:bg-white/40"
                )}
              >
                {t?.nav?.language?.[lng]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

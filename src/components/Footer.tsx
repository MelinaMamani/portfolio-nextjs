"use client";
import React from "react";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useI18n } from "../lib/I18nProvider";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 sm:flex-row">
        <div className="text-sm text-muted-foreground">
          {t?.footer?.copyright?.replace?.("{{year}}", String(year)) ??
            `© ${year} Melina Mamaní`}
        </div>
        <div className="flex gap-3">
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub size={20} />
            <span className="sr-only">{t?.footer?.github ?? "GitHub"}</span>
          </Link>
          <Link
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin size={20} />
            <span className="sr-only">{t?.footer?.linkedin ?? "LinkedIn"}</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

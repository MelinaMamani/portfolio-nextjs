"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "./i18n";
import { getTranslations } from "./i18n";
import type { Translations } from "./types";

type I18nContextShape = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
};

const I18nContext = createContext<I18nContextShape | undefined>(undefined);

type Props = {
  defaultLocale?: Locale;
  children: React.ReactNode;
};

export function I18nProvider({ defaultLocale = "en", children }: Props) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return defaultLocale;
    const stored = localStorage.getItem("locale");
    if (stored === "en" || stored === "es") return stored as Locale;
    return defaultLocale;
  });

  const t = React.useMemo(() => getTranslations(locale), [locale]);

  useEffect(() => {
    try {
      localStorage.setItem("locale", locale);
    } catch {
      // ignore
    }
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export default I18nProvider;

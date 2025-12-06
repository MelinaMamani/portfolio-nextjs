"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
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
  locale: Locale;
  children: React.ReactNode;
};

export function I18nProvider({ locale: serverLocale, children }: Props) {
  const [locale, setLocale] = useState<Locale>(serverLocale);

  const t = useMemo(() => getTranslations(locale), [locale]);

  const changeLocale = (l: Locale) => {
    setLocale(l);
    try {
      localStorage.setItem("locale", l);
    } catch {}
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale: changeLocale, t }}>
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
